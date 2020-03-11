
var simpleSound = new Audio('/resources/media/Tiny_Button_Push-SoundBible.com-513260752.mp3');

if(!String.linkify) {
    String.prototype.linkify = function() {

        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;

        // www. sans http:// or https://
        var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

        // Email addresses
        var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;

        return this
            .replace(urlPattern, '<a href="$&" target="_blank">$&</a>')
            .replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank"$2</a>')
            .replace(emailAddressPattern, '<a href="mailto:$&" target="_blank">$&</a>');
    };
}

/**
 * Creates an instance of a PusherChatWidget, binds to a chat channel on the pusher instance and
 * and creates the UI for the chat widget.
 *
 * @param {Pusher} pusher The Pusher object used for the chat widget.
 * @param {Map} options A hash of key value options for the widget.
 */
function PusherChatWidget(pusher, options) {
  PusherChatWidget.instances.push(this);
  // var self = this;
  var theWidget = this;
  var typingMessageType = 'user-typing';

  theWidget._pusher = pusher;
  theWidget._autoScroll = true;
  
  options = options || {};
  theWidget.settings = $.extend({
    maxItems: 50, // max items to show in the UI. Items beyond this limit will be removed as new ones come in.
    chatEndPoint: '/support/resources/library/pusher/chat.php', // the end point where chat messages should be sanitized and then triggered
    channelName: document.location.href, // the name of the channel the chat will take place on
    clientSite: 'cafetalk',
    customUserId: null,
    referrer: null,
    visitorName: null,
    visitorEmail: null,
    appendTo: document.body,  // A jQuery selector or object. Defines where the element should be appended to
    userRole: 'enduser',      // enduser or support
    responderOnline: false,   // Whether or not support staff are online
    locale: 'en',             // Inherits locale
    debug: false 
  }, options);
  
  if(theWidget.settings.debug && !Pusher.log) {
    Pusher.log = function(msg) {
      if(console && console.log) {
        console.log(msg);
      }
    }
  }
  
  // remove any unsupported characters from the chat channel name
  // see: http://pusher.com/docs/client_api_guide/client_channels#naming-channels
  theWidget.settings.channelName = PusherChatWidget.getValidChannelName(theWidget.settings.channelName);
  
  theWidget._chatChannel = theWidget._pusher.subscribe(theWidget.settings.channelName);
  theWidget._lastMessage = ""; // Keep the last message to prevent a double send

  theWidget._chatChannel.bind('chat_message', function(data) {
    theWidget._chatMessageReceived(data);
  });


  // Detect if other user is typing 
  if(theWidget.settings.userRole=='enduser'){
    typingMessageType = 'support-typing';
  } else if(theWidget.settings.userRole=='support') {
    typingMessageType = 'enduser-typing';    
  }


  theWidget._chatChannel.bind(typingMessageType, function(data) {
    theWidget._messageTyping(data);
  });    

  theWidget._chatChannel.bind('pusher:subscription_succeeded', function() {
    // console.log("Subscription successful");
    theWidget._retrieveMessages();
  })

  // console.log("-----------------");
  // console.log("channelName:" + theWidget.settings.channelName);
  // console.log("userRole:" + theWidget.settings.userRole);
  // console.log("typingMessageType:" + typingMessageType);
  // console.log("locale:" + theWidget.settings.locale);
  // console.log("clientSite:" + theWidget.settings.clientSite);
  // console.log("customUserId:" + theWidget.settings.customUserId);
    
  theWidget._itemCount = 0;

  if(true){
    // Experimental code
    // Bypasses the PusherChatWidget._createHTML function altogether 
    var data = {
        userRole: theWidget.settings.userRole, 
        responderOnline: theWidget.settings.responderOnline,
        channel:theWidget.settings.channelName,
        visitorName:theWidget.settings.visitorName,
        visitorEmail:theWidget.settings.visitorEmail,
        clientSite:theWidget.settings.clientSite

      };

    $.post('/support/resources/do/get_chat_form/', data, function(json){

      if ( json.status == 1 ) {
        html = json.html;
        var widget = $(html);
        $(theWidget.settings.appendTo).append(widget);
        theWidget._widget = widget;
        theWidget._nicknameEl = theWidget._widget.find('input[name=nickname]');

        theWidget._emailEl = theWidget._widget.find('input[name=email]');  
        theWidget._messageInputEl = theWidget._widget.find('textarea');
        theWidget._messagesEl = theWidget._widget.find('ul');
        theWidget._elementsToHide = theWidget._widget.find('.hideOnChatStart');
        theWidget._typingIndicator = theWidget._widget.find('#typing-indicator');
        theWidget._requestEl = theWidget._widget.find('input[name=request]');
        
        theWidget._widget.find('button').click(function() {
          theWidget._sendChatButtonClicked();
        })
        


        var messageEl = theWidget._messagesEl;

        $('#chatWidgetWrapper').animate({scrollTop: $('#sbChatWidgets').height()}, 800);
        
        theWidget._startTimeMonitor();

      } else {
        alert(json.error_msgs);
      }
    }, "json"); 
  } else {
    // Original code (_nicknameEl etc can not bind if this._widget is acquired asynchronously in PusherChatWidget)
    theWidget._widget = PusherChatWidget._createHTML(theWidget.settings.appendTo, theWidget.settings.locale);
    theWidget._nicknameEl = theWidget._widget.find('input[name=nickname]');
    theWidget._emailEl = theWidget._widget.find('input[name=email]');  
    theWidget._messageInputEl = theWidget._widget.find('textarea');
    theWidget._messagesEl = theWidget._widget.find('ul');
    
    theWidget._widget.find('button').click(function() {
      theWidget._sendChatButtonClicked();
    })
    
    var messageEl = theWidget._messagesEl;
    messageEl.scroll(function() {
      var el = messageEl.get(0);
      var scrollableHeight = (el.scrollHeight - messageEl.height());
      theWidget._autoScroll = ( scrollableHeight === messageEl.scrollTop() );
    });
    
    theWidget._startTimeMonitor();
  }

};
PusherChatWidget.instances = [];

/* @private */
PusherChatWidget.prototype._chatMessageReceived = function(data) {
  var self = this;

  if(this._itemCount === 0) {
    // Do not replace the messages
    // this._messagesEl.html(''); 
    // this._elementsToHide.html(''); 
    $(".hideOnChatStart").hide();
    $(".pusher-chat-widget-header").hide();
  }
  
  var messageEl = PusherChatWidget._buildListItem(data, self.settings.locale);
  messageEl.hide();
  if(self.settings.userRole != data.user_role){
    simpleSound.play();
  }
  
  this._messagesEl.append(messageEl);
  messageEl.slideDown(function() {
    if(self._autoScroll) {
      // $('html, body').animate({scrollTop: '+='+ messageEl.height() +'px'}, 800);
      $('#chatWidgetWrapper').animate({scrollTop: '+='+ messageEl.height() +'px'}, 200);

    }
  });
  
  ++this._itemCount;
  
  if(this._itemCount > this.settings.maxItems) {
    /* get first li of list */
    this._messagesEl.children(':first').slideUp(function() {
      $(this).remove();
    });
  }
};

/* @private */
PusherChatWidget.prototype._messageTyping = function(data) {
  var self = this;
  
  if(data.state=='typing'){
    self._typingIndicator.show();
  } else {
    self._typingIndicator.hide();
  }


};

/* @private */
PusherChatWidget.prototype._sendChatButtonClicked = function() {
  var nickname = $.trim(this._nicknameEl.val()); // optional
  var email = $.trim(this._emailEl.val()); // optional
  var request = $.trim(this._requestEl.val()); // optional

  switch(this.settings.locale) {
      case 'ja':
          var texts = {
            'name_required':'お名前をご入力ください',
            'email_required':'メールアドレスをご入力ください',
            'message_required':'メッセージをご入力ください',
            'generic_visitor_name':'訪問者'

          }
          break;
      default:
          var texts = {
            'name_required':'Please enter your name',
            'email_required':'Please enter your email',
            'message_required':'Please supply a chat message',
            'generic_visitor_name':' Visitor'
          }
  }  

  // console.log("------------------responders " + this.settings.responderOnline);
  // console.log("------------------role " + this.settings.userRole);
  // console.log("------------------email " + email);
  // console.log("------------------data-required " + this._emailEl.data('required'));

  if(!nickname) {
    nickname = this.settings.clientSite + texts['generic_visitor_name'];
    // alert(texts['name_required']);
    // return;
  }

  // if(!this.settings.responderOnline && this.settings.userRole=='enduser' && !email){
  //   // If no responders are currently online
  //   alert(texts['email_required']);
  //   return;
    
  // }

  if(this._emailEl.data('required') && !email){
    alert(texts['email_required']);
    return;
  }

  var message = $.trim(this._messageInputEl.val());
  if(!message) {
    alert(texts['message_required']);
    return;
  }


  message = message.replace("mars.cafetalk", "cafetalk");

  var chatInfo = {
    nickname: nickname,
    email: email,
    request: request,
    text: message
  };
  this._sendChatMessage(chatInfo);
};

/* @private */
PusherChatWidget.prototype._sendChatMessage = function(data) {
  var self = this;

  if(this._lastMessage != data.text){
    // Only send the message if different from the last
    this._messageInputEl.attr('readonly', 'readonly');
    $.ajax({
      url: this.settings.chatEndPoint,
      type: 'post',
      dataType: 'json',
      data: {
        'chat_info': data,
        'channel': this.settings.channelName, // SB-Specific (pass channel to end point)
        'client_site': this.settings.clientSite,
        'custom_user_id': this.settings.customUserId,
        'referrer': this.settings.referrer,
        'responder_online': this.settings.responderOnline,
        'user_role': this.settings.userRole   // 
      },
      complete: function(xhr, status) {
        Pusher.log('Chat message sent. Result: ' + status + ' : ' + xhr.responseText);
        if(xhr.status === 200) {
          self._elementsToHide.hide();
          self._messageInputEl.val('');
        }
        self._messageInputEl.removeAttr('readonly');
      },
      success: function(result) {
        // var activity = result.activity;
        // var imageInfo = activity.actor.image;
        // var image = $('<div class="pusher-chat-widget-current-user-image">' +
        //                 '<img src="' + imageInfo.url + '" width="32" height="32" />' +
        //               '</div>');
        // var name = $('<div class="pusher-chat-widget-current-user-name">' + activity.actor.displayName.replace(/\\'/g, "'") + '</div>');
        // var header = self._widget.find('.pusher-chat-widget-header');
        // header.html(image).append(name);
      }
    })
  }

  this._lastMessage = data.text; 


};

/* @private */
PusherChatWidget.prototype._startTimeMonitor = function() {
  var self = this;
  
  setInterval(function() {
    self._messagesEl.children('.activity').each(function(i, el) {
      var timeEl = $(el).find('div.timestamp');
      var time = timeEl.attr('data-activity-published');
      var newDesc = PusherChatWidget.timeToDescription(time, self.settings.locale);
      timeEl.text(newDesc);
    });
  }, 10 * 1000)
};

/* @private */
PusherChatWidget._createHTML = function(appendTo, locale) {
  var self = this;
  var data = {};
  var html = '';
  $.post('/support/resources/do/get_chat_form/', data, function(json){
    if ( json.status == 1 ) {;
      // var widget = $($.parseHTML(json.html));
      var widget = $(json.html);

      $(appendTo).append(widget);
      return widget;        
    } else {
      alert(json.error_msgs);
    }
  }, "json"); 


};

/* @private */
PusherChatWidget._buildListItem = function(activity, locale) {
  var li = $('<li class="activity role-'+activity.user_role+'"></li>');
  li.attr('data-activity-id', activity.id);
  var item = $('<div class="stream-item-content"></div>');
  li.append(item);
  var profile = '<div class="profile-section">';
  if(activity.actor.image){
    var imageInfo = activity.actor.image;
    profile += '<div class="image"><img src="' + imageInfo.url + '"/></div>';   
  }

  //profile += '<div class="user-name">' + activity.actor.displayName + '</div>';
                  //'<a class="screen-name" title="' + activity.actor.displayName.replace(/\\'/g, "'") + '">' + activity.actor.displayName.replace(/\\'/g, "'") + '</a>' +
  profile = $(profile);
  item.append(profile);
  var textBody = activity.body.replace(/\\('|&quot;)/g, '$1');
  textBody = textBody.linkify();
  var content = $('<div class="content-section"><div class="user-name">' + activity.actor.displayName + '</div><div class="message">' + textBody + '</div>' 
    + '<div class="timestamp" title="' + activity.published + '" data-activity-published="' + activity.published + '">' + PusherChatWidget.timeToDescription(activity.published, locale) + '</div>'
    + '</div>');

  item.append(content);
  
  // var time = $('<div class="activity-row">' + 
  //               '<a ' + (activity.link?'href="' + activity.link + '" ':'') + ' class="timestamp">' +
  //                 '<span title="' + activity.published + '" data-activity-published="' + activity.published + '">' + PusherChatWidget.timeToDescription(activity.published) + '</span>' +
  //               '</a>' +
  //               '<span class="activity-actions">' +
  //                 /*'<span class="tweet-action action-favorite">' +
  //                   '<a href="#" class="like-action" data-activity="like" title="Like"><span><i></i><b>Like</b></span></a>' +
  //                 '</span>' +*/
  //               '</span>' +
  //             '</div>');
  // content.append(time);
                
  
  return li;
};

/**
 * converts a string into something which can be used as a valid channel name in Pusher.
 * @param {String} from The string to be converted.
 *
 * @see http://pusher.com/docs/client_api_guide/client_channels#naming-channels
 */
PusherChatWidget.getValidChannelName = function(from) {
  var pattern = /(\W)+/g;
  return from.replace(pattern, '-');
}

/**
 * converts a string or date parameter into a 'social media style'
 * time description.
 */
PusherChatWidget.timeToDescription = function(time,locale) {

  switch(locale) {
      case 'ja':
          var texts = {
            'now': 'たった今',
            'second':'秒',
            'seconds':'秒',
            'minute':'分',
            'minutes':'分',
            'hour':'時間',
            'hours':'時間',
            'ago':'前',
            'about':'約'
          }
          break;
      default:
          var texts = {
            'now': 'just now',
            'second':' second',
            'seconds':' seconds',
            'minute':' minute',
            'minutes':' minutes',
            'hour':' hour',
            'hours':' hours',
            'ago':' ago',
            'about':'about '
          }
  }  

  if(time instanceof Date === false) {
    time = new Date(Date.parse(time));
  }
  var desc = "dunno";
  var now = new Date();
  var howLongAgo = (now - time);
  var seconds = Math.round(howLongAgo/1000);
  var minutes = Math.round(seconds/60);
  var hours = Math.round(minutes/60);
  if(seconds === 0) {
    desc = texts['now'];
  }
  else if(minutes < 1) {
    desc = seconds +  (seconds !== 1? texts['seconds'] : texts['second']) + texts['ago'];
  }
  else if(minutes < 60) {
    desc = texts['about'] + minutes + (minutes !== 1? texts['minutes'] : texts['minute']) + texts['ago'];
  }
  else if(hours < 24) {
    desc = texts['about'] + hours + (hours !== 1? texts['hours'] : texts['hour']) + texts['ago'];
  }
  else {
    desc = time.getDay() + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][time.getMonth()]
  }
  return desc;
};

PusherChatWidget.prototype._retrieveMessages = function() {
  // console.log("inside retrieve messages");
  // var nickname = $.trim(this._nicknameEl.val()); // optional
  // var email = $.trim(this._emailEl.val()); // optional
  // if(!nickname) {
  //   alert('please supply a nickname');
  //   return;
  // }
  // var message = $.trim(this._messageInputEl.val());
  // if(!message) {
  //   alert('please supply a chat message');
  //   return;
  // }

  // var chatInfo = {
  //   nickname: nickname,
  //   email: email,
  //   text: message
  // };
  // this._sendChatMessage(chatInfo);
};


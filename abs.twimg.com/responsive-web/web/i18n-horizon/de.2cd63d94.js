window.__SCRIPTS_LOADED__["i18n-rweb"]&&((window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"3XMw":function(e,t,r){"use strict";var n,o,a={};Object.defineProperty(t,"_register",{value:function(e,t){if(a[e]=a[e]||{},Object.defineProperty(this,"language",{get:function(){return n},set:function(e){n=e,o=a[e]},enumerable:!0,configurable:!0}).language=e,void 0!==t){var r=Object.getOwnPropertyNames(t)[0],i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(o,r,i),r in this||Object.defineProperty(this,r,{get:function(){return o[r]}})}return function(t,r){a[e][t]=r,t in this||Object.defineProperty(this,t,{get:function(){return o[t]},enumerable:!0})}.bind(this)},enumerable:!1})},maj8:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,d=i(e),c=1;c<arguments.length;c++){for(var s in r=Object(arguments[c]))o.call(r,s)&&(d[s]=r[s]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(d[u[f]]=r[u[f]])}}return d}},vFaF:function(e,t,r){"use strict";var n=r("3XMw")._register("de"),o=function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"};function a(e,t,r){switch(o(e)){case"one":return t;default:return r}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}n("a76a4712","360"),n("a54d17e1","Bild wird geladen"),n("c07c6beb","Folgt Dir"),n("e618ec06","Geschützter Account"),n("e15e663b","Übersetzer-Account"),n("j094281e","Verifizierter Account"),n("fb79efe3","Spielen"),n("g37da5a4","Liste"),n("h19e8033","Erinnerung einrichten"),n("j33a92ca","Erinnerung eingerichtet"),n("e6580b36","Weiter"),n("g4c9627f","Zurück"),n("f4c9593e","Abbrechen"),n("a97eb7e8","Ja"),n("adbb1147","Tag"),n("ie177cc2","Monat"),n("f6a4f704","Jahr"),n("h500aec4","Januar"),n("i0bd7830","Februar"),n("dd2ba833","März"),n("h41112c4","April"),n("c44ba222","Mai"),n("e085b629","Juni"),n("j23444db","Juli"),n("cf8294b7","August"),n("h235e0a0","September"),n("fe917e4d","Oktober"),n("dd341450","November"),n("g27e0cbd","Dezember"),n("c6d63ac0","Schließen"),n("e091ac1d","Erneut versuchen"),n("ec156656","Etwas ist schiefgelaufen."),n("fd7eb69c","Folgen"),n("fd87318c","Folge ich"),n("ef5e2456","Entfolgen"),n("g061efcb",(function(e){return e.title+" entfolgen?"})),n("e0e1ff4e","Zoome bei deinem Bild hinein oder heraus."),n("de15098a","Seitenverhältnis: Original"),n("aa261873","Seitenverhältnis: breit"),n("a1e564e5","Seitenverhältnis: quadratisch"),n("fd7d9019","Mehr erfahren"),n("fd4568f3","Follower, die du kennst"),n("h48dfaa0","Gefolgt von niemandem, dem du folgst"),n("b132d5eb",(function(e){return"Gesponsert von "+e.fullName})),n("de4189ab","Gesponsert"),n("a1240b5d","Gesponsert (politisch)"),n("f0c6996b",(function(e){return"Gesponsert (politisch) von "+e.fullName})),n("i8a5ec1d","Gesponsert (Streitfrage)"),n("f3f75b08",(function(e){return"Gesponsert (Streitfrage) von "+e.fullName})),n("a3f00cc9","Zum Aktualisieren ziehen"),n("fb67418f","Jetzt"),n("d53da10e",(function(e){return"vor "+e.amountOfTime})),n("i15cb8fb","Du hast retweetet"),n("d5d986db","Angehefteter Tweet"),n("c88df33b",(function(e){return e.team+" hat gewonnen"})),n("dd73a557","Demnächst"),n("hd04d503","Live"),n("d2a66c51","Endstand"),n("b96a228d","Verschoben"),n("ed6e347e","Abgesagt"),n("a4bf5188","Heute"),n("dbb73a23","Morgen"),n("ba8d1339",(function(e){return""+e.date})),n("c4d9bd93",(function(e){return""+e.place})),n("ed869ddd","und"),n("e49eaf2c",(function(e){return"und "+a(e.othersCount,"1 weiteren",e.othersCount+" weitere")})),n("b90bebc4","und"),n("if7c4751",(function(e){return"und "+a(e.othersCount,"1 weiteren",e.othersCount+" weitere")})),n("i5301171","Personen in der Unterhaltung anzeigen"),n("de4b1402",(function(e){return""+e.formattedCount})),n("cbc41858",(function(e){return"Folge ich"})),n("d1e8c189",(function(e){return""+e.formattedCount})),n("c94a69ff",(function(e){return"Follower"})),n("e17680be","Video-Adresse kopieren"),n("ad548e46","GIF-Adresse kopieren"),n("e192cb7c","Video"),n("ef8a23d7","Live-Video"),n("e5a681fa",(function(e){return e.locVideoType+" abspielen"})),n("afea008d",(function(e){return e.locVideoType+" abspielen"})),n("gcd7f40a",(function(e){return"Dauer: "+e.hoursWord+" "+e.minutesWord+" "+e.secondsWord})),n("ffd04da2",(function(e){return"Beginnt bei "+e.hoursWord+" "+e.minutesWord+" "+e.secondsWord})),n("hce3aca0",(function(e){return e.viewerCount+" Zuschauer"})),n("d06bc93c",(function(e){return e.viewCount+" Aufruf"+a(e.viewCount,"","e")})),n("gb10d97b","Untertitel ausblenden"),n("f265bc9e","Untertitel einblenden"),n("b305f378","Lautstärke"),n("g4c568fa","Lautstärkeregler"),n("c77d46bc","Anzeige"),n("b1e528e2",(function(e){return"Anzeige von "+e.advertiserName})),n("cbf9f3b5","Pause"),n("a86068c2","Erneut abspielen"),n("i769873c","Vollbild"),n("c1d12f51","Vollbildanzeige verlassen"),n("d74e2882","Schieberegler für Spielzeit"),n("e67d871f","Auf Periscope mit Herzen und Chats anzeigen"),n("g5ed862e",(function(e){return e.currentTime+" von "+e.durationTime})),n("d835c4cf","Anzeige überspringen"),n("gf122aa6","Überspringen"),n("iaa9d277",(function(e){return"Anzeige überspringen in "+e.seconds})),n("fffa5395",(function(e){return"Überspringen: "+e.seconds})),n("ea41b2ee",(function(e){return e.volumePercent+" Prozent"})),n("fea81c4f",(function(e){return"Jetzt ansehen auf "+e.trimmedHostname})),n("hbd4aa16",(function(e){return e.trimmedHostname+" besuchen"})),n("j9bb491b","LIVE"),n("ef84b656",(function(e){return"Anzeige · "+e.timeRemaining})),n("a2f8dfa9",(function(e){return"Anzeige von "+e.advertiserName+" · "+e.timeRemaining})),n("f09c5897","AUFZEICHNUNG"),n("ia51a661","Neu laden"),n("afb3a1a6","Das Medium konnte nicht abgespielt werden."),n("f1ff216a","Dieses Live-Video ist beendet."),n("a44c6fe7","Dieses Live-Video ist nicht verfügbar."),n("b9ff639e","Diese Medien wurden aufgrund einer Meldung des Urheberrechtsinhabers deaktiviert."),n("d3adb65c","Dieses Live-Video ist für deinen Standort nicht verfügbar."),n("b2c8c4b6",(function(e){return"Video wegen Urheberrechtsanspruch von "+e.holder+" nicht verfügbar"})),n("b344bd9e","Dieses Video kann in bestimmten Regionen leider nicht aufgerufen werden, bitte warte ein paar Sekunden, während dein Standort ermittelt wird. Dazu müssen die Standorteinstellungen in deinem Browser aktiviert sein."),n("gc211472","Das Video kann nicht in diesem Browser abgespielt werden. Bitte versuche es mit einem anderen Browser."),n("d10d909d","Dieses Video ist an deinem Standort nicht verfügbar."),n("d5581b6c","Dieses Video wurde gelöscht."),n("ea7e7f93","Audioanzeige für Gast"),n("d671fe76","Stummschalten"),n("h4c10f46","Stummschaltung aufheben"),n("dfd3de3a","Als Nächstes"),n("b1c9aed0","Erneut ansehen");var u=r("ERkP");n("I18NFormatMessage",function(e){var t,r,n,o,d;function c(){return e.apply(this,arguments)||this}return r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,c.prototype.render=function(){return u.createElement.apply(u,this[this.props.$i18n].reduce(this.templateReducer,[u.Fragment,null]))},n=c,(o=[{key:"f7f41f53",get:function(){return[this.props.formattedCount+" Mitglied"+a(this.props.count,"","er")]}},{key:"fec5bb7c",get:function(){return["Gefolgt von "]}},{key:"df548250",get:function(){return["Gefolgt von "," und "]}},{key:"efa8cccc",get:function(){return["Gefolgt von ",", "," und "]}},{key:"f3c72f02",get:function(){return["Gefolgt von ",", "," und "," weiteren Personen, denen du folgst"]}},{key:"hb920fa1",get:function(){return[""," hat retweetet"]}},{key:"c3924dbd",get:function(){return["<FormatMessage />: "]}},{key:"cce69761",get:function(){return[""," aus "]}},{key:"f0e3023b",get:function(){return["Antwort an "]}},{key:"deb8dc45",get:function(){return["Antwort an "," "," "]}},{key:"c9fc9996",get:function(){return["Antwort an "," "]}},{key:"e7b105bd",get:function(){return["Antwort an "," "," "," "]}},{key:"fcafadf6",get:function(){return["Antwort an "," "," "]}},{key:"a7609657",get:function(){return[""," "]}},{key:"j6c94d93",get:function(){return[""," "]}},{key:"templateReducer",get:function(){var e=u.Children.toArray(this.props.children);return function(t,r,n){return t.concat(r,e[n])}}}])&&i(n.prototype,o),d&&i(n,d),c}(r("3XMw").I18NFormatMessage||u.Component));var d=r("KQqj");r("5hi7"),r("7TW0"),r("yluK"),r("Fr/T");d._validateParameterTypeNumber,d._validateParameterPresence;var c=d._numberRound,s=(d._numberFormat,d._numberFormatterFn),f=d._pluralGeneratorFn,b=(d._validateParameterTypeDate,d._dateToPartsFormat,d._dateToPartsFormatterFn),p=(d._dateFormat,d._dateFormatterFn),l=d._unitFormatterFn;d.b919509066=s(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",c("truncate"),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0",other:"0"},4:{one:"0",other:"0"},5:{one:"0",other:"0"},6:{one:"0 Mio'.'",other:"0 Mio'.'"},7:{one:"00 Mio'.'",other:"00 Mio'.'"},8:{one:"000 Mio'.'",other:"000 Mio'.'"},9:{one:"0 Mrd'.'",other:"0 Mrd'.'"},10:{one:"00 Mrd'.'",other:"00 Mrd'.'"},11:{one:"000 Mrd'.'",other:"000 Mrd'.'"},12:{one:"0 Bio'.'",other:"0 Bio'.'"},13:{one:"00 Bio'.'",other:"00 Bio'.'"},14:{one:"000 Bio'.'",other:"000 Bio'.'"},maxExponent:14}],d("de").pluralGenerator({})),d.b78210540=s(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",c(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0",other:"0"},4:{one:"0",other:"0"},5:{one:"0",other:"0"},6:{one:"0 Mio'.'",other:"0 Mio'.'"},7:{one:"00 Mio'.'",other:"00 Mio'.'"},8:{one:"000 Mio'.'",other:"000 Mio'.'"},9:{one:"0 Mrd'.'",other:"0 Mrd'.'"},10:{one:"00 Mrd'.'",other:"00 Mrd'.'"},11:{one:"000 Mrd'.'",other:"000 Mrd'.'"},12:{one:"0 Bio'.'",other:"0 Bio'.'"},13:{one:"00 Bio'.'",other:"00 Bio'.'"},14:{one:"000 Bio'.'",other:"000 Bio'.'"},maxExponent:14}],d("de").pluralGenerator({})),d.a1376667805=s(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",c("truncate"),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0",other:"0"},4:{one:"0",other:"0"},5:{one:"0",other:"0"},6:{one:"0 Mio'.'",other:"0 Mio'.'"},7:{one:"00 Mio'.'",other:"00 Mio'.'"},8:{one:"000 Mio'.'",other:"000 Mio'.'"},9:{one:"0 Mrd'.'",other:"0 Mrd'.'"},10:{one:"00 Mrd'.'",other:"00 Mrd'.'"},11:{one:"000 Mrd'.'",other:"000 Mrd'.'"},12:{one:"0 Bio'.'",other:"0 Bio'.'"},13:{one:"00 Bio'.'",other:"00 Bio'.'"},14:{one:"000 Bio'.'",other:"000 Bio'.'"},maxExponent:14}],d("de").pluralGenerator({})),d.b505327166=s(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",c(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),d.b376385760=s(["",,2,0,0,,,,,,"","00","-00","-","",c(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),d.a126395188=s(["",,1,0,0,,,,,,"","0","-0","-","",c(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),d.a1625405296=f((function(e){var t=!String(e).split(".")[1];return 1==e&&t?"one":"other"})),d.a1187699292=b({1:d("de").numberFormatter({raw:"0"})},{pattern:"d. MMM",timeSeparator:":",months:{M:{3:{1:"Jan.",2:"Feb.",3:"März",4:"Apr.",5:"Mai",6:"Juni",7:"Juli",8:"Aug.",9:"Sep.",10:"Okt.",11:"Nov.",12:"Dez."}}}}),d.a1813821953=b({1:d("de").numberFormatter({raw:"0"})},{pattern:"d. MMM y",timeSeparator:":",months:{M:{3:{1:"Jan.",2:"Feb.",3:"März",4:"Apr.",5:"Mai",6:"Juni",7:"Juli",8:"Aug.",9:"Sep.",10:"Okt.",11:"Nov.",12:"Dez."}}}}),d.b956155346=b({1:d("de").numberFormatter({raw:"0"}),2:d("de").numberFormatter({raw:"00"})},{pattern:"h:mm a",timeSeparator:":",dayPeriods:{am:"vorm.",pm:"nachm."}}),d.a796292211=p(d("de").dateToPartsFormatter({skeleton:"MMMd"})),d.b1729862966=p(d("de").dateToPartsFormatter({skeleton:"yMMMd"})),d.b1792315899=p(d("de").dateToPartsFormatter({skeleton:"hm"})),d.a401518781=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"J",one:"{0} J",other:"{0} J",perUnitPattern:"{0}/J"}}),d.a847818876=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Jahre",one:"{0} Jahr",other:"{0} Jahre",perUnitPattern:"{0} pro Jahr"}}),d.b1003043612=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"Std.",one:"{0} Std.",other:"{0} Std.",perUnitPattern:"{0}/h"}}),d.b632970653=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Stunden",one:"{0} Stunde",other:"{0} Stunden",perUnitPattern:"{0} pro Stunde"}}),d.a8991124=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"Min.",one:"{0} Min.",other:"{0} Min.",perUnitPattern:"{0}/min"}}),d.a1921652928=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"T",one:"{0} T",other:"{0} T",perUnitPattern:"{0}/T"}}),d.a835992895=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Tage",one:"{0} Tag",other:"{0} Tage",perUnitPattern:"{0} pro Tag"}}),d.b534636252=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"M",one:"{0} M",other:"{0} M",perUnitPattern:"{0}/M"}}),d.a413891347=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Minuten",one:"{0} Minute",other:"{0} Minuten",perUnitPattern:"{0} pro Minute"}}),d.b1994112653=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Sekunden",one:"{0} Sekunde",other:"{0} Sekunden",perUnitPattern:"{0} pro Sekunde"}}),d.a904519668=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"Sek.",one:"{0} s",other:"{0} s",perUnitPattern:"{0}/s"}}),d.b176617821=l(d("de").numberFormatter({}),d("de").pluralGenerator({}),{compoundUnitPattern:"{0} pro {1}",unitProperties:{displayName:"Monate",one:"{0} Monat",other:"{0} Monate",perUnitPattern:"{0} pro Monat"}}),n("d58baa7e",d.b919509066),n("e8733ed8",d.a904519668),n("i3b7a017",d.b1994112653),n("be59d8c3",d.a8991124),n("ie5d110e",d.a413891347),n("i3d087da",d.b1003043612),n("df5f11b3",d.b632970653),n("ga8d18c8",d.a1921652928),n("a91e7d48",d.a835992895),n("id952a68",d.b534636252),n("ga09ab65",d.b176617821),n("c83b901c",d.a401518781),n("a55b9fed",d.a847818876),n("ccaa970e",d.a796292211),n("jade381b",d.b1729862966),n("d725a288",d.b1792315899),n("e8d93005",d.a1376667805),n("ia24dc8c",d.b505327166),n("f9e9679f",d.b78210540)}},[["vFaF",0,1]]]),window.__SCRIPTS_LOADED__["i18n-horizon"]=!0);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/de.2cd63d94.js.map
window.__SCRIPTS_LOADED__["i18n-rweb"]&&((window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"3XMw":function(e,r,t){"use strict";var n,a,i={};Object.defineProperty(r,"_register",{value:function(e,r){if(i[e]=i[e]||{},Object.defineProperty(this,"language",{get:function(){return n},set:function(e){n=e,a=i[e]},enumerable:!0,configurable:!0}).language=e,void 0!==r){var t=Object.getOwnPropertyNames(r)[0],o=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(a,t,o),t in this||Object.defineProperty(this,t,{get:function(){return a[t]}})}return function(r,t){i[e][r]=t,r in this||Object.defineProperty(this,r,{get:function(){return a[r]},enumerable:!0})}.bind(this)},enumerable:!1})},maj8:function(e,r,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,u,c=o(e),d=1;d<arguments.length;d++){for(var m in t=Object(arguments[d]))a.call(t,m)&&(c[m]=t[m]);if(n){u=n(t);for(var l=0;l<u.length;l++)i.call(t,u[l])&&(c[u[l]]=t[u[l]])}}return c}},uFFY:function(e,r,t){"use strict";var n=t("3XMw")._register("ro"),a=function(e){var r=String(e).split("."),t=!r[1],n=Number(r[0])==e&&r[0].slice(-2);return 1==e&&t?"one":!t||0==e||1!=e&&n>=1&&n<=19?"few":"other"};function i(e,r,t,n){switch(a(e)){case"one":return r;case"few":return t;default:return n}}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}n("a76a4712","360"),n("a54d17e1","Se încarcă imaginea"),n("c07c6beb","Te urmărește"),n("e618ec06","Cont protejat"),n("e15e663b","Cont de traducător"),n("j094281e","Cont verificat"),n("fb79efe3","Redă"),n("g37da5a4","Listă"),n("h19e8033","Setează memento"),n("j33a92ca","Memento setat"),n("e6580b36","Următorul"),n("g4c9627f","Anteriorul"),n("f4c9593e","Anulează"),n("a97eb7e8","Da"),n("adbb1147","Zi"),n("ie177cc2","Lună"),n("f6a4f704","An"),n("h500aec4","Ianuarie"),n("i0bd7830","Februarie"),n("dd2ba833","Martie"),n("h41112c4","Aprilie"),n("c44ba222","Mai"),n("e085b629","Iunie"),n("j23444db","Iulie"),n("cf8294b7","August"),n("h235e0a0","Septembrie"),n("fe917e4d","Octombrie"),n("dd341450","Noiembrie"),n("g27e0cbd","Decembrie"),n("c6d63ac0","Închide"),n("e091ac1d","Încearcă din nou"),n("ec156656","Ceva nu a mers bine."),n("fd7eb69c","Urmărește"),n("fd87318c","Urmăriți"),n("ef5e2456","Nu mai urmări"),n("g061efcb",(function(e){return"Oprești urmărirea subiectului "+e.title+"?"})),n("e0e1ff4e","Mărește sau micșorează imaginea."),n("de15098a","Raport de aspect: original"),n("aa261873","Raport de aspect: lat"),n("a1e564e5","Raport de aspect: pătrat"),n("fd7d9019","Află mai multe"),n("fd4568f3","Urmăritori pe care îi cunoști"),n("h48dfaa0","Nu este urmărit de nicio persoană pe care o urmărești"),n("b132d5eb",(function(e){return"Promovat de "+e.fullName})),n("de4189ab","Promovat"),n("a1240b5d","Promovat (politic)"),n("f0c6996b",(function(e){return"Promovat (politic) de "+e.fullName})),n("i8a5ec1d","Promovată (problemă)"),n("f3f75b08",(function(e){return"Promovată (problemă) de "+e.fullName})),n("a3f00cc9","Trage pentru a reîmprospăta"),n("fb67418f","Acum"),n("d53da10e",(function(e){return"Cu "+e.amountOfTime+" în urmă"})),n("i15cb8fb","Ai redistribuit"),n("d5d986db","Tweet fixat"),n("c88df33b",(function(e){return e.team+" a câștigat"})),n("dd73a557","Urmează"),n("hd04d503","În direct"),n("d2a66c51","Scor final"),n("b96a228d","Amânat"),n("ed6e347e","Anulat"),n("a4bf5188","Azi"),n("dbb73a23","Mâine"),n("ba8d1339",(function(e){return""+e.date})),n("c4d9bd93",(function(e){return""+e.place})),n("ed869ddd","and"),n("e49eaf2c",(function(e){return"and încă "+i(e.othersCount,"1",""+e.othersCount,""+e.othersCount)})),n("b90bebc4","și"),n("if7c4751",(function(e){return"și încă "+i(e.othersCount,"1",""+e.othersCount,""+e.othersCount)})),n("i5301171","Vezi persoanele din conversație"),n("de4b1402",(function(e){return""+e.formattedCount})),n("cbc41858",(function(e){return"Urmări"+i(e.count,"t","ți","ți")})),n("d1e8c189",(function(e){return""+e.formattedCount})),n("c94a69ff",(function(e){return""+i(e.count,"urmăritor","urmăritori","de urmăritori")})),n("e17680be","Copiază adresa videoclipului"),n("ad548e46","Copiază adresa fișierului GIF"),n("e192cb7c","Videoclip"),n("ef8a23d7","Transmisiune"),n("e5a681fa",(function(e){return"Redă "+e.locVideoType})),n("afea008d",(function(e){return"Redă în direct "+e.locVideoType})),n("gcd7f40a",(function(e){return"Durata: "+e.hoursWord+" "+e.minutesWord+" "+e.secondsWord})),n("ffd04da2",(function(e){return"Începe la "+e.hoursWord+" "+e.minutesWord+" "+e.secondsWord})),n("hce3aca0",(function(e){return e.viewerCount+" "+i(e.viewerCount,"spectator","spectatori","de spectatori")})),n("d06bc93c",(function(e){return e.viewCount+" "+i(e.viewCount,"vizualizare","vizualizări","de vizualizări")})),n("gb10d97b","Ascunde subtitrările"),n("f265bc9e","Afișează subtitrările"),n("b305f378","Volum"),n("g4c568fa","Glisor de volum"),n("c77d46bc","Reclamă"),n("b1e528e2",(function(e){return"Reclamă de la "+e.advertiserName})),n("cbf9f3b5","Pauză"),n("a86068c2","Reluare"),n("i769873c","Ecran complet"),n("c1d12f51","Ieși din ecranul complet"),n("d74e2882","Glisor de căutare"),n("e67d871f","Vezi în Periscope cu inimi și chaturi"),n("g5ed862e",(function(e){return e.currentTime+" din "+e.durationTime})),n("d835c4cf","Omite reclama"),n("gf122aa6","Omite"),n("iaa9d277",(function(e){return"Omite reclama în "+e.seconds})),n("fffa5395",(function(e){return"Omite "+e.seconds})),n("ea41b2ee",(function(e){return e.volumePercent+"%"})),n("fea81c4f",(function(e){return"Urmărește acum la "+e.trimmedHostname})),n("hbd4aa16",(function(e){return"Vizitează "+e.trimmedHostname})),n("j9bb491b","ÎN DIRECT"),n("ef84b656",(function(e){return"Reclamă · "+e.timeRemaining})),n("a2f8dfa9",(function(e){return"Reclamă de la "+e.advertiserName+" · "+e.timeRemaining})),n("f09c5897","REDĂ DIN NOU"),n("ia51a661","Reîncarcă"),n("afb3a1a6","Conținutul media nu a putut fi redat."),n("f1ff216a","Transmisiunea s-a încheiat."),n("a44c6fe7","Această transmisiune nu este disponibilă."),n("b9ff639e","Acest conținut media a fost dezactivat ca răspuns la o reclamație primită de la deținătorul drepturilor de autor."),n("d3adb65c","Această transmisiune nu este disponibilă în locația ta."),n("b2c8c4b6",(function(e){return"Videoclipul nu este disponibil, din cauza unei revendicări de drept de autor de la "+e.holder})),n("b344bd9e","Ne pare rău, acest videoclip este restricționat în anumite zone; așteaptă câteva secunde în timp ce îți obținem locația. Asigură-te că ai activat setările de locație în browser."),n("gc211472","Nu putem reda videoclipul în acest browser. Încearcă un alt browser web."),n("d10d909d","Acest videoclip nu este disponibil în locația ta."),n("d5581b6c","Acest videoclip a fost șters."),n("ea7e7f93","Indicator audio pentru invitați"),n("d671fe76","Ignoră"),n("h4c10f46","Nu mai ignora"),n("dfd3de3a","În continuare"),n("b1c9aed0","Urmărește din nou");var u=t("ERkP");n("I18NFormatMessage",function(e){var r,t,n,a,c;function d(){return e.apply(this,arguments)||this}return t=e,(r=d).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,d.prototype.render=function(){return u.createElement.apply(u,this[this.props.$i18n].reduce(this.templateReducer,[u.Fragment,null]))},n=d,(a=[{key:"f7f41f53",get:function(){return[this.props.formattedCount+" Membr"+i(this.props.count,"u","i","i")]}},{key:"fec5bb7c",get:function(){return["Urmărit de "]}},{key:"df548250",get:function(){return["Urmărit de "," și de "]}},{key:"efa8cccc",get:function(){return["Urmărit de ",", de "," și de "]}},{key:"f3c72f02",get:function(){return["Urmărit de ",", "," și de încă "," persoane pe care le urmărești"]}},{key:"hb920fa1",get:function(){return[""," a redistribuit"]}},{key:"c3924dbd",get:function(){return["<FormatMessage />: "]}},{key:"cce69761",get:function(){return[""," de la "]}},{key:"f0e3023b",get:function(){return["Răspuns către "]}},{key:"deb8dc45",get:function(){return["Răspuns către "," "," "]}},{key:"c9fc9996",get:function(){return["Răspuns către "," "]}},{key:"e7b105bd",get:function(){return["Răspuns către "," "," "," "]}},{key:"fcafadf6",get:function(){return["Răspuns către "," "," "]}},{key:"a7609657",get:function(){return[""," "]}},{key:"j6c94d93",get:function(){return[""," "]}},{key:"templateReducer",get:function(){var e=u.Children.toArray(this.props.children);return function(r,t,n){return r.concat(t,e[n])}}}])&&o(n.prototype,a),c&&o(n,c),d}(t("3XMw").I18NFormatMessage||u.Component));var c=t("KQqj");t("5hi7"),t("7TW0"),t("yluK"),t("Fr/T");c._validateParameterTypeNumber,c._validateParameterPresence;var d=c._numberRound,m=(c._numberFormat,c._numberFormatterFn),l=c._pluralGeneratorFn,f=(c._validateParameterTypeDate,c._dateToPartsFormat,c._dateToPartsFormatterFn),p=(c._dateFormat,c._dateFormatterFn),s=c._unitFormatterFn;c.b322696590=m(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",d("truncate"),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0 K",few:"0 K",other:"0 K"},4:{one:"00 K",few:"00 K",other:"00 K"},5:{one:"000 K",few:"000 K",other:"000 K"},6:{one:"0 mil'.'",few:"0 mil'.'",other:"0 mil'.'"},7:{one:"00 mil'.'",few:"00 mil'.'",other:"00 mil'.'"},8:{one:"000 mil'.'",few:"000 mil'.'",other:"000 mil'.'"},9:{one:"0 mld'.'",few:"0 mld'.'",other:"0 mld'.'"},10:{one:"00 mld'.'",few:"00 mld'.'",other:"00 mld'.'"},11:{one:"000 mld'.'",few:"000 mld'.'",other:"000 mld'.'"},12:{one:"0 tril'.'",few:"0 tril'.'",other:"0 tril'.'"},13:{one:"00 tril'.'",few:"00 tril'.'",other:"00 tril'.'"},14:{one:"000 tril'.'",few:"000 tril'.'",other:"000 tril'.'"},maxExponent:14}],c("ro").pluralGenerator({})),c.a919034072=m(["",,1,0,1,,,,3,,"","#,##0.###","-#,##0.###","-","",d(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0 K",few:"0 K",other:"0 K"},4:{one:"00 K",few:"00 K",other:"00 K"},5:{one:"000 K",few:"000 K",other:"000 K"},6:{one:"0 mil'.'",few:"0 mil'.'",other:"0 mil'.'"},7:{one:"00 mil'.'",few:"00 mil'.'",other:"00 mil'.'"},8:{one:"000 mil'.'",few:"000 mil'.'",other:"000 mil'.'"},9:{one:"0 mld'.'",few:"0 mld'.'",other:"0 mld'.'"},10:{one:"00 mld'.'",few:"00 mld'.'",other:"00 mld'.'"},11:{one:"000 mld'.'",few:"000 mld'.'",other:"000 mld'.'"},12:{one:"0 tril'.'",few:"0 tril'.'",other:"0 tril'.'"},13:{one:"00 tril'.'",few:"00 tril'.'",other:"00 tril'.'"},14:{one:"000 tril'.'",few:"000 tril'.'",other:"000 tril'.'"},maxExponent:14}],c("ro").pluralGenerator({})),c.a936959577=m(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",d("truncate"),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"},,{3:{one:"0 K",few:"0 K",other:"0 K"},4:{one:"00 K",few:"00 K",other:"00 K"},5:{one:"000 K",few:"000 K",other:"000 K"},6:{one:"0 mil'.'",few:"0 mil'.'",other:"0 mil'.'"},7:{one:"00 mil'.'",few:"00 mil'.'",other:"00 mil'.'"},8:{one:"000 mil'.'",few:"000 mil'.'",other:"000 mil'.'"},9:{one:"0 mld'.'",few:"0 mld'.'",other:"0 mld'.'"},10:{one:"00 mld'.'",few:"00 mld'.'",other:"00 mld'.'"},11:{one:"000 mld'.'",few:"000 mld'.'",other:"000 mld'.'"},12:{one:"0 tril'.'",few:"0 tril'.'",other:"0 tril'.'"},13:{one:"00 tril'.'",few:"00 tril'.'",other:"00 tril'.'"},14:{one:"000 tril'.'",few:"000 tril'.'",other:"000 tril'.'"},maxExponent:14}],c("ro").pluralGenerator({})),c.b95283842=m(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",d(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),c.b1038280740=m(["",,2,0,0,,,,,,"","00","-00","-","",d(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),c.b1003334920=m(["",,1,0,0,,,,,,"","0","-0","-","",d(),"∞","NaN",{".":",",",":".","%":"%","+":"+","-":"-",E:"E","‰":"‰"}]),c.a2035448620=l((function(e){var r=String(e).split("."),t=!r[1],n=Number(r[0])==e&&r[0].slice(-2);return 1==e&&t?"one":!t||0==e||1!=e&&n>=1&&n<=19?"few":"other"})),c.b1766160864=f({1:c("ro").numberFormatter({raw:"0"})},{pattern:"d MMM",timeSeparator:":",months:{M:{3:{1:"ian.",2:"feb.",3:"mar.",4:"apr.",5:"mai",6:"iun.",7:"iul.",8:"aug.",9:"sept.",10:"oct.",11:"nov.",12:"dec."}}}}),c.a438470333=f({1:c("ro").numberFormatter({raw:"0"})},{pattern:"d MMM y",timeSeparator:":",months:{M:{3:{1:"ian.",2:"feb.",3:"mar.",4:"apr.",5:"mai",6:"iun.",7:"iul.",8:"aug.",9:"sept.",10:"oct.",11:"nov.",12:"dec."}}}}),c.b2085484814=f({1:c("ro").numberFormatter({raw:"0"}),2:c("ro").numberFormatter({raw:"00"})},{pattern:"h:mm a",timeSeparator:":",dayPeriods:{am:"a.m.",pm:"p.m."}}),c.a2137399351=p(c("ro").dateToPartsFormatter({skeleton:"MMMd"})),c.a1189752710=p(c("ro").dateToPartsFormatter({skeleton:"yMMMd"})),c.a1373321929=p(c("ro").dateToPartsFormatter({skeleton:"hm"})),c.b2138587271=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"a",one:"{0} a",few:"{0} a",other:"{0} a",perUnitPattern:"{0}/an"}}),c.a1984839224=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"ani",one:"{0} an",few:"{0} ani",other:"{0} de ani",perUnitPattern:"{0} pe an"}}),c.a751817632=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"oră",one:"{0} h",few:"{0} h",other:"{0} h",perUnitPattern:"{0}/h"}}),c.a504049695=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"ore",one:"{0} oră",few:"{0} ore",other:"{0} de ore",perUnitPattern:"{0} pe oră"}}),c.b1491500720=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"m",one:"{0} m",few:"{0} m",other:"{0} m",perUnitPattern:"{0}/min."}}),c.b1485421948=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"zi",one:"{0} z",few:"{0} z",other:"{0} z",perUnitPattern:"{0}/zi"}}),c.a1149765635=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"zile",one:"{0} zi",few:"{0} zile",other:"{0} de zile",perUnitPattern:"{0} pe zi"}}),c.b1968512536=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"l",one:"{0} l",few:"{0} l",other:"{0} l",perUnitPattern:"{0}/lună"}}),c.b2126214705=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"minute",one:"{0} minut",few:"{0} minute",other:"{0} de minute",perUnitPattern:"{0} pe minut"}}),c.b239251409=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"secunde",one:"{0} secundă",few:"{0} secunde",other:"{0} de secunde",perUnitPattern:"{0} pe secundă"}}),c.b595972176=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0}/{1}",unitProperties:{displayName:"s",one:"{0} s",few:"{0} s",other:"{0} s",perUnitPattern:"{0}/s"}}),c.a711274599=s(c("ro").numberFormatter({}),c("ro").pluralGenerator({}),{compoundUnitPattern:"{0} pe {1}",unitProperties:{displayName:"luni",one:"{0} lună",few:"{0} luni",other:"{0} de luni",perUnitPattern:"{0} pe lună"}}),n("d58baa7e",c.b322696590),n("e8733ed8",c.b595972176),n("i3b7a017",c.b239251409),n("be59d8c3",c.b1491500720),n("ie5d110e",c.b2126214705),n("i3d087da",c.a751817632),n("df5f11b3",c.a504049695),n("ga8d18c8",c.b1485421948),n("a91e7d48",c.a1149765635),n("id952a68",c.b1968512536),n("ga09ab65",c.a711274599),n("c83b901c",c.b2138587271),n("a55b9fed",c.a1984839224),n("ccaa970e",c.a2137399351),n("jade381b",c.a1189752710),n("d725a288",c.a1373321929),n("e8d93005",c.a936959577),n("ia24dc8c",c.b95283842),n("f9e9679f",c.a919034072)}},[["uFFY",0,1]]]),window.__SCRIPTS_LOADED__["i18n-horizon"]=!0);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/ro.9defab84.js.map
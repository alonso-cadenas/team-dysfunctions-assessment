(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery;return n||r&&(void 0!==a&&a)}},"26yB":function(e,t,n){e.exports={IntroductionComponent:"introduction_IntroductionComponent__5-APN"}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var o=u(n("q1tI")),r=u(n("Xuae")),a=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var c=f[s];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var l=r.props[c],d=o[c]||new Set;d.has(l)?a=!1:(d.add(l),o[c]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var m=(0,r.default)();function h(e){var t=e.children;return(o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(m,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}h.rewind=m.rewind;var p=h;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),u=n("Nsbk"),c=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){i(c,s);var u=l(c);function c(e){var a;return o(this,c),a=u.call(this,e),d&&(t.add(r(a)),n(r(a))),a}return a(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("lwsE"),r=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}var c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,d=l(n("q1tI")),m=n("QmWs"),h=n("g/15"),p=c(n("nOHt")),v=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new Map,g=window.IntersectionObserver,w={};function k(){return f||(g?f=new g((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var A=function(e){a(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,o=null;return function(r,a){if(o&&r===t&&a===n)return o;var i=e(r,a);return t=r,n=a,o=i,i}}((function(e,t){return{href:(0,v.addBasePath)(y(e)),as:t?(0,v.addBasePath)(y(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),i=a.href,s=a.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var u=window.location.pathname;i=(0,m.resolve)(u,i),s=s?(0,m.resolve)(u,s):i,e.preventDefault();var c=r.props.scroll;null==c&&(c=s.indexOf("#")<0),p.default[r.props.replace?"replace":"push"](i,s,{shallow:r.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,o=t.as,r=(0,m.resolve)(e,n);return[r,o?(0,m.resolve)(e,o):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();p.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=r||o),d.default.cloneElement(a,i)}}]),n}(d.Component);t.default=A},"e+cM":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return I}));var o=n("q1tI"),r=n.n(o),a=n("YFqc"),i=n.n(a),s=n("u9Qb"),u=n.n(s),c=r.a.createElement;function l(e){var t=e.isHome,n=void 0!==t&&t;return c("header",{className:u.a.HeaderComponent,id:"header"},c("nav",null,c(i.a,{href:"/",as:"/team-dysfunctions-assessment/"},c("a",{className:"".concat(n?u.a.active:"")},"Home")),c(i.a,{href:"/assessment",as:"/team-dysfunctions-assessment/assessment"},c("a",{className:"".concat(n?"":u.a.active)},"Take Assessment"))))}var f=n("26yB"),d=n.n(f),m=r.a.createElement;function h(){return m("div",{className:d.a.IntroductionComponent,id:"introduction"},m("h1",null,"The Five Dysfunctions of a Team Online Assessment"),m("p",null,"An online assessment from ",m("i",null,"The Five Dysfunctions of a Team")," by Patrick Lencioni, Jossey-Bass Publishing, 2002."),m("div",{className:"buttonContainer"},m(i.a,{href:"/assessment",as:"/team-dysfunctions-assessment/assessment"},m("button",{type:"button"},"Take Assessment"))))}var p=n("8Kt/"),v=n.n(p),y=r.a.createElement;function b(e){var t=e.children,n=e.isHome,o=void 0!==n&&n;return y("div",null,y(v.a,null,y("title",null,o?"Home":"Take Assessment"," - The Five Dysfunctions of a Team Online Assessment"),y("meta",{charSet:"utf-8"}),y("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),y("meta",{name:"description",content:"Online assessment from The Five Dysfunctions of a Team by Patrick Lencioni."}),y("link",{rel:"icon",href:"/team-dysfunctions-assessment/favicon.ico"})),y(l,{isHome:o}),t)}var g=r.a.createElement;function w(){return g("div",{id:"overview"},g("h2",null,"Overview"),g("p",null,"In his book, ",g("i",null,"The Five Dysfunctions of a Team"),", Patrick Lencioni describes five root causes of team dysfunction that must be solved separately."),g("h3",null,"Dysfunction #1: Absence of Trust"),g("p",null,"This occurs when team members are reluctant to be vulnerable with one another and are unwilling to admit their mistakes, weaknesses or needs for help. Without a certain comfort level among team members, a foundation of trust is impossible."),g("h3",null,"Dysfunction #2: Fear of Conflict"),g("p",null,"Teams that are lacking on trust are incapable of engaging in unfiltered, passionate debate about key issues, causing situations where team conflict can easily turn into veiled discussions and back channel comments. In a work setting where team members do not openly air their opinions, inferior decisions are the results."),g("h3",null,"Dysfunction #3: Lack of Commitment"),g("p",null,"Without conflict, it is difficult for team members to commit to decisions, creating an environment where ambiguity prevails. Lack of direction and commitment can make employees, particularly star employees, disgruntled."),g("h3",null,"Dysfunction #4: Avoidance of Accountability"),g("p",null,"When teams don\u2019t commit to a clear plan of action, even the most focused and driven individuals hesitate to call their peers on actions and behaviors that may seem counterproductive to the overall good of the team."),g("h3",null,"Dysfunction #5: Inattention to Results"),g("p",null,"Team members naturally tend to put their own needs (ego, career development, recognition, etc.) ahead of the collective goals of the team when individuals aren\u2019t held accountable. If a team has lost sight of the need for achievement, the business ultimately suffers."))}var k=n("v0uu"),A=r.a.createElement;function T(e){var t=e.submitAnswers,n=e.updateAnswer;return A("div",{id:"instructions"},A("h2",null,"Instructions"),A("p",null,"Use the scale below to indicate how each statement applies to your team. It is important to evaluate the statements honestly and without over-thinking your answers."),A("form",{onSubmit:t},A("ol",null,k.b.map((function(e,t){return A("li",{key:t},e,A("br",null),A("br",null),A("input",{type:"radio",id:"usually".concat(t),name:"answer".concat(t),value:k.a.USUALLY,onChange:n,required:!0}),A("label",{htmlFor:"usually".concat(t)},"Usually"),A("br",null),A("input",{type:"radio",id:"sometimes".concat(t),name:"answer".concat(t),value:k.a.SOMETIMES,onChange:n}),A("label",{htmlFor:"sometimes".concat(t)},"Sometimes"),A("br",null),A("input",{type:"radio",id:"rarely".concat(t),name:"answer".concat(t),value:k.a.RARELY,onChange:n}),A("label",{htmlFor:"rarely".concat(t)},"Rarely"),A("br",null),A("br",null))}))),A("div",{className:"buttonContainer"},A(i.a,{href:"/",as:"/team-dysfunctions-assessment/"},A("button",{type:"button",className:"cancelButton"},"Cancel")),A("button",{type:"submit"},"Submit"))))}var C=r.a.createElement;function S(){return C("div",{id:"references"},C("h2",null,"References"),C("p",null,"Sourced from The 2006 Linkage Excellence in Management & Leadership Series: Building and Leading a High Performance Team, Patrick Lencioni"),C("cite",{id:"CITEREFPatrick_Lencioni2002"},"Patrick Lencioni (2002), \xa0",C("a",{rel:"nofollow",href:"https://books.google.com/books?id=AEIGAAAACAAJ"},C("i",null,"The Five Dysfunctions of a Team")),", Jossey-Bass, ISBN \xa0",C("a",{href:"https://en.wikipedia.org/wiki/Special:BookSources/0-7879-6075-6",title:"Special:BookSources/0-7879-6075-6"},C("bdi",null,"0-7879-6075-6"))))}var E=r.a.createElement;function I(e){var t=e.answers;return E("div",null,E("h2",null,"Rubric"),E("ul",null,E("li",null,"A score of 8 or 9 is a probable indication that dysfunction is not a problem for our team."),E("li",null,"A score of 6 or 7 indicates that the dysfunction could be a problem."),E("li",null,"A score of 3 to 5 is probably an indication that team dysfunction needs to be addressed.")),E("p",null,"Regardless of your scores, it is important to keep in mind that every team needs constant work, because without it, even the best ones deviate toward dysfunction."),E("h2",null,"My Scores"),E("p",null,"Dysfunction #1 - Absence of Trust:"," ",E("b",null,t[3]+t[5]+t[11])),E("p",null,"Dysfunction #2 - Fear of Conflict:"," ",E("b",null,t[0]+t[6]+t[9])),E("p",null,"Dysfunction #3 - Lack of Commitment:"," ",E("b",null,t[2]+t[7]+t[12])),E("p",null,"Dysfunction #4 - Avoidance of Accountability:"," ",E("b",null,t[1]+t[10]+t[13])),E("p",null,"Dysfunction #5 - Inattention to Results:"," ",E("b",null,t[4]+t[8]+t[14])))}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},u9Qb:function(e,t,n){e.exports={HeaderComponent:"header_HeaderComponent__2Z_HF",active:"header_active__Bpkcw"}},v0uu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o={USUALLY:3,SOMETIMES:2,RARELY:1},r=["Team members are passionate and unguarded in their discussion of issues.","Team members call out one another's deficiencies or unproductive behaviors.","Team members know what their peers are working on and how they contribute to the collective good of the team.","Team members quickly and genuinely apologize to one another when they say or do something inappropriate or possibly damaging to the team.","Team members willingly make sacrifices (such as budget, turf, head count) in their departments or areas of expertise for the good of the team.","Team members openly admit their weaknesses and mistakes.","Team meetings are compelling, and not boring.","Team members leave meetings confident that their peers are completely committed to the decisions that were agreed on, even if there was initial disagreement.","Morale is significantly affected by the failure to achieve team goals.","During team meetings, the most important and difficult issues are put on the table to be resolved.","Team members are deeply concerned about the prospect of letting down their peers.","Team members know about one another's personalities and are comfortable discussing them.","Team members end discussions with clear and specific resolutions and calls to action.","Team members challenge one another about their plans and approaches.","Team members are slow to seek credit for their own contributions, but quick to point out those of others."]}}]);
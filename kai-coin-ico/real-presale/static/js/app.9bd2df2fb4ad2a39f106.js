webpackJsonp([1],{"+31V":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"title"},[a("div",{staticClass:"main-header"},[t._m(0),t._v(" "),!1===t.isLogin?a("div",{staticClass:"right"},[a("form",{attrs:{action:""},on:{submit:function(e){e.preventDefault(),e.stopPropagation(),t.loginForm(e)}}},[a("fieldset",[a("legend",[t._v("로그인")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",id:"id",placeholder:"yourmail@address.com"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"80010112345678"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("button",{staticClass:"button-login",attrs:{type:"submit"}},[t._v("로그인")])])])]):!0===t.isLogin?a("div",{staticClass:"right"},[a("p",{staticClass:"welcome-message"},[a("span",[t._v(t._s(t.name))]),t._v("님!"),a("br"),t._v("\n\t\t\t\t\t환영합니다.\n\t\t\t\t")]),t._v(" "),a("button",{staticClass:"button-logout",attrs:{type:"button"},on:{click:t.logout}},[t._v("로그아웃")])]):t._e()])]),t._v(" "),!0===t.isLogin?a("section",{staticClass:"wallet"},[a("article",[a("h3",[t._v("카이코인 잔액")]),t._v(" "),a("p",{staticClass:"balance"},[a("span",{staticClass:"number"},[t._v(t._s(t.kaiBalance))]),t._v(" "),a("small",[t._v("KAI")])]),t._v(" "),a("h4",[t._v("※ 카이코인 월렛주소    "+t._s(t.kaiWallet))]),t._v(" "),0!==t.kaiHistory.length?a("ul",{staticClass:"wallet-history"},t._l(t.kaiHistory,function(e){return a("li",[a("span",{staticClass:"date"},[t._v(t._s(e.time))]),t._v(" "),a("span",{staticClass:"contents"},[t._v("한국투자자협회 입금")]),t._v(" "),a("span",{staticClass:"price"},[e.amount>0?a("span",{staticClass:"deposit"},[t._v("+")]):a("span",{staticClass:"withdraw"},[t._v("-")]),t._v(" "),a("span",[t._v(t._s(e.stringAmount))]),t._v(" KAI\n\t\t\t\t\t")])])})):a("ul",{staticClass:"wallet-history"},[a("li",{staticClass:"history-0"},[t._v("\n\t\t\t\t\t입금된 내역이 없습니다.\n\t\t\t\t")])])])]):t._e(),t._v(" "),t._m(1),t._v(" "),t._m(2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("h2",[t._v("블록체인과 문화의 결합")]),t._v(" "),a("p",[a("em",[t._v("kaicoin Presale")]),t._v("에 참여하신"),a("br"),t._v("\n\t\t\t\t여러분, 환영합니다!"),a("br"),t._v("\n\t\t\t\t다양한 체험을 지금 시작하세요.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"future"},[a("article",[a("h3",[t._v("앞으로의"),a("br"),t._v("카이코인")]),t._v(" "),a("p",[t._v("한국적인 컨텐츠와 문화를 결합한 블록체인 시스템을 기반으로, 언제 어디에서나 손쉽게 통용되는 국제 표준형 암호화폐로 활용될 것입니다.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"faq"},[a("article",[a("h3",[t._v("FAQ")]),t._v(" "),a("dl",[a("dt",[t._v("Q. 이메일주소, 비밀번호를 잊었습니다.")]),t._v(" "),a("dd",[t._v("한국투자자협회 02)512-9037 또는 master@kaicoin.co.kr 으로 문의해주세요.")]),t._v(" "),a("dt",[t._v("Q. 내 카이코인 잔액은 어떻게 확인하나요?")]),t._v(" "),a("dd",[t._v("카이코인 Presale 회원가입이 필요합니다. 가입하시고 로그인을 하시면 지급된 카이코인 지급내역과 잔액을 확인하실 수 있습니다.")]),t._v(" "),a("dt",[t._v("Q. 카이코인으로 무엇을 할 수 있나요?")]),t._v(" "),a("dd",[t._v("현재 게임 아이템 구매, 온라인 쇼핑몰, 병원 등의 가맹점을 확보하였고 문화 컨텐츠와 연계된 전자상거래를 중심으로 온/오프라인 가맹점을 확대해 나갈 예정입니다. 확보된 가맹점에서 카이코인을 사용하실 수 있습니다.")]),t._v(" "),a("dt",[t._v("Q. 다른 문의를 하고싶어요.")]),t._v(" "),a("dd",[t._v("한국투자자협회 02)512-9037 또는 master@kaicoin.co.kr 으로 문의주시면 답변드립니다.")])])])])}],s={render:n,staticRenderFns:i};e.a=s},"6+aJ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("iTc6"),i=a.n(n),s=a("+31V"),r=a("VU/8"),o=r(i.a,s.a,null,null,null);e.default=o.exports},"FU1/":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("dl",{staticClass:"form"},[a("dt",[t._v("이메일")]),t._v(" "),a("dd",[a("input",{staticClass:"input-email",attrs:{type:"text",placeholder:"yourmail@address.com"},on:{blur:t.inputEmail}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("이름")]),t._v(" "),a("dd",[a("input",{staticClass:"input-name",attrs:{type:"text",placeholder:"홍길동"},on:{blur:t.inputName}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("생년월일")]),t._v(" "),a("dd",[a("input",{staticClass:"input-snn-number",attrs:{type:"number",placeholder:"170922"},on:{blur:t.inputSnn}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("휴대폰번호")]),t._v(" "),a("dd",[a("input",{staticClass:"input-phone-number",attrs:{type:"number",placeholder:"01012345678"},on:{blur:t.inputPhone}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("지급액")]),t._v(" "),a("dd",[a("input",{staticClass:"input-kaicoin-number",attrs:{type:"number",placeholder:""},on:{blur:t.inputKai}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),t._m(0),t._v(" "),a("dd",[a("button",{staticClass:"button-complete",attrs:{type:"button"},on:{click:t.formJoin}},[t._v("입력완료")])])]),t._v(" "),a("div",{staticClass:"kaicoin-infomation"},[a("v-client-table",{attrs:{data:t.tableData,columns:t.columns,options:t.options},scopedSlots:t._u([{key:"state",fn:function(e){return[0===e.row.state?a("span",[t._v("N")]):a("span",[t._v("Y")])]}},{key:"etc",fn:function(e){return[a("button",{attrs:{type:"button"},on:{click:function(a){t.contentsModify(e)}}},[t._v("수정")]),t._v("  "),a("button",{attrs:{type:"button"},on:{click:function(a){t.erase(e)}}},[t._v("삭제")])]}}])})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dt",[a("span",{staticClass:"blind"},[t._v("입력완료")])])}],s={render:n,staticRenderFns:i};e.a=s},HY1K:function(t,e){},KE1I:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Yh37"),i=a.n(n),s=a("YhP8"),r=a("VU/8"),o=r(i.a,s.a,null,null,null);e.default=o.exports},M93x:function(t,e,a){"use strict";function n(t){a("HY1K")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("xJD8"),s=a.n(i),r=a("vGH3"),o=a("VU/8"),c=n,l=o(s.a,r.a,c,null,null);e.default=l.exports},NHnr:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a("7+uW"),s=n(i),r=a("M93x"),o=n(r),c=a("YaEn"),l=n(c);a("ayVK"),s.default.config.productionTip=!1,new s.default({el:"#app",router:l.default,template:"<App/>",components:{App:o.default}})},SM0H:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=n(i),r=a("e9ss"),o=a("mtWM"),c=n(o),l=a("mP1F");s.default.use(r.ClientTable,{},!1),e.default={data:function(){return{pagging:10,columns:["No","email","name","ssn","mobile","amount","state","etc"],tableData:[],options:{pagination:{chunk:this.pagging},orderBy:{ascending:!1,column:"No"}}}},created:function(){this.addJsonNumber(),(0,c.default)({method:"GET",url:"http://api-presale.kaicoin.io/admin/list",headers:{"content-type":"application/json; charset=utf-8"}}).then(function(t){this.tableData=t.data,this.addJsonNumber()}.bind(this)).catch(function(t){})},mounted:function(){},methods:{inputEmail:function(){return""==$(".input-email").val().trim()?($(".input-email ~ p.error").show().empty().text("이메일을 입력해주세요."),!1):($(".input-email ~ p.error").hide(),!0)},inputName:function(){return""==$(".input-name").val().trim()?($(".input-name ~ p.error").show().empty().text("이름을 입력해주세요."),!1):($(".input-name ~ p.error").hide(),!0)},inputSnn:function(){return""==$(".input-snn-number").val().trim()?($(".input-snn-number ~ p.error").show().empty().text("생년월일을 입력해주세요."),!1):($(".input-snn-number ~ p.error").hide(),!0)},inputPhone:function(){return""==$(".input-phone-number").val().trim()?($(".input-phone-number ~ p.error").show().empty().text("휴대폰번호를 입력해주세요."),!1):($(".input-phone-number ~ p.error").hide(),!0)},inputKai:function(){return""==$(".input-kaicoin-number").val().trim()?($(".input-kaicoin-number ~ p.error").show().empty().text("지급액을 입력해주세요."),!1):($(".input-kaicoin-number ~ p.error").hide(),!0)},formJoin:function(){var t=$(".input-phone-number").val(),e=$(".input-snn-number").val(),a=t.replace(/(^010+)/,"").replace(/(^10+)/,""),n=e+a;this.inputEmail()&&this.inputName()&&this.inputSnn()&&this.inputPhone()&&this.inputKai()&&(0,c.default)({method:"POST",url:"http://api-presale.kaicoin.io/admin/insert",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0,data:{name:$(".input-name").val().trim(),email:$(".input-email").val().trim(),password:l(n).toString(),amount:$(".input-kaicoin-number").val().trim(),ssn:$(".input-snn-number").val().trim(),mobile:$(".input-phone-number").val().trim()}}).then(function(t){location.href="/admin"}.bind(this)).catch(function(t){})},addJsonNumber:function(){for(var t=0;t<this.tableData.length;t++)this.tableData[t].No=this.tableData.length-t},contentsModify:function(t){$(".input-email").val(t.row.email),$(".input-name").val(t.row.name),$(".input-snn-number").val(t.row.ssn),$(".input-phone-number").val(t.row.mobile),$(".input-kaicoin-number").val(t.row.amount)},erase:function(t){(0,c.default)({method:"GET",url:"http://api-presale.kaicoin.io/admin/delete/?email="+t.row.email,headers:{"content-type":"application/json; charset=utf-8"}}).then(function(t){location.href="/admin"}.bind(this)).catch(function(t){})}}}},TdAV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),i=function(t){return t&&t.__esModule?t:{default:t}}(n),s=a("mP1F");a("ZScg");e.default={name:"join",data:function(){return{mail:"",isMail:!1,name:"",password:"",personalPhone:"",isTerm:!1,requestId:"",isSmsCheck:!1}},mounted:function(){},methods:{checkEmail:function(){var t=$(".input-email");return t.removeClass("error"),t.siblings("p.error").hide(),/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(this.mail)?((0,i.default)({method:"GET",url:"http://api-presale.kaicoin.io/auth/validateEmail/"+this.mail+"/",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0}).then(function(e){$(".form-join .email-check").show(),t.prop("disabled",!0),t.siblings("button").prop("disabled",!0),this.isMail=!0}.bind(this)).catch(function(e){101===e.response.data.errorCode?(t.siblings("p.error").show().text("이미 존재하는 이메일 입니다."),t.addClass("error")):201===e.response.data.errorCode&&(t.siblings("p.error").show().text("실제 존재하지 않는 이메일 입니다."),t.addClass("error"))}),this.isMail):(t.siblings("p.error").show().text("이메일 주소를 정확히 입력해 주세요."),t.addClass("error"),!1)},checkName:function(){var t=$(".input-name");return t.siblings("p.error").hide(),t.removeClass("error"),""!==this.name.trim()||(t.siblings("p.error").show().text("정확히 입력해 주세요."),t.addClass("error"),!1)},checkPassword:function(){var t=$(".input-password"),e=this.mail.split("@")[0],a=t.val();if(!/^[a-zA-Z0-9]{8,20}$/.test(a))return t.next("p.error").show().text("숫자와 영문자 조합으로 8~20자리를 사용해야 합니다."),t.addClass("error"),!1;var n=a.search(/[0-9]/g),i=a.search(/[a-z]/gi);return n<0||i<0?(t.next("p.error").show().text("숫자와 영문자를 혼용하여야 합니다."),t.addClass("error"),!1):a.search(e)>-1?(t.next("p.error").show().text("비밀번호에 아이디가 포함되었습니다."),t.addClass("error"),!1):(t.next("p.error").hide(),t.removeClass("error"),this.password=s(t.val()).toString(),!0)},recheckPassword:function(){var t=$(".input-check-password"),e=$(".input-password"),a=t.val();return e.val()!=a?(t.next("p.error").show().text("비밀번호가 다릅니다."),t.addClass("error"),!1):(t.next("p.error").hide(),t.removeClass("error"),!0)},checkTerm:function(){return!!$("#agree").prop("checked")||(alert("약관에 동의해 주세요."),!1)},sendSms:function(){var t=$(".input-phone-number");this.personalPhone=("82"+t.val().replace(/(^0+)/,"")).toString(),(0,i.default)({method:"GET",url:"http://api-presale.kaicoin.io/auth/sendSMSCode/"+this.personalPhone+"/",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0}).then(function(t){if(this.requestId=t.data.requestId,$(".button-send-sms").hide(),$(".form-join .certification-code-title, .form-join .certification-code-content").show(),"00:00"==$(".certification-count").text()||""==$(".certification-count").text()){var e=(new Date).getTime()+3e5;$(".certification-code-content p .certification-count").countdown(e).on("update.countdown",function(t){$(this).text(t.strftime("%M:%S"))}).on("finish.countdown",function(t){$(this).text(t.strftime("%M:%S")),$(".certification-code-content .button-resend-sms").prop("disabled",!1)})}}.bind(this)).catch(function(t){})},smsCertification:function(){return""!=$(".form-join .input-phone-number").val().trim()?(0,i.default)({method:"POST",url:"http://api-presale.kaicoin.io/auth/checkSMSCode",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0,data:{mobile:this.personalPhone,requestId:this.requestId,smsCode:$(".certification-code-content .code").val()}}).then(function(t){t.data.isCheck?(this.isSmsCheck=!0,$(".form-join p.error").hide(),$(".certification-code-content p .certification-count").countdown("remove").text(""),$(".join .button-certification-complete, .certification-code-content .code").prop("disabled",!0)):!1===t.data.isCheck&&!1===this.isSmsCheck&&alert("입력이 정확하지 않습니다.")}.bind(this)).catch(function(t){}):$(".form-join .input-phone-number").addClass("error").next("p.error").show().text("SMS 인증이 필요합니다."),this.isSmsCheck},checkSubmitForm:function(){this.checkEmail()&&this.checkName()&&this.checkPassword()&&this.recheckPassword()&&this.smsCertification()&&this.checkTerm()&&(0,i.default)({method:"POST",url:"http://api-presale.kaicoin.io/auth/signup",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0,data:{email:this.mail,name:this.name,password:this.password,mobile:this.personalPhone}}).then(function(t){t.data.idfAccount&&(alert("회원가입이 완료되었습니다."),this.$router.push({name:"main"}))}.bind(this)).catch(function(t){})}}}},TnEz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},YaEn:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t){var e,a=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(a))?e[2]:null}Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=n(s),o=a("/ocq"),c=n(o),l=a("6+aJ"),u=n(l),d=a("zbyJ"),p=(n(d),a("sRWR"));n(p);r.default.use(c.default);var h=new c.default({mode:"history",routes:[{path:"/",name:"main",component:u.default},{path:"*",redirect:"/"}]});e.default=h,r.default.prototype.setCookie=function(t,e,a){var n=new Date;n.setDate(n.getDate()+a),document.cookie=t+"="+escape(e)+(null==a?"":";expires="+n.toGMTString())},r.default.prototype.getCookie=i},Yh37:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},YhP8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h1",[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"https://res.cloudinary.com/dhjjs2uz3/image/upload/v1505366173/KaiCoinPresale/web/logo_basic_color.png",width:"313",height:"58",alt:"kaicoin Presale"}})])]),t._v(" "),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("progress",{attrs:{value:"0",id:"progressBar"}},[a("div",{staticClass:"progress-container"},[a("span",{staticClass:"progress-bar"})])])}],s={render:n,staticRenderFns:i};e.a=s},g7XE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("TnEz"),i=a.n(n),s=a("p37C"),r=a("VU/8"),o=r(i.a,s.a,null,null,null);e.default=o.exports},iTc6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),i=function(t){return t&&t.__esModule?t:{default:t}}(n),s=a("mP1F");e.default={name:"main",data:function(){return{id:"",password:"",email:"",name:"",authToken:"",kaiWallet:"",kaiBalance:0,kaiHistory:{},isLogin:!1}},mounted:function(){if(this.getCookie("s_t")){var t=(this.getCookie("s_t").split("%20")[3],this.getCookie("s_t").split("%20")[2]),e=this.getCookie("s_t").split("%20")[1],a=this.getCookie("s_t").split("%20")[4],n=this.getCookie("s_t").split("%20")[0];this.isLogin=!0,this.email=t,this.name=decodeURIComponent(unescape(e)),this.authToken=n.replace("%3D","="),this.kaiWallet=a,this.viewBalance(),this.viewHistory()}},methods:{loginForm:function(){(0,i.default)({method:"POST",url:"http://api-presale.kaicoin.io/auth/signin",headers:{"content-type":"application/json; charset=utf-8"},withCredentials:!0,data:{email:this.id,password:s(this.password).toString()}}).then(function(t){if(t.data.authToken){var e=t.data.authToken+" "+t.data.name+" "+t.data.email+" "+t.data.idfAccount+" "+t.data.kaicoinAddr;this.setCookie("s_t",e,252e5),this.isLogin=!0,this.email=t.data.email,this.name=t.data.name,this.authToken=t.data.authToken.replace("%3D","="),this.kaiWallet=t.data.kaicoinAddr,this.viewBalance(),this.viewHistory()}}.bind(this)).catch(function(t){alert("로그인 정보가 올바르지 않습니다.")})},logout:function(){this.setCookie("s_t","",-864e5),window.location.href="/"},viewBalance:function(){(0,i.default)({method:"GET",url:"http://api-presale.kaicoin.io/mypage/getAddressBalances/"+this.kaiWallet+"/",headers:{"content-type":"application/json; charset=utf-8","X-Auth-Token":this.email+"="+this.authToken},withCredentials:!0}).then(function(t){var e=t.data.toString().split(".");this.kaiBalance=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(e[1]?"."+e[1]:"")}.bind(this)).catch(function(t){})},viewHistory:function(){(0,i.default)({method:"POST",url:"http://api-presale.kaicoin.io/mypage/getListAddressTx",headers:{"content-type":"application/json; charset=utf-8","X-Auth-Token":this.email+"="+this.authToken},withCredentials:!0,data:{address:this.kaiWallet,cnt:10}}).then(function(t){this.kaiHistory=t.data,this.kaiAccountComma()}.bind(this)).catch(function(t){})},kaiAccountComma:function(){for(var t=0;t<this.kaiHistory.length;t++){var e=0;e=this.kaiHistory[t].amount>0?this.kaiHistory[t].amount:-1*this.kaiHistory[t].amount;var a=e.toString().split(".");this.kaiHistory[t].stringAmount=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")+(a[1]?"."+a[1]:"")}}}}},p37C:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer-laout"},[a("ul",{staticClass:"infomation"},[a("li",[a("em",[t._v("© 2017 KAICOIN")]),t._v(" - "),a("a",{attrs:{href:"https://res.cloudinary.com/dhjjs2uz3/image/upload/v1505285720/KaicoinICO/web/service.pdf",target:"_blank"}},[t._v("이용약관")]),t._v(", "),a("a",{attrs:{href:"http://res.cloudinary.com/dhjjs2uz3/image/upload/v1505893137/KaiCoinPresale/web/privacyStatement.pdf",target:"_blank"}},[t._v("개인정보취급방침")])])])])])}],s={render:n,staticRenderFns:i};e.a=s},pqk3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"join"},[a("h2",[t._v("Presale 참여자를 위한 회원가입")]),t._v(" "),a("p",[t._v("※ 카이코인 잔액 확인을 위해 회원가입이 필요합니다.")]),t._v(" "),a("dl",{staticClass:"form-join"},[a("dt",[t._v("이메일")]),t._v(" "),a("dd",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],staticClass:"input-email",attrs:{type:"text",placeholder:"yourmail@address.com"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}}),t._v(" "),a("span",{staticClass:"email-check"}),t._v(" "),a("p",{staticClass:"error"}),t._v(" "),a("button",{attrs:{type:"button"},on:{click:t.checkEmail}},[t._v("메일확인")])]),t._v(" "),a("dt",[t._v("이름")]),t._v(" "),a("dd",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input-name",attrs:{type:"text",placeholder:"홍길동"},domProps:{value:t.name},on:{blur:t.checkName,input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("비밀번호")]),t._v(" "),a("dd",[a("input",{staticClass:"input-password",attrs:{type:"password",placeholder:"8자 이상 , 영문/숫자 조합"},on:{blur:t.checkPassword}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("비밀번호 확인")]),t._v(" "),a("dd",[a("input",{staticClass:"input-check-password",attrs:{type:"password",placeholder:"8자 이상 , 영문/숫자 조합"},on:{blur:t.recheckPassword}}),t._v(" "),a("p",{staticClass:"error"})]),t._v(" "),a("dt",[t._v("휴대폰 번호")]),t._v(" "),a("dd",[a("input",{staticClass:"input-phone-number",attrs:{type:"number",placeholder:"1012345678"}}),t._v(" "),a("p",{staticClass:"error"}),t._v(" "),a("button",{staticClass:"button-send-sms",attrs:{type:"button"},on:{click:t.sendSms}},[t._v("인증번호받기")])]),t._v(" "),t._m(0),t._v(" "),a("dd",{staticClass:"certification-code-content"},[t._m(1),t._v(" "),a("div",{staticClass:"certification-navigator"},[a("button",{staticClass:"button-resend-sms",attrs:{type:"button",disabled:"disabled"},on:{click:t.sendSms}},[t._v("SMS 재전송")]),t._v(" "),a("button",{staticClass:"button-certification-complete fill",attrs:{type:"button"},on:{click:t.smsCertification}},[t._v("확인")])])]),t._v(" "),a("dt",{staticClass:"blind"},[t._v("약관동의")]),t._v(" "),a("dd",[a("p",{staticClass:"agree-policy"},[a("input",{attrs:{type:"checkbox",id:"agree"},on:{change:t.checkTerm}}),a("span"),t._v(" "),t._m(2)])]),t._v(" "),a("dt",{staticClass:"blind"},[t._v("가입완료")]),t._v(" "),a("dd",[a("button",{staticClass:"button-complete fill",attrs:{type:"button"},on:{click:t.checkSubmitForm}},[t._v("Presale 회원가입")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("dt",{staticClass:"certification-code-title"},[a("p",[t._v("인증코드")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("input",{staticClass:"code",attrs:{type:"number",placeholder:""}}),t._v(" "),a("span",{staticClass:"certification-count"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"agree"}},[t._v("카이코인 Presale "),a("a",{attrs:{href:"https://res.cloudinary.com/dhjjs2uz3/image/upload/v1505285720/KaicoinICO/web/service.pdf",target:"_blank"}},[t._v("서비스 이용약관")]),t._v(", "),a("a",{attrs:{href:"http://res.cloudinary.com/dhjjs2uz3/image/upload/v1505893137/KaiCoinPresale/web/privacyStatement.pdf",target:"_blank"}},[t._v("개인정보 취급방침")]),t._v("에 동의합니다.")])}],s={render:n,staticRenderFns:i};e.a=s},sRWR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("SM0H"),i=a.n(n),s=a("FU1/"),r=a("VU/8"),o=r(i.a,s.a,null,null,null);e.default=o.exports},vGH3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wrap"}},[a("app-nav"),t._v(" "),a("hr"),t._v(" "),a("div",{attrs:{id:"contents"}},[a("router-view")],1),t._v(" "),a("hr"),t._v(" "),a("app-footer")],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},xJD8:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if("max"in document.createElement("progress")){var a=$("progress");a.attr({max:t()}),a.attr({value:e()}),$(document).on("scroll",function(){a.attr({value:e()})}),$(window).resize(function(){a.attr({max:t(),value:e()})})}else{var n,i,a=$(".progress-bar"),s=t(),r=function(){return n=e(),i=n/s*100,i+="%"},o=function(){a.css({width:r()})};$(document).on("scroll",o),$(window).on("resize",function(){s=t(),o()})}}Object.defineProperty(e,"__esModule",{value:!0});var s=a("KE1I"),r=n(s),o=a("g7XE"),c=n(o);e.default={name:"app",mounted:function(){this.scrollNavigation},methods:{},components:{AppNav:r.default,AppFooter:c.default},computed:{scrollNavigation:function(){setTimeout(function(){i(function(){return $(document).height()-$(window).height()},function(){return $(window).scrollTop()})},300)}}}},zbyJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("TdAV"),i=a.n(n),s=a("pqk3"),r=a("VU/8"),o=r(i.a,s.a,null,null,null);e.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.9bd2df2fb4ad2a39f106.js.map
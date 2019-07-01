(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,n){e.exports=n(448)},439:function(e,t,n){},440:function(e,t,n){},441:function(e,t,n){},442:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);n(181),n(240);var a=n(5),r=n.n(a),l=n(172),i=n.n(l),c=(n(439),n(440),n(177)),u=(n(441),n(173)),o=n(174),s=n(175),m=n(178),E=n(176),A=n(179),p=Object.freeze({DEFAULT_AGE:55,MIN_AGE:40,MAX_AGE:70,DEFAULT_GENDER:"female",GENDER:[{key:"male",value:"male",lifeExpectancy:81},{key:"female",value:"female",lifeExpectancy:85}],DEFAULT_MARITAL_STATUS:"single",MARITAL_STATUS:[{key:"single",value:"single",label:"Single"}],DEFAULT_INCOME:3e4,MIN_INCOME:0,MAX_INCOME:1e5,DEFAULT_RRSP:9e4,MIN_RRSP:0,MAX_RRSP:1e6,DEFAULT_ANNUAL_CPP:9e3,MIN_ANNUAL_CPP:0,MAX_ANNUAL_CPP:15e3,DEFAULT_ANNUAL_PENSION:0,MIN_ANNUAL_PENSION:0,MAX_ANNUAL_PENSION:5e4,DEFAULT_RETIREMENT_AGE:65,MIN_RETIREMENT_AGE:55,MAX_RETIREMENT_AGE:70});function N(e,t){for(var n=[],a=e;a<=t;a+=1)n.push({key:a,value:a,label:a});return n}function _(e){var t=[];return e.forEach(function(e){t.push({key:e.key,value:e.value,label:e.label||e.value})}),t}var I=N(p.MIN_AGE,p.MAX_AGE),f=_(p.GENDER),R=_(p.MARITAL_STATUS),S=N(p.MIN_RETIREMENT_AGE,p.MAX_RETIREMENT_AGE);n(442);function d(e){return e.map(function(e){return r.a.createElement("option",{key:e.key,value:e.value},e.label)})}var h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={age:p.DEFAULT_AGE,gender:p.DEFAULT_GENDER,maritalStatus:p.DEFAULT_MARITAL_STATUS,income:p.DEFAULT_INCOME,rrsp:p.DEFAULT_RRSP,cpp:p.DEFAULT_ANNUAL_CPP,pension:p.DEFAULT_ANNUAL_PENSION,retirementAge:p.DEFAULT_RETIREMENT_AGE},n.update=function(e){return function(t){t.preventDefault(),n.setState(Object(u.a)({},e,t.target.value))}},n.submitInput=function(e){e.preventDefault(),(0,n.props.runScenarios)(n.state)},n}return Object(A.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.age,n=e.gender,a=e.maritalStatus,l=e.income,i=e.rrsp,c=e.cpp,u=e.pension,o=e.retirementAge;return r.a.createElement("div",{className:"data-entry"},r.a.createElement("form",{onSubmit:this.submitInput},r.a.createElement("label",{htmlFor:"selectAge"},"Age",r.a.createElement("select",{id:"selectAge",name:"selectAge",value:t,onChange:this.update("age")},d(I))),r.a.createElement("label",{htmlFor:"selectGender"},"Gender",r.a.createElement("select",{id:"selectGender",name:"selectGender",value:n,onChange:this.update("gender")},d(f))),r.a.createElement("label",{htmlFor:"selectMaritalStatus"},"Marital Status",r.a.createElement("select",{id:"selectMaritalStatus",name:"selectMaritalStatus",value:a,onChange:this.update("maritalStatus")},d(R))),r.a.createElement("label",{htmlFor:"income"},"Annual Income",r.a.createElement("input",{id:"income",type:"number",name:"income",value:l,onChange:this.update("income"),min:p.MIN_INCOME,max:p.MAX_INCOME})),r.a.createElement("label",{htmlFor:"rrsp"},"Total RRSP",r.a.createElement("input",{id:"rrsp",type:"number",name:"rrsp",value:i,onChange:this.update("rrsp"),min:p.MIN_RRSP,max:p.MAX_RRSP})),r.a.createElement("label",{htmlFor:"cpp"},"Annual CPP Entitlement",r.a.createElement("input",{id:"cpp",type:"number",name:"cpp",value:c,onChange:this.update("cpp"),min:p.MIN_ANNUAL_CPP,max:p.MAX_ANNUAL_CPP})),r.a.createElement("label",{htmlFor:"pension"},"Annual Pension",r.a.createElement("input",{id:"pension",type:"number",name:"pension",value:u,onChange:this.update("pension"),min:p.MIN_ANNUAL_PENSION,max:p.MAX_ANNUAL_PENSION})),r.a.createElement("label",{htmlFor:"selectRetirementAge"},"Retirement Age",r.a.createElement("select",{id:"selectRetirementAge",name:"selectRetirementAge",value:o,onChange:this.update("retirementAge")},d(S))),r.a.createElement("button",{type:"submit"},"Calculate")))}}]),t}(a.Component);var T=function(e){return r.a.createElement("div",{className:"scenarios"},function(e){var t=e.data,n=t.cashOutBefore,a=t.cashOutAfter;return n&&a?r.a.createElement("div",{className:"scenarios-data"},r.a.createElement("p",null,"Total GIS if cash out RRSP BEFORE retirement:"," ",n.totalGisInRetirement),r.a.createElement("p",null,"Total GIS if cash out RRSP AFTER retirement:"," ",a.totalGisInRetirement)):r.a.createElement("div",{className:"empty"})}(e))},v=n(84),g=n.n(v);function M(e){return t=e.gender,p.GENDER.find(function(e){return e.key===t}).lifeExpectancy-e.retirementAge;var t}function L(e){return e.cpp+e.pension+function(e){return e.rrsp/M(e)}(e)}function U(e,t){var n=function(e){var t=g.a.STATUS.SINGLE;return e===p.DEFAULT_MARITAL_STATUS&&(t=g.a.STATUS.SINGLE),t}(t),a=g.a.find(n,e);return parseFloat(a.output.gis)}function b(e){return 12*e}function G(e,t){return e*t}function P(e){return{age:parseInt(e.age,10),cpp:parseInt(e.cpp,10),income:parseInt(e.income,10),pension:parseInt(e.pension,10),retirementAge:parseInt(e.retirementAge,10),rrsp:parseInt(e.rrsp,10),gender:e.gender,maritalStatus:e.maritalStatus}}function F(e){var t=P(e),n=M(t),a=function(e){return e.cpp+e.pension}(t),r=U(a,t.maritalStatus),l=b(r);return{totalGisInRetirement:G(l,n),intermediateCalculations:{numYrsInRetirement:n,annualIncome:a,monthlyGis:r,annualGIS:l}}}function y(e){var t=P(e),n=M(t),a=L(t),r=U(a,t.maritalStatus),l=b(r);return{totalGisInRetirement:G(l,n),intermediateCalculations:{numYrsInRetirement:n,annualIncome:a,monthlyGis:r,annualGIS:l}}}var C=function(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app-header"},"Should I Cash out my RRSP?"),r.a.createElement(h,{runScenarios:function(e){var t=function(e){return{cashOutBefore:F(e),cashOutAfter:y(e)}}(e);l(t),console.log("Run scenarios for %o",e),console.log("Result = %o",t)}}),r.a.createElement(T,{data:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,1,2]]]);
//# sourceMappingURL=main.43b5cfd9.chunk.js.map
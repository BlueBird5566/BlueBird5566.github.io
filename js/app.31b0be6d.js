(function(){var e={8846:function(e,t,n){"use strict";var l=n(5705),a=(n(9138),n(9261),n(3700),n(3632),n(1579),n(6236),n(1913),n(1806)),u=n(5414),r=n(8447),i=n(3798),o=n.n(i),c=n(2420),s=n(7156);const d={class:"version-container"},f={class:"flex gap-2",style:{"text-align":"left"}},v={key:0},p={class:"table-container"},b=(0,a.Lk)("div",{style:{"margin-top":"30px"}},null,-1);var k={__name:"App",setup(e){const t=(0,u.KR)(""),n=(0,u.KR)([]),l=(0,u.KR)(),i=(0,u.KR)(!1);let k,h;(0,a.sV)((async()=>{k=await o()({locateFile:e=>`https://sql.js.org/dist/${e}`});const e=await fetch("/css/style.css"),t=await e.arrayBuffer();h=new k.Database(new Uint8Array(t)),R()}));const y=(0,u.KR)(),g=(0,u.KR)(),m=(0,u.KR)(),_=(0,u.KR)(),R=()=>{if(h)try{const e=h.prepare("SELECT YEAR || '/' || BulletinDate as date, AID || ' (Stock)' as aid, Moderator, BulletinLink FROM ViolationRecords WHERE Change is null  order by BulletinLink desc  limit 1 ");e.step();const t=e.getAsObject();y.value=t.date,g.value=t.aid,_.value=t.BulletinLink,m.value=t.Moderator}catch(e){console.error("Query failed:",e)}else alert("Database not initialized.")},F=()=>{if(h)if(t.value=t.value.trim(),t.value)try{const e=h.prepare("SELECT YEAR || '/' || BulletinDate as date, AID || ' (Stock)' as aid, ViolationRule, Punish, BulletinLink FROM ViolationRecords WHERE userId = :userId COLLATE NOCASE AND Change is null order by date ");e.bind({":userId":t.value});const a=[];while(e.step())a.push(e.getAsObject());n.value=[],l.value="",a.length>0?n.value=a:l.value="查無水桶公告紀錄 (有可能只是刪文 板主沒公告 可在檢舉板搜尋)"}catch(e){console.error("Query failed:",e)}else(0,c.nk)({type:"error",message:"請輸入帳號"});else alert("Database not initialized.")},w=()=>{i.value=!i.value},E=()=>{const e=["date","aid","ViolationRule","Punish"],t=n.value.map((t=>e.map((e=>t[e])).join("\t"))).join("\n"),l=document.createElement("textarea");l.value=t,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),(0,c.nk)({type:"success",message:"已複製到剪貼簿"})};return(e,o)=>{const c=(0,a.g2)("el-icon"),k=(0,a.g2)("el-tag"),h=(0,a.g2)("el-link"),R=(0,a.g2)("el-input"),O=(0,a.g2)("el-form-item"),C=(0,a.g2)("el-button"),L=(0,a.g2)("el-form"),j=(0,a.g2)("el-table-column"),x=(0,a.g2)("el-table"),A=(0,a.g2)("el-text");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",d,[(0,a.Lk)("div",f,[(0,a.bF)(k,{type:"primary",onClick:w},{default:(0,a.k6)((()=>[(0,a.eW)(" 目前同步進度 "),(0,a.bF)(c,null,{default:(0,a.k6)((()=>[i.value?((0,a.uX)(),(0,a.Wv)((0,u.R1)(s.ziD),{key:1})):((0,a.uX)(),(0,a.Wv)((0,u.R1)(s.BHL),{key:0}))])),_:1})])),_:1})]),i.value?((0,a.uX)(),(0,a.CE)("div",v,[(0,a.bF)(h,{href:_.value,target:"_blank"},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(m.value)+" "+(0,r.v_)(y.value)+" "+(0,r.v_)(g.value),1)])),_:1},8,["href"])])):(0,a.Q3)("",!0)]),(0,a.bF)(L,{inline:!0},{default:(0,a.k6)((()=>[(0,a.bF)(O,{label:"帳號",required:""},{default:(0,a.k6)((()=>[(0,a.bF)(R,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),placeholder:"請輸入帳號",clearable:!0,style:{width:"200px"}},null,8,["modelValue"])])),_:1}),(0,a.bF)(O,null,{default:(0,a.k6)((()=>[(0,a.bF)(C,{type:"primary",size:"default",onClick:F},{default:(0,a.k6)((()=>[(0,a.eW)("查詢")])),_:1})])),_:1})])),_:1}),(0,a.Lk)("div",p,[n.value.length>0?((0,a.uX)(),(0,a.Wv)(x,{key:0,data:n.value},{default:(0,a.k6)((()=>[(0,a.bF)(j,{prop:"date",label:"日期"}),(0,a.bF)(j,{label:"文章代碼"},{default:(0,a.k6)((({row:e})=>[(0,a.bF)(h,{href:e.BulletinLink,target:"_blank"},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(e.aid),1)])),_:2},1032,["href"])])),_:1}),(0,a.bF)(j,{prop:"ViolationRule",label:"違反板規"}),(0,a.bF)(j,{prop:"Punish",label:"處置方式"})])),_:1},8,["data"])):(0,a.Q3)("",!0),b,n.value.length>0?((0,a.uX)(),(0,a.Wv)(C,{key:1,type:"warning",onClick:E},{default:(0,a.k6)((()=>[(0,a.bF)(c,null,{default:(0,a.k6)((()=>[(0,a.bF)((0,u.R1)(s.f5b))])),_:1}),(0,a.eW)(" 複製到剪貼簿")])),_:1})):(0,a.Q3)("",!0),(0,a.bF)(A,{class:"mx-1",type:"info"},{default:(0,a.k6)((()=>[(0,a.eW)((0,r.v_)(l.value),1)])),_:1})])],64)}}};const h=k;var y=h,g=n(685);n(6464);const m=(0,l.Ef)(y);m.use(g.A),m.mount("#app")},2122:function(){},728:function(){},4792:function(){}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var u=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,u){if(!l){var r=1/0;for(s=0;s<e.length;s++){l=e[s][0],a=e[s][1],u=e[s][2];for(var i=!0,o=0;o<l.length;o++)(!1&u||r>=u)&&Object.keys(n.O).every((function(e){return n.O[e](l[o])}))?l.splice(o--,1):(i=!1,u<r&&(r=u));if(i){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[l,a,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,u,r=l[0],i=l[1],o=l[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(o)var s=o(n)}for(t&&t(l);c<r.length;c++)u=r[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(s)},l=self["webpackChunkmy_vue3_project"]=self["webpackChunkmy_vue3_project"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(8846)}));l=n.O(l)})();
//# sourceMappingURL=app.31b0be6d.js.map
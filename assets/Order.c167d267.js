import{_ as U,q,h as t,X as D,r as l,o as s,c as _,k as c,w as v,u as a,z as C,F as h,d as b,e as I,a as u,t as f,Y as E}from"./index.53871c04.js";const M={class:"order-box"},T={class:"list"},X=["src"],Y={__name:"Order",setup(j){let L=q(),k=t([{text:"\u5168\u90E8",status:""},{text:"\u5F85\u4ED8\u6B3E",status:"0"},{text:"\u5F85\u786E\u8BA4",status:"1"},{text:"\u4EE3\u53D1\u8D27",status:"2"},{text:"\u5DF2\u53D1\u8D27",status:"3"},{text:"\u4EA4\u6613\u5B8C\u6210",status:"4"}]),d=t([]),n=t(!1),p=t(!1),o=t(!1),y=t(1),w=t(""),g=t(0),O=i=>{g.value=i},x=async()=>{o.value&&(d.value=[],o.value=!1);let i=await E(y.value++,w.value);i.data.list.length==0&&(p.value=!0),d.value=d.value.concat(i.data.list),n.value=!1};D(g,()=>{console.log(g.value),w.value=k.value[g.value].status,y.value=0,d.value=[],p.value=!1,x()});const V=()=>{p.value=!1,n.value=!0,x()};return(i,r)=>{const B=l("van-icon"),N=l("van-nav-bar"),R=l("van-tab"),S=l("van-tabs"),z=l("van-cell"),F=l("van-list"),P=l("van-pull-refresh");return s(),_("div",M,[c(N,{fixed:"",title:"\u6211\u7684\u8BA2\u5355","left-arrow":"",onClickLeft:r[0]||(r[0]=e=>a(L).back())},{right:v(()=>[c(B,{name:"ellipsis",size:"18"})]),_:1}),c(S,{onChange:a(O)},{default:v(()=>[(s(!0),_(h,null,b(a(k),e=>(s(),I(R,{key:e.text,title:e.text},null,8,["title"]))),128))]),_:1},8,["onChange"]),c(P,{modelValue:a(o),"onUpdate:modelValue":r[2]||(r[2]=e=>C(o)?o.value=e:o=e),onRefresh:V},{default:v(()=>[c(F,{offset:80,loading:a(n),"onUpdate:loading":r[1]||(r[1]=e=>C(n)?n.value=e:n=e),finished:a(p),"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:a(x)},{default:v(()=>[(s(!0),_(h,null,b(a(d),e=>(s(),I(z,{key:e.orderId},{default:v(A=>[u("div",T,[u("p",null," \u8BA2\u5355\u65F6\u95F4:"+f(e.createTime)+"\u2014\u2014\u2014\u2014 "+f(e.orderStatusString),1),(s(!0),_(h,null,b(e.newBeeMallOrderItemVOS,m=>(s(),_("div",{key:m.goodsId},[u("img",{src:m.goodsCoverImg,style:{width:"180px"},alt:""},null,8,X),u("p",null,"\u540D\u79F0\uFF1A"+f(m.goodsName),1),u("p",null,"\u5355\u4EF7\uFF1A"+f(m.sellingPrice),1)]))),128)),u("p",null,"\u603B\u4EF7\u683C\uFF1A"+f(e.totalPrice),1)])]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])]),_:1},8,["modelValue"])])}}},H=U(Y,[["__scopeId","data-v-a0278e00"]]);export{H as default};

import{_ as L,g as x,m as y,D,q as N,h as k,I as w,r as s,o as P,c as S,j as e,w as u,u as n,a,t as p,p as T,l as B,J as M,K as A,T as H}from"./index.65ef0bc3.js";const f=i=>(T("data-v-bfd32452"),i=i(),B(),i),R={class:"product-info"},V=["src"],$={class:"info-goodsName"},j=f(()=>a("p",{class:"info-p"},"\u514D\u90AE\u8D39 \u987A\u4E30\u5FEB\u9012",-1)),q={class:"info-price"},E=f(()=>a("ul",{class:"info-ul"},[a("li",null,"\u6982\u8FF0"),a("li",null,"\u53C2\u6570"),a("li",null,"\u5B89\u88C5\u670D\u52A1"),a("li",{class:"info-ul-li"},"\u5E38\u89C1\u95EE\u9898")],-1)),J=["innerHTML"],K={__name:"Info",setup(i){let o=x({goodsCarouselList:[],goodsCoverImg:"",goodsDetailContent:"",goodsId:0,goodsIntro:"",goodsName:"",originalPrice:0,sellingPrice:0,tag:"",flag:!0}),d=y(),r=D(),c=N();k(()=>{v(),c.changeCartListAsync()});let v=()=>{w(r.params.productId).then(t=>{o.goodsCarouselList=t.data.goodsCarouselList,o.goodsCoverImg=t.data.goodsCoverImg,o.goodsDetailContent=t.data.goodsDetailContent,o.goodsId=t.data.goodsId,o.goodsIntro=t.data.goodsIntro,o.goodsName=t.data.goodsName,o.originalPrice=t.data.originalPrice,o.sellingPrice=t.data.sellingPrice,o.tag=t.data.tag})},m=()=>{!o.flag||(o.flag=!1,M({goodsId:r.params.productId,goodsCount:1}).then(t=>{o.flag=!0,t.resultCode==200?(A("\u6DFB\u52A0\u6210\u529F"),c.changeCartListAsync()):H.fail("\u5546\u54C1\u5DF2\u5B58\u5728")}))};return(t,l)=>{const C=s("van-icon"),I=s("van-nav-bar"),_=s("van-action-bar-icon"),g=s("van-action-bar-button"),h=s("van-action-bar");return P(),S("div",null,[e(I,{title:"\u5546\u54C1\u8BE6\u60C5","left-arrow":"",onClickLeft:l[0]||(l[0]=b=>n(d).back())},{right:u(()=>[e(C,{name:"ellipsis"})]),_:1}),a("div",R,[a("img",{style:{width:"100%"},src:n(o).goodsCoverImg,alt:""},null,8,V),a("div",$,p(n(o).goodsName),1),j,a("p",q,"\uFFE5"+p(n(o).sellingPrice),1),E,a("div",{innerHTML:n(o).goodsDetailContent,class:"info-content"},null,8,J)]),e(h,null,{default:u(()=>[e(_,{icon:"chat-o",text:"\u5BA2\u670D",dot:""}),e(_,{icon:"cart-o",text:"\u8D2D\u7269\u8F66",badge:n(c).cartNum,onClick:l[1]||(l[1]=b=>n(d).push("/cart"))},null,8,["badge"]),e(g,{type:"warning",text:"\u52A0\u5165\u8D2D\u7269\u8F66",onClick:n(m)},null,8,["onClick"]),e(g,{type:"danger",text:"\u7ACB\u5373\u8D2D\u4E70"})]),_:1})])}}},F=L(K,[["__scopeId","data-v-bfd32452"]]);export{F as default};

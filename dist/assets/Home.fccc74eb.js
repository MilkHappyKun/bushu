import{r as _,o as n,c as i,a as e,b,F as h,d as v,e as f,w as t,t as g,f as y,_ as $,g as k,h as T,i as B,n as S,u as c,j as l,k as C,p as E,l as N}from"./index.65ef0bc3.js";const H={class:"good"},L={class:"good-header"},U={class:"good-box"},V={class:"img_box"},D=["src"],F={class:"good-desc"},j={class:"title"},z={class:"price"},p={__name:"Goods",props:{dataItem:Array},setup(d){return(o,u)=>{const m=_("router-link");return n(),i("div",H,[e("div",L,[b(o.$slots,"title",{},()=>[y("\u9ED8\u8BA4\u6807\u9898")])]),e("ul",U,[(n(!0),i(h,null,v(d.dataItem,s=>(n(),f(m,{class:"good-item",tag:"li",to:"/info/"+s.goodsId},{default:t(()=>[e("div",V,[e("img",{src:s.goodsCoverImg,alt:""},null,8,D)]),e("div",F,[e("div",j,g(s.goodsName),1),e("div",z,g(s.sellingPrice+".00\uFFE5"),1)])]),_:2},1032,["to"]))),256))])])}}};const a=d=>(E("data-v-5b87f378"),d=d(),N(),d),A={class:"home_box"},M=a(()=>e("div",{class:"left_box"},null,-1)),P=a(()=>e("div",{class:"middle_box"},null,-1)),q=a(()=>e("div",{class:"right_box"},null,-1)),J=[M,P,q],K=["src"],O=a(()=>e("div",{class:"icon"},"ml",-1)),Q=a(()=>e("div",{class:"text"},"\u4E25\u9009",-1)),R=a(()=>e("div",null,[e("h3",null,"\u65B0\u54C1\u4E0A\u7EBF")],-1)),W=a(()=>e("div",null,[e("h3",null,"\u70ED\u9500\u5546\u54C1")],-1)),X=a(()=>e("div",null,[e("h3",null,"\u6700\u65B0\u63A8\u8350")],-1)),Y={__name:"Home",setup(d){let o=k({isTop:!0,carousels:[],hotGoodses:[],newGoodses:[],recommendGoodses:[]}),u=()=>{(document.documentElement.scrollTop||document.body.scrollTop)>50?o.isTop=!1:o.isTop=!0},m=()=>{C().then(s=>{o.carousels=s.data.carousels,o.hotGoodses=s.data.hotGoodses,o.newGoodses=s.data.newGoodses,o.recommendGoodses=s.data.recommendGoodses})};return T(()=>{window.addEventListener("scroll",u),m()}),B(()=>{window.removeEventListener("scroll",u)}),(s,Z)=>{const x=_("van-swipe-item"),w=_("van-swipe"),I=_("van-grid-item"),G=_("van-grid");return n(),i("div",A,[e("header",{class:S(["header_box",{active:!c(o).isTop}])},J,2),l(w,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:t(()=>[(n(!0),i(h,null,v(c(o).carousels,r=>(n(),f(x,{key:r.carouselUrl},{default:t(()=>[e("img",{src:r.carouselUrl,alt:""},null,8,K)]),_:2},1024))),128))]),_:1}),l(G,{"column-num":5,border:!1},{default:t(()=>[(n(),i(h,null,v(10,r=>l(I,{key:r,icon:"photo-o",text:"\u6587\u5B57"},{icon:t(()=>[O]),text:t(()=>[Q]),_:2},1024)),64))]),_:1}),l(p,{dataItem:c(o).newGoodses},{title:t(()=>[R]),_:1},8,["dataItem"]),l(p,{dataItem:c(o).hotGoodses},{title:t(()=>[W]),_:1},8,["dataItem"]),l(p,{dataItem:c(o).recommendGoodses},{title:t(()=>[X]),_:1},8,["dataItem"])])}}},oe=$(Y,[["__scopeId","data-v-5b87f378"]]);export{oe as default};

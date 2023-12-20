import{_ as O}from"./CpNavBar-f5ea3594.js";import{d as y,e as c,f as i,g as _,F as B,B as C,i as e,t as l,k as N,w as p,l as w,J as v,p as F,q as M,a as S,j as s,h as a}from"./index-bda5a601.js";import{c as V}from"./index-743b3328.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./consult-62fdb768.js";import"./request-a4462e17.js";import"./order-8dd764c6.js";import"./index-e2c7d3ed.js";const T=r=>(F("data-v-e7c9d19b"),r=r(),M(),r),q={class:"order-medical"},j=T(()=>e("div",{class:"head"},[e("h3",null,"优医药房"),e("small",null,"优医质保 假一赔十")],-1)),z=["src"],E={class:"info"},J={class:"name"},L={class:"size"},P={class:"price"},R={key:0,class:"desc"},A=y({__name:"OrderMedical",props:{medicines:{default:()=>[]}},setup(r){return(d,t)=>{const u=c("van-tag");return i(),_("div",q,[j,(i(!0),_(B,null,C(d.medicines,n=>(i(),_("div",{class:"item van-hairline--top",key:n.id},[e("img",{class:"img",src:n.avatar,alt:""},null,8,z),e("div",E,[e("p",J,[e("span",null,l(n.name),1),e("span",null,"x"+l(n.quantity),1)]),e("p",L,[n.prescriptionFlag===1?(i(),N(u,{key:0},{default:p(()=>[w("处方药")]),_:1})):v("",!0),e("span",null,l(n.specs),1)]),e("p",P,"￥"+l(n.amount),1)]),n.usageDosag?(i(),_("div",R,l(n.usageDosag),1)):v("",!0)]))),128))])}}});const G=$(A,[["__scopeId","data-v-e7c9d19b"]]),H={key:0,class:"order-detail-page"},K={class:"order-head"},Q={class:"logistics"},U={class:"order-detail"},W=y({__name:"OrderDetail",setup(r){const d=S(),{order:t}=V(d.params.id);return(u,n)=>{var m,h,g;const x=O,b=c("van-icon"),o=c("van-cell"),k=c("van-cell-group"),D=c("van-action-bar-button"),I=c("van-action-bar");return s(t)?(i(),_("div",H,[a(x,{title:"药品订单详情"}),e("div",K,[e("div",{class:"card",onClick:n[0]||(n[0]=X=>{var f;return u.$router.push(`/order/logistics/${(f=s(t))==null?void 0:f.id}`)})},[e("div",Q,[e("p",null,l((m=s(t).expressInfo)==null?void 0:m.content),1),e("p",null,l((h=s(t).expressInfo)==null?void 0:h.time),1)]),a(b,{name:"arrow"})])]),a(G,{medicines:(g=s(t))==null?void 0:g.medicines},null,8,["medicines"]),e("div",U,[a(k,null,{default:p(()=>[a(o,{title:"药品金额",value:`￥${s(t).payment}`},null,8,["value"]),a(o,{title:"运费",value:`￥${s(t).expressFee}`},null,8,["value"]),a(o,{title:"优惠券",value:`-￥${s(t).couponDeduction}`},null,8,["value"]),a(o,{title:"实付款",value:`￥${s(t).actualPayment}`,class:"price"},null,8,["value"]),a(o,{title:"订单编号",value:s(t).orderNo},null,8,["value"]),a(o,{title:"创建时间",value:s(t).createTime},null,8,["value"]),a(o,{title:"支付时间",value:s(t).payTime},null,8,["value"]),a(o,{title:"支付方式",value:s(t).paymentMethod===0?"微信":"支付宝"},null,8,["value"])]),_:1})]),a(I,null,{default:p(()=>[a(D,{type:"primary",text:"确认收货"})]),_:1})])):v("",!0)}}});const le=$(W,[["__scopeId","data-v-845de303"]]);export{le as default};

"use strict";(self["webpackChunkhackathon"]=self["webpackChunkhackathon"]||[]).push([[345],{7345:function(e,n,i){i.r(n),i.d(n,{default:function(){return c}});var t=function(){var e=this,n=e._self._c;return n("div",{ref:"earthContainer",staticStyle:{width:"100%",height:"100vh"}})},o=[],a=i(8776),r=i(2951),d={name:"PlanetaTierra",mounted(){this.initEarth()},methods:{initEarth(){const e=new a.Z58,n=new a.ubm(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=3;const i=new a.JeP;i.setSize(window.innerWidth,window.innerHeight),this.$refs.earthContainer.appendChild(i.domElement);const t=new a.Tap,o=t.load("https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"),d=t.load("https://upload.wikimedia.org/wikipedia/commons/c/c3/Earth_relief_location_map.jpg"),s=new a.Gu$(1,64,64),w=new a.tXL({map:o,displacementMap:d,displacementScale:.1}),h=new a.ZyN(16777215,1);h.position.set(5,5,5),e.add(h);const c=new a.eaF(s,w);e.add(c);const p=new r.N(n,i.domElement);p.enableZoom=!0,p.zoomSpeed=.5,p.enablePan=!1;const l=()=>{requestAnimationFrame(l),c.rotation.y+=.001,i.render(e,n)};l(),window.addEventListener("resize",(()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}))}}},s=d,w=i(1656),h=(0,w.A)(s,t,o,!1,null,"17c6ec54",null),c=h.exports}}]);
//# sourceMappingURL=345.f81e0cb7.js.map
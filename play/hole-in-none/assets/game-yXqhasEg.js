import{c as e,d as t,f as n,i as r,l as i,m as a,n as o,o as s,p as c,r as l,s as u,u as d}from"./quality-DXTdBFvc.js";import{c as f,d as p,i as m,l as h,n as g}from"./gui-BUpfGhge.js";import{n as _,r as v,t as y}from"./pageState-xrz5ovSz.js";import{a as b,n as x,r as S,t as C}from"./index-DbN1Na5s.js";import{A as w,At as T,B as E,Bn as D,C as O,D as k,Dn as A,E as j,F as ee,Fn as M,Ft as te,G as ne,Gn as N,Gt as re,H as ie,I as ae,In as oe,Jn as se,K as ce,L as le,Lt as ue,Nn as de,Nt as fe,O as pe,P as me,Qn as he,R as ge,Rn as _e,Rt as P,Tn as ve,Tt as ye,Un as be,V as xe,Vn as Se,W as Ce,Wn as we,X as Te,Yn as Ee,_t as F,a as De,b as Oe,c as I,d as ke,et as Ae,f as je,g as Me,gt as Ne,ht as Pe,ir as L,jt as Fe,k as R,kt as Ie,l as Le,lt as Re,m as z,mn as ze,mt as B,n as Be,nr as Ve,o as He,ot as Ue,p as We,pt as Ge,q as Ke,qn as qe,r as Je,rr as V,s as Ye,sr as Xe,st as Ze,tr as Qe,vt as $e,xt as et,z as tt,zn as nt}from"./three-CCtIgcpQ.js";import{n as rt,t as it}from"./three-CurUtuWh.js";import{$ as at,A as ot,At as st,B as ct,Bt as lt,C as ut,Ct as dt,D as ft,Dt as pt,E as mt,Et as ht,F as gt,Ft as _t,G as vt,Gt as yt,H as bt,Ht as xt,I as St,It as Ct,J as wt,K as Tt,Kt as Et,L as Dt,Lt as Ot,M as kt,N as At,Nt as jt,O as Mt,Ot as Nt,P as Pt,Q as Ft,R as It,Rt as Lt,S as Rt,T as zt,Tt as Bt,U as Vt,Ut as Ht,V as Ut,Vt as Wt,W as Gt,Wt as Kt,X as qt,Y as Jt,Z as Yt,_ as Xt,_t as Zt,a as Qt,at as $t,b as en,bt as tn,c as nn,ct as rn,d as an,dt as on,et as H,ft as sn,g as cn,gt as ln,h as un,ht as dn,it as fn,j as pn,jt as mn,k as hn,kt as gn,lt as _n,m as vn,mt as yn,n as bn,nt as xn,ot as Sn,p as Cn,pt as wn,q as Tn,rt as En,st as U,tt as Dn,ut as On,v as kn,vt as An,w as jn,wt as Mn,x as Nn,xt as Pn,y as Fn,yt as In,z as Ln,zt as Rn}from"./shopLayout-r3ooFxhR.js";import{n as zn,r as Bn,t as Vn}from"./three-ClFQvZDL.js";import{i as Hn,t as Un}from"./shopLink-BxWwKdum.js";var Wn={hud:!1,seed:1,quality:`auto`,renderScale:1,sandbox:!1},Gn={dayT:.3,paused:!1,cycleSeconds:90,happySeconds:rn.happySeconds,floodlights:!0,darknessOverride:-1,golferCount:20,fireInterval:4.3,aimSpread:3.5,longShotsHang:!0,longShotMax:t,specialRate:.25,homingSpeed:2.5,pickerSpeed:6,pickerCleans:!1,decalLife:30,sadOnHit:!0,sadCooldown:3.5,shadowMinElevDeg:55,shadowFadeElevDeg:28,autopilot:!0},Kn=new Set,qn=e=>console.error(`[assets] tracked load failed`,e);function Jn(e){Kn.add(e.then(()=>void 0,qn))}async function Yn(){let e=-1;for(;Kn.size!==e;)e=Kn.size,await Promise.all([...Kn])}var Xn=1.5;function Zn(e){let t=navigator.userAgent,n=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|Opera Mini/i.test(t),r=/Macintosh/.test(t)&&navigator.maxTouchPoints>1,i=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches,a=n||r||i,o=navigator.maxTouchPoints>0||`ontouchstart`in window,s=a?1:Xn,c=window.devicePixelRatio||1;return{isMobile:a,isTouch:o,dprCap:s,dpr:e===void 0?Math.min(c,s):e,antialias:!a}}var Qn=class{cap;frameMs;cpuMs;stamps;scratch;head=0;size=0;constructor(e=2048){this.cap=e,this.frameMs=new Float32Array(e),this.cpuMs=new Float32Array(e),this.stamps=new Float64Array(e),this.scratch=new Float32Array(e)}record(e,t,n){this.frameMs[this.head]=e,this.cpuMs[this.head]=t,this.stamps[this.head]=n,this.head=(this.head+1)%this.cap,this.size<this.cap&&this.size++}compute(e,t,n){let r=0,i=0,a=0,o=0;for(let n=0;n<this.size;n++){let s=(this.head-1-n+this.cap)%this.cap;if(e-this.stamps[s]>t)break;let c=this.frameMs[s];this.scratch[r++]=c,i+=c,a+=this.cpuMs[s],c>o&&(o=c)}if(n.samples=r,r===0)return n.fpsAvg=n.fpsLow1=n.frameMsAvg=n.frameMsMax=n.cpuMsAvg=0,n;let s=this.scratch.subarray(0,r).sort(),c=Math.max(1,Math.ceil(r*.01)),l=0;for(let e=r-c;e<r;e++)l+=s[e];return l/=c,n.frameMsAvg=i/r,n.fpsAvg=1e3/n.frameMsAvg,n.fpsLow1=l>0?1e3/l:0,n.frameMsMax=o,n.cpuMsAvg=a/r,n}},$n=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`,`PageUp`,`PageDown`,`Home`,`End`]),er=e=>e instanceof HTMLElement&&(e.tagName===`BUTTON`||e.tagName===`INPUT`),tr=class{up=!1;down=!1;left=!1;right=!1;target;constructor(e=window){this.target=e,e.addEventListener(`keydown`,this.onKeyDown),e.addEventListener(`keyup`,this.onKeyUp),e.addEventListener(`blur`,this.onBlur)}get x(){return+!!this.right-!!this.left}get y(){return+!!this.down-!!this.up}get active(){return this.up||this.down||this.left||this.right}dispose(){this.target.removeEventListener(`keydown`,this.onKeyDown),this.target.removeEventListener(`keyup`,this.onKeyUp),this.target.removeEventListener(`blur`,this.onBlur)}set(e,t){let n=e.code;if(!n){let t=(e.key||``).toLowerCase();n=t===`w`||t===`z`?`KeyW`:t===`a`||t===`q`?`KeyA`:t===`s`?`KeyS`:t===`d`?`KeyD`:e.key}switch(n){case`KeyW`:case`ArrowUp`:this.up=t;break;case`KeyS`:case`ArrowDown`:this.down=t;break;case`KeyA`:case`ArrowLeft`:this.left=t;break;case`KeyD`:case`ArrowRight`:this.right=t}}onKeyDown=e=>{$n.has(e.code)&&!er(e.target)&&e.preventDefault(),this.set(e,!0)};onKeyUp=e=>{$n.has(e.code)&&!er(e.target)&&e.preventDefault(),this.set(e,!1)};onBlur=()=>{this.up=this.down=this.left=this.right=!1}},nr=class{x=0;y=0;enabled=!0;active=!1;surface;radius;deadZone;base;knob;pointerId=-1;ox=0;oy=0;constructor(e,t=56,n=.12){this.surface=e,this.radius=t,this.deadZone=n,this.base=document.createElement(`div`),this.knob=document.createElement(`div`);let r=t*2;Object.assign(this.base.style,{position:`fixed`,left:`0px`,top:`0px`,width:`${r}px`,height:`${r}px`,marginLeft:`${-t}px`,marginTop:`${-t}px`,borderRadius:`50%`,border:`2px solid rgba(255,255,255,0.55)`,background:`rgba(0,0,0,0.18)`,pointerEvents:`none`,display:`none`,zIndex:`5`});let i=Math.round(t*.9);Object.assign(this.knob.style,{position:`fixed`,left:`0px`,top:`0px`,width:`${i}px`,height:`${i}px`,marginLeft:`${-i/2}px`,marginTop:`${-i/2}px`,borderRadius:`50%`,background:`rgba(255,255,255,0.65)`,pointerEvents:`none`,display:`none`,zIndex:`6`}),document.body.appendChild(this.base),document.body.appendChild(this.knob),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onUp),e.addEventListener(`lostpointercapture`,this.onUp),e.addEventListener(`contextmenu`,this.onContextMenu)}dispose(){let e=this.surface;e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onUp),e.removeEventListener(`lostpointercapture`,this.onUp),e.removeEventListener(`contextmenu`,this.onContextMenu),this.base.remove(),this.knob.remove()}onDown=e=>{if(this.pointerId===-1&&this.enabled&&(e.pointerType!==`mouse`||e.button===0)){this.pointerId=e.pointerId,this.ox=e.clientX,this.oy=e.clientY,this.active=!0,this.x=0,this.y=0;try{this.surface.setPointerCapture(e.pointerId)}catch{}this.base.style.transform=`translate(${this.ox}px, ${this.oy}px)`,this.knob.style.transform=`translate(${this.ox}px, ${this.oy}px)`,this.base.style.display=`block`,this.knob.style.display=`block`,e.preventDefault()}};onMove=e=>{if(e.pointerId!==this.pointerId)return;let t=e.clientX-this.ox,n=e.clientY-this.oy,r=Math.sqrt(t*t+n*n);r>this.radius&&(t*=this.radius/r,n*=this.radius/r);let i=t/this.radius,a=n/this.radius,o=Math.sqrt(i*i+a*a);if(o<this.deadZone)this.x=0,this.y=0;else{let e=(o-this.deadZone)/(1-this.deadZone)/o;this.x=i*e,this.y=a*e}this.knob.style.transform=`translate(${this.ox+t}px, ${this.oy+n}px)`,e.preventDefault()};onUp=e=>{e.pointerId===this.pointerId&&(this.pointerId=-1,this.active=!1,this.x=0,this.y=0,this.base.style.display=`none`,this.knob.style.display=`none`)};onContextMenu=e=>{e.preventDefault()}},rr=class{x=0;y=0;lastActiveMs=-1/0;keyboard;joystick;constructor(e){this.keyboard=new tr(window),this.joystick=new nr(e)}update(e){let t=this.keyboard.x+this.joystick.x,n=this.keyboard.y+this.joystick.y,r=Math.sqrt(t*t+n*n);r>1&&(t/=r,n/=r),this.x=t,this.y=n,(this.keyboard.active||this.joystick.active)&&(this.lastActiveMs=e)}dispose(){this.keyboard.dispose(),this.joystick.dispose()}},ir=class{s;constructor(e=1){this.s=e>>>0||1}get state(){return this.s}set state(e){this.s=e>>>0||1}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e){return Math.floor(this.next()*e)}pick(e){return e[this.int(e.length)]}};function ar({canvas:e,device:t,shadows:n}){let r=new rt({canvas:e,antialias:t.antialias,alpha:!1,depth:!0,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`});return r.setPixelRatio(t.dpr),r.shadowMap.enabled=n,r.shadowMap.type=1,r.shadowMap.autoUpdate=!0,r}function or(e,t,n){let r=0,i=0,a=(e,a)=>{let o=Math.max(1,Math.round(e)),s=Math.max(1,Math.round(a));(o!==r||s!==i)&&(r=o,i=s,t.setSize(r,i,!1),n(r,i))},o=new ResizeObserver(e=>{let t=e[0].contentRect;a(t.width,t.height)});o.observe(e);let s=()=>a(e.clientWidth,e.clientHeight);return window.addEventListener(`orientationchange`,s),a(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),()=>{o.disconnect(),window.removeEventListener(`orientationchange`,s)}}var W={uTime:{value:0},uWind:{value:new L(.8,.6,1,.5)},uSunDir:{value:new V(.3,.8,.5).normalize()},uSunColor:{value:new z(2.5,2.4,2.2)},uHemiSky:{value:new z(1.2,1.3,1.5)},uHemiGround:{value:new z(.4,.45,.3)},uFloodPools:{value:Array.from({length:3},()=>new L(0,0,1,0))},uFloodHeads:{value:Array.from({length:3},()=>new L(0,16,0,20))},uFloodIslands:{value:Array.from({length:3},()=>new L(0,0,1,0))},uFloodColor:{value:new z(0,0,0)},uStyle:{value:new L(.45,.3,3,.25)},uRimColor:{value:new z(.8,.9,1)},uTermColor:{value:new z(1,.45,.3)},uCloud:{value:new L(.0055,.2,0,0)},uSkyZenith:{value:new z(.1,.3,.8)},uSkyHorizon:{value:new z(.5,.7,.9)},uSkyGlow:{value:new z(1,1,1)},uSkySun:{value:new L(0,1,0,1)},uSkyMoon:{value:new L(-.35,.78,-.52,0)},uShafts:{value:Array.from({length:6},()=>new L(0,0,0,1))},uShaftK:{value:Array.from({length:6},()=>new L(1,0,0,0))},uShaftDir:{value:new L(0,1,0,0)},uShaftColor:{value:new z(1,.8,.5)},uGrade:{value:new L(1,1,1,0)},uNoiseTex:{value:null},uBrushTex:{value:null},uShadowMap:{value:null},uShadowMatrix:{value:new Ne},uShadowParams:{value:new L(1/2048,.0015,0,.04)},uShadeTint:{value:new z(.62,.66,1)},uCel:{value:new L(.06,.35,.55,.4)},uHole:{value:new L(0,0,.8,0)},uGrassShade:{value:new L(.6,.7,1.6,.5)},uGrassHue:{value:new L(1,1,1,0)},uFloodShape:{value:new L(.6,.22,.6,0)},uFloodBox:{value:new L(25.5,40.5,-25,8)},uHeroPool:{value:new z(2.3,2.2,1.75)},uNight:{value:new L(0,.03,0,1)},uPlayerLight:{value:new L(1/72,1/49,.75,1)},uPlayerColor:{value:new z(0,0,0)},uPoolLook:{value:new L(.12,.1,1,.06)},uFlightLight:{value:new L(.18,1,0,0)},uPractical:{value:0},uBays:{value:[new L(-27,hn,hn+2.25,0),new L(Vt,bt,bt+2.85,0)]},uBayRows:{value:new L(3,Gt,ln-1,0)},uBayW:{value:ft}},sr=.02,cr=2.5,lr={params:null,urlStyle:null,amount:0},ur=new WeakSet;function dr(e){if(lr.params=e,ur.has(e))return;ur.add(e);let t=e.nightStyle;Object.defineProperty(e,"nightStyle",{configurable:!0,enumerable:!0,get:()=>t,set:e=>{t=e,lr.urlStyle=null}})}function fr(){if(lr.urlStyle!==null)return lr.urlStyle;let e=lr.params;return e?e.nightStyle:`moonlit`}var pr=e=>e<0?0:e>1?1:e,mr=(e,t,n)=>{let r=pr((n-e)/(t-e));return r*r*(3-2*r)};function hr(e,t){let n=lr.params,r=(fr()===`pitch-black`?pr(n?n.nightDarkness:1):0)*Math.max(1-mr(0,.05,t),mr(.93,.98,t))*mr(.5,.8,e);return lr.amount=r,W.uNight.value.x=r,r}function gr(e,t){if(e.pitchBlack=t,t<=0)return;let n=sr**+t;e.lightIntensity*=n,e.hemiIntensity*=n,e.rimIntensity*=n,e.zenith.multiplyScalar(n),e.horizon.multiplyScalar(n),e.glow.multiplyScalar(n),e.cloudLit.multiplyScalar(n),e.cloudShade.multiplyScalar(n),e.cloudRim.multiplyScalar(n),e.cloudRimK*=1-t,e.stars*=1-.6*t,e.gradeAmount+=(.1-e.gradeAmount)*t}function _r(e){let t=lr.amount;W.uNight.value.set(t,pr(e.minBallVisibility)**2.2,pr(e.minMarkerVisibility),Math.max(0,e.bayLight));let n=Math.max(1,e.playerLightRadius),r=Math.max(.5,e.playerLightHeight);W.uPlayerLight.value.set(1/(n*n),1/(r*r),pr(e.playerLightPlateau),e.playerLightNorthBias);let i=W.uPlayerColor.value;t>0?i.setHex(e.playerLightColor).multiplyScalar(cr*Math.max(0,e.playerLightIntensity)*t):i.setRGB(0,0,0);let a=pr(e.poolShaping);W.uPoolLook.value.set(.12*a,.1*a,a,.06*a),W.uFlightLight.value.set(Math.max(0,e.flightRim),1,0,0)}var vr=[`swing`,`fall`,`getup`,`walk`,`cheer`,`allyRun`],yr={swing:`00`,fall:`20`,getup:`21`,walk:`36`,cheer:`30`,allyRun:`33`},br={swing:{t0:0,t1:3,loop:!1},fall:{t0:0,t1:null,loop:!1,rootNormalise:`start`},getup:{t0:3,t1:6.6,loop:!1,rootNormalise:`end`,alignToEndOf:`fall`},walk:{t0:0,t1:null,loop:!0,inPlace:!0},cheer:{t0:0,t1:null,loop:!0,rootNormalise:`start`},allyRun:{t0:0,t1:null,loop:!0,inPlace:!0}},xr={length:1,gripDist:.08,aimFit:!0},Sr={aimFit:[-1.036,.11,-.238],straight:[-1.075,.11,.008]},Cr={duration:3,top:31/30,impact:1.22},wr={rate:1.22/1.48,clip:Cr,ballLocal:xr.aimFit?Sr.aimFit:Sr.straight},Tr={duration:Cr.duration/wr.rate,top:Cr.top/wr.rate,impact:Cr.impact/wr.rate};function Er(e){return e*wr.rate}var Dr={frames:1,metres:.03},Or={x:-wr.ballLocal[0]*1,z:-wr.ballLocal[2]*1},kr={high:1,medium:0,low:-1},Ar={walkSpeed:1.75,runSpeed:4.16,path:[[.91,-4],[.91,-2.72],[.91,-1.5],[Or.x,Or.z]],stagger:.2,arrivalDelay:.6};function jr(e,t,n,r){let i=e.length,a=Math.max(0,Math.min(i-2,t)),o=e[Math.max(0,a-1)],s=e[a],c=e[a+1],l=e[Math.min(i-1,a+2)],u=n*n,d=u*n,f=-.5*d+u-.5*n,p=1.5*d-2.5*u+1,m=-1.5*d+2*u+.5*n,h=.5*d-.5*u;r.x=o[0]*f+s[0]*p+c[0]*m+l[0]*h,r.z=o[1]*f+s[1]*p+c[1]*m+l[1]*h}var Mr=64;function Nr(){let e=Ar.path,t=e.length-1,n=new Float64Array(t*Mr+1),r={x:0,z:0},i=e[0][0],a=e[0][1];for(let o=1;o<=t*Mr;o++){let s=Math.min(t-1,Math.floor((o-1)/Mr));jr(e,s,(o-s*Mr)/Mr,r),n[o]=n[o-1]+Math.hypot(r.x-i,r.z-a),i=r.x,a=r.z}return n}var Pr=Nr(),Fr=e=>e[e.length-1];function Ir(){return Fr(Pr)/Ar.walkSpeed}function Lr(){let e=Ar.path,t=e[0],n=e[1],r=e[e.length-2],i=e[e.length-1];return Float64Array.of(t[0],t[1],Math.atan2(t[0]*-.5+n[0]*.5,t[1]*-.5+n[1]*.5),i[0],i[1],Math.atan2(r[0]*-.5+i[0]*.5,r[1]*-.5+i[1]*.5))}var Rr=Lr(),zr=Ir();function Br(e,t){let n=Ar.path,r=Pr.length-1;if(e<=0||e>=Pr[r]){let n=e<=0?0:3;t.x=Rr[n],t.z=Rr[n+1],t.yaw=Rr[n+2];return}let i=e,a=0,o=r;for(;o-a>1;){let e=a+o>>1;Pr[e]<=i?a=e:o=e}let s=Pr[o]-Pr[a],c=a+(s>1e-9?(i-Pr[a])/s:0),l=Math.min(n.length-2,Math.floor(c/Mr)),u=Math.min(1,c/Mr-l),d=n[l>0?l-1:0],f=n[l],p=n[l+1],m=n[l+2<n.length?l+2:n.length-1],h=u*u,g=h*u,_=-.5*g+h-.5*u,v=1.5*g-2.5*h+1,y=-1.5*g+2*h+.5*u,b=.5*g-.5*h,x=-1.5*h+2*u-.5,S=4.5*h-5*u,C=-4.5*h+4*u+.5,w=1.5*h-u;t.x=d[0]*_+f[0]*v+p[0]*y+m[0]*b,t.z=d[1]*_+f[1]*v+p[1]*y+m[1]*b,t.yaw=Math.atan2(d[0]*x+f[0]*S+p[0]*C+m[0]*w,d[1]*x+f[1]*S+p[1]*C+m[1]*w)}var Vr={lieMin:.3,compress:!0,fallSeconds:2.233,getupSeconds:3.6,getupBlend:.35},Hr=.4,Ur=.3,Wr={stagger:.13,onLoss:!0,blend:.25},Gr=.2,Kr=.4,qr=.5;function Jr(e){let t=[],n=new Uint8Array(e);for(let r=0;t.length<e&&r<4*e;r++){let i=0,a=.5;for(let e=r;e>0;e>>=1,a*=.5)e&1&&(i+=a);let o=Math.min(e-1,Math.floor(i*e));n[o]||(n[o]=1,t.push(o))}for(let r=0;r<e;r++)n[r]||t.push(r);return t}function Yr(e,t){let n=e.length,r=new Map;for(let t of e)r.set(t.bay,t);let i=0;for(let a=0;a<n;a++){let n=e[a],o=(a+1)*qr,s=Math.abs(i+1-o),c=Math.abs(i-o),l;if(Math.abs(s-c)>1e-6)l=+(s<c);else{let e=0;for(let t=1;t<=2;t++)for(let i of[r.get(n.bay-t),r.get(n.bay+t)])i&&i.sex>=0&&(e+=(i.sex?1:-1)*(3-t));if(e!==0)l=e>0?0:1;else{let e=Math.imul(217+t*977+a^1540483477,2654435761);e^=e>>>15,e=Math.imul(e,2246822507),e^=e>>>13,l=e&1^t&1}}n.sex=l,i+=l}}var Xr=class{slots=[];capacity=0;rows=0;active=0;pressure=1;fired=0;pickerChance=0;distracted=0;decoyChance=0;decoys=null;decoyed=0;timeouts=0;timeoutUntil=new Float32Array(dn);mode=new Uint8Array(dn);modeAt=new Float32Array(dn);leaveStart=-1;leaveInterval=1;leaveNext=0;leaveCut=0;dayLen=60;pinned=()=>!1;onLifeRestored=()=>{};forceType=-1;firedByType=new Uint32Array(8);demoType=new Uint8Array(dn).fill(255);demoTraj=new Uint8Array(dn);demoX=new Float32Array(dn);demoZ=new Float32Array(dn);demoFiredT=new Float32Array(dn).fill(-1);onShot=()=>{};onSwing=()=>{};tier=new Uint8Array(dn);nextSwing=new Float32Array(dn);cum=new Float32Array(yn.length*8);golfers=null;hole=1;clock=0;sims;rng;structure;rowOrder;constructor(e,t,n){this.sims=t,this.rng=n,this.structure=e,this.rowOrder=e.slotsByRow.map((e,t)=>Jr(e.length).map(n=>e[(n+t*5)%e.length])),this.rowOrder.forEach(Yr),this.setRows(1)}setRows(e){let t=Math.max(1,Math.min(this.rowOrder.length,Math.round(e)));this.structure.setRows(t),this.rows=t;let n=this.deal(t,this.slots);this.capacity=Math.min(n,dn),this.slots.length=this.capacity,this.active>this.capacity?this.place(this.capacity):this.golfers&&this.place(this.active)}deal(e,t){let n=this.rowOrder.slice(0,e),r=n.reduce((e,t)=>e+t.length,0);t.length=0;for(let e=0;t.length<r;e++)for(let r of n)e<r.length&&t.push(r[e]);return r}showTitleCrowd(e){let t=this.rowOrder.length,n=[],r=this.deal(In(1,rn.holes),n),i=Zt(1,0,rn.holes,Math.min(r,dn)),a=n.slice(0,i),o=new Set(a);for(let n=0;n<t;n++){let t=this.rowOrder[n],r=Math.max(1,Math.min(t.length,Math.round(t.length*e))),i=[];for(let e=0;e<t.length&&i.length<r;e++)o.has(t[e])||i.push(t[e]);i.sort((e,t)=>e.x-t.x);for(let e of i)a.push(e)}this.structure.setRows(t),this.rows=t,this.slots.length=0;for(let e of a)this.slots.push(e);return this.capacity=Math.min(this.slots.length,dn),this.slots.length=this.capacity,this.titleKeep=i,this.titleTiers(),this.place(this.capacity),this.standAll(),this.capacity}titleKeep=0;titleTiers(){let e=this.golfers;if(!(!e||this.titleKeep<=0))for(let t=0;t<this.capacity;t++)e.setTier(t,t<this.titleKeep?0:(t*5+1)%yn.length)}titleFiring=!1;titleClock=0;titleSeed=625341585;titleNext=new Float32Array(dn);titleRand(){let e=this.titleSeed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.titleSeed=e>>>0,this.titleSeed/4294967296}titleShoot(e){if(this.titleFiring=e,!e)return;let t=S.shotFirst;for(let e=0;e<dn;e++)this.titleNext[e]=this.titleClock+t[0]+this.titleRand()*(t[1]-t[0])}titleUpdate(e){let t=this.golfers;if(!t||e<=0)return;let n=this.titleClock+=e;if(!this.titleFiring)return;let r=S.shotEvery;for(let e=0;e<this.active;e++)this.titleNext[e]>n||this.mode[e]!==2||t.isSwinging(e)||t.swing(e)&&(this.titleNext[e]=n+r[0]+this.titleRand()*(r[1]-r[0]))}titleShot(e,t,n){let r=S,i=e+(this.titleRand()*2-1)*r.shotSpread,a=n+r.shotDist[0]+this.titleRand()*(r.shotDist[1]-r.shotDist[0]),o=r.shotFlight[0]+this.titleRand()*(r.shotFlight[1]-r.shotFlight[0]),s=this.titleRand()<r.shotHigh?lt.high:lt.mid;this.sims.ball.fire(e,t,n,i,a,o,this.titleClock,Kt.normal,s)}trimTitleCrowd(e,t){this.structure.setRows(e),this.rows=Math.max(1,Math.round(e));let n=Math.max(0,Math.min(t,this.capacity));for(let e=n;e<this.active;e++)this.mode[e]=0;this.place(n)}attach(e){this.golfers=e,e.autoSwing.enabled=!1,e.onImpact=(e,t,n,r)=>this.impact(e,t,n,r),this.titleTiers(),this.place(this.active)}buildAhead(e){this.structure.setRows(Math.max(this.rows,In(e,rn.holes)))}beginHole(e,t,n=!1){let r=this.active,i=this.slots.slice(0,r);if(this.titleKeep>0&&(this.titleFiring=!1,this.golfers))for(let e=0;e<dn;e++)this.golfers.setSwingTime(e,-1,!1);this.titleKeep=0,this.setRows(In(e,rn.holes)),this.dayLen=e>rn.holes?rn.endlessDayLength:_n(e),this.leaveStart=-1,this.hole=e,this.pressure=t,this.clock=0,this.timeoutUntil.fill(0);let a=An(e);for(let t=0;t<yn.length;t++){let n=0;for(let r=0;r<8;r++)n+=Wt(r,e,t),this.cum[t*8+r]=n}for(let e=0;e<this.capacity;e++)this.tier[e]=this.rng.next()<wn.topTierShare?a:this.rng.int(a+1),this.nextSwing[e]=rn.firstShotDelay+this.rng.next()*this.interval(e),this.golfers?.setTier(e,this.tier[e]);let o=Zt(e,0,rn.holes,this.capacity),s=0;for(let e=0;e<dn;e++)e>=o?(this.mode[e]=0,this.modeAt[e]=0):e<r&&this.mode[e]===2&&i[e]===this.slots[e]?this.modeAt[e]=0:n?(this.mode[e]=1,this.modeAt[e]=s++*Ar.stagger,this.nextSwing[e]=Math.max(this.nextSwing[e],this.modeAt[e]+zr+Ar.arrivalDelay)):(this.mode[e]=2,this.modeAt[e]=0);this.place(o),this.onLifeRestored()}standAll(){for(let e=0;e<dn;e++)this.mode[e]=e<this.active?2:0,this.modeAt[e]=0;this.timeoutUntil.fill(0),this.leaveStart=-1,this.onLifeRestored()}isTargetable(e){let t=this.mode[e];return e>=0&&e<this.active&&(t===2||t===3)}getupStart(e){let t=Vr,n=t.fallSeconds+t.getupSeconds,r=this.timeoutUntil[e]-this.modeAt[e],i=t.compress&&r<n+t.lieMin?n/Math.max(.05,r-t.lieMin):1;return this.timeoutUntil[e]-t.getupSeconds/i}update(e,t,n=!1){let r=this.golfers;if(!r||e<=0)return;this.clock+=e;let i=this.clock;for(let e=0;e<this.active;e++){let t=this.mode[e];t===1&&i>=this.modeAt[e]+zr?(this.mode[e]=2,this.modeAt[e]+=zr):t===3&&i>=this.timeoutUntil[e]?(this.mode[e]=2,this.modeAt[e]=this.timeoutUntil[e]):t===4&&i>=this.modeAt[e]+zr&&(this.mode[e]=5)}let a=this.active;for(;a>0&&this.mode[a-1]===5;)this.mode[--a]=0;if(a!==this.active&&this.place(a),(t||n)&&(this.leaveStart<0&&i>=this.dayLen-wn.leaveWindow&&(this.leaveStart=i,this.leaveNext=i,this.leaveCut=this.active,this.leaveInterval=Math.max(wn.leaveMinInterval,(wn.leaveWindow+rn.happySeconds-zr-Tr.duration)/Math.max(1,this.active))),this.leaveStart>=0)){if(i>=this.leaveNext&&this.leaveCut>0){let e=--this.leaveCut;this.leaveNext+=this.leaveInterval,r.swingQueued(e)&&r.setSwingTime(e,r.swingTime(e),!1)}for(let e=this.leaveCut;e<this.active;e++)this.mode[e]!==2||r.isSwinging(e)||r.swingQueued(e)||this.pinned(e)||(this.mode[e]=4,this.modeAt[e]=i)}if(!t)return;let o=Zt(this.hole,this.clock,rn.holes,this.capacity);if(o>this.active&&this.leaveStart<0){let e=this.active;this.place(o);for(let t=e;t<o;t++)this.mode[t]=1,this.modeAt[t]=i+(t-e)*Ar.stagger,this.nextSwing[t]=Math.max(this.clock+.4+this.rng.next()*this.interval(t)*.6,this.modeAt[t]+zr+Ar.arrivalDelay)}for(let e=0;e<this.active;e++)if(this.mode[e]===2&&!(this.leaveStart>=0&&e>=this.leaveCut)&&!(this.timeoutUntil[e]>this.clock)&&this.nextSwing[e]<=this.clock&&r.swing(e)){let t=1+(this.rng.next()*2-1)*wn.fireJitter;this.nextSwing[e]=this.clock+this.interval(e)*t}}interval(e){return yn[this.tier[e]].fireInterval/this.pressure}pickType(e){if(this.forceType>=0)return this.forceType;let t=e*8,n=this.rng.next()*this.cum[t+8-1],r=0;for(;r<7&&this.cum[t+r]<=n;)r++;return r}pickTrajectory(e){let t=Rn[Math.min(e,Rn.length-1)],n=this.rng.next()*(t[0]+t[1]+t[2]);return(n-=t[0])<0?lt.low:n<t[1]?lt.mid:lt.high}shotFlight(e,r,i=lt.mid){let a=c+e/mt*(n-c)+(this.rng.next()-.5)*d;a=Math.min(Math.max(n,t),Math.max(c,a));let o=gn[r];return Math.max(o.flightMin,a*o.flightScale*Lt[i].flightScale)}get time(){return this.clock}timeoutLeft(e){return Math.max(0,this.timeoutUntil[e]-this.clock)}timeOut(e,t){if(!this.isTargetable(e))return;let n=this.clock;this.mode[e]===2?(this.mode[e]=3,this.modeAt[e]=n,this.timeoutUntil[e]=n+t,this.golfers?.setSwingTime(e,-1,!1)):n<this.getupStart(e)?this.timeoutUntil[e]=Math.max(this.timeoutUntil[e],n+t):(this.modeAt[e]=n,this.timeoutUntil[e]=n+t),this.nextSwing[e]<this.timeoutUntil[e]&&(this.nextSwing[e]=this.timeoutUntil[e]+.3+this.rng.next()*.8),this.timeouts++}demoShot(e,t,n,r,i,a=0){let o=this.golfers;return!o||e<0||e>=this.active?!1:(this.mode[e]!==2&&(this.mode[e]=2,this.modeAt[e]=this.clock-10,this.onLifeRestored()),this.timeoutUntil[e]=0,this.demoType[e]=t,this.demoTraj[e]=n,this.demoX[e]=r,this.demoZ[e]=i,this.demoFiredT[e]=-1,o.setSwingTime(e,Math.max(0,Math.min(a,Tr.impact-.2)),!1),!0)}clearDemo(){this.demoType.fill(255),this.demoFiredT.fill(-1)}static snapSize(){return[dn*4,6,dn*2]}save(e){e.wd(this.clock),e.wd(this.active);let t=this.golfers;for(let n=0;n<this.active;n++)e.wf(this.nextSwing[n]),e.wf(this.timeoutUntil[n]),e.wf(t?t.swingTime(n):-1),e.wb(t&&t.swingQueued(n)?1:0);e.wd(this.leaveStart),e.wd(this.leaveInterval),e.wd(this.leaveNext),e.wd(this.leaveCut);for(let t=0;t<this.active;t++)e.wf(this.modeAt[t]),e.wb(this.mode[t])}restore(e){this.clock=e.rd();let t=e.rd();t!==this.active&&this.place(t);let n=this.golfers;for(let r=0;r<t;r++){this.nextSwing[r]=e.rf(),this.timeoutUntil[r]=e.rf();let t=e.rf(),i=e.rb()===1;n?.setSwingTime(r,t,i)}this.leaveStart=e.rd(),this.leaveInterval=e.rd(),this.leaveNext=e.rd(),this.leaveCut=e.rd();for(let n=0;n<t;n++)this.modeAt[n]=e.rf(),this.mode[n]=e.rb();for(let e=t;e<dn;e++)this.mode[e]=0,this.modeAt[e]=0,this.timeoutUntil[e]=0,n?.setSwingTime(e,-1,!1);this.onLifeRestored()}place(e){this.active=e,this.golfers?.setSlots(this.slots,e)}impact(e,t,r,i){if(this.titleKeep>0){this.mode[e]===2&&this.titleShot(t,r,i);return}let a=yn[this.tier[e]],{ball:o,hole:s,picker:l}=this.sims;if(this.timeoutUntil[e]>this.clock||this.mode[e]!==2)return;if(this.onSwing(t,r,i),this.demoType[e]!==255){let n=this.demoType[e],a=this.demoTraj[e];this.demoType[e]=255;let s=this.demoX[e]-t,c=this.demoZ[e]-i;o.fire(t,r,i,this.demoX[e],this.demoZ[e],this.shotFlight(Math.sqrt(s*s+c*c),n,a),this.simTime,n,a)&&(this.demoFiredT[e]=this.simTime);return}let u=this.pickerChance>0&&this.rng.next()<this.pickerChance;u&&this.distracted++;let d=this.decoys,f=!u&&d!==null&&d.count>0&&this.decoyChance>0&&this.rng.next()<this.decoyChance?this.rng.int(d.count):-1;f>=0&&this.decoyed++;let p=u?l.x:f>=0&&d?d.x[f]:s.x,m=u?l.z:f>=0&&d?d.z[f]:s.z;if(!u&&f<0&&a.aimLead>0){let e=Math.hypot(p-t,m-i),r=c+e/mt*(n-c);p+=s.vx*r*a.aimLead,m+=s.vz*r*a.aimLead}let h=this.rng.next()*Math.PI*2,g=Math.sqrt(this.rng.next())*(a.aimSpread/this.pressure**+sn);p=Math.min(21,Math.max(-21,p+Math.cos(h)*g)),m=Math.min(H.fairwayZ-1,Math.max(-21,m+Math.sin(h)*g));let _=p-t,v=m-i,y=Math.sqrt(_*_+v*v),b=this.pickType(this.tier[e]),x=this.pickTrajectory(this.tier[e]);o.fire(t,r,i,p,m,this.shotFlight(y,b,x),this.simTime,b,x)&&(this.firedByType[b]++,this.fired++,this.onShot())}simTime=0},Zr=class{capacity;stack;top;constructor(e){this.capacity=e,this.stack=new Int32Array(e);for(let t=0;t<e;t++)this.stack[t]=e-1-t;this.top=e}acquire(){return this.top>0?this.stack[--this.top]:-1}release(e){this.stack[this.top++]=e}reset(){let e=this.capacity;for(let t=0;t<e;t++)this.stack[t]=e-1-t;this.top=e}empty(){this.top=0}copyTo(e){return e.set(this.stack.subarray(0,this.top)),this.top}copyFrom(e,t){this.stack.set(e.subarray(0,t)),this.top=t}get available(){return this.top}get used(){return this.capacity-this.top}},Qr=class{minX;minZ;cellSize;cols;rows;invCell;head;next;constructor(e,t,n,r,i,a){this.minX=e,this.minZ=t,this.cellSize=i,this.invCell=1/i,this.cols=Math.max(1,Math.ceil((n-e)/i)),this.rows=Math.max(1,Math.ceil((r-t)/i)),this.head=new Int32Array(this.cols*this.rows).fill(-1),this.next=new Int32Array(a).fill(-1)}clear(){this.head.fill(-1)}insert(e,t,n){let r=this.cellIndex(t,n);this.next[e]=this.head[r],this.head[r]=e}query(e,t,n,r){let i=this.col(e-n),a=this.col(e+n),o=this.row(t-n),s=this.row(t+n),c=r.length,l=0;for(let e=o;e<=s;e++){let t=e*this.cols;for(let e=i;e<=a;e++){let n=this.head[t+e];for(;n!==-1&&l<c;)r[l++]=n,n=this.next[n]}}return l}col(e){let t=Math.floor((e-this.minX)*this.invCell);return t<0?0:t>=this.cols?this.cols-1:t}row(e){let t=Math.floor((e-this.minZ)*this.invCell);return t<0?0:t>=this.rows?this.rows-1:t}cellIndex(e,t){return this.row(t)*this.cols+this.col(e)}},$r=.08,ei=e=>Float32Array.from({length:8},(t,n)=>e(n)),ti=ei(e=>gn[e].radius),ni=ei(e=>gn[e].hitExtra),ri=ei(e=>+(e===Kt.tar||e===Kt.ice)),ii=ei(e=>gn[e].rollKeep),ai=ei(e=>gn[e].bounce),oi=ei(e=>gn[e].homingSpeed),si=ei(e=>gn[e].homingLock),ci=ei(e=>gn[e].dropHeight),li=ei(e=>gn[e].chaseSpeed),ui=ei(e=>gn[e].chaseTime),di=ei(e=>gn[e].chaseRamp),fi=ei(e=>gn[e].chaseTurn),pi=ei(e=>e===Kt.giant||e===Kt.steel||gn[e].fanImmune?1:0),mi=ei(e=>Ht[e].trailRate),hi=Math.max(...ni),gi=Float32Array.from(Lt,e=>e.apex),_i=Float32Array.from(Lt,e=>e.rollMul),vi=Float32Array.from(Lt,e=>e.bounceMul),yi=U.decoys.rollSense*U.decoys.rollSense,bi=U.decoys.rollCatch,xi=1e6,Si=24,Ci=17;function wi(e,t){let n=Math.imul(e|0,2654435761)^Math.imul(t|0,2246822507);return n^=n>>>15,n=Math.imul(n,739982445),n^=n>>>12,n=Math.imul(n,695872825),n^=n>>>15,(n>>>0)/4294967296}var Ti=class e{capacity;flying=0;rolling=0;resting=0;spawned=0;recycled=0;dropped=0;groundAvoid=2.4;homingScale=1;settle=!1;onLand=()=>{};onTrail=()=>{};onTrailEnd=()=>{};onHole=()=>{};guard=()=>!1;roofH=0;roofMargin=0;roofCanopy=!1;roofFall=0;roofR=0;onRoof=()=>!1;vtx=[];vtxN=0;decoys=null;state;type;traj;grav;rad;px;py;pz;vx;vy;vz;ox;oy;oz;tx;tz;t0;tf;restT;landT;chaseOut;safeT;wvx;wvy;wvz;pool;grid;cand;high=0;shockX=new Float32Array(st.max);shockZ=new Float32Array(st.max);shockI=new Int16Array(st.max);shockN=0;constructor(e){this.capacity=e,this.state=new Uint8Array(e),this.type=new Uint8Array(e),this.traj=new Uint8Array(e),this.grav=new Float32Array(e),this.rad=new Float32Array(e),this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.ox=new Float32Array(e),this.oy=new Float32Array(e),this.oz=new Float32Array(e),this.tx=new Float32Array(e),this.tz=new Float32Array(e),this.t0=new Float32Array(e),this.tf=new Float32Array(e),this.restT=new Float32Array(e),this.landT=new Float32Array(e),this.chaseOut=new Float32Array(e),this.safeT=new Float32Array(e),this.wvx=new Float32Array(e),this.wvy=new Float32Array(e),this.wvz=new Float32Array(e),this.pool=new Zr(e),this.grid=new Qr(-22,-36,22,At,2,e),this.cand=new Int32Array(e)}get live(){return this.flying+this.rolling+this.resting}static radiusFor(e){return ti[e]}fire(t,n,r,i,a,o,s,c,l=lt.mid){let u=this.pool.acquire();if(u<0){if(u=this.oldestResting(),u<0)return this.dropped++,!1;this.recycled++}u+1>this.high&&(this.high=u+1);let d=e.radiusFor(c),f=24;if(ci[c]>0)t=i,r=a,n=ci[c],o=Math.sqrt(2*(n-d)/24),l=lt.high;else{let e=(n>d?n:d)+gi[l],t=(Math.sqrt(2*(e-n))+Math.sqrt(2*(e-d)))/o;f=Math.fround(t*t)}return this.traj[u]=l,this.grav[u]=f,this.state[u]=1,this.type[u]=c,this.rad[u]=d,this.ox[u]=t,this.oy[u]=n,this.oz[u]=r,this.tx[u]=i,this.tz[u]=a,this.t0[u]=s,this.tf[u]=o,this.vy[u]=(d-n+.5*f*o*o)/o,this.px[u]=t,this.py[u]=n,this.pz[u]=r,this.safeT[u]=0,this.restT[u]=0,this.spawned++,!0}canopyGap(e,t,n,r){let i=t/this.tf[e],a=this.ox[e]+(this.tx[e]-this.ox[e])*i-n,o=this.oz[e]+(this.tz[e]-this.oz[e])*i-r,s=this.oy[e]+this.vy[e]*t-.5*this.grav[e]*t*t,c=this.roofR,l=Math.min(1,(a*a+o*o)/(c*c));return s-this.rad[e]-(this.roofH-this.roofFall*l)}canopyCross(e,t,n,r,i){if(t<0&&(t=0),this.canopyGap(e,t,r,i)<=0||this.canopyGap(e,n,r,i)>0)return!1;for(let a=0;a<Si;a++){let a=.5*(t+n);this.canopyGap(e,a,r,i)>0?t=a:n=a}let a=n/this.tf[e],o=this.ox[e]+(this.tx[e]-this.ox[e])*a,s=this.oz[e]+(this.tz[e]-this.oz[e])*a,c=this.roofR+this.rad[e];return(o-r)*(o-r)+(s-i)*(s-i)>c*c?!1:(this.px[e]=o,this.py[e]=this.oy[e]+this.vy[e]*n-.5*this.grav[e]*n*n,this.pz[e]=s,this.wvy[e]=this.vy[e]-this.grav[e]*n,!0)}simulate(e,t,n,r,i){let{state:a,px:o,py:s,pz:c,vx:l,vy:u,vz:d,type:f,rad:p}=this,m=0,h=0,g=0,_=this.homingScale*e;this.grid.clear();for(let v=0;v<this.high;v++){let y=a[v];if(y===0)continue;let b=p[v];if(y===1){let p=this.tf[v],g=t-this.t0[v],y=oi[f[v]]*_;if(y>0&&g<p*si[f[v]]){let e=n-this.tx[v],t=r-this.tz[v],i=Math.sqrt(e*e+t*t);if(i>1e-4){let n=i<y?1:y/i;this.tx[v]+=e*n,this.tz[v]+=t*n}}if(g<p){let t=g/p;o[v]=this.ox[v]+(this.tx[v]-this.ox[v])*t,c[v]=this.oz[v]+(this.tz[v]-this.oz[v])*t;let a=this.grav[v];if(s[v]=this.oy[v]+u[v]*g-.5*a*g*g,this.wvx[v]=(this.tx[v]-this.ox[v])/p,this.wvy[v]=u[v]-a*g,this.wvz[v]=(this.tz[v]-this.oz[v])/p,this.roofH>0&&this.wvy[v]<0){let t=!1;if(this.roofCanopy){let i=o[v]-n,a=c[v]-r,l=this.roofR+b+(Math.abs(this.wvx[v])+Math.abs(this.wvz[v]))*e;s[v]-b<=this.roofH&&i*i+a*a<l*l&&(t=this.canopyCross(v,g-e,g,n,r))}else if(s[v]<=this.roofH){let e=this.tx[v]-n,a=this.tz[v]-r,o=i+ni[f[v]]+this.roofMargin;t=e*e+a*a<o*o}if(t&&this.onRoof(v)){h++,this.grid.insert(v,o[v],c[v]);continue}}m++;continue}let x=f[v],S=(this.tx[v]-this.ox[v])/p,C=(this.tz[v]-this.oz[v])/p,w=u[v]-this.grav[v]*p,T=this.traj[v],E=Math.min(_t,ii[x]*_i[T])*(this.settle?Ct.keep:1);if(o[v]=this.tx[v],c[v]=this.tz[v],s[v]=b,l[v]=S*E,d[v]=C*E,u[v]=-w*ai[x]*vi[T],this.landT[v]=t,a[v]=2,this.onLand(x,o[v],c[v],v),x===Kt.giant&&!this.settle&&this.shockN<st.max){let e=this.shockN++;this.shockX[e]=o[v],this.shockZ[e]=c[v],this.shockI[e]=v}}if(a[v]===2){let i=!1,p=li[f[v]];if(p>0&&!this.settle){let a=t-this.landT[v];if(a<ui[f[v]]){i=!0;let t=n-o[v],s=r-c[v],u=this.decoys,m=!1;if(u!==null&&u.count>0){let e=t*t+s*s;e>yi&&(e=yi);for(let n=0;n<u.count;n++){let r=u.x[n]-o[v],i=u.z[n]-c[v],a=r*r+i*i;a<e&&(e=a,t=r,s=i,m=!0)}}let h=Math.sqrt(t*t+s*s);if(m&&h<=bi)l[v]=0,d[v]=0,this.landT[v]=-1e6,i=!1;else if(h>.05){let n=di[f[v]],r=p*(a<n?a/n:1)/h,i=Math.min(1,fi[f[v]]*e);l[v]+=(t*r-l[v])*i,d[v]+=(s*r-d[v])*i}}}let m=s[v],h=u[v]-24*e;m+=h*e,m<=b&&(m=b,h=h<-1.2?-h*.3:0);let g=o[v]+l[v]*e,_=c[v]+d[v]*e;if(g<-22+b?(g=-22+b,l[v]=-l[v]*.3):g>22-b&&(g=22-b,l[v]=-l[v]*.3),_<-36+b?(_=-36+b,d[v]=-d[v]*.3):_>H.fairwayZ-b&&(_=H.fairwayZ-b,d[v]=-d[v]*.3),o[v]=g,s[v]=m,c[v]=_,u[v]=h,ri[f[v]]===1&&(this.vtxN>0&&this.inVortex(v)?this.onTrailEnd(v):this.onTrail(v,g,_)),this.wvx[v]=l[v],this.wvy[v]=h,this.wvz[v]=d[v],m<=b+1e-4&&!i){let n=l[v],r=d[v],i=Math.sqrt(n*n+r*r),o=i-(this.settle?Ct.friction:2)*e;if(o<=$r&&h===0)l[v]=0,d[v]=0,a[v]=3,this.restT[v]=t,ri[f[v]]===1&&this.onTrailEnd(v);else if(i>0){let e=o>0?o/i:0;l[v]=n*e,d[v]=r*e}}}this.grid.insert(v,o[v],c[v]),a[v]===3?g++:h++}if(this.shockN>0){let e=st,t=e.radius*e.radius;for(let n=0;n<this.shockN;n++){let r=this.shockX[n],i=this.shockZ[n],s=(r*1e3|0)*31+(i*1e3|0),f=this.grid.query(r,i,e.radius,this.cand);for(let p=0;p<f;p++){let f=this.cand[p],m=a[f];if(f===this.shockI[n]||m!==2&&m!==3)continue;let _=o[f]-r,v=c[f]-i,y=_*_+v*v;if(y>=t)continue;let b=Math.sqrt(y),x=1-b/e.radius,S=wi(f,s),C=wi(f+4099,s),w=wi(f+8209,s);if(b<.05){let e=S*6.283185307179586;_=Math.cos(e),v=Math.sin(e)}else _/=b,v/=b;let T=(C-.5)*2*e.angle,E=Math.cos(T),D=Math.sin(T),O=e.push*x*(1+(S-.5)*2*e.jitter);l[f]+=(_*E-v*D)*O,d[f]+=(_*D+v*E)*O,u[f]=e.pop*(.4+.6*x)*(1+(w-.5)*2*e.jitter),m===3&&(a[f]=2,g--,h++)}}this.shockN=0}let v=this.grid.query(n,r,i+hi,this.cand);for(let e=0;e<v;e++){let l=this.cand[e],u=o[l]-n,d=c[l]-r,m=i+ni[f[l]];if(u*u+d*d<m*m&&s[l]<p[l]+.3&&t>=this.safeT[l]){let e=a[l]===3;if(this.guard(l,this.landT[l]===Math.fround(t))){e&&(g--,h++);continue}let n=f[l];a[l]===3?g--:h--,this.free(l),this.onHole(n)}}this.flying=m,this.rolling=h,this.resting=g}static defImmune(e){return pi[e]===1}inVortex(e){for(let t=0;t<this.vtxN;t++){let n=this.vtx[t];if(n.pull<=0)continue;let r=this.px[e]-n.x,i=this.pz[e]-n.z;if(r*r+i*i>n.pull*n.pull)continue;let a=this.px[e]-n.hx,o=this.pz[e]-n.hz;if(a*a+o*o>=n.keepIn*n.keepIn)return!0}return!1}static listed(e,t){if(e===null)return!1;for(let n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}timeLeft(e,t){return this.tf[e]-(t-this.t0[e])}deflect(e,t,n,r,i,a=.5){let o=this.state[e];o!==0&&(o===1?(this.flying--,this.rolling++):o===3&&(this.resting--,this.rolling++),this.state[e]=2,this.vx[e]=t,this.vy[e]=n,this.vz[e]=r,this.py[e]<this.rad[e]&&(this.py[e]=this.rad[e]),this.landT[e]=-1e6,this.safeT[e]=i+a)}kill(e){let t=this.state[e];t!==0&&(t===1?this.flying--:t===3?this.resting--:this.rolling--,this.free(e))}findThreat(t,n,r,i,a,o,s,c,l=null,u=0){let d=-1,f=i,p=c*c;for(let i=0;i<this.high;i++){if(this.state[i]!==1||pi[this.type[i]]===1||e.listed(l,i))continue;let c=this.tf[i]-(a-this.t0[i]);if(c<=u||c>f)continue;let m=this.tx[i]-t,h=this.tz[i]-n,g=r+ni[this.type[i]];if(m*m+h*h>g*g)continue;let _=this.px[i]-o,v=this.pz[i]-s;_*_+v*v>p||(d=i,f=c)}return d}dropTan(e){let t=this.tf[e],n=this.tx[e]-this.ox[e],r=this.tz[e]-this.oz[e],i=.5*this.grav[e]*t+(this.oy[e]-this.rad[e])/t;if(i<=0)return 0;let a=(n*n+r*r)/(t*t);return a>1e-8?i/Math.sqrt(a):xi}incoming(e,t,n,r,i){let a=-1,o=1/0,s=n*n;for(let n=0;n<this.high;n++){if(this.state[n]!==1||pi[this.type[n]]===1)continue;let c=this.tf[n]-(r-this.t0[n]);if(c<=0||c>=o)continue;let l=this.tx[n]-e,u=this.tz[n]-t;l*l+u*u>s||this.dropTan(n)>i||(a=n,o=c)}if(a>=0)return a;let c=s,l=this.grid.query(e,t,n,this.cand);for(let n=0;n<l;n++){let r=this.cand[n];if(this.state[r]!==2||pi[this.type[r]]===1)continue;let i=this.px[r]-e,o=this.pz[r]-t,s=i*i+o*o;s<c&&(c=s,a=r)}return a}pickupTarget(t,n,r,i,a,o,s,c=0,l=0,u=null){let d=-1,f=1/0,p=this.grid.query(r,i,a,this.cand);for(let m=0;m<p;m++){let p=this.cand[m],h=this.state[p];if(h!==3&&h!==2||pi[this.type[p]]===1)continue;let g=this.px[p]-r,_=this.pz[p]-i,v=g*g+_*_;if(v>a*a||v<o*o||g*c+_*l<0||e.listed(u,p)||this.vtxN>0&&this.inVortex(p))continue;let y=this.px[p]-t,b=this.pz[p]-n,x=Math.sqrt(y*y+b*b)+s*Math.sqrt(v);x<f&&(f=x,d=p)}return d}groundThreat(t,n,r,i,a,o,s=null){let c=-1,l=1/0,u=this.grid.query(t,n,r,this.cand);for(let d=0;d<u;d++){let u=this.cand[d],f=this.state[u];if(f!==3&&f!==2||pi[this.type[u]]===1||e.listed(s,u)||this.vtxN>0&&this.inVortex(u))continue;let p=this.px[u]-t,m=this.pz[u]-n,h=p*p+m*m;if(h>r*r)continue;let g=this.px[u]-i,_=this.pz[u]-a,v=Math.sqrt(g*g+_*_)+.5*Math.sqrt(h),y=this.type[u];f===2&&li[y]>0&&o-this.landT[u]<ui[y]&&(v-=6),v<l&&(l=v,c=u)}return c}restingTarget(e,t,n,r,i){let a=-1,o=1/0;for(let s=0;s<this.high;s++){if(this.state[s]!==3)continue;let c=this.px[s]-e,l=this.pz[s]-t,u=this.px[s]-n,d=this.pz[s]-r,f=Math.sqrt(c*c+l*l)+i*Math.sqrt(u*u+d*d);f<o&&(o=f,a=s)}return a}groundTarget(t,n,r,i,a,o,s=null,c=-1/0){let l=-1,u=1/0,d=o*o;for(let o=0;o<this.high;o++){let f=this.state[o];if(f!==3&&f!==2||pi[this.type[o]]===1||e.listed(s,o)||this.pz[o]<c)continue;let p=this.px[o]-r,m=this.pz[o]-i,h=p*p+m*m;if(h<d)continue;let g=this.px[o]-t,_=this.pz[o]-n,v=Math.sqrt(g*g+_*_)+a*Math.sqrt(h);v<u&&(u=v,l=o)}return l}vortex(e,t,n,r,i){let a=t.x,o=t.z,s=t.vx,c=t.vz,l=t.pull,u=t.radius,d=t.hx,f=t.hz,p=t.keepIn,m=0,h=l*l,g=u*u,_=p*p,v=1-Math.exp(-i*e),y=this.grid.query(a,o,l,this.cand);for(let e=0;e<y;e++){let t=this.cand[e],i=this.state[t];if(i!==3&&i!==2||pi[this.type[t]]===1)continue;let u=this.px[t]-d,p=this.pz[t]-f;if(u*u+p*p<_)continue;let y=this.px[t]-a,b=this.pz[t]-o,x=y*y+b*b;if(x>h)continue;if(x<=g){i===3?this.resting--:this.rolling--,this.free(t),m++;continue}i===3&&(this.state[t]=2,this.resting--,this.rolling++),this.landT[t]=-1e6;let S=Math.sqrt(x),C=y/S,w=b/S,T=1-S/l,E=.5+T,D=this.vx[t]-s,O=this.vz[t]-c,k=D*C+O*w,A=O*C-D*w;A+=(n*E-A)*v,k+=(-r*E-k)*v;let j=-r*E*(T>=.33?1:T*3);k>j&&(k=j),this.vx[t]=s+C*k-w*A,this.vz[t]=c+w*k+C*A}return m}launchPoint(e,t){return t[0]=this.ox[e],t[1]=this.oy[e],t[2]=this.oz[e],ci[this.type[e]]<=0}fanPush(e,t,n,r,i,a,o,s){let c=0,l=i*i;for(let o=0;o<this.high;o++){if(this.state[o]!==1||pi[this.type[o]]===1)continue;let u=this.tf[o]-(t-this.t0[o]);if(u<=0||u>s)continue;let d=this.tx[o]-n,f=this.tz[o]-r,p=d*d+f*f;if(p>=l)continue;let m=Math.sqrt(p);m<.001&&(d=0,f=1,m=1);let h=a*e*(1+(i-m)/i)/m;this.tx[o]+=d*h,this.tz[o]+=f*h,c++}let u=this.grid.query(n,r,i,this.cand);for(let t=0;t<u;t++){let a=this.cand[t],s=this.state[a];if(s!==3&&s!==2||pi[this.type[a]]===1)continue;let u=this.px[a]-n,d=this.pz[a]-r,f=u*u+d*d;if(f>=l)continue;let p=Math.sqrt(f);p<.001&&(u=0,d=1,p=1),s===3&&(this.state[a]=2,this.resting--,this.rolling++);let m=o*e*(1+(i-p)/i)/p;this.vx[a]+=u*m,this.vz[a]+=d*m,c++}return c}static fanImmune(e){return pi[e]===1}static snapSize(e){return[e*Ci,1,e*3]}save(e){let t=this.high;e.wd(t);for(let n=0;n<t;n++){let t=this.state[n];e.wb(t),t!==0&&(e.wb(this.type[n]),e.wb(this.traj[n]),e.wf(this.grav[n]),e.wf(this.px[n]),e.wf(this.py[n]),e.wf(this.pz[n]),e.wf(this.vx[n]),e.wf(this.vy[n]),e.wf(this.vz[n]),e.wf(this.ox[n]),e.wf(this.oy[n]),e.wf(this.oz[n]),e.wf(this.tx[n]),e.wf(this.tz[n]),e.wf(this.t0[n]),e.wf(this.tf[n]),e.wf(this.restT[n]),e.wf(this.landT[n]),e.wf(this.safeT[n]))}}restore(e){let t=e.rd(),n=this.high,r=0,i=0,a=0;this.grid.clear();for(let n=0;n<t;n++){let t=e.rb();if(this.state[n]=t,t===0)continue;let o=e.rb();this.type[n]=o,this.rad[n]=ti[o],this.traj[n]=e.rb(),this.grav[n]=e.rf(),this.px[n]=e.rf(),this.py[n]=e.rf(),this.pz[n]=e.rf(),this.vx[n]=e.rf(),this.vy[n]=e.rf(),this.vz[n]=e.rf(),this.ox[n]=e.rf(),this.oy[n]=e.rf(),this.oz[n]=e.rf(),this.tx[n]=e.rf(),this.tz[n]=e.rf(),this.t0[n]=e.rf(),this.tf[n]=e.rf(),this.restT[n]=e.rf(),this.landT[n]=e.rf(),this.safeT[n]=e.rf();let s=t!==1;this.wvx[n]=s?this.vx[n]:0,this.wvy[n]=s?this.vy[n]:0,this.wvz[n]=s?this.vz[n]:0,t===1?r++:(t===3?a++:i++,this.grid.insert(n,this.px[n],this.pz[n]))}for(let e=t;e<n;e++)this.state[e]=0;this.high=t,this.pool.empty();for(let e=this.capacity-1;e>=0;e--)this.state[e]===0&&this.pool.release(e);this.flying=r,this.rolling=i,this.resting=a}savePool(e){return this.pool.copyTo(e)}restorePool(e,t){this.pool.copyFrom(e,t)}debugList(){let e=[];for(let t=0;t<this.high;t++)this.state[t]!==0&&e.push({type:this.type[t],traj:this.traj[t],state:this.state[t],x:this.px[t],y:this.py[t],z:this.pz[t],tx:this.tx[t],tz:this.tz[t],t:this.tf[t]});return e}collect(e,t,n){let r=n*n,i=0,a=this.grid.query(e,t,n,this.cand);for(let n=0;n<a;n++){let a=this.cand[n];if(this.state[a]!==3)continue;let o=this.px[a]-e,s=this.pz[a]-t;o*o+s*s<=r&&(this.free(a),this.resting--,i++)}return i}collectStrip(e,t,n,r,i,a){let o=0,s=this.grid.query(e,t,Math.hypot(i,a),this.cand);for(let c=0;c<s;c++){let s=this.cand[c],l=this.state[s];if(l!==3&&(l!==2||this.py[s]>this.rad[s]+.3))continue;let u=this.px[s]-e,d=this.pz[s]-t,f=u*n+d*r;if(f>a||f<-a)continue;let p=u*r-d*n;p>i||p<-i||(this.free(s),l===3?this.resting--:this.rolling--,o++)}return o}dodge(e,t,n,r,i){let a=0,o=0,s=r*r;for(let i=0;i<this.high;i++){if(this.state[i]!==1)continue;let c=e-this.tx[i],l=t-this.tz[i],u=c*c+l*l;if(u>s)continue;let d=Math.max(.05,Math.sqrt(u)-ni[this.type[i]])+.001,f=Math.min(1,Math.max(0,(n-this.t0[i])/this.tf[i])),p=(1-d/r)*(.4+f)/d;a+=c*p,o+=l*p}let c=this.groundAvoid,l=this.grid.query(e,t,c*2,this.cand);for(let n=0;n<l;n++){let r=this.cand[n],i=this.state[r];if(i!==3&&i!==2)continue;let s=i===2&&li[this.type[r]]>0?c*2:c,l=e-this.px[r],u=t-this.pz[r],d=l*l+u*u;if(d>s*s)continue;let f=Math.max(.05,Math.sqrt(d)-ni[this.type[r]])+.001,p=(1-f/s)*(s>c?5:1.5)/f;a+=l*p,o+=u*p}i[0]=a,i[1]=o}write(e,t,n){e.begin();let r=this.chaseOut;for(let e=0;e<this.high;e++){let t=0;if(this.state[e]===2&&!this.settle){let r=this.type[e];li[r]>0&&ui[r]>0&&(t=1-(n-this.landT[e])/ui[r],t=t>0?t<1?t:1:0)}r[e]=t}e.pushSoA(this.high,this.state,this.px,this.py,this.pz,this.type,this.rad,this.wvx,this.wvy,this.wvz,r),e.end(),t.begin();for(let e=0;e<this.high;e++)if(this.state[e]===1){let r=(n-this.t0[e])/this.tf[e];r=r<0?0:r>1?1:r,t.push(this.tx[e],this.tz[e],r,this.type[e],this.rad[e],-1,r*8<1?r*8:1,(1-r)*this.tf[e])}t.end()}trails(e,t,n){if(!(!(n>t)||n-t>.25))for(let r=0;r<this.high;r++){let i=this.state[r];if(i!==1&&i!==2)continue;let a=this.type[r],o=mi[a];if(o<=0)continue;let s=i===1;if(!s&&this.wvx[r]*this.wvx[r]+this.wvz[r]*this.wvz[r]<.25)continue;let c=r*.6180339887,l=Math.floor(n*o+c)-Math.floor(t*o+c);l>2&&(l=2);for(let t=0;t<l;t++)e.ballTrail(a,this.px[r],this.py[r],this.pz[r],this.wvx[r],this.wvy[r],this.wvz[r],s)}}clear(){for(let e=0;e<this.high;e++)this.state[e]!==0&&this.free(e);this.high=0,this.flying=this.rolling=this.resting=0,this.pool.reset()}free(e){ri[this.type[e]]===1&&this.onTrailEnd(e),this.state[e]=0,this.pool.release(e)}oldestResting(){let e=-1,t=1/0;for(let n=0;n<this.high;n++)this.state[n]===3&&this.restT[n]<t&&(t=this.restT[n],e=n);return e>=0&&(this.state[e]=0,this.resting--),e}},G=U,Ei=(e,t,n)=>e<t?t:e>n?n:e,Di=Math.PI*2,Oi=1.75,ki=0,Ai=1,ji=G.turret.sideMax,Mi=Math.sqrt(1-ji*ji),Ni=G.clubAlly.sideMax,Pi=Math.sqrt(1-Ni*Ni),Fi=class{charges=0;max=0;blocks=0;popAt=-1e9;seq=0;x=0;z=0;ox=G.gopher.look.x;oz=G.gopher.look.z;watch=-1;wx=0;wy=0;wz=0;watchLeft=-1;watchIn=!1},Ii=class{charges=0;max=0;hits=0;hitAt=-1e9;seq=0;x=0;y=0;z=0;bAlive=new Uint8Array(G.roof.bounceBack.balls);bFrom=new Float64Array(G.roof.bounceBack.balls*3);bGolfer=new Int16Array(G.roof.bounceBack.balls).fill(-1);bT0=new Float64Array(G.roof.bounceBack.balls);bTf=new Float64Array(G.roof.bounceBack.balls);bKill=new Int16Array(G.roof.bounceBack.balls);bKills=0;stuns=0;stunGolfer=-1;stunSeq=0};function Li(e,t){let n=G.turret,r=Math.max(0,e-1);return Math.round(t?n.ammoMax+n.ammoMaxStep*r:n.holeAmmo+n.holeAmmoStep*r)}var Ri=class{idx;homeX;homeZ;level=0;interval=0;radius=0;cooldown=0;yaw=Math.PI;pitch=.3;shots=0;seq=0;from=new Float32Array(3);to=new Float32Array(3);shotAt=-1e9;x=0;z=0;vx=0;vz=0;mx=0;my=0;mz=0;minClear=1/0;ammo=0;pick=-1;retarget=0;lock=-1;lockT0=0;locks=0;hg=0;hgx=0;hgz=0;stationX=0;stationZ=0;sideX=-1;sideZ=0;loads=0;loadSeq=0;loadAt=new Float32Array(3);sAlive=new Uint8Array(G.turret.shots);sPos=new Float64Array(G.turret.shots*3);sFrom=new Float64Array(G.turret.shots*3);sTo=new Float64Array(G.turret.shots*3);sBall=new Int16Array(G.turret.shots).fill(-1);sT0=new Float64Array(G.turret.shots);sStart=new Float64Array(G.turret.shots);sDur=new Float64Array(G.turret.shots).fill(1);hitSeq=0;constructor(e){this.idx=e;let t=G.turret.homes[e],n=Math.hypot(t[0],t[1])||1;this.homeX=t[0]/n,this.homeZ=t[1]/n,this.sideX=this.homeX,this.sideZ=this.homeZ}},zi=class{idx;level=0;speed=0;radius=0;x=0;z=0;vx=0;vz=0;target=-1;retarget=0;swept=0;seq=0;lastSweepAt=-1e9;pull=0;hx=0;hz=0;keepIn=0;constructor(e){this.idx=e}},Bi=class{count=0;want=0;chance=0;x=new Float32Array(8);z=new Float32Array(8);age=new Float32Array(8);hops=0;spawns=new Uint32Array(8)},Vi=class{idx;level=0;speed=0;cooldown=0;timeout=0;x=0;z=0;vx=0;vz=0;facing=Math.PI;mode=0;modeT=0;cd=0;target=-1;retarget=0;hitTarget=-1;wx=0;wz=0;wyaw=0;wturn=0;hg=0;hgx=0;hgz=0;hits=0;timeouts=0;swingAt=-1e9;rAlive=new Uint8Array(G.clubAlly.returnBalls);rFrom=new Float32Array(G.clubAlly.returnBalls*3);rGolfer=new Int16Array(G.clubAlly.returnBalls);rT0=new Float32Array(G.clubAlly.returnBalls);hitGolfer=-1;hitSeq=0;constructor(e){this.idx=e}},Hi=class{level=0;cooldown=0;radius=0;push=0;accel=0;spin=0;timer=0;phase=0;phaseT=0;pushes=0;pushedNow=0;spins=0},Ui=(e,t)=>Array.from({length:e},(e,n)=>t(n)),Wi=class{gopher=new Fi;roof=new Ii;turrets=Ui(3,e=>new Ri(e));sweepers=Ui(3,e=>new zi(e));allies=Ui(3,e=>new Vi(e));turret=this.turrets[0];sweeper=this.sweepers[0];ally=this.allies[0];decoys=new Bi;fan=new Hi;tmpO=new Float32Array(3);skip=new Int16Array(3*(G.turret.shots+2));holeScale=1;holeR=.8;now=0;sideX=-1;sideZ=0;dgx=0;dgz=0;keepT=0;keepA=0;d;constructor(e){this.d=e;let t=e.ball;t.guard=(e,t)=>this.guard(e,t),t.onRoof=e=>this.roofHit(e),t.vtx=this.sweepers,t.vtxN=3,e.ai.decoys=this.decoys,t.decoys=this.decoys,e.ai.pinned=e=>{for(let t=0;t<3;t++){let n=this.allies[t];if(n.mode===1&&n.hitTarget===e)return!0;for(let t=0;t<n.rAlive.length;t++)if(n.rAlive[t]===1&&n.rGolfer[t]===e)return!0}let t=this.roof;for(let n=0;n<t.bAlive.length;n++)if(t.bAlive[n]===1&&t.bGolfer[n]===e)return!0;return!1}}apply(e,t){this.holeScale=t,this.holeR=e.holeRadius,this.rings(),this.gopher.max=e.gopherCharges,this.roof.max=e.roofCharges;for(let t=0;t<3;t++){let n=this.turrets[t],r=t<e.turretCount?e.turret:0;n.level===0&&r>0&&(this.placeTurret(n),n.ammo=Li(r,!1)),n.level=r,n.interval=e.turretInterval,n.radius=e.turretRadius,r===0&&this.clearTurret(n)}for(let t=0;t<3;t++){let n=this.sweepers[t],r=t<e.sweeperCount?e.sweeper:0,i=n.level;n.level=r,n.speed=e.sweeperSpeed,n.radius=e.sweeperRadius,i===0&&r>0&&this.placeSweeper(n),r===0&&(n.pull=0,n.target=-1)}let n=this.decoys;n.want=Math.min(8,e.decoys),n.chance=e.decoyChance,this.d.ai.decoyChance=e.decoyChance;for(let t=0;t<3;t++){let n=this.allies[t],r=t<e.allyCount?e.clubAlly:0;n.level===0&&r>0&&this.placeAlly(n),n.level=r,n.speed=e.allySpeed,n.cooldown=e.allyCooldown,n.timeout=e.allyTimeout}let r=this.fan;r.level===0&&e.flagFan>0&&(r.phase=0,r.phaseT=0,r.timer=e.fanCooldown),r.level=e.flagFan,r.cooldown=e.fanCooldown,r.radius=e.fanRadius,r.push=e.fanPush,r.accel=e.fanAccel,r.spin=e.fanSpin,this.syncRoof()}refill(){this.gopher.charges=this.gopher.max,this.roof.charges=this.roof.max,this.syncRoof();for(let e=0;e<3;e++){let t=this.turrets[e];t.level>0&&(t.ammo=Math.max(t.ammo,Li(t.level,!1)))}let e=this.decoys;e.count=0;for(let t=0;t<e.want;t++)this.spawnDecoy(t,t*G.decoys.life/Math.max(1,e.want)),e.count=t+1}reset(){this.rings();for(let e=0;e<3;e++)this.placeSweeper(this.sweepers[e]);for(let e=0;e<3;e++){let t=this.allies[e];this.placeAlly(t),t.rAlive.fill(0),t.hits=t.timeouts=0}for(let e=0;e<3;e++){let t=this.turrets[e];this.placeTurret(t),this.clearTurret(t),t.ammo=Li(t.level,!1),t.shots=t.loads=t.locks=0}this.roof.bAlive.fill(0),this.roof.bGolfer.fill(-1),this.roof.bKills=0,this.roof.stuns=0;let e=this.fan;e.phase=0,e.phaseT=0,e.timer=e.cooldown,this.gopher.ox=G.gopher.look.x,this.gopher.oz=G.gopher.look.z,this.decoys.count=0,this.gopher.blocks=this.roof.hits=0;for(let e=0;e<3;e++)this.sweepers[e].swept=0;this.decoys.hops=this.fan.pushes=this.fan.spins=0,this.d.ai.decoyed=this.d.ai.timeouts=this.d.ai.distracted=0}clearTurret(e){e.cooldown=0,e.lock=-1,e.pick=-1,e.retarget=0,e.hg=0,e.sAlive.fill(0),e.sBall.fill(-1)}placeSweeper(e){let t=this.d.hole,n=G.sweeper.homes[e.idx];e.x=Ei(t.x+(t.x+n[0]>20||t.x+n[0]<-20?-n[0]:n[0]),-20,20),e.z=Ei(t.z+(t.z+n[1]<-19?-n[1]:n[1]),-19,H.holeMaxZ),e.vx=e.vz=0,e.target=-1,e.retarget=0,this.vortexRings(e),this.vortexOut(e)}station(e){let t=G.turret,n=this.d.hole,r=Math.max(t.bandMin,this.keepT+.5)+t.bandInset,i=Math.max(t.bandMax-t.bandInset,r),a=e.x-n.x,o=e.z-n.z,s=Math.sqrt(a*a+o*o),c=e.homeX,l=e.homeZ,u=c,d=l;s>.001&&(u=a/s,d=o/s);let f=s<r||s>i||e.x<-20||e.x>20||e.z<-19||e.z>H.holeMaxZ;if(u*c+d*l<Mi){f=!0;let e=c*d-l*u>=0?1:-1;u=c*Mi-l*ji*e,d=c*ji*e+l*Mi}let p=!1;if(e.pick>=0)e.hg=0;else if(e.hg===1){let a=e.hgx-e.x,o=e.hgz-e.z;if(a*a+o*o<=t.holdArrive*t.holdArrive)e.hg=0;else{let a=e.hgx-n.x,o=e.hgz-n.z,s=Math.sqrt(a*a+o*o);(s<r-t.holdSlack||s>i+t.holdSlack)&&(p=!0)}}if(e.hg===0&&e.pick<0&&f&&(p=!0),!p){e.sideX=u,e.sideZ=d,e.stationX=e.hg===1?e.hgx:e.x,e.stationZ=e.hg===1?e.hgz:e.z;return}let m=(r+i)*.5,h=n.z+d*m;(h<-19||h>H.holeMaxZ)&&(l!==0&&c===0?(d=0,u=a>=0?1:-1):d=-d,h=n.z+d*m);let g=n.x+u*m;(g<-20||g>20)&&(u=-u,g=n.x+u*m),e.hg=1,e.hgx=g,e.hgz=h,e.sideX=u,e.sideZ=d,e.stationX=g,e.stationZ=h}placeTurret(e){let t=G.turret,n=this.d.hole,r=(t.bandMin+t.bandMax)*.5;e.x=n.x+e.homeX*r,e.z=n.z+e.homeZ*r,this.station(e),e.x=e.stationX,e.z=e.stationZ,e.vx=e.vz=0,e.yaw=Math.PI,e.pitch=.3,this.sideX=e.sideX,this.sideZ=e.sideZ,this.ringOut(e,ki),e.minClear=1/0}turretDrive(e,t,n,r,i,a,o){let s=G.turret,c=H.holeMaxZ;this.sideX=e.sideX,this.sideZ=e.sideZ,this.dgx=Math.min(Math.max(n,-20),20),this.dgz=Math.min(Math.max(r,-19),c),this.detour(e,ki);let l=this.dgx-e.x,u=this.dgz-e.z,d=Math.sqrt(l*l+u*u),f=d>.001?Math.min(i,d*o)/d:0,p=1-Math.exp(-t*a);e.vx+=(l*f-e.vx)*p,e.vz+=(u*f-e.vz)*p,e.x=Math.min(Math.max(e.x+e.vx*t,-20-s.edge),20+s.edge),e.z=Math.min(Math.max(e.z+e.vz*t,-19-s.edge),c+s.edge),this.ringOut(e,ki)}rings(){this.keepT=this.holeR*(1+G.turret.margin)+G.turret.clearance,this.keepA=this.holeR*(1+G.clubAlly.margin)+G.clubAlly.body}detour(e,t){let n=this.d.hole,r=t===ki?this.keepT:this.keepA,i=t===ki?G.turret.frontCost:G.clubAlly.frontCost,a=this.dgx-n.x,o=this.dgz-n.z,s=e.x-n.x,c=e.z-n.z,l=Math.sqrt(s*s+c*c),u=Math.sqrt(a*a+o*o);u<r&&(u>1e-6?(a*=r/u,o*=r/u):l>1e-6?(a=s/l*r,o=c/l*r):(a=this.sideX*r,o=this.sideZ*r),this.dgx=n.x+a,this.dgz=n.z+o);let d=a-s,f=o-c,p=d*d+f*f;if(p<1e-9)return;let m=-(s*d+c*f)/p;m<0?m=0:m>1&&(m=1);let h=s+d*m,g=c+f*m;if(h*h+g*g>=r*r*.998)return;let _=Math.atan2(c,s),v=Math.atan2(o,a),y=l>r?Math.acos(r/l):0,b=1,x=0,S=1/0;for(let e=-1;e<=1;e+=2){let t=_+e*y,n=(v-t)*e;n-=Math.floor(n/Di)*Di;let a=(Math.PI/2-t)*e;a-=Math.floor(a/Di)*Di;let o=r*n+(a<n?i:0);o<S&&(S=o,b=e,x=n)}let C,w,T=0;if(l>r){let e=_+b*y;C=Math.cos(e)*r-s,w=Math.sin(e)*r-c,T=Math.sqrt(C*C+w*w),C/=T,w/=T}else C=-Math.sin(_)*b,w=Math.cos(_)*b;let E=T+r*x+(u>r?u-r:0);this.dgx=e.x+C*E,this.dgz=e.z+w*E}ringOut(e,t){let n=this.d.hole,r=t===ki,i=r?this.keepT:this.keepA,a=r?G.turret.edge:0,o=-20-a,s=20+a,c=-19-a,l=H.holeMaxZ+a,u=e.x-n.x,d=e.z-n.z,f=Math.sqrt(u*u+d*d);if(f<i){let t=this.sideX,r=this.sideZ;f>1e-6&&(t=u/f,r=d/f),e.x=n.x+t*i,e.z=n.z+r*i;let a=e.vx*t+e.vz*r;a<0&&(e.vx-=a*t,e.vz-=a*r)}if(e.x=Math.min(Math.max(e.x,o),s),e.z=Math.min(Math.max(e.z,c),l),u=e.x-n.x,d=e.z-n.z,f=u*u+d*d,f<i*i){if(e.z===c||e.z===l){let t=Math.sqrt(i*i-d*d);e.x=Math.min(Math.max(n.x+(u<0||u===0&&this.sideX<0?-t:t),o),s)}else if(e.x===o||e.x===s){let t=Math.sqrt(i*i-u*u);e.z=Math.min(Math.max(n.z+(d<0?-t:t),c),l)}}}allyIdle(e){let t=this.d.hole,n=G.clubAlly.idles[e.idx],r=n[0];(r>0&&t.x>20-Math.abs(r)-.8||r<0&&t.x<-20+Math.abs(r)+.8)&&(r=-r);let i=n[1];i<0&&t.z+i<-19&&(i=-i),this.dgx=t.x+r,this.dgz=t.z+i,this.sideX=r>=0?1:-1,this.sideZ=0}allyStation(e){let t=G.clubAlly,n=this.d.hole,r=this.dgx-n.x,i=this.dgz-n.z,a=Math.sqrt(r*r+i*i);a>1e-6?(r/=a,i/=a):(r=this.sideX,i=0);let o=Math.max(t.bandMin,this.keepA+.5)+t.bandInset,s=Math.max(t.bandMax-t.bandInset,o),c=e.x-n.x,l=e.z-n.z,u=Math.sqrt(c*c+l*l),d=r,f=i;u>.001&&(d=c/u,f=l/u);let p=u<o||u>s;if(d*r+f*i<Pi){p=!0;let e=r*f-i*d>=0?1:-1;d=r*Pi-i*Ni*e,f=r*Ni*e+i*Pi}if(e.hg===1){let r=e.hgx-e.x,i=e.hgz-e.z;if(r*r+i*i<=t.holdArrive*t.holdArrive)e.hg=0;else{let r=e.hgx-n.x,i=e.hgz-n.z,a=Math.sqrt(r*r+i*i);(a<o-t.holdSlack||a>s+t.holdSlack)&&(e.hgx=n.x+d*((o+s)*.5),e.hgz=n.z+f*((o+s)*.5))}}e.hg===0&&p&&(e.hg=1,e.hgx=n.x+d*((o+s)*.5),e.hgz=n.z+f*((o+s)*.5)),this.dgx=e.hg===1?e.hgx:e.x,this.dgz=e.hg===1?e.hgz:e.z}placeAlly(e){this.allyIdle(e),e.x=Ei(this.dgx,-20,20),e.z=Ei(this.dgz,-19,H.holeMaxZ),e.vx=e.vz=0,e.mode=0,e.modeT=0,e.target=-1,e.hitTarget=-1,e.cd=0,e.hg=0,this.ringOut(e,Ai)}syncRoof(){let e=this.d.ball,t=G.roof.umbrellaCatch,n=this.holeScale,r=this.roof.charges>0;e.roofCanopy=t.mode===`canopy`,e.roofCanopy?(e.roofH=r?t.apexY*n:0,e.roofFall=t.fallY*n,e.roofR=t.radius*n,e.roofMargin=0):(e.roofH=r?t.landingHeight*n:0,e.roofMargin=t.landingMarginK*n)}separate(e,t,n,r){let i=e.length;for(let a=0;a<i;a++){let o=e[a];if(!(o.level<=0))for(let s=a+1;s<i;s++){let i=e[s];if(i.level<=0)continue;let c=t+(n?n[a].pull+n[s].pull:0),l=i.x-o.x,u=i.z-o.z,d=Math.sqrt(l*l+u*u);if(d>=c)continue;if(d<1e-4){if(l=1,u=0,d=1,c<=0)continue}else l/=d,u/=d;let f=r&&r[a].mode!==0?0:1,p=r&&r[s].mode!==0?0:1;if(f+p===0)continue;let m=(c-(d<1e-4?0:d))/(f+p);o.x-=l*m*f,o.z-=u*m*f,i.x+=l*m*p,i.z+=u*m*p}}}beforeBalls(e,t,n){if(this.now=t,e<=0)return;this.rings(),this.gopher.max>0&&this.gopherStep(e,t,n),this.fanStep(e,t,n);let r=!1;for(let i=0;i<3;i++){let a=this.turrets[i];a.level<=0||(this.turretStep(a,e,t,n),r=!0)}if(r&&(this.turrets[1].level>0||this.sweepers[0].level>0)){if(this.turrets[1].level>0&&this.separate(this.turrets,G.turret.apart,null,null),this.sweepers[0].level>0)for(let e=0;e<3;e++){let t=this.turrets[e];if(!(t.level<=0))for(let e=0;e<3;e++){let n=this.sweepers[e];if(n.level<=0||n.pull<=0)continue;let r=n.pull+G.turret.apart*.5,i=t.x-n.x,a=t.z-n.z,o=Math.sqrt(i*i+a*a);if(o>=r)continue;let s=o>1e-4?i/o:t.homeX,c=o>1e-4?a/o:t.homeZ;t.x=n.x+s*r,t.z=n.z+c*r;let l=t.vx*s+t.vz*c;l<0&&(t.vx-=l*s,t.vz-=l*c)}}for(let e=0;e<3;e++){let t=this.turrets[e];t.level<=0||(this.sideX=t.sideX,this.sideZ=t.sideZ,this.ringOut(t,ki))}}r=!1;for(let i=0;i<3;i++){let a=this.allies[i];a.level<=0||(this.allyStep(a,e,t,n),r=!0)}if(r&&this.allies[1].level>0){this.separate(this.allies,G.clubAlly.apart,null,this.allies);for(let e=0;e<3;e++){let t=this.allies[e];t.level<=0||t.mode!==0||(this.allyIdle(t),t.x=Math.min(Math.max(t.x,-20),20),t.z=Math.min(Math.max(t.z,-19),H.holeMaxZ),this.ringOut(t,Ai))}}}gopherStep(e,t,n){let r=this.gopher,i=G.gopher,{ball:a,hole:o}=this.d,s=i.look.x,c=i.look.z,l=n&&r.charges>0?a.incoming(o.x,o.z,this.holeR+i.watch,t,i.dropTan):-1;if(r.watch=l,r.watchLeft=-1,r.watchIn=!1,l>=0){let e=a.state[l]===1,n=(e?a.tx[l]:a.px[l])-o.x,u=(e?a.tz[l]:a.pz[l])-o.z,d=Math.sqrt(n*n+u*u);d>.001&&(s=n/d*i.roam,c=u/d*i.roam),r.wx=a.px[l],r.wy=a.py[l],r.wz=a.pz[l],e&&(r.watchLeft=a.tf[l]-(t-a.t0[l])),r.watchIn=d<=this.holeR}let u=1-Math.exp(-e*i.follow),d=(s-r.ox)*u,f=(c-r.oz)*u,p=Math.sqrt(d*d+f*f),m=i.speed*e;p>m&&(d*=m/p,f*=m/p),r.ox+=d,r.oz+=f}fanStep(e,t,n){let r=this.fan;if(r.pushedNow=0,r.level<=0||!n)return;let i=G.flagFan,{ball:a,hole:o}=this.d;if(r.phase===0)r.timer-=e,r.timer<=0&&(r.phase=1,r.phaseT=0);else if(r.phaseT+=e,r.phase===1)r.phaseT>=i.lower&&(r.phase=2,r.phaseT=0,r.spins++,this.d.cue(`flagFan`,o.x,o.z));else if(r.phase===2){let n=a.fanPush(e,t,o.x,o.z,r.radius,r.push,r.accel,i.flightWindow);r.pushedNow=n,r.pushes+=n,r.phaseT>=r.spin&&(r.phase=3,r.phaseT=0)}else r.phaseT>=i.rise&&(r.phase=0,r.phaseT=0,r.timer=r.cooldown)}turretSkip(e,t){let n=this.skip;n.fill(-1);let r=0;for(let i=0;i<3;i++){let a=this.turrets[i];if(!(a.level<=0)&&(a!==e&&(n[r++]=t?a.pick:a.lock),!t))for(let e=0;e<a.sBall.length;e++)a.sAlive[e]===1&&a.sBall[e]>=0&&(n[r++]=a.sBall[e])}if(t)for(let e=0;e<3;e++)this.allies[e].level>0&&(n[r++]=this.allies[e].target)}turretStep(e,t,n,r){let i=G.turret,{ball:a,hole:o}=this.d;e.cooldown-=t;for(let t=0;t<e.sAlive.length;t++){if(e.sAlive[t]===0)continue;let r=t*3,i=e.sBall[t];i>=0&&(a.state[i]!==1||a.t0[i]!==e.sT0[t]?e.sBall[t]=-1:(e.sTo[r]=a.px[i],e.sTo[r+1]=a.py[i],e.sTo[r+2]=a.pz[i]));let o=(n-e.sStart[t])/e.sDur[t];if(o>=1){e.to[0]=e.sTo[r],e.to[1]=e.sTo[r+1],e.to[2]=e.sTo[r+2];let n=e.sBall[t];e.sAlive[t]=0,e.sBall[t]=-1,e.hitSeq++,n>=0&&(a.kill(n),this.d.cue(`turret`,e.to[0],e.to[2],e.to[1]))}else e.sPos[r]=e.sFrom[r]+(e.sTo[r]-e.sFrom[r])*o,e.sPos[r+1]=e.sFrom[r+1]+(e.sTo[r+1]-e.sFrom[r+1])*o,e.sPos[r+2]=e.sFrom[r+2]+(e.sTo[r+2]-e.sFrom[r+2])*o}if(e.lock>=0){let t=e.lock;(!r||a.state[t]!==1||a.t0[t]!==e.lockT0)&&(e.lock=-1)}if(e.pick>=0){let t=a.state[e.pick];(t!==3&&t!==2||a.vtxN>0&&a.inVortex(e.pick))&&(e.pick=-1)}if(e.retarget-=t,e.ammo>=Li(e.level,!0)||!r?e.pick=-1:(e.retarget<=0||e.pick<0)&&(this.turretSkip(e,!0),e.pick=this.turretPick(e),e.retarget=i.retarget),this.station(e),e.pick>=0?this.turretDrive(e,t,a.px[e.pick],a.pz[e.pick],i.driveSpeed,i.steer,i.arrive):this.turretDrive(e,t,e.stationX,e.stationZ,i.stationSpeed,i.stationSteer,i.stationArrive),e.pick>=0){let t=a.px[e.pick]-e.x,n=a.pz[e.pick]-e.z;t*t+n*n<=i.pickReach*i.pickReach&&(e.loadAt[0]=a.px[e.pick],e.loadAt[1]=a.py[e.pick],e.loadAt[2]=a.pz[e.pick],a.kill(e.pick),e.pick=-1,e.retarget=0,e.ammo++,e.loads++,e.loadSeq++)}if(this.muzzle(e),e.lock<0&&r&&e.ammo>0&&this.freeShot(e)>=0){this.turretSkip(e,!1);let t=Math.max(0,e.cooldown)+Math.PI/2/i.turnSpeed+i.lockSpare,r=a.findThreat(o.x,o.z,e.radius,i.engageLeft,n,e.mx,e.mz,i.reach,this.skip,t);r>=0&&(e.lock=r,e.lockT0=a.t0[r],e.locks++)}let s=e.lock>=0?e.lock:e.pick,c=Math.PI;if(s>=0){let n=Math.atan2(a.px[s]-e.x,a.pz[s]-e.z),r=a.px[s]-e.mx,o=a.pz[s]-e.mz,l=Math.min(Math.max(Math.atan2(a.py[s]-e.my,Math.sqrt(r*r+o*o)),i.pitchMin),i.pitchMax),u=n-e.yaw;u-=Math.round(u/Di)*Di;let d=1-Math.exp(-t*i.aimEase),f=u*d,p=i.turnSpeed*t;f>p?f=p:f<-p&&(f=-p);let m=e.yaw+f;m-=Math.round(m/Di)*Di,e.yaw=m;let h=(l-e.pitch)*d,g=i.pitchSpeed*t;h>g?h=g:h<-g&&(h=-g),e.pitch+=h,c=u-f,c<0&&(c=-c),this.muzzle(e)}if(e.lock>=0&&e.cooldown<=0&&e.ammo>0){let t=a.timeLeft(e.lock,n);(c<=i.aimTol||t<=i.shotMin/i.shotLeftK+.05)&&this.fire(e,n,t)}else e.cooldown<0&&(e.cooldown=0)}muzzle(e){let t=G.turret,n=t.barrelPivotZ+t.muzzleLen*Math.cos(e.pitch);e.mx=e.x+Math.sin(e.yaw)*n,e.my=t.barrelPivotY+t.muzzleLen*Math.sin(e.pitch),e.mz=e.z+Math.cos(e.yaw)*n}freeShot(e){for(let t=0;t<e.sAlive.length;t++)if(e.sAlive[t]===0)return t;return-1}fire(e,t,n){let r=G.turret,i=this.d.ball,a=this.freeShot(e);if(a<0)return;let o=e.lock,s=a*3;e.from[0]=e.sPos[s]=e.sFrom[s]=e.mx,e.from[1]=e.sPos[s+1]=e.sFrom[s+1]=e.my,e.from[2]=e.sPos[s+2]=e.sFrom[s+2]=e.mz,e.sTo[s]=i.px[o],e.sTo[s+1]=i.py[o],e.sTo[s+2]=i.pz[o];let c=i.px[o]-e.mx,l=i.py[o]-e.my,u=i.pz[o]-e.mz,d=Math.sqrt(c*c+l*l+u*u);e.sDur[a]=Math.max(.02,Math.min(Math.max(d/r.shotSpeed,r.shotMin),n*r.shotLeftK)),e.sStart[a]=t,e.sAlive[a]=1,e.sBall[a]=o,e.sT0[a]=i.t0[o],e.lock=-1,e.ammo--,e.cooldown=e.interval,e.shots++,e.seq++,e.shotAt=t}turretPick(e){let t=G.turret,{ball:n,hole:r}=this.d,i=Math.max(t.pickupMin,this.keepT-t.pickReach+.05);return n.pickupTarget(e.x,e.z,r.x,r.z,t.pickupRadius,i,t.pickupHoleWeight,e.sideX,e.sideZ,this.skip)}afterBalls(e,t,n){if(e<=0)return 0;this.bounceStep(t);let r=0;this.sweepers[0].level>0&&(r=this.vortexStep(e,t,n));let i=this.decoys;if(i.want>0&&n){if(i.count<i.want){let e=i.count;for(let t=e;t<i.want;t++)this.spawnDecoy(t,t===e?0:(t-e)*G.decoys.life/Math.max(1,i.want)),i.count=t+1}for(let t=0;t<i.count;t++)i.age[t]+=e,i.age[t]>=G.decoys.life&&this.spawnDecoy(t,0)}else i.want===0&&(i.count=0);for(let e=0;e<3;e++)this.returnStep(this.allies[e],t);return r}guard(e,t){let n=G.roof.umbrellaCatch;if(t&&this.roof.charges>0&&(n.mode!==`canopy`||n.guardCup))return this.roofHit(e);let r=this.gopher;if(r.charges<=0)return!1;let{ball:i,hole:a}=this.d;if(Ti.defImmune(i.type[e])||t&&i.dropTan(e)>G.gopher.dropTan)return!1;let o=i.px[e]-a.x,s=i.pz[e]-a.z,c=Math.sqrt(o*o+s*s);c<.05&&(o=this.d.rng.next()-.5,s=1,c=Math.sqrt(o*o+1));let l=G.gopher.batSpeed/c;return i.deflect(e,o*l,G.gopher.batUp,s*l,this.now),r.charges--,r.blocks++,r.popAt=this.now,r.seq++,r.x=i.px[e],r.z=i.pz[e],this.d.cue(`gopher`,r.x,r.z),!0}roofHit(e){let t=this.roof;if(t.charges<=0)return!1;let{ball:n,hole:r}=this.d,i=n.px[e]-r.x,a=n.pz[e]-r.z,o=Math.sqrt(i*i+a*a);o<.05&&(i=this.d.rng.next()-.5,a=1,o=Math.sqrt(i*i+1));let s=G.roof.glance/o;return t.x=n.px[e],t.y=n.py[e],t.z=n.pz[e],n.deflect(e,i*s,G.roof.glanceUp,a*s,this.now),G.roof.bounceBack.on&&this.bounceBack(e),t.charges--,t.hits++,t.hitAt=this.now,t.seq++,this.syncRoof(),this.d.cue(t.charges>0?`roofHit`:`roofBreak`,t.x,t.z,t.y),!0}bounceBack(e){let t=this.roof,n=G.roof.bounceBack,{ball:r,ai:i}=this.d;if(t.bKills>=t.bKill.length)return;let a=-1;for(let e=0;e<t.bAlive.length;e++)if(t.bAlive[e]===0){a=e;break}if(a<0)return;let o=-1,s=this.tmpO;if(r.launchPoint(e,s)){let e=1/0;for(let t=0;t<i.active;t++){if(!i.isTargetable(t))continue;let n=i.slots[t],r=n.x-s[0],a=n.y-s[1],c=n.z-s[2],l=r*r+a*a+c*c;l<e&&(e=l,o=t)}}else o=this.pickGolfer();if(o<0)return;let c=i.slots[o],l=r.px[e],u=r.py[e],d=r.pz[e],f=c.x-l,p=c.z-d,m=Math.sqrt(f*f+p*p);t.bAlive[a]=1,t.bFrom[a*3]=l,t.bFrom[a*3+1]=u,t.bFrom[a*3+2]=d,t.bGolfer[a]=o,t.bT0[a]=this.now,t.bTf[a]=Math.min(n.maxFlight,Math.max(n.minFlight,m/n.speed)),t.bKill[t.bKills++]=e}bounceStep(e){let t=this.roof,{ball:n,ai:r}=this.d;for(let e=0;e<t.bKills;e++)n.kill(t.bKill[e]);t.bKills=0;for(let n=0;n<t.bAlive.length;n++){if(t.bAlive[n]===0||e-t.bT0[n]<t.bTf[n])continue;t.bAlive[n]=0;let i=t.bGolfer[n];if(!r.isTargetable(i))continue;r.timeOut(i,G.roof.bounceBack.stun),t.stuns++,t.stunGolfer=i,t.stunSeq++;let a=r.slots[i];this.d.cue(`timeOut`,a.x,a.z,a.y+2)}}bouncePos(e,t,n,r=null){let i=this.roof;if(i.bAlive[e]===0)return!1;let a=i.bGolfer[e],o=this.d.ai.slots[a];if(!o)return!1;let s=Ei((t-i.bT0[e])/i.bTf[e],0,1),c=i.bFrom[e*3],l=i.bFrom[e*3+1],u=i.bFrom[e*3+2],d=r?r[a*3]:o.x,f=r?r[a*3+1]:o.y+Oi,p=r?r[a*3+2]:o.z,m=d-c,h=p-u,g=G.roof.bounceBack,_=g.arc+g.arcK*Math.sqrt(m*m+h*h);return n[0]=c+m*s,n[1]=l+(f-l)*s+4*_*s*(1-s),n[2]=u+h*s,!0}vortexStep(e,t,n){for(let t=0;t<3;t++){let r=this.sweepers[t];r.level>0&&this.vortexMove(r,e,n)}if(this.sweepers[1].level>0){this.separate(this.sweepers,G.sweeper.apart,this.sweepers,null);for(let e=0;e<3;e++)this.sweepers[e].level>0&&this.vortexOut(this.sweepers[e])}if(!n)return 0;let r=G.sweeper,i=this.d.ball,a=0;for(let n=0;n<3;n++){let o=this.sweepers[n];if(o.level<=0)continue;let s=i.vortex(e,o,r.spin,r.inward,r.grip);s>0&&(o.swept+=s,o.seq++,o.lastSweepAt=t,this.d.cue(`sweep`,o.x,o.z),a+=s)}return a}vortexMove(e,t,n){let r=G.sweeper,{ball:i,hole:a}=this.d;this.vortexRings(e);let o=H.fairwayZ;if(!n){let n=Math.exp(-t*r.stopRate);e.vx*=n,e.vz*=n,e.target=-1,e.x=Math.min(Math.max(e.x+e.vx*t,-22),22),e.z=Math.min(Math.max(e.z+e.vz*t,-19),o),this.vortexOut(e);return}if(e.retarget-=t,e.target>=0){let t=i.state[e.target];t!==3&&t!==2&&(e.target=-1)}if(e.retarget<=0||e.target<0){let t=this.skip;t.fill(-1);for(let n=0,r=0;n<3;n++)n!==e.idx&&this.sweepers[n].level>0&&(t[r++]=this.sweepers[n].target);e.target=i.groundTarget(e.x,e.z,a.x,a.z,r.nearHoleWeight,e.keepIn+.1,t,-19-e.pull*.8),e.retarget=r.retarget}let s=e.keepIn+e.pull,c,l;if(e.target>=0)c=i.px[e.target],l=i.pz[e.target];else{let t=a.x>0?-1:1,n=Math.max(r.idleDistance,s+.6);c=a.x+(e.idx===1?-t:e.idx===2?.3*t:t)*n,l=a.z+(e.idx===2?-n:2)}let u=c-a.x,d=l-a.z,f=Math.sqrt(u*u+d*d);if(f<s){if(f>1e-6)u/=f,d/=f;else{u=e.x-a.x,d=e.z-a.z;let t=Math.sqrt(u*u+d*d);t>1e-6?(u/=t,d/=t):(u=1,d=0)}c=a.x+u*s,l=a.z+d*s}c=Math.min(Math.max(c,-22),22),l=Math.min(Math.max(l,-19),o);let p=c-e.x,m=l-e.z,h=Math.sqrt(p*p+m*m),g=h>.001?Math.min(e.speed,h*r.arrive)/h:0,_=1-Math.exp(-t*r.steer);e.vx+=(p*g-e.vx)*_,e.vz+=(m*g-e.vz)*_,e.x=Math.min(Math.max(e.x+e.vx*t,-22),22),e.z=Math.min(Math.max(e.z+e.vz*t,-19),o),this.vortexOut(e)}vortexRings(e){let t=this.d.hole;e.pull=e.level>0?e.radius*G.sweeper.pullK:0,e.keepIn=this.holeR+G.sweeper.keepGap,e.hx=t.x,e.hz=t.z}vortexOut(e){let t=this.d.hole,n=e.keepIn+e.pull,r=H.fairwayZ,i=e.x-t.x,a=e.z-t.z,o=Math.sqrt(i*i+a*a);if(o<n){let r=t.x>0?-1:1,s=0;o>1e-6&&(r=i/o,s=a/o),e.x=t.x+r*n,e.z=t.z+s*n;let c=e.vx*r+e.vz*s;c<0&&(e.vx-=c*r,e.vz-=c*s)}if(e.x=Math.min(Math.max(e.x,-22),22),e.z=Math.min(Math.max(e.z,-19),r),i=e.x-t.x,a=e.z-t.z,o=i*i+a*a,o<n*n){if(e.z===-19||e.z===r){let r=Math.sqrt(Math.max(0,n*n-a*a));e.x=t.x+(i<0?-r:r),(e.x<-22||e.x>22)&&(e.x=t.x+(i<0?r:-r)),e.x=Math.min(Math.max(e.x,-22),22)}else if(e.x===-22||e.x===22){let o=Math.sqrt(Math.max(0,n*n-i*i));e.z=t.z+(a<0?-o:o),(e.z<-19||e.z>r)&&(e.z=t.z+(a<0?o:-o)),e.z=Math.min(Math.max(e.z,-19),r)}}}steer(e,t,n,r,i,a,o){t=Ei(t,-20,20),n=Ei(n,-19,H.holeMaxZ);let s=t-e.x,c=n-e.z,l=Math.sqrt(s*s+c*c),u=l>.001?Math.min(r,l*o)/l:0,d=1-Math.exp(-i*a);e.vx+=(s*u-e.vx)*d,e.vz+=(c*u-e.vz)*d,e.x=Ei(e.x+e.vx*i,-20,20),e.z=Ei(e.z+e.vz*i,-19,H.holeMaxZ)}spawnDecoy(e,t){let n=this.decoys,{hole:r,rng:i}=this.d,a=G.decoys,o=Math.max(-20+a.edge,r.x-a.maxFromHole),s=Math.min(20-a.edge,r.x+a.maxFromHole),c=Math.max(-19+a.edge,r.z-a.maxFromHole),l=Math.max(c,Math.min(H.holeMaxZ-a.edge,r.z+a.maxFromHole)),u=n.x[e],d=n.z[e],f=e<n.count,p=0,m=0,h=-1;for(let t=0;t<a.tries;t++){let t=o+i.next()*(s-o),g=c+i.next()*(l-c),_=Math.sqrt((t-r.x)*(t-r.x)+(g-r.z)*(g-r.z)),v=_/a.minFromHole;_>a.maxFromHole&&(v=Math.min(v,a.maxFromHole/_)),f&&(v=Math.min(v,Math.sqrt((t-u)*(t-u)+(g-d)*(g-d))/a.minApart));for(let r=0;r<n.count;r++)r!==e&&(v=Math.min(v,Math.sqrt((t-n.x[r])*(t-n.x[r])+(g-n.z[r])*(g-n.z[r]))/a.minApart));if(v>h&&(h=v,p=t,m=g),v>=1)break}n.x[e]=p,n.z[e]=m,n.age[e]=t,n.spawns[e]++,n.hops++,t===0&&this.d.cue(`decoy`,p,m)}allyStep(e,t,n,r){let{ball:i,hole:a}=this.d;if(e.cd-=t,this.allyIdle(e),e.mode===1){if(e.modeT+=t,this.allyStance(e,e.modeT/G.clubAlly.windup),this.ringOut(e,Ai),e.modeT>=G.clubAlly.windup){e.mode=G.clubAlly.followHold>0?2:0,e.modeT=0,e.swingAt=n,e.vx=e.vz=0;let t=e.target;if(e.target=-1,e.cd=e.cooldown,t>=0&&(i.state[t]===3||i.state[t]===2)&&!(i.vtxN>0&&i.inVortex(t))){let r=i.px[t]-e.x,a=i.pz[t]-e.z;r*r+a*a<=(G.clubAlly.reach+.5)*(G.clubAlly.reach+.5)&&this.hitBack(e,t,n)}}return}if(e.mode===2){e.modeT+=t,e.modeT>=G.clubAlly.followHold&&(e.mode=0,e.modeT=0),this.ringOut(e,Ai);return}if(e.retarget-=t,e.target>=0){let t=i.state[e.target];(t!==3&&t!==2||i.vtxN>0&&i.inVortex(e.target))&&(e.target=-1)}if(r&&(e.retarget<=0||e.target<0)){let t=this.skip;t.fill(-1);let r=0;for(let n=0;n<3;n++)n!==e.idx&&this.allies[n].level>0&&(t[r++]=this.allies[n].target);for(let e=0;e<3;e++)this.turrets[e].level>0&&(t[r++]=this.turrets[e].pick);e.target=i.groundThreat(a.x,a.z,G.clubAlly.guardRadius,e.x,e.z,n,t),e.retarget=G.clubAlly.retarget}let o,s,c=!1;e.target>=0&&r?(o=i.px[e.target],s=i.pz[e.target],e.hg=0):(this.allyStation(e),o=this.dgx,s=this.dgz,c=!0),this.dgx=Math.min(Math.max(o,-20),20),this.dgz=Math.min(Math.max(s,-19),H.holeMaxZ),this.detour(e,Ai);let l=G.clubAlly;this.steer(e,this.dgx,this.dgz,c?Math.min(e.speed,l.idleSpeed):e.speed,t,c?l.idleSteer:l.steer,c?l.idleArrive:l.arrive),this.ringOut(e,Ai);let u=e.vx*e.vx+e.vz*e.vz;if(e.facing=e.target>=0?Math.atan2(i.px[e.target]-e.x,i.pz[e.target]-e.z):u>.04?Math.atan2(e.vx,e.vz):Math.PI,e.target>=0&&e.cd<=0&&r){let t=i.px[e.target]-e.x,n=i.pz[e.target]-e.z;t*t+n*n<=G.clubAlly.reach*G.clubAlly.reach&&(e.mode=1,e.modeT=0,e.vx*=.2,e.vz*=.2,e.hitTarget=this.pickGolfer(),e.wx=e.x,e.wz=e.z,e.wyaw=e.facing,this.allyTurn(e))}}allyStance(e,t){let{ball:n,ai:r}=this.d;t>1&&(t=1);let i=e.target,a=e.wx,o=e.wz,s=e.wyaw;if(i>=0&&(n.state[i]===3||n.state[i]===2)){let t=n.px[i],c=n.pz[i],l=Math.PI,u=e.hitTarget;if(u>=0){let e=r.slots[u],n=e.x-t,i=e.z-c;n*n+i*i>1e-6&&(l=Math.atan2(n,i))}l+=e.wturn;let d=Math.cos(l),f=Math.sin(l),p=wr.ballLocal;a=Ei(t-(d*p[0]+f*p[2])*1,-20,20),o=Ei(c-(-f*p[0]+d*p[2])*1,-19,H.holeMaxZ);let m=l-e.wyaw;m-=Math.round(m/(2*Math.PI))*2*Math.PI,s=e.wyaw+m}else if(i>=0)return;let c=1-(1-t)*(1-t)*(1-t);e.x=e.wx+(a-e.wx)*c,e.z=e.wz+(o-e.wz)*c,e.facing=e.wyaw+(s-e.wyaw)*c}allyTurn(e){let{ball:t,ai:n,hole:r}=this.d;e.wturn=0;let i=e.target;if(i<0)return;let a=t.px[i],o=t.pz[i],s=Math.PI,c=e.hitTarget;if(c>=0){let e=n.slots[c],t=e.x-a,r=e.z-o;t*t+r*r>1e-6&&(s=Math.atan2(t,r))}let l=wr.ballLocal,u=this.keepA;for(let t=0;t<2;t++)for(let n=0;n<=24;n++){let i=n===0?0:(n+1>>1)*G.clubAlly.stanceStep*((n&1)==1?1:-1),c=Math.cos(s+i),d=Math.sin(s+i),f=Ei(a-(c*l[0]+d*l[2])*1,-20,20),p=Ei(o-(-d*l[0]+c*l[2])*1,-19,H.holeMaxZ),m=f-r.x,h=p-r.z;if(!(m*m+h*h<u*u)&&!(t===0&&h>0&&m>-u&&m<u)){e.wturn=i;return}}}pickGolfer(){let{ai:e,rng:t}=this.d,n=e.active,r=-1;if(n>0){for(let i=0;i<6&&r<0;i++){let i=t.int(n);e.timeoutLeft(i)<=0&&e.isTargetable(i)&&(r=i)}if(r<0){let i=t.int(n);for(let t=0;t<n&&r<0;t++)e.isTargetable((i+t)%n)&&(r=(i+t)%n)}}return r}hitBack(e,t,n){let{ball:r,ai:i}=this.d,a=-1;for(let t=0;t<e.rAlive.length;t++)if(e.rAlive[t]===0){a=t;break}let o=e.hitTarget;(o<0||!i.isTargetable(o))&&(o=this.pickGolfer()),a>=0&&o>=0&&(e.rAlive[a]=1,e.rFrom[a*3]=r.px[t],e.rFrom[a*3+1]=Math.max(.3,r.py[t]),e.rFrom[a*3+2]=r.pz[t],e.rGolfer[a]=o,e.rT0[a]=n),r.kill(t),e.hits++,this.d.cue(`allySwing`,e.x,e.z)}returnStep(e,t){let n=this.d.ai;for(let r=0;r<e.rAlive.length;r++){if(e.rAlive[r]===0||t-e.rT0[r]<G.clubAlly.returnFlight)continue;e.rAlive[r]=0;let i=e.rGolfer[r];if(n.isTargetable(i)){n.timeOut(i,e.timeout),e.timeouts++,e.hitGolfer=i,e.hitSeq++;let t=n.slots[i];this.d.cue(`timeOut`,t.x,t.z,t.y+2)}}}returnPos(e,t,n,r,i=null){if(e.rAlive[t]===0)return!1;let a=e.rGolfer[t],o=this.d.ai.slots[a];if(!o)return!1;let s=Ei((n-e.rT0[t])/G.clubAlly.returnFlight,0,1),c=e.rFrom[t*3],l=e.rFrom[t*3+1],u=e.rFrom[t*3+2],d=i?i[a*3]:o.x,f=i?i[a*3+1]:o.y+Oi,p=i?i[a*3+2]:o.z;return r[0]=c+(d-c)*s,r[1]=l+(f-l)*s+7*s*(1-s),r[2]=u+(p-u)*s,!0}static snapSize(){let e=G.clubAlly.returnBalls,t=G.turret.shots,n=G.roof.bounceBack.balls;return[24+3*e*5,7+3*(17+t*12)+18+54+n*6,1+3*t+3*e+n]}save(e){let t=this.gopher;e.wd(t.charges),e.wd(t.ox),e.wd(t.oz),e.wd(this.roof.charges);let n=this.fan;e.wd(n.timer),e.wd(n.phase),e.wd(n.phaseT);let r=this.decoys;e.wb(r.count);for(let t=0;t<r.count;t++)e.wf(r.x[t]),e.wf(r.z[t]),e.wf(r.age[t]);for(let t=0;t<3;t++){let n=this.turrets[t];e.wd(n.cooldown),e.wd(n.yaw),e.wd(n.pitch),e.wd(n.x),e.wd(n.z),e.wd(n.vx),e.wd(n.vz),e.wd(n.ammo),e.wd(n.pick),e.wd(n.retarget),e.wd(n.lock),e.wd(n.lockT0),e.wd(n.sideX),e.wd(n.sideZ),e.wd(n.hg),e.wd(n.hgx),e.wd(n.hgz);for(let t=0;t<n.sAlive.length;t++){let r=t*3;e.wb(n.sAlive[t]),e.wd(n.sPos[r]),e.wd(n.sPos[r+1]),e.wd(n.sPos[r+2]),e.wd(n.sFrom[r]),e.wd(n.sFrom[r+1]),e.wd(n.sFrom[r+2]),e.wd(n.sTo[r]),e.wd(n.sTo[r+1]),e.wd(n.sTo[r+2]),e.wd(n.sBall[t]),e.wd(n.sT0[t]),e.wd(n.sStart[t]),e.wd(n.sDur[t])}}for(let t=0;t<3;t++){let n=this.sweepers[t];e.wd(n.x),e.wd(n.z),e.wd(n.vx),e.wd(n.vz),e.wd(n.target),e.wd(n.retarget)}for(let t=0;t<3;t++){let n=this.allies[t];e.wd(n.x),e.wd(n.z),e.wd(n.vx),e.wd(n.vz),e.wd(n.facing),e.wd(n.mode),e.wd(n.modeT),e.wd(n.cd),e.wd(n.target),e.wd(n.retarget),e.wd(n.hitTarget),e.wd(n.wx),e.wd(n.wz),e.wd(n.wyaw),e.wd(n.wturn),e.wd(n.hg),e.wd(n.hgx),e.wd(n.hgz);for(let t=0;t<n.rAlive.length;t++)e.wb(n.rAlive[t]),n.rAlive[t]!==0&&(e.wf(n.rFrom[t*3]),e.wf(n.rFrom[t*3+1]),e.wf(n.rFrom[t*3+2]),e.wf(n.rGolfer[t]),e.wf(n.rT0[t]))}this.saveBounce(e)}restore(e){let t=this.gopher;t.charges=e.rd(),t.ox=e.rd(),t.oz=e.rd(),this.roof.charges=e.rd(),this.syncRoof();let n=this.fan;n.timer=e.rd(),n.phase=e.rd(),n.phaseT=e.rd();let r=this.decoys,i=e.rb();for(let t=0;t<i;t++){let n=e.rf(),i=e.rf();(t>=r.count||n!==r.x[t]||i!==r.z[t])&&r.spawns[t]++,r.x[t]=n,r.z[t]=i,r.age[t]=e.rf()}r.count=i;for(let t=0;t<3;t++){let n=this.turrets[t];n.cooldown=e.rd(),n.yaw=e.rd(),n.pitch=e.rd(),n.x=e.rd(),n.z=e.rd(),n.vx=e.rd(),n.vz=e.rd(),n.ammo=e.rd(),n.pick=e.rd(),n.retarget=e.rd(),n.lock=e.rd(),n.lockT0=e.rd(),n.sideX=e.rd(),n.sideZ=e.rd(),n.hg=e.rd(),n.hgx=e.rd(),n.hgz=e.rd();for(let t=0;t<n.sAlive.length;t++){let r=t*3;n.sAlive[t]=e.rb(),n.sPos[r]=e.rd(),n.sPos[r+1]=e.rd(),n.sPos[r+2]=e.rd(),n.sFrom[r]=e.rd(),n.sFrom[r+1]=e.rd(),n.sFrom[r+2]=e.rd(),n.sTo[r]=e.rd(),n.sTo[r+1]=e.rd(),n.sTo[r+2]=e.rd(),n.sBall[t]=e.rd(),n.sT0[t]=e.rd(),n.sStart[t]=e.rd(),n.sDur[t]=e.rd()}this.muzzle(n)}for(let t=0;t<3;t++){let n=this.sweepers[t];n.x=e.rd(),n.z=e.rd(),n.vx=e.rd(),n.vz=e.rd(),n.target=e.rd(),n.retarget=e.rd()}for(let t=0;t<3;t++){let n=this.allies[t];n.x=e.rd(),n.z=e.rd(),n.vx=e.rd(),n.vz=e.rd(),n.facing=e.rd(),n.mode=e.rd(),n.modeT=e.rd(),n.cd=e.rd(),n.target=e.rd(),n.retarget=e.rd(),n.hitTarget=e.rd(),n.wx=e.rd(),n.wz=e.rd(),n.wyaw=e.rd(),n.wturn=e.rd(),n.hg=e.rd(),n.hgx=e.rd(),n.hgz=e.rd();for(let t=0;t<n.rAlive.length;t++)n.rAlive[t]=e.rb(),n.rAlive[t]!==0&&(n.rFrom[t*3]=e.rf(),n.rFrom[t*3+1]=e.rf(),n.rFrom[t*3+2]=e.rf(),n.rGolfer[t]=e.rf(),n.rT0[t]=e.rf())}this.restoreBounce(e)}saveBounce(e){let t=this.roof;for(let n=0;n<t.bAlive.length;n++)e.wb(t.bAlive[n]),t.bAlive[n]!==0&&(e.wd(t.bFrom[n*3]),e.wd(t.bFrom[n*3+1]),e.wd(t.bFrom[n*3+2]),e.wd(t.bGolfer[n]),e.wd(t.bT0[n]),e.wd(t.bTf[n]))}restoreBounce(e){let t=this.roof;t.bKills=0;for(let n=0;n<t.bAlive.length;n++)t.bAlive[n]=e.rb(),t.bAlive[n]!==0&&(t.bFrom[n*3]=e.rd(),t.bFrom[n*3+1]=e.rd(),t.bFrom[n*3+2]=e.rd(),t.bGolfer[n]=e.rd(),t.bT0[n]=e.rd(),t.bTf[n]=e.rd())}summary(){let{gopher:e,roof:t,decoys:n,fan:r}=this,i=this.d.hole,a=0;for(let e=0;e<this.d.ai.active;e++)this.d.ai.timeoutLeft(e)>0&&a++;let o=e=>({level:e.level,interval:+e.interval.toFixed(3),radius:e.radius,shots:e.shots,locks:e.locks,hits:e.hitSeq,ammo:e.ammo,loads:e.loads,lock:e.lock,x:+e.x.toFixed(2),z:+e.z.toFixed(2),yaw:+e.yaw.toFixed(3),minClear:Number.isFinite(e.minClear)?+e.minClear.toFixed(6):null}),s=e=>({level:e.level,speed:e.speed,radius:e.radius,pull:+e.pull.toFixed(2),swept:e.swept,x:+e.x.toFixed(1),z:+e.z.toFixed(1),vx:+e.vx.toFixed(2),vz:+e.vz.toFixed(2),fromHole:+Math.hypot(e.x-i.x,e.z-i.z).toFixed(2),keep:+(e.keepIn+e.pull).toFixed(2)}),c=e=>{let t=0;for(let n=0;n<e.rAlive.length;n++)t+=e.rAlive[n];return{level:e.level,hits:e.hits,timeouts:e.timeouts,returning:t,sittingOut:a,mode:e.mode,target:e.target,x:+e.x.toFixed(1),z:+e.z.toFixed(1)}},l=this.turrets.filter(e=>e.level>0),u=this.sweepers.filter(e=>e.level>0),d=this.allies.filter(e=>e.level>0);return{gopher:{charges:e.charges,max:e.max,blocks:e.blocks},roof:{charges:t.charges,max:t.max,hits:t.hits,eave:+this.d.ball.roofH.toFixed(2),bouncing:t.bAlive.reduce((e,t)=>e+t,0),stuns:t.stuns},turret:{...o(this.turret),count:l.length,all:l.map(o)},sweeper:{...s(this.sweeper),count:u.length,swept:this.sweepers.reduce((e,t)=>e+t.swept,0),all:u.map(s)},decoys:{standing:n.count,chance:+n.chance.toFixed(2),aimed:this.d.ai.decoyed,hops:n.hops,at:Array.from({length:n.count},(e,t)=>[+n.x[t].toFixed(1),+n.z[t].toFixed(1)])},ally:{...c(this.ally),count:d.length,hits:this.allies.reduce((e,t)=>e+t.hits,0),timeouts:this.allies.reduce((e,t)=>e+t.timeouts,0),all:d.map(c)},flagFan:{level:r.level,cooldown:+r.cooldown.toFixed(2),spin:+r.spin.toFixed(2),radius:r.radius,phase:r.phase,spins:r.spins,pushes:r.pushes}}}},Gi={uInkPx:{value:.001},uInkPxRange:{value:new Ve(1.2,3.2)}};function Ki(e){let t=(e.colorMix??0)>0,n=new $e({color:e.color??1841200,side:1,vertexColors:t,fog:!1});n.name=`anime-ink`;let r={value:e.width},i={value:e.colorMix??0},a={value:e.darken??.3},o={value:new z(e.color??1841200)};return n.onBeforeCompile=t=>{t.uniforms.uInkWidth=r,t.uniforms.uInkPx=Gi.uInkPx,t.uniforms.uInkPxRange=Gi.uInkPxRange,t.uniforms.uInkMix=i,t.uniforms.uInkDarken=a,t.uniforms.uInkColor=o,t.uniforms.uInkNight=W.uNight;let n=e.smoothAttr?`attribute vec3 inkNormal;
`:``;t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\n${n}uniform float uInkWidth;\nuniform float uInkPx;\nuniform vec2 uInkPxRange;`).replace(`#include <project_vertex>`,`
#ifdef USE_SKINNING
  vec3 inkN = objectNormal;
#else
  vec3 inkN = ${e.smoothAttr?`inkNormal`:`normal`};
#endif
  vec4 inkP = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
  inkP = instanceMatrix * inkP;
  inkN = mat3( instanceMatrix ) * inkN;
#endif
  inkP = modelMatrix * inkP;
  vec3 inkNW = normalize( mat3( modelMatrix ) * inkN );
  float inkDepth = max( -( viewMatrix * inkP ).z, 0.1 );
  float inkPxW = inkDepth * uInkPx;
  inkP.xyz += inkNW * clamp( uInkWidth, uInkPxRange.x * inkPxW, uInkPxRange.y * inkPxW );
  vec4 mvPosition = viewMatrix * inkP;
  gl_Position = projectionMatrix * mvPosition;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uInkMix;
uniform float uInkDarken;
uniform vec3 uInkColor;
uniform vec4 uInkNight;`).replace(`#include <color_fragment>`,`#include <color_fragment>
#ifdef USE_COLOR
  diffuseColor.rgb = mix( uInkColor, vColor.rgb * uInkDarken, uInkMix );
#endif
  // pitch-black night: the (unlit) ink goes black, or every outline would float in the dark
  diffuseColor.rgb *= 1.0 - uInkNight.x;`)},n.customProgramCacheKey=()=>`anime-ink|${e.smoothAttr?`s`:`n`}|${t?`c`:``}`,n}function qi(e,t=1e3){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=n.count,a=new Map,o=Array(i);for(let e=0;e<i;e++){let i=`${Math.round(n.getX(e)*t)},${Math.round(n.getY(e)*t)},${Math.round(n.getZ(e)*t)}`;o[e]=i;let s=a.get(i);s||a.set(i,s=[0,0,0]),s[0]+=r.getX(e),s[1]+=r.getY(e),s[2]+=r.getZ(e)}let s=new Float32Array(i*3);for(let e=0;e<i;e++){let t=a.get(o[e]),n=Math.hypot(t[0],t[1],t[2])||1;s[e*3]=t[0]/n,s[e*3+1]=t[1]/n,s[e*3+2]=t[2]/n}return e.setAttribute(`inkNormal`,new I(s,3)),e}function Ji(e,t){t.smoothAttr&&!e.geometry.getAttribute(`inkNormal`)&&qi(e.geometry);let n=Ki(t),r;if(e.isSkinnedMesh){let t=e,i=new nt(t.geometry,n);i.bindMode=t.bindMode,i.bind(t.skeleton,t.bindMatrix),r=i}else if(e.isInstancedMesh){let t=e,i=new Ke(t.geometry,n,t.instanceMatrix.count);i.instanceMatrix=t.instanceMatrix,i.count=t.count,r=i}else r=new F(e.geometry,n);r.name=`${e.name}-ink`,r.matrixAutoUpdate=e.matrixAutoUpdate,r.position.copy(e.position),r.quaternion.copy(e.quaternion),r.scale.copy(e.scale),r.renderOrder=e.renderOrder,r.frustumCulled=!r.isSkinnedMesh&&e.frustumCulled,r.updateMatrix();let i=e.parent;return i&&i.add(r),r}function Yi(e,t){Gi.uInkPx.value=2*Math.tan(e*Math.PI/360)/Math.max(1,t)}var Xi=95,Zi=`aNoCast`;function Qi(e){e.traverse(e=>e.layers.enable(1))}var $i=[new V,new V,new V,new V],ea=new V,ta=new V,na=new V,ra=new V,ia=new V,aa=new V,oa=new V,sa=new V,ca=new Ne().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),la=`
#include <common>
#include <batching_pars_vertex>
#include <skinning_pars_vertex>
attribute float ${Zi};
void main() {
  #include <batching_vertex>
  #include <skinbase_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  // opted-out parts: pushed outside the clip volume
  if ( ${Zi} > 0.5 ) gl_Position = vec4( 0.0, 0.0, -2.0, 1.0 );
}
`,ua=[36064],da=`
void main() {
  gl_FragColor = vec4( 1.0 );
}
`,fa=[[-1,-1],[1,-1],[1,1],[-1,1]],pa=class{target;camera=new T(-1,1,1,-1,.1,200);size;strength=1;receiverHeight=7.5;casterHeight=17;margin=2;enabled=!0;interval=1;frameN=0;calls=0;triangles=0;depthMaterial;variants=[];casters=[];saved=[];collect=e=>{let t=e.material;e.isMesh&&e.layers.test(this.camera.layers)&&(!t||Array.isArray(t)||t.visible)&&this.casters.push(e)};unsubscribe;primed=!1;lightView=new Ne;lightViewInv=new Ne;constructor(e=2048){this.size=e;let t=new j(e,e,Qe);t.compareFunction=515,t.minFilter=Ue,t.magFilter=Ue,this.target=new Xe(e,e,{format:ve,type:se,minFilter:ye,magFilter:ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:t,generateMipmaps:!1}),this.target.texture.name=`anime-shadow-color`,t.name=`anime-shadow-depth`,this.depthMaterial=new oe({vertexShader:la,fragmentShader:da,colorWrite:!1,side:2}),this.depthMaterial.defaultAttributeValues[Zi]=[0],this.depthMaterial.name=`anime-shadow-depth`,this.camera.layers.set(1),this.fitHeights(qt.topY),this.unsubscribe=Ft(e=>this.fitHeights(e.topY)),W.uShadowMap.value=t,W.uShadowParams.value.set(1/e,6e-4,1,.035)}render(e,t,n,r){let i=W.uShadowParams.value;if(!this.enabled||this.strength<=.001){i.z=0,this.calls=0,this.triangles=0,this.primed||this.prime(e);return}if(this.primed&&this.interval>1&&this.frameN++%this.interval!==0){this.calls=0,this.triangles=0;return}oa.copy(r).negate().normalize(),aa.set(0,0,-1),Math.abs(oa.dot(aa))>.98&&aa.set(1,0,0),ia.crossVectors(oa,aa).normalize(),aa.crossVectors(ia,oa).normalize(),this.lightViewInv.makeBasis(ia,aa,sa.copy(oa).negate()),this.lightView.copy(this.lightViewInv).invert(),n.updateMatrixWorld();let a=n.position,o=1/0,s=1/0,c=-1/0,l=-1/0,u=1/0,d=-1/0;for(let e=0;e<2;e++){let t=e===0?0:this.receiverHeight;for(let r=0;r<4;r++){ea.set(fa[r][0],fa[r][1],.5).unproject(n),ta.subVectors(ea,a).normalize();let i=Math.abs(ta.y)>.001?(t-a.y)/ta.y:Xi;i<0&&e===1||((i<0||i>Xi)&&(i=Xi),na.copy(a).addScaledVector(ta,i),$i[r].copy(na),ra.copy(na).applyMatrix4(this.lightView),ra.x<o&&(o=ra.x),ra.x>c&&(c=ra.x),ra.y<s&&(s=ra.y),ra.y>l&&(l=ra.y),ra.z<u&&(u=ra.z),ra.z>d&&(d=ra.z),na.y=this.casterHeight,ra.copy(na).applyMatrix4(this.lightView),ra.z>d&&(d=ra.z))}}let f=this.margin,p=c-o+f*2,m=l-s+f*2;p=Math.ceil(p/4)*4,m=Math.ceil(m/4)*4;let h=p/this.size,g=m/this.size,_=(o+c)/2,v=(s+l)/2;_=Math.round(_/h)*h,v=Math.round(v/g)*g;let y=this.camera;y.left=_-p/2,y.right=_+p/2,y.bottom=v-m/2,y.top=v+m/2,y.near=-(d+30),y.far=-(u-2),y.updateProjectionMatrix(),y.matrixAutoUpdate=!1,y.matrix.copy(this.lightViewInv),y.matrixWorld.copy(this.lightViewInv),y.matrixWorldInverse.copy(this.lightView),W.uShadowMatrix.value.multiplyMatrices(ca,y.projectionMatrix).multiply(this.lightView);let b=y.far-y.near;i.set(1/this.size,.03/b,this.strength,Math.max(h,g)*1.5);let x=e.getRenderTarget(),S=t.background,C=e.autoClear,w=this.casters;w.length=0,t.traverseVisible(this.collect);let T=this.saved;for(let e=0;e<w.length;e++){let t=w[e];T[e]=t.material,t.material=this.depthFor(t)}t.background=null,e.setRenderTarget(this.target),e.autoClear=!1,e.clear(!0,!0,!1),e.render(t,y);let E=e.getContext();E.invalidateFramebuffer(E.FRAMEBUFFER,ua);for(let e=0;e<w.length;e++)w[e].material=T[e],T[e]=null;this.primed=!0,this.calls=e.info.render.calls,this.triangles=e.info.render.triangles,e.autoClear=C,t.background=S,e.setRenderTarget(x)}depthFor(e){let t=e.userData.casterMaterial;if(t)return t;let n=e,r=+!!e.isSkinnedMesh|(n.isInstancedMesh?2:0)|(n.isInstancedMesh&&n.instanceColor?4:0)|(e.isBatchedMesh?8:0),i=this.variants[r];return i||(i=r===0?this.depthMaterial:this.depthMaterial.clone(),i.defaultAttributeValues[Zi]=[0],this.variants[r]=i),i}fitHeights(e){this.receiverHeight=Math.max(7.5,e+.3),this.casterHeight=Math.max(17,e+1)}prime(e){let t=e.getRenderTarget();e.setRenderTarget(this.target),e.clear(!1,!0,!1),e.setRenderTarget(t),this.primed=!0}setSize(e){e!==this.size&&(this.primed=!1,this.size=e,this.target.depthTexture?.dispose(),this.target.setSize(e,e),this.target.depthTexture&&(this.target.depthTexture.image.width=e,this.target.depthTexture.image.height=e,this.target.depthTexture.needsUpdate=!0))}dispose(){this.unsubscribe(),this.target.depthTexture?.dispose(),this.target.dispose(),this.depthMaterial.dispose();for(let e of this.variants)e&&e!==this.depthMaterial&&e.dispose();W.uShadowMap.value===this.target.depthTexture&&(W.uShadowMap.value=null)}},ma={collar:1,decals:2,blobShadow:3,flagShadow:4,markers:5,halo:6},ha=`
float ignoise( vec2 fc ) {
  return fract( 52.9829189 * fract( dot( fc, vec2( 0.06711056, 0.00583715 ) ) ) );
}
vec3 hdrDither( vec3 c ) {
  float n = ignoise( gl_FragCoord.xy ) - 0.5;
  return c * ( 1.0 + n * vec3( 0.0156, 0.0156, 0.03125 ) );
}
`,ga=`
#define MAX_POOLS 3
uniform vec4 uFloodPools[MAX_POOLS];
uniform vec4 uFloodHeads[MAX_POOLS];
uniform vec4 uFloodIslands[MAX_POOLS];
uniform vec3 uFloodColor;
uniform vec4 uFloodShape;
uniform vec4 uFloodBox;
uniform vec3 uHeroPool;
uniform vec4 uHole;
uniform vec4 uNight;
uniform vec4 uPlayerLight;
uniform vec3 uPlayerColor;
`,_a=`
${ga}
uniform float uTime;
uniform vec4 uWind;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHemiSky;
uniform vec3 uHemiGround;
uniform vec4 uStyle;
uniform vec3 uRimColor;
uniform vec3 uTermColor;
uniform vec4 uCloud;
uniform vec4 uGrade;
uniform sampler2D uNoiseTex;
uniform highp sampler2DShadow uShadowMap;
uniform mat4 uShadowMatrix;
uniform vec4 uShadowParams;
uniform vec3 uShadeTint;
uniform vec4 uCel;
uniform float uPractical;

// ANIME BLOOM BUDGET: ordinary surfaces never reach the bloom threshold (1.6 HDR). Only
// energy elements (flag edge, hole ring, in-flight ball glint, the final marker pulse, lamps,
// fireflies) may go above it. Hue-preserving cap.
#define ANIME_CAP 1.45
vec3 animeCap( vec3 c ) {
  float m = max( max( c.r, c.g ), max( c.b, 1e-4 ) );
  return c * min( 1.0, ANIME_CAP / m );
}

// Luminance-preserving pull towards the time-of-day hue (stylized Purkinje shift at night).
vec3 worldGrade( vec3 c, float amount ) {
  float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
  return mix( c, l * uGrade.rgb, uGrade.a * amount );
}
`,va=`
// MOONLIT NIGHT: the original shaped spots + fill at ground level, faded out as it goes
// pitch black (0 once fully pitch black: the loop is skipped)
float worldSpotsE( vec3 wp ) {
  float e = 0.0;
  if ( uNight.x < 1.0 ) {
    // branch-free (unrolled by the compiler): ~14 ALU + 1 exp2 per lamp; switched-off lamps
    // have w = 0
    for ( int i = 0; i < MAX_POOLS; i ++ ) {
      vec4 pool = uFloodPools[ i ];
      vec4 hd = uFloodHeads[ i ];
      vec3 d = vec3( wp.x - hd.x, -hd.y, wp.z - hd.z );
      float inv = inversesqrt( dot( d, d ) );
      float sp = min( hd.w - hd.w * dot( d, pool.xyz ) * inv, 30.0 );
      e += pool.w * exp2( -1.442695 * sp ) * ( inv * inv * inv );
    }
    float fill = ( 1.0 - smoothstep( uFloodBox.x - 1.0, uFloodBox.x + uFloodBox.w, abs( wp.x ) ) )
               * ( 1.0 - smoothstep( uFloodBox.y - 1.0, uFloodBox.y + uFloodBox.w, wp.z ) )
               * smoothstep( uFloodBox.z - 6.0, uFloodBox.z, wp.z );
    e += fill * uFloodShape.w;
    e /= 1.0 + uFloodShape.y * e;
    // fades out like the moon and the ambient (night.ts PITCH_BLACK_RESIDUAL, exponential:
    // an even perceptual step per slider step), not linearly
    if ( uNight.x > 0.0 ) e *= ( exp2( ${Math.log2(sr).toFixed(6)} * uNight.x ) - ${sr.toFixed(4)} ) * ${(1/(1-sr)).toFixed(6)};
  }
  return e;
}
// PITCH BLACK: every lamp lights a flat round ISLAND at its aim point (r^6 super-gaussian:
// a flat core, a ~0.5 R soft rim, black beyond), and the beam above it is a real cone from
// the island up to the lamp head, so a ball flying through a beam lights up
float worldIslandsE( vec3 wp ) {
  float ei = 0.0;
  for ( int i = 0; i < MAX_POOLS; i ++ ) {
    vec4 isl = uFloodIslands[ i ];
    vec4 hd = uFloodHeads[ i ];
    float t = clamp( wp.y / hd.y, 0.0, 0.9 );
    vec2 dd = wp.xz - mix( isl.xy, hd.xz, t );
    float rs = 1.0 - t;
    float q = dot( dd, dd ) * isl.z / ( rs * rs );
    // (q2 first: the same value bit for bit, but Windows' D3D shader compiler takes ~1 s per program on the
    // "-q * q * q" spelling and ~60 ms on this one; 2026-10-21, ~20 lit programs include it)
    float q2 = q * q;
    ei += isl.w * exp2( -( q2 * q ) );
  }
  return ei / ( 1.0 + uFloodShape.y * ei );
}
vec3 worldHeroPool( vec3 wp ) {
  if ( uHole.w <= 0.0 ) return vec3( 0.0 );
  vec2 dh = wp.xz - uHole.xy;
  return uHeroPool * ( exp( -dot( dh, dh ) * 0.36 ) * uHole.w * ( 1.0 - uNight.x ) );
}
vec3 worldFloodLamps( vec3 wp ) {
  vec3 outC = vec3( 0.0 );
  if ( uFloodColor.r + uFloodColor.g + uFloodColor.b > 0.0 ) {
    float e = worldSpotsE( wp );
    if ( uNight.x > 0.0 ) e += worldIslandsE( wp ) * uNight.x;
    // (optional) warm penumbra: uFloodShape.x = 0 keeps the falloff the lamp's own colour
    vec3 tint = mix( vec3( 1.0, 0.6, 0.34 ), vec3( 1.0 ), smoothstep( 0.04, 0.8, e ) );
    outC = uFloodColor * e * mix( vec3( 1.0 ), tint, uFloodShape.x );
  }
  return outC + worldHeroPool( wp );
}
// PLAYER LIGHT falloff (0..1): an ellipsoid around the hole (radius on the ground, height for
// balls in flight), biased north, windowed so it reaches exactly 0 with zero slope at its rim
// ((1 - x^n)^2: no ring where it ends)
float worldPlayerFall( vec3 wp ) {
  vec2 d = wp.xz - uHole.xy;
  d.y += uPlayerLight.w;
  float h = max( wp.y, 0.0 );
  float x2 = dot( d, d ) * uPlayerLight.x + h * h * uPlayerLight.y;
  float t = min( mix( x2, x2 * x2, uPlayerLight.z ), 1.0 );
  float w = 1.0 - t;
  return w * w;
}
vec3 worldPlayerLight( vec3 wp ) {
  if ( uPlayerColor.r + uPlayerColor.g + uPlayerColor.b <= 0.0 ) return vec3( 0.0 );
  return uPlayerColor * worldPlayerFall( wp );
}
vec3 worldFlood3( vec3 wp ) {
  return worldFloodLamps( wp ) + worldPlayerLight( wp );
}
vec3 worldFlood( vec2 p ) {
  return worldFlood3( vec3( p.x, 0.0, p.y ) );
}
`,ya=`
uniform vec4 uPoolLook;
const vec3 POOL_TEAL = vec3( 0.3, 1.16, 1.36 );
const vec3 POOL_AMBER = vec3( 1.3, 0.94, 0.6 );
vec3 worldFloodGround( vec2 p ) {
  vec3 wp = vec3( p.x, 0.0, p.y );
  if ( uNight.x <= 0.0 ) return worldFlood3( wp );
  vec3 outC = worldHeroPool( wp );
  if ( uFloodColor.r + uFloodColor.g + uFloodColor.b > 0.0 ) {
    // the moonlit spots as they fade out (dusk -> pitch black only)
    float e = worldSpotsE( wp );
    outC += uFloodColor * e * mix( vec3( 1.0 ), mix( vec3( 1.0, 0.6, 0.34 ), vec3( 1.0 ), smoothstep( 0.04, 0.8, e ) ), uFloodShape.x );
    float ei = 0.0;
    float sh = 0.0;
    for ( int i = 0; i < MAX_POOLS; i ++ ) {
      vec4 isl = uFloodIslands[ i ];
      vec2 dd = p - isl.xy;
      float q = dot( dd, dd ) * isl.z;
      float q2 = q * q;
      float f = exp2( -( q2 * q ) ); // (not "-q * q * q": see worldIslandsE)
      ei += isl.w * f;
      sh += isl.w * ( uPoolLook.x * exp2( -2.5 * q ) + uPoolLook.y * ( f * f * f * ( 1.0 - f ) * 9.5 ) + uPoolLook.w * exp2( -1.2 * q ) * ( 1.0 - f ) );
    }
    ei /= 1.0 + uFloodShape.y * ei;
    vec3 tint = mix( POOL_TEAL, vec3( 1.0 ), smoothstep( 0.02, 0.55, ei ) );
    outC += uFloodColor * ( ( ei + sh ) * uNight.x ) * mix( vec3( 1.0 ), tint, uPoolLook.z );
  }
  if ( uPlayerColor.r + uPlayerColor.g + uPlayerColor.b > 0.0 ) {
    float f = worldPlayerFall( wp );
    vec2 d = p - uHole.xy;
    d.y += uPlayerLight.w;
    float x2 = dot( d, d ) * uPlayerLight.x;
    float sh = uPoolLook.x * exp2( -5.0 * x2 ) + uPoolLook.y * ( f * ( 1.0 - f ) * 4.0 ) + uPoolLook.w * exp2( -3.0 * x2 ) * ( 1.0 - f );
    vec3 tint = mix( POOL_AMBER, vec3( 1.0 ), smoothstep( 0.02, 0.5, f ) );
    outC += uPlayerColor * ( f + sh ) * mix( vec3( 1.0 ), tint, uPoolLook.z );
  }
  return outC;
}
`,ba=`
float worldCloud( vec2 p ) {
  if ( uCloud.y <= 0.0 ) return 1.0;
  vec2 uv = p * uCloud.x;
  vec2 wp = texture2D( uNoiseTex, uv * 0.43 + vec2( 0.17, 0.61 ) ).rg - 0.5;
  float base = texture2D( uNoiseTex, uv + uCloud.zw + wp * 0.45 ).a;
#ifdef LITE
  float dens = base * 0.8 + 0.15;
#else
  float det = texture2D( uNoiseTex, uv * 2.0 + uCloud.zw + wp * 0.3 + vec2( 0.5, 0.21 ) ).r;
  float dens = base * 0.8 + det * 0.3;
#endif
  return 1.0 - uCloud.y * smoothstep( 0.6, 0.74, dens );
}
`,xa=`
vec2 worldTreeSway( vec3 p ) {
  float h = max( p.y, 0.0 );
  float ph = dot( p.xz, vec2( 0.11, 0.07 ) );
  float gust = 0.55 + 0.45 * sin( uTime * 0.31 + p.x * 0.013 - p.z * 0.011 );
  float s = 0.55 + sin( uTime * 1.05 + ph ) * 0.35 + sin( uTime * 2.3 + ph * 1.7 ) * 0.15;
  return uWind.xy * ( h * h * 0.0022 * uWind.z * ( 0.6 + 0.8 * uWind.w * gust ) * s );
}
vec2 worldGrassSway( vec3 p, float w ) {
  float ph = dot( p.xz, vec2( 0.37, 0.23 ) );
  float gust = 0.5 + 0.5 * sin( uTime * 0.6 + p.x * 0.05 + p.z * 0.03 );
  float s = 0.5 + 0.5 * sin( uTime * 2.1 + ph );
  return uWind.xy * ( w * uWind.z * ( 0.04 + 0.09 * s * ( 0.5 + uWind.w * gust ) ) );
}
`,Sa=`
vec3 srgbToLinearFast( vec3 c ) {
  return c * ( c * ( c * 0.305306011 + 0.682171111 ) + 0.012522878 );
}
vec3 overlayBlend( vec3 base, vec3 blend ) {
  return mix( 2.0 * base * blend, 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ), step( 0.5, base ) );
}
`,Ca=`
float worldShadow( vec3 wp, vec3 n ) {
  if ( uShadowParams.z <= 0.0 ) return 1.0;
  vec3 c = ( uShadowMatrix * vec4( wp + n * uShadowParams.w, 1.0 ) ).xyz;
  if ( c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0 ) return 1.0;
  float d = c.z - uShadowParams.y;
#ifdef SHADOW_TAPS1
  float s = texture( uShadowMap, vec3( c.xy, d ) );
#else
  // rotated-grid 4 taps (~1 texel): each is a 2x2 bilinear compare, so 16 texels feed a
  // smooth contour that the cel threshold below turns into a clean painted edge
  float t = uShadowParams.x;
  float s = texture( uShadowMap, vec3( c.xy + vec2( -0.4, -1.0 ) * t, d ) )
          + texture( uShadowMap, vec3( c.xy + vec2( 1.0, -0.4 ) * t, d ) )
          + texture( uShadowMap, vec3( c.xy + vec2( 0.4, 1.0 ) * t, d ) )
          + texture( uShadowMap, vec3( c.xy + vec2( -1.0, 0.4 ) * t, d ) );
  s *= 0.25;
#endif
  // cel edge: threshold the (bilinear) PCF result at 0.5 with a ~1 px antialiased step, so
  // the 0.5 contour of the filtered map becomes a crisp, smooth (not stair-stepped) edge
  float aa = clamp( fwidth( s ) * 0.7, 0.04, 0.5 );
  s = smoothstep( 0.5 - aa, 0.5 + aa, s );
  // fade out over the last few % of the map (the far end of the low camera's view): no pop line
  vec2 e2 = min( c.xy, 1.0 - c.xy );
  float edgeFade = smoothstep( 0.0, 0.05, min( e2.x, e2.y ) );
  return 1.0 - uShadowParams.z * ( 1.0 - s ) * edgeFade;
}
`,wa=`
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyGlow;
uniform vec4 uSkySun;
uniform vec4 uSkyMoon;
vec3 skyBase( vec3 d ) {
  float up = clamp( d.y, 0.0, 1.0 );
  vec3 col = mix( uSkyHorizon, uSkyZenith, sqrt( up ) * ( 1.5 - 0.5 * up ) * 0.92 + up * 0.08 );
  float sd = max( dot( d, uSkySun.xyz ), 0.0 );
  float low = 1.0 - up;
  float sd2 = sd * sd;
  col += uSkyGlow * ( sd2 * sd * ( 0.1 + 0.42 * low * low * low ) + pow( sd, 22.0 ) * 0.32 ) * uSkySun.w;
  float md = max( dot( d, uSkyMoon.xyz ), 0.0 );
  col += vec3( 0.32, 0.4, 0.62 ) * ( pow( md, 20.0 ) * 0.22 * uSkyMoon.w );
  return col;
}
`,Ta=`
varying vec3 vViewPosition;
float stylShadow = 1.0;
struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float ndl = dot( geometryNormal, directLight.direction );
  float soft = uCel.x;
  float lit = smoothstep( -soft, soft, ndl - 0.03 ) * stylShadow;
  // thin warm line right on the terminator
  float term = exp( -( ndl * ndl ) / 0.006 ) * stylShadow * uCel.w;
  vec3 irradiance = directLight.color * ( lit + term * uTermColor * 0.35 );
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 ambFlat = mix( uHemiGround, uHemiSky, 0.72 ) * uShadeTint;
  reflectedLight.indirectDiffuse += mix( irradiance, ambFlat, 0.82 ) * 1.3 * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`,Ea=`
{
  vec3 stylNWs = inverseTransformDirection( normal, viewMatrix );
  stylShadow = worldShadow( vStylWorld, stylNWs );
}
#include <lights_fragment_begin>`,Da=`
#include <lights_fragment_end>
{
  vec3 stylNW = inverseTransformDirection( normal, viewMatrix );
  vec3 flood = worldFloodLamps( vStylWorld ) * ( 0.55 + 0.45 * max( stylNW.y, 0.0 ) );
  // pitch black: the PLAYER LIGHT models props from the hole (the side facing it is lit)
  if ( uPlayerColor.r + uPlayerColor.g + uPlayerColor.b > 0.0 ) {
    vec3 plL = normalize( vec3( uHole.x, 1.4, uHole.y - uPlayerLight.w ) - vStylWorld );
    flood += worldPlayerLight( vStylWorld ) * ( 0.4 + 0.6 * max( dot( stylNW, plL ), 0.0 ) );
  }
  reflectedLight.indirectDiffuse += flood * BRDF_Lambert( diffuseColor.rgb );
  float ndv = clamp( dot( normal, normalize( vViewPosition ) ), 0.0, 1.0 );
  float rimEdge = 1.0 - uCel.y;
  float stylRim = smoothstep( rimEdge - 0.06, rimEdge + 0.06, 1.0 - ndv );
  // rim mostly on the side facing the key light (painted edge light), a little everywhere
  float rimSide = 0.35 + 0.65 * smoothstep( -0.2, 0.4, dot( stylNW, uSunDir ) ) * stylShadow;
  totalEmissiveRadiance += stylRim * rimSide * uCel.z * uRimColor * mix( vec3( 1.0 ), diffuseColor.rgb, 0.45 );
#ifdef ANIME_PRACTICAL
  if ( uPractical > 0.0 ) {
    // warm bay lamp: nearest lamp of the row this fragment belongs to (smooth falloff)
    // (up to MAX_ROWS storeys: the row follows the fragment's height; every floor has the same columns, uBayRows.w = 0;
    // the lamp hangs at floor + 2.25 on every row, under the teebay GLB's ceiling)
    float bayRow = clamp( floor( ( vStylWorld.y - uBays[ 0 ].y + 0.4 ) / uBayRows.x ), 0.0, uBayRows.z );
    vec4 bay = vec4( uBays[ 0 ].x - bayRow * uBayRows.y, uBays[ 0 ].y + bayRow * uBayRows.x, uBays[ 0 ].y + bayRow * uBayRows.x + 2.25, uBayRows.w * mod( bayRow, 2.0 ) );
    float bx = ( floor( ( vStylWorld.x - bay.w ) / uBayW ) + 0.5 ) * uBayW + bay.w;
    vec3 lampP = vec3( bx, bay.z, bay.x - 0.35 );
    vec3 ld = lampP - vStylWorld;
    float d2 = dot( ld, ld );
    float pndl = max( dot( stylNW, ld * inversesqrt( max( d2, 1e-4 ) ) ), 0.0 );
    // soft inverse-square pool with a gentle window (no bands: user feedback on night lights)
    float fall = 1.0 / ( 1.0 + d2 * 0.42 );
    fall *= 1.0 - smoothstep( 4.0, 12.0, d2 );
    fall *= 1.35;
    float inside = 1.0 - smoothstep( bay.x + 1.0, bay.x + 2.2, vStylWorld.z );
    vec3 warm = vec3( 1.0, 0.56, 0.22 );
    // (pitch black: x the bay-lamp gain, so the golfers read as the source of every shot)
    float bayGain = mix( 1.0, uNight.w, uNight.x );
    reflectedLight.indirectDiffuse += warm * ( 3.2 * uPractical * bayGain * fall * ( 0.35 + 0.65 * pndl ) * inside ) * BRDF_Lambert( diffuseColor.rgb );
  }
#endif
}
`;function Oa(e){let t=e.uniforms;t.uTime=W.uTime,t.uWind=W.uWind,t.uSunDir=W.uSunDir,t.uSunColor=W.uSunColor,t.uHemiSky=W.uHemiSky,t.uHemiGround=W.uHemiGround,t.uFloodPools=W.uFloodPools,t.uFloodHeads=W.uFloodHeads,t.uFloodIslands=W.uFloodIslands,t.uFloodColor=W.uFloodColor,t.uFloodShape=W.uFloodShape,t.uFloodBox=W.uFloodBox,t.uHeroPool=W.uHeroPool,t.uNight=W.uNight,t.uPlayerLight=W.uPlayerLight,t.uPlayerColor=W.uPlayerColor,t.uStyle=W.uStyle,t.uRimColor=W.uRimColor,t.uTermColor=W.uTermColor,t.uCloud=W.uCloud,t.uGrade=W.uGrade,t.uNoiseTex=W.uNoiseTex,t.uShadowMap=W.uShadowMap,t.uShadowMatrix=W.uShadowMatrix,t.uShadowParams=W.uShadowParams,t.uShadeTint=W.uShadeTint,t.uCel=W.uCel,t.uBrushTex=W.uBrushTex,t.uHole=W.uHole,t.uPractical=W.uPractical,t.uBays=W.uBays,t.uBayRows=W.uBayRows,t.uBayW=W.uBayW,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vStylWorld;
varying vec3 vStylNW;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
  {
    vec4 stylP = vec4( transformed, 1.0 );
    #ifdef USE_BATCHING
      stylP = batchingMatrix * stylP;
    #endif
    #ifdef USE_INSTANCING
      stylP = instanceMatrix * stylP;
    #endif
    vStylWorld = ( modelMatrix * stylP ).xyz;
    vStylNW = normalize( mat3( modelMatrix ) * objectNormal );
  }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${_a}\nuniform sampler2D uBrushTex;\nuniform vec4 uBays[ 2 ];\nuniform vec4 uBayRows;\nuniform float uBayW;\nvarying vec3 vStylWorld;\nvarying vec3 vStylNW;\n${va}\n${Ca}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${ka}`).replace(`#include <lights_lambert_pars_fragment>`,Ta).replace(`#include <lights_fragment_begin>`,Ea).replace(`#include <lights_fragment_end>`,Da).replace(`#include <opaque_fragment>`,`outgoingLight = animeCap( worldGrade( outgoingLight, 0.5 ) );
#include <opaque_fragment>`)}var ka=`
#ifdef ANIME_PAINT
{
  // one-fetch pseudo-triplanar brush strokes in world space (dominant axis picks the plane)
  vec3 an = abs( vStylNW );
  vec2 puv = an.y > 0.6 ? vStylWorld.xz : ( an.x > an.z ? vStylWorld.zy : vStylWorld.xy );
  // visible brush modulation (~ +-9 % value at 2-4 px): two stroke layers, a little hue drift
  vec4 bt = texture( uBrushTex, puv * vec2( 0.3, 0.62 ), -0.5 );
  vec4 bt2 = texture( uBrushTex, puv * vec2( 0.71, 0.33 ) + 0.37, -0.5 );
  float bv = ( bt.r - 0.5 ) * 0.62 + ( bt2.b - 0.5 ) * 0.4 + ( bt.a - 0.5 ) * 0.3;
  diffuseColor.rgb *= 1.0 + bv;
  diffuseColor.rgb = mix( diffuseColor.rgb, diffuseColor.rgb * vec3( 1.04, 1.0, 0.94 ), clamp( ( bt2.a - 0.5 ) * 3.0, 0.0, 1.0 ) );
}
#endif
`,Aa=`hin-anime-cel-v7`;function ja(e={}){let t=new et({color:e.color??16777215,map:e.map??null,vertexColors:e.vertexColors??!1,alphaTest:e.alphaTest??0,transparent:e.transparent??!1,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1});return e.side!==void 0&&(t.side=e.side),e.painted&&(t.defines={...t.defines??{},ANIME_PAINT:``}),e.practical&&(t.defines={...t.defines??{},ANIME_PRACTICAL:``}),t.onBeforeCompile=Oa,t.customProgramCacheKey=()=>Aa,t}var Ma=null;function Na(){if(Ma)return Ma;let e=new Uint8Array(16384);for(let t=0;t<64;t++)for(let n=0;n<64;n++){let r=(n+.5)/64-.5,i=(t+.5)/64-.5,a=Math.sqrt(r*r+i*i)*2,o=Math.min(1,Math.max(0,1-a)),s=o**1.4*(3-2*o)*.5+o*o*.5,c=(t*64+n)*4;e[c]=255,e[c+1]=255,e[c+2]=255,e[c+3]=Math.round(Math.min(1,s)*255)}return Ma=new O(e,64,64,re,se),Ma.magFilter=Ue,Ma.minFilter=Ze,Ma.generateMipmaps=!0,Ma.needsUpdate=!0,Ma}function Pa(e,t,n){let r=e.onBeforeCompile,i=e.customProgramCacheKey,a=i===Ge.prototype.customProgramCacheKey?r.toString():null;e.onBeforeCompile=(t,i)=>{r.call(e,t,i),n(t)},e.customProgramCacheKey=()=>`${a??i.call(e)}|${t}`,e.needsUpdate=!0}var Fa=new Set;function Ia(e,t,n,r){return e.includes(t)?e.replace(t,`${t}\n${n}`):(Fa.has(r+t)||(Fa.add(r+t),console.warn(`[look/actors] ${r}: shader anchor "${t}" not found; patch skipped`)),e)}function La(e,t){return e.replace(`#include <common>`,`#include <common>\n${t}`)}function Ra(e){return e.replace(/^mixamorig\d*:?/,``)}var za=`Hips.Spine.Spine1.Spine2.Neck.Head.LeftShoulder.LeftArm.LeftForeArm.LeftHand.RightShoulder.RightArm.RightForeArm.RightHand.LeftUpLeg.LeftLeg.LeftFoot.LeftToeBase.RightUpLeg.RightLeg.RightFoot.RightToeBase.LeftArmHalf.LeftForeArmHalf.LeftForeArmTwist.LeftUpLegHalf.LeftLegHalf.RightArmHalf.RightForeArmHalf.RightForeArmTwist.RightUpLegHalf.RightLegHalf`.split(`.`),Ba=`Club`;function Va(e,t){let n=new Set(za),r=new Set;for(let i of e.keys){if(!n.has(i))throw Error(`${t}: unexpected joint '${i}' (want the 32 golfer joints)`);if(r.has(i))throw Error(`${t}: joint '${i}' twice`);r.add(i)}for(let n of za)if(!r.has(n))throw Error(`${t}: missing joint '${n}' (${e.keys.length} joints, want ${za.length})`);let i=e.keys.indexOf(`Hips`);if(e.parents[i]!==-1)throw Error(`${t}: Hips is not the root joint`)}function Ha(e,t){if(!e.identityRest)throw Error(`withClubBone needs an identity-rest rig`);let n=e.keys.indexOf(`RightHand`);if(n<0)throw Error(`golfer rig has no RightHand`);if(e.keys.includes(`Club`))throw Error(`golfer rig already has a Club bone`);let r=e.names.length,i=new Int16Array(r+1);i.set(e.parents),i[r]=n;let a=new Float32Array((r+1)*3);a.set(e.restPos),a[r*3]=t.x,a[r*3+1]=t.y,a[r*3+2]=t.z;let o=new Float32Array((r+1)*4);o.set(e.restQuat),o[r*4+3]=1;let s=new Float32Array((r+1)*3).fill(1);return s.set(e.restScale),{names:[...e.names,Ba],keys:[...e.keys,Ba],parents:i,restPos:a,restQuat:o,restScale:s,rootMatrix:e.rootMatrix.clone(),identityRest:!0}}function Ua(e,t){return e.keys.indexOf(t)}function Wa(e){let t=[];for(let n=0;n<e.names.length;n++){let r=new De;r.name=e.names[n],r.position.fromArray(e.restPos,n*3),r.quaternion.fromArray(e.restQuat,n*4),r.scale.fromArray(e.restScale,n*3),t.push(r)}let n=new Ie;n.name=`golferRig`,e.rootMatrix.decompose(n.position,n.quaternion,n.scale);for(let r=0;r<t.length;r++){let i=e.parents[r];i>=0?t[i].add(t[r]):n.add(t[r])}return n.updateMatrixWorld(!0),{container:n,bones:t}}function Ga(e){let t=Wa(e).bones.map(e=>e.getWorldPosition(new V)),n=e.names.length,r=new Float32Array(n*3),i=new Float32Array(n*4),a=new Float32Array(n*3).fill(1);for(let a=0;a<n;a++){let n=e.parents[a],o=t[a],s=n>=0?t[n]:new V;r[a*3]=o.x-s.x,r[a*3+1]=o.y-s.y,r[a*3+2]=o.z-s.z,i[a*4+3]=1}return{names:e.names.slice(),keys:e.keys.slice(),parents:e.parents.slice(),restPos:r,restQuat:i,restScale:a,rootMatrix:new Ne,identityRest:!0}}function Ka(e){return Wa(e).bones.map(e=>e.matrixWorld.clone().invert())}function qa(e,t){let n=e.length,r=new Int16Array(n).fill(-1),i=new Float32Array(n*3),a=new Float32Array(n*4),o=new Float32Array(n*3),s=!0,c=new P,l=-1;for(let t=0;t<n;t++){let n=e[t],u=e.indexOf(n.parent);if(r[t]=u,u<0){if(l>=0)throw Error(`golfer rig: more than one root bone`);l=t}n.position.toArray(i,t*3),n.quaternion.toArray(a,t*4),n.scale.toArray(o,t*3),c.copy(n.quaternion),Math.abs(c.w)<.99999&&(s=!1)}if(l<0)throw Error(`golfer rig: no root bone`);let u=e[l].parent,d=new Ne;return u&&d.multiplyMatrices(t,u.matrixWorld),{names:e.map(e=>e.name),keys:e.map(e=>Ra(e.name)),parents:r,restPos:i,restQuat:a,restScale:o,rootMatrix:d,identityRest:s}}var Ja=new P,Ya=new P,Xa=new V;function Za(e,t,n,r,i=e.name,a={}){let o=n.names.length,s=t.names.length,c=a.source??i,l=new Int16Array(o).fill(-1),u=0;for(let e=0;e<o;e++){let r=t.keys.indexOf(n.keys[e]);if(r<0){if(n.keys[e]!==`Club`)throw Error(`clip ${i} (${c}): target bone '${n.keys[e]}' is not in the source rig (${s} bones, target ${o})`)}else l[e]=r,u++}if(u!==s)throw Error(`clip ${i} (${c}): source rig has ${s} bones, only ${u} match the target's ${o}`);let d=a.t0??0,f=Math.min(e.duration,a.t1??e.duration),p=f-d;if(!(p>0))throw Error(`clip ${i} (${c}): empty window [${d}, ${f}]`);let m=Wa(t),h=Ua(t,`Hips`);if(h<0)throw Error(`golfer rig has no Hips (${c})`);m.container.updateMatrixWorld(!0);let g=m.bones.map(e=>e.getWorldQuaternion(new P)),_=m.bones[h].getWorldPosition(new V),v=Ua(n,`Hips`),y=Wa(n).bones[v].getWorldPosition(new V),b=_.y>1e-4&&y.y>1e-4?y.y/_.y:1,x=e.duration-1e-4,S=new Je(m.container);S.clipAction(e).play();let C=r?Math.max(2,Math.round(p*30)):Math.max(2,Math.ceil(p*30-1e-6)+1),w=new Float32Array(C*o*4),T=new Float32Array(C*3),E=g.map(()=>new P),D=n.restPos.subarray(v*3,v*3+3),O=new V,k=e=>{m.bones[h].getWorldPosition(Xa),e.set(D[0]+(Xa.x-_.x)*b,D[1]+(Xa.y-_.y)*b,D[2]+(Xa.z-_.z)*b)};for(let e=0;e<C;e++){S.setTime(Math.min(x,d+Math.min(p,e/30))),m.container.updateMatrixWorld(!0);for(let e=0;e<s;e++)m.bones[e].getWorldQuaternion(Ja),E[e].copy(Ja).multiply(Ya.copy(g[e]).invert());for(let t=0;t<o;t++){let r=l[t],i=n.parents[t],a=i>=0?l[i]:-1;r<0?Ja.identity():a>=0?Ja.copy(E[a]).invert().multiply(E[r]):Ja.copy(E[r]);let s=(e*o+t)*4;e>0&&w[s-o*4]*Ja.x+w[s-o*4+1]*Ja.y+w[s-o*4+2]*Ja.z+w[s-o*4+3]*Ja.w<0&&Ja.set(-Ja.x,-Ja.y,-Ja.z,-Ja.w),w[s]=Ja.x,w[s+1]=Ja.y,w[s+2]=Ja.z,w[s+3]=Ja.w}k(O),T[e*3]=O.x,T[e*3+1]=O.y,T[e*3+2]=O.z}r&&(a.inPlace||a.rootNormalise===`end`)&&(S.setTime(Math.min(x,f)),m.container.updateMatrixWorld(!0),k(O)),S.stopAllAction(),S.uncacheRoot(m.container);let A=T[0],j=T[2],ee=O.x,M=O.z;if(a.inPlace||a.rootNormalise)for(let e=0;e<C;e++){let t=Math.min(1,e/30/p);a.inPlace?(T[e*3]-=A+(ee-A)*t,T[e*3+2]-=j+(M-j)*t):a.rootNormalise===`start`?(T[e*3]-=A,T[e*3+2]-=j):(T[e*3]-=ee,T[e*3+2]-=M)}if(a.alignStart){let e=a.alignStart[0]-T[0],t=a.alignStart[1]-T[2],n=Math.max(1e-6,a.alignDecay??1);for(let r=0;r<C;r++){let i=Math.max(0,1-Math.min(1,r/30/p)/n);T[r*3]+=e*i,T[r*3+2]+=t*i}}return{name:i,duration:p,frames:C,loop:r,bones:o,quat:w,hips:T}}function Qa(e,t,n,r){let i=e.bones*4,a=t*30,o,s;if(e.loop){let t=e.frames;a-=Math.floor(a/t)*t,o=Math.floor(a),o>=t&&(o=t-1),s=o+1===t?0:o+1}else a<0&&(a=0),a>e.frames-1&&(a=e.frames-1),o=Math.floor(a),o>e.frames-2&&(o=e.frames-2),s=o+1;let c=a-o,l=e.quat,u=o*i,d=s*i,f=1-c;for(let e=0;e<i;e++)n[e]=l[u+e]*f+l[d+e]*c;r[0]=e.hips[o*3]*f+e.hips[s*3]*c,r[1]=e.hips[o*3+1]*f+e.hips[s*3+1]*c,r[2]=e.hips[o*3+2]*f+e.hips[s*3+2]*c}function $a(e,t,n,r){let i=e.frames,a=1,o=-1,s=Math.max(2,Math.floor(i*.8));for(let e=1;e<s;e++){let n=Math.hypot(t[e*3]-t[(e-1)*3],t[e*3+1]-t[(e-1)*3+1],t[e*3+2]-t[(e-1)*3+2]);n>o&&(o=n,a=e)}let c=0;for(let e=1;e<a;e++)t[e*3+1]>t[c*3+1]&&(c=e);let l=Math.min(i-1,a+5),u=Math.min(i-1,c+1),d=1/0;for(let e=c+1;e<=l;e++){let n=t[(e-1)*3]-t[0],r=t[(e-1)*3+1]-t[1],i=t[(e-1)*3+2]-t[2],a=t[e*3]-t[(e-1)*3],o=t[e*3+1]-t[(e-1)*3+1],s=t[e*3+2]-t[(e-1)*3+2],c=a*a+o*o+s*s,l=c>1e-12?Math.max(0,Math.min(1,-(n*a+r*o+i*s)/c)):0,f=Math.hypot(n+a*l,r+o*l,i+s*l);f<d&&(d=f,u=e-1+l)}let f=Math.min(e.duration,u/30);if(r){let n=r.head.length/3,a=Math.max(0,Math.ceil((Math.max(c,u-2)/30-r.t0)*r.hz-1e-6)),o=Math.min(n-1,Math.floor((Math.min(i-1,u+2)/30-r.t0)*r.hz+1e-6)),s=r.head;for(let n=a;n<=o;n++){let i=Math.hypot(s[n*3]-t[0],s[n*3+1]-t[1],s[n*3+2]-t[2]);(n===a||i<d)&&(d=i,f=Math.min(e.duration,r.t0+n/r.hz))}}return{top:c/30,impact:f,ballLocal:new V(t[0],n,t[2]),miss:d}}var eo=new Set;function to(t){return e(t)?!0:(eo.has(t)||(eo.add(t),console.warn(`[props] missing asset ${t}: restart the dev server`)),!1)}var no=null;function ro(e){if(!to(e))return Promise.resolve(null);no??=new Vn;let t=no.parseAsync(s(e),``);return Jn(t),t}function io(e,t,n={}){if(!to(e))return null;let r,i,a=new Promise((e,t)=>{r=e,i=t}),o=new we().load(u(e),e=>{t?.initTexture(e),r()},void 0,i);return o.name=e,o.flipY=!1,o.colorSpace=n.srgb===!1?``:de,Jn(a),o}function ao(e,t){let n=[];e.traverse(e=>{e.isMesh&&n.push(e)});for(let e of n)if(e.material=typeof t.material==`function`?t.material(e):t.material,t.frustumCulled!==void 0&&(e.frustumCulled=t.frustumCulled),t.cast?.(e)??!0?e.layers.enable(1):e.layers.disable(1),t.ink&&!(t.inkSkip?.(e.name)??!1)){let n=Ji(e,t.ink);n.layers.disable(1),n.isSkinnedMesh?n.frustumCulled=!1:t.frustumCulled!==void 0&&(n.frustumCulled=t.frustumCulled)}}function oo(e,t){let n=e.getObjectByName(t);if(!n)throw Error(`glb node missing: ${t}`);return n}var so=new V,co=new V,lo=new z,uo=new P,fo=new V,po=new V(0,1,0),mo=new V,ho=new V,go=class{pos=[];nrm=[];col=[];idx=[];extra=new Map;count=0;rngState;constructor(e=7){this.rngState=e>>>0||1}rand(){let e=this.rngState=this.rngState+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}get vertexCount(){return this.count}get triangleCount(){return this.idx.length/3}add(e,t,n,r={}){let i=r.flat??!0,a=i&&e.index?e.toNonIndexed():e.clone();a.applyMatrix4(t),i?a.computeVertexNormals():a.getAttribute(`normal`)||a.computeVertexNormals();let o=a.getAttribute(`position`),s=a.getAttribute(`normal`);if(lo.set(n),r.jitter){let e=1+(this.rand()*2-1)*r.jitter;lo.multiplyScalar(e)}let c=this.count;for(let e=0;e<o.count;e++){so.fromBufferAttribute(o,e),co.fromBufferAttribute(s,e),this.pos.push(so.x,so.y,so.z),this.nrm.push(co.x,co.y,co.z);let t=1;if(r.ao){let e=Math.min(1,Math.max(0,(so.y-r.ao.y0)/(r.ao.y1-r.ao.y0)));t=r.ao.min+(1-r.ao.min)*e*e*(3-2*e)}this.col.push(lo.r*t,lo.g*t,lo.b*t)}if(r.attrs)for(let[e,t]of Object.entries(r.attrs))this.ensureExtra(e,t.length);for(let[e,t]of this.extra){let n=r.attrs?.[e];for(let e=0;e<o.count;e++)for(let e=0;e<t.size;e++)t.data.push(n?n[e]:0)}let l=a.getIndex();if(l)for(let e=0;e<l.count;e++)this.idx.push(c+l.getX(e));else for(let e=0;e<o.count;e++)this.idx.push(c+e);return this.count+=o.count,a.dispose(),this}box(e,t,n,r,i,a,o,s){return this.add(_o,vo.makeScale(r,i,a).setPosition(e,t,n),o,s)}beam(e,t,n,r,i,a){return bo(e,t,vo),vo.multiply(yo.makeScale(n,e.distanceTo(t),r)),this.add(_o,vo,i,a)}build(){let e=new Le;e.setIndex(new I(this.count>65535?new Uint32Array(this.idx):new Uint16Array(this.idx),1)),e.setAttribute(`position`,new I(new Float32Array(this.pos),3)),e.setAttribute(`normal`,new I(new Float32Array(this.nrm),3)),e.setAttribute(`color`,new I(new Float32Array(this.col),3));for(let[t,n]of this.extra)e.setAttribute(t,new I(new Float32Array(n.data),n.size));return e.computeBoundingSphere(),e.computeBoundingBox(),e}ensureExtra(e,t){this.extra.has(e)||this.extra.set(e,{size:t,data:Array(this.count*t).fill(0)})}},_o=new Ye(1,1,1),vo=new Ne,yo=new Ne;function bo(e,t,n=new Ne){mo.subVectors(t,e);let r=mo.length();return r>1e-6?mo.divideScalar(r):mo.set(0,1,0),uo.setFromUnitVectors(po,mo),ho.addVectors(e,t).multiplyScalar(.5),fo.set(1,1,1),n.compose(ho,uo,fo)}function xo(e,t,n,r=10,i=7){let a=new Se(1,r,i);return a.scale(e,t,n),a}var So={length:.56,butt:.15,shaftRadius:.022,head:[.18,.085,.12],lie:.62},Co={body:0,shaft:1,grip:2,head:3};function wo(e){let t=[],n=e.length+e.butt,r=new Oe(e.shaftRadius,e.shaftRadius*.85,n,5,1,!0);r.rotateX(-Math.PI/2),r.translate(0,0,-(n/2-e.butt)),t.push({geo:r,part:`shaft`});let i=new Oe(e.shaftRadius*1.6,e.shaftRadius*1.4,e.butt+.1,6,1,!0);i.rotateX(-Math.PI/2),i.translate(0,0,e.butt-(e.butt+.1)/2),t.push({geo:i,part:`grip`});let[a,o,s]=e.head,c=xo(a/2,s/2,o/2,6,4);c.rotateY(e.lie);let l=To(e);return c.translate(l.x,l.y,l.z),t.push({geo:c,part:`head`}),t}function To(e){let t=e.head[0]*.3;return new V(Math.cos(e.lie)*t,0,-e.length-Math.sin(e.lie)*t)}function Eo(e){let t=e.axisR.clone().normalize(),n=e.toeR.clone().addScaledVector(t,-e.toeR.dot(t)).normalize(),r=new V().crossVectors(n,t),i=new Ne().makeBasis(n,r,t.clone().negate()),a=new P().setFromRotationMatrix(i);return new Ne().compose(e.gripOffsetR,a,new V(1,1,1))}function Do(e,t,n,r,i,a,o,s=0){let c=n.clone().applyQuaternion(t).add(e),l=To(i),u=-l.z,d=l.x,f=new V(r.x,0,r.z).normalize(),p=Math.cos(s),m=Math.sin(s),h=f.x*p+f.z*m,g=f.z*p-f.x*m,_=new V,v=new V,y=e=>(_.set(h*Math.cos(e),-Math.sin(e),g*Math.cos(e)),v.copy(f).addScaledVector(_,-f.dot(_)).normalize(),c.y+_.y*u+v.y*d),b;if(y(Math.PI/2)>a)b=Math.atan2(Math.max(0,c.y-a),.1);else{let e=1e-4,t=Math.PI/2;for(let n=0;n<60;n++){let n=(e+t)/2;y(n)>a?e=n:t=n}b=(e+t)/2}y(b);let x=t.clone().invert();return{...o,gripOffsetR:n.clone(),axisR:_.applyQuaternion(x),toeR:v.applyQuaternion(x)}}var Oo={male:{lod0:`actors/golfer_m.glb`,lod1:`actors/golfer_m_lod1.glb`,base:`actors/golfer_m_base.webp`,mask:`actors/golfer_m_mask.webp`},female:{lod0:`actors/golfer_f.glb`,lod1:`actors/golfer_f_lod1.glb`,base:`actors/golfer_f_base.webp`,mask:`actors/golfer_f_mask.webp`}},ko=null;function Ao(e){return ko??=(async()=>{let e=[Oo.male,Oo.female].flatMap(e=>[e.lod0,e.lod1,e.base,e.mask]),n=!0;for(let t of e)n=to(t)&&n;if(!n)return null;try{return await t()}catch(e){return console.warn(`[golfers] the Mixamo golfer assets failed to build; falling back to the old golfer`,e),null}})(),ko;async function t(){let t=async t=>{let n=Oo[t],[r,i]=await Promise.all([ro(n.lod0),ro(n.lod1)]);if(!r||!i)throw Error(`golfer ${t}: GLB missing`);let a=Fo(t,r,i);return a.maps.base=io(n.base,e),a.maps.mask=io(n.mask,e,{srgb:!1}),a},[n,r]=await Promise.all([t(`male`),t(`female`)]);return{male:n,female:r}}}function jo(e,t){let n=null;if(e.scene.traverse(e=>{!n&&e.isSkinnedMesh&&(n=e)}),!n)throw Error(`${t}: no skinned mesh`);return n}function Mo(e,t){return e.animations.find(e=>e.name===t)??null}var No=e=>Oo[e].lod0,Po=`male`;function Fo(e,t,n,r={...So,length:xr.length}){let i=No(e),a=Oo[e].lod1;t.scene.updateMatrixWorld(!0),n.scene.updateMatrixWorld(!0);let o=jo(t,i),s=jo(n,a),c=qa(o.skeleton.bones,new Ne);Va(c,i);let l=qa(s.skeleton.bones,new Ne);if(l.keys.length!==c.keys.length||l.keys.some((e,t)=>e!==c.keys[t]||l.parents[t]!==c.parents[t]))throw Error(`${a}: joint names / order / hierarchy differ from ${i}`);let u=Ga(c),d=Ua(u,`RightHand`),f=Ua(u,`RightForeArm`);if(d<0||f<0)throw Error(`${i}: no right hand / forearm`);let p=Wa(u),m=p.bones[d].getWorldPosition(new V),h=p.bones[f].getWorldPosition(new V),g=m.clone().sub(h).normalize().multiplyScalar(xr.gripDist),_=Ha(u,g);if(_.names.length!==33)throw Error(`${i}: ${_.names.length} bones, want 33`);let v=_.keys.indexOf(Ba),y=Ka(_),b=Jo(_),x={},S={},C=vr.slice().sort((e,t)=>+!!br[e].alignToEndOf-!!br[t].alignToEndOf);for(let n of C){let r=yr[n];if(n===`allyRun`&&e!==`male`)continue;let a=Mo(t,r);if(!a)throw Error(`${i}: no clip '${r}' for the ${n} role`);let o=br[n],s;if(o.alignToEndOf){let e=x[o.alignToEndOf];if(!e)throw Error(`${i}: ${n} aligns to ${o.alignToEndOf}, which is not baked`);let t=e.frames-1;s=[e.hips[t*3],e.hips[t*3+2]]}x[n]=Za(a,c,_,o.loop,n,{t0:o.t0,t1:o.t1??void 0,inPlace:o.inPlace,rootNormalise:o.rootNormalise,alignStart:s,source:i}),S[n]=r}let w=x.swing;if(!w)throw Error(`${i}: no swing`);let T=Wa(_);Uo(_,T,w,0);let E=T.bones[d],D=E.getWorldPosition(new V),O=E.getWorldQuaternion(new P),k=T.bones[Ua(_,`LeftToeBase`)].getWorldPosition(new V),A=T.bones[Ua(_,`RightToeBase`)].getWorldPosition(new V),j=new V(-(k.z-A.z),0,k.x-A.x).normalize(),ee=new V,M={gripOffsetR:g,axisR:ee,toeR:ee,gripOffsetL:ee,axisL:ee,toeL:ee,leftGap:0},te=e=>{let t=Do(D,O,g,j,r,zt,M,e);return To(r).applyMatrix4(new Ne().makeTranslation(m.x,m.y,m.z).multiply(Eo(t)))},ne=zo(b,w,te(0)),N=xr.aimFit?Ho(ne,te):0,re=Do(D,O,g,j,r,zt,M,N),ie=new Ne().makeTranslation(m.x,m.y,m.z).multiply(Eo(re)),ae=To(r).applyMatrix4(ie),oe=Vo(ne,ae),se=new V(wr.ballLocal[0],wr.ballLocal[1],wr.ballLocal[2]),ce={impactFrames:(oe.impact-wr.clip.impact)*30,topFrames:(oe.top-wr.clip.top)*30,ballMetres:oe.ballLocal.distanceTo(se),ok:!1},le=1e-6;ce.ok=Math.abs(ce.impactFrames)<=Dr.frames+le&&Math.abs(ce.topFrames)<=Dr.frames+le&&(e!==Po||ce.ballMetres<=Dr.metres+le);let ue=new V(se.x-oe.ballLocal.x,0,se.z-oe.ballLocal.z),de=wo(r),fe=[qo(o,0,i,de,ie,v),qo(s,1,a,de,ie,v)];for(let e of de)e.geo.dispose();let pe=p.bones[Ua(u,`Head`)].getWorldPosition(new V).y,me={walk:Zo(_,b,x.walk).speed,allyRun:Zo(_,b,x.allyRun).speed};return{sex:e,source:i,srcRig:c,rig:_,boneInverses:y,pose:b,lods:fe,clips:x,clipLabels:S,club:r,clubFrame:re,clubAim:N,facing:j,swing:oe,swingCheck:ce,lookOffset:ue,headHeight:pe,cycleRate:{walk:me.walk>0?Ar.walkSpeed/me.walk:1,allyRun:me.allyRun>0?Ar.runSpeed/me.allyRun:1},groundSpeed:me,bounds:Qo(b,x,ae),maps:{base:null,mask:null}}}var Io={range:45*Math.PI/180,coarse:Math.PI/180,fine:.05*Math.PI/180},Lo=1200,Ro=.2;function zo(e,t,n){let r=new Float32Array(e.bones*4),i=new Float32Array(3),a=new Float32Array(e.bones*16),o=Yo(e.bones),s=e.club*16,c=(n,c,l)=>{Qa(t,n,r,i),Xo(e,r,i,1,a,o),c.set(a.subarray(s,s+16),l*16)},l=new Float32Array(t.frames*16);for(let e=0;e<t.frames;e++)c(e/30,l,e);let u={swing:t,frames:l,fine:new Float32Array,fineT0:0},d=Vo(u,n).impact,f=Math.max(0,d-Ro),p=Math.floor((Math.min(t.duration,d+Ro)-f)*Lo)+1;u.fine=new Float32Array(p*16),u.fineT0=f;for(let e=0;e<p;e++)c(f+e/Lo,u.fine,e);return u}function Bo(e,t){let n=e.length/16,r=new Float32Array(n*3);for(let i=0;i<n;i++){let n=i*16;r[i*3]=e[n]*t.x+e[n+4]*t.y+e[n+8]*t.z+e[n+12],r[i*3+1]=e[n+1]*t.x+e[n+5]*t.y+e[n+9]*t.z+e[n+13],r[i*3+2]=e[n+2]*t.x+e[n+6]*t.y+e[n+10]*t.z+e[n+14]}return r}function Vo(e,t){let n=e.fine.length?{head:Bo(e.fine,t),hz:Lo,t0:e.fineT0}:void 0;return $a(e.swing,Bo(e.frames,t),zt,n)}function Ho(e,t){let n=n=>Vo(e,t(n)).miss,r=Io,i=0,a=n(0),o=e=>{let t=n(e);(t<a-1e-7||Math.abs(t-a)<=1e-7&&Math.abs(e)<Math.abs(i))&&(a=t,i=e)},s=Math.round(r.range/r.coarse);for(let e=1;e<=s;e++)o(e*r.coarse),o(-e*r.coarse);let c=i,l=Math.round(r.coarse/r.fine);for(let e=-l;e<=l;e++)e!==0&&o(c+e*r.fine);return i}function Uo(e,t,n,r){for(let e=0;e<n.bones;e++)t.bones[e].quaternion.fromArray(n.quat,(r*n.bones+e)*4).normalize();t.bones[Ua(e,`Hips`)].position.fromArray(n.hips,r*3),t.container.updateMatrixWorld(!0)}var Wo=new V,Go=new V,Ko=new L;function qo(e,t,n,r,i,a){let o=e.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`normal`),l=o.getAttribute(`uv`),u=o.getAttribute(`skinIndex`),d=o.getAttribute(`skinWeight`),f=o.getIndex();if(!s||!c||!l||!u||!d||!f)throw Error(`${n}: golfer mesh lacks position / normal / uv / skin / index`);let p=s.count,m=0,h=0;for(let e of r)m+=e.geo.getAttribute(`position`).count,h+=e.geo.getIndex()?.count??0;let g=p+m,_=new Float32Array(g*3),v=new Float32Array(g*3),y=new Float32Array(g*2),b=new Uint8Array(g*4),x=new Float32Array(g*4),S=new Uint8Array(g),C=g>65535?new Uint32Array(f.count+h):new Uint16Array(f.count+h),w=0,T=e.matrixWorld;for(let t=0;t<p;t++){Wo.fromBufferAttribute(s,t),e.applyBoneTransform(t,Wo),Wo.applyMatrix4(T),_[t*3]=Wo.x,_[t*3+1]=Wo.y,_[t*3+2]=Wo.z,Ko.set(c.getX(t),c.getY(t),c.getZ(t),0),e.applyBoneTransform(t,Ko),Go.set(Ko.x,Ko.y,Ko.z).transformDirection(T),v[t*3]=Go.x,v[t*3+1]=Go.y,v[t*3+2]=Go.z,y[t*2]=l.getX(t),y[t*2+1]=l.getY(t);let n=0;for(let e=0;e<4;e++){b[t*4+e]=u.getComponent(t,e);let r=d.getComponent(t,e);x[t*4+e]=r,n+=r}if(w=Math.max(w,Math.abs(n-1)),n>0)for(let e=0;e<4;e++)x[t*4+e]/=n}for(let e=0;e<f.count;e++)C[e]=f.getX(e);let E=p,D=f.count;for(let e of r){let t=e.geo.getAttribute(`position`),n=e.geo.getAttribute(`normal`),r=E;for(let r=0;r<t.count;r++,E++)Wo.fromBufferAttribute(t,r).applyMatrix4(i),Go.fromBufferAttribute(n,r).transformDirection(i),_[E*3]=Wo.x,_[E*3+1]=Wo.y,_[E*3+2]=Wo.z,v[E*3]=Go.x,v[E*3+1]=Go.y,v[E*3+2]=Go.z,b[E*4]=a,x[E*4]=1,S[E]=Co[e.part];let o=e.geo.getIndex();if(o)for(let e=0;e<o.count;e++)C[D++]=r+o.getX(e)}let O=new Le;O.setAttribute(`position`,new I(_,3)),O.setAttribute(`normal`,new I(v,3)),qi(O);let k=O.getAttribute(`inkNormal`).array;return O.dispose(),{lod:t,source:n,vertexCount:g,bodyVertexCount:p,triangleCount:C.length/3,index:C,position:_,normal:v,uv:y,skinIndex:b,skinWeight:x,clubSlot:S,inkNormal:k,weightSumError:w}}function Jo(e){if(!e.identityRest)throw Error(`golferPoseRig needs an identity-rest rig`);let t=e.names.length,n=[],r=new Uint8Array(t);for(;n.length<t;){let i=n.length;for(let i=0;i<t;i++){let t=e.parents[i];!r[i]&&(t<0||r[t])&&(r[i]=1,n.push(i))}if(n.length===i)throw Error(`golfer rig: cycle in the hierarchy`)}let i=new Float32Array(t*3);for(let t of n){let n=e.parents[t];for(let r=0;r<3;r++)i[t*3+r]=(n>=0?i[n*3+r]:0)+e.restPos[t*3+r]}return{bones:t,order:Int16Array.from(n),parents:e.parents,restPos:e.restPos,restWorld:i,hips:e.keys.indexOf(`Hips`),club:e.keys.indexOf(Ba)}}function Yo(e){return{wq:new Float32Array(e*4),wp:new Float32Array(e*3)}}function Xo(e,t,n,r,i,a){let{wq:o,wp:s}=a;for(let a=0;a<e.bones;a++){let c=e.order[a],l=c*4,u=t[l],d=t[l+1],f=t[l+2],p=t[l+3],m=Math.sqrt(u*u+d*d+f*f+p*p)||1;u/=m,d/=m,f/=m,p/=m;let h=e.parents[c];if(h<0)o[l]=u,o[l+1]=d,o[l+2]=f,o[l+3]=p,s[c*3]=n[0],s[c*3+1]=n[1],s[c*3+2]=n[2];else{let t=h*4,n=o[t],r=o[t+1],i=o[t+2],a=o[t+3];o[l]=a*u+n*p+r*f-i*d,o[l+1]=a*d-n*f+r*p+i*u,o[l+2]=a*f+n*d-r*u+i*p,o[l+3]=a*p-n*u-r*d-i*f;let m=e.restPos[c*3],g=e.restPos[c*3+1],_=e.restPos[c*3+2],v=2*(r*_-i*g),y=2*(i*m-n*_),b=2*(n*g-r*m);s[c*3]=s[h*3]+m+a*v+(r*b-i*y),s[c*3+1]=s[h*3+1]+g+a*y+(i*v-n*b),s[c*3+2]=s[h*3+2]+_+a*b+(n*y-r*v)}let g=o[l],_=o[l+1],v=o[l+2],y=o[l+3],b=c===e.club?r:1,x=c*16,S=g+g,C=_+_,w=v+v,T=g*S,E=g*C,D=g*w,O=_*C,k=_*w,A=v*w,j=y*S,ee=y*C,M=y*w;i[x]=(1-(O+A))*b,i[x+1]=(E+M)*b,i[x+2]=(D-ee)*b,i[x+3]=0,i[x+4]=(E-M)*b,i[x+5]=(1-(T+A))*b,i[x+6]=(k+j)*b,i[x+7]=0,i[x+8]=(D+ee)*b,i[x+9]=(k-j)*b,i[x+10]=(1-(T+O))*b,i[x+11]=0;let te=e.restWorld[c*3],ne=e.restWorld[c*3+1],N=e.restWorld[c*3+2];i[x+12]=s[c*3]-(i[x]*te+i[x+4]*ne+i[x+8]*N),i[x+13]=s[c*3+1]-(i[x+1]*te+i[x+5]*ne+i[x+9]*N),i[x+14]=s[c*3+2]-(i[x+2]*te+i[x+6]*ne+i[x+10]*N),i[x+15]=1}}function Zo(e,t,n){if(!n)return{speed:0,stretches:0,seconds:0};let r=Ua(e,`LeftToeBase`),i=Ua(e,`RightToeBase`),a=Ua(e,`Hips`),o=Math.max(2,Math.round(n.duration*120)),s=new Float32Array(t.bones*4),c=new Float32Array(3),l=new Float32Array(t.bones*16),u=Yo(t.bones),d=new Float32Array(o*2),f=new Float32Array(o*2),p=1/0;for(let e=0;e<o;e++)Qa(n,e/o*n.duration,s,c),Xo(t,s,c,1,l,u),d[e*2]=u.wp[r*3+1],d[e*2+1]=u.wp[i*3+1],f[e*2]=u.wp[r*3+2]-u.wp[a*3+2],f[e*2+1]=u.wp[i*3+2]-u.wp[a*3+2],p=Math.min(p,d[e*2],d[e*2+1]);let m=e=>{let t=e%o,n=d[t*2]<=d[t*2+1]?0:1;return d[t*2+n]<=p+.02?n:-1},h=0;for(;h<o&&m(h)===m(h+o-1);)h++;let g=0,_=0,v=0;for(let e=h;e<h+o;){let t=m(e),r=e;for(;r+1<h+o&&m(r+1)===t;)r++;t>=0&&r>e&&(g+=f[e%o*2+t]-f[r%o*2+t],_+=(r-e)*(n.duration/o),v++),e=r+1}return{speed:_>0?g/_:0,stretches:v,seconds:_}}function Qo(e,t,n){let r=new Float32Array(e.bones*16),i=Yo(e.bones),a=new V(1/0,1/0,1/0),o=new V(-1/0,-1/0,-1/0),s=e.bones*4,c=new Ne,l=new V;for(let u of Object.values(t))if(u)for(let t=0;t<u.frames;t++){Xo(e,u.quat.subarray(t*s,t*s+s),u.hips.subarray(t*3,t*3+3),1,r,i);for(let t=0;t<e.bones;t++)l.fromArray(i.wp,t*3),a.min(l),o.max(l);c.fromArray(r,e.club*16),l.copy(n).applyMatrix4(c),a.min(l),o.max(l)}a.subScalar(.3),o.addScalar(.3);let u=a.clone().add(o).multiplyScalar(.5);return new D(u,u.distanceTo(o))}var $o=0,es=2,ts=[16765616,15907214,14259818,11037254,16769224],ns=[2898534,15260864,3817290,16052714,4876858,6965818],rs=`0.62, 0.64, 0.68`,is=`0.05, 0.05, 0.06`,as=new z,os=class e{root=new tt;assets;capacity;skeleton;shadowMesh;launch;swingLead=Tr.impact;lookScale;allySlot;onImpact=()=>{};autoSwing={enabled:!1,minInterval:2.8,maxInterval:6.5};count=0;culled=0;tellStrength=1;tellU;heads;shirts;get tells(){return this.tellU.value}facingYaw;sexAssets;B;bm;tintTex;tint;draws=[];casterDraws=[];sex;row;forcedSex=-1;lodRowMax=kr.high;castersOn=!0;place;sphere;tierColors;tier;pants;skinTone;state;queued;returning;swingT;fromT;fromStart;posed;visible;nextAuto;clock=0;boneDirty=!0;qa;qb;ha=new Float32Array(3);hb=new Float32Array(3);skin;scratch;addrSkin;addrHead;addrQ;addrH;headBone;cullCamera=null;frustum=new le;projScreen=new Ne;tmpSphere=new D(new V,0);rngState;seed;materials=[];roleOverride;roleT;life=null;slotPos;standX=0;standZ=0;lastQ;lastH;lastClub;fromQ;fromH;fromClub;lifeFade;seenMode;seenAt;seenCheer;hidden;moved;lifeSync=!0;cheerOn=!1;cheerStart=0;shadowDirty=!1;walkPt={x:0,z:0,yaw:0};_m=new Ne;allies=null;allyN=0;allyInit=new Uint8Array(3);allyPrev=new Float64Array(3);allyRunT=new Float64Array(3);allyYaw=new Float64Array(3);allyRunW=new Float64Array(3);static async create(t){let n=await Ao(t.renderer??null);if(!n)throw Error(`golfer assets missing (assets/actors/golfer_*): rebuild the paks`);return new e(n,t)}constructor(e,t){this.assets=e,this.sexAssets=[e.male,e.female],this.capacity=Math.max(1,t.capacity),this.allySlot=this.capacity,this.facingYaw=t.facingYaw??0,this.tierColors=[...t.tiers??Et.golferTiers],this.seed=(t.seed??1234)>>>0,this.rngState=this.seed||1,this.root.name=`golfers`,this.lookScale=Math.max(.25,t.lookScale??1);let n=this.capacity,r=n+3,i=e.male,a=i.pose.bones;if(e.female.pose.bones!==a)throw Error(`golfer packs: male / female bone counts differ`);this.B=a,this.launch=new Float32Array(n*3),this.heads=new Float32Array(r*3),this.shirts=new Float32Array(r*3),this.sex=new Uint8Array(r),this.row=new Uint8Array(r),this.place=new Float32Array(r*6),this.sphere=new Float32Array(r*3),this.tier=new Uint8Array(r),this.pants=new Uint8Array(r),this.skinTone=new Uint8Array(r),this.state=new Uint8Array(r),this.queued=new Uint8Array(r),this.returning=new Uint8Array(r),this.swingT=new Float32Array(r),this.fromT=new Float32Array(r),this.fromStart=new Float32Array(r).fill(-1e9),this.posed=new Uint8Array(r),this.visible=new Uint8Array(r).fill(1),this.nextAuto=new Float32Array(r),this.roleOverride=new Int8Array(r).fill(-1),this.roleT=new Float32Array(r),this.slotPos=new Float32Array(r*3),this.lastQ=new Float32Array(r*a*4),this.lastH=new Float32Array(r*3),this.lastClub=new Float32Array(r).fill(1),this.fromQ=new Float32Array(r*a*4),this.fromH=new Float32Array(r*3),this.fromClub=new Float32Array(r).fill(1),this.lifeFade=new Float32Array(r).fill(-1e9),this.seenMode=new Uint8Array(r),this.seenAt=new Float32Array(r),this.seenCheer=new Uint8Array(r),this.hidden=new Uint8Array(r),this.moved=new Uint8Array(r);for(let e=0;e<r;e++)this.nextAuto[e]=this.rand()*this.autoSwing.maxInterval,this.pants[e]=Math.floor(this.rand()*ns.length),this.skinTone[e]=Math.floor(this.rand()*ts.length),this.sex[e]=this.sexOf(e);this.qa=new Float32Array(a*4),this.qb=new Float32Array(a*4),this.skin=new Float32Array(a*16),this.scratch=Yo(a),this.headBone=i.rig.keys.indexOf(`Head`),this.addrSkin=[new Float32Array(a*16),new Float32Array(a*16)],this.addrHead=[new Float32Array(3),new Float32Array(3)],this.addrQ=[new Float32Array(a*4),new Float32Array(a*4)],this.addrH=[new Float32Array(3),new Float32Array(3)];for(let e=0;e<2;e++){let t=this.sexAssets[e];Qa(this.swingClip(e),0,this.addrQ[e],this.addrH[e]),Xo(t.pose,this.addrQ[e],this.addrH[e],1,this.addrSkin[e],this.scratch);let n=this.headBone;this.addrHead[e].set(this.scratch.wp.subarray(n*3,n*3+3))}let o=new De,s=new Ne;this.skeleton=new _e(Array(r*a).fill(o),Array(r*a).fill(s)),this.skeleton.computeBoneTexture(),this.bm=this.skeleton.boneMatrices;for(let e=0;e<r*a;e++)this.bm[e*16]=this.bm[e*16+5]=this.bm[e*16+10]=this.bm[e*16+15]=1;let c=this.skeleton;c.update=()=>{this.boneDirty&&c.boneTexture&&(c.boneTexture.needsUpdate=!0,this.boneDirty=!1)},this.tint=new Float32Array(r*4*4),this.tintTex=new O(this.tint,4,r,re,ee),this.tintTex.minFilter=this.tintTex.magFilter=ye,this.tintTex.needsUpdate=!0;for(let e=0;e<r;e++)this.writeTint(e);this.tellU={value:new Float32Array(r)};let l={value:this.tintTex},u=this.tellU,d=`#ifdef USE_SKINNING
  float gBoneBase = floor( aGolfer + 0.5 ) * ${a}.0;
  mat4 boneMatX = getBoneMatrix( skinIndex.x + gBoneBase );
  mat4 boneMatY = getBoneMatrix( skinIndex.y + gBoneBase );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z + gBoneBase );
  mat4 boneMatW = getBoneMatrix( skinIndex.w + gBoneBase );
#endif`,f=e=>{e.uniforms.uGolferTint=l,e.uniforms.uTell=u,e.vertexShader=La(e.vertexShader,`attribute float aGolfer;
uniform highp sampler2D uGolferTint;
uniform float uTell[ ${r} ];
varying float vTell;`).replace(`#include <skinbase_vertex>`,d)},p=[];for(let e=0;e<2;e++){let t=this.sexAssets[e],n=ja({map:t.maps.base,practical:!0}),i={value:t.maps.mask};Pa(n,`golfer-inst-${r}-${a}`,e=>{f(e),e.uniforms.uGolferMask=i,e.vertexShader=La(e.vertexShader,`attribute float clubSlot;
varying vec3 vShirt;
varying vec3 vCap;
varying vec3 vPants;
varying vec3 vSkinT;
varying vec3 vClubCol;
varying float vClub;`),e.vertexShader=Ia(e.vertexShader,`#include <begin_vertex>`,`int gI = int( aGolfer + 0.5 );
vTell = uTell[ gI ];
vShirt = texelFetch( uGolferTint, ivec2( 0, gI ), 0 ).rgb;
vCap = texelFetch( uGolferTint, ivec2( 1, gI ), 0 ).rgb;
vPants = texelFetch( uGolferTint, ivec2( 2, gI ), 0 ).rgb;
vSkinT = texelFetch( uGolferTint, ivec2( 3, gI ), 0 ).rgb;
vClub = clubSlot;
vClubCol = clubSlot < 1.5 ? vec3( ${rs} ) : clubSlot < 2.5 ? vec3( ${is} ) : vShirt;`,`golfer-inst`),e.fragmentShader=La(e.fragmentShader,`uniform sampler2D uGolferMask;
varying float vTell;
varying vec3 vShirt;
varying vec3 vCap;
varying vec3 vPants;
varying vec3 vSkinT;
varying vec3 vClubCol;
varying float vClub;`),e.fragmentShader=Ia(e.fragmentShader,`#include <map_fragment>`,`vec4 gMask = texture2D( uGolferMask, vMapUv );
diffuseColor.rgb += gMask.r * vShirt + gMask.g * vCap + gMask.b * vPants + gMask.a * vSkinT;
if ( vClub > 0.5 ) diffuseColor.rgb = vClubCol;`,`golfer-inst`),e.fragmentShader=Ia(e.fragmentShader,`#include <lights_fragment_end>`,`if ( vTell > 0.001 ) {
  float ndvT = clamp( dot( normalize( normal ), normalize( vViewPosition ) ), 0.0, 1.0 );
  float rimT = smoothstep( 0.4, 0.75, 1.0 - ndvT );
  totalEmissiveRadiance += vTell * ( 0.12 + 1.3 * rimT ) * vec3( 1.0, 0.92, 0.74 );
}`,`golfer-tell`)}),p.push(n),this.materials.push(n)}let m=null;(t.ink??!0)&&(m=Ki({width:.04,colorMix:.35,darken:.22,smoothAttr:!0}),Pa(m,`golfer-inst-ink-${r}-${a}`,e=>{f(e),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = inkNormal;`).replace(`#include <color_vertex>`,`#include <color_vertex>
int gI = int( aGolfer + 0.5 );
vColor.rgb = texelFetch( uGolferTint, ivec2( 0, gI ), 0 ).rgb;
vTell = uTell[ gI ];`),e.fragmentShader=La(e.fragmentShader,`varying float vTell;`),e.fragmentShader=Ia(e.fragmentShader,`#include <color_fragment>`,`diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 1.0, 0.88, 0.6 ) * 1.3, vTell * 0.9 );`,`golfer-tell`)}),this.materials.push(m));let h=new oe({vertexShader:la.replace(`#include <common>`,`#include <common>
attribute float aGolfer;`).replace(`#include <skinbase_vertex>`,d),fragmentShader:da,colorWrite:!1,side:2});h.name=`golfer-caster-depth`,h.defaultAttributeValues[Zi]=[0],this.materials.push(h);let g=new D(new V(0,Dn(ln-1)/2+2,(-27+xn(ln-1))/2),Math.hypot(vt/2+6,Dn(ln-1),(-27-xn(ln-1))/2)),_=[`m`,`f`];for(let e=0;e<2;e++){let t=this.sexAssets[e];for(let n=0;n<2;n++){let i=t.lods[n],a=this.makeDraw(i,e,n,!1,r,g),o=new nt(a.geo,p[e]);if(o.name=`golfers-${_[e]}${n}`,a.meshes.push(o),m){let t=new nt(a.geo,m);t.name=`golfers-${_[e]}${n}-ink`,a.meshes.push(t)}this.draws.push(a)}let n=this.makeDraw(t.lods[1],e,1,!0,r,g),i=new nt(n.geo,h);i.name=`golfers-${_[e]}-caster`,i.layers.set(1),i.userData.casterMaterial=h,n.meshes.push(i),this.casterDraws.push(n)}for(let e of[...this.draws,...this.casterDraws])for(let t of e.meshes)t.bindMode=k,t.bind(this.skeleton,new Ne),t.frustumCulled=!1,t.matrixAutoUpdate=!1,this.root.add(t);if(t.shadows??!0){let e=new fe(1,1);e.rotateX(-Math.PI/2);let t=new $e({color:1713216,map:Na(),transparent:!0,opacity:.45,depthWrite:!1});this.shadowMesh=new Ke(e,t,n+3),this.shadowMesh.name=`golferShadows`,this.shadowMesh.count=0,this.shadowMesh.frustumCulled=!1,this.shadowMesh.renderOrder=ma.blobShadow,this.root.add(this.shadowMesh)}else this.shadowMesh=null}makeDraw(e,t,n,r,i,a){let o=new ne;o.setIndex(new I(e.index,1)),o.setAttribute(`position`,new I(e.position,3)),o.setAttribute(`skinIndex`,new I(e.skinIndex,4)),o.setAttribute(`skinWeight`,new I(e.skinWeight,4)),r||(o.setAttribute(`normal`,new I(e.normal,3)),o.setAttribute(`uv`,new I(e.uv,2)),o.setAttribute(`clubSlot`,new I(e.clubSlot,1)),o.setAttribute(`inkNormal`,new I(e.inkNormal,3)));let s=new Ce(new Float32Array(i),1);return s.setUsage(R),o.setAttribute(`aGolfer`,s),o.instanceCount=0,o.boundingSphere=a,{sex:t,lod:n,caster:r,geo:o,ids:s,meshes:[],tris:e.triangleCount,n:0}}swingClip(e){let t=this.sexAssets[e].clips.swing;if(!t)throw Error(`golfer pack: no swing clip`);return t}sexOf(e){if(e>=this.allySlot)return 0;if(this.forcedSex>=0)return this.forcedSex;let t=Math.imul(e+1^this.seed,2654435761);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,+((t>>>0)/4294967296<.5)}rebuildDraws(){for(let e of this.draws)e.n=0;for(let e of this.casterDraws)e.n=0;for(let e=0;e<this.count;e++){let t=this.sex[e],n=this.row[e]<=this.lodRowMax?0:1,r=this.draws[t*2+n];r.ids.array[r.n++]=e;let i=this.casterDraws[t];i.ids.array[i.n++]=e}for(let e=0;e<this.allyN;e++){let t=this.allySlot+e,n=this.sex[t],r=this.draws[n*2+(this.lodRowMax>=0?0:1)];r.ids.array[r.n++]=t;let i=this.casterDraws[n];i.ids.array[i.n++]=t}for(let e of this.draws)this.commitDraw(e,!0);for(let e of this.casterDraws)this.commitDraw(e,this.castersOn)}commitDraw(e,t){e.geo.instanceCount=e.n,e.ids.needsUpdate=!0;for(let n of e.meshes)n.visible=t&&e.n>0}get trianglesPerGolfer(){return this.sexAssets[0].lods[0].triangleCount}get driverCount(){return this.count}stats(){let e=0,t=0;return{draws:[...this.draws,...this.casterDraws].map(n=>{let r=n.n*n.tris;return n.caster?t+=this.castersOn?r:0:e+=r,{name:n.meshes[0].name,instances:n.n,tris:r}}),tris:e,casterTris:t}}setQualityTier(e){let t=kr[e];t!==this.lodRowMax&&(this.lodRowMax=t,this.rebuildDraws())}setCasters(e){this.castersOn=e;for(let t of this.casterDraws)this.commitDraw(t,e)}forceSex(e){this.forcedSex=e===null?-1:+(e===`female`);for(let e=0;e<this.capacity+3;e++)this.sex[e]=this.sexOf(e);this.setSlotsAgain()}lastSlots=null;setSlotsAgain(){this.lastSlots?this.setSlots(this.lastSlots,this.count):this.rebuildDraws()}setCullCamera(e){this.cullCamera=e,e||this.visible.fill(1)}setSlots(e,t=e.length){this.lastSlots=e,this.count=Math.min(this.capacity,t,e.length);let n=this.facingYaw,r=this.lookScale,i=Math.cos(n),a=Math.sin(n),o=wr.ballLocal;this.standX=-(o[0]*i+o[2]*a)*r,this.standZ=-(-o[0]*a+o[2]*i)*r;let s=new Ne;for(let t=0;t<this.count;t++){let n=e[t],c=t*6;t!==this.allySlot&&this.forcedSex<0&&n.sex!==void 0&&n.sex>=0&&(this.sex[t]=n.sex);let l=n.x+this.standX,u=n.z+this.standZ;this.place[c]=i*r,this.place[c+1]=a*r,this.place[c+2]=r,this.place[c+3]=l,this.place[c+4]=n.y,this.place[c+5]=u,this.slotPos[t*3]=l,this.slotPos[t*3+1]=n.y,this.slotPos[t*3+2]=u,this.hidden[t]=0,this.moved[t]=0;let d=0,f=1/0;for(let e=0;e<ln;e++){let t=Math.abs(Dn(e)-n.y);t<f&&(f=t,d=e)}this.row[t]=d,this.launch[t*3]=n.x,this.launch[t*3+1]=n.y+o[1]*r,this.launch[t*3+2]=n.z;let p=this.sexAssets[this.sex[t]],m=p.bounds.center,h=p.lookOffset;this.sphere[t*3]=l+((m.x+h.x)*i+(m.z+h.z)*a)*r,this.sphere[t*3+1]=n.y+(m.y+h.y)*r,this.sphere[t*3+2]=u+(-(m.x+h.x)*a+(m.z+h.z)*i)*r,this.shadowMesh&&(s.makeScale(1.05*r,1,1.05*r).setPosition(l+.06*a*r,n.y+.012,u+.06*i*r),this.shadowMesh.setMatrixAt(t,s)),this.poseOne(t)}this.shadowMesh&&(this.shadowMesh.count=this.count+this.allyN,this.shadowMesh.instanceMatrix.needsUpdate=!0),this.rebuildDraws()}setAllies(e){this.allies=e,this.allyInit.fill(0),e||this.setAllyN(0)}setAllyN(e){e!==this.allyN&&(this.allyN=e,this.shadowMesh&&(this.shadowMesh.count=this.count+e),this.rebuildDraws())}setFacingYaw(e,t){this.facingYaw=e,this.setSlots(t,this.count)}tierOf(e){return this.tier[e]}setTierColor(e,t){if(!(e<0||e>=this.tierColors.length)){this.tierColors[e]=t;for(let t=0;t<this.capacity+3;t++)this.tier[t]===e&&this.writeTint(t)}}get tierCount(){return this.tierColors.length}setTier(e,t){let n=Math.max(0,Math.min(this.tierColors.length-1,t|0));this.tier[e]!==n&&(this.tier[e]=n,this.writeTint(e))}setRole(e,t){let n=t===null?-1:cs[t];this.roleOverride[e]=n,this.roleT[e]=0,this.posed[e]=0}bindLife(e){this.life=e,this.lifeJumped()}lifeJumped(){this.lifeSync=!0,this.lifeFade.fill(-1e9),this.posed.fill(0)}setCheer(e){e&&!this.cheerOn&&(this.cheerStart=this.clock),this.cheerOn=e}swing(e){return e<0||e>=this.count?!1:this.state[e]===$o?(this.startSwing(e),!0):!this.queued[e]&&(this.queued[e]=1,!0)}isSwinging(e){return this.state[e]!==$o}swingTime(e){return this.state[e]===es?this.swingT[e]:-1}swingQueued(e){return this.queued[e]===1}setSwingTime(e,t,n){e<0||e>=this.capacity||(this.queued[e]=+!!n,this.fromStart[e]=-1e9,t<0?(this.state[e]=$o,this.returning[e]=0):(this.state[e]=es,this.swingT[e]=t,this.returning[e]=+(!n&&t>Tr.duration-.4)),this.posed[e]=0,e<this.count&&this.poseOne(e))}update(e){this.advance(e.dt),this.pose()}advance(e){let t=this.count,n=Tr.impact,r=Tr.duration;if(this.autoSwing.enabled){let n=this.autoSwing.minInterval,r=this.autoSwing.maxInterval;for(let i=0;i<t;i++)this.nextAuto[i]-=e,this.nextAuto[i]<=0&&(this.swing(i),this.nextAuto[i]=n+(r-n)*this.rand())}let i=this.tellU.value,a=n*.2,o=n*.92;this.clock+=e;for(let s=0;s<t;s++){if(this.roleOverride[s]>=0&&(this.roleT[s]+=e,this.posed[s]=0),this.state[s]!==es){i[s]=0;continue}let t=this.swingT[s],c=t+e;this.swingT[s]=c;let l=Math.min(1,Math.max(0,(c-a)/Math.max(.001,o-a))),u=Math.min(1,Math.max(0,(c-n)/.3));i[s]=this.tellStrength*(c<n?l*l*(3-2*l):1-u*u*(3-2*u)),t<n&&c>=n&&this.onImpact(s,this.launch[s*3],this.launch[s*3+1],this.launch[s*3+2]),!this.returning[s]&&!this.queued[s]&&c>=r-.4&&(this.returning[s]=1),c>=r&&(this.queued[s]?(this.queued[s]=0,this.startSwing(s)):(this.state[s]=$o,this.returning[s]=0)),this.posed[s]=0}}pose(e=0){let t=this.count;this.life&&this.lifePlace(this.life);let n=0;if(this.cullCamera){let e=this.cullCamera;this.projScreen.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreen);for(let e=0;e<t;e++){this.tmpSphere.center.set(this.sphere[e*3],this.sphere[e*3+1],this.sphere[e*3+2]),this.tmpSphere.radius=this.sexAssets[this.sex[e]].bounds.radius*this.lookScale;let t=+!!this.frustum.intersectsSphere(this.tmpSphere);this.visible[e]=t,t||n++}}this.culled=n;for(let e=0;e<t;e++)!this.visible[e]||this.posed[e]||this.hidden[e]||this.poseOne(e);this.allies&&this.poseAllies(e)}poseAllies(e){let t=this.allies,n=0;for(let e=0;e<t.length&&e<3;e++)t[e].level>0&&(n=e+1);n!==this.allyN&&this.setAllyN(n);for(let r=0;r<n;r++)t[r].level>0?this.poseAlly(t[r],r,e):this.allyInit[r]=0;for(let e=n;e<3;e++)this.allyInit[e]=0;this.shadowDirty&&this.shadowMesh&&(this.shadowMesh.instanceMatrix.needsUpdate=!0,this.shadowDirty=!1)}poseAlly(e,t,n){let r=this.allySlot+t,i=this.sex[r],a=this.sexAssets[i],o=U.clubAlly.look,s=n-this.allyPrev[t];this.allyPrev[t]=n,this.allyInit[t]===0?(this.allyInit[t]=1,this.allyYaw[t]=e.facing,this.allyRunW[t]=0,this.allyRunT[t]=0,s=0):(s>.25||s<-.25)&&(s=0);let c=this.qa,l=this.ha,u=e.mode;if(u===1||u===2)this.allyYaw[t]=e.facing;else{let n=e.facing-this.allyYaw[t];n-=Math.round(n/(2*Math.PI))*2*Math.PI,this.allyYaw[t]+=n*(1-Math.exp(-(s<0?-s:s)*o.turnRate))}let d=this.allyRunW[t];if(u===2)d=0;else if(u!==1){let n=Math.sqrt(e.vx*e.vx+e.vz*e.vz),r=n/o.runBlend;d=r>=1?1:r*r*(3-2*r),this.allyRunT[t]+=s*(n/Ar.runSpeed)*a.cycleRate.allyRun}this.allyRunW[t]=d;let f=a.clips.allyRun;f&&d>0?(Qa(f,this.allyRunT[t],c,l),d<1&&ls(c,l,this.addrQ[i],this.addrH[i],1-d)):this.copyAddr(i);let p=f?1-d:1;if(u===1){let t=Math.min(1,e.modeT/U.clubAlly.windup);Qa(this.swingClip(i),wr.clip.top+(wr.clip.impact-wr.clip.top)*t,this.qb,this.hb);let n=Math.min(1,e.modeT/o.crossIn),r=n*n*(3-2*n);ls(c,l,this.qb,this.hb,r),p+=(1-p)*r}else if(u===2){Qa(this.swingClip(i),wr.clip.impact+e.modeT*o.followRate,this.qb,this.hb);let t=(U.clubAlly.followHold-e.modeT)/o.blendBack,n=t>=1?1:t<=0?0:t*t*(3-2*t);ls(c,l,this.qb,this.hb,n),p+=(1-p)*n}this.placeAt(r,e.x,0,e.z,this.allyYaw[t]),this.posePlaced(r,a,p)}lifeHidden(e,t){let n=t.mode[e];if(n===2||n===3)return!1;let r=t.time-t.modeAt[e];return n===1?r<0:n!==4||r>=zr}lifePlace(e){let t=this.count,n=this.lifeSync;this.lifeSync=!1;for(let r=0;r<t;r++){let t=e.mode[r],i=this.cheerOn&&t===2?1:0;if(t!==this.seenMode[r]||e.modeAt[r]!==this.seenAt[r]||i!==this.seenCheer[r]){if(!n&&!this.hidden[r]){let e=this.B*4,t=r*e;for(let n=0;n<e;n++)this.fromQ[t+n]=this.lastQ[t+n];this.fromH[r*3]=this.lastH[r*3],this.fromH[r*3+1]=this.lastH[r*3+1],this.fromH[r*3+2]=this.lastH[r*3+2],this.fromClub[r]=this.lastClub[r],this.lifeFade[r]=this.clock}this.seenMode[r]=t,this.seenAt[r]=e.modeAt[r],this.seenCheer[r]=i,this.posed[r]=0}if(this.lifeHidden(r,e)){this.hidden[r]||(this.hidden[r]=1,this.placeAt(r,0,-100,0,this.facingYaw),this.place3(r,this.addrSkin[this.sex[r]],this.addrHead[this.sex[r]],this.sexAssets[this.sex[r]]));continue}this.hidden[r]&&(this.hidden[r]=0,this.posed[r]=0);let a=this.clock-this.lifeFade[r]<Gr;if(t===1||t===4){let n=t===4,i=Math.min(zr,Math.max(0,e.time-e.modeAt[r])),a=this.walkPt;Br((n?zr-i:i)*Ar.walkSpeed,a);let o=n?i:zr-i,s=n?a.yaw+Math.PI:a.yaw,c=this.facingYaw-s;c-=Math.round(c/(2*Math.PI))*2*Math.PI;let l=1-o/Hr;this.placeAt(r,a.x-this.standX,0,a.z-this.standZ,s+c*(l<=0?0:l>=1?1:l*l*(3-2*l))),this.posed[r]=0}else this.moved[r]&&this.placeAt(r,0,0,0,this.facingYaw),(t===3||i||a)&&(this.posed[r]=0)}this.shadowDirty&&this.shadowMesh&&(this.shadowMesh.instanceMatrix.needsUpdate=!0,this.shadowDirty=!1)}placeAt(e,t,n,r,i){let a=this.lookScale,o=Math.cos(i),s=Math.sin(i),c=this.slotPos[e*3]+t,l=this.slotPos[e*3+1]+n,u=this.slotPos[e*3+2]+r,d=e*6;this.place[d]=o*a,this.place[d+1]=s*a,this.place[d+2]=a,this.place[d+3]=c,this.place[d+4]=l,this.place[d+5]=u,this.moved[e]=+(t!==0||n!==0||r!==0||i!==this.facingYaw);let f=this.sexAssets[this.sex[e]],p=f.bounds.center,m=f.lookOffset;this.sphere[e*3]=c+((p.x+m.x)*o+(p.z+m.z)*s)*a,this.sphere[e*3+1]=l+(p.y+m.y)*a,this.sphere[e*3+2]=u+(-(p.x+m.x)*s+(p.z+m.z)*o)*a,this.shadowMesh&&(this._m.makeScale(1.05*a,1,1.05*a).setPosition(c+.06*s*a,l+.012,u+.06*o*a),this.shadowMesh.setMatrixAt(e>=this.allySlot?this.count+(e-this.allySlot):e,this._m),this.shadowDirty=!0)}dispose(){this.skeleton.dispose();for(let e of[...this.draws,...this.casterDraws])e.geo.dispose();for(let e of this.materials)e.dispose();this.tintTex.dispose(),this.shadowMesh&&(this.shadowMesh.geometry.dispose(),this.shadowMesh.material.dispose(),this.shadowMesh.dispose()),this.root.removeFromParent()}writeTint(e){let t=e*16,n=this.tint;as.setHex(e>=this.allySlot?U.clubAlly.look.shirt:this.tierColors[this.tier[e]]),n[t]=n[t+4]=as.r,n[t+1]=n[t+5]=as.g,n[t+2]=n[t+6]=as.b,this.shirts[e*3]=as.r,this.shirts[e*3+1]=as.g,this.shirts[e*3+2]=as.b,as.setHex(ns[this.pants[e]]),n[t+8]=as.r,n[t+9]=as.g,n[t+10]=as.b,as.setHex(ts[this.skinTone[e]]),n[t+12]=as.r,n[t+13]=as.g,n[t+14]=as.b,n[t+3]=n[t+7]=n[t+11]=n[t+15]=1,this.tintTex.needsUpdate=!0}startSwing(e){this.state[e]===es&&!this.returning[e]&&(this.fromT[e]=Er(this.swingT[e]),this.fromStart[e]=this.clock),this.returning[e]=0,this.state[e]=es,this.swingT[e]=0}poseOne(e){this.posed[e]=1;let t=this.sex[e],n=this.sexAssets[t],r=this.roleOverride[e];if(r>=0){let t=n.clips[ss[r]];if(t){let i=ss[r]===`walk`?n.cycleRate.walk:ss[r]===`allyRun`?n.cycleRate.allyRun:1;Qa(t,this.roleT[e]*i,this.qa,this.ha),this.posePlaced(e,n);return}}this.life?this.poseLife(e,t,n,this.life):this.swingPose(e,t)?this.posePlaced(e,n):this.place3(e,this.addrSkin[t],this.addrHead[t],n)}swingPose(e,t){if(this.state[e]!==es)return!1;let n=this.swingT[e],r=this.swingClip(t);if(Qa(r,Er(n),this.qa,this.ha),this.returning[e]){let e=1-(Tr.duration-n)/Kr;e>0&&ls(this.qa,this.ha,this.addrQ[t],this.addrH[t],e<1?e*e*(3-2*e):1)}let i=(this.clock-this.fromStart[e])/Gr;if(i<1){Qa(r,this.fromT[e],this.qb,this.hb);let t=i<0?1:1-i*i*(3-2*i);ls(this.qa,this.ha,this.qb,this.hb,t)}return!0}poseLife(e,t,n,r){let i=this.qa,a=this.ha,o=r.mode[e],s=1;if(o===1||o===4){let c=Math.min(zr,Math.max(0,r.time-r.modeAt[e])),l=o===4?c:zr-c,u=n.clips.walk;u?Qa(u,c*n.cycleRate.walk,i,a):this.copyAddr(t);let d=1-l/Ur,f=d<=0?0:d>=1?1:d*d*(3-2*d);f>0&&ls(i,a,this.addrQ[t],this.addrH[t],f),s=f}else if(o===3){let o=n.clips.fall,c=n.clips.getup,l=o?o.duration:Vr.fallSeconds,u=c?c.duration:Vr.getupSeconds,d=r.timeoutUntil[e]-r.modeAt[e],f=l+u,p=Vr.compress&&d<f+Vr.lieMin?f/Math.max(.05,d-Vr.lieMin):1,m=r.time-r.modeAt[e],h=d-u/p;if(m<h||!c)o?Qa(o,Math.min(l,m*p),i,a):this.copyAddr(t);else{let e=Math.min(u,(m-h)*p);Qa(c,e,i,a);let t=e/Vr.getupBlend;o&&t<1&&(Qa(o,l,this.qb,this.hb),ls(i,a,this.qb,this.hb,1-t*t*(3-2*t)))}s=0}else{this.swingPose(e,t)||this.copyAddr(t);let r=n.clips.cheer;if(this.cheerOn&&r&&this.state[e]!==es){let t=this.clock-this.cheerStart-e*7%13*Wr.stagger;if(t>0){Qa(r,t,this.qb,this.hb);let e=Math.min(1,t/Wr.blend),n=e*e*(3-2*e);ls(i,a,this.qb,this.hb,n),s=1-n}}}let c=(this.clock-this.lifeFade[e])/Gr,l=this.B*4,u=e*l;if(c<1){let t=c<0?1:1-c*c*(3-2*c),n=1-t;for(let e=0;e<l;e+=4){let r=i[e]*this.fromQ[u+e]+i[e+1]*this.fromQ[u+e+1]+i[e+2]*this.fromQ[u+e+2]+i[e+3]*this.fromQ[u+e+3]<0?-t:t;i[e]=i[e]*n+this.fromQ[u+e]*r,i[e+1]=i[e+1]*n+this.fromQ[u+e+1]*r,i[e+2]=i[e+2]*n+this.fromQ[u+e+2]*r,i[e+3]=i[e+3]*n+this.fromQ[u+e+3]*r}a[0]=a[0]*n+this.fromH[e*3]*t,a[1]=a[1]*n+this.fromH[e*3+1]*t,a[2]=a[2]*n+this.fromH[e*3+2]*t,s=s*n+this.fromClub[e]*t}for(let e=0;e<l;e++)this.lastQ[u+e]=i[e];this.lastH[e*3]=a[0],this.lastH[e*3+1]=a[1],this.lastH[e*3+2]=a[2],this.lastClub[e]=s,this.posePlaced(e,n,s)}copyAddr(e){this.qa.set(this.addrQ[e]),this.ha.set(this.addrH[e])}posePlaced(e,t,n=1){Xo(t.pose,this.qa,this.ha,n,this.skin,this.scratch);let r=this.headBone*3;this.hb[0]=this.scratch.wp[r],this.hb[1]=this.scratch.wp[r+1],this.hb[2]=this.scratch.wp[r+2],this.place3(e,this.skin,this.hb,t)}place3(e,t,n,r){let i=e*6,a=this.place[i],o=this.place[i+1],s=this.place[i+2],c=this.place[i+3],l=this.place[i+4],u=this.place[i+5],d=r.lookOffset,f=this.bm,p=this.B,m=e*p*16;for(let e=0;e<p;e++){let n=e*16,r=m+n;for(let e=0;e<12;e+=4){let i=t[n+e],c=t[n+e+2];f[r+e]=a*i+o*c,f[r+e+1]=s*t[n+e+1],f[r+e+2]=-o*i+a*c,f[r+e+3]=0}let i=t[n+12]+d.x,p=t[n+13]+d.y,h=t[n+14]+d.z;f[r+12]=a*i+o*h+c,f[r+13]=s*p+l,f[r+14]=-o*i+a*h+u,f[r+15]=1}let h=n[0]+d.x,g=n[2]+d.z;this.heads[e*3]=a*h+o*g+c,this.heads[e*3+1]=s*(n[1]+d.y)+l,this.heads[e*3+2]=-o*h+a*g+u,this.boneDirty=!0}rand(){let e=this.rngState=this.rngState+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}},ss=[`swing`,`fall`,`getup`,`walk`,`cheer`,`allyRun`],cs={swing:0,fall:1,getup:2,walk:3,cheer:4,allyRun:5};function ls(e,t,n,r,i){let a=1-i;for(let t=0;t<e.length;t+=4){let r=e[t]*n[t]+e[t+1]*n[t+1]+e[t+2]*n[t+2]+e[t+3]*n[t+3]<0?-i:i;e[t]=e[t]*a+n[t]*r,e[t+1]=e[t+1]*a+n[t+1]*r,e[t+2]=e[t+2]*a+n[t+2]*r,e[t+3]=e[t+3]*a+n[t+3]*r}t[0]=t[0]*a+r[0]*i,t[1]=t[1]*a+r[1]*i,t[2]=t[2]*a+r[2]*i}var us={value:0},ds=`varying float vLampCore;`,fs=`uniform float uBayLamp;
uniform vec3 uLampOn;
uniform vec3 uLampCore;
uniform vec3 uLampK;
varying float vLampCore;`,ps=`
#include <common>
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 p = vec4( position, 1.0 );
#ifdef USE_INSTANCING
  p = instanceMatrix * p;
#endif
  gl_Position = projectionMatrix * modelViewMatrix * p;
}
`,ms=`
uniform vec3 uColor;
uniform float uLevel;
uniform vec4 uShape;
uniform vec2 uHollow;
varying vec2 vUv;
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  float a = 1.0 - smoothstep( uShape.x, 1.0, length( q ) );
  a *= a;
  float m = ( 1.0 - smoothstep( uHollow.x - uShape.y, uHollow.x + uShape.y, abs( q.x ) ) ) * ( 1.0 - smoothstep( uHollow.y - uShape.y, uHollow.y + uShape.y, abs( q.y ) ) );
  gl_FragColor = vec4( uColor * ( a * ( 1.0 - uShape.z * m ) * uLevel * uShape.w ), 1.0 );
}
`,hs=new V,gs=new Pe,_s=new Ne;function vs(e,t){let n=e.geometry.getAttribute(`position`),r=e.geometry.getAttribute(`normal`),i=e.geometry.getAttribute(`uv`),a=n.count,o=new Float32Array(a*3),s=new Float32Array(a*3),c=new Float32Array(a*2);gs.getNormalMatrix(e.matrixWorld);for(let t=0;t<a;t++)hs.fromBufferAttribute(n,t).applyMatrix4(e.matrixWorld),o[t*3]=hs.x,o[t*3+1]=hs.y,o[t*3+2]=hs.z,hs.fromBufferAttribute(r,t).applyMatrix3(gs).normalize(),s[t*3]=hs.x,s[t*3+1]=hs.y,s[t*3+2]=hs.z,i&&(c[t*2]=i.getX(t),c[t*2+1]=i.getY(t));let l=new Le;l.setAttribute(`position`,new I(o,3)),l.setAttribute(`normal`,new I(s,3)),l.setAttribute(`uv`,new I(c,2));let u=e.geometry.index;if(u&&l.setIndex(new I(u.array.slice(),1)),t!==void 0){let e=new Float32Array(a);for(let n=Math.max(0,t);n<a;n++)e[n]=1;l.setAttribute(Zi,new I(e,1))}return l.computeBoundingSphere(),{geo:l,tris:(u?u.count:a)/3}}var ys=class{root=new tt;bays=null;capsL=null;capsR=null;lamps=null;pools=null;unitTris={bay:0,cap:0,lamp:0,pool:0};onLoaded=()=>{};rows=0;inst=[];slotsByRow;rowStart=[];constructor(e,t){this.root.name=`teebays`,this.slotsByRow=e;let n=0;for(let t of e)this.rowStart.push(n),n+=t.length;this.rowStart.push(n),Jn(ro(Nt.glb).then(e=>{e&&this.build(e.scene,t)}))}setRows(e){this.rows=e;let t=this.rowStart[Math.min(e,this.slotsByRow.length)];for(let n of this.inst){let r=n.name.startsWith(`teebay_end`)?e:t;n.count!==r&&(n.count=r,n.computeBoundingSphere())}}trianglesFor(e){let t=this.unitTris;return this.rowStart[Math.min(e,this.slotsByRow.length)]*(t.bay+t.lamp+t.pool)+e*2*t.cap}counts(){return this.inst.map(e=>[e.name,e.count])}update(){let e=W.uNight.value,t=W.uPractical.value*(1+(e.w-1)*e.x);us.value=t,this.pools&&(this.pools.visible=t>0)}dispose(){for(let e of this.inst)e.geometry.dispose();this.root.removeFromParent()}build(e,t){e.updateMatrixWorld(!0);let n=t=>{let n=e.getObjectByName(t);return n?.isMesh?n:n?.children.find(e=>e.isMesh)??null},r=n(`teebay`);if(!r){console.warn(`[teebay] glb has no teebay node: no bays`);return}let i=n(`teebay_end_r`),a=n(`teebay_end_l`),o=n(`teebay_lamp`),s=n(`teebay_pool`),c=(e,t)=>typeof e.userData.nocastFrom==`number`?e.userData.nocastFrom:t,l=io(Nt.map,t);l&&t&&(l.anisotropy=Math.min(4,t.capabilities.getMaxAnisotropy()));let u=ja({map:l,painted:!0,practical:!0});u.name=`teebay`;let d=this.rowStart[this.rowStart.length-1],f=this.slotsByRow.length,p=e=>_s.makeTranslation(e.x+Nt.place.x,e.y+Nt.place.y,e.z+Nt.place.z),m={width:Nt.ink.width,smoothAttr:!0},h=vs(r,c(r,Nt.nocastFrom));this.unitTris.bay=h.tris;let g=this.instanced(`teebay`,h.geo,u,d),_=0;for(let e of this.slotsByRow)for(let t of e)g.setMatrixAt(_++,p(t));g.layers.enable(1),this.bays=g,this.ink(g,m);let v=(e,t,n)=>{if(!e)return null;let r=vs(e,c(e,Nt.nocastFromCap));this.unitTris.cap=r.tris;let i=this.instanced(t,r.geo,u,f);for(let e=0;e<f;e++)i.setMatrixAt(e,p(n(this.slotsByRow[e])));return i.layers.enable(1),this.ink(i,m),i};if(this.capsL=v(a,`teebay_end_l`,e=>e[0]),this.capsR=v(i,`teebay_end_r`,e=>e[e.length-1]),o){let e=vs(o,void 0);this.unitTris.lamp=e.tris;let t=Nt.lamp,n=ja({color:t.offColor});n.name=`teebay_lamp`;let r=new z(t.onColor),i=new z(t.coreColor),a=new V(t.gain,t.coreLift,t.coreFrom);Pa(n,`teebay-lamp`,e=>{e.uniforms.uBayLamp=us,e.uniforms.uLampOn={value:r},e.uniforms.uLampCore={value:i},e.uniforms.uLampK={value:a},e.vertexShader=Ia(La(e.vertexShader,ds),`#include <begin_vertex>`,`vLampCore = uv.x;`,`teebay-lamp`),e.fragmentShader=Ia(La(e.fragmentShader,fs),`#include <emissivemap_fragment>`,`totalEmissiveRadiance += mix( uLampOn, uLampCore, uLampK.y * smoothstep( uLampK.z, 1.0, vLampCore ) ) * ( uBayLamp * uLampK.x );`,`teebay-lamp`)});let s=this.instanced(`teebay_lamp`,e.geo,n,d);s.instanceMatrix=g.instanceMatrix,s.layers.disable(1),this.lamps=s}if(s){let e=vs(s,void 0);this.unitTris.pool=e.tris;let t=Nt.pool,n=new oe({name:`teebay_pool`,uniforms:{uColor:{value:new z(t.color)},uLevel:us,uShape:{value:new L(t.fadeFrom,t.hollowEdge,t.hollowDepth,t.gain)},uHollow:{value:new Ve(t.matHollow[0],t.matHollow[1])}},vertexShader:ps,fragmentShader:ms,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),r=this.instanced(`teebay_pool`,e.geo,n,d);r.instanceMatrix=g.instanceMatrix,r.layers.disable(1),r.renderOrder=1,r.visible=!1,this.pools=r}g.instanceMatrix.needsUpdate=!0;for(let e of this.inst)e.instanceMatrix.needsUpdate=!0;let y=this.rows;this.rows=-1;for(let e of this.inst)e.count=-1;this.setRows(y),this.onLoaded()}instanced(e,t,n,r){let i=new Ke(t,n,r);return i.name=e,i.matrixAutoUpdate=!1,i.updateMatrix(),this.root.add(i),this.inst.push(i),i}ink(e,t){let n=Ji(e,t);n.layers.disable(1),this.inst.push(n)}},bs=.035,xs=class{root=new tt;slots;slotsByRow;options;bays;sub;triangles=0;rows=0;onRows=()=>{};subMat;subEnd;subTris;constructor(e={}){let t=Math.max(1,Math.round(e.maxRows??ln)),n={rows:Math.min(t,Math.max(1,Math.round(e.rows??1))),maxRows:t,usableWidth:e.usableWidth??43.2,bayWidth:e.bayWidth??3.6,row1Z:e.row1Z??-27,rowSpacing:e.rowSpacing??4.5,levelHeight:e.levelHeight??3,deckHeight:e.deckHeight??.15,castShadow:e.castShadow??!0,ink:e.ink??!0,seed:e.seed??3};this.options=n;let r=ws(n);this.slots=r.slots,this.slotsByRow=r.byRow,this.root.name=`rangeStructure`;let i=Rs(n,r);this.subEnd=i.ends,this.subTris=i.tris,this.subMat=ja({vertexColors:!0,painted:!0,practical:!0});let a=new F(i.geo,this.subMat);a.name=`rangeStructure-sub`,a.matrixAutoUpdate=!1,a.updateMatrix(),this.root.add(a),this.sub=a,n.castShadow&&Qi(a),n.ink&&Ji(a,{width:.05,smoothAttr:!0,colorMix:.4,darken:.22}),this.bays=new ys(r.byRow,e.renderer??null),this.root.add(this.bays.root),this.bays.onLoaded=()=>this.countTriangles(),this.setRows(n.rows)}setRows(e){let t=Math.min(this.options.maxRows,Math.max(1,Math.round(e)));t!==this.rows&&(this.rows=t,this.sub.geometry.setDrawRange(0,this.subEnd[t-1]),this.bays.setRows(t),this.countTriangles(),this.onRows(t))}slotsOf(e){let t=[];for(let n=0;n<Math.min(e,this.slotsByRow.length);n++)for(let e of this.slotsByRow[n])t.push(e);return t}rowY(e){return Ss(this.options,e)+bs}rowZ(e){return this.options.row1Z-e*this.options.rowSpacing}spreadSlots(e,t=this.options.usableWidth){let n=[];for(let r=0;r<this.slotsByRow.length;r++){let i=this.slotsByRow[r].filter(e=>Math.abs(e.x)<=t/2+.001),a=Math.min(e[r]??0,i.length);for(let e=0;e<a;e++){let t=Math.min(i.length-1,Math.floor((e+.5)/a*i.length));n.push(i[t])}}return n}slotPositions(){let e=new Float32Array(this.slots.length*3);return this.slots.forEach((t,n)=>e.set([t.x,t.y,t.z],n*3)),e}instanceCounts(){return this.bays.counts()}update(e){this.bays.update()}dispose(){this.sub.geometry.dispose(),this.subMat.dispose(),this.bays.dispose(),this.root.removeFromParent()}countTriangles(){let e=this.bays.trianglesFor(this.rows);for(let t=0;t<this.rows;t++)e+=this.subTris[t];this.triangles=e}};function Ss(e,t){return e.deckHeight+t*e.levelHeight}var Cs=(e,t)=>e.row1Z-t*e.rowSpacing;function ws(e){let t=[],n=[],r=[];for(let i=0;i<e.maxRows;i++){let a=Math.floor(e.usableWidth/e.bayWidth+1e-6),o=-(a*e.bayWidth)/2,s=[],c=[];for(let t=0;t<=a;t++)c.push(o+t*e.bayWidth);for(let n=0;n<a;n++){let r={x:o+(n+.5)*e.bayWidth,y:Ss(e,i)+bs,z:Cs(e,i),row:i,bay:n,sex:-1};s.push(r),t.push(r)}n.push(s),r.push(c)}return{slots:t,byRow:n,bounds:r}}var Ts={attrs:{[Zi]:[1]}},Es={attrs:{[Zi]:[0]}},Ds=.192,Os=.05,ks=new fe(1,1),As=new Ne,js=new P,Ms=new V,Ns=new V,Ps=new w,Fs={"+z":[0,0,0],"-z":[0,Math.PI,0],"+x":[0,Math.PI/2,0],"-x":[0,-Math.PI/2,0],"+y":[-Math.PI/2,0,0],"-y":[Math.PI/2,0,0]};function Is(e,t,n,r,i,a,o,s,c){let[l,u,d]=Fs[t];js.setFromEuler(Ps.set(l,u,d)),As.compose(Ms.set(n,r,i),js,Ns.set(a,o,1)),e.add(ks,As,s,c)}function Ls(e,t){let n=e.byRow[t];return Math.max(Math.abs(n[0].x),Math.abs(n[n.length-1].x))+Nt.module/2+Ds}function Rs(e,t){let n=new go(e.seed+41),r=Nt.corridor,i=Nt.sub,a=[],o=[],s=e=>e.x+r.centreX;for(let c=0;c<e.maxRows;c++){let l=n.triangleCount,u=Ss(e,c),d=Cs(e,c);if(c>0){let a=Ls(t,c),o=d+Nt.place.z-.01,l=d-Nt.moduleBack,f=u-i.slabDepth,p=u-.01;n.box(0,(f+p)/2,(o+l)/2,a*2,p-f,o-l,i.slabFront,Es);let m=t.byRow[c-1],h=Math.max(a,Ls(t,c-1)),g=o-i.riserThick/2+.01,_=Ss(e,c-1),v=m.map(e=>s(e)),y=-h;for(let e=0;e<=v.length;e++){let t=e<v.length?v[e]-r.width/2-Os:h;t>y+.001&&n.box((y+t)/2,(_+f)/2,g,t-y,f-_,i.riserThick,i.riser,Ts),e<v.length&&(y=v[e]+r.width/2+Os)}}let f=d-Nt.backWall,p=f-r.depth/2,m=f-r.depth,h=r.height;for(let e of t.byRow[c]){let t=s(e),a=r.width/2;Is(n,`+y`,t,u+.004,p,r.width,r.depth,r.floor,Ts),Is(n,`-y`,t,u+h,p,r.width,r.depth,r.ceiling,Ts),Is(n,`+x`,t-a,u+h/2,p,r.depth,h,r.wall,Ts),Is(n,`-x`,t+a,u+h/2,p,r.depth,h,r.wall,Ts),Is(n,`+z`,t,u+h/2,m,r.width,h,r.wall,Ts);let o=r.width+Os*2,c=h+Os;Is(n,`+y`,t,u+c,p-Os/2,o,r.depth+Os,i.riser,Ts),Is(n,`-x`,t-a-Os,u+c/2,p-Os/2,r.depth+Os,c,i.riser,Ts),Is(n,`+x`,t+a+Os,u+c/2,p-Os/2,r.depth+Os,c,i.riser,Ts),Is(n,`-z`,t,u+c/2,m-Os,o,c,i.riser,Ts)}a.push(n.triangleCount*3),o.push(n.triangleCount-l)}return{geo:n.build(),ends:a,tris:o}}function zs(){return{start:0,count:0}}function Bs(e,t,n){if(n<=0)return;t.start=0,t.count=n;let r=e.updateRanges;(r.length!==1||r[0]!==t)&&(r.length=0,r.push(t)),e.needsUpdate=!0}var Vs=`
#include <common>
attribute float aActAir;
attribute vec3 aVel;
attribute float aType;
attribute float aChase;
uniform float uInkPx;
uniform vec2 uInkPxRange;
uniform float uTime;
varying vec2 vQ;
varying float vType;
varying float vPhase;
varying vec3 vDir;
varying vec3 vCentre;
varying float vRadius;
varying float vAir;
varying vec3 vCol;
varying float vRing;
varying float vChase;
void main() {
  vec3 c = ( modelMatrix * vec4( instanceMatrix[ 3 ].xyz, 1.0 ) ).xyz;
  float r = instanceMatrix[ 0 ][ 0 ];
  vec4 mv = viewMatrix * vec4( c, 1.0 );
  // ink ring ~1.5 px (clamped in sphere units), quad grows to hold it
  float pxWorld = max( -mv.z, 0.1 ) * uInkPx;
  float ring = clamp( uInkPxRange.x * 1.15 * pxWorld / max( r, 1e-4 ), 0.08, 0.5 );
  // TAR wobbles and drips past its disc: its quad is a quarter bigger
  float k = 1.0 + ring + ( abs( aType - 6.0 ) < 0.5 ? 0.3 : 0.0 );
  vQ = position.xy * k;
  // ROLL: the ball turns about the horizontal axis across its travel; the angle comes from the distance along it (no
  // per-ball state), airborne balls spin on the clock
  vec2 hv = aVel.xz;
  float hl = length( hv );
  vec2 hd = hl > 0.05 ? hv / hl : vec2( 0.0, -1.0 );
  vDir = vec3( hd.x, 0.0, hd.y );
  vPhase = aActAir > 0.5 ? uTime * 11.0 + c.x * 1.7 : dot( c.xz, hd ) / max( r, 1e-3 );
  vType = aType;
  vChase = aChase;
  // in-flight SMEAR: stretch the disc 1.2-1.4x along its on-screen velocity
  vec3 vv = ( viewMatrix * vec4( aVel, 0.0 ) ).xyz;
  float sl = length( vv.xy );
  vec2 sdir = sl > 1e-3 ? vv.xy / sl : vec2( 0.0, 1.0 );
  float stretch = 1.0 + aActAir * ( 0.2 + 0.2 * smoothstep( 8.0, 40.0, length( aVel ) ) ) * smoothstep( 0.15, 0.45, sl / max( length( vv ), 1e-3 ) );
  vec2 sp = vec2( -sdir.y, sdir.x );
  vec2 qs = sdir * dot( vQ, sdir ) * stretch + sp * dot( vQ, sp );
  // pulled towards the camera by r so grounded balls are never cut by the grass
  mv.xyz += normalize( -mv.xyz ) * r;
  mv.xy += qs * r;
  vCentre = c;
  vRadius = r;
  vAir = aActAir;
  vCol = instanceColor;
  vRing = ring;
  gl_Position = projectionMatrix * mv;
}
`,Hs=`
#include <common>
${_a}
${va}
${ba}
${Ca}
uniform vec3 uActRimTint;
uniform float uActRimPower;
uniform float uActRimStrength;
uniform float uActRestRim;
uniform vec4 uBays[ 2 ];
uniform vec4 uFlightLight;
uniform vec3 uAccent[ 8 ];
uniform vec3 uChase;
varying vec2 vQ;
varying float vType;
varying float vPhase;
varying vec3 vDir;
varying vec3 vCentre;
varying float vRadius;
varying float vAir;
varying vec3 vCol;
varying float vRing;
varying float vChase;
void main() {
  int ty = int( vType + 0.5 );
  vec3 acc = uAccent[ ty ];
  float r2 = dot( vQ, vQ );
  if ( ty == 6 ) {
    // TAR: a wobbling goo blob with a drip hanging off its underside (screen down)
    float qa = atan( vQ.y, vQ.x );
    float wob = 1.0 + 0.07 * sin( qa * 5.0 + uTime * 6.0 + vCentre.x * 2.0 ) + 0.04 * sin( qa * 3.0 - uTime * 4.0 );
    float down = max( 0.0, -vQ.y / max( sqrt( r2 ), 1e-4 ) );
    wob += 0.24 * pow( down, 6.0 ) * ( 0.6 + 0.4 * sin( uTime * 3.0 + vCentre.z ) );
    r2 /= wob * wob;
  }
  float outer = ( 1.0 + vRing ) * ( 1.0 + vRing );
  if ( r2 > outer ) discard;
  float aa = fwidth( r2 ) * 0.75;
  float body = 1.0 - smoothstep( 1.0 - aa, 1.0 + aa, r2 );
  // view-space normal -> world
  vec3 nV = vec3( vQ, sqrt( max( 1.0 - min( r2, 1.0 ), 0.0 ) ) );
  vec3 n = normalize( ( vec4( nV, 0.0 ) * viewMatrix ).xyz );
  vec3 wp = vCentre + n * vRadius;
  float ndl = dot( n, uSunDir );
  float sh = worldShadow( wp, vec3( 0.0, 1.0, 0.0 ) ) * mix( 1.0, worldCloud( wp.xz ), 0.6 );
  // wrapped cel terminator (most of the disc reads lit even under a low sun)
  float lit = smoothstep( -0.06, 0.06, ndl + 0.42 ) * sh;
  const vec3 LUM = vec3( 0.2126, 0.7152, 0.0722 );
  vec3 amb = mix( uHemiGround, uHemiSky, 0.72 );
  float kLit = dot( amb * 0.9 + uSunColor, LUM ) * RECIPROCAL_PI;
  float kShade = kLit * 0.66;
  // lamps: the floodlights (3D beam cones in the pitch-black night) + the player light (an
  // ellipsoid around the hole: a ball in flight lights up as it passes through it)
  vec3 floodL = worldFloodLamps( wp );
  vec3 floodP = worldPlayerLight( wp );
  vec3 shadeHue = mix( vec3( 1.0 ), uShadeTint, 0.35 );
  // MOONLIT: under a cool (moon / blue-hour) key the white ball takes a little of the key's
  // hue, so at night it reads as a pale moonlit white on the blue turf; kept neutral it read
  // as a dim tan / brown next to the blue-graded world. Warm keys (golden hour) never tint it.
  vec3 keyC = uSunColor + amb * 0.9;
  vec3 keyHue = keyC / max( dot( keyC, LUM ), 1e-4 );
  vec3 moonTint = mix( vec3( 1.0 ), keyHue, 0.42 * smoothstep( 0.1, 0.6, keyHue.b - keyHue.r ) );
  // lamps change the ball's VALUE, not its hue (a white ball stays white under amber floods).
  // Pitch black (uNight.x): the lamps are the ONLY light, so they carry the cel modelling too -
  // high floodlights light the top, the player light the side facing the hole
  float pbK = uNight.x;
  float celF = mix( 1.0, mix( 0.7, 1.0, smoothstep( -0.06, 0.06, n.y + 0.35 ) ), pbK );
  vec3 plL = normalize( vec3( uHole.x, 1.4, uHole.y - uPlayerLight.w ) - wp );
  float celP = mix( 0.62, 1.0, smoothstep( -0.06, 0.06, dot( n, plL ) + 0.3 ) );
  // (pitch black: +25 %, the lit balls - the threats - are the brightest thing in the pool)
  float lampK = ( dot( floodL, LUM ) * celF + dot( floodP, LUM ) * celP ) * RECIPROCAL_PI * 0.9 * ( 1.0 + 0.25 * pbK );
  vec3 alb = vCol;
  // ---- per-type SURFACE (round 2: each type distinct in flight and on the ground; accents = BALL_TYPE_STYLES)
  vec3 up = vec3( 0.0, 1.0, 0.0 );
  if ( ty == 3 ) {
    // ROLLER: beach-ball segments that turn as it rolls (wedges round the roll axis)
    float th = atan( dot( n, up ), dot( n, vDir ) ) - vPhase;
    float seg = step( 0.5, fract( th * 0.6366 ) );
    alb = mix( alb, acc, seg * 0.9 );
  } else if ( ty == 4 ) {
    // GIANT: a fat painted band with seams, turning with the roll (its plane holds the roll axis)
    float ph = vPhase * 0.5;
    float bandD = abs( dot( n, vDir * cos( ph ) + up * sin( ph ) ) );
    alb = mix( alb, acc, 1.0 - smoothstep( 0.26, 0.29, bandD ) );
    alb *= 1.0 - 0.45 * ( 1.0 - smoothstep( 0.012, 0.03, abs( bandD - 0.34 ) ) );
  } else if ( ty == 7 ) {
    // ICE: frosted facets (quantised normal), a frost rim
    vec3 nq = normalize( floor( n * 2.2 + 0.5 ) + vec3( 1e-3 ) );
    float facet = 0.82 + 0.18 * dot( nq, normalize( vec3( -0.3, 0.8, 0.5 ) ) );
    alb = mix( alb * facet, vec3( 1.0 ), smoothstep( 0.6, 0.95, 1.0 - nV.z ) * 0.65 );
  } else if ( ty == 6 ) {
    alb *= mix( 0.75, 1.15, smoothstep( -0.4, 0.8, n.y ) );
  }
  vec3 col = alb * moonTint * mix( kShade * shadeHue, vec3( kLit ), lit ) + alb * vec3( 1.0, 0.97, 0.93 ) * lampK;
  if ( ty == 5 ) {
    // STEEL: mirror chrome: the sky above its horizon line, dark ground below, scaled by the light it sits in
    vec3 envUp = mix( vec3( 0.95, 0.98, 1.0 ), acc * vec3( 0.55, 0.7, 0.95 ), smoothstep( 0.05, 0.9, n.y ) );
    vec3 envDn = mix( vec3( 0.32, 0.33, 0.36 ), vec3( 0.12, 0.13, 0.16 ), smoothstep( -0.05, -0.7, n.y ) );
    vec3 env = mix( envDn, envUp, smoothstep( -0.03, 0.03, n.y + 0.08 * nV.x ) );
    col = mix( col, env * ( kLit + lampK ) * 1.5, 0.8 );
  }
  // pitch black: outside every light a ball keeps only a ghost of itself (uNight.y: the
  // linear level of the min visibility, which is set as a fraction of the on-screen value)
  col = max( col, vCol * ( uNight.y * pbK * 0.7 ) );
  float pbVis = mix( 1.0, max( clamp( lampK * 1.6, 0.0, 1.0 ), uNight.y ), pbK );
  // PITCH BLACK, balls in FLIGHT: the lit tee building behind them. A ball just leaving the
  // tee is lit by its bay lamp (the shot visibly leaves the golfer: ~the first 0.2 s), then
  // keeps a thin warm back-light crescent on its building side (uFlightLight.x of a lit ball)
  // that fades with the distance from the building, so against the lit bays it reads as a
  // ball, never a black hole punched in the wall; the dark middle of the flight still hides it
  if ( pbK > 0.0 && vAir > 0.5 ) {
    float dzB = vCentre.z - uBays[ 0 ].x;
    float atTee = ( 1.0 - smoothstep( 1.0, 4.0, dzB ) ) * ( 1.0 - smoothstep( 6.5, 9.5, vCentre.y ) ) * uPractical;
    float nearB = 1.0 / ( 1.0 + dzB * dzB * 0.02 );
    vec3 warmB = vec3( 1.0, 0.62, 0.32 );
    float celB = mix( 0.55, 1.0, smoothstep( -0.06, 0.06, dot( n, normalize( vec3( 0.0, 0.55, -1.0 ) ) ) + 0.25 ) );
    col += vCol * warmB * ( atTee * uNight.w * uFlightLight.y * 0.55 * celB * pbK );
    float rimB = smoothstep( 0.5, 0.82, 1.0 - nV.z ) * smoothstep( -0.1, 0.45, -n.z );
    col += warmB * ( rimB * uFlightLight.x * 0.75 * max( nearB, atTee ) * uPractical * pbK );
    pbVis = max( pbVis, atTee * pbK );
  }
  // crisp glint (sun)
  vec3 V = vec3( 0.0, 0.0, 1.0 );
  vec3 Lv = normalize( ( viewMatrix * vec4( uSunDir, 0.0 ) ).xyz );
  float spec = smoothstep( 0.88, 0.91, dot( nV, normalize( Lv + V ) ) ) * sh;
  col += vec3( kLit ) * spec * 0.18;
  if ( ty == 5 || ty == 6 ) {
    // steel: a big hard glint; tar: a wet lavender gloss stroke
    float g2 = smoothstep( ty == 5 ? 0.8 : 0.84, ty == 5 ? 0.83 : 0.87, dot( nV, normalize( vec3( -0.35, 0.55, 0.76 ) ) ) );
    col += acc * ( kLit + lampK ) * g2 * ( ty == 5 ? 1.6 : 0.9 );
  }
  if ( ty == 7 ) {
    // ice: twinkling glints on the facets
    vec3 nq = floor( n * 4.0 + 0.5 );
    float tw = fract( dot( nq, vec3( 0.137, 0.271, 0.419 ) ) * 7.0 + uTime * 0.9 );
    col += vec3( kLit + lampK ) * smoothstep( 0.9, 0.97, tw ) * 0.9;
  }
  // ... and a warm glint from the player light (pitch black)
  if ( pbK > 0.0 ) {
    vec3 LvP = normalize( ( viewMatrix * vec4( plL, 0.0 ) ).xyz );
    float specP = smoothstep( 0.86, 0.9, dot( nV, normalize( LvP + V ) ) );
    col += vec3( 1.0, 0.95, 0.86 ) * ( specP * dot( floodP, LUM ) * RECIPROCAL_PI * 0.3 );
  }
  // soft cool edge on the shade side + crisp sky rim when airborne (threat read)
  float rim = pow( 1.0 - nV.z, uActRimPower ) * uActRimStrength * mix( uActRestRim, 1.0, vAir );
  col = mix( col, col * uActRimTint, clamp( rim * 0.25, 0.0, 1.0 ) );
  col += uRimColor * smoothstep( 0.62, 0.72, 1.0 - nV.z ) * ( 0.3 + 0.7 * smoothstep( -0.3, 0.5, ndl ) ) * 0.55 * vAir;
  // resting balls step back (value -10 %, a softer ink line taken from their own shade) so
  // the balls in FLIGHT - the threats - and the flag keep the top values
  col *= mix( 0.9, 1.0, vAir );
  col = animeCap( col );
  // GLOWING types (emissive: they burn in the pitch-black night too, and may touch the bloom)
  if ( ty == 1 ) {
    // HEAT: an ember: a hot core + crawling hot spots, flickering
    float flick = 0.85 + 0.15 * sin( uTime * 23.0 + vCentre.x * 3.0 );
    float spots = smoothstep( 0.5, 0.85, 0.5 + 0.5 * sin( n.x * 9.0 + uTime * 5.0 ) * sin( n.y * 8.0 - uTime * 4.0 + n.z * 3.0 ) );
    col += acc * ( 0.35 * pow( max( nV.z, 0.0 ), 1.5 ) + 0.55 * spots ) * flick * mix( 0.6, 1.0, vAir );
  } else if ( ty == 2 ) {
    // ORBITAL: a violet halo rim + a bright tilted ring
    float halo = pow( 1.0 - nV.z, 2.0 ) * ( 0.8 + 0.2 * sin( uTime * 9.0 ) );
    float band = 1.0 - smoothstep( 0.05, 0.09, abs( dot( n, normalize( vec3( 0.35, 1.0, 0.2 ) ) ) ) );
    col += acc * ( halo * 0.9 + band * 0.7 ) * mix( 0.6, 1.0, vAir );
  }
  // CHASING roller: it flashes over its chase time (vChase = the fraction left), slowly at first and faster as the time
  // runs out (the phase is the integral of a rising frequency: uChase = chase time s, slow Hz, fast Hz)
  float flash = 0.0;
  if ( ty == 3 && vChase > 0.0 ) {
    float e = 1.0 - vChase;
    float ph = 6.2831853 * uChase.x * ( uChase.y * e + 0.5 * ( uChase.z - uChase.y ) * e * e );
    flash = smoothstep( 0.3, 0.7, 0.5 + 0.5 * sin( ph ) );
    col = mix( col, vec3( 1.0, 0.84, 0.5 ) * 1.3, flash * 0.75 );
  }
  // (the navy ink ring fades with the light the ball sits in: no blue rings in the dark)
  vec3 ink = mix( col * vec3( 0.42, 0.44, 0.58 ), vec3( 0.022, 0.028, 0.09 ) * pbVis, mix( 0.55, 1.0, vAir ) ); // #2a2f55 in flight
  // heat / orbital: their outline glows in their own colour instead of the navy ink
  if ( ty == 1 || ty == 2 ) ink = acc * ( ty == 1 ? 1.2 : 0.9 ) * mix( 0.6, 1.0, vAir );
  ink = mix( ink, acc * 1.4, flash );
  gl_FragColor = vec4( mix( ink, col, body ), 1.0 );
}
`,Us=`
attribute vec2 aShadow; // alpha, softness (0 = hard contact, 1 = soft airborne)
varying vec2 vUv;
varying vec2 vS;
void main() {
  vUv = uv * 2.0 - 1.0;
  vS = aShadow;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4( position, 1.0 );
}
`,Ws=`
uniform vec3 uColor;
varying vec2 vUv;
varying vec2 vS;
void main() {
  float d = length( vUv );
  float aa = fwidth( d ) * 1.2;
  // resting: a tight, hard contact disc; airborne: a soft spot that sharpens on descent
  float a = 1.0 - smoothstep( mix( 0.78 - aa, 0.05, vS.y ), mix( 0.78 + aa, 1.0, vS.y ), d );
  if ( a * vS.x < 0.003 ) discard;
  gl_FragColor = vec4( uColor, a * vS.x );
}
`,Gs=class{root=new tt;mesh;shadowMesh;material;capacity;trianglesPerBall;rim={color:new z(.55,.62,.78),power:2.2,strength:.85};shadow={opacity:.5,fadeHeight:6};rest={rimScale:.3,tint:16446180,sink:.014};n=0;typeRgb;air;airRange=zs();vel;typeAttr;typeRange=zs();chaseAttr;chaseRange=zs();accent=Ht.map(()=>new z);velRange=zs();restTint=new z(1,1,1);shadowBase=new z(1317434);ballRange=zs();colorRange=zs();shadowRange=zs();shadowAlpha;shadowAlphaRange=zs();uniforms={uActRimTint:{value:new V},uActRimPower:{value:2},uActRimStrength:{value:1},uActRestRim:{value:.3},uChase:{value:new V(gn[Kt.roller].chaseTime,yt.slowHz,yt.fastHz)}};constructor(e,t={}){this.capacity=Math.max(1,e),this.root.name=`balls`;let n=new fe(2,2);n.deleteAttribute(`normal`),this.trianglesPerBall=2,this.air=new Ce(new Float32Array(this.capacity),1),this.air.setUsage(R),n.setAttribute(`aActAir`,this.air),this.typeAttr=new Ce(new Float32Array(this.capacity),1),this.typeAttr.setUsage(R),n.setAttribute(`aType`,this.typeAttr),this.chaseAttr=new Ce(new Float32Array(this.capacity),1),this.chaseAttr.setUsage(R),n.setAttribute(`aChase`,this.chaseAttr),this.vel=new Ce(new Float32Array(this.capacity*3),3),this.vel.setUsage(R),n.setAttribute(`aVel`,this.vel);let r=this.uniforms;this.material=new oe({name:`anime-balls`,uniforms:{...W,uInkPx:Gi.uInkPx,uInkPxRange:Gi.uInkPxRange,uActRimTint:r.uActRimTint,uActRimPower:r.uActRimPower,uActRimStrength:r.uActRimStrength,uActRestRim:r.uActRestRim,uAccent:{value:this.accent},uChase:r.uChase},vertexShader:Vs,fragmentShader:Hs});let i=this.capacity;if(this.mesh=new Ke(n,this.material,i),this.mesh.name=`ballInstances`,this.mesh.instanceMatrix.setUsage(R),this.mesh.instanceColor=new Ce(new Float32Array(i*3),3),this.mesh.instanceColor.setUsage(R),this.mesh.frustumCulled=!1,this.mesh.count=0,this.root.add(this.mesh),this.typeRgb=new Float32Array(Ht.length*3),this.refreshTypeColors(),t.shadows??!0){let e=new fe(1,1);e.rotateX(-Math.PI/2);let t=new Ce(new Float32Array(i*2),2);t.setUsage(R),e.setAttribute(`aShadow`,t);let n=new oe({name:`anime-ball-shadow`,uniforms:{uColor:{value:new z(1317434)}},vertexShader:Us,fragmentShader:Ws,transparent:!0,depthWrite:!1});this.shadowAlpha=t,this.shadowMesh=new Ke(e,n,i),this.shadowMesh.name=`ballShadows`,this.shadowMesh.instanceMatrix.setUsage(R),this.shadowMesh.frustumCulled=!1,this.shadowMesh.count=0,this.shadowMesh.renderOrder=ma.blobShadow,this.root.add(this.shadowMesh)}else this.shadowMesh=null,this.shadowAlpha=null;let a=this.mesh.instanceMatrix.array;a.fill(0),this.shadowMesh&&this.shadowMesh.instanceMatrix.array.fill(0);for(let e=0;e<i;e++)if(a[e*16+15]=1,this.shadowMesh){let t=this.shadowMesh.instanceMatrix.array;t[e*16+5]=1,t[e*16+15]=1}}refreshTypeColors(){let e=new z;Ht.forEach((t,n)=>{this.accent[n].set(t.accent),e.set(t.ball),this.typeRgb[n*3]=e.r,this.typeRgb[n*3+1]=e.g,this.typeRgb[n*3+2]=e.b})}get count(){return this.n}begin(){this.n=0}push(e,t,n,r=0,i=zt,a=!0){let o=this.n;if(o>=this.capacity)return;this.n=o+1;let s=this.mesh.instanceMatrix.array,c=o*16;s[c]=i,s[c+5]=i,s[c+10]=i,s[c+12]=e,s[c+13]=a?t:t-this.rest.sink,s[c+14]=n;let l=this.mesh.instanceColor.array,u=(r&7)*3;if(a)l[o*3]=this.typeRgb[u],l[o*3+1]=this.typeRgb[u+1],l[o*3+2]=this.typeRgb[u+2];else{let e=this.restTint;l[o*3]=this.typeRgb[u]*e.r,l[o*3+1]=this.typeRgb[u+1]*e.g,l[o*3+2]=this.typeRgb[u+2]*e.b}this.air.array[o]=+!!a,this.typeAttr.array[o]=r&7,this.chaseAttr.array[o]=0;let d=this.vel.array;d[o*3]=0,d[o*3+1]=0,d[o*3+2]=0,this.shadowMesh&&this.shadowAlpha&&(this.readLamp(),this.writeShadow(o,e,t,n,i,a))}pushSoA(e,t,n,r,i,a,o,s,c,l,u){let d=this.mesh.instanceMatrix.array,f=this.mesh.instanceColor.array,p=this.air.array,m=this.typeAttr.array,h=this.chaseAttr.array,g=this.vel.array,_=this.shadowMesh!==null;this.readLamp();let v=this.typeRgb,y=this.restTint,b=this.rest.sink,x=this.capacity,S=this.n;for(let C=0;C<e&&S<x;C++){let e=t[C];if(e===0)continue;let x=e===1,w=o[C],T=n[C],E=r[C],D=i[C],O=S*16;d[O]=w,d[O+5]=w,d[O+10]=w,d[O+12]=T,d[O+13]=x?E:E-b,d[O+14]=D;let k=(a[C]&7)*3;m[S]=a[C]&7,h[S]=u?u[C]:0;let A=S*3;x?(f[A]=v[k],f[A+1]=v[k+1],f[A+2]=v[k+2]):(f[A]=v[k]*y.r,f[A+1]=v[k+1]*y.g,f[A+2]=v[k+2]*y.b),p[S]=+!!x;let j=S*3;g[j]=s?s[C]:0,g[j+1]=c?c[C]:0,g[j+2]=l?l[C]:0,_&&this.writeShadow(S,T,E,D,w,x),S++}this.n=S}lampX=0;lampZ=0;lampR=0;lampK=0;readLamp(){let e=W.uHole.value,t=W.uPlayerLight.value;this.lampK=W.uNight.value.x,this.lampX=e.x,this.lampZ=e.y-t.w,this.lampR=t.x>0?1/Math.sqrt(t.x):0}writeShadow(e,t,n,r,i,a){let o=this.shadowMesh.instanceMatrix.array,s=this.shadowAlpha.array,c=e*16,l=n-i>0?n-i:0,u;if(!a&&l<.05)u=i*3.1,s[e*2]=this.shadow.opacity*1.1,s[e*2+1]=0;else{let t=1/(1+l/Math.max(.1,this.shadow.fadeHeight*.55));u=i*(2.4+2.2*(1-t)),s[e*2]=this.shadow.opacity*(.5+.5*t),s[e*2+1]=.35+.65*(1-t)}o[c]=u,o[c+10]=u;let d=0,f=0;if(this.lampK>0&&!a){let e=t-this.lampX,n=r-this.lampZ,a=Math.sqrt(e*e+n*n);if(a>.001&&a<this.lampR){let t=Math.min(1.6,a/3)*i*this.lampK/a;d=e*t,f=n*t}}o[c+12]=t+d,o[c+13]=.016,o[c+14]=r+f}end(){let e=this.n;this.mesh.count=e,this.mesh.visible=e>0,Bs(this.mesh.instanceMatrix,this.ballRange,e*16),Bs(this.mesh.instanceColor,this.colorRange,e*3),Bs(this.air,this.airRange,e),Bs(this.typeAttr,this.typeRange,e),Bs(this.chaseAttr,this.chaseRange,e),Bs(this.vel,this.velRange,e*3),this.shadowMesh&&this.shadowAlpha&&(this.shadowMesh.count=e,this.shadowMesh.visible=e>0,Bs(this.shadowMesh.instanceMatrix,this.shadowRange,e*16),Bs(this.shadowAlpha,this.shadowAlphaRange,e*2))}update(e){let t=this.uniforms;if(this.shadowMesh){let e=W.uNight.value.x;this.shadowMesh.material.uniforms.uColor.value.copy(this.shadowBase).multiplyScalar(1-e)}t.uActRimTint.value.set(this.rim.color.r,this.rim.color.g,this.rim.color.b),t.uActRimPower.value=this.rim.power,t.uActRimStrength.value=this.rim.strength,t.uActRestRim.value=this.rest.rimScale,this.restTint.setHex(this.rest.tint)}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.mesh.dispose(),this.shadowMesh&&(this.shadowMesh.geometry.dispose(),this.shadowMesh.material.dispose(),this.shadowMesh.dispose()),this.root.removeFromParent()}},Ks={minEndRadius:.38,endPerBallRadius:2.4,startMul:3.6,widthStart:.036,widthEnd:.06,fillAlpha:.12,ease:1.35,nightVisibility:.22,floodlightRestore:.65,opacity:.95},qs=`
attribute vec4 aMarker; // progress, type + seed (fract), dot radius (local units), alpha
varying vec2 vUv;
varying vec3 vColor;
varying vec4 vData;
varying float vScale;
varying vec2 vWorldXZ;
#include <common>
void main() {
  vUv = uv * 2.0 - 1.0;
  vColor = instanceColor;
  vData = aMarker;
  vScale = length(instanceMatrix[0].xyz);
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorldXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Js=`
uniform float uTime;
uniform float uVis;
uniform float uEndFrac;
uniform float uEase;
uniform float uFillAlpha;
uniform vec3 uLight;        // scene light level tint (markers sit in the painting)
uniform sampler2D uBrushTex;
varying vec2 vUv;
varying vec3 vColor;
varying vec4 vData;
varying float vScale;
varying vec2 vWorldXZ;
#include <common>
${ga}
${va}

float band(float d, float halfW, float aa) {
  return 1.0 - smoothstep(halfW - aa, halfW + aa, abs(d));
}

// the 8 ball-type shapes (signed distances, ~unit size; screen up = north): see SHAPES in the class doc
float sdBox(vec2 p, vec2 b, float rr) {
  vec2 q = abs(p) - b + rr;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - rr;
}
float sdTri(vec2 p, float r) { // equilateral, apex up, half side r
  const float k = 1.7320508;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) * 0.5;
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}
float sdCross(vec2 p, vec2 b) {
  p = abs(p);
  p = (p.y > p.x) ? p.yx : p.xy;
  vec2 q = p - b;
  float k = max(q.y, q.x);
  vec2 w = (k > 0.0) ? q : vec2(b.y - p.x, -k);
  return sign(k) * length(max(w, 0.0));
}
float sdStar(vec2 p, float r, float n, float m) {
  float an = 3.141593 / n;
  float en = 3.141593 / m;
  vec2 acs = vec2(cos(an), sin(an));
  vec2 ecs = vec2(cos(en), sin(en));
  float bn = mod(atan(p.x, p.y), 2.0 * an) - an;
  p = length(p) * vec2(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}
float shapeSd(vec2 q, int type, float seed) {
  if (type == 1) return sdTri(q - vec2(0.0, -0.08), 0.98);                 // heat: triangle
  if (type == 3) return sdBox(mat2(0.7071, -0.7071, 0.7071, 0.7071) * q, vec2(0.8), 0.06); // roller: diamond
  if (type == 4) return sdBox(q, vec2(0.86), 0.12);                         // giant: square
  if (type == 5) return sdCross(q, vec2(1.05, 0.36));                       // steel: plus
  if (type == 6) {                                                          // tar: a lobed splat
    float aa = atan(q.y, q.x);
    return (length(q) - (0.95 + 0.14 * sin(aa * 5.0 + seed * 6.2831) + 0.05 * sin(aa * 9.0 + seed * 3.0 + uTime * 1.5))) * 0.85;
  }
  if (type == 7) return sdStar(q, 1.1, 6.0, 3.2);                          // ice: six-point star
  return length(q) - 1.0;                                                   // normal / orbital (+ ticks): circle
}

void main() {
  float r = length(vUv);
  if (r > 1.08) discard;
  // the hole's opening stays clean
  if (length(vWorldXZ - uHole.xy) < uHole.z + 0.06) discard;
  float prog = clamp(vData.x, 0.0, 1.0);
  int type = int(floor(vData.y));
  float seed = fract(vData.y);
  float remain = floor(vData.w) / 20.0;
  float alphaIn = fract(vData.w);
  float a = atan(vUv.y, vUv.x);
  float px = max(fwidth(r), 1e-5); // uv units per pixel

  float e = pow(prog, uEase);
  // orbital (round 6, the user: the indicator should not shrink to show how far away the ball is): its reticle keeps the
  // impact size from the start
  if (type == 2) e = 1.0;
  float ringR = mix(0.86, uEndFrac, e);
  // brush wobble on the outline
  float wob = 1.0 + 0.012 * sin(a * 7.0 + seed * 40.0) + 0.008 * sin(a * 13.0 + seed * 17.0);
  // the TYPE's shape (signed distance in shape units, 1 = the ring size), scaled back to uv units
  vec2 q = vUv / (ringR * wob);
  float sd = shapeSd(q, type, seed);
  float d = sd * ringR;
  float coreH = px * 1.5;           // 3 px core
  float inkH = coreH + px * 1.0;    // + 1 px ink each side

  // dry-brush breaks along the stroke (polar uv into the brush texture)
  vec2 puv = vec2(a * (0.159 * 3.0) + seed * 3.7, seed);
  vec4 bt = texture2D(uBrushTex, puv);
  float dry = smoothstep(0.22, 0.32, bt.g + 0.15 * prog);
  float ring = band(d, coreH, px * 0.6) * dry;
  float ink = band(d, inkH, px * 0.6) * dry;
  if (type == 2) {
    // orbital: a reticle (four ticks across the ring)
    float sector = 1.5708;
    float rel = mod(a + 0.7854, sector) - sector * 0.5;
    float dist = abs(rel) * r;
    float inR = ringR * 0.5;
    float outR = ringR * 1.2;
    float radial = smoothstep(inR - px, inR + px, r) * (1.0 - smoothstep(outR - px, outR + px, r));
    ring = max(ring, band(dist, coreH, px * 0.6) * radial);
    ink = max(ink, band(dist, inkH, px * 0.6) * radial);
  }
  float dotR = max(vData.z * 0.8, px * 2.0);
  float dotA = 1.0 - smoothstep(dotR - px, dotR + px, r);
  float dotInk = 1.0 - smoothstep(dotR + px * 0.4, dotR + px * 1.6, r);
  // painted fill: faint, brush-mottled, grows with progress
  float fill = (1.0 - smoothstep(-px, px, d)) * uFillAlpha * prog * (0.65 + 0.7 * bt.a);

  float core = max(ring, dotA);
  ink = max(max(ink, dotInk) - core, 0.0);

  // warning in the last ~0.4 s: the core flashes towards a pale tint of its own colour (the hue = the type
  // stays readable; stays <= 1.0, no bloom)
  float warn = 1.0 - smoothstep(0.0, 0.42, remain);
  vec3 base = vColor * uLight * (0.8 + 0.2 * prog);
  vec3 col = mix(base, mix(vColor, vec3(1.0), 0.6) * uLight, warn * (0.5 + 0.5 * sin(uTime * 22.0)));
  // fill: a pale tint of the type colour (a light wash on the grass, never a muddy dark disc)
  vec3 fillCol = mix(vColor, vec3(1.0, 0.96, 0.88), 0.55) * uLight * 0.9;
  vec3 inkCol = vec3(0.016, 0.014, 0.04);

  // PITCH BLACK (uNight.x): a mark is only seen where light falls on it - the player light or
  // a floodlight island - lit in that light's colour; elsewhere it keeps uNight.z (default 0)
  float pbVis = 1.0;
  if ( uNight.x > 0.0 ) {
    vec3 lt = worldFlood( vWorldXZ ) * ( 1.0 / 2.3 );
    float lv = dot( lt, vec3( 0.2126, 0.7152, 0.0722 ) );
    pbVis = mix( 1.0, max( smoothstep( 0.015, 0.45, lv ), uNight.z ), uNight.x );
    vec3 lit = min( lt / max( lv, 1e-3 ), vec3( 1.25 ) ) * min( lv * 1.15, 1.0 );
    vec3 tintK = mix( vec3( 1.0 ), lit / max( uLight, vec3( 1e-3 ) ), uNight.x );
    col *= tintK;
    fillCol *= tintK;
  }

  float coreA = core;
  float inkA = ink * 0.85 * (1.0 - coreA);
  float fillA = fill * (1.0 - coreA - inkA);
  float alpha = coreA + fillA + inkA;
  vec3 outCol = (col * coreA + fillCol * fillA + inkCol * inkA) / max(alpha, 1e-4);
  alpha = min(alpha, 1.0) * alphaIn * uVis * pbVis;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(min(outCol, vec3(1.0)), alpha);
}
`,Ys=class{root;material;capacity;tunables={...Ks};n=0;data;typeRgb;matRange=zs();colRange=zs();dataRange=zs();tmpColor=new z;constructor(e){this.capacity=Math.max(1,e);let t=new fe(2,2);t.rotateX(-Math.PI/2),t.deleteAttribute(`normal`),this.data=new Ce(new Float32Array(this.capacity*4),4),this.data.setUsage(R),t.setAttribute(`aMarker`,this.data),this.material=new oe({vertexShader:qs,fragmentShader:Js,uniforms:{uTime:{value:0},uVis:{value:1},uEndFrac:{value:.3},uEase:{value:1},uFillAlpha:{value:.2},uLight:{value:new z(1,1,1)},uHole:W.uHole,uBrushTex:W.uBrushTex,uFloodPools:W.uFloodPools,uFloodHeads:W.uFloodHeads,uFloodIslands:W.uFloodIslands,uFloodColor:W.uFloodColor,uFloodShape:W.uFloodShape,uFloodBox:W.uFloodBox,uHeroPool:W.uHeroPool,uNight:W.uNight,uPlayerLight:W.uPlayerLight,uPlayerColor:W.uPlayerColor},transparent:!0,depthWrite:!1}),this.material.name=`landingMarkers`,this.root=new Ke(t,this.material,this.capacity),this.root.name=`landingMarkers`,this.root.instanceMatrix.setUsage(R),this.root.instanceColor=new Ce(new Float32Array(this.capacity*3),3),this.root.instanceColor.setUsage(R),this.root.frustumCulled=!1,this.root.renderOrder=ma.markers,this.root.count=0;let n=this.root.instanceMatrix.array;n.fill(0);for(let e=0;e<this.capacity;e++)n[e*16+5]=1,n[e*16+15]=1;this.typeRgb=new Float32Array(24),this.refreshStyles()}refreshStyles(){for(let e=0;e<8;e++)this.tmpColor.set(Ht[e].marker),this.typeRgb[e*3]=this.tmpColor.r,this.typeRgb[e*3+1]=this.tmpColor.g,this.typeRgb[e*3+2]=this.tmpColor.b}get count(){return this.n}begin(){this.n=0}push(e,t,n,r=0,i=zt,a=-1,o=1,s=9){let c=this.n;if(c>=this.capacity)return;this.n=c+1;let l=this.tunables,u=Math.max(l.minEndRadius,i*l.endPerBallRadius)*l.startMul,d=this.root.instanceMatrix.array,f=c*16;d[f]=u,d[f+10]=u,d[f+12]=e,d[f+13]=.028+c%8*.0015,d[f+14]=t;let p=this.root.instanceColor.array,m=r&7;a>=0?(this.tmpColor.setHex(a),p[c*3]=this.tmpColor.r,p[c*3+1]=this.tmpColor.g,p[c*3+2]=this.tmpColor.b):(p[c*3]=this.typeRgb[m*3],p[c*3+1]=this.typeRgb[m*3+1],p[c*3+2]=this.typeRgb[m*3+2]);let h=this.data.array;h[c*4]=n,h[c*4+1]=m+((e*.37+t*.61)%1+1)%1*.98,h[c*4+2]=Math.max(.03,i/u),h[c*4+3]=Math.min(40,Math.max(0,Math.floor(s*20)))+Math.min(.999,Math.max(0,o))}end(){let e=this.n;this.root.count=e,this.root.visible=e>0,Bs(this.root.instanceMatrix,this.matRange,e*16),Bs(this.root.instanceColor,this.colRange,e*3),Bs(this.data,this.dataRange,e*4)}update(e){let t=this.tunables,n=this.material.uniforms;n.uTime.value=e.time%1e3;let r=Math.min(1,Math.max(0,e.darkness))*(e.floodlights?1-t.floodlightRestore:1),i=W.uNight.value.x;n.uVis.value=t.opacity*(1+(t.nightVisibility-1)*r*(1-i)),n.uEndFrac.value=1/t.startMul,n.uEase.value=t.ease,n.uFillAlpha.value=Math.min(.25,t.fillAlpha);let a=Math.min(1,Math.max(0,e.darkness));n.uLight.value.setRGB(1-.35*a,1-.3*a,1-.18*a)}dispose(){this.root.geometry.dispose(),this.material.dispose(),this.root.dispose(),this.root.removeFromParent()}},Xs=36,Zs=[0,0,0,0],Qs=[0,0,0,1],$s=/^picker_wheel_(fl|fr|rl|rr)_mesh$/,ec=/^picker_unitreel_([RL]\d+)_mesh$/,tc=/^picker_unit_([RL]\d+)_q$/,nc=new Map(ht.map(e=>[e.name,e])),rc=new V,ic=new Pe,ac=class{root=new tt;body;shadow;shadowProxy;material;target=null;targetInk=null;trianglesByLevel=[];targetTriangles=0;uniforms={uActTravel:{value:0},uActBeacon:{value:0}};moving=!0;travel=0;lastX=0;lastZ=0;hasPose=!1;dir=new V;level=0;distraction=0;ends=[];boxes=[];spheres=[];constructor(e=null){this.root.name=`rangePicker`;let t=io(Mn.map,e);t&&e&&(t.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy())),this.material=ja({map:t}),this.material.name=`picker`;let n=this.uniforms;Pa(this.material,`actors-picker-spin-map`,e=>{e.uniforms.uActTravel=n.uActTravel,e.uniforms.uActBeacon=n.uActBeacon;let t=`
        if (aActSpin.z != 0.0) {
          float spA = uActTravel * aActSpin.z;
          float spC = cos(spA);
          float spS = sin(spA);
          SP_TARGET
        }`;e.vertexShader=La(e.vertexShader,`attribute vec4 aActSpin;
uniform float uActTravel;
uniform float uActBeacon;
varying float vActBeacon;`),e.vertexShader=Ia(e.vertexShader,`#include <beginnormal_vertex>`,t.replace(`SP_TARGET`,`objectNormal.yz = vec2(spC * objectNormal.y - spS * objectNormal.z, spS * objectNormal.y + spC * objectNormal.z);`),`picker`),e.vertexShader=Ia(e.vertexShader,`#include <begin_vertex>`,t.replace(`SP_TARGET`,`vec2 spD = transformed.yz - aActSpin.xy;
transformed.yz = aActSpin.xy + vec2(spC * spD.x - spS * spD.y, spS * spD.x + spC * spD.y);`)+`
vActBeacon = aActSpin.w * uActBeacon;`,`picker`),e.fragmentShader=La(e.fragmentShader,`varying float vActBeacon;`),e.fragmentShader=Ia(e.fragmentShader,`#include <emissivemap_fragment>`,`totalEmissiveRadiance += diffuseColor.rgb * vActBeacon * 1.8;`,`picker`)}),this.body=new F(new Le,this.material),this.body.name=`pickerBody`,this.body.visible=!1;let r=new fe(1,1);r.rotateX(-Math.PI/2);let i=Bt.blob;this.shadow=new F(r,new $e({color:0,map:Na(),transparent:!0,opacity:i.opacity,depthWrite:!1})),this.shadow.name=`pickerShadow`,this.shadow.position.set(0,i.y,i.z),this.shadow.renderOrder=ma.blobShadow;let a=new go(1),[o,s,c,l,u,d]=Bt.proxyCab;a.box(o,s,c,l,u,d,16777215);let f=Bt.proxyGang;a.box(0,f.y,(f.z0+f.z1)/2,1,f.height,f.z1-f.z0,16777215),this.shadowProxy=new F(a.build(),new $e({colorWrite:!1,depthWrite:!1})),this.shadowProxy.name=`pickerShadowProxy`,this.shadowProxy.layers.set(1),this.root.add(this.shadow,this.body,this.shadowProxy),this.applyWidth(),Jn(ro(Mn.glb).then(e=>{e&&this.build(e.scene)}))}setLevels(e,t){let n=Math.min(Mn.maxLevel,Math.max(0,Math.round(e)));n!==this.level&&(this.level=n,this.applyWidth()),this.distraction=t,this.applyTarget()}setPose(e,t,n){if(this.hasPose&&this.moving){let r=e-this.lastX,i=t-this.lastZ;this.dir.set(Math.sin(n),0,Math.cos(n)),this.travel+=r*this.dir.x+i*this.dir.z,(this.travel>600||this.travel<-600)&&(this.travel%=600)}this.lastX=e,this.lastZ=t,this.hasPose=!0,this.root.position.set(e,0,t),this.root.rotation.set(0,n,0)}setMoving(e){this.moving=e}update(e){this.uniforms.uActTravel.value=this.travel;let t=this.moving?Bt.beaconMoving:.35+.65*Math.max(0,Math.sin(e.time*9));this.uniforms.uActBeacon.value=t*(.6+.4*e.darkness)}dispose(){this.body.geometry.dispose(),this.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose(),this.shadowProxy.geometry.dispose(),this.shadowProxy.material.dispose(),this.target?.geometry.dispose(),this.root.removeFromParent()}applyWidth(){let e=pt(this.level),t=this.shadowProxy.geometry,n=t.getAttribute(`position`);for(let t=Xs;t<n.count;t++)n.setX(t,n.getX(t)<0?-e:e);if(n.needsUpdate=!0,t.computeBoundingSphere(),t.computeBoundingBox(),this.shadow.scale.set(2*e+Bt.blob.padX,1,Bt.blob.length),this.ends.length>0){let e=this.body.geometry;e.setDrawRange(0,this.ends[this.level]),e.boundingBox=this.boxes[this.level],e.boundingSphere=this.spheres[this.level]}}applyTarget(){let e=this.distraction>=Mn.targetLevel;this.target&&(this.target.visible=e),this.targetInk&&(this.targetInk.visible=e)}build(e){e.updateMatrixWorld(!0);let t=[],n=null,r=Mn.wheel,i=Mn.reel;if(e.traverse(e=>{let a=e;if(!a.isMesh)return;let o=a.name,s;if(o===`picker_body`)t.push({mesh:a,level:0,spin:Zs});else if(o===`picker_beacon`)t.push({mesh:a,level:0,spin:Qs});else if(o===`picker_target`)n=a;else if(s=$s.exec(o))t.push({mesh:a,level:0,spin:[r.y,s[1][0]===`f`?r.z:-r.z,1/r.r,0]});else if(o===`picker_reel_wing_mesh`)t.push({mesh:a,level:0,spin:[i.y,i.back,1/i.r,0]});else if(o===`picker_reel_centre_mesh`)t.push({mesh:a,level:0,spin:[i.y,i.front,1/i.r,0]});else if(s=ec.exec(o)){let e=nc.get(s[1]);e&&t.push({mesh:a,level:e.level,spin:[i.y,e.axleZ,1/i.r,0]})}else if(s=tc.exec(o)){let e=nc.get(s[1]);e&&t.push({mesh:a,level:e.level,spin:Zs})}}),!t.some(e=>e.mesh.name===`picker_body`)){console.warn(`[picker] glb has no picker_body node: no picker drawn`);return}t.sort((e,t)=>e.level-t.level);let a=0,o=0;for(let e of t)a+=e.mesh.geometry.getAttribute(`position`).count,o+=e.mesh.geometry.index?.count??0;let s=new Float32Array(a*3),c=new Float32Array(a*3),l=new Float32Array(a*2),u=new Float32Array(a*4),d=a>65535?new Uint32Array(o):new Uint16Array(o),f=Array(Mn.maxLevel+1).fill(0),p=[],m=0,h=0;for(let e of t){let t=e.mesh.geometry,n=t.getAttribute(`position`),r=t.getAttribute(`normal`),i=t.getAttribute(`uv`);ic.getNormalMatrix(e.mesh.matrixWorld),p[e.level]??=new He;for(let t=0;t<n.count;t++){rc.fromBufferAttribute(n,t).applyMatrix4(e.mesh.matrixWorld);let a=m+t;s[a*3]=rc.x,s[a*3+1]=rc.y,s[a*3+2]=rc.z,p[e.level].expandByPoint(rc),rc.fromBufferAttribute(r,t).applyMatrix3(ic).normalize(),c[a*3]=rc.x,c[a*3+1]=rc.y,c[a*3+2]=rc.z,i&&(l[a*2]=i.getX(t),l[a*2+1]=i.getY(t)),u.set(e.spin,a*4)}let a=t.index;if(a)for(let e=0;e<a.count;e++)d[h+e]=a.getX(e)+m;m+=n.count,h+=a?.count??0,f[e.level]=h}for(let e=1;e<=Mn.maxLevel;e++)f[e]===0&&(f[e]=f[e-1]),p[e]=(p[e]??new He).union(p[e-1]);let g=new Le;g.setAttribute(`position`,new I(s,3)),g.setAttribute(`normal`,new I(c,3)),g.setAttribute(`uv`,new I(l,2)),g.setAttribute(`aActSpin`,new I(u,4)),g.setIndex(new I(d,1)),this.body.geometry.dispose(),this.body.geometry=g,this.ends=f,this.boxes=p,this.spheres=p.map(e=>e.getBoundingSphere(new D)),this.trianglesByLevel.length=0;for(let e of f)this.trianglesByLevel.push(e/3);this.body.visible=!0,Ji(this.body,{width:.03,smoothAttr:!0}).layers.disable(1);let _=n;_&&this.buildTarget(_),this.applyWidth(),this.applyTarget()}buildTarget(e){let t=e.geometry,n=t.getAttribute(`position`),r=t.getAttribute(`normal`),i=t.getAttribute(`uv`),a=new Float32Array(n.count*3),o=new Float32Array(n.count*3),s=new Float32Array(n.count*2);ic.getNormalMatrix(e.matrixWorld);for(let t=0;t<n.count;t++)rc.fromBufferAttribute(n,t).applyMatrix4(e.matrixWorld),a[t*3]=rc.x,a[t*3+1]=rc.y,a[t*3+2]=rc.z,rc.fromBufferAttribute(r,t).applyMatrix3(ic).normalize(),o[t*3]=rc.x,o[t*3+1]=rc.y,o[t*3+2]=rc.z,i&&(s[t*2]=i.getX(t),s[t*2+1]=i.getY(t));let c=new Le;c.setAttribute(`position`,new I(a,3)),c.setAttribute(`normal`,new I(o,3)),c.setAttribute(`uv`,new I(s,2)),c.setAttribute(`aActSpin`,new I(new Float32Array(n.count*4),4)),t.index&&c.setIndex(new I(t.index.array.slice(),1)),c.computeBoundingSphere(),this.targetTriangles=(t.index?t.index.count:n.count)/3;let l=new F(c,this.material);l.name=`pickerTarget`,this.root.add(l);let u=Ji(l,{width:.025,smoothAttr:!0});u.layers.disable(1),this.target=l,this.targetInk=u}};function oc(e,t){let n=e*.3713+t*.6181;return n-Math.floor(n)}function sc(e,t){return 1+.15*Math.sin(e*5+t*40)+.09*Math.sin(e*8-t*23)+.06*Math.sin(e*3+t*11)}function cc(e,t,n,r){return .05*n*Math.sin(e*3.1+r*20)*Math.sin(t*2.7-r*13)+.018*Math.sin(e*9.3+t*7.1+r*30)}var lc=e=>e-Math.floor(e);function uc(e,t,n,r,i,a,o=1){let s=e-n,c=t-r,l=Math.sqrt(s*s+c*c)-i*sc(Math.atan2(c,s),a)*o;for(let e=0;e<5;e++){let t=lc(a*7.31+e*.618),n=lc(a*3.77+e*.414),r=lc(a*5.13+e*.732),u=(e+t)*1.2566,d=i*(1+.4*n)*o,f=s-Math.cos(u)*d,p=c-Math.sin(u)*d,m=Math.sqrt(f*f+p*p)-i*(.05+.08*r);m<l&&(l=m)}return l}function dc(e,t,n,r,i,a){return cc(e-n,t-r,i,a)}var fc=1.6,pc=1.12,mc=`
#define SPLAT_DROPS 5
float stLob( float ang, float seed ) {
  return 1.0 + 0.15 * sin( ang * 5.0 + seed * 40.0 ) + 0.09 * sin( ang * 8.0 - seed * 23.0 ) + 0.06 * sin( ang * 3.0 + seed * 11.0 );
}
// lobK: splat size (look: splash-in x shrink-out), posK: drop distance (splash-in), dropK: drop size (shrink-out)
float stSplatSd( vec2 q, float R, float seed, float lobK, float posK, float dropK ) {
  float d = length( q ) - R * stLob( atan( q.y, q.x ), seed ) * lobK;
  for ( int k = 0; k < SPLAT_DROPS; k++ ) {
    float fk = float( k );
    float h1 = fract( seed * 7.31 + fk * 0.618 );
    float h2 = fract( seed * 3.77 + fk * 0.414 );
    float h3 = fract( seed * 5.13 + fk * 0.732 );
    float a = ( fk + h1 ) * 1.2566;
    vec2 c = vec2( cos( a ), sin( a ) ) * R * ( 1.0 + 0.4 * h2 ) * posK;
    d = min( d, length( q - c ) - R * ( 0.05 + 0.08 * h3 ) * dropK );
  }
  return d;
}
float stWobble( vec2 q, float R, float seed ) {
  return 0.05 * R * sin( q.x * 3.1 + seed * 20.0 ) * sin( q.y * 2.7 - seed * 13.0 ) + 0.018 * sin( q.x * 9.3 + q.y * 7.1 + seed * 30.0 );
}
`;function hc(e){return e?mn.tar.decalRadius:mn.ice.decalRadius}var gc={tar:0,ice:1},_c=0,vc=1,yc=2,bc=.22,xc=.6,Sc=.28,Cc=4096,wc=mn.maxPoints,Tc=Ot.discs,Ec=wc+Tc,Dc=pc+.08,Oc=fc+.08,kc=2,Ac=8,jc=64,Mc=.05,Nc=.018,Pc=1.53,Fc=.6,Ic=.25,Lc=class{root;material;capacity;live=0;pool;state;gen;t;kind;count;radius;seed;bbDirty;ecount;pts;tex;attrA;attrB;attrC;decB;tileN;tileRect;tileSeg;tileOf;tiles=0;layoutDirty=!1;rangeM={start:0,count:0};rangeA={start:0,count:0};rangeB={start:0,count:0};rangeC={start:0,count:0};highWater=0;animating=0;dirty=!1;ptsDirty=!1;constructor(e=128){this.capacity=Math.min(Cc,Math.max(1,e));let t=this.capacity;this.pool=new Zr(t),this.state=new Uint8Array(t),this.gen=new Uint16Array(t),this.t=new Float32Array(t),this.kind=new Uint8Array(t),this.count=new Uint8Array(t),this.radius=new Float32Array(t),this.seed=new Float32Array(t),this.bbDirty=new Uint8Array(t),this.ecount=new Uint8Array(t),this.pts=new Float32Array(t*Ec*4),this.tex=new O(this.pts,Ec,t,re,ee),this.tex.minFilter=ye,this.tex.magFilter=ye,this.tex.generateMipmaps=!1,this.tex.needsUpdate=!0;let n=new fe(2,2);n.rotateX(-Math.PI/2);let r=t*jc;this.attrA=new Ce(new Float32Array(r*4),4),this.attrB=new Ce(new Float32Array(r*4),4),this.attrC=new Ce(new Float32Array(r*4),4),this.attrA.setUsage(R),this.attrB.setUsage(R),this.attrC.setUsage(R),n.setAttribute(`aDecalA`,this.attrA),n.setAttribute(`aDecalB`,this.attrB),n.setAttribute(`aDecalC`,this.attrC),this.decB=new Float32Array(t*4),this.tileN=new Uint8Array(t),this.tileRect=new Float32Array(r*4),this.tileSeg=new Float32Array(r*3),this.tileOf=new Uint16Array(r),this.material=ja({transparent:!0}),this.material.depthWrite=!1,this.material.polygonOffset=!0,this.material.polygonOffsetFactor=0,this.material.polygonOffsetUnits=-2;let i=this.tex;Pa(this.material,`actors-decal-streak`,e=>{e.uniforms.uDecalPts={value:i},e.vertexShader=La(e.vertexShader,`attribute vec4 aDecalA;
attribute vec4 aDecalB;
attribute vec4 aDecalC;
varying vec4 vDecalA;
varying vec4 vDecalB;
varying vec4 vDecalC;`),e.vertexShader=Ia(e.vertexShader,`#include <uv_vertex>`,`vDecalA = aDecalA;
vDecalB = aDecalB;
vDecalC = aDecalC;`,`decals`),e.fragmentShader=La(e.fragmentShader,Hc),e.fragmentShader=Ia(e.fragmentShader,`#include <clipping_planes_fragment>`,`if ( length( vStylWorld.xz - uHole.xy ) < uHole.z ) discard;`,`decals`),e.fragmentShader=Ia(e.fragmentShader,`#include <map_fragment>`,Uc,`decals`)}),this.root=new Ke(n,this.material,r),this.root.name=`groundDecals`,this.root.instanceMatrix.setUsage(R),this.root.frustumCulled=!1,this.root.renderOrder=ma.decals,this.root.count=0;let a=this.root.instanceMatrix.array;a.fill(0);for(let e=0;e<r;e++)a[e*16+5]=1,a[e*16+15]=1}add(e,t,n,r){let i=this.pool.acquire();if(i<0)return-1;this.state[i]=vc,this.gen[i]=this.gen[i]+1&65535,this.t[i]=0,this.kind[i]=e,this.count[i]=1,this.radius[i]=r,this.seed[i]=oc(t,n),this.bbDirty[i]=1,this.ecount[i]=0;let a=i*Ec*4;return this.pts.fill(0,a,a+Ec*4),this.pts[a]=t,this.pts[a+1]=n,this.pts[a+2]=1,this.ptsDirty=!0,i+1>this.highWater&&(this.highWater=i+1),this.live++,this.animating++,this.dirty=!0,this.gen[i]*Cc+i}lookup(e){if(e<0)return-1;let t=e%Cc,n=Math.floor(e/Cc);return t<this.capacity&&this.gen[t]===n&&this.state[t]===vc?t:-1}setPoint(e,t,n,r,i){let a=this.lookup(e);if(a<0||t<0||t>=wc)return;let o=(a*Ec+t)*4,s=this.pts;(s[o]!==n||s[o+1]!==r||s[o+2]!==i)&&(s[o]=n,s[o+1]=r,s[o+2]=i,this.bbDirty[a]=1,this.ptsDirty=!0,this.dirty=!0)}setCount(e,t){let n=this.lookup(e);if(n<0)return;let r=t<1?1:t>wc?wc:t;this.count[n]!==r&&(this.count[n]=r,this.bbDirty[n]=1,this.dirty=!0)}setErase(e,t,n,r,i){let a=this.lookup(e);if(a<0||t<0||t>=Tc)return;let o=(a*Ec+wc+t)*4,s=this.pts;(s[o]!==n||s[o+1]!==r||s[o+2]!==i)&&(s[o]=n,s[o+1]=r,s[o+2]=i,this.ptsDirty=!0,this.dirty=!0)}setEraseCount(e,t){let n=this.lookup(e);if(n<0)return;let r=t<0?0:t>Tc?Tc:t;this.ecount[n]!==r&&(this.ecount[n]=r,this.dirty=!0)}remove(e){let t=this.lookup(e);t<0||(this.t[t]<bc&&this.animating--,this.state[t]=yc,this.t[t]=0,this.animating++,this.dirty=!0)}clear(){for(let e=0;e<this.highWater;e++)this.state[e]!==_c&&(this.state[e]=_c,this.pool.release(e)),this.tileN[e]=0;this.live=0,this.animating=0,this.highWater=0,this.tiles=0,this.root.count=0}update(e){if(this.animating<=0&&!this.dirty)return;let t=e.dt,n=this.decB,r=this.layoutDirty;for(let e=0;e<this.highWater;e++){let i=this.state[e];if(i===_c)continue;let a=1,o=1;if(i===vc){if(this.t[e]<bc){this.t[e]+=t;let n=Math.min(1,this.t[e]/bc);a=1-(1-n)*(1-n),n>=1&&this.animating--}}else{this.t[e]+=t;let n=Math.min(1,this.t[e]/Sc);if(o=1-n*n,n>=1){this.state[e]=_c,this.pool.release(e),this.animating--,this.live--,this.tileN[e]=0,r=!0;continue}}let s=e*4;n[s]=this.seed[e],n[s+1]=xc+.4*a,n[s+2]=o,n[s+3]=this.ecount[e],this.bbDirty[e]===1&&(this.bbDirty[e]=0,this.computeTiles(e),r=!0)}for(;this.highWater>0&&this.state[this.highWater-1]===_c;)this.highWater--;r?this.writeTiles():this.writeAnimation(),this.ptsDirty&&=(this.tex.needsUpdate=!0,!1),this.dirty=!1,this.layoutDirty=!1}computeTiles(e){let t=this.pts,n=e*Ec*4,r=this.radius[e],i=this.count[e],a=t[n],o=t[n+1],s=a-r*Oc,c=a+r*Oc,l=o-r*Oc,u=o+r*Oc;for(let e=1;e<i;e++){let i=t[n+e*4],a=t[n+e*4+1],o=r*t[n+e*4+2]*Dc;i-o<s&&(s=i-o),i+o>c&&(c=i+o),a-o<l&&(l=a-o),a+o>u&&(u=a+o)}let d=Mc*r+Nc,f=r*Pc+d+Fc,p=Math.max(1,Math.min(Ac,Math.ceil((c-s)/kc))),m=Math.max(1,Math.min(Ac,Math.ceil((u-l)/kc))),h=(c-s)/p,g=(u-l)/m,_=Ic,v=0;for(let y=0;y<p;y++){let b=y===0?s:s+y*h,x=y===p-1?c:s+(y+1)*h;for(let s=0;s<m;s++){let c=s===0?l:l+s*g,p=s===m-1?u:l+(s+1)*g,h=zc(b,x,c,p,a,o)<=f,y=zc(b-_,x+_,c-_,p+_,a,o)<=f,S=wc,C=0;for(let e=0;e<i-1;e++){let i=n+e*4,a=i+4,o=r*Math.max(t[i+2],t[a+2])+d+Fc;!h&&Vc(b,x,c,p,t[i],t[i+1],t[a],t[a+1])<=o&&(h=!0),Vc(b-_,x+_,c-_,p+_,t[i],t[i+1],t[a],t[a+1])<=o&&(e<S&&(S=e),C=e+1)}if(!h)continue;let w=e*jc+v;this.tileRect[w*4]=b,this.tileRect[w*4+1]=x,this.tileRect[w*4+2]=c,this.tileRect[w*4+3]=p,this.tileSeg[w*3]=S<C?S:0,this.tileSeg[w*3+1]=S<C?C:0,this.tileSeg[w*3+2]=+!!y,v++}}this.tileN[e]=v}writeTiles(){let e=this.root.instanceMatrix.array,t=this.attrA.array,n=this.attrB.array,r=this.attrC.array,i=this.decB,a=0;for(let o=0;o<this.highWater;o++){if(this.state[o]===_c)continue;let s=.012+this.kind[o]*.003+o%4*8e-4,c=this.tileN[o];for(let l=0;l<c;l++){let c=(o*jc+l)*4,u=this.tileRect[c],d=this.tileRect[c+1],f=this.tileRect[c+2],p=this.tileRect[c+3],m=a*16;e[m]=(d-u)*.5,e[m+10]=(p-f)*.5,e[m+12]=(d+u)*.5,e[m+13]=s,e[m+14]=(p+f)*.5;let h=a*4;t[h]=this.kind[o],t[h+1]=this.count[o],t[h+2]=this.radius[o],t[h+3]=o,n[h]=i[o*4],n[h+1]=i[o*4+1],n[h+2]=i[o*4+2],n[h+3]=i[o*4+3];let g=(o*jc+l)*3;r[h]=this.tileSeg[g],r[h+1]=this.tileSeg[g+1],r[h+2]=this.tileSeg[g+2],r[h+3]=0,this.tileOf[a]=o,a++}}this.tiles=a,this.root.count=a,Rc(this.root.instanceMatrix,this.rangeM,a*16),Rc(this.attrA,this.rangeA,a*4),Rc(this.attrB,this.rangeB,a*4),Rc(this.attrC,this.rangeC,a*4)}writeAnimation(){let e=this.attrB.array,t=this.decB;for(let n=0;n<this.tiles;n++){let r=this.tileOf[n]*4,i=n*4;e[i]=t[r],e[i+1]=t[r+1],e[i+2]=t[r+2],e[i+3]=t[r+3]}Rc(this.attrB,this.rangeB,this.tiles*4)}dispose(){this.root.geometry.dispose(),this.material.dispose(),this.tex.dispose(),this.root.dispose(),this.root.removeFromParent()}};function Rc(e,t,n){n<=0||(t.start=0,t.count=n,e.updateRanges.indexOf(t)<0&&e.updateRanges.push(t),e.needsUpdate=!0)}function zc(e,t,n,r,i,a){let o=i<e?e-i:i>t?i-t:0,s=a<n?n-a:a>r?a-r:0;return Math.sqrt(o*o+s*s)}function Bc(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>1e-12?((e-n)*o+(t-r)*s)/c:0;l=l<0?0:l>1?1:l;let u=e-n-o*l,d=t-r-s*l;return Math.sqrt(u*u+d*d)}function Vc(e,t,n,r,i,a,o,s){let c=0,l=1,u=o-i,d=s-a,f=!0;for(let o=0;o<4&&f;o++){let s=o===0?-u:o===1?u:o===2?-d:d,p=o===0?i-e:o===1?t-i:o===2?a-n:r-a;if(s===0)p<0&&(f=!1);else{let e=p/s;s<0?e>l?f=!1:e>c&&(c=e):e<c?f=!1:e<l&&(l=e)}}if(f&&c<=l)return 0;let p=Math.min(zc(e,t,n,r,i,a),zc(e,t,n,r,o,s));return p=Math.min(p,Bc(e,n,i,a,o,s),Bc(t,n,i,a,o,s)),p=Math.min(p,Bc(e,r,i,a,o,s),Bc(t,r,i,a,o,s)),p}var Hc=`
uniform sampler2D uDecalPts;
varying vec4 vDecalA;
varying vec4 vDecalB;
varying vec4 vDecalC;
#define DC_MAXP ${wc}
#define DC_MAXE ${Tc}
${mc}
float dcHash( vec2 p ) { p = fract( p * vec2( 123.34, 456.21 ) ); p += dot( p, p + 45.32 ); return fract( p.x * p.y ); }
float dcNoise( vec2 p ) {
  vec2 i = floor( p ); vec2 f = fract( p ); f = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( dcHash( i ), dcHash( i + vec2( 1.0, 0.0 ) ), f.x ), mix( dcHash( i + vec2( 0.0, 1.0 ) ), dcHash( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
}
vec3 dcLin( vec3 srgb ) { return pow( srgb, vec3( 2.2 ) ); }
`,Uc=`
{
  vec2 wp = vStylWorld.xz;
  float isIce = vDecalA.x;
  float R = vDecalA.z;
  int row = int( vDecalA.w + 0.5 );
  float seed = vDecalB.x;
  float spread = vDecalB.y;
  float fade = vDecalB.z;

  vec4 p0 = texelFetch( uDecalPts, ivec2( 0, row ), 0 );
  vec2 q = wp - p0.xy;
  // the shape is world/streakShape.ts (the gameplay patch samples the same distance). PERF: this tile only tests the
  // trail segments [s0, s1) and the splat when they can reach it (the rest cannot be the minimum anywhere it matters)
  int s0 = int( vDecalC.x + 0.5 );
  int s1 = int( vDecalC.y + 0.5 );
  float d = vDecalC.z > 0.5 ? stSplatSd( q, R, seed, spread * fade, spread, fade ) : 1e4;
  vec4 pa = s0 == 0 ? p0 : texelFetch( uDecalPts, ivec2( s0, row ), 0 );
  for ( int j = 0; j < DC_MAXP - 1; j++ ) {
    if ( s0 + j >= s1 ) break;
    vec4 pb = texelFetch( uDecalPts, ivec2( s0 + j + 1, row ), 0 );
    vec2 ab = pb.xy - pa.xy;
    float h = clamp( dot( wp - pa.xy, ab ) / max( dot( ab, ab ), 1e-6 ), 0.0, 1.0 );
    d = min( d, length( wp - pa.xy - ab * h ) - R * mix( pa.z, pb.z, h ) * fade );
    pa = pb;
  }
  d += stWobble( q, R, seed );
  // the Squeegee's wipe discs (gameplay/decalField.ts cuts the same ones)
  int ecnt = int( vDecalB.w + 0.5 );
  for ( int e = 0; e < DC_MAXE; e++ ) {
    if ( e >= ecnt ) break;
    vec4 pe = texelFetch( uDecalPts, ivec2( DC_MAXP + e, row ), 0 );
    d = max( d, pe.z - length( wp - pe.xy ) );
  }

  float aa = max( fwidth( d ), 1e-4 );
  vec2 g = vec2( dFdx( d ), dFdy( d ) );
  float inside = 1.0 - smoothstep( -aa * 0.6, aa * 0.9, d );
  if ( inside < 0.004 ) discard;
  float depth = clamp( -d / ( R * 0.8 ), 0.0, 1.0 );
  float up = clamp( g.y / max( length( g ), 1e-5 ), 0.0, 1.0 );
  float rim = 1.0 - smoothstep( aa * 1.2, aa * 2.8, -d );
  float broken = step( 0.38, dcNoise( wp * 4.0 + seed * 19.0 ) );
  vec3 col;
  float alpha;
  if ( isIce < 0.5 ) {
    col = mix( dcLin( vec3( 0.133, 0.078, 0.184 ) ), dcLin( vec3( 0.212, 0.133, 0.306 ) ), smoothstep( 0.0, 0.5, depth ) );
    col = mix( col, dcLin( vec3( 0.298, 0.2, 0.408 ) ), smoothstep( 0.45, 1.0, depth ) * 0.8 );
    // the sky in the wet splat: one soft lavender smear on its screen-top side (north = up), like the old bitmap's
    float refl = ( 1.0 - smoothstep( 0.3, 1.0, length( ( q - vec2( -0.12, -0.33 ) * R ) / ( vec2( 0.57, 0.22 ) * R ) ) ) ) * smoothstep( 0.1, 0.35, depth );
    col = mix( col, dcLin( vec3( 0.494, 0.455, 0.784 ) ), refl * 0.45 );
    float stroke = smoothstep( 0.16 * R - 0.02 * R, 0.16 * R, -d ) * ( 1.0 - smoothstep( 0.2 * R, 0.2 * R + 0.02 * R, -d ) );
    col = mix( col, dcLin( vec3( 0.957, 0.925, 1.0 ) ), stroke * smoothstep( 0.5, 0.8, up ) * broken * 0.9 );
    col = mix( col, dcLin( vec3( 0.07, 0.04, 0.11 ) ), rim * 0.85 );
    alpha = 0.97;
  } else {
    col = mix( dcLin( vec3( 0.361, 0.69, 0.839 ) ), dcLin( vec3( 0.769, 0.933, 0.98 ) ), smoothstep( 0.0, 1.0, depth ) );
    float planes = floor( dcNoise( wp * 1.6 + seed * 13.0 ) * 5.0 ) / 5.0;
    col = mix( col, dcLin( vec3( 0.93, 0.99, 1.0 ) ), clamp( ( planes - 0.45 ) * 1.6, 0.0, 0.5 ) );
    float crack = 1.0 - smoothstep( 0.0, 0.016, abs( dcNoise( wp * 2.4 + seed * 7.0 ) - 0.5 ) );
    col = mix( col, dcLin( vec3( 0.18, 0.5, 0.63 ) ), crack * step( 0.15, depth ) * 0.8 );
    float stroke = smoothstep( 0.1 * R - 0.02 * R, 0.1 * R, -d ) * ( 1.0 - smoothstep( 0.14 * R, 0.14 * R + 0.02 * R, -d ) );
    float hi = stroke * smoothstep( 0.5, 0.8, up ) * broken;
    col = mix( col, dcLin( vec3( 0.94, 0.99, 1.0 ) ), hi );
    col = mix( col, dcLin( vec3( 0.118, 0.408, 0.533 ) ), rim );
    // thin glass: the grass reads through the fill, the ink rim and the highlight stay crisp
    alpha = max( 0.3 + 0.1 * ( planes + crack * 0.5 ), max( rim * 0.95, hi * 0.85 ) );
  }
  diffuseColor = vec4( col, alpha * inside );
}
`;function Wc(e,t){return{uCupR:{value:e},uCupDepth:{value:t},uCupAO:{value:1.5},uBand:{value:new Ve(.07,.4)},uSoil:{value:new z(5914672)},uLiner:{value:new z(9075306)},uWallDeep:{value:new z(1842970)},uFloor:{value:new z(Et.cupInside)},uPoleCol:{value:new z(Et.pole)},uPoleA:{value:new V(0,1,0)},uPoleB:{value:new V(0,-1,0)},uPoleR:{value:.055}}}var Gc=`
varying vec3 vCupP;
varying vec3 vCupCam;
`,Kc=`
{
  // The whole hole scales with the Smaller Hole level (and the title's giant O): the ray-cast runs in the hole's own
  // UNSCALED units (uCupR, depth, bands, pole are authored there), so the wall meets the rim at every hole size.
  vec3 cupC = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float cupS = max(length(modelMatrix[0].xyz), 1e-4);
  vCupP = ((modelMatrix * vec4(transformed, 1.0)).xyz - cupC) / cupS;
  vCupCam = (cameraPosition - cupC) / cupS;
}
`,qc=`
varying vec3 vCupP;
varying vec3 vCupCam;
uniform float uCupR;
uniform float uCupDepth;
uniform float uCupAO;
uniform vec2 uBand;
uniform vec3 uSoil;
uniform vec3 uLiner;
uniform vec3 uWallDeep;
uniform vec3 uFloor;
uniform vec3 uPoleCol;
uniform vec3 uPoleA;
uniform vec3 uPoleB;
uniform float uPoleR;

// Ray / capsule (Inigo Quilez). Returns t or -1.
float cupCapsule(vec3 ro, vec3 rd, vec3 pa, vec3 pb, float r) {
  vec3 ba = pb - pa;
  vec3 oa = ro - pa;
  float baba = dot(ba, ba);
  float bard = dot(ba, rd);
  float baoa = dot(ba, oa);
  float rdoa = dot(rd, oa);
  float oaoa = dot(oa, oa);
  float a = baba - bard * bard;
  float b = baba * rdoa - baoa * bard;
  float c = baba * oaoa - baoa * baoa - r * r * baba;
  float h = b * b - a * c;
  if (h >= 0.0 && abs(a) > 1e-6) {
    float t = (-b - sqrt(h)) / a;
    float y = baoa + t * bard;
    if (y > 0.0 && y < baba) return t;
    vec3 oc = (y <= 0.0) ? oa : ro - pb;
    b = dot(rd, oc);
    c = dot(oc, oc) - r * r;
    h = b * b - c;
    if (h > 0.0) return -b - sqrt(h);
  }
  return -1.0;
}

// ANIME: the interior is PAINTED, not lit: deep indigo-black (#10142a) everywhere except one
// crisp lit crescent on the wall facing the sun (light only reaches the top band of the far
// wall), with a dark ink line where the lip meets the opening. Returned as emissive, so the
// cup never picks up sun / flood light and stays the darkest value on the field.
vec3 cupInterior() {
  vec3 ro = vec3(vCupP.x, 0.0, vCupP.z);
  vec3 rd = normalize(vCupP - vCupCam);
  // Inner wall: the one positive root of |ro.xz + t rd.xz| = R (ro is inside).
  float a = max(dot(rd.xz, rd.xz), 1e-6);
  float b = dot(ro.xz, rd.xz);
  float c = dot(ro.xz, ro.xz) - uCupR * uCupR;
  float tw = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
  float yw = tw * rd.y;
  // Derivatives must be taken in uniform control flow (outside the branch).
  float e = clamp(fwidth(-yw), 1e-4, 0.05);
  vec2 hitXZ = ro.xz + tw * rd.xz;
  vec2 nIn = -normalize(hitXZ + 1e-5);
  vec2 sh = uSunDir.xz;
  float shl = length(sh);
  vec2 sdir = shl > 1e-4 ? sh / shl : vec2(0.0, 1.0);
  float facing = dot(nIn, sdir);
  // crescent: thick where the wall squarely faces the sun, thinning to nothing at the sides
  float lightDepth = 0.34 * sqrt(max(facing, 0.0)) * clamp(uSunDir.y * 2.5 + 0.25, 0.0, 1.0);
  const vec3 DEEP = vec3(0.0052, 0.0070, 0.0232);
  vec3 col;
  float tHit;
  if (-yw < uCupDepth) {
    float d = -yw;
    float lit = 1.0 - smoothstep(lightDepth - e * 1.2, lightDepth + e * 1.2, d);
    lit *= step(0.02, lightDepth);
    vec3 wallLit = mix(uSoil, uLiner, smoothstep(uBand.x - e, uBand.x + e, d));
    vec3 sunK = uSunColor * 0.42 + mix(uHemiGround, uHemiSky, 0.7) * 0.12;
    // a whisper of bounce right under the lip, then indigo-black
    vec3 dark = DEEP * (1.0 + 1.4 * exp(-d * 6.0));
    col = mix(dark, wallLit * sunK, lit);
    tHit = tw;
  } else {
    float tf = -uCupDepth / min(rd.y, -1e-4);
    col = DEEP * 0.75;
    tHit = tf;
  }
  // Underground part of the pole, continuing down into the cup (dark, a hint of its shape).
  float tp = cupCapsule(ro, rd, uPoleA, uPoleB, uPoleR);
  vec3 pa = uPoleB - uPoleA;
  float hseg = clamp(dot(ro - uPoleA, pa) / dot(pa, pa), 0.0, 1.0);
  if (length(ro - uPoleA - pa * hseg) < uPoleR) tp = 1e-4;
  if (tp > 0.0 && tp < tHit) {
    vec3 hp = ro + tp * rd;
    float d = max(-hp.y, 0.0);
    col = mix(DEEP * 1.6, uPoleCol * 0.12, exp(-d * 4.0));
  }
  // ink line where the lip meets the opening (pixel sized)
  float rr = length(ro.xz);
  float fw = max(fwidth(rr), 1e-4);
  float ink = smoothstep(uCupR - fw * 2.2, uCupR - fw * 1.2, rr);
  col = mix(col, vec3(0.0123, 0.0103, 0.0273), ink);
  return col;
}
`,Jc=`
diffuseColor.rgb = vec3( 0.0 );
`,Yc=`
totalEmissiveRadiance = cupInterior();
`,Xc=!1;function Zc(e,t,n,r){return e.includes(t)?e.replace(t,r?`${t}\n${n}`:`${n}\n${t}`):(Xc||(Xc=!0,console.warn(`[HoleLook] cup shader anchor "${t}" not found; interior falls back to flat colour.`)),e)}function Qc(e){let t=ja({color:16777215});t.name=`holeCupInterior`;let n=t.onBeforeCompile,r=t.customProgramCacheKey;return t.onBeforeCompile=(r,i)=>{n.call(t,r,i),Object.assign(r.uniforms,e),r.vertexShader=Zc(r.vertexShader,`#include <common>`,Gc,!0),r.vertexShader=Zc(r.vertexShader,`#include <project_vertex>`,Kc,!0);let a=r.fragmentShader.includes(`#include <color_fragment>`);r.fragmentShader=Zc(r.fragmentShader,`#include <bsdfs>`,qc,!0),a?(r.fragmentShader=Zc(r.fragmentShader,`#include <color_fragment>`,Jc,!0),r.fragmentShader=Zc(r.fragmentShader,`#include <emissivemap_fragment>`,Yc,!0)):r.fragmentShader=Zc(r.fragmentShader,`#include <map_fragment>`,`diffuseColor.rgb *= uFloor;`,!0)},t.customProgramCacheKey=()=>`${r.call(t)}|holeCup3`,t}var $c=class{nx;ny;count;restDX;restDY;pos;prev;normals;pinX;pinY;pinZ;invMass;cA;cB;cRest;cK;cCount;constructor(e,t,n,r){this.nx=e,this.ny=t,this.count=e*t,this.restDX=n/(e-1),this.restDY=r/(t-1),this.pos=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.normals=new Float32Array(this.count*3),this.pinX=new Float32Array(t),this.pinY=new Float32Array(t),this.pinZ=new Float32Array(t),this.invMass=new Float32Array(this.count);for(let n=0;n<t;n++)for(let t=0;t<e;t++)this.invMass[n*e+t]=t===0?0:1;let i=[],a=[],o=[],s=[],c=(n,r,c,l,u)=>{if(n<0||n>=e||r<0||r>=t||c<0||c>=e||l<0||l>=t)return;let d=(c-n)*this.restDX,f=(l-r)*this.restDY;i.push(r*e+n),a.push(l*e+c),o.push(Math.sqrt(d*d+f*f)),s.push(u)};for(let n=0;n<t;n++)for(let t=0;t<e;t++)c(t,n,t+1,n,1),c(t,n,t,n+1,1);for(let n=0;n<t;n++)for(let t=0;t<e;t++)c(t,n,t+1,n+1,.8),c(t+1,n,t,n+1,.8);for(let n=0;n<t;n++)for(let t=0;t<e;t++)c(t,n,t+2,n,.35),c(t,n,t,n+2,.35);this.cA=new Uint16Array(i),this.cB=new Uint16Array(a),this.cRest=new Float32Array(o),this.cK=new Float32Array(s),this.cCount=i.length}get constraintCount(){return this.cCount}reset(){let{nx:e,ny:t,pos:n,prev:r}=this;for(let i=0;i<t;i++)for(let t=0;t<e;t++){let a=(i*e+t)*3;n[a]=r[a]=this.pinX[i]+t*this.restDX,n[a+1]=r[a+1]=this.pinY[i],n[a+2]=r[a+2]=this.pinZ[i]}el(n,e,t,this.normals)}step(e,t){let{nx:n,ny:r,pos:i,prev:a,normals:o,invMass:s}=this,c=e*e,l=1/e,u=n-1,d=t.damping;for(let f=0;f<r;f++)for(let r=0;r<n;r++){let p=f*n+r,m=p*3;if(s[p]===0){a[m]=i[m],a[m+1]=i[m+1],a[m+2]=i[m+2],i[m]=this.pinX[f],i[m+1]=this.pinY[f],i[m+2]=this.pinZ[f];continue}let h=i[m],g=i[m+1],_=i[m+2],v=(h-a[m])*l,y=(g-a[m+1])*l,b=(_-a[m+2])*l,x=t.airX-v,S=t.airY-y,C=t.airZ-b,w=o[m],T=o[m+1],E=o[m+2],D=(x*w+S*T+C*E)*t.normalDrag,O=r/u,k=t.flutterAmp*O*Math.sin(r*t.flutterK-t.flutterPhase+f*.32),A=t.airDrag*x+(D+k)*w+t.frameAX,j=t.airDrag*S+(D+k)*T-t.gravity,ee=t.airDrag*C+(D+k)*E+t.frameAZ;a[m]=h,a[m+1]=g,a[m+2]=_,i[m]=h+v*e*d+A*c,i[m+1]=g+y*e*d+j*c,i[m+2]=_+b*e*d+ee*c}let{cA:f,cB:p,cRest:m,cK:h,cCount:g}=this;for(let e=0;e<t.iterations;e++)for(let e=0;e<g;e++){let t=f[e],n=p[e],r=s[t],a=s[n],o=r+a;if(o===0)continue;let c=t*3,l=n*3,u=i[l]-i[c],d=i[l+1]-i[c+1],g=i[l+2]-i[c+2],_=u*u+d*d+g*g;if(_<1e-12)continue;let v=Math.sqrt(_),y=(v-m[e])/(v*o)*h[e];i[c]+=u*y*r,i[c+1]+=d*y*r,i[c+2]+=g*y*r,i[l]-=u*y*a,i[l+1]-=d*y*a,i[l+2]-=g*y*a}let _=t.groundY;for(let e=0;e<this.count;e++){let t=e*3+1;i[t]<_&&(i[t]=_)}el(i,n,r,o),Number.isFinite(i[(this.count-1)*3])||this.reset()}};function el(e,t,n,r){for(let i=0;i<n;i++){let a=i>0?i-1:i,o=i<n-1?i+1:i;for(let n=0;n<t;n++){let s=n>0?n-1:n,c=n<t-1?n+1:n,l=(i*t+s)*3,u=(i*t+c)*3,d=(a*t+n)*3,f=(o*t+n)*3,p=e[u]-e[l],m=e[u+1]-e[l+1],h=e[u+2]-e[l+2],g=e[f]-e[d],_=e[f+1]-e[d+1],v=e[f+2]-e[d+2],y=m*v-h*_,b=h*g-p*v,x=p*_-m*g,S=Math.sqrt(y*y+b*b+x*x);S>1e-9?(y/=S,b/=S,x/=S):(y=0,b=0,x=-1);let C=(i*t+n)*3;r[C]=y,r[C+1]=b,r[C+2]=x}}}function tl(e){let t=new je(e,40);return t.rotateX(-Math.PI/2),t.deleteAttribute(`uv`),t}function nl(e,t,n){let r=[new Ve(e+t*1.05,.004),new Ve(e+t*.9,n*.55),new Ve(e+t*.62,n*.95),new Ve(e+t*.3,n),new Ve(e+t*.05,n*.8),new Ve(e-t*.08,n*.25),new Ve(e-t*.12,0)],i=new Ae(r,48);return i.deleteAttribute(`uv`),i}function rl(e,t,n,r,i=48,a=0){let o=[[e,.5,.85],[t,1,1],[n,1,1],[r,1,0]],s=a>0?Math.max(1,Math.round(i/a)):0,c=[],l=[],u=[],d=[],f=0;for(let e=0;e<i;e++){let t=e/i*Math.PI*2,n=(e+1)/i*Math.PI*2,r=s===0?1:Math.floor(e/s)%2==0?1.04:.965,a=Math.cos(t),p=Math.sin(t),m=Math.cos(n),h=Math.sin(n);for(let e=0;e<o.length-1;e++){let[t,n,i]=o[e],[s,g,_]=o[e+1],v=e===0?1:r,y=r;c.push(a*t,0,p*t,m*t,0,h*t,a*s,0,p*s,m*s,0,h*s);let b=n*v,x=g*y;l.push(b,b,b,i,b,b,b,i,x,x,x,_,x,x,x,_);for(let e=0;e<4;e++)u.push(0,1,0);d.push(f,f+1,f+2,f+1,f+3,f+2),f+=4}}let p=new Le;return p.setAttribute(`position`,new I(new Float32Array(c),3)),p.setAttribute(`normal`,new I(new Float32Array(u),3)),p.setAttribute(`color`,new I(new Float32Array(l),4)),p.setIndex(d),p}function il(e,t,n,r=48){let i=[e,t,n],a=[0,1,0],o=[],s=[],c=[];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,n=Math.cos(t),c=Math.sin(t);for(let e=0;e<3;e++)o.push(n*i[e],0,c*i[e]),s.push(1,1,1,a[e])}for(let e=0;e<r;e++)for(let t=0;t<2;t++){let n=e*3+t,r=(e+1)*3+t;c.push(n,r,n+1,r,r+1,n+1)}let l=new Le;return l.setAttribute(`position`,new I(new Float32Array(o),3)),l.setAttribute(`color`,new I(new Float32Array(s),4)),l.setIndex(c),l}function al(e,t,n,r=1){let i=e+t,a=new Oe(n*.82,n,i,8,r,!0);a.translate(0,i/2-t,0);let o=new Se(n*1.55,10,7);o.translate(0,e+n*.6,0),a.deleteAttribute(`uv`),o.deleteAttribute(`uv`);let s=a.getAttribute(`position`).count,c=zn([a,o],!1);if(a.dispose(),o.dispose(),!c)throw Error(`[HoleLook] pole merge failed`);return c.userData.shaftCount=s,c}function ol(e,t){let n=e*t,r=new Le,i=new I(new Float32Array(n*3),3),a=new I(new Float32Array(n*3),3);i.setUsage(R),a.setUsage(R),r.setAttribute(`position`,i),r.setAttribute(`normal`,a);let o=new Float32Array(n*3);for(let n=0;n<t;n++)for(let r=0;r<e;r++){let i=r/(e-1),a=n===t-1||n===0?.94:1,s=(.86+.14*Math.min(1,i*3))*a,c=(n*e+r)*3;o[c]=o[c+1]=o[c+2]=s}r.setAttribute(`color`,new I(o,3));let s=new Float32Array(n);for(let n=0;n<t;n++)for(let r=0;r<e;r++){let i=r===e-1||(n===0||n===t-1)&&r>0;s[n*e+r]=+!!i}r.setAttribute(`aEdge`,new I(s,1));let c=new Float32Array(n*2);for(let n=0;n<t;n++)for(let r=0;r<e;r++)c[(n*e+r)*2]=r/(e-1),c[(n*e+r)*2+1]=n/(t-1);return r.setAttribute(`aFlagUv`,new I(c,2)),r.setIndex(sl(e,t)),r}function sl(e,t,n=0){let r=[];for(let i=0;i<t-1;i++)for(let t=0;t<e-1;t++){let a=n+i*e+t,o=a+1,s=a+e,c=s+1;r.push(a,o,s,o,c,s)}return r}function cl(){return{windSpeed:4.2,windDirDeg:14,gustiness:.35,crossBias:.55,trailGain:1.6,trailBreeze:.25,airDrag:1.9,normalDrag:3.2,flutter:.6,clothGravity:9.8,clothDamping:.993,inertia:.75,clothIterations:4,leanVel:.005,leanAccel:.0012,leanMax:.42,leanTowardCamera:.45,leanAwayCamera:.85,poleFreq:1.8,poleDamping:.2,idleSway:.025,bendVel:.075,bendAccel:.0075,bendMax:.85,bendFreq:2.7,bendDamping:.26,bendCurve:1.4,sadDuration:2,sadRecover:1.5,slumpAngle:.36,sinkDepth:.4,halfMast:.6,sighPeriod:1.7,sighLift:.16,sadWind:.3,hopHeight:.45,hopGravity:28,hopGroundTime:.07,danceLean:.3,twirlEvery:2,happyWind:2.1,waveSweepDeg:72,cupDepth:1.15,cupAO:1.5,shadowOpacity:.22,collarOpacity:.9,collarLift:.07,shadowEdgeFade:.8}}var ll=.8,ul=1/120,dl=8,fl=Math.PI*2,pl=Math.PI/180,ml=.72,hl=90,gl=.6,_l=2.5,vl=.05,yl=12,bl=16,xl=1.1;function Sl(e,t,n,r,i,a,o,s){let c=(e*i+t*o)*(1-n);s[0]=i*n-t*a*r+e*c,s[1]=a*n+(t*i-e*o)*r,s[2]=o*n+e*a*r+t*c}function Cl(e,t,n){let r=Math.sqrt(e*e+t*t);r<1e-6?(n[0]=0,n[1]=0,n[2]=1,n[3]=0):(n[0]=t/r,n[1]=-e/r,n[2]=Math.cos(r),n[3]=Math.sin(r))}var wl=.024,Tl=.027,El=`uniform float uHinHeroExpo;
uniform float uHinHeroKeep;
uniform float uHinFlagGlow;
uniform float uHinFloor;
uniform float uHinCoolRim;
uniform float uHinSad;
varying float vHinEdge;
varying float vHinIn;
varying vec2 vHinUv;`,Dl=`
{
  const vec3 HERO_LUM = vec3( 0.2126, 0.7152, 0.0722 );
  const vec3 HERO_LIT = vec3( 1.0, 0.6445, 0.0137 );     // #ffd21f
  vec3 ambF = mix( uHemiGround, uHemiSky, 0.72 ) * uShadeTint * 1.3 + worldFlood( vStylWorld.xz ) * 0.7;
  float kAmb = dot( ambF, HERO_LUM ) * RECIPROCAL_PI;
  float kSun = dot( uSunColor, HERO_LUM ) * RECIPROCAL_PI;
#ifdef HIN_FLAG_GLOW
  // HUE-LOCKED two-tone cloth: light changes the VALUE, never the hue. Lit #ffd21f (48 deg),
  // shade #e8b016 (44 deg: the same yellow ~0.72 the luminance, a hair warmer - never the
  // orange / ochre that read amber at golden hour and night). The scene light level only
  // scales 65 % of it (35 % is the flag's own colour), with a night floor, so the hero is the
  // same yellow at midday, golden hour and under the floodlights.
  const vec3 HERO_SHADE = vec3( 0.807, 0.434, 0.008 );
  float fNdl = dot( normal, directionalLights[ 0 ].direction );
  float fLit = smoothstep( -0.04, 0.06, fNdl + 0.12 ) * stylShadow;
  vec3 hue = mix( HERO_SHADE, HERO_LIT, fLit );
  // thin cloth: backlit (sun behind it, as seen from the camera) it glows through
  float trans = max( dot( normalize( -vViewPosition ), ( viewMatrix * vec4( uSunDir, 0.0 ) ).xyz ), 0.0 );
  hue = mix( hue, HERO_LIT, ( 1.0 - fLit ) * smoothstep( 0.2, 0.7, trans ) * 0.6 );
  float k = max( kAmb + kSun * mix( 0.6, 1.0, fLit ), uHinFloor );
  vec3 col = hue * mix( k / 0.674, 1.0, 0.35 ) * uHinHeroExpo * ( 1.0 - 0.15 * uHinSad );
  // the body stays below the bloom threshold: only the rim blooms
  col *= min( 1.0, 1.42 / max( col.r, 1e-4 ) );
  // constant pixel-width edge bands from the cloth uv: ink all round (~2.5 px, deep warm
  // brown), then a ~2 px warm-white luminous rim inside it on the FREE edges only
  vec2 fw = max( fwidth( vHinUv ), vec2( 1e-4 ) );
  float dFree = min( ( 1.0 - vHinUv.x ) / fw.x, min( vHinUv.y / fw.y, ( 1.0 - vHinUv.y ) / fw.y ) );
  float dPole = vHinUv.x / fw.x;
  float dInk = min( dFree, dPole );
  float inkE = 1.0 - smoothstep( 2.0, 3.0, dInk );
  float glowE = ( 1.0 - smoothstep( 4.4, 5.4, dFree ) ) * ( 1.0 - inkE );
  vec3 glowCol = vec3( 1.0, 0.9, 0.62 );
  col = mix( col, glowCol * ( 1.0 + 1.6 * uHinFlagGlow * ( 1.0 - 0.75 * uHinSad ) ) * min( k / 0.674, 1.4 ), glowE * min( uHinFlagGlow, 1.0 ) );
  // (no fresnel tint on the cloth: it streaked the yellow at golden hour; the rim does the
  // separation) - thin fold lines only where the cloth turns fully edge-on to the camera
  float ndvF = abs( dot( normalize( normal ), normalize( vViewPosition ) ) );
  float fold = 1.0 - smoothstep( 0.025, 0.06, ndvF );
  const vec3 HERO_INK = vec3( 0.0423, 0.016, 0.0024 );   // #3a2208
  col = mix( col, HERO_INK, max( inkE, fold * 0.85 ) );
  outgoingLight = col;
#else
  // lip: lit yellow top / outer slope, ochre far inner lip (#c88a00); part of the bloom budget
  const vec3 LIP_SHADE = vec3( 0.5776, 0.2542, 0.0 );
  float inner = smoothstep( 0.15, -0.35, vHinIn );
  float k = max( kAmb + kSun * stylShadow, uHinFloor );
  outgoingLight = mix( HERO_LIT, LIP_SHADE, inner ) * ( k / 0.674 ) * uHinHeroExpo * 1.05;
#endif
}
#include <opaque_fragment>`,Ol=`
attribute vec4 color;
varying vec4 vCol;
void main() {
  vCol = color;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,kl=`
uniform vec3 uTint;
uniform float uOpacity;
varying vec4 vCol;
void main() {
  float a = clamp( vCol.a * uOpacity, 0.0, 1.0 );
  vec3 k = uTint * vCol.rgb; // ratio over the grass (1 = unchanged)
  gl_FragColor = vec4( clamp( 0.5 + 0.5 * a * ( k - 1.0 ), 0.0, 1.0 ), 1.0 );
}
`,Al=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)},jl=(e,t,n)=>e+(t-e)*n,Ml=class{root=new tt;params;rimGlow=0;rimGlowFollowsDarkness=!0;flagDayLift=.14;flagNightGlow=.45;flagGrade=0;flagGradeU={value:0};heroExposure=1;heroExpoU={value:1};heroHueKeep=.85;heroKeepU={value:.85};flagEdgeGlow=.9;flagGlowU={value:.55};heroNightFloor=.85;heroFloorU={value:0};coolRim=0;coolRimU={value:0};sadU={value:0};shadowFade=1;lampShadow=0;sunDir=new V(.45,1.3,.75).normalize();materials;cupUniforms;cupR;poleH;poleR;under;attachTop;rig=new tt;rigScale=1;fanDrop=0;fanSpin=0;fanWind=0;cloth;hoistX;hoistZ;flagPos;flagNrm;shadowPos;shadowMesh;halo;env;axis=new V;vx=0;vz=0;ax=0;az=0;firstFrame=!0;acc=0;simT=0;lx=0;lz=0;lvx=0;lvz=0;hy=0;hv=0;sy=1;syv=0;plx=0;plz=0;phy=0;psy=1;airborne=!1;bx=0;bz=0;bvx=0;bvz=0;pbx=0;pbz=0;cvX=new Float64Array(13);cvY=new Float64Array(13);cvZ=new Float64Array(13);cqX=new Float64Array(13);cqY=new Float64Array(13);cqZ=new Float64Array(13);chordAX=0;chordAZ=0;v3=new Float64Array(3);vP=new Float64Array(3);fChord=new Float64Array(4);fInv=new Float64Array(4);fSeg=new Float64Array(4);polePos;poleNrm;poleRestP;poleRestN;poleShaft;mode=`idle`;hold=!1;sadT=0;recoverT=-1;happyT=0;sadW=0;happyW=0;slumpSide=-1;slumpX=1;slumpZ=0;dropLin=0;drop=0;groundT=0;hopCount=0;danceSide=1;twirlT=-1;twirlTurns=1;twirlDur=gl;windAng=0;victory=!1;crouch=0;landings=0;constructor(e={},t={}){this.params={...cl(),...t};let n=this.params;this.root.name=`holeLook`,this.cupR=e.cupRadius??.8,this.poleH=e.poleHeight??2.9,this.poleR=e.poleRadius??.068;let r=e.flagWidth??1.4,i=e.flagHeight??.9,a=Math.max(3,e.clothCols??9),o=Math.max(3,e.clothRows??6);this.under=n.cupDepth,this.attachTop=this.poleH-.04,this.windAng=n.windDirDeg*pl;let s=this.cupR,c=.13,l=s-c*.12;this.cupUniforms=Wc(l,n.cupDepth);let u=Qc(this.cupUniforms),d=new F(tl(s+.01),u);d.name=`holeCup`,d.position.y=.02;let f=ja({color:Et.cupRim,emissive:Et.cupRim,emissiveIntensity:0});f.name=`holeLip`,this.patchHero(f,null);let p=new F(nl(s,c,vl),f);p.name=`holeLip`;let m=new oe({name:`holeCollar`,uniforms:{uTint:{value:new z(1,1,1)},uOpacity:{value:n.collarOpacity}},vertexShader:Ol,fragmentShader:kl,transparent:!0,depthWrite:!1,blending:5,blendEquation:100,blendSrc:208,blendDst:202,blendSrcAlpha:200,blendDstAlpha:201}),h=new F(rl(s+c*.7,s+c+.12,s+.62,s+1.1,48,0),m);h.name=`holeCollar`,h.position.y=.006,h.renderOrder=ma.collar;let g=new $e({color:16773304,vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1});g.name=`holeHalo`,this.halo=new F(il(s+c*.9,s+c*1.4,s+.8),g),this.halo.name=`holeHalo`,this.halo.position.y=Tl,this.halo.renderOrder=ma.halo,this.halo.visible=!1;let _=ja({color:Et.pole,emissive:Et.pole,emissiveIntensity:0});_.name=`holePole`;let v=al(this.poleH,this.under,this.poleR,bl);this.polePos=v.getAttribute(`position`),this.poleNrm=v.getAttribute(`normal`),this.polePos.setUsage(R),this.poleNrm.setUsage(R),this.poleRestP=this.polePos.array.slice(),this.poleRestN=this.poleNrm.array.slice(),this.poleShaft=v.userData.shaftCount??this.polePos.count,v.boundingSphere=new D(new V(0,(this.poleH-this.under)*.5,0),(this.poleH+this.under)*.5+.8);let y=new F(v,_);y.name=`holePole`,this.rig.name=`holePoleRig`,this.rig.add(y),this.cloth=new $c(a,o,r,i),this.hoistX=new Float32Array(o).fill(1),this.hoistZ=new Float32Array(o);let b=ol(a,o);b.boundingSphere=new D(new V(0,this.poleH*.6,0),this.poleH+r+.5),this.flagPos=b.getAttribute(`position`),this.flagNrm=b.getAttribute(`normal`);let x=ja({color:Et.flag,vertexColors:!0,side:2,emissive:Et.flag,emissiveIntensity:0});x.name=`holeFlag`,this.patchHero(x,this.flagGradeU);let S=new F(b,x);S.name=`holeFlag`;let C=new Le,w=a*o+4;this.shadowPos=new I(new Float32Array(w*3),3),this.shadowPos.setUsage(R),C.setAttribute(`position`,this.shadowPos);let T=sl(a,o),E=a*o;T.push(E,E+2,E+1,E+1,E+2,E+3),C.setIndex(T),C.boundingSphere=new D(new V(0,0,0),this.poleH*4.5);let O=new $e({color:1060892,transparent:!0,opacity:n.shadowOpacity,depthWrite:!0,depthFunc:2,side:2,forceSinglePass:!0});O.name=`holeShadow`,this.shadowMesh=new F(C,O),this.shadowMesh.name=`holeShadow`,this.shadowMesh.renderOrder=ma.flagShadow,this.root.add(h,d,p,this.halo,this.shadowMesh,this.rig,S),this.materials={cup:u,lip:f,pole:_,flag:x,collar:m,shadow:O,halo:g},this.env={airX:0,airY:0,airZ:0,frameAX:0,frameAZ:0,gravity:n.clothGravity,airDrag:n.airDrag,normalDrag:n.normalDrag,damping:n.clothDamping,flutterAmp:0,flutterOmega:0,flutterK:.85,flutterPhase:0,iterations:n.clothIterations,groundY:.04},this.writePins(),this.cloth.reset(),this.writeVisuals(1,0)}get emotion(){return this.mode}get sadWeight(){return this.sadW}get happyWeight(){return this.happyW}setEmotion(e,t=e===`happy`){this.hold=t,e===`sad`?(this.mode!==`sad`&&this.sadW<.3&&(this.slumpSide=-this.slumpSide,this.slumpX=this.slumpSide,this.slumpZ=0),this.mode=`sad`,this.sadT=0,this.recoverT=-1,this.hv=Math.min(this.hv,-2.4),this.syv-=3,this.lvx+=this.slumpX*3.2,this.lvz+=this.slumpZ*3.2):e===`happy`?(this.mode!==`happy`&&(this.happyT=0,this.hopCount=0,this.groundT=0,this.danceSide=1),this.mode=`happy`,this.recoverT=-1):(this.mode===`sad`&&(this.recoverT=0),this.mode=`idle`)}update(e){let t=e.dt>.1?.1:e.dt<0?0:e.dt;if(this.root.position.set(e.holeX,0,e.holeZ),this.firstFrame)this.firstFrame=!1,this.vx=e.holeVX,this.vz=e.holeVZ;else if(t>1e-5){let n=(e.holeVX-this.vx)/t,r=(e.holeVZ-this.vz)/t,i=Math.sqrt(n*n+r*r);i>hl&&(n*=hl/i,r*=hl/i);let a=1-Math.exp(-t*14);this.ax+=(n-this.ax)*a,this.az+=(r-this.az)*a,this.vx=e.holeVX,this.vz=e.holeVZ}this.acc+=t;let n=0;for(;this.acc>=ul&&n<dl;)this.stepFixed(ul),this.acc-=ul,n++;n===dl&&this.acc>ul&&(this.acc=0),this.writeVisuals(this.acc/ul,e.darkness)}dispose(){this.root.removeFromParent(),this.root.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()});let e=this.materials;e.cup.dispose(),e.lip.dispose(),e.pole.dispose(),e.flag.dispose(),e.collar.dispose(),e.shadow.dispose(),e.halo.dispose()}stepFixed(e){let t=this.params;this.simT+=e;let n=this.simT;this.plx=this.lx,this.plz=this.lz,this.phy=this.hy,this.psy=this.sy,this.pbx=this.bx,this.pbz=this.bz,this.mode===`sad`?(this.sadT+=e,!this.hold&&this.sadT>=t.sadDuration&&(this.mode=`idle`,this.recoverT=0)):this.mode===`happy`&&(this.happyT+=e);let r=this.recoverT;this.recoverT>=0&&(this.recoverT+=e,this.recoverT>3&&(this.recoverT=-1)),this.twirlT>=0&&(this.twirlT+=e,this.twirlT>this.twirlDur&&(this.twirlT=-1));let i=+(this.mode===`sad`),a=i>this.sadW?9:3/Math.max(.2,t.sadRecover);this.sadW+=(i-this.sadW)*(1-Math.exp(-e*a));let o=+(this.mode===`happy`);this.happyW+=(o-this.happyW)*(1-Math.exp(-e*(o>this.happyW?10:3)));let s=this.sadW,c=this.happyW,l=(1-s)*(1-c),u=0;if(this.mode===`sad`&&this.sadT>.55){let e=(this.sadT-.55)/Math.max(.3,t.sighPeriod)%1;u=e<.35?Al(e/.35):1-Al((e-.35)/.5)}let d=1-.55*s,f=(t.leanVel*this.vx+t.leanAccel*this.ax)*d,p=(t.leanVel*this.vz+t.leanAccel*this.az)*d,m=Math.sqrt(f*f+p*p);m>t.leanMax&&(f*=t.leanMax/m,p*=t.leanMax/m),p*=p>0?t.leanTowardCamera:t.leanAwayCamera,f+=t.idleSway*Math.sin(n*1.3)*l,p+=t.idleSway*.6*Math.sin(n*.9+1.7)*l;let h=t.slumpAngle*(1-.32*u)*s;if(f+=this.slumpX*h,p+=this.slumpZ*h,this.mode===`sad`&&this.sadT<.6&&(f+=.13*Math.exp(-this.sadT*6)*Math.sin(this.sadT*80)),this.recoverT>=.3&&this.recoverT<1){let e=this.recoverT-.3;f+=.17*Math.sin(e/.7*Math.PI)*Math.sin(e*fl*5.5)}f+=this.danceSide*t.danceLean*c;let g=this.mode===`sad`?s*Al((this.sadT-.12)/.45):s,_=jl(t.poleFreq,.75,g)*(1+.25*c),v=jl(jl(t.poleDamping,.42,c),.8,g),y=fl*_,b=y*y,x=2*v*y;this.lvx+=(b*(f-this.lx)-x*this.lvx)*e,this.lvz+=(b*(p-this.lz)-x*this.lvz)*e,this.lx+=this.lvx*e,this.lz+=this.lvz*e;let S=Math.sqrt(this.lx*this.lx+this.lz*this.lz);S>ml&&(this.lx*=ml/S,this.lz*=ml/S,this.lvx*=.5,this.lvz*=.5);{let n=-(t.bendVel*this.vx+t.bendAccel*this.ax)*d,r=-(t.bendVel*this.vz+t.bendAccel*this.az)*d,i=Math.sqrt(n*n+r*r);i>t.bendMax&&(n*=t.bendMax/i,r*=t.bendMax/i),r*=r>0?t.leanTowardCamera:t.leanAwayCamera;let a=fl*t.bendFreq,o=a*a,s=2*t.bendDamping*a;this.bvx+=(o*(n-this.bx)-s*this.bvx)*e,this.bvz+=(o*(r-this.bz)-s*this.bvz)*e,this.bx+=this.bvx*e,this.bz+=this.bvz*e;let c=Math.sqrt(this.bx*this.bx+this.bz*this.bz);c>xl&&(this.bx*=xl/c,this.bz*=xl/c,this.bvx*=.5,this.bvz*=.5)}let C=-t.sinkDepth*s;if(r<.3&&this.recoverT>=.3&&!this.airborne&&(this.hv=2.6,this.airborne=!0),this.airborne)this.hv-=t.hopGravity*e,this.hy+=this.hv*e,this.hy<=C&&this.hv<0&&(this.hy=C,this.syv-=Math.min(-this.hv,8)*.9,this.hv=0,this.airborne=!1,this.groundT=0,this.landings++);else{if(this.mode===`happy`&&!this.victory){this.groundT+=e;let n=this.hopCount===0?.16:t.hopGroundTime;this.groundT>=n&&this.launchHop()}let n=C+t.sighLift*u*s,r=fl*jl(2.6,1,s),i=jl(.5,.85,s);this.hv+=(r*r*(n-this.hy)-2*i*r*this.hv)*e,this.hy+=this.hv*e}let w=1-.07*s+.05*u*s;if(this.airborne){let e=this.hv*.025;w+=e<-.06?-.06:e>.12?.12:e}else this.mode===`happy`&&(w-=.16+.2*this.crouch);let T=fl*3.2;this.syv+=(T*T*(w-this.sy)-.64*T*this.syv)*e,this.sy+=this.syv*e,this.sy<.6?this.sy=.6:this.sy>1.4&&(this.sy=1.4);let E=(this.mode===`sad`&&this.sadT>.15?t.halfMast:0)-this.dropLin,D=1.5*e,O=.85*e;this.dropLin+=E>D?D:E<-O?-O:E,this.drop+=(this.dropLin-this.drop)*(1-Math.exp(-e*8));let k=t.gustiness,A=k*(.55*Math.sin(n*.83+.3)+.3*Math.sin(n*2.1+1.1)+.15*Math.sin(n*5.3)),j=t.windDirDeg*pl+k*.45*Math.sin(n*.47+2),ee=jl(j,(90-this.danceSide*t.waveSweepDeg)*pl,c);this.windAng+=(ee-this.windAng)*(1-Math.exp(-e*6));let M=this.windAng;this.twirlT>=0&&(M+=fl*this.twirlTurns*Al(this.twirlT/this.twirlDur));let te=jl(1,t.sadWind,s)*jl(1,t.happyWind,c),ne=t.windSpeed*(1+A)*te,N=this.env,re=(Math.cos(j)>=0?1:-1)*t.crossBias*Math.abs(this.vz)*(1-c)*(1-s),ie=Math.sqrt(this.vx*this.vx+this.vz*this.vz),ae=1-(1-t.trailBreeze)*Al(ie/_l),oe=t.trailGain*(1-.7*s);if(N.airX=Math.cos(M)*ne*ae-this.vx*oe+re,N.airZ=-Math.sin(M)*ne*ae-this.vz*oe,N.airY=3.2*c,this.fanWind>0&&c<1){let e=this.fanWind*(1-c);N.airX+=(U.flagFan.wind-N.airX)*e,N.airZ-=N.airZ*e}N.frameAX=-this.ax*t.inertia,N.frameAZ=-this.az*t.inertia,N.gravity=t.clothGravity*(1+.3*s)*(1-.15*c),N.damping=jl(t.clothDamping,.975,s),N.airDrag=t.airDrag,N.normalDrag=t.normalDrag,N.iterations=t.clothIterations;let se=Math.sqrt(N.airX*N.airX+N.airZ*N.airZ);se>14&&(se=14),N.flutterAmp=t.flutter*(.5+.85*se)*(1-.85*s)*(1+.25*c),N.flutterOmega=fl*(1.1+.22*se)*(1+.5*c),N.flutterPhase+=N.flutterOmega*e,N.flutterPhase>1e4&&(N.flutterPhase-=fl*1e3),this.writePins(),this.cloth.step(e,N)}launchHop(){let e=this.params;this.hopCount++;let t=e.twirlEvery>0&&this.hopCount%e.twirlEvery===0,n=e.hopHeight*(t?1.4:1)*(this.hopCount===1?1.25:1);this.hv=Math.sqrt(2*e.hopGravity*n),this.airborne=!0,this.groundT=0,this.syv+=4.5,this.danceSide=-this.danceSide,t&&this.startTwirl(1,gl)}startTwirl(e,t){this.twirlT=0,this.twirlTurns=e,this.twirlDur=t}victoryHop(e,t){let n=this.params.hopGravity;this.hopCount++,this.hv=Math.sqrt(2*n*e),this.airborne=!0,this.groundT=0,this.syv+=4.5+2.5*e,this.danceSide=-this.danceSide,t>0&&this.startTwirl(t,1.8*this.hv/n)}get inAir(){return this.airborne}poleKick(e){this.bvx+=e}poleUp(e,t){let n=Math.sqrt(e*e+t*t);if(n<1e-6)return this.axis.set(0,1,0);let r=Math.sin(n)/n;return this.axis.set(e*r,Math.cos(n),t*r)}curve(e,t,n,r){let i=yl,a=this.poleH/i,o=this.params.bendCurve,s=this.cvX,c=this.cvY,l=this.cvZ,u=0,d=0,f=0;s[0]=c[0]=l[0]=0;for(let p=0;p<i;p++){let m=((p+.5)/i)**+o,h=e+n*m,g=t+r*m,_=Math.sqrt(h*h+g*g);if(_<1e-6)d+=a;else{let e=Math.sin(_)/_*a;u+=h*e,d+=Math.cos(_)*a,f+=g*e}s[p+1]=u,c[p+1]=d,l[p+1]=f}let p=Math.sqrt(u*u+f*f),m=Math.sqrt(p*p+d*d),h=Math.atan2(p,d);p<1e-6?(this.chordAX=0,this.chordAZ=0):(this.chordAX=u/p*h,this.chordAZ=f/p*h),Cl(this.chordAX,this.chordAZ,this.fChord);let g=this.fChord,_=m>1e-6?this.poleH/m:1,v=this.v3;for(let e=0;e<=i;e++)Sl(g[0],g[1],g[2],-g[3],s[e],c[e],l[e],v),this.cqX[e]=v[0],this.cqY[e]=v[1]*_,this.cqZ[e]=v[2]}poleAt(e,t){let n=yl,r=(e<0?0:e>this.poleH?this.poleH:e)*(n/this.poleH),i=Math.floor(r);i>11&&(i=11),r-=i,t[0]=this.cqX[i]+(this.cqX[i+1]-this.cqX[i])*r,t[1]=this.cqY[i]+(this.cqY[i+1]-this.cqY[i])*r,t[2]=this.cqZ[i]+(this.cqZ[i+1]-this.cqZ[i])*r}get fanK(){return 1-this.happyW}writePins(){this.curve(this.lx,this.lz,this.bx,this.bz);let e=this.cloth,t=this.fanDrop*this.fanK*(this.attachTop-e.restDY*(e.ny-1)-U.flagFan.groundClear),n=this.attachTop-(t>this.drop?t:this.drop),r=this.sy,i=1/Math.sqrt(r),a=this.fChord,o=this.v3,s=this.poleR*ll*i,c=e.pos,l=this.hoistX,u=this.hoistZ;for(let t=0;t<e.ny;t++){this.poleAt(n-t*e.restDY,o),Sl(a[0],a[1],a[2],a[3],o[0]*i,o[1]*r,o[2]*i,o);let d=(t*e.nx+2)*3,f=c[d]-o[0],p=c[d+2]-o[2],m=f*f+p*p;if(m>1e-6){let e=1/Math.sqrt(m);l[t]=f*e,u[t]=p*e}e.pinX[t]=o[0]+l[t]*s,e.pinY[t]=this.hy+o[1],e.pinZ[t]=o[2]+u[t]*s}}deformPole(e,t,n,r){let i=this.polePos.array,a=this.poleNrm.array,o=this.poleRestP,s=this.poleRestN,c=this.polePos.count,l=this.poleH,u=this.params.bendCurve,d=this.fInv,f=this.fChord;d[0]=f[0],d[1]=f[1],d[2]=f[2],d[3]=-f[3];let p=this.fSeg,m=this.v3,h=this.vP,g=-1e9;for(let f=0;f<c;f++){let c=f*3,_=o[c],v=o[c+1],y=o[c+2],b,x;if(f>=this.poleShaft?(b=l,x=v-l):v<=0?(b=0,x=v):(b=v>l?l:v,x=0),b!==g){g=b;let i=(b/l)**+u;Cl(e+n*i,t+r*i,p)}this.poleAt(b,h),Sl(p[0],p[1],p[2],p[3],_,x,y,m),Sl(d[0],d[1],d[2],d[3],m[0],m[1],m[2],m),i[c]=h[0]+m[0],i[c+1]=h[1]+m[1],i[c+2]=h[2]+m[2],Sl(p[0],p[1],p[2],p[3],s[c],s[c+1],s[c+2],m),Sl(d[0],d[1],d[2],d[3],m[0],m[1],m[2],m),a[c]=m[0],a[c+1]=m[1],a[c+2]=m[2]}this.polePos.needsUpdate=!0,this.poleNrm.needsUpdate=!0}writeVisuals(e,t){let n=e<0?0:e>1?1:e,r=jl(this.plx,this.lx,n),i=jl(this.plz,this.lz,n),a=jl(this.phy,this.hy,n),o=jl(this.psy,this.sy,n),s=1/Math.sqrt(o),c=jl(this.pbx,this.bx,n),l=jl(this.pbz,this.bz,n);this.curve(r,i,c,l),this.deformPole(r,i,c,l);let u=this.chordAX,d=this.chordAZ,f=Math.sqrt(u*u+d*d);this.rig.position.set(0,a,0),f>1e-6?this.rig.quaternion.setFromAxisAngle(this.axis.set(d/f,0,-u/f),f):this.rig.quaternion.identity(),this.rig.scale.set(s*this.rigScale,o*this.rigScale,s*this.rigScale);let p=this.poleUp(r,i),m=p.x,h=p.y,g=p.z,_=this.cupUniforms,v=o*this.rigScale;_.uPoleA.value.set(m*v*.5,a+h*v*.5,g*v*.5),_.uPoleB.value.set(-m*v*this.under,a-h*v*this.under,-g*v*this.under),_.uPoleR.value=this.poleR*s*this.rigScale*.97,_.uCupDepth.value=this.params.cupDepth,_.uCupAO.value=this.params.cupAO;let y=this.cloth,b=this.flagPos.array,x=y.count*3,S=y.pos,C=y.prev;for(let e=0;e<x;e++)b[e]=C[e]+(S[e]-C[e])*n;let w=this.fanSpin*this.fanK;if(w!==0){let e=Math.cos(w),t=Math.sin(w),n=this.poleR*ll*s,r=this.hoistX,i=this.hoistZ,a=y.nx*3;for(let o=0;o<y.ny;o++){let s=o*a,c=b[s]-r[o]*n,l=b[s+2]-i[o]*n;for(let n=s;n<s+a;n+=3){let r=b[n]-c,i=b[n+2]-l;b[n]=c+r*e+i*t,b[n+2]=l+i*e-r*t}}}el(b,y.nx,y.ny,this.flagNrm.array),this.flagPos.needsUpdate=!0,this.flagNrm.needsUpdate=!0;let T=this.params,E=this.sunDir,D=T.shadowOpacity*(1-(t<0?0:t>1?1:t));if(D*=this.shadowFade<0?0:this.shadowFade>1?1:this.shadowFade,this.lampShadow>D&&(D=this.lampShadow),D>.004&&T.shadowEdgeFade>0){let e=(y.nx-1)*3,t=(y.ny-1)*y.nx*3,n=t+e,r=b[e]+b[n]-b[0]-b[t],i=b[e+1]+b[n+1]-b[1]-b[t+1],a=b[e+2]+b[n+2]-b[2]-b[t+2],o=b[t]+b[n]-b[0]-b[e],s=b[t+1]+b[n+1]-b[1]-b[e+1],c=b[t+2]+b[n+2]-b[2]-b[e+2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.sqrt(l*l+u*u+d*d),p=f>1e-6?Math.abs(l*E.x+u*E.y+d*E.z)/f:1;D*=1-T.shadowEdgeFade*(1-Al((p-.1)/.32))}if(this.shadowMesh.visible=D>.004,this.shadowMesh.visible){this.materials.shadow.opacity=D;let e=E.y>.25?E.y:.25,t=E.x/e,n=E.z/e,r=this.shadowPos.array;for(let e=0;e<x;e+=3){let i=b[e+1];r[e]=b[e]-t*i,r[e+1]=wl,r[e+2]=b[e+2]-n*i}let i=h>.2?-a/h:0,c=m*i,l=g*i,u=this.fChord,d=this.v3;Sl(u[0],u[1],u[2],u[3],this.cqX[yl]*s,(this.cqY[yl]+this.poleR*1.6)*o,this.cqZ[yl]*s,d);let f=d[0],p=a+d[1],_=d[2],v=f-t*p,y=_-n*p,S=v-c,C=y-l,w=Math.sqrt(S*S+C*C),T=this.poleR*s*1.15;w>1e-4?(S/=w,C/=w):(S=0,C=-1);let O=-C*T,k=S*T,A=x;r[A++]=c+O,r[A++]=wl,r[A++]=l+k,r[A++]=c-O,r[A++]=wl,r[A++]=l-k,r[A++]=v+O,r[A++]=wl,r[A++]=y+k,r[A++]=v-O,r[A++]=wl,r[A]=y-k,this.shadowPos.needsUpdate=!0}let O=t<0?0:t>1?1:t,k=this.rimGlow*(this.rimGlowFollowsDarkness?O:1),A=this.materials;A.lip.emissiveIntensity=k*.9,A.pole.emissiveIntensity=k*.35,A.flag.emissiveIntensity=this.flagDayLift*(1-O)+k*this.flagNightGlow,this.flagGradeU.value=this.flagGrade,this.heroExpoU.value=this.heroExposure,this.heroKeepU.value=this.heroHueKeep,this.flagGlowU.value=this.flagEdgeGlow,this.heroFloorU.value=this.heroNightFloor*O,this.coolRimU.value=this.coolRim,this.sadU.value=this.sadW,A.halo.opacity=k*.55,this.halo.visible=k>.002;let j=A.collar.uniforms;j.uOpacity.value=T.collarOpacity;let ee=T.collarLift;j.uTint.value.setRGB(1+ee*.8,1+ee,1+ee*.2)}patchHero(e,t){let n=this.heroExpoU,r=this.heroKeepU,i=this.flagGlowU,a=this.heroFloorU,o=this.coolRimU,s=this.sadU,c=e.onBeforeCompile,l=e.customProgramCacheKey;e.toneMapped=!1,e.onBeforeCompile=(l,u)=>{c.call(e,l,u),l.uniforms.uHinHeroExpo=n,l.uniforms.uHinHeroKeep=r,l.uniforms.uHinFlagGlow=i,l.uniforms.uHinFloor=a,l.uniforms.uHinCoolRim=o,l.uniforms.uHinSad=s,l.vertexShader=l.vertexShader.replace(`#include <common>`,`#include <common>\n${t?`attribute float aEdge;
attribute vec2 aFlagUv;
`:``}varying float vHinEdge;\nvarying float vHinIn;\nvarying vec2 vHinUv;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvHinEdge = ${t?`aEdge`:`0.0`};\nvHinUv = ${t?`aFlagUv`:`vec2( 0.5 )`};\nvHinIn = dot( normalize( objectNormal.xz + 1e-5 ), normalize( position.xz + 1e-5 ) );`),t&&(l.defines={...l.defines??{},HIN_FLAG_GLOW:``});let d=l.fragmentShader.replace(`#include <common>`,`#include <common>\n${El}`),f=`worldGrade( outgoingLight, 0.5 )`;t&&d.includes(f)&&(l.uniforms.uHinFlagGrade=t,d=d.replace(`#include <common>`,`#include <common>
uniform float uHinFlagGrade;`).replace(f,`worldGrade( outgoingLight, uHinFlagGrade )`)),l.fragmentShader=d.replace(`#include <opaque_fragment>`,Dl)},e.customProgramCacheKey=()=>`${l.call(e)}|holeHeroAnime3${t?`g`:``}`}},Nl=[30,48,60,72,90,120,144,165,240],Pl=240;function Fl(e){for(let t of Nl)if(t>=e*.97)return t;return Nl[Nl.length-1]}var Il=class{enabled=!0;floor=1;step=.25;settle=3;upAfterWindows=12;refreshHz=0;refreshSource=`none`;beforeDrop=null;drops=0;ups=0;bestFps=0;quiet=3;bad=0;good=0;topDpr=4;bounced=!1;refreshLocked=!1;probe=new Float32Array(Pl);probeN=0;reset(){this.quiet=this.settle,this.bad=0,this.good=0}setTop(e){this.topDpr=e}observeFrame(e){!this.refreshLocked&&e>2&&e<100&&(this.probe[this.probeN%Pl]=e,this.probeN++)}lockRefresh(){if(this.refreshLocked)return;this.refreshLocked=!0;let e=Math.min(this.probeN,Pl);if(e<20)return;let t=Fl(1e3/Array.from(this.probe.subarray(0,e)).sort((e,t)=>e-t)[Math.floor(e*.25)]);t>this.refreshHz&&(this.refreshHz=t,this.refreshSource=`probe`)}evaluate(e,t,n,r,i){if(!this.enabled||!i||t<=0||n>400)return-1;if(this.quiet>0)return this.quiet-=e,-1;if(t>this.bestFps){this.bestFps=t;let e=Fl(t);e>this.refreshHz&&(this.refreshHz=e,this.refreshSource=`fps`)}if(t>=Math.min(.88*this.refreshHz,80)){if(this.bad=0,this.upAfterWindows>0&&!this.bounced&&this.drops>this.ups&&r<this.topDpr-.001&&t>=this.refreshHz*.97){if(++this.good>=this.upAfterWindows)return this.ups++,this.reset(),Math.min(this.topDpr,Math.round((r+this.step)*8)/8)}else this.good=0;return-1}return this.good=0,this.bad++,this.bad<2?-1:this.beforeDrop?.()?(this.reset(),-1):r<=this.floor+.001?-1:(this.ups>0&&(this.bounced=!0),this.drops++,this.reset(),Math.max(this.floor,Math.round((r-this.step)*8)/8))}},Ll=class{x=0;z=0;vx=0;vz=0;maxSpeed=St;response=10;speedMul=1;gripMul=1;update(e,t,n){let r=1-Math.exp(-e*this.response*this.gripMul),i=this.maxSpeed*this.speedMul;this.vx+=(t*i-this.vx)*r,this.vz+=(n*i-this.vz)*r,this.x+=this.vx*e,this.z+=this.vz*e,this.x<-20?(this.x=-20,this.vx=0):this.x>20&&(this.x=20,this.vx=0),this.z<-19?(this.z=-19,this.vz=0):this.z>H.holeMaxZ&&(this.z=H.holeMaxZ,this.vz=0)}save(e){e.wd(this.x),e.wd(this.z),e.wd(this.vx),e.wd(this.vz)}restore(e){this.x=e.rd(),this.z=e.rd(),this.vx=e.rd(),this.vz=e.rd()}teleport(e,t){this.x=Math.min(20,Math.max(-20,e)),this.z=Math.min(H.holeMaxZ,Math.max(-19,t)),this.vx=0,this.vz=0}},Rl=412/915,zl=1.6,Bl=1.8,Vl=class{camera=new Fe(60,1,.5,500);pitchDeg=19;fovPortrait=52;fovLandscape=48;distPortrait=31;distLandscape=24.5;holeYPortrait=.72;holeYLandscape=.68;zoomOutPortrait=1.25;distanceScale=1;fovScale=1;followRate=7;sideReveal=3.5;maxOffCentre=.55;roofMargin=.04;northSink=.07;aspect=1;sinP=0;cosP=1;dist=18;fovNow=60;lookAhead=4;xLimit=20;xSoft=4;zMin=-1/0;fx=0;fz=0;tx=0;tz=0;fromPts=new Float64Array(4);toPts=new Float64Array(4);curPts=new Float64Array(4);ease=1;scale=1;zoom=1;constructor(e={}){this.pitchDeg=e.pitchDeg??this.pitchDeg,this.distanceScale=e.distanceScale??this.distanceScale,this.fovScale=e.fovScale??this.fovScale,Hl(qt,this.toPts),this.curPts.set(this.toPts),this.fromPts.set(this.toPts),Ft(e=>this.setBuilding(e,!1)),this.refresh()}setBuilding(e,t){this.fromPts.set(this.curPts),Hl(e,this.toPts),this.ease=+!!t,this.refresh()}get buildingScale(){return this.scale}get portraitZoom(){return this.zoom}get followFov(){return this.fovNow}get distance(){return this.dist}get focusX(){return this.fx}get focusZ(){return this.fz}get lookAheadMetres(){return this.lookAhead}get limits(){return{x:this.xLimit,z:this.zMin}}setAspect(e){this.aspect=e,this.refresh()}refresh(){let e=B.degToRad(B.clamp(this.pitchDeg,5,89)),t=this.sinP=Math.sin(e),n=this.cosP=Math.cos(e);this.camera.rotation.set(-e,0,0);let r=B.clamp((this.aspect-Rl)/1.327504553734062,0,1);this.camera.aspect=this.aspect;let i=B.clamp(B.lerp(this.fovPortrait,this.fovLandscape,r)*this.fovScale,10,120),a=B.lerp(this.distPortrait,this.distLandscape,r)*this.distanceScale,o=B.lerp(this.holeYPortrait,this.holeYLandscape,r),s=this.ease*this.ease*(3-2*this.ease),c=this.curPts;for(let e=0;e<4;e++)c[e]=this.fromPts[e]+(this.toPts[e]-this.fromPts[e])*s;let l=Math.tan(B.degToRad(i)*.5),u=this.ease<1?this.solveScale(this.fromPts,l,a,o,t,n):0,d=this.solveScale(this.toPts,l,a,o,t,n),f=this.scale=this.ease<1?u+(d-u)*s:d,p=B.clamp(B.radToDeg(2*Math.atan(l*f)),10,120);this.camera.fov=this.fovNow=p,this.camera.updateProjectionMatrix();let m=this.zoom=Math.max(1,B.lerp(this.zoomOutPortrait,1,r)),h=this.dist=a*f*m,g=Math.tan(B.degToRad(p)*.5),_=B.clamp(2*o-1,-.95,.95),v=this.lookAhead=_*g*h/(t+_*g*n),y=Math.max(.1,(h-v*n)*g*this.aspect);this.xLimit=Math.min(20,Math.max(0,20+this.sideReveal-y,20-this.maxOffCentre*y)),this.xSoft=Math.max(.5,Math.min(4,this.xLimit*.5)),this.zMin=this.roofGuard(c,g,h,t,n),this.apply()}roofGuard(e,t,n,r,i){let a=t*(1-2*this.roofMargin),o=i+a*r,s=r-a*i,c=n*r,l=-1/0;if(s<-1e-6)for(let t=0;t<4;t+=2)l=Math.max(l,e[t+1]-n*i-(e[t]-c)*o/s);return l}solveScale(e,t,n,r,i,a){if(this.fits(1,e,t,n,r,i,a))return 1;let o=1,s=Bl;if(!this.fits(s,e,t,n,r,i,a))return s;for(let c=0;c<24;c++){let c=(o+s)*.5;this.fits(c,e,t,n,r,i,a)?s=c:o=c}return s}fits(e,t,n,r,i,a,o){let s=n*e,c=r*e,l=B.clamp(2*i-1,-.95,.95),u=l*s*c/(a+l*s*o),d=this.roofGuard(t,s,c,a,o),f=Ul(-19-u,d),p=c*a,m=f+c*o- -19,h=m*o+p*a;return(1-(m*a-p*o)/(h*s))*.5>=i-this.northSink}snapTo(e,t){this.tx=e,this.tz=t,this.fx=this.targetFocusX(e),this.fz=this.targetFocusZ(t),this.apply()}update(e,t,n){this.tx=t,this.tz=n,this.ease<1&&(this.ease=Math.min(1,this.ease+e/zl),this.refresh());let r=1-Math.exp(-e*this.followRate);this.fx+=(this.targetFocusX(t)-this.fx)*r,this.fz+=(this.targetFocusZ(n)-this.fz)*r,this.apply()}targetFocusX(e){let t=this.xLimit,n=this.xSoft,r=Math.abs(e);return r<=t-n?e:Math.sign(e)*(t-n+n*Math.tanh((r-(t-n))/n))}targetFocusZ(e){return Ul(e-this.lookAhead,this.zMin)}apply(){this.camera.position.set(this.fx,this.dist*this.sinP,this.fz+this.dist*this.cosP),this.camera.updateMatrixWorld()}get targetX(){return this.tx}get targetZ(){return this.tz}};function Hl(e,t){t[0]=e.frontY,t[1]=e.frontZ,t[2]=e.backY,t[3]=e.backZ}function Ul(e,t){return t===-1/0||e>=t+3?e:t+3-3*Math.tanh((t+3-e)/3)}var Wl={firstSwing:.6,loopSwing:.25,skipFirst:.45,skipLoop:.85,hold:[1.5,1.6,1.7,5.6,2.6,2.1,3.2,3.2],giantDelay:1.4,rollerRun:5.2,heatDrift:.55,noShot:6,rowPenalty:4,walkPenalty:8},Gl={flightPitch:21,spotAt:.24,shooterAt:.86,flightLean:.3,flightMin:22,flightMax:70,closePitch:33,closeDist:13.5,closeAt:.36,follow:2.4,blendIn:1.6,blendOut:2.6,narrowBack:.55},Kl=e=>e*e*(3-2*e),ql=class{w=0;cx=0;cy=10;cz=0;pitch=.4;tx=0;ty=10;tz=0;tp=.4;get active(){return this.w>0}update(e,t,n){let r=n.running;if(!r&&this.w<=0)return;let i=t.camera,a=this.w;if(this.w=r?Math.min(1,this.w+e*Gl.blendIn):Math.max(0,this.w-e*Gl.blendOut),this.w<=0){t.refresh();return}if(r){this.target(n,Math.tan(B.degToRad(i.fov)*.5),i.aspect);let t=a<=0?1:1-Math.exp(-e*Gl.follow);this.cx+=(this.tx-this.cx)*t,this.cy+=(this.ty-this.cy)*t,this.cz+=(this.tz-this.cz)*t,this.pitch+=(this.tp-this.pitch)*t}let o=Kl(this.w),s=i.position,c=B.degToRad(t.pitchDeg);s.set(s.x+(this.cx-s.x)*o,s.y+(this.cy-s.y)*o,s.z+(this.cz-s.z)*o),i.rotation.set(-(c+(this.pitch-c)*o),0,0,`XYZ`),i.updateMatrixWorld()}target(e,t,n){let r=e.viewX0,i=e.viewX1,a=e.viewY0,o=e.viewY1,s=(r+i)*.5,c=e.focusX,l=e.focusZ;if(!e.landed){let r=B.degToRad(Gl.flightPitch),i=Math.sin(r),u=Math.cos(r),d=a+(o-a)*Gl.spotAt,f=a+(o-a)*Gl.shooterAt,p=e.shotX,m=e.shotY,h=e.shotZ,g=u+d*t*i,_=-i+d*t*u,v=u+f*t*i,y=-i+f*t*u,b=g*y-_*v,x=0,S=0,C=Math.abs(b)>1e-4;if(C){let e=l*_,t=m*v+h*y;x=(e*y-_*t)/b,S=(g*t-e*v)/b;let n=-(0-x)*i-(l-S)*u;C=x>2&&n>6&&n<Gl.flightMax}if(!C){let e=Gl.flightMin;x=i*e-d*e*t*u,S=l+u*e+d*e*t*i}let w=c+(p-c)*Gl.flightLean,T=l+(h-l)*Gl.flightLean,E=-(m*Gl.flightLean-x)*i-(T-S)*u;this.tx=w-s*E*t*n,this.ty=x,this.tz=S,this.tp=r;return}let u=B.degToRad(Gl.closePitch),d=Math.sin(u),f=Math.cos(u),p=Math.min((i-r)*.5,(o-a)*.5),m=Gl.closeDist*(1+(1-B.clamp(p,0,1))*Gl.narrowBack),h=a+(o-a)*Gl.closeAt;this.tx=c-s*m*t*n,this.ty=Math.max(1.5,d*m-h*m*t*f),this.tz=l+f*m+h*m*t*d,this.tp=u}},Jl={boardAt:7.4,skipAfter:1.2,launchAt:.62,launchHeight:1.75,launchTurns:2,danceFrom:1.95,danceTo:5.6,beat:.45,danceHeight:.5,bigEvery:4,bigHeight:.95,finaleAt:5.9,finaleHeight:1.45,finaleTurns:2,idleBeat:.9,poleKick:2.4,fireFrom:.9,fireEvery:.55,fireJitter:.18,fireIdle:1.6,finaleSalvo:4,fireNdcX:.72,fireNdcY0:.3,fireNdcY1:.82,fireDepth0:14,fireDepth1:24,rainRate:34,rainIdle:8,colors:[[3.2,2.5,.35],[3,1.25,.35],[2.8,2.6,2.2],[.7,1.7,3.2],[3,.9,1.5],[.9,2.6,1]],camIn:1.5,camOut:1.1,camPitch:8,camBoxW:5.4,camBoxH:6.2,camBoxY:2.6,camBoxX:.55,camMargin:1.12,camLow:.12,camPush:.1,camMinDist:5.5},Yl=Jl,Xl=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)},Zl=class{w=0;tx=0;ty=4;tz=0;tp=.14;tanV=.45;aspect=1;get active(){return this.w>0}update(e,t,n,r,i,a){if(!n&&this.w<=0)return;let o=t.camera;if(this.w=n?Math.min(1,this.w+e/Yl.camIn):Math.max(0,this.w-e/Yl.camOut),this.w<=0){t.refresh();return}n&&this.target(r,i,a,Math.tan(B.degToRad(o.fov)*.5),o.aspect);let s=Xl(this.w),c=o.position,l=B.degToRad(t.pitchDeg);c.set(c.x+(this.tx-c.x)*s,c.y+(this.ty-c.y)*s,c.z+(this.tz-c.z)*s),o.rotation.set(-(l+(this.tp-l)*s),0,0,`XYZ`),o.updateMatrixWorld()}target(e,t,n,r,i){let a=B.degToRad(Yl.camPitch),o=Math.sin(a),s=Math.cos(a),c=Yl.camLow,l=Yl.camBoxH/(2*r*(.95-c)),u=Yl.camBoxW/(2*r*Math.max(.2,i)*.95),d=1-Yl.camPush*Xl(e/Yl.boardAt),f=Math.max(Yl.camMinDist,Math.max(l,u)*Yl.camMargin*d),p=c*r*f;this.tx=t+Yl.camBoxX,this.ty=Yl.camBoxY+o*f+s*p,this.tz=n+s*f-o*p,this.tp=a,this.tanV=r,this.aspect=i}},K=Jl,Ql=class{on=!1;prev=0;landings=0;nextFire=0;fireSide=1;colorAt=0;rainAcc=0;seed=625341585;hole;vfx;cam;constructor(e,t,n){this.hole=e,this.vfx=t,this.cam=n}update(e,t,n,r){let i=this.hole;if(t===null||t.phase!==`victory`){this.on&&(this.on=!1,i.victory=!1,i.crouch=0);return}let a=t.phaseTime;this.on||(this.on=!0,i.victory=!0,this.prev=a>0?a:-1e-6,this.landings=i.landings,this.nextFire=a<K.fireFrom?K.fireFrom:a+.3,this.rainAcc=0,this.seed=625341585);let o=this.prev;this.prev=a;let s=a-o>.35;if(i.crouch=a<K.launchAt?$l(a/K.launchAt):0,!s&&a>o&&this.beats(o,a,n,r),i.landings!==this.landings&&(this.landings=i.landings,this.vfx.poofFx(n,0,r+.2,.75),i.poleKick(K.poleKick*(this.landings&1?1:-1))),a>=this.nextFire&&(s&&(this.nextFire=a),this.firework(0),this.nextFire+=a<K.boardAt?K.fireEvery+(this.rnd()*2-1)*K.fireJitter:K.fireIdle,this.nextFire<a&&(this.nextFire=a+K.fireEvery)),this.rainAcc+=e*(a<K.boardAt?K.rainRate:K.rainIdle),this.rainAcc>=1){let e=Math.floor(this.rainAcc);this.rainAcc-=e,this.vfx.confettiRain(e,n-3.2,n+3.2,6.8,r-2.2,r+1.2,K.colors)}}beats(e,t,n,r){let i=this.hole;if(e<K.launchAt&&t>=K.launchAt&&(i.victoryHop(K.launchHeight,K.launchTurns),this.vfx.confettiCannon(n,r,64,K.colors),this.vfx.poofFx(n,0,r+.2,1.4)),t>=K.danceFrom&&e<K.danceTo){let n=Math.floor((t-K.danceFrom)/K.beat);if(n>(e<K.danceFrom?-1:Math.floor((e-K.danceFrom)/K.beat))&&K.danceFrom+n*K.beat<K.danceTo&&!i.inAir){let e=(n+1)%K.bigEvery===0;i.victoryHop(e?K.bigHeight:K.danceHeight,+!!e)}}if(e<K.finaleAt&&t>=K.finaleAt){i.victoryHop(K.finaleHeight,K.finaleTurns),this.vfx.confettiCannon(n,r,48,K.colors);for(let e=0;e<K.finaleSalvo;e++)this.firework(.08*e)}if(t>=K.boardAt){let n=Math.floor((t-K.boardAt)/K.idleBeat);n>(e<K.boardAt?-1:Math.floor((e-K.boardAt)/K.idleBeat))&&!i.inAir&&i.victoryHop(n%3==2?.7:.4,+(n%3==2))}}firework(e){let t=this.cam;this.fireSide=-this.fireSide;let n=this.fireSide*(.15+this.rnd()*(K.fireNdcX-.15)),r=K.fireNdcY0+this.rnd()*(K.fireNdcY1-K.fireNdcY0),i=Math.sin(t.tp),a=Math.cos(t.tp),o=t.tanV,s=n*o*t.aspect,c=-i+r*o*a,l=-a-r*o*i,u=K.fireDepth0+this.rnd()*(K.fireDepth1-K.fireDepth0);t.tz+l*u<-25&&(u=(t.tz- -25)/-l);let d=K.colors[this.colorAt];this.colorAt=(this.colorAt+1)%K.colors.length,this.vfx.firework(t.tx+s*u,Math.max(3.5,t.ty+c*u),t.tz+l*u,d[0],d[1],d[2],e)}rnd(){let e=this.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.seed=e>>>0,this.seed/4294967296}};function $l(e){let t=e<0?0:e>1?1:e;return t*t*(3-2*t)}var eu=class e{halfWidth=pt(0);stripHalfWidth=pt(0)-Mn.strip.margin;stripHalfDepth=Mn.strip.halfDepth;x=0;z=0;heading=0;speed;blocked=!1;collectX=0;collectZ=0;dirX=0;dirZ=1;path=new Float32Array;points=0;lane;zStart;zEnd;laidZ0=NaN;laidX=NaN;target=1;step=1;fx=1;fz=0;constructor(e){this.speed=e.speed,this.lane=e.laneWidth??Mn.laneSpacing,this.zStart=e.zStart??-18,this.zEnd=e.zEnd??H.fairwayZ-3,this.layOut(),this.x=this.path[0],this.z=this.path[1],this.heading=Math.atan2(this.path[2]-this.x,this.path[3]-this.z),this.updateCollect()}setGang(e){e!==this.halfWidth&&(this.halfWidth=e,this.stripHalfWidth=e-Mn.strip.margin,this.relay())}setLaneEnd(e=-27+H.target-Tn-3){this.zEnd=e,this.relay()}layOut(){let t=this.halfWidth,n=Math.max(this.zStart,-27+Mn.deckAhead+t+Mn.clearDeck),r=Math.min(this.zEnd,this.zEnd+3+Tn-t-Mn.clearFence),i=Math.min(Mn.maxLaneX,Jt-Mn.clearYardage-this.lane/2-t);this.path=e.layLanes(n,Math.max(n,r),this.lane,-i,i),this.points=this.path.length/2,this.laidZ0=n,this.laidX=i}relay(){let e=this.laidZ0,t=this.laidX;this.layOut(),e===this.laidZ0&&t===this.laidX?this.target>=this.points&&(this.target=this.points-1,this.step=-1):this.replace()}replace(){let e=this.path,t=1/0,n=0;for(let r=0;r+1<this.points;r++){let i=e[r*2],a=e[r*2+1],o=e[r*2+2]-i,s=e[r*2+3]-a,c=o*o+s*s,l=c>1e-9?((this.x-i)*o+(this.z-a)*s)/c:0;l=l<0?0:l>1?1:l;let u=i+o*l-this.x,d=a+s*l-this.z,f=u*u+d*d;f<t-1e-9&&(t=f,n=r)}let r=this.step>0?n+1:n;r=Math.min(this.points-1,Math.max(0,r));let i=r+this.step;(e[r*2]-this.x)*this.fx+(e[r*2+1]-this.z)*this.fz<0&&i>=0&&i<this.points&&(r=i),this.target=r}static layLanes(e,t,n,r,i){let a=[],o=n/2,s=!0;for(let c=e;c<=t+1e-6;c+=n){let e=s?r:i,l=s?i:r;if(a.push(e,c,l,c),c+n<=t+1e-6){let e=s?1:-1;for(let t=1;t<6;t++){let n=t/6*Math.PI;a.push(l+e*o*Math.sin(n),c+o-o*Math.cos(n))}}s=!s}return new Float32Array(a)}get lanePath(){return this.path}placeOnFirstLane(e){let t=this.path[0],n=this.path[2];this.x=Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n)),this.z=this.path[1],this.target=1,this.step=1,this.heading=Math.atan2(n-t,this.path[3]-this.path[1]),this.updateCollect()}update(e,t,n,r){let i=this.path[this.target*2],a=this.path[this.target*2+1],o=i-this.x,s=a-this.z,c=Math.sqrt(o*o+s*s);c>1e-5&&(this.fx=o/c,this.fz=s/c);let l=t-this.x,u=n-this.z,d=l*this.fx+u*this.fz,f=Math.abs(l*this.fz-u*this.fx),p=Mn.blockMode===`gang`&&d>Mn.cartFront?this.halfWidth:Mn.cabHalfWidth;if(this.blocked=d>Mn.cartRear&&d<Mn.reelFront+Mn.blockAhead+r&&f<p+r,!this.blocked&&this.speed>0){let t=this.speed*e,n=0;for(;t>0&&n++<16;){let e=this.path[this.target*2],n=this.path[this.target*2+1];o=e-this.x,s=n-this.z,c=Math.sqrt(o*o+s*s),c<=t?(this.x=e,this.z=n,t-=c,this.advance()):(this.x+=o/c*t,this.z+=s/c*t,t=0)}}let m=Math.atan2(this.fx,this.fz)-this.heading;m=Math.atan2(Math.sin(m),Math.cos(m)),this.heading+=m*(1-Math.exp(-e*8)),this.updateCollect()}save(e){e.wd(this.x),e.wd(this.z),e.wd(this.heading),e.wd(this.target),e.wd(this.step),e.wd(this.fx),e.wd(this.fz),e.wb(+!!this.blocked)}restore(e){this.x=e.rd(),this.z=e.rd(),this.heading=e.rd(),this.target=Math.min(this.points-1,e.rd()),this.step=e.rd(),this.fx=e.rd(),this.fz=e.rd(),this.blocked=e.rb()===1,this.updateCollect()}updateCollect(){let e=Math.sin(this.heading),t=Math.cos(this.heading);this.dirX=e,this.dirZ=t,this.collectX=this.x+e*Mn.strip.centre,this.collectZ=this.z+t*Mn.strip.centre}advance(){let e=this.target+this.step;(e<0||e>=this.points)&&(this.step=-this.step),this.target+=this.step}},tu=mn.maxPoints,nu=Ot.discs,ru=2.6,iu=class e{tar=0;ice=0;handle=new Int32Array(40).fill(-1);px=new Float32Array(40*tu);pz=new Float32Array(40*tu);np=new Uint8Array(40);ball=new Int16Array(40).fill(-1);born=new Float32Array(40);isTar=new Uint8Array(40);reach=new Float32Array(40);seed=new Float64Array(40);ex=new Float32Array(40*nu);ez=new Float32Array(40*nu);er=new Float32Array(40*nu);ne=new Uint8Array(40);sx=0;sz=0;bx=0;bz=0;bladeOn=0;wipeX=0;wipeZ=0;look;constructor(e){this.look=e}get count(){let e=0;for(let t=0;t<40;t++)this.handle[t]>=0&&e++;return e}checksum(){let e=this.bladeOn*(this.bx*7+this.bz*13+1);for(let t=0;t<40;t++){if(this.handle[t]<0)continue;let n=t*tu;for(let r=0;r<this.np[t];r++)e+=this.px[n+r]*(r+1)+this.pz[n+r]*3*(t+1);e+=this.np[t]*17+this.ball[t];let r=t*nu;for(let n=0;n<this.ne[t];n++)e+=(this.ex[r+n]*5+this.ez[r+n]*11+this.er[r+n])*(n+1)}return e}decalRadius(e){return e===1?mn.tar.decalRadius:mn.ice.decalRadius}static pointReach(e,t,n){return t===0?e*fc:n+e*jt[t]*pc}add(t,n,r,i,a=-1){let o=-1,s=1/0;for(let e=0;e<40;e++){if(this.handle[e]<0){o=e;break}this.born[e]<s&&(s=this.born[e],o=e)}this.handle[o]>=0&&this.look.remove(this.handle[o]);let c=t===Kt.tar;this.handle[o]=this.look.add(c?gc.tar:gc.ice,n,r,c?mn.tar.decalRadius:mn.ice.decalRadius),this.px[o*tu]=n,this.pz[o*tu]=r,this.np[o]=1,this.ball[o]=a,this.born[o]=i,this.isTar[o]=+!!c,this.ne[o]=0,this.seed[o]=oc(this.px[o*tu],this.pz[o*tu]),this.reach[o]=e.pointReach(hc(c),0,0)}trail(t,n,r){for(let i=0;i<40;i++){if(this.ball[i]!==t||this.handle[i]<0)continue;let a=i*tu,o=this.np[i];if(o===1){let e=n-this.px[a],t=r-this.pz[a];if(e*e+t*t<mn.spacing*mn.spacing*.25)return;o=2,this.np[i]=2,this.look.setCount(this.handle[i],2)}else if(o<tu){let e=this.px[a+o-1]-this.px[a+o-2],t=this.pz[a+o-1]-this.pz[a+o-2];e*e+t*t>=mn.spacing*mn.spacing&&(o++,this.np[i]=o,this.look.setCount(this.handle[i],o))}this.px[a+o-1]=n,this.pz[a+o-1]=r,this.look.setPoint(this.handle[i],o-1,n,r,jt[o-1]);let s=n-this.px[a],c=r-this.pz[a],l=e.pointReach(hc(this.isTar[i]===1),o-1,Math.sqrt(s*s+c*c));l>this.reach[i]&&(this.reach[i]=l);return}}endTrail(e){for(let t=0;t<40;t++)this.ball[t]===e&&(this.ball[t]=-1)}stainD(e,t,n){let r=e*tu,i=this.reach[e],a=this.px[r],o=this.pz[r],s=a-t,c=o-n;if(s*s+c*c>=i*i)return 1/0;let l=hc(this.isTar[e]===1),u=this.seed[e],d=this.np[e],f=uc(t,n,a,o,l,u);for(let e=0;e+1<d;e++){let i=this.px[r+e],a=this.pz[r+e],o=this.px[r+e+1]-i,s=this.pz[r+e+1]-a,c=o*o+s*s,u=((t-i)*o+(n-a)*s)/(c>1e-6?c:1e-6);u=u<0?0:u>1?1:u;let d=t-(i+o*u),p=n-(a+s*u),m=jt[e],h=Math.sqrt(d*d+p*p)-l*(m+(jt[e+1]-m)*u);h<f&&(f=h)}return f+dc(t,n,a,o,l,u)}sample(e,t){let n=0,r=0;this.sx=e,this.sz=t;for(let i=0;i<40;i++){if(this.handle[i]<0)continue;let a=this.stainD(i,e,t);if(a===1/0)continue;let o=this.isTar[i]===1,s=i*nu;for(let n=0;n<this.ne[i];n++){let r=e-this.ex[s+n],i=t-this.ez[s+n],o=this.er[s+n]-Math.sqrt(r*r+i*i);o>a&&(a=o)}if(a>=0)continue;let c=Math.min(1,-a/mn.rim),l=c*c*(3-2*c);o?l>n&&(n=l):l>r&&(r=l)}this.tar=n,this.ice=r}update(e,t,n,r,i,a=!1,o=0){let s=0,c=!1;if(a){let e=o+mn.rim+Ot.gap;this.bladeOn===0&&(this.bladeOn=1,this.bx=this.sx,this.bz=this.sz);let t=this.bx-this.sx,n=this.bz-this.sz,r=t*t+n*n;if(r>e*e){let i=e/Math.sqrt(r);this.bx=this.sx+t*i,this.bz=this.sz+n*i,c=!0}else c=r>=e*e*.998}else this.bladeOn=0;for(let a=0;a<40;a++){let l=this.handle[a];if(l<0)continue;let u=e-this.born[a]>t;if(!u&&n){let e=a*tu,t=this.np[a];for(let n=0;n<t;n++){let t=this.px[e+n]-r,a=this.pz[e+n]-i;if(t*t+a*a<ru){u=!0;break}}}if(c&&!u&&this.stainD(a,this.bx,this.bz)<0){let e=a*nu,t=this.ne[a],n=t===0;if(!n){let r=this.bx-this.ex[e+t-1],i=this.bz-this.ez[e+t-1],a=Ot.step*o;n=r*r+i*i>=a*a}n&&(t<nu?(this.wipeX=this.bx,this.wipeZ=this.bz,s++,this.ex[e+t]=this.bx,this.ez[e+t]=this.bz,this.er[e+t]=o,this.ne[a]=t+1,this.look.setErase(l,t,this.bx,this.bz,o),this.look.setEraseCount(l,t+1)):this.stainD(a,this.sx,this.sz)>=0&&(this.wipeX=this.bx,this.wipeZ=this.bz,s++,u=!0))}u&&(this.look.remove(l),this.handle[a]=-1,this.ball[a]=-1,this.ne[a]=0)}return s}static snapSize(){return[40*(2+2*tu+3*nu)+3,0,240]}save(e){e.wf(this.bladeOn),e.wf(this.bx),e.wf(this.bz);for(let t=0;t<40;t++){let n=this.handle[t]>=0;if(e.wb(+!!n),!n)continue;let r=this.np[t];e.wb(this.isTar[t]),e.wb(r),e.wb(this.ne[t]),e.wf(this.born[t]),e.wf(this.ball[t]);let i=t*tu;for(let t=0;t<r;t++)e.wf(this.px[i+t]),e.wf(this.pz[i+t]);let a=t*nu;for(let n=0;n<this.ne[t];n++)e.wf(this.ex[a+n]),e.wf(this.ez[a+n]),e.wf(this.er[a+n])}}restore(t){this.bladeOn=t.rf(),this.bx=t.rf(),this.bz=t.rf();for(let n=0;n<40;n++){let r=t.rb()===1,i=this.handle[n];if(!r){i>=0&&this.look.remove(i),this.handle[n]=-1,this.ball[n]=-1,this.ne[n]=0;continue}let a=t.rb(),o=t.rb(),s=t.rb();this.born[n]=t.rf(),this.ball[n]=t.rf();let c=n*tu,l=t.rf(),u=t.rf(),d=i>=0&&this.isTar[n]===a&&this.px[c]===l&&this.pz[c]===u,f=i;d||=(i>=0&&this.look.remove(i),f=this.look.add(a===1?gc.tar:gc.ice,l,u,this.decalRadius(a)),this.handle[n]=f,this.isTar[n]=a,!0),this.px[c]=l,this.pz[c]=u,this.np[n]=o,this.look.setCount(f,o),this.look.setPoint(f,0,l,u,jt[0]),this.seed[n]=oc(l,u);let p=hc(a===1),m=e.pointReach(p,0,0);for(let n=1;n<o;n++){let r=t.rf(),i=t.rf();this.px[c+n]=r,this.pz[c+n]=i,this.look.setPoint(f,n,r,i,jt[n]);let a=r-l,o=i-u,s=e.pointReach(p,n,Math.sqrt(a*a+o*o));s>m&&(m=s)}this.reach[n]=m;let h=n*nu;for(let e=0;e<s;e++)this.ex[h+e]=t.rf(),this.ez[h+e]=t.rf(),this.er[h+e]=t.rf(),this.look.setErase(f,e,this.ex[h+e],this.ez[h+e],this.er[h+e]);this.ne[n]=s,this.look.setEraseCount(f,s)}}clear(){this.handle.fill(-1),this.ball.fill(-1),this.ne.fill(0),this.look.clear(),this.tar=0,this.ice=0,this.bladeOn=0}},au=class{outX=0;outY=0;across=14;t=0;push=new Float32Array(2);update(e,t,n,r){this.t+=e;let i=H.holeMaxZ- -19,a=Math.sin(this.t*.21)*this.across,o=-19+i*(.45+.38*Math.sin(this.t*.33+1)),s=a-t.x,c=o-t.z,l=Math.sqrt(s*s+c*c),u=l>.001?Math.min(1,l/3)/l:0;s*=u*.6,c*=u*.6,n.dodge(t.x,t.z,r,3.2,this.push),s+=this.push[0]*1.6,c+=this.push[1]*1.6;let d=Math.sqrt(s*s+c*c);d>1&&(s/=d,c/=d),this.outX=s,this.outY=c}},q={startDelay:0,driveSeconds:2.4,holdSeconds:.3,skippable:!0,stopGap:3,stopBearingDeg:36.5,stopBearingMaxDeg:85,stopBearingStepDeg:2.5,frameInset:.05,stopBearingLowDeg:0,handleScales:[1,.5,.25],northGap:.5,pickerClear:.5,edgeClear:0,offscreenMargin:3,minDrive:10,handleIn:.2,handleOut:.6,steerMaxDeg:24,steeringRatio:3,wheelRadius:.255,wheelbase:1.715,noseZ:1.3,halfWidth:.74,height:2.4,ink:.03,spokes:{count:3,r0:.3,r1:.6,halfWidth:.15,faceX:.388,lift:.04},driver:{sex:`male`,scale:.9,seatX:.27,seatTop:.84,hipRise:.1,hipZ:-.12,floorY:.4,footZ:.3,footSplay:.02,reclineDeg:6,gripDeg:-35,gripRadius:.18,lookDeg:24,lookHz:.55,waveDelay:.3,waveHz:2.4,shirt:15855330,cap:2911817,pants:12099438,skin:14855307,shoes:2830134,ink:.025}};function ou(e,t){return Math.round((tn.rerollBase+tn.rerollPerHole*e)*tn.rerollGrowth**+t)}function su(e,t,n){return ut(e,t)===null?!1:Pn[t].group!==`defence`||n>=tn.defenceFromHole}function cu(e,t){let n=en(e,t);return Pn[t].offerWeight*(n>0?tn.ownedBoost:1)*tn.levelFalloff**+n}function lu(e,t,n){let r=(e^Math.imul(t+1,2654435761)^Math.imul(n+7,2246822507))>>>0;return r=Math.imul(r^r>>>16,2146121005)>>>0,r=Math.imul(r^r>>>15,2221713035)>>>0,new ir((r^r>>>16)>>>0)}function uu(e,t,n,r,i,a,o,s=!1){let c=lu(a,r,o),l=new Set,u=e.slice(),d=new Set,f=0;for(let n=0;n<tn.slots;n++){let r=e[n];t&1<<n?r&&l.add(r):(f++,s&&r&&d.add(r))}let p=dt.filter(e=>su(n,e,r)&&!l.has(e)),m=p.map(e=>cu(n,e));if(d.size){let e=p.filter(e=>!d.has(e)).length>=f?0:tn.rerollRepeatWeight;for(let t=0;t<p.length;t++)d.has(p[t])&&(m[t]*=e)}let h=[];for(let n=0;n<tn.slots;n++){if(t&1<<n)continue;h.push(n);let r=0;for(let e of m)r+=e;if(r<=0){e[n]=null;continue}let i=c.next()*r,a=0;for(;a<m.length-1&&(i-=m[a])>0;)a++;for(;m[a]<=0;)a--;e[n]=p[a],m[a]=0}let g=e=>e!==null&&(ut(n,e)??1/0)<=i,_=0;for(let t of h)g(e[t])&&_++;for(let t=_;t<tn.guaranteeAffordable;t++){let t=-1,r=-1;for(let e=0;e<p.length;e++)m[e]<=0||!g(p[e])||m[e]>r&&(r=m[e],t=e);if(t<0)break;let i=-1,a=-1;for(let t of h){let r=e[t];if(g(r))continue;let o=r?cu(n,r):-.5;o>a&&(a=o,i=t)}if(i<0)break;e[i]=p[t],m[t]=0}if(s){for(let t of h)if(e[t]&&e[t]===u[t]){for(let n of h)if(n!==t&&e[n]!==u[t]&&e[t]!==u[n]){let r=e[t];e[t]=e[n],e[n]=r;break}}}}var du=[`rewind`,`adResurrect`],fu=class{phase=`title`;hole=1;endless=!1;holeTime=0;phaseTime=0;cardHold=!1;cardTime=0;score=0;currency=0;best=0;muted=!1;musicVol=1;sfxVol=1;gfx=`auto`;gfxNote=!1;upgrades={};day={start:0,end:1,length:1};invulnerable=!1;newBest=!1;grace=0;mulAdHole=0;mulPayHole=0;interceptors=du.map(()=>null);shop=null;seed=0;fixedSeed=null;days=[];dayScore0=0;dayCur0=0;listeners=[];store;data;constructor(e){this.store=e,this.data=e.load(),this.best=this.data.best,this.muted=this.data.muted,this.musicVol=this.data.music,this.sfxVol=this.data.sfx,this.gfx=this.data.gfx,On(1,this.day)}addListener(e){this.listeners.push(e)}setInterceptor(e,t){this.interceptors[du.indexOf(e)]=t}get savedRun(){return this.data.run}get active(){return this.phase===`playing`}get pressure(){return this.hole>rn.holes?(1+rn.endlessRampPerDay)**+(this.hole-rn.holes):1}get holeProgress(){return Math.min(1,this.holeTime/this.day.length)}get timeLeft(){return Math.max(0,this.day.length-this.holeTime)}get dayT(){return this.day.start+(this.day.end-this.day.start)*this.holeProgress}get shopAfter(){return this.hole<rn.holes}get celebrating(){return this.phase===`victory`&&this.phaseTime<Jl.boardAt}skipCelebration(){this.celebrating&&this.phaseTime>=Jl.skipAfter&&(this.phaseTime=Jl.boardAt)}get clearedSeconds(){return rn.happySeconds+(this.shopAfter?q.startDelay+q.driveSeconds+q.holdSeconds:0)}startNewRun(){this.seed=this.newSeed(),this.shop=null,this.score=0,this.currency=0,this.upgrades={},this.endless=!1,this.hole=1,this.newBest=!1,this.days=[],this.mulAdHole=0,this.mulPayHole=0,this.emitReset(),this.beginHole(!1)}toTitle(){this.phase!==`title`&&((this.phase===`lost`||this.phase===`offer`)&&this.finishRun(),this.score=0,this.currency=0,this.upgrades={},this.shop=null,this.endless=!1,this.hole=1,On(1,this.day),this.holeTime=0,this.newBest=!1,this.days=[],this.mulAdHole=0,this.mulPayHole=0,this.emitReset(),this.phase=`title`,this.phaseTime=0)}resume(){let e=this.data.run;if(!e){this.startNewRun();return}this.score=e.score,this.currency=e.currency,this.upgrades=jn(e.upgrades),this.endless=e.endless,this.hole=e.hole,this.seed=e.seed||this.newSeed(),this.shop=null,this.newBest=!1,this.days=e.days.slice(),this.mulAdHole=e.mulAdHole,this.mulPayHole=e.mulPayHole,this.emitReset();let t=e.shop;if(t&&!e.endless&&t.hole===e.hole-1&&t.hole<=rn.holes)this.hole=t.hole,On(this.hole,this.day),this.holeTime=this.day.length,this.grace=0,this.openShop(t.offers.length?t:null,!0);else if(this.hole>rn.holes&&!this.endless){this.phase=`victory`,this.phaseTime=Jl.boardAt;for(let e of this.listeners)e.victory?.()}else this.beginHole(!0)}jumpToHole(e){this.shop=null,this.hole=Math.max(1,Math.floor(e)),this.endless=this.hole>rn.holes,this.emitReset(),this.beginHole(!1,!0)}jumped=!1;beginHole(e,t=!1){let n=this.phase===`title`;this.jumped=t,On(this.hole,this.day),this.holeTime=0,this.grace=0,this.phaseTime=0,this.phase=`playing`,this.dayScore0=this.score,this.dayCur0=this.currency,this.persist();for(let t of this.listeners)t.holeStart?.(this.hole,e,n)}update(e){switch(this.cardHold&&this.phase!==`cleared`&&(this.cardHold=!1),this.cardHold?this.cardTime+=e:this.phaseTime+=e,this.phase){case`playing`:this.holeTime+=e,this.grace>0&&(this.grace=Math.max(0,this.grace-e)),this.holeTime>=this.day.length&&this.clearHole();break;case`cleared`:this.recordDay(),this.phaseTime>=this.clearedSeconds&&this.afterCleared();break;case`lost`:this.phaseTime>=rn.lostSeconds&&this.finishRun()}}clearHole(){if(this.phase===`playing`){if(this.holeTime=this.day.length,this.hole===rn.holes)this.win();else{this.phase=`cleared`,this.phaseTime=0,this.cardHold=!1,this.cardTime=0,this.recordDay(),this.persist(this.hole+1,this.shopAfter);for(let e of this.listeners)e.cleared?.(this.hole)}}}win(){this.recordDay(),this.hole++,this.phase=`victory`,this.phaseTime=0,this.cardHold=!1,this.persist();for(let e of this.listeners)e.victory?.()}skipCleared(){if(this.phase===`cleared`){if(this.cardHold=!1,this.shopAfter&&this.phaseTime<rn.happySeconds)this.phaseTime=rn.happySeconds;else if(this.shopAfter&&!q.skippable)return;else this.afterCleared()}}dayStat(e,t){let n=(e-1)*3+t;return e>=1&&n<this.days.length?this.days[n]:-1}get ballsEarned(){let e=0,t=Math.floor(this.days.length/3);for(let n=1;n<=t;n++)e+=Math.max(0,this.dayStat(n,1));return this.dayStat(this.hole,1)<0&&(e+=Math.max(0,this.currency-this.dayCur0)),e}recordDay(){if(this.hole>240)return;let e=(this.hole-1)*3;for(;this.days.length<e+3;)this.days.push(-1);this.days[e]=Math.max(0,this.score-this.dayScore0),this.days[e+1]=Math.max(0,this.currency-this.dayCur0),this.days[e+2]=Math.round(this.holeTime)}afterCleared(){this.cardHold=!1,this.recordDay(),this.shopAfter?this.openShop(null):this.nextHole()}openShop(e,t=!1){let n=[];for(let t=0;t<tn.slots;t++){let r=e?.offers[t]??null;n.push(r!==null&&r in Pn?r:null)}let r=e&&e.earned>=0?e.earned:Math.max(0,this.dayStat(this.hole,1)),i={hole:this.hole,offers:n,sold:e?e.sold&(1<<tn.slots)-1:0,rerolls:e?.rerolls??0,adRerolls:e?.adRerolls??0,earned:r,adBonus:e?.adBonus??0};e||uu(i.offers,0,this.upgrades,this.hole,this.currency,this.seed,0),this.shop=i,this.phase=`shop`,this.phaseTime=0,this.persist(this.hole+1);for(let e of this.listeners)e.shop?.(this.hole,t)}get rerollCost(){return this.shop?ou(this.shop.hole,this.shop.rerolls-this.shop.adRerolls):0}get canRerollSlots(){return!!this.shop&&this.phase===`shop`}get rerollUsed(){let e=this.shop;return!!e&&e.rerolls>=tn.rerollsPerVisit}get canReroll(){return this.canRerollSlots&&!this.rerollUsed&&this.currency>=this.rerollCost}get canAdReroll(){let e=this.shop;return!!e&&this.canRerollSlots&&!this.rerollUsed&&e.adRerolls<tn.adRerollsPerVisit}get adBonusOffer(){let e=this.shop;return!e||this.phase!==`shop`||e.adBonus>0?0:Math.round(e.earned*tn.adBonusShare)}buyOffer(e){let t=this.shop;if(!t||this.phase!==`shop`||this.endless||e<0||e>=tn.slots||t.sold&1<<e)return!1;let n=t.offers[e];if(!n)return!1;let r=ut(this.upgrades,n);return r===null||r>this.currency?!1:(t.sold|=1<<e,this.applyBuy(n,r),!0)}reroll(){let e=this.shop;return!e||!this.canReroll?!1:(this.currency-=this.rerollCost,e.rerolls++,this.rollUnsold(),!0)}claimAdReroll(){let e=this.shop;return!e||!this.canAdReroll?!1:(e.adRerolls++,e.rerolls++,this.rollUnsold(),!0)}claimAdBonus(){let e=this.shop,t=this.adBonusOffer;if(!e||t<=0)return 0;e.adBonus=t,this.currency+=t,this.persist(this.hole+1);for(let e of this.listeners)e.adBonus?.(t);return t}rollUnsold(){let e=this.shop;e.sold=0,uu(e.offers,0,this.upgrades,e.hole,this.currency,this.seed,e.rerolls,!0),this.persist(this.hole+1);for(let e of this.listeners)e.rerolled?.((1<<tn.slots)-1)}buy(e){if(this.phase!==`shop`||this.endless)return!1;let t=this.shop,n=t?t.offers.findIndex((n,r)=>n===e&&!(t.sold&1<<r)):-1;if(n>=0)return this.buyOffer(n);let r=ut(this.upgrades,e);return r===null||r>this.currency?!1:(this.applyBuy(e,r),!0)}applyBuy(e,t){this.currency-=t;let n=en(this.upgrades,e)+1;this.upgrades[e]=n,this.persist(this.hole+1);for(let t of this.listeners)t.bought?.(e,n)}get canBuy(){return this.phase===`shop`&&!this.endless}leaveShop(){if(this.phase===`shop`){if(this.shop=null,this.hole===rn.holes){this.hole++,this.phase=`victory`,this.phaseTime=0,this.persist();for(let e of this.listeners)e.victory?.()}else this.nextHole()}}nextHole(){this.hole++,this.beginHole(!1)}continueEndless(){this.phase===`victory`&&(this.endless=!0,this.beginHole(!1))}endRun(){this.phase===`victory`&&this.finishRun()}scoredOn(){if(this.phase!==`playing`||this.invulnerable||this.grace>0)return!1;for(let e=0;e<this.interceptors.length;e++){let t=this.interceptors[e];if(t&&t(this)){for(let t of this.listeners)t.averted?.(du[e]);return!1}}this.phase=`lost`,this.phaseTime=0;for(let e of this.listeners)e.lost?.();return!0}holdForOffer(){this.phase===`playing`&&(this.phase=`offer`,this.phaseTime=0)}get mulliganAdReady(){return this.mulAdHole<=0||this.hole-this.mulAdHole>=_.adCooldownHoles}get mulliganPayReady(){return this.mulPayHole!==this.hole}get mulliganAdWait(){return this.mulliganAdReady?0:this.mulAdHole+_.adCooldownHoles-this.hole}get mulliganPrice(){return v(this.hole)}get canPayMulligan(){return this.currency>=this.mulliganPrice}payOffer(e){if(this.phase!==`offer`||!this.mulliganPayReady)return!1;let t=this.mulliganPrice;return this.currency<t?!1:(this.currency-=t,this.dayCur0-=t,this.acceptOffer(e,`pay`),!0)}acceptOffer(e,t=`ad`){if(this.phase!==`offer`)return;t===`ad`?this.mulAdHole=this.hole:this.mulPayHole=this.hole;let n=this.data.run;n&&(n.mulAdHole=this.mulAdHole,n.mulPayHole=this.mulPayHole,this.store.save(this.data)),this.phase=`playing`,this.phaseTime=0,this.grace=e;for(let e of this.listeners)e.resurrected?.()}declineOffer(){if(this.phase===`offer`){this.phase=`lost`,this.phaseTime=0;for(let e of this.listeners)e.lost?.()}}finishRun(){this.newBest=this.score>this.best,this.newBest&&(this.best=this.score),this.data.best=this.best,this.data.run=null,this.store.save(this.data),this.phase=`gameover`,this.phaseTime=0;for(let e of this.listeners)e.gameOver?.()}save(e){e.wd(this.holeTime),e.wd(this.phaseTime),e.wd(this.score),e.wd(this.currency)}restore(e){this.holeTime=e.rd(),this.phaseTime=e.rd(),this.score=e.rd(),this.currency=e.rd()}emitReset(){for(let e of this.listeners)e.reset?.()}get langPref(){return this.data.lang}setLangPref(e){this.data.lang!==e&&(this.data.lang=e,this.store.save(this.data))}get seenBalls(){return this.data.seen}markBallsSeen(e){let t=(this.data.seen|e)&255;t!==this.data.seen&&(this.data.seen=t,this.store.save(this.data))}setMuted(e){this.muted=e,this.data.muted=e,this.store.save(this.data);for(let t of this.listeners)t.muted?.(e)}setVolume(e,t,n=!0){let r=Math.min(1,Math.max(0,Number.isFinite(t)?t:1));e===`music`?this.musicVol=this.data.music=r:this.sfxVol=this.data.sfx=r,n&&this.store.save(this.data);for(let t of this.listeners)t.volume?.(e,r)}setGraphics(e){if(e!==this.gfx){this.gfx=this.data.gfx=e,this.store.save(this.data);for(let t of this.listeners)t.graphics?.(e)}}persist(e=this.hole,t=!1){this.data.best=this.best,this.data.muted=this.muted;let n=this.shop,r=n?{hole:n.hole,offers:n.offers.slice(),sold:n.sold,rerolls:n.rerolls,adRerolls:n.adRerolls,earned:n.earned,adBonus:n.adBonus}:t?{hole:this.hole,offers:[],sold:0,rerolls:0,adRerolls:0,earned:-1,adBonus:0}:null;this.data.run={hole:e,endless:this.endless,score:this.score,currency:this.currency,upgrades:{...this.upgrades},seed:this.seed,shop:r,days:this.days.slice(),mulAdHole:this.mulAdHole,mulPayHole:this.mulPayHole},this.store.save(this.data)}newSeed(){return this.fixedSeed===null?Math.random()*4294967296>>>0||1:this.fixedSeed>>>0}},pu=Wl,mu=()=>!1,hu=3,gu=class{running=!1;type=-1;loops=0;t=0;stickX=0;stickY=0;holed=!1;shotX=0;shotY=0;shotZ=0;focusX=0;focusZ=0;landX=0;landZ=0;landed=0;landT=-1;dayT=0;viewX0=-1;viewX1=1;viewY0=-1;viewY1=1;onRestore=()=>{};parts;sizes;ball;ai;hole;guardFn=mu;roofFn=mu;decoysRef=null;snap=null;pool=null;poolTop=0;hx=0;hz=0;side=1;ys=1;n=0;sg=new Int16Array(hu);sty=new Uint8Array(hu);str=new Uint8Array(hu);sx=new Float32Array(hu);sz=new Float32Array(hu);sat=new Float32Array(hu);sOn=new Uint8Array(hu);main=0;mainI=-1;fireT=-1;flight=0;end=0;dayNow;constructor(e,t,n){this.parts=e,this.sizes=t,this.ball=n.ball,this.ai=n.ai,this.hole=n.hole,this.dayNow=n.dayT}start(e){if(this.running||(this.dayT=this.dayNow()),this.running)this.restore();else{if(!this.snap){let[e,t,n]=this.sizes;this.snap=new Xt(e,t,n),this.pool=new Int32Array(this.ball.capacity)}let e=this.snap.rewind();for(let t=0;t<this.parts.length;t++)this.parts[t].save(e);this.poolTop=this.ball.savePool(this.pool),this.running=!0,this.guardFn=this.ball.guard,this.roofFn=this.ball.onRoof,this.ball.guard=mu,this.ball.onRoof=mu,this.decoysRef=this.ball.decoys,this.ball.decoys=null}this.type=e,this.loops=0,this.stage()}stop(){this.running&&(this.restore(),this.end_())}abandon(){this.running&&(this.ai.clearDemo(),this.end_())}end_(){this.running=!1,this.type=-1,this.stickX=this.stickY=0,this.ball.guard=this.guardFn,this.ball.onRoof=this.roofFn,this.ball.decoys=this.decoysRef,this.decoysRef=null}diff(){if(!this.snap)return-1;let[e,t,n]=this.sizes,r=new Xt(e,t,n);for(let e=0;e<this.parts.length;e++)this.parts[e].save(r);return r.diff(this.snap)}step(e){if(!this.running)return;(this.t>=this.end||this.holed)&&(this.restore(),this.loops++,this.stage()),this.t+=e;let t=this.t,n=this.ai,r=this.ball;for(let e=0;e<this.n;e++)this.sOn[e]===0&&t>=this.sat[e]&&(this.sOn[e]=1,!n.demoShot(this.sg[e],this.sty[e],this.str[e],this.sx[e],this.sz[e],this.loops===0?pu.skipFirst:pu.skipLoop)&&e===this.main&&(this.end=t+.5));let i=this.sg[this.main];if(this.fireT<0&&i>=0&&n.demoFiredT[i]>=0){let e=n.demoFiredT[i];for(let t=0;t<r.capacity;t++)if(r.state[t]===1&&r.t0[t]===e&&r.type[t]===this.type){this.mainI=t;break}this.fireT=t,this.flight=this.mainI>=0?r.tf[this.mainI]:2,this.end=t+this.flight+pu.hold[this.type]}let a=this.mainI;a>=0&&this.landT<0&&(r.state[a]!==1||r.type[a]!==this.type)&&(this.landT=t,this.landed=1),a>=0&&r.state[a]===1&&(this.landX=r.tx[a],this.landZ=r.tz[a]),this.script(t);let o=this.hole,s=this.landX,c=this.landZ;this.landed&&a>=0&&r.state[a]!==0&&r.type[a]===this.type&&(s=r.px[a],c=r.pz[a]),this.focusX=(s+o.x)*.5,this.focusZ=(c+o.z)*.5}script(e){let t=0,n=0,r=this.side;if(this.fireT>=0){let i=e-this.fireT,a=this.flight;switch(this.type){case Kt.roller:i>a-.25&&i<a+1.4?(t=r*.8,n=this.ys*.2):i>=a+1.4&&i<a+pu.rollerRun&&(t=r*.22,n=this.ys*.55);break;case Kt.tar:i>a+.35&&i<a+2.7&&(t=r);break;case Kt.ice:i>a+.3&&i<a+.75?t=r:i>=a+.75&&i<a+2.3&&(n=-1);break;case Kt.orbital:i>a*.45&&i<a*.45+.45&&(t=r);break;case Kt.heat:i<a*pu.heatDrift?t=r*.3:i>a*.7&&i<a+.35&&(t=r);break;case Kt.giant:i>a-.9&&i<a-.35&&(t=-r*.35,n=.25);break;case Kt.steel:i>a*.5&&i<a*.5+.3&&(t=-r)}}this.stickX=t,this.stickY=n}stage(){let e=this.hole,t=this.type;this.t=0,this.holed=!1,this.hx=e.x,this.hz=e.z,this.side=e.x>0?-1:1,this.ys=e.z>(-19+H.holeMaxZ)*.5?-1:1;let n=this.side;this.n=0,this.main=0,this.mainI=-1,this.fireT=-1,this.flight=0,this.landT=-1,this.landed=0;let r=this.loops===0?pu.firstSwing:pu.loopSwing,i=0,a=0,o=lt.mid;switch(t){case Kt.roller:i=-n*3.2,a=-1;break;case Kt.tar:case Kt.ice:i=n*3,a=-1,o=lt.low;break;case Kt.giant:i=n*2.4,a=-2.4;break;case Kt.steel:i=n*1.8,a=-1.4}let s=this.clampX(this.hx+i),c=this.clampZ(this.hz+a);this.landX=s,this.landZ=c;let l=this.pick(s,-1,-1);t===Kt.giant?(this.add(this.pick(s-3,l,-1),Kt.normal,lt.high,this.clampX(s-1.2),this.clampZ(c+.5),r-.4),this.add(this.pick(s+3,l,this.sg[0]),Kt.normal,lt.high,this.clampX(s+1.1),this.clampZ(c-.6),r-.2),this.main=this.n,this.add(l,t,o,s,c,r+pu.giantDelay)):this.add(l,t,o,s,c,r),this.end=r+pu.noShot;let u=this.sg[this.main];if(u>=0&&u<this.ai.slots.length){let e=this.ai.slots[u];this.shotX=e.x,this.shotY=e.y+1.2,this.shotZ=e.z}this.focusX=(s+this.hx)*.5,this.focusZ=(c+this.hz)*.5,this.stickX=this.stickY=0}add(e,t,n,r,i,a){if(this.n>=hu)return;let o=this.n++;this.sg[o]=e,this.sty[o]=t,this.str[o]=n,this.sx[o]=r,this.sz[o]=i,this.sat[o]=Math.max(0,a),this.sOn[o]=0}pick(e,t,n){let r=this.ai,i=-1,a=1/0;for(let o=0;o<r.active&&o<r.slots.length;o++){if(o===t||o===n)continue;let s=r.slots[o],c=Math.abs(s.x-e)+s.row*pu.rowPenalty+(r.mode[o]===2?0:pu.walkPenalty);c<a&&(a=c,i=o)}return i}clampX(e){return Math.min(20,Math.max(-20,e))}clampZ(e){return Math.min(H.holeMaxZ,Math.max(-20.5,e))}restore(){let e=this.snap.rewind();for(let t=0;t<this.parts.length;t++)this.parts[t].restore(e);this.ball.restorePool(this.pool,this.poolTop),this.ai.clearDemo(),this.onRestore()}},_u=class{run;ai;bot=new au;patches;cleaning=!1;squeegee=!1;squeegeeR=0;squeegeeCueT=-1;stats=Rt();holeRadius=Dt;botOn=!1;silent=!1;stick={on:!1,x:0,y:0};paused=!1;simTime=0;hits=0;hitsByType=new Uint32Array(8);autoOn=!1;happyFired=!1;timeScale=1;floodlightsOwned=rn.startFloodlights;defence;rewind;snapParts;snapSizes;demo;onCue=()=>{};onPickerLevels=()=>{};d;golfers=null;moved=0;buildIn=-1;constructor(e){this.d=e;let{ballSim:t,holeLook:n,structure:r,rng:i,hole:a}=e,o=this.run=new fu(e.store);this.ai=new Xr(r,{ball:t,hole:a,picker:e.picker},i),this.patches=new iu(e.decals),this.ai.onShot=()=>o.score++;let s=(e,t,n,r=0)=>this.onCue(e,t,n,r);this.defence=new Wi({ball:t,hole:a,ai:this.ai,rng:i,cue:s});let c=[{save:e=>e.wd(this.simTime),restore:e=>{this.simTime=e.rd(),this.ai.simTime=this.simTime}},o,a,t,this.patches,this.ai,e.picker,this.defence],l=[64,64,64];for(let e of[Ti.snapSize(t.capacity),iu.snapSize(),Xr.snapSize(),Wi.snapSize()])l[0]+=e[0],l[1]+=e[1],l[2]+=e[2];this.snapParts=c,this.snapSizes=l,this.rewind=new un(c,l,Nn());let u={save:e=>{e.wd(i.state),e.wd(this.hits),e.wd(this.moved),e.wd(this.squeegeeCueT);for(let t=0;t<8;t++)e.wd(this.hitsByType[t]);e.wd(o.grace);let n=this.ai;e.wd(n.fired),e.wd(n.distracted),e.wd(n.decoyed),e.wd(n.timeouts);for(let t=0;t<8;t++)e.wd(n.firedByType[t]);e.wd(t.spawned),e.wd(t.recycled),e.wd(t.dropped)},restore:e=>{i.state=e.rd(),this.hits=e.rd(),this.moved=e.rd(),this.squeegeeCueT=e.rd();for(let t=0;t<8;t++)this.hitsByType[t]=e.rd();o.grace=e.rd();let n=this.ai;n.fired=e.rd(),n.distracted=e.rd(),n.decoyed=e.rd(),n.timeouts=e.rd();for(let t=0;t<8;t++)n.firedByType[t]=e.rd();t.spawned=e.rd(),t.recycled=e.rd(),t.dropped=e.rd()}};this.demo=new gu([...c,u],[l[0],l[1]+16+16,l[2]],{ball:t,ai:this.ai,hole:a,dayT:()=>o.dayT}),this.demo.onRestore=()=>{this.timeScale=1,n.emotion!==`idle`&&n.setEmotion(`idle`)},this.rewind.onPhase=e=>{e===cn.scrub?s(`rewind`,a.x,a.z):e===cn.slowmo?s(`slowmo`,a.x,a.z):s(`slowmoEnd`,a.x,a.z)},o.setInterceptor(`rewind`,()=>this.rewind.intercept()),this.ai.onSwing=(e,t,n)=>s(`swing`,e,n,t),t.onLand=(e,t,n,r)=>{o.phase!==`title`&&(s(e===Kt.tar?`landTar`:e===Kt.ice?`landIce`:`land`,t,n),(e===Kt.tar||e===Kt.ice)&&this.patches.add(e,t,n,this.simTime,r))},t.onTrail=(e,t,n)=>this.patches.trail(e,t,n),t.onTrailEnd=e=>this.patches.endTrail(e),t.onHole=e=>{this.demo.running?e===this.demo.type&&(this.demo.holed=!0):(this.hits++,this.hitsByType[e]++,o.scoredOn())},o.addListener({reset:()=>{this.resetWorld(),this.ai.standAll(),this.cheer(!1),this.applyStats(!1),e.picker.placeOnFirstLane(a.x-9),this.defence.reset(),this.rewind.used=0},bought:()=>{this.applyStats(!0),s(`purchase`,a.x,a.z)},holeStart:(e,t,r)=>{this.ai.beginHole(e,o.pressure,!r),this.cheer(!1),this.defence.refill(),this.rewind.refill(),this.timeScale=1,this.moved=0,s(`holeStart`,a.x,a.z),n.emotion!==`idle`&&n.setEmotion(`idle`)},cleared:()=>{n.setEmotion(`happy`),s(`cleared`,a.x,a.z),this.buildIn=-1,o.shopAfter||this.ai.buildAhead(o.hole+1)},shop:()=>{this.buildIn=rn.shopBuildDelay},lost:()=>{n.setEmotion(`sad`,!0),this.cheer(Wr.onLoss),s(`scoredOn`,a.x,a.z)},gameOver:()=>s(`gameOver`,a.x,a.z),victory:()=>{n.setEmotion(`happy`),this.cheer(!0)},resurrected:()=>{this.cheer(!1),this.clearAround(_.resurrectClearRadius),this.rewind.clear(),n.emotion!==`idle`&&n.setEmotion(`idle`),s(`resurrect`,a.x,a.z)},averted:()=>{this.cheer(!1),n.setEmotion(`sad`),s(`scoredOn`,a.x,a.z)}}),this.resetWorld(),this.ai.beginHole(1,1)}get frozen(){return this.paused&&!this.demo.running}get floodlights(){return this.floodlightsOwned}get collected(){return this.run.currency}get dayIndex(){return this.run.hole}setPaused(e){let t=this.run.phase;this.paused=e&&(t===`playing`||t===`cleared`||t===`lost`)}cheer(e){this.golfers?.setCheer(e)}golfersReady(e){this.golfers=e,this.ai.attach(e),e.bindLife(this.ai),this.ai.onLifeRestored=()=>e.lifeJumped()}get pickerActive(){return this.simRuns&&!this.dayOver}get dayOver(){let e=this.run.phase;return e===`cleared`||e===`victory`}get simRuns(){let e=this.run.phase;return e===`playing`||e===`cleared`||e===`lost`||e===`victory`}applyStats(e){let{hole:t,picker:n,holeLook:r}=this.d,i=kn(this.run.upgrades,this.stats);this.holeRadius=i.holeRadius,r.root.scale.setScalar(i.holeScale),t.maxSpeed=i.holeMaxSpeed,this.d.setLightRadius(i.playerLight),n.speed=i.pickerSpeed,n.setGang(i.pickerHalfWidth),this.onPickerLevels(i.pickerRangeLevel,i.pickerDistractionLevel),this.cleaning=i.pickerCleaning,this.squeegee=i.squeegee,this.squeegeeR=i.squeegeeRadius,this.ai.pickerChance=i.pickerDistraction,$t(i.rangeLevel,e),this.defence.apply(i,i.holeScale),this.rewind.configure(i.rewindCharges,i.rewindSeconds)}get lookTimeScale(){return this.run.phase===`offer`?0:this.simRuns?this.timeScale:1}clearAround(e){let{ballSim:t,hole:n}=this.d,r=e*e,i=t.live;for(let e=0;e<t.capacity;e++){let i=t.px[e]-n.x,a=t.pz[e]-n.z,o=t.tx[e]-n.x,s=t.tz[e]-n.z;(i*i+a*a<r||o*o+s*s<r)&&t.kill(e)}return i-t.live}resetWorld(){let{ballSim:e,picker:t,hole:n,holeLook:r}=this.d;e.clear(),this.patches.clear(),n.teleport(0,-11),t.placeOnFirstLane(n.x-9),r.emotion!==`idle`&&r.setEmotion(`idle`)}beforeLook(e,t){let{input:n,hole:r,frame:i}=this.d,a=this.run;n.update(t),this.buildIn>=0&&(a.phase===`shop`?(this.buildIn-=e)<0&&this.ai.buildAhead(a.hole+1):this.buildIn=-1),this.stick.on&&(n.x=this.stick.x,n.y=this.stick.y);let o=this.demo.running;o&&(this.demo.step(e),n.x=this.demo.stickX,n.y=this.demo.stickY),this.autoOn=this.botOn&&a.active,this.autoOn&&(this.bot.update(e,r,this.d.ballSim,this.simTime),n.x=this.bot.outX,n.y=this.bot.outY);let s=this.rewind;s.phase===cn.pending&&s.begin(this.simTime);let c=s.phase===cn.scrub;c?s.scrubStep(e):s.phase===cn.slowmo&&s.slowStep(e),this.timeScale=c?0:s.timeScale;let l=a.phase===`playing`&&!s.frozen;this.patches.sample(r.x,r.z);let{tar:u,ice:d}=this.patches;r.speedMul=1+(mn.tar.speedMul-1)*u+(mn.ice.speedMul-1)*d,r.gripMul=(1+(mn.tar.gripMul-1)*u)*(1+(mn.ice.gripMul-1)*d),r.speedMul*=s.holeBoost,c||r.update(e,l?n.x:0,l?n.y:0),a.phase===`playing`&&(n.x!==0||n.y!==0)&&!this.autoOn&&!o&&(this.moved+=e);let f=this.simRuns?e*this.timeScale:0;this.simTime+=f,this.ai.simTime=this.simTime,a.update(f),a.phase===`title`&&this.ai.titleUpdate(e),this.ai.update(f,a.phase===`playing`&&!this.silent&&!o,a.phase===`cleared`),i.dayT=this.demo.running?this.demo.dayT:a.dayT,this.happyFired=a.phase===`cleared`}titleBalls(e){let{ballSim:t,hole:n}=this.d;if(t.settle=!1,t.simulate(e,this.ai.titleClock,n.x,n.z,this.holeRadius),t.rolling+t.resting===0)return;let r=t.state;for(let e=0;e<t.capacity;e++)r[e]!==0&&r[e]!==1&&t.kill(e)}afterGolfers(e){let{ballSim:t,hole:n,picker:r}=this.d;if(this.run.phase===`title`){this.titleBalls(e);return}let i=this.simRuns?e*this.timeScale:0;if(i<=0)return;let a=this.run.phase===`playing`,o=!this.demo.running,s=this.dayOver;t.settle=s;let c=this.simTime;this.defence.holeR=this.holeRadius,o&&this.defence.beforeBalls(i,c,a),t.simulate(i,c,n.x,n.z,this.holeRadius);let l=s||this.demo.running;if(l||r.update(i,n.x,n.z,this.holeRadius),this.patches.update(c,1/0,this.cleaning&&!l,r.x,r.z,this.squeegee,this.squeegeeR)>0&&(c<this.squeegeeCueT||c-this.squeegeeCueT>=.2)&&(this.squeegeeCueT=c,this.onCue(`squeegee`,this.patches.wipeX,this.patches.wipeZ,0)),!l){let e=t.collectStrip(r.collectX,r.collectZ,r.dirX,r.dirZ,r.stripHalfWidth,r.stripHalfDepth);this.run.currency+=e,e>0&&this.onCue(`collect`,r.collectX,r.collectZ,0)}o&&(this.run.currency+=this.defence.afterBalls(i,c,a)),a&&!this.demo.running&&this.rewind.capture(c)}},vu=null;function yu(e){return vu??=(async()=>{let t=ro(`models/gopher.glb`),n=ro(`models/turret.glb`),r=ro(`models/umbrella.glb`),[i,a,o]=await Promise.all([t,n,r]);return{gopher:i,gopherMap:i?io(`models/gopher_basecolor.webp`,e):null,turret:a,turretMap:a?io(`models/turret_basecolor.webp`,e):null,umbrella:o}})(),vu}var bu=U.gopher,J=U.gopher.look.life,xu=Math.PI/180,Su=0,Cu=1,wu=2,Tu=3,Eu=4,Du=5,Ou=6,ku=7,Au=new P,ju=new P,Mu=new P,Nu=new P,Pu=new V,Fu=class{dt=0;popAge=1e9;popLen=.667;duckLen=.2;holeX=0;holeZ=0;box=null;head=null;armU=null;armF=null;headFwd=new V(0,0,1);boneAxis=new V(0,1,0);dir=new V;aimW=0;aimRoll=0;w=1;wasPopping=!1;beh=Su;behT=0;behDur=1;side=1;bYaw=0;bPitch=0;bTilt=0;yaw=0;yawV=0;pitch=0;pitchV=0;tilt=0;tiltV=0;body=bu.look.yaw*xu;bodyV=0;lift=0;liftV=0;sq=0;sqV=0;scratch=0;px=0;pz=0;vx=0;vz=0;odo=0;placed=!1;hidePopped=!1;rng=1831565813;bind(e,t){this.box=e,e.rotation.order=`ZXY`,this.head=t.getObjectByName(`head`)??null,this.armU=t.getObjectByName(`upperarm_L`)??null,this.armF=t.getObjectByName(`forearm_L`)??null,this.head&&(this.chainQ(this.head,Au).multiply(this.head.quaternion).invert(),this.headFwd.set(0,0,1).applyQuaternion(Au).normalize())}update(e){let t=this.box;if(!t)return;let n=e.gopher,r=this.dt>.05?.05:this.dt,i=this.popAge,a=i>=0&&i<this.popLen+this.duckLen;if(this.w+=(+!a-this.w)*(1-Math.exp(-r*(a?28:4))),a&&!this.wasPopping&&(this.sqV-=J.popKick,this.beh=Su,this.behT=0,this.behDur=.6,this.bYaw=0,this.bPitch=.1,this.bTilt=0),!a&&this.wasPopping&&n.charges>0&&(this.beh=Ou,this.behT=0,this.behDur=.5),this.wasPopping=a,this.placed||=(this.px=n.ox,this.pz=n.oz,!0),r>1e-4){let e=r*18>1?1:r*18;this.vx+=((n.ox-this.px)/r-this.vx)*e,this.vz+=((n.oz-this.pz)/r-this.vz)*e}let o=Math.sqrt((n.ox-this.px)*(n.ox-this.px)+(n.oz-this.pz)*(n.oz-this.pz));o<.5&&(this.odo+=o),this.px=n.ox,this.pz=n.oz;let s=Math.sqrt(this.vx*this.vx+this.vz*this.vz);this.behT+=r,!a&&this.behT>=this.behDur&&this.nextBehaviour();let c=this.bYaw,l=this.bPitch,u=this.bTilt,d=0,f=0,p=0,m=this.behT/this.behDur;switch(this.beh){case Cu:d=J.peekLift,c=m<.35?this.bYaw:m<.7?-this.bYaw:0;break;case wu:d=J.smallLift,l=this.bPitch+(this.behT%.55<.32?.07*Math.sin(this.behT*2*Math.PI*8):0);break;case Tu:d=J.smallLift,p=m<.15?m/.15:m>.85?(1-m)/.15:1,l=this.bPitch+.05*Math.sin(this.behT*2*Math.PI*7)*p;break;case Eu:this.behT<.42?d=J.hideLift:this.hidePopped||(this.hidePopped=!0,this.sqV-=J.popKick*.6);break;case Du:c=0;break;case Ou:f=.32*Math.sin(this.behT*2*Math.PI*9)*(1-m),u=f*.8}let h=0,g=e.holeScale,_=(n.wx-this.holeX)/g-n.ox,v=(n.wz-this.holeZ)/g-n.oz;if(n.watch>=0&&!a){let t=n.wy/g-(.22+this.lift);c=Math.atan2(_,v),l=Math.atan2(t,Math.sqrt(_*_+v*v)),u=0,d=J.alertLift,p=0,f=0,n.watchIn&&e.roof.charges<=0&&(h=n.watchLeft>=0?n.watchLeft<J.braceT?1-n.watchLeft/J.braceT:0:1-Math.min(1,Math.sqrt(_*_+v*v)/1.6))}c>J.yawMax?c=J.yawMax:c<-J.yawMax&&(c=-J.yawMax),c-=this.body,l>J.pitchUp?l=J.pitchUp:l<-J.pitchDown&&(l=-J.pitchDown),d-=h*J.braceLift;let y=J.headFreq;this.yawV+=(-(y*y)*(this.yaw-c)-1.6*y*this.yawV)*r,this.yaw+=this.yawV*r,this.pitchV+=(-(y*y)*(this.pitch-l)-1.6*y*this.pitchV)*r,this.pitch+=this.pitchV*r,y=11,this.tiltV+=(-(y*y)*(this.tilt-u)-1.2*y*this.tiltV)*r,this.tilt+=this.tiltV*r;let b=Math.max(-1,Math.min(1,n.ox/bu.roam)),x=bu.look.yaw*xu+bu.turnMax*b+J.bodyFollow*this.yaw*this.w+f*this.w;y=J.bodyFreq,this.bodyV+=(-(y*y)*(this.body-x)-1.7*y*this.bodyV)*r,this.body+=this.bodyV*r,y=J.liftFreq,this.liftV+=(-(y*y)*(this.lift-d*this.w)-2*J.liftDamp*y*this.liftV)*r,this.lift+=this.liftV*r,y=J.squashFreq,this.sqV+=(-(y*y)*(this.sq-h*J.braceSquash)-2*J.squashDamp*y*this.sqV)*r,this.sq+=this.sqV*r,this.sq>.3?this.sq=.3:this.sq<-.3&&(this.sq=-.3),this.scratch+=(p*this.w-this.scratch)*(1-Math.exp(-r*10));let S=s>.6?1:s/.6,C=J.hopH*Math.abs(Math.sin(this.odo/J.stride*Math.PI))*S;t.position.set(n.ox,this.lift+C,n.oz);let w=Math.max(-J.leanMax,Math.min(J.leanMax,this.vz*J.lean)),T=Math.max(-J.leanMax,Math.min(J.leanMax,-this.vx*J.lean));t.rotation.set(w,this.body,T);let E=this.sq;t.scale.set(1+E*.5,1-E,1+E*.5);let D=this.head;if(D&&this.w>.001){let e=Math.cos(this.pitch);this.dir.set(Math.sin(this.yaw)*e,Math.sin(this.pitch),Math.cos(this.yaw)*e),this.aimW=this.w,this.aimRoll=this.tilt,this.aim(D,this.headFwd)}let O=this.armU,k=this.armF;if(O&&k&&this.scratch>.01){this.aimW=this.scratch,this.aimRoll=0,this.dir.set(.62,.74,.26).normalize(),this.aim(O,this.boneAxis);let e=.32*Math.sin(this.behT*2*Math.PI*7);this.dir.set(-.35+e*.4,.9,.2+e).normalize(),this.aim(k,this.boneAxis)}}nextBehaviour(){let e=J.weights,t=0;for(let n=0;n<ku;n++)t+=e[n];let n=this.rand()*t,r=Su;for(let t=0;t<ku;t++)if(n-=e[t],n<0){r=t;break}r!==Su&&r===this.beh&&(r=Su),this.beh=r,this.behT=0,this.behDur=J.behMin+this.rand()*(J.behMax-J.behMin),this.side=this.rand()<.5?-1:1,this.bYaw=this.side*(.3+this.rand()*(J.yawMax-.3)),this.bPitch=-.1+this.rand()*.35,this.bTilt=(this.rand()*2-1)*.18,this.hidePopped=!1,r===Cu?this.bPitch=.12:r===wu?(this.bYaw*=.35,this.bPitch=.32,this.bTilt=0):r===Tu?(this.bYaw=.25,this.bPitch=.05,this.bTilt=-.38,this.behDur=Math.max(this.behDur,1.3)):r===Eu?(this.behDur=.95,this.bYaw=0,this.bPitch=0,this.bTilt=0):r===Du?(this.bPitch=.22,this.bTilt=this.side*.3):r===Ou&&(this.behDur=.5)}chainQ(e,t){t.identity();let n=e.parent;for(;n&&n!==this.box;)t.premultiply(n.quaternion),n=n.parent;return t}aim(e,t){let n=this.chainQ(e,Au);ju.copy(n).multiply(e.quaternion),Pu.copy(t).applyQuaternion(ju).normalize(),Mu.setFromUnitVectors(Pu,this.dir),this.aimRoll!==0&&(Nu.setFromAxisAngle(this.dir,this.aimRoll),Mu.premultiply(Nu)),this.aimW<1&&Mu.copy(Nu.identity().slerp(Mu,this.aimW)),e.quaternion.premultiply(n).premultiply(Mu),ju.copy(n).invert(),e.quaternion.premultiply(ju)}rand(){let e=this.rng;return e^=e<<13,e^=e>>>17,e^=e<<5,this.rng=e>>>0,this.rng/4294967296}},Iu=U.turret,Y=U.turret.life,Lu=.4,Ru=`turret_antenna`,zu=0,Bu=1,Vu=2,Hu=3,Uu=4,Wu=5,Gu=6,Ku=0,qu=1,Ju=2,Yu=3,Xu=2*Math.PI,Zu=class{dt=0;simNow=0;heading=Math.PI;holeX=0;holeZ=0;chassis=null;antenna=null;head=null;barrel=null;barrelRest=new V;dome=null;domeRest=new V(1,1,1);headYaw=Math.PI;headPitch=0;prevYaw=Math.PI;pvx=0;pvz=0;ax=0;az=0;seen=!1;sx=new Float64Array(Gu);sv=new Float64Array(Gu);sTarget=new Float64Array(Gu);sFreq=new Float64Array([Y.tiltFreq,Y.tiltFreq,Y.squashFreq,Y.antFreq,Y.antFreq,10]);sDamp=new Float64Array([Y.tiltDamp,Y.tiltDamp,Y.squashDamp,Y.antDamp,Y.antDamp,.55]);moving=!1;odo=0;time=0;hopAge=9;wigAge=9;blinkAge=9;blinkIn=3;seqShot=0;seqLoad=0;seqHit=0;synced=!1;lastYaw=0;lastPitch=0;still=0;idleW=0;lookIn=0;lookKind=Yu;lookYaw=0;lookPitch=0;lookTilt=0;rng=625341585;build(e,t,n){this.head=t,this.barrel=n,this.barrelRest.copy(n.position);let r=e.getObjectByName(`turret_body`);if(r&&r.parent===t.parent&&t.parent){let e=new tt;e.name=`turret_chassis`,e.position.y=Y.pivotY,t.parent.add(e),e.add(r,t),r.position.y-=Y.pivotY,t.position.y-=Y.pivotY,this.chassis=e}this.antenna=Qu(t);for(let e of t.children)e.isMesh&&(this.dome=e,this.domeRest.copy(e.scale))}bindClone(e,t,n,r){this.head=t,this.barrel=n,this.barrelRest.copy(n.position),this.chassis=e.getObjectByName(`turret_chassis`)??null,this.antenna=t.getObjectByName(`turret_antenna_pivot`)??null;for(let e of t.children)e.isMesh&&!e.name.endsWith(`-ink`)&&(this.dome=e,this.domeRest.copy(e.scale));this.rng=(625341585^Math.imul(r+1,2654435761))>>>0||1,this.lookIn=.4*r}hide(){this.seen=!1}update(e,t){let n=this.head,r=this.barrel;if(!n||!r)return;let i=this.dt>.05?.05:this.dt;this.time+=i,this.synced||(this.synced=!0,this.seqShot=e.seq,this.seqLoad=e.loadSeq,this.seqHit=e.hitSeq,this.lastYaw=e.yaw,this.lastPitch=e.pitch,this.headYaw=this.prevYaw=e.yaw,this.headPitch=e.pitch);let a=this.heading,o=Math.sin(a),s=Math.cos(a);if(this.seen&&i>1e-4){let t=(e.vx-this.pvx)/i,n=(e.vz-this.pvz)/i,r=t*t+n*n;if(r>900){let e=30/Math.sqrt(r);t*=e,n*=e}let a=i*20>1?1:i*20;this.ax+=(t-this.ax)*a,this.az+=(n-this.az)*a}else this.ax=this.az=0;this.pvx=e.vx,this.pvz=e.vz,this.seen=!0;let c=this.ax*o+this.az*s,l=this.ax*s-this.az*o,u=Math.sqrt(e.vx*e.vx+e.vz*e.vz);this.odo+=u*i,!this.moving&&u>Y.moveOn?(this.moving=!0,this.sv[Vu]-=Y.startKick,this.sv[Hu]+=Y.antKick*.5):this.moving&&u<Y.moveOff&&(this.moving=!1,this.sv[Vu]+=Y.stopKick,this.sv[Hu]-=Y.antKick*.6),e.loadSeq!==this.seqLoad&&(this.seqLoad=e.loadSeq,this.hopAge=0,this.sv[Vu]+=.5),e.seq!==this.seqShot&&(this.seqShot=e.seq,this.sv[zu]-=Y.recoilPitch,this.sv[Vu]+=Y.recoilKick,this.sv[Hu]-=Y.antKick),e.hitSeq!==this.seqHit&&(this.seqHit=e.hitSeq,this.wigAge=0,this.sv[Uu]+=Y.antKick*.7);let d=0;if(this.hopAge<Y.hopT){this.hopAge+=i;let e=this.hopAge/Y.hopT;e>=1?(this.sv[Vu]+=Y.hopKick,this.sv[Hu]+=Y.antKick*.8):d=Y.hopH*4*e*(1-e)}t.position.y=d;let f=0,p=0;if(this.wigAge<Y.wiggleT){this.wigAge+=i;let e=1-this.wigAge/Y.wiggleT,t=this.wigAge*Y.wiggleHz*2*Math.PI;f=Y.wiggle*Math.sin(t)*e*e,p=Y.wiggleTilt*Math.sin(t*.5)*e}Math.abs(e.yaw-this.lastYaw)>1e-6||Math.abs(e.pitch-this.lastPitch)>1e-6||e.pick>=0?this.still=0:this.still+=i,this.lastYaw=e.yaw,this.lastPitch=e.pitch;let m=this.still>Y.idleAfter;this.idleW+=(+!!m-this.idleW)*(1-Math.exp(-i*(m?2.5:14))),this.lookIn-=i,this.lookIn<=0&&this.newLook();let h=this.lookYaw,g=this.lookPitch;this.lookKind===Ku?(h=Math.atan2(this.holeX-t.position.x,this.holeZ-t.position.z),g=.55):this.lookKind===qu?(h=0,g=.12):this.lookKind===Ju?(h=Math.PI,g=.25):h=a+this.lookYaw;let _=this.idleW,v=h-e.yaw;v-=Math.round(v/Xu)*Xu;let y=e.yaw+v*_,b=Math.max(Iu.pitchMin,Math.min(Iu.pitchMax,e.pitch+(g-e.pitch)*_)),x=Iu.aimRate+(Y.idleRate-Iu.aimRate)*_,S=1-Math.exp(-i*x);v=y-this.headYaw,v-=Math.round(v/Xu)*Xu;let C=this.headYaw+v*S;C-=Math.round(C/Xu)*Xu,this.headYaw=C,this.headPitch+=(b-this.headPitch)*S,v=this.headYaw-this.prevYaw,v-=Math.round(v/Xu)*Xu;let w=i>1e-4?v/i:0;this.prevYaw=this.headYaw;let T=this.sTarget;T[zu]=Math.max(-Y.tiltMax,Math.min(Y.tiltMax,-c*Y.pitchPerAcc)),T[Bu]=Math.max(-Y.tiltMax,Math.min(Y.tiltMax,l*Y.rollPerAcc)),T[Vu]=0;let E=this.headYaw-a,D=Math.cos(E),O=Math.sin(E),k=c*D-l*O,A=c*O+l*D;T[Hu]=Math.max(-Y.antMax,Math.min(Y.antMax,-k*Y.antPerAcc)),T[Uu]=Math.max(-Y.antMax,Math.min(Y.antMax,A*Y.antPerAcc-w*Y.antPerTurn)),T[Wu]=this.lookTilt*_+p;for(let e=0;e<Gu;e++){let t=this.sFreq[e];this.sv[e]+=(-(t*t)*(this.sx[e]-T[e])-2*this.sDamp[e]*t*this.sv[e])*i,this.sx[e]+=this.sv[e]*i}let j=Y.antMax;this.sx[Hu]>j?this.sx[Hu]=j:this.sx[Hu]<-j&&(this.sx[Hu]=-j),this.sx[Uu]>j?this.sx[Uu]=j:this.sx[Uu]<-j&&(this.sx[Uu]=-j);let ee=this.chassis;if(ee){let e=u<Y.moveOn?1-u/Y.moveOn:0,t=Y.breathe*e*Math.sin(this.time*Y.breatheHz*2*Math.PI)+Y.rumble*(1-e)*Math.sin(this.odo*Y.rumblePerM*2*Math.PI);ee.position.y=Y.pivotY+t;let n=Y.tiltMax*1.8,r=this.sx[zu],i=this.sx[Bu];ee.rotation.set(r>n?n:r<-n?-n:r,f,i>n?n:i<-n?-n:i);let a=Math.max(-.12,Math.min(.12,this.sx[Vu]));ee.scale.set(1+a*.5,1-a,1+a*.5)}n.rotation.set(0,this.headYaw-a-f,this.sx[Wu]),this.blinkIn-=i,this.blinkIn<=0&&(this.blinkIn=Y.blinkMin+this.rand()*(Y.blinkMax-Y.blinkMin),this.blinkAge=0);let M=0;this.blinkAge<Y.blinkT&&(this.blinkAge+=i,M=Math.sin(Math.PI*Math.min(1,this.blinkAge/Y.blinkT)));let te=this.dome;if(te){let e=this.domeRest;te.scale.set(e.x*(1+.04*M),e.y*(1-.1*M),e.z*(1+.04*M))}r.rotation.set(-this.headPitch,0,0);let ne=this.simNow-e.shotAt,N=ne>=0&&ne*Iu.recoilDecay<1?(1-ne*Iu.recoilDecay)*Iu.recoil:0,re=this.barrelRest;r.position.set(re.x,re.y-N*Math.sin(this.headPitch),re.z-N*Math.cos(this.headPitch));let ie=this.antenna;ie&&ie.rotation.set(this.sx[Hu],0,this.sx[Uu])}newLook(){this.lookIn=Y.lookMin+this.rand()*(Y.lookMax-Y.lookMin);let e=this.rand();this.lookTilt=0,e<.25?this.lookKind=Ku:e<.45?(this.lookKind=qu,this.lookTilt=(this.rand()<.5?-1:1)*Y.headTilt):e<.6?this.lookKind=Ju:(this.lookKind=Yu,this.lookYaw=(this.rand()*2-1)*1.3,this.lookPitch=-.08+this.rand()*.3,this.lookTilt=(this.rand()*2-1)*Y.headTilt*.5)}rand(){let e=this.rng;return e^=e<<13,e^=e>>>17,e^=e<<5,this.rng=e>>>0,this.rng/4294967296}};function Qu(e){let t=null;for(let n of e.children)n.isMesh&&(t=n);if(!t||!t.geometry.index)return null;let n=t.geometry,r=n.getAttribute(`position`),i=n.index;if(!i)return null;t.updateMatrix();let a=r.count,o=new Int32Array(a);for(let e=0;e<a;e++)o[e]=e;let s=e=>{for(;o[e]!==e;)o[e]=o[o[e]],e=o[e];return e},c=(e,t)=>{let n=s(e),r=s(t);n!==r&&(o[r]=n)},l=new V,u=new Float32Array(a),d=new Float32Array(a),f=new Float32Array(a),p=new Map;for(let e=0;e<a;e++){l.fromBufferAttribute(r,e).applyMatrix4(t.matrix),d[e]=l.x,u[e]=l.y,f[e]=l.z;let n=`${Math.round(l.x*2e3)},${Math.round(l.y*2e3)},${Math.round(l.z*2e3)}`,i=p.get(n);i===void 0?p.set(n,e):c(i,e)}for(let e=0;e<i.count;e+=3)c(i.getX(e),i.getX(e+1)),c(i.getX(e),i.getX(e+2));let m=new Float32Array(a).fill(-1e9);for(let e=0;e<a;e++){let t=s(e);u[e]>m[t]&&(m[t]=u[e])}let h=[],g=[],_=1/0;for(let e=0;e<i.count;e+=3){let t=m[s(i.getX(e))]>Lu,n=t?g:h;for(let r=0;r<3;r++){let a=i.getX(e+r);n.push(a),t&&u[a]<_&&(_=u[a])}}if(g.length===0||h.length===0)return null;let v=0,y=0,b=0;for(let e of g)u[e]<_+.02&&(v+=d[e],y+=f[e],b++);v/=b,y/=b;let x=a>65535;n.setIndex(new I(x?new Uint32Array(h):new Uint16Array(h),1)),n.computeBoundingSphere(),n.computeBoundingBox();let S=new Le;for(let e of Object.keys(n.attributes))S.setAttribute(e,n.getAttribute(e));S.setIndex(new I(x?new Uint32Array(g):new Uint16Array(g),1)),S.computeBoundingSphere(),S.computeBoundingBox();let C=new tt;C.name=`turret_antenna_pivot`,C.position.set(v,_,y);let w=new F(S,t.material);return w.name=Ru,w.position.copy(t.position).sub(C.position),w.quaternion.copy(t.quaternion),w.scale.copy(t.scale),C.add(w),e.add(C),C}var $u=2.9,ed=.068,td=1.4,nd=.9,rd=9,id=6,ad=2.86,od=1/120,sd=6,cd=.13,ld=.05,ud=e=>e<=0?0:e>=1?1:e*e*(3-2*e),dd=e=>e<=0?0:e>=1?1:1+.25*Math.sin(e*Math.PI)-(1-e)*(1-e)*(1-e),fd=new Ne,pd=new P,md=new V,hd=new V,gd=new V,_d=new z;function vd(e,t,n){_d.setHex(e),t[n]=_d.r,t[n+1]=_d.g,t[n+2]=_d.b}function yd(){let e=U.decoys.look,t=.62,n=t/2,r=[],i=[],a=[],o=[],s=new Float32Array(3),c=new Float32Array(3);vd(e.stripe,s,0),vd(e.stripeWhite,c,0);let l=e=>ed*(1-e/$u*.18);for(let e=0;e<10;e++){let u=e/10*Math.PI*2,d=(e+1)/10*Math.PI*2,f=e/10*t,p=(e+1)/10*t;for(let e=-2;e*n<3.52;e++){let t=Math.min($u,Math.max(0,e*n+f)),m=Math.min($u,Math.max(0,(e+1)*n+f)),h=Math.min($u,Math.max(0,e*n+p)),g=Math.min($u,Math.max(0,(e+1)*n+p));if(m-t<1e-5&&g-h<1e-5)continue;let _=e&1?c:s,v=r.length/3,y=(e,t)=>{let n=l(t);r.push(Math.cos(e)*n,t,Math.sin(e)*n),i.push(Math.cos(e),0,Math.sin(e)),a.push(_[0],_[1],_[2])};y(u,t),y(d,h),y(u,m),y(d,g),o.push(v,v+2,v+1,v+1,v+2,v+3)}}let u=new Le;u.setAttribute(`position`,new I(new Float32Array(r),3)),u.setAttribute(`normal`,new I(new Float32Array(i),3)),u.setAttribute(`color`,new I(new Float32Array(a),3)),u.setIndex(o);let d=new Se(ed*1.55,10,7);d.translate(0,2.9408,0),d.deleteAttribute(`uv`);let f=new Float32Array(d.getAttribute(`position`).count*3);for(let e=0;e<f.length;e+=3)f[e]=c[0],f[e+1]=c[1],f[e+2]=c[2];d.setAttribute(`color`,new I(f,3));let p=zn([u,d],!1);if(u.dispose(),d.dispose(),!p)throw Error(`[decoys] pole merge failed`);return p}function bd(){let e=Dt,t=new je(e+.01,32).rotateX(-Math.PI/2);t.deleteAttribute(`uv`),t.translate(0,.02,0);let n=nl(e,cd,ld),r=(e,t)=>{let n=e.getAttribute(`position`).count,r=new Float32Array(n*3);for(let e=0;e<n;e++)vd(t,r,e*3);e.setAttribute(`color`,new I(r,3))};r(t,1446671),r(n,U.decoys.look.rim);let i=zn([t,n],!1);if(t.dispose(),n.dispose(),!i)throw Error(`[decoys] cup merge failed`);return i}function xd(){if(typeof document>`u`)return null;let e=U.decoys.look,t=document.createElement(`canvas`);t.width=256,t.height=168;let n=t.getContext(`2d`);if(!n)return null;let r=e=>`#${e.toString(16).padStart(6,`0`)}`,i=n.createLinearGradient(0,0,256,0);i.addColorStop(0,r(e.flagShade)),i.addColorStop(.22,r(e.flag)),i.addColorStop(1,r(e.flag)),n.fillStyle=i,n.fillRect(0,0,256,168);let a=143.36,o=r(e.ink);n.lineJoin=`round`,n.lineCap=`round`,n.strokeStyle=`#1a0a10`,n.lineWidth=11,n.beginPath(),n.moveTo(81.36000000000001,50),n.quadraticCurveTo(107.36000000000001,32,133.36,48),n.moveTo(153.36,48),n.quadraticCurveTo(179.36,32,205.36,50),n.stroke();for(let e of[-1,1])n.fillStyle=`#ffffff`,n.beginPath(),n.arc(a+e*34,76,22,0,Math.PI*2),n.fill(),n.lineWidth=7,n.strokeStyle=`#140a0e`,n.stroke(),n.fillStyle=`#140a0e`,n.beginPath(),n.arc(a+e*34+4,78,6.5,0,Math.PI*2),n.fill();n.lineWidth=6,n.beginPath(),n.moveTo(131.36,72),n.quadraticCurveTo(a,64,155.36,72),n.stroke(),n.fillStyle=`#1a0a10`,n.beginPath(),n.moveTo(a,114),n.bezierCurveTo(123.36000000000001,100,93.36000000000001,108,85.36000000000001,128),n.bezierCurveTo(103.36000000000001,124,123.36000000000001,130,a,122),n.bezierCurveTo(163.36,130,183.36,124,201.36,128),n.bezierCurveTo(193.36,108,163.36,100,a,114),n.fill(),n.fillStyle=`#ffa3b8`,n.strokeStyle=o,n.lineWidth=5,n.beginPath(),n.ellipse(a,102,15,19,0,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=`rgba(255,255,255,0.75)`,n.beginPath(),n.ellipse(138.36,94,4,6,-.4,0,Math.PI*2),n.fill(),n.strokeStyle=o,n.lineWidth=12,n.strokeRect(0,0,256,168);let s=new ke(t);return s.colorSpace=de,s.anisotropy=4,s.flipY=!1,s}var Sd=class{root=new tt;poles;poleInk;cups;flags;flagPos;flagNrm;cloths=[];env;shown=new Uint32Array(8);seenAt=new Float32Array(8);acc=new Float32Array(8);phase=new Float32Array(8);time=0;popped=new Int8Array(8);poppedN=0;constructor(){this.root.name=`decoyFlags`;let e=yd();qi(e),this.poles=new Ke(e,ja({vertexColors:!0}),8),this.poles.name=`decoyPoles`,this.poles.instanceMatrix.setUsage(R),this.poles.frustumCulled=!1,this.poles.count=0,Qi(this.poles),this.poleInk=new Ke(e,Ki({width:.02,smoothAttr:!0,colorMix:.5,darken:.35}),8),this.poleInk.name=`decoyPoles-ink`,this.poleInk.instanceMatrix=this.poles.instanceMatrix,this.poleInk.frustumCulled=!1,this.poleInk.count=0,this.poleInk.layers.disable(1),this.cups=new Ke(bd(),ja({vertexColors:!0}),8),this.cups.name=`decoyCups`,this.cups.instanceMatrix.setUsage(R),this.cups.frustumCulled=!1,this.cups.count=0;let t=ol(rd,id),n=new Le;this.flagPos=new I(new Float32Array(1296),3),this.flagNrm=new I(new Float32Array(1296),3),this.flagPos.setUsage(R),this.flagNrm.setUsage(R),n.setAttribute(`position`,this.flagPos),n.setAttribute(`normal`,this.flagNrm);let r=t.getAttribute(`aFlagUv`),i=t.getAttribute(`color`),a=new Float32Array(864),o=new Float32Array(1296),s=[];for(let e=0;e<8;e++){a.set(r.array,e*54*2),o.set(i.array,e*54*3);let t=sl(rd,id,e*54);for(let e=0;e<t.length;e++)s.push(t[e])}t.dispose(),n.setAttribute(`uv`,new I(a,2)),n.setAttribute(`color`,new I(o,3)),n.setIndex(s),n.setDrawRange(0,0);let c=ja({map:xd(),vertexColors:!0,side:2});c.name=`decoyFlag`,this.flags=new F(n,c),this.flags.name=`decoyCloths`,this.flags.frustumCulled=!1,Qi(this.flags);for(let e=0;e<8;e++)this.cloths.push(new $c(rd,id,td,nd)),this.phase[e]=e*2.1+.7;this.env={airX:0,airY:0,airZ:0,frameAX:0,frameAZ:0,gravity:9.8,airDrag:1.9,normalDrag:3.2,damping:.993,flutterAmp:0,flutterOmega:0,flutterK:.85,flutterPhase:0,iterations:4,groundY:.04},this.root.add(this.cups,this.poles,this.poleInk,this.flags)}pins(e,t){let n=this.cloths[e],r=Math.sin(t),i=Math.cos(t);for(let e=0;e<id;e++){let t=ad-e*n.restDY;n.pinX[e]=-r*t,n.pinY[e]=i*t,n.pinZ[e]=0}}update(e,t,n){let r=U.decoys.look,i=U.decoys.pop,a=U.decoys.life;this.time+=n,this.poppedN=0;let o=e.count,s=this.time,c=.35*(.55*Math.sin(s*.83+.3)+.3*Math.sin(s*2.1+1.1)+.15*Math.sin(s*5.3)),l=14*Math.PI/180+.16*Math.sin(s*.47+2),u=r.wind*(1+c),d=this.env;d.airX=Math.cos(l)*u,d.airZ=-Math.sin(l)*u,d.flutterAmp=.6*(.5+.85*u),d.flutterOmega=Math.PI*2*(1.1+.22*u);let f=this.flagPos.array,p=this.flagNrm.array;for(let c=0;c<o;c++){let o=this.cloths[c],l=r.sway*Math.sin(s*r.swayRate+this.phase[c])+.02*Math.sin(s*3.1+this.phase[c]*1.7);for(this.shown[c]!==e.spawns[c]&&(this.shown[c]=e.spawns[c],this.seenAt[c]=s,this.acc[c]=0,this.pins(c,l),o.reset(),e.age[c]<.05&&(this.popped[this.poppedN++]=c)),this.acc[c]=Math.min(this.acc[c]+n,od*sd);this.acc[c]>=od;)this.acc[c]-=od,d.flutterPhase=s*d.flutterOmega+this.phase[c]*3,this.pins(c,l),o.step(od,d);let u=e.age[c],m=Math.max(0,s-this.seenAt[c]),h=dd(Math.min(u,m)/i),g=Math.max(.001,Math.min(h,1-ud((u-(a-i))/i)))*t,_=e.x[c],v=e.z[c];pd.setFromAxisAngle(gd.set(0,0,1),l),fd.compose(md.set(_,0,v),pd,hd.set(g,g,g)),this.poles.setMatrixAt(c,fd),pd.identity(),fd.compose(md.set(_,0,v),pd,hd.set(g,g,g)),this.cups.setMatrixAt(c,fd);let y=o.pos,b=o.normals,x=c*54*3;for(let e=0;e<162;e+=3)f[x+e]=_+y[e]*g,f[x+e+1]=y[e+1]*g,f[x+e+2]=v+y[e+2]*g,p[x+e]=b[e],p[x+e+1]=b[e+1],p[x+e+2]=b[e+2]}this.poles.count=o,this.poleInk.count=o,this.cups.count=o,this.flags.geometry.setDrawRange(0,o*8*5*6),this.root.visible=o>0,o>0&&(this.poles.instanceMatrix.needsUpdate=!0,this.cups.instanceMatrix.needsUpdate=!0,this.flagPos.needsUpdate=!0,this.flagNrm.needsUpdate=!0)}},Cd={hero:16765471,gopher:11038783,gopherDark:8212266,cream:15983037,nose:15305882,eye:2300450,white:16513780,wood:11891515,woodDark:8276516,shingle:12863802,shingleDark:9844011,metal:5003875,metalDark:3094591,brass:14263361,sweeperRim:3526886,sweeperDeep:726052,sweeperSwirl:2776463,decoyFlag:16734854,decoyPole:16052714,decoyBand:14698074,dirt:9067059,skin:15843965,pants:3095132,shoe:3811876,club:14212582,grip:2829107,signRed:14826299,star:16767050},wd=new Ne,Td=new P,Ed=new w,Dd=new V,Od=new V,kd=(e,t,n,r=0,i=0,a=0,o=1,s=1,c=1)=>wd.compose(Dd.set(e,t,n),Td.setFromEuler(Ed.set(r,i,a)),Od.set(o,s,c));function Ad(){let e=new go(15);return e.add(new Oe(.42,.42,.08,20),kd(0,0,0,Math.PI/2),Cd.white),e.add(new Oe(.36,.36,.1,20),kd(0,0,0,Math.PI/2),Cd.signRed),e.box(-.1,0,.06,.1,.36,.04,Cd.white),e.box(.1,0,.06,.1,.36,.04,Cd.white),e.build()}function jd(){let e=new go(16);for(let t=0;t<3;t++){let n=t/3*Math.PI*2;e.add(Md(.14,.06,.05),kd(Math.cos(n)*.55,Math.sin(n*2)*.06,Math.sin(n)*.55),Cd.star)}return e.build()}function Md(e,t,n,r=5){let i=[],a=[],o=r*2;for(let r of[n/2,-n/2]){i.push(0,0,r);for(let n=0;n<o;n++){let a=n/o*Math.PI*2+Math.PI/2,s=n%2==0?e:t;i.push(Math.cos(a)*s,Math.sin(a)*s,r)}}let s=o+1;for(let e=0;e<o;e++){let t=1+e,n=1+(e+1)%o;a.push(0,t,n),a.push(s,s+n,s+t),a.push(t,s+t,s+n,t,s+n,n)}let c=new Le;return c.setAttribute(`position`,new me(i,3)),c.setIndex(a),c}var Nd={foam:15922926,c0:9429232,c1:4174044,c2:2325432,c3:1458040,eye:463914,ink:662064,speck:16186367},Pd=`
varying vec2 vP;
varying vec2 vW;
void main() {
  vP = position.xz;
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vW = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Fd=`
#include <common>
uniform float uSpin;
uniform float uEye;
uniform float uPulse;
uniform vec3 uFoam;
uniform vec3 uC0;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;
uniform vec3 uEyeCol;
uniform vec3 uInk;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uHemiSky;
uniform vec3 uHemiGround;
uniform vec3 uShadeTint;
${ga}
${va}
varying vec2 vP;
varying vec2 vW;
void main() {
  float r = length( vP );
  float px = max( fwidth( r ), 1e-4 );
  if ( r > 1.0 + px ) discard;
  float a = atan( vP.y, vP.x );
  // foam rim: an inner edge that wobbles and turns with the water
  float foamIn = 0.84 + 0.035 * sin( a * 7.0 - uSpin * 1.3 ) + 0.02 * sin( a * 3.0 + uSpin * 0.7 );
  // spiral coordinate (3 arms, drawing inwards as uSpin grows)
  float sp = ( a - uSpin ) * ( 3.0 / 6.2831853 ) - 1.6 * log( max( r, 0.03 ) );
  float band = fract( sp );
  float t = clamp( ( r - uEye ) / max( foamIn - uEye, 1e-3 ), 0.0, 1.0 );
  // three radial zones (light at the rim -> deep near the eye), each split by a darker arm
  float lvl = t > 0.6 ? 0.0 : t > 0.25 ? 1.0 : 2.0;
  float arm = step( 0.5, band );
  float idx = min( lvl + arm, 3.0 );
  vec3 col = idx < 0.5 ? uC0 : idx < 1.5 ? uC1 : idx < 2.5 ? uC2 : uC3;
  // thin ink on the arms' leading edges, a foam streak riding each arm's trailing edge (pixel widths from fwidth)
  float spx = max( fwidth( sp ), 1e-4 );
  float lead = abs( band - 0.5 ) / spx;
  col = mix( col, uInk, ( 1.0 - smoothstep( 0.6, 1.5, lead ) ) * 0.75 * smoothstep( 0.0, 0.12, t ) );
  float trail = abs( band - 0.06 ) / spx;
  col = mix( col, uFoam, ( 1.0 - smoothstep( 0.5, 1.6, trail ) ) * smoothstep( 0.15, 0.5, t ) * 0.85 );
  // foam rim + its ink lines
  float foam = smoothstep( foamIn - px, foamIn + px, r );
  col = mix( col, uFoam, foam );
  float inkIn = 1.0 - smoothstep( 0.8 * px, 1.8 * px, abs( r - foamIn ) );
  col = mix( col, uInk, inkIn * 0.55 );
  // the eye: a pale lip, then the navy hole
  float lip = smoothstep( uEye + 0.07 + px, uEye + 0.07 - px, r );
  col = mix( col, uC0, lip );
  float eye = smoothstep( uEye + px, uEye - px, r );
  // the eye: navy with the spiral running on in it, darker towards the middle
  vec3 eyeCol = mix( uEyeCol, uC3, step( 0.5, band ) * 0.55 * smoothstep( 0.2, 0.9, r / max( uEye, 1e-3 ) ) );
  col = mix( col, eyeCol, eye );
  // outer ink outline (~2 px)
  float outer = smoothstep( 1.0 - 2.4 * px, 1.0 - 1.2 * px, r );
  col = mix( col, uInk, outer );
  // lit like the ground (flat cel ambient + sun from above + the floodlight / player-light pools), a little glow
  vec3 amb = mix( uHemiGround, uHemiSky, 0.72 ) * uShadeTint * 1.3;
  vec3 light = ( amb + uSunColor * ( 0.35 + 0.65 * max( uSunDir.y, 0.0 ) ) ) * RECIPROCAL_PI + worldFlood( vW ) * 0.8;
  vec3 lit = col * min( light / 0.674, vec3( 1.6 ) );
  lit += col * ( 0.07 + 0.25 * uPulse ) * ( 1.0 - eye );
  gl_FragColor = vec4( lit, 1.0 );
}
`,Id=new Ne,Ld=new P,Rd=new V,zd=new V,Bd=new V(0,0,1),Vd=class{root=new tt;disc;mat;specks;speckN;spin=0;pulse=0;seq=0;time=0;constructor(){this.root.name=`vortex`;let e=e=>new z(e);this.mat=new oe({name:`vortex`,vertexShader:Pd,fragmentShader:Fd,uniforms:{uSpin:{value:0},uEye:{value:.3},uPulse:{value:0},uFoam:{value:e(Nd.foam)},uC0:{value:e(Nd.c0)},uC1:{value:e(Nd.c1)},uC2:{value:e(Nd.c2)},uC3:{value:e(Nd.c3)},uEyeCol:{value:e(Nd.eye)},uInk:{value:e(Nd.ink)},uSunDir:W.uSunDir,uSunColor:W.uSunColor,uHemiSky:W.uHemiSky,uHemiGround:W.uHemiGround,uShadeTint:W.uShadeTint,uHole:W.uHole,uFloodPools:W.uFloodPools,uFloodHeads:W.uFloodHeads,uFloodIslands:W.uFloodIslands,uFloodColor:W.uFloodColor,uFloodShape:W.uFloodShape,uFloodBox:W.uFloodBox,uHeroPool:W.uHeroPool,uNight:W.uNight,uPlayerLight:W.uPlayerLight,uPlayerColor:W.uPlayerColor}}),this.disc=new F(new je(1,64).rotateX(-Math.PI/2),this.mat),this.disc.name=`vortexDisc`,this.disc.position.y=.021,this.speckN=U.sweeper.look.specks,this.specks=new Ke(Md(1,.45,.004,4),new $e({color:Nd.speck,fog:!1,side:2}),this.speckN),this.specks.name=`vortexSpecks`,this.specks.instanceMatrix.setUsage(R),this.specks.frustumCulled=!1,this.root.add(this.disc,this.specks),this.root.visible=!1}update(e,t){if(this.root.visible=e.level>0&&e.pull>0,!this.root.visible)return;let n=U.sweeper.look;e.seq!==this.seq&&(this.seq=e.seq,this.pulse=1),this.pulse=Math.max(0,this.pulse-t*n.pulseDecay),this.time+=t,this.spin+=t*n.spinRate*(1+this.pulse*1.5),this.spin>1e4&&(this.spin-=Math.PI*2*1e3);let r=e.pull*(1+this.pulse*n.pulse);this.root.position.set(e.x,0,e.z),this.disc.scale.set(r,1,r);let i=this.mat.uniforms;i.uSpin.value=this.spin,i.uEye.value=Math.min(.8,e.radius/Math.max(.001,e.pull)),i.uPulse.value=this.pulse;let a=this.speckN,o=e.radius;for(let e=0;e<a;e++){let t=(this.time/n.speckPeriod+e/a)%1,i=o+(r*.86-o)*(1-t)*(1-t*.3),s=e*2.39996+t*5.5+this.spin*.6,c=.07*(.6+.4*Math.sin(e*1.7+1))*Math.min(1,(1-t)*4)*Math.min(1,t*6+.2);Ld.setFromAxisAngle(Bd,-s*2+e),Id.compose(Rd.set(Math.cos(s)*i,.03,Math.sin(s)*i),Ld,zd.set(c,c,c)),this.specks.setMatrixAt(e,Id)}this.specks.count=a,this.specks.instanceMatrix.needsUpdate=!0}},Hd=U.clubAlly.returnBalls,Ud=U.turret.shots,Wd=1+U.turret.shotTrail,Gd=24,Kd=.32,qd=1.9,Jd=3,Yd=31,Xd={width:.03,smoothAttr:!0,colorMix:.5,darken:.25};function Zd(e){let t=new tt;return t.name=e===0?`turret`:`turret${e+1}`,t.visible=!1,{root:t,head:null,barrel:null,wheels:[],wheelSide:new Float32Array(4),heading:Math.PI,x:0,z:0,seen:!1,life:new Zu,seqHit:0,seqLoad:0,seqShot:0}}var Qd=new Ne,$d=new P,ef=new V,tf=new V,nf=new V(0,1,0),rf=new V,af=new z,of=e=>e<=0?0:e>=1?1:e*e*(3-2*e),sf=Math.PI/180,cf=[`peek`,`pop_swing`,`duck`,`duck_peek`,`ready`],lf=0,uf=1,df=2,ff=3,pf=30;function mf(e,t,n){if(e<=t[0])return n[0];for(let r=1;r<t.length;r++)if(e<t[r])return n[r-1]+(n[r]-n[r-1])*of((e-t[r-1])/(t[r]-t[r-1]));return n[n.length-1]}function hf(e,t){let n=[],r=t=>{let r=ue.parseTrackName(t),i=ue.findNode(e,r.nodeName);if(!i)return{n:-1,prop:r.propertyName};let a=n.indexOf(i);return a<0&&(a=n.push(i)-1),{n:a,prop:r.propertyName}};for(let e of t)for(let t of e.tracks)r(t.name);let i=n.length,a=new Float32Array(i*4),o=new Float32Array(i*3);for(let e=0;e<i;e++)n[e].quaternion.toArray(a,e*4),n[e].position.toArray(o,e*3);return{nodes:n,clips:t.map(e=>{let t=Math.max(2,Math.ceil(e.duration*pf-1e-6)+1),n=new Float32Array(t*i*4),s=new Float32Array(t*i*3),c=new Uint8Array(i);for(let e=0;e<t;e++)n.set(a,e*i*4),s.set(o,e*i*3);for(let a of e.tracks){let{n:o,prop:l}=r(a.name),u=l===`quaternion`;if(o<0||!u&&l!==`position`)continue;a.getInterpolation()===2300&&(c[o]|=u?1:2);let d=a.createInterpolant(),f=u?4:3,p=u?n:s;for(let n=0;n<t;n++){let t=d.evaluate(Math.min(e.duration,n/pf)),r=(n*i+o)*f,a=r-i*4,s=u&&n>0&&p[a]*t[0]+p[a+1]*t[1]+p[a+2]*t[2]+p[a+3]*t[3]<0?-1:1;for(let e=0;e<f;e++)p[r+e]=t[e]*s}}return{frames:t,quat:n,pos:s,step:c}}),peek:t[lf].duration,pop:t[uf].duration,duck:t[df].duration}}function gf(e,t,n,r,i=Xd){let a=new Ke(e,t,n);a.name=r,a.instanceMatrix.setUsage(R),a.frustumCulled=!1,a.count=0,i.smoothAttr&&!e.getAttribute(`inkNormal`)&&qi(e);let o=new Ke(e,Ki(i),n);return o.name=`${r}-ink`,o.instanceMatrix=a.instanceMatrix,o.frustumCulled=!1,o.count=0,o.layers.disable(1),{mesh:a,ink:o}}var _f=class{root=new tt;gopher=new tt;gopherAnim=null;gopherT=0;roof=new tt;hat=null;canopy=null;gopherSize=null;assets=null;rovers=Array.from({length:3},(e,t)=>Zd(t));vortexes=Array.from({length:3},()=>new Vd);decoys=new Sd;bounceBalls;seqStun=0;returns;signs;stars;bursts;shotBalls;hole;burstT=new Float32Array(Gd).fill(1e9);burstPos=new Float32Array(72);burstSize=new Float32Array(Gd);burstNext=0;tmp3=new Float32Array(3);seqGopher=0;seqRoof=0;seqHit=new Uint32Array(3);allyHits=new Uint32Array(3);simNow=0;gopherLife=new Fu;time=0;def=null;ai=null;golfers=null;constructor(e,t=null){this.root.name=`defence`,this.hole=e;let n=U.gopher.look;this.gopher.name=`gopher`,this.gopher.position.set(n.x,0,n.z),this.gopher.rotation.y=n.yaw*sf,this.gopher.visible=!1,e.root.add(this.gopher),this.roof.name=`umbrella`,this.roof.visible=!1,(e.root.getObjectByName(`holePoleRig`)??e.root).add(this.roof),this.returns=new Ke(new Se(.16,10,8),ja({color:16753210,emissive:16742938,emissiveIntensity:.9}),Hd*3),this.returns.name=`allyReturnBalls`,this.returns.instanceMatrix.setUsage(R),this.returns.frustumCulled=!1,this.returns.count=0;let r=new $e({vertexColors:!0,fog:!1,toneMapped:!1,side:2});this.signs=gf(Ad(),r,dn,`timeoutSigns`,{...Xd,width:.05}),this.stars=new Ke(jd(),r,dn),this.stars.name=`timeoutStars`,this.stars.instanceMatrix.setUsage(R),this.stars.frustumCulled=!1,this.stars.count=0,this.bursts=new Ke(Md(1,.42,.02,8),new $e({color:16777215,fog:!1,toneMapped:!1,side:2}),Gd),this.bursts.name=`defenceBursts`,this.bursts.instanceMatrix.setUsage(R),this.bursts.instanceColor=new Ce(new Float32Array(72).fill(1),3),this.bursts.frustumCulled=!1,this.bursts.count=Gd,this.shotBalls=new Ke(new Se(U.turret.shotSize,10,8),ja({color:16777215,emissive:16774336,emissiveIntensity:.6}),Ud*3*Wd),this.shotBalls.name=`turretShots`,this.shotBalls.instanceMatrix.setUsage(R),this.shotBalls.frustumCulled=!1,this.shotBalls.count=0,this.bounceBalls=new Ke(new Se(.18,10,8),this.shotBalls.material,U.roof.bounceBack.balls*4),this.bounceBalls.name=`umbrellaBounceBalls`,this.bounceBalls.instanceMatrix.setUsage(R),this.bounceBalls.frustumCulled=!1,this.bounceBalls.count=0;for(let e of this.rovers)this.root.add(e.root);for(let e of this.vortexes)this.root.add(e.root);this.root.add(this.decoys.root,this.returns,this.signs.mesh,this.signs.ink,this.stars,this.bursts,this.shotBalls,this.bounceBalls),this.hideAllBursts(),Jn(this.load(t))}async load(e){let t=await yu(e);this.assets=t,t.umbrella&&this.buildUmbrella(t.umbrella.scene),t.gopher&&this.buildGopher(t.gopher.scene,t.gopher.animations,t.gopherMap),t.turret&&this.buildTurret(t.turret.scene,t.turretMap)}buildTurret(e,t){let n=ja({map:t,side:2});n.name=`turret`;let r=this.rovers[0];r.head=oo(e,`turret_head`),r.barrel=oo(e,`turret_barrel`),r.life.build(e,r.head,r.barrel),ao(e,{material:n,ink:{width:U.turret.ink,colorMix:0},cast:e=>e.name!==Ru});let i=[`turret_wheel_fr`,`turret_wheel_fl`,`turret_wheel_rl`,`turret_wheel_rr`];for(let t=0;t<this.rovers.length;t++){let n=this.rovers[t],r=t===0?e:e.clone(!0);t>0&&(n.head=oo(r,`turret_head`),n.barrel=oo(r,`turret_barrel`),n.life.bindClone(r,n.head,n.barrel,t));for(let e=0;e<i.length;e++){let t=oo(r,i[e]);n.wheels.push(t),n.wheelSide[e]=t.position.x>=0?1:-1}n.root.add(r)}}buildUmbrella(e){let t=ja({vertexColors:!0});t.name=`umbrella`,ao(e,{material:t,ink:{...Xd,width:U.roof.look.ink}}),e.traverse(e=>{e.isMesh&&(e.renderOrder=Yd)}),this.hat=oo(e,`umbrella_hat`),this.canopy=oo(e,`umbrella_canopy`),this.roof.add(e)}buildGopher(e,t,n){let r=[];for(let e=0;e<cf.length;e++){let n=Be.findByName(t,cf[e]);if(!n){console.warn(`[defence] gopher clip missing: ${cf[e]} (gopher skipped)`);return}r.push(n)}let i=hf(e,r),a=ja({map:n});a.name=`gopher`,ao(e,{material:a,ink:{width:U.gopher.look.ink,colorMix:0},frustumCulled:!1,cast:()=>!1}),this.gopher.add(e),this.gopherAnim=i,this.gopherLife.bind(this.gopher,e)}poseGopher(e){let t=this.gopherAnim;if(!t)return;let n=t.clips[e],r=n.frames-1,i=this.gopherT*pf;i>0?i>r&&(i=r):i=0;let a=Math.floor(i);a>r-1&&(a=r-1);let o=i-a,s=+(o>=1),c=t.nodes,l=c.length,u=n.quat,d=n.pos;for(let e=0;e<l;e++){let t=n.step[e],r=c[e],i=t&1?s:o,f=(a*l+e)*4,p=f+l*4,m=u[f],h=u[f+1],g=u[f+2],_=u[f+3];if(i>0){let e=u[p],t=u[p+1],n=u[p+2],r=u[p+3],a=m*e+h*t+g*n+_*r;a<0&&(e=-e,t=-t,n=-n,r=-r,a=-a);let o=1-i,s=i;if(a<.9995){let e=Math.acos(a),t=Math.sin(e);o=Math.sin(o*e)/t,s=Math.sin(s*e)/t}if(m=m*o+e*s,h=h*o+t*s,g=g*o+n*s,_=_*o+r*s,a>=.9995){let e=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=e,h*=e,g*=e,_*=e}}r.quaternion.set(m,h,g,_),i=t&2?s:o,f=(a*l+e)*3,p=f+l*3,r.position.set(d[f]+(d[p]-d[f])*i,d[f+1]+(d[p+1]-d[f+1])*i,d[f+2]+(d[p+2]-d[f+2])*i)}}attach(e,t){this.def=e,this.ai=t}setGolfers(e){this.golfers=e}update(e,t=0){let n=this.def;if(!n)return;let r=e.dt;this.time+=r,this.simNow=t,this.updateGopher(n,t,r),this.updateRoof(n,t);for(let e=0;e<3;e++)this.updateTurret(this.rovers[e],n.turrets[e],r);for(let e=0;e<3;e++)this.vortexes[e].update(n.sweepers[e],r);this.updateDecoys(n,r),this.updateBounce(n,t),this.updateAlly(n,t),this.updateTimeouts(),this.updateFan(n),this.updateBursts(r),this.updateShots(n)}updateGopher(e,t,n){let r=e.gopher,i=this.gopher;r.seq!==this.seqGopher&&(this.seqGopher=r.seq,this.burst(r.x,.35,r.z,.32,16774084));let a=t-r.popAt,o=a>=0&&a<U.gopher.popTime+.2,s=this.gopherAnim;if(i.visible=s!==null&&r.max>0&&(r.charges>0||o),!i.visible||!s)return;let c=lf;this.gopherT=0,a>=0&&a<s.pop?(c=uf,this.gopherT=a):a>=s.pop&&(a<s.pop+s.duck||r.charges<=0)&&(c=r.charges>0?ff:df,this.gopherT=Math.min(a-s.pop,s.duck)),this.poseGopher(c);let l=this.gopherLife;l.dt=n,l.popAge=a,l.popLen=s.pop,l.duckLen=s.duck;let u=this.hole.root.position;l.holeX=u.x,l.holeZ=u.z,l.update(e)}updateRoof(e,t){let n=e.roof,r=this.roof;n.seq!==this.seqRoof&&(this.seqRoof=n.seq,this.roofBurst(n.x,n.y,n.z));let i=this.hat,a=this.canopy,o=U.roof.look,s=t-n.hitAt,c=1,l=i!==null&&n.max>0;if(l&&n.charges<=0){let e=s/o.foldTime;l=e>=0&&e<1,c=1+(o.foldTo-1)*of(e)}if(r.visible=l,!l||!i||!a)return;let u=s>=0&&s<o.rockFor?o.rockAmp*Math.exp(-o.rockDecay*s)*Math.sin(o.rockFreq*s)*sf:0;i.rotation.set(o.rockTiltX*u,0,-u),a.scale.set(c,s>=0?mf(s,o.squashT,o.squashY):1,c)}roofBurst(e,t,n){let r=this.hat;if(r){let i=U.roof.look,a=U.roof.umbrellaCatch,o=a.radius;if(r.updateWorldMatrix(!0,!1),ef.set(e,t,n).applyMatrix4(Qd.copy(r.matrixWorld).invert()),a.mode!==`canopy`||ef.y>=0){let s=Math.sqrt(ef.x*ef.x+ef.z*ef.z);s>o&&(ef.x*=o/s,ef.z*=o/s,s=o);let c=i.canopyApex-a.fallY*(s/o)*(s/o)+i.burstLift;ef.y<c&&(ef.y=c),ef.applyMatrix4(r.matrixWorld),e=ef.x,t=ef.y,n=ef.z}}this.burst(e,t,n,.36,16767392)}updateTurret(e,t,n){let r=U.turret;t.hitSeq!==e.seqHit&&(e.seqHit=t.hitSeq,this.burst(t.to[0],t.to[1],t.to[2],r.popSize,16773754)),t.loadSeq!==e.seqLoad&&(e.seqLoad=t.loadSeq,this.burst(t.loadAt[0],.25,t.loadAt[2],.22,16777215)),t.seq!==e.seqShot&&(e.seqShot=t.seq,this.burst(t.from[0],t.from[1],t.from[2],.26,16774848));let i=e.head,a=e.barrel;if(e.root.visible=t.level>0&&i!==null,!e.root.visible||!i||!a){e.seen=!1,e.life.hide();return}let o=e.heading;if(t.vx*t.vx+t.vz*t.vz>r.turnAbove*r.turnAbove){let i=Math.atan2(t.vx,t.vz)-o;i=Math.atan2(Math.sin(i),Math.cos(i));let a=o+i*(1-Math.exp(-r.turnRate*n));e.heading=Math.atan2(Math.sin(a),Math.cos(a))}e.root.position.set(t.x,0,t.z),e.root.rotation.set(0,e.heading,0);let s=t.x-e.x,c=t.z-e.z;if(e.seen&&s*s+c*c<4){let t=s*Math.sin(e.heading)+c*Math.cos(e.heading),n=e.heading-o;n=Math.atan2(Math.sin(n),Math.cos(n));for(let i=0;i<e.wheels.length;i++){let a=e.wheels[i];a.rotation.x=(a.rotation.x+(t-e.wheelSide[i]*r.halfTrack*n)/r.wheelRadius)%(Math.PI*2)}}e.x=t.x,e.z=t.z,e.seen=!0;let l=e.life;l.dt=n,l.simNow=this.simNow,l.heading=e.heading;let u=this.hole.root.position;l.holeX=u.x,l.holeZ=u.z,l.update(t,e.root)}updateDecoys(e,t){let n=this.decoys,r=e.decoys;n.update(r,e.holeScale,t);for(let t=0;t<n.poppedN;t++){let i=n.popped[t];this.burst(r.x[i],.6*e.holeScale,r.z[i],.6,16751288)}}updateBounce(e,t){let n=0,r=this.golfers?this.golfers.heads:null,i=U.roof.bounceBack.balls,a=e.roof;for(let o=0;o<i;o++)if(e.bouncePos(o,t,this.tmp3,r)){Qd.makeTranslation(this.tmp3[0],this.tmp3[1],this.tmp3[2]),this.bounceBalls.setMatrixAt(n++,Qd);for(let i=1;i<=Jd;i++){let s=t-i*.035;if(s<a.bT0[o]||!e.bouncePos(o,s,this.tmp3,r))break;let c=1-i/4;Qd.makeScale(c,c,c).setPosition(this.tmp3[0],this.tmp3[1],this.tmp3[2]),this.bounceBalls.setMatrixAt(n++,Qd)}}this.bounceBalls.count=n,n>0&&(this.bounceBalls.instanceMatrix.needsUpdate=!0);let o=e.roof;if(o.stunSeq!==this.seqStun){this.seqStun=o.stunSeq;let e=o.stunGolfer,t=this.ai?.slots[e];r?this.burst(r[e*3],r[e*3+1]+.3,r[e*3+2],.8,16773754):t&&this.burst(t.x,t.y+1.9,t.z,.8,16773754)}}updateAlly(e,t){let n=0,r=this.golfers?this.golfers.heads:null;for(let i=0;i<3;i++){let a=e.allies[i];for(let i=0;i<Hd;i++)e.returnPos(a,i,t,this.tmp3,r)&&(Qd.makeTranslation(this.tmp3[0],this.tmp3[1],this.tmp3[2]),this.returns.setMatrixAt(n++,Qd));this.allyBursts(a,i)}this.returns.count=n,n>0&&(this.returns.instanceMatrix.needsUpdate=!0)}allyBursts(e,t){if(e.hitSeq!==this.seqHit[t]){this.seqHit[t]=e.hitSeq;let n=this.golfers?this.golfers.heads:null,r=this.ai?.slots[e.hitGolfer];n?this.burst(n[e.hitGolfer*3],n[e.hitGolfer*3+1]+.3,n[e.hitGolfer*3+2],.8,16738874):r&&this.burst(r.x,r.y+1.9,r.z,.8,16753210)}if(e.hits!==this.allyHits[t]){this.allyHits[t]=e.hits;let n=Math.cos(e.facing),r=Math.sin(e.facing),i=wr.ballLocal;this.burst(e.x+(n*i[0]+r*i[2])*1,.3,e.z+(-r*i[0]+n*i[2])*1,.4,16777215)}}updateTimeouts(){let e=this.ai,t=this.golfers,n=0;if(e&&t){let r=t.heads;for(let t=0;t<e.active&&n<dn;t++){let i=e.timeoutLeft(t);if(i<=0)continue;let a=r[t*3],o=r[t*3+1],s=r[t*3+2],c=qd*Math.min(1,i/.4)*(1+.08*Math.sin(this.time*6+t));$d.setFromAxisAngle(rf.set(0,0,1),Math.sin(this.time*3+t)*.18),Qd.compose(ef.set(a,o+1.35+Math.sin(this.time*2.4+t)*.08,s+.1),$d,tf.set(c,c,c)),this.signs.mesh.setMatrixAt(n,Qd),$d.setFromAxisAngle(nf,this.time*3.5+t),Qd.compose(ef.set(a,o+.4,s),$d,tf.set(c*.8,c*.8,c*.8)),this.stars.setMatrixAt(n,Qd),n++}}this.signs.mesh.count=n,this.signs.ink.count=n,this.stars.count=n,n>0&&(this.signs.mesh.instanceMatrix.needsUpdate=!0,this.stars.instanceMatrix.needsUpdate=!0)}updateFan(e){let t=e.fan,n=U.flagFan,r=this.hole;if(t.level<=0||t.phase===0){r.fanDrop=0,r.fanSpin=0,r.fanWind=0;return}let i=t.phaseT,a=1,o=0,s=0;if(t.phase===1)a=of(i/n.lower);else if(t.phase===2){let e=t.spin,r=Math.min(n.spinEase,e/2),a=Math.min(i,r);if(s=n.spinRate*a*a/(2*r),i>r&&(s+=n.spinRate*(Math.min(i,e-r)-r)),i>e-r){let t=Math.min(i,e)-(e-r);s+=n.spinRate*(t-t*t/(2*r))}o=Math.min(1,i/r,Math.max(0,(e-i)/r))}else t.phase===3&&(a=1-of(i/n.rise));r.fanDrop=a,r.fanSpin=s,r.fanWind=o}burst(e,t,n,r,i){let a=this.burstNext;this.burstNext=(a+1)%Gd,this.burstT[a]=0,this.burstPos[a*3]=e,this.burstPos[a*3+1]=t,this.burstPos[a*3+2]=n,this.burstSize[a]=r,af.setHex(i),this.bursts.setColorAt(a,af),this.bursts.instanceColor.needsUpdate=!0}hideAllBursts(){Qd.makeScale(0,0,0);for(let e=0;e<Gd;e++)this.bursts.setMatrixAt(e,Qd)}updateBursts(e){let t=!1;for(let n=0;n<Gd;n++){if(this.burstT[n]>Kd)continue;this.burstT[n]+=e;let r=this.burstT[n]/Kd,i=r>=1?0:this.burstSize[n]*(r<.25?of(r/.25)*1.15:1.15*(1-of((r-.25)/.75)));$d.setFromAxisAngle(rf.set(0,0,1),r*1.2+n),Qd.compose(ef.set(this.burstPos[n*3],this.burstPos[n*3+1],this.burstPos[n*3+2]),$d,tf.set(i,i,i)),this.bursts.setMatrixAt(n,Qd),t=!0}t&&(this.bursts.instanceMatrix.needsUpdate=!0)}updateShots(e){let t=0,n=this.simNow;for(let r=0;r<3;r++){let i=e.turrets[r];if(!(i.level<=0))for(let e=0;e<Ud;e++){if(i.sAlive[e]===0)continue;let r=e*3,a=(n-i.sStart[e])/i.sDur[e];for(let e=0;e<Wd;e++){let n=a-e*.14;if(e>0&&n<=0)break;n=n<0?0:n>1?1:n;let o=1-e/(Wd+.5);Qd.makeScale(o,o,o).setPosition(i.sFrom[r]+(i.sTo[r]-i.sFrom[r])*n,i.sFrom[r+1]+(i.sTo[r+1]-i.sFrom[r+1])*n,i.sFrom[r+2]+(i.sTo[r+2]-i.sFrom[r+2])*n),this.shotBalls.setMatrixAt(t++,Qd)}}}this.shotBalls.count=t,t>0&&(this.shotBalls.instanceMatrix.needsUpdate=!0)}dispose(){this.root.traverse(e=>{let t=e;t.isMesh&&t.geometry.dispose()})}},vf={off:0,idle:1,outro:2},yf=e=>{let t=Math.min(1,Math.max(0,e));return t*t*t*(t*(t*6-15)+10)},bf=e=>{let t=Math.min(1,Math.max(0,e))-1;return 1+t*t*(2.7*t+1.7)},xf=e=>e>0&&e<.14?Math.sin(Math.PI*e/.14):0,Sf=new V,Cf=class{root=new tt;holeScale=1;baseScale=1;fogScale=1;onStart=null;onSettings=null;crowd=null;poof=null;startHole=()=>1;startLevel=()=>0;pickX=0;pickZ=0;pickH=0;rangeSlid=!0;hoverP=null;lastT=0;signMat=null;state=vf.off;blendE=1;holeCasters=null;holeCasts=!0;time=0;action=`play`;snapped=!0;follow=null;poseX=0;poseY=0;poseZ=0;poseP=0;poseFov=50;landHole=1;kbSel=null;letters=[];still=null;introEnd=1;extras=[];playWide=null;playNarrow=null;signCont=null;signSet=null;playWideTex=null;playNarrowTex=null;playWideText=null;playNarrowText=null;contTex=null;setTex=null;continueLabel=null;loaded=!1;introHold=!1;halfW=10;tFx=0;tFz=0;tDist=60;tFov=50;tFog=1;constructor(){this.root.name=`title`,this.root.visible=!1}get active(){return this.state!==vf.off}get blend(){return this.blendE}get pickerDriving(){return this.state!==vf.off}updatePicker(e,t,n){let r=this.state===vf.off?1:this.blendE;if(r>=1){this.pickX=e,this.pickZ=t,this.pickH=n;return}let i=S,a=this.root.position.x+i.pickerX,o=this.root.position.z+i.pickerZ,s=i.pickerHeading,c=n-s;this.pickX=a+(e-a)*r,this.pickZ=o+(t-o)*r,this.pickH=s+Math.atan2(Math.sin(c),Math.cos(c))*r}get idle(){return this.state===vf.idle}async load(){let e=await new Vn().parseAsync(s(`actors/title/letters.glb`),``),t=new Map;e.scene.traverse(e=>{e.isMesh&&e.name.startsWith(`L_`)&&t.set(e.name.slice(2),e.geometry)});let n=ja({vertexColors:!0,painted:!0}),r=S,i=Dt*r.holeScale,a=(e,a,o,s,c,l,u)=>{let d=[];for(let n of e)if(n===` `)d.push({g:null,w:a*.32});else if(n===`*`)d.push({g:null,w:2*i+2*r.oGap});else{let e=this.layFlat(t.get(n).clone(),a,o,s,c);d.push({g:e,w:e.boundingBox.max.x-e.boundingBox.min.x})}let f=d.reduce((e,t)=>e+t.w,0)+u*(d.length-1),p=0,m=-1;d.forEach((t,n)=>{m<0&&e[n]===`*`&&(m=p+t.w/2),p+=t.w+u}),p=m>=0?-m:-f/2,this.halfW=Math.max(this.halfW,-p,p+f);let h=new z(s);for(let e of d){if(e.g){let t=new F(e.g,n);t.name=`titleLetter`;let i=this.piece(t,p+e.w/2,l,a,h,this.letters);Qi(t);let o=Ji(t,{width:r.inkWidth,smoothAttr:!0,colorMix:.35,darken:.35});o.layers.disable(1),i.g.add(o)}p+=e.w+u}};a(`H*LE`,r.capHole,r.blockHole,r.faceHole,r.sideHole,0,r.gapHole),a(`IN NONE`,r.capNone,r.blockNone,r.faceNone,r.sideNone,r.zNone,r.gapNone);let o=[];for(let e of this.letters){let t=e.g.children[0];o.push(t.geometry.clone().translate(e.g.position.x,0,e.g.position.z))}let c=new F(zn(o,!1),n);for(let e of o)e.dispose();c.name=`titleLetters`,this.still=new tt,this.still.add(c),this.root.add(this.still),Qi(c),Ji(c,{width:r.inkWidth,smoothAttr:!0,colorMix:.35,darken:.35}).layers.disable(1),this.introEnd=r.inStart+this.letters.length*r.inStep+r.inPop;let l=r.rowHalf,u=2*l-r.signW-r.signGap,d=u-r.signW-r.signGap,f=e=>this.canvasTex(Math.round(256*e/r.signH/64)*64,256);this.contTex=f(r.signW),this.setTex=f(r.signW),this.playWideTex=f(u),this.playNarrowTex=f(d),this.playWideText=f(u),this.playNarrowText=f(d),this.signCont=this.sign(-l+r.signW/2,r.signW,this.contTex,4173386,r.signTilt[0],0),this.signSet=this.sign(l-r.signW/2,r.signW,this.setTex,3833808,r.signTilt[2],2.1),this.playWide=this.sign(-l+u/2,u,this.playWideTex,r.signPlay,r.signTilt[1],4.3,this.playWideText),this.playNarrow=this.sign(-l+r.signW+r.signGap+d/2,d,this.playNarrowTex,r.signPlay,r.signTilt[1],4.3,this.playNarrowText),this.paintText(),h(()=>this.paintText()),document.fonts.addEventListener(`loadingdone`,()=>this.paintText()),this.loaded=!0}layFlat(e,t,n,r,i){e.computeBoundingBox();let a=e.boundingBox.max.z-e.boundingBox.min.z;e.scale(t,t,n/a),e.rotateX(-Math.PI/2),e.computeBoundingBox();let o=e.boundingBox;e.translate(-(o.min.x+o.max.x)/2,-o.min.y,-(o.min.z+o.max.z)/2),e.computeBoundingBox();let s=e.getAttribute(`normal`),c=new Float32Array(s.count*3),l=new z(r),u=new z(i);for(let e=0;e<s.count;e++){let t=s.getY(e)>.7?l:u;c[e*3]=t.r,c[e*3+1]=t.g,c[e*3+2]=t.b}return e.setAttribute(`color`,new I(c,3)),e}piece(e,t,n,r,i,a,o=0){let s=new tt;s.position.set(t,0,n),s.add(e),this.root.add(s);let c={g:s,size:r,col:i,tIn:0,tOut:0,puffed:!1,w:o,text:null,hinge:null,tilt:0,phase:0,kickT:-9,kickA:0,hov:0};return a.push(c),c}canvasTex(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=new ke(n);return r.colorSpace=de,r.anisotropy=4,r}sign(e,t,n,r,i,a,o=null){let s=S,c=new tt,l=new z(Hn.post),u=new z(9071178),d=new z(Hn.ropeLight),f=new z(Hn.brass),p=this.signMat??=ja({vertexColors:!0,painted:!0}),m=(e,t)=>{let n=e.getAttribute(`position`).count,r=new Float32Array(n*3);for(let e=0;e<n;e++)t.toArray(r,e*3);return e.setAttribute(`color`,new I(r,3)),e},h=(e,t,n)=>{let r=new F(zn(e,!1),p);for(let t of e)t.dispose();return r.name=t,n.add(r),Qi(r),Ji(r,{width:s.signInk,smoothAttr:!0,colorMix:.4,darken:.3}).layers.disable(1),r},g=s.signH*.5*Math.cos(s.signLean)+.55,_=s.signH/2+s.signHang,v=g+_*Math.cos(s.signLean),y=-_*Math.sin(s.signLean),b=t/2-.5,x=[];for(let e of[-1,1])x.push(m(new Ye(.3,v+.2,.3).translate(e*b,(v+.2)/2,y),l)),x.push(m(new Me(.32,.42,4).rotateY(Math.PI/4).translate(e*b,v+.42,y),u));x.push(m(new Ye(2*b+.6,.38,.38).translate(0,v,y),u)),h(x,`titleSignFrame`,c);let C=new tt;C.position.set(0,v,y),C.rotation.set(-s.signLean,0,i),c.add(C);let w=-_,T=Math.min(t*.36,t/2-.9),E=[m(new Ye(t,s.signH,.2).translate(0,w,0),new z(r))];for(let e of[-1,1])E.push(m(new Ye(.15,s.signHang+.2,.15).translate(e*T,-s.signHang/2,0),d)),E.push(m(new Ye(.32,.3,.3).translate(e*T,w+s.signH/2,0),f));h(E,`titleSign`,C);let D=new F(new fe(t-.3,s.signH-.3),ja({map:n}));D.position.set(0,w,.105),C.add(D);let O=this.piece(c,e,s.zSigns,t*.6,new z(r),this.extras,t);if(O.hinge=C,O.tilt=i,O.phase=a,o){let e=new F(new fe(t-.3,s.signH-.3),ja({map:o,alphaTest:.5}));e.position.set(0,w,.13),C.add(e),O.text=e}return O}paintText(){let e=m(f());this.paintSign(this.playWideTex,p(`tapToPlay`),null,!1,e,this.playWideText),this.paintSign(this.playNarrowTex,p(`tapToPlay`),null,!1,e,this.playNarrowText),this.paintSign(this.setTex,p(`settings`),null,!0,e),this.paintSign(this.contTex,p(`continue`),this.continueLabel,!1,e)}paintSign(e,t,n,r,i,a=null){if(!e)return;let o=a!==null,s=e.image,c=s.getContext(`2d`),l=s.width,u=s.height,d=c.createLinearGradient(0,0,0,u);d.addColorStop(0,o?Hn.flagTop:Hn.creamTop),d.addColorStop(1,o?Hn.flagBot:Hn.creamBot),c.fillStyle=d,c.fillRect(0,0,l,u),c.strokeStyle=o?`rgba(199,154,18,.28)`:`rgba(138,106,74,.13)`,c.lineCap=`round`,c.lineWidth=5,c.beginPath();for(let e=0;e<9;e++){let t=u*(.2+.075*e)+e*37%11,n=e*151%97/97;c.moveTo(l*(.06+.3*n),t),c.lineTo(l*(.42+.5*n*(1-n)+e%3*.08),t+(e%2*2-1)*2)}c.stroke();let f=u*.055,p=u*.07;c.strokeStyle=o?Hn.flagHi:`#ffffff`,c.globalAlpha=.85,c.lineWidth=u*.03,c.beginPath(),c.moveTo(f+p,f+u*.045),c.lineTo(l-f-p,f+u*.045),c.stroke(),c.globalAlpha=1,c.beginPath(),c.moveTo(f+p,f),c.arcTo(l-f,f,l-f,u-f,p),c.arcTo(l-f,u-f,f,u-f,p),c.arcTo(f,u-f,f,f,p),c.arcTo(f,f,l-f,f,p),c.closePath(),c.strokeStyle=Hn.ink,c.lineWidth=u*.04,c.stroke();let m=u*.052,h=f+u*.085;for(let e=0;e<4;e++){let t=e&1?l-h:h,n=e&2?u-h:h;c.beginPath(),c.arc(t,n,m,0,Math.PI*2),c.fillStyle=Hn.steel,c.fill(),c.lineWidth=u*.014,c.strokeStyle=Hn.ink,c.stroke(),c.beginPath();let r=.5+e*.9;c.moveTo(t-Math.cos(r)*m*.62,n-Math.sin(r)*m*.62),c.lineTo(t+Math.cos(r)*m*.62,n+Math.sin(r)*m*.62),c.stroke()}a&&(e.needsUpdate=!0,c=a.image.getContext(`2d`),c.clearRect(0,0,l,u)),c.textAlign=`center`,c.textBaseline=`middle`;let _=`rgba(42,33,27,.26)`,v=u*.028,y=0;if(r){let e=u*.46/24,t=/d="([^"]+)"/.exec(g.gear)?.[1],n=u*.17;if(t){let r=new Path2D(t);for(let t=0;t<2;t++)c.save(),c.translate(n,u/2-12*e+(t?0:v)),c.scale(e,e),c.fillStyle=t?Hn.navy:_,c.fill(r,`evenodd`),c.restore()}y=n+24*e+u*.05}let b=(e,t,n)=>{c.font=`${t}px ${i}`;let r=c.measureText(e).width;return r>n?Math.floor(t*n/r):t},x=(e,t,n,r)=>{c.fillStyle=_,c.fillText(e,t,n+v),c.fillStyle=r,c.fillText(e,t,n)},C=u*.24,w=y+(l-y)/2,T=(l-y-(r?C*.6:2*C))/(o?1+2*S.tapPulseAmp:1),E=t.toUpperCase();n?(c.font=`${b(E,100,T)}px ${i}`,x(E,w,u*.37,Hn.navy),c.font=`${b(n,72,T)}px ${i}`,x(n,w,u*.72,`#3d6b2f`)):(c.font=`${b(E,o?146:124,T)}px ${i}`,x(E,w,u*.53,Hn.navy)),e.needsUpdate=!0,a&&(a.needsUpdate=!0)}setContinue(e){e!==this.continueLabel&&(this.continueLabel=e,this.loaded&&this.paintSign(this.contTex,p(`continue`),e,!1,m(f())))}key(e){if(this.state!==vf.idle)return!1;let t=this.continueLabel!==null,n=t?3:2,r=e=>t?[`continue`,`play`,`settings`][e]:[`play`,`settings`][e];if(e===`ArrowLeft`||e===`ArrowRight`||e===`ArrowUp`||e===`ArrowDown`){let t=-1;for(let e=0;e<n;e++)r(e)===this.kbSel&&(t=e);let i=e===`ArrowLeft`||e===`ArrowUp`?-1:1;return this.kbSel=r(t<0?i>0?0:n-1:(t+i+n)%n),!0}if(e===`KeyS`)return this.kick(this.signSet,S.signKickPress),this.onSettings?.(),!0;if(e===`Enter`||e===`NumpadEnter`||e===`Space`){let e=this.kbSel!==null&&(t||this.kbSel!==`continue`)?this.kbSel:r(0);return e===`settings`?(this.kick(this.signSet,S.signKickPress),this.onSettings?.()):this.start(e),!0}return!1}press(e,t,n){if(this.state!==vf.idle)return;let r=this.continueLabel!==null&&e===null?`continue`:`play`;e!==null&&t!==null&&(this.hitSign(this.signSet,e,t,n)?r=`settings`:this.continueLabel!==null&&this.hitSign(this.signCont,e,t,n)&&(r=`continue`)),r===`settings`?(this.kick(this.signSet,S.signKickPress),this.onSettings?.()):this.start(r)}hover(e,t,n){let r=null;if(this.state===vf.idle&&this.time>this.introEnd){let i=this.continueLabel!==null,a=i?this.playNarrow:this.playWide;this.hitSign(this.signSet,e,t,n)?r=this.signSet:i&&this.hitSign(this.signCont,e,t,n)?r=this.signCont:this.hitSign(a,e,t,n)&&(r=a)}return r!==this.hoverP&&(this.hoverP=r,this.kick(r,S.signKickHover)),r!==null}kick(e,t){e&&(e.kickT=this.time,e.kickA=t)}get swoopAction(){return this.state===vf.outro?this.action:null}start(e){if(this.state===vf.idle){this.action=e,this.state=vf.outro,this.time=0,this.snapped=!1,this.landHole=this.startHole(e),this.rangeSlid=!1,this.crowd?.begin(this.landHole,e===`play`),this.hoverP=null;for(let e of this.letters)e.puffed=!1;for(let e of this.extras)e.puffed=!1}}hitSign(e,t,n,r){if(!e||!e.g.visible)return!1;let i=S,a=e.g.position.x+this.root.position.x,o=e.g.position.z+this.root.position.z;Sf.set(a-e.w/2,.3,o+.6).project(r);let s=Sf.x,c=Sf.y;Sf.set(a+e.w/2,i.signH*Math.cos(i.signLean)+1,o-i.signH*Math.sin(i.signLean)).project(r);let l=.06,u=.04;return t>Math.min(s,Sf.x)-l&&t<Math.max(s,Sf.x)+l&&n>Math.min(c,Sf.y)-u&&n<Math.max(c,Sf.y)+u}frameCamera(e,t,n,r,i){let a=n.camera;if(!e||!this.loaded){this.state!==vf.off&&(this.state=vf.off,this.blendE=1,this.root.visible=!1,this.holeScale=1,this.fogScale=1,a.rotation.order=`XYZ`,n.refresh());return}if(this.state===vf.off){this.state=vf.idle,this.time=0,this.kbSel=null,this.root.visible=!0,this.crowd?.show(),this.rangeSlid=!0,this.hoverP=null,this.lastT=0;for(let e=0;e<this.letters.length;e++)this.letters[e].tIn=S.inStart+e*S.inStep;for(let e of this.extras)e.tIn=S.inStart+this.letters.length*S.inStep;for(let e=0;e<this.letters.length;e++)this.letters[e].tOut=S.outStart+e*S.outStep;for(let e of this.extras)e.tOut=0}(!this.introHold||this.state!==vf.idle)&&(this.time+=t),this.root.position.set(r,0,i),this.state===vf.idle&&H.target!==It&&fn(It,!1),this.state===vf.outro&&!this.rangeSlid&&this.time>=S.rangeStart&&(this.rangeSlid=!0,$t(this.startLevel(this.action),!0)),this.state===vf.outro&&!this.snapped&&(this.snapped=!0,n.setBuilding(Yt(In(this.landHole,rn.holes)),!0));let o=S,s=a.aspect,c=B.clamp((s-.45)/1.33,0,1),l=B.lerp(o.fovPortrait,o.fovLandscape,c),u=B.degToRad(B.lerp(o.pitchPortrait,o.pitchLandscape,c)),d=Math.tan(B.degToRad(l)*.5)*s,f=Math.cos(u),p=B.lerp(o.focusZPortrait,o.focusZLandscape,c),m=Math.max(o.camDist,(this.halfW+o.margin)/d-p*f,(o.rowHalf+o.margin)/d+(o.zSigns-p)*f);this.tFx=r,this.tFz=i+p,this.tDist=m,this.tFov=l,this.tFog=Math.max(1,m/o.fogRef);let h=0;this.state===vf.outro&&(h=yf(B.clamp((this.time-o.camStart)/o.camDur,0,1)**+o.camEaseIn)),this.blendE=h;let g=B.lerp(this.tFx,n.focusX,h),_=B.lerp(this.tFz,n.focusZ,h),v=Math.exp(B.lerp(Math.log(this.tDist),Math.log(n.distance),h)),y=B.lerp(u,B.degToRad(n.pitchDeg),h),b=B.lerp(this.tFov,n.followFov,h);this.fogScale=B.lerp(this.tFog,1,h),this.follow=n,this.poseX=g,this.poseY=v*Math.sin(y),this.poseZ=_+v*Math.cos(y),this.poseP=y,this.poseFov=b,this.applyPose(a);let x=Math.min(1,this.time/.6),C=this.baseScale,w=C+(o.holeScale-C)*yf(x);this.state===vf.outro&&(w=C+(o.holeScale-C)*(1-yf((this.time-o.holeStart)/o.holeDur))),this.holeScale=w/C,this.state===vf.outro&&this.time>=o.camStart+o.camDur&&(this.root.visible=!1,this.crowd?.finish(),this.onStart?.(this.action))}applyPose(e){e.position.set(this.poseX,this.poseY,this.poseZ),e.rotation.set(-this.poseP,0,0,`YXZ`),e.fov!==this.poseFov&&(e.fov=this.poseFov,e.updateProjectionMatrix()),e.updateMatrixWorld()}resnap(){let e=this.follow;e&&(e.setBuilding(Yt(In(this.landHole,rn.holes)),!0),this.applyPose(e.camera))}update(e){let t=this.baseScale,n=this.holeScale*t;e.root.scale.setScalar(n);let r=this.state!==vf.idle;if(r!==this.holeCasts){if(this.holeCasts=r,!this.holeCasters){let t=[];e.root.traverse(e=>{e.layers.isEnabled(1)&&t.push(e)}),this.holeCasters=t}for(let e of this.holeCasters)r?e.layers.enable(1):e.layers.disable(1)}let i=(n-t)/(S.holeScale-t);if(e.rigScale=this.state===vf.off?1:(t+(S.flagScale-t)*i)/n,this.state===vf.off)return;let a=S,o=this.time,s=this.state===vf.outro;s&&this.poof&&this.crowd?.update(o,this.poof)&&this.resnap();let c=o%a.tapPulse/a.tapPulse,l=1+a.tapPulseAmp*(1.6*xf(c)+1.1*xf(c-.2)),u=!s&&o>this.introEnd,d=this.kbSel,f=this.continueLabel!==null,p=!u||d===null?null:d===`settings`?this.signSet:d===`continue`?f?this.signCont:null:f?this.playNarrow:this.playWide,m=1.07+.03*Math.sin(o*7),h=Math.min(.1,Math.max(0,o-this.lastT));this.lastT=o;let g=Math.min(1,h*12),_=2*Math.PI/a.signSwayPeriod;this.still&&(this.still.visible=u);let v=this.letters.length+this.extras.length;for(let e=0;e<v;e++){let t=e<this.letters.length?this.letters[e]:this.extras[e-this.letters.length];if(u&&e<this.letters.length){t.g.visible=!1;continue}let n=s?1:bf((o-t.tIn)/a.inPop),r=n,i=0,c=this.continueLabel!==null;if(((t===this.signCont||t===this.playNarrow)&&!c||t===this.playWide&&c)&&(n=r=0),t===p&&(n*=m,r*=m),t.text&&t.text.scale.set(s?1:l,s?1:l,1),t.hinge){let e=o-t.kickT,s=e>=0&&e<2?t.kickA*Math.exp(-3*e)*Math.sin(10*e):0,c=o*_+t.phase;t.hinge.rotation.set(-a.signLean+a.signRock*Math.sin(c*.77+1.3)-.5*s,0,t.tilt+a.signSway*Math.sin(c)+s),t.hov+=((u&&t===this.hoverP?1:0)-t.hov)*g,n*=1+a.signHoverScale*t.hov,r*=1+a.signHoverScale*t.hov,i=a.signHoverLift*t.hov}if(s){let e=o-t.tOut;if(e>0){if(e<.07){let t=e/.07;r=1-.45*t,n=1+.16*t}else{let a=Math.min(1,(e-.07)/.11);n=1.16*(1-a*a),r=(.55+.8*a)*(1-a*a),i=a*t.size*.12,t.puffed||(t.puffed=!0,n>0&&t.g.visible&&(t.g.getWorldPosition(Sf),this.poof?.burst(Sf.x,0,Sf.z+.3*t.size,t.size*.6,t.col.r,t.col.g,t.col.b)))}}}let d=n>.001&&r>.001;t.g.visible=d,d&&(t.g.scale.set(n,r,n),t.g.position.y=i)}}},wf=4,Tf=class e{count=0;rows=ln;keep=0;startRows=1;armed=!1;goTime=new Float32Array(dn);ownPuff=new Uint8Array(dn);order=new Int16Array(dn);goes=0;puffed=0;gone=0;waveT=new Float32Array(ln);vanishT=new Float32Array(ln);waved=new Uint8Array(ln);ai;constructor(e){this.ai=e}show(){this.count=this.ai.showTitleCrowd(S.crowdShare),this.rows=ln,this.armed=!1,this.ai.titleShoot(!0)}static fromRight(e){return(ln-1-e)%2==0}static half(){return vt/2+1}begin(t,n){let r=S,i=this.ai;i.titleShoot(!1),this.startRows=Math.max(1,Math.min(ln,In(t,rn.holes))),this.keep=Math.max(0,Math.min(this.count,n?i.titleKeep:0));let a=e.half(),o=x.grow+r.coverHold;for(let e=0;e<ln;e++)this.waveT[e]=r.tierStart+(ln-1-e)*r.tierStep,this.vanishT[e]=e>=this.startRows?this.waveT[e]+r.buildingWave+o:1e9,this.waved[e]=e>=this.startRows?0:1;let s=0;for(let t=this.keep;t<this.count;t++){let n=i.slots[t],c=Math.max(0,Math.min(ln-1,n.row)),l=Math.max(0,Math.min(1,(a-n.x)/(2*a))),u=e.fromRight(c)?l:1-l,d=c>=this.startRows;this.goTime[t]=this.waveT[c]+u*r.buildingWave+(d?o:0),this.ownPuff[t]=+!d;let f=s++;for(;f>0&&this.goTime[this.order[f-1]]>this.goTime[t];)this.order[f]=this.order[f-1],f--;this.order[f]=t}this.goes=s,this.puffed=0,this.gone=0,this.armed=!0}update(t,n){if(!this.armed)return!1;let r=S,i=this.ai;for(let i=ln-1;i>=this.startRows;i--){if(this.waved[i]||this.waveT[i]>t)continue;this.waved[i]=1;let a=e.half(),o=e.fromRight(i)?a:-a,s=this.vanishT[i]-this.waveT[i]+x.sweepHold;n.sweep(o,-o,Dn(i),xn(i)+r.sweepZ,r.buildingPoof,r.buildingWave,s,t-this.waveT[i])}let a=x.grow*.9;for(;this.puffed<this.goes&&this.goTime[this.order[this.puffed]]-a<=t;){let e=this.order[this.puffed++];if(!this.ownPuff[e])continue;let t=i.slots[e];n.burst(t.x+Or.x,t.y,t.z+Or.z+.3,r.golferPoof,.98,.9,.55,0,wf,!1)}for(;this.gone<this.goes&&this.goTime[this.order[this.gone]]<=t;)i.mode[this.order[this.gone++]]=0;let o=!1;for(;this.rows>this.startRows&&this.vanishT[this.rows-1]<=t;)this.rows--,o=!0;return o&&i.trimTitleCrowd(this.rows,this.count),o}finish(){this.armed&&(this.armed=!1,this.count=this.keep,this.rows=this.startRows,this.ai.trimTitleCrowd(this.rows,this.count))}},Ef=`
attribute float aTop;
varying float vTop;
varying vec3 vWorld;
void main() {
  vTop = aTop;
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Df=`
#include <common>
${_a}
${ha}
varying float vTop;
varying vec3 vWorld;
void main() {
  // deep canopy green, darker towards the forest floor, a touch lighter at the crowns
  vec3 albedo = mix( vec3( 0.02, 0.05, 0.035 ), vec3( 0.055, 0.12, 0.07 ), vTop * vTop );
  vec3 irr = mix( uHemiGround, uHemiSky, 0.65 + 0.3 * vTop ) * uShadeTint + uSunColor * 0.12;
  vec3 col = albedo * irr * RECIPROCAL_PI;
  gl_FragColor = vec4( hdrDither( worldGrade( col, 1.0 ) ), 1.0 );
}
`;function Of(e=-112,t=-190,n=190,r=17){let i=r>>>0||1,a=()=>{i=i+1831565813>>>0;let e=i;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},o=[];for(let e=t-4;e<n+4;){let t=1.8+a()*2.6;o.push([e,5.2+a()*1.8+Math.sin(e*.021)*.9,t]),e+=t*(.75+a()*.5)}let s=e=>{let t=6;for(let[n,r,i]of o){let a=e-n;Math.abs(a)<i&&(t=Math.max(t,r+Math.sqrt(i*i-a*a)*.62))}return t},c=.75,l=Math.ceil((n-t)/c)+1,u=new Float32Array(l*2*3),d=new Float32Array(l*2),f=[];for(let n=0;n<l;n++){let r=t+n*c,i=s(r),a=e-Math.sin(r*.05)*3;if(u.set([r,-2,a,r,i,a],n*6),d[n*2]=0,d[n*2+1]=1,n>0){let e=(n-1)*2;f.push(e,e+2,e+1,e+1,e+2,e+3)}}let p=new Le;p.setAttribute(`position`,new I(u,3)),p.setAttribute(`aTop`,new I(d,1)),p.setIndex(f),p.computeBoundingSphere();let m=new oe({name:`world-backdrop`,uniforms:{...W},vertexShader:Ef,fragmentShader:Df}),h=new F(p,m);return h.name=`world-backdrop`,h.matrixAutoUpdate=!1,h.renderOrder=950,h}var kf=[{t:0,zenith:725552,horizon:2897522,glow:3817336,light:10796276,lightI:.75,hemiSky:4083876,hemiGround:1054752,hemiI:.8,rim:11059455,rimI:1.1,exposure:1.5,darkness:.85,stars:.85,fogNear:20,fogFar:100,grade:7309055,gradeA:.3,cloud:0,keep:.25,cLit:5925014,cShade:1975884,cRim:14214399,cRimK:1.2,cA:.9},{t:.075,zenith:2899068,horizon:14851242,glow:16752786,light:15250640,lightI:.8,hemiSky:9608920,hemiGround:2763316,hemiI:1.25,rim:16757952,rimI:1,exposure:1.62,darkness:.55,stars:.3,fogNear:14,fogFar:80,grade:15246544,gradeA:.14,cloud:0,keep:1,cLit:16757956,cShade:6052508,cRim:16766152,cRimK:.8,cA:.9},{t:.15,zenith:7314136,horizon:16762512,glow:16756848,light:16762010,lightI:2.8,hemiSky:12371172,hemiGround:5925434,hemiI:1.2,rim:16764052,rimI:1.1,exposure:1.62,darkness:.16,stars:0,fogNear:24,fogFar:125,grade:16763024,gradeA:.12,cloud:.15,keep:.8,cLit:16766640,cShade:9211076,cRim:16770216,cRimK:.8,cA:1},{t:.26,zenith:5940972,horizon:13362934,glow:16773328,light:16773334,lightI:2.65,hemiSky:12113140,hemiGround:5929530,hemiI:1.08,rim:15266559,rimI:.85,exposure:1.06,darkness:0,stars:0,fogNear:34,fogFar:185,grade:16774368,gradeA:0,cloud:.9,keep:.15,cLit:16775920,cShade:11187936,cRim:16777215,cRimK:.6,cA:1},{t:.5,zenith:4693227,horizon:12575736,glow:16777215,light:16775404,lightI:2.9,hemiSky:12770554,hemiGround:6521917,hemiI:1.12,rim:15660799,rimI:.8,exposure:1,darkness:0,stars:0,fogNear:36,fogFar:200,grade:16777215,gradeA:0,cloud:1,keep:0,cLit:16776696,cShade:11121888,cRim:16777215,cRimK:.6,cA:1},{t:.68,zenith:5611746,horizon:14543078,glow:16770744,light:16772808,lightI:2.75,hemiSky:12900590,hemiGround:6454584,hemiI:1.08,rim:16773336,rimI:.9,exposure:1,darkness:0,stars:0,fogNear:34,fogFar:180,grade:16773336,gradeA:.04,cloud:.9,keep:.15,cLit:16774886,cShade:11187418,cRim:16773848,cRimK:.5,cA:1},{t:.775,zenith:8034006,horizon:16761980,glow:16756816,light:16762484,lightI:2.7,hemiSky:13423320,hemiGround:6974516,hemiI:1.05,rim:16760944,rimI:1.35,exposure:1.32,darkness:.05,stars:0,fogNear:26,fogFar:135,grade:16763e3,gradeA:.06,cloud:.15,keep:.8,cLit:16768164,cShade:10393292,cRim:16766088,cRimK:.9,cA:1},{t:.835,zenith:5917856,horizon:16749688,glow:16740424,light:16756352,lightI:2.8,hemiSky:11055340,hemiGround:4866640,hemiI:1.55,rim:16751224,rimI:1.35,exposure:1.72,darkness:.25,stars:.05,fogNear:14,fogFar:88,grade:13149439,gradeA:.16,cloud:.15,keep:1,cLit:16756874,cShade:8283820,cRim:16762488,cRimK:1,cA:1},{t:.9,zenith:1714022,horizon:7304380,glow:12876456,light:10793200,lightI:.62,hemiSky:6188224,hemiGround:1448496,hemiI:.74,rim:11842815,rimI:1.2,exposure:1.5,darkness:.6,stars:.45,fogNear:18,fogFar:92,grade:9214207,gradeA:.28,cloud:0,keep:.5,cLit:11833536,cShade:3159150,cRim:15249616,cRimK:.9,cA:.9},{t:1,zenith:396322,horizon:1782882,glow:2765926,light:9745663,lightI:.62,hemiSky:2900628,hemiGround:659480,hemiI:.55,rim:11585791,rimI:1.25,exposure:1.55,darkness:1,stars:1,fogNear:18,fogFar:100,grade:8034047,gradeA:.34,cloud:0,keep:0,cLit:4214396,cShade:1976400,cRim:14871807,cRimK:1.3,cA:.9}],Af=class{zenith=new z;horizon=new z;glow=new z;lightColor=new z;lightIntensity=0;hemiSky=new z;hemiGround=new z;hemiIntensity=0;rim=new z;rimIntensity=0;exposure=1;darkness=0;stars=0;fogNear=30;fogFar=160;cloud=0;grade=new z(1,1,1);gradeAmount=0;groundKeep=0;cloudLit=new z;cloudShade=new z;cloudRim=new z;cloudRimK=.5;cloudAlpha=1;sunDir=new V;moonDir=new V(-.52,.66,.54).normalize();skyMoonDir=new V(.087,.063,-.994).normalize();lightDir=new V;sunWeight=1;pitchBlack=0;label=`day`},jf=kf.map(e=>({k:e,zenith:new z(e.zenith),horizon:new z(e.horizon),glow:new z(e.glow),light:new z(e.light),hemiSky:new z(e.hemiSky),hemiGround:new z(e.hemiGround),rim:new z(e.rim),grade:Mf(new z(e.grade)),cLit:new z(e.cLit),cShade:new z(e.cShade),cRim:new z(e.cRim)}));function Mf(e){let t=.2126*e.r+.7152*e.g+.0722*e.b;return e.multiplyScalar(1/Math.max(1e-4,t))}var Nf=.13,Pf=40,Ff=28,If=52,Lf=14,Rf=new V,zf=B.lerp;function Bf(e,t,n,r){let i=B.clamp(e,0,1),a=0;for(;a<jf.length-2&&i>jf[a+1].k.t;)a++;let o=jf[a],s=jf[a+1],c=(i-o.k.t)/Math.max(1e-6,s.k.t-o.k.t);c=B.clamp(c,0,1),c=c*c*(3-2*c),r.zenith.lerpColors(o.zenith,s.zenith,c),r.horizon.lerpColors(o.horizon,s.horizon,c),r.glow.lerpColors(o.glow,s.glow,c),r.lightColor.lerpColors(o.light,s.light,c),r.lightIntensity=zf(o.k.lightI,s.k.lightI,c),r.hemiSky.lerpColors(o.hemiSky,s.hemiSky,c),r.hemiGround.lerpColors(o.hemiGround,s.hemiGround,c),r.hemiIntensity=zf(o.k.hemiI,s.k.hemiI,c),r.rim.lerpColors(o.rim,s.rim,c),r.rimIntensity=zf(o.k.rimI,s.k.rimI,c),r.exposure=zf(o.k.exposure,s.k.exposure,c),r.darkness=zf(o.k.darkness,s.k.darkness,c),r.stars=zf(o.k.stars,s.k.stars,c),r.fogNear=zf(o.k.fogNear,s.k.fogNear,c),r.fogFar=zf(o.k.fogFar,s.k.fogFar,c),r.cloud=zf(o.k.cloud,s.k.cloud,c),r.grade.lerpColors(o.grade,s.grade,c),r.gradeAmount=zf(o.k.gradeA,s.k.gradeA,c),r.groundKeep=zf(o.k.keep,s.k.keep,c),r.cloudLit.lerpColors(o.cLit,s.cLit,c),r.cloudShade.lerpColors(o.cShade,s.cShade,c),r.cloudRim.lerpColors(o.cRim,s.cRim,c),r.cloudRimK=zf(o.k.cRimK,s.k.cRimK,c),r.cloudAlpha=zf(o.k.cA,s.k.cA,c);let l=(i-Nf)/.735,u=Math.sin(Math.PI*l)*B.degToRad(n),d=zf(-.25,Math.PI+.25,l)+B.degToRad(t),f=Math.cos(u);r.sunDir.set(Math.cos(d)*f,Math.sin(u),Math.sin(d)*f*.85).normalize();let p=r.sunDir.y;r.sunWeight=B.smoothstep(p,-.06,.1);{let e=Math.atan2(r.sunDir.x,r.sunDir.z),t=B.degToRad(Pf)*Math.tanh(e/B.degToRad(Lf)),n=B.clamp(Math.asin(B.clamp(p,-1,1)),B.degToRad(Ff),B.degToRad(If)),i=Math.cos(n);Rf.set(Math.sin(t)*i,Math.sin(n),Math.cos(t)*i)}return r.lightDir.copy(r.moonDir).multiplyScalar(1-r.sunWeight),r.lightDir.addScaledVector(Rf,r.sunWeight),r.lightDir.normalize(),gr(r,hr(r.darkness,e)),r.label=i<.06?`pre-dawn`:i<.12?`dawn`:i<.2?`sunrise`:i<.4?`morning`:i<.62?`midday`:i<.74?`afternoon`:i<.81?`golden hour`:i<.865?`sunset`:i<.94?`dusk`:`night`,r}var Vf=class{positions=[];normals=[];indices=[];colors=[];bones=[];slots=[];vertexCount=0;add(e,t,n={}){let r=e.clone();r.applyMatrix4(t);let i=r.getAttribute(`position`),a=r.getAttribute(`normal`);a||=(r.computeVertexNormals(),r.getAttribute(`normal`));let o=this.vertexCount;for(let e=0;e<i.count;e++)this.positions.push(i.getX(e),i.getY(e),i.getZ(e)),this.normals.push(a.getX(e),a.getY(e),a.getZ(e)),n.color&&this.colors.push(n.color.r,n.color.g,n.color.b),this.bones.push(n.bone??0),this.slots.push(n.slot??0);let s=r.getIndex();if(s)for(let e=0;e<s.count;e++)this.indices.push(o+s.getX(e));else for(let e=0;e<i.count;e++)this.indices.push(o+e);return this.vertexCount+=i.count,r.dispose(),this}get triangleCount(){return this.indices.length/3}get vertices(){return this.vertexCount}indexAttribute(){let e=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices);return new I(e,1)}positionAttribute(){return new I(new Float32Array(this.positions),3)}normalAttribute(){return new I(new Float32Array(this.normals),3)}skinIndexAttribute(){let e=new Uint16Array(this.vertexCount*4);for(let t=0;t<this.vertexCount;t++)e[t*4]=this.bones[t];return new I(e,4)}skinWeightAttribute(){let e=new Float32Array(this.vertexCount*4);for(let t=0;t<this.vertexCount;t++)e[t*4]=1;return new I(e,4)}slotArray(){return new Uint8Array(this.slots)}buildColored(){let e=new Le;return e.setIndex(this.indexAttribute()),e.setAttribute(`position`,this.positionAttribute()),e.setAttribute(`normal`,this.normalAttribute()),e.setAttribute(`color`,new I(new Float32Array(this.colors),3)),e.computeBoundingSphere(),e.computeBoundingBox(),e}};new P,new V(1,1,1),new V(0,1,0),new V,new V;var Hf=22,Uf=Tt,Wf=Math.min(-40,Mt-2),Gf=pn,Kf=-66,qf=At+22,Jf=At,Yf=pn,Xf=kt-1.2-2.5,Zf=kt-Tn-2-1,Qf=Mt,$f=Qf+34.5,ep=vt/2+2.9,tp=[`SM_OakTree_05`,`SM_OakTree_06`],np=[`SM_BirchBush_01_LOD1`,`SM_BirchBush_02_LOD1`,`SM_BirchBush_03_LOD2`],rp=[`SM_Rock_06_LOD1`,`SM_Rock_08_LOD1`,`SM_Rock_10_LOD1`],ip=[`SM_Grass_01_01_LOD1`,`SM_Grass_01_02_LOD1`,`SM_Grass_01_02_LOD1`,`SM_Grass_01_03_LOD1`],ap=[`SM_Flower_01_02_LOD1`,`SM_Flower_03_02_LOD1`];function op(e,t){let n=e.gate??0;return!(n===1&&(e.gateZ??0)>=t-1.2||n===2&&(e.gateZ??0)>=t-4.5-2)}function sp(e){let t=e.gate??0;return t===1||t===2}function cp(e){let t=new ir(e.seed),n=[],r=(e,r,i,a,o)=>{let s=t.next()<.25,c=s?`SM_BirchTree_05`:t.pick(tp),l=t.range(a,o)*(s?1.25:1);n.push({mesh:`${c}_LOD${i}`,cls:`tree`,x:e,z:r,rot:t.range(0,Math.PI*2),scale:l,shade:(s?2.2:3.4)*l})},i=(e,r,i=1)=>{let a=t.int(np.length),o=t.range(.85,1.3)*(a===2?.85:1)*i;n.push({mesh:np[a],cls:`bush`,x:e,z:r,rot:t.range(0,Math.PI*2),scale:o,shade:(.9+a*.4)*o})},a=(e,t)=>{if(Math.abs(Math.abs(e)-24.2)>1.7)return!1;for(let e of wt)if(Math.abs(t-(-27+e))<2.2)return!0;return!1},o=(e,r,i)=>{let o=t.range(.7,1.3)*i,s=t.pick(rp),c=t.range(0,Math.PI*2);a(e,r)||n.push({mesh:s,cls:`rock`,x:e,z:r,rot:c,scale:o,shade:.55*o})},s=(e,r,i,a,o=0)=>{let s=t.pick(ap);for(let c=0;c<i;c++){let i=t.range(0,Math.PI*2),c=Math.sqrt(t.next())*1.3,l=e+Math.cos(i)*c,u=r+Math.sin(i)*c;a(l,u)&&n.push({mesh:t.next()<.8?s:t.pick(ap),cls:`flower`,x:l,z:u,rot:t.range(0,Math.PI*2),scale:t.range(.8,1.2),shade:0,gate:o})}},c=[[6.6,8.6,5,e.nearTreeLod,1.15,1.45],[9.6,12.6,5.4,2,1.25,1.6],[13.8,18.5,6,3,1.4,1.8],[20,30,6.8,3,1.55,2.05]];for(let e of[-1,1]){for(let[n,i,a,o,s,l]of c){let c=Kf+t.range(0,a);for(;c<qf;){let u=c<-40||c>Jf+4;r(e*(Hf+t.range(n,i)),c,u?Math.min(3,o+1):o,s,l),c+=a*t.range(.78,1.18)}}let a=Wf-6+t.range(0,1.5);for(;a<qf;)t.next()<.92&&i(e*(Hf+t.range(4.3,5.6)),a),t.next()<.3&&a>-40&&a<Jf+4&&i(e*(Hf+t.range(6.2,8.4)),a+t.range(-1,1),1.2),a+=t.range(1.5,2.5);for(let t=Wf;t<Yf-1.2;t+=2.45){let r=+(t>=Xf);n.push({mesh:`SM_Fence_01_LOD2`,cls:`fence`,x:e*Uf,z:t+1.225,rot:Math.PI/2,scale:1,shade:0,gate:r,gateZ:t})}for(a=-38+t.range(0,6);a<Yf;)o(e*(Hf+t.range(1.1,2.9)),a,t.next()<.3?1.4:1),t.next()<.5&&o(e*(Hf+t.range(4.4,7.5)),a+t.range(-3,3),1.6),a+=t.range(7,13);for(a=-39+t.range(0,3);a<Yf;)s(e*(Hf+(t.next()<.65?t.range(1.2,2.9):t.range(4.2,7))),a,3+t.int(5),(e,t)=>Math.abs(e)>Hf+.9&&Math.abs(Math.abs(e)-Uf)>.25&&t<Jf+4),a+=t.range(3,6)}{let e=[[-41+$f,-45+$f,5.6,2,1.2,1.5,Hf+8],[-47+$f,-53+$f,6,3,1.25,1.55,Hf+18],[-56+$f,-66+$f,6.6,3,1.35,1.7,Hf+34],[-70,-82,7.4,3,1.3,1.65,112],[-86,-100,8.4,3,1.4,1.8,128]];for(let[n,i,a,o,s,c,l]of e){let e=-l+t.range(0,a);for(;e<l;){let l=t.range(i,n);(Math.abs(e)<Hf+6||l<Kf-2||Math.abs(e)>Hf+31)&&r(e,l,o,s,c),e+=a*t.range(.78,1.18)}}let n=-Hf-4+t.range(0,2);for(;n<Hf+4;)t.next()<.85&&i(n,t.range(Qf-1.6,Qf-3.2)),n+=t.range(1.8,3);for(n=-Hf-2;n<Hf+2;)s(n+t.range(-1,1),t.range(Qf-1.2,Qf-3),3+t.int(4),(e,t)=>t<Qf-.6),n+=t.range(4,7)}for(let e=-Uf;e<Uf-1.2;e+=2.45)n.push({mesh:`SM_Fence_01_LOD2`,cls:`fence`,x:e+1.225,z:Yf,rot:0,scale:1,shade:0,gate:3});{let e=-Hf-2+t.range(0,3);for(;e<Hf+2;)s(e,t.range(Jf+2.4,Yf-.6),1+t.int(3),(e,t)=>t>Jf+1.8&&t<Yf-.3,3),e+=t.range(6,11)}if(e.grassDensity>0){let r=.95,i=(r,i,a)=>{if(t.next()>a*e.grassDensity)return;let o=r+t.range(-.45,.45),s=i+t.range(-.45,.45),c=s>=Zf?2:0;n.push({mesh:t.pick(ip),cls:`grass`,x:o,z:s,rot:t.range(0,Math.PI*2),scale:t.range(.8,1.35),shade:0,gate:c,gateZ:s})};for(let e of[-1,1])for(let t=Wf-4;t<Jf-2;t+=r)for(let n=Hf+.8;n<Hf+7.6;n+=r){if(Math.abs(n-Uf)<.35)continue;let r=n<Uf?.12+.6*lp(Hf+.6,Hf+3.2,n):.5;i(e*n,t,r)}}return n.filter(e=>!(e.cls!==`tree`&&e.z<Qf-.5&&e.z>-68+$f&&Math.abs(e.x)<ep-3))}function lp(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var up=15;function dp(){return gt.map(([e,t],n)=>[e,t,Pt[n]?.[0]??e*.3,Pt[n]?.[1]??t])}dp();function fp(e,t,n){let r=e.count,i=new Float32Array(r),a=new Float32Array(r),o=new Int16Array(r),s=new Float32Array(r);for(let c=0;c<r;c++)i[c]=e.getY(c),a[c]=e.getZ(c),o[c]=t(c),s[c]=n(c);return e.setUsage(R),{attr:e,baseY:i,baseZ:a,spot:o,roofW:s}}function pp(e,t,n,r){let i=e.attr.array,{baseY:a,baseZ:o,spot:s,roofW:c}=e;for(let e=0;e<o.length;e++){let l=s[e],u=c[e];u!==0&&(i[e*3+1]=a[e]+u*n),i[e*3+2]=(l>=0?o[e]+t[l]:o[e])+u*r}e.attr.needsUpdate=!0}var mp=`
#include <common>
attribute float aTower;
uniform float uLevels[ 3 ];
varying float vLevel;
varying vec2 vUv;
void main() {
  vLevel = uLevels[ int( aTower + 0.5 ) ];
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}
`,hp=`
uniform vec3 uColor;
varying float vLevel;
varying vec2 vUv;
void main() {
  // a lit lens: white-hot centre, lamp-coloured rim, dark bezel line (reads as a lamp, not a
  // flat white card, even when it is only a few px)
  vec2 q = abs( vUv - 0.5 ) * 2.0;
  float lens = 1.0 - smoothstep( 0.78, 0.96, max( q.x, q.y ) );
  float hot = 1.0 - smoothstep( 0.0, 0.8, length( q * vec2( 0.8, 1.0 ) ) );
  vec3 off = vec3( 0.16, 0.17, 0.2 );
  vec3 on = uColor * ( 4.0 + 7.0 * hot ) * lens + off * ( 1.0 - lens );
  gl_FragColor = vec4( mix( off * ( 0.6 + 0.4 * lens ), on, vLevel ), 1.0 );
}
`,gp=`
#include <common>
attribute float aTower;
attribute vec2 aCorner;
attribute float aSize;
uniform float uLevels[ 3 ];
uniform float uSize;
varying vec2 vC;
varying float vLevel;
void main() {
  vLevel = uLevels[ int( aTower + 0.5 ) ];
  vC = aCorner;
  vec4 mv = modelViewMatrix * vec4( position, 1.0 );
  mv.xy += aCorner * uSize * aSize * ( 0.4 + 0.6 * vLevel );
  mv.z += 1.2; // pull towards the camera so the lamp housing never clips it
  gl_Position = projectionMatrix * mv;
}
`,_p=`
uniform vec3 uColor;
uniform float uDark;
varying vec2 vC;
varying float vLevel;
void main() {
  // hot core + wide soft halo (the bloom chain adds the rest), smooth to the sprite edge,
  // dithered (the halo is a slow gradient over many pixels: no 8-bit rings)
  float r2 = dot( vC, vC );
  float g = ( exp( -r2 * 3.2 ) * 0.42 + exp( -r2 * 24.0 ) * 0.9 ) * ( 1.0 - smoothstep( 0.55, 1.0, r2 ) );
  float n = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5;
  gl_FragColor = vec4( uColor * ( g * vLevel * ( 0.25 + 0.75 * uDark ) * ( 1.0 + n * 0.06 ) ), 1.0 );
}
`,vp=`
#include <common>
attribute float aTower;
attribute float aT;
attribute float aFade;
attribute vec3 aAxis;
uniform float uLevels[ 3 ];
uniform float uShrink[ 3 ];
uniform float uDark;
uniform float uBeamTop[ 3 ];
uniform float uBeamBase[ 3 ];
uniform vec4 uFloodHeads[ 3 ];
uniform vec4 uFloodIslands[ 3 ];
varying float vT;
varying float vFade;
varying float vLevel;
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
varying vec3 vHead;
varying vec4 vFoot;
void main() {
  int li = int( aTower + 0.5 );
  vLevel = uLevels[ li ];
  vT = aT;
  vFade = aFade;
  // pitch black: the cone narrows to the lamp's island (uShrink = island / cone radius at the
  // ground; 1 = the moonlit night's cone)
  vec3 off = ( position - aAxis ) * mix( 1.0, uShrink[ li ], aT );
  vec3 pos = aAxis + off;
  vHead = uFloodHeads[ li ].xyz;
  vFoot = vec4( uFloodIslands[ li ].xy, uBeamTop[ li ], uBeamBase[ li ] );
  if ( uDark > 0.0 ) {
    // ... and becomes an OBLIQUE cone with HORIZONTAL circular cross-sections, so its base
    // lies exactly on the island's footprint on the grass (a tilted beam's perpendicular base
    // ring stands up in the air on one side and sinks into the ground on the other). The
    // shell is only the hull the haze is drawn on: its shading is the analytic volume (FRAG)
    vec3 bd = normalize( vec3( vFoot.x, 0.0, vFoot.y ) - vHead );
    vec3 b1 = normalize( vec3( -bd.z, 0.0, bd.x ) + vec3( 1e-5, 0.0, 0.0 ) );
    vec3 h2 = normalize( vec3( bd.x, 0.0, bd.z ) + vec3( 0.0, 0.0, 1e-5 ) );
    vec3 offH = b1 * dot( off, b1 ) + h2 * dot( off, cross( b1, bd ) );
    pos = mix( pos, aAxis + offH, uDark );
  }
  vec4 mv = modelViewMatrix * vec4( pos, 1.0 );
  vN = normalize( normalMatrix * normal );
  vV = normalize( -mv.xyz );
  vW = ( modelMatrix * vec4( pos, 1.0 ) ).xyz;
  gl_Position = projectionMatrix * mv;
}
`,yp=`
uniform vec3 uColor;
uniform float uStrength;
uniform float uTime;
uniform float uDark;
uniform sampler2D uNoiseTex;
varying float vT;
varying float vFade;
varying float vLevel;
varying vec3 vN;
varying vec3 vV;
varying vec3 vW;
varying vec3 vHead;
varying vec4 vFoot;
void main() {
  // faint haze: brightest along the core of the cone (|N.V| high), nothing at its outline,
  // fading in from the lamp and out long before the ground (no hard intersection line)
  float ndv = abs( dot( normalize( vN ), normalize( vV ) ) );
  float core = ndv * ndv * ( 3.0 - 2.0 * ndv );
  float along = smoothstep( 0.0, 0.1, vT ) * pow( 1.0 - smoothstep( 0.0, vFade, vT ), 1.5 );
  if ( uDark > 0.0 ) {
    // PITCH BLACK: the beam is the island's visible SOURCE, shaded as a real VOLUME of light:
    // the length of the view ray inside the oblique cone (cross-section at height y: centre
    // C( y ) = island -> head, radius R( y ) = base -> top) from this front-shell fragment to
    // where it leaves the cone, the grass or the lamp end. Soft at every outline from every
    // view (a fake N.V core went flat when the camera looks down the beam), brightest where
    // you look along it, and it runs all the way down to its island and brightens there
    vec3 E = cameraPosition;
    vec3 D = normalize( vW - E );
    float iH = 1.0 / vHead.y;
    vec2 dHA = vHead.xz - vFoot.xy;
    vec2 q0 = E.xz - vFoot.xy - dHA * ( E.y * iH );
    vec2 q1 = D.xz - dHA * ( D.y * iH );
    float r0 = vFoot.w + ( vFoot.z - vFoot.w ) * ( E.y * iH );
    float r1 = ( vFoot.z - vFoot.w ) * ( D.y * iH );
    float qa = dot( q1, q1 ) - r1 * r1;
    float qb = dot( q0, q1 ) - r0 * r1;
    float qc = dot( q0, q0 ) - r0 * r0;
    // the ray from this hull fragment on, between the grass and the lamp height
    float sLo = length( vW - E );
    float sHi = 1e4;
    if ( D.y < -1e-4 ) {
      sHi = -E.y / D.y;
      sLo = max( sLo, ( vHead.y - E.y ) / D.y );
    } else if ( D.y > 1e-4 ) sHi = ( vHead.y - E.y ) / D.y;
    // inside the cone where qa s^2 + 2 qb s + qc <= 0 (the other nappe lies above the lamp,
    // outside the slab)
    float disc = qb * qb - qa * qc;
    float chord = 0.0;
    float sMid = sLo;
    if ( disc > 0.0 && abs( qa ) > 1e-6 ) {
      float sq = sqrt( disc );
      float ra = ( -qb - sq ) / qa;
      float rb = ( -qb + sq ) / qa;
      float lo = min( ra, rb );
      float hi = max( ra, rb );
      if ( qa > 0.0 ) {
        float a0 = max( lo, sLo );
        float a1 = min( hi, sHi );
        chord = max( a1 - a0, 0.0 );
        sMid = 0.5 * ( a0 + a1 );
      } else {
        float c0 = max( min( lo, sHi ) - sLo, 0.0 );
        float c1 = max( sHi - max( hi, sLo ), 0.0 );
        chord = c0 + c1;
        sMid = c0 >= c1 ? sLo + 0.5 * c0 : sHi - 0.5 * c1;
      }
    } else if ( qa < 0.0 ) {
      chord = max( sHi - sLo, 0.0 );
      sMid = sLo + 0.5 * chord;
    }
    float yMid = clamp( E.y + D.y * sMid, 0.0, vHead.y );
    float rMid = vFoot.w + ( vFoot.z - vFoot.w ) * ( yMid * iH );
    float h = min( chord / ( 2.0 * rMid ), 1.4 );
    float vol = h * h * 0.75;
    // along the beam (0 at the lamp .. 1 on the grass): fades in below the lamp, brightens as
    // it lands on its island
    float tb = 1.0 - yMid * iH;
    float alongD = smoothstep( 0.0, 0.08, tb ) * ( 0.4 + 0.3 * tb + 0.6 * smoothstep( 0.55, 0.97, tb ) );
    // roof bar beams (vFade < 0.6): thinner where they pass in front of the golfer bays, so the
    // shot sources keep their contrast. Side towers: half as dense (they stand close to the
    // camera's sides, so their beams are big on screen: a hint of the source, not a wall of fog)
    alongD *= vFade < 0.6 ? mix( 0.45, 1.0, smoothstep( 0.1, 0.34, tb ) ) : 0.34 * mix( 0.35, 1.0, smoothstep( 0.2, 0.65, tb ) );
    core = mix( core, vol, uDark );
    along = mix( along, alongD, uDark );
  }
  // drifting dust / moisture in the light
  float n = texture2D( uNoiseTex, vW.xz * 0.045 + vec2( vW.y * 0.03, uTime * 0.01 ) ).b;
  float d = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5;
  gl_FragColor = vec4( uColor * ( core * along * vLevel * uStrength * ( 0.6 + 0.8 * n ) * ( 1.0 + d * 0.08 ) ), 1.0 );
}
`,bp=class e{group=new tt;levels;towerXZ;aims;headY=15.6;spots=[];warm;aimDist=new Float32Array(3);lampMat;glowMat;beamMat;towerMesh;lampMesh;glowMesh;beamMesh;color=new z;levelUniform;beamR1=new Float32Array(3).fill(1);shrinkUniform={value:[,,,].fill(1)};topUniform={value:[,,,].fill(.5)};baseUniform={value:[,,,].fill(4)};beamR0=new Float32Array(3).fill(.5);average=0;nT;builtHeadZ=new Float32Array(3);builtAimZ=new Float32Array(3);offZ=new Float32Array(3);fromZ=new Float32Array(3);builtLampY=qt.lampY;builtLampZ=qt.lampZ;roofDy=0;roofDz=0;unsubscribeBuilding=()=>{};toZ=new Float32Array(3);lenFrom=0;lenTo=0;tracks=[];unsubscribe=()=>{};constructor(t=dp(),n=!0){this.group.name=`world-floodlights`;let r=Math.min(3-Ut.length,t.length);this.nT=r,this.levels=new Float32Array(3),this.warm=new Float32Array(3),this.towerXZ=t.slice(0,r).map(e=>[e[0],e[1]]),this.aims=t.slice(0,r).map(e=>[e[2],e[3]]),this.levelUniform={value:[,,,].fill(0)};for(let e=0;e<r;e++)this.spots.push({head:new V(t[e][0],this.headY,t[e][1]),aimX:t[e][2],aimZ:t[e][3],roof:!1});Ut.forEach((e,t)=>this.spots.push({head:new V(e,qt.lampY,qt.lampZ),aimX:ct[t][0],aimZ:ct[t][1],roof:!0}));let i=new z(9147292),a=new z(3817544),o=new z(12170150),s=new Vf,c=[],l=[],u=[],d=[],f=[],p=[],m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=new Ye(1,1,1),S=new Oe(.15,.24,up,8,1),C=new Ne,w=new P,T=new V,E=new V,D=new V,O=new V(0,0,1),k=(e,t,n,r,i)=>{let a=new fe(r,i).applyMatrix4(C.compose(t,n,T.set(1,1,1))),o=a.getAttribute(`position`),s=a.getAttribute(`uv`),f=c.length/3;for(let t=0;t<o.count;t++)c.push(o.getX(t),o.getY(t),o.getZ(t)),l.push(s.getX(t),s.getY(t)),u.push(e);let p=a.getIndex();for(let e=0;e<p.count;e++)d.push(f+p.getX(e));a.dispose()},A=(e,t,n)=>{let r=f.length/3;for(let[r,i]of[[-1,-1],[1,-1],[1,1],[-1,1]])f.push(t.x,t.y,t.z),p.push(r,i),m.push(e),h.push(n);g.push(r,r+1,r+2,r,r+2,r+3)},j=(e,t,n,r,i,a)=>{let o=n.distanceTo(t),s=new Oe(r,i,o,24,1,!0),c=s.getAttribute(`position`),l=new Float32Array(c.count);for(let e=0;e<c.count;e++)l[e]=.5-c.getY(e)/o;s.setAttribute(`aT`,new I(l,1));let u=new V().subVectors(n,t).normalize(),d=new P().setFromUnitVectors(new V(0,-1,0),u),f=t.clone().addScaledVector(u,o/2);s.applyMatrix4(new Ne().compose(f,d,new V(1,1,1))),_.push(s);for(let r=0;r<c.count;r++)v.push(e),y.push(a),E.lerpVectors(t,n,l[r]),b.push(E.x,E.y,E.z);this.beamR1[e]=i,this.beamR0[e]=r};for(let e=0;e<r;e++){let t=this.spots[e],n=t.head.x,r=t.head.z,c=e+1;s.add(x,C.compose(E.set(n,.2,r),w.identity(),T.set(1.1,.4,1.1)),{color:o,slot:c}),s.add(S,C.compose(E.set(n,7.9,r),w.identity(),T.set(1,1,1)),{color:i,slot:c});let l=t.head;D.set(t.aimX-n,-l.y,t.aimZ-r).normalize(),w.setFromUnitVectors(O,D);let u=(e,t,n)=>E.set(e,t,n).applyQuaternion(w).add(l);s.add(x,C.compose(u(0,0,-.12),w,T.set(3.2,1.55,.14)),{color:a,slot:c}),s.add(x,C.compose(E.set(n,15.25,r),w.identity(),T.set(.5,.5,.5)),{color:i,slot:c});for(let t=0;t<2;t++)for(let n=0;n<3;n++){let r=(n-1)*.95,a=(t-.5)*.66;s.add(x,C.compose(u(r,a,.08),w,T.set(.86,.6,.3)),{color:i,slot:c}),k(e,u(r,a,.235).clone(),w,.72,.5)}A(e,u(0,0,.6).clone(),1),j(e,l,new V(t.aimX,0,t.aimZ),.8,9,.8)}{let e=Math.max(...Ut.map(Math.abs))+3,t=qt.lampY+.3,n=qt.lampZ-.18,i=r+1;s.add(x,C.compose(E.set(0,t,n),w.identity(),T.set(e*2,.1,.1)),{color:a,slot:i});for(let r=-e+.5;r<=e-.5+.001;r+=(e*2-1)/6)s.add(x,C.compose(E.set(r,t-.32,n-.05),w.identity(),T.set(.08,.64,.08)),{color:a,slot:i})}for(let t=0;t<Ut.length;t++){let n=r+t,o=this.spots[n];D.set(o.aimX-o.head.x,-o.head.y,o.aimZ-o.head.z).normalize(),w.setFromUnitVectors(O,D);for(let c of[-.55,.55]){let l=new V(o.head.x+c,o.head.y,o.head.z),u=(e,t,n)=>E.set(e,t,n).applyQuaternion(w).add(l);s.add(x,C.compose(E.set(l.x,l.y+.2,l.z-.12),e.ID,T.set(.06,.32,.06)),{color:a,slot:r+1+t}),s.add(x,C.compose(u(0,0,-.1),w,T.set(.86,.5,.34)),{color:i,slot:r+1+t}),s.add(x,C.compose(u(0,.3,.02),w,T.set(.9,.06,.4)),{color:a,slot:r+1+t}),k(n,u(0,0,.075).clone(),w,.74,.4),A(n,u(0,0,.35).clone(),.24)}j(n,o.head.clone().addScaledVector(D,.4),new V(o.aimX,0,o.aimZ),.5,4.2,.45)}let ee=s.slotArray();this.towerMesh=new F(s.buildColored(),ja({vertexColors:!0})),this.towerMesh.name=`flood-towers`;let M=new Le;M.setAttribute(`position`,new I(new Float32Array(c),3)),M.setAttribute(`uv`,new I(new Float32Array(l),2)),M.setAttribute(`aTower`,new I(new Float32Array(u),1)),M.setIndex(d),M.computeBoundingSphere(),this.lampMat=new oe({name:`flood-lamps`,uniforms:{uLevels:this.levelUniform,uColor:{value:new z}},vertexShader:mp,fragmentShader:hp,side:0,toneMapped:!1}),this.lampMesh=new F(M,this.lampMat),this.lampMesh.name=`flood-lamp-faces`;let te=new Le;te.setAttribute(`position`,new I(new Float32Array(f),3)),te.setAttribute(`aCorner`,new I(new Float32Array(p),2)),te.setAttribute(`aTower`,new I(new Float32Array(m),1)),te.setAttribute(`aSize`,new I(new Float32Array(h),1)),te.setIndex(g),te.computeBoundingSphere(),te.boundingSphere.radius+=6,this.glowMat=new oe({name:`flood-glow`,uniforms:{uLevels:this.levelUniform,uColor:{value:new z},uSize:{value:3},uDark:{value:0}},vertexShader:gp,fragmentShader:_p,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),this.glowMesh=new F(te,this.glowMat),this.glowMesh.name=`flood-glows`,this.glowMesh.renderOrder=10;let ne=wp(_);ne.setAttribute(`aTower`,new I(new Float32Array(v),1)),ne.setAttribute(`aFade`,new I(new Float32Array(y),1)),ne.setAttribute(`aAxis`,new I(new Float32Array(b),3)),this.beamMat=new oe({name:`flood-beams`,uniforms:{uLevels:this.levelUniform,uShrink:this.shrinkUniform,uColor:{value:new z},uStrength:{value:.2},uDark:{value:0},uBeamTop:this.topUniform,uBeamBase:this.baseUniform,uFloodHeads:W.uFloodHeads,uFloodIslands:W.uFloodIslands,uTime:W.uTime,uNoiseTex:W.uNoiseTex},vertexShader:vp,fragmentShader:yp,transparent:!0,depthWrite:!1,blending:2,side:0,toneMapped:!1}),this.beamMesh=new F(ne,this.beamMat),this.beamMesh.name=`flood-beams`,this.beamMesh.renderOrder=9;for(let e of[this.towerMesh,this.lampMesh,this.glowMesh,this.beamMesh])e.matrixAutoUpdate=!1,e.updateMatrix(),e.frustumCulled=!1,this.group.add(e);x.dispose(),S.dispose();{let e=n&&r>0,t=M.getAttribute(`aTower`),i=te.getAttribute(`aTower`),a=ne.getAttribute(`aTower`),o=ne.getAttribute(`aT`),s=t=>e&&t<r?t:-1,c=e=>e>=r,l=e=>ee[e]-1;this.tracks.push(fp(this.towerMesh.geometry.getAttribute(`position`),e=>s(l(e)),e=>+!!c(l(e))),fp(M.getAttribute(`position`),e=>s(Math.round(t.getX(e))),e=>+!!c(Math.round(t.getX(e)))),fp(te.getAttribute(`position`),e=>s(Math.round(i.getX(e))),e=>+!!c(Math.round(i.getX(e)))),fp(ne.getAttribute(`position`),e=>s(Math.round(a.getX(e))),e=>c(Math.round(a.getX(e)))?1-o.getX(e):0),fp(ne.getAttribute(`aAxis`),e=>s(Math.round(a.getX(e))),e=>c(Math.round(a.getX(e)))?1-o.getX(e):0))}for(let e=0;e<this.spots.length;e++)this.builtHeadZ[e]=this.spots[e].head.z,this.builtAimZ[e]=this.spots[e].aimZ;let N=W.uFloodPools.value,re=W.uFloodHeads.value;for(let e=0;e<3;e++)this.spots[e]?this.placeSpot(e):(N[e].set(0,0,1,0),re[e].set(0,this.headY,0,8));W.uFloodBox.value.set(Tt,ot,-25,8),n&&(this.unsubscribe=at((e,t)=>this.followRange(e,t))),this.unsubscribeBuilding=Ft(e=>this.setRoof(e.lampY,e.lampZ)),(Math.abs(qt.lampY-this.builtLampY)>1e-6||Math.abs(qt.lampZ-this.builtLampZ)>1e-6)&&this.setRoof(qt.lampY,qt.lampZ)}placeSpot(e){let t=this.spots[e],n=Sp.set(t.aimX-t.head.x,-t.head.y,t.aimZ-t.head.z),r=n.length();n.divideScalar(r),this.aimDist[e]=r,W.uFloodPools.value[e].set(n.x,n.y,n.z,0),W.uFloodHeads.value[e].set(t.head.x,t.head.y,t.head.z,8)}setRoof(e,t){this.roofDy=e-this.builtLampY,this.roofDz=t-this.builtLampZ;for(let n=this.nT;n<this.spots.length;n++)this.spots[n].head.y=e,this.spots[n].head.z=t,this.placeSpot(n);for(let e=0;e<this.tracks.length;e++)pp(this.tracks[e],this.offZ,this.roofDy,this.roofDz)}followRange(e,t){if(t===`target`){this.lenFrom=e.length,this.lenTo=e.target;for(let e=0;e<this.nT;e++)this.fromZ[e]=this.offZ[e],this.toZ[e]=(gt[e]?.[1]??this.builtHeadZ[e])-this.builtHeadZ[e];return}if(t!==`move`)return;W.uFloodBox.value.y=e.fenceZ;let n=this.lenTo-this.lenFrom,r=Math.abs(n)>1e-6?(e.length-this.lenFrom)/n:1;r=r<0?0:r>1?1:r;let i=!1;for(let e=0;e<this.nT;e++){let t=this.fromZ[e]+(this.toZ[e]-this.fromZ[e])*r;Math.abs(t-this.offZ[e])>1e-5&&(i=!0),this.offZ[e]=t}i&&this.applyOffsets()}applyOffsets(){let e=W.uFloodHeads.value;for(let t=0;t<this.nT;t++){let n=this.spots[t],r=this.offZ[t];n.head.z=this.builtHeadZ[t]+r,n.aimZ=this.builtAimZ[t]+r,e[t].z=n.head.z,this.towerXZ[t][1]=n.head.z,this.aims[t][1]=n.aimZ}for(let e=0;e<this.tracks.length;e++)pp(this.tracks[e],this.offZ,this.roofDy,this.roofDz)}static ID=new P;update(e,t,n,r,i){dr(i),_r(i);let a=lr.amount,o=W.uFloodIslands.value,s=Math.max(0,i.spotIntensity),c=Math.max(1,H.length/Ln)**+Math.max(0,i.spotLengthScale);this.group.visible=n;let l=this.spots.length,u=W.uFloodPools.value,d=W.uFloodHeads.value,f=0;for(let p=0;p<l;p++){let l=this.spots[p],m=n&&r>i.floodSwitchOn+(l.roof?-.04+p%3*.015:p*.03),h=this.warm[p];h=m?Math.min(1,h+e*1.6):Math.max(0,h-e*2.5),this.warm[p]=h;let g=h;if(m&&h<1){let e=Math.sin(t*37+p*12.9)*Math.sin(t*23+p*4.1);g=h*(h<.55?e>.1?1:.15:.85+.15*e)}this.levels[p]=g,this.levelUniform.value[p]=g;let _=this.aimDist[p],v=l.roof?i.roofSpread:i.floodRadius,y=Math.atan(v/_);d[p].w=1.2/Math.max(.001,1-Math.cos(y)),u[p].w=g*_*_*_*(l.roof?i.roofLevel:1);let b=Math.max(.5,l.roof?i.roofSpotRadius:i.spotRadius*c);o[p].set(l.aimX,l.aimZ,1/(b*b),a>0?g*s:0),this.shrinkUniform.value[p]=1+(Math.min(1,b*1.15/this.beamR1[p])-1)*a,this.topUniform.value[p]=this.beamR0[p],this.baseUniform.value[p]=Math.min(b*1.15,this.beamR1[p]),f+=g}this.average=l>0?f/l:0,W.uFloodShape.value.set(i.floodPenumbraWarmth,i.floodOverlap,i.floodMoonReplace,i.floodFill*this.average);let p=Cp(.15,.6,r);f>0?W.uFloodColor.value.setHex(i.floodColor).multiplyScalar(1.5*i.floodIntensity*(.35+.65*p)):W.uFloodColor.value.setRGB(0,0,0),this.color.setHex(i.floodColor),this.lampMat.uniforms.uColor.value.copy(this.color),this.glowMat.uniforms.uColor.value.copy(this.color).multiplyScalar(.9),this.glowMat.uniforms.uSize.value=i.glowSize,this.glowMat.uniforms.uDark.value=p;let m=i.beamStrength+(Math.max(0,i.beamDark)-i.beamStrength)*a;this.beamMat.uniforms.uColor.value.copy(this.color).multiply(xp.setRGB(1-.16*a,1-.04*a,1+.06*a)),this.beamMat.uniforms.uStrength.value=m*p,this.beamMat.uniforms.uDark.value=a,this.beamMesh.visible=m>0&&f>0&&p>.01,this.glowMesh.visible=f>0}dispose(){this.unsubscribe(),this.unsubscribeBuilding();for(let e of[this.towerMesh,this.lampMesh,this.glowMesh,this.beamMesh])e.geometry.dispose(),e.material.dispose();W.uFloodColor.value.setRGB(0,0,0)}},xp=new z,Sp=new V;function Cp(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function wp(e){let t=0,n=0;for(let r of e)t+=r.getAttribute(`position`).count,n+=r.getIndex().count;let r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t),o=new Uint16Array(n),s=0,c=0;for(let t of e){let e=t.getAttribute(`position`),n=t.getAttribute(`normal`),l=t.getAttribute(`aT`);for(let t=0;t<e.count;t++)r.set([e.getX(t),e.getY(t),e.getZ(t)],(s+t)*3),i.set([n.getX(t),n.getY(t),n.getZ(t)],(s+t)*3),a[s+t]=l.getX(t);let u=t.getIndex();for(let e=0;e<u.count;e++)o[c+e]=u.getX(e)+s;s+=e.count,c+=u.count,t.dispose()}let l=new Le;return l.setAttribute(`position`,new I(r,3)),l.setAttribute(`normal`,new I(i,3)),l.setAttribute(`aT`,new I(a,1)),l.setIndex(new I(o,1)),l.computeBoundingSphere(),l}var Tp={minLayer:2,cell:256,columns:8,elevationDeg:5,treesPerYaw:8,minYaw:4,maxYaw:8,viewBack:1.3,viewZ:[-4,56],sortFrom:[0,10,30],fadeLow:12,fadeHigh:15,pull:.35,flood:void 0,cut:.5,margin:1.06},Ep=`
vec2 octEncode( vec3 n ) {
  n /= abs( n.x ) + abs( n.y ) + abs( n.z );
  vec2 p = n.xy;
  if ( n.z < 0.0 ) p = ( 1.0 - abs( p.yx ) ) * vec2( p.x >= 0.0 ? 1.0 : -1.0, p.y >= 0.0 ? 1.0 : -1.0 );
  return p;
}
vec3 octDecode( vec2 p ) {
  vec3 n = vec3( p, 1.0 - abs( p.x ) - abs( p.y ) );
  float t = max( -n.z, 0.0 );
  n.x += n.x >= 0.0 ? -t : t;
  n.y += n.y >= 0.0 ? -t : t;
  return normalize( n );
}
`,Dp=`
attribute vec4 aCol;
attribute float aKind;
attribute float aDepth;
varying vec2 vUv;
varying vec4 vCol;
varying float vKind;
varying vec3 vNormalV;
varying float vDepth;
void main() {
  vUv = uv;
  vCol = aCol;
  vKind = aKind;
  vNormalV = normal;
  vDepth = aDepth;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Op=`
precision highp float;
uniform sampler2D uAtlas;
uniform vec3 uTint[ 4 ];
uniform vec4 uLeaf;
varying vec2 vUv;
varying vec4 vCol;
varying float vKind;
varying vec3 vNormalV;
varying float vDepth;
layout( location = 0 ) out highp vec4 gAlbedo;
layout( location = 1 ) out highp vec4 gNormal;
${Sa}
${Ep}
void main() {
#ifdef CUTOUT
  float lk = vKind;
#else
  float lk = vKind - 4.0;
#endif
  int ik = int( lk + 0.5 );
  vec2 cell = vec2( mod( float( ik ), 2.0 ), floor( float( ik ) * 0.5 ) ) * 0.5;
  vec2 dx = dFdx( vUv ) * 0.5;
  vec2 dy = dFdy( vUv ) * 0.5;
  vec4 tex = textureGrad( uAtlas, cell + fract( vUv ) * 0.5, dx, dy );
  vec3 tint = uTint[ ik ];
  vec3 albedoS;
#ifdef CUTOUT
  float lod = max( 0.0, 0.5 * log2( max( dot( dx, dx ), dot( dy, dy ) ) * 1048576.0 ) );
  if ( tex.a * ( 1.0 + lod * 0.28 ) < 0.5 ) discard;
  albedoS = overlayBlend( tint, tex.rgb );
  albedoS = mix( tint * 0.9, albedoS, 0.5 );
  float ao = clamp( vCol.a / 0.45, 0.0, 1.0 );
  albedoS *= mix( 1.0, 0.22 + 0.78 * ao * ao, uLeaf.y );
  float leaf = 1.0;
#else
  albedoS = tex.rgb * tint * 2.0;
  float ao = smoothstep( 0.0, 0.9, vCol.a );
  albedoS *= 0.45 + 0.55 * ao;
  float leaf = 0.0;
#endif
  gAlbedo = vec4( clamp( albedoS, 0.0, 1.0 ), 1.0 );
  gNormal = vec4( octEncode( normalize( vNormalV ) ) * 0.5 + 0.5, clamp( vDepth, 0.0, 1.0 ), leaf );
}
`,kp=`
#include <common>
${_a}
attribute vec4 aInst;   // x, z, scale / bake scale, depth pull (bake m)
attribute vec4 aCell;   // atlas rect: u0, v0, du, dv
attribute vec4 aShape;  // half size, image centre height, depth half range (bake m), -
uniform vec2 uBake;     // cos / sin of the bake elevation
varying vec2 vUv;
varying vec3 vWorld;
varying vec2 vRot;
varying float vDepthK;
varying vec3 vFlood;
varying float vCloud;
#ifdef IMP_FLOOD
${va}
#endif
${ba}
${xa}
void main() {
  vec3 base = vec3( aInst.x, 0.0, aInst.y );
  // cylindrical billboard: turned about Y to face the camera's position (the bake looked north = yaw 0)
  vec2 hd = base.xz - cameraPosition.xz;
  hd *= inversesqrt( max( dot( hd, hd ), 1e-6 ) );
  float s = -hd.x;
  float c = -hd.y;
  vec3 R = vec3( c, 0.0, -s );
  vec3 U = vec3( -uBake.y * s, uBake.x, -uBake.y * c );
  float k = aInst.z;
  vec3 wp = base + ( R * ( position.x * aShape.x ) + U * ( aShape.y + position.y * aShape.x ) ) * k;
  // whole-plant sway, the same function as the real trees (the 2 x 4 grid bends with height squared)
  wp.xz += worldTreeSway( wp );
  vUv = aCell.xy + uv * aCell.zw;
  vWorld = wp;
  vRot = vec2( s, c );
  vDepthK = aShape.z * 2.0 * k;
#ifdef IMP_FLOOD
  vFlood = worldFlood( wp.xz );
#else
  vFlood = vec3( 0.0 );
#endif
  vCloud = worldCloud( wp.xz );
  // flat depth at the front of the crown: slide along the view ray (same projection)
  vec3 crown = base + U * ( aShape.y * k );
  float pull = 1.0 - aInst.w * k / max( length( crown - cameraPosition ), 1.0 );
  vec3 pp = cameraPosition + ( wp - cameraPosition ) * pull;
  gl_Position = projectionMatrix * ( viewMatrix * vec4( pp, 1.0 ) );
}
`,Ap=`
#include <common>
${_a}
uniform sampler2D uImpA;
uniform sampler2D uImpB;
uniform vec2 uBake;
uniform float uImpCut;
uniform float uFade;
uniform vec3 uTintVar;
uniform vec4 uLeaf;
uniform vec4 uShafts[ 6 ];
uniform vec4 uShaftK[ 6 ];
uniform vec4 uShaftDir;
uniform vec3 uShaftColor;
varying vec2 vUv;
varying vec3 vWorld;
varying vec2 vRot;
varying float vDepthK;
varying vec3 vFlood;
varying float vCloud;
${Sa}
${Ep}
${ha}
void main() {
  // hand-over: dithered in over the real far trees while the camera comes down (world/foliage.ts setView)
  if ( uFade < 1.0 && ignoise( gl_FragCoord.xy ) >= uFade ) discard;
  vec4 ga = texture2D( uImpA, vUv );
  if ( ga.a < uImpCut ) discard;
  vec4 gb = texture2D( uImpB, vUv );
  float ic = 1.0 / ga.a;
  vec3 albedoS = ga.rgb * ic;
  float leaf = clamp( gb.a * ic, 0.0, 1.0 );
  vec3 nv = octDecode( gb.rg * ( 2.0 * ic ) - 1.0 );
  float s = vRot.x;
  float c = vRot.y;
  vec3 R = vec3( c, 0.0, -s );
  vec3 U = vec3( -uBake.y * s, uBake.x, -uBake.y * c );
  vec3 W = vec3( uBake.x * s, uBake.y, uBake.x * c );
  vec3 n = normalize( nv.x * R + nv.y * U + nv.z * W );
  vec3 world = vWorld - W * ( ( gb.b * ic - 0.5 ) * vDepthK );

  // world-noise tint variation (leaves), as world/foliage.ts
  float noiseT = texture2D( uNoiseTex, world.xz * 0.021 ).g;
  albedoS = mix( albedoS, albedoS * uTintVar, smoothstep( 0.3, 0.8, noiseT ) * uLeaf.w * leaf );
  vec3 albedo = srgbToLinearFast( clamp( albedoS, 0.0, 1.0 ) );

  vec3 L = uSunDir;
  float ndl = dot( n, L );
  float cloud = vCloud;
  // leaves: painted canopy, 3 value bands on the clump normal, cool shade / warm light
  float celL = smoothstep( -0.16, -0.02, ndl ) * 0.55 + smoothstep( 0.34, 0.48, ndl ) * 0.45;
  vec3 hemiL = normalize( n + vec3( 0.0, 0.8, 0.0 ) );
  vec3 albL = mix( albedo * vec3( 0.82, 0.98, 1.12 ), albedo * vec3( 1.1, 1.06, 0.82 ), celL * cloud );
  // bark: plain wrap + cel
  float diffB = clamp( ( ndl + 0.25 ) / 1.25, 0.0, 1.0 );
  float sunB = mix( diffB, smoothstep( 0.4, 0.6, diffB ), 0.7 );
  vec3 alb = mix( albedo, albL, leaf );
  vec3 irr = mix( uHemiGround, uHemiSky, mix( n.y, hemiL.y, leaf ) * 0.5 + 0.5 ) * mix( vec3( 1.0 ), uShadeTint, 0.7 ) * 1.15;
  irr += uSunColor * mix( sunB, celL, leaf ) * cloud;
#ifdef IMP_FLOOD
  vec3 flood = vFlood * ( 0.55 + 0.45 * max( n.y, 0.0 ) );
  irr += flood;
  float floodShare = dot( flood, vec3( 0.333 ) ) / max( dot( irr, vec3( 0.333 ) ), 1e-4 );
#else
  const float floodShare = 0.0;
#endif
  vec3 col = alb * irr * RECIPROCAL_PI;
  // translucency (leaves)
  vec3 V = normalize( cameraPosition - world );
  float back = pow( clamp( dot( V, -L ), 0.0, 1.0 ), 3.0 ) * 0.7 + clamp( -ndl, 0.0, 1.0 ) * 0.3;
  col += alb * uSunColor * ( back * uLeaf.z * 0.35 * RECIPROCAL_PI * leaf );
  // golden hour: leaves round the canopy gaps glow warm (uniform branch)
  if ( uShaftDir.w > 0.002 ) {
    float gl = 0.0;
    for ( int i = 0; i < 6; i ++ ) {
      vec4 A = uShafts[ i ];
      vec3 dg = world - A.xyz;
      gl += exp( -dot( dg, dg ) / ( A.w * A.w * 5.0 ) ) * uShaftK[ i ].y;
    }
    col += alb * uShaftColor * ( min( gl, 1.2 ) * uShaftDir.w * 1.6 * RECIPROCAL_PI * leaf );
  }
  gl_FragColor = vec4( worldGrade( col, 1.0 - floodShare ), 1.0 );
}
`,jp=class{mesh;material;stats={trees:0,cells:0,atlas:``,bakeMs:0};baked=!1;target=null;cells=[];shapes=new Map;cols;rows;cosE;sinE;bakeUniforms;constructor(e,t,n,r,i,a){this.bakeUniforms=n;let o=Tp.elevationDeg*Math.PI/180,s=this.cosE=Math.cos(o),c=this.sinE=Math.sin(o),l=new Map;for(let t of e){let e=l.get(t.mesh);e||l.set(t.mesh,e=[]),e.push(t)}for(let[e,n]of[...l].sort((e,t)=>e[0]<t[0]?-1:1)){let r=n.map(e=>e.scale).sort((e,t)=>e-t),i=r[r.length>>1],a=t(e),o=a.r*i,l=a.y0*i,u=a.y1*i,d=l*s-o*c,f=u*s+o*c,p=Math.max(o,(f-d)*.5)*Tp.margin,m=(o*s+Math.max(Math.abs(l),Math.abs(u))*c)*1.02,h=Math.max(1,Math.min(Tp.maxYaw,Math.max(Math.ceil(n.length/Tp.treesPerYaw),Math.min(n.length,Tp.minYaw))));this.shapes.set(e,{scale:i,half:p,centre:(d+f)*.5,depth:m,radius:o,cell0:this.cells.length,yaws:h});for(let t=0;t<h;t++)this.cells.push({mesh:e,yaw:t/h*Math.PI*2,scale:i})}this.cols=Math.max(1,Math.min(Tp.columns,this.cells.length)),this.rows=Math.max(1,Math.ceil(this.cells.length/this.cols));let[u,,d]=Tp.sortFrom,f=[...e].sort((e,t)=>Math.hypot(e.x-u,e.z-d)-Math.hypot(t.x-u,t.z-d)),[p,m]=Tp.viewZ,h=f.length,g=new Float32Array(h*4),_=new Float32Array(h*4),v=new Float32Array(h*4),y=Math.PI*2;for(let e=0;e<h;e++){let t=f[e],n=this.shapes.get(t.mesh),r=Math.min(m,Math.max(p,t.z+Tp.viewBack*Math.abs(t.x))),i=Math.atan2(-t.x,-(t.z-r)),a=(t.rot-i)%y;a<0&&(a+=y);let o=Math.round(a/y*n.yaws)%n.yaws,s=n.cell0+o,c=t.scale/n.scale;g.set([t.x,t.z,c,Tp.pull*n.radius],e*4),_.set([s%this.cols/this.cols,Math.floor(s/this.cols)/this.rows,1/this.cols,1/this.rows],e*4),v.set([n.half,n.centre,n.depth,0],e*4)}let b=new Float32Array(45),x=new Float32Array(30),S=[];for(let e=0;e<=4;e++)for(let t=0;t<=2;t++){let n=e*3+t;b[n*3]=t/2*2-1,b[n*3+1]=e/4*2-1,x[n*2]=t/2,x[n*2+1]=e/4,t<2&&e<4&&S.push(n,n+1,n+2+2,n,n+2+2,n+2+1)}let C=new ne;C.setAttribute(`position`,new I(b,3)),C.setAttribute(`uv`,new I(x,2)),C.setIndex(S),C.setAttribute(`aInst`,new Ce(g,4)),C.setAttribute(`aCell`,new Ce(_,4)),C.setAttribute(`aShape`,new Ce(v,4)),C.instanceCount=h,this.material=new oe({name:`world-tree-impostor`,uniforms:{...W,uImpA:{value:null},uImpB:{value:null},uBake:{value:new Ve(s,c)},uImpCut:{value:Tp.cut},uFade:i,uTintVar:r,uLeaf:n.uLeaf},vertexShader:kp,fragmentShader:Ap,defines:a?{IMP_FLOOD:``}:{},side:2}),this.mesh=new F(C,this.material),this.mesh.name=`foliage far-tree impostors`,this.mesh.renderOrder=1,this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.visible=!1,this.stats.trees=h,this.stats.cells=this.cells.length,this.stats.atlas=`${this.cols*Tp.cell}x${this.rows*Tp.cell}`}bakeKey(){let e=this.bakeUniforms,t=e=>e.value.map(e=>`${e.x},${e.y},${e.z}`).join(`;`),n=e.uLeaf.value;return`${t(e.uTintCutout)}|${t(e.uTintOpaque)}|${n.y}`}lastKey=``;rebakeIfStale(e,t){this.baked&&this.bakeKey()!==this.lastKey&&this.bake(e,t)}bake(e,t){let n=performance.now(),r=Tp.cell,i=this.cols*r,a=this.rows*r;this.target?.dispose();let o=new Xe(i,a,{count:2,format:re,type:se,minFilter:Ze,magFilter:Ue,generateMipmaps:!0,depthBuffer:!0,stencilBuffer:!1,depthTexture:new j(i,a,he)});for(let e of o.textures)e.colorSpace=``,e.generateMipmaps=!0,e.minFilter=Ze,e.magFilter=Ue;o.textures[0].name=`impostor-albedo`,o.textures[1].name=`impostor-normal`,this.target=o,this.material.uniforms.uImpA.value=o.textures[0],this.material.uniforms.uImpB.value=o.textures[1];let s=this.bakeUniforms,c=e=>new oe({name:e?`impostor-bake-cutout`:`impostor-bake-opaque`,glslVersion:ge,uniforms:{uAtlas:e?s.uAtlasCutout:s.uAtlasOpaque,uTint:e?s.uTintCutout:s.uTintOpaque,uLeaf:s.uLeaf},vertexShader:Dp,fragmentShader:Op,defines:e?{CUTOUT:``}:{},side:e?2:0}),l=[c(!0),c(!1)],u=new M,d=this.cosE,f=this.sinE;for(let e=0;e<this.cells.length;e++){let n=this.cells[e],i=this.shapes.get(n.mesh),a=r/(2*i.half),o=e%this.cols*r+r*.5,s=Math.floor(e/this.cols)*r+r*.5;for(let e=0;e<2;e++){let r=t({mesh:n.mesh,cls:`tree`,x:0,z:0,rot:n.yaw,scale:n.scale,shade:0},e===0);if(!r)continue;let c=r.getAttribute(`position`),p=r.getAttribute(`normal`),m=c.array,h=p.array,g=new Float32Array(c.count);for(let e=0;e<c.count;e++){let t=m[e*3],n=m[e*3+1],r=m[e*3+2],c=n*d-r*f,l=-n*f-r*d;m[e*3]=o+t*a,m[e*3+1]=s+(c-i.centre)*a,m[e*3+2]=-l*a,g[e]=l/(2*i.depth)+.5;let u=h[e*3+1],p=h[e*3+2];h[e*3+1]=Math.round(u*d-p*f),h[e*3+2]=Math.round(u*f+p*d)}r.setAttribute(`aDepth`,new I(g,1));let _=new F(r,l[e]);_.frustumCulled=!1,u.add(_)}}let p=new T(0,i,a,0,1,4e3);p.position.set(0,0,2e3),p.updateMatrixWorld();let m=e.getRenderTarget(),h=e.autoClear,g=e.getClearColor(new z),_=e.getClearAlpha();try{e.setRenderTarget(o),e.setClearColor(0,0),e.autoClear=!0,e.render(u,p)}finally{o.depthTexture?.dispose(),e.setRenderTarget(m),e.setClearColor(g,_),e.autoClear=h,u.traverse(e=>{e.isMesh&&e.geometry.dispose()});for(let e of l)e.dispose()}this.baked=!0,this.lastKey=this.bakeKey(),this.stats.bakeMs=performance.now()-n}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.target?.dispose(),this.target=null}},Mp=[40,40,64],Np=[56,56,96],Pp=[6.2,13.2],Fp=1.5,Ip=-20,Lp=new He,Rp=`
#include <common>
${_a}
attribute vec4 aCol;
attribute float aKind;
varying vec2 vUv;
varying vec4 vCol;
varying float vKind;
varying vec3 vWorld;
varying vec3 vNormalW;
#ifdef VERTEX_LIGHT
varying vec3 vFlood;
varying float vCloud;
${va}
${ba}
#endif
#include <fog_pars_vertex>
${xa}
void main() {
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vec3 n = normalize( mat3( modelMatrix ) * normal );
  float k = aKind;
  if ( k < 1.5 || ( k > 3.5 && k < 5.5 ) ) {
    // trees + bushes: whole-plant sway (same for bark and leaves), leaf flutter on top
    wp.xz += worldTreeSway( wp.xyz );
    if ( k < 1.5 ) {
      float fl = aCol.b * uWind.z;
      wp.xyz += n * sin( uTime * 6.5 + dot( wp.xyz, vec3( 1.7, 2.3, 1.3 ) ) ) * 0.035 * fl;
    }
  } else if ( k < 3.5 ) {
    // grass + flowers: bend by the vertex wind mask (red channel)
    wp.xz += worldGrassSway( wp.xyz, aCol.r );
  }
  vUv = uv;
  vCol = aCol;
  vKind = k;
  vWorld = wp.xyz;
  vNormalW = n;
#ifdef VERTEX_LIGHT
  // PERF (Phase 9b): the floodlight pools and the cloud shadows are ground-level fields that change over metres;
  // the cards are small, so they are evaluated per vertex (9-18 lamp terms + 3 noise taps per overdrawn pixel before)
  vFlood = worldFlood( wp.xz );
  vCloud = worldCloud( wp.xz );
#endif
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,zp=`
#include <common>
${_a}
uniform sampler2D uAtlas;
uniform vec3 uTint[ 4 ];      // sRGB-space tints for the 4 kinds of this material
uniform vec3 uGrassBottom;    // sRGB
uniform vec3 uTintVar;        // sRGB multiplier for world-noise tint variation
uniform vec3 uMoss;           // sRGB
uniform vec4 uLeaf;           // x wrap, y AO strength, z SSS, w tint variation
uniform vec4 uShafts[ 6 ];
uniform vec4 uShaftK[ 6 ];
uniform vec4 uShaftDir;
uniform vec3 uShaftColor;
varying vec2 vUv;
varying vec4 vCol;
varying float vKind;
varying vec3 vWorld;
varying vec3 vNormalW;
#include <fog_pars_fragment>
#ifdef VERTEX_LIGHT
varying vec3 vFlood;
varying float vCloud;
#else
${va}
${ba}
#endif
${Sa}
void main() {
  float k = vKind;
#ifdef CUTOUT
  float lk = k;
#else
  float lk = k - 4.0;
#endif
  int ik = int( lk + 0.5 );
  vec2 cell = vec2( mod( float( ik ), 2.0 ), floor( float( ik ) * 0.5 ) ) * 0.5;
  vec2 dx = dFdx( vUv ) * 0.5;
  vec2 dy = dFdy( vUv ) * 0.5;
  vec4 tex = textureGrad( uAtlas, cell + fract( vUv ) * 0.5, dx, dy );
#ifdef CUTOUT
  // keep alpha-tested coverage at distance (mip alpha shrinks): boost alpha by mip level
  float lod = max( 0.0, 0.5 * log2( max( dot( dx, dx ), dot( dy, dy ) ) * 1048576.0 ) );
  if ( tex.a * ( 1.0 + lod * 0.28 ) < 0.5 ) discard;
#endif
  vec3 tint = uTint[ ik ];
  vec3 albedoS; // sRGB space
  float noiseT = texture2D( uNoiseTex, vWorld.xz * 0.021 ).g;
#ifdef CUTOUT
  if ( ik == 3 ) {
    albedoS = tex.rgb; // flowers: authored colour
  } else {
    albedoS = overlayBlend( tint, tex.rgb );
    // leaves: the card texture is only a gentle value break inside the painted masses
    if ( ik <= 1 ) albedoS = mix( tint * 0.9, albedoS, 0.5 );
  }
  if ( ik <= 1 ) {
    // tree / bush leaves: AO from vertex alpha (Meadow stores 0 inside .. ~0.45 outside)
    float ao = clamp( vCol.a / 0.45, 0.0, 1.0 );
    albedoS *= mix( 1.0, 0.22 + 0.78 * ao * ao, uLeaf.y );
    albedoS = mix( albedoS, albedoS * uTintVar, smoothstep( 0.3, 0.8, noiseT ) * uLeaf.w );
  } else {
    // grass + flowers: bottom colour gradient (vertex alpha) blends them into the ground
    float g = smoothstep( 0.0, 0.85, vCol.a );
    albedoS = mix( uGrassBottom, albedoS, g );
    albedoS = mix( albedoS, albedoS * uTintVar, smoothstep( 0.3, 0.8, noiseT ) * vCol.r * uLeaf.w );
  }
#else
  albedoS = tex.rgb * tint * 2.0;
  if ( ik <= 1 ) {
    float ao = smoothstep( 0.0, 0.9, vCol.a );
    albedoS *= 0.45 + 0.55 * ao;
  }
#endif
  vec3 albedo = srgbToLinearFast( clamp( albedoS, 0.0, 1.0 ) );

  vec3 n = normalize( vNormalW );
#ifdef CUTOUT
  // (tree / bush leaves carry a baked CLUMP normal that must not flip with the card's facing)
  if ( ! gl_FrontFacing && ik >= 2 ) n = -n;
  // grass + flowers are lit like the ground they grow from (card normals read as dark blobs)
  if ( ik >= 2 ) n = normalize( mix( n, vec3( 0.0, 1.0, 0.0 ), 0.85 ) );
#endif
#ifndef CUTOUT
  if ( ik == 2 ) {
    // rocks: mossy top layer by world-up normal
    float top = smoothstep( 0.45, 0.85, n.y ) * smoothstep( 0.25, 0.65, texture2D( uNoiseTex, vWorld.xz * 0.37 ).b + 0.2 );
    albedo = mix( albedo, srgbToLinearFast( uMoss ), top * 0.85 );
  }
#endif
  vec3 L = uSunDir;
  float ndl = dot( n, L );
  float w = uLeaf.x;
#ifdef CUTOUT
  // soft canopy: heavy wrap, plus a little sky light from "up" regardless of card facing
  float diff = clamp( ( ndl + w ) / ( 1.0 + w ), 0.0, 1.0 );
  vec3 hemiN = normalize( n + vec3( 0.0, 0.8, 0.0 ) );
#else
  float diff = clamp( ( ndl + 0.25 ) / 1.25, 0.0, 1.0 );
  vec3 hemiN = n;
#endif
  // ANIME: painted canopy - on the clump normals, 3 value bands (cool underside, mid,
  // lit crown) with a cool shade / warm light hue split
  float cel = smoothstep( 0.4, 0.6, diff );
#ifdef CUTOUT
  if ( ik <= 1 ) {
    float b1 = smoothstep( -0.16, -0.02, ndl );
    float b2 = smoothstep( 0.34, 0.48, ndl );
    cel = b1 * 0.55 + b2 * 0.45;
    diff = cel;
  }
#endif
#ifdef VERTEX_LIGHT
  float cloud = vCloud;
#else
  float cloud = worldCloud( vWorld.xz );
#endif
#ifdef CUTOUT
  if ( ik <= 1 ) albedo = mix( albedo * vec3( 0.82, 0.98, 1.12 ), albedo * vec3( 1.1, 1.06, 0.82 ), cel * cloud );
#endif
  vec3 irr = mix( uHemiGround, uHemiSky, hemiN.y * 0.5 + 0.5 ) * mix( vec3( 1.0 ), uShadeTint, 0.7 ) * 1.15;
  irr += uSunColor * mix( diff, cel, 0.7 ) * cloud;
#ifdef VERTEX_LIGHT
  vec3 flood = vFlood * ( 0.55 + 0.45 * max( n.y, 0.0 ) );
#else
  vec3 flood = worldFlood( vWorld.xz ) * ( 0.55 + 0.45 * max( n.y, 0.0 ) );
#endif
  irr += flood;
  float floodShare = dot( flood, vec3( 0.333 ) ) / max( dot( irr, vec3( 0.333 ) ), 1e-4 );
  vec3 col = albedo * irr * RECIPROCAL_PI;
#ifdef CUTOUT
  // translucency: light through leaves/grass when the key light is behind them
  vec3 V = normalize( cameraPosition - vWorld );
  float back = pow( clamp( dot( V, -L ), 0.0, 1.0 ), 3.0 ) * 0.7 + clamp( -ndl, 0.0, 1.0 ) * 0.3;
  col += albedo * uSunColor * back * uLeaf.z * 0.35 * RECIPROCAL_PI * ( ik == 3 ? 0.5 : 1.0 );
#endif
#ifdef CUTOUT
  // golden hour: the leaves around each canopy GAP the sun shafts come through glow warm, so
  // the eye finds where the light gets in (uniform branch: only while shafts are active)
  if ( uShaftDir.w > 0.002 && ik <= 1 ) {
    float gl = 0.0;
    for ( int i = 0; i < 6; i ++ ) {
      vec4 A = uShafts[ i ];
      vec3 dg = vWorld - A.xyz;
      gl += exp( -dot( dg, dg ) / ( A.w * A.w * 5.0 ) ) * uShaftK[ i ].y;
    }
    col += albedo * uShaftColor * ( min( gl, 1.2 ) * uShaftDir.w * 1.6 * RECIPROCAL_PI );
  }
#endif
  gl_FragColor = vec4( worldGrade( col, 1.0 - floodShare ), 1.0 );
}
`,Bp=(e,t)=>t.set((e>>16&255)/255,(e>>8&255)/255,(e&255)/255),Vp=class{group=new tt;cutoutMaterial;opaqueMaterial;stats={chunks:0,meshes:0,vertices:0,triangles:0,instances:0,farTrees:0,farVertices:0,farTriangles:0};southGroup=new tt;hiddenCount=0;impostors=null;impostorsEnabled;impostorsActive=!1;farMeshesActive=!0;fade={value:0};paramsDirty=!1;chunkFar=[];chunkMeshes=[];chunkBoxes=[];chunkSouth=[];chunkRange=[];kit=null;gated=[];gatedSlices=new Int32Array;gatedOn=new Uint8Array;unsubscribe=null;impostorLayer;constructor(e,t,n=!1,r=Tp.minLayer){this.impostorsEnabled=n,this.impostorLayer=r,this.group.name=`world-foliage`,this.southGroup.name=`world-foliage-south`,this.group.add(this.southGroup);let i=(e,t)=>new oe({name:e?`world-foliage-cutout`:`world-foliage-opaque`,uniforms:{...qe.clone(it.fog),...W,uAtlas:{value:t},uTint:{value:[new V,new V,new V,new V]},uGrassBottom:{value:new V},uTintVar:{value:new V(1.15,1.12,.8)},uMoss:{value:new V},uLeaf:{value:new L(.55,.75,.6,.45)}},vertexShader:Rp,fragmentShader:zp,defines:e?{CUTOUT:``,VERTEX_LIGHT:``}:{VERTEX_LIGHT:``},side:e?2:0,fog:!0});this.cutoutMaterial=i(!0,e),this.opaqueMaterial=i(!1,t)}applyParams(e){let t=this.cutoutMaterial.uniforms,n=this.opaqueMaterial.uniforms,r=t.uTint.value;Bp(e.oakLeaf,r[0]),Bp(e.birchLeaf,r[1]),Bp(e.grassTint,r[2]),Bp(e.flowerTint,r[3]);let i=n.uTint.value;Bp(e.oakBark,i[0]).multiplyScalar(.5),Bp(e.birchBark,i[1]).multiplyScalar(.5),Bp(e.rockTint,i[2]).multiplyScalar(.5),Bp(e.plankTint,i[3]).multiplyScalar(.5);for(let r of[t,n])Bp(e.grassBottom,r.uGrassBottom.value),Bp(e.mossTint,r.uMoss.value),r.uLeaf.value.set(e.leafWrap,e.leafAO,e.leafSSS,e.leafVariation);this.paramsDirty=!0}build(e,t){this.kit=e;let n=[new Map,new Map],r=[],i=new Map,a=[],o=this.impostorsEnabled;for(let s of t){if(!e.meshes.has(s.mesh))continue;sp(s)&&(i.set(s,r.length),r.push(s));let t=Math.abs(s.x)-22,c=s.z<0?-36-s.z:s.z-At,l=Math.max(t,c),u=l<Pp[0]?0:l<Pp[1]?1:2,d=s.gate===3,f=o&&s.cls===`tree`&&u>=this.impostorLayer&&!d;f&&a.push(s);let p=f?`f`:``;for(let e=0;e<2;e++){let r=e+1,i=d?`south`:t>=c?`${p}${u}:x${Math.sign(s.x)}:${Math.floor(s.z/(Mp[u]*r))}`:`${p}${u}:z${Math.sign(s.z)}:${Math.floor(s.x/(Np[u]*r))}`,a=n[e].get(i);a||n[e].set(i,a=[]),a.push(s)}}this.gated=r;let s=new Int32Array(r.length*6).fill(-1);for(let t=0;t<2;t++){let r=t===0;for(let[a,o]of n[t]){let n=this.chunkMeshes.length,c=Wp(e,o,r,(e,r,a)=>{let o=i.get(e);o!==void 0&&(s[o*6+t*3]=n,s[o*6+t*3+1]=r,s[o*6+t*3+2]=a)});if(!c)continue;let l=new F(c,r?this.cutoutMaterial:this.opaqueMaterial);l.name=`foliage ${a} ${r?`cutout`:`opaque`}`,r&&(l.renderOrder=1),l.matrixAutoUpdate=!1,l.updateMatrix();let u=a===`south`;(u?this.southGroup:this.group).add(l),this.chunkMeshes.push(l),this.chunkBoxes.push(c.boundingBox.clone().expandByScalar(Fp)),this.chunkSouth.push(u);let d=a.startsWith(`f`);this.chunkFar.push(d),this.chunkRange.push({start:0,count:0}),this.stats.meshes++,this.stats.vertices+=c.getAttribute(`position`).count,this.stats.triangles+=(c.getIndex()?.count??0)/3,d&&(this.stats.farVertices+=c.getAttribute(`position`).count,this.stats.farTriangles+=(c.getIndex()?.count??0)/3),r&&(this.stats.chunks++,this.stats.instances+=o.length)}}if(this.gatedSlices=s,a.length){let t=this.cutoutMaterial.uniforms,n=this.opaqueMaterial.uniforms;this.impostors=new jp(a,t=>Hp(e.meshes.get(t)),{uAtlasCutout:t.uAtlas,uAtlasOpaque:n.uAtlas,uTintCutout:t.uTint,uTintOpaque:n.uTint,uLeaf:t.uLeaf},t.uTintVar,this.fade,Tp.flood??this.impostorLayer<2),this.group.add(this.impostors.mesh),this.stats.farTrees=a.length}this.gatedOn=new Uint8Array(r.length).fill(1),this.applyRange(),this.unsubscribe?.(),this.unsubscribe=at(()=>this.applyRange())}applyRange(){this.southGroup.position.z=H.fenceZ-Gf;let e=this.kit;if(!e)return;let t=this.gated,n=this.gatedSlices,r=0;for(let i=0;i<t.length;i++){let a=t[i],o=op(a,H.fenceZ);if(o||r++,this.gatedOn[i]===1===o)continue;this.gatedOn[i]=+!!o;let s=e.meshes.get(a.mesh);for(let e=0;e<2;e++){let t=n[i*6+e*3];if(t<0)continue;let r=n[i*6+e*3+1],c=n[i*6+e*3+2],l=this.chunkMeshes[t].geometry.getAttribute(`position`),u=l.array;if(o)Up(u,r,s,a,e===0);else for(let e=r;e<r+c;e++)u[e*3]=a.x,u[e*3+1]=Ip,u[e*3+2]=a.z;this.markDirty(t,l,r*3,c*3)}}this.hiddenCount=r}bakeImpostors(e){let t=this.kit;this.impostors&&t&&(this.impostors.bake(e,(e,n)=>Wp(t,[e],n)),this.paramsDirty=!1)}setView(e,t){let n=this.impostors;if(!n)return;let r=this.kit;this.paramsDirty&&t&&r&&n.baked&&(this.paramsDirty=!1,n.rebakeIfStale(t,(e,t)=>Wp(r,[e],t)));let i=e.matrixWorld.elements[13],a=this.impostorsEnabled&&n.baked?Math.min(1,Math.max(0,(Tp.fadeHigh-i)/(Tp.fadeHigh-Tp.fadeLow))):0;this.fade.value=a,this.impostorsActive=a>0,this.farMeshesActive=a<1,n.mesh.visible=this.impostorsActive}markDirty(e,t,n,r){let i=this.chunkRange[e],a=t.updateRanges;if(a.indexOf(i)<0)i.start=n,i.count=r,a.push(i);else{let e=Math.max(i.start+i.count,n+r);i.start=Math.min(i.start,n),i.count=e-i.start}t.needsUpdate=!0}cull(e){let t=0,n=this.southGroup.position.z,r=!this.farMeshesActive;for(let i=0;i<this.chunkMeshes.length;i++){if(r&&this.chunkFar[i]){this.chunkMeshes[i].visible=!1;continue}let a=this.chunkBoxes[i];this.chunkSouth[i]&&(a=Lp.copy(a),a.min.z+=n,a.max.z+=n);let o=e.intersectsBox(a);this.chunkMeshes[i].visible=o,o&&t++}return t}dispose(){this.unsubscribe?.(),this.unsubscribe=null;for(let e of this.chunkMeshes)e.geometry.dispose();this.impostors?.dispose(),this.impostors=null,this.southGroup.clear(),this.group.clear(),this.cutoutMaterial.uniforms.uAtlas.value?.dispose(),this.opaqueMaterial.uniforms.uAtlas.value?.dispose(),this.cutoutMaterial.dispose(),this.opaqueMaterial.dispose()}};function Hp(e){let t=0,n=1/0,r=-1/0;for(let i of e.parts){let e=i.pos;for(let a=0;a<i.vertexCount;a++)t=Math.max(t,Math.hypot(e[a*3],e[a*3+2])),n=Math.min(n,e[a*3+1]),r=Math.max(r,e[a*3+1])}return{r:t,y0:n,y1:r}}function Up(e,t,n,r,i){let a=Math.cos(r.rot),o=Math.sin(r.rot),s=r.scale,c=t;for(let t of n.parts){if(t.kind<4!==i)continue;let n=t.pos;for(let i=0;i<t.vertexCount;i++){let t=n[i*3],l=n[i*3+2],u=(c+i)*3;e[u]=(t*a+l*o)*s+r.x,e[u+1]=n[i*3+1]*s,e[u+2]=(-t*o+l*a)*s+r.z}c+=t.vertexCount}}function Wp(e,t,n,r){let i=0,a=0;for(let r of t){let t=e.meshes.get(r.mesh);for(let e of t.parts)e.kind<4===n&&(i+=e.vertexCount,a+=e.idx.length)}if(i===0)return null;let o=new Float32Array(i*3),s=new Int8Array(i*3),c=new Float32Array(i*2),l=new Uint8Array(i*4),u=new Uint8Array(i),d=i>65535?new Uint32Array(a):new Uint16Array(a),f=0,p=0;for(let i of t){let t=e.meshes.get(i.mesh),a=Math.cos(i.rot),m=Math.sin(i.rot),h=i.scale,g=f;for(let e of t.parts){if(e.kind<4!==n)continue;let t=e.pos,r=e.nrm;for(let n=0;n<e.vertexCount;n++){let e=t[n*3],c=t[n*3+1],l=t[n*3+2],u=(f+n)*3;o[u]=(e*a+l*m)*h+i.x,o[u+1]=c*h,o[u+2]=(-e*m+l*a)*h+i.z;let d=r[n*3],p=r[n*3+1],g=r[n*3+2];s[u]=Math.round((d*a+g*m)*127),s[u+1]=Math.round(p*127),s[u+2]=Math.round((-d*m+g*a)*127)}n&&e.kind<=1&&Kp(o,s,f,e.vertexCount),c.set(e.uv,f*2),l.set(e.col,f*4),u.fill(e.kind,f,f+e.vertexCount);let g=e.idx;for(let e=0;e<g.length;e++)d[p+e]=g[e]+f;f+=e.vertexCount,p+=g.length}r&&f>g&&r(i,g,f-g)}let m=new Le;return m.setAttribute(`position`,new I(o,3)),m.setAttribute(`normal`,new I(s,3,!0)),m.setAttribute(`uv`,new I(c,2)),m.setAttribute(`aCol`,new I(l,4,!0)),m.setAttribute(`aKind`,new I(u,1)),m.setIndex(new I(d,1)),m.computeBoundingSphere(),m.computeBoundingBox(),m}var Gp=[];function Kp(e,t,n,r){if(r<8)return;let i=0,a=0,o=0,s=1/0,c=-1/0;for(let t=n;t<n+r;t++)i+=e[t*3],a+=e[t*3+1],o+=e[t*3+2],s=Math.min(s,e[t*3+1]),c=Math.max(c,e[t*3+1]);i/=r,a/=r,o/=r;let l=Math.max(1,c-s),u=Math.max(1.6,l/3.2),d=new Map;Gp.length=0;for(let t=n;t<n+r;t++){let n=e[t*3],r=e[t*3+1],s=e[t*3+2],c=(Math.floor((n-i)/u)+64)*16384+(Math.floor((r-a)/u)+64)*128+(Math.floor((s-o)/u)+64),l=d.get(c);l===void 0&&(l=Gp.length,d.set(c,l),Gp.push(0,0,0,0)),Gp[l]+=n,Gp[l+1]+=r,Gp[l+2]+=s,Gp[l+3]++}for(let e=0;e<Gp.length;e+=4){let t=Gp[e+3];Gp[e]/=t,Gp[e+1]/=t,Gp[e+2]/=t,Gp[e+3]=Math.min(1,t/24)}let f=1/(u*u*.9);for(let s=n;s<n+r;s++){let n=e[s*3],r=e[s*3+1],c=e[s*3+2],l=0,u=0,d=0;for(let e=0;e<Gp.length;e+=4){let t=n-Gp[e],i=r-Gp[e+1],a=c-Gp[e+2],o=t*t+i*i+a*a,s=o*f;if(s>8)continue;let p=Math.exp(-s)*Gp[e+3]/Math.sqrt(o+.04);l+=t*p,u+=i*p,d+=a*p}let p=Math.hypot(l,u,d)||1;l/=p,u/=p,d/=p;let m=n-i,h=(r-a)*1.4,g=c-o,_=Math.hypot(m,h,g)||1;m/=_,h/=_,g/=_,l=l*.6+m*.4,u=u*.6+h*.4+.08,d=d*.6+g*.4,p=Math.hypot(l,u,d)||1,t[s*3]=Math.round(l/p*127),t[s*3+1]=Math.round(u/p*127),t[s*3+2]=Math.round(d/p*127)}}function qp(e=512,t=11){let n=t>>>0||1,r=()=>{n=n+1831565813>>>0;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},i=document.createElement(`canvas`);i.width=i.height=e;let a=i.getContext(`2d`,{willReadFrequently:!0}),o=new Uint8Array(e*e*4),s=(t,n,i,o,s,c,l)=>{let u=Math.cos(s)*i*.5,d=Math.sin(s)*i*.5;a.strokeStyle=`rgba(${c},${c},${c},${l})`,a.lineWidth=o,a.lineCap=`round`;for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++){let f=t+c*e,p=n+l*e;if(f+i<0||f-i>e||p+i<0||p-i>e)continue;a.beginPath();let m=(r()-.5)*o*1.2;a.moveTo(f-u,p-d),a.quadraticCurveTo(f-d*0+Math.sin(s)*m,p+Math.cos(s)*m,f+u,p+d),a.stroke()}},c=(t,n)=>{a.globalCompositeOperation=`source-over`,a.fillStyle=`rgb(128,128,128)`,a.fillRect(0,0,e,e),n();let r=a.getImageData(0,0,e,e).data;for(let n=0;n<e*e;n++)o[n*4+t]=r[n*4]},l=e/512;c(0,()=>{for(let t=0;t<2600;t++){let t=Math.round(128+(r()-.5)*150);s(r()*e,r()*e,(14+r()*34)*l,(2.5+r()*5)*l,(r()-.5)*.5,t,.25+r()*.35)}}),c(1,()=>{for(let t=0;t<2600;t++){let t=Math.round(128+(r()-.5)*150);s(r()*e,r()*e,(14+r()*34)*l,(2.5+r()*5)*l,Math.PI/2+(r()-.5)*.5,t,.25+r()*.35)}}),c(2,()=>{for(let t=0;t<5200;t++){let t=Math.round(128+(r()-.4)*180),n=Math.PI/2+(r()-.5)*.9+(r()<.2?.8:0);s(r()*e,r()*e,(8+r()*14)*l,(1.6+r()*2.2)*l,n,t,.4+r()*.4)}}),c(3,()=>{for(let t=0;t<420;t++){let t=Math.round(128+(r()-.5)*200);s(r()*e,r()*e,(30+r()*60)*l,(14+r()*22)*l,(r()-.5)*.8,t,.18+r()*.22)}});let u=new O(o,e,e,re,se);return u.wrapS=u.wrapT=A,u.magFilter=Ue,u.minFilter=Ze,u.generateMipmaps=!0,u.colorSpace=``,u.anisotropy=4,u.name=`anime-brush`,u.needsUpdate=!0,u}var Jp=512,Yp=128,Xp=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * ( viewMatrix * wp );
}
`,Zp=`
#include <common>
${_a}
uniform sampler2D uDetail;
uniform sampler2D uMask;
uniform sampler2D uBrush;
uniform vec4 uMaskRect;     // minX, minZ, 1/width, 1/height
uniform vec3 uFairLight;
uniform vec3 uFairDark;
uniform vec3 uFringe;
uniform vec3 uRough;
uniform vec3 uRoughLush;
uniform vec3 uMeadow;
uniform vec3 uMeadowLush;
uniform vec3 uWarm;
uniform vec3 uCool;
uniform vec3 uSheenCol;     // wind sheen tint (sunlit blade backs)
uniform vec3 uDivot;        // divot / dry patch colour
uniform vec4 uField;        // half width, half length, centre x, centre z
uniform vec4 uPlay;         // the playable-area line's rectangle: min x, max x, min z, max z (the centre of the line)
uniform vec4 uLine;         // line half width (m), strength, wear
uniform vec4 uStripe;       // width, strength, cross width, cross strength
uniform vec4 uVar;          // patch strength, hue shift, detail strength, 1 / detail scale
uniform vec4 uEdge;         // fringe width, meadow start, wobble, tree shade
uniform vec4 uPaint;        // brush value, dab strength, fleck strength, sheen strength
uniform vec4 uDress;        // sprinkler grid (m), sprinkler strength, divot density, divot strength
uniform vec4 uTuft;         // tuft density fairway, tuft density rough, flower density, tuft strength
uniform vec4 uGrassShade;   // shade hue (luminance 1) + value ratio
uniform vec4 uGrassHue;     // albedo hue push (luminance 1) + amount
uniform float uWave;
varying vec3 vWorld;
${va}
${ya}
${ba}
${Ca}
${ha}

float hash21( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

// painted band: 0/1 square wave, antialiased over a 2-4 px painted edge
float paintBand( float x ) {
  float tri = abs( fract( x * 0.5 ) * 2.0 - 1.0 );
  float aa = fwidth( x ) * 1.6;
  return smoothstep( 0.5 - aa, 0.5 + aa, tri );
}

const vec3 LUM = vec3( 0.2126, 0.7152, 0.0722 );

void main() {
  vec2 p = vWorld.xz;
  // metres per pixel here: antialiasing inside the (non-uniform) cell branches below uses
  // this instead of derivatives taken in divergent control flow
  float pxM = max( length( fwidth( p ) ), 1e-4 );
  vec4 nA = texture2D( uNoiseTex, p * ( 1.0 / 150.0 ) );
  vec4 nB = texture2D( uNoiseTex, p * ( 1.0 / 41.0 ) + vec2( 0.31, 0.67 ) );
  // painted strokes: a 3.6 m layer (gently warped so it never tiles) + a 1.9 m layer; a
  // negative LOD bias keeps the near-field strokes crisp on phones
  vec4 b1 = texture( uBrush, p * ( 1.0 / 3.6 ) + ( nB.rg - 0.5 ) * 0.35, -0.7 );
  vec4 b2 = texture( uBrush, p * ( 1.0 / 1.9 ) + vec2( 0.37, 0.11 ), -0.7 );

  // signed distance to the fairway rectangle (< 0 inside)
  vec2 q = abs( p - uField.zw ) - uField.xy;
  float sd = length( max( q, 0.0 ) ) + min( max( q.x, q.y ), 0.0 );
  // the SOUTH end of the mown range (seen from the far end) is a scalloped mown edge into a
  // rough apron, not a ruler line
  float southK = smoothstep( uField.w + uField.y - 6.0, uField.w + uField.y - 2.0, p.y );
  sd += ( sin( p.x * 0.83 + 1.7 ) * 0.28 + sin( p.x * 2.1 ) * 0.12 + ( nB.g - 0.5 ) * 0.9 ) * southK;
  float sdw = sd + ( nB.g - 0.5 ) * uEdge.z;

  // ---- mowing: straight, evenly spaced N-S stripes (they converge towards the tee line),
  // low contrast; only the edge carries a few px of brush wobble
  float sx = ( p.x - uField.z ) / uStripe.x + 0.5 + ( b2.g - 0.5 ) * 0.035;
  float s1 = paintBand( sx );
  // at night the mowing stripes would read as hard light bands under the moon / floodlights:
  // halve their contrast as the key light turns from sun to moon
  float nightK = 1.0 - smoothstep( 0.8, 2.0, dot( uSunColor, LUM ) );
  // ... and the stripes fade out over the last ~7 m before it
  float stripeFade = 1.0 - smoothstep( uField.w + uField.y - 8.0, uField.w + uField.y - 0.5, p.y ) * 0.85;
  vec3 fair = mix( uFairDark, uFairLight, mix( 0.5, s1, uStripe.y * ( 1.0 - 0.5 * nightK ) * stripeFade ) );
  float cut = mix( b1.g, b1.r, 0.3 );

  vec3 rough = mix( uRough, uRoughLush, smoothstep( 0.3, 0.75, nB.b ) );
  vec3 meadow = mix( uMeadow, uMeadowLush, smoothstep( 0.35, 0.8, nA.g ) );
  float tFringe = smoothstep( 0.0, mix( 0.12, 0.9, southK ), sd );
  float tRough = smoothstep( uEdge.x - 0.45, uEdge.x + 0.45, sdw );
  float tMeadow = smoothstep( uEdge.y - 3.0, uEdge.y + 4.0, sdw );
  vec3 albedo = mix( fair, uFringe, tFringe );
  albedo = mix( albedo, rough, tRough );
  albedo = mix( albedo, meadow, tMeadow );

  // ---- painterly value + hue: quiet big patches (the clouds carry the big shapes), strokes, flecks
  float pv = ( nB.r - 0.5 ) * 0.65 + ( nA.r - 0.5 ) * 0.35;
  albedo *= 1.0 + pv * 2.0 * uVar.x;
  float pf = nB.a * 0.55 + nA.g * 0.45 + ( b1.a - 0.5 ) * 0.22;
  float pw = fwidth( pf ) + 0.01;
  float warmL = smoothstep( 0.585 - pw, 0.585 + pw, pf );
  float coolL = 1.0 - smoothstep( 0.415 - pw, 0.415 + pw, pf );
  albedo = mix( albedo, mix( albedo, uWarm, 0.45 ), warmL * uVar.y );
  albedo = mix( albedo, mix( albedo, uCool, 0.4 ) * 0.96, coolL * uVar.y );
  float strokeV = ( mix( cut, b1.r, tRough ) - 0.5 ) + ( b2.r - 0.5 ) * 0.6;
  albedo *= 1.0 + strokeV * uPaint.x * mix( 1.0, 1.6, tRough );
  float fleck = ( b2.b - 0.5 ) + ( b1.b - 0.5 ) * 0.5;
  albedo *= 1.0 + fleck * uPaint.z;
  float fw1 = fwidth( b1.b ) + 0.01;
  float flick = max( smoothstep( 0.69 - fw1, 0.69 + fw1, b1.b ) * 0.8, smoothstep( 0.66, 0.7, b2.b ) ) * ( 1.0 - tMeadow );
  albedo = mix( albedo, albedo * vec3( 1.08, 1.12, 1.0 ), flick * 0.6 );
  float dark = ( 1.0 - smoothstep( 0.37 - fw1, 0.37 + fw1, b1.b ) ) * ( 1.0 - tMeadow );
  albedo = mix( albedo, albedo * vec3( 0.88, 0.93, 1.0 ), dark * 0.5 );
  float dab = b1.a * 0.6 + b2.a * 0.55 - 0.075 + ( b2.b - 0.5 ) * 0.25;
  float dw = fwidth( dab ) * 0.7 + 0.008;
  float hiD = smoothstep( 0.57 - dw, 0.57 + dw, dab );
  float loD = 1.0 - smoothstep( 0.43 - dw, 0.43 + dw, dab );
  albedo = mix( albedo, albedo * vec3( 1.06, 1.09, 0.95 ), hiD * uPaint.y );
  albedo = mix( albedo, albedo * vec3( 0.9, 0.95, 1.04 ), loD * uPaint.y );

  // ---- the PLAYABLE-AREA LINE: chalk round the hole's bounds, like the line on a sports field. It is mixed into the
  // grass's own albedo (so the mowing stripes and painted value still shade it), a few strokes wobble its edge and the
  // paint is worn into patches; the tufts below grow over it
  {
    vec2 lc = vec2( uPlay.x + uPlay.y, uPlay.z + uPlay.w ) * 0.5;
    vec2 lh = vec2( uPlay.y - uPlay.x, uPlay.w - uPlay.z ) * 0.5;
    vec2 lq = abs( p - lc ) - lh;
    float lsd = length( max( lq, 0.0 ) ) + min( max( lq.x, lq.y ), 0.0 );
    float lw = uLine.x * ( 1.0 + ( b2.g - 0.5 ) * 0.5 );
    float la = pxM * 0.9;
    float lineM = 1.0 - smoothstep( lw - la, lw + la, abs( lsd + ( nB.g - 0.5 ) * 0.07 + ( b1.g - 0.5 ) * 0.04 ) );
    float worn = smoothstep( 0.3, 0.62, b2.b * 0.6 + b1.b * 0.4 + ( nB.b - 0.5 ) * 0.5 );
    lineM *= 1.0 - uLine.z * ( 1.0 - worn );
    vec3 chalk = mix( albedo, vec3( 0.93, 0.96, 0.9 ), 0.82 );
    albedo = mix( albedo, chalk, lineM * uLine.y );
  }

  float inField = 1.0 - smoothstep( -0.6, 0.0, sd );
  vec2 sunXZ = normalize( uSunDir.xz + vec2( 1e-4 ) );

  // ---- mid-frequency layer the phone can resolve (8-20 px):
  //   1. a dense field of short painted BLADE STROKES (one per 0.3 m cell, lighter or darker
  //      than the turf), so the grass reads as brushwork, fading out where it would alias;
  //   2. clustered grass TUFTS (a fan of 4 tapered blades standing up towards the camera,
  //      3 value bands: deep base, body, sunlit tip);
  //   3. sparse wild-flower specks (white / pink / pale blue - never yellow, that's the hero's)
  float tuftLit = 0.0;
  float tuftShade = 0.0;
  float tuftBody = 0.0;
  float tuftDark = 0.0;
  vec3 flower = vec3( 0.0 );
  float flowerA = 0.0;
  float strokeFade = 1.0 - smoothstep( 0.03, 0.06, pxM );
  {
    // 1. blade strokes
    if ( strokeFade > 0.0 ) {
      const float CS = 0.3;
      vec2 cell = floor( p / CS );
      float h = hash21( cell + 31.0 );
      vec2 base = ( cell + vec2( 0.2 + 0.6 * hash21( cell + 2.2 ), 0.88 ) ) * CS;
      float lean = ( hash21( cell + 7.7 ) - 0.5 ) * 0.9 + uWind.x * 0.25;
      vec2 dir = normalize( vec2( lean, -1.0 ) );
      vec2 d = p - base;
      float t = dot( d, dir ) / ( CS * ( 0.62 + 0.26 * hash21( cell + 4.1 ) ) );
      float s = abs( d.x * dir.y - d.y * dir.x );
      float w = 0.026 * ( 1.0 - t ) + 0.004;
      float blade = ( 1.0 - smoothstep( w - pxM * 0.6, w + pxM * 0.6, s ) ) * step( 0.0, t ) * step( t, 1.0 );
      float v = h * 2.0 - 1.0;
      vec3 k = v > 0.0 ? vec3( 1.12, 1.13, 0.94 ) : vec3( 0.84, 0.9, 0.9 );
      albedo = mix( albedo, albedo * k, blade * step( 0.25, abs( v ) ) * strokeFade * uTuft.w );
    }
    // 2. tufts, clustered by a low-frequency mask
    float clump = smoothstep( 0.42, 0.62, nB.b * 0.7 + nA.g * 0.3 );
    float dens = mix( uTuft.x, uTuft.y, max( tRough, tMeadow ) ) * ( 0.25 + 1.5 * clump );
    vec2 g = p / 0.7;
    vec2 cell = floor( g );
    float h = hash21( cell );
    if ( h < dens ) {
      vec2 o = vec2( hash21( cell + 1.3 ), hash21( cell + 5.7 ) );
      vec2 base = ( cell + 0.3 + o * 0.4 ) * 0.7 + vec2( 0.0, 0.14 );
      float sz = 0.9 + 0.7 * hash21( cell + 6.6 );
      float L = ( 0.26 + 0.1 * hash21( cell + 9.1 ) ) * sz;
      float lean = ( hash21( cell + 3.3 ) - 0.5 ) * 0.5 + uWind.x * 0.15;
      for ( int k = 0; k < 4; k ++ ) {
        float fk = float( k ) - 1.5;
        vec2 dir = normalize( vec2( fk * 0.36 + lean, -1.0 ) );
        vec2 nrm = vec2( -dir.y, dir.x );
        vec2 d = p - base - vec2( fk * 0.03 * sz, 0.0 );
        // uneven blades (asymmetric clump, not a stamp)
        float t = dot( d, dir ) / ( L * ( 0.62 + 0.45 * hash21( cell + fk * 2.9 + 11.0 ) ) );
        float s = abs( dot( d, nrm ) );
        float w = 0.03 * sz * ( 1.0 - t ) + 0.004;
        float aa = pxM * 0.65;
        float blade = ( 1.0 - smoothstep( w - aa, w + aa, s ) ) * step( 0.0, t ) * step( t, 1.0 );
        tuftBody = max( tuftBody, blade );
        tuftDark = max( tuftDark, blade * ( 1.0 - step( 0.38, t ) ) );
        tuftLit = max( tuftLit, blade * step( 0.64, t ) );
      }
    }
    vec2 gf = p / 1.7;
    vec2 cf = floor( gf );
    float hf = hash21( cf + 17.0 );
    // wild flowers only in the rough / meadow (none on the mown fairway)
    float fd = uTuft.z * smoothstep( 0.2, 0.8, max( tRough, tMeadow ) ) * ( 0.4 + 1.2 * clump );
    if ( hf < fd ) {
      vec2 o = vec2( hash21( cf + 2.1 ), hash21( cf + 8.3 ) );
      vec2 c = ( cf + 0.2 + o * 0.6 ) * 1.7;
      float pick = hash21( cf + 4.4 );
      vec3 fc = pick < 0.3 ? vec3( 0.95, 0.93, 0.98 ) : pick < 0.68 ? vec3( 0.98, 0.52, 0.72 ) : vec3( 0.55, 0.72, 1.0 );
      // a little cluster of 3 florets
      float best = 1e3;
      for ( int k = 0; k < 3; k ++ ) {
        float fk = float( k );
        vec2 off = vec2( hash21( cf + fk * 3.7 ), hash21( cf + fk * 5.3 + 1.0 ) ) - 0.5;
        best = min( best, length( ( p - c - off * 0.32 ) * vec2( 1.0, 0.8 ) ) );
      }
      float rf = 0.055;
      float aa = pxM * 0.8;
      float petal = 1.0 - smoothstep( rf - aa, rf + aa, best );
      flower = fc;
      flowerA = petal;
      // a thin shade rim around the florets (reads as a tiny cast shadow)
      float sh = 1.0 - smoothstep( rf - aa, rf + aa, best - 0.018 );
      tuftShade = max( tuftShade, ( sh - petal ) * 0.7 );
    }
  }
  // 3 value bands, all in the grass's own hue family: deep base, body, sunlit tip (below)
  albedo = mix( albedo, albedo * vec3( 0.84, 0.92, 0.87 ), tuftBody * uTuft.w );
  albedo = mix( albedo, albedo * vec3( 0.8, 0.88, 0.84 ), tuftDark * uTuft.w );
  // ---- course dressing: sprinkler heads on a grid, scattered divots (low contrast)
  {
    vec2 g = ( p + vec2( 6.0, 10.0 ) ) / uDress.x;
    vec2 cell = floor( g );
    vec2 c = ( cell + 0.5 ) * uDress.x - vec2( 6.0, 10.0 );
    float d = length( p - c );
    float head = 1.0 - smoothstep( 0.075, 0.1, d );
    float ring = smoothstep( 0.1, 0.12, d ) * ( 1.0 - smoothstep( 0.17, 0.25, d ) );
    albedo = mix( albedo, albedo * vec3( 0.66, 0.7, 0.72 ), head * uDress.y * inField );
    albedo *= 1.0 + ring * 0.1 * uDress.y * inField;
  }
#ifndef LITE
  {
    vec2 g = p / 4.0;
    vec2 cell = floor( g );
    float r = hash21( cell );
    if ( r < uDress.z ) {
      vec2 o = vec2( hash21( cell + 7.3 ), hash21( cell + 3.1 ) );
      vec2 c = ( cell + 0.2 + o * 0.6 ) * 4.0;
      float a = hash21( cell + 1.7 ) * 3.14159;
      vec2 dl = p - c;
      dl = vec2( dl.x * cos( a ) - dl.y * sin( a ), dl.x * sin( a ) + dl.y * cos( a ) );
      float e = length( dl / vec2( 0.2, 0.11 ) );
      float dv = 1.0 - smoothstep( 0.7, 1.0, e + ( b2.b - 0.5 ) * 0.5 );
      albedo = mix( albedo, uDivot, dv * uDress.w * inField );
    }
  }
#endif

  // ---- wind sheen: travelling bright waves through the grass (stronger in the rough)
  float sheen = 0.0;
#ifndef LITE
  {
    float w1 = texture2D( uNoiseTex, p * 0.028 - uWind.xy * ( uTime * 0.06 ) ).b;
    float w2 = texture2D( uNoiseTex, p * 0.09 - uWind.xy * ( uTime * 0.16 ) + vec2( 0.5 ) ).g;
    sheen = smoothstep( 0.55, 0.8, w1 * 0.75 + w2 * 0.35 ) * uWind.z;
    sheen *= mix( uPaint.w, uWave * 4.0, tRough );
  }
#endif

  float treeShade = 0.0;
  if ( sd > -0.5 ) {
    vec2 muv = ( p - uMaskRect.xy ) * uMaskRect.zw;
    treeShade = ( 1.0 - texture2D( uMask, muv ).r ) * uEdge.w;
  }

  // grass is blades, not a plane: its effective normal leans towards the sun, so low golden
  // light still makes the field glow instead of going flat
  vec3 Lh = vec3( uSunDir.x, 0.0, uSunDir.z );
  vec3 gN = normalize( vec3( 0.0, 1.0, 0.0 ) + Lh * ( 0.55 / max( length( Lh ), 1e-3 ) ) * smoothstep( 0.0, 0.05, length( Lh ) ) );
  float ndlG = max( dot( gN, uSunDir ), 0.0 ) * smoothstep( -0.02, 0.06, uSunDir.y );

  // ---- PAINTED TWO-TONE LIGHT: one lit tone and one cool shade tone (key-authored hue and
  // value ratio, grade.ts), switched by crisp cel masks (cast shadows, tuft crescents) and
  // soft ones (rolling cloud shadows, baked shade under the border plants)
  float lightK = worldShadow( vWorld, vec3( 0.0, 1.0, 0.0 ) );
  lightK *= worldCloud( p );
  lightK *= 1.0 - treeShade;
  lightK *= 1.0 - tuftShade * uTuft.w * 0.6;

  vec3 albedoTrue = albedo;
  float aL = dot( albedo, LUM );
  albedo = mix( albedo, aL * uGrassHue.rgb, uGrassHue.a );
  albedo = mix( albedo, albedo * uSheenCol, sheen * lightK * ndlG );

  vec3 amb = mix( uHemiSky, mix( uHemiGround, uHemiSky, 0.72 ) * uShadeTint, 0.5 );
  vec3 litC = albedo * ( amb + uSunColor * ndlG );
  litC *= 1.0 + tuftLit * uTuft.w * 0.3;
  float litL = dot( litC, LUM );
  // shade: the grass's own colour pulled half way towards the key's teal-green shade hue
  vec3 shadeC = mix( litC, litL * uGrassShade.rgb, 0.55 ) * uGrassShade.w;
  vec3 col = mix( shadeC, litC, lightK );
  // flower specks: own colour, value-stepped with the light they sit in
  col = mix( col, flower * mix( litL * uGrassShade.w, litL, lightK ) * 2.2, flowerA * 0.9 );
  // floodlights + hero pool: true grass colours under warm light. Inside a pool the lamp
  // gradually REPLACES the blue moonlight (a warm island in a moonlit field, never teal =
  // blue + green); the blend follows the pool's own smooth falloff, so there is no ring
  // (pitch black: the pools painted as stage light - hot core, bright edge, teal / amber
  // penumbra; glsl.ts POOL_FN. Identical to worldFlood otherwise)
  vec3 fl = worldFloodGround( p );
  float fr = dot( fl, LUM ) / max( dot( uFloodColor, LUM ) + dot( uHeroPool, LUM ) * uHole.w, 1e-3 );
  float fm = uFloodShape.z * ( 1.0 - exp( -fr * 3.5 ) );
  col = col * ( 1.0 - fm ) + albedoTrue * fl * 1.08 + fl * 0.02;
  gl_FragColor = vec4( hdrDither( col * RECIPROCAL_PI ), 1.0 );
}
`,Qp=class{mesh;material;maskCanvas;maskTexture;brush=qp();constructor(e,t=!1){W.uBrushTex.value=this.brush,this.maskCanvas=document.createElement(`canvas`),this.maskCanvas.width=this.maskCanvas.height=Jp;let n=this.maskCanvas.getContext(`2d`);n.fillStyle=`#ffffff`,n.fillRect(0,0,Jp,Jp),this.maskTexture=new ke(this.maskCanvas),this.maskTexture.flipY=!1,this.maskTexture.colorSpace=``,this.maskTexture.minFilter=Ze,this.maskTexture.magFilter=Ue,this.maskTexture.name=`ground-shade`,this.material=new oe({name:`world-ground`,uniforms:{...W,uDetail:{value:e},uBrush:{value:this.brush},uSheenCol:{value:new z(1.22,1.2,.86)},uDivot:{value:new z(10132050)},uPaint:{value:new L(.16,.9,.12,.22)},uDress:{value:new L(26,.55,.06,.32)},uMask:{value:this.maskTexture},uMaskRect:{value:new L(-128,-128,1/256,1/256)},uFairLight:{value:new z},uFairDark:{value:new z},uFringe:{value:new z},uRough:{value:new z},uRoughLush:{value:new z},uMeadow:{value:new z},uMeadowLush:{value:new z},uWarm:{value:new z},uCool:{value:new z},uField:{value:new L(22,1,0,0)},uPlay:{value:new L(-20-a.margin,20+a.margin,-19-a.margin,0)},uLine:{value:new L(a.width/2,a.strength,a.wear,0)},uStripe:{value:new L},uVar:{value:new L},uEdge:{value:new L},uWave:{value:0},uTuft:{value:new L(.3,.6,.1,1)}},vertexShader:Xp,fragmentShader:Zp,defines:t?{LITE:``,SHADOW_TAPS1:``}:{}});let r=new fe(1200,1200);r.rotateX(-Math.PI/2),this.mesh=new F(r,this.material),this.mesh.name=`world-ground`,this.mesh.renderOrder=900,this.mesh.matrixAutoUpdate=!1,this.mesh.updateMatrix(),this.followRange(H,`move`),this.unsubscribe=at((e,t)=>this.followRange(e,t))}unsubscribe;bakedPlacements=null;followRange(e,t){let n=this.material.uniforms.uField.value;n.y=(e.fairwayZ- -36)/2,n.w=(e.fairwayZ+-36)/2,this.material.uniforms.uPlay.value.w=e.holeMaxZ+a.margin,t===`settle`&&this.bakedPlacements&&this.bakeShade(this.bakedPlacements)}setLite(e){let t=this.material.defines;`LITE`in t!==e&&(e?(t.LITE=``,t.SHADOW_TAPS1=``):(delete t.LITE,delete t.SHADOW_TAPS1),this.material.needsUpdate=!0)}setDetail(e){this.material.uniforms.uDetail.value=e}applyParams(e){let t=this.material.uniforms;t.uFairLight.value.setHex(e.fairwayLight),t.uFairDark.value.setHex(e.fairwayDark),t.uFringe.value.setHex(e.fringe),t.uRough.value.setHex(e.rough),t.uRoughLush.value.setHex(e.roughLush),t.uMeadow.value.setHex(e.meadow),t.uMeadowLush.value.setHex(e.meadowLush),t.uWarm.value.setHex(e.warmPatch),t.uCool.value.setHex(e.coolPatch),t.uStripe.value.set(e.stripeWidth,e.stripeStrength,e.crossWidth,e.crossStrength),t.uVar.value.set(e.patchStrength,e.hueShift,e.detailStrength,1/Math.max(.5,e.detailScale)),t.uEdge.value.set(e.fringeWidth,e.meadowStart,e.edgeWobble,e.treeShade),t.uWave.value=e.grassWave}bakeShade(e,t){this.bakedPlacements=e;let n=H.fenceZ,r=this.maskCanvas.getContext(`2d`),i=Jp/256;r.fillStyle=`#ffffff`,r.fillRect(0,0,Jp,Jp);let a=(e,t,n,a)=>{let o=(e+Yp)*i,s=(t+Yp)*i,c=Math.max(1,n*i),l=r.createRadialGradient(o,s,0,o,s,c);l.addColorStop(0,`rgba(0,0,0,${a})`),l.addColorStop(.55,`rgba(0,0,0,${a*.6})`),l.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=l,r.fillRect(o-c,s-c,c*2,c*2)};for(let t of e){if(t.shade<=0||!op(t,n))continue;let e=t.cls===`tree`?.55:t.cls===`bush`?.5:.45;a(t.x,t.z-t.shade*.25,t.shade*1.15,e)}r.strokeStyle=`rgba(0,0,0,0.22)`,r.lineWidth=Math.max(1,.7*i),r.beginPath();for(let e of[-1,1])r.moveTo((e*Uf+Yp)*i,(Wf+Yp)*i),r.lineTo((e*Uf+Yp)*i,(n+Yp)*i);r.moveTo((-Uf+Yp)*i,(n+Yp)*i),r.lineTo((Uf+Yp)*i,(n+Yp)*i),r.stroke(),this.maskTexture.needsUpdate=!0}dispose(){this.unsubscribe(),this.mesh.geometry.dispose(),this.material.dispose(),this.maskTexture.dispose(),this.brush.dispose()}},$p=[`trees_oak.glb`,`trees_birch.glb`,`props.glb`],em=[`foliage_cutout.webp`,`foliage_opaque.webp`,`ground_detail.webp`],tm=new Ne,nm=new Pe,rm=new V;function im(e,t){let n=e.material,r=/kind(\d)/.exec(n.name);if(!r)return null;let i=e.geometry,a=i.getAttribute(`position`),o=i.getAttribute(`normal`),s=i.getAttribute(`uv`),c=i.getAttribute(`color`),l=a.count;e.updateWorldMatrix(!0,!1),tm.multiplyMatrices(t,e.matrixWorld),nm.getNormalMatrix(tm);let u=new Float32Array(l*3),d=new Float32Array(l*3),f=new Float32Array(l*2),p=new Uint8Array(l*4);for(let e=0;e<l;e++)rm.set(a.getX(e),a.getY(e),a.getZ(e)).applyMatrix4(tm),u[e*3]=rm.x,u[e*3+1]=rm.y,u[e*3+2]=rm.z,rm.set(o.getX(e),o.getY(e),o.getZ(e)).applyMatrix3(nm).normalize(),d[e*3]=rm.x,d[e*3+1]=rm.y,d[e*3+2]=rm.z,s&&(f[e*2]=s.getX(e),f[e*2+1]=s.getY(e)),c?(p[e*4]=Math.round(c.getX(e)*255),p[e*4+1]=Math.round(c.getY(e)*255),p[e*4+2]=Math.round(c.getZ(e)*255),p[e*4+3]=c.itemSize>3?Math.round(c.getW(e)*255):255):p.fill(255,e*4,e*4+4);let m=i.getIndex(),h=new Uint32Array(m?m.count:l);for(let e=0;e<h.length;e++)h[e]=m?m.getX(e):e;return{kind:Number(r[1]),vertexCount:l,pos:u,nrm:d,uv:f,col:p,idx:h}}async function am(e,t){let n=new Vn,r=new we,[i,a]=await Promise.all([Promise.all($p.map(t=>e===null?n.parseAsync(s(`env/${t}`),``):n.loadAsync(e+t))),Promise.all(em.map(t=>r.loadAsync(e===null?u(`env/${t}`):e+t)))]),o=new Map;for(let e of i){let t=e.scene;t.updateMatrixWorld(!0);let n=new Ne().copy(t.matrixWorld).invert();for(let e of t.children){let t=[];e.traverse(e=>{if(e.isMesh){let r=im(e,n);r&&t.push(r)}});let r=0,i=0;for(let e of t)r+=e.vertexCount,i+=e.idx.length/3;o.set(e.name,{name:e.name,parts:t,vertexCount:r,triangleCount:i})}t.traverse(e=>{let t=e;t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}let[c,l,d]=a;for(let e of[c,l])e.flipY=!1,e.colorSpace=``,e.anisotropy=Math.min(2,t),e.needsUpdate=!0;return d.wrapS=d.wrapT=A,d.colorSpace=``,d.anisotropy=Math.min(4,t),d.needsUpdate=!0,c.name=`foliage_cutout`,l.name=`foliage_opaque`,d.name=`ground_detail`,{meshes:o,textures:{cutout:c,opaque:l,groundDetail:d}}}function om(e=256,t=7){let n=new Uint8Array(e*e*4),r=new Float32Array(e*e),i=(e,t,n)=>{let r=Math.imul(e,374761393)^Math.imul(t,668265263)^Math.imul(n,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},a=(a,o,s,c)=>{r.fill(0);let l=1,u=0;for(let n=0;n<s;n++){let s=o<<n,d=new Float32Array(s*s);for(let e=0;e<s;e++)for(let r=0;r<s;r++)d[e*s+r]=i(r,e,t*131+a*17+n);let f=s/e;for(let t=0;t<e;t++){let n=t*f,i=Math.floor(n),a=n-i;a=a*a*a*(a*(a*6-15)+10);let o=i%s*s,u=(i+1)%s*s;for(let n=0;n<e;n++){let i=n*f,p=Math.floor(i),m=i-p;m=m*m*m*(m*(m*6-15)+10);let h=p%s,g=(p+1)%s,_=d[o+h]+(d[o+g]-d[o+h])*m,v=_+(d[u+h]+(d[u+g]-d[u+h])*m-_)*a;c&&(v=1-Math.abs(v*2-1)),r[t*e+n]+=v*l}}u+=l,l*=.5}let d=1/0,f=-1/0;for(let e=0;e<r.length;e++){let t=r[e]/u;t<d&&(d=t),t>f&&(f=t)}let p=1/Math.max(1e-6,f-d);for(let e=0;e<r.length;e++)n[e*4+a]=Math.round((r[e]/u-d)*p*255)};a(0,4,4,!1),a(1,8,3,!1),a(2,16,3,!1),a(3,3,5,!0);let o=new O(n,e,e,re,se);return o.wrapS=o.wrapT=A,o.magFilter=Ue,o.minFilter=Ze,o.generateMipmaps=!0,o.colorSpace=``,o.name=`world-noise`,o.needsUpdate=!0,o}function sm(){return{toneMapping:`ACES`,exposure:.87,fogDistance:1,gradeStrength:1,twilightGroundKeep:.22,sunAzimuthDeg:25,sunMaxElevationDeg:58,sunIntensity:1,fairwayLight:6596190,fairwayDark:5803860,fringe:5541454,rough:4752966,roughLush:4095044,meadow:4885058,meadowLush:5672774,stripeWidth:5,stripeStrength:1,crossWidth:12,crossStrength:0,patchStrength:.06,hueShift:.35,warmPatch:8958048,coolPatch:4889212,detailStrength:.45,detailScale:4.5,fringeWidth:1.4,meadowStart:9,edgeWobble:1.6,treeShade:.55,grassWave:.16,cloudStrength:.4,cloudScale:.0055,cloudSpeed:1.6,oakLeaf:3840584,birchLeaf:5937716,grassTint:6991412,grassBottom:5216830,flowerTint:8421504,oakBark:12098176,birchBark:15789284,rockTint:11575440,mossTint:6064684,plankTint:15913642,leafVariation:.45,leafWrap:.55,leafAO:.75,leafSSS:.6,windStrength:1,windGust:.6,windAngleDeg:20,wrap:.45,rimStrength:.32,rimPower:3,terminator:.22,floodIntensity:1.9,floodRadius:8,floodColor:15266047,floodHemiBoost:.14,floodSwitchOn:.32,beamStrength:.07,glowSize:3.2,floodPenumbraWarmth:0,floodOverlap:.25,floodMoonReplace:.8,floodFill:.375,roofSpread:4.5,roofLevel:1.17,nightStyle:on,nightDarkness:1,playerLightRadius:13,playerLightIntensity:1,playerLightNorthBias:1,playerLightHeight:7,playerLightPlateau:.75,playerLightColor:16773596,spotRadius:3.8,roofSpotRadius:3.2,spotIntensity:1,spotLengthScale:.45,beamDark:.22,poolShaping:1,flightRim:.18,horizonGlow:.3,bayLight:1.25,minBallVisibility:.03,minMarkerVisibility:0}}var cm=-1.5,lm=10.5,um=.15;function dm(e=3072,t=512,n=29){let r=n>>>0||1,i=()=>{r=r+1831565813>>>0;let e=r;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},a=(e,t)=>e+(t-e)*i(),o=e/96,s=t/12,c=[],l=(e,t,n,r,o,s,l,u)=>{let d=n/2,f=[],p=n>8,m=e+(p?(i()<.5?-1:1)*a(.25,.4):a(-.18,.18))*d;f.push([m,p?Math.max(d*a(.42,.55),r*.66):d*a(.78,.95),r]);let h=n<3.2?0:p?3+ +(i()<.5):i()<.55?2:1;for(let t=0;t<h;t++){if(p){let n=e+(-.78+t/Math.max(1,h-1)*1.56)*d+a(-.08,.08)*d,i=r*a(.6,.88);f.push([n,Math.max(d*a(.3,.42),i*.66),i]);continue}let n=t===0?i()<.5?-1:1:-Math.sign(f[1][0]-m)||1;f.push([m+n*d*a(.4,.6),d*a(.4,.55),r*a(.45,.72)])}let g=n<3.2?.38:.46,_=e=>{let t=0;for(let[n,r,i]of f){let a=(e-n)/r;Math.abs(a)<1&&(t=Math.max(t,i*(1-a*a)**g))}return t},v=[],y=(n,i,a,o,c=0)=>{let u=f[0],p=-1;for(let e of f){let t=(n-e[0])/e[1],r=Math.abs(t)<1?e[2]*(1-t*t)**g:-1;r>p&&(p=r,u=e)}p<0&&(u=[e,d,r]),v.push({x:n,y:i,r:a,z:o,base:t,ht:r,aoMin:s,flat:l,cx:u[0],ch:u[1],hh:u[2],cres:c})},b=e-d*1.15,x=e+d*1.15;{let e=r*.3;for(let n=b;n<=x;n+=e*.9){let i=t+_(n);for(let s=t+e*.4;s<=i-e*1.05;s+=e*.9)y(n+a(-.15,.15)*e,s,e*a(.95,1.1),o-r*.6)}}{let e=r*.32;for(let n=b+e*.4;n<=x-e*.4;n+=e*a(.8,1.1)){let i=_(n);if(i<e*.7)continue;let s=Math.min(e*a(.85,1.1),i*.6);y(n,t+s*.28,s,o-r*.2+a(0,s*.3))}}{let s=Math.round(a(3,6)*(n/Math.max(r,.1))*.6);for(let n=0;n<s;n++){let n=e+(i()*2-1)*d*.8,s=_(n);if(s<r*.3)continue;let c=r*a(.16,.28),l=t+a(.3,.75)*s;l+c>t+s-c*.25||y(n,l,c,o+r*.25+a(0,c*.6),1)}}for(let e=0;e<2;e++){let n=b;for(;n<x;){let i=_(n);if(i<r*.06){n+=r*.05;continue}let s=Math.sqrt(i/r),c=Math.max(r*.05,r*u*a(.6,1)*(.78+.22*s)*(e===0?1:1.25)),l=e===0?a(.62,.95):a(1.1,1.5),d=Math.max(t+c*.35,t+i-c*l);y(n,d,c,o+(e===0?r*.05:r*.15)+a(0,c*.4),1);let f=(_(n+c*.25)-_(n-c*.25))/(c*.5);n+=c*a(.95,1.3)/Math.sqrt(1+f*f)}}for(let e of v)c.push(e)};for(let e=0;e<14;e++){let t=(e+a(.1,.9))*(96/14),n=a(3.5,7);l(t,a(-1,-.3),n,Math.min(n*.2,a(.5,.9)),a(0,2),.62,.5,.3)}for(let e=0;e<8;e++){let t=(e+a(.15,.85))*12,n=a(4.2,7.5);l(t,a(-1,-.2),n,Math.min(n*.38,a(1.5,2.6)),8+a(0,3),.45,.12,.17)}for(let e of[-8.5,22,-33]){let t=(e%96+96)%96,n=a(10,12.5);l(t,a(-1.3,-.8),n,Math.min(n*.46,a(4.4,5.6)),16+a(0,3),.38,0,.15)}for(let e=0;e<9;e++){let t=(e+a(0,1))*(96/9),n=a(1.4,3);l(t,a(2.6,7.8),n,Math.min(n*.42,a(.45,.95)),24+a(0,2),.55,.1,.24)}let u=e*t,d=new Float32Array(u).fill(-1e9),f=new Float32Array(u),p=new Float32Array(u),m=new Float32Array(u),h=new Float32Array(u),g=new Int32Array(u).fill(-1),_=new Float32Array(u).fill(-2),v=new Uint8Array(u*4),y=.5*(o+s),b=.7*y;for(let n=0;n<c.length;n++){let r=c[n],i=Math.floor((r.x-r.r)*o)-2,a=Math.ceil((r.x+r.r)*o)+2,l=Math.max(0,Math.floor((r.y-r.r-cm)*s)-2),u=Math.min(t-1,Math.ceil((r.y+r.r-cm)*s)+2),v=r.r*r.r,x=(r.r+2.5/y)*(r.r+2.5/y),S=(1-r.flat)/r.r;for(let t=l;t<=u;t++){let c=cm+(t+.5)/s,l=c-r.y,u=(c-r.base)*s;if(u<=-2)continue;let C=Math.min(1,Math.max(0,1-(c-r.base)/(r.ht*.22))),w=C*C*(3-2*C),T=l-.36*r.r;for(let s=i;s<=a;s++){let i=(s+.5)/o-r.x,a=i*i+l*l;if(a>=x)continue;let C=0;if(r.cres>0&&l<.15*r.r){let e=Math.min(1,Math.max(0,(Math.sqrt(i*i+T*T)/r.r-.84)/.14));C=e*e*(3-2*e)}let E=(s%e+e)%e,D=t*e+E,O=Math.sqrt(a),k=Math.min((r.r-O)*y,u);k>_[D]&&(_[D]=Math.min(2,k));let A=r.z+Math.sqrt(Math.max(v-a,0))-(k<=0?1e4:0),j=((s+.5)/o-r.cx)/(r.ch*1.1),ee=(c-(r.base+r.hh*.32))/(r.hh*1),M=Math.hypot(j,ee);M>.97&&(j*=.97/M,ee*=.97/M);let te=(.85*j+um*i*S)*(1-w),ne=(.85*ee+um*l*S)*(1-w)-.45*w,N=d[D];if(A>N){let e=N<-1e8?0:Math.exp(b*(N-A));f[D]=f[D]*e+1,p[D]=p[D]*e+te,m[D]=m[D]*e+ne,h[D]=h[D]*e+C,d[D]=A,g[D]=n}else{let e=b*(A-N);if(e<-6.9)continue;let t=Math.exp(e);f[D]+=t,p[D]+=t*te,m[D]+=t*ne,h[D]+=t*C}}}}for(let e=0;e<u;e++){if(d[e]<-1e8)continue;let t=1/f[e];p[e]*=t,m[e]*=t,h[e]*=t}{let n=new Uint8Array(u);for(let r=1;r<t-1;r++)for(let t=0;t<e;t++){let i=r*e+t,a=g[i];if(a<0)continue;let o=g[r*e+(t===0?e-1:t-1)],s=g[r*e+(t===e-1?0:t+1)],c=g[i-e],l=g[i+e];if(o>=0&&o!==a||s>=0&&s!==a||c>=0&&c!==a||l>=0&&l!==a)for(let i=-1;i<=1;i++){let a=r+i;for(let r=-1;r<=1;r++){let i=(t+r+e)%e;g[a*e+i]>=0&&(n[a*e+i]=1)}}}let r=new Float32Array(u),i=new Float32Array(u),a=new Float32Array(u),o=[1,2,1];for(let s=1;s<t-1;s++)for(let t=0;t<e;t++){let c=s*e+t;if(!n[c])continue;let l=0,u=0,d=0,f=0;for(let n=-1;n<=1;n++){let r=(s+n)*e;for(let i=-1;i<=1;i++){let a=r+(t+i+e)%e;if(g[a]<0)continue;let s=o[i+1]*o[n+1];l+=s,u+=s*p[a],d+=s*m[a],f+=s*h[a]}}r[c]=u/l,i[c]=d/l,a[c]=f/l}for(let e=0;e<u;e++)n[e]&&(p[e]=r[e],m[e]=i[e],h[e]=a[e])}for(let e=0;e<u;e++)v[e*4]=Math.round(Math.min(1,Math.max(0,.5+_[e]*.25))*255),d[e]<-1e8?(v[e*4+1]=128,v[e*4+2]=128,v[e*4+3]=0):(v[e*4+1]=Math.round(Math.min(1,Math.max(0,p[e]*.5+.5))*255),v[e*4+2]=Math.round(Math.min(1,Math.max(0,m[e]*.5+.5))*255),v[e*4+3]=Math.round(Math.min(1,h[e])*255));for(let n=0;n<e;n++)v[n*4]=0,v[((t-1)*e+n)*4]=0;let x=new O(v,e,t,re,se);return x.wrapS=A,x.wrapT=We,x.magFilter=Ue,x.minFilter=Ze,x.generateMipmaps=!0,x.colorSpace=``,x.name=`sky-cumulus`,x.needsUpdate=!0,x}var fm=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4( mat3( viewMatrix ) * position, 1.0 );
  gl_Position = p.xyww;
}
`,pm=`
${wa}
${ha}
uniform float uStars;
uniform float uTime;
uniform sampler2D uCloudTex;
uniform sampler2D uNoiseTex;
uniform vec3 uCloudLit;
uniform vec3 uCloudShade;
uniform vec3 uCloudRim;
uniform vec3 uCloudUnder;
uniform vec3 uCloudL;
uniform vec4 uCloudK;      // x = u scroll, y = opacity, z = rim strength, w = sun disc visibility
uniform vec4 uLP;          // rgb = light-pollution glow (linear, x night), a = cirrus opacity
uniform vec2 uCloudBias;   // terminator bias: x = height-in-cloud weight, y = offset
uniform vec3 uHorizonLift; // pitch black: faint night-blue band above the tree line (silhouettes)
varying vec3 vDir;

float hash12( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

void main() {
  vec3 d = normalize( vDir );
  float h = d.y;
  vec3 col = skyBase( d );
  float night = uSkyMoon.w;
  // warm light-pollution glow hugging the tree line (night)
  col += uLP.rgb * exp( -max( h, 0.0 ) * 42.0 );
  // pitch black: the sky just above the tree line keeps a trace of night blue, so the tree
  // line, the towers and the building cut out against it (the field below stays black: this
  // is the dome only, not the aerial-perspective sky colour)
  col += uHorizonLift * exp( -max( h, 0.0 ) * 6.0 );
  // sun disc (soft edge)
  float sd = dot( d, uSkySun.xyz );
  col = mix( col, vec3( 1.0, 0.96, 0.86 ) * 1.4 + uSkyGlow * 0.4, smoothstep( 0.99935, 0.9996, sd ) * uCloudK.w );
  // stars: sparse hashed cells, varied size / tint, twinkling, down to the tree line
  if ( uStars > 0.01 && h > 0.0 ) {
    vec2 sph = vec2( atan( d.z, d.x ), asin( clamp( h, -1.0, 1.0 ) ) ) * 120.0;
    vec2 cell = floor( sph );
    float r = hash12( cell );
    if ( r > 0.962 ) {
      vec2 f = fract( sph ) - 0.5 - ( vec2( hash12( cell + 7.1 ), hash12( cell + 3.7 ) ) - 0.5 ) * 0.6;
      float sz = mix( 0.06, 0.15, hash12( cell + 1.3 ) );
      float s = exp( -dot( f, f ) / ( sz * sz ) );
      float tw = 0.6 + 0.4 * sin( uTime * ( 1.3 + r * 25.0 ) + r * 50.0 );
      vec3 tint = mix( vec3( 0.75, 0.85, 1.0 ), vec3( 1.0, 0.9, 0.82 ), hash12( cell + 9.9 ) );
      col += tint * s * tw * uStars * smoothstep( 0.01, 0.05, h ) * ( 0.35 + ( r - 0.962 ) * 30.0 );
    }
  }
  // moon: low over the tree line, a pale disc with soft maria and a darker limb, a halo
  float md = dot( d, uSkyMoon.xyz );
  if ( night > 0.01 ) {
    float mr = acos( clamp( md, -1.0, 1.0 ) );           // angular distance (rad)
    const float MOON_R = 0.0175;                          // ~1 deg
    float aaM = fwidth( mr ) * 1.2 + 1e-5;
    float disc = 1.0 - smoothstep( MOON_R - aaM, MOON_R + aaM, mr );
    vec3 mx = normalize( cross( uSkyMoon.xyz, vec3( 0.0, 1.0, 0.0 ) ) );
    vec3 my = cross( mx, uSkyMoon.xyz );
    vec2 mq = vec2( dot( d, mx ), dot( d, my ) ) / MOON_R;
    float maria = texture2D( uNoiseTex, mq * 0.18 + vec2( 0.31, 0.77 ) ).r;
    float limb = sqrt( max( 1.0 - dot( mq, mq ), 0.0 ) );
    vec3 moonC = vec3( 0.92, 0.95, 1.0 ) * ( 1.55 - 0.32 * smoothstep( 0.45, 0.7, maria ) ) * ( 0.8 + 0.2 * limb );
    float halo = exp( -mr * 34.0 ) * 0.5 + exp( -mr * 9.0 ) * 0.14;
    col += vec3( 0.42, 0.52, 0.78 ) * halo * night;
    col = mix( col, moonC, disc * night );
  }
  // ---- clouds
  float elev = degrees( asin( clamp( h, -1.0, 1.0 ) ) );
  float u = degrees( atan( d.x, -d.z ) ) * ( 1.0 / ${96 .toFixed(1)} );
  // high cirrus: thin wind-combed strokes (behind the cumulus)
  if ( uLP.a > 0.0 ) {
    vec2 cq = vec2( u * 5.0 + uCloudK.x * 3.0, elev * 0.11 + sin( u * 37.0 ) * 0.02 );
    float c1 = texture2D( uNoiseTex, cq * vec2( 1.0, 2.6 ) ).g;
    float c2 = texture2D( uNoiseTex, cq * vec2( 3.1, 9.0 ) + 0.37 ).b;
    float streak = smoothstep( 0.56, 0.74, c1 * 0.75 + c2 * 0.4 );
    float band = smoothstep( 2.0, 4.0, elev ) * ( 1.0 - smoothstep( 9.0, 11.0, elev ) );
    vec3 cirC = mix( uCloudLit, uCloudRim, 0.35 );
    col = mix( col, cirC, streak * band * uLP.a );
  }
  vec2 cuv = vec2( u + uCloudK.x, ( elev - ( ${cm.toFixed(1)} ) ) * ( 1.0 / ${(lm-cm).toFixed(1)} ) );
  // silhouette from the stored distance field, re-thresholded with fwidth (uniform control
  // flow): crisp and smooth at any magnification
  vec4 ct = texture2D( uCloudTex, vec2( cuv.x, clamp( cuv.y, 0.0, 1.0 ) ) );
  float fwc = clamp( fwidth( ct.r ) * 0.85, 0.004, 0.25 );
  float cov = smoothstep( 0.5 - fwc, 0.5 + fwc, ct.r );
  vec2 n2 = ct.gb * 2.0 - 1.0;
  float nz = sqrt( max( 1.0 - dot( n2, n2 ), 0.0 ) );
  vec3 fwd = normalize( vec3( d.x, 0.0, d.z ) + vec3( 0.0, 0.0, -1e-4 ) );
  vec3 right = vec3( -fwd.z, 0.0, fwd.x );
  vec3 N = n2.x * right + vec3( 0.0, n2.y, 0.0 ) - nz * fwd;
  // PAINTER'S LIGHT for the terminator: the light's direction on the picture plane plus a
  // fixed component towards the viewer (front lit: every tower gets a rounded lit CAP on the
  // light side and a curved shade crescent opposite) or away from it (backlit: only a thin lit
  // crescent along the light-side edges - the silver / gold lining). A light in the picture
  // plane would cut every dome with a straight terminator and read as a mountain face.
  float back = max( dot( uCloudL, fwd ), 0.0 );
  vec2 lp = vec2( dot( uCloudL, right ), uCloudL.y );
  vec2 lpd = length( lp ) > 1e-3 ? normalize( lp ) : vec2( 0.0, 1.0 );
  float front = mix( 0.9, -0.95, smoothstep( 0.35, 0.9, back ) );
  vec3 Ls = normalize( lpd.x * right + vec3( 0.0, lpd.y, 0.0 ) - fwd * front );
  float ndl = dot( N, Ls );
  // height in the cloud from its mass normal (-1 flat base .. +1 crown) and the lobe crescents
  float ao = clamp( n2.y * 0.6 + 0.55, 0.0, 1.0 );
  float cres = ct.a;
  // HARD two-tone cel: the terminator is biased by the height in the cloud - the crowns catch
  // the light, the flat base stays in shade (at sunset the sun-side flanks and the tops glow,
  // the bases go lavender-grey) - antialiased ~1.5 px
  float tl = ndl + uCloudBias.x * ao + uCloudBias.y;
  float wl = clamp( fwidth( tl ) * 1.1, 0.004, 0.2 );
  float lit = smoothstep( -wl, wl, tl );
  // every lobe throws a curved shade crescent onto the ones below it (the cauliflower read)
  float wc = clamp( fwidth( cres ) * 1.1, 0.01, 0.3 );
  float cm = smoothstep( 0.5 - wc, 0.5 + wc, cres );
  lit *= 1.0 - cm * 0.92;
  if ( uCloudK.y > 0.0 && cuv.y > 0.0 && cuv.y < 1.0 ) {
    float a = cov * uCloudK.y * smoothstep( -1.2, 0.3, elev );
    if ( a > 0.002 ) {
      // shade: cool lavender, a little darker towards the base; lit: flat warm cream
      vec3 shade = uCloudShade * mix( 0.84, 1.04, smoothstep( 0.2, 0.9, ao ) ) * ( 1.0 - 0.08 * cm );
      vec3 c = mix( shade, uCloudLit, lit );
      // rim: a thin bright line just inside the silhouette on the light side (gold sun / silver
      // moon), wider and brighter when the light is behind the clouds
      vec2 L2 = vec2( dot( uCloudL, right ), uCloudL.y );
      float side = smoothstep( 0.0, 0.5, dot( n2, L2 ) / max( length( L2 ), 1e-3 ) );
      float inner = 1.0 - smoothstep( 0.5 + fwc, 0.5 + fwc + mix( 0.12, 0.3, back ), ct.r );
      // backlit: a wider glowing lining where the cloud turns edge-on (thin, translucent edges)
      float edgeOn = 1.0 - nz;
      float wr = clamp( fwidth( edgeOn ) * 1.2, 0.004, 0.2 );
      float lining = smoothstep( 0.62 - wr, 0.62 + wr, edgeOn ) * back;
      c = mix( c, uCloudRim, max( inner, lining ) * side * min( 1.0, uCloudK.z * ( 0.55 + 0.8 * back ) ) );
      // thin glow along the underside (light scattered up from below / town glow at night)
      float under = smoothstep( 0.15, 0.6, -n2.y ) * ( 1.0 - smoothstep( 0.5 + fwc, 0.82, ct.r ) );
      c += uCloudUnder * under;
      // aerial perspective: the low distant bank flattens (one soft tone) and melts into the
      // horizon haze, so it never reads as a ridge of mountains
      float haze = 1.0 - smoothstep( -0.8, 1.6, elev );
      c = mix( c, mix( shade, uCloudLit, 0.55 ), haze * 0.6 );
      c = mix( c, skyBase( vec3( d.x, max( h, 0.0 ), d.z ) ) + uLP.rgb * 0.6, haze * 0.62 );
      col = mix( col, c, a );
    }
  }
  gl_FragColor = vec4( hdrDither( col ), 1.0 );
  #include <colorspace_fragment>
}
`,mm=new z,hm=new z(3809840),gm=new z(.0016,.0032,.0105),_m=class{mesh;material;cloudTexture;tune={cloudOpacity:1,cloudRim:1,cloudDrift:.05,cirrus:.45,lightPollution:1};horizonGlow=0;disposed=!1;constructor(){this.cloudTexture=new O(new Uint8Array([0,128,128,255]),1,1),this.cloudTexture.needsUpdate=!0,setTimeout(()=>{if(this.disposed)return;let e=dm();this.cloudTexture.dispose(),this.cloudTexture=e,this.material.uniforms.uCloudTex.value=e},0),this.material=new oe({name:`world-sky`,uniforms:{uSkyZenith:W.uSkyZenith,uSkyHorizon:W.uSkyHorizon,uSkyGlow:W.uSkyGlow,uSkySun:W.uSkySun,uSkyMoon:W.uSkyMoon,uNoiseTex:W.uNoiseTex,uStars:{value:0},uTime:{value:0},uCloudTex:{value:this.cloudTexture},uCloudLit:{value:new z(1,1,1)},uCloudShade:{value:new z(.5,.55,.7)},uCloudRim:{value:new z(1,1,1)},uCloudUnder:{value:new z(0,0,0)},uCloudL:{value:new V(0,1,0)},uCloudK:{value:new L(0,1,.5,1)},uLP:{value:new L(0,0,0,.4)},uHorizonLift:{value:new z(0,0,0)},uCloudBias:{value:new Ve(.55,-.36)}},vertexShader:fm,fragmentShader:pm,side:1,depthWrite:!1,toneMapped:!1,fog:!1}),this.mesh=new F(new Se(100,32,16),this.material),this.mesh.name=`world-sky`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1e3,this.mesh.matrixAutoUpdate=!1}update(e,t){let n=this.material.uniforms,r=Math.min(1,Math.max(0,(e.sunDir.y+.08)*6));W.uSkyZenith.value.copy(e.zenith),W.uSkyHorizon.value.copy(e.horizon),W.uSkyGlow.value.copy(e.glow),W.uSkySun.value.set(e.sunDir.x,e.sunDir.y,e.sunDir.z,r);let i=1-e.pitchBlack;W.uSkyMoon.value.set(e.skyMoonDir.x,e.skyMoonDir.y,e.skyMoonDir.z,e.stars*i),n.uStars.value=e.stars,n.uHorizonLift.value.copy(gm).multiplyScalar(Math.max(0,this.horizonGlow)*e.pitchBlack),n.uTime.value=t,n.uCloudLit.value.copy(e.cloudLit),n.uCloudShade.value.copy(e.cloudShade),n.uCloudRim.value.copy(e.cloudRim);let a=Math.min(1,Math.max(0,(e.sunDir.y+.16)/.12)),o=n.uCloudL.value.copy(e.skyMoonDir).multiplyScalar(1-a).addScaledVector(e.sunDir,a).normalize(),s=Math.min(1,Math.max(0,(e.darkness-.35)/.5));mm.copy(hm).multiplyScalar(s*this.tune.lightPollution*i*i),n.uLP.value.set(mm.r,mm.g,mm.b,this.tune.cirrus*Math.min(1,.25+e.cloudAlpha*.75)*(1-.6*s));let c=n.uCloudUnder.value;c.copy(e.horizon).multiplyScalar(.16*(1-s)),c.r+=mm.r*1.6,c.g+=mm.g*1.6,c.b+=mm.b*1.6;let l=Math.min(1,Math.max(0,(a*e.sunDir.y-.08)/.24)),u=l*l*(3-2*l);n.uCloudBias.value.set(.3,-.22),o.y=Math.max(o.y,.55*(1-u)),o.normalize();let d=t*this.tune.cloudDrift/96%1;n.uCloudK.value.set(-d,e.cloudAlpha*this.tune.cloudOpacity,e.cloudRimK*this.tune.cloudRim,r)}dispose(){this.disposed=!0,this.mesh.geometry.dispose(),this.material.dispose(),this.cloudTexture.dispose()}},vm=class{root=new tt;params;ready;loadError=null;day=new Af;hemi;sun;fog;background=new z;sky;ground;floodlights;foliage=null;placements;renderer=null;sceneBound=!1;noise;greyDetail;detail=null;cloudX=0;cloudZ=0;camera=null;frustum=new le;projView=new Ne;tmpDir=new V;visibleChunks=0;timings={setupMs:0,loadMs:0,mergeMs:0,bakeMs:0};constructor(e={}){let t=performance.now();this.root.name=`world-look`,this.params={...sm(),...e.params},this.noise=om(),W.uNoiseTex.value=this.noise,this.greyDetail=new O(new Uint8Array([128,128,128,255]),1,1),this.greyDetail.wrapS=this.greyDetail.wrapT=A,this.greyDetail.colorSpace=``,this.greyDetail.needsUpdate=!0,this.hemi=new xe(16777215,4478259,1),this.hemi.name=`world-hemi`,this.sun=new pe(16777215,2.5),this.sun.name=`world-key-light`,this.root.add(this.hemi,this.sun),this.hemi.layers.enable(1),this.sun.layers.enable(1),this.fog=new ae(12575736,36,200),this.sky=new _m,this.ground=new Qp(this.greyDetail,e.quality===`lite`),this.floodlights=new bp([]),this.root.add(this.ground.mesh,this.sky.mesh,this.floodlights.group,Of()),this.sky.mesh.visible=!1,this.ground.mesh.onBeforeRender=(e,t,n)=>{this.camera===null&&(this.camera=n)},this.placements=cp({seed:e.seed??1,nearTreeLod:e.nearTreeLod??1,grassDensity:e.grassDensity??1,towers:this.floodlights.towerXZ}),this.ground.bakeShade(this.placements,this.floodlights.towerXZ);let n=e.assetBase??null,r=performance.now();this.timings.setupMs=r-t,this.ready=am(n,e.maxAnisotropy??4).then(t=>{let n=performance.now();this.timings.loadMs=n-r;let i=new Vp(t.textures.cutout,t.textures.opaque,e.impostors??!1,e.impostorLayer);i.applyParams(this.params),i.build(t,this.placements);let a=performance.now();if(this.timings.mergeMs=a-n,this.renderer)try{i.bakeImpostors(this.renderer)}catch(e){console.warn(`[WorldLook] impostor bake failed; the far trees stay real meshes.`,e)}this.timings.bakeMs=performance.now()-a,this.foliage=i,this.root.add(i.group),this.detail=t.textures.groundDetail,this.ground.setDetail(t.textures.groundDetail)},e=>{this.loadError=e,console.warn(`[WorldLook] Meadow kit failed to load; ground/sky only.`,e)}),this.applyParams(),this.evaluate(.5)}get foliageStats(){return this.foliage?this.foliage.stats:null}setCamera(e){this.camera=e}applyParams(){let e=this.params;this.ground.applyParams(e),this.foliage?.applyParams(e);let t=e.windAngleDeg*Math.PI/180;W.uWind.value.set(Math.sin(t),-Math.cos(t),e.windStrength,e.windGust),W.uStyle.value.set(e.wrap,e.rimStrength,e.rimPower,e.terminator),this.renderer&&this.applyToRenderer(this.renderer)}applyToRenderer(e){this.renderer=e,e.outputColorSpace=de;let t=this.params.toneMapping;e.toneMapping=t===`AgX`?6:t===`Neutral`?7:4,e.toneMappingExposure=this.day.exposure*this.params.exposure}applyToScene(e){e.fog=this.fog,e.background=this.background,this.sceneBound=!0}update(e){this.sceneBound||this.bindScene();let t=this.params;W.uTime.value=e.time;let n=this.evaluate(e.dayT);e.darkness=n.darkness;let r=W.uWind.value;this.cloudX-=r.x*e.dt*t.cloudSpeed*t.cloudScale,this.cloudZ-=r.y*e.dt*t.cloudSpeed*t.cloudScale,this.cloudX-=Math.floor(this.cloudX),this.cloudZ-=Math.floor(this.cloudZ),W.uCloud.value.set(t.cloudScale,t.cloudStrength*n.cloud,this.cloudX,this.cloudZ),this.floodlights.update(e.dt,e.time,e.floodlights,n.darkness,t);let i=1+t.floodHemiBoost*this.floodlights.average*n.darkness*2.5;if(this.hemi.intensity=n.hemiIntensity*i,W.uHemiSky.value.copy(n.hemiSky).multiplyScalar(this.hemi.intensity),W.uHemiGround.value.copy(n.hemiGround).multiplyScalar(this.hemi.intensity),this.renderer&&(this.renderer.toneMappingExposure=n.exposure*t.exposure),this.camera&&this.camera.isPerspectiveCamera){let e=this.camera;e.getWorldDirection(this.tmpDir);let t=Math.asin(Math.max(-1,Math.min(1,this.tmpDir.y)))*(180/Math.PI);this.sky.mesh.visible=t+e.fov*.5>-4}this.foliage&&this.camera&&(this.camera.updateMatrixWorld(),this.projView.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projView),this.foliage.setView(this.camera,this.renderer),this.visibleChunks=this.foliage.cull(this.frustum))}evaluate(e){let t=this.params,n=Bf(e,t.sunAzimuthDeg,t.sunMaxElevationDeg,this.day);return this.sun.color.copy(n.lightColor),this.sun.intensity=n.lightIntensity*t.sunIntensity,this.sun.position.copy(n.lightDir).multiplyScalar(100),this.hemi.color.copy(n.hemiSky),this.hemi.groundColor.copy(n.hemiGround),this.hemi.intensity=n.hemiIntensity,this.fog.color.copy(n.horizon),this.fog.near=n.fogNear*t.fogDistance,this.fog.far=n.fogFar*t.fogDistance,this.background.copy(n.horizon),this.sky.horizonGlow=t.horizonGlow,this.sky.update(n,W.uTime.value),W.uSunDir.value.copy(n.lightDir),W.uSunColor.value.copy(n.lightColor).multiplyScalar(n.lightIntensity*t.sunIntensity),W.uHemiSky.value.copy(n.hemiSky).multiplyScalar(n.hemiIntensity),W.uHemiGround.value.copy(n.hemiGround).multiplyScalar(n.hemiIntensity),W.uGrade.value.set(n.grade.r,n.grade.g,n.grade.b,n.gradeAmount*t.gradeStrength),W.uRimColor.value.copy(n.rim).multiplyScalar(n.rimIntensity*(.25+.3*n.lightIntensity)),n}bindScene(){let e=this.root;for(;e.parent;)e=e.parent;e.isScene&&this.applyToScene(e)}dispose(){this.root.removeFromParent(),this.sky.dispose(),this.ground.dispose(),this.floodlights.dispose(),this.foliage?.dispose(),this.noise.dispose(),this.greyDetail.dispose(),this.detail?.dispose(),W.uNoiseTex.value===this.noise&&(W.uNoiseTex.value=null)}},ym=7.6,bm=52,xm=new V,Sm=new V,Cm=class{gaps;slotW=new Float32Array(6);slotGap=[];active=0;constructor(e=13){let t=e>>>0||1,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},r=()=>{let e=[],t=-58+n()*6,r=0;for(;t<At+14;){let i=r%3==0;e.push({z:t,y:10+n()*5,r:i?2.6+n()*1:1.3+n()*.9,k:i?.85+n()*.15:.28+n()*.22,seed:n()}),t+=8+n()*6,r++}return e};this.gaps=[r(),r()];for(let e=0;e<6;e++)this.slotGap.push(this.gaps[0][0])}update(e,t,n,r){let i=W.uShafts.value,a=W.uShaftK.value,o=Math.hypot(t.x,t.z),s=wm(.35,.7,Math.abs(t.x)/Math.max(o,1e-4)),c=wm(0,.05,t.y)*(1-wm(.55,.8,t.y)),l=n*s*c;if(xm.copy(t),xm.y<.09){let e=Math.sqrt(.9919/Math.max(1e-6,xm.x*xm.x+xm.z*xm.z));xm.set(xm.x*e,.09,xm.z*e)}xm.normalize(),W.uShaftDir.value.set(xm.x,xm.y,xm.z,l),this.active=0;for(let e=0;e<6;e++)a[e].y=0;if(l<=.002)return;let u=t.x<0,d=this.gaps[+!u],f=(u?-1:1)*(22+ym);e.getWorldPosition(Sm);let p=this.slotW;for(let e=0;e<6;e++)p[e]=0;for(let e=0;e<d.length;e++){let t=d[e],n=Sm.z-t.z,r=wm(-4,8,n)*(1-wm(55,85,n)),i=e%6;r<=p[i]||(p[i]=r,this.slotGap[i]=t)}let m=0;for(let e=0;e<6;e++){let t=p[e];if(t<=.001)continue;let n=this.slotGap[e],o=.78+.22*Math.sin(r*.23+n.seed*40)*Math.sin(r*.071+n.seed*9);i[e].set(f,n.y,n.z,n.r),a[e].set(Math.min(bm,n.y/xm.y),n.k*t*o,n.seed,0),m++}this.active=m}};function wm(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function Tm(){return{exposure:1,saturation:1.12,contrast:1.05,shadowTint:new z(.92,.96,1.1),highlightTint:new z(1.05,1,.94),bloomStrength:.35,bloomThreshold:.85,bloomKnee:.1,bloomWide:.6,fogColor:new z(.6,.78,.95),fogSunColor:new z(1,.9,.7),fogStart:30,fogDensity:.004,fogMax:.7,shaftStrength:0,shaftColor:new z(1,.8,.5),vignette:.06,vignetteColor:new z(.2,.18,.35),overlayA:new z(1,1,1),overlay:0,sunDir:new V(0,1,0),blackToe:0}}var Em=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}
`,Dm=`
uniform sampler2D tSrc;
uniform vec2 uTexel;     // source texel size
uniform vec3 uThresh;    // threshold, knee, clamp
varying vec2 vUv;
void main() {
  vec3 s = texture2D( tSrc, vUv + uTexel * vec2( -1.0, -1.0 ) ).rgb
         + texture2D( tSrc, vUv + uTexel * vec2( 1.0, -1.0 ) ).rgb
         + texture2D( tSrc, vUv + uTexel * vec2( -1.0, 1.0 ) ).rgb
         + texture2D( tSrc, vUv + uTexel * vec2( 1.0, 1.0 ) ).rgb;
  s = min( s * 0.25, vec3( uThresh.z ) );
  float br = max( s.r, max( s.g, s.b ) );
  float soft = clamp( br - uThresh.x + uThresh.y, 0.0, 2.0 * uThresh.y );
  soft = soft * soft / ( 4.0 * uThresh.y + 1e-4 );
  float k = max( soft, br - uThresh.x ) / max( br, 1e-4 );
  gl_FragColor = vec4( s * k, 1.0 );
}
`,Om=`
uniform sampler2D tSrc;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D( tSrc, vUv ).rgb * 4.0
         + texture2D( tSrc, vUv - h ).rgb
         + texture2D( tSrc, vUv + h ).rgb
         + texture2D( tSrc, vUv + vec2( h.x, -h.y ) ).rgb
         + texture2D( tSrc, vUv - vec2( h.x, -h.y ) ).rgb;
  gl_FragColor = vec4( s * 0.125, 1.0 );
}
`,km=`
uniform sampler2D tSrc;
uniform sampler2D tAdd;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D( tSrc, vUv + vec2( -h.x * 2.0, 0.0 ) ).rgb
         + texture2D( tSrc, vUv + vec2( -h.x, h.y ) ).rgb * 2.0
         + texture2D( tSrc, vUv + vec2( 0.0, h.y * 2.0 ) ).rgb
         + texture2D( tSrc, vUv + vec2( h.x, h.y ) ).rgb * 2.0
         + texture2D( tSrc, vUv + vec2( h.x * 2.0, 0.0 ) ).rgb
         + texture2D( tSrc, vUv + vec2( h.x, -h.y ) ).rgb * 2.0
         + texture2D( tSrc, vUv + vec2( 0.0, -h.y * 2.0 ) ).rgb
         + texture2D( tSrc, vUv + vec2( -h.x, -h.y ) ).rgb * 2.0;
  // dither against the R11G11B10 quantisation (smooth lamp halos never ring)
  float n = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) - 0.5;
  gl_FragColor = vec4( ( s / 12.0 + texture2D( tAdd, vUv ).rgb ) * ( 1.0 + n * vec3( 0.0156, 0.0156, 0.03125 ) ), 1.0 );
}
`,Am=`
#define MAX_SHAFTS 6
uniform sampler2D tScene;
uniform sampler2D tDepth;
uniform sampler2D tBloomTight;
uniform sampler2D tBloomWide;
uniform sampler2D uNoiseTex;
uniform vec4 uProj;          // P00, P11, near, far
uniform mat4 uCamWorld;
uniform vec3 uCamPos;
uniform float uTime;
uniform vec2 uRes;           // drawing-buffer size (px)
uniform vec2 uSceneTexel;    // 1 / scene target size
uniform vec4 uGrade;         // exposure, saturation, contrast, vignette (corner darkening)
uniform float uToe;          // 0..1: soft toe on the black point (pitch-black night)
uniform vec3 uShadowTint;
uniform vec3 uHighTint;
uniform vec3 uBloom;         // strength, wide mix, -
uniform vec4 uFog;           // start (m), density (1/m), near-haze cap, height falloff (1/m)
uniform vec2 uFogFar;        // view depth where the terrain starts / ends melting into the sky
uniform vec3 uShaftColor;
uniform float uShaft;
uniform vec4 uShafts[ MAX_SHAFTS ];
uniform vec4 uShaftK[ MAX_SHAFTS ];
uniform vec4 uShaftDir;
uniform vec4 uHoleScr;       // xy hole centre (uv), z = hero clear radius (frame heights), w = aspect
uniform vec4 uHole;          // world hole: xy = centre (XZ), z = cup radius
uniform vec3 uBuild;         // tee-bay building box for the shaft haze: front z, half width, top y
varying vec2 vUv;
${wa}

vec3 srgbOut( vec3 c ) {
  c = clamp( c, 0.0, 1.0 );
  return mix( c * 12.92, 1.055 * pow( c, vec3( 1.0 / 2.4 ) ) - 0.055, step( 0.0031308, c ) );
}

// Hue-preserving highlight shoulder: linear below 0.62, soft roll-off to 1; very bright
// light (lamps, sun glints) slowly paths to white.
vec3 toneShoulder( vec3 c ) {
  float m = max( c.r, max( c.g, c.b ) );
  const float K = 0.62;
  float mm = m < K ? m : K + ( 1.0 - K ) * ( 1.0 - exp( -( m - K ) / ( 1.0 - K ) ) );
  vec3 hp = c * ( mm / max( m, 1e-5 ) );
  float w = smoothstep( 1.0, 5.0, m ) * 0.75;
  return mix( hp, vec3( mm ), w );
}

float ign( vec2 fc ) {
  return fract( 52.9829189 * fract( dot( fc, vec2( 0.06711056, 0.00583715 ) ) ) );
}

// erf, max error ~1e-3 (plenty for light)
float erfT( float x ) {
  return tanh( x * ( 1.1283792 + 0.1009 * x * x ) );
}

// In-scattered light of the sun shafts along the view ray C + t D, t in [0, T]: each shaft is
// a gaussian tube (radius A.w) around the line through its canopy gap A.xyz along the sun
// direction L. The line integral of a gaussian along a ray is closed-form (erf), so a whole
// soft volumetric beam costs a handful of ALU ops; the scene depth clips it (T).
float shaftLight( vec3 C, vec3 D, float T, vec3 P, float onGround, out float ground ) {
  vec3 L = uShaftDir.xyz;
  ground = 0.0;
  float dl = dot( D, L );
  vec3 du = D - dl * L;
  float du2 = max( dot( du, du ), 1e-5 );
  float idu = inversesqrt( du2 );
  vec3 b1 = normalize( vec3( -L.z, 0.0, L.x ) + vec3( 1e-4, 0.0, 0.0 ) );
  vec3 b2 = cross( L, b1 );
  float acc = 0.0;
  for ( int i = 0; i < MAX_SHAFTS; i ++ ) {
    vec4 K = uShaftK[ i ];
    if ( K.y <= 0.0 ) continue;
    vec4 A = uShafts[ i ];
    // SUNLIT PATCH on the ground where the beam lands: the same tube, but with a falloff
    // twice as wide as in the air, so the patch has soft sides (no hard parallelogram)
    {
      vec3 wg = P - A.xyz;
      float sg = -dot( wg, L );
      vec3 ug = wg + sg * L;
      float dg = dot( ug, ug ) / ( 4.0 * A.w * A.w );
      float pg = smoothstep( 0.5, 9.0, sg ) * ( 1.0 - smoothstep( K.x * 0.7, K.x * 1.25, sg ) );
      ground += exp( -dg ) * pg * K.y * onGround;
    }
    vec3 w = C - A.xyz;
    float wl = dot( w, L );
    vec3 u0 = w - wl * L;
    float ts = -dot( u0, du ) / du2;
    vec3 um = u0 + ts * du;
    float ir = 1.0 / A.w;
    float d2 = dot( um, um ) * ir * ir;
    if ( d2 > 5.5 ) continue;            // the ray never comes within 2.3 radii: no exp / erf
    float g = exp( -d2 );
    float sdu = ir / idu;
    float span = 0.886227 * A.w * idu * ( erfT( sdu * ( T - ts ) ) - erfT( -sdu * ts ) );
    // profile down the beam at the closest point: born in the canopy gap, thinning out
    // towards the ground; nothing right in front of the lens
    float tc = clamp( ts, 0.0, T );
    float s = -( wl + tc * dl );
    float prof = smoothstep( 0.5, 9.0, s ) * ( 1.0 - smoothstep( K.x * 0.6, K.x * 1.02, s ) );
    prof *= smoothstep( 2.5, 10.0, tc );
#ifndef LITE
    // the gap is a hole in a canopy: the tube is split into a few distinct RAYS by a 2D
    // pattern in the plane across the light (constant along it, so the rays stay parallel to
    // the sun in the world and fan out from its vanishing point on screen), drifting slowly
    vec2 xs = vec2( dot( um, b1 ), dot( um, b2 ) ) * ir;
    // (explicit LOD: this fetch sits in divergent control flow)
    float nn = textureLod( uNoiseTex, xs * 0.21 + K.z * 7.0 + vec2( uTime * 0.004, s * 0.004 ), 1.0 ).g;
    prof *= smoothstep( 0.38, 0.72, nn ) * 1.6 + 0.12;
#else
    // no ray split: match the full path's average in-scatter (~0.75) instead of a brighter,
    // uniform wash
    prof *= 0.75;
#endif
    acc += g * span * prof * K.y;
  }
  return acc;
}

void main() {
  vec3 col = texture2D( tScene, vUv ).rgb;
#ifdef SHARPEN
  {
    // reduced render scale: light unsharp mask on the upsampled scene
    vec3 nb = texture2D( tScene, vUv + vec2( uSceneTexel.x, 0.0 ) ).rgb + texture2D( tScene, vUv - vec2( uSceneTexel.x, 0.0 ) ).rgb
            + texture2D( tScene, vUv + vec2( 0.0, uSceneTexel.y ) ).rgb + texture2D( tScene, vUv - vec2( 0.0, uSceneTexel.y ) ).rgb;
    col = max( col + ( col - nb * 0.25 ) * 0.45, vec3( 0.0 ) );
  }
#endif

  // ---- view ray + scene position
#ifdef DBG_NODEPTH
  float z = 0.995 + 0.004 * vUv.y;
#else
  float z = texture2D( tDepth, vUv ).r;
#endif
  float near = uProj.z;
  float far = uProj.w;
  float viewZ = ( near * far ) / ( ( far - near ) * z - far );
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 viewPos = vec3( ndc.x * -viewZ / uProj.x, ndc.y * -viewZ / uProj.y, viewZ );
  vec3 wp = ( uCamWorld * vec4( viewPos, 1.0 ) ).xyz;
  vec3 ray = normalize( wp - uCamPos );
  float isSky = step( 0.99999, z );
  float depth = -viewZ;

  // HERO CLEAR ZONE: no haze, shafts or split toning on the hero itself - the pole + flag
  // (pixels above the ground within ~2.5 m of the cup on screen) and the cup + lip (world
  // disc of the opening) - so the player keeps full contrast exactly where the eye is. The
  // TURF around it is graded like everywhere else: clearing it too left a darker, greener
  // disc following the hole (the split-tone / shaft difference), a "fog of war" reveal.
  vec2 hq = ( vUv - uHoleScr.xy ) * vec2( uHoleScr.w, 1.0 );
  float onCup = 1.0 - smoothstep( uHole.z + 0.1, uHole.z + 0.17, length( wp.xz - uHole.xy ) );
  float heroClear = ( 1.0 - smoothstep( 0.55, 1.0, length( hq ) / max( uHoleScr.z, 1e-4 ) ) )
                  * max( smoothstep( 0.12, 0.5, wp.y ), onCup ) * ( 1.0 - step( 0.99999, z ) );

  // ---- aerial perspective: planar depth (no side haze), denser near the ground, the
  // colour of the sky behind the pixel, reaching it fully before the far plane
  float hk = exp( -max( wp.y, 0.0 ) * uFog.w );
  float fog = min( 1.0 - exp( -max( depth - uFog.x, 0.0 ) * uFog.y * hk ), uFog.z );
  fog = max( fog, smoothstep( uFogFar.x, uFogFar.y, depth ) );
  fog *= ( 1.0 - isSky ) * ( 1.0 - heroClear );
  // PERF (high-tier pass): the haze colour only where there is haze (fog = 0 on the whole near field, the sky and
  // the hero; mix( col, x, 0 ) is col exactly, so the image is unchanged)
  if ( fog > 0.0 ) {
    vec3 fogCol = skyBase( normalize( vec3( ray.x, max( ray.y, 0.0 ) * 0.3, ray.z ) ) );
    // under the far canopy (between the trunks) the air is in the trees' shade, not the open sky:
    // no pale sky-coloured haze glowing through the forest floor at dusk
    float underTrees = smoothstep( 0.0, 6.0, max( abs( wp.x ) - ${(Tt+3).toFixed(1)}, ${(-42).toFixed(1)} - wp.z ) );
    fogCol *= 1.0 - 0.42 * ( 1.0 - smoothstep( 2.5, 8.0, wp.y ) ) * smoothstep( 38.0, 70.0, depth ) * underTrees * ( 1.0 - isSky );
#ifndef DBG_NOFOG
    col = mix( col, fogCol, fog );
#endif
  }

  // ---- world-anchored sun shafts (light in the air between the camera and the surface)
  // (skipped entirely - a uniform branch - whenever no shaft is active: most of the day and
  // all of the night)
  if ( uShaft > 0.0 ) {
    float T = mix( length( wp - uCamPos ), far, isSky );
    float onGround = ( 1.0 - isSky ) * ( 1.0 - smoothstep( 0.15, 0.6, wp.y ) );
    float ground;
    float acc = shaftLight( uCamPos, ray, T, wp, onGround, ground );
    // a little forward scattering: brighter looking towards the sun
    float ph = 0.75 + 0.9 * pow( max( dot( ray, uShaftDir.xyz ), 0.0 ), 4.0 );
    // no haze over the tee-bay building (row 1 .. the back wall): the golfers keep their contrast
    float bay = ( 1.0 - smoothstep( uBuild.x, uBuild.x + 2.5, wp.z ) ) * ( 1.0 - smoothstep( uBuild.y, uBuild.y + 2.0, abs( wp.x ) ) )
              * ( 1.0 - smoothstep( uBuild.z, uBuild.z + 1.5, wp.y ) ) * ( 1.0 - isSky );
    col += uShaftColor * ( ( 1.0 - exp( -acc * 0.14 ) ) * ph * uShaft * ( 1.0 - heroClear ) * ( 1.0 - 0.5 * fog ) * ( 1.0 - 0.8 * bay ) );
    // the sunlit patch multiplies the surface (light falling ON the grass keeps its texture)
    col *= 1.0 + uShaftColor * ( ( 1.0 - exp( -ground * 0.9 ) ) * 0.55 * uShaft * ( 1.0 - heroClear ) );
  }

  // ---- bloom (lite: none - the energy elements carry their own sprite halos)
#ifndef LITE
  vec3 bloom = mix( texture2D( tBloomTight, vUv ).rgb, texture2D( tBloomWide, vUv ).rgb, uBloom.y );
  col += bloom * uBloom.x;
#endif

  // ---- exposure + tone (the hero keeps its own exposure: the flag is the same yellow at
  // every time of day)
  col *= mix( uGrade.x, 1.0, heroClear );
  col = toneShoulder( col );

  // ---- grade: split toning, saturation, contrast
  float l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
  float hiW = smoothstep( 0.2, 0.85, l );
  // split toning: none on the hero (the flag keeps its exact yellow)
  col *= mix( mix( uShadowTint, uHighTint, hiW ), vec3( 1.0 ), heroClear );
  l = dot( col, vec3( 0.2126, 0.7152, 0.0722 ) );
  col = max( mix( vec3( l ), col, mix( uGrade.y, 1.0, heroClear ) ), 0.0 );
  vec3 g = srgbOut( col );
  vec3 gc = ( g - 0.5 ) * uGrade.z + 0.5;
  if ( uToe > 0.0 && uGrade.z > 1.0 ) {
    // PITCH BLACK: the contrast line would clip everything below g0 = 2b / c to black, so every
    // light's last few % of falloff would end in a hard edge. A C1 quadratic TOE instead
    // (c^2 g^2 / 4b below g0: same value and slope at g0, 0 at black)
    float b = 0.5 * uGrade.z - 0.5;
    vec3 toe = ( uGrade.z * uGrade.z / ( 4.0 * b ) ) * g * g;
    gc = mix( gc, mix( toe, gc, step( vec3( 2.0 * b / uGrade.z ), g ) ), uToe );
  }
  g = clamp( gc, 0.0, 1.0 );

  // ---- vignette: neutral, radial, barely there (uGrade.w at the very corners)
  vec2 vq = vUv * 2.0 - 1.0;
  float vr = dot( vq, vq ) * 0.5;
  g *= 1.0 - uGrade.w * vr * vr;

  // ---- triangular dither (+-1 LSB): no 8-bit banding in the sky, pools or fog
  float d1 = ign( gl_FragCoord.xy );
  float d2 = ign( gl_FragCoord.xy + vec2( 17.0, 59.0 ) );
  g += ( d1 + d2 - 1.0 ) / 255.0;
  gl_FragColor = vec4( g, 1.0 );
}
`;function jm(e,t,n,r=0,i=!1){let a=new Xe(e,t,{format:n===`r11`?ze:re,type:n===`r11`?Ee:E,minFilter:Ue,magFilter:Ue,depthBuffer:i,stencilBuffer:!1,generateMipmaps:!1,samples:r,...i?{depthTexture:new j(e,t,he)}:{}});return a.depthTexture&&(a.depthTexture.minFilter=ye,a.depthTexture.magFilter=ye),a}var Mm=new L,Nm=new V(-25.5,vt/2+1.5,qt.frontY);Ft(e=>{Nm.z=e.frontY});var Pm=class{fogScale=1;state=Tm();shadows;shafts=new Cm;shaftGain=1;liteMode;msaaFull;scale;dbgBloom=!0;dbgComposite=!0;copyMat=null;sceneW=1;sceneH=1;overlay=null;stats={calls:0,triangles:0,shadowCalls:0,shadowTriangles:0,sceneCalls:0,sceneTriangles:0,postCalls:0,gpuMs:0};enabled=!0;cpuSplit=new Float64Array(3);renderer;hdr;sceneRT;bloomRT=[];upRT=[];quad;quadCam=new T(-1,1,1,-1,0,1);prefilter;down=[];up=[];composite;width=1;height=1;size=new Ve;msaa;timerExt;queries=[];gpuAcc=0;gpuN=0;timing=!1;constructor(e,t){this.renderer=e,this.liteMode=t.lite,this.scale=Math.min(1,Math.max(.5,t.renderScale??1));let n=e.getContext();this.hdr=n.getExtension(`EXT_color_buffer_float`)?`r11`:`half`,this.msaaFull=t.msaa?4:0,this.msaa=t.lite?0:this.msaaFull,this.shadows=new pa(t.shadowSize),this.timerExt=n.getExtension(`EXT_disjoint_timer_query_webgl2`),this.sceneRT=jm(1,1,this.hdr,this.msaa,!0),this.sceneRT.texture.name=`anime-scene-hdr`;for(let e=0;e<4;e++)this.bloomRT.push(jm(1,1,this.hdr));for(let e=0;e<2;e++)this.upRT.push(jm(1,1,this.hdr));let r=new Le;r.setAttribute(`position`,new I(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));let i=(e,t)=>new oe({vertexShader:Em,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,blending:0,toneMapped:!1});this.prefilter=i(Dm,{tSrc:{value:null},uTexel:{value:new Ve},uThresh:{value:new V}});for(let e=1;e<4;e++)this.down.push(i(Om,{tSrc:{value:this.bloomRT[e-1].texture},uTexel:{value:new Ve}}));for(let e=0;e<2;e++)this.up.push(i(km,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Ve}}));this.composite=i(Am,{tScene:{value:this.sceneRT.texture},tDepth:{value:this.sceneRT.depthTexture},tBloomTight:{value:this.bloomRT[0].texture},tBloomWide:{value:this.upRT.length?this.upRT[0].texture:this.bloomRT[3].texture},uNoiseTex:W.uNoiseTex,uProj:{value:new L},uCamWorld:{value:null},uCamPos:{value:new V},uTime:W.uTime,uRes:{value:this.size},uSceneTexel:{value:new Ve(1,1)},uGrade:{value:new L},uToe:{value:0},uShadowTint:{value:new z},uHighTint:{value:new z},uBloom:{value:new V},uFog:{value:new L},uFogFar:{value:new Ve(250,440)},uShaftColor:{value:new z},uShaft:{value:0},uShafts:W.uShafts,uShaftK:W.uShaftK,uShaftDir:W.uShaftDir,uHoleScr:{value:new L(.5,.5,.1,1)},uHole:W.uHole,uBuild:{value:Nm},uSkyZenith:W.uSkyZenith,uSkyHorizon:W.uSkyHorizon,uSkyGlow:W.uSkyGlow,uSkySun:W.uSkySun,uSkyMoon:W.uSkyMoon});let a={};this.liteMode&&(a.LITE=``),this.scale<.999&&(a.SHARPEN=``),this.composite.defines=a,this.composite.name=`anime-composite`,this.quad=new F(r,this.prefilter),this.quad.frustumCulled=!1}get lite(){return this.liteMode}setLite(e,t=2048){if(e===this.liteMode)return;this.liteMode=e;let n=e?0:this.msaaFull;n!==this.msaa&&(this.msaa=n,this.sceneRT.samples=n,this.sceneRT.dispose());let r=this.composite.defines;e?r.LITE=``:delete r.LITE,this.composite.needsUpdate=!0,this.shadows.setSize(e?Math.min(1024,t):t),this.width=0}get renderScale(){return this.scale}setRenderScale(e){let t=Math.min(1,Math.max(.5,e));if(t===this.scale)return;this.scale=t;let n=this.composite.defines;t<.999?n.SHARPEN=``:delete n.SHARPEN,this.composite.needsUpdate=!0,this.width=0}get hdrFormat(){return`${this.hdr}${this.msaa?` msaa${this.msaa}`:``}`}syncSize(){this.renderer.getDrawingBufferSize(this.size);let e=Math.max(1,Math.round(this.size.x)),t=Math.max(1,Math.round(this.size.y));if(e===this.width&&t===this.height)return;this.width=e,this.height=t;let n=Math.max(1,Math.round(e*this.scale)),r=Math.max(1,Math.round(t*this.scale));this.sceneW=n,this.sceneH=r,this.sceneRT.setSize(n,r),this.composite.uniforms.uSceneTexel.value.set(1/n,1/r);let i=Math.max(1,Math.round(n/2)),a=Math.max(1,Math.round(r/2));for(let e=0;e<this.bloomRT.length;e++)this.bloomRT[e].setSize(i,a),e>=1&&e-1<this.upRT.length&&this.upRT[e-1].setSize(i,a),i=Math.max(1,i>>1),a=Math.max(1,a>>1)}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quad,this.quadCam)}render(e,t){let n=this.renderer,r=n.info,i=r.autoReset;r.autoReset=!1,r.reset();let a=this.timing?this.beginTimer():null;if(!this.enabled){n.setRenderTarget(null),n.render(e,t),this.stats.calls=r.render.calls,this.stats.triangles=r.render.triangles,a&&this.endTimer(a),r.autoReset=i;return}this.syncSize(),this.shadows.render(n,e,t,W.uSunDir.value),this.shafts.update(t,this.state.sunDir,this.state.shaftStrength,W.uTime.value);let o=r.render.calls,s=r.render.triangles;n.setRenderTarget(this.sceneRT),n.render(e,t);let c=r.render.calls,l=r.render.triangles;if(this.lite||this.renderBloom(),this.renderComposite(t),this.overlay){let e=n.autoClear;n.autoClear=!1,n.render(this.overlay.scene,this.overlay.camera),n.autoClear=e}let u=this.stats;u.calls=r.render.calls,u.triangles=r.render.triangles,u.shadowCalls=o,u.shadowTriangles=s,u.sceneCalls=c-o,u.sceneTriangles=l-s,u.postCalls=u.calls-c,a&&this.endTimer(a),r.autoReset=i}renderBloom(){let e=this.state,t=this.sceneRT.texture,n=this.prefilter.uniforms;n.tSrc.value=t,n.uTexel.value.set(1/this.sceneW,1/this.sceneH),n.uThresh.value.set(e.bloomThreshold,Math.max(.001,e.bloomKnee),24),this.pass(this.prefilter,this.bloomRT[0]);for(let e=1;e<this.bloomRT.length;e++){let t=this.down[e-1],n=this.bloomRT[e-1];t.uniforms.uTexel.value.set(1/n.width,1/n.height),this.pass(t,this.bloomRT[e])}let r=this.bloomRT[this.bloomRT.length-1].texture,i=this.bloomRT[this.bloomRT.length-1].width,a=this.bloomRT[this.bloomRT.length-1].height;for(let e=this.upRT.length-1;e>=0;e--){let t=this.up[e];t.uniforms.tSrc.value=r,t.uniforms.tAdd.value=this.bloomRT[e+1].texture,t.uniforms.uTexel.value.set(.5/i,.5/a),this.pass(t,this.upRT[e]),r=this.upRT[e].texture,i=this.upRT[e].width,a=this.upRT[e].height}}renderComposite(e){let t=this.state,n=this.composite.uniforms,r=e.projectionMatrix.elements;n.uProj.value.set(r[0],r[5],e.near,e.far),n.uCamWorld.value=e.matrixWorld,e.getWorldPosition(n.uCamPos.value),n.uGrade.value.set(t.exposure,t.saturation,t.contrast,t.vignette),n.uToe.value=t.blackToe,n.uShadowTint.value.copy(t.shadowTint),n.uHighTint.value.copy(t.highlightTint),n.uBloom.value.set(t.bloomStrength,t.bloomWide,0),n.uFog.value.set(t.fogStart*this.fogScale,t.fogDensity/this.fogScale,t.fogMax,1/30),n.uFogFar.value.set(e.far*.5,e.far*.96),n.uShaftColor.value.copy(t.shaftColor),W.uShaftColor.value.copy(t.shaftColor),n.uShaft.value=this.shafts.active>0?W.uShaftDir.value.w*this.shaftGain:0;let i=this.width/this.height;{let t=W.uHole.value;Mm.set(t.x,0,t.y,1).applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);let r=Mm.x/Mm.w,a=Mm.y/Mm.w;Mm.set(t.x+2.5,0,t.y,1).applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);let o=Math.abs(Mm.x/Mm.w-r)*.5*i;n.uHoleScr.value.set(r*.5+.5,a*.5+.5,o,i)}this.pass(this.composite,null)}compileForScene(e,t){let n=this.renderer,r=n.getRenderTarget();n.setRenderTarget(this.sceneRT);try{n.compile(e,t)}finally{n.setRenderTarget(r)}}compileForSceneAsync(e,t){let n=this.renderer,r=n.getRenderTarget();n.setRenderTarget(this.sceneRT);try{return n.compileAsync(e,t)}finally{n.setRenderTarget(r)}}beginTimer(){if(!this.timerExt)return null;let e=this.renderer.getContext();this.pollTimers();let t=e.createQuery();return t?(e.beginQuery(this.timerExt.TIME_ELAPSED_EXT,t),t):null}endTimer(e){this.renderer.getContext().endQuery(this.timerExt.TIME_ELAPSED_EXT),this.queries.push(e)}pollTimers(){if(!this.timerExt)return-1;let e=this.renderer.getContext(),t=e.getParameter(this.timerExt.GPU_DISJOINT_EXT);for(;this.queries.length>0;){let n=this.queries[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;let r=e.getQueryParameter(n,e.QUERY_RESULT);t||(this.gpuAcc+=r/1e6,this.gpuN++),e.deleteQuery(n),this.queries.shift()}return this.stats.gpuMs=this.gpuN>0?this.gpuAcc/this.gpuN:-1,this.stats.gpuMs}resetTimers(){this.gpuAcc=0,this.gpuN=0}get timerSupported(){return this.timerExt!==null}get pendingQueries(){return this.queries.length}dispose(){this.sceneRT.depthTexture?.dispose(),this.sceneRT.dispose();for(let e of this.bloomRT)e.dispose();for(let e of this.upRT)e.dispose();this.quad.geometry.dispose(),this.prefilter.dispose();for(let e of this.down)e.dispose();for(let e of this.up)e.dispose();this.composite.dispose(),this.shadows.dispose()}},Fm=[{t:0,exposure:.78,sat:.9,contrast:1.06,shadowTint:14476031,highTint:15790847,bloom:.85,shaft:0,shaftColor:8425727,fogStart:24,fogDensity:.0055,fogMax:.75,fogColor:1844824,fogSun:3816576,vignette:.08,vigColor:2105946,shade:12634367,shadow:.35,rim:1.3,ovA:8425727,ov:0,gh:5933240,ga:.7,gs:2765952,gr:.36},{t:.075,exposure:.98,sat:1.02,contrast:1.05,shadowTint:14473983,highTint:16771308,bloom:.65,shaft:.35,shaftColor:16757944,fogStart:24,fogDensity:.006,fogMax:.7,fogColor:11569848,fogSun:16756896,vignette:.07,vigColor:3813482,shade:13683967,shadow:.5,rim:1.2,ovA:16751288,ov:0,gh:6065344,ga:.3,gs:3824296,gr:.42},{t:.15,exposure:1,sat:1.12,contrast:1.06,shadowTint:13687039,highTint:16773344,bloom:.55,shaft:.85,shaftColor:16759948,fogStart:28,fogDensity:.0055,fogMax:.65,fogColor:15253680,fogSun:16763040,vignette:.06,vigColor:4864624,shade:13684991,shadow:.85,rim:1.2,ovA:16758928,ov:0,gh:4763776,ga:.4,gs:3836544,gr:.55},{t:.26,exposure:.97,sat:1.04,contrast:1.06,shadowTint:14214399,highTint:16774890,bloom:.4,shaft:.3,shaftColor:16773328,fogStart:30,fogDensity:.0058,fogMax:.6,fogColor:12377332,fogSun:16773340,vignette:.05,vigColor:3425390,shade:13950207,shadow:1,rim:1,ovA:16773336,ov:0,gh:4501616,ga:.22,gs:3050078,gr:.62},{t:.5,exposure:.95,sat:1.02,contrast:1.07,shadowTint:13951743,highTint:16775406,bloom:.36,shaft:0,shaftColor:16777215,fogStart:28,fogDensity:.006,fogMax:.6,fogColor:11589364,fogSun:16184554,vignette:.05,vigColor:3162222,shade:13950207,shadow:1,rim:1,ovA:16774368,ov:0,gh:4501616,ga:.2,gs:3050078,gr:.62},{t:.68,exposure:.97,sat:1.06,contrast:1.07,shadowTint:13950207,highTint:16773852,bloom:.4,shaft:.3,shaftColor:16768176,fogStart:30,fogDensity:.0058,fogMax:.6,fogColor:13689066,fogSun:16769208,vignette:.05,vigColor:4208748,shade:13948159,shadow:1,rim:1.05,ovA:16769208,ov:0,gh:4500600,ga:.24,gs:3180650,gr:.6},{t:.775,exposure:1,sat:1.1,contrast:1.08,shadowTint:13158655,highTint:16770244,bloom:.55,shaft:1,shaftColor:16759920,fogStart:30,fogDensity:.005,fogMax:.65,fogColor:15775904,fogSun:16754816,vignette:.06,vigColor:4862056,shade:13419775,shadow:1,rim:1.35,ovA:16757880,ov:0,gh:3977328,ga:.42,gs:3967612,gr:.58},{t:.835,exposure:1.1,sat:1.1,contrast:1.08,shadowTint:13682943,highTint:16766136,bloom:.65,shaft:.9,shaftColor:16751216,fogStart:28,fogDensity:.0055,fogMax:.7,fogColor:14188672,fogSun:16747104,vignette:.06,vigColor:4204638,shade:13155583,shadow:.9,rim:1.4,ovA:16747128,ov:0,gh:5812328,ga:.3,gs:4488328,gr:.55},{t:.9,exposure:.9,sat:1,contrast:1.07,shadowTint:14475519,highTint:16771296,bloom:.8,shaft:.1,shaftColor:16751280,fogStart:24,fogDensity:.006,fogMax:.7,fogColor:3814520,fogSun:10115744,vignette:.07,vigColor:2235468,shade:12631295,shadow:.45,rim:1.35,ovA:16746160,ov:0,gh:6194360,ga:.6,gs:3432602,gr:.45},{t:1,exposure:.8,sat:1,contrast:1.08,shadowTint:15265023,highTint:16773852,bloom:.95,shaft:0,shaftColor:8425727,fogStart:24,fogDensity:.0055,fogMax:.75,fogColor:792640,fogSun:1977442,vignette:.08,vigColor:1316416,shade:12372223,shadow:.35,rim:1.4,ovA:4876472,ov:0,gh:5933240,ga:.7,gs:1981580,gr:.42}],Im=new z(1,1,1);function Lm(e){let t=new z(e),n=.2126*t.r+.7152*t.g+.0722*t.b;return t.multiplyScalar(1/Math.max(1e-4,n))}function Rm(e,t=.5){return Lm(e).lerp(Im,1-t)}var zm=Fm.map(e=>({k:e,shadowTint:Rm(e.shadowTint),highTint:Rm(e.highTint),shaftColor:new z(e.shaftColor),fogColor:new z(e.fogColor),fogSun:new z(e.fogSun),vigColor:new z().setHex(e.vigColor,Re),shade:Rm(e.shade,.75),ovA:Lm(e.ovA),gh:Lm(e.gh),gs:Rm(e.gs,.6)})),Bm={exposure:1,saturation:1,bloom:1,shafts:1,fog:1,vignette:1,shadow:1,overlay:1},Vm=B.lerp,Hm=1.6,Um={shadow:1,rim:1};function Wm(e,t,n){let r=B.clamp(e,0,1),i=0;for(;i<zm.length-2&&r>zm[i+1].k.t;)i++;let a=zm[i],o=zm[i+1],s=B.clamp((r-a.k.t)/Math.max(1e-6,o.k.t-a.k.t),0,1);s=s*s*(3-2*s);let c=Bm;n.exposure=Vm(a.k.exposure,o.k.exposure,s)*c.exposure,n.saturation=Vm(a.k.sat,o.k.sat,s)*c.saturation,n.contrast=Vm(a.k.contrast,o.k.contrast,s),n.shadowTint.lerpColors(a.shadowTint,o.shadowTint,s),n.highlightTint.lerpColors(a.highTint,o.highTint,s),n.bloomStrength=Vm(a.k.bloom,o.k.bloom,s)*c.bloom,n.bloomThreshold=Hm;let l=t.sunDir.y,u=Math.min(1,Math.max(0,(l+.03)/.11));n.shaftStrength=Vm(a.k.shaft,o.k.shaft,s)*c.shafts*u*u*(3-2*u),n.shaftColor.lerpColors(a.shaftColor,o.shaftColor,s),n.fogStart=Vm(a.k.fogStart,o.k.fogStart,s),n.fogDensity=Vm(a.k.fogDensity,o.k.fogDensity,s)*c.fog,n.fogMax=Vm(a.k.fogMax,o.k.fogMax,s),n.fogColor.lerpColors(a.fogColor,o.fogColor,s),n.fogSunColor.lerpColors(a.fogSun,o.fogSun,s),n.vignette=Vm(a.k.vignette,o.k.vignette,s)*c.vignette,n.vignetteColor.lerpColors(a.vigColor,o.vigColor,s),n.sunDir.copy(t.sunDir),n.overlayA.lerpColors(a.ovA,o.ovA,s),n.overlay=Math.min(.2,Vm(a.k.ov,o.k.ov,s)*c.overlay),W.uShadeTint.value.lerpColors(a.shade,o.shade,s),W.uGrassHue.value.set(Vm(a.gh.r,o.gh.r,s),Vm(a.gh.g,o.gh.g,s),Vm(a.gh.b,o.gh.b,s),Vm(a.k.ga,o.k.ga,s)),W.uGrassShade.value.set(Vm(a.gs.r,o.gs.r,s),Vm(a.gs.g,o.gs.g,s),Vm(a.gs.b,o.gs.b,s),Vm(a.k.gr,o.k.gr,s)),Um.shadow=Vm(a.k.shadow,o.k.shadow,s)*c.shadow,Um.rim=Vm(a.k.rim,o.k.rim,s);let d=t.pitchBlack;return n.blackToe=d,d>0&&(Um.shadow*=1-d,n.fogDensity*=1-.55*d,n.exposure*=1+.12*d,n.saturation*=1+.06*d),Um}var Gm=new z(.52,.82,1.8),Km=new z(.66,.9,1.6);function qm(e,t){e.shadowTint.lerp(Gm,t),e.highlightTint.lerp(Km,t),e.saturation*=1-.2*t,e.vignette+=.1*t}var Jm=`
#define MAX_SHAFTS 6
#define MAX_POOLS 3
uniform float uTime;
uniform vec3 uCentre;
uniform vec3 uBox;
uniform float uPx;          // drawing-buffer px per metre at depth 1
uniform vec4 uMix;          // x = petals, y = fireflies, z = backlight boost, w = size scale
uniform vec4 uSkySun;      // the REAL sun (backlit petals), not the art key light
uniform vec4 uShafts[ MAX_SHAFTS ];
uniform vec4 uShaftK[ MAX_SHAFTS ];
uniform vec4 uShaftDir;
uniform vec4 uNight;
uniform vec4 uFloodHeads[ MAX_POOLS ];
uniform vec4 uFloodIslands[ MAX_POOLS ];
attribute vec4 aSeed;
varying float vAlpha;
varying float vKind;
varying float vTw;
varying float vRot;
varying float vBack;
varying float vPick;
void main() {
  float t = uTime;
  vec3 seed = aSeed.xyz;
  if ( aSeed.w >= 2.0 && uNight.x > 0.01 ) {
    // PITCH BLACK: the same dust drifts in the FLOODLIGHT BEAMS instead (the sun shafts only
    // exist at golden hour, so the two never share the pool): each mote belongs to one lamp,
    // drifts slowly down inside its cone (lamp head -> island) and glints cool white
    float r = fract( aSeed.w );
    int bi = int( min( floor( fract( seed.x * 13.37 + seed.y * 7.11 ) * float( MAX_POOLS ) ), float( MAX_POOLS - 1 ) ) );
    vec4 H = uFloodHeads[ bi ];
    vec4 I = uFloodIslands[ bi ];
    vec3 axis = vec3( I.x, 0.0, I.y ) - H.xyz;
    vec3 b1 = normalize( vec3( -axis.z, 0.0, axis.x ) + vec3( 1e-4, 0.0, 0.0 ) );
    vec3 b2 = normalize( cross( axis, b1 ) );
    float s = fract( seed.z * 3.1 + t * ( 0.007 + 0.006 * r ) );
    float ir = inversesqrt( max( I.z, 1e-3 ) );
    vec2 o = ( vec2( seed.y, fract( seed.y * 7.31 + r ) ) - 0.5 ) * 1.8;
    o += vec2( sin( t * 0.41 + seed.x * 23.0 ), cos( t * 0.33 + seed.y * 17.0 ) ) * 0.12;
    vec3 p = H.xyz + axis * s + ( b1 * o.x + b2 * o.y ) * mix( 0.35, ir, s );
    float dens = exp( -dot( o, o ) * 1.2 ) * smoothstep( 0.04, 0.2, s ) * ( 1.0 - smoothstep( 0.86, 0.98, s ) );
    dens *= uNight.x * min( I.w, 1.0 ) * step( 0.1, p.y );
    vec4 mv = viewMatrix * vec4( p, 1.0 );
    gl_Position = projectionMatrix * mv;
    float depth = max( -mv.z, 0.5 );
    float tw = 0.3 + 0.7 * pow( 0.5 + 0.5 * sin( t * ( 1.3 + seed.z * 4.0 ) + seed.x * 40.0 ), 3.0 );
    vAlpha = dens * tw * smoothstep( 3.0, 7.0, depth );
    vKind = 3.0;
    vTw = tw;
    vRot = 0.0;
    vBack = 0.0;
    vPick = r;
    gl_PointSize = clamp( 0.07 * uPx / depth, 1.5, 6.0 ) * ( vAlpha > 0.004 ? 1.0 : 0.0 );
    return;
  }
  if ( aSeed.w >= 2.0 ) {
    // DUST in a sun shaft: each mote belongs to one shaft slot and drifts down its tube
    int si = int( min( floor( seed.z * float( MAX_SHAFTS ) ), float( MAX_SHAFTS - 1 ) ) );
    vec4 A = uShafts[ si ];
    vec4 K = uShaftK[ si ];
    vec3 L = uShaftDir.xyz;
    vec3 b1 = normalize( vec3( -L.z, 0.0, L.x ) + vec3( 1e-4, 0.0, 0.0 ) );
    vec3 b2 = cross( L, b1 );
    float r = fract( aSeed.w );
    float s = fract( seed.x + t * ( 0.004 + 0.004 * r ) ) * K.x;
    vec2 o = ( vec2( seed.y, fract( seed.y * 7.31 + r ) ) - 0.5 ) * 2.2 * A.w;
    o += vec2( sin( t * 0.37 + seed.x * 23.0 ), cos( t * 0.29 + seed.y * 17.0 ) ) * 0.22;
    vec3 p = A.xyz - L * s + b1 * o.x + b2 * o.y;
    float dens = exp( -dot( o, o ) / ( A.w * A.w ) ) * smoothstep( 0.5, 9.0, s ) * ( 1.0 - smoothstep( K.x * 0.6, K.x * 1.02, s ) );
    dens *= K.y * uShaftDir.w * step( 0.08, p.y );
    vec4 mv = viewMatrix * vec4( p, 1.0 );
    gl_Position = projectionMatrix * mv;
    float depth = max( -mv.z, 0.5 );
    float tw = 0.35 + 0.65 * pow( 0.5 + 0.5 * sin( t * ( 1.7 + seed.z * 5.0 ) + seed.x * 40.0 ), 3.0 );
    vAlpha = dens * tw * smoothstep( 3.0, 7.0, depth );
    vKind = 2.0;
    vTw = tw;
    vRot = 0.0;
    vBack = 0.0;
    vPick = r;
    gl_PointSize = clamp( 0.085 * uPx / depth, 2.0, 8.0 ) * ( vAlpha > 0.004 ? 1.0 : 0.0 );
    return;
  }
  float kind = step( 0.77, aSeed.w );     // 0 = petal / leaf, 1 = firefly (23 %)
  vec3 drift = mix( vec3( 0.55, -0.12, -0.3 ), vec3( 0.08, 0.0, 0.05 ), kind );
  vec3 p = seed * uBox + drift * t;
  p.x += sin( t * ( 0.3 + aSeed.w * 0.7 ) + seed.y * 40.0 ) * mix( 0.9, 1.4, kind );
  p.z += cos( t * ( 0.25 + aSeed.x * 0.6 ) + seed.x * 30.0 ) * mix( 0.7, 1.4, kind );
  vec3 lo = uCentre - uBox * 0.5;
  p = lo + mod( p - lo, uBox );
  if ( kind > 0.5 ) {
    // fireflies live in the rough, the hedges and the tree line (world x, not the camera box):
    // only ~1 in 6 drifts out over the fairway, so the yellow flag and the balls keep the field
    float sideSel = step( 0.17, fract( seed.z * 17.3 ) );
    float sx = seed.x < 0.5 ? -1.0 : 1.0;
    float xs = sx * ( 21.0 + fract( seed.x * 7.7 + seed.y * 3.1 ) * 13.0 );
    p.x = mix( ( fract( seed.x * 3.3 ) - 0.5 ) * 38.0, xs, sideSel ) + sin( t * ( 0.3 + aSeed.w * 0.7 ) + seed.y * 40.0 ) * 1.2;
  }
  p.y = mix( 0.6, 5.5, fract( seed.y + aSeed.w * 3.1 ) ) * mix( 1.0, 0.45, kind ) + 0.15 + sin( t * 0.7 + seed.x * 9.0 ) * 0.35;
  vec4 mv = viewMatrix * vec4( p, 1.0 );
  gl_Position = projectionMatrix * mv;
  float depth = max( -mv.z, 0.5 );
  float blink = kind > 0.5 ? smoothstep( 0.15, 0.9, sin( t * ( 1.3 + seed.z * 2.0 ) + seed.x * 50.0 ) * 0.5 + 0.5 ) : 1.0;
  vec3 toCam = normalize( cameraPosition - p );
  vBack = pow( max( dot( -toCam, uSkySun.xyz ), 0.0 ), 2.0 );
  // (pitch-black night, uNight.x: no petals - unlit they were gold / dark specks in the void;
  // the fireflies, their own light, stay)
  float on = kind > 0.5 ? uMix.y : uMix.x * ( 1.0 - uNight.x ) * step( fract( seed.z * 7.13 ), 0.3 );
  // petals fade at the wrap box's x edges; fireflies fade where their world x leaves the box
  float bx = kind > 0.5 ? 1.0 : 1.0 - smoothstep( 0.42, 0.5, abs( fract( ( p.x - lo.x ) / uBox.x ) - 0.5 ) );
  vAlpha = on * blink * bx;
  vKind = kind;
  vTw = blink;
  vRot = t * ( 0.8 + seed.z * 2.2 ) * ( seed.x > 0.5 ? 1.0 : -1.0 ) + seed.y * 6.28;
  vPick = fract( seed.z * 13.7 + seed.x * 3.1 );
  float sizeM = mix( 0.2 * uMix.w, 0.15, kind );
  gl_PointSize = max( 1.0, sizeM * uPx / depth ) * ( vAlpha > 0.003 ? 1.0 : 0.0 );
}
`,Ym=`
uniform vec3 uFlyColor;
uniform vec3 uLight;        // scene light level (petals are lit like everything else)
uniform vec3 uGold;         // backlight colour (golden hour)
uniform float uBackK;
uniform vec3 uDust;         // dust glint colour (linear, pre-multiplied by brightness)
uniform vec3 uBeamDust;     // pitch black: dust glints in the floodlight beams (cool white)
varying float vAlpha;
varying float vKind;
varying float vTw;
varying float vRot;
varying float vBack;
varying float vPick;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  if ( vKind > 1.5 ) {
    float r2 = dot( q, q );
    if ( r2 > 1.0 ) discard;
    gl_FragColor = vec4( ( vKind > 2.5 ? uBeamDust : uDust ) * ( exp( -r2 * 5.0 ) * vAlpha ), 0.0 );
    return;
  }
  if ( vKind > 0.5 ) {
    float r2 = dot( q, q );
    if ( r2 > 1.0 ) discard;
    float core = exp( -r2 * 9.0 );
    float halo = exp( -r2 * 2.5 ) * 0.3;
    gl_FragColor = vec4( uFlyColor * ( 0.6 + 0.8 * vTw ) * ( core + halo ) * vAlpha, 0.0 );
    return;
  }
  // tumbling petal / leaf: a lens shape, rotated, foreshortened by the tumble
  float c = cos( vRot );
  float s = sin( vRot );
  vec2 u = vec2( c * q.x - s * q.y, s * q.x + c * q.y );
  u.y /= 0.35 + 0.65 * abs( sin( vRot * 0.7 ) );
  float w = ( 1.0 - u.x * u.x );
  float lens = u.y * u.y - w * w * 0.16;
  float aa = fwidth( lens ) * 1.2 + 1e-4;
  float cov = 1.0 - smoothstep( -aa, aa, lens );
  if ( cov < 0.01 || abs( u.x ) > 1.0 ) discard;
  // pale pink / white petals, a few fresh-green leaves (never yellow)
  vec3 base = vPick < 0.45 ? vec3( 1.0, 0.72, 0.82 ) : vPick < 0.75 ? vec3( 0.98, 0.95, 0.96 ) : vec3( 0.5, 0.82, 0.42 );
  // cel two-tone across the midrib
  float lit = step( 0.0, u.y + 0.05 * u.x );
  vec3 col = base * mix( 0.68, 1.0, lit ) * uLight;
  // backlit gold: the petal glows translucent when it sits between the camera and the sun
  float bk = vBack * uBackK;
  col = mix( col, uGold * ( 0.7 + 0.5 * lit ), clamp( bk, 0.0, 0.85 ) );
  float a = cov * vAlpha;
  gl_FragColor = vec4( col * a, a );
}
`,Xm=class{points;material;centre=new V;dustCount;constructor(e=320,t=5){let n=t>>>0||1,r=()=>{n=n+1831565813>>>0;let e=n;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};this.dustCount=Math.round(e*.9);let i=e+this.dustCount,a=new Float32Array(i*3),o=new Float32Array(i*4);for(let t=0;t<i;t++)o[t*4]=r(),o[t*4+1]=r(),o[t*4+2]=t<e?r():((t-e)%6+r()*.98)/6,o[t*4+3]=t<e?r():2+r()*.999;let s=new Le;s.setAttribute(`position`,new I(a,3)),s.setAttribute(`aSeed`,new I(o,4)),this.material=new oe({name:`anime-motes`,uniforms:{uTime:W.uTime,uSkySun:W.uSkySun,uCentre:{value:this.centre},uBox:{value:new V(46,6,64)},uPx:{value:1e3},uMix:{value:[0,0,0,1]},uFlyColor:{value:new z(12124104).multiplyScalar(3.2)},uLight:{value:new z(1,1,1)},uGold:{value:new z(2.2,1.45,.6)},uBackK:{value:0},uDust:{value:new z(2.6,1.8,.85)},uBeamDust:{value:new z(1.5,1.75,2.1)},uShafts:W.uShafts,uShaftK:W.uShaftK,uShaftDir:W.uShaftDir,uNight:W.uNight,uFloodHeads:W.uFloodHeads,uFloodIslands:W.uFloodIslands},vertexShader:Jm,fragmentShader:Ym,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205}),this.points=new te(s,this.material),this.points.name=`anime-motes`,this.points.frustumCulled=!1,this.points.renderOrder=20}update(e,t,n,r,i,a,o,s=1){this.centre.set(e,0,t-8);let c=this.material.uniforms,l=c.uMix.value;l[0]=n,l[1]=r,l[2]=i,l[3]=s,c.uPx.value=a,c.uBackK.value=i,c.uLight.value.copy(o),this.points.visible=n+r>.01||W.uShaftDir.value.w>.002||W.uNight.value.x>.01}dispose(){this.points.geometry.dispose(),this.material.dispose()}},Zm=`audio/`,Qm={master:.9,sfx:1,music:.3,sfxLimit:[-6,6,12,.003,.2],musicShelfHz:2500,musicShelfDb:-5,musicLowpassHz:7e3,maxVoices:20,musicFadeOut:.8,musicFadeIn:1.6,victoryFadeOut:.25,victoryFadeIn:.04,trackGain:{day:1,night:.9,shop:1,idle:1,victory:1},nightOn:.55,nightOff:.3,distFar:40,distFalloff:.55,panWidth:26,panMax:.7},$m={clipMidi:83,comboGap:.8,runs:{day:{from:79,steps:[0,2,4,7,9,12,14]},night:{from:75,steps:[0,4,9,11,12,16]},shop:{from:77,steps:[0,2,5,7,9,12,14]},idle:{from:79,steps:[0,2,4,7,9,12,14]},victory:{from:79,steps:[0,2,5,7,9,12,14]}}},eh={vol:.45,rate:1,tockVol:.8,tockRate:.78},th={vol:.126,volJitter:.18,rate:[.9,1.12],attack:.035,release:.07},nh={seconds:3.2,xfade:.03,hump:[.055,.17],turn:[.002,.03],peak:[.5,1],grains:900,skew:2.2,bed:.12,res:[[2700,3.2,1],[4900,4.5,.7]],hp:1300,lp:7500,rms:.2},rh={rewind:{ids:[`rewind`],vol:.9,rate:[.8,.8],duck:[.6,2.2,.9]},slowmo:{ids:[`slowmo`],vol:.7},slowmoEnd:{ids:[`slowmoEnd`],vol:.6},gopher:{ids:[`gopher`],vol:.9,rate:[.92,1.08],world:!0},roofHit:{ids:[`roofHit`],vol:.8,rate:[.9,1.1],world:!0},roofBreak:{ids:[`roofBreak`],vol:1,world:!0,duck:[.35,.3,.5]},turret:{ids:[`turret`],vol:.9,rate:[.9,1.15],gap:.05,world:!0},sweep:{ids:[`sweep`],vol:.6,rate:[.95,1.1],gap:.08,world:!0},decoy:{ids:[`decoy`],vol:.6,rate:[.85,1.2],world:!0},allySwing:{ids:[`allySwing`],vol:.85,rate:[.95,1.05],world:!0},timeOut:{ids:[`timeOut`],vol:.6,rate:[.85,1.1],world:!0},flagFan:{ids:[`forcefield`],vol:.4,rate:[.9,1.1],gap:.25,world:!0},swing:{ids:[`swing0`,`swing1`],vol:.35,rate:[.92,1.08],gap:.045,world:!0},land:{ids:[`land0`,`land1`],vol:.5,rate:[.94,1.06],gap:.07,world:!0},landTar:{ids:[`tar`],vol:.5,rate:[.9,1.05],gap:.1,world:!0},landIce:{ids:[`ice`],vol:.22,rate:[.95,1.1],gap:.1,world:!0},squeegee:{ids:[`sweep`],vol:.5,rate:[1.2,1.35],gap:.12,world:!0},scoredOn:{ids:[`scored`],vol:1,duck:[.75,.9,1.1]},gameOver:{ids:[`gameover`],vol:.9,delay:.3,duck:[.8,1.4,1.2]},cleared:{ids:[`cleared`],vol:.9,duck:[.6,1.4,1.2]},holeStart:{ids:[`holeStart`],vol:.5},purchase:{ids:[`purchase`],vol:.8},resurrect:{ids:[`purchase`],vol:1,rate:[.8,.8],duck:[.5,.6,.8]},collect:{ids:[`collect`],vol:.45,gap:.09}},ih={ids:[`click`],vol:.6},ah={click:ih,confirm:ih,cancel:ih,page:ih,denied:{ids:[`denied`],vol:.6}};function oh(e,t){return Math.round(e*t.seconds)-Math.round(e*t.xfade)}function sh(e,t){let n=Math.round(e*t.seconds),r=new Float32Array(n),i=795580977,a=()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),o=new Float32Array(n);for(let r=0;r<n;){let i=Math.max(8,Math.round(e*(t.hump[0]+(t.hump[1]-t.hump[0])*a()))),s=t.peak[0]+(t.peak[1]-t.peak[0])*a();for(let e=0;e<i&&r+e<n;e++)o[r+e]=s*Math.sin(Math.PI*e/i)**.9;r+=i+Math.round(e*(t.turn[0]+(t.turn[1]-t.turn[0])*a()))}let s=t.res.length,c=new Float64Array(s),l=new Float64Array(s),u=new Float64Array(s),d=new Float64Array(s),f=new Float64Array(s),p=new Float64Array(s),m=new Float64Array(s),h=new Float64Array(s);for(let n=0;n<s;n++){let r=2*Math.PI*t.res[n][0]/e,i=Math.sin(r)/(2*t.res[n][1]),a=1+i;c[n]=i/a,l[n]=-2*Math.cos(r)/a,u[n]=(1-i)/a,d[n]=t.res[n][2]}let g=1-Math.exp(-2*Math.PI*t.hp/e),_=1-Math.exp(-2*Math.PI*t.lp/e),v=0,y=0;for(let i=0;i<n;i++){let n=o[i],b=0;n>.01&&(a()<t.grains*n**1.4/e&&(b=(a()<.5?-1:1)*a()**+t.skew*(.3+.7*n)),b+=(a()*2-1)*t.bed*n);let x=0;for(let e=0;e<s;e++){let t=c[e]*(b-h[e])-l[e]*f[e]-u[e]*p[e];h[e]=m[e],m[e]=b,p[e]=f[e],f[e]=t,x+=t*d[e]}v+=(x-v)*g,y+=(x-v-y)*_,r[i]=y}let b=n-oh(e,t);for(let e=0;e<b;e++){let t=(e+.5)/b*(Math.PI/2);r[e]=r[e]*Math.sin(t)+r[n-b+e]*Math.cos(t)}let x=0;for(let e=0;e<n;e++)x+=r[e]*r[e];let S=t.rms/Math.sqrt(Math.max(x/n,1e-12));for(let e=0;e<n;e++)r[e]=Math.tanh(r[e]*S);return r}var ch=[`day`,`night`,`shop`,`idle`,`victory`];function lh(e){let t=Math.round(e*.07),n=new Float32Array(t),r=625341585,i=0,a=1e-6;for(let o=0;o<t;o++){let t=o/e;r=Math.imul(r,1664525)+1013904223>>>0,i+=(r/2147483648-1-i)*.22;let s=(.55*Math.sin(7853.981633974483*t)*Math.exp(-t*85)+1.1*i*Math.exp(-t*380))*Math.min(1,t/4e-4);n[o]=s,Math.abs(s)>a&&(a=Math.abs(s))}let o=.9/a;for(let e=0;e<t;e++)n[e]*=o;return n}var uh=2,dh=3,fh=4,ph=[dh,0,uh,1,fh];function mh(){let e=navigator.userActivation;if(e&&e.hasBeenActive)return!0;try{return window.top!==window.self}catch{return!0}}var hh=class{ctx=null;unlocked=!1;gestured=!1;debug=null;spriteReady=!1;musicReady=!1;musicStarted=!1;manifest=null;spriteBytes=null;sprite=null;tracks=ch.map(()=>({buf:null,loop:0,start:0,gain:null,src:null,level:0,t0:0,pos:0}));musicBytes=ch.map(()=>null);master;sfxBus;musicBus;menuPaused=!1;musicVol=1;sfxVol=1;duckGain;fetching=!1;userMuted=!1;platformOn=!0;paused=!1;voices=0;lastPlay={};tickBuf=null;scribbleBuf=null;mode=`menu`;dark=0;night=!1;cur=-1;curK=0;musicStarts=0;musicStops=0;prefetch(){this.fetching||(this.fetching=!0,this.fetchAll().catch(()=>{}))}async fetchAll(){await i(`fx`);let e=JSON.parse(new TextDecoder().decode(s(Zm+`audio.json`)));this.manifest=e,this.spriteBytes=s(Zm+e.sprite),!this.ctx&&mh()&&this.ensureCtx(),this.decodeReady(),await i(`music`);for(let t=0;t<ch.length;t++){let n=e.music[ch[t]];this.musicBytes[t]=n?s(Zm+n.file):null}this.decodeReady()}decodeReady(){let e=this.ctx,t=this.manifest;if(e&&t){if(this.spriteBytes&&!this.sprite){let t=this.spriteBytes;this.spriteBytes=null,e.decodeAudioData(t).then(t=>{this.sprite=t,this.spriteReady=!0,window.setTimeout(()=>this.scribbleBuffer(e),2500)},()=>{})}for(let n=0;n<ph.length;n++){let r=ph[n],i=this.musicBytes[r];i&&(this.musicBytes[r]=null,e.decodeAudioData(i).then(e=>{let n=this.tracks[r];n.buf=e,n.loop=t.music[ch[r]].loop,n.start=t.music[ch[r]].start??0,this.musicReady=this.tracks.every(e=>e.buf!==null),this.tryStartMusic()},()=>{}))}}}bindUnlock(e=window){let t=()=>this.unlock();for(let n of[`pointerdown`,`touchend`,`mousedown`,`keydown`])e.addEventListener(n,t,!0)}ensureCtx(){if(this.ctx)return this.ctx;let e=C();if(!e){let t=window.AudioContext??window.webkitAudioContext;if(!t)return null;try{e=new t({latencyHint:`interactive`})}catch{return null}}this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);let t=e.createDynamicsCompressor();t.threshold.value=Qm.sfxLimit[0],t.knee.value=Qm.sfxLimit[1],t.ratio.value=Qm.sfxLimit[2],t.attack.value=Qm.sfxLimit[3],t.release.value=Qm.sfxLimit[4],t.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.gain.value=Qm.sfx*gh(this.sfxVol),this.sfxBus.connect(t),this.duckGain=e.createGain(),this.duckGain.connect(this.master);let n=e.createBiquadFilter();n.type=`highshelf`,n.frequency.value=Qm.musicShelfHz,n.gain.value=Qm.musicShelfDb;let r=e.createBiquadFilter();return r.type=`lowpass`,r.frequency.value=Qm.musicLowpassHz,r.Q.value=.5,n.connect(r).connect(this.duckGain),this.musicBus=e.createGain(),this.musicBus.gain.value=Qm.music*gh(this.musicVol),this.musicBus.connect(n),this.unlocked=!0,this.applyMute(),this.decodeReady(),e}unlock(){let e=this.ensureCtx();if(!e)return;if(!this.gestured){this.gestured=!0;let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,22050),t.connect(e.destination),t.start(0)}let t=e.state;(t===`suspended`||t===`interrupted`)&&this.audible&&e.resume()}get audible(){return!this.userMuted&&this.platformOn&&!this.paused}setMuted(e){this.userMuted=e,this.applyMute()}setPlatformEnabled(e){this.platformOn=e,this.applyMute()}setMenuPaused(e){this.menuPaused=e}setVolume(e,t){let n=Math.max(0,Math.min(1,Number.isFinite(t)?t:1));e===`music`?this.musicVol=n:this.sfxVol=n;let r=this.ctx;if(!r)return;let i=e===`music`?this.musicBus:this.sfxBus;i.gain.cancelScheduledValues(r.currentTime),i.gain.setTargetAtTime((e===`music`?Qm.music:Qm.sfx)*gh(n),r.currentTime,.04)}volume(e){return e===`music`?this.musicVol:this.sfxVol}setPaused(e){this.paused=e,this.applyMute()}get muted(){return!this.audible}applyMute(){let e=this.ctx;if(!e)return;let t=this.audible,n=e.currentTime;this.master.gain.cancelScheduledValues(n),t?(e.state!==`running`&&e.resume(),this.master.gain.setTargetAtTime(Qm.master,n,.03)):(this.master.gain.setTargetAtTime(0,n,.02),window.setTimeout(()=>{!this.audible&&this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()},150))}play(e,t=1,n=1,r=0,i=0){let a=this.ctx,o=this.manifest,s=this.sprite;if(!a||!o||!s||!this.audible||a.state!==`running`)return!1;let c=o.clips[e];if(!c||this.voices>=Qm.maxVoices||t<=.01||this.sfxVol<=0)return!1;let l=a.createBufferSource();l.buffer=s,l.playbackRate.value=n;let u=l,d=a.createGain();if(d.gain.value=t,u.connect(d),u=d,r!==0&&typeof a.createStereoPanner==`function`){let e=a.createStereoPanner();e.pan.value=r,u.connect(e),u=e}return u.connect(this.sfxBus),this.voices++,l.onended=()=>{this.voices--,l.disconnect(),d.disconnect()},l.start(a.currentTime+i,c[0],c[1]),this.debug&&this.debug(e,t),!0}tick(e,t=1){let n=this.ctx;if(!n||!this.audible||n.state!==`running`||this.voices>=Qm.maxVoices||e<=.01||this.sfxVol<=0)return!1;let r=this.tickBuf;if(!r){let e=lh(n.sampleRate);r=n.createBuffer(1,e.length,n.sampleRate),r.getChannelData(0).set(e),this.tickBuf=r}let i=n.createBufferSource();i.buffer=r,i.playbackRate.value=t;let a=n.createGain();return a.gain.value=e,i.connect(a),a.connect(this.sfxBus),this.voices++,i.onended=()=>{this.voices--,i.disconnect(),a.disconnect()},i.start(),this.debug&&this.debug(`tick`,e),!0}scribbleBuffer(e){let t=this.scribbleBuf;if(!t){let n=sh(e.sampleRate,nh);t=e.createBuffer(1,n.length,e.sampleRate),t.getChannelData(0).set(n),this.scribbleBuf=t}return t}scribble(e,t){let n=this.ctx;if(!n||!this.audible||n.state!==`running`||this.voices>=Qm.maxVoices||t<.03||this.sfxVol<=0)return!1;let r=this.scribbleBuffer(n),i=th,a=n.createBufferSource();a.buffer=r,a.loop=!0,a.loopStart=0,a.loopEnd=oh(n.sampleRate,nh)/n.sampleRate,a.playbackRate.value=i.rate[0]+Math.random()*(i.rate[1]-i.rate[0]);let o=i.vol*(1-i.volJitter+Math.random()*2*i.volJitter),s=n.createGain(),c=n.currentTime+.005+Math.max(0,e),l=Math.min(i.attack,t*.3),u=Math.min(i.release,t*.4);return s.gain.setValueAtTime(0,c),s.gain.linearRampToValueAtTime(o,c+l),s.gain.setValueAtTime(o,c+t-u),s.gain.linearRampToValueAtTime(0,c+t),a.connect(s),s.connect(this.sfxBus),this.voices++,a.onended=()=>{this.voices--,a.disconnect(),s.disconnect()},a.start(c,Math.random()*a.loopEnd),a.stop(c+t+.02),this.debug&&this.debug(`scribble`,o),!0}get now(){return this.ctx?this.ctx.currentTime:0}playDef(e,t=0,n=0,r=0){if(!this.ctx)return!1;let i=this.ctx.currentTime,a=e.ids.length===1?e.ids[0]:e.ids[Math.random()*e.ids.length|0];if(e.gap&&i-(this.lastPlay[a]??-9)<e.gap)return!1;let o=e.vol,s=0;e.world&&(o*=1-Qm.distFalloff*Math.min(1,n/Qm.distFar),s=Math.max(-Qm.panMax,Math.min(Qm.panMax,t/Qm.panWidth)));let c=e.rate,l=r>0?r:c?c[0]+Math.random()*(c[1]-c[0]):1;if(!this.play(a,o,l,s,e.delay??0))return!1;this.lastPlay[a]=i;let u=e.duck;return u&&this.duck(u[0],u[1],u[2],e.delay??0),!0}duck(e,t,n,r=0){let i=this.ctx;if(!i)return;let a=this.duckGain.gain,o=i.currentTime+r;a.cancelScheduledValues(o),a.setTargetAtTime(1-e,o,.04),a.setTargetAtTime(1,o+.1+t,n/3)}wanted(e,t){return e===`menu`||this.menuPaused?dh:e===`shop`?uh:e===`victory`?fh:((this.night?t<=Qm.nightOff:t>=Qm.nightOn)&&(this.night=!this.night),+!!this.night)}musicId(){return ch[this.cur>=0?this.cur:this.mode===`shop`?uh:this.mode===`menu`?dh:+!!this.night]}update(e,t,n){if(this.mode=t,this.dark=n,!this.ctx||!this.musicStarted)return;let r=this.wanted(t,n);if(r!==this.cur&&this.tracks[r].buf){let t=r===fh;this.curK=Math.max(0,this.curK-e/(t?Qm.victoryFadeOut:Qm.musicFadeOut)),(this.cur<0||this.curK<=0)&&(this.stopTrack(this.cur),t&&(this.tracks[r].pos=0),this.startTrack(r))}else this.curK=Math.min(1,this.curK+e/(this.cur===fh?Qm.victoryFadeIn:Qm.musicFadeIn));this.cur>=0&&this.setLevel(this.cur,this.curK*this.curK*Qm.trackGain[ch[this.cur]])}setLevel(e,t){let n=this.tracks[e];n.gain&&Math.abs(n.level-t)>.002&&(n.level=t,n.gain.gain.value=t)}startTrack(e){let t=this.ctx,n=this.tracks[e];if(!t||!n.buf||!n.gain)return;n.gain.gain.value=0,n.level=0;let r=t.createBufferSource();r.buffer=n.buf,r.loop=!0,r.loopEnd=Math.min(n.loop,n.buf.duration),r.loopStart=Math.min(n.start,r.loopEnd),r.connect(n.gain);let i=t.currentTime+.02,a=n.pos<r.loopEnd?n.pos:0;n.t0=i-a,r.start(i,a),n.src=r,this.cur=e,this.curK=0,this.musicStarts++}stopTrack(e){if(e<0)return;let t=this.tracks[e];t.gain&&(t.gain.gain.value=0),t.level=0;let n=t.src;if(!n)return;t.src=null;let r=this.ctx,i=t.buf?Math.min(t.loop,t.buf.duration):0;r&&i>0&&(t.pos=Math.max(0,(r.currentTime-t.t0)%i));try{n.stop()}catch{}n.disconnect(),this.musicStops++}tryStartMusic(){let e=this.ctx;if(e&&!this.musicStarted){this.musicStarted=!0;for(let t of this.tracks){let n=e.createGain();n.gain.value=0,n.connect(this.musicBus),t.gain=n}this.night=this.mode===`play`&&this.dark>=Qm.nightOn}}musicLevels(){return[this.tracks[0].level,this.tracks[1].level,this.tracks[2].level,this.tracks[3].level]}get musicTrack(){return this.cur>=0?ch[this.cur]:``}};function gh(e){return e*e}var _h=class{audio;holePos;comboStep=0;lastCollect=-9;tickAcc=1;tickFlip=!1;constructor(e,t){this.audio=e,this.holePos=t}cue=(e,t,n)=>{let r=rh[e];if(!r)return;let i=t-this.holePos.x,a=n-this.holePos.z;e===`collect`?this.collect(r,t,Math.sqrt(i*i+a*a)):this.audio.playDef(r,t,Math.sqrt(i*i+a*a))};collect(e,t,n){let r=this.audio.now,i=$m.runs[this.audio.musicId()];r-this.lastCollect>$m.comboGap&&(this.comboStep=0);let a=this.comboStep%i.steps.length,o=2**((i.from+i.steps[a]-$m.clipMidi)/12);this.audio.playDef(e,t,n,o)&&(this.lastCollect=r,this.comboStep=a+1)}ticking(e,t){t<=0?(this.tickAcc=1,this.tickFlip=!1):(this.tickAcc+=e*t,!(this.tickAcc<1)&&(this.tickAcc=this.tickAcc>2?0:this.tickAcc-1,this.tickFlip=!this.tickFlip,this.audio.tick(this.tickFlip?eh.vol:eh.vol*eh.tockVol,this.tickFlip?eh.rate:eh.rate*eh.tockRate)))}ui(e){this.audio.playDef(ah[e])}frame(e,t,n){let r=t===`playing`||t===`offer`||t===`cleared`||t===`lost`?`play`:t===`shop`?`shop`:t===`victory`?`victory`:`menu`;this.audio.update(e,r,n)}},X={glow:0,ringSoft:1,ring:2,slashA:3,slashB:4,slashC:5,splat:6,diamond:7,puff:8,sparkle:9,crack:10,shard:11,dot:12,burst:13,streak:14,confetti:15},vh=0,yh=1,bh=2,xh=1024,Sh=40,Ch=20,wh=`
uniform float uTime;
attribute vec4 aPosT;   // x y z spawnTime
attribute vec4 aVelL;   // vx vy vz life
attribute vec4 aSize;   // size0 size1 spin rot0   (streak: length, width, -, -)
attribute vec4 aCol;    // r g b emissive
attribute vec4 aMisc;   // cell + 16 * mode, drag, gravity, alpha
varying vec2 vUv;
varying vec4 vCol;
varying float vK;
varying float vPuff;
void main() {
  float age = uTime - aPosT.w;
  float life = aVelL.w;
  if ( age < 0.0 || age > life ) {
    gl_Position = vec4( 2.0, 2.0, 2.0, 1.0 );
    vUv = vec2( 0.0 );
    vCol = vec4( 0.0 );
    vK = 1.0;
    vPuff = 0.0;
    return;
  }
  float k = age / life;
  float mode = floor( aMisc.x / 16.0 + 0.001 );
  float cell = aMisc.x - mode * 16.0;
  float drag = aMisc.y;
  float travel = drag > 0.001 ? ( 1.0 - exp( -drag * age ) ) / drag : age;
  vec3 p = aPosT.xyz + aVelL.xyz * travel;
  p.y -= 0.5 * aMisc.z * age * age;
  vec2 c = position.xy;
  float rot = aSize.w + aSize.z * age;
  float cr = cos( rot );
  float sr = sin( rot );
  vec3 wp;
  if ( mode < 0.5 ) {
    float size = mix( aSize.x, aSize.y, 1.0 - ( 1.0 - k ) * ( 1.0 - k ) );
    vec2 q = vec2( cr * c.x - sr * c.y, sr * c.x + cr * c.y ) * size;
    vec3 right = vec3( viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0] );
    vec3 up = vec3( viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1] );
    wp = p + right * q.x + up * q.y;
  } else if ( mode < 1.5 ) {
    float size = mix( aSize.x, aSize.y, 1.0 - ( 1.0 - k ) * ( 1.0 - k ) );
    vec2 q = vec2( cr * c.x - sr * c.y, sr * c.x + cr * c.y ) * size;
    wp = vec3( p.x + q.x, p.y + 0.045, p.z + q.y );
  } else {
    vec3 d = normalize( aVelL.xyz + vec3( 0.0, -aMisc.z * age, 0.0 ) + vec3( 1e-4 ) );
    vec3 r = normalize( cross( d, p - cameraPosition ) + vec3( 1e-5 ) );
    float len = aSize.x * ( 1.0 - 0.6 * k );
    wp = p + d * ( c.x * len ) + r * ( c.y * aSize.y );
  }
  gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
  float col = mod( cell, 4.0 );
  float row = floor( cell / 4.0 );
  vUv = ( vec2( col, 3.0 - row ) + ( c * 0.96 + 0.5 ) ) * 0.25;
  float a = aMisc.w * smoothstep( 0.0, 0.06, k ) * ( 1.0 - smoothstep( 0.5, 1.0, k ) );
  vCol = vec4( aCol.rgb, a );
  vK = k;
  vPuff = aCol.w + ( abs( cell - 8.0 ) < 0.5 ? 10.0 : 0.0 );
}
`,Th=`
uniform sampler2D uAtlas;
uniform vec3 uLight;
varying vec2 vUv;
varying vec4 vCol;
varying float vK;
varying float vPuff;
void main() {
  float cov = texture2D( uAtlas, vUv ).a;
  float puff = step( 9.5, vPuff );
  float em = vPuff - puff * 10.0;
  // cel dissolve: puffs keep a hard painted edge that eats inward as they age
  float thr = mix( 0.3, 0.88, vK * vK );
  cov = mix( cov, smoothstep( thr - 0.05, thr + 0.05, cov ), puff );
  float a = cov * vCol.a;
  if ( a < 0.004 ) discard;
  vec3 col = vCol.rgb * mix( uLight, vec3( 1.0 ), em );
  // cel shade on puffs: a darker underside band
  col *= mix( 1.0, 0.82 + 0.18 * smoothstep( 0.35, 0.55, vUv.y * 4.0 - floor( vUv.y * 4.0 ) ), puff );
  gl_FragColor = vec4( col * a, a * ( 1.0 - 0.8 * em ) );
}
`,Eh=class{mesh;material;density=1;trailN=0;trailRgb=new Float32Array(24);data=new Float32Array(xh*Ch);buffer;next=0;time=0;liveUntil=0;dirty=!1;seed=2654435769;collectAt=0;spawned=0;ready=!1;constructor(e){let t=new ne;t.setAttribute(`position`,new me([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],3)),t.setIndex(new N([0,1,2,0,2,3],1)),this.buffer=new ce(this.data,Ch,1),this.buffer.setUsage(R);for(let[e,n]of[`aPosT`,`aVelL`,`aSize`,`aCol`,`aMisc`].entries())t.setAttribute(n,new Te(this.buffer,4,e*4));t.instanceCount=xh;let n=e?new we().load(e,()=>this.ready=!0):new be;n.colorSpace=de,n.generateMipmaps=!0,this.material=new oe({name:`anime-vfx`,uniforms:{uTime:{value:0},uAtlas:{value:n},uLight:{value:new z(1,1,1)}},vertexShader:wh,fragmentShader:Th,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205}),this.mesh=new F(t,this.material),this.mesh.name=`anime-vfx`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=22,this.mesh.visible=!1,this.refreshTrailColors()}setAtlas(e){let t=this.material.uniforms.uAtlas.value,n=new we().load(e,()=>this.ready=!0);n.colorSpace=de,n.generateMipmaps=t.generateMipmaps,n.minFilter=t.minFilter,n.magFilter=t.magFilter,n.wrapS=t.wrapS,n.wrapT=t.wrapT,this.material.uniforms.uAtlas.value=n,t.dispose()}refreshTrailColors(){let e=new z;for(let t=0;t<8;t++)e.set(Ht[t].trail),this.trailRgb[t*3]=e.r,this.trailRgb[t*3+1]=e.g,this.trailRgb[t*3+2]=e.b}update(e,t){this.time=e,this.trailN=0,this.material.uniforms.uTime.value=e,this.material.uniforms.uLight.value.copy(t),this.dirty&&=(this.buffer.needsUpdate=!0,!1),this.mesh.visible=e<this.liveUntil}rnd(){let e=this.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.seed=e>>>0,this.seed/4294967296}rr(e,t){return e+(t-e)*this.rnd()}put(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b){let x=this.data,S=this.next*Ch;this.next=(this.next+1)%xh;let C=this.time+b;x[S]=n,x[S+1]=r,x[S+2]=i,x[S+3]=C,x[S+4]=a,x[S+5]=o,x[S+6]=s,x[S+7]=c,x[S+8]=l,x[S+9]=u,x[S+10]=d,x[S+11]=f,x[S+12]=p,x[S+13]=m,x[S+14]=h,x[S+15]=g,x[S+16]=e+t*16,x[S+17]=_,x[S+18]=v,x[S+19]=y;let w=C+c;w>this.liveUntil&&(this.liveUntil=w),this.dirty=!0,this.spawned++}ring(e,t,n,r,i,a,o,s,c,l,u,d=0,f=0){this.put(e,yh,t,f,n,0,0,0,a,r,i,0,0,o,s,c,l,0,0,u,d)}flash(e,t,n,r,i,a,o,s,c,l=X.glow,u=0){this.put(l,vh,e,t,n,0,0,0,a,r,i,0,this.rnd()*6.28,o,s,c,1,0,0,1,u)}puffs(e,t,n,r,i,a,o,s,c,l,u,d){for(let f=0;f<e;f++){let e=this.rnd()*6.2832,f=this.rr(.4,1)*i;this.put(X.puff,vh,t+Math.cos(e)*.15,n,r+Math.sin(e)*.15,Math.cos(e)*f,this.rr(.4,1)*a,Math.sin(e)*f,c*this.rr(.8,1.2),o*this.rr(.8,1.2),s*this.rr(.8,1.2),this.rr(-1.5,1.5),this.rnd()*6.28,l,u,d,0,2.6,0,.9,0)}}sparks(e,t,n,r,i,a,o,s,c,l,u=0,d=0,f=X.sparkle){for(let p=0;p<e;p++){let e=this.rnd()*6.2832,p=this.rr(-.2,1.1),m=this.rr(.5,1)*i;this.put(f,vh,t,n,r,Math.cos(e)*m,p*m,Math.sin(e)*m,o*this.rr(.8,1.2),a*this.rr(.8,1.25),0,this.rr(-3,3),this.rnd()*6.28,s,c,l,1,2.2,u,1,d*this.rnd())}}streaks(e,t,n,r,i,a,o,s,c,l,u,d=.35){for(let f=0;f<e;f++){let p=f/e*6.2832+this.rnd()*.5,m=this.rr(.7,1)*i;this.put(X.streak,bh,t,n,r,Math.cos(p)*m,this.rr(0,1)*m*d,Math.sin(p)*m,s*this.rr(.8,1.15),a*this.rr(.8,1.2),o,0,0,c,l,u,1,1.5,0,1,0)}}ballTrail(e,t,n,r,i,a,o,s){if(!this.ready||this.trailN>=Sh||this.density<1&&this.rnd()>this.density)return;this.trailN++;let c=(e&7)*3,l=this.trailRgb[c],u=this.trailRgb[c+1],d=this.trailRgb[c+2],f=this.rr(-.06,.06),p=this.rr(-.06,.06);switch(e){case 1:this.put(X.glow,vh,t+f,n,r+p,i*.08+f*4,this.rr(.6,1.6),o*.08+p*4,this.rr(.3,.45),this.rr(.34,.46),.04,0,0,l*2.4,u*2.4,d*2.4,1,2.5,-1.5,.9,0);break;case 2:this.put(X.sparkle,vh,t+f*2,n+p*2,r,0,0,0,this.rr(.4,.6),this.rr(.26,.36),.02,this.rr(-4,4),this.rnd()*6.28,l*2,u*2,d*2,1,0,0,1,0);break;case 3:if(s)return;this.put(X.puff,vh,t+f,.08,r+p,-i*.12+f*3,this.rr(.3,.7),-o*.12+p*3,this.rr(.4,.55),.12,this.rr(.34,.46),this.rr(-1.5,1.5),this.rnd()*6.28,l,u,d,0,2.6,0,.75,0);break;case 4:s?this.put(X.streak,bh,t,n,r,i*.12,a*.12,o*.12,.22,1.5,.24,0,0,l*1.2,u*1.2,d*1.2,.3,0,0,.45,0):this.put(X.puff,vh,t+f*3,.1,r+p*3,f*6,this.rr(.4,.9),p*6,this.rr(.5,.7),.25,this.rr(.7,.9),this.rr(-1,1),this.rnd()*6.28,.72,.64,.5,0,2.4,0,.8,0);break;case 5:this.put(X.streak,bh,t,n,r,i*.1,a*.1,o*.1,.18,s?.9:.5,.05,0,0,l*1.8,u*1.8,d*1.8,.8,0,0,.8,0);break;case 6:this.put(X.dot,vh,t+f,n-.05,r+p,i*.25,a*.25-.5,o*.25,this.rr(.45,.6),this.rr(.12,.17),.07,0,0,l,u,d,0,.6,9,1,0);break;case 7:this.rnd()<.2?this.put(X.shard,vh,t+f,n,r+p,f*6,this.rr(0,1),p*6,.4,.18,.08,this.rr(-8,8),this.rnd()*6.28,l*1.6,u*1.6,d*1.6,1,1,6,1,0):this.put(X.sparkle,vh,t+f*2,n+p*2,r,0,-.2,0,this.rr(.35,.5),this.rr(.22,.3),.02,this.rr(-3,3),this.rnd()*6.28,l*1.7,u*1.7,d*1.7,1,0,0,1,0);break;default:this.trailN--}}poofFx(e,t,n,r,i=0){if(!this.ready)return;let a=this.density;this.put(X.burst,vh,e,t+.45*r,n,0,0,0,.2,.4*r,1.7*r,0,this.rnd()*6.28,2.6,2.3,1.6,1,0,0,1,i),t<.5&&this.ring(X.ringSoft,e,n,.4*r,1.8*r,.4,1.3,1.25,1.1,.6,.8,i,.05);for(let o=0;o<Math.ceil(5*a);o++){let a=this.rnd()*6.2832,o=this.rr(.6,1)*1.6*r;this.put(X.sparkle,vh,e,t+.5*r,n,Math.cos(a)*o,this.rr(.2,1.1)*o,Math.sin(a)*o,this.rr(.36,.54),.16*r,0,this.rr(-3,3),this.rnd()*6.28,2.8,2.4,1.2,1,2.2,5,1,i+.03)}for(let o=0;o<Math.ceil(5*a);o++){let a=this.rnd()*6.28,o=this.rr(.8,1.8)*r;this.put(X.dot,vh,e,t+.3*r,n,Math.cos(a)*o,this.rr(2.2,3.6)*r,Math.sin(a)*o,this.rr(.5,.7),.1*r,.05*r,0,0,.62,.5,.36,.1,1.2,9*r,1,i+this.rr(.02,.06))}}firework(e,t,n,r,i,a,o=0){if(!this.ready)return;let s=this.density,c=.42,l=12/(c*c);this.put(X.streak,bh,e,t-6,n,0,l*c,0,c,.9,.07,0,0,2.6,2.2,1.6,1,0,l,1,o);let u=o+c;this.flash(e,t,n,.8,5.5,.34,r*1.2,i*1.2,a*1.2,X.burst,u),this.flash(e,t,n,.6,4,.25,3,3,3,X.glow,u);let d=Math.ceil(38*s);for(let o=0;o<d;o++){let o=this.rnd()*6.2832,s=this.rr(-1,1),c=Math.sqrt(1-s*s),l=this.rr(7,10);this.put(X.sparkle,vh,e,t,n,Math.cos(o)*c*l,s*l,Math.sin(o)*c*l,this.rr(1.2,1.7),this.rr(.8,1.1),.45,this.rr(-4,4),this.rnd()*6.28,r,i,a,1,1.7,3.2,1,u)}let f=Math.ceil(10*s);for(let o=0;o<f;o++){let s=o/f*6.2832+this.rnd()*.4,c=this.rr(-.6,.8),l=this.rr(9,13);this.put(X.streak,bh,e,t,n,Math.cos(s)*l,c*l,Math.sin(s)*l,this.rr(.45,.6),2,.14,0,0,r,i,a,1,2.4,1.5,1,u)}for(let r=0;r<Math.ceil(6*s);r++){let r=this.rnd()*6.2832,i=this.rr(1.5,3.2);this.put(X.sparkle,vh,e+Math.cos(r)*i,t+this.rr(-1.6,.8),n+Math.sin(r)*i,0,-.6,0,.28,.5,.1,6,this.rnd()*6.28,3,3,2.6,1,0,0,1,u+this.rr(.55,1))}}confettiCannon(e,t,n,r){if(!this.ready)return;let i=Math.ceil(n*this.density);for(let n=0;n<i;n++){let i=r[n%r.length],a=this.rnd()*6.28,o=this.rr(.6,3.2);this.put(X.confetti,vh,e,.5,t,Math.cos(a)*o,this.rr(9,15),Math.sin(a)*o,this.rr(2.2,3),.26,.26,this.rr(-14,14),this.rnd()*6.28,i[0]*.8,i[1]*.8,i[2]*.8,.8,.9,11,1,this.rnd()*.15)}this.ring(X.ring,e,t,.4,4.5,.6,2.4,1.9,.6,1,.85),this.sparks(Math.ceil(14*this.density),e,.9,t,3.5,.5,.8,2.8,2.4,1.2,1.2,.2)}confettiRain(e,t,n,r,i,a,o){if(!this.ready)return;let s=Math.ceil(e*this.density);for(let e=0;e<s;e++){let e=o[Math.floor(this.rnd()*o.length)%o.length];this.put(X.confetti,vh,this.rr(t,n),r+this.rr(-.6,.6),this.rr(i,a),this.rr(-.8,.8),this.rr(-1.6,-.6),this.rr(-.5,.5),this.rr(2.6,3.4),.24,.24,this.rr(-9,9),this.rnd()*6.28,e[0]*.55,e[1]*.55,e[2]*.55,.55,.4,.6,1,this.rnd()*.3)}}cue=(e,t,n,r)=>{if(!this.ready)return;let i=this.density;switch(e){case`swing`:this.put(this.rnd()<.5?X.slashA:X.slashB,vh,t,r+.2,n,0,0,0,.24,1.1,2.4,0,this.rr(-.5,.5)+.5,2,2,1.9,1,0,0,.95,0),this.flash(t,r,n,.5,1.5,.16,3,3,2.4),this.streaks(2,t,r,n,5,1.2,.09,.2,2.2,2.2,2);break;case`land`:this.ring(X.ring,t,n,.3,1.7,.4,1.4,1.4,1.3,.7,.85),this.puffs(Math.ceil(4*i),t,.15,n,1.1,1.4,.4,1,.5,.96,.92,.8);for(let e=0;e<Math.ceil(3*i);e++){let e=this.rnd()*6.28;this.put(X.dot,vh,t,.1,n,Math.cos(e)*1.2,this.rr(2.5,4.5),Math.sin(e)*1.2,.5,.13,.05,0,0,.3,.75,.2,.15,0,13,1,0)}break;case`landTar`:this.put(X.splat,yh,t,0,n,0,0,0,1.1,.5,2.8,this.rr(-.4,.4),this.rnd()*6.28,.07,.03,.1,.2,0,0,1,0),this.ring(X.ringSoft,t,n,.4,3,.5,1.1,.3,1.7,1,.9);for(let e=0;e<Math.ceil(7*i);e++){let e=this.rnd()*6.28,r=this.rr(.5,2.5);this.put(X.dot,vh,t,.15,n,Math.cos(e)*r,this.rr(3,6),Math.sin(e)*r,.65,.3,.12,0,0,.5,.15,.7,.9,0,15,1,0)}break;case`landIce`:this.put(X.crack,yh,t,0,n,0,0,0,1.3,.5,3.2,0,this.rnd()*6.28,.5,1.3,1.9,1,0,0,1,0),this.ring(X.ring,t,n,.4,3,.45,.6,1.5,2.2,1,.8);for(let e=0;e<Math.ceil(6*i);e++){let e=this.rnd()*6.28,r=this.rr(.5,2.5);this.put(X.shard,vh,t,.15,n,Math.cos(e)*r,this.rr(3,6),Math.sin(e)*r,.6,.38,.2,this.rr(-9,9),this.rnd()*6.28,.8,1.6,2.2,1,.3,14,1,0)}this.sparks(3,t,.6,n,2,.5,.5,1.2,2.2,2.6);break;case`scoredOn`:this.flash(t,1,n,.9,5.2,.4,3.4,.7,.45,X.burst),this.flash(t,1,n,.5,2.8,.3,3.2,3.2,3.2,X.burst),this.ring(X.ring,t,n,.6,9,.55,2.8,.4,.3,1,.95),this.streaks(10,t,.9,n,12,1.5,.14,.38,3,1,.6),this.puffs(Math.ceil(5*i),t,.3,n,3.2,1.6,.8,2,.7,.55,.5,.5);break;case`gameOver`:case`holeStart`:break;case`cleared`:{let e=[[3,.6,.6],[.7,1.9,.8],[.6,1,3],[3,2.2,.4],[2.6,.8,2.6],[.5,2.4,2.4]],r=Math.ceil(52*i);for(let i=0;i<r;i++){let r=e[i%e.length],a=this.rnd()*6.28,o=this.rr(1,6);this.put(X.confetti,vh,t,.8,n,Math.cos(a)*o,this.rr(8,14),Math.sin(a)*o,this.rr(1.7,2.6),.3,.3,this.rr(-14,14),this.rnd()*6.28,r[0],r[1],r[2],.9,.7,13,1,this.rnd()*.12)}for(let e=0;e<3;e++)this.ring(X.ring,t,n,.5,11,.9,2.4,1.7,.4,1,.9,e*.22);this.sparks(Math.ceil(12*i),t,1.4,n,3,.9,.9,2.6,2.1,.7,0,.6),this.flash(t,1.2,n,1,5,.5,3,2.6,1,X.burst);break}case`resurrect`:this.ring(X.ring,t,n,.5,8.5,.7,2.4,2.2,1,1,.9),this.flash(t,1,n,1,4,.4,2.6,2.4,1.2,X.burst),this.cue(`purchase`,t,n,r);break;case`purchase`:this.ring(X.ringSoft,t,n,.4,3.4,.55,2.6,2,.6,1,.9);for(let e=0;e<Math.ceil(12*i);e++){let e=this.rnd()*6.28,r=this.rr(.5,1.8);this.put(X.sparkle,vh,t+Math.cos(e)*r,this.rr(.2,1.4),n+Math.sin(e)*r,0,this.rr(1,2.2),0,this.rr(.55,.9),this.rr(.5,1),.05,this.rr(-3,3),this.rnd()*6.28,3,2.5,1,1,.5,0,1,this.rnd()*.25)}break;case`squeegee`:this.ring(X.ringSoft,t,n,.5,2.6,.4,1.6,1.6,1.7,.8,.8),this.sparks(Math.ceil(5*i),t,.4,n,2.4,.45,.45,2.4,2.5,2.6,4);break;case`collect`:this.time-this.collectAt>.16&&(this.collectAt=this.time,this.sparks(2,t,.9,n,1.6,.5,.4,2.6,2.1,.7));break;case`gopher`:this.ring(X.ringSoft,t,n,.3,2.4,.4,.9,.6,.35,.3,.9),this.puffs(Math.ceil(5*i),t,.2,n,1.6,2.2,.5,1.2,.55,.66,.5,.34),this.sparks(3,t,1.8,n,1.2,.5,.5,2.6,2.4,.8);break;case`roofHit`:this.flash(t,r,n,.4,1.6,.18,3,2.8,2),this.sparks(5,t,r,n,5,.5,.3,3,2.6,1.2);break;case`roofBreak`:this.flash(t,r,n,.6,2.6,.25,3,2.4,1.2,X.burst);for(let e=0;e<Math.ceil(9*i);e++){let e=this.rnd()*6.28,i=this.rr(1.5,4.5);this.put(X.shard,vh,t,r,n,Math.cos(e)*i,this.rr(3,7),Math.sin(e)*i,this.rr(.7,1),.5,.35,this.rr(-10,10),this.rnd()*6.28,.75,.42,.2,.25,.2,14,1,0)}this.puffs(Math.ceil(4*i),t,r,n,2,1,.6,1.4,.6,.75,.6,.45);break;case`turret`:this.flash(t,r,n,.3,1.5,.22,3.2,2.8,1.2,X.burst),this.streaks(5,t,r,n,7,.7,.07,.22,3,2.6,1.2,.6);break;case`flagFan`:this.ring(X.ringSoft,t,n,1.5,7.4,.45,.5,1.4,2.3,1,.75),this.ring(X.ring,t,n,1.2,6.4,.4,.8,1.8,2.6,1,.6,.08);break;case`sweep`:this.ring(X.ringSoft,t,n,.5,3.4,.45,.5,2.2,1.2,1,.8),this.sparks(5,t,.5,n,2.4,.55,.55,.9,2.6,1.1,0);break;case`decoy`:this.puffs(3,t,.2,n,1.2,1.2,.4,.9,.5,.96,.92,.8),this.sparks(6,t,1.4,n,2.4,.6,.55,3,1.4,1.7);break;case`allySwing`:this.put(X.slashB,vh,t,1.1,n,0,0,0,.26,1.2,2.8,0,this.rr(-.4,.4),2.2,2.2,2,1,0,0,.95,0),this.flash(t,.9,n,.5,1.6,.16,3,3,2.6);break;case`timeOut`:this.puffs(3,t,r,n,1.2,.8,.5,1.1,.5,.96,.92,.8);for(let e=0;e<5;e++){let i=e/5*6.28;this.put(X.sparkle,vh,t+Math.cos(i)*.5,r+.5,n+Math.sin(i)*.5,-Math.sin(i)*1.4,1.2,Math.cos(i)*1.4,.9,.6,.2,4,0,3,2.6,.5,1,.4,0,1,0)}break;case`rewind`:for(let e=0;e<3;e++)this.ring(X.ring,t,n,12,.8,.5,.5,1.5,2.5,1,.9,e*.28);this.flash(t,1,n,4.5,.4,.9,.5,1.4,2.4);break;case`slowmo`:this.ring(X.ringSoft,t,n,.5,7,.6,.4,1.2,2.4,1,.8);break;case`slowmoEnd`:this.ring(X.ring,t,n,6,.6,.35,1.8,1.8,2,1,.8)}}},Dh=x.capacity,Oh=new Ne,kh=new P,Ah=new V,jh=new V,Mh=new V(0,1,0),Nh=`
varying vec3 vN;
varying vec3 vV;
varying vec3 vCol;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4( position, 1.0 );
  vN = normalize( mat3( m ) * normal );
  vV = normalize( cameraPosition - wp.xyz );
#ifdef USE_INSTANCING_COLOR
  vCol = instanceColor;
#else
  vCol = vec3( 1.0 );
#endif
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Ph=`
uniform vec3 uSunDir;
uniform vec3 uLight;
uniform vec3 uShade;
uniform vec3 uCore;
varying vec3 vN;
varying vec3 vV;
varying vec3 vCol;
void main() {
  vec3 n = normalize( vN );
  vec3 l = normalize( uSunDir * vec3( 1.0, 0.55, 1.0 ) );
  float ndl = dot( n, l );
  float lit = smoothstep( 0.16, 0.22, ndl ) * smoothstep( -0.5, -0.44, n.y );
  float core = 1.0 - smoothstep( -0.38, -0.32, ndl );
  vec3 col = mix( vCol * uShade, vCol, lit );
  col = mix( col, vCol * uCore, core );
  float rim = pow( 1.0 - max( dot( n, normalize( vV ) ), 0.0 ), 3.0 );
  col += vec3( 0.16 ) * step( 0.55, rim ) * lit;
  gl_FragColor = vec4( col * uLight, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Fh=`
uniform float uInkWidth;
uniform float uInkPx;
uniform vec2 uInkPxRange;
attribute vec3 inkNormal;
attribute float inkK;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4( position, 1.0 );
  vec3 nw = normalize( mat3( m ) * inkNormal );
  float px = max( -( viewMatrix * wp ).z, 0.1 ) * uInkPx;
  wp.xyz += nw * clamp( uInkWidth, uInkPxRange.x * px, uInkPxRange.y * px ) * inkK;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Ih=`
uniform vec3 uInkColor;
uniform vec4 uInkNight;
void main() {
  gl_FragColor = vec4( uInkColor * ( 1.0 - uInkNight.x ), 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Lh=(e,t)=>{let n=e-1;return 1+n*n*((t+1)*n+t)},Rh=class{group=new tt;density=1;mesh;ink;colors;inkKs;inkAttr;t0=new Float32Array(Dh).fill(-1e9);fade=new Float32Array(Dh);out=new Float32Array(Dh).fill(1);size=new Float32Array(Dh);pos=new Float32Array(Dh*3);vel=new Float32Array(Dh*3);rise=new Float32Array(Dh);yaw=new Float32Array(Dh);col=new Float32Array(Dh*3);next=0;time=0;liveUntil=-1;seed=625341585;vfx;light;constructor(e){this.vfx=e,this.group.name=`toon-poof`;let t=Bn(new ie(1,x.detail).deleteAttribute(`uv`).deleteAttribute(`normal`));t.computeVertexNormals(),qi(t),this.inkKs=new Float32Array(Dh),this.inkAttr=new Ce(this.inkKs,1),this.inkAttr.setUsage(R),t.setAttribute(`inkK`,this.inkAttr);let n=new oe({name:`toon-poof`,uniforms:{uSunDir:W.uSunDir,uLight:{value:new z(1,1,1)},uShade:{value:new z(x.shade[0],x.shade[1],x.shade[2])},uCore:{value:new z(x.core[0],x.core[1],x.core[2])}},vertexShader:Nh,fragmentShader:Ph});this.light=n.uniforms.uLight.value,this.mesh=new Ke(t,n,Dh),this.mesh.name=`toon-poof`,this.mesh.instanceMatrix.setUsage(R),this.colors=new Float32Array(Dh*3).fill(1),this.mesh.instanceColor=new Ce(this.colors,3),this.mesh.instanceColor.setUsage(R),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.layers.disable(1);let r=new oe({name:`toon-poof-ink`,uniforms:{uInkWidth:{value:x.inkWidth},uInkPx:Gi.uInkPx,uInkPxRange:Gi.uInkPxRange,uInkColor:{value:new z(x.inkColor)},uInkNight:W.uNight},vertexShader:Fh,fragmentShader:Ih,side:1});this.ink=new Ke(t,r,Dh),this.ink.name=`toon-poof-ink`,this.ink.instanceMatrix=this.mesh.instanceMatrix,this.ink.frustumCulled=!1,this.ink.count=0,this.ink.layers.disable(1),this.group.add(this.mesh,this.ink),this.group.visible=!1}rnd(){let e=this.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.seed=e>>>0,this.seed/4294967296}rr(e,t){return e+(t-e)*this.rnd()}billow(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=this.next;this.next=(this.next+1)%Dh,this.t0[m]=this.time+l,this.fade[m]=Math.max(x.grow,s),this.out[m]=c,this.size[m]=r,this.pos[m*3]=e,this.pos[m*3+1]=t,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=a,this.vel[m*3+2]=o,this.rise[m]=p,this.yaw[m]=this.rnd()*6.2832,this.col[m*3]=u,this.col[m*3+1]=d,this.col[m*3+2]=f;let h=this.t0[m]+this.fade[m]+c;h>this.liveUntil&&(this.liveUntil=h)}puff(e,t,n,r,i,a,o,s,c,l,u,d){let f=s*x.fadeFrom;this.billow(e,t,n,r,i,a,o,f,s-f,c,l,u,d,x.rise*this.rr(.6,1.3))}burst(e,t,n,r,i,a,o,s=0,c=x.ring,l=!0){let u=x,d=u.cream[0],f=u.cream[1],p=u.cream[2],m=u.tint,h=Math.max(3,Math.round(c*this.density)),g=this.rnd()*6.2832,_=u.life;this.puff(e,t+.45*r,n,.58*r,0,.5*r,0,_*1.15,s,d,f,p);for(let c=0;c<h;c++){let l=g+c/h*6.2832+this.rr(-.3,.3),v=Math.cos(l),y=Math.sin(l),b=u.burstSpeed*r*this.rr(.75,1.2),x=c%4==1,S=x?d+(i-d)*m:d,C=x?f+(a-f)*m:f,w=x?p+(o-p)*m:p;this.puff(e+v*.32*r,t+this.rr(.25,.6)*r,n+y*.32*r,this.rr(.36,.48)*r,v*b,this.rr(.2,.9)*b,y*b,_*this.rr(.8,1.05),s+this.rr(.01,u.bloomStagger),S,C,w)}let v=this.rnd()*6.2832;this.puff(e+Math.cos(v)*.2*r,t+.9*r,n+Math.sin(v)*.2*r,this.rr(.18,.26)*r,Math.cos(v)*.6*r,1.6*r,Math.sin(v)*.6*r,_*.7,s+u.bloomStagger,d,f,p),l&&this.vfx.poofFx(e,t,n,r,s)}sweep(e,t,n,r,i,a,o,s=0){let c=x,l=Math.abs(t-e),u=Math.max(2,Math.round(l/(i*c.sweepGap))),d=Math.max(3,Math.round(u*Math.min(1,.45+.55*this.density))),f=i*Math.sqrt(u/d),p=(t-e)/d,m=p>=0?1:-1,h=c.sweepPush*f,g=c.cream[0],_=c.cream[1],v=c.cream[2];for(let t=0;t<d;t++){let i=(t+.5)/d,l=e+p*(t+.5),u=i*a,y=o+i*a*c.sweepTrail,b=u+this.rr(0,.025),x=f*this.rr(.86,1.12);this.billow(l+this.rr(-.12,.12)*f,n+.72*x,r+this.rr(-.15,.15)*f,x,m*this.rr(.2,.6)*h,this.rr(.1,.4)*h,this.rr(.3,.7)*h,y-b+this.rr(0,.05),c.sweepOut*this.rr(.85,1.15),b-s,g,_,v,c.sweepRise*this.rr(.6,1.4)),b=u+this.rr(.03,.07),x=f*this.rr(.56,.74),this.billow(l+p*this.rr(.4,.6),n+(1.5+this.rr(0,.15))*f,r-.3*f,x,m*this.rr(.3,.8)*h,this.rr(.3,.7)*h,this.rr(.1,.4)*h,y-b+this.rr(-.05,.01),c.sweepOut*this.rr(.75,.95),b-s,g,_,v,c.sweepRise*this.rr(.5,1)),t%2==0&&(b=u+this.rr(.01,.04),x=f*this.rr(.4,.52),this.billow(l+this.rr(-.25,.25)*p,n+.35*f,r+.8*f,x,m*this.rr(.2,.5)*h,0,this.rr(.6,1)*h,y-b+this.rr(.02,.08),c.sweepOut*this.rr(.85,1.1),b-s,g,_,v,c.sweepRise*this.rr(.4,.9)))}}update(e,t){if(this.time=e,this.light.copy(t),e>this.liveUntil){this.group.visible&&(this.group.visible=!1,this.mesh.count=this.ink.count=0);return}let n=x,r=n.drag,i=0;for(let t=0;t<Dh;t++){let a=e-this.t0[t],o=this.fade[t],s=o+this.out[t];if(a<=0||a>=s)continue;let c=Math.min(1,a/n.grow),l=Lh(c,n.overshoot),u=1;if(c<1)u=1+n.stretch*Math.sin(Math.PI*c);else{let e=a-n.grow;u=1-n.wobble*Math.exp(-7*e)*Math.sin(17*e+this.yaw[t]),l*=1+n.boil*Math.min(1,e*4)*Math.sin(a*9+this.yaw[t]*3)}l*=1+n.swell*(a/s);let d=0,f=0;if(a>o){let e=(a-o)/this.out[t];l*=1-e*e*e,d=n.outLift*e*e,f=n.outTint*e}if(l<.01)continue;let p=this.size[t]*l,m=p/Math.sqrt(Math.max(.3,u)),h=(1-Math.exp(-r*a))/r,g=t*3;Ah.set(this.pos[g]+this.vel[g]*h,this.pos[g+1]+this.vel[g+1]*h+this.rise[t]*a+d*this.size[t],this.pos[g+2]+this.vel[g+2]*h),jh.set(m,p*u,m),kh.setFromAxisAngle(Mh,this.yaw[t]),Oh.compose(Ah,kh,jh),this.mesh.setMatrixAt(i,Oh),this.colors[i*3]=this.col[g]*(1+(n.shade[0]-1)*f),this.colors[i*3+1]=this.col[g+1]*(1+(n.shade[1]-1)*f),this.colors[i*3+2]=this.col[g+2]*(1+(n.shade[2]-1)*f),this.inkKs[i]=Math.min(1,l/n.inkFrom),i++}this.mesh.count=this.ink.count=i,this.group.visible=i>0,i>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.inkAttr.needsUpdate=!0)}},zh=wt,Bh=.3,Vh=1.5,Hh=[14698074,3833808,16052714],Uh=2240591;function Wh(){let e=document.createElement(`canvas`);e.width=256*zh.length,e.height=160;let t=e.getContext(`2d`);zh.forEach((e,n)=>{let r=n*256,i=t.createLinearGradient(0,0,0,160);i.addColorStop(0,`#fffaf0`),i.addColorStop(1,`#efe6d2`),t.fillStyle=i,t.fillRect(r,0,256,160),t.fillStyle=`#${Hh[n%Hh.length].toString(16).padStart(6,`0`)}`,t.fillRect(r,0,256,26),t.fillRect(r,134,256,26),t.fillStyle=`#${Uh.toString(16).padStart(6,`0`)}`,t.font=`bold 92px system-ui, "Segoe UI", Arial, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(String(e),r+128,84)});let n=new ke(e);return n.colorSpace=de,n.anisotropy=4,n}var Gh=class{group=new tt;frames;faces;constructor(){this.group.name=`anime-dressing`;let e=[],t=[],n=[],r=[],i=[],a=new Ne,o=new P().setFromAxisAngle(new V(1,0,0),-.52),s=new P,c=new P,l=new V(0,1,0),u=new V(1,1,1),d=new Ye(.14,1.1,.14),f=new Ye(1.7,1.05,.12),p=new fe(1.56,.92),m=new z(16052196),h=new z(5917244),g=0;zh.forEach((_,v)=>{for(let y of[-1,1]){let b=y*Jt,x=-27+_;s.setFromAxisAngle(l,-y*Bh),c.multiplyQuaternions(s,o);for(let t of[-.6,.6]){let n=d.clone(),r=new V(t,0,0).applyQuaternion(s);n.applyMatrix4(a.compose(new V(b+r.x,.55,x+r.z),s,u)),Kh(n,h),e.push(n),g+=n.getIndex().count}let S=new V(b,1.25,x+.05),C=f.clone();C.applyMatrix4(a.compose(S,c,u)),Kh(C,v%Hh.length===2?new z(14209732):m),e.push(C),g+=C.getIndex().count;let w=p.clone(),T=new V(0,0,.065).applyQuaternion(c).add(S);w.applyMatrix4(a.compose(T,c,u));let E=t.length/3,D=w.getAttribute(`position`),O=w.getAttribute(`normal`),k=w.getAttribute(`uv`);for(let e=0;e<D.count;e++)t.push(D.getX(e),D.getY(e),D.getZ(e)),r.push(O.getX(e),O.getY(e),O.getZ(e)),n.push((v+k.getX(e))/zh.length,k.getY(e));let A=w.getIndex();for(let e=0;e<A.count;e++)i.push(E+A.getX(e));w.dispose()}this.boardZ[v]=-27+_,this.frameEnd[v]=g,this.faceEnd[v]=i.length}),d.dispose(),f.dispose(),p.dispose(),this.frames=new F(qh(e),ja({vertexColors:!0,painted:!0})),this.frames.name=`yardage-frames`;let _=new Le;_.setAttribute(`position`,new I(new Float32Array(t),3)),_.setAttribute(`normal`,new I(new Float32Array(r),3)),_.setAttribute(`uv`,new I(new Float32Array(n),2)),_.setIndex(i),_.computeBoundingSphere(),this.faces=new F(_,ja({map:Wh()})),this.faces.name=`yardage-faces`;for(let e of[this.frames,this.faces])e.matrixAutoUpdate=!1,e.updateMatrix(),this.group.add(e);Qi(this.frames),Ji(this.frames,{width:.03,smoothAttr:!0,colorMix:.4,darken:.25}),this.followRange(),this.unsubscribe=at(()=>this.followRange())}boardZ=new Float32Array(zh.length);frameEnd=new Int32Array(zh.length);faceEnd=new Int32Array(zh.length);unsubscribe;shown=zh.length;followRange(){let e=0;for(;e<zh.length&&this.boardZ[e]<H.fenceZ-Vh;)e++;e!==this.shown&&(this.shown=e,this.frames.geometry.setDrawRange(0,e>0?this.frameEnd[e-1]:0),this.faces.geometry.setDrawRange(0,e>0?this.faceEnd[e-1]:0),this.group.visible=e>0)}dispose(){this.unsubscribe()}};function Kh(e,t){let n=e.getAttribute(`position`).count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r.set([t.r,t.g,t.b],e*3);e.setAttribute(`color`,new I(r,3)),e.deleteAttribute(`uv`)}function qh(e){let t=0,n=0;for(let r of e)t+=r.getAttribute(`position`).count,n+=r.getIndex().count;let r=new Float32Array(t*3),i=new Float32Array(t*3),a=new Float32Array(t*3),o=new Uint16Array(n),s=0,c=0;for(let t of e){r.set(t.getAttribute(`position`).array,s*3),i.set(t.getAttribute(`normal`).array,s*3),a.set(t.getAttribute(`color`).array,s*3);let e=t.getIndex();for(let t=0;t<e.count;t++)o[c+t]=e.getX(t)+s;s+=t.getAttribute(`position`).count,c+=e.count,t.dispose()}let l=new Le;return l.setAttribute(`position`,new I(r,3)),l.setAttribute(`normal`,new I(i,3)),l.setAttribute(`color`,new I(a,3)),l.setIndex(new I(o,1)),l.computeBoundingSphere(),l}var Jh=`
attribute vec4 aPos;      // ndc x, ndc y, direction (-1 left / +1 right; 0 = on-screen glint), level 0..1
attribute vec3 aColor;
uniform vec2 uPx;         // ndc units per drawing-buffer pixel
uniform float uSize;      // half size (px)
varying vec2 vQ;
varying vec3 vColor;
varying float vLevel;
varying float vDir;
void main() {
  vQ = position.xy;
  vColor = aColor;
  vLevel = aPos.w;
  vDir = aPos.z;
  float s = abs( aPos.z ) > 0.5 ? uSize * ( 0.75 + 0.35 * aPos.w ) : uSize * ( 0.55 + 0.45 * aPos.w );
  vec2 p = aPos.xy + position.xy * s * uPx;
  gl_Position = vec4( aPos.w > 0.003 ? p : vec2( 4.0 ), 0.0, 1.0 );
}
`,Yh=`
uniform float uTime;
varying vec2 vQ;
varying vec3 vColor;
varying float vLevel;
varying float vDir;
float seg( vec2 p, vec2 a, vec2 b ) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp( dot( pa, ba ) / dot( ba, ba ), 0.0, 1.0 );
  return length( pa - ba * h );
}
void main() {
  if ( abs( vDir ) < 0.5 ) {
    // WIND-UP GLINT: a 4-point sparkle (thin cross + soft core), warm white with a touch of the
    // shirt colour, twinkling faster towards impact
    vec2 q = vQ;
    float r2 = dot( q, q );
    float ax = abs( q.x );
    float ay = abs( q.y );
    float rays = exp( -ax * 16.0 ) * ( 1.0 - smoothstep( 0.1, 1.0, ay ) ) + exp( -ay * 16.0 ) * ( 1.0 - smoothstep( 0.1, 1.0, ax ) );
    float core = exp( -r2 * 14.0 );
    float tw = 0.8 + 0.2 * sin( uTime * ( 10.0 + 14.0 * vLevel ) );
    float g = clamp( rays * 0.85 + core, 0.0, 1.0 );
    float a = g * min( 1.0, vLevel * 1.4 ) * tw;
    if ( a < 0.004 ) discard;
    vec3 c = mix( vec3( 1.0, 0.96, 0.84 ), vColor, 0.25 * ( 1.0 - core ) );
    gl_FragColor = vec4( c, a );
    return;
  }
  // chevron ">" pointing towards the golfer (outwards), drawn as a thick rounded stroke
  vec2 q = vec2( vQ.x * vDir, vQ.y );
  vec2 tip = vec2( 0.42, 0.0 );
  float d = min( seg( q, vec2( -0.3, 0.62 ), tip ), seg( q, vec2( -0.3, -0.62 ), tip ) );
  float px = fwidth( d ) + 1e-4;
  float body = 1.0 - smoothstep( 0.17 - px, 0.17 + px, d );
  float ink = 1.0 - smoothstep( 0.27 - px, 0.27 + px, d );
  float halo = ( 1.0 - smoothstep( 0.27, 0.6, d ) ) * 0.35;
  // a light inner highlight along the stroke (painted, not flat)
  float hi = ( 1.0 - smoothstep( 0.0, 0.08, d ) ) * 0.35;
  vec3 col = mix( vColor, vec3( 1.0 ), hi );
  vec3 inkC = vec3( 0.08, 0.06, 0.14 );
  float pulse = 0.85 + 0.15 * sin( uTime * 18.0 );
  float a = max( body, max( ink, halo ) ) * min( 1.0, vLevel * 1.6 ) * mix( 1.0, pulse, vLevel );
  vec3 c = mix( mix( inkC, inkC * 0.6, 1.0 - ink ), col, body );
  if ( a < 0.004 ) discard;
  gl_FragColor = vec4( c, a );
}
`,Xh=new V,Zh=new V,Qh=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)},$h=class{scene=new M;camera=new T(-1,1,1,-1,0,1);material;pos;col;mesh;capacity;maxAspect=.9;enabled=!0;glint=!0;glintFromPx=44;glintFullPx=30;constructor(e=40){this.capacity=e;let t=new ne;t.setAttribute(`position`,new I(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]),this.pos=new Ce(new Float32Array(e*4),4),this.col=new Ce(new Float32Array(e*3),3),t.setAttribute(`aPos`,this.pos),t.setAttribute(`aColor`,this.col),t.instanceCount=e,this.material=new oe({name:`anime-chevrons`,uniforms:{uPx:{value:new Ve(.001,.001)},uSize:{value:20},uTime:{value:0}},vertexShader:Jh,fragmentShader:Yh,transparent:!0,depthTest:!1,depthWrite:!1,blending:1,toneMapped:!1}),this.mesh=new F(t,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}update(e,t,n,r,i,a,o,s,c){let l=this.material.uniforms;l.uPx.value.set(2/Math.max(1,a),2/Math.max(1,o)),l.uSize.value=13*s,l.uTime.value=c;let u=this.pos.array,d=this.col.array,f=this.enabled&&a/Math.max(1,o)<this.maxAspect,p=1-22*s*2/Math.max(1,a),m=o/(2*Math.max(.5,s)),h=14.95*s*2/Math.max(1,o),g=!1;for(let a=0;a<this.capacity;a++){let o=0;if(a<t&&n[a]>.01){let t=r[a*3],s=r[a*3+1],c=r[a*3+2];if(Xh.set(t,s,c).project(e),f&&Xh.z<1&&Math.abs(Xh.x)>1){o=n[a];let e=Xh.x>0?1:-1;u[a*4]=e*p,u[a*4+1]=Math.min(.9,Math.max(-.9,Xh.y)),u[a*4+2]=e,d[a*3]=i[a*3],d[a*3+1]=i[a*3+1],d[a*3+2]=i[a*3+2],g=!0}else if(this.glint&&Xh.z<1&&Math.abs(Xh.x)<=1&&Xh.y<1){let r=Xh.y,l=Xh.x;Zh.set(t,s-1.5,c).project(e);let f=1-Qh(((r-Zh.y)*m*(1/.75)-this.glintFullPx)/Math.max(1,this.glintFromPx-this.glintFullPx));o=n[a]*f,o>.003?(u[a*4]=l,u[a*4+1]=Math.min(.97,r+h),u[a*4+2]=0,d[a*3]=i[a*3],d[a*3+1]=i[a*3+1],d[a*3+2]=i[a*3+2],g=!0):o=0}}u[a*4+3]=o}return this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.mesh.visible=g,g}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},eg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}`,tg=`
uniform sampler2D uMap;
uniform vec4 uXf;
uniform vec4 uWf;
uniform vec3 uMul;
uniform vec3 uLift;
uniform vec3 uSkyLow;
uniform vec3 uSkyHigh;
uniform vec3 uTrees;
uniform vec3 uGrassNear;
uniform vec3 uGrassFar;
uniform vec4 uWorld;
uniform vec4 uShadow;
uniform vec3 uShadowK;
uniform float uFade;
varying vec2 vUv;
void main() {
  // the range round the cart (img px of the un-driven layout): sky, a tree line on the horizon, mown grass
  vec2 w = vec2( vUv.x * uWf.x + uWf.z, ( 1.0 - vUv.y ) * uWf.y + uWf.w ) * 1024.0;
  float dy = w.y - uWorld.x;
  vec3 col;
  if ( dy < 0.0 ) {
    col = mix( uSkyLow, uSkyHigh, smoothstep( 0.0, 640.0, -dy ) );
    float crown = uWorld.y * ( 0.75 + 0.35 * sin( w.x * 0.021 ) + 0.22 * sin( w.x * 0.057 + 1.3 ) + 0.14 * sin( w.x * 0.13 + 2.1 ) );
    col = mix( col, uTrees, smoothstep( crown + 1.5, crown - 1.5, -dy ) );
  } else {
    float near = smoothstep( 0.0, 900.0, dy );
    col = mix( uGrassFar, uGrassNear, sqrt( near ) );
    float lat = ( w.x - 512.0 ) / ( dy + 24.0 );
    float st = smoothstep( -0.4, 0.4, sin( lat * uWorld.z ) );
    col *= 1.0 + ( st - 0.5 ) * uWorld.w * smoothstep( 6.0, 140.0, dy );
    col = mix( col, uTrees, smoothstep( 3.0, 0.0, dy ) * 0.6 );
  }
  // the cart (its own transform: it shakes and drives off) + its contact shadow
  vec2 img = vec2( vUv.x * uXf.x + uXf.z, ( 1.0 - vUv.y ) * uXf.y + uXf.w );
  float e = length( ( img * 1024.0 - uShadow.xy ) / uShadow.zw );
  col *= 1.0 - uShadowK.x * smoothstep( 1.0, 0.55, e ) * ( 1.0 - uFade );
  vec2 c = clamp( img, 0.0, 1.0 );
  vec4 tex = texture2D( uMap, vec2( c.x, 1.0 - c.y ) );
  float inside = step( abs( img.x - 0.5 ), 0.5 ) * step( abs( img.y - 0.5 ), 0.5 );
  col = mix( col, tex.rgb, tex.a * inside * ( 1.0 - uFade ) );
  gl_FragColor = vec4( col * uMul + uLift, 1.0 );
}`,ng=e=>e<0?0:e>1?1:e,rg=class{active=!1;bgScene=new M;bgCam=new T(-1,1,1,-1,0,1);bgMat;layout=Qt();time=0;driveAt=-1;xf=[1,0,0,0];placeholder=new O(new Uint8Array([0,0,0,0]),1,1);constructor(){this.placeholder.needsUpdate=!0;let e=Cn,t=e=>new V((e>>16&255)/255,(e>>8&255)/255,(e&255)/255);this.bgMat=new oe({name:`shop-backdrop`,vertexShader:eg,fragmentShader:tg,uniforms:{uMap:{value:this.placeholder},uXf:{value:[1,1,0,0]},uWf:{value:[1,1,0,0]},uMul:{value:new V(1,1,1)},uLift:{value:new V},uSkyLow:{value:t(e.skyLow)},uSkyHigh:{value:t(e.skyHigh)},uTrees:{value:t(e.trees)},uGrassNear:{value:t(e.grassNear)},uGrassFar:{value:t(e.grassFar)},uWorld:{value:[e.horizonY,e.treeH,e.stripeFreq,e.stripeAmt]},uShadow:{value:[e.shadowC[0],e.shadowC[1],e.shadowR[0],e.shadowR[1]]},uShadowK:{value:new V(e.shadowK,0,0)},uFade:{value:0}},depthTest:!1,depthWrite:!1,toneMapped:!1});let n=new F(new fe(2,2),this.bgMat);n.frustumCulled=!1,this.bgScene.add(n),this.setTint(.86)}setBackdrop(e,t){new we().load(e,e=>{e.generateMipmaps=!0,e.minFilter=Ze,e.anisotropy=4,t.initTexture(e),this.bgMat.uniforms.uMap.value=e})}setLayout(e){this.layout=e}setTint(e){let t=an,n=0;for(;n<t.length-2&&e>t[n+1][0];)n++;let r=t[n],i=t[n+1],a=ng((e-r[0])/(i[0]-r[0])),o=(e,t,n)=>{n.set(e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a)};o(r[1],i[1],this.bgMat.uniforms.uMul.value),o(r[2],i[2],this.bgMat.uniforms.uLift.value)}open(e){this.setTint(e),this.driveAt=-1,this.bgMat.uniforms.uFade.value=0}driveOff(){this.driveAt=this.time}update(e){this.time+=e}render(e){let t=this.layout,n=this.xf;this.driveAt>=0?bn(t,this.time-this.driveAt,n):(n[0]=t.s,n[1]=t.ox,n[2]=t.oy,n[3]=0);let r=nn*n[0],i=nn*t.s,a=this.bgMat.uniforms.uWf.value;a[0]=t.W/i,a[1]=t.H/i,a[2]=-t.ox/i,a[3]=-t.oy/i;let o=this.bgMat.uniforms.uXf.value;o[0]=t.W/r,o[1]=t.H/r,o[2]=-n[1]/r,o[3]=-n[2]/r,this.bgMat.uniforms.uFade.value=n[3];let s=e.autoClear;e.setRenderTarget(null),e.autoClear=!0,e.render(this.bgScene,this.bgCam),e.autoClear=s}compile(e){let t=this.layout,n=Qt();n.W=64,n.H=64,n.s=64/nn,this.layout=n;try{this.render(e)}finally{this.layout=t}}},ig=Math.PI/180,ag=Math.PI*2,og={width:q.driver.ink,colorMix:0,smoothAttr:!0},sg=[`Spine`,`Spine1`,`Spine2`,`LeftShoulder`,`RightShoulder`,`LeftArm`,`RightArm`,`LeftArmHalf`,`RightArmHalf`],cg=[`Neck`,`Head`,`LeftHand`,`RightHand`,`LeftForeArm`,`RightForeArm`,`LeftForeArmHalf`,`RightForeArmHalf`,`LeftForeArmTwist`,`RightForeArmTwist`],lg=[`LeftFoot`,`RightFoot`,`LeftToeBase`,`RightToeBase`],ug=class{root=new tt;mat;holder=[];ready=!1;steering=null;asset=null;q=new Float32Array;skin=new Float32Array;scratch=null;hipsRest=new Float32Array(3);bones={neck:0,head:0};arms=[];shoulderRig=new V;ox=0;oy=0;oz=0;pos=new Float32Array;nrm=new Float32Array;ink=new Float32Array;count=0;posAttr=null;nrmAttr=null;inkAttr=null;v1=new V;v2=new V;v3=new V;v4=new V;qa=new P;qd=new P;qA=new P;qB=new P;qI=new P;qH=new P;constructor(){this.root.name=`caddyDriver`,this.mat=ja({vertexColors:!0}),this.mat.name=`caddyDriver`;let e=new Le;e.setAttribute(`position`,new I(new Float32Array([0,0,0,.01,0,0,0,.01,0]),3));let t=new Float32Array([0,0,1,0,0,1,0,0,1]);e.setAttribute(`normal`,new I(t,3)),e.setAttribute(`inkNormal`,new I(t.slice(),3)),e.setAttribute(`color`,new I(new Float32Array([1,1,1,1,1,1,1,1,1]),3));let n=new F(e,this.mat);n.name=`caddyDriver_placeholder`,n.visible=!1,this.root.add(n);let r=Ji(n,og);r.visible=!1,this.holder.push(n,r)}build(e,t){if(this.ready)return;let n=q.driver,r=e.rig,i=e.pose,a=i.bones,o=e=>{let t=r.keys.indexOf(e);if(t<0)throw Error(`caddy driver: golfer rig has no '${e}'`);return t},s=n.scale,c=o(`Hips`);for(let e=0;e<3;e++)this.hipsRest[e]=i.restWorld[c*3+e];let l=o(`LeftUpLeg`),u=i.restWorld[c*3+1]-i.restWorld[l*3+1];this.ox=n.seatX-s*this.hipsRest[0],this.oy=n.seatTop+n.hipRise+u*s-s*this.hipsRest[1],this.oz=n.hipZ-s*this.hipsRest[2];let d=this.q=new Float32Array(a*4);for(let e=0;e<a;e++)d[e*4+3]=1;let f=n.reclineDeg*ig;this.rotX(c,-f),this.rotX(o(`Spine`),f*.4),this.rotX(o(`Spine1`),f*.35),this.rotX(o(`Spine2`),f*.25);let p=this.scratch=Yo(a);this.skin=new Float32Array(a*16),Xo(i,d,this.hipsRest,0,this.skin,p);let m=(e,t,n,r,a,s)=>{let c=o(e),l=o(t),u=o(n),d=i.restWorld,f=new V(d[l*3]-d[c*3],d[l*3+1]-d[c*3+1],d[l*3+2]-d[c*3+2]),m=new V(d[u*3]-d[l*3],d[u*3+1]-d[l*3+1],d[u*3+2]-d[l*3+2]),h=f.length(),g=m.length(),_=o(s);return{a:c,b:l,c:u,ha:o(r),hb:o(a),len1:h,len2:g,u0:f.normalize(),f0:m.normalize(),sa:new V(p.wp[c*3],p.wp[c*3+1],p.wp[c*3+2]),qp:new P(p.wq[_*4],p.wq[_*4+1],p.wq[_*4+2],p.wq[_*4+3]),qb:new P}},h=m(`LeftUpLeg`,`LeftLeg`,`LeftFoot`,`LeftUpLegHalf`,`LeftLegHalf`,`Hips`),g=m(`RightUpLeg`,`RightLeg`,`RightFoot`,`RightUpLegHalf`,`RightLegHalf`,`Hips`),_=m(`LeftArm`,`LeftForeArm`,`LeftHand`,`LeftArmHalf`,`LeftForeArmHalf`,`LeftShoulder`),v=m(`RightArm`,`RightForeArm`,`RightHand`,`RightArmHalf`,`RightForeArmHalf`,`RightShoulder`);this.arms=[_,v],this.shoulderRig.copy(v.sa);let y=(n.floorY-this.oy)/s+i.restWorld[o(`LeftFoot`)*3+1],b=-9*ig;for(let[e,t]of[[h,1],[g,-1]])this.solve(e,e.sa.x+t*n.footSplay,y,(n.footZ-this.oz)/s,t*.15,.1,1),this.qA.setFromAxisAngle(this.v1.set(1,0,0),b),this.qB.copy(e.qb).invert().multiply(this.qA),this.setQ(e.c,this.qB);this.bones={neck:o(`Neck`),head:o(`Head`)};let x=e.lods[1],S=x.bodyVertexCount;this.count=S;let C=new Float32Array(S*3),w=new Float32Array(a*3),T=new z,E=(e,t)=>{T.setHex(t);for(let t of e){let e=r.keys.indexOf(t);e>=0&&T.toArray(w,e*3)}};T.setHex(n.pants);for(let e=0;e<a;e++)T.toArray(w,e*3);E(sg,n.shirt),E(cg,n.skin),E(lg,n.shoes);let D=this.bones.head,O=i.restWorld[D*3+1]+.07,k=O+.03,A=new z(n.skin),j=new z(n.cap);for(let e=0;e<S;e++){let t=0,n=0,r=0;for(let i=0;i<4;i++){let a=x.skinWeight[e*4+i];if(a===0)continue;let o=x.skinIndex[e*4+i];if(o===D){let i=(x.position[e*3+1]-O)/(k-O);i=i<0?0:i>1?1:i,i=i*i*(3-2*i),t+=a*(A.r+(j.r-A.r)*i),n+=a*(A.g+(j.g-A.g)*i),r+=a*(A.b+(j.b-A.b)*i)}else t+=a*w[o*3],n+=a*w[o*3+1],r+=a*w[o*3+2]}C[e*3]=t,C[e*3+1]=n,C[e*3+2]=r}let ee=[];for(let e=0;e<x.index.length;e+=3)x.index[e]<S&&x.index[e+1]<S&&x.index[e+2]<S&&ee.push(x.index[e],x.index[e+1],x.index[e+2]);this.pos=new Float32Array(S*3),this.nrm=new Float32Array(S*3),this.ink=new Float32Array(S*3);let M=new Le;this.posAttr=new I(this.pos,3).setUsage(R),this.nrmAttr=new I(this.nrm,3).setUsage(R),this.inkAttr=new I(this.ink,3).setUsage(R),M.setAttribute(`position`,this.posAttr),M.setAttribute(`normal`,this.nrmAttr),M.setAttribute(`inkNormal`,this.inkAttr),M.setAttribute(`color`,new I(C,3)),M.setIndex(new I(new Uint16Array(ee),1));let te=new F(M,this.mat);te.name=`caddyDriver`,te.frustumCulled=!1,this.root.add(te),Ji(te,og),this.asset=e,this.steering=t,this.ready=!0,this.update(0);for(let e of this.holder)this.root.remove(e),e.geometry.dispose();this.holder.length=0}rotX(e,t){this.qA.setFromAxisAngle(this.v1.set(1,0,0),t),this.setQ(e,this.qA)}setQ(e,t){t.toArray(this.q,e*4)}solve(e,t,n,r,i,a,o){let s=this.v1.set(t-e.sa.x,n-e.sa.y,r-e.sa.z),c=s.length();c<1e-6?(s.set(0,-1,0),c=1):s.multiplyScalar(1/c);let l=Math.abs(e.len1-e.len2)+1e-4,u=e.len1+e.len2-1e-4;c=c<l?l:c>u?u:c;let d=(e.len1*e.len1-e.len2*e.len2+c*c)/(2*c),f=Math.sqrt(Math.max(0,e.len1*e.len1-d*d)),p=this.v2.set(i,a,o);p.addScaledVector(s,-p.dot(s)),p.lengthSq()<1e-8?p.set(0,0,1):p.normalize();let m=this.v3.copy(e.sa).addScaledVector(s,d).addScaledVector(p,f),h=this.v2.copy(m).sub(e.sa).normalize(),g=this.qa.setFromUnitVectors(e.u0,h),_=this.v1.multiplyScalar(c).add(e.sa).sub(m).normalize(),v=this.v4.copy(e.f0).applyQuaternion(g),y=this.qd.setFromUnitVectors(v,_);e.qb.copy(y).multiply(g),this.qA.copy(e.qp).invert().multiply(g),this.qB.copy(g).invert().multiply(y).multiply(g),this.setQ(e.a,this.qA),this.setQ(e.b,this.qB),this.setQ(e.ha,this.qH.copy(this.qI.identity()).slerp(this.qA,.5)),this.setQ(e.hb,this.qH.copy(this.qI.identity()).slerp(this.qB,.5))}update(e){let t=this.asset,n=this.steering,r=this.scratch;if(!this.ready||!t||!n||!r)return;let i=q.driver,a=i.scale,o=this.q,s=i.lookDeg*ig*Math.sin(e*ag*i.lookHz);this.qA.setFromAxisAngle(this.v1.set(0,1,0),s*.45),this.setQ(this.bones.neck,this.qA),this.qA.setFromAxisAngle(this.v1.set(0,1,0),s*.55),this.setQ(this.bones.head,this.qA);let c=(e-i.waveDelay)/.25;c=c<0?0:c>1?1:c,c=c*c*(3-2*c);let l=i.gripDeg*ig;for(let t=0;t<2;t++){let r=t===0?1:-1,o=this.arms[t],s=this.v4.set(r*i.gripRadius*Math.cos(l),0,i.gripRadius*Math.sin(l)).applyQuaternion(n.quaternion).add(n.position),u=(s.x-this.ox)/a,d=(s.y-this.oy)/a,f=(s.z-this.oz)/a;if(t===1&&c>0){let t=e*ag*i.waveHz,n=this.shoulderRig.x-.1+.07*Math.sin(t),r=this.shoulderRig.y+.34+.03*Math.cos(t*.5),a=this.shoulderRig.z+.12;u+=(n-u)*c,d+=(r-d)*c,f+=(a-f)*c}this.solve(o,u,d,f,r*.6,-1,-.2)}Xo(t.pose,o,this.hipsRest,0,this.skin,r);let u=t.lods[1],d=u.position,f=u.normal,p=u.inkNormal,m=u.skinWeight,h=u.skinIndex,g=this.skin,_=this.pos,v=this.nrm,y=this.ink,b=this.ox,x=this.oy,S=this.oz;for(let e=0;e<this.count;e++){let t=e*3,n=d[t],r=d[t+1],i=d[t+2],o=f[t],s=f[t+1],c=f[t+2],l=p[t],u=p[t+1],C=p[t+2],w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,ee=0;for(let t=0;t<4;t++){let a=m[e*4+t];if(a===0)continue;let d=h[e*4+t]*16,f=g[d],p=g[d+1],_=g[d+2],v=g[d+4],y=g[d+5],b=g[d+6],x=g[d+8],S=g[d+9],M=g[d+10];w+=a*(f*n+v*r+x*i+g[d+12]),T+=a*(p*n+y*r+S*i+g[d+13]),E+=a*(_*n+b*r+M*i+g[d+14]),D+=a*(f*o+v*s+x*c),O+=a*(p*o+y*s+S*c),k+=a*(_*o+b*s+M*c),A+=a*(f*l+v*u+x*C),j+=a*(p*l+y*u+S*C),ee+=a*(_*l+b*u+M*C)}_[t]=w*a+b,_[t+1]=T*a+x,_[t+2]=E*a+S,v[t]=D,v[t+1]=O,v[t+2]=k,y[t]=A,y[t+1]=j,y[t+2]=ee}this.posAttr.needsUpdate=!0,this.nrmAttr.needsUpdate=!0,this.inkAttr.needsUpdate=!0}},dg=32,fg=24,pg=Math.PI/180,mg=q.steerMaxDeg*pg,hg=q.stopBearingDeg*pg,gg={width:q.ink,colorMix:0},_g=[`caddy_wheel_fl`,`caddy_wheel_fr`,`caddy_wheel_rl`,`caddy_wheel_rr`],vg=[.7,.09];function yg(e){let t=q.spokes,n=[],r=[],i=[],a=[],o=e*t.faceX,s=e*(t.faceX+t.lift);for(let c=0;c<t.count;c++){let l=c/t.count*Math.PI*2,u=Math.cos(l),d=Math.sin(l),f=-d,p=u,m=(e,t,n)=>[e,u*t+f*n,d*t+p*n],h=[m(o,t.r0,-t.halfWidth),m(o,t.r1,-t.halfWidth),m(o,t.r1,t.halfWidth),m(o,t.r0,t.halfWidth),m(s,t.r0,-t.halfWidth),m(s,t.r1,-t.halfWidth),m(s,t.r1,t.halfWidth),m(s,t.r0,t.halfWidth)],g=(e,t,o,s,c)=>{let l=n.length/3;for(let a of[e,t,o,s])n.push(h[a][0],h[a][1],h[a][2]),r.push(c[0],c[1],c[2]),i.push(vg[0],vg[1]);a.push(l,l+1,l+2,l,l+2,l+3)};g(4,5,6,7,[e,0,0]),g(0,1,5,4,[0,-p,f]),g(3,2,6,7,[0,p,-f]),g(0,3,7,4,[0,-u,-d]),g(1,2,6,5,[0,u,d])}let c=new Le;return c.setAttribute(`position`,new I(new Float32Array(n),3)),c.setAttribute(`normal`,new I(new Float32Array(r),3)),c.setAttribute(`uv`,new I(new Float32Array(i),2)),c.setIndex(a),c}var bg=-25.3+q.northGap,xg=(()=>{let e=[],t=Math.ceil((q.stopBearingMaxDeg-q.stopBearingDeg)/q.stopBearingStepDeg-1e-9);for(let n=0;n<=t;n++)e.push(Math.min(q.stopBearingDeg+n*q.stopBearingStepDeg,q.stopBearingMaxDeg)*pg);let n=Math.ceil((q.stopBearingDeg-q.stopBearingLowDeg)/q.stopBearingStepDeg-1e-9);for(let t=1;t<=n;t++)e.push(Math.max(q.stopBearingDeg-t*q.stopBearingStepDeg,q.stopBearingLowDeg)*pg);return new Float32Array(e)})(),Sg=64,Cg=32,wg=8,Tg=4,Eg=2,Dg=.9,Og=class e{root=new tt;mat;holder=[];model=null;wheels=[];driver=new ug;steering=null;steerRest=new P;spin=new P;axisY=new V(0,1,0);v=new V;w=new V;pbox=new He;hasPicker=!1;pdx=0;pdz=0;pspeed=0;pmax=0;since=0;bx0=0;bx1=0;bz0=0;bz1=0;latched=!1;p0x=0;p0z=0;p1x=0;p1z=0;p2x=0;p2z=0;p3x=0;p3z=0;c0x=0;c0z=0;c1x=0;c1z=0;c2x=0;c2z=0;c3x=0;c3z=0;pathPen=0;lut=new Float32Array(33);steer=0;side=1;bearing=0;handle=1;penalty=0;constructor(){this.root.name=`caddy`,this.root.visible=!1,this.root.add(this.driver.root);let e=new O(new Uint8Array([255,255,255,255]),1,1);e.colorSpace=de,e.flipY=!1,e.needsUpdate=!0,this.mat=ja({map:e,side:2}),this.mat.name=`caddy`;let t=new Le;t.setAttribute(`position`,new I(new Float32Array([0,0,0,.01,0,0,0,.01,0]),3)),t.setAttribute(`normal`,new I(new Float32Array([0,0,1,0,0,1,0,0,1]),3)),t.setAttribute(`uv`,new I(new Float32Array([0,0,1,0,0,1]),2));let n=new F(t,this.mat);n.name=`caddy_placeholder`,n.visible=!1,n.layers.enable(1),this.root.add(n);let r=Ji(n,gg);r.layers.disable(1),r.visible=!1,this.holder.push(n,r)}get loaded(){return this.model!==null}setDriver(e){if(this.steering===null)throw Error(`caddy driver: the cart model is not in yet`);this.driver.build(e[q.driver.sex],this.steering)}setModel(e,t){if(this.model)return;let n=e.clone(),r=_g.map(e=>oo(n,e)),i=oo(n,`caddy_steering`);this.mat.map=t,ao(n,{material:this.mat,ink:gg,cast:e=>e.name===`caddy_body`});for(let e of r)e.rotation.order=`YXZ`,this.wheels.push(e);this.steering=i,this.steerRest.copy(i.quaternion);let a=[yg(1),yg(-1)];for(let e of r){let t=new F(a[+(e.position.x<0)],this.mat);t.name=`caddy_spokes`,oo(n,`${e.name}_mesh`).add(t)}for(let e of this.holder)this.root.remove(e),e.geometry.dispose();this.holder.length=0,this.root.add(n),this.model=n}update(e,t,n,r,i,a){let o=e?e.phaseTime:0,s=rn.happySeconds+q.startDelay;if(this.model===null||e===null||e.phase!==`cleared`||!e.shopAfter||o<s){this.root.visible&&(this.root.visible=!1),this.latched=!1;return}if(!this.latched){let e=n.holeRadius??.8;this.since=o-s,this.pickerBox(i,a,t.x,t.z,e),this.latch(t.x,t.z,e,r)}this.root.visible=!0;let c=Math.min(1,(o-s)/q.driveSeconds),l=1-(1-c)*(1-c),u=1-l,d=u*u*u*this.p0x+3*u*u*l*this.p1x+3*u*l*l*this.p2x+l*l*l*this.p3x,f=u*u*u*this.p0z+3*u*u*l*this.p1z+3*u*l*l*this.p2z+l*l*l*this.p3z,p=3*u*u*(this.p1x-this.p0x)+6*u*l*(this.p2x-this.p1x)+3*l*l*(this.p3x-this.p2x),m=3*u*u*(this.p1z-this.p0z)+6*u*l*(this.p2z-this.p1z)+3*l*l*(this.p3z-this.p2z),h=6*u*(this.p2x-2*this.p1x+this.p0x)+6*l*(this.p3x-2*this.p2x+this.p1x),g=6*u*(this.p2z-2*this.p1z+this.p0z)+6*l*(this.p3z-2*this.p2z+this.p1z);this.root.position.set(d,0,f),this.root.rotation.set(0,Math.atan2(p,m),0);let _=l*dg,v=Math.min(31,Math.floor(_)),y=(this.lut[v]+(this.lut[v+1]-this.lut[v])*(_-v))/q.wheelRadius,b=p*p+m*m;if(c<1&&b>1e-8){let e=(m*h-p*g)/(b*Math.sqrt(b));this.steer=Math.max(-mg,Math.min(mg,Math.atan(q.wheelbase*e)))}for(let e=0;e<2;e++)this.wheels[e].rotation.set(y,this.steer,0);for(let e=2;e<4;e++)this.wheels[e].rotation.set(y,0,0);let x=this.steering,S=this.steer*q.steeringRatio;x&&x.quaternion.multiplyQuaternions(this.steerRest,this.spin.setFromAxisAngle(this.axisY,S)),this.driver.ready&&this.driver.update(o-s)}pickerBox(e,t,n,r,i){let a=this.pbox.setFromObject(e.root);if(this.hasPicker=!a.isEmpty(),!this.hasPicker)return;a.min.x-=q.pickerClear,a.min.z-=q.pickerClear,a.max.x+=q.pickerClear,a.max.z+=q.pickerClear,this.pdx=Math.sin(t.heading),this.pdz=Math.cos(t.heading),this.pspeed=t.blocked?0:Math.max(0,t.speed),this.pmax=1/0;let o=n-t.x,s=r-t.z,c=o*this.pdx+s*this.pdz;c>0&&Math.abs(o*this.pdz-s*this.pdx)<1.5+i&&(this.pmax=Math.max(0,c-(3.4+i)))}pickerAt(e){return Math.min(this.pspeed*Math.max(0,e-this.since),this.pmax)}static timeAt(e){return(1-Math.sqrt(Math.max(0,1-e)))*q.driveSeconds}latch(e,t,n,r){this.latched=!0,this.steer=0,r.updateMatrixWorld();let i=n+q.stopGap+q.noseZ,a=e+(i+q.noseZ)*Math.cos(hg)>22-q.edgeClear?-1:1,o=1/0,s=q.handleScales;for(let n=0;n<xg.length&&o>0;n++){let c=xg[n];for(let n=0;n<2&&o>0;n++){let l=n===0?a:-a;for(let n=0;n<s.length&&o>0;n++){this.shape(e,t,i,l,c,s[n],r);let a=this.score(e,i,l,c,r,o);if(a<o&&(o=a,this.side=l,this.bearing=c,this.handle=s[n],this.p0x=this.c0x,this.p0z=this.c0z,this.p1x=this.c1x,this.p1z=this.c1z,this.p2x=this.c2x,this.p2z=this.c2z,this.p3x=this.c3x,this.p3z=this.c3z),this.pathPen===0)break}}}this.penalty=o;let c=this.p0x,l=this.p0z;this.lut[0]=0;for(let e=1;e<=dg;e++){let t=e/dg,n=1-t,r=n*n*n*this.p0x+3*n*n*t*this.p1x+3*n*t*t*this.p2x+t*t*t*this.p3x,i=n*n*n*this.p0z+3*n*n*t*this.p1z+3*n*t*t*this.p2z+t*t*t*this.p3z;this.lut[e]=this.lut[e-1]+Math.hypot(r-c,i-l),c=r,l=i}}shape(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);this.c3x=e+r*s*n,this.c3z=t-c*n;let l=this.v.set(this.c3x,0,this.c3z).project(o).y;this.w.setFromMatrixPosition(o.matrixWorld),this.v.set(r,l,.5).unproject(o).sub(this.w);let u=this.c3x,d=this.c3z;if(this.v.y<-1e-6){let e=-this.w.y/this.v.y;u=this.w.x+this.v.x*e,d=this.w.z+this.v.z*e}this.c0x=this.c3x+r*Math.max(r*(u-this.c3x)+q.offscreenMargin,q.minDrive),this.c0z=d;let f=q.handleOut*a*Math.hypot(this.c3x-this.c0x,this.c3z-this.c0z);this.c2x=this.c3x+r*s*f,this.c2z=this.c3z-c*f,this.c1x=this.c0x+(this.c2x-this.c0x)*q.handleIn,this.c1z=this.c0z+(this.c2z-this.c0z)*q.handleIn}score(t,n,r,i,a,o){let s=0,c=-r*Math.cos(i),l=Math.sin(i),u=t+r*(n+q.noseZ)*Math.cos(i);(r>0?u>22-q.edgeClear:u<-22+q.edgeClear)&&(s+=wg);let d=this.overflow(this.c3x,this.c3z,c,l,a);if(d>0&&(s+=Tg+Math.min(d,1.5)),this.pathPen=0,s>=o)return s;let f=!1,p=!1,m=!1;for(let t=0;t<=fg;t++){let n=t/fg,r=1-n,i=r*r*r*this.c0x+3*r*r*n*this.c1x+3*r*n*n*this.c2x+n*n*n*this.c3x,a=r*r*r*this.c0z+3*r*r*n*this.c1z+3*r*n*n*this.c2z+n*n*n*this.c3z,o=3*r*r*(this.c1x-this.c0x)+6*r*n*(this.c2x-this.c1x)+3*n*n*(this.c3x-this.c2x),s=3*r*r*(this.c1z-this.c0z)+6*r*n*(this.c2z-this.c1z)+3*n*n*(this.c3z-this.c2z),c=Math.hypot(o,s);if(!(c<1e-9)&&(o/=c,s/=c,a-(q.noseZ*Math.abs(s)+q.halfWidth*Math.abs(o))<bg&&(f=!0),this.hasPicker&&!p)){let r=e.timeAt((t-1)/fg),c=t===fg?q.driveSeconds+q.holdSeconds:e.timeAt((t+1)/fg);this.overlaps(i,a,o,s,this.pickerAt(r),this.pickerAt(c))&&(n>=Dg?p=!0:m=!0)}}return f&&(this.pathPen+=Sg),p?this.pathPen+=Cg:m&&(this.pathPen+=Eg),s+this.pathPen}overlaps(e,t,n,r,i,a){let o=this.pbox;this.bx0=o.min.x+Math.min(this.pdx*i,this.pdx*a),this.bx1=o.max.x+Math.max(this.pdx*i,this.pdx*a),this.bz0=o.min.z+Math.min(this.pdz*i,this.pdz*a),this.bz1=o.max.z+Math.max(this.pdz*i,this.pdz*a);let s=(this.bx0+this.bx1)/2,c=(this.bz0+this.bz1)/2,l=(this.bx1-this.bx0)/2,u=(this.bz1-this.bz0)/2,d=q.noseZ,f=q.halfWidth,p=Math.abs(n),m=Math.abs(r),h=e-s,g=t-c;return!(Math.abs(h)>l+d*p+f*m||Math.abs(g)>u+d*m+f*p||Math.abs(h*n+g*r)>d+l*p+u*m||Math.abs(h*r-g*n)>f+l*m+u*p)}overflow(e,t,n,r,i){let a=1-q.frameInset,o=-1;for(let s=0;s<8;s++){let c=s&1?q.noseZ:-q.noseZ,l=s&2?q.halfWidth:-q.halfWidth;this.v.set(e+n*c+r*l,s&4?q.height:0,t+r*c-n*l).project(i),o=Math.max(o,Math.abs(this.v.x)-a,Math.abs(this.v.y)-a)}return o}};Wn.rangeLevel!==void 0&&$t(Wn.rangeLevel,!1);var kg=!1,Ag=()=>{},jg=new Promise(e=>Ag=e),Mg={...Gn,golferSpread:vt},Ng=document.getElementById(`game`),Pg=Zn(),Fg=Wn.dpr,Ig=Wn.quality===`auto`?b().store.load().gfx:Wn.quality,Lg=Ig===`auto`?null:Ig,Rg=null;try{let e=window.localStorage.getItem(r);e&&o.includes(e)?Rg=e:window.localStorage.getItem(`hin.anime.tier.v1`)===`lite`&&(Rg=`low`)}catch{}var zg=Rg??`high`,Bg=Lg??zg,Vg=l[Bg].lite,Hg=e=>{let t=Pg.isMobile?Math.min(window.devicePixelRatio||1,2):Zn().dpr;return Math.max(Math.min(t,1),t*l[e].dprScale)},Ug=Hg(Bg),Wg=Zn(Fg??Ug),Gg=Wn.antialias===void 0?Wg:{...Wg,antialias:Wn.antialias},Kg=ar({canvas:Ng,device:{...Gg,antialias:!1},shadows:!1}),qg=new Pm(Kg,{lite:Vg,msaa:Gg.antialias,shadowSize:Vg?1024:2048,renderScale:Wn.renderScale});qg.shadows.interval=l[Bg].shadowEvery;var Jg={hud:Wn.hud,dpr:Gg.dpr,autoDpr:Fg===void 0&&Gg.isMobile},Yg=new Il;Yg.setTop(Gg.dpr);var Xg=new M,Zg=new ir(Wn.seed),Qg=new vm({maxAnisotropy:Kg.capabilities.getMaxAnisotropy(),quality:Vg?`lite`:`high`,nearTreeLod:Wn.nearTreeLod??(Vg?2:1),impostors:Wn.impostors??o.some(e=>l[e].impostors),impostorLayer:Wn.impostorLayer});Qg.ready.then(()=>{Qg.foliage&&(Qg.foliage.impostorsEnabled=Wn.impostors??l[Bg].impostors)}),Xg.add(Qg.root),Qg.applyToScene(Xg),Xg.fog=null,Qg.applyToRenderer(Kg);var $g=new Ml({flagWidth:1.568,flagHeight:1.008,clothCols:11,clothRows:7});$g.rimGlow=0,$g.flagNightGlow=0,$g.flagDayLift=.2,$g.heroExposure=1,$g.params.shadowOpacity=0,Xg.add($g.root);var e_=new xs({renderer:Kg}),t_=new Gs(600),n_=new Ys(256),r_=new Lc(64),i_=new ac(Kg),a_=new tt;a_.name=`actors`,a_.add(e_.root,r_.root,n_.root,t_.root,i_.root),Xg.add(a_);var o_=new Gh;Xg.add(o_.group),e_.onRows=e=>{En(e)};{let e=Qg.floodlights.group.getObjectByName(`flood-towers`);e&&Ji(e,{width:.04,smoothAttr:!0}).layers.disable(1)}{let e=$g.root.getObjectByName(`holePoleRig`),t=$g.root.getObjectByName(`holeFlag`);e&&Qi(e),t&&Qi(t);let n=$g.root.getObjectByName(`holePole`);n&&Ji(n,{width:.022}).layers.disable(1),((e,t,n)=>{if(!e)return;let r=new F(e.geometry,new $e({color:t,opacity:n,blending:5,blendSrc:204,blendDst:205,depthWrite:!1,depthFunc:6,side:2,forceSinglePass:!0,toneMapped:!1,fog:!1}));r.name=`${e.name}-xray`,r.renderOrder=30,r.frustumCulled=!1,e.add(r)})($g.root.getObjectByName(`holeFlag`),Et.flag,.62)}var s_=null,c_=new Vl;Qg.setCamera(c_.camera);var l_=(e,t,n)=>Math.min(n,Math.max(t,e)),u_=new Ll;u_.teleport(l_(Wn.holeX??0,-20,20),l_(Wn.holeZ??-11,-19,H.holeMaxZ));var d_=new Ti(600),f_=new eu({speed:6});f_.placeOnFirstLane(u_.x-9);var p_=new rr(Ng);at((e,t)=>{t===`target`&&f_.setLaneEnd()});var Z={dt:0,time:0,dayT:Mg.dayT,darkness:0,floodlights:rn.startFloodlights,holeX:u_.x,holeZ:u_.z,holeVX:0,holeVZ:0},Q=new _u({store:b().store,frame:Z,hole:u_,ballSim:d_,picker:f_,input:p_,holeLook:$g,decals:r_,structure:e_,rng:Zg,setLightRadius:e=>Qg.params.playerLightRadius=e});Q.onPickerLevels=(e,t)=>i_.setLevels(e,t);var m_=Q,h_=new _f($g,Kg);h_.attach(Q.defence,Q.ai),a_.add(h_.root);var g_=new Og;a_.add(g_.root);var $=new Cf;a_.add($.root);var __=1,v_=1,y_={},b_=$.load().catch(e=>console.error(`[title] letters failed`,e));function x_(){let e=Q.run.savedRun;return!e||!(e.hole>1||e.score>0)?null:e.endless?p(`whereEndless`,{n:Math.max(1,e.hole-rn.holes)}):e.hole>rn.holes?p(`whereDone`):p(`whereHole`,{n:e.hole})}h(()=>$.setContinue(x_())),$.onStart=e=>{e===`continue`?Q.run.resume():Q.run.startNewRun()},$.onSettings=()=>Wv.onTitleSettings?.(),$.crowd=new Tf(Q.ai),$.startHole=e=>e===`continue`?Math.max(1,Q.run.savedRun?.hole??1):1,$.startLevel=e=>e===`continue`?en(Q.run.savedRun?.upgrades??y_,`rangeLength`):0;function S_(e){if(!Wv.titleMenuOpen?.()){if(!$.active&&m_===Q&&Q.run.phase===`title`)Q.run.startNewRun();else if($.idle){if(e){let t=Ng.getBoundingClientRect();$.press((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2,c_.camera)}else $.press(null,null,c_.camera);$.idle||(uv.ui(`confirm`),w_(null))}}}Ng.addEventListener(`pointerdown`,e=>{(e.pointerType!==`mouse`||e.button===0)&&S_(e)});var C_=!1;function w_(e){let t=!1;if(e&&e.pointerType===`mouse`&&$.active&&!Wv.titleMenuOpen?.()){let n=Ng.getBoundingClientRect();t=$.hover((e.clientX-n.left)/n.width*2-1,1-(e.clientY-n.top)/n.height*2,c_.camera)}else $.active&&$.hover(9,9,c_.camera);t!==C_&&(C_=t,Ng.style.cursor=t?`pointer`:``)}Ng.addEventListener(`pointermove`,w_),Ng.addEventListener(`pointerleave`,()=>w_(null)),window.addEventListener(`keydown`,e=>{if(e.repeat)return;let t=e.code===`Enter`||e.code===`Space`||e.code===`NumpadEnter`;$.active?!Wv.titleMenuOpen?.()&&$.idle&&Q.run.phase===`title`&&$.key(e.code)&&(e.preventDefault(),t&&!$.idle&&uv.ui(`confirm`)):t&&S_(null)});var T_={flag:Et.flag,lip:Et.flag};Et.golferTiers.forEach((e,t)=>T_[`tier${t}`]=e);var E_={};xt.forEach((e,t)=>E_[e]=Ht[t].marker);function D_(){xt.forEach((e,t)=>{let n=E_[e];n!==void 0&&(Ht[t].marker=n)}),n_.refreshStyles()}var O_={exposure:1,saturation:1,bloom:1,shafts:1,fog:1,vignette:1,shadowStrength:1,celSoftness:.06,rimWidth:.35,rimStrength:.55,terminatorLine:.4,inkMinPx:.9,inkMaxPx:2,brushValue:.22,paintDabs:.9,bladeFlecks:.12,windSheen:.22,sprinklers:.55,divots:.32,flagGlow:.9};k_(),c_.refresh();function k_(){let e=$g.materials.flag;e.color.setHex(T_.flag),e.emissive.setHex(T_.flag);let t=$g.materials.lip;if(t.color.setHex(T_.lip),t.emissive.setHex(T_.lip),s_)for(let e=0;e<s_.tierCount;e++){let t=T_[`tier${e}`];t!==void 0&&s_.setTierColor(e,t)}}var A_=Promise.all([os.create({capacity:dn,seed:7,lookScale:1,renderer:Kg}),jg]).then(([e])=>{s_=e,e.setCullCamera(c_.camera),m_.golfersReady(e),h_.setGolfers(e),e.setAllies(Q.defence.allies),k_(),a_.add(e.root),e.setQualityTier(Bg),e.setCasters(!qg.lite)}).catch(e=>console.error(`[look] golfer load failed`,e));function j_(e,t=!1){let n=Math.max(.5,Math.min(4,e));Jg.dpr=n,Kg.setPixelRatio(n),t||Yg.setTop(n),Yg.reset()}var M_=()=>Hg(Bg),N_=window.devicePixelRatio||1;function P_(){let e=window.devicePixelRatio||1;if(Fg!==void 0||e===N_)return;N_=e;let t=M_();Math.abs(t-Jg.dpr)>.001&&j_(t)}if(Fg===void 0&&typeof matchMedia==`function`){let e=null,t=()=>{e=matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`),e.addEventListener(`change`,()=>{P_(),t()},{once:!0})};t()}var F_=1;or(Ng,Kg,(e,t)=>{P_(),F_=e/t,c_.setAspect(F_),Yg.reset()}),c_.snapTo(u_.x,u_.z);var I_=Math.PI/180,L_=e=>{let t=e<0?0:e>1?1:e;return t*t*(3-2*t)};function R_(){let e=$g.sunDir.copy(Qg.day.lightDir),t=Math.sqrt(e.x*e.x+e.z*e.z),n=Math.tan(Mg.shadowMinElevDeg*I_);e.y<t*n&&(e.y=t*n),e.normalize();let r=Math.sin(Math.max(.5,Mg.shadowFadeElevDeg)*I_),i=Math.min(1,Math.max(0,(Qg.day.sunDir.y-r*.5)/(r*.5)));$g.shadowFade=i*i*(3-2*i);let a=lr.amount;$g.lampShadow=B_*a,a>0&&e.lerp(z_,Math.min(1,a*2)).normalize()}var z_=new V(0,1,-.85).normalize(),B_=.42,V_=[`sim`,`golfersAnim`,`ballsMarkers`,`vfx`,`worldDay`,`looksOther`,`render`,`ui`],H_=new Float64Array(V_.length),U_=0,W_=240,G_=1/240,K_=30,q_=0;function J_(e,t){Z.dt=e,Sn(e),m_.beforeLook(e,t),s_&&s_.advance(e*(m_.lookTimeScale??1)),m_.afterGolfers(e)}var Y_=0;function X_(e){Z.dt=e,Z.time+=e,c_.update(e,u_.x,u_.z);{let t=m_===Q&&Q.run.phase===`title`;$.active||(__=Qg.params.fogDistance/v_,t&&$.setContinue(x_()));let n=t?$.swoopAction:null,r=n===`continue`?Q.run.savedRun:null;$.baseScale=n===null?(m_.holeRadius??.8)/Dt:Fn(r?r.upgrades:y_),$.frameCamera(t,e,c_,u_.x,u_.z),p_.joystick.enabled=!$.active,v_=Math.max($.fogScale,c_.portraitZoom),Qg.params.fogDistance=__*v_,qg.fogScale=v_,$.active&&(Z.dayT=S.dayT+(Z.dayT-S.dayT)*$.blend)}m_===Q&&Tv.update(e,c_,Q.demo);{let t=m_===Q?Q.run:null;Ev.update(e,c_,t!==null&&t.phase===`victory`,t?t.phaseTime:0,u_.x,u_.z),Dv.update(e,t,u_.x,u_.z)}Z.floodlights=m_.floodlights&&!kg,Z.holeX=u_.x,Z.holeZ=u_.z,Z.holeVX=u_.vx,Z.holeVZ=u_.vz,Qg.update(Z),m_.adjustFrame?.(Z),R_();{let e=Math.min(1,Math.max(0,Z.darkness));W.uHole.value.set(u_.x,u_.z,(m_.holeRadius??.8)*$.holeScale,0),W.uPractical.value=L_((e-.25)/.45);let t=Z.dayT;$g.coolRim=.55*Math.max(0,1-Math.abs(t-.8)/.08)+.3*Math.max(0,1-Math.abs(t-.16)/.06)}$.update($g),$g.update(Z),s_&&s_.pose(m_.simTime),h_.update(Z,m_.simTime),$.updatePicker(f_.x,f_.z,f_.heading),i_.setPose($.pickX,$.pickZ,$.pickH),i_.setMoving($.pickerDriving||!f_.blocked&&f_.speed>0&&m_.pickerActive),i_.update(Z),g_.update(m_===Q?Q.run:null,u_,m_,c_.camera,i_,f_),r_.update(Z),d_.write(t_,n_,m_.simTime),d_.trails(sv,Y_,m_.simTime),Y_=m_.simTime,t_.update(Z),n_.update(Z),e_.update(Z)}function Z_(e,t){for(q_=Math.min(q_+e,K_*G_);q_>=G_;)J_(G_,t),q_-=G_;X_(e)}var Q_=new Qn,$_={samples:0,fpsAvg:0,fpsLow1:0,frameMsAvg:0,frameMsMax:0,cpuMsAvg:0},ev=0,tv=0,nv=0,rv=0,iv=!1;Qg.ready.then(()=>iv=!0);var av=null,ov=new Xm(Vg?160:320);Xg.add(ov.points);var sv=new Eh(null);sv.density=Vg?.6:1,Xg.add(sv.mesh);var cv=new Rh(sv);cv.density=sv.density,Xg.add(cv.group),$.poof=cv;var lv=new hh,uv=new _h(lv,u_);Q.onCue=(e,t,n,r)=>{(!Q.demo.running||Q.demo.loops===0)&&uv.cue(e,t,n),sv.cue(e,t,n,r)},lv.setMuted(Q.run.muted),lv.setVolume(`music`,Q.run.musicVol),lv.setVolume(`sfx`,Q.run.sfxVol),Q.run.addListener({muted:e=>lv.setMuted(e),volume:(e,t)=>lv.setVolume(e,t)}),lv.bindUnlock(),vn.scribble=(e,t)=>void lv.scribble(e,t);var dv=new rg;Un.look=dv,Un.sound=e=>uv.ui(e);var fv=-1,pv=new $h(dn);qg.overlay=pv;var mv=new z;function hv(){Bm.exposure=O_.exposure,Bm.saturation=O_.saturation,Bm.bloom=O_.bloom,Bm.shafts=O_.shafts,Bm.fog=O_.fog,Bm.vignette=O_.vignette,Bm.shadow=O_.shadowStrength;let e=W.uCel.value;e.x=O_.celSoftness,e.y=O_.rimWidth,e.w=O_.terminatorLine,Gi.uInkPxRange.value.set(O_.inkMinPx*Kg.getPixelRatio(),O_.inkMaxPx*Kg.getPixelRatio());let t=Qg.ground.material.uniforms;t.uPaint.value.set(O_.brushValue,O_.paintDabs,O_.bladeFlecks,O_.windSheen);let n=t.uDress.value;n.y=O_.sprinklers,n.w=O_.divots,$g.flagEdgeGlow=O_.flagGlow}function gv(){if(dv.active=m_===Q&&Q.run.phase===`shop`,dv.active){let e=performance.now();dv.update(fv<0?0:Math.min(.1,(e-fv)/1e3)),fv=e,hv(),dv.render(Kg),ev=Kg.info.render.calls,tv=Kg.info.render.triangles;return}fv=-1,hv();let e=Wm(Z.dayT,Qg.day,qg.state),t=Q.rewind.tint;t>0&&qm(qg.state,t);{let e=Z.dayT,t=Math.max(0,1-Math.abs(e-.79)/.09)+Math.max(0,1-Math.abs(e-.16)/.07)*.7,n=Math.min(1,(1-Z.darkness)*(.75+.4*t)),r=Math.min(1,Math.max(0,(Z.darkness-.3)/.45));mv.copy(W.uSunColor.value).add(W.uHemiSky.value).multiplyScalar(.85/Math.PI);let i=Ng.height/(2*Math.tan(c_.camera.fov*Math.PI/360));ov.update(c_.focusX,c_.focusZ,n,r,.4+2.4*Math.min(1,t),i,mv,1),sv.update(Z.time,mv),cv.update(Z.time,mv)}qg.shadows.strength=e.shadow,W.uCel.value.z=O_.rimStrength*e.rim,c_.camera.updateMatrixWorld(),s_&&pv.update(c_.camera,$.active?0:s_.count,s_.tells,s_.heads,s_.shirts,Ng.width,Ng.height,Kg.getPixelRatio(),Z.time),Yi(c_.camera.fov,Ng.height),qg.render(Xg,c_.camera),ev=qg.stats.calls,tv=qg.stats.triangles}var _v=0;function vv(e,t=!0){Bg=e;let n=l[e];qg.setLite(n.lite,2048),qg.shadows.interval=n.shadowEvery,Qg.ground.setLite(n.lite),Qg.foliage&&(Qg.foliage.impostorsEnabled=Wn.impostors??n.impostors),s_&&(s_.setQualityTier(e),s_.setCasters(!n.lite)),sv.density=n.lite?.6:1,cv.density=sv.density,t&&Fg===void 0&&j_(Hg(e)),Yg.reset()}var yv={active:Lg===null&&Bg!==`low`,start:-1,done:!1,fpsAvg:0,fpsLow1:0},bv={samples:0,fpsAvg:0,fpsLow1:0,frameMsAvg:0,frameMsMax:0,cpuMsAvg:0};function xv(e){if(!yv.active||yv.done||yv.start<0||e<yv.start+3e3||(yv.done=!0,!y.visible))return;Q_.compute(e,3e3,bv),yv.fpsAvg=bv.fpsAvg,yv.fpsLow1=bv.fpsLow1;let t=Math.min(.88*(Yg.refreshHz||60),80);bv.samples<30||bv.fpsAvg>=t&&bv.fpsLow1>=t*.8||(console.info(`[look] quality probe: ${bv.fpsAvg.toFixed(1)} fps (1% ${bv.fpsLow1.toFixed(1)}) < ${t.toFixed(0)} -> one tier down`),Sv())}function Sv(){let e=o.indexOf(Bg);if(e>=o.length-1)return!1;let t=o[e+1];console.info(`[look] quality tier ${Bg} -> ${t}`),vv(t),zg=t;try{window.localStorage.setItem(r,t)}catch{}return!0}Yg.beforeDrop=()=>Lg===null&&Sv();function Cv(e){Ig=e,Lg=e===`auto`?null:e;let t=Lg??zg;t!==Bg&&(console.info(`[look] graphics ${e}: tier ${Bg} -> ${t}`),vv(t)),yv.active=Lg===null&&Bg!==`low`,yv.done=!yv.active,yv.start=performance.now()+1e3,Q.run.gfxNote=l[Bg].lite!==Vg}Q.run.addListener({graphics:Cv});var wv=-1,Tv=new ql,Ev=new Zl,Dv=new Ql($g,sv,Ev),Ov=!1,kv=0;function Av(e){if(Fv)return;let t=performance.now();wv<0&&(wv=e);let n=e-wv;wv=e,Q.demo.running!==Ov&&(Ov=Q.demo.running,Ov?kv=q_:q_=kv),m_.frozen?Tv.active&&X_(Math.min(.1,Math.max(0,n/1e3))):Z_(Math.min(.1,Math.max(0,n/1e3)),e),Iv&&gv(),Wv.onFrame&&Wv.onFrame(),Wv.onPhaseTick&&Wv.onPhaseTick(),uv.frame(Math.min(.1,Math.max(0,n/1e3)),Q.run.phase,Z.darkness),uv.ticking(Math.min(.1,Math.max(0,n/1e3)),m_.frozen?0:Q.rewind.tickHz);let r=performance.now()-t;if(n>0&&Q_.record(n,r,e),Yg.observeFrame(n),xv(e),e-nv>=250&&(nv=e,Q_.compute(e,2e3,$_),av&&av(e)),e-rv>=2e3){rv=e,P_(),Yg.enabled=Jg.autoDpr;let t=Yg.evaluate(2,$_.fpsAvg,$_.frameMsMax,Kg.getPixelRatio(),y.visible);t>0&&(console.info(`[look] auto DPR ${Kg.getPixelRatio()} -> ${t} (fps ${$_.fpsAvg.toFixed(1)}, refresh ~${Yg.refreshHz} Hz)`),j_(t,!0))}}function jv(e,t,n){let r=[];e.traverse(e=>{e.visible||=(r.push(e),!0)});try{n?qg.compileForScene(e,t):Kg.compile(e,t)}finally{for(let e of r)e.visible=!1}}function Mv(){let e=Q.run,t=e.upgrades,n={};for(let[e,t]of Object.entries(Pn))n[e]=e===`rewind`?0:t.maxLevel??3;e.upgrades=n,Q.applyStats(!1);let r=Q.simTime;for(let e=0;e<8;e++)d_.fire(u_.x+e-4,4,u_.z-10,u_.x+e-4,u_.z-3,2.5,r,e);Q.patches.add(Kt.tar,u_.x-3,u_.z-2,r),Q.patches.add(Kt.ice,u_.x+3,u_.z-2,r);let i=Z.dayT;return()=>{d_.clear(),Q.patches.clear(),e.upgrades=t,Q.applyStats(!1),Z.dayT=i,X_(0),Yg.reset()}}function Nv(e,t,n){let r=[];e.traverse(e=>{e.visible||=(r.push(e),!0)});try{return n?qg.compileForSceneAsync(e,t):Kg.compileAsync(e,t)}finally{for(let e of r)e.visible=!1}}function Pv(){return new Promise(e=>{let t=!1,n=()=>{t||(t=!0,e())};requestAnimationFrame(n),window.setTimeout(n,50)})}var Fv=!1,Iv=!1;async function Lv(){let e=Mv();Fv=!0;try{let e=[];for(let t of[.5,.97])Z.dayT=t,X_(0),e.push(Nv(Xg,c_.camera,!0),Nv(pv.scene,pv.camera,!1));let t=Bg,n=new Set([l[t].lite]),r=[];for(let t of o)n.has(l[t].lite)||(n.add(l[t].lite),r.push(t),vv(t,!1),X_(0),e.push(Nv(Xg,c_.camera,!0)));Bg!==t&&vv(t,!1);let i=window.setInterval(()=>{let e=Kg.info.programs??[],t=0;for(let n of e)n.isReady()&&t++;e.length&&Wv.loadProgress?.(.9*t/e.length)},100);try{await Promise.all(e)}finally{window.clearInterval(i)}for(let e of[.5,.97])Z.dayT=e,X_(0),gv(),await Pv();dv.compile(Kg);for(let e of r)vv(e,!1),gv(),await Pv();Bg!==t&&vv(t,!1),Wv.loadProgress?.(1)}finally{e(),Fv=!1}}function Rv(){let e=Mv();try{for(let e of[.5,.97])Z.dayT=e,X_(0),jv(Xg,c_.camera,!0),jv(pv.scene,pv.camera,!1),gv();dv.compile(Kg);let e=Bg,t=new Set([l[e].lite]);for(let e of o)t.has(l[e].lite)||(t.add(l[e].lite),vv(e,!1),jv(Xg,c_.camera,!0),gv());Bg!==e&&vv(e,!1)}finally{e()}}var zv=Promise.all([Qg.ready,A_,b_]).then(Yn).then(async()=>{Yg.lockRefresh(),await Lv(),Iv=!0,yv.start=performance.now()+1e3}),Bv=!1;function Vv(){Bv||(Bv=!0,i(`fx`).then(()=>sv.setAtlas(u(`vfx/vfx.webp`)),e=>console.warn(`[assets] fx stage failed`,e)),i(`shop`).then(()=>{dv.setBackdrop(u(`shop/backdrop.webp`),Kg),ro(`shop/caddy.glb`).then(e=>{let t=e?io(`shop/caddy.webp`,Kg):null;if(e&&t){try{g_.setModel(e.scene,t)}catch(e){console.warn(`[assets] caddy skipped`,e);return}try{s_&&g_.setDriver(s_.assets)}catch(e){console.warn(`[assets] caddy driver skipped`,e)}}},e=>console.warn(`[assets] caddy failed`,e))},e=>console.warn(`[assets] shop stage failed`,e)),lv.prefetch())}var Hv=!1;function Uv(e){e!==Hv&&(Hv=e,wv=-1,Kg.setAnimationLoop(e?Av:null))}var Wv={canvas:Ng,scene:Xg,renderer:Kg,pipeline:qg,device:Gg,governor:Yg,world:Qg,holeLook:$g,structure:e_,balls:t_,markers:n_,decals:r_,pickerLook:i_,defenceLook:h_,ballSim:d_,picker:f_,hole:u_,input:p_,rng:Zg,director:Q,audio:lv,cueAudio:uv,vfx:sv,camera:c_,frame:Z,slice:Mg,perf:Jg,palette:T_,markerColors:E_,anime:O_,chevrons:pv,stats:Q_,statsOut:$_,tierProbe:yv,golfersReady:A_,maxGolfers:dn,forcedDpr:Fg,get golfers(){return s_},get worldReady(){return iv},get driver(){return m_},setDriver(e){m_=e},onFrame:null,onPhaseTick:null,loadProgress:null,titleLook:$,shopLook:dv,caddyLook:g_,onTitleSettings:null,titleMenuOpen:null,onReady:null,ready:zv,loadLateAssets:Vv,setRunning:Uv,get simHz(){return 240},get hits(){return m_.hits},get collected(){return m_.collected},get dayIndex(){return m_.dayIndex},get autoOn(){return m_.autoOn},get aspect(){return F_},get lastCalls(){return ev},get lastTris(){return tv},get happyFired(){return m_.happyFired},set happyFired(e){m_.happyFired=e},get sessionNoFlood(){return kg},set sessionNoFlood(e){kg=e},setDevTick(e){av=e},step:Z_,renderFrame:gv,prewarm:Rv,setDpr:j_,setQuality:vv,get tier(){return Bg},get graphics(){return Ig},setGraphics(e){Q.run.setGraphics(e)},placeGolfers(){m_.placeGolfers?.()},applyPalette:k_,applyMarkerColors:D_,profile(){return{frames:U_}},profileReset(){H_.fill(0),qg.cpuSplit.fill(0),U_=0,qg.timing=qg.timerSupported,qg.resetTimers()},set headroom(e){_v=Math.max(0,e)},get headroom(){return _v},resetSimClock(){q_=0},resetClock(){wv=-1},statsSoon(){nv=0},syncSize(){let e=Math.max(1,Math.round(Ng.clientWidth)),t=Math.max(1,Math.round(Ng.clientHeight));Kg.setSize(e,t,!1),F_=e/t,c_.setAspect(F_)},finishSetup(){Ag()},start(){Ag(),Uv(!0)}};export{V_ as PROF_KEYS,W_ as SIM_HZ,Wv as game};
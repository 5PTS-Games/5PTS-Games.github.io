const gc="attached",lf="detached";const Ot="srgb",tn="srgb-linear",Go="linear",dt="srgb";const _c="300 es";class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const yr=Math.PI/180,Ds=180/Math.PI;function In(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function zl(i,e){return(i%e+e)%e}function cf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function uf(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function hf(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function df(i,e=1){return e-Math.abs(zl(i,e*2)-e)}function ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gf(i,e){return i+Math.random()*(e-i)}function _f(i){return i*(.5-Math.random())}function xf(i){i!==void 0&&(xc=i);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(i){return i*yr}function yf(i){return i*Ds}function Mf(i){return(i&i-1)===0&&i!==0}function bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wf(i,e,t,n,s){const r=Math.cos,o=Math.sin,l=r(t/2),u=o(t/2),h=r((e+n)/2),d=o((e+n)/2),a=r((e-n)/2),c=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(l*d,u*a,u*c,l*h);break;case"YZY":i.set(u*c,l*d,u*a,l*h);break;case"ZXZ":i.set(u*a,u*c,l*d,l*h);break;case"XZX":i.set(l*d,u*m,u*f,l*h);break;case"YXY":i.set(u*f,l*d,u*m,l*h);break;case"ZYZ":i.set(u*m,u*f,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tf={DEG2RAD:yr,RAD2DEG:Ds,generateUUID:In,clamp:Ze,euclideanModulo:zl,mapLinear:cf,inverseLerp:uf,lerp:Mr,damp:hf,pingpong:df,smoothstep:ff,smootherstep:pf,randInt:mf,randFloat:gf,randFloatSpread:_f,seededRandom:xf,degToRad:vf,radToDeg:yf,isPowerOfTwo:Mf,ceilPowerOfTwo:bf,floorPowerOfTwo:Sf,setQuaternionFromProperEuler:wf,normalize:ot,denormalize:Cn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let u=n[s+0],h=n[s+1],d=n[s+2],a=n[s+3];const c=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=a;return}if(l===1){e[t+0]=c,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(a!==_||u!==c||h!==f||d!==m){let g=1-l;const p=u*c+h*f+d*m+a*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),S=Math.atan2(A,p*x);g=Math.sin(g*S)/A,l=Math.sin(l*S)/A}const v=l*x;if(u=u*g+c*v,h=h*g+f*v,d=d*g+m*v,a=a*g+_*v,g===1-l){const A=1/Math.sqrt(u*u+h*h+d*d+a*a);u*=A,h*=A,d*=A,a*=A}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,s,r,o){const l=n[s],u=n[s+1],h=n[s+2],d=n[s+3],a=r[o],c=r[o+1],f=r[o+2],m=r[o+3];return e[t]=l*m+d*a+u*f-h*c,e[t+1]=u*m+d*c+h*a-l*f,e[t+2]=h*m+d*f+l*c-u*a,e[t+3]=d*m-l*a-u*c-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(s/2),a=l(r/2),c=u(n/2),f=u(s/2),m=u(r/2);switch(o){case"XYZ":this._x=c*d*a+h*f*m,this._y=h*f*a-c*d*m,this._z=h*d*m+c*f*a,this._w=h*d*a-c*f*m;break;case"YXZ":this._x=c*d*a+h*f*m,this._y=h*f*a-c*d*m,this._z=h*d*m-c*f*a,this._w=h*d*a+c*f*m;break;case"ZXY":this._x=c*d*a-h*f*m,this._y=h*f*a+c*d*m,this._z=h*d*m+c*f*a,this._w=h*d*a-c*f*m;break;case"ZYX":this._x=c*d*a-h*f*m,this._y=h*f*a+c*d*m,this._z=h*d*m-c*f*a,this._w=h*d*a+c*f*m;break;case"YZX":this._x=c*d*a+h*f*m,this._y=h*f*a+c*d*m,this._z=h*d*m-c*f*a,this._w=h*d*a-c*f*m;break;case"XZY":this._x=c*d*a-h*f*m,this._y=h*f*a-c*d*m,this._z=h*d*m+c*f*a,this._w=h*d*a+c*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],u=t[9],h=t[2],d=t[6],a=t[10],c=n+l+a;if(c>0){const f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(d-u)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>l&&n>a){const f=2*Math.sqrt(1+n-l-a);this._w=(d-u)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(l>a){const f=2*Math.sqrt(1+l-n-a);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(u+d)/f}else{const f=2*Math.sqrt(1+a-n-l);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(u+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+o*l+s*h-r*u,this._y=s*d+o*u+r*l-n*h,this._z=r*d+o*h+n*u-s*l,this._w=o*d-n*l-s*u-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let l=o*e._w+n*e._x+s*e._y+r*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const u=1-l*l;if(u<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,l),a=Math.sin((1-t)*d)/h,c=Math.sin(t*d)/h;return this._w=o*a+this._w*c,this._x=n*a+this._x*c,this._y=s*a+this._y*c,this._z=r*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,u=e.w,h=2*(o*s-l*n),d=2*(l*t-r*s),a=2*(r*n-o*t);return this.x=t+u*h+o*a-l*d,this.y=n+u*d+l*h-r*a,this.z=s+u*a+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,u=t.z;return this.x=s*u-r*l,this.y=r*o-n*u,this.z=n*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new P,vc=new rn;class We{constructor(e,t,n,s,r,o,l,u,h){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,u,h)}set(e,t,n,s,r,o,l,u,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=r,d[5]=u,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],d=n[4],a=n[7],c=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],y=s[4],v=s[7],A=s[2],S=s[5],R=s[8];return r[0]=o*_+l*x+u*A,r[3]=o*g+l*y+u*S,r[6]=o*p+l*v+u*R,r[1]=h*_+d*x+a*A,r[4]=h*g+d*y+a*S,r[7]=h*p+d*v+a*R,r[2]=c*_+f*x+m*A,r[5]=c*g+f*y+m*S,r[8]=c*p+f*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],d=e[8];return t*o*d-t*l*h-n*r*d+n*l*u+s*r*h-s*o*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],d=e[8],a=d*o-l*h,c=l*u-d*r,f=h*r-o*u,m=t*a+n*c+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=a*_,e[1]=(s*h-d*n)*_,e[2]=(l*n-s*o)*_,e[3]=c*_,e[4]=(d*t-s*u)*_,e[5]=(s*r-l*t)*_,e[6]=f*_,e[7]=(n*u-h*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){const u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*l)+o+e,-s*h,s*u,-s*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new We;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ef(){const i=Rr("canvas");return i.style.display="block",i}const yc={};function Cr(i){i in yc||(yc[i]=!0,console.warn(i))}function Af(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Mc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const i={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tn]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const tt=Rf();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ji===void 0&&(Ji=Rr("canvas")),Ji.width=e.width,Ji.height=e.height;const s=Ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pf=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;const pa=new P;class It extends Ws{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,l=1023,u=1009,h=It.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=In(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pa).x}get height(){return this.source.getSize(pa).y}get depth(){return this.source.getSize(pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=300;It.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,h=u[0],d=u[4],a=u[8],c=u[1],f=u[5],m=u[9],_=u[2],g=u[6],p=u[10];if(Math.abs(d-c)<.01&&Math.abs(a-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+c)<.1&&Math.abs(a+_)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,v=(f+1)/2,A=(p+1)/2,S=(d+c)/4,R=(a+_)/4,I=(m+g)/4;return y>v&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=I/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(a-_)*(a-_)+(c-d)*(c-d));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(a-_)/x,this.z=(c-d)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class If extends Ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new It(s);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends If{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bh extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Gr.subVectors(this.max,Js),Qi.subVectors(e.a,Js),es.subVectors(e.b,Js),ts.subVectors(e.c,Js),ci.subVectors(es,Qi),ui.subVectors(ts,es),Ai.subVectors(Qi,ts);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ai.z,Ai.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ai.z,0,-Ai.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ai.y,Ai.x,0];return!ma(t,Qi,es,ts,Gr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Qi,es,ts,Gr))?!1:(Vr.crossVectors(ci,ui),t=[Vr.x,Vr.y,Vr.z],ma(t,Qi,es,ts,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Sn=new P,Hr=new qn,Qi=new P,es=new P,ts=new P,ci=new P,ui=new P,Ai=new P,Js=new P,Gr=new P,Vr=new P,Ri=new P;function ma(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ri.fromArray(i,r);const l=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),u=e.dot(Ri),h=t.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}const Nf=new qn,Qs=new P,ga=new P;class Xn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(ga)),this.expandByPoint(Qs.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new P,_a=new P,Wr=new P,hi=new P,xa=new P,qr=new P,va=new P;class ta{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_a.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),l=hi.dot(this.direction),u=-hi.dot(Wr),h=hi.lengthSq(),d=Math.abs(1-o*o);let a,c,f,m;if(d>0)if(a=o*u-l,c=o*l-u,m=r*d,a>=0)if(c>=-m)if(c<=m){const _=1/d;a*=_,c*=_,f=a*(a+o*c+2*l)+c*(o*a+c+2*u)+h}else c=r,a=Math.max(0,-(o*c+l)),f=-a*a+c*(c+2*u)+h;else c=-r,a=Math.max(0,-(o*c+l)),f=-a*a+c*(c+2*u)+h;else c<=-m?(a=Math.max(0,-(-o*r+l)),c=a>0?-r:Math.min(Math.max(-r,-u),r),f=-a*a+c*(c+2*u)+h):c<=m?(a=0,c=Math.min(Math.max(-r,-u),r),f=c*(c+2*u)+h):(a=Math.max(0,-(o*r+l)),c=a>0?r:Math.min(Math.max(-r,-u),r),f=-a*a+c*(c+2*u)+h);else c=o>0?-r:r,a=Math.max(0,-(o*c+l)),f=-a*a+c*(c+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,a),s&&s.copy(_a).addScaledVector(Wr,c),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,u;const h=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,s=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,s=(e.min.x-c.x)*h),d>=0?(r=(e.min.y-c.y)*d,o=(e.max.y-c.y)*d):(r=(e.max.y-c.y)*d,o=(e.min.y-c.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),a>=0?(l=(e.min.z-c.z)*a,u=(e.max.z-c.z)*a):(l=(e.max.z-c.z)*a,u=(e.min.z-c.z)*a),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){xa.subVectors(t,e),qr.subVectors(n,e),va.crossVectors(xa,qr);let o=this.direction.dot(va),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;hi.subVectors(this.origin,e);const u=l*this.direction.dot(qr.crossVectors(hi,qr));if(u<0)return null;const h=l*this.direction.dot(xa.cross(hi));if(h<0||u+h>o)return null;const d=-l*hi.dot(va);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,s,r,o,l,u,h,d,a,c,f,m,_,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,u,h,d,a,c,f,m,_,g)}set(e,t,n,s,r,o,l,u,h,d,a,c,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=l,p[13]=u,p[2]=h,p[6]=d,p[10]=a,p[14]=c,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),a=Math.sin(r);if(e.order==="XYZ"){const c=o*d,f=o*a,m=l*d,_=l*a;t[0]=u*d,t[4]=-u*a,t[8]=h,t[1]=f+m*h,t[5]=c-_*h,t[9]=-l*u,t[2]=_-c*h,t[6]=m+f*h,t[10]=o*u}else if(e.order==="YXZ"){const c=u*d,f=u*a,m=h*d,_=h*a;t[0]=c+_*l,t[4]=m*l-f,t[8]=o*h,t[1]=o*a,t[5]=o*d,t[9]=-l,t[2]=f*l-m,t[6]=_+c*l,t[10]=o*u}else if(e.order==="ZXY"){const c=u*d,f=u*a,m=h*d,_=h*a;t[0]=c-_*l,t[4]=-o*a,t[8]=m+f*l,t[1]=f+m*l,t[5]=o*d,t[9]=_-c*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const c=o*d,f=o*a,m=l*d,_=l*a;t[0]=u*d,t[4]=m*h-f,t[8]=c*h+_,t[1]=u*a,t[5]=_*h+c,t[9]=f*h-m,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const c=o*u,f=o*h,m=l*u,_=l*h;t[0]=u*d,t[4]=_-c*a,t[8]=m*a+f,t[1]=a,t[5]=o*d,t[9]=-l*d,t[2]=-h*d,t[6]=f*a+m,t[10]=c-_*a}else if(e.order==="XZY"){const c=o*u,f=o*h,m=l*u,_=l*h;t[0]=u*d,t[4]=-a,t[8]=h*d,t[1]=c*a+_,t[5]=o*d,t[9]=f*a-m,t[2]=m*a-f,t[6]=l*d,t[10]=_*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Uf)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),di.crossVectors(n,ln),di.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),di.crossVectors(n,ln)),di.normalize(),Xr.crossVectors(ln,di),s[0]=di.x,s[4]=Xr.x,s[8]=ln.x,s[1]=di.y,s[5]=Xr.y,s[9]=ln.y,s[2]=di.z,s[6]=Xr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],d=n[1],a=n[5],c=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],A=n[15],S=s[0],R=s[4],I=s[8],M=s[12],w=s[1],T=s[5],L=s[9],N=s[13],U=s[2],z=s[6],H=s[10],$=s[14],B=s[3],te=s[7],J=s[11],ue=s[15];return r[0]=o*S+l*w+u*U+h*B,r[4]=o*R+l*T+u*z+h*te,r[8]=o*I+l*L+u*H+h*J,r[12]=o*M+l*N+u*$+h*ue,r[1]=d*S+a*w+c*U+f*B,r[5]=d*R+a*T+c*z+f*te,r[9]=d*I+a*L+c*H+f*J,r[13]=d*M+a*N+c*$+f*ue,r[2]=m*S+_*w+g*U+p*B,r[6]=m*R+_*T+g*z+p*te,r[10]=m*I+_*L+g*H+p*J,r[14]=m*M+_*N+g*$+p*ue,r[3]=x*S+y*w+v*U+A*B,r[7]=x*R+y*T+v*z+A*te,r[11]=x*I+y*L+v*H+A*J,r[15]=x*M+y*N+v*$+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],u=e[9],h=e[13],d=e[2],a=e[6],c=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*u*a-s*h*a-r*l*c+n*h*c+s*l*f-n*u*f)+_*(+t*u*f-t*h*c+r*o*c-s*o*f+s*h*d-r*u*d)+g*(+t*h*a-t*l*f-r*o*a+n*o*f+r*l*d-n*h*d)+p*(-s*l*d-t*u*a+t*l*c+s*o*a-n*o*c+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],h=e[7],d=e[8],a=e[9],c=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=a*g*h-_*c*h+_*u*f-l*g*f-a*u*p+l*c*p,y=m*c*h-d*g*h-m*u*f+o*g*f+d*u*p-o*c*p,v=d*_*h-m*a*h+m*l*f-o*_*f-d*l*p+o*a*p,A=m*a*u-d*_*u-m*l*c+o*_*c+d*l*g-o*a*g,S=t*x+n*y+s*v+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=x*R,e[1]=(_*c*r-a*g*r-_*s*f+n*g*f+a*s*p-n*c*p)*R,e[2]=(l*g*r-_*u*r+_*s*h-n*g*h-l*s*p+n*u*p)*R,e[3]=(a*u*r-l*c*r-a*s*h+n*c*h+l*s*f-n*u*f)*R,e[4]=y*R,e[5]=(d*g*r-m*c*r+m*s*f-t*g*f-d*s*p+t*c*p)*R,e[6]=(m*u*r-o*g*r-m*s*h+t*g*h+o*s*p-t*u*p)*R,e[7]=(o*c*r-d*u*r+d*s*h-t*c*h-o*s*f+t*u*f)*R,e[8]=v*R,e[9]=(m*a*r-d*_*r-m*n*f+t*_*f+d*n*p-t*a*p)*R,e[10]=(o*_*r-m*l*r+m*n*h-t*_*h-o*n*p+t*l*p)*R,e[11]=(d*l*r-o*a*r-d*n*h+t*a*h+o*n*f-t*l*f)*R,e[12]=A*R,e[13]=(d*_*s-m*a*s+m*n*c-t*_*c-d*n*g+t*a*g)*R,e[14]=(m*l*s-o*_*s-m*n*u+t*_*u+o*n*g-t*l*g)*R,e[15]=(o*a*s-d*l*s+d*n*u-t*a*u-o*n*c+t*l*c)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,u=e.z,h=r*o,d=r*l;return this.set(h*o+n,h*l-s*u,h*u+s*l,0,h*l+s*u,d*l+n,d*u-s*o,0,h*u-s*l,d*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,l=t._z,u=t._w,h=r+r,d=o+o,a=l+l,c=r*h,f=r*d,m=r*a,_=o*d,g=o*a,p=l*a,x=u*h,y=u*d,v=u*a,A=n.x,S=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(m-y)*A,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(c+p))*S,s[6]=(g+x)*S,s[7]=0,s[8]=(m+y)*R,s[9]=(g-x)*R,s[10]=(1-(c+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const h=1/r,d=1/o,a=1/l;return wn.elements[0]*=h,wn.elements[1]*=h,wn.elements[2]*=h,wn.elements[4]*=d,wn.elements[5]*=d,wn.elements[6]*=d,wn.elements[8]*=a,wn.elements[9]*=a,wn.elements[10]*=a,t.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,o,l=2e3,u=!1){const h=this.elements,d=2*r/(t-e),a=2*r/(n-s),c=(t+e)/(t-e),f=(n+s)/(n-s);let m,_;if(u)m=r/(o-r),_=o*r/(o-r);else if(l===2e3)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(l===2001)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=a,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=2e3,u=!1){const h=this.elements,d=2/(t-e),a=2/(n-s),c=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,_;if(u)m=1/(o-r),_=o/(o-r);else if(l===2e3)m=-2/(o-r),_=-(o+r)/(o-r);else if(l===2001)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=a,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new P,wn=new ze,kf=new P(0,0,0),Uf=new P(1,1,1),di=new P,Xr=new P,ln=new P,Sc=new ze,wc=new rn;class Vn{constructor(e=0,t=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],l=s[8],u=s[1],h=s[5],d=s[9],a=s[2],c=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-a,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-a,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const Tc=new P,is=new rn,Jn=new ze,Yr=new P,er=new P,Of=new P,Bf=new rn,Ec=new P(1,0,0),Ac=new P(0,1,0),Rc=new P(0,0,1),Cc={type:"added"},zf={type:"removed"},ss={type:"childadded",child:null},ya={type:"childremoved",child:null};class yt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new Vn,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(Rc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(Rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(er,Yr,this.up):Jn.lookAt(Yr,er,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Jn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const a=u[h];r(e.shapes,a)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(e.materials,this.material[u]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];s.animations.push(r(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),d=o(e.images),a=o(e.shapes),c=o(e.skeletons),f=o(e.animations),m=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new P,Qn=new P,Ma=new P,ei=new P,rs=new P,os=new P,Pc=new P,ba=new P,Sa=new P,wa=new P,Ta=new st,Ea=new st,Aa=new st;class Pn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Qn.subVectors(n,t),Ma.subVectors(e,t);const o=Tn.dot(Tn),l=Tn.dot(Qn),u=Tn.dot(Ma),h=Qn.dot(Qn),d=Qn.dot(Ma),a=o*h-l*l;if(a===0)return r.set(0,0,0),null;const c=1/a,f=(h*u-l*d)*c,m=(o*d-l*u)*c;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,l,u){return this.getBarycoord(e,t,n,s,ei)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,ei.x),u.addScaledVector(o,ei.y),u.addScaledVector(l,ei.z),u)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ta.setScalar(0),Ea.setScalar(0),Aa.setScalar(0),Ta.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Aa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Qn.subVectors(e,t),Tn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Tn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,l;rs.subVectors(s,n),os.subVectors(r,n),ba.subVectors(e,n);const u=rs.dot(ba),h=os.dot(ba);if(u<=0&&h<=0)return t.copy(n);Sa.subVectors(e,s);const d=rs.dot(Sa),a=os.dot(Sa);if(d>=0&&a<=d)return t.copy(s);const c=u*a-d*h;if(c<=0&&u>=0&&d<=0)return o=u/(u-d),t.copy(n).addScaledVector(rs,o);wa.subVectors(e,r);const f=rs.dot(wa),m=os.dot(wa);if(m>=0&&f<=m)return t.copy(r);const _=f*h-u*m;if(_<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(n).addScaledVector(os,l);const g=d*m-f*a;if(g<=0&&a-d>=0&&f-m>=0)return Pc.subVectors(r,s),l=(a-d)/(a-d+(f-m)),t.copy(s).addScaledVector(Pc,l);const p=1/(g+_+c);return o=_*p,l=c*p,t.copy(n).addScaledVector(rs,o).addScaledVector(os,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=zl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(Vt.copy(this),e),Math.round(Ze(Vt.r*255,0,255))*65536+Math.round(Ze(Vt.g*255,0,255))*256+Math.round(Ze(Vt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),l=Math.min(n,s,r);let u,h;const d=(l+o)/2;if(l===o)u=0,h=0;else{const a=o-l;switch(h=d<=.5?a/(o+l):a/(2-o-l),o){case n:u=(s-r)/a+(s<r?6:0);break;case s:u=(r-n)/a+2;break;case r:u=(n-s)/a+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ot){tt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL($r);const n=Mr(fi.h,$r.h,t),s=Mr(fi.s,$r.s,t),r=Mr(fi.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new oe;oe.NAMES=Hh;let Hf=0;class Hn extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=In(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const l in r){const u=r[l];delete u.metadata,o.push(u)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new P,jr=new qe;let Gf=0;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Gh extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vf=0;const gn=new ze,Ca=new yt,as=new P,cn=new qn,tr=new qn,Ut=new P;class $t extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Vh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];tr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ut.addVectors(cn.min,tr.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,tr.max),cn.expandByPoint(Ut)):(cn.expandByPoint(tr.min),cn.expandByPoint(tr.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Ut.fromBufferAttribute(l,h),u&&(as.fromBufferAttribute(e,h),Ut.add(as)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let I=0;I<n.count;I++)l[I]=new P,u[I]=new P;const h=new P,d=new P,a=new P,c=new qe,f=new qe,m=new qe,_=new P,g=new P;function p(I,M,w){h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,M),a.fromBufferAttribute(n,w),c.fromBufferAttribute(r,I),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,w),d.sub(h),a.sub(h),f.sub(c),m.sub(c);const T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(a,-f.y).multiplyScalar(T),g.copy(a).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(T),l[I].add(_),l[M].add(_),l[w].add(_),u[I].add(g),u[M].add(g),u[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,M=x.length;I<M;++I){const w=x[I],T=w.start,L=w.count;for(let N=T,U=T+L;N<U;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new P,v=new P,A=new P,S=new P;function R(I){A.fromBufferAttribute(s,I),S.copy(A);const M=l[I];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(S,M);const T=v.dot(u[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,T)}for(let I=0,M=x.length;I<M;++I){const w=x[I],T=w.start,L=w.count;for(let N=T,U=T+L;N<U;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,f=n.count;c<f;c++)n.setXYZ(c,0,0,0);const s=new P,r=new P,o=new P,l=new P,u=new P,h=new P,d=new P,a=new P;if(e)for(let c=0,f=e.count;c<f;c+=3){const m=e.getX(c+0),_=e.getX(c+1),g=e.getX(c+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,r),a.subVectors(s,r),d.cross(a),l.fromBufferAttribute(n,m),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,g),l.add(d),u.add(d),h.add(d),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,f=t.count;c<f;c+=3)s.fromBufferAttribute(t,c+0),r.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),d.subVectors(o,r),a.subVectors(s,r),d.cross(a),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(l,u){const h=l.array,d=l.itemSize,a=l.normalized,c=new h.constructor(u.length*d);let f=0,m=0;for(let _=0,g=u.length;_<g;_++){l.isInterleavedBufferAttribute?f=u[_]*l.data.stride+l.offset:f=u[_]*d;for(let p=0;p<d;p++)c[m++]=h[f++]}return new Ct(c,d,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,s=this.attributes;for(const l in s){const u=s[l],h=e(u,n);t.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,a=h.length;d<a;d++){const c=h[d],f=e(c,n);u.push(f)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let a=0,c=h.length;a<c;a++){const f=h[a];d.push(f.toJSON(e.data))}d.length>0&&(s[u]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],a=r[h];for(let c=0,f=a.length;c<f;c++)d.push(a[c].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const a=o[h];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new ze,Ci=new ta,Kr=new Xn,Ic=new P,Zr=new P,Jr=new P,Qr=new P,Pa=new P,eo=new P,Dc=new P,to=new P;class Re extends yt{constructor(e=new $t,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){eo.set(0,0,0);for(let u=0,h=r.length;u<h;u++){const d=l[u],a=r[u];d!==0&&(Pa.fromBufferAttribute(a,e),o?eo.addScaledVector(Pa,d):eo.addScaledVector(Pa.sub(t),d))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Kr,Ic)===null||Ci.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Lc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,l=r.index,u=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,a=r.attributes.normal,c=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(o))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const S=l.getX(v),R=l.getX(v+1),I=l.getX(v+2);s=no(this,p,e,n,h,d,a,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=l.getX(g),y=l.getX(g+1),v=l.getX(g+2);s=no(this,o,e,n,h,d,a,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let m=0,_=c.length;m<_;m++){const g=c[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(u.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const S=v,R=v+1,I=v+2;s=no(this,p,e,n,h,d,a,S,R,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(u.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;s=no(this,o,e,n,h,d,a,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Wf(i,e,t,n,s,r,o,l){let u;if(e.side===1?u=n.intersectTriangle(o,r,s,!0,l):u=n.intersectTriangle(s,r,o,e.side===0,l),u===null)return null;to.copy(l),to.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(to);return h<t.near||h>t.far?null:{distance:h,point:to.clone(),object:i}}function no(i,e,t,n,s,r,o,l,u,h){i.getVertexPosition(l,Zr),i.getVertexPosition(u,Jr),i.getVertexPosition(h,Qr);const d=Wf(i,e,t,n,Zr,Jr,Qr,Dc);if(d){const a=new P;Pn.getBarycoord(Dc,Zr,Jr,Qr,a),s&&(d.uv=Pn.getInterpolatedAttribute(s,l,u,h,a,new qe)),r&&(d.uv1=Pn.getInterpolatedAttribute(r,l,u,h,a,new qe)),o&&(d.normal=Pn.getInterpolatedAttribute(o,l,u,h,a,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:l,b:u,c:h,normal:new P,materialIndex:0};Pn.getNormal(Zr,Jr,Qr,c.normal),d.face=c,d.barycoord=a}return d}class Yt extends $t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const u=[],h=[],d=[],a=[];let c=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(a,2));function m(_,g,p,x,y,v,A,S,R,I,M){const w=v/R,T=A/I,L=v/2,N=A/2,U=S/2,z=R+1,H=I+1;let $=0,B=0;const te=new P;for(let J=0;J<H;J++){const ue=J*T-N;for(let K=0;K<z;K++){const Q=K*w-L;te[_]=Q*x,te[g]=ue*y,te[p]=U,h.push(te.x,te.y,te.z),te[_]=0,te[g]=0,te[p]=S>0?1:-1,d.push(te.x,te.y,te.z),a.push(K/R),a.push(1-J/I),$+=1}}for(let J=0;J<I;J++)for(let ue=0;ue<R;ue++){const K=c+ue+z*J,Q=c+ue+z*(J+1),ae=c+(ue+1)+z*(J+1),ye=c+(ue+1)+z*J;u.push(K,Q,ye),u.push(Q,ae,ye),B+=6}l.addGroup(f,B,M),f+=B,c+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Ns(i[t]);for(const s in n)e[s]=n[s]}return e}function qf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Xf={clone:Ns,merge:Zt};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qh extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new P,Nc=new qe,kc=new qe;class Jt extends qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,kc),t.subVectors(kc,Nc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class jf extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(ls,cs,e,t);s.layers=this.layers,this.add(s);const r=new Jt(ls,cs,e,t);r.layers=this.layers,this.add(r);const o=new Jt(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new Jt(ls,cs,e,t);l.layers=this.layers,this.add(l);const u=new Jt(ls,cs,e,t);u.layers=this.layers,this.add(u);const h=new Jt(ls,cs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,u]=t;for(const h of t)this.remove(h);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,u,h,d]=this.children,a=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,u),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(a,c,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xh extends It{constructor(e=[],t=301,n,s,r,o,l,u,h,d){super(e,t,n,s,r,o,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kf extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yt(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const o=new Re(s,r),l=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new jf(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ut extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zf={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(h,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=h.joints["index-finger-tip"],a=h.joints["thumb-tip"],c=d.position.distanceTo(a.position),f=.02,m=.005;h.inputState.pinching&&c>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new oe(e),this.near=t,this.far=n}clone(){return new Gl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new P;class Vl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uc=new P,Fc=new st,Oc=new st,ep=new P,Bc=new ze,io=new P,Ia=new Xn,zc=new ze,Da=new ta;class tp extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(s),e.ray.intersectsSphere(Ia)!==!1&&(zc.copy(s).invert(),Da.copy(e.ray).applyMatrix4(zc),!(this.boundingBox!==null&&Da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Fc.fromBufferAttribute(s.attributes.skinIndex,e),Oc.fromBufferAttribute(s.attributes.skinWeight,e),Uc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Oc.getComponent(r);if(o!==0){const l=Fc.getComponent(r);Bc.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(ep.copy(Uc).applyMatrix4(Bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yh extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $h extends It{constructor(e=null,t=1,n=1,s,r,o,l,u,h=1003,d=1003,a,c){super(null,o,l,u,h,d,s,r,a,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new ze,np=new ze;class Wl{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:np;Hc.multiplyMatrices(l,t[r]),Hc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $h(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yh),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class vn extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new ze,Gc=new ze,so=[],Vc=new qn,ip=new ze,nr=new Re,ir=new Xn;class qi extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Vc.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(Vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),ir.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),e.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Gc.multiplyMatrices(n,us),nr.matrixWorld=Gc,nr.raycast(e,so);for(let o=0,l=so.length;o<l;o++){const u=so[o];u.instanceId=r,u.object=this,t.push(u)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const l=this.geometry.morphTargetsRelative?1:1-o,u=s*e;r[u]=l,r.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Na=new P,sp=new P,rp=new We;class Ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Na.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rp.getNormalMatrix(e),s=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Xn,op=new qe(.5,.5),ro=new P;class ql{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const s=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],h=r[3],d=r[4],a=r[5],c=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],x=r[12],y=r[13],v=r[14],A=r[15];if(s[0].setComponents(h-o,f-d,p-m,A-x).normalize(),s[1].setComponents(h+o,f+d,p+m,A+x).normalize(),s[2].setComponents(h+l,f+a,p+_,A+y).normalize(),s[3].setComponents(h-l,f-a,p-_,A-y).normalize(),n)s[4].setComponents(u,c,g,v).normalize(),s[5].setComponents(h-u,f-c,p-g,A-v).normalize();else if(s[4].setComponents(h-u,f-c,p-g,A-v).normalize(),t===2e3)s[5].setComponents(h+u,f+c,p+g,A+v).normalize();else if(t===2001)s[5].setComponents(u,c,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=op.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xl extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new P,Wo=new P,Wc=new ze,sr=new ta,oo=new Xn,ka=new P,qc=new P;class na extends yt{constructor(e=new $t,t=new Xl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vo.fromBufferAttribute(t,s-1),Wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Wo);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Wc.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Wc);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,c=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=h){const p=d.getX(_),x=d.getX(_+1),y=ao(this,e,sr,u,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(f),p=ao(this,e,sr,u,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=h){const p=ao(this,e,sr,u,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ao(this,e,sr,u,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function ao(i,e,t,n,s,r,o){const l=i.geometry.attributes.position;if(Vo.fromBufferAttribute(l,s),Wo.fromBufferAttribute(l,r),t.distanceSqToSegment(Vo,Wo,ka,qc)>n)return;ka.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ka);if(!(h<e.near||h>e.far))return{distance:h,point:qc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Xc=new P,Yc=new P;class ap extends na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xc.fromBufferAttribute(t,s),Yc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xc.distanceTo(Yc);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jh extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $c=new ze,yl=new ta,lo=new Xn,co=new P;class cp extends yt{constructor(e=new $t,t=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;$c.copy(s).invert(),yl.copy(e.ray).applyMatrix4($c);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,a=n.attributes.position;if(h!==null){const c=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=c,_=f;m<_;m++){const g=h.getX(m);co.fromBufferAttribute(a,g),jc(co,g,u,s,e,t,this)}}else{const c=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let m=c,_=f;m<_;m++)co.fromBufferAttribute(a,m),jc(co,m,u,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function jc(i,e,t,n,s,r,o){const l=yl.distanceSqToPoint(i);if(l<t){const u=new P;yl.closestPointToPoint(i,u),u.applyMatrix4(n);const h=s.ray.origin.distanceTo(u);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kh extends It{constructor(e,t,n=1014,s,r,o,l=1003,u=1003,h,d=1026,a=1){if(d!==1026&&d!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:a};super(c,s,r,o,l,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zh extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zt extends $t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:u};const h=this;s=Math.floor(s),r=Math.floor(r);const d=[],a=[],c=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(f,2));function x(){const v=new P,A=new P;let S=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const M=[],w=I/r,T=w*(t-e)+e;for(let L=0;L<=s;L++){const N=L/s,U=N*u+l,z=Math.sin(U),H=Math.cos(U);A.x=T*z,A.y=-w*n+g,A.z=T*H,a.push(A.x,A.y,A.z),v.set(z,R,H).normalize(),c.push(v.x,v.y,v.z),f.push(N,1-w),M.push(m++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){const w=_[M][I],T=_[M+1][I],L=_[M+1][I+1],N=_[M][I+1];(e>0||M!==0)&&(d.push(w,T,N),S+=3),(t>0||M!==r-1)&&(d.push(T,L,N),S+=3)}h.addGroup(p,S,0),p+=S}function y(v){const A=m,S=new qe,R=new P;let I=0;const M=v===!0?e:t,w=v===!0?1:-1;for(let L=1;L<=s;L++)a.push(0,g*w,0),c.push(0,w,0),f.push(.5,.5),m++;const T=m;for(let L=0;L<=s;L++){const U=L/s*u+l,z=Math.cos(U),H=Math.sin(U);R.x=M*H,R.y=g*w,R.z=M*z,a.push(R.x,R.y,R.z),c.push(0,w,0),S.x=z*.5+.5,S.y=H*.5*w+.5,f.push(S.x,S.y),m++}for(let L=0;L<s;L++){const N=A+L,U=T+L;v===!0?d.push(U,U+1,N):d.push(U+1,U,N),I+=3}h.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends zt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];l(s),h(n),d(),this.setAttribute("position",new Pt(r,3)),this.setAttribute("normal",new Pt(r.slice(),3)),this.setAttribute("uv",new Pt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const y=new P,v=new P,A=new P;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],v),f(t[S+2],A),u(y,v,A,x)}function u(x,y,v,A){const S=A+1,R=[];for(let I=0;I<=S;I++){R[I]=[];const M=x.clone().lerp(v,I/S),w=y.clone().lerp(v,I/S),T=S-I;for(let L=0;L<=T;L++)L===0&&I===S?R[I][L]=M:R[I][L]=M.clone().lerp(w,L/T)}for(let I=0;I<S;I++)for(let M=0;M<2*(S-I)-1;M++){const w=Math.floor(M/2);M%2===0?(c(R[I][w+1]),c(R[I+1][w]),c(R[I][w])):(c(R[I][w+1]),c(R[I+1][w+1]),c(R[I+1][w]))}}function h(x){const y=new P;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function d(){const x=new P;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=g(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;o.push(v,1-A)}m(),a()}function a(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],S=Math.max(y,v,A),R=Math.min(y,v,A);S>.9&&R<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function c(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const x=new P,y=new P,v=new P,A=new P,S=new qe,R=new qe,I=new qe;for(let M=0,w=0;M<r.length;M+=9,w+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),S.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),A.copy(x).add(y).add(v).divideScalar(3);const T=g(A);_(S,w+0,x,T),_(R,w+2,y,T),_(I,w+4,v,T)}}function _(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.vertices,e.indices,e.radius,e.details)}}class Yl extends sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class qo extends sa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qo(e.radius,e.detail)}}class Wn extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,l=Math.floor(n),u=Math.floor(s),h=l+1,d=u+1,a=e/l,c=t/u,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const x=p*c-o;for(let y=0;y<h;y++){const v=y*a-r;m.push(v,-x,0),_.push(0,0,1),g.push(y/l),g.push(1-p/u)}}for(let p=0;p<u;p++)for(let x=0;x<l;x++){const y=x+h*p,v=x+h*(p+1),A=x+1+h*(p+1),S=x+1+h*p;f.push(y,v,S),f.push(v,A,S)}this.setIndex(f),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class bi extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+l,Math.PI);let h=0;const d=[],a=new P,c=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&u===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const S=A/t;a.x=-e*Math.cos(s+S*r)*Math.sin(o+y*l),a.y=e*Math.cos(o+y*l),a.z=e*Math.sin(s+S*r)*Math.sin(o+y*l),m.push(a.x,a.y,a.z),c.copy(a).normalize(),_.push(c.x,c.y,c.z),g.push(S+v,1-y),x.push(h++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=d[p][x+1],v=d[p][x],A=d[p+1][x],S=d[p+1][x+1];(p!==0||o>0)&&f.push(y,v,S),(p!==n-1||u<Math.PI)&&f.push(v,A,S)}this.setIndex(f),this.setAttribute("position",new Pt(m,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ks extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],u=[],h=[],d=new P,a=new P,c=new P;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;a.x=(e+t*Math.cos(g))*Math.cos(_),a.y=(e+t*Math.cos(g))*Math.sin(_),a.z=t*Math.sin(g),l.push(a.x,a.y,a.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),c.subVectors(a,d).normalize(),u.push(c.x,c.y,c.z),h.push(m/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fn extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class up extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function uo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const l=t[r]*e;for(let u=0;u!==e;++u)s[o++]=i[l+u]}return s}function Jh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class kr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const l=t[1];e<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pp extends kr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,l=s[r],u=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case 2401:r=e,l=2*t-n;break;case 2402:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case 2401:o=e,u=2*n-t;break;case 2402:o=1,u=n+s[1]-s[0];break;default:o=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=this._offsetPrev,a=this._offsetNext,c=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-c*g+2*c*_-c*m,x=(1+c)*g+(-1.5-2*c)*_+(-.5+c)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let A=0;A!==l;++A)r[A]=p*o[d+A]+x*o[h+A]+y*o[u+A]+v*o[a+A];return r}}class mp extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=(n-t)/(s-t),a=1-d;for(let c=0;c!==l;++c)r[c]=o[h+c]*a+o[u+c]*d;return r}}class gp extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==r;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(s!==void 0&&dp(s))for(let l=0,u=s.length;l!==u;++l){const h=s[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=e.length-1;let o=1;for(let l=1;l<r;++l){let u=!1;const h=e[l],d=e[l+1];if(h!==d&&(l!==1||h!==e[0]))if(s)u=!0;else{const a=l*n,c=a-n,f=a+n;for(let m=0;m!==n;++m){const _=t[a+m];if(_!==t[c+m]||_!==t[f+m]){u=!0;break}}}if(u){if(l!==o){e[o]=e[l];const a=l*n,c=o*n;for(let f=0;f!==n;++f)t[c+f]=t[a+f]}++o}}if(r>0){e[o]=e[r];for(let l=r*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[l+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=2301;class qs extends Dn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=2300;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qh extends Dn{constructor(e,t,n,s){super(e,t,n,s)}}Qh.prototype.ValueTypeName="color";class Us extends Dn{constructor(e,t,n,s){super(e,t,n,s)}}Us.prototype.ValueTypeName="number";class _p extends kr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-t)/(s-t);let h=e*l;for(let d=h+l;h!==d;h+=4)rn.slerpFlat(r,0,o,h-l,o,h,u);return r}}class Fs extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _p(this.times,this.values,this.getValueSize(),e)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Dn{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=2300;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Dn{constructor(e,t,n,s){super(e,t,n,s)}}Os.prototype.ValueTypeName="vector";class xp{constructor(e="",t=-1,n=[],s=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(yp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let l=0;l<r;l++){let u=[],h=[];u.push((l+r-1)%r,l,(l+1)%r),h.push(0,1,0);const d=fp(u);u=Kc(u,1,d),h=Kc(h,1,d),!s&&u[0]===0&&(u.push(r),h.push(h[0])),o.push(new Us(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.name.match(r);if(d&&d.length>1){const a=d[1];let c=s[a];c||(s[a]=c=[]),c.push(h)}}const o=[];for(const l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(a,c,f,m,_){if(f.length!==0){const g=[],p=[];Jh(f,g,p,m),g.length!==0&&_.push(new a(c,g,p))}},s=[],r=e.name||"default",o=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let a=0;a<h.length;a++){const c=h[a].keys;if(!(!c||c.length===0))if(c[0].morphTargets){const f={};let m;for(m=0;m<c.length;m++)if(c[m].morphTargets)for(let _=0;_<c[m].morphTargets.length;_++)f[c[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let x=0;x!==c[m].morphTargets.length;++x){const y=c[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Us(".morphTargetInfluence["+_+"]",g,p))}u=f.length*o}else{const f=".bones["+t[a].name+"]";n(Os,f+".position",c,"pos",s),n(Fs,f+".quaternion",c,"rot",s),n(Os,f+".scale",c,"scl",s)}}return s.length===0?null:new this(r,u,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return Qh;case"quaternion":return Fs;case"bool":case"boolean":return qs;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vp(i.type);if(i.times===void 0){const t=[],n=[];Jh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mp{constructor(e,t,n){const s=this;let r=!1,o=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,a){return h.push(d,a),this},this.removeHandler=function(d){const a=h.indexOf(d);return a!==-1&&h.splice(a,2),this},this.getHandler=function(d){for(let a=0,c=h.length;a<c;a+=2){const f=h[a],m=h[a+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bp=new Mp;class Ys{constructor(e){this.manager=e!==void 0?e:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Sp extends Error{constructor(e,t){super(e),this.response=t}}class ed extends Ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=si.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=ti[e],a=h.body.getReader(),c=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=c?parseInt(c):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){a.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let S=0,R=d.length;S<R;S++){const I=d[S];I.onProgress&&I.onProgress(A)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Sp(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l==="")return h.text();{const a=/charset="?([^;"\s]*)"?/i.exec(l),c=a&&a[1]?a[1].toLowerCase():void 0,f=new TextDecoder(c);return h.arrayBuffer().then(m=>f.decode(m))}}}).then(h=>{si.add(`file:${e}`,h);const d=ti[e];delete ti[e];for(let a=0,c=d.length;a<c;a++){const f=d[a];f.onLoad&&f.onLoad(h)}}).catch(h=>{const d=ti[e];if(d===void 0)throw this.manager.itemError(e),h;delete ti[e];for(let a=0,c=d.length;a<c;a++){const f=d[a];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hs=new WeakMap;class td extends Ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let a=hs.get(o);a===void 0&&(a=[],hs.set(o,a)),a.push({onLoad:t,onError:s})}return o}const l=Rr("img");function u(){d(),t&&t(this);const a=hs.get(this)||[];for(let c=0;c<a.length;c++){const f=a[c];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function h(a){d(),s&&s(a),si.remove(`image:${e}`);const c=hs.get(this)||[];for(let f=0;f<c.length;f++){const m=c[f];m.onError&&m.onError(a)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),si.add(`image:${e}`,l),r.manager.itemStart(e),l.src=e,l}}class nd extends Ys{constructor(e){super(e)}load(e,t,n,s){const r=new It,o=new td(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){r.image=l,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ra extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wp extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new ze,Zc=new P,Jc=new P;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ql,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tp extends $l{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ep extends ra{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qc=new ze,rr=new P,Fa=new P;class Ap extends $l{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,n.coordinateSystem,n.reversedDepth)}}class Rp extends ra{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jl extends qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cp extends $l{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Cp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class br{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Oa=new WeakMap;class Pp extends Ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(h=>{if(Oa.has(o)===!0)s&&s(Oa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(h),r.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return si.add(`image-bitmap:${e}`,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Oa.set(u,h),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,u),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Lp extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ip{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Kl="\\[\\]\\.:\\/",Dp=new RegExp("["+Kl+"]","g"),Zl="[^"+Kl+"]",Np="[^"+Kl.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Up=/(WCOD+)?/.source.replace("WCOD",Np),Fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Bp=new RegExp("^"+kp+Up+Fp+Op+"$"),zp=["material","materials","bones","map"];class Hp{constructor(e,t,n){const s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(e){const t=Bp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);zp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[s];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Hp;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function eu(i,e,t,n){const s=Gp(n);switch(t){case 1021:return i*e;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gp(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function sd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vp(i){const e=new WeakMap;function t(l,u){const h=l.array,d=l.usage,a=h.byteLength,c=i.createBuffer();i.bindBuffer(u,c),i.bufferData(u,h,d),l.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:a}}function n(l,u,h){const d=u.array,a=u.updateRanges;if(i.bindBuffer(h,l),a.length===0)i.bufferSubData(h,0,d);else{a.sort((f,m)=>f.start-m.start);let c=0;for(let f=1;f<a.length;f++){const m=a[c],_=a[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++c,a[c]=_)}a.length=c+1;for(let f=0,m=a.length;f<m;f++){const _=a[f];i.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:s,remove:r,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Um=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Wp,alphahash_pars_fragment:qp,alphamap_fragment:Xp,alphamap_pars_fragment:Yp,alphatest_fragment:$p,alphatest_pars_fragment:jp,aomap_fragment:Kp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:um,color_pars_vertex:hm,color_vertex:dm,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:xm,emissivemap_pars_fragment:vm,colorspace_fragment:ym,colorspace_pars_fragment:Mm,envmap_fragment:bm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Um,envmap_vertex:Em,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Nm,lights_pars_begin:km,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:zm,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:qm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:jm,map_fragment:Km,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:hg,normalmap_pars_fragment:dg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:_g,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:bg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:kg,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:Hg,worldpos_vertex:Gg,background_vert:Vg,background_frag:Wg,backgroundCube_vert:qg,backgroundCube_frag:Xg,cube_vert:Yg,cube_frag:$g,depth_vert:jg,depth_frag:Kg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:o0,meshmatcap_vert:a0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:u0,meshphong_vert:h0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:x0,shadow_vert:v0,shadow_frag:y0,sprite_vert:M0,sprite_frag:b0},de={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},On={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new oe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new oe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};On.physical={uniforms:Zt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ho={r:0,b:0,g:0},Li=new Vn,S0=new ze;function w0(i,e,t,n,s,r,o){const l=new oe(0);let u=r===!0?0:1,h,d,a=null,c=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const A=m(y);A===null?p(l,u):A&&A.isColor&&(p(A,1),v=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===306)?(d===void 0&&(d=new Re(new Yt(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ns(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Li.copy(v.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(Li)),d.material.toneMapped=tt.getTransfer(A.colorSpace)!==dt,(a!==A||c!==A.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,a=A,c=A.version,f=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Re(new Wn(2,2),new ai({name:"BackgroundMaterial",uniforms:Ns(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=tt.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(a!==A||c!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,a=A,c=A.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,v){y.getRGB(ho,Wh(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(y,v=1){l.set(y),u=v,p(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(y){u=y,p(l,u)},render:_,addToRenderList:g,dispose:x}}function T0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,o=!1;function l(w,T,L,N,U){let z=!1;const H=a(N,L,T);r!==H&&(r=H,h(r.object)),z=f(w,N,L,U),z&&m(w,N,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(w,T,L,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function u(){return i.createVertexArray()}function h(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function a(w,T,L){const N=L.wireframe===!0;let U=n[w.id];U===void 0&&(U={},n[w.id]=U);let z=U[T.id];z===void 0&&(z={},U[T.id]=z);let H=z[N];return H===void 0&&(H=c(u()),z[N]=H),H}function c(w){const T=[],L=[],N=[];for(let U=0;U<t;U++)T[U]=0,L[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:N,object:w,attributes:{},index:null}}function f(w,T,L,N){const U=r.attributes,z=T.attributes;let H=0;const $=L.getAttributes();for(const B in $)if($[B].location>=0){const J=U[B];let ue=z[B];if(ue===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function m(w,T,L,N){const U={},z=T.attributes;let H=0;const $=L.getAttributes();for(const B in $)if($[B].location>=0){let J=z[B];J===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(J=w.instanceColor));const ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),U[B]=ue,H++}r.attributes=U,r.attributesNum=H,r.index=N}function _(){const w=r.newAttributes;for(let T=0,L=w.length;T<L;T++)w[T]=0}function g(w){p(w,0)}function p(w,T){const L=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;L[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),U[w]!==T&&(i.vertexAttribDivisor(w,T),U[w]=T)}function x(){const w=r.newAttributes,T=r.enabledAttributes;for(let L=0,N=T.length;L<N;L++)T[L]!==w[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function y(w,T,L,N,U,z,H){H===!0?i.vertexAttribIPointer(w,T,L,U,z):i.vertexAttribPointer(w,T,L,N,U,z)}function v(w,T,L,N){_();const U=N.attributes,z=L.getAttributes(),H=T.defaultAttributeValues;for(const $ in z){const B=z[$];if(B.location>=0){let te=U[$];if(te===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),te!==void 0){const J=te.normalized,ue=te.itemSize,K=e.get(te);if(K===void 0)continue;const Q=K.buffer,ae=K.type,ye=K.bytesPerElement,q=ae===i.INT||ae===i.UNSIGNED_INT||te.gpuType===1013;if(te.isInterleavedBufferAttribute){const j=te.data,pe=j.stride,Ie=te.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<B.locationSize;xe++)p(B.location+xe,j.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe,ue/B.locationSize,ae,J,pe*ye,(Ie+ue/B.locationSize*xe)*ye,q)}else{if(te.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)p(B.location+j,te.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let j=0;j<B.locationSize;j++)g(B.location+j);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let j=0;j<B.locationSize;j++)y(B.location+j,ue/B.locationSize,ae,J,ue*ye,ue/B.locationSize*j*ye,q)}}else if(H!==void 0){const J=H[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(B.location,J);break;case 3:i.vertexAttrib3fv(B.location,J);break;case 4:i.vertexAttrib4fv(B.location,J);break;default:i.vertexAttrib1fv(B.location,J)}}}}x()}function A(){I();for(const w in n){const T=n[w];for(const L in T){const N=T[L];for(const U in N)d(N[U].object),delete N[U];delete T[L]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;const T=n[w.id];for(const L in T){const N=T[L];for(const U in N)d(N[U].object),delete N[U];delete T[L]}delete n[w.id]}function R(w){for(const T in n){const L=n[T];if(L[w.id]===void 0)continue;const N=L[w.id];for(const U in N)d(N[U].object),delete N[U];delete L[w.id]}}function I(){M(),o=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function E0(i,e,t){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),t.update(d,n,1)}function o(h,d,a){a!==0&&(i.drawArraysInstanced(n,h,d,a),t.update(d,n,a))}function l(h,d,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,a);let f=0;for(let m=0;m<a;m++)f+=d[m];t.update(f,n,1)}function u(h,d,a,c){if(a===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],d[m],c[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,a);let m=0;for(let _=0;_<a;_++)m+=d[_]*c[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function A0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==1023&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const I=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!I)}function u(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const a=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:a,reversedDepthBuffer:c,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:S}}function R0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ui,l=new We,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const f=a.length!==0||c||n!==0||s;return s=c,n=a.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(a,c){t=d(a,c,0)},this.setState=function(a,c,f){const m=a.clippingPlanes,_=a.clipIntersection,g=a.clipShadows,p=i.get(a);if(!s||m===null||m.length===0||r&&!g)r?d(null):h();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;u.value=v,v=d(m,c,y,f);for(let A=0;A!==y;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,c,f,m){const _=a!==null?a.length:0;let g=null;if(_!==0){if(g=u.value,m!==!0||g===null){const p=f+_*4,x=c.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(a[y]).applyMatrix4(x,l),o.normal.toArray(g,v),g[v+3]=o.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function C0(i){let e=new WeakMap;function t(o,l){return l===303?o.mapping=301:l===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===303||l===304)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Kf(u.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const bs=4,tu=[.125,.215,.35,.446,.526,.582],Oi=20,Ba=new jl,nu=new oe;let za=null,Ha=0,Ga=0,Va=!1;const Fi=(1+Math.sqrt(5))/2,ds=1/Fi,iu=[new P(-Fi,ds,0),new P(Fi,ds,0),new P(-ds,0,Fi),new P(ds,0,Fi),new P(0,Fi,-ds),new P(0,Fi,ds),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],P0=new P;class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:l=P0}=r;za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,s,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Ga),this._renderer.xr.enabled=Va,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:tn,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=I0(r,e,t)}return s}_compileMaterial(e){const t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,s,r){const u=new Jt(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],a=this._renderer,c=a.autoClear,f=a.toneMapping;a.getClearColor(nu),a.toneMapping=0,a.autoClear=!1,a.state.buffers.depth.getReversed()&&(a.setRenderTarget(s),a.clearDepth(),a.setRenderTarget(null));const _=new yn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Re(new Yt,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(nu),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(u.up.set(0,h[y],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+d[y],r.y,r.z)):v===1?(u.up.set(0,0,h[y]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+d[y],r.z)):(u.up.set(0,h[y],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+d[y]));const A=this._cubeSize;fo(s,v*A,y>2?A:0,A,A),a.setRenderTarget(s),p&&a.render(g,u),a.render(e,u)}g.geometry.dispose(),g.material.dispose(),a.toneMapping=f,a.autoClear=c,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=e;const u=this._cubeSize;fo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=iu[(s-r-1)%iu.length];this._blur(e,r-1,r,o,l)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,a=new Re(this._lodPlanes[s],h),c=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/m,g=isFinite(r)?1+Math.floor(d*_):Oi;g>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const p=[];let x=0;for(let R=0;R<Oi;++R){const I=R/_,M=Math.exp(-I*I/2);p.push(M),R===0?x+=M:R<g&&(x+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=p,c.latitudinal.value=o==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:y}=this;c.dTheta.value=m,c.mipInt.value=y-n;const v=this._sizeLods[s],A=3*v*(s>y-bs?s-y+bs:0),S=4*(this._cubeSize-v);fo(t,A,S,3*v,2*v),u.setRenderTarget(t),u.render(a,Ba)}}function L0(i){const e=[],t=[],n=[];let s=i;const r=i-bs+1+tu.length;for(let o=0;o<r;o++){const l=Math.pow(2,s);t.push(l);let u=1/l;o>i-bs?u=tu[o-i+bs-1]:o===0&&(u=0),n.push(u);const h=1/(l-2),d=-h,a=1+h,c=[d,d,a,d,a,a,d,d,a,a,d,a],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){const R=S%3*2/3-1,I=S>2?0:-1,M=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(M,_*m*S),y.set(c,g*m*S);const w=[S,S,S,S,S,S];v.set(w,p*m*S)}const A=new $t;A.setAttribute("position",new Ct(x,_)),A.setAttribute("uv",new Ct(y,g)),A.setAttribute("faceIndex",new Ct(v,p)),e.push(A),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I0(i,e,t){const n=new Float32Array(Oi),s=new P(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ou(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function au(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D0(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===303||u===304,d=u===301||u===302;if(h||d){let a=e.get(l);const c=a!==void 0?a.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==c)return t===null&&(t=new su(i)),a=h?t.fromEquirectangular(l,a):t.fromCubemap(l,a),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),a.texture;if(a!==void 0)return a.texture;{const f=l.image;return h&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new su(i)),a=h?t.fromEquirectangular(l):t.fromCubemap(l),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),l.addEventListener("dispose",r),a.texture):null}}}return l}function s(l){let u=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&u++;return u===h}function r(l){const u=l.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function N0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,e,t,n){const s={},r=new WeakMap;function o(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const m in c.attributes)e.remove(c.attributes[m]);c.removeEventListener("dispose",o),delete s[c.id];const f=r.get(c);f&&(e.remove(f),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(a,c){return s[c.id]===!0||(c.addEventListener("dispose",o),s[c.id]=!0,t.memory.geometries++),c}function u(a){const c=a.attributes;for(const f in c)e.update(c[f],i.ARRAY_BUFFER)}function h(a){const c=[],f=a.index,m=a.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],S=x[y+1],R=x[y+2];c.push(A,S,S,R,R,A)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,S=y+1,R=y+2;c.push(A,S,S,R,R,A)}}else return;const g=new(Oh(c)?Vh:Gh)(c,1);g.version=_;const p=r.get(a);p&&e.remove(p),r.set(a,g)}function d(a){const c=r.get(a);if(c){const f=a.index;f!==null&&c.version<f.version&&h(a)}else h(a);return r.get(a)}return{get:l,update:u,getWireframeAttribute:d}}function U0(i,e,t){let n;function s(c){n=c}let r,o;function l(c){r=c.type,o=c.bytesPerElement}function u(c,f){i.drawElements(n,f,r,c*o),t.update(f,n,1)}function h(c,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,c*o,m),t.update(f,n,m))}function d(c,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,c,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function a(c,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)h(c[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,c,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=a}function F0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,e,t){const n=new WeakMap,s=new st;function r(o,l,u){const h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,a=d!==void 0?d.length:0;let c=n.get(l);if(c===void 0||c.count!==a){let M=function(){R.dispose(),n.delete(l),l.removeEventListener("dispose",M)};c!==void 0&&c.texture.dispose();const f=l.morphAttributes.position!==void 0,m=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],x=l.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=l.attributes.position.count*y,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*A*4*a),R=new Bh(S,v,A,a);R.type=1015,R.needsUpdate=!0;const I=y*4;for(let w=0;w<a;w++){const T=g[w],L=p[w],N=x[w],U=v*A*4*w;for(let z=0;z<T.count;z++){const H=z*I;f===!0&&(s.fromBufferAttribute(T,z),S[U+H+0]=s.x,S[U+H+1]=s.y,S[U+H+2]=s.z,S[U+H+3]=0),m===!0&&(s.fromBufferAttribute(L,z),S[U+H+4]=s.x,S[U+H+5]=s.y,S[U+H+6]=s.z,S[U+H+7]=0),_===!0&&(s.fromBufferAttribute(N,z),S[U+H+8]=s.x,S[U+H+9]=s.y,S[U+H+10]=s.z,S[U+H+11]=N.itemSize===4?s.w:1)}}c={count:a,texture:R,size:new qe(v,A)},n.set(l,c),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];const m=l.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function B0(i,e,t,n){let s=new WeakMap;function r(u){const h=n.render.frame,d=u.geometry,a=e.get(u,d);if(s.get(a)!==h&&(e.update(a),s.set(a,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const c=u.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return a}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const rd=new It,lu=new Kh(1,1),od=new Bh,ad=new Df,ld=new Xh,cu=[],uu=[],hu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function $s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function W0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),kt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),kt(t,n)}}function X0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),kt(t,n)}}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function e_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function t_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=515,r=lu):r=rd,t.setTexture2D(e||r,s)}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ad,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ld,s)}function s_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||od,s)}function r_(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return q0;case 35676:return X0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return j0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return J0;case 36295:return Q0;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){const t=$s(e,this.size,2);i.uniform2fv(this.addr,t)}function l_(i,e){const t=$s(e,this.size,3);i.uniform3fv(this.addr,t)}function c_(i,e){const t=$s(e,this.size,4);i.uniform4fv(this.addr,t)}function u_(i,e){const t=$s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){const t=$s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){const t=$s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function __(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function v_(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function M_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rd,r[o])}function b_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ad,r[o])}function S_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ld,r[o])}function w_(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||od,r[o])}function T_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return h_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return x_;case 36295:return v_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return w_}}class E_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}}class A_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}}class R_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(e,t[l.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),o=Wa.lastIndex;let l=r[1];const u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===s){pu(t,h===void 0?new E_(l,i,e):new A_(l,i,e));break}else{let a=t.map[l];a===void 0&&(a=new R_(l),pu(t,a)),t=a}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);C_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const l=t[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P_=37297;let L_=0;function I_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const gu=new We;function D_(i){tt._getMatrix(gu,tt.workingColorSpace,i);const e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Go:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(e),l)}else return r}function N_(i,e){const t=D_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k_(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new P;function U_(){tt.getLuminanceCoefficients(po);const i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function O_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function B_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function mr(i){return i!==""}function xu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(z_,G_)}const H_=new Map;function G_(i,e){let t=Xe[e];if(t===void 0){const n=H_.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}const V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(V_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===302&&(e="ENVMAP_MODE_REFRACTION"),e}function $_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function j_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=q_(t),h=X_(t),d=Y_(t),a=$_(t),c=j_(t),f=F_(t),m=O_(r),_=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(g=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Xe.tonemapping_pars_fragment:"",t.toneMapping!==0?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=Ml(o),o=xu(o,t),o=vu(o,t),l=Ml(l),l=xu(l,t),l=vu(l,t),o=yu(o),l=yu(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+l,A=mu(s,s.VERTEX_SHADER,y),S=mu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(A)||"",U=s.getShaderInfoLog(S)||"",z=L.trim(),H=N.trim(),$=U.trim();let B=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,S);else{const J=_u(s,A,"vertex"),ue=_u(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+J+`
`+ue)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||$==="")&&(te=!1);te&&(T.diagnostics={runnable:B,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(A),s.deleteShader(S),I=new ko(s,_),M=B_(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,P_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}let Z_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q_(e),t.set(e,n)),n}}class Q_{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}}function ex(i,e,t,n,s,r,o){const l=new zh,u=new J_,h=new Set,d=[],a=s.logarithmicDepthBuffer,c=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function g(M,w,T,L,N){const U=L.fog,z=N.geometry,H=M.isMeshStandardMaterial?L.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),B=$&&$.mapping===306?$.image.height:null,te=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=J!==void 0?J.length:0;let K=0;z.morphAttributes.position!==void 0&&(K=1),z.morphAttributes.normal!==void 0&&(K=2),z.morphAttributes.color!==void 0&&(K=3);let Q,ae,ye,q;if(te){const rt=On[te];Q=rt.vertexShader,ae=rt.fragmentShader}else Q=M.vertexShader,ae=M.fragmentShader,u.update(M),ye=u.getVertexShaderID(M),q=u.getFragmentShaderID(M);const j=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,je=!!M.map,Dt=!!M.matcap,D=!!$,gt=!!M.aoMap,He=!!M.lightMap,ke=!!M.bumpMap,we=!!M.normalMap,Ke=!!M.displacementMap,be=!!M.emissiveMap,Be=!!M.metalnessMap,Mt=!!M.roughnessMap,Ye=M.anisotropy>0,C=M.clearcoat>0,b=M.dispersion>0,G=M.iridescence>0,Y=M.sheen>0,ee=M.transmission>0,X=Ye&&!!M.anisotropyMap,Le=C&&!!M.clearcoatMap,le=C&&!!M.clearcoatNormalMap,Ae=C&&!!M.clearcoatRoughnessMap,Ce=G&&!!M.iridescenceMap,se=G&&!!M.iridescenceThicknessMap,ge=Y&&!!M.sheenColorMap,Fe=Y&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,fe=!!M.specularColorMap,Ve=!!M.specularIntensityMap,k=ee&&!!M.transmissionMap,re=ee&&!!M.thicknessMap,he=!!M.gradientMap,Se=!!M.alphaMap,ne=M.alphaTest>0,Z=!!M.alphaHash,Ee=!!M.extensions;let Ge=0;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const pt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:ae,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tn,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Dt,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:B,aoMap:gt,lightMap:He,bumpMap:ke,normalMap:we,displacementMap:c&&Ke,emissiveMap:be,normalMapObjectSpace:we&&M.normalMapType===1,normalMapTangentSpace:we&&M.normalMapType===0,metalnessMap:Be,roughnessMap:Mt,anisotropy:Ye,anisotropyMap:X,clearcoat:C,clearcoatMap:Le,clearcoatNormalMap:le,clearcoatRoughnessMap:Ae,dispersion:b,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:ge,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:fe,specularIntensityMap:Ve,transmission:ee,transmissionMap:k,thicknessMap:re,gradientMap:he,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:ne,alphaHash:Z,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:gt&&_(M.aoMap.channel),lightMapUv:He&&_(M.lightMap.channel),bumpMapUv:ke&&_(M.bumpMap.channel),normalMapUv:we&&_(M.normalMap.channel),displacementMapUv:Ke&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:Be&&_(M.metalnessMap.channel),roughnessMapUv:Mt&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Le&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ve&&_(M.specularIntensityMap.channel),transmissionMapUv:k&&_(M.transmissionMap.channel),thicknessMapUv:re&&_(M.thicknessMap.channel),alphaMapUv:Se&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(we||Ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(je||Se),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:a,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return pt.vertexUv1s=h.has(1),pt.vertexUv2s=h.has(2),pt.vertexUv3s=h.has(3),h.clear(),pt}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)w.push(T),w.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(x(w,M),y(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){l.disableAll(),w.supportsVertexTextures&&l.enable(0),w.instancing&&l.enable(1),w.instancingColor&&l.enable(2),w.instancingMorph&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),w.alphaHash&&l.enable(18),w.batching&&l.enable(19),w.dispersion&&l.enable(20),w.batchingColor&&l.enable(21),w.gradientMap&&l.enable(22),M.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.reversedDepthBuffer&&l.enable(4),w.skinning&&l.enable(5),w.morphTargets&&l.enable(6),w.morphNormals&&l.enable(7),w.morphColors&&l.enable(8),w.premultipliedAlpha&&l.enable(9),w.shadowMapEnabled&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),w.decodeVideoTexture&&l.enable(19),w.decodeVideoTextureEmissive&&l.enable(20),w.alphaToCoverage&&l.enable(21),M.push(l.mask)}function v(M){const w=m[M.type];let T;if(w){const L=On[w];T=Xf.clone(L.uniforms)}else T=M.uniforms;return T}function A(M,w){let T;for(let L=0,N=d.length;L<N;L++){const U=d[L];if(U.cacheKey===w){T=U,++T.usedTimes;break}}return T===void 0&&(T=new K_(i,w,M,r),d.push(T)),T}function S(M){if(--M.usedTimes===0){const w=d.indexOf(M);d[w]=d[d.length-1],d.pop(),M.destroy()}}function R(M){u.remove(M)}function I(){u.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:S,releaseShaderCache:R,programs:d,dispose:I}}function tx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,u){i.get(o)[l]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Su(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(a,c,f,m,_,g){let p=i[e];return p===void 0?(p={id:a.id,object:a,geometry:c,material:f,groupOrder:m,renderOrder:a.renderOrder,z:_,group:g},i[e]=p):(p.id=a.id,p.object=a,p.geometry=c,p.material=f,p.groupOrder=m,p.renderOrder=a.renderOrder,p.z=_,p.group=g),e++,p}function l(a,c,f,m,_,g){const p=o(a,c,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function u(a,c,f,m,_,g){const p=o(a,c,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function h(a,c){t.length>1&&t.sort(a||nx),n.length>1&&n.sort(c||bu),s.length>1&&s.sort(c||bu)}function d(){for(let a=e,c=i.length;a<c;a++){const f=i[a];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:u,finish:d,sort:h}}function ix(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Su,i.set(n,[o])):s>=r.length?(o=new Su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new oe};break;case"SpotLight":t={position:new P,direction:new P,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ox=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lx(i){const e=new sx,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,r=new ze,o=new ze;function l(h){let d=0,a=0,c=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,A=0,S=0,R=0;h.sort(ax);for(let M=0,w=h.length;M<w;M++){const T=h[M],L=T.color,N=T.intensity,U=T.distance,z=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=L.r*N,a+=L.g*N,c+=L.b*N;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],N);R++}else if(T.isDirectionalLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,B=t.get(T);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=T.shadow.matrix,x++}n.directional[f]=H,f++}else if(T.isSpotLight){const H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(L).multiplyScalar(N),H.distance=U,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[_]=H;const $=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,$.updateMatrices(T),T.castShadow&&S++),n.spotLightMatrix[_]=$.matrix,T.castShadow){const B=t.get(T);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=z,v++}_++}else if(T.isRectAreaLight){const H=e.get(T);H.color.copy(L).multiplyScalar(N),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=H,g++}else if(T.isPointLight){const H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){const $=T.shadow,B=t.get(T);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=T.shadow.matrix,y++}n.point[m]=H,m++}else if(T.isHemisphereLight){const H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(N),H.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=H,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=a,n.ambient[2]=c;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=R,n.version=ox++)}function u(h,d){let a=0,c=0,f=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const y=h[p];if(y.isDirectionalLight){const v=n.directional[a];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),a++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[c];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),c++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:l,setupView:u,state:n}}function wu(i){const e=new lx(i),t=[],n=[];function s(d){h.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function cx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new wu(i),e.set(s,[l])):r>=o.length?(l=new wu(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dx(i,e,t){let n=new ql;const s=new qe,r=new qe,o=new st,l=new up({depthPacking:3201}),u=new hp,h={},d=t.maxTextureSize,a={0:1,1:0,2:2},c=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:ux,fragmentShader:hx}),f=c.clone();f.defines.HORIZONTAL_PASS=1;const m=new $t;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(m,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(S,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==3&&this.type===3,U=p===3&&this.type!==3;for(let z=0,H=S.length;z<H;z++){const $=S[z],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const te=B.getFrameExtents();if(s.multiply(te),r.copy(B.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/te.x),s.x=r.x*te.x,B.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/te.y),s.y=r.y*te.y,B.mapSize.y=r.y)),B.map===null||N===!0||U===!0){const ue=this.type!==3?{minFilter:1003,magFilter:1003}:{};B.map!==null&&B.map.dispose(),B.map=new Wi(s.x,s.y,ue),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const J=B.getViewportCount();for(let ue=0;ue<J;ue++){const K=B.getViewport(ue);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),L.viewport(o),B.updateMatrices($,ue),n=B.getFrustum(),v(R,I,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===3&&x(B,I),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,w,T)};function x(S,R){const I=e.update(_);c.defines.VSM_SAMPLES!==S.blurSamples&&(c.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wi(s.x,s.y)),c.uniforms.shadow_pass.value=S.map.texture,c.uniforms.resolution.value=S.mapSize,c.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,I,c,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function y(S,R,I,M){let w=null;const T=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)w=T;else if(w=I.isPointLight===!0?u:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=w.uuid,N=R.uuid;let U=h[L];U===void 0&&(U={},h[L]=U);let z=U[N];z===void 0&&(z=w.clone(),U[N]=z,R.addEventListener("dispose",A)),w=z}if(w.visible=R.visible,w.wireframe=R.wireframe,M===3?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:a[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=i.properties.get(w);L.light=I}return w}function v(S,R,I,M,w){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===3)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);const N=e.update(S),U=S.material;if(Array.isArray(U)){const z=N.groups;for(let H=0,$=z.length;H<$;H++){const B=z[H],te=U[B.materialIndex];if(te&&te.visible){const J=y(S,te,M,w);S.onBeforeShadow(i,S,R,I,N,J,B),i.renderBufferDirect(I,null,N,J,S,B),S.onAfterShadow(i,S,R,I,N,J,B)}}}else if(U.visible){const z=y(S,U,M,w);S.onBeforeShadow(i,S,R,I,N,z,null),i.renderBufferDirect(I,null,N,z,S,null),S.onAfterShadow(i,S,R,I,N,z,null)}}const L=S.children;for(let N=0,U=L.length;N<U;N++)v(L[N],R,I,M,w)}function A(S){S.target.removeEventListener("dispose",A);for(const I in h){const M=h[I],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const fx={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function px(i,e){function t(){let k=!1;const re=new st;let he=null;const Se=new st(0,0,0,0);return{setMask:function(ne){he!==ne&&!k&&(i.colorMask(ne,ne,ne,ne),he=ne)},setLocked:function(ne){k=ne},setClear:function(ne,Z,Ee,Ge,pt){pt===!0&&(ne*=Ge,Z*=Ge,Ee*=Ge),re.set(ne,Z,Ee,Ge),Se.equals(re)===!1&&(i.clearColor(ne,Z,Ee,Ge),Se.copy(re))},reset:function(){k=!1,he=null,Se.set(-1,0,0,0)}}}function n(){let k=!1,re=!1,he=null,Se=null,ne=null;return{setReversed:function(Z){if(re!==Z){const Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Ge=ne;ne=null,this.setClear(Ge)}},getReversed:function(){return re},setTest:function(Z){Z?j(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Z){he!==Z&&!k&&(i.depthMask(Z),he=Z)},setFunc:function(Z){if(re&&(Z=fx[Z]),Se!==Z){switch(Z){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Z}},setLocked:function(Z){k=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){k=!1,he=null,Se=null,ne=null,re=!1}}}function s(){let k=!1,re=null,he=null,Se=null,ne=null,Z=null,Ee=null,Ge=null,pt=null;return{setTest:function(rt){k||(rt?j(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(rt){re!==rt&&!k&&(i.stencilMask(rt),re=rt)},setFunc:function(rt,jn,Nn){(he!==rt||Se!==jn||ne!==Nn)&&(i.stencilFunc(rt,jn,Nn),he=rt,Se=jn,ne=Nn)},setOp:function(rt,jn,Nn){(Z!==rt||Ee!==jn||Ge!==Nn)&&(i.stencilOp(rt,jn,Nn),Z=rt,Ee=jn,Ge=Nn)},setLocked:function(rt){k=rt},setClear:function(rt){pt!==rt&&(i.clearStencil(rt),pt=rt)},reset:function(){k=!1,re=null,he=null,Se=null,ne=null,Z=null,Ee=null,Ge=null,pt=null}}}const r=new t,o=new n,l=new s,u=new WeakMap,h=new WeakMap;let d={},a={},c=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,A=null,S=null,R=new oe(0,0,0),I=0,M=!1,w=null,T=null,L=null,N=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=$>=2);let te=null,J={};const ue=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Q=new st().fromArray(ue),ae=new st().fromArray(K);function ye(k,re,he,Se){const ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(k,Z),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<he;Ee++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}const q={};q[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),j(i.DEPTH_TEST),o.setFunc(3),ke(!1),we(1),j(i.CULL_FACE),gt(0);function j(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function pe(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Ie(k,re){return a[k]!==re?(i.bindFramebuffer(k,re),a[k]=re,k===i.DRAW_FRAMEBUFFER&&(a[i.FRAMEBUFFER]=re),k===i.FRAMEBUFFER&&(a[i.DRAW_FRAMEBUFFER]=re),!0):!1}function xe(k,re){let he=f,Se=!1;if(k){he=c.get(re),he===void 0&&(he=[],c.set(re,he));const ne=k.textures;if(he.length!==ne.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Ee=ne.length;Z<Ee;Z++)he[Z]=i.COLOR_ATTACHMENT0+Z;he.length=ne.length,Se=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Se=!0);Se&&i.drawBuffers(he)}function je(k){return m!==k?(i.useProgram(k),m=k,!0):!1}const Dt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Dt[103]=i.MIN,Dt[104]=i.MAX;const D={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function gt(k,re,he,Se,ne,Z,Ee,Ge,pt,rt){if(k===0){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),k!==5){if(k!==g||rt!==M){if((p!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,v=100),rt)switch(k){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,y=null,A=null,S=null,R.set(0,0,0),I=0,g=k,M=rt}return}ne=ne||re,Z=Z||he,Ee=Ee||Se,(re!==p||ne!==v)&&(i.blendEquationSeparate(Dt[re],Dt[ne]),p=re,v=ne),(he!==x||Se!==y||Z!==A||Ee!==S)&&(i.blendFuncSeparate(D[he],D[Se],D[Z],D[Ee]),x=he,y=Se,A=Z,S=Ee),(Ge.equals(R)===!1||pt!==I)&&(i.blendColor(Ge.r,Ge.g,Ge.b,pt),R.copy(Ge),I=pt),g=k,M=!1}function He(k,re){k.side===2?pe(i.CULL_FACE):j(i.CULL_FACE);let he=k.side===1;re&&(he=!he),ke(he),k.blending===1&&k.transparent===!1?gt(0):gt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Se=k.stencilWrite;l.setTest(Se),Se&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function we(k){k!==0?(j(i.CULL_FACE),k!==T&&(k===1?i.cullFace(i.BACK):k===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),T=k}function Ke(k){k!==L&&(H&&i.lineWidth(k),L=k)}function be(k,re,he){k?(j(i.POLYGON_OFFSET_FILL),(N!==re||U!==he)&&(i.polygonOffset(re,he),N=re,U=he)):pe(i.POLYGON_OFFSET_FILL)}function Be(k){k?j(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function Mt(k){k===void 0&&(k=i.TEXTURE0+z-1),te!==k&&(i.activeTexture(k),te=k)}function Ye(k,re,he){he===void 0&&(te===null?he=i.TEXTURE0+z-1:he=te);let Se=J[he];Se===void 0&&(Se={type:void 0,texture:void 0},J[he]=Se),(Se.type!==k||Se.texture!==re)&&(te!==he&&(i.activeTexture(he),te=he),i.bindTexture(k,re||q[k]),Se.type=k,Se.texture=re)}function C(){const k=J[te];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(k){Q.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function Fe(k){ae.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ae.copy(k))}function Pe(k,re){let he=h.get(re);he===void 0&&(he=new WeakMap,h.set(re,he));let Se=he.get(k);Se===void 0&&(Se=i.getUniformBlockIndex(re,k.name),he.set(k,Se))}function fe(k,re){const Se=h.get(re).get(k);u.get(re)!==Se&&(i.uniformBlockBinding(re,Se,k.__bindingPointIndex),u.set(re,Se))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,J={},a={},c=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,A=null,S=null,R=new oe(0,0,0),I=0,M=!1,w=null,T=null,L=null,N=null,U=null,Q.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:j,disable:pe,bindFramebuffer:Ie,drawBuffers:xe,useProgram:je,setBlending:gt,setMaterial:He,setFlipSided:ke,setCullFace:we,setLineWidth:Ke,setPolygonOffset:be,setScissorTest:Be,activeTexture:Mt,bindTexture:Ye,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Ce,texImage3D:se,updateUBOMapping:Pe,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Ae,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:Le,scissor:ge,viewport:Fe,reset:Ve}}function mx(i,e,t,n,s,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap;let a;const c=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):Rr("canvas")}function _(C,b,G){let Y=1;const ee=Ye(C);if((ee.width>G||ee.height>G)&&(Y=G/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*ee.width),Le=Math.floor(Y*ee.height);a===void 0&&(a=m(X,Le));const le=b?m(X,Le):a;return le.width=X,le.height=Le,le.getContext("2d").drawImage(C,0,0,X,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Le+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,b,G,Y,ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=b;if(b===i.RED&&(G===i.FLOAT&&(X=i.R32F),G===i.HALF_FLOAT&&(X=i.R16F),G===i.UNSIGNED_BYTE&&(X=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.R8UI),G===i.UNSIGNED_SHORT&&(X=i.R16UI),G===i.UNSIGNED_INT&&(X=i.R32UI),G===i.BYTE&&(X=i.R8I),G===i.SHORT&&(X=i.R16I),G===i.INT&&(X=i.R32I)),b===i.RG&&(G===i.FLOAT&&(X=i.RG32F),G===i.HALF_FLOAT&&(X=i.RG16F),G===i.UNSIGNED_BYTE&&(X=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RG8UI),G===i.UNSIGNED_SHORT&&(X=i.RG16UI),G===i.UNSIGNED_INT&&(X=i.RG32UI),G===i.BYTE&&(X=i.RG8I),G===i.SHORT&&(X=i.RG16I),G===i.INT&&(X=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RGB8UI),G===i.UNSIGNED_SHORT&&(X=i.RGB16UI),G===i.UNSIGNED_INT&&(X=i.RGB32UI),G===i.BYTE&&(X=i.RGB8I),G===i.SHORT&&(X=i.RGB16I),G===i.INT&&(X=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),G===i.UNSIGNED_INT&&(X=i.RGBA32UI),G===i.BYTE&&(X=i.RGBA8I),G===i.SHORT&&(X=i.RGBA16I),G===i.INT&&(X=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),b===i.RGBA){const Le=ee?Go:tt.getTransfer(Y);G===i.FLOAT&&(X=i.RGBA32F),G===i.HALF_FLOAT&&(X=i.RGBA16F),G===i.UNSIGNED_BYTE&&(X=Le===dt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(C,b){let G;return C?b===null||b===1014||b===1020?G=i.DEPTH24_STENCIL8:b===1015?G=i.DEPTH32F_STENCIL8:b===1012&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===1014||b===1020?G=i.DEPTH_COMPONENT24:b===1015?G=i.DEPTH_COMPONENT32F:b===1012&&(G=i.DEPTH_COMPONENT16),G}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){const b=C.target;b.removeEventListener("dispose",S),I(b),b.isVideoTexture&&d.delete(b)}function R(C){const b=C.target;b.removeEventListener("dispose",R),w(b)}function I(C){const b=n.get(C);if(b.__webglInit===void 0)return;const G=C.source,Y=c.get(G);if(Y){const ee=Y[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(Y).length===0&&c.delete(G)}n.remove(C)}function M(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const G=C.source,Y=c.get(G);delete Y[b.__cacheKey],o.memory.textures--}function w(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let ee=0;ee<b.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,ee=G.length;Y<ee;Y++){const X=n.get(G[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(C)}let T=0;function L(){T=0}function N(){const C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function U(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function z(C,b){const G=n.get(C);if(C.isVideoTexture&&Be(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,C,b);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function H(C,b){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){q(G,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function $(C,b){const G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){q(G,C,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function B(C,b){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const te={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},J={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ue={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function K(C,b){if(b.type===1015&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===1006||b.magFilter===1007||b.magFilter===1005||b.magFilter===1008||b.minFilter===1006||b.minFilter===1007||b.minFilter===1005||b.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,te[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,te[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,te[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,J[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===1003||b.minFilter!==1005&&b.minFilter!==1008||b.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Q(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));const Y=b.source;let ee=c.get(Y);ee===void 0&&(ee={},c.set(Y,ee));const X=U(b);if(X!==C.__cacheKey){ee[X]===void 0&&(ee[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[X].usedTimes++;const Le=ee[C.__cacheKey];Le!==void 0&&(ee[C.__cacheKey].usedTimes--,Le.usedTimes===0&&M(b)),C.__cacheKey=X,C.__webglTexture=ee[X].texture}return G}function ae(C,b,G){return Math.floor(Math.floor(C/G)/b)}function ye(C,b,G,Y){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,Y,b.data);else{X.sort((se,ge)=>se.start-ge.start);let Le=0;for(let se=1;se<X.length;se++){const ge=X[Le],Fe=X[se],Pe=ge.start+ge.count,fe=ae(Fe.start,b.width,4),Ve=ae(ge.start,b.width,4);Fe.start<=Pe+1&&fe===Ve&&ae(Fe.start+Fe.count-1,b.width,4)===fe?ge.count=Math.max(ge.count,Fe.start+Fe.count-ge.start):(++Le,X[Le]=Fe)}X.length=Le+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let se=0,ge=X.length;se<ge;se++){const Fe=X[se],Pe=Math.floor(Fe.start/4),fe=Math.ceil(Fe.count/4),Ve=Pe%b.width,k=Math.floor(Pe/b.width),re=fe,he=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Ve,k,re,he,G,Y,b.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function q(C,b,G){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const ee=Q(C,b),X=b.source;t.bindTexture(Y,C.__webglTexture,i.TEXTURE0+G);const Le=n.get(X);if(X.version!==Le.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);const le=tt.getPrimaries(tt.workingColorSpace),Ae=b.colorSpace===""?null:tt.getPrimaries(b.colorSpace),Ce=b.colorSpace===""||le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let se=_(b.image,!1,s.maxTextureSize);se=Mt(b,se);const ge=r.convert(b.format,b.colorSpace),Fe=r.convert(b.type);let Pe=y(b.internalFormat,ge,Fe,b.colorSpace,b.isVideoTexture);K(Y,b);let fe;const Ve=b.mipmaps,k=b.isVideoTexture!==!0,re=Le.__version===void 0||ee===!0,he=X.dataReady,Se=A(b,se);if(b.isDepthTexture)Pe=v(b.format===1027,b.type),re&&(k?t.texStorage2D(i.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,ge,Fe,null));else if(b.isDataTexture)if(Ve.length>0){k&&re&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Ve[0].width,Ve[0].height);for(let ne=0,Z=Ve.length;ne<Z;ne++)fe=Ve[ne],k?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ge,Fe,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Pe,fe.width,fe.height,0,ge,Fe,fe.data);b.generateMipmaps=!1}else k?(re&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,se.width,se.height),he&&ye(b,se,ge,Fe)):t.texImage2D(i.TEXTURE_2D,0,Pe,se.width,se.height,0,ge,Fe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,Ve[0].width,Ve[0].height,se.depth);for(let ne=0,Z=Ve.length;ne<Z;ne++)if(fe=Ve[ne],b.format!==1023)if(ge!==null)if(k){if(he)if(b.layerUpdates.size>0){const Ee=eu(fe.width,fe.height,b.format,b.type);for(const Ge of b.layerUpdates){const pt=fe.data.subarray(Ge*Ee/fe.data.BYTES_PER_ELEMENT,(Ge+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ge,fe.width,fe.height,1,ge,pt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,ge,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Pe,fe.width,fe.height,se.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,se.depth,ge,Fe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Pe,fe.width,fe.height,se.depth,0,ge,Fe,fe.data)}else{k&&re&&t.texStorage2D(i.TEXTURE_2D,Se,Pe,Ve[0].width,Ve[0].height);for(let ne=0,Z=Ve.length;ne<Z;ne++)fe=Ve[ne],b.format!==1023?ge!==null?k?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ge,Fe,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Pe,fe.width,fe.height,0,ge,Fe,fe.data)}else if(b.isDataArrayTexture)if(k){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Pe,se.width,se.height,se.depth),he)if(b.layerUpdates.size>0){const ne=eu(se.width,se.height,b.format,b.type);for(const Z of b.layerUpdates){const Ee=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,ge,Fe,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(b.isData3DTexture)k?(re&&t.texStorage3D(i.TEXTURE_3D,Se,Pe,se.width,se.height,se.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(b.isFramebufferTexture){if(re)if(k)t.texStorage2D(i.TEXTURE_2D,Se,Pe,se.width,se.height);else{let ne=se.width,Z=se.height;for(let Ee=0;Ee<Se;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Pe,ne,Z,0,ge,Fe,null),ne>>=1,Z>>=1}}else if(Ve.length>0){if(k&&re){const ne=Ye(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Se,Pe,ne.width,ne.height)}for(let ne=0,Z=Ve.length;ne<Z;ne++)fe=Ve[ne],k?he&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge,Fe,fe):t.texImage2D(i.TEXTURE_2D,ne,Pe,ge,Fe,fe);b.generateMipmaps=!1}else if(k){if(re){const ne=Ye(se);t.texStorage2D(i.TEXTURE_2D,Se,Pe,ne.width,ne.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Fe,se)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ge,Fe,se);g(b)&&p(Y),Le.__version=X.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function j(C,b,G){if(b.image.length!==6)return;const Y=Q(C,b),ee=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const X=n.get(ee);if(ee.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+G);const Le=tt.getPrimaries(tt.workingColorSpace),le=b.colorSpace===""?null:tt.getPrimaries(b.colorSpace),Ae=b.colorSpace===""||Le===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!Ce&&!se?ge[Z]=_(b.image[Z],!0,s.maxCubemapSize):ge[Z]=se?b.image[Z].image:b.image[Z],ge[Z]=Mt(b,ge[Z]);const Fe=ge[0],Pe=r.convert(b.format,b.colorSpace),fe=r.convert(b.type),Ve=y(b.internalFormat,Pe,fe,b.colorSpace),k=b.isVideoTexture!==!0,re=X.__version===void 0||Y===!0,he=ee.dataReady;let Se=A(b,Fe);K(i.TEXTURE_CUBE_MAP,b);let ne;if(Ce){k&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ve,Fe.width,Fe.height);for(let Z=0;Z<6;Z++){ne=ge[Z].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const Ge=ne[Ee];b.format!==1023?Pe!==null?k?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ge.width,Ge.height,Pe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,Ve,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ge.width,Ge.height,Pe,fe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,Ve,Ge.width,Ge.height,0,Pe,fe,Ge.data)}}}else{if(ne=b.mipmaps,k&&re){ne.length>0&&Se++;const Z=Ye(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){k?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Pe,fe,ge[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,ge[Z].width,ge[Z].height,0,Pe,fe,ge[Z].data);for(let Ee=0;Ee<ne.length;Ee++){const pt=ne[Ee].image[Z].image;k?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,pt.width,pt.height,Pe,fe,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,Ve,pt.width,pt.height,0,Pe,fe,pt.data)}}else{k?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,fe,ge[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Pe,fe,ge[Z]);for(let Ee=0;Ee<ne.length;Ee++){const Ge=ne[Ee];k?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Pe,fe,Ge.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,Ve,Pe,fe,Ge.image[Z])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),X.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function pe(C,b,G,Y,ee,X){const Le=r.convert(G.format,G.colorSpace),le=r.convert(G.type),Ae=y(G.internalFormat,Le,le,G.colorSpace),Ce=n.get(b),se=n.get(G);if(se.__renderTarget=b,!Ce.__hasExternalTextures){const ge=Math.max(1,b.width>>X),Fe=Math.max(1,b.height>>X);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,X,Ae,ge,Fe,b.depth,0,Le,le,null):t.texImage2D(ee,X,Ae,ge,Fe,0,Le,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),be(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,se.__webglTexture,0,Ke(b)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,se.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(C,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const Y=b.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,X=v(b.stencilBuffer,ee),Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ke(b);be(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,X,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,X,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,X,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,C)}else{const Y=b.textures;for(let ee=0;ee<Y.length;ee++){const X=Y[ee],Le=r.convert(X.format,X.colorSpace),le=r.convert(X.type),Ae=y(X.internalFormat,Le,le,X.colorSpace),Ce=Ke(b);G&&be(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ae,b.width,b.height):be(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const ee=Y.__webglTexture,X=Ke(b);if(b.depthTexture.format===1026)be(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(b.depthTexture.format===1027)be(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function je(C){const b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Y}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?xe(b.__webglFramebuffer[0],C):xe(b.__webglFramebuffer,C)}else if(G){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ie(b.__webglDepthbuffer[Y],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ie(b.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,b,G){const Y=n.get(C);b!==void 0&&pe(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&je(C)}function D(C){const b=C.texture,G=n.get(C),Y=n.get(b);C.addEventListener("dispose",R);const ee=C.textures,X=C.isWebGLCubeRenderTarget===!0,Le=ee.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),X){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)G.__webglFramebuffer[le][Ae]=i.createFramebuffer()}else G.__webglFramebuffer[le]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)G.__webglFramebuffer[le]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Le)for(let le=0,Ae=ee.length;le<Ae;le++){const Ce=n.get(ee[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&be(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const Ae=ee[le];G.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const Ce=r.convert(Ae.format,Ae.colorSpace),se=r.convert(Ae.type),ge=y(Ae.internalFormat,Ce,se,Ae.colorSpace,C.isXRRenderTarget===!0),Fe=Ke(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ge,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,G.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),K(i.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)pe(G.__webglFramebuffer[le][Ae],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae);else pe(G.__webglFramebuffer[le],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let le=0,Ae=ee.length;le<Ae;le++){const Ce=ee[le],se=n.get(Ce);let ge=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),K(ge,Ce),pe(G.__webglFramebuffer,C,Ce,i.COLOR_ATTACHMENT0+le,ge,0),g(Ce)&&p(ge)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),K(le,b),b.mipmaps&&b.mipmaps.length>0)for(let Ae=0;Ae<b.mipmaps.length;Ae++)pe(G.__webglFramebuffer[Ae],C,b,i.COLOR_ATTACHMENT0,le,Ae);else pe(G.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,le,0);g(b)&&p(le),t.unbindTexture()}C.depthBuffer&&je(C)}function gt(C){const b=C.textures;for(let G=0,Y=b.length;G<Y;G++){const ee=b[G];if(g(ee)){const X=x(C),Le=n.get(ee).__webglTexture;t.bindTexture(X,Le),p(X),t.unbindTexture()}}}const He=[],ke=[];function we(C){if(C.samples>0){if(be(C)===!1){const b=C.textures,G=C.width,Y=C.height;let ee=i.COLOR_BUFFER_BIT;const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),le=b.length>1;if(le)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const se=n.get(b[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,ee,i.NEAREST),u===!0&&(He.length=0,ke.length=0,He.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(X),ke.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const se=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&u){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ke(C){return Math.min(s.maxSamples,C.samples)}function be(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Be(C){const b=o.render.frame;d.get(C)!==b&&(d.set(C,b),C.update())}function Mt(C,b){const G=C.colorSpace,Y=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==tn&&G!==""&&(tt.getTransfer(G)===dt?(Y!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Dt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=be}function gx(i,e){function t(n,s=""){let r;const o=tt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:_x,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,l="local-floor",u=1,h=null,d=null,a=null,c=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new vx,p={},x=t.getContextAttributes();let y=null,v=null;const A=[],S=[],R=new qe;let I=null;const M=new Jt;M.viewport=new st;const w=new Jt;w.viewport=new st;const T=[M,w],L=new Lp;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=A[q];return j===void 0&&(j=new La,A[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=A[q];return j===void 0&&(j=new La,A[q]=j),j.getGripSpace()},this.getHand=function(q){let j=A[q];return j===void 0&&(j=new La,A[q]=j),j.getHandSpace()};function z(q){const j=S.indexOf(q.inputSource);if(j===-1)return;const pe=A[j];pe!==void 0&&(pe.update(q.inputSource,q.frame,h||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let q=0;q<A.length;q++){const j=S[q];j!==null&&(S[q]=null,A[q].disconnect(j))}N=null,U=null,g.reset();for(const q in p)delete p[q];e.setRenderTarget(y),f=null,c=null,a=null,s=null,v=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){l=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return a===null&&_&&(a=new XRWebGLBinding(s,t)),a},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=x.stencil?1027:1026,Ie=x.stencil?1020:1014);const je={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};a=this.getBinding(),c=a.createProjectionLayer(je),s.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),v=new Wi(c.textureWidth,c.textureHeight,{format:1023,type:1009,depthTexture:new Kh(c.textureWidth,c.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Wi(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(l),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(q){for(let j=0;j<q.removed.length;j++){const pe=q.removed[j],Ie=S.indexOf(pe);Ie>=0&&(S[Ie]=null,A[Ie].disconnect(pe))}for(let j=0;j<q.added.length;j++){const pe=q.added[j];let Ie=S.indexOf(pe);if(Ie===-1){for(let je=0;je<A.length;je++)if(je>=S.length){S.push(pe),Ie=je;break}else if(S[je]===null){S[je]=pe,Ie=je;break}if(Ie===-1)break}const xe=A[Ie];xe&&xe.connect(pe)}}const B=new P,te=new P;function J(q,j,pe){B.setFromMatrixPosition(j.matrixWorld),te.setFromMatrixPosition(pe.matrixWorld);const Ie=B.distanceTo(te),xe=j.projectionMatrix.elements,je=pe.projectionMatrix.elements,Dt=xe[14]/(xe[10]-1),D=xe[14]/(xe[10]+1),gt=(xe[9]+1)/xe[5],He=(xe[9]-1)/xe[5],ke=(xe[8]-1)/xe[0],we=(je[8]+1)/je[0],Ke=Dt*ke,be=Dt*we,Be=Ie/(-ke+we),Mt=Be*-ke;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Mt),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),xe[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ye=Dt+Be,C=D+Be,b=Ke-Mt,G=be+(Ie-Mt),Y=gt*D/C*Ye,ee=He*D/C*Ye;q.projectionMatrix.makePerspective(b,G,Y,ee,Ye,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,pe=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),L.near=w.near=M.near=j,L.far=w.far=M.far=pe,(N!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,U=L.far),L.layers.mask=q.layers.mask|6,M.layers.mask=L.layers.mask&3,w.layers.mask=L.layers.mask&5;const Ie=q.parent,xe=L.cameras;ue(L,Ie);for(let je=0;je<xe.length;je++)ue(xe[je],Ie);xe.length===2?J(L,M,w):L.projectionMatrix.copy(M.projectionMatrix),K(q,L,Ie)};function K(q,j,pe){pe===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(c===null&&f===null))return u},this.setFoveation=function(q){u=q,c!==null&&(c.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let Q=null;function ae(q,j){if(d=j.getViewerPose(h||o),m=j,d!==null){const pe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,Ie=!0);for(let D=0;D<pe.length;D++){const gt=pe[D];let He=null;if(f!==null)He=f.getViewport(gt);else{const we=a.getViewSubImage(c,gt);He=we.viewport,D===0&&(e.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(v))}let ke=T[D];ke===void 0&&(ke=new Jt,ke.layers.enable(D),ke.viewport=new st,T[D]=ke),ke.matrix.fromArray(gt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(gt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(He.x,He.y,He.width,He.height),D===0&&(L.matrix.copy(ke.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ie===!0&&L.cameras.push(ke)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){a=n.getBinding();const D=a.getDepthInformation(pe[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),a=n.getBinding();for(let D=0;D<pe.length;D++){const gt=pe[D].camera;if(gt){let He=p[gt];He||(He=new Zh,p[gt]=He);const ke=a.getCameraImage(gt);He.sourceTexture=ke}}}}for(let pe=0;pe<A.length;pe++){const Ie=S[pe],xe=A[pe];Ie!==null&&xe!==void 0&&xe.update(Ie,j,h||o)}Q&&Q(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const ye=new sd;ye.setAnimationLoop(ae),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const Ii=new Vn,Mx=new ze;function bx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),a(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p)):p.isMeshStandardMaterial?(r(g,p),c(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?u(g,p,x,y):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Ii)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function u(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function a(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function c(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sx(i,e,t,n){let s={},r={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function h(x,y){let v=s[x.id];v===void 0&&(m(x),v=d(x),s[x.id]=v,x.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(x,A);const S=e.render.frame;r[x.id]!==S&&(c(x),r[x.id]=S)}function d(x){const y=a();x.__bindingPointIndex=y;const v=i.createBuffer(),A=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function a(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const y=s[x.id],v=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,R=v.length;S<R;S++){const I=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,w=I.length;M<w;M++){const T=I[M];if(f(T,S,M,A)===!0){const L=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let z=0;z<N.length;z++){const H=N[z],$=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+U,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,A){const S=x.value,R=y+"_"+v;if(A[R]===void 0)return typeof S=="number"||typeof S=="boolean"?A[R]=S:A[R]=S.clone(),!0;{const I=A[R];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return A[R]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function m(x){const y=x.uniforms;let v=0;const A=16;for(let R=0,I=y.length;R<I;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,T=M.length;w<T;w++){const L=M[w],N=Array.isArray(L.value)?L.value:[L.value];for(let U=0,z=N.length;U<z;U++){const H=N[U],$=_(H),B=v%A,te=B%$.boundary,J=B+te;v+=te,J!==0&&A-J<$.storage&&(v+=A-J),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=$.storage}}}const S=v%A;return S>0&&(v+=A-S),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:u,update:h,dispose:p}}class wx{constructor(e={}){const{canvas:t=Ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1,reversedDepthBuffer:c=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Ot;let S=0,R=0,I=null,M=-1,w=null;const T=new st,L=new st;let N=null;const U=new oe(0);let z=0,H=t.width,$=t.height,B=1,te=null,J=null;const ue=new st(0,0,H,$),K=new st(0,0,H,$);let Q=!1;const ae=new ql;let ye=!1,q=!1;const j=new ze,pe=new P,Ie=new st,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Dt(){return I===null?B:1}let D=n;function gt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const F="webgl2";if(D=gt(F,E),D===null)throw gt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,ke,we,Ke,be,Be,Mt,Ye,C,b,G,Y,ee,X,Le,le,Ae,Ce,se,ge,Fe,Pe,fe,Ve;function k(){He=new N0(D),He.init(),Pe=new gx(D,He),ke=new A0(D,He,e,Pe),we=new px(D,He),ke.reversedDepthBuffer&&c&&we.buffers.depth.setReversed(!0),Ke=new F0(D),be=new tx,Be=new mx(D,He,we,be,ke,Pe,Ke),Mt=new C0(v),Ye=new D0(v),C=new Vp(D),fe=new T0(D,C),b=new k0(D,C,Ke,fe),G=new B0(D,b,C,Ke),se=new O0(D,ke,Be),le=new R0(be),Y=new ex(v,Mt,Ye,He,ke,fe,le),ee=new bx(v,be),X=new ix,Le=new cx(He),Ce=new w0(v,Mt,Ye,we,G,f,u),Ae=new dx(v,G,ke),Ve=new Sx(D,Ke,ke,we),ge=new E0(D,He,Ke),Fe=new U0(D,He,Ke),Ke.programs=Y.programs,v.capabilities=ke,v.extensions=He,v.properties=be,v.renderLists=X,v.shadowMap=Ae,v.state=we,v.info=Ke}k();const re=new yx(v,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(H,$,!1))},this.getSize=function(E){return E.set(H,$)},this.setSize=function(E,F,V=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,$=F,t.width=Math.floor(E*B),t.height=Math.floor(F*B),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(H*B,$*B).floor()},this.setDrawingBufferSize=function(E,F,V){H=E,$=F,B=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,F,V,W){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,F,V,W),we.viewport(T.copy(ue).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,F,V,W){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,F,V,W),we.scissor(L.copy(K).multiplyScalar(B).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){we.setScissorTest(Q=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let O=!1;if(I!==null){const ie=I.texture.format;O=ie===1033||ie===1031||ie===1029}if(O){const ie=I.texture.type,me=ie===1009||ie===1014||ie===1012||ie===1020||ie===1017||ie===1018,Te=Ce.getClearColor(),Me=Ce.getClearAlpha(),Ue=Te.r,Oe=Te.g,De=Te.b;me?(m[0]=Ue,m[1]=Oe,m[2]=De,m[3]=Me,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ue,_[1]=Oe,_[2]=De,_[3]=Me,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ce.dispose(),X.dispose(),Le.dispose(),be.dispose(),Mt.dispose(),Ye.dispose(),G.dispose(),fe.dispose(),Ve.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",Nn),re.removeEventListener("sessionend",uc),Ti.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=Ke.autoReset,F=Ae.enabled,V=Ae.autoUpdate,W=Ae.needsUpdate,O=Ae.type;k(),Ke.autoReset=E,Ae.enabled=F,Ae.autoUpdate=V,Ae.needsUpdate=W,Ae.type=O}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){const F=E.target;F.removeEventListener("dispose",Z),Ee(F)}function Ee(E){Ge(E),be.remove(E)}function Ge(E){const F=be.get(E).programs;F!==void 0&&(F.forEach(function(V){Y.releaseProgram(V)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,O,ie){F===null&&(F=xe);const me=O.isMesh&&O.matrixWorld.determinant()<0,Te=tf(E,F,V,W,O);we.setMaterial(W,me);let Me=V.index,Ue=1;if(W.wireframe===!0){if(Me=b.getWireframeAttribute(V),Me===void 0)return;Ue=2}const Oe=V.drawRange,De=V.attributes.position;let Qe=Oe.start*Ue,ht=(Oe.start+Oe.count)*Ue;ie!==null&&(Qe=Math.max(Qe,ie.start*Ue),ht=Math.min(ht,(ie.start+ie.count)*Ue)),Me!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Me.count)):De!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,De.count));const Et=ht-Qe;if(Et<0||Et===1/0)return;fe.setup(O,W,Te,V,Me);let _t,ft=ge;if(Me!==null&&(_t=C.get(Me),ft=Fe,ft.setIndex(_t)),O.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*Dt()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(O.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),we.setLineWidth(Ne*Dt()),O.isLineSegments?ft.setMode(D.LINES):O.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else O.isPoints?ft.setMode(D.POINTS):O.isSprite&&ft.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))ft.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,bt=O._multiDrawCounts,nt=O._multiDrawCount,on=Me?C.get(Me).bytesPerElement:1,Zi=be.get(W).currentProgram.getUniforms();for(let an=0;an<nt;an++)Zi.setValue(D,"_gl_DrawID",an),ft.render(Ne[an]/on,bt[an])}else if(O.isInstancedMesh)ft.renderInstances(Qe,Et,O.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,Ne);ft.renderInstances(Qe,Et,bt)}else ft.render(Qe,Et)};function pt(E,F,V){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,zr(E,F,V),E.side=0,E.needsUpdate=!0,zr(E,F,V),E.side=2):zr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),p=Le.get(V),p.init(F),y.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Te=ie[me];pt(Te,V,O),W.add(Te)}else pt(ie,V,O),W.add(ie)}),p=y.pop(),W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(O=>{function ie(){if(W.forEach(function(me){be.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){O(E);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function jn(E){rt&&rt(E)}function Nn(){Ti.stop()}function uc(){Ti.start()}const Ti=new sd;Ti.setAnimationLoop(jn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(E){rt=E,re.setAnimationLoop(E),E===null?Ti.stop():Ti.start()},re.addEventListener("sessionstart",Nn),re.addEventListener("sessionend",uc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,I),p=Le.get(E,y.length),p.init(F),y.push(p),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ae.setFromProjectionMatrix(j,2e3,F.reversedDepth),q=this.localClippingEnabled,ye=le.init(this.clippingPlanes,q),g=X.get(E,x.length),g.init(),x.push(g),re.enabled===!0&&re.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&ca(ie,F,-1/0,v.sortObjects)}ca(E,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(te,J),je=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,je&&Ce.addToRenderList(g,E),this.info.render.frame++,ye===!0&&le.beginShadows();const V=p.state.shadowsArray;Ae.render(V,E,F),ye===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const ie=F.cameras;if(O.length>0)for(let me=0,Te=ie.length;me<Te;me++){const Me=ie[me];dc(W,O,E,Me)}je&&Ce.render(E);for(let me=0,Te=ie.length;me<Te;me++){const Me=ie[me];hc(g,E,Me,Me.viewport)}}else O.length>0&&dc(W,O,E,F),je&&Ce.render(E),hc(g,E,F);I!==null&&R===0&&(Be.updateMultisampleRenderTarget(I),Be.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,F),fe.resetDefaultState(),M=-1,w=null,y.pop(),y.length>0?(p=y[y.length-1],ye===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ca(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){W&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const me=G.update(E),Te=E.material;Te.visible&&g.push(E,me,Te,V,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const me=G.update(E),Te=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Te)){const Me=me.groups;for(let Ue=0,Oe=Me.length;Ue<Oe;Ue++){const De=Me[Ue],Qe=Te[De.materialIndex];Qe&&Qe.visible&&g.push(E,me,Qe,V,Ie.z,De)}}else Te.visible&&g.push(E,me,Te,V,Ie.z,null)}}const ie=E.children;for(let me=0,Te=ie.length;me<Te;me++)ca(ie[me],F,V,W)}function hc(E,F,V,W){const O=E.opaque,ie=E.transmissive,me=E.transparent;p.setupLightsView(V),ye===!0&&le.setGlobalState(v.clippingPlanes,V),W&&we.viewport(T.copy(W)),O.length>0&&Br(O,F,V),ie.length>0&&Br(ie,F,V),me.length>0&&Br(me,F,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function dc(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Wi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ie=p.state.transmissionRenderTarget[W.id],me=W.viewport||T;ie.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Te=v.getRenderTarget(),Me=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(U),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),je&&Ce.render(V);const Oe=v.toneMapping;v.toneMapping=0;const De=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ye===!0&&le.setGlobalState(v.clippingPlanes,W),Br(E,V,W),Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ht=0,Et=F.length;ht<Et;ht++){const _t=F[ht],ft=_t.object,Ne=_t.geometry,bt=_t.material,nt=_t.group;if(bt.side===2&&ft.layers.test(W.layers)){const on=bt.side;bt.side=1,bt.needsUpdate=!0,fc(ft,V,W,Ne,bt,nt),bt.side=on,bt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie))}v.setRenderTarget(Te,Me,Ue),v.setClearColor(U,z),De!==void 0&&(W.viewport=De),v.toneMapping=Oe}function Br(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ie=E.length;O<ie;O++){const me=E[O],Te=me.object,Me=me.geometry,Ue=me.group;let Oe=me.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),Te.layers.test(V.layers)&&fc(Te,F,V,Me,Oe,Ue)}}function fc(E,F,V,W,O,ie){E.onBeforeRender(v,F,V,W,O,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,V,W,E,ie),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,ie),O.side=0,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,E,ie),O.side=2):v.renderBufferDirect(V,F,W,O,E,ie),E.onAfterRender(v,F,V,W,O,ie)}function zr(E,F,V){F.isScene!==!0&&(F=xe);const W=be.get(E),O=p.state.lights,ie=p.state.shadowsArray,me=O.state.version,Te=Y.getParameters(E,O.state,ie,F,V),Me=Y.getProgramCacheKey(Te);let Ue=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?Ye:Mt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Z),Ue=new Map,W.programs=Ue);let Oe=Ue.get(Me);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===me)return mc(E,Te),Oe}else Te.uniforms=Y.getUniforms(E),E.onBeforeCompile(Te,v),Oe=Y.acquireProgram(Te,Me),Ue.set(Me,Oe),W.uniforms=Te.uniforms;const De=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=le.uniform),mc(E,Te),W.needsLights=sf(E),W.lightsStateVersion=me,W.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function pc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ko.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function mc(E,F){const V=be.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function tf(E,F,V,W,O){F.isScene!==!0&&(F=xe),Be.resetTextureUnits();const ie=F.fog,me=W.isMeshStandardMaterial?F.environment:null,Te=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tn,Me=(W.isMeshStandardMaterial?Ye:Mt).get(W.envMap||me),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color;let Et=0;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=v.toneMapping);const _t=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=_t!==void 0?_t.length:0,Ne=be.get(W),bt=p.state.lights;if(ye===!0&&(q===!0||E!==w)){const jt=E===w&&W.id===M;le.setState(W,E,jt)}let nt=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==bt.state.version||Ne.outputColorSpace!==Te||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==Me||W.fog===!0&&Ne.fog!==ie||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==le.numPlanes||Ne.numIntersection!==le.numIntersection)||Ne.vertexAlphas!==Ue||Ne.vertexTangents!==Oe||Ne.morphTargets!==De||Ne.morphNormals!==Qe||Ne.morphColors!==ht||Ne.toneMapping!==Et||Ne.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Ne.__version=W.version);let on=Ne.currentProgram;nt===!0&&(on=zr(W,F,O));let Zi=!1,an=!1,Zs=!1;const St=on.getUniforms(),pn=Ne.uniforms;if(we.useProgram(on.program)&&(Zi=!0,an=!0,Zs=!0),W.id!==M&&(M=W.id,an=!0),Zi||w!==E){we.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(D,"projectionMatrix",E.projectionMatrix),St.setValue(D,"viewMatrix",E.matrixWorldInverse);const nn=St.map.cameraPosition;nn!==void 0&&nn.setValue(D,pe.setFromMatrixPosition(E.matrixWorld)),ke.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,an=!0,Zs=!0)}if(O.isSkinnedMesh){St.setOptional(D,O,"bindMatrix"),St.setOptional(D,O,"bindMatrixInverse");const jt=O.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),St.setValue(D,"boneTexture",jt.boneTexture,Be))}O.isBatchedMesh&&(St.setOptional(D,O,"batchingTexture"),St.setValue(D,"batchingTexture",O._matricesTexture,Be),St.setOptional(D,O,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",O._indirectTexture,Be),St.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",O._colorsTexture,Be));const mn=V.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&se.update(O,V,on),(an||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,St.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pn.envMap.value=Me,pn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(pn.envMapIntensity.value=F.environmentIntensity),an&&(St.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&nf(pn,Zs),ie&&W.fog===!0&&ee.refreshFogUniforms(pn,ie),ee.refreshMaterialUniforms(pn,W,B,$,p.state.transmissionRenderTarget[E.id]),ko.upload(D,pc(Ne),pn,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ko.upload(D,pc(Ne),pn,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(D,"center",O.center),St.setValue(D,"modelViewMatrix",O.modelViewMatrix),St.setValue(D,"normalMatrix",O.normalMatrix),St.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let nn=0,ua=jt.length;nn<ua;nn++){const Ei=jt[nn];Ve.update(Ei,on),Ve.bind(Ei,on)}}return on}function nf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function sf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,F,V){const W=be.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=F,be.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const V=be.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const rf=D.createFramebuffer();this.setRenderTarget=function(E,F=0,V=0){I=E,S=F,R=V;let W=!0,O=null,ie=!1,me=!1;if(E){const Me=be.get(E);if(Me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)Be.setupRenderTarget(E);else if(Me.__hasExternalTextures)Be.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const De=E.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Oe=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?O=Oe[F][V]:O=Oe[F],ie=!0):E.samples>0&&Be.useMultisampledRTT(E)===!1?O=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[V]:O=Oe,T.copy(E.viewport),L.copy(E.scissor),N=E.scissorTest}else T.copy(ue).multiplyScalar(B).floor(),L.copy(K).multiplyScalar(B).floor(),N=Q;if(V!==0&&(O=rf),we.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&we.drawBuffers(E,O),we.viewport(T),we.scissor(L),we.setScissorTest(N),ie){const Me=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,V)}else if(me){const Me=F;for(let Ue=0;Ue<E.textures.length;Ue++){const Oe=be.get(E.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,V,Me)}}else if(E!==null&&V!==0){const Me=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(E,F,V,W,O,ie,me,Te=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){we.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ue=E.textures[Te],Oe=Ue.format,De=Ue.type;if(!ke.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),D.readPixels(F,V,W,O,Pe.convert(Oe),Pe.convert(De),ie))}finally{const Ue=I!==null?be.get(I).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,O,ie,me,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O){we.bindFramebuffer(D.FRAMEBUFFER,Me);const Ue=E.textures[Te],Oe=Ue.format,De=Ue.type;if(!ke.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Te),D.readPixels(F,V,W,O,Pe.convert(Oe),Pe.convert(De),0);const ht=I!==null?be.get(I).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,ht);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Af(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Qe),D.deleteSync(Et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,V=0){const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),ie=Math.floor(E.image.height*W),me=F!==null?F.x:0,Te=F!==null?F.y:0;Be.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,me,Te,O,ie),we.unbindTexture()};const of=D.createFramebuffer(),af=D.createFramebuffer();this.copyTextureToTexture=function(E,F,V=null,W=null,O=0,ie=null){ie===null&&(O!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let me,Te,Me,Ue,Oe,De,Qe,ht,Et;const _t=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(V!==null)me=V.max.x-V.min.x,Te=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Oe=V.min.y,De=V.isBox3?V.min.z:0;else{const mn=Math.pow(2,-O);me=Math.floor(_t.width*mn),Te=Math.floor(_t.height*mn),E.isDataArrayTexture?Me=_t.depth:E.isData3DTexture?Me=Math.floor(_t.depth*mn):Me=1,Ue=0,Oe=0,De=0}W!==null?(Qe=W.x,ht=W.y,Et=W.z):(Qe=0,ht=0,Et=0);const ft=Pe.convert(F.format),Ne=Pe.convert(F.type);let bt;F.isData3DTexture?(Be.setTexture3D(F,0),bt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),bt=D.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),on=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zi=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),Zs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ue),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De);const St=E.isDataArrayTexture||E.isData3DTexture,pn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const mn=be.get(E),jt=be.get(F),nn=be.get(mn.__renderTarget),ua=be.get(jt.__renderTarget);we.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Ei=0;Ei<Me;Ei++)St&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(E).__webglTexture,O,De+Ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(F).__webglTexture,ie,Et+Ei)),D.blitFramebuffer(Ue,Oe,me,Te,Qe,ht,me,Te,D.DEPTH_BUFFER_BIT,D.NEAREST);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||be.has(E)){const mn=be.get(E),jt=be.get(F);we.bindFramebuffer(D.READ_FRAMEBUFFER,of),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,af);for(let nn=0;nn<Me;nn++)St?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mn.__webglTexture,O,De+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mn.__webglTexture,O),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,ie,Et+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,ie),O!==0?D.blitFramebuffer(Ue,Oe,me,Te,Qe,ht,me,Te,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(bt,ie,Qe,ht,Et+nn,Ue,Oe,me,Te):D.copyTexSubImage2D(bt,ie,Qe,ht,Ue,Oe,me,Te);we.bindFramebuffer(D.READ_FRAMEBUFFER,null),we.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(bt,ie,Qe,ht,Et,me,Te,Me,ft,Ne,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,ie,Qe,ht,Et,me,Te,Me,ft,_t.data):D.texSubImage3D(bt,ie,Qe,ht,Et,me,Te,Me,ft,Ne,_t):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Qe,ht,me,Te,ft,Ne,_t.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Qe,ht,_t.width,_t.height,ft,_t.data):D.texSubImage2D(D.TEXTURE_2D,ie,Qe,ht,me,Te,ft,Ne,_t);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,on),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zi),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zs),ie===0&&F.generateMipmaps&&D.generateMipmap(bt),we.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&Be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){S=0,R=0,I=null,we.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const mo=matchMedia("(pointer: coarse)").matches,qa={low:1,medium:1.5,high:2};function Tx(i,e){let t="";try{const r=i.getExtension("WEBGL_debug_renderer_info");r&&(t=String(i.getParameter(r.UNMASKED_RENDERER_WEBGL)??""))}catch{}const n=t.toLowerCase();if(/swiftshader|llvmpipe|software|basic render/.test(n)||/mali-(4|t[678])|adreno \(tm\) [345]|powervr|intel.*(hd|gma) graphics/.test(n))return"low";if(/apple (m[1-9]|a1[2-9]|gpu)|nvidia|geforce|rtx|radeon rx|adreno \(tm\) [67]|mali-g[7-9]/.test(n))return"high";const s=navigator.hardwareConcurrency??4;return s<=4?"low":e?s>=8?"medium":"low":s>=8?"high":"medium"}async function Ex(i={}){const{fov:e=60,near:t=.1,far:n=500,background:s=724242,fog:r,antialias:o=!0,shadows:l=!0}=i;let u=mo?"medium":"high";const h=new Jf;h.background=new oe(s),r&&(h.fog=new Gl(r[0],r[1],r[2]));const d=new Jt(e,innerWidth/innerHeight,t,n);d.position.set(0,5,10);const a=new wx({antialias:o&&!mo,powerPreference:"high-performance"});a.setSize(innerWidth,innerHeight),a.setPixelRatio(Math.min(devicePixelRatio,qa[u])),a.shadowMap.enabled=l,a.shadowMap.type=2,a.toneMapping=4,document.body.appendChild(a.domElement);const c=new Ip,f=[],m=[];let _=null;addEventListener("resize",()=>{const S=innerWidth,R=innerHeight;d.aspect=S/R,d.updateProjectionMatrix(),a.setSize(S,R),a.setPixelRatio(Math.min(devicePixelRatio,qa[u]));for(const I of m)I(S,R)});let g=0,p=0;const x=()=>{g=requestAnimationFrame(x),y.step(Math.min(c.getDelta(),1/20))},y={scene:h,camera:d,renderer:a,clock:c,gui:_,quality:u,isTouch:mo,setQuality:()=>{},running:!1,onUpdate(S){return f.push(S),()=>{const R=f.indexOf(S);R>=0&&f.splice(R,1)}},onResize(S){m.push(S)},step(S){p+=S;for(const R of f)R(S,p);a.render(h,d)},start(){y.running||(y.running=!0,c.getDelta(),g=requestAnimationFrame(x))},stop(){y.running=!1,cancelAnimationFrame(g)}};function v(S){u=S,y.quality=S,a.setPixelRatio(Math.min(devicePixelRatio,qa[S])),a.shadowMap.enabled=l&&S!=="low"}y.setQuality=v,v(Tx(a.getContext(),mo));let A=!1;return addEventListener("blur",()=>{y.running&&(A=!0,y.stop())}),addEventListener("focus",()=>{A&&(A=!1,y.start())}),y}const cd={web:{ads:!0,skipAfterTries:0},"crazygames-basic":{ads:!1,skipAfterTries:3}};function Ax(i){const e=i;return e in cd?e:null}const Rx=Ax("crazygames-basic")??"web",ud={...cd[Rx]},Cx=new Set([" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"]),Px="input[type=range], input[type=text], input:not([type]), textarea, select, [contenteditable]",Lx="button, input:not([type=range]), textarea, select, [contenteditable]";function Ix(i){for(let e=i instanceof Element?i:null;e&&e!==document.body;e=e.parentElement){const t=getComputedStyle(e).overflowY;if((t==="auto"||t==="scroll")&&e.scrollHeight>e.clientHeight+1)return!0}return!1}function Dx(){addEventListener("wheel",i=>{(i.ctrlKey||!Ix(i.target))&&i.preventDefault()},{passive:!1}),addEventListener("keydown",i=>{!Cx.has(i.key)||(i.altKey||i.metaKey)&&(i.key==="ArrowLeft"||i.key==="ArrowRight"||i.key==="Home")||(i.target instanceof Element?i.target:null)?.closest(i.key===" "?Lx:Px)||i.preventDefault()}),addEventListener("contextmenu",i=>i.preventDefault())}var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa={};var Tu;function Nx(){return Tu||(Tu=1,(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var m=c._howls[f]._getSoundIds(),_=0;_<m.length;_++){var g=c._howls[f]._soundById(m[_]);g&&g._node&&(g._node.volume=g._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||d(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var m=c._howls[f]._getSoundIds(),_=0;_<m.length;_++){var g=c._howls[f]._soundById(m[_]);g&&g._node&&(g._node.muted=a?!0:g._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var f=c.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",_=m.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,x=m.match(/Version\/(.*?) /),y=p&&x&&parseInt(x[1],10)<15;return a._codecs={mp3:!!(!g&&(f||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!y&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!y&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(f){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var g=a._howls[_]._getSoundIds(),p=0;p<g.length;p++){var x=a._howls[_]._soundById(g[p]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}a._autoResume();var y=a.ctx.createBufferSource();y.buffer=a._scratchBuffer,y.connect(a.ctx.destination),typeof y.start>"u"?y.noteOn(0):y.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),y.onended=function(){y.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var v=0;v<a._howls.length;v++)a._howls[v]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var f=0;f<a._howls[c]._sounds.length;f++)if(!a._howls[c]._sounds[f]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||d(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var f=0;f<a._src.length;f++){var m,_;if(a._format&&a._format[f])m=a._format[f];else{if(_=a._src[f],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(_),m||(m=/\.([^.]+)$/.exec(_.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){c=a._src[f];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new s(a),a._webAudio&&o(a),a},play:function(a,c){var f=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&f._state==="loaded"&&!f._sprite[a])return null;if(typeof a>"u"&&(a="__default",!f._playLock)){for(var _=0,g=0;g<f._sounds.length;g++)f._sounds[g]._paused&&!f._sounds[g]._ended&&(_++,m=f._sounds[g]._id);_===1?a=null:m=null}}var p=m?f._soundById(m):f._inactiveSound();if(!p)return null;if(m&&!a&&(a=p._sprite||"__default"),f._state!=="loaded"){p._sprite=a,p._ended=!1;var x=p._id;return f._queue.push({event:"play",action:function(){f.play(x)}}),x}if(m&&!p._paused)return c||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var y=Math.max(0,p._seek>0?p._seek:f._sprite[a][0]/1e3),v=Math.max(0,(f._sprite[a][0]+f._sprite[a][1])/1e3-y),A=v*1e3/Math.abs(p._rate),S=f._sprite[a][0]/1e3,R=(f._sprite[a][0]+f._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var I=function(){p._paused=!1,p._seek=y,p._start=S,p._stop=R,p._loop=!!(p._loop||f._sprite[a][2])};if(y>=R){f._ended(p);return}var M=p._node;if(f._webAudio){var w=function(){f._playLock=!1,I(),f._refreshBuffer(p);var U=p._muted||f._muted?0:p._volume;M.gain.setValueAtTime(U,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?p._loop?M.bufferSource.noteGrainOn(0,y,86400):M.bufferSource.noteGrainOn(0,y,v):p._loop?M.bufferSource.start(0,y,86400):M.bufferSource.start(0,y,v),A!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),A)),c||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?w():(f._playLock=!0,f.once("resume",w),f._clearTimer(p._id))}else{var T=function(){M.currentTime=y,M.muted=p._muted||f._muted||t._muted||M.muted,M.volume=p._volume*t.volume(),M.playbackRate=p._rate;try{var U=M.play();if(U&&typeof Promise<"u"&&(U instanceof Promise||typeof U.then=="function")?(f._playLock=!0,I(),U.then(function(){f._playLock=!1,M._unlocked=!0,c?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):c||(f._playLock=!1,I(),f._emit("play",p._id)),M.playbackRate=p._rate,M.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),A):(f._endTimers[p._id]=function(){f._ended(p),M.removeEventListener("ended",f._endTimers[p._id],!1)},M.addEventListener("ended",f._endTimers[p._id],!1))}catch(z){f._emit("playerror",p._id,z)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=f._src,M.load());var L=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||L)T();else{f._playLock=!0,f._state="loading";var N=function(){f._state="loaded",T(),M.removeEventListener(t._canPlayEvent,N,!1)};M.addEventListener(t._canPlayEvent,N,!1),f._clearTimer(p._id)}}return p._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var f=c._getSoundIds(a),m=0;m<f.length;m++){c._clearTimer(f[m]);var _=c._soundById(f[m]);if(_&&!_._paused&&(_._seek=c.seek(f[m]),_._rateSeek=0,_._paused=!0,c._stopFade(f[m]),_._node))if(c._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),c._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||c._emit("pause",_?_._id:null)}return c},stop:function(a,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(a)}}),f;for(var m=f._getSoundIds(a),_=0;_<m.length;_++){f._clearTimer(m[_]);var g=f._soundById(m[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,f._stopFade(m[_]),g._node&&(f._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),f._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&f._clearSound(g._node))),c||f._emit("stop",g._id))}return f},mute:function(a,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(a,c)}}),f;if(typeof c>"u")if(typeof a=="boolean")f._muted=a;else return f._muted;for(var m=f._getSoundIds(c),_=0;_<m.length;_++){var g=f._soundById(m[_]);g&&(g._muted=a,g._interval&&f._stopFade(g._id),f._webAudio&&g._node?g._node.gain.setValueAtTime(a?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:a),f._emit("mute",g._id))}return f},volume:function(){var a=this,c=arguments,f,m;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var _=a._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):f=parseFloat(c[0])}else c.length>=2&&(f=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof m>"u"&&(a._volume=f),m=a._getSoundIds(m);for(var x=0;x<m.length;x++)p=a._soundById(m[x]),p&&(p._volume=f,c[2]||a._stopFade(m[x]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),a._emit("volume",p._id))}else return p=m?a._soundById(m):a._sounds[0],p?p._volume:0;return a},fade:function(a,c,f,m){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,c,f,m)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),f=parseFloat(f),_.volume(a,m);for(var g=_._getSoundIds(m),p=0;p<g.length;p++){var x=_._soundById(g[p]);if(x){if(m||_._stopFade(g[p]),_._webAudio&&!x._muted){var y=t.ctx.currentTime,v=y+f/1e3;x._volume=a,x._node.gain.setValueAtTime(a,y),x._node.gain.linearRampToValueAtTime(c,v)}_._startFadeInterval(x,a,c,f,g[p],typeof m>"u")}}return _},_startFadeInterval:function(a,c,f,m,_,g){var p=this,x=c,y=f-c,v=Math.abs(y/.01),A=Math.max(4,v>0?m/v:m),S=Date.now();a._fadeTo=f,a._interval=setInterval(function(){var R=(Date.now()-S)/m;S=Date.now(),x+=y*R,x=Math.round(x*100)/100,y<0?x=Math.max(f,x):x=Math.min(f,x),p._webAudio?a._volume=x:p.volume(x,a._id,!0),g&&(p._volume=x),(f<c&&x<=f||f>c&&x>=f)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(f,a._id),p._emit("fade",a._id))},A)},_stopFade:function(a){var c=this,f=c._soundById(a);return f&&f._interval&&(c._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,c.volume(f._fadeTo,a),f._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,f,m,_;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")f=c[0],a._loop=f;else return _=a._soundById(parseInt(c[0],10)),_?_._loop:!1;else c.length===2&&(f=c[0],m=parseInt(c[1],10));for(var g=a._getSoundIds(m),p=0;p<g.length;p++)_=a._soundById(g[p]),_&&(_._loop=f,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=f,f&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(g[p])&&(a.pause(g[p],!0),a.play(g[p],!0)))));return a},rate:function(){var a=this,c=arguments,f,m;if(c.length===0)m=a._sounds[0]._id;else if(c.length===1){var _=a._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):f=parseFloat(c[0])}else c.length===2&&(f=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof f=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof m>"u"&&(a._rate=f),m=a._getSoundIds(m);for(var x=0;x<m.length;x++)if(p=a._soundById(m[x]),p){a.playing(m[x])&&(p._rateSeek=a.seek(m[x]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var y=a.seek(m[x]),v=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-y,A=v*1e3/Math.abs(p._rate);(a._endTimers[m[x]]||!p._paused)&&(a._clearTimer(m[x]),a._endTimers[m[x]]=setTimeout(a._ended.bind(a,p),A)),a._emit("rate",p._id)}}else return p=a._soundById(m),p?p._rate:a._rate;return a},seek:function(){var a=this,c=arguments,f,m;if(c.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(c.length===1){var _=a._getSoundIds(),g=_.indexOf(c[0]);g>=0?m=parseInt(c[0],10):a._sounds.length&&(m=a._sounds[0]._id,f=parseFloat(c[0]))}else c.length===2&&(f=parseFloat(c[0]),m=parseInt(c[1],10));if(typeof m>"u")return 0;if(typeof f=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var p=a._soundById(m);if(p)if(typeof f=="number"&&f>=0){var x=a.playing(m);x&&a.pause(m,!0),p._seek=f,p._ended=!1,a._clearTimer(m),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var y=function(){x&&a.play(m,!0),a._emit("seek",m)};if(x&&!a._webAudio){var v=function(){a._playLock?setTimeout(v,0):y()};setTimeout(v,0)}else y()}else if(a._webAudio){var A=a.playing(m)?t.ctx.currentTime-p._playStart:0,S=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(S+A*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var f=c._soundById(a);return f?!f._paused:!1}for(var m=0;m<c._sounds.length;m++)if(!c._sounds[m]._paused)return!0;return!1},duration:function(a){var c=this,f=c._duration,m=c._soundById(a);return m&&(f=c._sprite[m._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,f=0;f<c.length;f++)c[f]._paused||a.stop(c[f]._id),a._webAudio||(a._clearSound(c[f]._node),c[f]._node.removeEventListener("error",c[f]._errorFn,!1),c[f]._node.removeEventListener(t._canPlayEvent,c[f]._loadFn,!1),c[f]._node.removeEventListener("ended",c[f]._endFn,!1),t._releaseHtml5Audio(c[f]._node)),delete c[f]._node,a._clearTimer(c[f]._id);var m=t._howls.indexOf(a);m>=0&&t._howls.splice(m,1);var _=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===a._src||a._src.indexOf(t._howls[f]._src)>=0){_=!1;break}return r&&_&&delete r[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,f,m){var _=this,g=_["_on"+a];return typeof c=="function"&&g.push(m?{id:f,fn:c,once:m}:{id:f,fn:c}),_},off:function(a,c,f){var m=this,_=m["_on"+a],g=0;if(typeof c=="number"&&(f=c,c=null),c||f)for(g=0;g<_.length;g++){var p=f===_[g].id;if(c===_[g].fn&&p||!c&&p){_.splice(g,1);break}}else if(a)m["_on"+a]=[];else{var x=Object.keys(m);for(g=0;g<x.length;g++)x[g].indexOf("_on")===0&&Array.isArray(m[x[g]])&&(m[x[g]]=[])}return m},once:function(a,c,f){var m=this;return m.on(a,c,f,1),m},_emit:function(a,c,f){for(var m=this,_=m["_on"+a],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===c||a==="load")&&(setTimeout(function(p){p.call(this,c,f)}.bind(m,_[g].fn),0),_[g].once&&m.off(a,_[g].fn,_[g].id));return m._loadQueue(a),m},_loadQueue:function(a){var c=this;if(c._queue.length>0){var f=c._queue[0];f.event===a&&(c._queue.shift(),c._loadQueue()),a||f.action()}return c},_ended:function(a){var c=this,f=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var m=!!(a._loop||c._sprite[f][2]);if(c._emit("end",a._id),!c._webAudio&&m&&c.stop(a._id,!0).play(a._id),c._webAudio&&m){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),_)}return c._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!m&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var f=c._soundById(a);f&&f._node&&f._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,f=0;f<c._sounds.length;f++)if(a===c._sounds[f]._id)return c._sounds[f];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new s(a)},_drain:function(){var a=this,c=a._pool,f=0,m=0;if(!(a._sounds.length<c)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&f++;for(m=a._sounds.length-1;m>=0;m--){if(f<=c)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),f--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var f=[],m=0;m<c._sounds.length;m++)f.push(c._sounds[m]._id);return f}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=r[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),f))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var s=function(a){this._parent=a,this.init()};s.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,f=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(f,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=f*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var r={},o=function(a){var c=a._src;if(r[c]){a._duration=r[c].duration,h(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var f=atob(c.split(",")[1]),m=new Uint8Array(f.length),_=0;_<f.length;++_)m[_]=f.charCodeAt(_);u(m.buffer,a)}else{var g=new XMLHttpRequest;g.open(a._xhr.method,c,!0),g.withCredentials=a._xhr.withCredentials,g.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){g.setRequestHeader(p,a._xhr.headers[p])}),g.onload=function(){var p=(g.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}u(g.response,a)},g.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete r[c],a.load())},l(g)}},l=function(a){try{a.send()}catch{a.onerror()}},u=function(a,c){var f=function(){c._emit("loaderror",null,"Decoding audio data failed.")},m=function(_){_&&c._sounds.length>0?(r[c._src]=_,h(c,_)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(m).catch(f):t.ctx.decodeAudioData(a,m,f)},h=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=c?parseInt(c[1],10):null;if(a&&f&&f<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof or<"u"?(or.HowlerGlobal=e,or.Howler=t,or.Howl=n,or.Sound=s):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=s)})();(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var s=n._howls.length-1;s>=0;s--)n._howls[s].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,s){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,s=typeof s!="number"?r._pos[2]:s,typeof t=="number")r._pos=[t,n,s],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,s,r,o,l){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,s=typeof s!="number"?h[2]:s,r=typeof r!="number"?h[3]:r,o=typeof o!="number"?h[4]:o,l=typeof l!="number"?h[5]:l,typeof t=="number")u._orientation=[t,n,s,r,o,l],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,s,r,o,l);else return h;return u},Howl.prototype.init=(function(t){return function(n){var s=this;return s._orientation=n.orientation||[1,0,0],s._stereo=n.stereo||null,s._pos=n.pos||null,s._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},s._onstereo=n.onstereo?[{fn:n.onstereo}]:[],s._onpos=n.onpos?[{fn:n.onpos}]:[],s._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}})(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"stereo",action:function(){s.stereo(t,n)}}),s;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")s._stereo=t,s._pos=[t,0,0];else return s._stereo;for(var o=s._getSoundIds(n),l=0;l<o.length;l++){var u=s._soundById(o[l]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,r),r==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),s._emit("stereo",u._id);else return u._stereo}return s},Howl.prototype.pos=function(t,n,s,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,s,r)}}),o;if(n=typeof n!="number"?0:n,s=typeof s!="number"?-.5:s,typeof r>"u")if(typeof t=="number")o._pos=[t,n,s];else return o._pos;for(var l=o._getSoundIds(r),u=0;u<l.length;u++){var h=o._soundById(l[u]);if(h)if(typeof t=="number")h._pos=[t,n,s],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(s,Howler.ctx.currentTime)):h._panner.setPosition(t,n,s)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(t,n,s,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,s,r)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,s=typeof s!="number"?o._orientation[2]:s,typeof r>"u")if(typeof t=="number")o._orientation=[t,n,s];else return o._orientation;for(var l=o._getSoundIds(r),u=0;u<l.length;u++){var h=o._soundById(l[u]);if(h)if(typeof t=="number")h._orientation=[t,n,s],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(s,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,s)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,s,r,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")s=n[0],typeof r>"u"&&(s.pannerAttr||(s.pannerAttr={coneInnerAngle:s.coneInnerAngle,coneOuterAngle:s.coneOuterAngle,coneOuterGain:s.coneOuterGain,distanceModel:s.distanceModel,maxDistance:s.maxDistance,refDistance:s.refDistance,rolloffFactor:s.rolloffFactor,panningModel:s.panningModel}),t._pannerAttr={coneInnerAngle:typeof s.pannerAttr.coneInnerAngle<"u"?s.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof s.pannerAttr.coneOuterAngle<"u"?s.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof s.pannerAttr.coneOuterGain<"u"?s.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof s.pannerAttr.distanceModel<"u"?s.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof s.pannerAttr.maxDistance<"u"?s.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof s.pannerAttr.refDistance<"u"?s.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof s.pannerAttr.rolloffFactor<"u"?s.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof s.pannerAttr.panningModel<"u"?s.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(s=n[0],r=parseInt(n[1],10));for(var l=t._getSoundIds(r),u=0;u<l.length;u++)if(o=t._soundById(l[u]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:h.coneOuterGain,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:h.distanceModel,maxDistance:typeof s.maxDistance<"u"?s.maxDistance:h.maxDistance,refDistance:typeof s.refDistance<"u"?s.refDistance:h.refDistance,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:h.rolloffFactor,panningModel:typeof s.panningModel<"u"?s.panningModel:h.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=h.coneInnerAngle,d.coneOuterAngle=h.coneOuterAngle,d.coneOuterGain=h.coneOuterGain,d.distanceModel=h.distanceModel,d.maxDistance=h.maxDistance,d.refDistance=h.refDistance,d.rolloffFactor=h.rolloffFactor,d.panningModel=h.panningModel}return t},Sound.prototype.init=(function(t){return function(){var n=this,s=n._parent;n._orientation=s._orientation,n._stereo=s._stereo,n._pos=s._pos,n._pannerAttr=s._pannerAttr,t.call(this),n._stereo?s.stereo(n._stereo):n._pos&&s.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(t){return function(){var n=this,s=n._parent;return n._orientation=s._orientation,n._stereo=s._stereo,n._pos=s._pos,n._pannerAttr=s._pannerAttr,n._stereo?s.stereo(n._stereo):n._pos?s.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,s._refreshBuffer(n)),t.call(this)}})(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Xa)),Xa}var kx=Nx();let Ux=class{ctx=null;master=null;volume=1;sounds=new Map;muted=!1;held=!1;unlock(){this.ctx??=new AudioContext,this.master||(this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination));const e=this.ctx.state;e!=="running"&&e!=="closed"&&!this.held&&!document.hidden&&this.ctx.resume()}get context(){return this.ctx}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.master&&(this.master.gain.value=this.volume)}blip(e=440,t={}){if(this.muted)return;this.unlock();const n=this.ctx,{to:s,decay:r=.12,type:o="square",gain:l=.14}=t,u=n.createOscillator(),h=n.createGain(),d=n.currentTime;u.type=o,u.frequency.setValueAtTime(e,d),s!==void 0&&u.frequency.exponentialRampToValueAtTime(Math.max(1,s),d+r),h.gain.setValueAtTime(l,d),h.gain.exponentialRampToValueAtTime(1e-4,d+r),u.connect(h).connect(this.master??n.destination),u.start(d),u.stop(d+r+.02)}noise(e=.2,t=.12){if(this.muted)return;this.unlock();const n=this.ctx,s=Math.floor(n.sampleRate*e),r=n.createBuffer(1,s,n.sampleRate),o=r.getChannelData(0);for(let h=0;h<s;h++){const d=1-h/s;o[h]=(Math.random()*2-1)*d*d}const l=n.createBufferSource(),u=n.createGain();u.gain.value=t,l.buffer=r,l.connect(u).connect(this.master??n.destination),l.start()}load(e,t,n={}){this.sounds.set(e,new kx.Howl({src:[t],loop:n.loop??!1,volume:n.volume??1}))}play(e){this.muted||this.sounds.get(e)?.play()}stop(e){this.sounds.get(e)?.stop()}};const At=new Ux,Fx=document.getElementById("hud");document.getElementById("start");document.getElementById("start-btn");document.getElementById("start-help");const Ox={set(i){Fx.innerHTML=i}},_e={grass:5161038,grassDeep:3645500,grassMid:3380026,grassDark:2982453,skyTop:3112905,skyBottom:8701416,skyHaze:14084330,fogTint:12440274,sand:15915424,rock:10134448,rockDark:8160659,castle:13157046,castleDark:11117204,wood:11104575,woodDark:9067058,leaf:4173394,leafAlt:5488739,accent:16734797,flag:16765503,white:16645629,cloth:16118246,cup:2366740,cloud:16645629,helper:6484168},Bx={..._e},bl={meadow:{name:"Meadow",colors:{},fog:[55,190],sun:{color:16773846,intensity:3.4},hemi:{sky:13625599,ground:8364899,intensity:.9},foliage:"conifer"}};let sn=bl.meadow;function zx(i){const e=bl[i]??bl.meadow;Object.assign(_e,Bx,e.colors),sn=e,Sl.clear()}const Sl=new Map;function it(i,e={}){const t=sn?.glow??0,{rough:n=.85,metal:s=0,emissive:r=t>0?i:0,emissiveIntensity:o=t>0?t:1,flat:l=!0}=e,u=`${i}|${n}|${s}|${r}|${o}|${l}`;let h=Sl.get(u);return h||(h=new fn({color:i,roughness:n,metalness:s,emissive:r,emissiveIntensity:o,flatShading:l}),Sl.set(u,h)),h}function hd(i=900){const e=new bi(i,24,16),t=new ai({side:1,depthWrite:!1,uniforms:{top:{value:new oe(_e.skyTop)},bottom:{value:new oe(_e.skyBottom)},haze:{value:new oe(_e.skyHaze)}},vertexShader:`
      varying float vH;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vH = normalize(world.xyz).y;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform vec3 top;
      uniform vec3 bottom;
      uniform vec3 haze;
      varying float vH;
      void main() {
        // These thresholds are negative, and that is not a mistake.
        //
        // The tee camera pitches down about 31 degrees, so with a 55 degree fov
        // the TOP of the frame sits near -3 degrees - below true horizontal. The
        // strip of "sky" on screen is the part of the dome BELOW its equator,
        // spanning roughly vH -0.21 to -0.06, showing through where the field
        // ends. Any gradient placed above vH 0 is off screen in every frame,
        // which is why the band kept rendering as one flat colour whatever the
        // stops were set to.
        vec3 c = mix(haze, bottom, smoothstep(-0.21, -0.11, vH));
        c = mix(c, top, smoothstep(-0.13, 0.02, vH));
        gl_FragColor = vec4(c, 1.0);
        // A raw gl_FragColor write skips the conversion every other material
        // gets, so these colours were being emitted straight into an sRGB
        // buffer as linear values - the sky rendered nothing like the palette.
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new Re(e,t);return n.frustumCulled=!1,n}function dd(i,e,t=1){const n=i.attributes.position;let s=t;const r=()=>(s=s*16807%2147483647,s/2147483647-.5);for(let o=0;o<n.count;o++)n.setXYZ(o,n.getX(o)+r()*e,n.getY(o)+r()*e,n.getZ(o)+r()*e);return n.needsUpdate=!0,i.computeVertexNormals(),i}function Hx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,u=new $t;let h=0;for(let d=0;d<i.length;++d){const a=i[d];let c=0;if(t!==(a.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in a.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(a.attributes[f]),c++}if(c!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(l!==a.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in a.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(a.morphAttributes[f])}if(e){let f;if(t)f=a.index.count;else if(a.attributes.position!==void 0)f=a.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;u.addGroup(h,f,d),h+=f}}if(t){let d=0;const a=[];for(let c=0;c<i.length;++c){const f=i[c].index;for(let m=0;m<f.count;++m)a.push(f.getX(m)+d);d+=i[c].attributes.position.count}u.setIndex(a)}for(const d in r){const a=Eu(r[d]);if(!a)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;u.setAttribute(d,a)}for(const d in o){const a=o[d][0].length;if(a===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[d]=[];for(let c=0;c<a;++c){const f=[];for(let _=0;_<o[d].length;++_)f.push(o[d][_][c]);const m=Eu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;u.morphAttributes[d].push(m)}}return u}function Eu(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){const d=i[h];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const o=new e(r),l=new Ct(o,t,n);let u=0;for(let h=0;h<i.length;++h){const d=i[h];if(d.isInterleavedBufferAttribute){const a=u/t;for(let c=0,f=d.count;c<f;c++)for(let m=0;m<t;m++){const _=d.getComponent(c,m);l.setComponent(c+a,m,_)}}else o.set(d.array,u);u+=d.count*t}return s!==void 0&&(l.gpuType=s),l}function Au(i,e){if(e===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===2||e===1){let t=i.getIndex();if(t===null){const o=[],l=i.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)o.push(u);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===2)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Gx extends Ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=br.extractUrlBase(e);o=br.resolveURL(h,this.path)}else o=br.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){s?s(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},u=new ed(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{r.parse(h,o,function(d){t(d),r.manager.itemEnd(e)},l)}catch(d){l(d)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},l={},u=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===fd){try{o[Je.KHR_BINARY_GLTF]=new lv(e)}catch(a){s&&s(a);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(u.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Mv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const a=this.pluginCallbacks[d](h);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[a.name]=a,o[a.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const a=r.extensionsUsed[d],c=r.extensionsRequired||[];switch(a){case Je.KHR_MATERIALS_UNLIT:o[a]=new qx;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[a]=new cv(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[a]=new uv;break;case Je.KHR_MESH_QUANTIZATION:o[a]=new hv;break;default:c.indexOf(a)>=0&&l[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}h.setExtensions(o),h.setPlugins(l),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Vx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wx{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,u=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const d=new oe(16777215);u.color!==void 0&&d.setRGB(u.color[0],u.color[1],u.color[2],tn);const a=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new id(d),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Rp(d),h.distance=a;break;case"spot":h=new Ep(d),h.distance=a,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),Fn(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class qx{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){const s=[];e.color=new oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}}class Xx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Yx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(l,l)}return Promise.all(r)}}class $x{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class jx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Zx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Jx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(l[0],l[1],l[2],tn),Promise.all(r)}}class Qx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(l[0],l[1],l[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}}class tv{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class iv{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,o.source,u)}}class rv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],l=s.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,o.source,u)}}class ov{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(l){const u=s.byteOffset||0,h=s.byteLength||0,d=s.count,a=s.byteStride,c=new Uint8Array(l,u,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,a,c,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(d*a);return o.decodeGltfBuffer(new Uint8Array(f),d,a,c,s.mode,s.filter),f})})}else return null}}class av{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==_n.TRIANGLES&&h.mode!==_n.TRIANGLE_STRIP&&h.mode!==_n.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],u={};for(const h in o)l.push(this.parser.getDependency("accessor",o[h]).then(d=>(u[h]=d,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const d=h.pop(),a=d.isGroup?d.children:[d],c=h[0].count,f=[];for(const m of a){const _=new ze,g=new P,p=new rn,x=new P(1,1,1),y=new qi(m.geometry,m.material,c);for(let v=0;v<c;v++)u.TRANSLATION&&g.fromBufferAttribute(u.TRANSLATION,v),u.ROTATION&&p.fromBufferAttribute(u.ROTATION,v),u.SCALE&&x.fromBufferAttribute(u.SCALE,v),y.setMatrixAt(v,_.compose(g,p,x));for(const v in u)if(v==="_COLOR_0"){const A=u[v];y.instanceColor=new vn(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,u[v]);yt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const fd="glTF",ar=12,Ru={JSON:1313821514,BIN:5130562};class lv{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ar,r=new DataView(e,ar);let o=0;for(;o<s;){const l=r.getUint32(o,!0);o+=4;const u=r.getUint32(o,!0);if(o+=4,u===Ru.JSON){const h=new Uint8Array(e,ar+o,l);this.content=n.decode(h)}else if(u===Ru.BIN){const h=ar+o;this.body=e.slice(h,h+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},u={},h={};for(const d in o){const a=wl[d]||d.toLowerCase();l[a]=o[d]}for(const d in e.attributes){const a=wl[d]||d.toLowerCase();if(o[d]!==void 0){const c=n.accessors[e.attributes[d]],f=Es[c.componentType];h[a]=f.name,u[a]=c.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(a,c){s.decodeDracoFile(d,function(f){for(const m in f.attributes){const _=f.attributes[m],g=u[m];g!==void 0&&(_.normalized=g)}a(f)},l,h,tn,c)})})}}class uv{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hv{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class pd extends kr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,d=s-t,a=(n-t)/d,c=a*a,f=c*a,m=e*h,_=m-h,g=-2*f+3*c,p=f-c,x=1-g,y=p-c+a;for(let v=0;v!==l;v++){const A=o[_+v+l],S=o[_+v+u]*d,R=o[m+v+l],I=o[m+v]*d;r[v]=x*A+y*S+g*R+p*I}return r}}const dv=new rn;class fv extends pd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return dv.fromArray(r).normalize().toArray(r),r}}const _n={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cu={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Pu={33071:1001,33648:1002,10497:1e3},Ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pv={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function Di(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gv(i,e,t){let n=!1,s=!1,r=!1;for(let h=0,d=e.length;h<d;h++){const a=e[h];if(a.POSITION!==void 0&&(n=!0),a.NORMAL!==void 0&&(s=!0),a.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],l=[],u=[];for(let h=0,d=e.length;h<d;h++){const a=e[h];if(n){const c=a.POSITION!==void 0?t.getDependency("accessor",a.POSITION):i.attributes.position;o.push(c)}if(s){const c=a.NORMAL!==void 0?t.getDependency("accessor",a.NORMAL):i.attributes.normal;l.push(c)}if(r){const c=a.COLOR_0!==void 0?t.getDependency("accessor",a.COLOR_0):i.attributes.color;u.push(c)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],a=h[1],c=h[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=a),r&&(i.morphAttributes.color=c),i.morphTargetsRelative=!0,i})}function _v(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xv(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ja(t.attributes):e=i.indices+":"+ja(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ja(i.targets[n]);return e}function ja(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yv=new ze;class Mv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);s=n&&u?parseInt(u[1],10):-1,r=l.indexOf("Firefox")>-1,o=r?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new nd(this.options.manager):this.textureLoader=new Pp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ed(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Di(r,l,s),Fn(l,s),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,l)=>{const u=this.associations.get(o);u!=null&&this.associations.set(l,u);for(const[h,d]of o.children.entries())r(d,l.children[h])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(br.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ya[s.type],l=Es[s.componentType],u=s.normalized===!0,h=new l(s.count*o);return Promise.resolve(new Ct(h,o,u))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],u=Ya[s.type],h=Es[s.componentType],d=h.BYTES_PER_ELEMENT,a=d*u,c=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(f&&f!==a){const p=Math.floor(c/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(x);y||(_=new h(l,p*f,s.count*f/d),y=new Qf(_,f/d),t.cache.add(x,y)),g=new Vl(y,u,c%f/d,m)}else l===null?_=new h(s.count*u):_=new h(l,c,s.count*u),g=new Ct(_,u,m);if(s.sparse!==void 0){const p=Ya.SCALAR,x=Es[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,A=new x(o[1],y,s.sparse.count*p),S=new h(o[2],v,s.sparse.count*u);l!==null&&(g=new Ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=A.length;R<I;R++){const M=A[R];if(g.setX(M,S[R*u]),u>=2&&g.setY(M,S[R*u+1]),u>=3&&g.setZ(M,S[R*u+2]),u>=4&&g.setW(M,S[R*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let l=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(l=u)}return this.loadTextureImage(e,r,l)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],l=r.images[t],u=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||l.name||"",d.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(d.name=l.uri);const c=(r.samplers||{})[o.sampler]||{};return d.magFilter=Cu[c.magFilter]||1006,d.minFilter=Cu[c.minFilter]||1008,d.wrapS=Pu[c.wrapS]||1e3,d.wrapT=Pu[c.wrapT]||1e3,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==1003&&d.minFilter!==1006,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(a=>a.clone());const o=s.images[e],l=self.URL||self.webkitURL;let u=o.uri||"",h=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(a){h=!0;const c=new Blob([a],{type:o.mimeType});return u=l.createObjectURL(c),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(u).then(function(a){return new Promise(function(c,f){let m=c;t.isImageBitmapLoader===!0&&(m=function(_){const g=new It(_);g.needsUpdate=!0,c(g)}),t.load(br.resolveURL(a,r.path),m,void 0,f)})}).then(function(a){return h===!0&&l.revokeObjectURL(u),Fn(a,o),a.userData.mimeType=o.mimeType||vv(o.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),a});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,u)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new jh,Hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Xl,Hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(s||r||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),r&&(u.vertexColors=!0),o&&(u.flatShading=!0),s&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return fn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const l={},u=r.extensions||{},h=[];if(u[Je.KHR_MATERIALS_UNLIT]){const a=s[Je.KHR_MATERIALS_UNLIT];o=a.getMaterialType(),h.push(a.extendParams(l,r,t))}else{const a=r.pbrMetallicRoughness||{};if(l.color=new oe(1,1,1),l.opacity=1,Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;l.color.setRGB(c[0],c[1],c[2],tn),l.opacity=c[3]}a.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",a.baseColorTexture,Ot)),l.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,l.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",a.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",a.metallicRoughnessTexture))),o=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(e,l)})))}r.doubleSided===!0&&(l.side=2);const d=r.alphaMode||$a.OPAQUE;if(d===$a.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===$a.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(h.push(t.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const a=r.normalTexture.scale;l.normalScale.set(a,a)}if(r.occlusionTexture!==void 0&&o!==yn&&(h.push(t.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn){const a=r.emissiveFactor;l.emissive=new oe().setRGB(a[0],a[1],a[2],tn)}return r.emissiveTexture!==void 0&&o!==yn&&h.push(t.assignTexture(l,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(h).then(function(){const a=new o(l);return r.name&&(a.name=r.name),Fn(a,r),t.associations.set(a,{materials:e}),r.extensions&&Di(s,a,r),a})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(l){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return Lu(u,l,t)})}const o=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],d=xv(h),a=s[d];if(a)o.push(a.promise);else{let c;h.extensions&&h.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?c=r(h):c=Lu(new $t,h,t),s[d]={primitive:h,promise:c},o.push(c)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,l=[];for(let u=0,h=o.length;u<h;u++){const d=o[u].material===void 0?mv(this.cache):this.getDependency("material",o[u].material);l.push(d)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),d=u[u.length-1],a=[];for(let f=0,m=d.length;f<m;f++){const _=d[f],g=o[f];let p;const x=h[f];if(g.mode===_n.TRIANGLES||g.mode===_n.TRIANGLE_STRIP||g.mode===_n.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new tp(_,x):new Re(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===_n.TRIANGLE_STRIP?p.geometry=Au(p.geometry,1):g.mode===_n.TRIANGLE_FAN&&(p.geometry=Au(p.geometry,2));else if(g.mode===_n.LINES)p=new ap(_,x);else if(g.mode===_n.LINE_STRIP)p=new na(_,x);else if(g.mode===_n.LINE_LOOP)p=new lp(_,x);else if(g.mode===_n.POINTS)p=new cp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&_v(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fn(p,r),g.extensions&&Di(s,p,g),t.assignFinalMaterial(p),a.push(p)}for(let f=0,m=a.length;f<m;f++)t.associations.set(a[f],{meshes:e,primitives:f});if(a.length===1)return r.extensions&&Di(s,a[0],r),a[0];const c=new ut;r.extensions&&Di(s,c,r),t.associations.set(c,{meshes:e});for(let f=0,m=a.length;f<m;f++)c.add(a[f]);return c})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Tf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new jl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,l=[],u=[];for(let h=0,d=o.length;h<d;h++){const a=o[h];if(a){l.push(a);const c=new ze;r!==null&&c.fromArray(r.array,h*16),u.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Wl(l,u)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],l=[],u=[],h=[],d=[];for(let a=0,c=s.channels.length;a<c;a++){const f=s.channels[a],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",p)),u.push(this.getDependency("accessor",x)),h.push(m),d.push(_))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(d)]).then(function(a){const c=a[0],f=a[1],m=a[2],_=a[3],g=a[4],p=[];for(let y=0,v=c.length;y<v;y++){const A=c[y],S=f[y],R=m[y],I=_[y],M=g[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const w=n._createAnimationTracks(A,S,R,I,M);if(w)for(let T=0;T<w.length;T++)p.push(w[T])}const x=new xp(r,void 0,p);return Fn(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let u=0,h=s.weights.length;u<h;u++)l.morphTargetInfluences[u]=s.weights[u]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],l=s.children||[];for(let h=0,d=l.length;h<d;h++)o.push(n.getDependency("node",l[h]));const u=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),u]).then(function(h){const d=h[0],a=h[1],c=h[2];c!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(c,yv)});for(let f=0,m=a.length;f<m;f++)d.add(a[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",l=[],u=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(h){return s._getNodeRef(s.cameraCache,r.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let d;if(r.isBone===!0?d=new Yh:h.length>1?d=new ut:h.length===1?d=h[0]:d=new yt,d!==h[0])for(let a=0,c=h.length;a<c;a++)d.add(h[a]);if(r.name&&(d.userData.name=r.name,d.name=o),Fn(d,r),r.extensions&&Di(n,d,r),r.matrix!==void 0){const a=new ze;a.fromArray(r.matrix),d.applyMatrix4(a)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const a=s.associations.get(d);s.associations.set(d,{...a})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ut;n.name&&(r.name=s.createUniqueName(n.name)),Fn(r,n),n.extensions&&Di(t,r,n);const o=n.nodes||[],l=[];for(let u=0,h=o.length;u<h;u++)l.push(s.getDependency("node",o[u]));return Promise.all(l).then(function(u){for(let d=0,a=u.length;d<a;d++)r.add(u[d]);const h=d=>{const a=new Map;for(const[c,f]of s.associations)(c instanceof Hn||c instanceof It)&&a.set(c,f);return d.traverse(c=>{const f=s.associations.get(c);f!=null&&a.set(c,f)}),a};return s.associations=h(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],l=e.name?e.name:e.uuid,u=[];mi[r.path]===mi.weights?e.traverse(function(c){c.morphTargetInfluences&&u.push(c.name?c.name:c.uuid)}):u.push(l);let h;switch(mi[r.path]){case mi.weights:h=Us;break;case mi.rotation:h=Fs;break;case mi.translation:case mi.scale:h=Os;break;default:n.itemSize===1?h=Us:h=Os;break}const d=s.interpolation!==void 0?pv[s.interpolation]:2301,a=this._getArrayFromAccessor(n);for(let c=0,f=u.length;c<f;c++){const m=new h(u[c]+"."+mi[r.path],t.array,a,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Fs?fv:pd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bv(i,e,t){const n=e.attributes,s=new qn;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(s.set(new P(u[0],u[1],u[2]),new P(h[0],h[1],h[2])),l.normalized){const d=Tl(Es[l.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const l=new P,u=new P;for(let h=0,d=r.length;h<d;h++){const a=r[h];if(a.POSITION!==void 0){const c=t.json.accessors[a.POSITION],f=c.min,m=c.max;if(f!==void 0&&m!==void 0){if(u.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),u.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),u.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),c.normalized){const _=Tl(Es[c.componentType]);u.multiplyScalar(_)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}i.boundingBox=s;const o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Lu(i,e,t){const n=e.attributes,s=[];function r(o,l){return t.getDependency("accessor",o).then(function(u){i.setAttribute(l,u)})}for(const o in n){const l=wl[o]||o.toLowerCase();l in i.attributes||s.push(r(n[o],l))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(l){i.setIndex(l)});s.push(o)}return tt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Fn(i,e),bv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?gv(i,e.targets,t):i})}const Iu="./models/",Sv={leafsGreen:6202943,leafsDark:4160051,grass:7125577,woodBark:9134649,woodBarkDark:7030826,dirt:9071176,stone:8291710,colorRed:14176319,colorYellow:15777866},wv={"stone-tall-b-sand":11569758,"stone-tall-e-sand":11043930,"stone-large-a-sand":12096104,"stone-large-c-sand":11373152,"town-wall":14075040,"town-roof":11097146,"town-chimney":9264198,"town-stall-red":11685948,"town-stall-green":9732927},Xo=new Map,md=new Map;let Du=null;async function Tv(i){const e=new Gx;Du??=await fetch(`${Iu}index.json`).then(t=>t.json()),await Promise.all(i.map(async t=>{if(Xo.has(t))return;const n=Du[t];if(!n)throw new Error(`model "${t}" is not in the asset index`);const r=(await e.loadAsync(`${Iu}${n}`)).scene;r.traverse(h=>{const d=h;if(!d.isMesh)return;d.castShadow=!0,d.receiveShadow=!0;const a=Array.isArray(d.material)?d.material:[d.material];for(const c of a){const f=c,m=Sv[f.name];m!==void 0&&f.color.setHex(m),f.roughness=Math.min(1,f.roughness*.85+.25),f.metalness=0,f.needsUpdate=!0}});const o=new qn().setFromObject(r),l=new P;o.getSize(l),r.position.x-=(o.min.x+o.max.x)/2,r.position.z-=(o.min.z+o.max.z)/2,r.position.y-=o.min.y;const u=new ut;u.add(r),Xo.set(t,u),md.set(t,l)}))}function Pr(i){const e=md.get(i);if(!e)throw new Error(`model "${i}" not loaded`);return e}function Ev(i){const e=Xo.get(i);if(!e)throw new Error(`model "${i}" not loaded`);return e.clone(!0)}function Av(i,e){const t=Pr(i).y||1,n=e/t,s=Ev(i);return s.scale.setScalar(n),{object:s,scale:n}}function Rv(i,e){const t=[];let n=null,s=0,r=null;for(const h of e){const d=Array.isArray(h.material)?h.material:[h.material];if(d.length>1)throw new Error(`model "${i}" has a multi-material mesh`);const a=d[0];if(r||(r=a),a.map){if(s++,n&&n!==a.map)throw new Error(`model "${i}" mixes textures`);n=a.map}const c=h.geometry.clone();h.updateWorldMatrix(!0,!1),c.applyMatrix4(h.matrixWorld),c.getAttribute("normal")||c.computeVertexNormals(),c.getAttribute("uv")||c.setAttribute("uv",new Ct(new Float32Array(c.getAttribute("position").count*2),2));const f=c.getAttribute("position").count,m=new Float32Array(f*3),_=a.color??new oe(16777215);for(let g=0;g<f;g++)m[g*3]=_.r,m[g*3+1]=_.g,m[g*3+2]=_.b;c.setAttribute("color",new Ct(m,3));for(const g of Object.keys(c.attributes))["position","normal","uv","color"].includes(g)||c.deleteAttribute(g);t.push(c)}if(!r)throw new Error(`model "${i}" has no material`);if(s>0&&s!==e.length)throw new Error(`model "${i}" is partly textured`);const o=t.length===1?t[0]:Hx(t,!1);if(!o)throw new Error(`model "${i}" could not be merged`);const l=new fn({color:16777215,map:n,vertexColors:!0,roughness:Math.min(1,r.roughness*.85+.25),metalness:0,transparent:r.transparent,side:r.side}),u=wv[i];if(u!==void 0&&!n){const h=new oe(u),d=o.getAttribute("color");for(let a=0;a<d.count;a++){const f=.72+(.2126*d.getX(a)+.7152*d.getY(a)+.0722*d.getZ(a))*.55;d.setXYZ(a,h.r*f,h.g*f,h.b*f)}d.needsUpdate=!0}else if(u!==void 0&&n){const h=new oe(u);l.onBeforeCompile=d=>{d.uniforms.recolour={value:h},d.fragmentShader=`uniform vec3 recolour;
${d.fragmentShader}`.replace("#include <color_fragment>",`float atlasLum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
         diffuseColor.rgb = recolour * (0.72 + atlasLum * 0.62);
         #include <color_fragment>`)},l.customProgramCacheKey=()=>`recolour-${i}`}return{geometry:o,material:l}}const Nu=new Map;function gd(i){const e=Nu.get(i);if(e)return e;const t=Xo.get(i);if(!t)throw new Error(`model "${i}" not loaded`);const n=[];if(t.traverse(r=>{const o=r;o.isMesh&&n.push(o)}),!n.length)throw new Error(`model "${i}" has no mesh`);const s=Rv(i,n);return Nu.set(i,s),s}const Bi=new P,Ka=new P,un=new P;function Ql(i,e,t,n,s){Bi.subVectors(i,t);const r=Bi.length(),o=e+n-r;return o<=0?0:(r<1e-6?s.set(0,1,0):s.copy(Bi).divideScalar(r),o)}function Bs(i,e,t,n,s,r){Bi.subVectors(n,t);const o=Bi.lengthSq();let l=o>1e-9?Ka.subVectors(i,t).dot(Bi)/o:0;return l=Math.max(0,Math.min(1,l)),Ka.copy(t).addScaledVector(Bi,l),Ql(i,e,Ka,s,r)}function _d(i,e,t,n,s,r){const o=Math.cos(-s),l=Math.sin(-s),u=i.x-t.x,h=i.z-t.z;un.set(u*o-h*l,i.y-t.y,u*l+h*o);const d=Math.max(-n.x,Math.min(n.x,un.x)),a=Math.max(-n.y,Math.min(n.y,un.y)),c=Math.max(-n.z,Math.min(n.z,un.z)),f=un.x-d,m=un.y-a,_=un.z-c,g=f*f+m*m+_*_;if(g>e*e)return 0;let p,x,y,v;if(g>1e-9){const R=Math.sqrt(g);p=f/R,x=m/R,y=_/R,v=e-R}else{const R=n.x-Math.abs(un.x),I=n.y-Math.abs(un.y),M=n.z-Math.abs(un.z);R<I&&R<M?(p=Math.sign(un.x)||1,x=0,y=0,v=R+e):I<M?(p=0,x=Math.sign(un.y)||1,y=0,v=I+e):(p=0,x=0,y=Math.sign(un.z)||1,v=M+e)}const A=Math.cos(s),S=Math.sin(s);return r.set(p*A-y*S,x,p*S+y*A).normalize(),v}function Cv(i,e,t){return Math.abs(i.x-e.x)<=t.x&&Math.abs(i.y-e.y)<=t.y&&Math.abs(i.z-e.z)<=t.z}function xd(i,e,t,n,s){if(Math.abs(i.y-t.y)>s+e)return!1;const r=i.x-t.x,o=i.z-t.z;return r*r+o*o<=n*n}function Pv(i,e,t,n,s){if(Math.abs(i.z-t.z)>s+e)return!1;const r=i.x-t.x,o=i.y-t.y;return r*r+o*o<=n*n}const Si=new P,ku=new P;new P;const Uu=new P;function mt(i){return i.castShadow=!0,i.receiveShadow=!1,i}function ec(i){return new fn({color:i,emissive:i,emissiveIntensity:.55,roughness:.4,flatShading:!0})}const Uo=["tree-default-dark","tree-oak-dark","tree-detailed","tree-cone-dark","tree-default"];function Lv(i){const e=i.params?.height??6,t=i.params?.canopy??2.2,n=new ut,s=Math.abs(Math.round(i.pos[0]*7+i.pos[2]*13))%Uo.length,r=Uo[Math.floor(i.params?.model??s)%Uo.length],{object:o}=Av(r,e);o.rotation.y=(i.rot??0)+s*1.7,n.add(o),n.position.set(...i.pos);const l=new P(i.pos[0],i.pos[1],i.pos[2]),u=l.clone().setY(i.pos[1]+e*.95);return{root:n,probe(h,d,a){let c=Bs(h,d,l,u,.45,a.normal);return c<=0&&(Si.copy(l).setY(i.pos[1]+e*.45),c=Bs(h,d,Si,u,t*.75,a.normal)),c<=0?!1:(a.depth=c,a.restitution=.32,a.kind="tree",!0)}}}function Iv(i){const e=i.params?.height??12,t=i.params?.radius??1.1,n=i.params?.lean??0,s=dd(new zt(t*.62,t,e,6),.2,3),r=mt(new Re(s,it(i.params?.color??_e.rock)));r.userData.owned=!0,r.position.y=e/2;const o=new ut;o.add(r),o.position.set(...i.pos),o.rotation.z=n;const l=new P(...i.pos),u=l.clone();return u.y+=e*Math.cos(n),u.x+=e*Math.sin(n),{root:o,probe(h,d,a){const c=Bs(h,d,l,u,t*.8,a.normal);return c<=0?!1:(a.depth=c,a.restitution=.45,a.kind="block",!0)}}}function Dv(i){const e=i.params?.width??10,t=i.params?.height??3,n=i.params?.depth??6,s=new ut,r=sn.foliage==="crystal"||sn.foliage==="pylon",o=4;for(let u=0;u<o;u++){const h=1-Math.abs(u-(o-1)/2)*.22,d=r?dd(new Yl(t/2*h*1.2,0),t*.06,5+u):new bi(t/2*h*1.15,8,6),a=new Re(d,it(_e.cloud,{rough:r?.6:.95}));a.position.set((u/(o-1)-.5)*e*.8,0,0),a.rotation.set(u*.7,u*1.1,u*.4),a.scale.set(1.25,.85,n/t),s.add(a)}s.position.set(...i.pos),s.rotation.y=i.rot??0;const l=new P(...i.pos);return{root:s,probe(u,h,d){Uu.set(e/2,t/2,n/2);const a=_d(u,h,l,Uu,i.rot??0,d.normal);return a<=0?!1:(d.depth=a,d.restitution=.25,d.kind="block",!0)}}}function Nv(i){const e=i.params?.width??26,t=i.params?.height??9,n=i.params?.gapX??0,s=i.params?.gapW??5,r=1.6,o=new ut,l=Math.max(0,n-s/2+e/2),u=Math.max(0,e/2-(n+s/2)),h=[];l>.1&&h.push({x:-e/2+l/2,w:l}),u>.1&&h.push({x:e/2-u/2,w:u});for(const a of h){const c=mt(new Re(new Yt(a.w,t,r),it(_e.castle)));c.position.set(a.x,t/2,0),o.add(c);const f=Math.max(1,Math.floor(a.w/2.2));for(let m=0;m<f;m++){const _=mt(new Re(new Yt(1.1,1.2,r),it(_e.castleDark)));_.position.set(a.x-a.w/2+(m+.5)*(a.w/f),t+.6,0),o.add(_)}}o.position.set(...i.pos),o.rotation.y=i.rot??0;const d=h.map(a=>({c:new P(i.pos[0]+a.x,i.pos[1]+t/2,i.pos[2]),half:new P(a.w/2,t/2+1.2,r/2)}));return{root:o,probe(a,c,f){for(const m of d){const _=_d(a,c,m.c,m.half,i.rot??0,f.normal);if(_>0)return f.depth=_,f.restitution=.3,f.kind="block",!0}return!1}}}function kv(i){const e=i.params?.height??16,t=i.params?.radius??2.6,n=new ut,s=mt(new Re(new zt(t,t*1.1,e,10),it(_e.castle)));s.position.y=e/2,n.add(s);const r=mt(new Re(new ia(t*1.35,t*2,10),it(_e.accent)));r.position.y=e+t,n.add(r),n.position.set(...i.pos);const o=new P(...i.pos),l=o.clone().setY(i.pos[1]+e);return{root:n,probe(u,h,d){const a=Bs(u,h,o,l,t,d.normal);return a<=0?!1:(d.depth=a,d.restitution=.35,d.kind="block",!0)}}}function Uv(i){const e=i.params?.speed??1.1,t=i.params?.blade??5.5,n=i.params?.phase??0,s=i.params?.towerH??7,r=new ut,o=mt(new Re(new zt(.9,1.5,s,8),it(_e.cloth)));o.position.y=s/2,r.add(o);const l=new ut;l.position.set(0,s,.9),r.add(l);const u=sn.foliage,h=new Yt(.9,t,.25),d=new Yt(.28,t,.28);for(let _=0;_<4;_++){const g=new ut;g.rotation.z=_*Math.PI/2;const p=_%2;if(u==="crystal"){const x=mt(new Re(d,it(_e.castle,{metal:.4,rough:.35})));x.position.y=t/2,g.add(x);const y=new Re(new Wn(t*.62,t*.72),new fn({color:p?_e.leafAlt:_e.leaf,emissive:p?_e.leafAlt:_e.leaf,emissiveIntensity:.35,transparent:!0,opacity:.72,side:2,flatShading:!0,roughness:.3}));y.position.y=t*.62,g.add(y)}else if(u==="pylon"){const x=mt(new Re(d,it(_e.wood)));x.position.y=t/2,g.add(x);for(let y=0;y<4;y++){const v=new Re(new Yt(.85,t*.13,.3),it(p?_e.accent:_e.cloth,{emissive:p?_e.accent:_e.cloth,emissiveIntensity:.85,rough:.3}));v.position.y=t*(.28+y*.2),g.add(v)}}else if(u==="palm"){const x=mt(new Re(d,it(_e.wood)));x.position.y=t/2,g.add(x);const y=new Re(new Wn(t*.44,t*.8),new fn({color:p?_e.accent:_e.cloth,side:2,flatShading:!0,roughness:.85}));y.position.set(t*.24,t*.55,.05),g.add(y)}else{const x=mt(new Re(h,it(p?_e.accent:_e.cloth)));x.position.y=t/2,g.add(x)}l.add(g)}r.position.set(...i.pos),r.rotation.y=i.rot??0;const a=new P(i.pos[0],i.pos[1]+s,i.pos[2]+.9),c=new P(...i.pos),f=c.clone().setY(i.pos[1]+s);let m=n;return{root:r,update(_){m=n+_*e,l.rotation.z=m},probe(_,g,p){let x=Bs(_,g,c,f,1.3,p.normal);if(x>0)return p.depth=x,p.restitution=.3,p.kind="block",!0;for(let y=0;y<4;y++){const v=m+y*Math.PI/2+Math.PI/2;if(Si.copy(a),ku.set(a.x+Math.cos(v)*t,a.y+Math.sin(v)*t,a.z),x=Bs(_,g,Si,ku,.55,p.normal),x>0)return p.depth=x,p.restitution=.55,p.kind="block",!0}return!1}}}function Fv(i){const e=i.params?.arc??1.1,t=i.params?.period??2.4,n=i.params?.phase??0,s=i.params?.len??8,r=new ut,o=i.params?.pivotH??11,l=mt(new Re(new Yt(.7,o,.7),it(_e.woodDark)));l.position.y=o/2,r.add(l);const u=mt(new Re(new Yt(.6,.6,.6),it(_e.woodDark)));u.position.y=o,r.add(u);const h=new ut;h.position.y=o,r.add(h);const d=mt(new Re(new Yt(.28,s,.28),it(_e.wood)));d.position.y=-s/2,h.add(d);const a=sn.foliage;let c;if(a==="palm"){c=mt(new Re(new ks(1.15,.34,6,12),it(_e.rock,{metal:.35,rough:.5}))),c.rotation.x=Math.PI/2;const p=mt(new Re(new Yt(3.1,.3,.3),it(_e.rock,{metal:.35,rough:.5})));p.position.y=.6,c.add(p)}else if(a==="crystal"){c=mt(new Re(new qo(1.65,0),it(_e.castle,{metal:.5,rough:.3})));const p=new Re(new qo(.8,0),it(_e.leafAlt,{emissive:_e.leafAlt,emissiveIntensity:1,rough:.2}));c.add(p)}else if(a==="pylon"){c=mt(new Re(new zt(1.7,1.7,.2,12),it(_e.accent,{emissive:_e.accent,emissiveIntensity:.95,rough:.25}))),c.rotation.x=Math.PI/2;const p=new Re(new ks(1.72,.12,5,16),it(_e.cloth,{emissive:_e.cloth,emissiveIntensity:1,rough:.2}));c.add(p)}else c=mt(new Re(new zt(1.7,1.7,.35,3),it(_e.rock,{metal:.5,rough:.35}))),c.rotation.x=Math.PI/2;c.position.y=-s,h.add(c),r.position.set(...i.pos),r.rotation.y=i.rot??0;const f=new P(i.pos[0],i.pos[1]+o,i.pos[2]),m=Math.cos(i.rot??0),_=Math.sin(i.rot??0);let g=0;return{root:r,update(p){g=Math.sin(p/t*Math.PI*2+n)*e,h.rotation.z=g},probe(p,x,y){const v=Math.sin(g)*s,A=-Math.cos(g)*s;Si.set(f.x+v*m,f.y+A,f.z+v*_);const S=Ql(p,x,Si,1.7,y.normal);return S<=0?!1:(y.depth=S,y.restitution=.6,y.kind="block",!0)}}}function Ov(i){const e=i.params?.width??24,t=i.params?.height??40,n=i.params?.depth??14,s=i.params?.strength??9,r=i.params?.dir??1,o=new ut,l=[],u=new ia(.5,1.8,4),h=new fn({color:_e.white,transparent:!0,opacity:.42,flatShading:!0,roughness:1});for(let c=0;c<14;c++){const f=new Re(u,h);f.position.set((Math.random()-.5)*e,(Math.random()-.3)*t*.5,(Math.random()-.5)*n),f.rotation.z=r>0?-Math.PI/2:Math.PI/2,o.add(f),l.push(f)}o.position.set(...i.pos);const d=new P(...i.pos),a=new P(e/2,t/2,n/2);return{root:o,update(c){for(let f=0;f<l.length;f++){const m=l[f];m.position.x+=r*9*(1/60)*(.6+f%5*.18),r>0&&m.position.x>e/2&&(m.position.x=-e/2),r<0&&m.position.x<-e/2&&(m.position.x=e/2),m.position.y=(m.position.y+t)%t-t*.15+Math.sin(c*2+f)*.004}},field(c,f){return Cv(c,d,a)?(f.set(r*s,0,0),!0):!1}}}function Bv(i){const e=i.params?.radius??2,t=i.params?.inner??.6,n=i.params?.height??6,s=new ut,r=.22+n*.018,o=new zt(r,r*1.5,n,6);for(const a of[-e*.6,e*.6]){const c=mt(new Re(o,it(_e.wood)));c.position.set(a,n/2,0),s.add(c)}for(const a of[.35,.68]){const c=mt(new Re(new Yt(e*1.2,r*1.4,r*1.4),it(_e.woodDark)));c.position.set(0,n*a,0),s.add(c)}const l=[{r:e,c:_e.cloth},{r:e*.72,c:_e.accent},{r:e*.44,c:_e.cloth}];for(const a of l){const c=mt(new Re(new zt(a.r,a.r,.3,20),it(a.c)));c.rotation.x=Math.PI/2,c.position.y=n,s.add(c)}const u=new Re(new zt(t,t,.42,18),ec(_e.helper));u.rotation.x=Math.PI/2,u.position.y=n,s.add(u),s.position.set(...i.pos),s.rotation.y=i.rot??0;const h=new P(i.pos[0],i.pos[1]+n,i.pos[2]),d=u.material;return{root:s,update(a){d.emissiveIntensity=.45+Math.sin(a*3)*.22},probe(a,c,f){return Pv(a,c,h,t,.3)?(f.normal.set(0,0,-1),f.depth=.01,f.restitution=0,f.kind="archery",!0):!1}}}function zv(i){const e=i.params?.radius??.9,t=i.params?.mouth??.5,n=i.params?.height??5,s=new ut,r=mt(new Re(new zt(.2,.2,n,6),it(_e.rock)));r.position.y=n/2,s.add(r);const o=mt(new Re(new zt(e*1.5,e*.7,1.8,14,1,!0),new fn({color:_e.helper,side:2,flatShading:!0,roughness:.5})));o.position.y=n,s.add(o);const l=new Re(new ks(e*1.5,.16,6,18),ec(_e.helper));l.rotation.x=Math.PI/2,l.position.y=n+.9,s.add(l),s.position.set(...i.pos);const u=new P(i.pos[0],i.pos[1]+n+.9,i.pos[2]),h=l.material;return{root:s,update(d){h.emissiveIntensity=.45+Math.sin(d*3+1)*.22},probe(d,a,c){return xd(d,a,u,t,.4)?(c.normal.set(0,1,0),c.depth=.01,c.restitution=0,c.kind="tube",!0):!1}}}function Hv(i){const e=i.params?.height??22,t=i.params?.radius??4,n=i.params?.pad??.7,s=new ut,r=mt(new Re(new bi(t,14,12),it(_e.accent)));r.scale.y=1.25,r.position.y=e+t*1.5,s.add(r);const o=mt(new Re(new bi(t*1.005,14,12,0,Math.PI/5),it(_e.flag)));o.scale.y=1.25,o.position.copy(r.position),s.add(o);const l=mt(new Re(new Yt(1.8,1.4,1.8),it(_e.wood)));l.position.y=e,s.add(l);const u=new zt(.05,.05,t*1.3,4);for(const[f,m]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const _=new Re(u,it(_e.woodDark));_.position.set(f,e+t*.65,m),s.add(_)}const h=new Re(new zt(n,n,.24,16),ec(_e.helper));h.position.y=e-.75,s.add(h),s.position.set(...i.pos);const d=new P(i.pos[0],i.pos[1]+e-.75,i.pos[2]),a=h.material,c=s.position.y;return{root:s,update(f){a.emissiveIntensity=.45+Math.sin(f*3+2)*.22;const m=Math.sin(f*.7)*.5;s.position.y=c+m,d.y=i.pos[1]+e-.75+m},probe(f,m,_){if(xd(f,m,d,n,.3))return _.normal.set(0,1,0),_.depth=.01,_.restitution=0,_.kind="balloon",!0;Si.copy(d).setY(d.y+.75+t*1.5);const g=Ql(f,m,Si,t*.9,_.normal);return g>0?(_.depth=g,_.restitution=.5,_.kind="block",!0):!1}}}const Gv={tree:Lv,spire:Iv,cloud:Dv,castleFront:Nv,castleTower:kv,windmill:Uv,axe:Fv,gust:Ov,archery:Bv,tube:zv,balloon:Hv};function Vv(i){const e=Gv[i.type];return e?e(i):(console.warn(`unknown obstacle type: ${i.type}`),null)}const Wv=["town-wall","town-roof","town-chimney","town-fence","town-stall-red","town-stall-green","town-cart","hex-dirt"];function qv(i){const e=new Set([i.base,i.fairway,i.scenery.high,i.scenery.mid,i.scenery.low,i.scenery.wet]);i.bunker&&e.add(i.bunker);for(const t of[...i.far,...i.near,...i.trim,...i.landmark])e.add(t.model);if(i.villages)for(const t of Wv)e.add(t);return[...e]}const $n={key:"meadow",name:"Meadow",base:"hex-grass",fairway:"hex-grass",scenery:{high:"hex-stone",mid:"hex-grass",low:"hex-grass",wet:"hex-water"},kindTint:{"hex-grass":6261305,"hex-stone":9276273,"hex-dirt":8088395,"hex-sand":14072702,"hex-water":6531266},tint:{tee:8825671,green:11063132,fairway:8367684,rough:6261305,far:4614458},sky:{top:3112905,bottom:8701416,haze:14084330,fog:12440274},sun:{color:16773846,intensity:3.4},hemi:{sky:13625599,ground:8364899,intensity:.9},far:[{model:"tree-default-dark",height:8,weight:5},{model:"tree-cone-dark",height:9.5,weight:5},{model:"tree-oak-dark",height:7,weight:4},{model:"tree-tall",height:11,weight:4},{model:"tree-thin",height:8.5,weight:3},{model:"tree-detailed",height:7.5,weight:3},{model:"rock-tall-a",height:5,weight:1},{model:"stone-tall-b",height:4.5,weight:1}],near:[{model:"tree-default",height:6.5,weight:3},{model:"tree-oak",height:5.5,weight:2},{model:"tree-small",height:4,weight:2},{model:"tree-thin",height:6,weight:1},{model:"rock-large-a",height:1.4,weight:2},{model:"rock-large-c",height:1.6,weight:1},{model:"bush-large",height:1.1,weight:2}],trim:[{model:"grass-tuft",height:.6,weight:4},{model:"grass-tuft-large",height:.8,weight:3},{model:"bush",height:.7,weight:2},{model:"flower-red",height:.5,weight:1},{model:"flower-yellow",height:.5,weight:1},{model:"mushroom",height:.4,weight:1},{model:"rock-small-a",height:.5,weight:1}],landmark:[{model:"town-windmill",height:11,weight:3}],bunker:"hex-sand",villages:!0},Xv={key:"desert",name:"Dunes",base:"hex-sand",fairway:"hex-sand",scenery:{high:"hex-sand-desert",mid:"hex-sand",low:"hex-sand",wet:"hex-sand"},kindTint:{"hex-sand":14203e3,"hex-sand-desert":14466694,"hex-sand-rocks":13347438,"hex-stone-rocks":11900012,"hex-stone":11440232,"hex-water":7321016},tint:{tee:14993805,green:15784092,fairway:14467204,rough:12557668,far:12163693},sky:{top:5218262,bottom:11129828,haze:15786694,fog:14469542},sun:{color:16773320,intensity:3.9},hemi:{sky:16772303,ground:14203274,intensity:1.15},far:[{model:"cactus-tall",height:6,weight:5},{model:"stone-tall-b-sand",height:4.5,weight:3},{model:"stone-tall-e-sand",height:4,weight:2}],near:[{model:"cactus-short",height:2.4,weight:4},{model:"rock-sand-a",height:1.6,weight:4},{model:"rock-sand-b",height:1.3,weight:3},{model:"rock-sand-c",height:1.1,weight:3}],trim:[{model:"rock-small-a",height:.5,weight:4},{model:"rock-small-b",height:.45,weight:3},{model:"grass-tuft",height:.5,weight:2},{model:"stone-flat-a",height:.3,weight:2}],landmark:[{model:"statue-obelisk",height:11,weight:3},{model:"statue-column",height:8,weight:2}],density:.05,sunHeight:40,reliefBias:.12,formations:{table:[{model:"stone-tall-b-sand",height:8,weight:5},{model:"stone-tall-e-sand",height:7,weight:4},{model:"stone-large-a-sand",height:3.2,weight:3},{model:"stone-large-c-sand",height:2.6,weight:3},{model:"rock-sand-a",height:2.2,weight:3},{model:"rock-sand-b",height:1.6,weight:2}],sites:5,each:6,spread:7,scale:[.35,2.1]}},Yv={key:"shore",name:"Stony Shore",base:"hex-stone",fairway:"hex-grass",scenery:{high:"hex-stone-mountain",mid:"hex-stone-rocks",low:"hex-stone",wet:"hex-water"},kindTint:{"hex-stone":9408902,"hex-stone-rocks":8751229,"hex-stone-mountain":8159350,"hex-grass":7178828,"hex-sand":13220754,"hex-water":4886694},tint:{tee:7772495,green:9417822,fairway:7311943,rough:6191692,far:5925475},sky:{top:7315396,bottom:11060436,haze:13622495,fog:11846854},sun:{color:16184036,intensity:2.9},hemi:{sky:13952240,ground:9081220,intensity:1.2},sunHeight:30,density:.12,reliefBias:.3,seaBeyond:26,far:[{model:"tree-thin",height:7,weight:4},{model:"tree-cone-dark",height:7.5,weight:3}],near:[{model:"bush-large",height:1.1,weight:4},{model:"tree-small",height:3.2,weight:3},{model:"mini-rocks-low",height:1.2,weight:3,max:10}],trim:[{model:"stone-flat-a",height:.35,weight:5,max:18},{model:"grass-tuft",height:.6,weight:3},{model:"mini-stones",height:.4,weight:3,max:14}],landmark:[{model:"stone-tall-b",height:10,weight:3},{model:"platform-stone",height:3,weight:1}],formations:{table:[{model:"stone-tall-b",height:7,weight:5},{model:"stone-tall-e",height:6,weight:4},{model:"stone-large-a",height:3,weight:3},{model:"stone-large-c",height:2.4,weight:3},{model:"mini-rocks-high",height:2.6,weight:2},{model:"stone-flat-a",height:.8,weight:2}],sites:6,each:5,spread:6,scale:[.3,1.55]},bunker:"hex-sand"},$v={key:"islands",name:"Atoll",base:"hex-sand",fairway:"hex-grass",layout:"islands",scenery:{high:"hex-sand",mid:"hex-sand",low:"hex-water",wet:"hex-water"},kindTint:{"hex-water":3847372,"hex-sand":15259814,"hex-grass":7319628},tint:{tee:8371284,green:10146404,fairway:7647306,rough:14272405,far:2064286},sky:{top:2067154,bottom:8376296,haze:14217454,fog:11066848},sun:{color:16774876,intensity:3.8},hemi:{sky:12905727,ground:6271144,intensity:1.1},sunHeight:38,density:1.5,far:[{model:"pir-palm-tall",height:9,weight:5},{model:"pir-palm-tall-bend",height:8.5,weight:4},{model:"pir-palm",height:7,weight:4},{model:"pir-palm-bend",height:6.5,weight:4}],near:[{model:"pir-palm",height:6,weight:5},{model:"pir-palm-bend",height:5.5,weight:4},{model:"pir-rocks-sand-a",height:1.4,weight:3},{model:"pir-rocks-sand-b",height:1.2,weight:3},{model:"pir-barrel",height:.8,weight:1},{model:"pir-crate",height:.8,weight:1}],trim:[{model:"pir-grass",height:.5,weight:5},{model:"pir-rocks-sand-b",height:.5,weight:2}],landmark:[{model:"pir-ship-large",height:11,weight:4},{model:"pir-ship-medium",height:9,weight:4},{model:"pir-wreck",height:8,weight:3},{model:"pir-ship-small",height:6,weight:3},{model:"pir-rowboat",height:1.2,weight:2}]},jv={key:"pine",name:"Pinewood",base:"hex-grass",fairway:"hex-grass",scenery:{high:"hex-stone-hill",mid:"hex-grass-forest",low:"hex-grass",wet:"hex-water"},kindTint:{"hex-grass":4156220,"hex-grass-forest":3498042,"hex-grass-hill":4749890,"hex-stone":7633263,"hex-stone-hill":7041126,"hex-water":4161420,"hex-dirt":6968892},tint:{tee:7182917,green:8827989,fairway:6524992,rough:4156220,far:2903097},sky:{top:2781102,bottom:8828620,haze:13295581,fog:11125440},sun:{color:16772300,intensity:3.1},hemi:{sky:12376300,ground:4875328,intensity:.85},far:[{model:"pine-tall-a",height:14,weight:5},{model:"pine-tall-b",height:15,weight:5},{model:"pine-tall-c",height:13,weight:4},{model:"pine-tall-d",height:16,weight:4},{model:"pine-round-a",height:10,weight:3},{model:"pine-round-e",height:11,weight:3}],near:[{model:"pine-round-c",height:7,weight:4},{model:"pine-small-a",height:4,weight:4},{model:"pine-small-c",height:3.4,weight:3},{model:"pine-ground-a",height:2.4,weight:3},{model:"log-large",height:1.1,weight:2,max:7},{model:"stump-round",height:.9,weight:2,max:7},{model:"rock-large-a",height:1.4,weight:2}],trim:[{model:"mushroom-red-group",height:.5,weight:3,max:8},{model:"mushroom-tan-group",height:.45,weight:3,max:8},{model:"grass-tuft",height:.6,weight:3},{model:"bush",height:.7,weight:2},{model:"rock-small-b",height:.45,weight:2}],landmark:[{model:"log-stack",height:2.4,weight:3},{model:"town-watermill",height:7,weight:1,max:1}],bunker:"hex-sand",density:1.25,villages:!0},js={meadow:$n,desert:Xv,shore:Yv,islands:$v,pine:jv};new oe;const Za=["spring","summer","autumn","winter"],Ja=["morning","noon","golden","dusk"],Yo=new Set(["meadow","pine","shore"]),Kv={spring:void 0,summer:{hue:.23,amount:.28,sat:1.1,lift:0,spread:.03},autumn:{hue:.07,amount:.92,sat:1.12,lift:0,spread:.11},winter:{hue:.47,amount:.5,sat:.5,lift:.3,spread:.02}},Zv={spring:void 0,summer:{to:10273854,grass:.2,other:.05,far:.12},autumn:{to:12098118,grass:.4,other:.12,far:.3},winter:{to:14674153,grass:.52,other:.36,far:.34}},Jv={noon:void 0,morning:{top:[6268640,.35],bottom:[12574960,.35],haze:[15397620,.4],fog:[13820130,.4],sun:[16774376,.6],sunI:.92,hemiSky:[14216447,.3],hemiI:1},golden:{top:[5211846,.3],bottom:[15911066,.55],haze:[16242856,.6],fog:[14467226,.55],sun:[16760696,.75],sunI:1,hemiSky:[16769728,.35],hemiI:.95,sunHeight:14,ground:1.02},dusk:{top:[2899832,.7],bottom:[13208224,.6],haze:[15774876,.65],fog:[12098214,.6],sun:[16751466,.8],sunI:.74,hemiSky:[9411280,.5],hemiI:.88,sunHeight:11,ground:.9}},vd=new oe,Qv=new oe,hn=(i,e,t)=>vd.setHex(i).lerp(Qv.setHex(e),t).getHex(),Qa=(i,e)=>vd.setHex(i).multiplyScalar(e).getHex(),Fu=new Map;function ey(i,e="spring",t="noon"){const n=js[i]??$n,s=Yo.has(n.key)?e:"spring";if(s==="spring"&&t==="noon")return n;const r=`${n.key}|${s}|${t}`,o=Fu.get(r);if(o)return o;const l={...n,kindTint:{...n.kindTint},tint:{...n.tint},sky:{...n.sky},sun:{...n.sun},hemi:{...n.hemi},foliage:Kv[s],look:`${s}|${t}`},u=Zv[s];if(u){for(const d of Object.keys(l.kindTint)){if(d==="hex-water"){s==="winter"&&(l.kindTint[d]=hn(l.kindTint[d],6262432,.3));continue}const a=d.includes("grass")||d.includes("dirt");l.kindTint[d]=hn(l.kindTint[d],u.to,a?u.grass:u.other)}l.tint.tee=hn(l.tint.tee,u.to,u.grass*.7),l.tint.green=hn(l.tint.green,u.to,u.grass*.6),l.tint.fairway=hn(l.tint.fairway,u.to,u.grass*.7),l.tint.rough=hn(l.tint.rough,u.to,u.grass),l.tint.far=hn(l.tint.far,u.to,u.far)}const h=Jv[t];if(h&&(l.sky.top=hn(l.sky.top,...h.top),l.sky.bottom=hn(l.sky.bottom,...h.bottom),l.sky.haze=hn(l.sky.haze,...h.haze),l.sky.fog=hn(l.sky.fog,...h.fog),l.sun.color=hn(l.sun.color,...h.sun),l.sun.intensity=n.sun.intensity*h.sunI,l.hemi.sky=hn(l.hemi.sky,...h.hemiSky),l.hemi.intensity=n.hemi.intensity*h.hemiI,h.sunHeight!==void 0&&(l.sunHeight=Math.min(n.sunHeight??21,h.sunHeight+((n.sunHeight??21)-21)*.4)),h.ground!==void 0)){for(const d of Object.keys(l.kindTint))l.kindTint[d]=Qa(l.kindTint[d],h.ground);l.tint.rough=Qa(l.tint.rough,h.ground),l.tint.far=Qa(l.tint.far,h.ground)}return Fu.set(r,l),l}function Mi(i){const[e,t]=(i.look??"spring|noon").split("|");return ey(i.biome??"meadow",e,t)}const Xi=3,tc=1.15,Ou=Xi*tc*.75,Bu=new WeakSet;function ty(i){!i.map||Bu.has(i)||(Bu.add(i),i.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`float texLum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
       diffuseColor.rgb = vec3(0.86 + texLum * 0.34);
       #include <color_fragment>`)},i.customProgramCacheKey=()=>"hexfield-neutralised",i.needsUpdate=!0)}function zu(i){return Math.min(i.y,.2)}function Hu(i){return i.y<=.28}const Gu=new ze,Vu=new rn,Wu=new P,qu=new P;function Xt(i,e){const t=Xi,n=Xi*tc;return{x:t*(i+e/2),z:n*.75*e}}class ny{root=new ut;groups=[];clock=0;duration=0;startZ=0;constructor(e,t="hex-grass"){for(const r of e)this.startZ=Math.min(this.startZ,Xt(r.q,r.r).z);const n=new Map,s=(r,o)=>{const l=n.get(r);l?l.push(o):n.set(r,[o])};for(const r of e)Hu(Pr(r.kind))||s(t,{...r,under:!0}),s(r.kind,r);for(const[r,o]of n){const{geometry:l,material:u}=gd(r);ty(u);const h=Pr(r),d=Xi/(h.x||1),a=Hu(h),c=(a?h.y:zu(h))*d,f=new qi(l,u,o.length);f.instanceMatrix.setUsage(35048),f.instanceColor=new vn(new Float32Array(o.length*3),3),o.forEach((_,g)=>f.instanceColor.setXYZ(g,_.tint.r,_.tint.g,_.tint.b)),f.instanceColor.needsUpdate=!0,f.castShadow=!0,f.receiveShadow=!0;const m=[];for(const _ of o){const{x:g,z:p}=Xt(_.q,_.r),x=(_.playable?0:_.lift)-(_.under?iy:0),y=_.playable?Xu:Math.max(c,_.lift+Xu),v=a?y/c:1,A=Rn(_.q,_.r,91),S=Rn(_.q,_.r,137),R=As(p,this.startZ,A),I=Rs(S),M=S<.26?-el*(.5+A*.9):el*(.6+A*1),w=a?x-y:x-zu(h)*d;m.push({x:g,z:p,y:w,delay:R,rise:I,drop:M,scale:d,stretch:v,top:x})}this.groups.push({kind:r,mesh:f,tiles:m}),this.root.add(f);for(const _ of m)this.duration=Math.max(this.duration,_.delay+_.rise)}this.setProgress(this.duration+1);for(const r of this.groups)r.mesh.computeBoundingSphere(),r.mesh.boundingSphere&&(r.mesh.boundingSphere.radius+=el+1);this.setProgress(0)}debugTiles(){return[]}get buildTime(){return this.duration}restart(){this.clock=0,this.setProgress(0)}update(e){this.clock>=this.duration&&e>=this.clock||(this.clock=e,this.setProgress(this.clock))}setProgress(e){for(const t of this.groups){for(let n=0;n<t.tiles.length;n++){const s=t.tiles[n],r=Math.max(0,Math.min(1,(e-s.delay)/s.rise)),o=cy(r);Wu.set(s.x,s.y-(1-o)*s.drop,s.z);const l=Math.min(1,r*5),u=s.scale*l*(.7+.3*o);qu.set(u,s.scale*s.stretch*o,u),Vu.identity(),Gu.compose(Wu,Vu,qu),t.mesh.setMatrixAt(n,Gu)}t.mesh.instanceMatrix.needsUpdate=!0}}dispose(){for(const e of this.groups)e.mesh.dispose(),this.root.remove(e.mesh);this.groups=[]}}const Xu=8,iy=.02,El=-2,Al=11,sy=-1.4,ry=.45,oy=.035,ay=.55,ly=1.15,el=7;function As(i,e,t){return Math.max(0,i-e)*oy+t*ay}function Rs(i){return ly*(.7+i*.8)}function cy(i){if(i<=0)return 0;if(i>=1)return 1;const e=1.9,t=i-1;return 1+(e+1)*t*t*t+e*t*t}function zn(i,e){const t=Xi,n=Xi*tc,s=e/(n*.75),r=i/t-s/2;return uy(r,s)}function uy(i,e){const t=-i-e;let n=Math.round(i),s=Math.round(e);const r=Math.round(t),o=Math.abs(n-i),l=Math.abs(s-e),u=Math.abs(r-t);return o>l&&o>u?n=-s-r:l>u&&(s=-n-r),{q:n,r:s}}function Rn(i,e,t){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}const Bt=(i,e)=>`${i},${e}`;function hy(i){const e=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]],t=new Map;for(const s of i)!s.playable&&s.kind.startsWith("hex-water")&&t.set(Bt(s.q,s.r),s);const n=new Set;for(const[s,r]of t){if(n.has(s))continue;const o=[],l=[r];for(n.add(s);l.length;){const d=l.pop();o.push(d);for(const[a,c]of e){const f=Bt(d.q+a,d.r+c);if(n.has(f))continue;const m=t.get(f);m&&(n.add(f),l.push(m))}}let u=1/0;for(const d of o)u=Math.min(u,d.lift);const h=u-ry;for(const d of o)d.lift=h}}function dy(i,e,t=[],n=$n){const s={tee:new oe(n.tint.tee),green:new oe(n.tint.green),fairway:new oe(n.tint.fairway),rough:new oe(n.tint.rough),far:new oe(n.tint.far)},r=A=>new oe(n.kindTint[A]??n.tint.rough),o=[],l=new Set,u=[];if(n.layout==="islands"){u.push({x:t[0]?.x??0,z:t[0]?.z??0,r:11}),u.push({x:t[1]?.x??0,z:t[1]?.z??i,r:13});for(let A=0;A<7;A++){const S=A%2===0?1:-1,R=(A+.5)/9,I=-14+(i+52)*R,M=S*(17+Rn(A,3,e+401)*20);Math.hypot(M-u[0].x,I-u[0].z)<24||Math.hypot(M-u[1].x,I-u[1].z)<26||u.push({x:M,z:I,r:4+Rn(A,7,e+409)*6})}}const h=-10,d=i+16,a=8,c=12,f=30,m=A=>n.layout==="islands"?52:Math.min(44,20+Math.max(0,A)*.35),_=Math.floor(zn(0,h-c).r)-2,g=Math.ceil(zn(0,d+f).r)+2,p=_-(_%2+2)%2,x=g+((g%2+2)%2===0?1:0),y=Xt(0,p).z,v=Xt(0,x).z;for(let A=p;A<=x;A++){const{z:S}=Xt(0,A),R=-A/2,I=m(S),M=Math.ceil((a+I)/Xi)+2;for(let w=-M;w<=M;w++){const T=Math.round(R)+w,{x:L}=Xt(T,A),N=(S-h)/Math.max(1,d-h),U=(Rn(0,A,e)-.5)*4.5,z=1-.18*Math.sin(N*Math.PI*1.6),H=a*z+U;if(n.layout==="islands"){let Ke=null,be=-1;for(let Ye=0;Ye<u.length;Ye++){const C=u[Ye],b=Math.hypot(L-C.x,S-C.z);if(b<=C.r){Ke={r:b/C.r,play:Ye<2},be=Ye;break}}if(Ke){Ke.play&&l.add(Bt(T,A));const Ye=Ke.r>.68,C=new oe(Ye?n.kindTint["hex-sand"]:n.tint.fairway);C.multiplyScalar(1+(Rn(T,A,e+61)-.5)*.06),o.push({kind:Ye?"hex-sand":n.fairway,q:T,r:A,lift:0,playable:Ke.play,tint:C,beach:Ye,isle:be});continue}const Be=Math.min(1,Math.max(0,(Math.min(Math.abs(L),999)-20)/60)),Mt=new oe(n.kindTint["hex-water"]??4174532);Mt.lerp(new oe(n.tint.far),Be*.55),o.push({kind:"hex-water",q:T,r:A,lift:El,playable:!1,tint:Mt});continue}if(S>=h&&S<=d&&Math.abs(L)<=H){l.add(Bt(T,A));const Ke=t.findIndex(Ye=>Math.hypot(L-Ye.x,S-Ye.z)<=Ye.radius),be=Math.floor(A/3)%2===0?1.08:.92,Be=s.fairway.clone().multiplyScalar(be);if(Ke===0||Ke===1){const Ye=t[Ke],C=Math.hypot(L-Ye.x,S-Ye.z)/Ye.radius,b=1-Math.max(0,Math.min(1,(C-.55)/.45));Be.lerp(Ke===0?s.tee:s.green,b*b*(3-2*b))}const Mt=(Rn(T,A,e+61)-.5)*.05;Be.multiplyScalar(1+Mt),o.push({kind:n.fairway,q:T,r:A,lift:0,playable:!0,tint:Be});continue}const B=Math.max(Math.abs(L)-H,S<h?h-S:0,S>d?S-d:0),J=Math.sin(L*.028+e*.9)*.55+Math.sin(S*.024-e*.6)*.45+Math.sin((L-S)*.017+1.3)*.4+Math.min(.45,B*.018)-.35,ue=Rn(T,A,e+17),K=Math.sin(L*.26+e*1.7)*.6+Math.sin(S*.21-e*1.1)*.5+Math.sin((L+S)*.15+2.1)*.4;let Q;const ae=n.reliefBias??0;if(n.seaBeyond!==void 0&&B>n.seaBeyond){const Ke=new oe(n.kindTint["hex-water"]??4886694);Ke.lerp(new oe(n.tint.far),Math.min(1,(B-n.seaBeyond)/26)*.5),o.push({kind:n.scenery.wet,q:T,r:A,lift:El,playable:!1,tint:Ke});continue}B<10&&K>.98&&n.bunker?Q=n.bunker:J>.78+ae?Q=n.scenery.high:J>.46+ae?Q=ue<.3?n.scenery.mid:n.scenery.low:J<-.62&&B>20?Q=n.scenery.wet:Q=n.scenery.low;const ye=Math.sin(L*.045+e*.7)*.6+Math.sin(S*.037-e*.4)*.5+Math.sin((L+S)*.021)*.5,q=Math.hypot(L,S+22),j=Math.min(1,Math.max(0,(q-(i+25))/30)),pe=n.seaBeyond!==void 0,Ie=pe?.55+Math.min(.5,B*.02):.9+Math.min(3.2,B*.1),xe=Math.min(1,Math.max(0,(B-15)/15)),je=xe*xe*(4.2+ye*3)*(pe?.35:1),Dt=Math.min(1,Math.max(0,(y+Al-S)/Al)),D=Math.max(j,Dt),He=(-Ie+ye*(pe?.35:.9)+je)*(1-D)+sy*D,ke=Math.max(Math.min(1,B/30),Dt),we=r(Q).lerp(s.far,ke*.8).multiplyScalar(1+(Rn(T,A,e+73)-.5)*.12);o.push({kind:Q,q:T,r:A,lift:He,playable:!1,tint:we})}}return hy(o),my(o,n,e),{tiles:o,playable:l,baseKind:n.base,firstRowZ:y,lastRowZ:v}}const fy=new Set(["hex-sand-desert","hex-sand-rocks","hex-stone-rocks","hex-stone-hill","hex-stone-mountain","hex-grass-forest","hex-grass-hill","hex-dirt-lumber"]),py=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1]];function my(i,e,t){const n=new Map;for(const o of i)!o.playable&&fy.has(o.kind)&&n.set(Bt(o.q,o.r),o);const s=o=>Rn(o.q,o.r,t+313),r=[];for(const o of n.values()){const l=s(o);let u=Rn(o.q,o.r,t+317)<.7;for(const[h,d]of py){const a=n.get(Bt(o.q+h,o.r+d));if(a&&s(a)>l){u=!1;break}}u||r.push(o)}for(const o of r)o.kind=e.base}const Yu=new Map,gy=`
vec3 seasonRgb2Hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 seasonHsv2Rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`;function Rl(i,e){const t=`${i.uuid}|${e.hue},${e.amount},${e.sat},${e.lift},${e.spread}`,n=Yu.get(t);if(n)return n;const s=i.clone(),r=i.onBeforeCompile;return s.onBeforeCompile=(o,l)=>{r?.call(i,o,l),o.uniforms.uSeason={value:new st(e.hue,e.amount,e.sat,e.lift)},o.uniforms.uSeasonSpread={value:e.spread},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying float vSeasonJitter;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          // Scatter: the instance's place in its hole. The instanced mesh
          // itself rides the carousel; the instances never move within it.
          vec2 seasonAt = instanceMatrix[3].xz;
        #else
          // A single mesh (an obstacle tree) only has its world matrix. The
          // carousel moves along z alone, so x and height are steady.
          vec2 seasonAt = vec2(modelMatrix[3].x, modelMatrix[3].y * 7.0 + modelMatrix[3].x * 0.37);
        #endif
        vSeasonJitter = fract(sin(dot(seasonAt, vec2(12.9898, 78.233))) * 43758.5453);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vSeasonJitter;
uniform vec4 uSeason;
uniform float uSeasonSpread;
${gy}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 hsv = seasonRgb2Hsv(diffuseColor.rgb);
          // Green, and saturated enough to be foliage rather than grey.
          float green = smoothstep(0.10, 0.18, hsv.x) * (1.0 - smoothstep(0.46, 0.53, hsv.x))
            * smoothstep(0.08, 0.22, hsv.y);
          float w = green * uSeason.y;
          float target = uSeason.x + (vSeasonJitter - 0.5) * uSeasonSpread;
          hsv.x = mix(hsv.x, fract(target), w);
          hsv.y = mix(hsv.y, clamp(hsv.y * uSeason.z, 0.0, 1.0), w);
          vec3 rgb = seasonHsv2Rgb(hsv);
          diffuseColor.rgb = mix(rgb, vec3(0.92, 0.95, 0.99) * max(hsv.z, 0.55), uSeason.w * green);
        }`)},s.customProgramCacheKey=()=>`season|${i.customProgramCacheKey?.()??""}`,Yu.set(t,s),s}function _y(i,e){i.traverse(t=>{const n=t;!n.isMesh||!n.material||(n.material=Array.isArray(n.material)?n.material.map(s=>Rl(s,e)):Rl(n.material,e))})}const xy=[{model:"town-stall-red",height:2.6,weight:2},{model:"town-stall-green",height:2.6,weight:2},{model:"town-cart",height:1.7,weight:3}],go=new ze,_o=new P,xo=new rn,vo=new P,$u=new P(0,1,0);function $e(i,e,t){const n=Math.sin(i*157.31+e*271.9+t*51.7)*43758.5453;return n-Math.floor(n)}function ju(i,e,t){const s=Math.floor(i/13),r=Math.floor(e/13),o=i/13-s,l=e/13-r,u=o*o*(3-2*o),h=l*l*(3-2*l),d=$e(s,r,t),a=$e(s+1,r,t),c=$e(s,r+1,t),f=$e(s+1,r+1,t);return(d*(1-u)+a*u)*(1-h)+(c*(1-u)+f*u)*h}function vy(i,e,t){const n=ju(i,e,t)*.65+ju(i*2.3+57,e*2.3+19,t+91)*.35;return Math.max(0,Math.min(1,(n-.38)/.24))}function lr(i,e){const t=i.reduce((s,r)=>s+r.weight,0);let n=e*t;for(const s of i)if(n-=s.weight,n<=0)return s;return i[i.length-1]}class yy{root=new ut;meshes=[];duration=0;add(e,t,n){this.meshes.push({mesh:e,items:t,base:n}),this.root.add(e);for(const s of t)this.duration=Math.max(this.duration,s.delay+s.rise)}dispose(){for(const{mesh:e}of this.meshes)e.dispose(),this.root.remove(e);this.meshes=[]}debugPlacements(){const e=[];for(const{mesh:t,items:n}of this.meshes)for(const s of n)e.push({model:t.name,x:s.pos.x,z:s.pos.z,r:s.r});return e}seal(){for(const{mesh:e,items:t,base:n}of this.meshes)t.forEach((s,r)=>{_o.copy(s.pos),xo.setFromAxisAngle($u,s.rot),vo.setScalar(s.abs??n*s.scale),go.compose(_o,xo,vo),e.setMatrixAt(r,go)}),e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere()}update(e){if(!(e>this.duration+.5))for(const{mesh:t,items:n,base:s}of this.meshes){for(let r=0;r<n.length;r++){const o=n[r],l=Math.max(0,Math.min(1,(e-o.delay)/o.rise)),u=l<=0?0:l>=1?1:1+2.6*(l-1)**3+1.6*(l-1)**2;_o.copy(o.pos),xo.setFromAxisAngle($u,o.rot),vo.setScalar((o.abs??s*o.scale)*u),go.compose(_o,xo,vo),t.setMatrixAt(r,go)}t.instanceMatrix.needsUpdate=!0}}}function My(i,e,t,n=$n,s=[]){const r=n.far,o=n.near,l=n.trim,u=n.landmark,h=new yy,d=(i.seed??i.id)*977+31;let a=0;for(const T of e.tiles)a=Math.min(a,Xt(T.q,T.r).z);const c=new Map,f=new Map;for(const T of[...r,...o,...l,...u,...n.formations?.table??[]])T.max!==void 0&&f.set(T.model,T.max);const m=new Map,_=new Map;for(const T of[...r,...o,...l,...u,...xy])_.set(T.model,T.height);const g=(T,L,N)=>{let U;try{U=Pr(T)}catch{return .5}const z=N??(_.get(T)??2)/(U.y||1)*L;return Math.max(U.x,U.z)*.5*z},p=4,x=new Map,y=(T,L)=>`${Math.floor(T/p)},${Math.floor(L/p)}`,v=(T,L,N,U,z)=>{const H=Math.ceil((U+8)/p),$=Math.floor(L/p),B=Math.floor(N/p);for(let te=-H;te<=H;te++)for(let J=-H;J<=H;J++)for(const ue of x.get(`${$+te},${B+J}`)??[]){const K=Math.hypot(ue.x-L,ue.z-N);if(K<(U+ue.r)*z||ue.model===T&&K<Math.max(3.5,(U+ue.r)*2.2))return!1}return!0},A=(T,L,N,U)=>{const z=y(L,N),H=x.get(z),$={x:L,z:N,r:U,model:T};H?H.push($):x.set(z,[$])},S=(T,L,N,U,z,H,$,B=.9)=>{const te=f.get(T),J=m.get(T)??0;if(te!==void 0&&J>=te)return!1;const ue=g(T,U,H);if(B>0){if(!v(T,L.x,L.z,ue,B))return!1;A(T,L.x,L.z,ue)}m.set(T,J+1);const K=$?.delay??As(L.z,a,$e(L.x|0,L.z|0,z)),Q=$?.rise??Rs($e(L.x|0,L.z|0,z+3)),ae={pos:L,rot:N,scale:U,abs:H,delay:K,rise:Q,r:ue},ye=c.get(T);return ye?ye.push(ae):c.set(T,[ae]),!0},R=(T,L,N,U,z,H)=>{const $={delay:As(N,a,$e(T|0,N|0,H)),rise:Rs($e(T|0,N|0,H+3))},B=z*.5,te=Math.cos(U),J=Math.sin(U),ue=(ae,ye)=>new P(T+ae*te+ye*J,L,N-ae*J+ye*te);A("town-house",T,N,z*.75),S("town-wall",ue(B,0),U,1,H,z,$,0),S("town-wall",ue(-B,0),U,1,H,z,$,0),S("town-wall",ue(0,B),U+Math.PI/2,1,H,z,$,0),S("town-wall",ue(0,-B),U+Math.PI/2,1,H,z,$,0);const K=ue(0,0);K.y=L+z,S("town-roof",K,U,1,H,z,$,0);const Q=ue(B*.45,B*.4);Q.y=L+z*1.02,S("town-chimney",Q,U,1,H,z*.5,$,0)},I=[],M=n.formations;if(M)for(let T=0;T<M.sites*4&&I.length<M.sites;T++){const L=T%2===0?1:-1,N=-14+(i.distance+58)*$e(T,21,d+499),U=L*(15+$e(T,3,d+501)*26),{q:z,r:H}=zn(U,N);if(e.playable.has(Bt(z,H))||!e.tiles.find(J=>J.q===z&&J.r===H)||I.some(J=>Math.hypot(J.x-U,J.z-N)<M.spread*3.2))continue;I.push({x:U,z:N,r:M.spread*1.6});const B=2+Math.floor($e(T,25,d+503)*(M.each-1)),te=M.spread*(.7+$e(T,27,d+505)*.7);for(let J=0;J<B;J++){const ue=J/Math.max(1,B-1),K=M.scale[1]+(M.scale[0]-M.scale[1])*ue**.6,Q=$e(T*13+J,5,d+509)*6.283,ae=J===0?0:(.25+$e(T*13+J,7,d+521)*.75)*te,ye=U+Math.cos(Q)*ae,q=N+Math.sin(Q)*ae,j=e.tiles.find(Ie=>{const xe=zn(ye,q);return Ie.q===xe.q&&Ie.r===xe.r});if(!j||e.playable.has(Bt(zn(ye,q).q,zn(ye,q).r)))continue;const pe=lr(M.table,$e(T*13+J,9,d+523));S(pe.model,new P(ye,j.lift-.3,q),$e(T*13+J,11,d+541)*6.283,K,d+547,void 0,void 0,.45)}}if(n.layout==="islands"){const T=[];for(let L=0;L<24&&T.length<5;L++){const N=L%2===0?1:-1,U=-18+(i.distance+56)*((L+.5)/24),z=N*(22+$e(L,5,d+311)*24),{q:H,r:$}=zn(z,U);if(e.playable.has(Bt(H,$)))continue;const B=e.tiles.find(J=>J.q===H&&J.r===$);if(!B||B.kind!=="hex-water"||T.some(J=>Math.hypot(J.x-z,J.z-U)<26))continue;T.push({x:z,z:U});const te=lr(u,$e(L,9,d+317));S(te.model,new P(z,B.lift-.5,U),$e(L,11,d+331)*6.283,.7+$e(L,13,d+337)*.35,d+341)}}for(const T of s){const L={delay:As(T.z,a,$e(T.x|0,T.z|0,d+61)),rise:Rs($e(T.x|0,T.z|0,d+67))};for(const[N,U]of T.cottages.entries())R(U.x,U.y,U.z,U.rot,U.size,d+71+N*7);for(const N of T.props)S(N.model,new P(N.x,N.y,N.z),N.rot,N.size,d+73,void 0,L,.6);for(const N of T.fences)S("town-fence",new P(N.x,N.y,N.z),N.rot,1,d+79,2.1,L,0)}const w=(T,L)=>s.some(N=>Math.hypot(T-N.x,L-N.z)<N.clear);for(const T of e.tiles){const{x:L,z:N}=Xt(T.q,T.r),U=$e(T.q,T.r,d);if(T.beach){if(T.isle===1||T.isle===0&&N>0&&Math.abs(L)<8||$e(T.q,T.r,d+211)>.34)continue;const ae=($e(T.q,T.r,d+217)-.5)*1.8,ye=($e(T.q,T.r,d+223)-.5)*1.8;for(let q=0;q<3;q++){const j=lr(o,$e(T.q,T.r,d+213+q*101));if(S(j.model,new P(L+ae,0,N+ye),$e(T.q,T.r,d+227)*6.283,(T.isle===0?.5:.75)+$e(T.q,T.r,d+229)*.55,d+231))break}continue}if(T.playable){if(U>.1*(n.density??1))continue;const ae=Math.abs(L),ye=Math.hypot(L,N)<8,q=Math.hypot(L-t.x,N-t.z)<11;if(ae<4||ye||q)continue;const j=($e(T.q,T.r,d+9)-.5)*1.6,pe=($e(T.q,T.r,d+13)-.5)*1.6,Ie=.75+$e(T.q,T.r,d+21)*.6;for(let xe=0;xe<3;xe++){const je=lr(l,$e(T.q,T.r,d+5+xe*101));if(S(je.model,new P(L+j,0,N+pe),$e(T.q,T.r,d+3)*6.283,Ie,d+31))break}continue}const z=Math.abs(L)-11,H=z>18||N<-6||N>i.distance+22,$=vy(L,N,d+601);let B=(z<4?.14:z<16?.44:z<30?.56:.5)*(n.density??1);B*=H?.15+.85*$:$*1.2,w(L,N)&&(B=0);for(const ae of I)if(Math.hypot(L-ae.x,N-ae.z)<ae.r){B=0;break}if(U>B||T.kind==="hex-water"||T.kind==="hex-water-rocks")continue;const te=($e(T.q,T.r,d+11)-.5)*2.8,J=($e(T.q,T.r,d+17)-.5)*2.8,ue=Math.min(1,Math.max(.42,(z-2)/14)),K=(.7+$e(T.q,T.r,d+23)*.75)*ue,Q=T.lift-.35;for(let ae=0;ae<3;ae++){const ye=lr(H?r:o,$e(T.q,T.r,d+7+ae*101));if(S(ye.model,new P(L+te,Q,N+J),$e(T.q,T.r,d+29)*6.283,K,d+47))break}}for(const[T,L]of c){let N;try{N=gd(T)}catch{continue}const U=Pr(T),z=(_.get(T)??2)/(U.y||1),H=n.foliage?Rl(N.material,n.foliage):N.material,$=new qi(N.geometry,H,L.length);$.name=T,$.castShadow=!0,$.receiveShadow=!1,$.instanceMatrix.setUsage(35048),h.add($,L,z)}return h.seal(),h.update(0),h}const yd={cols:4,rows:6},tl=yd.cols,Ku=yd.rows,nl=[16,17,18,19];let cr=null,Ni=null,Zu=!1;const Ju=[];function Qu(i){i.colorSpace="",i.wrapS=1001,i.wrapT=1001}function by(i,e){if(Ni)return e(Ni),Ni;if(!cr){const t=document.createElement("canvas");t.width=t.height=1,t.getContext("2d").fillRect(0,0,1,1),cr=new It(t),Qu(cr),cr.needsUpdate=!0}if(Ju.push(e),!Zu){Zu=!0;const t=()=>{new td().load(`${i}vfx.png`,n=>{Ni=new It(n),Qu(Ni),Ni.needsUpdate=!0;for(const s of Ju.splice(0))s(Ni)})};document.readyState==="complete"?t():window.addEventListener("load",t,{once:!0})}return cr}const Sy=1.45,eh=34,wy=2,th=new ze,nh=new P,ih=new rn,sh=new P;function il(i,e,t){const n=Math.sin(i*157.31+e*271.9+t*51.7)*43758.5453;return n-Math.floor(n)}class Ty{mesh;mat;uniforms={uTime:{value:0}};count=0;constructor(e,t,n,s){this.mat=new yn({transparent:!1,alphaTest:.42,side:2,vertexColors:!0,toneMapped:!1}),this.mat.map=by(e,_=>{this.mat.map=_});const r=new Wn(1,1);r.translate(0,.5,0);const o=r.attributes.position.count;r.setAttribute("color",new Ct(new Float32Array(o*3).fill(1),3));const l=this.place(t,s);this.count=l.length;const u=new vn(new Float32Array(this.count),1),h=new vn(new Float32Array(this.count),1),d=new vn(new Float32Array(this.count*2),2),a=new vn(new Float32Array(this.count*2),2);r.setAttribute("aCell",u),r.setAttribute("aPhase",h),r.setAttribute("aSize",a),r.setAttribute("aGrow",d),this.mat.onBeforeCompile=_=>{_.uniforms.uTime=this.uniforms.uTime,_.vertexShader=["attribute float aCell;","attribute float aPhase;","attribute vec2 aSize;","attribute vec2 aGrow;","uniform float uTime;","varying vec2 vCell;","varying float vTip;",_.vertexShader].join(`
`).replace("#include <begin_vertex>",["#include <begin_vertex>",`  float _c = mod(aCell, ${tl}.0);`,`  float _r = floor(aCell / ${tl}.0);`,`  vCell = vec2(_c, ${Ku}.0 - 1.0 - _r);`,"  vTip = position.y;","  float _g = clamp((uTime - aGrow.x) / aGrow.y, 0.0, 1.0);","  _g = _g * _g * (3.0 - 2.0 * _g);","  vec3 _o = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);","  vec3 _look = cameraPosition - _o;","  _look.y = 0.0;","  _look = normalize(_look);","  vec3 _side = normalize(cross(vec3(0.0, 1.0, 0.0), _look));","  float _sway = sin(uTime * 1.7 + aPhase) * 0.14 + sin(uTime * 0.6 + aPhase * 1.7) * 0.07;","  transformed = _side * (position.x * aSize.x + _sway * position.y * aSize.y) * _g","    + vec3(0.0, position.y * aSize.y * _g, 0.0);"].join(`
`)),_.fragmentShader=["varying vec2 vCell;","varying float vTip;",_.fragmentShader].join(`
`).replace("#include <map_fragment>",[`  vec2 _uv = (clamp(vMapUv, 0.002, 0.998) + vCell) / vec2(${tl}.0, ${Ku}.0);`,"  diffuseColor.a *= texture2D(map, _uv).r;","  diffuseColor.rgb *= mix(0.68, 1.18, vTip);"].join(`
`))},this.mat.customProgramCacheKey=()=>"grass-billboard",this.mesh=new qi(r,this.mat,Math.max(1,this.count)),this.mesh.instanceColor=new vn(new Float32Array(Math.max(1,this.count)*3).fill(1),3),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1;const c=new oe,f=new oe(n.tint.rough),m=new oe(n.tint.fairway);l.forEach((_,g)=>{ih.identity(),nh.set(_.x,_.y,_.z),sh.setScalar(1),th.compose(nh,ih,sh),this.mesh.setMatrixAt(g,th),u.setX(g,nl[_.cell]),h.setX(g,_.phase),a.setXY(g,_.w,_.h),d.setXY(g,_.delay,_.rise),c.copy(f).lerp(m,.25+_.shade*.5).multiplyScalar(1.04),this.mesh.instanceColor.setXYZ(g,c.r,c.g,c.b)}),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.mesh.computeBoundingSphere()}place(e,t){const n=[];for(const s of e.tiles){if(s.playable||!s.kind.startsWith("hex-grass"))continue;const{x:r,z:o}=Xt(s.q,s.r);if(!(Math.abs(r)>eh)&&!(o<t-4))for(let l=0;l<wy;l++){const u=il(s.q,s.r,11+l*7),h=il(s.q,s.r,23+l*7),d=il(s.q,s.r,41+l*7);if(d>1-Math.abs(r)/eh*.75)continue;const a=Sy*(.65+u*.7);n.push({x:r+(u-.5)*2.4,y:s.lift,z:o+(h-.5)*2.4,w:a*(.9+h*.5),h:a,cell:Math.floor(u*nl.length)%nl.length,phase:h*Math.PI*2,shade:d,delay:As(o,t,u),rise:Rs(h)*.8})}}return n}update(e){this.uniforms.uTime.value=e}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.mesh.dispose()}}const Ey={meadow:{chance:.85,rings:3,cottages:[4,6],laneHouses:2,square:["town-stall-red","town-stall-green","town-cart"],edge:{model:"town-windmill",size:1},garden:["tree-small","bush-large","tree-oak"]},pine:{chance:.6,rings:2,cottages:[2,4],laneHouses:1,square:["log-stack","town-cart"],edge:null,garden:["pine-small-a","stump-round","log-large"]}},gr=[[1,0],[1,-1],[0,-1],[-1,0],[-1,1],[0,1]];function fs(i,e,t){if(t===0)return[{q:i,r:e}];const n=[];let s=i+gr[4][0]*t,r=e+gr[4][1]*t;for(let o=0;o<6;o++)for(let l=0;l<t;l++)n.push({q:s,r}),s+=gr[o][0],r+=gr[o][1];return n}function Ft(i,e,t){const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)}function Ay(i,e,t,n,s){const r=Ey[t.key];if(!r||!t.villages)return[];if(Ft(n,1,5)>r.chance)return[];const o=new Map;for(const a of i.tiles)a.under||o.set(Bt(a.q,a.r),a);const l=(a,c)=>o.get(Bt(a,c)),u=[],h=e>70&&Ft(n,2,9)<.35?2:1,d=r.rings;for(let a=0;a<20&&u.length<h;a++){const c=(a+Math.floor(Ft(n,3,11)*2))%2===0?1:-1,f=i.firstRowZ+s+10+(e-i.firstRowZ-s)*Ft(n+a,5,13),m=c*(20+Ft(n+a,7,17)*12),{q:_,r:g}=zn(m,f);let p=!0,x=1/0,y=-1/0;const v=[];for(let K=0;K<=d+1&&p;K++)for(const Q of fs(_,g,K)){const ae=l(Q.q,Q.r);if(!ae||ae.playable||ae.kind==="hex-water"||ae.lift<-4.5){p=!1;break}K<=d&&(v.push(ae.lift),x=Math.min(x,ae.lift),y=Math.max(y,ae.lift))}if(!p||y-x>3.5)continue;const A=Xt(_,g);if(u.some(K=>Math.hypot(K.x-A.x,K.z-A.z)<K.clear+(d+2)*3))continue;v.sort((K,Q)=>K-Q);const S=Math.max(-3.4,Math.min(-.8,v[Math.floor(v.length/2)])),R=new oe(t.kindTint["hex-dirt"]??8088395).lerp(new oe(t.tint.far),.12).multiplyScalar(1.12);for(let K=0;K<=d+1;K++)for(const Q of fs(_,g,K)){const ae=l(Q.q,Q.r);K<=d?(ae.lift=S,ae.kind=t.base):ae.lift=(ae.lift+S)/2}const I=new Set;for(let K=0;K<=1;K++)for(const Q of fs(_,g,K))I.add(Bt(Q.q,Q.r));const M=c>0?[1,0]:[-1,0],w=[];for(let K=2;K<=d;K++)w.push({q:_+M[0]*K,r:g+M[1]*K});for(const K of w)I.add(Bt(K.q,K.r));for(const K of I){const Q=o.get(K);Q&&(Q.kind="hex-dirt",Q.tint=R.clone().multiplyScalar(.94+Ft(Q.q,Q.r,n)*.12))}const T=S-.55,L={x:A.x,z:A.z,ground:S,clear:(d+.8)*3,cottages:[],props:[],fences:[]},N=n+a*31,U=(K,Q)=>Math.atan2(A.x-K,A.z-Q),z=fs(_,g,2).filter((K,Q)=>Q%2===0).filter(K=>!I.has(Bt(K.q,K.r))),H=r.cottages[0]+Math.floor(Ft(N,1,19)*(r.cottages[1]-r.cottages[0]+1)),$=z.map((K,Q)=>({h:K,p:Ft(N+Q,2,23)})).sort((K,Q)=>K.p-Q.p);for(const{h:K}of $.slice(0,Math.min(H,$.length))){const Q=Xt(K.q,K.r),ae=3.1+Ft(K.q,K.r,N+3)*.7,ye=U(Q.x,Q.z);L.cottages.push({x:Q.x,y:T,z:Q.z,rot:ye,size:ae});const q=Q.x-Math.sin(ye)*(ae*.5+1.6),j=Q.z-Math.cos(ye)*(ae*.5+1.6),pe=Math.cos(ye),Ie=-Math.sin(ye);for(let xe=-1;xe<=1;xe++)L.fences.push({x:q+pe*xe*2.1,y:S,z:j+Ie*xe*2.1,rot:ye+Math.PI/2})}const B=w[w.length-1];if(B){const K=Xt(B.q,B.r);for(let Q=0;Q<r.laneHouses;Q++){const ae=Q%2===0?1:-1,ye=K.x,q=K.z+ae*3.6;L.cottages.some(j=>Math.hypot(j.x-ye,j.z-q)<5)||L.cottages.push({x:ye,y:T,z:q,rot:Math.atan2(0,-ae),size:2.9+Ft(Q,5,N)*.5})}}const te=fs(_,g,1),J=Math.min(r.square.length,2+Math.floor(Ft(N,4,29)*2));for(let K=0;K<J;K++){const Q=te[(Math.floor(Ft(N,6,31)*6)+K*2)%6],ae=Xt(Q.q,Q.r);L.props.push({model:r.square[K%r.square.length],x:ae.x,y:S,z:ae.z,rot:U(ae.x,ae.z),size:1})}if(r.edge){const K=Ft(N,8,37)<.5?1:5,Q=c>0?0:3,ae=gr[(Q+K)%6],ye={q:_+ae[0]*(d+1),r:g+ae[1]*(d+1)},q=l(ye.q,ye.r);if(q){q.lift=S;const j=Xt(ye.q,ye.r);L.props.push({model:r.edge.model,x:j.x,y:S-.3,z:j.z,rot:c>0?Math.PI:0,size:r.edge.size})}}const ue=fs(_,g,2).filter(K=>!I.has(Bt(K.q,K.r))&&!L.cottages.some(Q=>{const ae=Xt(K.q,K.r);return Math.hypot(Q.x-ae.x,Q.z-ae.z)<3.4}));for(const[K,Q]of ue.entries()){if(Ft(Q.q,Q.r,N+41)>.55)continue;const ae=Xt(Q.q,Q.r);L.props.push({model:r.garden[K%r.garden.length],x:ae.x+(Ft(Q.q,Q.r,N+43)-.5)*1.6,y:S,z:ae.z+(Ft(Q.q,Q.r,N+47)-.5)*1.6,rot:Ft(Q.q,Q.r,N+53)*6.283,size:.75+Ft(Q.q,Q.r,N+59)*.3})}u.push(L)}return u}const rh=9,Ry=-4;class oh{constructor(e){this.level=e,this.holeRadius=e.holeRadius??1,this.cupRadius=Math.min(this.holeRadius,.62+.12*(this.holeRadius-1));const t=e.distance;this.greenCentre.set(0,0,t),this.cup.set(0,0,t),e.holePath&&(this.path={from:new qe(0,t),to:new qe(e.holePath.to[0],e.holePath.to[1]),speed:e.holePath.speed},this.greenCentre.set((this.path.from.x+this.path.to.x)/2,0,(this.path.from.y+this.path.to.y)/2));const n=[{x:0,z:0,radius:5},{x:this.greenCentre.x,z:this.greenCentre.z,radius:rh}],s=Mi(e),r=dy(e.distance,(e.seed??e.id)*13+7,n,s);this.firstRowZ=r.firstRowZ,this.lastRowZ=r.lastRowZ,this.playable=r.playable;const o=e.seed??e.id,l=Ay(r,e.distance,s,o*7919+13,Al);this.villages=l,this.field=new ny(r.tiles,r.baseKind),this.root.add(this.field.root),this.buildCup(),this.buildFlag();const u=new Map;for(const h of r.tiles)h.under||u.set(Bt(h.q,h.r),h.playable?0:h.lift);for(const h of e.objects){const{q:d,r:a}=zn(h.pos[0],h.pos[2]),c=u.get(Bt(d,a)),f=h.pos[1]===0&&c!==void 0?{...h,pos:[h.pos[0],c,h.pos[2]]}:h,m=Vv(f);m&&(m.root.userData.isObstacle=!0,s.foliage&&_y(m.root,s.foliage),this.obstacles.push(m),this.root.add(m.root),this.arrive(m.root,f.pos[0],f.pos[2]))}this.arrive(this.cupGroup,this.cup.x,this.cup.z),this.arrive(this.flag,this.cup.x,this.cup.z,.35),this.scatter=My(e,r,this.greenCentre,s,l),this.root.add(this.scatter.root),this.grass=new Ty("./",r,s,r.firstRowZ),this.root.add(this.grass.mesh)}level;root=new ut;obstacles=[];cup=new P;holeRadius;cupRadius;firstRowZ;lastRowZ;field;scatter;grass;playable;greenCentre=new P;cupGroup=new ut;flag=new ut;rimMat;path;arrivals=[];arrivalEnd=0;debugTiles(){return this.field.debugTiles()}debugScatter(){return[]}villages=[];get buildTime(){return Math.max(this.field.buildTime,this.arrivalEnd)}arrive(e,t,n,s=0){const r=Math.abs(Math.sin(t*12.9898+n*78.233)*43758.5453)%1,o=As(n,this.firstRowZ,r)+s,l=Rs(r);this.arrivals.push({obj:e,delay:o,rise:l}),this.arrivalEnd=Math.max(this.arrivalEnd,o+l),e.visible=!1}updateArrivals(e){if(!(e>this.arrivalEnd+.5))for(const t of this.arrivals){const n=Math.max(0,Math.min(1,(e-t.delay)/t.rise));t.obj.visible=n>0;const s=n<=0?0:n>=1?1:1+2.6*(n-1)**3+1.6*(n-1)**2;t.obj.scale.setScalar(Math.max(.001,s))}}buildCup(){const e=new Re(new zt(this.cupRadius,this.cupRadius,.5,20),it(_e.cup,{rough:1}));e.userData.owned=!0,e.position.y=-.24,this.cupGroup.add(e),this.rimMat=new fn({color:_e.cloth,roughness:.7,flatShading:!0,emissive:new oe(_e.flag),emissiveIntensity:0});const t=new Re(new ks(this.cupRadius,.07,6,22),this.rimMat);t.userData.owned=!0,t.rotation.x=Math.PI/2,t.position.y=.02,this.cupGroup.add(t),this.cupGroup.position.copy(this.cup),this.root.add(this.cupGroup)}buildFlag(){const e=new yn({color:_e.flag,transparent:!0,opacity:.32,depthTest:!1,depthWrite:!1,side:2}),t=new ut,n=new Re(new zt(.14,.14,5.5,5),e);n.userData.owned=!0,n.position.y=2.75,t.add(n);const s=new Re(new Wn(2,1.2),e);s.userData.owned=!0,s.position.set(1,4.8,0),t.add(s),t.traverse(l=>{l.renderOrder=999}),this.flag.add(t);const r=new Re(new zt(.09,.09,5.5,6),it(_e.cloth));r.userData.owned=!0,r.position.y=2.75,r.castShadow=!0,this.flag.add(r);const o=new Re(new Wn(2,1.2,4,2),new fn({color:_e.flag,side:2,flatShading:!0,roughness:.8}));o.userData.owned=!0,o.position.set(1,4.8,0),this.flag.add(o),this.flag.position.copy(this.cup),this.root.add(this.flag)}setCupGlow(e){this.rimMat.emissiveIntensity=e*2.2}groundHeight(e,t){const{q:n,r:s}=zn(e,t);return this.playable.has(Bt(n,s))?0:Ry}onGreen(e,t){return Math.hypot(e-this.greenCentre.x,t-this.greenCentre.z)<=rh}update(e){this.field.update(e),this.scatter.update(e),this.grass.update(e),this.updateArrivals(e),this.simTime(e);const t=this.flag.children[2];t&&(t.rotation.y=Math.sin(e*2.5)*.28)}get cupCycle(){return this.path?this.path.from.distanceTo(this.path.to)*2/this.path.speed:0}simTime(e){if(this.path){const t=this.cupCycle,n=(e%t+t)%t/t,s=n<.5?n*2:2-n*2,r=s*s*(3-2*s);this.cup.set(this.path.from.x+(this.path.to.x-this.path.from.x)*r,0,this.path.from.y+(this.path.to.y-this.path.from.y)*r),this.cupGroup.position.copy(this.cup),this.flag.position.copy(this.cup)}for(const t of this.obstacles)t.update?.(e)}dispose(){this.field.dispose(),this.scatter.dispose(),this.grass.dispose(),this.root.traverse(e=>{const t=e;e.isInstancedMesh?e.dispose():t.geometry&&t.userData.owned&&t.geometry.dispose()}),this.root.clear()}}const ct={elevationDeg:25,maxSpeed:38,powerExp:.5,maxAngleDeg:60,spread:1,landingCarry:.2,gravity:9.81,assistRadius:3,maxPullFrac:.22,pullSlackDeg:20},$o=Math.PI/180;function Cl(i,e){const t=Math.max(0,Math.min(1,i)),n=Math.max(-60,Math.min(ct.maxAngleDeg,e)),s=ct.maxSpeed*Math.pow(t,ct.powerExp),r=ct.elevationDeg*$o,o=s*Math.sin(r),l=s*Math.cos(r),u=l,h=l*ct.spread*Math.sin(n*$o),d=2*o/ct.gravity,a=Math.max(0,Math.min(1,ct.landingCarry)),c=d>0?-(4-2*a)*h/d:0,f=d>0?6*(1-a)*h/(d*d):0;return{vx:h,vy:o,vz:u,ax0:c,ax1:f,flightTime:d,power:t,angleDeg:n}}function Cy(i,e){const t=Math.min(e,i.flightTime);return i.ax0+i.ax1*t}function Py(i,e,t){const n=t*ct.maxPullFrac,s=Math.hypot(i,e),r=Math.atan2(i,e)/$o;return{power:e>0&&Math.abs(r)<=ct.maxAngleDeg+ct.pullSlackDeg?Math.min(1,s/n):0,angleDeg:Math.max(-60,Math.min(ct.maxAngleDeg,r))}}function Md(i){const e=Math.max(0,Math.min(1,i)),t=ct.maxSpeed*Math.pow(e,ct.powerExp);return t*t*Math.sin(2*ct.elevationDeg*$o)/ct.gravity}function bd(i){const e=Md(1);return e<=0?0:Math.pow(Math.max(0,Math.min(1,i/e)),1/(2*ct.powerExp))}const en=.3,vs={restitution:.34,bounceFriction:.46,stopSpeed:.35,captureSpeed:4.5,maxFlightTime:22},Fo=1/120,kn={normal:new P,depth:0,restitution:.4,kind:"block"},ah=new P,yo=new P;function Sd(){return{pos:new P,vel:new P,launched:null,elapsed:0,state:"ready",hasLanded:!1,firstLanding:new P,usedHelper:null,closest:1/0,lipped:!1}}function wd(i,e,t){i.pos.copy(e),i.pos.y=Math.max(e.y,t.groundHeight(e.x,e.z)+en),i.vel.set(0,0,0),i.launched=null,i.elapsed=0,i.state="ready",i.hasLanded=!1,i.firstLanding.set(0,0,0),i.usedHelper=null,i.closest=1/0,i.lipped=!1}function Td(i,e){i.vel.set(e.vx,e.vy,e.vz),i.launched=e,i.elapsed=0,i.hasLanded=!1,i.lipped=!1,i.state="flying"}function lh(i,e,t,n=1.15){const s=e.x-i.x,r=e.z-i.z,o=e.y-i.y,l=Math.hypot(s,r),u=ct.gravity,h=Math.max(.45,Math.sqrt(2*l/u)*n);return t.set(s/h,(o+.5*u*h*h)/h,r/h),t}function Ed(i,e,t,n){if(i.state!=="flying"&&i.state!=="rolling")return;if(i.elapsed+=t,i.elapsed>vs.maxFlightTime)return Pl(i,n);const s=i.state==="flying";i.vel.y-=ct.gravity*t,s&&i.launched&&(i.vel.x+=Cy(i.launched,i.elapsed-t/2)*t);for(const o of e.obstacles)o.field?.(i.pos,ah)&&i.vel.addScaledVector(ah,t);i.pos.addScaledVector(i.vel,t);const r=i.pos.distanceTo(e.cup);if(r<i.closest&&(i.closest=r),Math.abs(i.pos.x)>140||i.pos.z<-40||i.pos.z>e.level.distance+160)return Pl(i,n);Ly(i,e,n),!(i.state!=="flying"&&i.state!=="rolling")&&Iy(i,e,t,n)}function Ly(i,e,t){for(const n of e.obstacles){if(!n.probe?.(i.pos,en,kn))continue;const s=i.vel.length();if(kn.kind==="archery"){t?.onObstacle?.("archery",s,i.pos),i.usedHelper="archery",yo.copy(e.cup).setY(en),lh(i.pos,yo,i.vel,1.05),i.launched=null,i.state="flying";return}if(kn.kind==="tube"){if(i.vel.y>=0)continue;t?.onObstacle?.("tube",s,i.pos),i.usedHelper="tube",yo.copy(e.cup).setY(en),lh(i.pos,yo,i.vel,1),i.launched=null,i.state="flying";return}if(kn.kind==="balloon"){if(i.vel.y>=0)continue;t?.onObstacle?.("balloon",s,i.pos),i.usedHelper="balloon",i.vel.set(0,0,0),i.launched=null,i.state="perched",t?.onPerched?.(i.pos);return}i.pos.addScaledVector(kn.normal,kn.depth);const r=i.vel.dot(kn.normal);r<0&&(i.vel.addScaledVector(kn.normal,-r*(1+kn.restitution)),i.vel.multiplyScalar(.86),t?.onObstacle?.(kn.kind,s,i.pos)),i.launched=null}}function Iy(i,e,t,n){const s=e.groundHeight(i.pos.x,i.pos.z),r=s+en;if(e.onGreen(i.pos.x,i.pos.z)&&i.pos.y<=r+.28){const l=i.pos.x-e.cup.x,u=i.pos.z-e.cup.z;if(Math.hypot(l,u)<=e.holeRadius){if(i.vel.y<-3.5||i.vel.length()<=vs.captureSpeed){i.pos.y=s-.2,i.state="holed",n?.onHoled?.();return}i.lipped||(i.lipped=!0,n?.onLipOut?.())}}if(i.pos.y>r){i.state="flying";return}if(i.pos.y=r,i.hasLanded||(i.hasLanded=!0,i.firstLanding.copy(i.pos)),i.launched=null,i.vel.y<-.6){const l=Math.abs(i.vel.y);i.vel.y=l*vs.restitution,i.vel.x*=vs.bounceFriction,i.vel.z*=vs.bounceFriction,i.state="flying",n?.onBounce?.(l,e.onGreen(i.pos.x,i.pos.z),i.pos);return}i.vel.y=0,i.state="rolling";const o=Math.exp(-3.4*t);i.vel.x*=o,i.vel.z*=o,Math.hypot(i.vel.x,i.vel.z)<vs.stopSpeed&&(i.vel.set(0,0,0),Pl(i,n))}function Pl(i,e){i.state==="holed"||i.state==="missed"||(i.state="missed",e?.onMissed?.())}const En=Sd();function Ll(i,e,t,n){wd(En,i,t),Td(En,e);let s=0;for(;(En.state==="flying"||En.state==="rolling")&&s++<4e3;)n!==void 0&&t.simTime(n+En.elapsed),Ed(En,t,Fo);const r=En.pos.distanceTo(t.cup),o=t.cup.z;return n!==void 0&&t.simTime(n),{holed:En.state==="holed",state:En.state,closest:En.closest,rest:r,restZ:En.pos.z,restCupZ:o}}class Dy{constructor(e,t,n={}){this.world=t,this.events=n,this.mesh=e}world;events;sim=Sd();mesh;fading=0;sinking=0;sinkY=0;runIn={on:!1,t:0,dur:0,x0:0,z0:0,tx:0,tz:0,y:0};acc=0;spin=new P;popDelay=0;popTime=0;popDur=0;clock=null;get pos(){return this.sim.pos}get vel(){return this.sim.vel}get state(){return this.sim.state}get hasLanded(){return this.sim.hasLanded}get firstLanding(){return this.sim.firstLanding}get usedHelper(){return this.sim.usedHelper}get live(){return this.sim.state==="flying"||this.sim.state==="rolling"}get busy(){return this.live||this.sim.state==="perched"||this.fading>0||this.sinking>0||this.runIn.on}setWorld(e){this.world=e}reset(e){wd(this.sim,e,this.world),this.fading=0,this.sinking=0,this.runIn.on=!1,this.acc=0,this.popDelay=0,this.popTime=0,this.clock=null,this.mesh.visible=!0,this.mesh.scale.setScalar(1),this.mesh.position.copy(this.sim.pos),this.mesh.rotation.set(0,0,0)}popIn(e=.3,t=.28){this.popDelay=e,this.popDur=t,this.popTime=t,this.mesh.scale.setScalar(.001)}launch(e,t){Td(this.sim,e),this.clock=t??null}hide(){this.mesh.visible=!1,this.sim.state="ready",this.clock=null,this.fading=0,this.sinking=0,this.runIn.on=!1,this.popTime=0}update(e){if(this.runIn.on){this.rollIn(e);return}if(this.sinking>0){this.sinking=Math.max(0,this.sinking-e);const n=this.sinking/uh;this.mesh.position.y=this.sinkY-(1-n)*en*2.4,this.mesh.scale.setScalar(Math.max(.001,n)),this.sinking<=0&&(this.mesh.visible=!1);return}if(this.fading>0){this.fading-=e,this.mesh.scale.setScalar(Math.max(0,this.fading/ch)),this.fading<=0&&(this.mesh.visible=!1);return}if(this.popTime>0)if(this.popDelay>0)this.popDelay-=e;else{this.popTime-=e;const s=1-Math.max(0,this.popTime)/this.popDur-1,r=1.7;this.mesh.scale.setScalar(Math.max(.001,1+(r+1)*s*s*s+r*s*s))}if(!this.live)return;for(this.acc+=Math.min(e,.1);this.acc>=Fo&&(this.acc-=Fo,ur.copy(this.sim.pos),ni.copy(this.sim.vel),this.clock!==null&&this.world.simTime(this.clock+this.sim.elapsed),Ed(this.sim,this.world,Fo,this.events),!!this.live););if(this.sim.state==="holed"&&this.mesh.visible){this.startRunIn();return}this.mesh.position.copy(this.sim.pos);const t=this.sim.vel.length();t>.01&&(this.spin.set(this.sim.vel.z,0,-this.sim.vel.x).normalize(),this.mesh.rotateOnWorldAxis(this.spin,t*e/en))}startRunIn(){const e=this.runIn,t=this.world.groundHeight(ur.x,ur.z);e.on=!0,e.t=0,e.x0=ur.x,e.z0=ur.z,e.y=t+en;const n=Math.hypot(this.world.cup.x-e.x0,this.world.cup.z-e.z0),s=Math.max(1.8,Math.hypot(ni.x,ni.z));e.dur=Math.max(.1,Math.min(.55,n/s));const r=Math.min(Math.hypot(ni.x,ni.z)*e.dur,n*1.2),o=Math.hypot(ni.x,ni.z)||1;e.tx=ni.x/o*r,e.tz=ni.z/o*r,this.popTime=0,this.mesh.position.set(e.x0,e.y,e.z0)}rollIn(e){const t=this.runIn;t.t=Math.min(t.dur,t.t+e);const n=t.t/t.dur,s=this.world.cup.x,r=this.world.cup.z,o=(s-t.x0)*.6,l=(r-t.z0)*.6,u=n*n,h=u*n,d=2*h-3*u+1,a=h-2*u+n,c=-2*h+3*u,f=h-u,m=d*t.x0+a*t.tx+c*s+f*o,_=d*t.z0+a*t.tz+c*r+f*l,g=Math.hypot(m-this.mesh.position.x,_-this.mesh.position.z);g>1e-5&&(this.spin.set(_-this.mesh.position.z,0,-(m-this.mesh.position.x)).normalize(),this.mesh.rotateOnWorldAxis(this.spin,g/en)),this.mesh.position.set(m,t.y,_),n>=1&&(t.on=!1,this.sinkY=t.y,this.sinking=uh)}fadeOut(){this.fading<=0&&this.mesh.visible&&(this.fading=ch,this.sim.state="ready",this.clock=null,this.popTime=0)}}const ch=.5,ur=new P,ni=new P,uh=.2,Ny=36,ky=.8;function Uy(i,e,t,n,s){const r=Cl(e,t),o=Ll(i,r,n,s),l=n.level.assist??ct.assistRadius;if(o.holed||l<=0||o.rest>l)return{launch:r,applied:!1,playerMiss:o.rest};const u=Math.max(.25,n.holeRadius*.7),h=Md(e),d=(o.restCupZ-o.restZ)*ky,a=l*1.3+u;let c=Ny;const f=(m,_)=>{c--;const g=Math.max(.01,Math.min(1,bd(Math.max(1,h+m)))),p=Math.max(-60,Math.min(ct.maxAngleDeg,t+_)),x=Cl(g,p);return Ll(i,x,n,s).holed?x:null};for(let m=0;c>12&&m<40;m++){const _=m===0?0:(m%2?1:-1)*Math.ceil(m/2),g=d+_*u;if(Math.abs(g)>a)continue;const p=f(g,0);if(p)return{launch:p,applied:!0,playerMiss:o.rest}}for(const m of[.75,-.75,1.5,-1.5,2.5,-2.5,3.5,-3.5])for(const _ of[0,1,-1]){if(c<=0)break;const g=f(d+_*u,m);if(g)return{launch:g,applied:!0,playerMiss:o.rest}}return{launch:r,applied:!1,playerMiss:o.rest}}const Mo=24,hr=48,hh=Math.PI/180,bo={maxLen:4.6,gap:.8,dotMin:.13,dotMax:.19,lift:1.8,bend:1.8,sweep:.52,outline:.13,slurp:.09,red:16070447,amber:16757828,rim:1778224},Fy=new oe(16777215),dh=new oe,sl=new oe,rl=new oe,ps=new ze,ol=new rn,ki=new P,ms=new P;class Oy{root=new ut;dots;rims;pts=new Float32Array((hr+1)*3);len=new Float32Array(hr+1);scale=1;size=1;targetPower=0;targetAngle=0;power=0;angle=0;origin=new P;active=!1;releasing=!1;constructor(){const e=new bi(1,18,12);this.dots=new qi(e,new yn({color:16777215}),Mo),this.dots.instanceColor=new vn(new Float32Array(Mo*3),3),this.dots.castShadow=!0,this.rims=new qi(e,new yn({color:bo.rim,side:1}),Mo);for(const t of[this.dots,this.rims])t.instanceMatrix.setUsage(35048),t.frustumCulled=!1,t.count=0,this.root.add(t);this.root.visible=!1}hide(){this.root.visible=!1,this.active=!1,this.releasing=!1,this.power=0,this.angle=0}release(){this.active&&(this.releasing=!0)}show(e,t,n){this.origin.copy(e),this.targetPower=t,this.targetAngle=n,this.active||(this.power=Math.min(t,.05),this.angle=n),this.active=!0,this.releasing=!1,this.root.visible=!0}update(e){if(!this.active)return;const t=1-Math.exp(-26*e);if(this.releasing){const n=1-Math.exp(-(4/Math.max(.02,bo.slurp))*e);if(this.power+=(0-this.power)*n,this.power<.02){this.hide();return}}else this.power+=(this.targetPower-this.power)*t,this.angle+=(this.targetAngle-this.angle)*t;this.build()}shapeArc(){const e=bo,t=Math.max(-60,Math.min(ct.maxAngleDeg,this.angle))*hh,n=Math.sin(t)*ct.spread*e.bend,s=Math.tan(ct.elevationDeg*hh)*e.lift,r=Math.max(0,Math.min(1,ct.landingCarry));let o=0;for(let l=0;l<=hr;l++){const u=l/hr*e.sweep,h=u-(2-r)*u*u+(1-r)*u*u*u,d=n*h,a=s*u*(1-u),c=u;if(l>0){const f=(l-1)*3;o+=Math.hypot(d-this.pts[f],a-this.pts[f+1],c-this.pts[f+2])}this.pts[l*3]=d,this.pts[l*3+1]=a,this.pts[l*3+2]=c,this.len[l]=o}this.scale=e.maxLen*this.size/Math.max(1e-6,o)}at(e,t){const n=e/this.scale;let s=1;for(;s<hr&&this.len[s]<n;)s++;const r=this.len[s-1],o=this.len[s],l=o>r?Math.max(0,Math.min(1,(n-r)/(o-r))):0,u=(s-1)*3,h=s*3;return t.set((this.pts[u]+(this.pts[h]-this.pts[u])*l)*this.scale,(this.pts[u+1]+(this.pts[h+1]-this.pts[u+1])*l)*this.scale,(this.pts[u+2]+(this.pts[h+2]-this.pts[u+2])*l)*this.scale),t}build(){const e=bo,t=this.size,n=e.maxLen*t,s=e.gap*t,r=e.dotMin*t,o=e.dotMax*t,l=Math.max(0,Math.min(1,this.power));this.shapeArc(),dh.setHex(e.red),sl.setHex(e.amber),this.rims.material.color.setHex(e.rim);const u=en+r+.06*t,h=Math.max(.01,n-u),d=u+h*Math.pow(l,.9),a=s*.5;let c=0;for(let f=0;f<Mo;f++){const m=u+f*s;if(m>n+1e-4)break;const _=Math.max(0,Math.min(1,(d-(m-a))/a));if(_<=0)break;const g=_*_*(3-2*_),p=(m-u)/h,x=(r+(o-r)*p)*g;this.at(m,ki),ms.setScalar(x),ps.compose(ki,ol,ms),this.dots.setMatrixAt(c,ps),ms.setScalar(x*(1+e.outline)),ps.compose(ki,ol,ms),this.rims.setMatrixAt(c,ps);const y=Math.max(0,Math.min(1,1.3*l-.35*(1-p)))**.85;y<.5?rl.copy(Fy).lerp(sl,y*2):rl.copy(sl).lerp(dh,y*2-1),this.dots.setColorAt(c,rl),c++}this.dots.count=c,this.rims.count=c,this.dots.instanceMatrix.needsUpdate=!0,this.rims.instanceMatrix.needsUpdate=!0,this.dots.instanceColor&&(this.dots.instanceColor.needsUpdate=!0),this.root.position.copy(this.origin)}debugDots(){const e=[];for(let t=0;t<this.dots.count;t++)this.dots.getMatrixAt(t,ps),ps.decompose(ki,ol,ms),e.push({x:ki.x,y:ki.y,z:ki.z,r:ms.x});return e}}const gs=new P,fh=new P,ph=new P,By=40;class zy{constructor(e){this.camera=e}camera;lookAt=new P;desired=new P;portrait=!1;kickOff=new P;kick(e){this.kickOff.add(e)}setAspect(e){this.portrait=e<1}back(e){return(this.portrait?10:12)+e*.16}height(e){return(this.portrait?8:7)+e*.26}indicatorScale(e){const t=n=>Math.hypot(this.back(n),this.height(n));return Math.max(1,t(e)/t(By))}aimPose(e,t,n,s){gs.subVectors(e,t),gs.y=0;const r=gs.length()||1;gs.divideScalar(r);const o=this.back(r),l=this.height(r);n.copy(e).addScaledVector(gs,o),n.y=e.y+l;const u=Math.atan2(l,o),h=Math.atan2(l,o+r),d=(u+h)/2,a=l/Math.tan(d);s.copy(n).addScaledVector(gs,-a),s.y=e.y}snapToAim(e,t){this.kickOff.set(0,0,0),this.aimPose(e,t,this.desired,this.lookAt),this.camera.position.copy(this.desired),this.camera.lookAt(this.lookAt)}updateAim(e,t,n){this.aimPose(e,t,fh,ph);const s=1-Math.exp(-7*n);this.camera.position.lerp(fh,s),this.lookAt.lerp(ph,s),this.camera.lookAt(this.lookAt),this.kickOff.lengthSq()>1e-8&&(this.camera.position.add(this.kickOff),this.kickOff.multiplyScalar(Math.exp(-9*n)))}updateFlight(e,t,n){this.updateAim(e,t,n)}}const al=90;class Hy{root;positions=new Float32Array(al*3);count=0;constructor(e=16777215){const t=new $t;t.setAttribute("position",new Ct(this.positions,3)),t.setDrawRange(0,0),this.root=new na(t,new Xl({color:e,transparent:!0,opacity:.55})),this.root.frustumCulled=!1}clear(){this.count=0,this.root.geometry.setDrawRange(0,0)}push(e){this.count>=al&&(this.positions.copyWithin(0,3),this.count=al-1);const t=this.count*3;this.positions[t]=e.x,this.positions[t+1]=e.y,this.positions[t+2]=e.z,this.count++;const n=this.root.geometry.getAttribute("position");n.needsUpdate=!0,this.root.geometry.setDrawRange(0,this.count)}}const gi=768,_s=new ze,dr=new rn,mh=new rn,ll=new P,So=new P,Gy=new P(0,0,1),gh=new oe,_h=new oe,wo=new oe;class Vy{mesh;pool=[];next=0;mat;fade;tex;style;emitters=new Map;constructor(e){this.style=e,this.tex=new nd().load("./particles.png"),this.tex.colorSpace=Ot,this.tex.wrapS=1001,this.tex.wrapT=1001,this.mat=new yn({map:this.tex,transparent:!0,depthWrite:!1,vertexColors:!0,side:2,toneMapped:!1});const t=new Wn(1,1),n=t.attributes.position.count;t.setAttribute("color",new Ct(new Float32Array(n*3).fill(1),3)),this.fade=new vn(new Float32Array(gi),1),t.setAttribute("aFade",this.fade),this.mat.onBeforeCompile=s=>{s.vertexShader=["attribute float aFade;","varying float vFade;",s.vertexShader].join(`
`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vFade = aFade;`),s.fragmentShader=["varying float vFade;",s.fragmentShader].join(`
`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.a *= vFade;`)},this.mat.customProgramCacheKey=()=>"trail-fade",this.mesh=new qi(t,this.mat,gi),this.mesh.instanceMatrix.setUsage(35048),this.mesh.instanceColor=new vn(new Float32Array(gi*3),3),this.mesh.frustumCulled=!1,this.mesh.renderOrder=12;for(let s=0;s<gi;s++)this.pool.push({life:0,maxLife:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,roll:0,spin:0,size:1});this.apply(e),this.hideAll()}apply(e){this.style=e,this.mat.blending=e.additive?2:1,this.mat.opacity=e.alpha;const t=e.cell%4,n=Math.floor(e.cell/4);this.tex.repeat.set(.25,.5),this.tex.offset.set(t*.25,.5-n*.5),this.mat.needsUpdate=!0}get current(){return this.style}get emitting(){return this.emitters.size}cut(e){if(e===void 0){this.emitters.clear();return}this.emitters.delete(e)}clear(){for(const e of this.pool)e.life=0;this.cut(),this.hideAll()}hideAll(){for(let e=0;e<gi;e++)this.fade.setX(e,0);this.fade.needsUpdate=!0,So.setScalar(0);for(let e=0;e<gi;e++)_s.compose(ll.set(0,-9999,0),dr.identity(),So),this.mesh.setMatrixAt(e,_s);this.mesh.instanceMatrix.needsUpdate=!0}emit(e,t,n,s=0){const r=this.style;let o=this.emitters.get(s);o||(o={last:e.clone(),has:!0,carry:0},this.emitters.set(s,o)),o.carry+=r.rate*n;let l=Math.floor(o.carry);if(o.carry-=l,!(l<=0)){l=Math.min(l,24);for(let u=0;u<l;u++){const h=(u+1)/l,d=this.pool[this.next];this.next=(this.next+1)%gi,d.maxLife=r.life*(1-r.vary*.4+Math.random()*r.vary*.8),d.life=d.maxLife,d.x=o.last.x+(e.x-o.last.x)*h+(Math.random()-.5)*.12,d.y=o.last.y+(e.y-o.last.y)*h+(Math.random()-.5)*.12,d.z=o.last.z+(e.z-o.last.z)*h+(Math.random()-.5)*.12,d.vx=t.x*r.inherit+(Math.random()-.5)*r.spread,d.vy=t.y*r.inherit+(Math.random()-.5)*r.spread,d.vz=t.z*r.inherit+(Math.random()-.5)*r.spread,d.roll=Math.random()*Math.PI*2,d.spin=(Math.random()-.5)*2*r.spin,d.size=1-r.vary*.5+Math.random()*r.vary}o.last.copy(e)}}update(e,t){const n=this.style;gh.setHex(n.from),_h.setHex(n.to);let s=!1;for(let r=0;r<gi;r++){const o=this.pool[r];if(o.life<=0)continue;if(s=!0,o.life-=e,o.life<=0){_s.compose(ll.set(0,-9999,0),dr.identity(),So.setScalar(0)),this.mesh.setMatrixAt(r,_s);continue}o.vx+=n.drift[0]*e,o.vy+=n.drift[1]*e,o.vz+=n.drift[2]*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.roll+=o.spin*e;const l=1-o.life/o.maxLife,u=(n.size[0]+(n.size[1]-n.size[0])*l)*o.size;dr.copy(t.quaternion),mh.setFromAxisAngle(Gy,o.roll),dr.multiply(mh),_s.compose(ll.set(o.x,o.y,o.z),dr,So.setScalar(Math.max(1e-4,u))),this.mesh.setMatrixAt(r,_s),wo.copy(gh).lerp(_h,l),this.mesh.instanceColor.setXYZ(r,wo.r,wo.g,wo.b);const h=Math.min(1,l/.12),d=1-l*l;this.fade.setX(r,h*d)}this.mesh.visible=s,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.fade.needsUpdate=!0}}const nc=[{key:"vapour",name:"Vapour",cell:1,from:16777215,to:13162212,size:[.5,3.6],life:1.7,rate:130,spread:.55,drift:[0,1.2,0],inherit:.06,spin:1.4,vary:.6,additive:!1,alpha:.62},{key:"comet",name:"Comet",cell:0,from:16764794,to:16734738,size:[.55,1.35],life:.95,rate:180,spread:.4,drift:[0,-1.2,0],inherit:.1,spin:0,vary:.4,additive:!0,alpha:.6},{key:"sparks",name:"Sparks",cell:2,from:16773312,to:16727306,size:[1.35,.12],life:.85,rate:150,spread:4.5,drift:[0,-16,0],inherit:.2,spin:4,vary:.8,additive:!0,alpha:1},{key:"stardust",name:"Stardust",cell:3,from:9428223,to:3825616,size:[1.6,.35],life:1.3,rate:120,spread:1.8,drift:[0,-1.2,0],inherit:.05,spin:2.6,vary:.85,additive:!0,alpha:.7},{key:"chalk",name:"Chalk",cell:0,from:16514559,to:14082282,size:[.45,1.15],life:2.4,rate:190,spread:.16,drift:[0,-.2,0],inherit:.02,spin:0,vary:.28,additive:!1,alpha:.55},{key:"plasma",name:"Plasma",cell:6,from:6547652,to:2381512,size:[1.15,2.3],life:1.05,rate:150,spread:.9,drift:[0,.7,0],inherit:.08,spin:5,vary:.55,additive:!0,alpha:.45},{key:"ember",name:"Ember",cell:2,from:16757575,to:9182474,size:[.65,.12],life:1.25,rate:190,spread:.7,drift:[0,-3.4,0],inherit:.05,spin:2.2,vary:.7,additive:!0,alpha:.62},{key:"frost",name:"Frost",cell:3,from:15399167,to:5080765,size:[.55,1.9],life:1.5,rate:150,spread:.5,drift:[0,.5,0],inherit:.04,spin:3.6,vary:.65,additive:!0,alpha:.6},{key:"ink",name:"Ink",cell:1,from:3878755,to:920346,size:[.7,4.4],life:2,rate:105,spread:.4,drift:[0,.35,0],inherit:.05,spin:.9,vary:.6,additive:!1,alpha:.7},{key:"neon",name:"Neon",cell:7,from:16732120,to:2807039,size:[.9,.3],life:.85,rate:200,spread:.3,drift:[0,0,0],inherit:.12,spin:0,vary:.3,additive:!0,alpha:.5},{key:"bloom",name:"Bloom",cell:5,from:16752324,to:14041903,size:[.7,3.4],life:1.8,rate:110,spread:.85,drift:[0,.9,0],inherit:.03,spin:1.1,vary:.75,additive:!1,alpha:.72},{key:"static",name:"Static",cell:4,from:16777215,to:16773800,size:[.7,.06],life:.6,rate:260,spread:1.6,drift:[0,0,0],inherit:.02,spin:8,vary:.85,additive:!0,alpha:.55}],Il=nc[0],ic=[{code:"en",name:"English",native:"English"},{code:"es",name:"Spanish",native:"Español"},{code:"pt",name:"Portuguese",native:"Português"},{code:"fr",name:"French",native:"Français"},{code:"de",name:"German",native:"Deutsch"},{code:"it",name:"Italian",native:"Italiano"},{code:"tr",name:"Turkish",native:"Türkçe"},{code:"pl",name:"Polish",native:"Polski"},{code:"ru",name:"Russian",native:"Русский"},{code:"ja",name:"Japanese",native:"日本語"},{code:"ko",name:"Korean",native:"한국어"},{code:"zh",name:"Chinese",native:"中文"}],sc={"game.title":"Golf Horizons","game.tagline":"One shot. One hole.","menu.play":"Play","menu.play.fresh":"Start your round","menu.shop":"Shop","menu.language":"Language","menu.settings":"Settings","shop.title":"Trails","shop.owned":"Owned","shop.equipped":"Equipped","shop.equip":"Equip","shop.unlockAd":"Watch ad to unlock","shop.unlock":"Unlock","shop.recolour":"Recolour","shop.apply":"Apply colour","shop.applyAd":"Watch an ad to apply","shop.head":"Head","shop.tail":"Tail","shop.reset":"Reset to original","shop.anyColour":"Any colour","settings.title":"Settings","settings.music":"Music","settings.sfx":"Sound effects","settings.reset":"Reset progress","settings.resetConfirm":"Tap again to start over from hole 1","settings.resetDone":"Course reset - back to hole 1","language.title":"Language","language.note":"Menus and labels switch straight away.","pause.resume":"Resume","common.back":"Back","common.close":"Close","common.cancel":"Cancel","ad.playing":"Ad playing","ad.placeholder":"Placeholder - no ad network is connected yet","skip.button":"Skip hole","skip.title":"Skip this hole?","skip.watch":"Watch ad to skip","hud.hole":"Hole","hud.metres":"{n} m","hud.try":"try {n}","hud.bonus":"Bonus shot from the balloon","hud.world":"World {n}","menu.play.where":"World {w} · Hole {n}","season.spring":"Spring","season.summer":"Summer","season.autumn":"Autumn","season.winter":"Winter","time.morning":"Morning","time.noon":"Midday","time.golden":"Golden hour","time.dusk":"Dusk","biome.meadow":"Meadow","biome.desert":"Dunes","biome.shore":"Stony Shore","biome.islands":"Atoll","biome.pine":"Pinewood","trail.vapour":"Vapour","trail.comet":"Comet","trail.sparks":"Sparks","trail.stardust":"Stardust","trail.chalk":"Chalk","trail.plasma":"Plasma","trail.ember":"Ember","trail.frost":"Frost","trail.ink":"Ink","trail.neon":"Neon","trail.bloom":"Bloom","trail.static":"Static","hud.par":"Par {n}","score.holeInOne":"Hole in one!","score.albatross":"Albatross!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Double bogey","score.triple":"Triple bogey","score.over":"+{n}","points.name":"Points","points.plus":"+{n} points","points.short":"You need {n} more points","shop.blurbPoints":"Sink holes to earn points, then spend them here. Trails are yours to keep.","shop.blurbBoth":"Unlock trails with points from your rounds, or watch a short ad. They are yours to keep.","tier.common":"Common","tier.rare":"Rare","tier.epic":"Epic","tier.legendary":"Legendary","skip.bodyPoints":"Spend points to move on to the next hole.","skip.bodyBoth":"Spend points or watch a short ad to move on to the next hole."},Wy={"game.tagline":"Un golpe. Un hoyo.","menu.play":"Jugar","menu.play.fresh":"Empieza tu ronda","menu.shop":"Tienda","menu.language":"Idioma","menu.settings":"Ajustes","shop.title":"Estelas","shop.owned":"Tuya","shop.equipped":"Equipada","shop.equip":"Equipar","shop.unlockAd":"Ver anuncio para desbloquear","shop.unlock":"Desbloquear","shop.recolour":"Cambiar color","shop.apply":"Aplicar color","shop.applyAd":"Ver un anuncio para aplicar","shop.head":"Cabeza","shop.tail":"Cola","shop.reset":"Restaurar original","shop.anyColour":"Cualquier color","settings.title":"Ajustes","settings.music":"Música","settings.sfx":"Efectos de sonido","settings.reset":"Reiniciar progreso","settings.resetConfirm":"Toca otra vez para volver al hoyo 1","settings.resetDone":"Recorrido reiniciado: de vuelta al hoyo 1","language.title":"Idioma","language.note":"Los menús y textos cambian al instante.","pause.resume":"Continuar","common.back":"Atrás","common.close":"Cerrar","common.cancel":"Cancelar","ad.playing":"Reproduciendo anuncio","ad.placeholder":"Marcador de posición: aún no hay red de anuncios conectada","skip.button":"Saltar hoyo","skip.title":"¿Saltar este hoyo?","skip.watch":"Ver anuncio para saltar","hud.hole":"Hoyo","hud.try":"intento {n}","hud.bonus":"Golpe extra desde el globo","hud.world":"Mundo {n}","menu.play.where":"Mundo {w} · Hoyo {n}","season.spring":"Primavera","season.summer":"Verano","season.autumn":"Otoño","season.winter":"Invierno","time.morning":"Mañana","time.noon":"Mediodía","time.golden":"Hora dorada","time.dusk":"Anochecer","biome.meadow":"Pradera","biome.desert":"Dunas","biome.shore":"Costa Rocosa","biome.islands":"Atolón","biome.pine":"Pinar","trail.vapour":"Vapor","trail.comet":"Cometa","trail.sparks":"Chispas","trail.stardust":"Polvo estelar","trail.chalk":"Tiza","trail.plasma":"Plasma","trail.ember":"Brasa","trail.frost":"Escarcha","trail.ink":"Tinta","trail.neon":"Neón","trail.bloom":"Flor","trail.static":"Estática","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"¡Hoyo en uno!","score.albatross":"¡Albatros!","score.eagle":"¡Eagle!","score.birdie":"¡Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Doble bogey","score.triple":"Triple bogey","points.name":"Puntos","points.plus":"+{n} puntos","points.short":"Te faltan {n} puntos","shop.blurbPoints":"Mete hoyos para ganar puntos y gástalos aquí. Las estelas son tuyas para siempre.","shop.blurbBoth":"Desbloquea estelas con los puntos de tus rondas o mirando un anuncio corto. Son tuyas para siempre.","tier.common":"Común","tier.rare":"Rara","tier.epic":"Épica","tier.legendary":"Legendaria","skip.bodyPoints":"Gasta puntos para pasar al siguiente hoyo.","skip.bodyBoth":"Gasta puntos o mira un anuncio corto para pasar al siguiente hoyo."},qy={"game.tagline":"Uma tacada. Um buraco.","menu.play":"Jogar","menu.play.fresh":"Comece sua rodada","menu.shop":"Loja","menu.language":"Idioma","menu.settings":"Configurações","shop.title":"Rastros","shop.owned":"Seu","shop.equipped":"Equipado","shop.equip":"Equipar","shop.unlockAd":"Assistir anúncio para desbloquear","shop.unlock":"Desbloquear","shop.recolour":"Mudar cor","shop.apply":"Aplicar cor","shop.applyAd":"Assistir anúncio para aplicar","shop.head":"Cabeça","shop.tail":"Cauda","shop.reset":"Restaurar original","shop.anyColour":"Qualquer cor","settings.title":"Configurações","settings.music":"Música","settings.sfx":"Efeitos sonoros","settings.reset":"Reiniciar progresso","settings.resetConfirm":"Toque de novo para voltar ao buraco 1","settings.resetDone":"Percurso reiniciado: de volta ao buraco 1","language.title":"Idioma","language.note":"Menus e textos mudam na hora.","pause.resume":"Continuar","common.back":"Voltar","common.close":"Fechar","common.cancel":"Cancelar","ad.playing":"Anúncio em reprodução","ad.placeholder":"Espaço reservado: nenhuma rede de anúncios conectada ainda","skip.button":"Pular buraco","skip.title":"Pular este buraco?","skip.watch":"Assistir anúncio para pular","hud.hole":"Buraco","hud.try":"tentativa {n}","hud.bonus":"Tacada bônus do balão","hud.world":"Mundo {n}","menu.play.where":"Mundo {w} · Buraco {n}","season.spring":"Primavera","season.summer":"Verão","season.autumn":"Outono","season.winter":"Inverno","time.morning":"Manhã","time.noon":"Meio-dia","time.golden":"Hora dourada","time.dusk":"Crepúsculo","biome.meadow":"Prado","biome.desert":"Dunas","biome.shore":"Costa Rochosa","biome.islands":"Atol","biome.pine":"Pinheiral","trail.vapour":"Vapor","trail.comet":"Cometa","trail.sparks":"Faíscas","trail.stardust":"Poeira estelar","trail.chalk":"Giz","trail.plasma":"Plasma","trail.ember":"Brasa","trail.frost":"Geada","trail.ink":"Tinta","trail.neon":"Neon","trail.bloom":"Flor","trail.static":"Estática","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Hole in one!","score.albatross":"Albatroz!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Bogey duplo","score.triple":"Bogey triplo","points.name":"Pontos","points.plus":"+{n} pontos","points.short":"Faltam {n} pontos","shop.blurbPoints":"Acerte buracos para ganhar pontos e gaste-os aqui. Os rastros são seus para sempre.","shop.blurbBoth":"Desbloqueie rastros com os pontos das suas rodadas ou assistindo a um anúncio curto. Eles são seus para sempre.","tier.common":"Comum","tier.rare":"Raro","tier.epic":"Épico","tier.legendary":"Lendário","skip.bodyPoints":"Gaste pontos para ir para o próximo buraco.","skip.bodyBoth":"Gaste pontos ou assista a um anúncio curto para ir para o próximo buraco."},Xy={"game.tagline":"Un coup. Un trou.","menu.play":"Jouer","menu.play.fresh":"Commence ta partie","menu.shop":"Boutique","menu.language":"Langue","menu.settings":"Réglages","shop.title":"Traînées","shop.owned":"Acquise","shop.equipped":"Équipée","shop.equip":"Équiper","shop.unlockAd":"Regarder une pub pour débloquer","shop.unlock":"Débloquer","shop.recolour":"Recolorer","shop.apply":"Appliquer la couleur","shop.applyAd":"Regarder une pub pour appliquer","shop.head":"Tête","shop.tail":"Queue","shop.reset":"Rétablir l'original","shop.anyColour":"N'importe quelle couleur","settings.title":"Réglages","settings.music":"Musique","settings.sfx":"Effets sonores","settings.reset":"Réinitialiser la progression","settings.resetConfirm":"Touche encore pour recommencer au trou 1","settings.resetDone":"Parcours réinitialisé : retour au trou 1","language.title":"Langue","language.note":"Les menus et les textes changent tout de suite.","pause.resume":"Reprendre","common.back":"Retour","common.close":"Fermer","common.cancel":"Annuler","ad.playing":"Pub en cours","ad.placeholder":"Espace réservé : aucune régie publicitaire n'est encore connectée","skip.button":"Passer le trou","skip.title":"Passer ce trou ?","skip.watch":"Regarder une pub pour passer","hud.hole":"Trou","hud.try":"essai {n}","hud.bonus":"Coup bonus depuis la montgolfière","hud.world":"Monde {n}","menu.play.where":"Monde {w} · Trou {n}","season.spring":"Printemps","season.summer":"Été","season.autumn":"Automne","season.winter":"Hiver","time.morning":"Matin","time.noon":"Midi","time.golden":"Heure dorée","time.dusk":"Crépuscule","biome.meadow":"Prairie","biome.desert":"Dunes","biome.shore":"Côte rocheuse","biome.islands":"Atoll","biome.pine":"Pinède","trail.vapour":"Vapeur","trail.comet":"Comète","trail.sparks":"Étincelles","trail.stardust":"Poussière d'étoiles","trail.chalk":"Craie","trail.plasma":"Plasma","trail.ember":"Braise","trail.frost":"Givre","trail.ink":"Encre","trail.neon":"Néon","trail.bloom":"Floraison","trail.static":"Statique","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Trou en un !","score.albatross":"Albatros !","score.eagle":"Eagle !","score.birdie":"Birdie !","score.par":"Par","score.bogey":"Bogey","score.double":"Double bogey","score.triple":"Triple bogey","points.name":"Points","points.plus":"+{n} points","points.short":"Il te manque {n} points","shop.blurbPoints":"Rentre des trous pour gagner des points, puis dépense-les ici. Les traînées sont à toi pour de bon.","shop.blurbBoth":"Débloque des traînées avec les points de tes parties, ou en regardant une courte pub. Elles sont à toi pour de bon.","tier.common":"Commune","tier.rare":"Rare","tier.epic":"Épique","tier.legendary":"Légendaire","skip.bodyPoints":"Dépense des points pour passer au trou suivant.","skip.bodyBoth":"Dépense des points ou regarde une courte pub pour passer au trou suivant."},Yy={"game.tagline":"Ein Schlag. Ein Loch.","menu.play":"Spielen","menu.play.fresh":"Starte deine Runde","menu.shop":"Shop","menu.language":"Sprache","menu.settings":"Einstellungen","shop.title":"Spuren","shop.owned":"Gehört dir","shop.equipped":"Ausgerüstet","shop.equip":"Ausrüsten","shop.unlockAd":"Werbung ansehen und freischalten","shop.unlock":"Freischalten","shop.recolour":"Umfärben","shop.apply":"Farbe übernehmen","shop.applyAd":"Werbung ansehen und übernehmen","shop.head":"Kopf","shop.tail":"Schweif","shop.reset":"Original wiederherstellen","shop.anyColour":"Beliebige Farbe","settings.title":"Einstellungen","settings.music":"Musik","settings.sfx":"Soundeffekte","settings.reset":"Fortschritt zurücksetzen","settings.resetConfirm":"Nochmal tippen, um bei Loch 1 neu zu beginnen","settings.resetDone":"Platz zurückgesetzt – zurück zu Loch 1","language.title":"Sprache","language.note":"Menüs und Beschriftungen wechseln sofort.","pause.resume":"Weiter","common.back":"Zurück","common.close":"Schließen","common.cancel":"Abbrechen","ad.playing":"Werbung läuft","ad.placeholder":"Platzhalter – noch kein Werbenetzwerk verbunden","skip.button":"Loch überspringen","skip.title":"Dieses Loch überspringen?","skip.watch":"Werbung ansehen und überspringen","hud.hole":"Loch","hud.try":"Versuch {n}","hud.bonus":"Bonusschlag vom Ballon","hud.world":"Welt {n}","menu.play.where":"Welt {w} · Loch {n}","season.spring":"Frühling","season.summer":"Sommer","season.autumn":"Herbst","season.winter":"Winter","time.morning":"Morgen","time.noon":"Mittag","time.golden":"Goldene Stunde","time.dusk":"Dämmerung","biome.meadow":"Wiese","biome.desert":"Dünen","biome.shore":"Steinküste","biome.islands":"Atoll","biome.pine":"Kiefernwald","trail.vapour":"Dunst","trail.comet":"Komet","trail.sparks":"Funken","trail.stardust":"Sternenstaub","trail.chalk":"Kreide","trail.plasma":"Plasma","trail.ember":"Glut","trail.frost":"Frost","trail.ink":"Tinte","trail.neon":"Neon","trail.bloom":"Blüte","trail.static":"Rauschen","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Hole-in-One!","score.albatross":"Albatros!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Doppel-Bogey","score.triple":"Triple-Bogey","points.name":"Punkte","points.plus":"+{n} Punkte","points.short":"Dir fehlen noch {n} Punkte","shop.blurbPoints":"Versenke Bälle, um Punkte zu sammeln, und gib sie hier aus. Die Spuren gehören dann dir.","shop.blurbBoth":"Schalte Spuren mit Punkten aus deinen Runden frei oder sieh dir eine kurze Werbung an. Sie gehören dann dir.","tier.common":"Gewöhnlich","tier.rare":"Selten","tier.epic":"Episch","tier.legendary":"Legendär","skip.bodyPoints":"Gib Punkte aus, um zum nächsten Loch zu springen.","skip.bodyBoth":"Gib Punkte aus oder sieh dir kurz Werbung an, um zum nächsten Loch zu springen."},$y={"game.tagline":"Un colpo. Una buca.","menu.play":"Gioca","menu.play.fresh":"Inizia il tuo giro","menu.shop":"Negozio","menu.language":"Lingua","menu.settings":"Impostazioni","shop.title":"Scie","shop.owned":"Tua","shop.equipped":"Equipaggiata","shop.equip":"Equipaggia","shop.unlockAd":"Guarda la pubblicità per sbloccare","shop.unlock":"Sblocca","shop.recolour":"Ricolora","shop.apply":"Applica colore","shop.applyAd":"Guarda la pubblicità per applicare","shop.head":"Testa","shop.tail":"Coda","shop.reset":"Ripristina l'originale","shop.anyColour":"Qualsiasi colore","settings.title":"Impostazioni","settings.music":"Musica","settings.sfx":"Effetti sonori","settings.reset":"Azzera i progressi","settings.resetConfirm":"Tocca di nuovo per ripartire dalla buca 1","settings.resetDone":"Percorso azzerato: di nuovo alla buca 1","language.title":"Lingua","language.note":"Menu e testi cambiano subito.","pause.resume":"Riprendi","common.back":"Indietro","common.close":"Chiudi","common.cancel":"Annulla","ad.playing":"Pubblicità in corso","ad.placeholder":"Segnaposto: nessuna rete pubblicitaria ancora collegata","skip.button":"Salta la buca","skip.title":"Saltare questa buca?","skip.watch":"Guarda la pubblicità per saltare","hud.hole":"Buca","hud.try":"tentativo {n}","hud.bonus":"Colpo bonus dalla mongolfiera","hud.world":"Mondo {n}","menu.play.where":"Mondo {w} · Buca {n}","season.spring":"Primavera","season.summer":"Estate","season.autumn":"Autunno","season.winter":"Inverno","time.morning":"Mattina","time.noon":"Mezzogiorno","time.golden":"Ora d'oro","time.dusk":"Crepuscolo","biome.meadow":"Prato","biome.desert":"Dune","biome.shore":"Costa rocciosa","biome.islands":"Atollo","biome.pine":"Pineta","trail.vapour":"Vapore","trail.comet":"Cometa","trail.sparks":"Scintille","trail.stardust":"Polvere di stelle","trail.chalk":"Gesso","trail.plasma":"Plasma","trail.ember":"Brace","trail.frost":"Brina","trail.ink":"Inchiostro","trail.neon":"Neon","trail.bloom":"Fioritura","trail.static":"Statico","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Buca in uno!","score.albatross":"Albatross!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Doppio bogey","score.triple":"Triplo bogey","points.name":"Punti","points.plus":"+{n} punti","points.short":"Ti mancano {n} punti","shop.blurbPoints":"Imbuca per guadagnare punti, poi spendili qui. Le scie sono tue per sempre.","shop.blurbBoth":"Sblocca le scie con i punti delle tue partite o guardando una breve pubblicità. Sono tue per sempre.","tier.common":"Comune","tier.rare":"Rara","tier.epic":"Epica","tier.legendary":"Leggendaria","skip.bodyPoints":"Spendi punti per passare alla buca successiva.","skip.bodyBoth":"Spendi punti o guarda una breve pubblicità per passare alla buca successiva."},jy={"game.tagline":"Tek vuruş. Tek delik.","menu.play":"Oyna","menu.play.fresh":"Turuna başla","menu.shop":"Mağaza","menu.language":"Dil","menu.settings":"Ayarlar","shop.title":"İzler","shop.owned":"Senin","shop.equipped":"Takılı","shop.equip":"Tak","shop.unlockAd":"Açmak için reklam izle","shop.unlock":"Aç","shop.recolour":"Yeniden renklendir","shop.apply":"Rengi uygula","shop.applyAd":"Uygulamak için reklam izle","shop.head":"Baş","shop.tail":"Kuyruk","shop.reset":"Orijinale dön","shop.anyColour":"Herhangi bir renk","settings.title":"Ayarlar","settings.music":"Müzik","settings.sfx":"Ses efektleri","settings.reset":"İlerlemeyi sıfırla","settings.resetConfirm":"1. delikten yeniden başlamak için tekrar dokun","settings.resetDone":"Parkur sıfırlandı: 1. deliğe dönüldü","language.title":"Dil","language.note":"Menüler ve yazılar hemen değişir.","pause.resume":"Devam et","common.back":"Geri","common.close":"Kapat","common.cancel":"İptal","ad.playing":"Reklam oynatılıyor","ad.placeholder":"Yer tutucu: henüz bağlı bir reklam ağı yok","skip.button":"Deliği geç","skip.title":"Bu delik geçilsin mi?","skip.watch":"Geçmek için reklam izle","hud.hole":"Delik","hud.try":"{n}. deneme","hud.bonus":"Balondan bonus vuruş","hud.world":"{n}. Dünya","menu.play.where":"{w}. Dünya · {n}. delik","season.spring":"İlkbahar","season.summer":"Yaz","season.autumn":"Sonbahar","season.winter":"Kış","time.morning":"Sabah","time.noon":"Öğle","time.golden":"Altın saat","time.dusk":"Alacakaranlık","biome.meadow":"Çayır","biome.desert":"Kum Tepeleri","biome.shore":"Taşlı Kıyı","biome.islands":"Mercan Adası","biome.pine":"Çamlık","trail.vapour":"Buhar","trail.comet":"Kuyruklu Yıldız","trail.sparks":"Kıvılcım","trail.stardust":"Yıldız Tozu","trail.chalk":"Tebeşir","trail.plasma":"Plazma","trail.ember":"Kor","trail.frost":"Kırağı","trail.ink":"Mürekkep","trail.neon":"Neon","trail.bloom":"Çiçek","trail.static":"Parazit","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Tek vuruşta delik!","score.albatross":"Albatros!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Çift bogey","score.triple":"Üçlü bogey","points.name":"Puan","points.plus":"+{n} puan","points.short":"{n} puan daha gerekiyor","shop.blurbPoints":"Delikleri tamamlayarak puan kazan, sonra burada harca. İzler sonsuza dek senin.","shop.blurbBoth":"İzleri turlarından kazandığın puanlarla ya da kısa bir reklam izleyerek aç. Sonsuza dek senin.","tier.common":"Sıradan","tier.rare":"Nadir","tier.epic":"Epik","tier.legendary":"Efsanevi","skip.bodyPoints":"Sonraki deliğe geçmek için puan harca.","skip.bodyBoth":"Sonraki deliğe geçmek için puan harca ya da kısa bir reklam izle."},Ky={"game.tagline":"Jeden strzał. Jeden dołek.","menu.play":"Graj","menu.play.fresh":"Zacznij rundę","menu.shop":"Sklep","menu.language":"Język","menu.settings":"Ustawienia","shop.title":"Smugi","shop.owned":"Twoja","shop.equipped":"Założona","shop.equip":"Załóż","shop.unlockAd":"Obejrzyj reklamę, aby odblokować","shop.unlock":"Odblokuj","shop.recolour":"Zmień kolor","shop.apply":"Zastosuj kolor","shop.applyAd":"Obejrzyj reklamę, aby zastosować","shop.head":"Głowa","shop.tail":"Ogon","shop.reset":"Przywróć oryginał","shop.anyColour":"Dowolny kolor","settings.title":"Ustawienia","settings.music":"Muzyka","settings.sfx":"Efekty dźwiękowe","settings.reset":"Resetuj postęp","settings.resetConfirm":"Stuknij ponownie, aby zacząć od dołka 1","settings.resetDone":"Pole zresetowane – z powrotem do dołka 1","language.title":"Język","language.note":"Menu i napisy zmieniają się od razu.","pause.resume":"Wznów","common.back":"Wstecz","common.close":"Zamknij","common.cancel":"Anuluj","ad.playing":"Trwa reklama","ad.placeholder":"Symbol zastępczy – nie podłączono jeszcze sieci reklamowej","skip.button":"Pomiń dołek","skip.title":"Pominąć ten dołek?","skip.watch":"Obejrzyj reklamę, aby pominąć","hud.hole":"Dołek","hud.try":"próba {n}","hud.bonus":"Dodatkowy strzał z balonu","hud.world":"Świat {n}","menu.play.where":"Świat {w} · Dołek {n}","season.spring":"Wiosna","season.summer":"Lato","season.autumn":"Jesień","season.winter":"Zima","time.morning":"Poranek","time.noon":"Południe","time.golden":"Złota godzina","time.dusk":"Zmierzch","biome.meadow":"Łąka","biome.desert":"Wydmy","biome.shore":"Kamienisty Brzeg","biome.islands":"Atol","biome.pine":"Sosnowy Las","trail.vapour":"Opar","trail.comet":"Kometa","trail.sparks":"Iskry","trail.stardust":"Gwiezdny Pył","trail.chalk":"Kreda","trail.plasma":"Plazma","trail.ember":"Żar","trail.frost":"Szron","trail.ink":"Atrament","trail.neon":"Neon","trail.bloom":"Rozkwit","trail.static":"Szum","hud.par":"Par {n}","score.over":"+{n}","score.holeInOne":"Hole in one!","score.albatross":"Albatros!","score.eagle":"Eagle!","score.birdie":"Birdie!","score.par":"Par","score.bogey":"Bogey","score.double":"Podwójny bogey","score.triple":"Potrójny bogey","points.name":"Punkty","points.plus":"Punkty: +{n}","points.short":"Brakuje punktów: {n}","shop.blurbPoints":"Trafiaj do dołków, by zdobywać punkty, i wydawaj je tutaj. Smugi zostają z tobą na zawsze.","shop.blurbBoth":"Odblokuj smugi za punkty z rozgrywek albo obejrzyj krótką reklamę. Zostają z tobą na zawsze.","tier.common":"Zwykła","tier.rare":"Rzadka","tier.epic":"Epicka","tier.legendary":"Legendarna","skip.bodyPoints":"Wydaj punkty, aby przejść do następnego dołka.","skip.bodyBoth":"Wydaj punkty albo obejrzyj krótką reklamę, aby przejść do następnego dołka."},Zy={"game.tagline":"Один удар. Одна лунка.","menu.play":"Играть","menu.play.fresh":"Начни раунд","menu.shop":"Магазин","menu.language":"Язык","menu.settings":"Настройки","shop.title":"Следы","shop.owned":"Есть","shop.equipped":"Выбран","shop.equip":"Выбрать","shop.unlockAd":"Открыть за рекламу","shop.unlock":"Открыть","shop.recolour":"Перекрасить","shop.apply":"Применить цвет","shop.applyAd":"Применить за рекламу","shop.head":"Голова","shop.tail":"Хвост","shop.reset":"Вернуть исходный","shop.anyColour":"Любой цвет","settings.title":"Настройки","settings.music":"Музыка","settings.sfx":"Звуковые эффекты","settings.reset":"Сбросить прогресс","settings.resetConfirm":"Нажми ещё раз, чтобы начать с лунки 1","settings.resetDone":"Поле сброшено — снова лунка 1","language.title":"Язык","language.note":"Меню и надписи переключаются сразу.","pause.resume":"Продолжить","common.back":"Назад","common.close":"Закрыть","common.cancel":"Отмена","ad.playing":"Идёт реклама","ad.placeholder":"Заглушка — рекламная сеть ещё не подключена","skip.button":"Пропустить лунку","skip.title":"Пропустить эту лунку?","skip.watch":"Смотреть рекламу и пропустить","hud.hole":"Лунка","hud.try":"попытка {n}","hud.bonus":"Бонусный удар с воздушного шара","hud.world":"Мир {n}","menu.play.where":"Мир {w} · Лунка {n}","season.spring":"Весна","season.summer":"Лето","season.autumn":"Осень","season.winter":"Зима","time.morning":"Утро","time.noon":"Полдень","time.golden":"Золотой час","time.dusk":"Сумерки","biome.meadow":"Луг","biome.desert":"Дюны","biome.shore":"Каменистый берег","biome.islands":"Атолл","biome.pine":"Сосновый бор","trail.vapour":"Дымка","trail.comet":"Комета","trail.sparks":"Искры","trail.stardust":"Звёздная пыль","trail.chalk":"Мел","trail.plasma":"Плазма","trail.ember":"Угли","trail.frost":"Иней","trail.ink":"Чернила","trail.neon":"Неон","trail.bloom":"Цветение","trail.static":"Помехи","hud.par":"Пар {n}","score.over":"+{n}","score.holeInOne":"Хоул-ин-ван!","score.albatross":"Альбатрос!","score.eagle":"Игл!","score.birdie":"Бёрди!","score.par":"Пар","score.bogey":"Богги","score.double":"Дабл-богги","score.triple":"Трипл-богги","points.name":"Очки","points.plus":"Очки: +{n}","points.short":"Не хватает очков: {n}","shop.blurbPoints":"Забивай мячи в лунки, чтобы получать очки, и трать их здесь. Следы останутся у тебя навсегда.","shop.blurbBoth":"Открывай следы за очки из своих раундов или за короткую рекламу. Они останутся у тебя навсегда.","tier.common":"Обычный","tier.rare":"Редкий","tier.epic":"Эпический","tier.legendary":"Легендарный","skip.bodyPoints":"Потрать очки, чтобы перейти к следующей лунке.","skip.bodyBoth":"Потрать очки или посмотри короткую рекламу, чтобы перейти к следующей лунке."},Jy={"game.tagline":"一打で、一ホール。","menu.play":"プレイ","menu.play.fresh":"ラウンドを始める","menu.shop":"ショップ","menu.language":"言語","menu.settings":"設定","shop.title":"トレイル","shop.owned":"所持","shop.equipped":"装備中","shop.equip":"装備する","shop.unlockAd":"広告を見て解放","shop.unlock":"解放","shop.recolour":"色を変える","shop.apply":"色を適用","shop.applyAd":"広告を見て適用","shop.head":"先端","shop.tail":"末尾","shop.reset":"元に戻す","shop.anyColour":"好きな色","settings.title":"設定","settings.music":"音楽","settings.sfx":"効果音","settings.reset":"進行状況をリセット","settings.resetConfirm":"もう一度タップでホール1からやり直し","settings.resetDone":"リセットしました — ホール1から","language.title":"言語","language.note":"メニューと表示がすぐに切り替わります。","pause.resume":"再開","common.back":"戻る","common.close":"閉じる","common.cancel":"キャンセル","ad.playing":"広告を再生中","ad.placeholder":"仮表示 — 広告ネットワークはまだ接続されていません","skip.button":"ホールをスキップ","skip.title":"このホールをスキップ？","skip.watch":"広告を見てスキップ","hud.hole":"ホール","hud.try":"{n}回目","hud.bonus":"気球からボーナスショット","hud.world":"ワールド {n}","menu.play.where":"ワールド {w} · ホール {n}","season.spring":"春","season.summer":"夏","season.autumn":"秋","season.winter":"冬","time.morning":"朝","time.noon":"昼","time.golden":"夕方","time.dusk":"夕暮れ","biome.meadow":"草原","biome.desert":"砂丘","biome.shore":"岩の海岸","biome.islands":"環礁","biome.pine":"松林","trail.vapour":"蒸気","trail.comet":"彗星","trail.sparks":"火花","trail.stardust":"星屑","trail.chalk":"チョーク","trail.plasma":"プラズマ","trail.ember":"残り火","trail.frost":"霜","trail.ink":"インク","trail.neon":"ネオン","trail.bloom":"花","trail.static":"ノイズ","hud.par":"パー{n}","score.over":"+{n}","score.holeInOne":"ホールインワン！","score.albatross":"アルバトロス！","score.eagle":"イーグル！","score.birdie":"バーディー！","score.par":"パー","score.bogey":"ボギー","score.double":"ダブルボギー","score.triple":"トリプルボギー","points.name":"ポイント","points.plus":"+{n}ポイント","points.short":"あと{n}ポイント必要です","shop.blurbPoints":"ボールをカップに入れてポイントを集め、ここで使えます。トレイルはずっと使えます。","shop.blurbBoth":"ラウンドで集めたポイントか、短い広告でトレイルを解放できます。ずっと使えます。","tier.common":"コモン","tier.rare":"レア","tier.epic":"エピック","tier.legendary":"レジェンド","skip.bodyPoints":"ポイントを使って次のホールへ進みます。","skip.bodyBoth":"ポイントを使うか、短い広告を見て次のホールへ進みます。"},Qy={"game.tagline":"한 번의 샷. 하나의 홀.","menu.play":"플레이","menu.play.fresh":"라운드 시작","menu.shop":"상점","menu.language":"언어","menu.settings":"설정","shop.title":"트레일","shop.owned":"보유","shop.equipped":"장착됨","shop.equip":"장착","shop.unlockAd":"광고 보고 잠금 해제","shop.unlock":"잠금 해제","shop.recolour":"색 바꾸기","shop.apply":"색 적용","shop.applyAd":"광고 보고 적용","shop.head":"머리","shop.tail":"꼬리","shop.reset":"원래대로","shop.anyColour":"원하는 색","settings.title":"설정","settings.music":"음악","settings.sfx":"효과음","settings.reset":"진행 초기화","settings.resetConfirm":"한 번 더 탭하면 1번 홀부터 다시 시작","settings.resetDone":"초기화됨 — 1번 홀로 돌아갑니다","language.title":"언어","language.note":"메뉴와 표시가 바로 바뀝니다.","pause.resume":"계속하기","common.back":"뒤로","common.close":"닫기","common.cancel":"취소","ad.playing":"광고 재생 중","ad.placeholder":"임시 화면 — 아직 광고 네트워크가 연결되지 않았습니다","skip.button":"홀 건너뛰기","skip.title":"이 홀을 건너뛸까요?","skip.watch":"광고 보고 건너뛰기","hud.hole":"홀","hud.try":"{n}번째 시도","hud.bonus":"열기구에서 보너스 샷","hud.world":"월드 {n}","menu.play.where":"월드 {w} · {n}번 홀","season.spring":"봄","season.summer":"여름","season.autumn":"가을","season.winter":"겨울","time.morning":"아침","time.noon":"한낮","time.golden":"골든 아워","time.dusk":"해질녘","biome.meadow":"초원","biome.desert":"모래언덕","biome.shore":"돌 해안","biome.islands":"환초","biome.pine":"소나무 숲","trail.vapour":"수증기","trail.comet":"혜성","trail.sparks":"불꽃","trail.stardust":"별가루","trail.chalk":"분필","trail.plasma":"플라스마","trail.ember":"잉걸불","trail.frost":"서리","trail.ink":"잉크","trail.neon":"네온","trail.bloom":"꽃","trail.static":"잡음","hud.par":"파 {n}","score.over":"+{n}","score.holeInOne":"홀인원!","score.albatross":"알바트로스!","score.eagle":"이글!","score.birdie":"버디!","score.par":"파","score.bogey":"보기","score.double":"더블 보기","score.triple":"트리플 보기","points.name":"포인트","points.plus":"+{n} 포인트","points.short":"{n}포인트가 더 필요해요","shop.blurbPoints":"홀에 공을 넣어 포인트를 모으고 여기서 사용하세요. 트레일은 계속 사용할 수 있어요.","shop.blurbBoth":"라운드에서 모은 포인트나 짧은 광고로 트레일을 잠금 해제하세요. 계속 사용할 수 있어요.","tier.common":"일반","tier.rare":"희귀","tier.epic":"에픽","tier.legendary":"전설","skip.bodyPoints":"포인트를 써서 다음 홀로 넘어가요.","skip.bodyBoth":"포인트를 쓰거나 짧은 광고를 보고 다음 홀로 넘어가요."},eM={"game.tagline":"一杆，一洞。","menu.play":"开始","menu.play.fresh":"开始你的一轮","menu.shop":"商店","menu.language":"语言","menu.settings":"设置","shop.title":"拖尾","shop.owned":"已拥有","shop.equipped":"已装备","shop.equip":"装备","shop.unlockAd":"看广告解锁","shop.unlock":"解锁","shop.recolour":"换色","shop.apply":"应用颜色","shop.applyAd":"看广告应用","shop.head":"头部","shop.tail":"尾部","shop.reset":"恢复原样","shop.anyColour":"任意颜色","settings.title":"设置","settings.music":"音乐","settings.sfx":"音效","settings.reset":"重置进度","settings.resetConfirm":"再点一次，从第 1 洞重新开始","settings.resetDone":"已重置 — 回到第 1 洞","language.title":"语言","language.note":"菜单和文字会立即切换。","pause.resume":"继续","common.back":"返回","common.close":"关闭","common.cancel":"取消","ad.playing":"广告播放中","ad.placeholder":"占位画面 — 尚未接入广告网络","skip.button":"跳过此洞","skip.title":"跳过这一洞？","skip.watch":"看广告跳过","hud.hole":"球洞","hud.try":"第 {n} 次","hud.bonus":"从热气球获得额外一杆","hud.world":"世界 {n}","menu.play.where":"世界 {w} · 第 {n} 洞","season.spring":"春","season.summer":"夏","season.autumn":"秋","season.winter":"冬","time.morning":"清晨","time.noon":"正午","time.golden":"黄金时刻","time.dusk":"黄昏","biome.meadow":"草地","biome.desert":"沙丘","biome.shore":"石滩","biome.islands":"环礁","biome.pine":"松林","trail.vapour":"蒸汽","trail.comet":"彗星","trail.sparks":"火花","trail.stardust":"星尘","trail.chalk":"粉笔","trail.plasma":"等离子","trail.ember":"余烬","trail.frost":"霜","trail.ink":"墨","trail.neon":"霓虹","trail.bloom":"绽放","trail.static":"静电","hud.par":"标准杆 {n}","score.over":"+{n}","score.holeInOne":"一杆进洞！","score.albatross":"信天翁球！","score.eagle":"老鹰球！","score.birdie":"小鸟球！","score.par":"标准杆","score.bogey":"柏忌","score.double":"双柏忌","score.triple":"三柏忌","points.name":"积分","points.plus":"+{n} 积分","points.short":"还差 {n} 积分","shop.blurbPoints":"进洞赚取积分，然后在这里使用。拖尾永久拥有。","shop.blurbBoth":"用每轮赚到的积分或观看一段简短广告解锁拖尾，永久拥有。","tier.common":"普通","tier.rare":"稀有","tier.epic":"史诗","tier.legendary":"传说","skip.bodyPoints":"花费积分，前往下一洞。","skip.bodyBoth":"花费积分或观看一段简短广告，前往下一洞。"},tM={en:sc,es:Wy,pt:qy,fr:Xy,de:Yy,it:$y,tr:jy,pl:Ky,ru:Zy,ja:Jy,ko:Qy,zh:eM},Ad="longshot.lang";function nM(){try{return localStorage.getItem(Ad)}catch{return null}}function iM(){for(const i of navigator.languages??[navigator.language]){const e=String(i).slice(0,2).toLowerCase();if(ic.some(t=>t.code===e))return e}return null}let Ur=nM()??iM()??"en";document.documentElement.lang=Ur;const Dl=new Set;function ve(i,e){let t=tM[Ur]?.[i]??sc[i]??String(i);if(e)for(const[n,s]of Object.entries(e))t=t.split(`{${n}}`).join(String(s));return t}function Cs(i,e){return i in sc?ve(i):e}function Ln(i){try{return new Intl.NumberFormat(Ur).format(Math.round(i))}catch{return String(Math.round(i))}}function sM(){return Ur}function rM(i){if(ic.some(e=>e.code===i)){Ur=i;try{localStorage.setItem(Ad,i)}catch{}document.documentElement.lang=i;for(const e of Dl)e()}}function oM(i){return Dl.add(i),()=>Dl.delete(i)}const Yi={adsEnabled:ud.ads,holesPerInterstitial:3,placeholderSeconds:2.5},jo={start:()=>{},end:()=>{}};function Rd(i){return Cd(()=>Pd(i),!1).then(e=>(e&&(Oo=0,Ko=!1),e))}let Oo=0,Ko=!1;function aM(){Yi.adsEnabled&&(Oo++,!(Oo<Yi.holesPerInterstitial)&&(Oo=0,Ko=!0))}function lM(){const i=Ko&&Yi.adsEnabled;return Ko=!1,i}function cM(i){return Yi.adsEnabled?Cd(()=>Pd(i).then(()=>{}),void 0):Promise.resolve()}const uM=9e4;function Cd(i,e){jo.start();let t=!1;const n=o=>(t||(t=!0,jo.end()),o),s=i().then(n,()=>n(e)),r=new Promise(o=>setTimeout(()=>o(n(e)),uM));return Promise.race([s,r])}function Pd(i){return new Promise(e=>{const t=h=>{h.stopImmediatePropagation(),h.preventDefault()};addEventListener("keydown",t,!0);const n=document.createElement("div");n.style.cssText=["position:fixed","inset:0","z-index:100","display:grid","place-items:center","background:rgba(8,12,18,.92)","color:#f2e7d0","font:700 18px/1.4 system-ui,sans-serif","text-align:center","padding:24px","touch-action:none"].join(";");const s=document.createElement("div"),r=document.createElement("div");r.style.cssText="font-size:44px;font-weight:900;margin:10px 0";const o=document.createElement("div");o.style.cssText="opacity:.55;font-size:13px;font-weight:600",o.textContent=`${ve("ad.placeholder")} · ${i}`,s.append(document.createTextNode(ve("ad.playing")),r,o),n.append(s),document.body.append(n);let l=Math.max(0,Yi.placeholderSeconds);const u=()=>{if(r.textContent=String(Math.ceil(l)),l<=0){n.remove(),removeEventListener("keydown",t,!0),e(!0);return}l-=.25,setTimeout(u,250)};u()})}const hM=[{key:"classic",name:"Classic",color:16645629,stripe:16734797,owned:!0},{key:"gold",name:"Gold",color:16763199,stripe:16773304,emissive:6965760,owned:!1},{key:"ember",name:"Ember",color:16738877,stripe:16765066,emissive:9054720,owned:!1},{key:"void",name:"Void",color:2761536,stripe:10320895,emissive:2759258,owned:!1}];let dM=hM[0];function fM(){return dM}const qt={cream:"#efe2c6",creamLit:"#f8efd9",creamDim:"#dccfb0",wood:"#8b6239",woodDark:"#6b482a",woodLight:"#a9793f",ink:"#2f2417",inkSoft:"#5f4c34",green:"#7fae44",greenDeep:"#5f8a39",clay:"#a9543a",clayLit:"#c66a48",flag:"#ffd23f"};let xh=!1;function pM(){if(xh)return;xh=!0;const i=`
  :root {
    --cream: ${qt.cream}; --cream-lit: ${qt.creamLit}; --cream-dim: ${qt.creamDim};
    --wood: ${qt.wood}; --wood-dark: ${qt.woodDark}; --wood-light: ${qt.woodLight};
    --ink: ${qt.ink}; --ink-soft: ${qt.inkSoft};
    --green: ${qt.green}; --green-deep: ${qt.greenDeep};
    --clay: ${qt.clay}; --clay-lit: ${qt.clayLit};
    --flag: ${qt.flag};
    --pad: clamp(12px, 3.2vmin, 22px);
    --round: 14px;
    --tap: 48px;
  }

  .ui-root {
    position: fixed; inset: 0; z-index: 40; display: none;
    /* Safe areas matter on a phone with a notch, and this is a portrait-first
       game - the main menu is the first thing anyone sees. */
    padding: max(env(safe-area-inset-top), 10px) max(env(safe-area-inset-right), 10px)
             max(env(safe-area-inset-bottom), 10px) max(env(safe-area-inset-left), 10px);
    font-family: ui-rounded, "Segoe UI", system-ui, -apple-system, sans-serif;
    color: var(--ink);
    -webkit-tap-highlight-color: transparent;
  }
  .ui-root.on { display: flex; }
  /* While a menu is up the game's own chrome steps aside - the HUD and the
     corner buttons belong to play, not to the menus. */
  /* !important because .game-buttons positions itself with an inline style, and
     an inline display would otherwise win over this rule. */
  body.menus-open #hud, body.menus-open .game-buttons { display: none !important; }
  .ui-root .scrim {
    position: absolute; inset: 0;
    /* Blurred rather than merely darkened. The course behind is detailed enough
       to compete with the buttons for attention; throwing it out of focus keeps
       it as a backdrop and gives the boards something soft to sit on. */
    backdrop-filter: blur(7px) saturate(1.06) brightness(.92);
    -webkit-backdrop-filter: blur(7px) saturate(1.06) brightness(.92);
    background:
      radial-gradient(120% 80% at 50% 8%, #0b1a2400 0%, #0b1a2433 55%, #0b1a2477 100%),
      linear-gradient(180deg, #10202c22, #0b1a2455);
  }
  /* Scrolls when it has to. An auto margin centred the column but also trapped
     any overflow: in landscape the main menu is ~421px of content in a ~370px
     box, and Language and Settings were simply unreachable - clipped off the
     bottom with no way to scroll to them. */
  .ui-root.on { align-items: center; justify-content: center; }
  .ui-col { position: relative; display: flex; flex-direction: column;
    align-items: center; gap: var(--pad); width: min(560px, 100%);
    max-height: 100%; overflow-y: auto; overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch; padding: 2px; }

  /* ---------------------------------------------------------------- board */
  .board {
    position: relative; width: 100%;
    background: linear-gradient(180deg, var(--cream-lit), var(--cream));
    border: 3px solid var(--wood-dark);
    border-radius: var(--round);
    box-shadow: 0 10px 0 #00000022, 0 18px 34px #0b1a2455, inset 0 2px 0 #ffffffaa;
    padding: var(--pad);
    display: flex; flex-direction: column; gap: 10px;
    min-height: 0;
  }
  .board > header {
    display: flex; align-items: center; gap: 10px;
    margin: calc(var(--pad) * -1) calc(var(--pad) * -1) 4px;
    padding: 12px var(--pad);
    background: linear-gradient(180deg, var(--wood-light), var(--wood));
    border-radius: 10px 10px 0 0;
    border-bottom: 3px solid var(--wood-dark);
    color: #fff6e2; text-shadow: 0 2px 0 #00000055;
    font-weight: 800; letter-spacing: .02em; font-size: clamp(15px, 2.4vmin, 19px);
  }
  .board > header .spacer { flex: 1; }
  /* The title takes the free space, so a close button lands at the far right.
     Without it the header's title sat at its natural width and the X came
     straight after it, halfway across the bar. */
  .board > header > .grow { flex: 1; min-width: 0; }

  /* ------------------------------------------------------------------ hud
     The in-play readout, drawn as a plate from the same kit as the menus:
     a timber tab carrying the hole number, a cream label beside it. */
  .hud-card { display: inline-flex; align-items: stretch; overflow: hidden;
    font-family: ui-rounded, "Segoe UI", system-ui, -apple-system, sans-serif;
    background: linear-gradient(180deg, var(--cream-lit), var(--cream));
    border: 3px solid var(--wood-dark); border-radius: 12px;
    box-shadow: 0 4px 0 var(--wood-dark), 0 8px 16px #0b1a2440; color: var(--ink); }
  .hud-hole { display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 3px 12px 4px; min-width: 54px;
    background: linear-gradient(180deg, var(--wood-light), var(--wood));
    border-right: 3px solid var(--wood-dark); color: #fff6e2; text-shadow: 0 2px 0 #00000055; }
  .hud-hole .k { font-size: 10px; font-weight: 800; letter-spacing: .16em; opacity: .9; text-transform: uppercase; }
  .hud-hole .n { font-size: 24px; font-weight: 900; line-height: 1; font-variant-numeric: tabular-nums; }
  .hud-info { display: flex; flex-direction: column; justify-content: center; padding: 4px 12px 5px; gap: 1px;
    text-align: left; min-width: 0; overflow-wrap: anywhere; }
  .hud-info .name { font-size: 15px; font-weight: 800; line-height: 1.15; }
  .hud-info .meta { font-size: 12px; font-weight: 700; color: var(--ink-soft); font-variant-numeric: tabular-nums; }
  .hud-info .meta .try { color: var(--clay); }
  .hud-info .seg { white-space: nowrap; }
  /* Three corner buttons in a row leave a narrow phone's HUD card too little
     room: at 360-375px place names split mid-word. There the skip button
     drops under the cog, and the card gets the two-button width back. */
  @media (max-width: 383px) { .game-buttons { flex-wrap: wrap; width: 104px; } }
  .hud-bonus { margin-top: 6px; display: inline-block; padding: 3px 10px; border-radius: 999px;
    background: var(--green); border: 2px solid #3f6b26; color: #12250c; font-weight: 800; font-size: 12px; }

  /* The title card a new world scrolls in under: a timber sign with the
     world number, and the place, season and hour on a cream strip. Never
     takes input - the player can line up the first shot while it fades. */
  /* Spans the screen and centres its children: a box pinned at left:50% only
     gets half the width to shrink into, which wrapped the strip in two. */
  .world-card { position: fixed; left: 16px; right: 16px; top: max(calc(env(safe-area-inset-top) + 72px), 16vh);
    z-index: 30; pointer-events: none; display: flex; flex-direction: column; align-items: center;
    font-family: ui-rounded, "Segoe UI", system-ui, -apple-system, sans-serif;
    animation: world-card 3.2s ease-out both; }
  /* visibility, not display: display:none restarts a CSS animation, so closing
     a menu replayed the whole card. Hidden, it keeps running out and ends. */
  .menus-open .world-card { visibility: hidden; }
  .world-card .sign { padding: 8px 26px 10px; border-radius: 14px;
    background: linear-gradient(180deg, var(--wood-light), var(--wood));
    border: 3px solid var(--wood-dark); box-shadow: 0 5px 0 var(--wood-dark), 0 12px 22px #0b1a2450;
    color: #fff6e2; text-shadow: 0 3px 0 #00000055; font-size: 34px; font-weight: 900; line-height: 1.05;
    white-space: nowrap; }
  .world-card .strip { margin-top: -4px; padding: 7px 16px 6px; border-radius: 0 0 12px 12px; max-width: 100%;
    background: linear-gradient(180deg, var(--cream-lit), var(--cream));
    border: 3px solid var(--wood-dark); border-top: 0; color: var(--ink-soft);
    font-size: 14px; font-weight: 800; text-align: center; }
  .world-card .strip b { color: var(--ink); }
  @keyframes world-card {
    0% { opacity: 0; transform: translateY(-14px) scale(.92); }
    12% { opacity: 1; transform: translateY(0) scale(1.03); }
    18% { transform: scale(1); }
    78% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: translateY(-8px) scale(.98); }
  }

  /* --------------------------------------------------------------- button */
  .btn {
    appearance: none; border: 0; cursor: pointer; font: inherit; font-weight: 800;
    min-height: var(--tap); padding: 12px 20px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    background: linear-gradient(180deg, var(--cream-lit), var(--cream-dim));
    color: var(--ink);
    border: 3px solid var(--wood-dark);
    /* The lift is a solid shadow rather than a blur - it reads as a physical
       plate, which is what the reference sheet's buttons do. */
    box-shadow: 0 5px 0 var(--wood-dark), 0 8px 14px #0b1a2433;
    transform: translateY(0); transition: transform .06s, box-shadow .06s, filter .12s;
    font-size: clamp(15px, 2.3vmin, 18px);
    width: 100%;
  }
  .btn:hover { filter: brightness(1.04); }
  .btn:active { transform: translateY(4px); box-shadow: 0 1px 0 var(--wood-dark); }
  .btn:focus-visible { outline: 3px solid var(--flag); outline-offset: 3px; }
  .btn.primary {
    background: linear-gradient(180deg, #9ecb5c, var(--green));
    color: #12250c; border-color: #3f6b26;
    box-shadow: 0 5px 0 #3f6b26, 0 8px 18px #2c4a1a55;
  }
  .btn.buy {
    background: linear-gradient(180deg, var(--clay-lit), var(--clay));
    color: #fff3ea; border-color: #6f3122;
    box-shadow: 0 5px 0 #6f3122, 0 8px 18px #6f312255;
  }
  .btn.ghost { background: #00000010; border-color: #00000030; box-shadow: none; color: var(--ink-soft); }
  .btn[disabled] { filter: grayscale(.6) brightness(.94); cursor: not-allowed; }
  .btn .sub { font-weight: 600; opacity: .72; font-size: .82em; }

  /* Square icon button, for the header and the in-game corner. */
  .icon-btn {
    width: var(--tap); height: var(--tap); min-height: 0; padding: 0; border-radius: 12px;
    background: linear-gradient(180deg, var(--wood-light), var(--wood));
    border: 3px solid var(--wood-dark); box-shadow: 0 4px 0 var(--wood-dark);
    display: grid; place-items: center; cursor: pointer; color: #fff6e2;
  }
  .icon-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 var(--wood-dark); }
  .icon-btn[disabled] { filter: grayscale(.6) brightness(.9); opacity: .55; cursor: not-allowed; }
  .icon-btn[disabled]:active { transform: none; box-shadow: 0 4px 0 var(--wood-dark); }
  /* [hidden] loses to display:grid above without this. */
  .icon-btn[hidden] { display: none; }

  /* ---------------------------------------------------------------- points */
  /* A price or a balance: the flag's yellow, the one colour that means
     "points" anywhere it appears. Numbers never break. */
  .pts { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px 2px 6px;
    border-radius: 999px; background: var(--flag); color: #1b1206; border: 2px solid #b8901a;
    font-weight: 900; font-size: .78em; line-height: 1.2; white-space: nowrap;
    font-variant-numeric: tabular-nums; }
  .pts svg { width: 1.05em; height: 1.05em; flex: 0 0 auto; }
  .btn .pts { margin-left: 4px; font-size: .8em; }
  .btn .pts svg { width: 1.05em; height: 1.05em; }
  header .pts { font-size: .62em; }
  /* How exotic a trail is: one quiet chip, coloured by tier. */
  .tier { display: inline-block; padding: 1px 8px; border-radius: 999px; font-size: .62em; font-weight: 900;
    letter-spacing: .04em; text-transform: uppercase; color: #fff; white-space: nowrap; vertical-align: middle; }
  .tier.common { background: #7d8a96; }
  .tier.rare { background: #3d7fd1; }
  .tier.epic { background: #8a52c9; }
  .tier.legendary { background: linear-gradient(90deg, #e08a1e, #d24a2a); }

  /* The hole-out score: the world card's sign and strip, lower down so the
     two never meet when a hole-out leads into a new world. Gold for under
     par, timber for par, faded timber over it. */
  .score-card { position: fixed; left: 16px; right: 16px; top: 38vh; z-index: 30; pointer-events: none;
    display: flex; flex-direction: column; align-items: center;
    font-family: ui-rounded, "Segoe UI", system-ui, -apple-system, sans-serif;
    animation: score-card 2.3s ease-out both; }
  .menus-open .score-card { visibility: hidden; }
  .score-card .sign { padding: 7px 24px 9px; border-radius: 14px;
    background: linear-gradient(180deg, var(--wood-light), var(--wood));
    border: 3px solid var(--wood-dark); box-shadow: 0 5px 0 var(--wood-dark), 0 12px 22px #0b1a2450;
    color: #fff6e2; text-shadow: 0 3px 0 #00000055; font-size: 30px; font-weight: 900; line-height: 1.05;
    white-space: nowrap; }
  .score-card.under .sign { background: linear-gradient(180deg, #ffe17a, #e9b21c); border-color: #9a6e0c;
    box-shadow: 0 5px 0 #9a6e0c, 0 12px 22px #0b1a2450; color: #3a2604; text-shadow: 0 2px 0 #fff3b855; }
  .score-card.over .sign { filter: saturate(.55) brightness(.95); font-size: 26px; }
  .score-card .strip { margin-top: -4px; padding: 6px 14px 5px; border-radius: 0 0 12px 12px;
    background: linear-gradient(180deg, var(--cream-lit), var(--cream));
    border: 3px solid var(--wood-dark); border-top: 0; color: var(--ink);
    font-size: 15px; font-weight: 900; display: flex; gap: 8px; align-items: center; white-space: nowrap; }
  @keyframes score-card {
    0% { opacity: 0; transform: translateY(10px) scale(.85); }
    10% { opacity: 1; transform: translateY(0) scale(1.06); }
    16% { transform: scale(1); }
    80% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: translateY(-8px) scale(.98); }
  }
  /* A corner button arriving mid-hole (the skip, in builds that hold it back
     for the first tries): a quick pop, so it is noticed without a word. */
  .icon-btn.pop-in { animation: pop-in .42s cubic-bezier(.3, 1.6, .5, 1) backwards; }
  @keyframes pop-in { from { transform: scale(.3); opacity: 0; } }
  /* Applies to EVERY icon, not just the ones in icon buttons. Scoped to
     .icon-btn only, icons inside text buttons fell back to a solid black fill
     and rendered as blobs. */
  .ui-root svg, .icon-btn svg { fill: none; stroke: currentColor;
    stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .icon-btn svg { width: 24px; height: 24px; }
  .btn svg { width: 22px; height: 22px; flex: 0 0 auto; }
  /* The play triangle is the one solid icon; it is a plate marking, not a line. */
  .btn svg path[fill] { stroke: none; }

  /* ----------------------------------------------------------------- misc */
  .stack { display: flex; flex-direction: column; gap: 10px; width: 100%; }
  .scroller { overflow-y: auto; overscroll-behavior: contain; -webkit-overflow-scrolling: touch;
    min-height: 0; padding-right: 4px; }
  .grid { display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); }
  .muted { color: var(--ink-soft); font-size: .88em; }
  .row { display: flex; align-items: center; gap: 10px; width: 100%; }
  /* Applies inside buttons too, not only rows - a label meant to push its
     trailing mark to the far edge sat right next to it otherwise. */
  .row > .grow, .btn > .grow { flex: 1; min-width: 0; }

  .ui-title {
    text-align: center; line-height: .92; margin: 0;
    font-size: clamp(44px, 12vmin, 96px); font-weight: 900; letter-spacing: -.02em;
    color: var(--cream-lit);
    /* Stacked shadows give the carved-sign depth the reference sheet gets from
       its sprite border, without needing one. */
    text-shadow: 0 3px 0 var(--wood), 0 6px 0 var(--wood-dark), 0 14px 28px #0b1a2477;
    /* The line box is tighter than the letters: the g's descender hangs ~0.2em
       below it, and its 6px carved shadow further still, straight into the
       tagline. Measured 7.5px of overlap at 78px; this clears it at every size. */
    margin-bottom: .2em;
  }
  .ui-sub { text-align: center; color: #f4ecdd; text-shadow: 0 2px 6px #0b1a2499;
    font-weight: 700; letter-spacing: .16em; text-transform: uppercase; font-size: clamp(11px, 1.8vmin, 13px); }

  /* The shop preview's corner tool: sits on the stage's top-right corner,
     lit green while the recolour picker is open. */
  .stage-tool { position: absolute; top: 8px; right: 8px; z-index: 2; width: 42px; height: 42px; }
  .stage-tool.on { background: linear-gradient(180deg, #9ecb5c, var(--green)); border-color: #3f6b26;
    box-shadow: 0 4px 0 #3f6b26; color: #12250c; }

  /* The recolour picker: a label, then the round swatches, per end of the trail.
     Each chip is a 44px tap target with the disc drawn inside it - the discs
     were 28px targets 7px apart, which a thumb hits two of at once. */
  .swatch-row { display: flex; flex-direction: column; gap: 2px; padding: 6px 6px 4px;
    background: #00000010; border: 2px solid #00000018; border-radius: 12px; }
  .swatch-label { font-weight: 800; font-size: .86em; color: var(--ink-soft); padding-left: 6px; }
  .swatches { display: flex; flex-wrap: wrap; }
  .swatch { position: relative; flex: 0 0 auto; width: 44px; height: 44px; padding: 0; cursor: pointer;
    border: 0; background: transparent; }
  .swatch::before { content: ""; position: absolute; inset: 7px; border-radius: 50%; background: var(--c);
    border: 3px solid var(--cream-lit); box-shadow: 0 0 0 2px var(--wood-dark), 0 3px 0 2px #00000030;
    transition: transform .1s; }
  .swatch.on::before { transform: scale(1.15); box-shadow: 0 0 0 3px var(--flag), 0 0 0 5px var(--wood-dark); }
  .swatch.custom::before {
    background: conic-gradient(#ff5a4d, #ffd23f, #8fe04a, #3fd2ff, #5b8cff, #b07cff, #ff6fb5, #ff5a4d); }
  /* The native wheel, invisible but filling the chip, so a tap opens it. */
  .swatch.custom input { position: absolute; inset: 0; width: 100%; height: 100%;
    opacity: 0; cursor: pointer; border: 0; padding: 0; }

  /* Modal, used by the shop's enlarged preview. Its own scroll area, centred
     with auto margins: place-items:center overflowed UPWARD when the card
     was taller than a landscape phone, clipping the title and close button
     out of reach. Auto margins collapse to zero instead, and it scrolls. */
  .modal-wrap { position: fixed; inset: 0; z-index: 1; display: grid; overflow-y: auto;
    overscroll-behavior: contain; touch-action: pan-y; background: #0b1a2499;
    padding: max(env(safe-area-inset-top), 16px) max(env(safe-area-inset-right), 16px)
             max(env(safe-area-inset-bottom), 16px) max(env(safe-area-inset-left), 16px); }
  .modal-wrap > .board { margin: auto; }

  @media (prefers-reduced-motion: reduce) {
    .btn { transition: none; }
    .icon-btn.pop-in { animation-name: fade-in; }
    .score-card { animation-name: score-card-still; }
    @keyframes score-card-still { 0%, 100% { opacity: 0; } 8%, 80% { opacity: 1; } }
    @keyframes fade-in { from { opacity: 0; } }
    .world-card { animation-name: world-card-still; }
    @keyframes world-card-still { 0%, 100% { opacity: 0; } 8%, 85% { opacity: 1; } }
  }
  `,e=document.createElement("style");e.id="ui-theme",e.textContent=i,document.head.appendChild(e)}function ce(i,e={},...t){const n=document.createElement(i);for(const[s,r]of Object.entries(e))r!=null&&(s==="class"?n.className=String(r):s==="html"?n.innerHTML=String(r):s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):s==="style"&&typeof r=="object"?Object.assign(n.style,r):n.setAttribute(s,String(r)));for(const s of t)s!=null&&n.append(typeof s=="string"?document.createTextNode(s):s);return n}const mM={cart:'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h3l2.4 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.55L21.5 7H6"/>',cog:'<circle cx="12" cy="12" r="3.1"/><path d="M19.4 14.4a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.56V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.49 1.4z"/>',back:'<path d="M15 5l-7 7 7 7"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',play:'<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18"/>',flag:'<path d="M6 21V4M6 4h11l-2 3.5L17 11H6"/>',trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0zM4 5h3v2a3 3 0 0 1-3-3zM20 5h-3v2a3 3 0 0 0 3-3zM10 18h4M9 21h6M12 14v4"/>',dropper:'<path d="M14.5 3.5a2.1 2.1 0 0 1 3 3L9 15l-3 1 1-3z"/><path d="M12 6l6 6"/>',lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',check:'<path d="M4.5 12.5l5 5 10-11"/>',note:'<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.6"/><circle cx="17.5" cy="16" r="2.6"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.6"/>',skip:'<path d="M5.5 5.5l9 6.5-9 6.5z"/><path d="M18.5 5.5v13"/>',star:'<path d="M12 2.8l2.75 5.6 6.15.9-4.45 4.33 1.05 6.12L12 16.87l-5.5 2.88 1.05-6.12L3.1 9.3l6.15-.9z" fill="currentColor" stroke="none"/>'};function Qt(i,e=24){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("width",String(e)),t.setAttribute("height",String(e)),t.innerHTML=mM[i]??"",t}function Ps(i,e={}){const t=ce("button",{class:`btn ${e.kind??""}`.trim(),type:"button"});return e.icon&&t.append(Qt(e.icon,22)),t.append(ce("span",{},i)),e.sub&&t.append(ce("span",{class:"sub"},e.sub)),e.onClick&&t.addEventListener("click",e.onClick),t}function zs(i){const e=ce("span",{class:"pts"});return e.append(Qt("star",12),ce("span",{},i)),e}function cl(i,e,t){const n=ce("button",{class:"icon-btn",type:"button","aria-label":e,title:e});return n.append(Qt(i)),n.addEventListener("click",t),n}function gM(i,...e){const t=ce("div",{class:"board"});return t.append(...e.filter(Boolean)),t}class _M{root;body;builders=new Map;stack=[];onClose=null;constructor(){pM(),this.body=ce("div",{class:"ui-col"}),this.root=ce("div",{class:"ui-root"},ce("div",{class:"scrim"}),this.body),document.body.appendChild(this.root),addEventListener("keydown",e=>{e.key!=="Escape"||!this.isOpen||(e.preventDefault(),this.back())})}register(e,t){return this.builders.set(e,t),this}get isOpen(){return this.stack.length>0}get top(){return this.stack[this.stack.length-1]??null}reset(e){this.stack=[],this.open(e)}open(e){this.stack.push(e),this.render()}back(){this.stack.length===1&&this.top==="main"||(this.stack.pop(),this.stack.length===0?this.close():this.render())}close(){this.stack=[],this.root.classList.remove("on"),document.body.classList.remove("menus-open"),this.onClose?.()}refresh(){this.isOpen&&this.render()}render(){const e=this.top;if(!e)return;const t=this.builders.get(e);t&&(this.body.replaceChildren(t(this)),this.root.classList.add("on"),document.body.classList.add("menus-open"),this.body.querySelector(".scroller")?.scrollTo({top:0}))}}const Sr=Math.PI/180,zi={intro:4,length:85,ease:1.35,relief:.08,strainAt:6,maxRelief:.2},xs={introMin:35,introMax:45,min:35,startMax:70,max:100,fullBy:36},$i=9,xM=[-.14,-.08,-.04,0,.02,.04,.06,.08,.15];function Ld(i){const e=Math.min(1,Math.max(0,i-zi.intro)/zi.length);return Fr(e**zi.ease*(1+xM[i%$i]))}function Id(i,e,t){let n=Math.imul(i|0,2654435761)^Math.imul((e|0)+2135587861,2246822519);return n^=Math.imul((t|0)+374761393,3266489917),n=Math.imul(n^n>>>16,2146121005),n=Math.imul(n^n>>>15,2221713035),n^=n>>>16,(n>>>0)/4294967296}const Fr=i=>Math.max(0,Math.min(1,i)),To=(i,e,t)=>i+(e-i)*Fr(t),vM=.845;function Dd(i){const e=Fr(ct.landingCarry);return i-(2-e)*i*i+(1-e)*i*i*i}function Nd(i,e){return Math.tan(ct.elevationDeg*Sr)*e*i*(1-i)}const Eo={default:{model:0,r:.221},oak:{model:1,r:.302},detailed:{model:2,r:.318},cone:{model:3,r:.185}},vh=.85,yh={desert:12618328,shore:9343371,islands:7104610};function Nl(i,e,t,n,s,r,o=1){if(i==="desert"||i==="islands"||i==="shore"&&s<.6){const d=(1.2+s*.6)*o,a=i==="islands"?El:0,c=n+2.4-a,f=yh[i]??yh.shore;return{spec:{type:"spire",pos:[t,a,e],params:{height:c,radius:d,color:f}},reach:d*.8+en,K:r}}const l=i==="pine"||i==="shore"?Eo.cone:s<.45?Eo.oak:s<.75?Eo.default:Eo.detailed,u=Math.max(4,(n+1)/(.95+vh*l.r))*(1+s*.12)*o,h=vh*l.r*u/.75;return{spec:{type:"tree",pos:[t,0,e],rot:s*6.283,params:{height:u,canopy:h,model:l.model}},reach:.75*h+en,K:r}}function yM(i){const e=Zo(),t=i.map(r=>[(r.spec.pos[0]-r.reach)/r.K,(r.spec.pos[0]+r.reach)/r.K]).sort((r,o)=>r[0]-o[0]),n=[];let s=-e;for(const[r,o]of t)if(r>s&&n.push([s,Math.min(r,e)]),s=Math.max(s,o),s>=e)break;return s<e&&n.push([s,e]),n.filter(([r,o])=>o-r>.001).sort((r,o)=>o[1]-o[0]-(r[1]-r[0]))}const Zo=()=>Math.sin(ct.maxAngleDeg*Sr);function Ao(i,e,t,n,s,r){let l=n?e:e-.08,u=0;for(;l<t-.001&&u++<12;){const h=r.salt++,a=r.rand(h*7+1)<.6?.64+r.rand(h*7+6)*.1:.26+r.rand(h*7+6)*.08,c=a*r.R,f=r.R*ct.spread*Dd(a),m=Nd(c/r.Rmax,r.Rmax),_=Nl(r.biome,c,0,m,r.rand(h*7+2),f,1.25),g=2*_.reach/f;let p=l+g/2;const x=p+g/2>=t;if(x&&s&&(p=t-g/2),_.spec.pos[0]=Math.round(f*p*100)/100,i.push(_),x)break;l=p+g/2-.1}}function MM(i,e,t,n){const s=n.salt++,r=.38+n.rand(s*7+3)*.2,o=r*n.R,l=n.R*ct.spread*Dd(r),u=Nd(o/n.Rmax,n.Rmax);let h=e,d=t;if(e>-Zo()){const a=Nl(n.biome,o,0,u,n.rand(s*7+4),l),c=2*a.reach/l;a.spec.pos[0]=Math.round(l*(e-c/2)*100)/100,i.push(a),h=e-c*.4}if(t<Zo()){const a=Nl(n.biome,o,0,u,n.rand(s*7+5),l),c=2*a.reach/l;a.spec.pos[0]=Math.round(l*(t+c/2)*100)/100,i.push(a),d=t+c*.4}return{lo:h,hi:d}}const Ro=2,bM=["meadow","pine","shore","desert","islands"],Mh=["noon","noon","noon","morning","morning","golden","golden","dusk"],bh=["spring","spring","summer","summer","autumn","autumn","autumn","winter","winter"],Sh=new Map;function kd(i,e){let t=Sh.get(i);for(t||Sh.set(i,t=[]);t.length<=e;){const n=t.length;if(n===0){t.push({index:0,biome:"meadow",season:"spring",time:"noon"});continue}const s=c=>Id(i,n,c+7e3),r=t[n-1],o=t.slice(Math.max(0,n-2)).map(c=>c.biome);let l=bM.filter(c=>c!==r.biome&&(c!=="islands"||n>=3));const u=l.filter(c=>!o.includes(c));u.length&&(l=u);const h=l[Math.floor(s(1)*l.length)];let d=Yo.has(h)?bh[Math.floor(s(2)*bh.length)]:"spring",a=Mh[Math.floor(s(3)*Mh.length)];d===r.season&&a===r.time&&(a=Ja[(Ja.indexOf(a)+1)%Ja.length],Yo.has(h)&&(d=Za[(Za.indexOf(d)+1)%Za.length])),t.push({index:n,biome:h,season:d,time:a})}return t[e]}function Ud(i,e,t){const n=Fr(t),s=S=>Id(i,e,S),r=kd(i,Math.floor(e/$i)),o=r.biome,l=e<Ro,u=l?xs.introMin:xs.min,h=l?xs.introMax:To(xs.startMax,xs.max,(e-Ro)/Math.max(1,xs.fullBy-Ro)),d=o==="islands"?Math.min(76,h):h,a=Math.floor(u+s(1)*(Math.floor(d)-u+1)),c=Math.round((2.4-1.4*n**.8)*100)/100,f=Math.round((3+13*(1-n)**2)*10)/10,m=vM*a,_={biome:o,R:m,Rmax:a,rand:s,salt:10},g=[],p=Zo(),x=s(3)<.5?-1:1;if(!(e<Ro))if(n<.25){const S=s(6)<.35;for(const R of S?[-1,1]:[x]){const I=.28+s(R>0?4:7)*.22,M=[I,I+.22].map(w=>w*R);Ao(g,Math.min(...M),Math.max(...M),!0,!0,_)}}else if(n<.45){const S=To(.12,.3,(n-.25)/.2);Ao(g,-S,S,!0,!0,_)}else{const S=(n-.45)/.55,R=To(.55,.22,S),I=x*To(.3,.2+s(5)*.18,S);let M=I-R/2,w=I+R/2;w>p&&(w=p,M=p-R),M<-p&&(M=-p,w=-p+R);const T=MM(g,M,w,_);M>-p&&Ao(g,-p,T.lo,!1,!0,_),w<p&&Ao(g,T.hi,p,!0,!1,_)}const y=yM(g),v=y.length?Math.asin((y[0][0]+y[0][1])/2)/Sr:0;return{id:e+1,name:(js[o]??$n).name,seed:1+Math.floor(s(99)*5e4),distance:a,holeRadius:c,assist:f,biome:o,objects:g.map(S=>S.spec),difficulty:n,world:r.index+1,look:`${r.season}|${r.time}`,hint:v,open:y.map(([S,R])=>[Math.asin(S)/Sr,Math.asin(R)/Sr])}}const Fd="longshot.course.v1";function Od(){return Math.random()*2147483647|0}function SM(){const i={seed:Od(),hole:0,relief:0,shots:0,strokes:0};try{const e=localStorage.getItem(Fd);if(!e)return i;const t=JSON.parse(e);return{seed:typeof t.seed=="number"?t.seed:i.seed,hole:Math.max(0,t.hole??0),relief:Fr(t.relief??0),shots:t.shots??0,strokes:Math.max(0,Math.floor(t.strokes??0))||0}}catch{return i}}let wt=SM();function Co(){try{localStorage.setItem(Fd,JSON.stringify(wt))}catch{}}const Mn={get hole(){return wt.hole},get seed(){return wt.seed},difficulty(i=wt.hole){return Math.max(0,Ld(i)-wt.relief)},current(){return Ud(wt.seed,wt.hole,this.difficulty())},complete(i,e=!1){return wt.shots+=i,i>=zi.strainAt?wt.relief=Math.min(zi.maxRelief,wt.relief+zi.relief):e||(wt.relief=Math.max(0,wt.relief-zi.relief/2)),wt.hole+=1,wt.strokes=0,Co(),this.current()},get strokes(){return wt.strokes},setStrokes(i){wt.strokes=Math.max(0,Math.floor(i)),Co()},nextBiome(){return kd(wt.seed,Math.floor((wt.hole+1)/$i)).biome},get world(){return Math.floor(wt.hole/$i)+1},reset(){wt={seed:Od(),hole:0,relief:0,shots:0,strokes:0},Co()},jump(i){wt.hole=Math.max(0,Math.floor(i)),wt.relief=0,wt.strokes=0,Co()}};function Bd(i,e){const t=ce("header",{}),n=ce("button",{class:"icon-btn",type:"button","aria-label":ve("common.back")});return n.append(Qt("back")),n.addEventListener("click",()=>i.back()),t.append(n,ce("span",{class:"grow"},e)),t}function wM(i,e,...t){const n=ce("div",{class:"board"});return n.append(Bd(i,e),...t),n}function TM(i,e){const t=e.hole(),n=ce("div",{class:"stack",style:{gap:"14px"}});n.append(ce("h1",{class:"ui-title"},ve("game.title")),ce("div",{class:"ui-sub"},ve("game.tagline")));const s=Ps(ve("menu.play"),{kind:"primary",icon:"play",sub:t<=1?ve("menu.play.fresh"):ve("menu.play.where",{w:Math.floor((t-1)/$i)+1,n:(t-1)%$i+1}),onClick:()=>{i.close(),e.play()}});s.id="start-btn";const r=gM(null,s,Ps(ve("menu.shop"),{icon:"cart",onClick:()=>i.open("shop")})),o=Ps(ve("menu.settings"),{icon:"cog",onClick:()=>i.open("settings")});return n.append(r,o),n}function EM(i){const e=ce("div",{class:"stack scroller",style:{maxHeight:"54vh"}}),t=sM();for(const n of ic){const s=ce("button",{class:"btn",type:"button",style:{justifyContent:"flex-start"}});s.append(ce("span",{class:"grow",style:{textAlign:"left"}},n.native)),s.append(ce("span",{class:"sub"},n.name)),n.code===t&&s.append(Qt("check",20)),s.addEventListener("click",()=>{rM(n.code),i.refresh()}),e.append(s)}return wM(i,ve("language.title"),ce("p",{class:"muted",style:{margin:"0"}},ve("language.note")),e)}function wh(i,e,t){const n=ce("div",{class:"stack",style:{gap:"4px"}}),s=ce("div",{class:"row"},ce("span",{class:"grow",style:{fontWeight:"700"}},i),ce("span",{class:"muted"},`${Math.round(e*100)}%`)),r=ce("input",{type:"range",min:"0",max:"1",step:"0.05",value:String(e),style:{width:"100%",accentColor:"#7fae44",height:"32px"}});return r.addEventListener("input",()=>{const o=Number(r.value);s.lastChild.textContent=`${Math.round(o*100)}%`,t(o)}),n.append(s,r),n}function AM(i){const e=Ps(ve("settings.reset"),{kind:"ghost"});let t=!1,n=0,s=0;const r=e.querySelector("span");return e.addEventListener("click",()=>{if(!t){t=!0,n=performance.now(),e.className="btn buy",r.textContent=ve("settings.resetConfirm"),s=window.setTimeout(()=>{t=!1,e.className="btn ghost",r.textContent=ve("settings.reset")},3500);return}performance.now()-n<600||(window.clearTimeout(s),i.resetProgress(),e.className="btn primary",e.setAttribute("disabled","true"),r.textContent=ve("settings.resetDone"))}),e}function Th(i,e,t="title"){const n=e.settings(),s=ce("div",{class:"board"});if(t==="pause"){const r=ce("header",{},ce("span",{class:"grow"},ve("settings.title"))),o=ce("button",{class:"icon-btn",type:"button","aria-label":ve("common.close")});o.append(Qt("close")),o.addEventListener("click",()=>i.close()),r.append(o),s.append(r,Ps(ve("pause.resume"),{kind:"primary",icon:"play",onClick:()=>i.close()}))}else s.append(Bd(i,ve("settings.title")));return s.append(wh(ve("settings.music"),n.music,r=>e.setSetting("music",r)),wh(ve("settings.sfx"),n.sfx,r=>e.setSetting("sfx",r)),Ps(ve("menu.language"),{icon:"globe",onClick:()=>i.open("language")}),AM(e)),s}function RM(i,e){const t=ce("div",{class:"board",style:{width:"min(420px, 100%)"}}),n=ce("header",{},ce("span",{class:"grow"},ve("skip.title"))),s=ce("button",{class:"icon-btn",type:"button","aria-label":ve("common.close")});s.append(Qt("close")),s.addEventListener("click",()=>i.close()),n.append(zs(Ln(e.points())),s);const r=e.adsEnabled(),o=e.price(),l=o-e.points(),u=[],h=()=>{i.close(),e.skip()},d=ce("button",{class:"btn buy",type:"button","data-pay":"points"});if(d.append(Qt("skip",20),ce("span",{},ve("skip.button")),zs(Ln(o))),l>0&&d.setAttribute("disabled","true"),d.addEventListener("click",()=>{e.pay()&&h()}),u.push(d),r){const c=ce("button",{class:"btn buy",type:"button","data-pay":"ad"});c.append(Qt("play",20),ce("span",{},ve("skip.watch"))),c.addEventListener("click",async()=>{for(const f of u)f.setAttribute("disabled","true");if(await e.watchAd("skip")){h();return}c.removeAttribute("disabled"),l<=0&&d.removeAttribute("disabled")}),u.push(c)}const a=ce("button",{class:"btn ghost",type:"button"},ve("common.cancel"));return a.addEventListener("click",()=>i.close()),t.append(n,ce("p",{class:"muted",style:{margin:"0",textAlign:"center"}},ve(r?"skip.bodyBoth":"skip.bodyPoints"))),t.append(...u.slice(0,1)),l>0&&t.append(ce("p",{class:"muted short",style:{margin:"-4px 0 0",textAlign:"center",fontSize:".86em"}},ve("points.short",{n:Ln(l)}))),t.append(...u.slice(1),a),t}function CM(i,e,t){const n=ce("div",{class:"game-buttons",style:{position:"fixed",zIndex:"30",display:"flex",gap:"8px",top:"max(env(safe-area-inset-top), 10px)",left:"max(env(safe-area-inset-left), 10px)"}});return n.append(cl("cog",ve("menu.settings"),e),cl("cart",ve("menu.shop"),i),cl("skip",ve("skip.button"),t)),n}const wr=i=>"#"+i.toString(16).padStart(6,"0");function zd(i,e,t=148,n=84){const s=wr(e?.from??i.from),r=wr(e?.to??i.to),o=i.size[1]>=i.size[0],l=`g-${i.key}-${Math.random().toString(36).slice(2,7)}`,u=t-20,h=n/2,d=12,a=o?3:9,c=o?15:1.5,f=document.createElementNS("http://www.w3.org/2000/svg","svg");return f.setAttribute("viewBox",`0 0 ${t} ${n}`),f.setAttribute("preserveAspectRatio","xMidYMid slice"),f.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",f.innerHTML=`
    <defs>
      <linearGradient id="${l}" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0" stop-color="${s}" stop-opacity="${i.additive?.95:.8}"/>
        <stop offset="0.55" stop-color="${r}" stop-opacity="0.55"/>
        <stop offset="1" stop-color="${r}" stop-opacity="0"/>
      </linearGradient>
      <filter id="b-${l}" x="-30%" y="-60%" width="160%" height="220%">
        <feGaussianBlur stdDeviation="${i.additive?2.4:1.6}"/>
      </filter>
    </defs>
    <path d="M ${u} ${h-a}
             C ${(u+d)/2} ${h-a*.6}, ${d+18} ${h-c}, ${d} ${h-c*.5}
             L ${d} ${h+c*.5}
             C ${d+18} ${h+c}, ${(u+d)/2} ${h+a*.6}, ${u} ${h+a} Z"
          fill="url(#${l})" filter="url(#b-${l})"/>
    <circle cx="${u}" cy="${h}" r="7.5" fill="#fdfdfd" stroke="#00000033"/>
    <circle cx="${u-2}" cy="${h-2.5}" r="2.4" fill="#ffffff"/>`,f}function PM(i,e,t){const n=e.owned(i.key),s=e.equipped()===i.key,r=e.tintOf(i.key),o=ce("button",{class:"btn",type:"button",style:{flexDirection:"column",gap:"6px",padding:"8px",minHeight:"0",background:"linear-gradient(180deg,#22303f,#16212c)",borderColor:s?qt.green:"#0d1620",boxShadow:s?`0 5px 0 ${qt.greenDeep}`:"0 5px 0 #0d1620"}});o.append(ce("div",{style:{position:"relative",width:"100%",height:"0",paddingTop:`${84/148*100}%`,flex:"0 0 auto",borderRadius:"9px",overflow:"hidden",background:"#0e1922"}},zd(i,r)));const l=ce("div",{class:"row",style:{gap:"4px 6px",flexWrap:"wrap"}});if(l.append(ce("span",{style:{flex:"1 1 auto",color:"#f2e7d0",textAlign:"left",fontSize:".92em"}},Cs(`trail.${i.key}`,i.name))),s)l.append(ce("span",{style:{color:qt.green,fontSize:".72em",fontWeight:"800"}},ve("shop.equipped")));else if(n)l.append(ce("span",{style:{color:"#9fb0c6",fontSize:".72em"}},ve("shop.owned")));else{o.setAttribute("data-locked","");const u=zs(Ln(e.price(i.key)));u.style.marginLeft="auto",l.append(u)}return o.setAttribute("data-trail",i.key),o.append(l),o.addEventListener("click",t),o}const Eh=[16777215,16773577,16765503,16751164,16734797,16740277,11566335,5999871,4182783,5238964,9429066,3089431];function Ah(i,e,t){const n=ce("div",{class:"swatch-row"});n.append(ce("span",{class:"swatch-label"},i));const s=ce("div",{class:"swatches"}),r=ce("label",{class:"swatch custom",title:ve("shop.anyColour")}),o=()=>{for(const u of s.querySelectorAll("[data-c]"))u.classList.toggle("on",Number(u.dataset.c)===e());r.classList.toggle("on",!Eh.includes(e()))};for(const u of Eh){const h=ce("button",{class:"swatch",type:"button","data-c":String(u),"aria-label":wr(u)});h.style.setProperty("--c",wr(u)),h.addEventListener("click",()=>{t(u),o()}),s.append(h)}const l=ce("input",{type:"color",value:wr(e())});return l.addEventListener("input",()=>{t(Number(l.value.replace("#","0x"))),o()}),r.append(l),s.append(r),n.append(s),o(),n}function LM(i,e,t,n){const s=ce("div",{class:"modal-wrap"}),r=ce("div",{class:"board",style:{width:"min(420px, 100%)",gap:"12px"}});let o=e.tintOf(i.key)??{from:i.from,to:i.to},l=!1;const u=ce("header",{}),h=ce("button",{class:"icon-btn",type:"button","aria-label":ve("common.close")});h.append(Qt("close")),h.addEventListener("click",t);const d=e.tier(i.key),a=ce("span",{class:"grow"},Cs(`trail.${i.key}`,i.name)," ");e.owned(i.key)||a.append(ce("span",{class:`tier ${d}`},ve(`tier.${d}`))),u.append(a,zs(Ln(e.points())),h);const c=u.querySelector(".pts span"),f=ce("div",{style:{position:"relative",borderRadius:"12px",overflow:"hidden",flex:"0 0 auto",aspectRatio:"300 / 150",background:"linear-gradient(180deg,#16222e,#0d151d)"}}),m=ce("button",{class:"icon-btn stage-tool",type:"button","aria-label":ve("shop.recolour"),title:ve("shop.recolour")});m.append(Qt("dropper")),m.addEventListener("click",()=>{l=!l,l||(o=e.tintOf(i.key)??{from:i.from,to:i.to}),y()});const _=()=>{f.replaceChildren(zd(i,l?o:e.tintOf(i.key),300,150)),e.owned(i.key)&&f.append(m)},g=ce("div",{class:"stack",style:{gap:"8px"}}),p=ce("div",{class:"stack"});function x(v){const A=v.price-e.points(),S=ce("button",{class:"btn buy",type:"button","data-pay":"points"});S.append(Qt(v.icon,20),ce("span",{},v.label),zs(Ln(v.price))),A>0&&S.setAttribute("disabled","true"),S.addEventListener("click",()=>{e.spend(v.price)&&(v.grant(),c.textContent=Ln(e.points()))});const R=[S];if(A>0&&R.push(ce("p",{class:"muted short",style:{margin:"-4px 0 0",textAlign:"center",fontSize:".86em"}},ve("points.short",{n:Ln(A)}))),e.adsEnabled()){const I=ce("button",{class:"btn buy",type:"button","data-pay":"ad"});I.append(Qt("play",20),ce("span",{},v.adLabel)),I.addEventListener("click",async()=>{I.setAttribute("disabled","true"),S.setAttribute("disabled","true"),await e.watchAd(v.reason)&&v.grant(),y()}),R.push(I)}return{pay:S,nodes:R}}function y(){if(_(),m.classList.toggle("on",l),g.replaceChildren(),p.replaceChildren(),!e.owned(i.key)){const{nodes:R}=x({icon:"lock",label:ve("shop.unlock"),adLabel:ve("shop.unlockAd"),price:e.price(i.key),reason:`trail:${i.key}`,grant:()=>{e.unlock(i.key),a.querySelector(".tier")?.remove(),n(),y()}});p.append(...R);return}if(l){const{nodes:R}=x({icon:"dropper",label:ve("shop.apply"),adLabel:ve("shop.applyAd"),price:e.recolourPrice(),reason:`recolour:${i.key}`,grant:()=>{e.setTint(i.key,o),l=!1,n(),y()}}),I=R.filter(N=>N instanceof HTMLButtonElement),M=I.map(N=>!N.disabled),w=e.tintOf(i.key)??{from:i.from,to:i.to},T=()=>{const N=o.from===w.from&&o.to===w.to;I.forEach((U,z)=>U.toggleAttribute("disabled",N||!M[z]))};g.append(Ah(ve("shop.head"),()=>o.from,N=>{o={...o,from:N},_(),T()}),Ah(ve("shop.tail"),()=>o.to,N=>{o={...o,to:N},_(),T()})),T();const L=ce("button",{class:"btn ghost",type:"button"},ve("common.cancel"));L.addEventListener("click",()=>{l=!1,o=e.tintOf(i.key)??{from:i.from,to:i.to},y()}),p.append(...R,L);return}const A=e.equipped()===i.key,S=ce("button",{class:`btn ${A?"ghost":"primary"}`,type:"button"});if(A?(S.setAttribute("disabled","true"),S.append(Qt("check",20),ce("span",{},ve("shop.equipped")))):(S.append(ce("span",{},ve("shop.equip"))),S.addEventListener("click",()=>{e.equip(i.key),n(),y()})),p.append(S),e.tintOf(i.key)){const R=ce("button",{class:"btn ghost",type:"button"});R.append(ce("span",{},ve("shop.reset"))),R.addEventListener("click",()=>{e.setTint(i.key,null),o={from:i.from,to:i.to},n(),y()}),p.append(R)}}return y(),r.append(u,f,g,p),s.append(r),s.addEventListener("click",v=>{v.target===s&&t()}),s}function IM(i,e){const t=ce("div",{class:"board",style:{maxHeight:"86vh"}}),n=ce("header",{}),s=ce("button",{class:"icon-btn",type:"button","aria-label":ve("common.back")});s.append(Qt("back")),s.addEventListener("click",()=>i.back());const r=zs(Ln(e.points()));n.append(s,ce("span",{class:"grow"},ve("shop.title")),r);const o=ce("div",{class:"grid scroller",style:{gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gridAutoRows:"max-content",maxHeight:"62vh",paddingTop:"2px"}}),l=()=>{r.querySelector("span").textContent=Ln(e.points()),o.replaceChildren();for(const u of nc)o.append(PM(u,e,()=>{const h=LM(u,e,()=>h.remove(),l);t.append(h)}))};return l(),t.append(n,ce("p",{class:"muted",style:{margin:"0"}},e.adsEnabled()?ve("shop.blurbBoth"):ve("shop.blurbPoints")),o),t}const kl="longshot.settings.v1",_r={music:.5,sfx:.8},Rh=(i,e)=>typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):e;function DM(){try{const i=localStorage.getItem(kl);if(!i)return{..._r};const e=JSON.parse(i);return{music:Rh(e.music,_r.music),sfx:Rh(e.sfx,_r.sfx)}}catch{return{..._r}}}let ii=DM();const Po=new Set,Ul={get all(){return{...ii}},get(i){return ii[i]},set(i,e){ii={...ii,[i]:e};try{localStorage.setItem(kl,JSON.stringify(ii))}catch{}for(const t of Po)t(ii)},onChange(i){return Po.add(i),i(ii),()=>Po.delete(i)},reset(){ii={..._r};try{localStorage.removeItem(kl)}catch{}for(const i of Po)i(ii)}},Lo=i=>440*Math.pow(2,(i-69)/12),xi=32,fr=xi*4,Ch={maj7:[0,4,7,11],m7:[0,3,7,10],six:[0,4,7,9],add9:[0,4,7,14],sus2:[0,2,7,12]},Io=[[[0,"maj7"],[9,"m7"],[5,"maj7"],[7,"six"]],[[0,"add9"],[5,"maj7"],[9,"m7"],[5,"maj7"]],[[5,"maj7"],[0,"add9"],[2,"m7"],[7,"sus2"]],[[9,"m7"],[5,"maj7"],[0,"add9"],[7,"six"]],[[0,"maj7"],[4,"m7"],[5,"maj7"],[7,"sus2"]]],pr=[60,62,57,58,55],Ph=[70,72,76,80],NM=[0,2,4,7,9,12,14,16,19,21];function Fl(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Lh(i,e,t){for(;i<e;)i+=12;for(;i>=t;)i-=12;return i}function kM(i,e,t){const n=(i+e)%12,s=[...new Set(Ch[t].map(l=>Lh(n+l,52,67)))].sort((l,u)=>l-u),r=new Set(Ch[t].map(l=>(n+l)%12)),o=[];for(let l=i;l<=i+21;l++)r.has(l%12)&&o.push(l);return{root:Lh(n,40,52),pad:s,tones:o}}function ul(i,e,t){const n=Fl(i),s=[];let r=3+Math.floor(n()*4);for(let o=0;o<xi;o+=2){const l=o%8===0;if(n()>(l?.7:.28))continue;r=Math.max(0,Math.min(e.length-1,r+[-2,-1,-1,1,1,2,0][Math.floor(n()*7)]));let u=e[r];if(l){const h=t(o).tones;u=h.reduce((d,a)=>Math.abs(a-u)<Math.abs(d-u)?a:d,h[0])}s.push({step:o,note:u,len:n()<.4?4:2})}return s}class UM{ctx=null;out=null;keysBus=null;delay=null;noise=null;volume=.5;next=0;timer=0;piece=null;cued=!1;dealt=0;history=[];setVolume(e){if(this.volume=Math.max(0,Math.min(1,e)),!this.out||!this.ctx)return;const t=this.out.gain,n=this.ctx.currentTime;t.cancelScheduledValues(n),t.setValueAtTime(t.value,n),t.setTargetAtTime(this.level,n,.1)}get level(){return this.volume*.5}get playing(){return this.timer!==0}get resting(){return this.piece===null}start(e){this.timer||(this.build(e),this.out.gain.setValueAtTime(0,e.currentTime),this.out.gain.linearRampToValueAtTime(this.level,e.currentTime+3),this.next=e.currentTime+.2,this.timer=window.setInterval(()=>this.scheduleUntil(e.currentTime+.25),60))}cue(){if(!(!this.ctx||!this.timer)){if(this.piece){this.piece.step>=(this.piece.cycles-1)*fr&&(this.cued=!0);return}this.next=Math.min(this.next,this.ctx.currentTime+.3)}}build(e){this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=3,t.connect(e.destination),this.out=e.createGain(),this.out.gain.value=this.level,this.out.connect(t);const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=2200,n.connect(this.out),this.delay=e.createDelay(2);const s=e.createGain();s.gain.value=.22;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=1800,this.delay.connect(r).connect(s).connect(this.delay);const o=e.createGain();o.gain.value=.22,r.connect(o).connect(this.out),this.keysBus=e.createGain(),this.keysBus.connect(n),this.keysBus.connect(this.delay);const l=Math.floor(e.sampleRate*.5);this.noise=e.createBuffer(1,l,e.sampleRate);const u=this.noise.getChannelData(0);let h=7;for(let d=0;d<l;d++)h=h*16807%2147483647,u[d]=h/2147483647*2-1;this.piece=null,this.dealt=0,this.next=0,this.history.length=0}stop(){window.clearInterval(this.timer),this.timer=0,this.out&&this.ctx&&this.out.gain.setTargetAtTime(0,this.ctx.currentTime,.4)}scheduleUntil(e){if(this.ctx)for(this.piece&&this.next<this.ctx.currentTime-.1&&(this.next=this.ctx.currentTime+.05);this.next<e;){this.piece||(this.next<this.ctx.currentTime-.1&&(this.next=this.ctx.currentTime+.05),this.deal(this.next));const t=this.piece;if(t.step>=t.cycles*fr){const n=Fl(t.index*131+17);this.history[this.history.length-1].end=this.next,this.next+=this.cued?2.5:35+n()*40,this.cued=!1,this.piece=null;continue}this.play(t,t.step,this.next),this.next+=t.stepLen*(t.step%2===0?1.06:.94),t.step++}}deal(e){const t=this.dealt++,n=Fl(t*7919+3),s=this.history[this.history.length-1];let r=t===0?60:pr[Math.floor(n()*pr.length)],o=t===0?0:Math.floor(n()*Io.length);s&&s.tonic===r&&s.progression===o&&(o=(o+1+Math.floor(n()*(Io.length-1)))%Io.length),s&&s.tonic===r&&(r=pr[(pr.indexOf(r)+1)%pr.length]);const l=t===0?76:Ph[Math.floor(n()*Ph.length)],u=Io[o].map(([d,a])=>kM(r,d,a)),h={index:t,tonic:r,progression:o,bpm:l,cycles:n()<.5?4:5,shaker:t>0&&n()<.5,chords:u,scale:NM.map(d=>r+d),step:0,stepLen:60/l/4,phrases:[]};this.piece=h,this.writePhrases(h,1),this.delay&&this.delay.delayTime.setValueAtTime(60/l*.75,e),this.history.push({index:t,start:e,end:e,tonic:r,progression:o,bpm:l})}chordAt(e,t){return e.chords[Math.floor(t%fr/xi)]}writePhrases(e,t){const n=(e.index*31+t)*7919,s=ul(n+1,e.scale,l=>this.chordAt(e,l)),r=ul(n+1,e.scale,l=>this.chordAt(e,l+xi)).map((l,u)=>{const h=e.scale.indexOf(l.note);return u%3===2&&h>=0?{...l,note:e.scale[Math.min(e.scale.length-1,h+1)]}:l}),o=ul(n+2,e.scale,l=>this.chordAt(e,l+xi*2));e.phrases=[s,r,o,s]}play(e,t,n){const s=t%fr,r=Math.floor(t/fr),o=r===e.cycles-1;s===0&&r===2&&this.writePhrases(e,2);const l=this.chordAt(e,t),u=s%xi,h=Math.floor(s/xi),d=o&&h===3;if(u===0)for(const c of l.pad)this.pad(Lo(c),n,e.stepLen*xi*(d?1.6:1));if((r===0&&h>=2||r>0&&!o||o&&h<2)&&(u%8===0?this.bass(Lo(l.root),n,e.stepLen*7):u===30&&this.bass(Lo(l.root+7),n,e.stepLen*2)),r>0&&!d){const c=e.phrases[h];for(const f of c)f.step===u&&this.pluck(Lo(f.note),n,e.stepLen*f.len)}e.shaker&&r===2&&!o&&s%4===2&&this.shaker(n,.01)}pad(e,t,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=950;const o=s.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.032,t+2),o.gain.setValueAtTime(.032,t+n-.2),o.gain.linearRampToValueAtTime(0,t+n+2),r.connect(o).connect(this.out);for(const l of[-7,6]){const u=s.createOscillator();u.type="triangle",u.frequency.value=e,u.detune.value=l,u.connect(r),u.start(t),u.stop(t+n+2.1)}}bass(e,t,n){const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=e;const o=s.createOscillator();o.type="triangle",o.frequency.value=e*2;const l=s.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.11,t+.03),l.gain.exponentialRampToValueAtTime(.035,t+n*.6),l.gain.exponentialRampToValueAtTime(8e-4,t+n+.1);const u=s.createGain();u.gain.value=.1,r.connect(l),o.connect(u).connect(l),l.connect(this.out),r.start(t),o.start(t),r.stop(t+n+.15),o.stop(t+n+.15)}pluck(e,t,n){const s=this.ctx,r=s.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.05,t+.01),r.gain.exponentialRampToValueAtTime(8e-4,t+Math.max(.6,n*1.8)),r.connect(this.keysBus);const o=s.createOscillator();o.type="sine",o.frequency.value=e,o.connect(r);const l=s.createOscillator();l.type="sine",l.frequency.value=e*3.01;const u=s.createGain();u.gain.setValueAtTime(.18,t),u.gain.exponentialRampToValueAtTime(.001,t+.08),l.connect(u).connect(r);const h=t+Math.max(.65,n*1.9);o.start(t),l.start(t),o.stop(h),l.stop(h)}shaker(e,t){const n=this.ctx,s=n.createBufferSource();s.buffer=this.noise;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;const o=n.createGain();o.gain.setValueAtTime(t,e),o.gain.exponentialRampToValueAtTime(5e-4,e+.05),s.connect(r).connect(o).connect(this.out),s.start(e,Math.random()*.3,.07)}}const aa=new UM,Hd="longshot.cosmetics.v1";function FM(){const i={owned:[Il.key],equipped:Il.key,tints:{}};try{const e=localStorage.getItem(Hd);if(!e)return i;const t=JSON.parse(e);return{owned:Array.isArray(t.owned)&&t.owned.length?t.owned:i.owned,equipped:typeof t.equipped=="string"?t.equipped:i.equipped,tints:t.tints&&typeof t.tints=="object"?t.tints:{}}}catch{return i}}let Wt=FM();const Ol=new Set;function hl(){try{localStorage.setItem(Hd,JSON.stringify(Wt))}catch{}for(const i of Ol)i()}const Un={owned:i=>Wt.owned.includes(i),equipped:()=>Wt.equipped,equip(i){Wt.owned.includes(i)&&(Wt={...Wt,equipped:i},hl())},unlock(i){Wt.owned.includes(i)||(Wt={...Wt,owned:[...Wt.owned,i],equipped:i},hl())},tintOf:i=>Wt.tints[i]??null,setTint(i,e){const t={...Wt.tints};e?t[i]=e:delete t[i],Wt={...Wt,tints:t},hl()},activeTrail(){const i=nc.find(t=>t.key===Wt.equipped)??Il,e=Wt.tints[i.key];return e?{...i,from:e.from,to:e.to}:i},onChange(i){return Ol.add(i),()=>Ol.delete(i)}},Gn={par4At:.3,par5At:.6,ladder:[600,400,300,200,100,50,25,10],holeInOneBonus:100,skip:600,start:600,recolour:300,tiers:{common:3e3,rare:9e3,epic:18e3,legendary:36e3}},OM={chalk:"common",ink:"common",comet:"common",sparks:"rare",ember:"rare",frost:"rare",stardust:"epic",bloom:"epic",plasma:"legendary",neon:"legendary",static:"legendary"},Gd=i=>OM[i]??"common",BM=i=>Gn.tiers[Gd(i)];function Vd(i=0){return i<Gn.par4At?3:i<Gn.par5At?4:5}function zM(i,e){const t=i-e,n=i===1?"score.holeInOne":t<=-3?"score.albatross":t===-2?"score.eagle":t===-1?"score.birdie":t===0?"score.par":t===1?"score.bogey":t===2?"score.double":t===3?"score.triple":"score.over",s=Math.min(Gn.ladder.length-1,Math.max(0,t+4)),r=Gn.ladder[s]+(i===1?Gn.holeInOneBonus:0);return{strokes:i,par:e,diff:t,name:n,points:r}}const Wd="longshot.points.v1";function HM(){const i={balance:Gn.start,earned:0};try{const e=localStorage.getItem(Wd);if(e===null)return i;const t=JSON.parse(e),n=s=>typeof s=="number"&&Number.isFinite(s)&&s>=0?Math.floor(s):0;return{balance:n(t?.balance),earned:n(t?.earned)}}catch{return i}}let An=HM();const Bl=new Set;function Ih(){try{localStorage.setItem(Wd,JSON.stringify(An))}catch{}for(const i of Bl)i()}const Lr={get balance(){return An.balance},get earned(){return An.earned},canAfford:i=>An.balance>=i,earn(i){const e=Math.max(0,Math.floor(i));e&&(An={balance:An.balance+e,earned:An.earned+e},Ih())},spend(i){const e=Math.max(0,Math.floor(i));return An.balance<e?!1:(An={...An,balance:An.balance-e},Ih(),!0)},onChange(i){return Bl.add(i),()=>{Bl.delete(i)}}},li=await Ex({background:_e.skyHaze,fov:55,far:2e3,fog:[_e.fogTint,60,200]}),{scene:vt,camera:Hs,renderer:Gs,gui:pb}=li;Dx();let Tr=hd();vt.add(Tr);const Gi=new wp(12574975,6258501,.62);vt.add(Gi);const Rt=new id(16773327,3.1);Rt.position.set(-40,70,-20);Rt.castShadow=!0;Rt.shadow.mapSize.set(2048,2048);Rt.shadow.camera.near=1;Rt.shadow.camera.far=260;Rt.shadow.bias=-2e-4;Rt.shadow.normalBias=.6;vt.add(Rt);vt.add(Rt.target);const Bo=new fn({color:_e.white,roughness:.35}),Jo=new Re(new bi(en,18,14),Bo);Jo.castShadow=!0;vt.add(Jo);function GM(){const i=fM(),e=sn.glow??0;Bo.color.setHex(i.color),Bo.emissive.setHex(i.emissive??(e>0?i.color:0)),Bo.emissiveIntensity=i.emissive?.9:e>0?.6:1,Ks.root.material.color.setHex(i.trail??i.color)}const Ls=new zy(Hs),bn=new Oy;vt.add(bn.root);const Ks=new Hy(_e.white);vt.add(Ks.root);let dl=0;const xn=new Vy(Un.activeTrail());vt.add(xn.mesh);Ks.root.visible=!1;const fl=new P,VM=6,WM=.9;let rc=()=>!1,Hi=null,Dh=!0,et,Tt=null,Ir=0,ys=0,Er=0,xr=0,Qo=$n;const zo=new P,dn=[];let Ht=null,xt="aiming",yi=!0,Ms=null;const qM=2026,vr=[0,22,44,66,88,110,130];let Ho=null;function XM(i){const e=vr[(i%vr.length+vr.length)%vr.length];return Ud(qM,e,Ld(e))}let wi=1,ji=0;function YM(){Ki||(ji++,yi&&Mn.setStrokes(ji))}let Bn=0,ea=0,vi=0,Ar=!1,pl=!1,ml=!1;const Is=new P;let Ki=!1;const lt={active:!1,id:-1,x0:0,y0:0,power:0,angle:0};let Nh="";function $M(i){return i===Nh?!1:(Nh=i,zx(i),!0)}function jM(i){return i.set(0,en,0)}const kh=new oe,Uh=new oe,KM=new oe;function _i(i,e,t){return kh.setHex(i),Uh.setHex(e),KM.copy(kh).lerp(Uh,t)}function qd(i,e,t){const n=Math.max(0,Math.min(1,t)),s=Tr.material.uniforms;s.top.value.copy(_i(i.sky.top,e.sky.top,n)),s.bottom.value.copy(_i(i.sky.bottom,e.sky.bottom,n)),s.haze.value.copy(_i(i.sky.haze,e.sky.haze,n));const r=_i(i.sky.haze,e.sky.haze,n);vt.background instanceof oe?vt.background.copy(r):vt.background=r.clone();const o=vt.fog;o&&o.color.copy(_i(i.sky.fog,e.sky.fog,n)),Rt.color.copy(_i(i.sun.color,e.sun.color,n)),Rt.intensity=i.sun.intensity+(e.sun.intensity-i.sun.intensity)*n,Gi.color.copy(_i(i.hemi.sky,e.hemi.sky,n)),Gi.groundColor.copy(_i(i.hemi.ground,e.hemi.ground,n)),Gi.intensity=i.hemi.intensity+(e.hemi.intensity-i.hemi.intensity)*n,_e.skyTop=s.top.value.getHex(),_e.skyBottom=s.bottom.value.getHex(),_e.skyHaze=s.haze.value.getHex(),_e.fogTint=o?o.color.getHex():e.sky.fog}function Xd(i){qd(i,i,1)}function ZM(i,e,t){const n=i.sunHeight??21,s=e.sunHeight??21;return n+(s-n)*Math.max(0,Math.min(1,t))}function oc(i,e,t=21){const n=vt.fog;n&&(n.near=i+e+16,n.far=i+e+77),Rt.target.position.set(0,0,i+e*.5),Rt.position.set(-44,t,i+e*.35-30)}function ac(i,e){const t=(e-i)/2+24;Rt.target.position.z=(i+e)/2,Rt.shadow.camera.left=-t,Rt.shadow.camera.right=t,Rt.shadow.camera.top=t,Rt.shadow.camera.bottom=-t,Rt.shadow.camera.updateProjectionMatrix()}function Yd(i){const e=new oh(i);if(!i.objects.length)return e;const t=new P(0,en,0),n=Math.max(.35,e.holeRadius*1.1),s=e.cupCycle,r=s>0?[0,s*.25,s*.5,s*.75]:[void 0],o=i.hint??0,l=[o];for(const[h,d]of i.open??[])for(let a=h+.75;a<d;a+=1.5)l.push(a);l.sort((h,d)=>Math.abs(h-o)-Math.abs(d-o));let u=400;for(const h of l)for(const d of r)for(let a=i.distance*.76;a<=i.distance*1.06&&!(u--<=0);a+=n)if(Ll(t,Cl(bd(a),h),e,d).holed)return d!==void 0&&e.simTime(0),e;return e.dispose(),new oh({...i,objects:[]})}function JM(i){if(Tt&&(Tt.dispose(),vt.remove(Tt.root),Tt=null),et?.dispose(),et&&vt.remove(et.root),$M("meadow")){vt.remove(Tr),Tr=hd(),vt.add(Tr),vt.background=new oe(_e.skyHaze);const e=vt.fog;e&&(e.color.setHex(_e.fogTint),e.near=sn.fog[0],e.far=sn.fog[1]),Rt.color.setHex(sn.sun.color),Rt.intensity=sn.sun.intensity,Gi.color.setHex(sn.hemi.sky),Gi.groundColor.setHex(sn.hemi.ground),Gi.intensity=sn.hemi.intensity,GM()}if(et=Yd(i),vt.add(et.root),et.root.position.z=0,Xd(Mi(i)),Qo=Mi(i),oc(0,i.distance,Mi(i).sunHeight),ac(-i.distance*.2,i.distance*1.1),!dn.length)for(let e=0;e<VM;e++){const t=e===0?Jo:Jo.clone(!0);e>0&&vt.add(t),dn.push(new Dy(t,et,ob))}for(const e of dn)e.setWorld(et),e.hide();Bn=0,wi=1,ji=0,Ki=!1,la(!0),Vs()}const QM=3,eb=.026;function Fh(i){return i*i*i*(i*(i*6-15)+10)}const Do=new P;function tb(i){const e=Yd(i),t=et.lastRowZ-e.firstRowZ,n=Math.ceil(t/Ou-1e-6);Er=(n+n%2)*Ou,Tt=e,Tt.root.position.z=Er,vt.add(Tt.root),Ir=0,Gs.compileAsync(Tt.root,Hs,vt).catch(()=>{})}function nb(){xr=et.level.distance,zo.copy(et.cup),Qo=Mi(et.level),Ir=0,ys=0,xt="scrolling";const i=Tt?.level;i?.world&&i.world!==et.level.world&&($d(i),aa.cue())}const lc=1.2,ib=.4;function sb(){const i=Tt,e=i.level;et.dispose(),vt.remove(et.root),et=i,et.root.position.z=0,Tt=null;const t=Mi(e);Xd(t),oc(0,e.distance,t.sunHeight),ac(-e.distance*.2,e.distance*1.1);for(const n of dn)n.setWorld(et),n.hide();Bn=Ir,wi=1,ji=0,Ki=!1,ri=0,la(!1),Vs()}function la(i=!1){const e=Ki?dn.find(t=>t.state==="perched"):null;e?Ht=e:(jM(Is),Ki=!1,Ht=dn.find(t=>!t.busy)??dn[0],Ht.reset(Is),Ht.popIn(.15,.28)),xt="aiming",ea=0,bn.hide(),Ks.clear(),xn.cut(),i&&(ri=0,Ls.snapToAim(Is,et.cup))}function rb(){if(!(!yi||xt!=="aiming"&&xt!=="reloading")){Ar=!0,xt="won",lt.active&&(lt.active=!1),vi=lc;for(const i of dn)(i.live||i===Ht)&&i.fadeOut();Ht=null,bn.hide()}}const ob={onBounce(i,e){i>1.5&&At.blip(e?150:110,{to:60,decay:.09,type:"sine",gain:.16})},onObstacle(i,e){i==="archery"?At.blip(700,{to:1500,decay:.18,type:"triangle"}):i==="tube"?At.blip(300,{to:1100,decay:.3,type:"sine"}):i==="balloon"?At.blip(420,{to:780,decay:.25,type:"sine"}):e>3&&At.noise(.16,.09)},onLipOut(){At.blip(520,{to:240,decay:.22,type:"triangle",gain:.11}),ri=Math.max(ri,.5)},onHoled(){if(!(xt==="won"||xt==="scrolling")){At.blip(660,{to:1320,decay:.4,type:"square",gain:.12}),setTimeout(()=>At.blip(880,{to:1760,decay:.5,type:"triangle",gain:.1}),110),ri=1,xt="won",lt.active&&(lt.active=!1,bn.hide()),vi=lc;for(const i of dn)(i.live||i===Ht)&&i.fadeOut();Ht=null,bn.hide()}},onMissed(){xt!=="won"&&xt!=="scrolling"&&(wi++,Vs())},onPerched(i){xt==="won"||xt==="scrolling"||(Is.copy(i),Ki=!0,la(!1),Vs())}};function Vs(){const i=et.level,e=i.biome??"meadow",t=Cs(`biome.${e}`,(js[e]??$n).name),n=wi>1?` &middot; <span class="try seg">${ve("hud.try",{n:wi})}</span>`:"",s=i.world?` &middot; <span class="seg">${ve("hud.par",{n:Vd(i.difficulty)})}</span>`:"",r=Ki?`<div class="hud-bonus">${ve("hud.bonus")}</div>`:"",o=(i.id-1)%$i+1,l=i.world?`<span class="seg">${ve("hud.world",{n:i.world})}</span> &middot; `:"";Ox.set(`<div class="hud-card"><div class="hud-hole"><span class="k">${ve("hud.hole")}</span><span class="n">${o}</span></div><div class="hud-info"><span class="name">${t}</span><span class="meta">${l}<span class="seg">${ve("hud.metres",{n:Math.round(i.distance)})}</span>${s}${n}</span></div></div>`+r)}let Ss=null,ws=null;function ab(i){ws?.remove();const e=document.createElement("div");e.className=`score-card ${i.diff<0||i.strokes===1?"under":i.diff>0?"over":"par"}`;const t=ve(i.name,{n:i.diff});e.innerHTML='<div class="sign"></div><div class="strip"><span class="earned"></span></div>',e.querySelector(".sign").textContent=t,e.querySelector(".earned").textContent=ve("points.plus",{n:Ln(i.points)}),e.addEventListener("animationend",()=>{e.remove(),ws===e&&(ws=null)}),document.body.appendChild(e),ws=e}function $d(i){if(!i.world)return;Ss?.remove(),ws?.remove(),ws=null;const e=i.biome??"meadow",[t,n]=(i.look??"spring|noon").split("|"),s=[`<b>${Cs(`biome.${e}`,(js[e]??$n).name)}</b>`];Yo.has(e)&&s.push(Cs(`season.${t}`,t)),s.push(Cs(`time.${n}`,n));const r=document.createElement("div");r.className="world-card",r.innerHTML=`<div class="sign">${ve("hud.world",{n:i.world})}</div><div class="strip">${s.join(" &middot; ")}</div>`,r.addEventListener("animationend",()=>{r.remove(),Ss===r&&(Ss=null)}),document.body.appendChild(r),Ss=r}function lb(i){const e=i.clientX-lt.x0,t=i.clientY-lt.y0;return Py(e,t,window.innerHeight)}Gs.domElement.addEventListener("pointerdown",i=>{rc()||xt!=="aiming"||!Ht||lt.active||(lt.active=!0,lt.id=i.pointerId,lt.x0=i.clientX,lt.y0=i.clientY,lt.power=0,lt.angle=0,Gs.domElement.setPointerCapture(i.pointerId))});Gs.domElement.addEventListener("pointermove",i=>{if(!lt.active||i.pointerId!==lt.id)return;const{power:e,angleDeg:t}=lb(i);lt.power=e,lt.angle=t,Ht&&e>.02?bn.show(Ht.pos,e,t):bn.hide()});function jd(i,e){if(!lt.active||i.pointerId!==lt.id)return;if(lt.active=!1,!e||xt!=="aiming"||lt.power<.04||!Ht){bn.hide();return}bn.release(),At.unlock(),At.blip(220,{to:90,decay:.12,type:"sawtooth",gain:.1}),Ks.clear();const t=Uy(Ht.pos,lt.power,lt.angle,et,Bn);fl.set(t.launch.vx,0,t.launch.vz).normalize().multiplyScalar(-(.1+lt.power*.16)),fl.y=.05+lt.power*.08,Ls.kick(fl),YM(),Ht.launch(t.launch,Bn),Ht=null,xt="reloading",ea=WM}Gs.domElement.addEventListener("pointerup",i=>jd(i,!0));Gs.domElement.addEventListener("pointercancel",i=>jd(i,!1));function Kd(i,e){const t=i/e;Ls.setAspect(t),Hs.fov=t<1?68:55,Hs.updateProjectionMatrix()}li.onResize(Kd);Kd(window.innerWidth,window.innerHeight);let ri=0;li.onUpdate(i=>{if(rc()&&xt!=="scrolling"){Bn<et.buildTime+.5&&!dn.some(n=>n.busy)&&(Bn+=i,et.update(Bn)),xn.update(0,Hs);return}Bn+=i,et.update(Bn),ri>0&&(ri=Math.max(0,ri-i*1.2),et.setCupGlow(ri));for(const n of dn)n.update(i);if(et.simTime(Bn),xt==="scrolling"&&Tt){const n=Fh(ys);Do.copy(zo),Do.x+=(0-zo.x)*n,Do.z+=(Tt.level.distance-zo.z)*n,Ls.updateAim(Is,Do,i)}else Ls.updateAim(Is,et.cup,i);dn.forEach((n,s)=>{n.live?xn.emit(n.pos,n.vel,i,s):xn.cut(s)});const e=dn.find(n=>n.live);e&&(dl-=i,dl<=0&&(Ks.push(e.pos),dl=.04)),xn.update(i,Hs),xt==="aiming"&&Ht&&lt.active&&lt.power>.02&&bn.show(Ht.pos,lt.power,lt.angle),bn.size=Ls.indicatorScale(et.level.distance),Hi?.toggleAttribute("disabled",!(yi&&(xt==="aiming"||xt==="reloading")));const t=wi>ud.skipAfterTries;if(Hi&&t!==Dh&&(Dh=t,Hi.hidden=!t,t&&Hi.classList.add("pop-in")),bn.update(i),xt!=="aiming"){if(xt==="reloading")ea-=i,ea<=0&&la(!1);else if(xt==="won"){if(vi-=i,!Ms){const r=Math.max(wi,ji);if(Ms=yi?Mn.complete(r,Ar):Ho!==null?XM(Ho=(Ho+1)%vr.length):{...et.level,id:et.level.id+1},yi&&!Ar){aM();const o=zM(r,Vd(et.level.difficulty));Lr.earn(o.points),ab(o)}Ar=!1,pl=!1}const n=Ms,s=n.biome??"meadow";if(Zd.has(s))!Tt&&vi<=lc-ib?tb(n):Tt&&vi<=0&&!pl&&yi&&lM()?(pl=!0,ml=!0,cM("between-holes").finally(()=>{ml=!1})):Tt&&vi<=0&&!ml&&(Ms=null,nb(),yi&&Dr(Mn.nextBiome()).catch(()=>{}));else{if(_l||(_l=!0,Dr(s).then(()=>{No=0},()=>{No+=1}).finally(()=>{_l=!1})),No>=5){No=0;const r=et.level.biome??"meadow";Ms={...n,biome:r,name:(js[r]??$n).name}}vi<=0&&(vi=.15)}}else if(xt==="scrolling"&&Tt){Ir+=i;const n=QM+Er*eb;ys=Math.min(1,ys+i/n);const s=Fh(ys);et.root.position.z=-Er*s,Tt.root.position.z=Er*(1-s),Tt.update(Ir);const r=Math.max(0,Math.min(1,(s-.25)/.6));qd(Qo,Mi(Tt.level),r),oc(0,xr+(Tt.level.distance-xr)*s,ZM(Qo,Mi(Tt.level),r));const o=xr+(Tt.level.distance-xr)*s;ac(-o*.2,o*1.1),ys>=1&&sb()}}});const gl=new Map,Zd=new Set;let No=0,_l=!1;function Dr(i){const e=js[i]??$n;let t=gl.get(e.key);return t||(t=Tv([...qv(e),...Uo]).then(()=>{Zd.add(i)}).catch(n=>{throw gl.delete(e.key),n}),gl.set(e.key,t)),t}async function Jd(i,e){await Dr(i.biome??"meadow"),yi=e,Ms=null,Ho=null,Ar=!1,JM(i),Mn.strokes>0&&(ji=Mn.strokes,wi=ji+1,Vs())}async function cb(i){Mn.jump(i),await Jd(Mn.current(),!0),Dr(Mn.nextBiome()).catch(()=>{})}await Jd(Mn.current(),!0);Dr(Mn.nextBiome()).catch(()=>{});const Vi=new _M,ub={owned:i=>Un.owned(i),equipped:()=>Un.equipped(),equip:i=>{Un.equip(i),xn.clear(),xn.apply(Un.activeTrail())},unlock:i=>{Un.unlock(i),xn.clear(),xn.apply(Un.activeTrail())},tintOf:i=>Un.tintOf(i),setTint:(i,e)=>{Un.setTint(i,e),xn.clear(),xn.apply(Un.activeTrail())},adsEnabled:()=>Yi.adsEnabled,watchAd:i=>Rd(i),points:()=>Lr.balance,spend:i=>Lr.spend(i),price:i=>BM(i),tier:i=>Gd(i),recolourPrice:()=>Gn.recolour},hb={adsEnabled:()=>Yi.adsEnabled,watchAd:i=>Rd(i),points:()=>Lr.balance,price:()=>Gn.skip,pay:()=>Lr.spend(Gn.skip),skip:()=>rb()},xl={play:()=>{At.unlock(),li.start(),$d(et.level)},hole:()=>Mn.hole+1,settings:()=>Ul.all,setSetting:(i,e)=>Ul.set(i,e),resetProgress:()=>{Mn.reset(),cb(0)}};Vi.register("main",i=>TM(i,xl)).register("language",i=>EM(i)).register("settings",i=>Th(i,xl)).register("pause",i=>Th(i,xl,"pause")).register("shop",i=>IM(i,ub)).register("skip",i=>RM(i,hb));oM(()=>{Vs(),Ss?.remove(),Ss=null,db()});function db(){const[i,e,t]=cc.querySelectorAll("button");for(const[n,s]of[[i,"menu.settings"],[e,"menu.shop"],[t,"skip.button"]])n&&(n.setAttribute("aria-label",ve(s)),n.setAttribute("title",ve(s)))}Ul.onChange(i=>{At.setVolume(i.sfx),aa.setVolume(i.music)});let Or=!1;const Qd=["pointerdown","pointerup","touchend","click","keydown"],ef=()=>{if(Or)return;At.unlock();const i=At.context;if(!i)return;aa.start(i);const e=()=>{for(const t of Qd)removeEventListener(t,ef,!0)};i.state==="running"?e():i.resume().then(()=>{i.state==="running"&&e()}).catch(()=>{})};for(const i of Qd)addEventListener(i,ef,!0);document.addEventListener("visibilitychange",()=>{const i=At.context;i&&(document.hidden?i.suspend():Or||i.resume())});let Nr=!1;jo.start=()=>{Or=!0,At.held=!0,At.context?.suspend(),Nr=Nr||li.running,li.stop()};jo.end=()=>{Or=!1,At.held=!1,document.hidden||At.context?.resume(),aa.cue(),Nr&&(document.hasFocus()&&!document.hidden?vl():(addEventListener("focus",vl,{once:!0}),addEventListener("pointerdown",vl,{once:!0,capture:!0})))};function vl(){!Nr||Or||(Nr=!1,document.hidden||At.context?.resume(),li.start())}rc=()=>Vi.isOpen;Vi.onClose=()=>{At.unlock(),li.start()};li.start();const cc=CM(()=>Vi.reset("shop"),()=>Vi.reset("pause"),()=>Vi.reset("skip"));document.body.appendChild(cc);Hi=cc.querySelectorAll("button")[2]??null;Hi?.addEventListener("animationend",()=>Hi?.classList.remove("pop-in"));Vi.reset("main");

(()=>{var Ah=0,Vc=1,Rh=2;var Yl=1,Ch=2,Yn=3,_i=0,Bt=1,bn=2,xi=0,xs=1,Hc=2,Gc=3,Wc=4,Ih=5,Ni=100,Ph=101,Lh=102,Dh=103,Uh=104,Nh=200,zh=201,Fh=202,Oh=203,ao=204,oo=205,kh=206,Bh=207,Vh=208,Hh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,co=0,lo=1,ho=2,bs=3,fo=4,uo=5,po=6,mo=7,Zl=0,Zh=1,Jh=2,vi=0,$h=1,Kh=2,jh=3,Qh=4,ef=5,tf=6,nf=7;var Jl=300,Ms=301,Ss=302,go=303,xo=304,ga=306,vo=1e3,Oi=1001,_o=1002,Qt=1003,sf=1004;var fr=1005;var zn=1006,Ta=1007;var ki=1008;var jn=1009,$l=1010,Kl=1011,qs=1012,Cc=1013,Bi=1014,Jn=1015,nr=1016,Ic=1017,Pc=1018,Es=1020,jl=35902,Ql=1021,eh=1022,Pn=1023,th=1024,nh=1025,vs=1026,ws=1027,xa=1028,Lc=1029,ih=1030,Dc=1031;var Uc=1033,zr=33776,Fr=33777,Or=33778,kr=33779,yo=35840,bo=35841,Mo=35842,So=35843,Eo=36196,wo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Io=37811,Po=37812,Lo=37813,Do=37814,Uo=37815,No=37816,zo=37817,Fo=37818,Oo=37819,ko=37820,Bo=37821,Br=36492,Vo=36494,Ho=36495,sh=36283,Go=36284,Wo=36285,Xo=36286;var Vr=2300,qo=2301,Aa=2302,Xc=2400,qc=2401,Yc=2402;var rf=3200,af=3201;var rh=0,of=1,mi="",yn="srgb",Rs="srgb-linear",va="linear",gt="srgb";var ts=7680;var Zc=519,cf=512,lf=513,hf=514,ah=515,ff=516,uf=517,df=518,pf=519,Jc=35044;var $c="300 es",$n=2e3,Hr=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Yo=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function mf(i,e){return(i%e+e)%e}function Ca(i,e,t){return(1-t)*i+t*e}function Ns(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],g=s[3],m=s[6],C=s[1],w=s[4],b=s[7],z=s[2],L=s[5],D=s[8];return r[0]=a*_+o*C+c*z,r[3]=a*g+o*w+c*L,r[6]=a*m+o*b+c*D,r[1]=l*_+h*C+u*z,r[4]=l*g+h*w+u*L,r[7]=l*m+h*b+u*D,r[2]=f*_+d*C+x*z,r[5]=f*g+d*w+x*L,r[8]=f*m+d*b+x*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new tt;function oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=Gr("canvas");return i.style.display="block",i}var Kc={};function Bs(i){i in Kc||(Kc[i]=!0,console.warn(i))}function xf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function vf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _f(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ut={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mi?va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],el=[.3127,.329],tl=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[Rs]:{primaries:jc,whitePoint:el,transfer:va,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:jc,whitePoint:el,transfer:gt,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}});var ns,Zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=Gr("canvas")),ns.width=e.width,ns.height=e.height;let n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yf=0,Wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pa(s[a].image)):r.push(Pa(s[a]))}else r=Pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,gn=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=zn,a=ki,o=Pn,c=jn,l=i.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Cs(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Jl;gn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,b=(d+1)/2,z=(m+1)/2,L=(h+f)/4,D=(u+_)/4,U=(x+g)/4;return w>b&&w>z?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=L/n,r=D/n):b>z?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=U/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=D/r,s=U/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(g-x)/C,this.y=(u-_)/C,this.z=(f-h)/C,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xr=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==x){let g=1-o,m=c*f+l*d+h*x+u*_,C=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){let z=Math.sqrt(w),L=Math.atan2(z,m*C);g=Math.sin(g*L)/z,o=Math.sin(o*L)/z}let b=o*C;if(c=c*g+f*b,l=l*g+d*b,h=h*g+x*b,u=u*g+_*b,g===1-o){let z=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=z,l*=z,h*=z,u*=z}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-o*d,e[t+2]=l*x+h*d+o*f-c*u,e[t+3]=h*x-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new k,il=new bi,Vi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),dr.subVectors(this.max,zs),is.subVectors(e.a,zs),ss.subVectors(e.b,zs),rs.subVectors(e.c,zs),li.subVectors(ss,is),hi.subVectors(rs,ss),Ri.subVectors(is,rs);let t=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,li.z,0,-li.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!Da(t,is,ss,rs,dr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,is,ss,rs,dr))?!1:(pr.crossVectors(li,hi),t=[pr.x,pr.y,pr.z],Da(t,is,ss,rs,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new k,new k,new k,new k,new k,new k,new k,new k],Rn=new k,ur=new Vi,is=new k,ss=new k,rs=new k,li=new k,hi=new k,Ri=new k,zs=new k,dr=new k,pr=new k,Ci=new k;function Da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Mf=new Vi,Fs=new k,Ua=new k,Ys=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);let t=Fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Ua)),this.expandByPoint(Fs.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new k,Na=new k,mr=new k,fi=new k,za=new k,gr=new k,Fa=new k,Ko=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Na.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Na);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=fi.dot(this.direction),c=-fi.dot(mr),l=fi.lengthSq(),h=Math.abs(1-a*a),u,f,d,x;if(h>0)if(u=a*c-o,f=a*o-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Na).addScaledVector(mr,f),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){za.subVectors(t,e),gr.subVectors(n,e),Fa.crossVectors(za,gr);let a=this.direction.dot(Fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let c=o*this.direction.dot(gr.crossVectors(fi,gr));if(c<0)return null;let l=o*this.direction.dot(za.cross(fi));if(l<0||c+l>a)return null;let h=-o*fi.dot(Fa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,d,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,d,x,_,g)}set(e,t,n,s,r,a,o,c,l,h,u,f,d,x,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=x+d*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,x=l*h,_=l*u;t[0]=f+_*o,t[4]=x*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,x=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,d=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*c,d=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sf,e,Ef)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),xr.crossVectors(pn,ui),s[0]=ui.x,s[4]=xr.x,s[8]=pn.x,s[1]=ui.y,s[5]=xr.y,s[9]=pn.y,s[2]=ui.z,s[6]=xr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],g=n[10],m=n[14],C=n[3],w=n[7],b=n[11],z=n[15],L=s[0],D=s[4],U=s[8],T=s[12],M=s[1],P=s[5],K=s[9],X=s[13],q=s[2],ce=s[6],j=s[10],ue=s[14],Q=s[3],re=s[7],fe=s[11],ye=s[15];return r[0]=a*L+o*M+c*q+l*Q,r[4]=a*D+o*P+c*ce+l*re,r[8]=a*U+o*K+c*j+l*fe,r[12]=a*T+o*X+c*ue+l*ye,r[1]=h*L+u*M+f*q+d*Q,r[5]=h*D+u*P+f*ce+d*re,r[9]=h*U+u*K+f*j+d*fe,r[13]=h*T+u*X+f*ue+d*ye,r[2]=x*L+_*M+g*q+m*Q,r[6]=x*D+_*P+g*ce+m*re,r[10]=x*U+_*K+g*j+m*fe,r[14]=x*T+_*X+g*ue+m*ye,r[3]=C*L+w*M+b*q+z*Q,r[7]=C*D+w*P+b*ce+z*re,r[11]=C*U+w*K+b*j+z*fe,r[15]=C*T+w*X+b*ue+z*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],_=e[7],g=e[11],m=e[15];return x*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+t*c*d-t*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+g*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+m*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],_=e[13],g=e[14],m=e[15],C=u*g*l-_*f*l+_*c*d-o*g*d-u*c*m+o*f*m,w=x*f*l-h*g*l-x*c*d+a*g*d+h*c*m-a*f*m,b=h*_*l-x*u*l+x*o*d-a*_*d-h*o*m+a*u*m,z=x*u*c-h*_*c-x*o*f+a*_*f+h*o*g-a*u*g,L=t*C+n*w+s*b+r*z;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return e[0]=C*D,e[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*m-n*f*m)*D,e[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*m+n*c*m)*D,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*D,e[4]=w*D,e[5]=(h*g*r-x*f*r+x*s*d-t*g*d-h*s*m+t*f*m)*D,e[6]=(x*c*r-a*g*r-x*s*l+t*g*l+a*s*m-t*c*m)*D,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*d+t*c*d)*D,e[8]=b*D,e[9]=(x*u*r-h*_*r-x*n*d+t*_*d+h*n*m-t*u*m)*D,e[10]=(a*_*r-x*o*r+x*n*l-t*_*l-a*n*m+t*o*m)*D,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*D,e[12]=z*D,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*g+t*u*g)*D,e[14]=(x*o*s-a*_*s-x*n*c+t*_*c+a*n*g-t*o*g)*D,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,x=r*u,_=a*h,g=a*u,m=o*u,C=c*l,w=c*h,b=c*u,z=n.x,L=n.y,D=n.z;return s[0]=(1-(_+m))*z,s[1]=(d+b)*z,s[2]=(x-w)*z,s[3]=0,s[4]=(d-b)*L,s[5]=(1-(f+m))*L,s[6]=(g+C)*L,s[7]=0,s[8]=(x+w)*D,s[9]=(g-C)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let l=1/r,h=1/a,u=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$n){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(o===$n)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Hr)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$n){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,d=(n+s)*h,x,_;if(o===$n)x=(a+r)*u,_=-2*u;else if(o===Hr)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},as=new k,Cn=new wt,Sf=new k(0,0,0),Ef=new k(1,1,1),ui=new k,xr=new k,pn=new k,sl=new wt,rl=new bi,ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wf=0,al=new k,os=new bi,Wn=new wt,vr=new k,Os=new k,Tf=new k,Af=new bi,ol=new k(1,0,0),cl=new k(0,1,0),ll=new k(0,0,1),hl={type:"added"},Rf={type:"removed"},cs={type:"childadded",child:null},Oa={type:"childremoved",child:null},en=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new ei,n=new bi,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new tt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Os,vr,this.up):Wn.lookAt(vr,Os,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Wn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new k,Xn=new k,ka=new k,qn=new k,ls=new k,hs=new k,fl=new k,Ba=new k,Va=new k,Ha=new k,Ga=new Et,Wa=new Et,Xa=new Et,zi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){In.subVectors(s,t),Xn.subVectors(n,t),ka.subVectors(e,t);let a=In.dot(In),o=In.dot(Xn),c=In.dot(ka),l=Xn.dot(Xn),h=Xn.dot(ka),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,x=(a*h-o*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ga,r.x),a.addScaledVector(Wa,r.y),a.addScaledVector(Xa,r.z),a}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),Xn.subVectors(e,t),In.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),In.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),hs.subVectors(r,n),Ba.subVectors(e,n);let c=ls.dot(Ba),l=hs.dot(Ba);if(c<=0&&l<=0)return t.copy(n);Va.subVectors(e,s);let h=ls.dot(Va),u=hs.dot(Va);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ls,a);Ha.subVectors(e,r);let d=ls.dot(Ha),x=hs.dot(Ha);if(x>=0&&d<=x)return t.copy(r);let _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(hs,o);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(fl,o);let m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(ls,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},_r={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ft=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=mf(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=yn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){let n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ut.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Zt(Yt.r*255,0,255))*65536+Math.round(Zt(Yt.g*255,0,255))*256+Math.round(Zt(Yt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=yn){ut.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(_r);let n=Ca(di.h,_r.h,t),s=Ca(di.s,_r.s,t),r=Ca(di.l,_r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ft;ft.NAMES=ch;var Cf=0,Hi=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Cs(),this.name="",this.blending=xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tn=class extends Hi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new k,yr=new Ae,Mn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var Yr=class extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zr=class extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},If=0,_n=new wt,Ya=new en,fs=new k,mn=new Vi,ks=new Vi,Ft=new k,Sn=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?Zr:Yr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(mn.min,ks.min),mn.expandByPoint(Ft),Ft.addVectors(mn.max,ks.max),mn.expandByPoint(Ft)):(mn.expandByPoint(ks.min),mn.expandByPoint(ks.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(e,l),Ft.add(fs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new k,c[U]=new k;let l=new k,h=new k,u=new k,f=new Ae,d=new Ae,x=new Ae,_=new k,g=new k;function m(U,T,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,T),x.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),o[U].add(_),o[T].add(_),o[M].add(_),c[U].add(g),c[T].add(g),c[M].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let U=0,T=C.length;U<T;++U){let M=C[U],P=M.start,K=M.count;for(let X=P,q=P+K;X<q;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let w=new k,b=new k,z=new k,L=new k;function D(U){z.fromBufferAttribute(s,U),L.copy(z);let T=o[U];w.copy(T),w.sub(z.multiplyScalar(z.dot(T))).normalize(),b.crossVectors(L,T);let P=b.dot(c[U])<0?-1:1;a.setXYZW(U,w.x,w.y,w.z,P)}for(let U=0,T=C.length;U<T;++U){let M=C[U],P=M.start,K=M.count;for(let X=P,q=P+K;X<q;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,h=new k,u=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let m=0;m<h;m++)f[x++]=l[d++]}return new Mn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=new wt,Ii=new Ko,br=new Ys,dl=new k,Mr=new k,Sr=new k,Er=new k,Za=new k,wr=new k,pl=new k,Tr=new k,$e=class extends en{constructor(e=new Sn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Za.fromBufferAttribute(u,e),a?wr.addScaledVector(Za,h):wr.addScaledVector(Za.sub(t),h))}t.add(wr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(br.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(br,dl)===null||Ii.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let g=f[x],m=a[g.materialIndex],C=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=C,z=w;b<z;b+=3){let L=o.getX(b),D=o.getX(b+1),U=o.getX(b+2);s=Ar(this,m,e,n,l,h,u,L,D,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=x,m=_;g<m;g+=3){let C=o.getX(g),w=o.getX(g+1),b=o.getX(g+2);s=Ar(this,a,e,n,l,h,u,C,w,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let g=f[x],m=a[g.materialIndex],C=Math.max(g.start,d.start),w=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let b=C,z=w;b<z;b+=3){let L=b,D=b+1,U=b+2;s=Ar(this,m,e,n,l,h,u,L,D,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=x,m=_;g<m;g+=3){let C=g,w=g+1,b=g+2;s=Ar(this,a,e,n,l,h,u,C,w,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pf(i,e,t,n,s,r,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Tr);return l<t.near||l>t.far?null:{distance:l,point:Tr.clone(),object:i}}function Ar(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Mr),i.getVertexPosition(c,Sr),i.getVertexPosition(l,Er);let h=Pf(i,e,t,n,Mr,Sr,Er,pl);if(h){let u=new k;zi.getBarycoord(pl,Mr,Sr,Er,u),s&&(h.uv=zi.getInterpolatedAttribute(s,o,c,l,u,new Ae)),r&&(h.uv1=zi.getInterpolatedAttribute(r,o,c,l,u,new Ae)),a&&(h.normal=zi.getInterpolatedAttribute(a,o,c,l,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new k,materialIndex:0};zi.getNormal(Mr,Sr,Er,f.normal),h.face=f,h.barycoord=u}return h}var En=class i extends Sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function x(_,g,m,C,w,b,z,L,D,U,T){let M=b/D,P=z/U,K=b/2,X=z/2,q=L/2,ce=D+1,j=U+1,ue=0,Q=0,re=new k;for(let fe=0;fe<j;fe++){let ye=fe*P-X;for(let Ye=0;Ye<ce;Ye++){let ht=Ye*M-K;re[_]=ht*C,re[g]=ye*w,re[m]=q,l.push(re.x,re.y,re.z),re[_]=0,re[g]=0,re[m]=L>0?1:-1,h.push(re.x,re.y,re.z),u.push(Ye/D),u.push(1-fe/U),ue+=1}}for(let fe=0;fe<U;fe++)for(let ye=0;ye<D;ye++){let Ye=f+ye+ce*fe,ht=f+ye+ce*(fe+1),oe=f+(ye+1)+ce*(fe+1),me=f+(ye+1)+ce*fe;c.push(Ye,ht,me),c.push(ht,oe,me),Q+=6}o.addGroup(d,Q,T),d+=Q,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ts(i[t]);for(let s in n)e[s]=n[s]}return e}function Lf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Df={clone:Ts,merge:Kt},Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Hi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Jr=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new k,ml=new Ae,gl=new Ae,jt=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=-90,ds=1,jo=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(us,ds,e,t);s.layers=this.layers,this.add(s);let r=new jt(us,ds,e,t);r.layers=this.layers,this.add(r);let a=new jt(us,ds,e,t);a.layers=this.layers,this.add(a);let o=new jt(us,ds,e,t);o.layers=this.layers,this.add(o);let c=new jt(us,ds,e,t);c.layers=this.layers,this.add(c);let l=new jt(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},$r=class extends gn{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $r(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:xi});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=zn),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ja=new k,zf=new k,Ff=new tt,Zn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ja.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ff.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new Ys,Rr=new k,Zs=class{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],_=s[10],g=s[11],m=s[12],C=s[13],w=s[14],b=s[15];if(n[0].setComponents(c-r,f-l,g-d,b-m).normalize(),n[1].setComponents(c+r,f+l,g+d,b+m).normalize(),n[2].setComponents(c+a,f+h,g+x,b+C).normalize(),n[3].setComponents(c-a,f-h,g-x,b-C).normalize(),n[4].setComponents(c-o,f-u,g-_,b-w).normalize(),t===$n)n[5].setComponents(c+o,f+u,g+_,b+w).normalize();else if(t===Hr)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Of(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Kr=class i extends Sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,d=[],x=[],_=[],g=[];for(let m=0;m<h;m++){let C=m*f-a;for(let w=0;w<l;w++){let b=w*u-r;x.push(b,-C,0),_.push(0,0,1),g.push(w/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let C=0;C<o;C++){let w=C+l*m,b=C+l*(m+1),z=C+1+l*(m+1),L=C+1+l*m;d.push(w,b,L),d.push(b,z,L)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cu=`#define PI 3.141592653589793
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
} // validated`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
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
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zu=`PhysicalMaterial material;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,Ou=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zu=`#if defined( USE_POINTS_UV )
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
#endif`,Ju=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kd=`uniform sampler2D t2D;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
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
}`,Xd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,jd=`#include <common>
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
}`,Qd=`uniform vec3 diffuse;
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,np=`#define MATCAP
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
}`,ip=`#define MATCAP
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
}`,sp=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,op=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,fp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 color;
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
}`,gp=`uniform float rotation;
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
}`,xp=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:kf,alphahash_pars_fragment:Bf,alphamap_fragment:Vf,alphamap_pars_fragment:Hf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:$f,bsdfs:Kf,iridescence_fragment:jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:eu,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:au,color_vertex:ou,common:cu,cube_uv_reflection_fragment:lu,defaultnormal_vertex:hu,displacementmap_pars_vertex:fu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:xu,envmap_common_pars_fragment:vu,envmap_pars_fragment:_u,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Pu,envmap_vertex:bu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:Eu,fog_pars_fragment:wu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:Au,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Cu,lights_pars_begin:Iu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Du,lights_phong_fragment:Uu,lights_phong_pars_fragment:Nu,lights_physical_fragment:zu,lights_physical_pars_fragment:Fu,lights_fragment_begin:Ou,lights_fragment_maps:ku,lights_fragment_end:Bu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:Zu,metalnessmap_fragment:Ju,metalnessmap_pars_fragment:$u,morphinstance_vertex:Ku,morphcolor_vertex:ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:hd,iridescence_pars_fragment:fd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:xd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:bd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:Ed,skinning_pars_vertex:wd,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:Rd,specularmap_pars_fragment:Cd,tonemapping_fragment:Id,tonemapping_pars_fragment:Pd,transmission_fragment:Ld,transmission_pars_fragment:Dd,uv_pars_fragment:Ud,uv_pars_vertex:Nd,uv_vertex:zd,worldpos_vertex:Fd,background_vert:Od,background_frag:kd,backgroundCube_vert:Bd,backgroundCube_frag:Vd,cube_vert:Hd,cube_frag:Gd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:Zd,equirect_frag:Jd,linedashed_vert:$d,linedashed_frag:Kd,meshbasic_vert:jd,meshbasic_frag:Qd,meshlambert_vert:ep,meshlambert_frag:tp,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:sp,meshnormal_frag:rp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:cp,meshphysical_frag:lp,meshtoon_vert:hp,meshtoon_frag:fp,points_vert:up,points_frag:dp,shadow_vert:pp,shadow_frag:mp,sprite_vert:gp,sprite_frag:xp},Te={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Nn={basic:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Kt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Kt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Kt([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Kt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Kt([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Kt([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Kt([Te.common,Te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Kt([Te.lights,Te.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Nn.physical={uniforms:Kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Cr={r:0,b:0,g:0},Li=new ei,vp=new wt;function _p(i,e,t,n,s,r,a){let o=new ft(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?t:e).get(w)),w}function _(C){let w=!1,b=x(C);b===null?m(o,c):b&&b.isColor&&(m(b,1),w=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(C,w){let b=x(w);b&&(b.isCubeTexture||b.mapping===ga)?(h===void 0&&(h=new $e(new En(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ts(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(w.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vp.makeRotationFromEuler(Li)),h.material.toneMapped=ut.getTransfer(b.colorSpace)!==gt,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new $e(new Kr(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ts(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ut.getTransfer(b.colorSpace)!==gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function m(C,w){C.getRGB(Cr,lh(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(C,w=1){o.set(C),c=w,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,m(o,c)},render:_,addToRenderList:g}}function yp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,P,K,X,q){let ce=!1,j=u(X,K,P);r!==j&&(r=j,l(r.object)),ce=d(M,X,K,q),ce&&x(M,X,K,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,b(M,P,K,X),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,K){let X=K.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let ce=q[P.id];ce===void 0&&(ce={},q[P.id]=ce);let j=ce[X];return j===void 0&&(j=f(c()),ce[X]=j),j}function f(M){let P=[],K=[],X=[];for(let q=0;q<t;q++)P[q]=0,K[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:K,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,P,K,X){let q=r.attributes,ce=P.attributes,j=0,ue=K.getAttributes();for(let Q in ue)if(ue[Q].location>=0){let fe=q[Q],ye=ce[Q];if(ye===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),fe===void 0||fe.attribute!==ye||ye&&fe.data!==ye.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function x(M,P,K,X){let q={},ce=P.attributes,j=0,ue=K.getAttributes();for(let Q in ue)if(ue[Q].location>=0){let fe=ce[Q];fe===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));let ye={};ye.attribute=fe,fe&&fe.data&&(ye.data=fe.data),q[Q]=ye,j++}r.attributes=q,r.attributesNum=j,r.index=X}function _(){let M=r.newAttributes;for(let P=0,K=M.length;P<K;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){let K=r.newAttributes,X=r.enabledAttributes,q=r.attributeDivisors;K[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),q[M]!==P&&(i.vertexAttribDivisor(M,P),q[M]=P)}function C(){let M=r.newAttributes,P=r.enabledAttributes;for(let K=0,X=P.length;K<X;K++)P[K]!==M[K]&&(i.disableVertexAttribArray(K),P[K]=0)}function w(M,P,K,X,q,ce,j){j===!0?i.vertexAttribIPointer(M,P,K,q,ce):i.vertexAttribPointer(M,P,K,X,q,ce)}function b(M,P,K,X){_();let q=X.attributes,ce=K.getAttributes(),j=P.defaultAttributeValues;for(let ue in ce){let Q=ce[ue];if(Q.location>=0){let re=q[ue];if(re===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let fe=re.normalized,ye=re.itemSize,Ye=e.get(re);if(Ye===void 0)continue;let ht=Ye.buffer,oe=Ye.type,me=Ye.bytesPerElement,$=oe===i.INT||oe===i.UNSIGNED_INT||re.gpuType===Cc;if(re.isInterleavedBufferAttribute){let se=re.data,Fe=se.stride,Ze=re.offset;if(se.isInstancedInterleavedBuffer){for(let We=0;We<Q.locationSize;We++)m(Q.location+We,se.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let We=0;We<Q.locationSize;We++)g(Q.location+We);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let We=0;We<Q.locationSize;We++)w(Q.location+We,ye/Q.locationSize,oe,fe,Fe*me,(Ze+ye/Q.locationSize*We)*me,$)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)m(Q.location+se,re.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<Q.locationSize;se++)g(Q.location+se);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let se=0;se<Q.locationSize;se++)w(Q.location+se,ye/Q.locationSize,oe,fe,ye*me,ye/Q.locationSize*se*me,$)}}else if(j!==void 0){let fe=j[ue];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(Q.location,fe);break;case 3:i.vertexAttrib3fv(Q.location,fe);break;case 4:i.vertexAttrib4fv(Q.location,fe);break;default:i.vertexAttrib1fv(Q.location,fe)}}}}C()}function z(){U();for(let M in n){let P=n[M];for(let K in P){let X=P[K];for(let q in X)h(X[q].object),delete X[q];delete P[K]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let K in P){let X=P[K];for(let q in X)h(X[q].object),delete X[q];delete P[K]}delete n[M.id]}function D(M){for(let P in n){let K=n[P];if(K[M.id]===void 0)continue;let X=K[M.id];for(let q in X)h(X[q].object),delete X[q];delete K[M.id]}}function U(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:C}}function bp(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)a(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Pn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let U=D===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Jn&&!U)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:z,maxSamples:L}}function Sp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zn,o=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let C=r?0:n,w=C*4,b=m.clippingState||null;c.value=b,b=h(x,f,w,d);for(let z=0;z!==w;++z)b[z]=t[z];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,x!==!0||g===null){let m=d+_*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,b=d;w!==_;++w,b+=4)a.copy(u[w]).applyMatrix4(C,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ep(i){let e=new WeakMap;function t(a,o){return o===go?a.mapping=Ms:o===xo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===go||o===xo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Qo(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var jr=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ms=4,xl=[.125,.215,.35,.446,.526,.582],Fi=20,$a=new jr,vl=new ft,Ka=null,ja=0,Qa=0,eo=!1,Ui=(1+Math.sqrt(5))/2,ps=1/Ui,_l=[new k(-Ui,ps,0),new k(Ui,ps,0),new k(-ps,0,Ui),new k(ps,0,Ui),new k(0,Ui,-ps),new k(0,Ui,ps),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,ja,Qa),this._renderer.xr.enabled=eo,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:nr,format:Pn,colorSpace:Rs,depthBuffer:!1},s=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(r)),this._blurMaterial=Tp(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,s){let o=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vl),h.toneMapping=vi,h.autoClear=!1;let d=new tn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),x=new $e(new En,d),_=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(vl),_=!0);for(let m=0;m<6;m++){let C=m%3;C===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):C===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let w=this._cubeSize;Ir(s,C*w,m>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ms||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_l[(s-r-1)%_l.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $e(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);let m=[],C=0;for(let D=0;D<Fi;++D){let U=D/_,T=Math.exp(-U*U/2);m.push(T),D===0?C+=T:D<g&&(C+=2*T)}for(let D=0;D<m.length;D++)m[D]=m[D]/C;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-n;let b=this._sizeLods[s],z=3*b*(s>w-ms?s-w+ms:0),L=4*(this._cubeSize-b);Ir(t,z,L,3*b,2*b),c.setRenderTarget(t),c.render(u,$a)}};function wp(i){let e=[],t=[],n=[],s=i,r=i-ms+1+xl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ms?c=xl[a-i+ms-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,g=2,m=1,C=new Float32Array(_*x*d),w=new Float32Array(g*x*d),b=new Float32Array(m*x*d);for(let L=0;L<d;L++){let D=L%3*2/3-1,U=L>2?0:-1,T=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];C.set(T,_*x*L),w.set(f,g*x*L);let M=[L,L,L,L,L,L];b.set(M,m*x*L)}let z=new Sn;z.setAttribute("position",new Mn(C,_)),z.setAttribute("uv",new Mn(w,g)),z.setAttribute("faceIndex",new Mn(b,m)),e.push(z),s>ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yl(i,e,t){let n=new Qn(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){let n=new Float32Array(Fi),s=new k(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function bl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ml(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function Ap(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===go||c===xo,h=c===Ms||c===Ss;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Qr(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Qr(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cp(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let g=0,m=_.length;g<m;g++)e.update(_[g],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let C=d.array;_=d.version;for(let w=0,b=C.length;w<b;w+=3){let z=C[w+0],L=C[w+1],D=C[w+2];f.push(z,L,L,D,D,z)}}else if(x!==void 0){let C=x.array;_=x.version;for(let w=0,b=C.length/3-1;w<b;w+=3){let z=w+0,L=w+1,D=w+2;f.push(z,L,L,D,D,z)}}else return;let g=new(oh(f)?Zr:Yr)(f,1);g.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ip(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*a,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let m=0;m<x;m++)g+=d[m];t.update(g,n,1)}function u(f,d,x,_){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let m=0;for(let C=0;C<x;C++)m+=d[C]*_[C];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lp(i,e,t){let n=new WeakMap,s=new Et;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let T=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],w=0;d===!0&&(w=1),x===!0&&(w=2),_===!0&&(w=3);let b=o.attributes.position.count*w,z=1;b>e.maxTextureSize&&(z=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let L=new Float32Array(b*z*4*u),D=new Xr(L,b,z,u);D.type=Jn,D.needsUpdate=!0;let U=w*4;for(let M=0;M<u;M++){let P=g[M],K=m[M],X=C[M],q=b*z*4*M;for(let ce=0;ce<P.count;ce++){let j=ce*U;d===!0&&(s.fromBufferAttribute(P,ce),L[q+j+0]=s.x,L[q+j+1]=s.y,L[q+j+2]=s.z,L[q+j+3]=0),x===!0&&(s.fromBufferAttribute(K,ce),L[q+j+4]=s.x,L[q+j+5]=s.y,L[q+j+6]=s.z,L[q+j+7]=0),_===!0&&(s.fromBufferAttribute(X,ce),L[q+j+8]=s.x,L[q+j+9]=s.y,L[q+j+10]=s.z,L[q+j+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new Ae(b,z)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let x=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Dp(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var ea=class extends gn{constructor(e,t,n,s,r,a,o,c,l,h=vs){if(h!==vs&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Bi),n===void 0&&h===ws&&(n=Es),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fh=new gn,Sl=new ea(1,1),uh=new Xr,dh=new $o,ph=new $r,El=[],wl=[],Tl=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function Is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _a(i,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Up(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Op(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Lt(t,n)}}function kp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Al.set(n),i.uniformMatrix3fv(this.addr,!1,Al),Lt(t,n)}}function Bp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),Lt(t,n)}}function Vp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Xp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function Yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function Jp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=ah,r=Sl):r=fh,t.setTexture2D(e||r,s)}function $p(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dh,s)}function Kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ph,s)}function jp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uh,s)}function Qp(i){switch(i){case 5126:return Up;case 35664:return Np;case 35665:return zp;case 35666:return Fp;case 35674:return Op;case 35675:return kp;case 35676:return Bp;case 5124:case 35670:return Vp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return jp}}function em(i,e){i.uniform1fv(this.addr,e)}function tm(i,e){let t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function nm(i,e){let t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function im(i,e){let t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function sm(i,e){let t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rm(i,e){let t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function am(i,e){let t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function om(i,e){i.uniform1iv(this.addr,e)}function cm(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function hm(i,e){i.uniform4iv(this.addr,e)}function fm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function dm(i,e){i.uniform3uiv(this.addr,e)}function pm(i,e){i.uniform4uiv(this.addr,e)}function mm(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||fh,r[a])}function gm(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dh,r[a])}function xm(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ph,r[a])}function vm(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uh,r[a])}function _m(i){switch(i){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return cm;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return fm;case 36294:return um;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return vm}}var ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qp(t.type)}},tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_m(t.type)}},nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},to=/(\w+)(\])?(\[|\.)?/g;function Cl(i,e){i.seq.push(e),i.map[e.id]=e}function ym(i,e,t){let n=i.name,s=n.length;for(to.lastIndex=0;;){let r=to.exec(n),a=to.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cl(t,l===void 0?new ec(o,i,e):new tc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new nc(o),Cl(t,u)),t=u}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ym(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Il(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bm=37297,Mm=0;function Sm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pl=new tt;function Em(i){ut._getMatrix(Pl,ut.workingColorSpace,i);let e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case va:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ll(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sm(i.getShaderSource(e),a)}else return s}function wm(i,e){let t=Em(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tm(i,e){let t;switch(e){case $h:t="Linear";break;case Kh:t="Reinhard";break;case jh:t="Cineon";break;case Qh:t="ACESFilmic";break;case tf:t="AgX";break;case nf:t="Neutral";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pr=new k;function Am(){ut.getLuminanceCoefficients(Pr);let i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Cm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Vs(i){return i!==""}function Dl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(Pm,Dm)}var Lm=new Map;function Dm(i,e){let t=st[e];if(t===void 0){let n=Lm.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}var Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(Um,Nm)}function Nm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Om(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function km(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zh:e="ENVMAP_BLENDING_MIX";break;case Jh:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zm(t),l=Fm(t),h=Om(t),u=km(t),f=Bm(t),d=Rm(t),x=Cm(r),_=s.createProgram(),g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(g=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?st.tonemapping_pars_fragment:"",t.toneMapping!==vi?Tm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,wm("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=ic(a),a=Dl(a,t),a=Ul(a,t),o=ic(o),o=Dl(o,t),o=Ul(o,t),a=Nl(a),o=Nl(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=C+g+a,b=C+m+o,z=Il(s,s.VERTEX_SHADER,w),L=Il(s,s.FRAGMENT_SHADER,b);s.attachShader(_,z),s.attachShader(_,L),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(P){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(z).trim(),q=s.getShaderInfoLog(L).trim(),ce=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,z,L);else{let ue=Ll(s,z,"vertex"),Q=Ll(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+ue+`
`+Q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||q==="")&&(j=!1);j&&(P.diagnostics={runnable:ce,programLog:K,vertexShader:{log:X,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(z),s.deleteShader(L),U=new ys(s,_),T=Im(s,_)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=z,this.fragmentShader=L,this}var Hm=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rc(e),t.set(e,n)),n}},rc=class{constructor(e){this.id=Hm++,this.code=e,this.usedTimes=0}};function Gm(i,e,t,n,s,r,a){let o=new qr,c=new sc,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,M,P,K,X){let q=K.fog,ce=X.geometry,j=T.isMeshStandardMaterial?K.environment:null,ue=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),Q=ue&&ue.mapping===ga?ue.image.height:null,re=x[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let fe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ye=fe!==void 0?fe.length:0,Ye=0;ce.morphAttributes.position!==void 0&&(Ye=1),ce.morphAttributes.normal!==void 0&&(Ye=2),ce.morphAttributes.color!==void 0&&(Ye=3);let ht,oe,me,$;if(re){let et=Nn[re];ht=et.vertexShader,oe=et.fragmentShader}else ht=T.vertexShader,oe=T.fragmentShader,c.update(T),me=c.getVertexShaderID(T),$=c.getFragmentShaderID(T);let se=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Ze=X.isInstancedMesh===!0,We=X.isBatchedMesh===!0,ct=!!T.map,he=!!T.matcap,xe=!!ue,I=!!T.aoMap,be=!!T.lightMap,G=!!T.bumpMap,F=!!T.normalMap,ve=!!T.displacementMap,Xe=!!T.emissiveMap,Ie=!!T.metalnessMap,A=!!T.roughnessMap,v=T.anisotropy>0,W=T.clearcoat>0,ae=T.dispersion>0,de=T.iridescence>0,ne=T.sheen>0,ze=T.transmission>0,we=v&&!!T.anisotropyMap,Pe=W&&!!T.clearcoatMap,it=W&&!!T.clearcoatNormalMap,ge=W&&!!T.clearcoatRoughnessMap,De=de&&!!T.iridescenceMap,Ge=de&&!!T.iridescenceThicknessMap,Je=ne&&!!T.sheenColorMap,Le=ne&&!!T.sheenRoughnessMap,rt=!!T.specularMap,Qe=!!T.specularColorMap,pt=!!T.specularIntensityMap,N=ze&&!!T.transmissionMap,Me=ze&&!!T.thicknessMap,te=!!T.gradientMap,le=!!T.alphaMap,Ee=T.alphaTest>0,Re=!!T.alphaHash,Ke=!!T.extensions,mt=vi;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(mt=i.toneMapping);let At={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:ht,fragmentShader:oe,defines:T.defines,customVertexShaderID:me,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:We,batchingColor:We&&X._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&X.instanceColor!==null,instancingMorph:Ze&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Rs,alphaToCoverage:!!T.alphaToCoverage,map:ct,matcap:he,envMap:xe,envMapMode:xe&&ue.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:be,bumpMap:G,normalMap:F,displacementMap:f&&ve,emissiveMap:Xe,normalMapObjectSpace:F&&T.normalMapType===of,normalMapTangentSpace:F&&T.normalMapType===rh,metalnessMap:Ie,roughnessMap:A,anisotropy:v,anisotropyMap:we,clearcoat:W,clearcoatMap:Pe,clearcoatNormalMap:it,clearcoatRoughnessMap:ge,dispersion:ae,iridescence:de,iridescenceMap:De,iridescenceThicknessMap:Ge,sheen:ne,sheenColorMap:Je,sheenRoughnessMap:Le,specularMap:rt,specularColorMap:Qe,specularIntensityMap:pt,transmission:ze,transmissionMap:N,thicknessMap:Me,gradientMap:te,opaque:T.transparent===!1&&T.blending===xs&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:Ee,alphaHash:Re,combine:T.combine,mapUv:ct&&_(T.map.channel),aoMapUv:I&&_(T.aoMap.channel),lightMapUv:be&&_(T.lightMap.channel),bumpMapUv:G&&_(T.bumpMap.channel),normalMapUv:F&&_(T.normalMap.channel),displacementMapUv:ve&&_(T.displacementMap.channel),emissiveMapUv:Xe&&_(T.emissiveMap.channel),metalnessMapUv:Ie&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:we&&_(T.anisotropyMap.channel),clearcoatMapUv:Pe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(T.sheenRoughnessMap.channel),specularMapUv:rt&&_(T.specularMap.channel),specularColorMapUv:Qe&&_(T.specularColorMap.channel),specularIntensityMapUv:pt&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:Me&&_(T.thicknessMap.channel),alphaMapUv:le&&_(T.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(F||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ce.attributes.uv&&(ct||le),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:X.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:ct&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===gt,decodeVideoTextureEmissive:Xe&&T.emissiveMap.isVideoTexture===!0&&ut.getTransfer(T.emissiveMap.colorSpace)===gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bn,flipSided:T.side===Bt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&T.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(T){let M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(C(M,T),w(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function C(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function w(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){let M=x[T.type],P;if(M){let K=Nn[M];P=Df.clone(K.uniforms)}else P=T.uniforms;return P}function z(T,M){let P;for(let K=0,X=h.length;K<X;K++){let q=h[K];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Vm(i,M,T,r),h.push(P)),P}function L(T){if(--T.usedTimes===0){let M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function D(T){c.remove(T)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:z,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:U}}function Wm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ol(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,d,x,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,f,d,x,_,g){let m=a(u,f,d,x,_,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,x,_,g){let m=a(u,f,d,x,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||Xm),n.length>1&&n.sort(f||Fl),s.length>1&&s.sort(f||Fl)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function qm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ol,i.set(n,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ft};break;case"SpotLight":t={position:new k,direction:new k,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Zm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jm=0;function $m(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Km(i){let e=new Ym,t=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new wt,a=new wt;function o(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,x=0,_=0,g=0,m=0,C=0,w=0,b=0,z=0,L=0,D=0;l.sort($m);for(let T=0,M=l.length;T<M;T++){let P=l[T],K=P.color,X=P.intensity,q=P.distance,ce=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=K.r*X,u+=K.g*X,f+=K.b*X;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],X);D++}else if(P.isDirectionalLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ue=P.shadow,Q=t.get(P);Q.shadowIntensity=ue.intensity,Q.shadowBias=ue.bias,Q.shadowNormalBias=ue.normalBias,Q.shadowRadius=ue.radius,Q.shadowMapSize=ue.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=ce,n.directionalShadowMatrix[d]=P.shadow.matrix,C++}n.directional[d]=j,d++}else if(P.isSpotLight){let j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(K).multiplyScalar(X),j.distance=q,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[_]=j;let ue=P.shadow;if(P.map&&(n.spotLightMap[z]=P.map,z++,ue.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[_]=ue.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=ue.intensity,Q.shadowBias=ue.bias,Q.shadowNormalBias=ue.normalBias,Q.shadowRadius=ue.radius,Q.shadowMapSize=ue.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=ce,b++}_++}else if(P.isRectAreaLight){let j=e.get(P);j.color.copy(K).multiplyScalar(X),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=j,g++}else if(P.isPointLight){let j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let ue=P.shadow,Q=t.get(P);Q.shadowIntensity=ue.intensity,Q.shadowBias=ue.bias,Q.shadowNormalBias=ue.normalBias,Q.shadowRadius=ue.radius,Q.shadowMapSize=ue.mapSize,Q.shadowCameraNear=ue.camera.near,Q.shadowCameraFar=ue.camera.far,n.pointShadow[x]=Q,n.pointShadowMap[x]=ce,n.pointShadowMatrix[x]=P.shadow.matrix,w++}n.point[x]=j,x++}else if(P.isHemisphereLight){let j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(X),j.groundColor.copy(P.groundColor).multiplyScalar(X),n.hemi[m]=j,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==d||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==C||U.numPointShadows!==w||U.numSpotShadows!==b||U.numSpotMaps!==z||U.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+z-L,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,U.directionalLength=d,U.pointLength=x,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=C,U.numPointShadows=w,U.numSpotShadows=b,U.numSpotMaps=z,U.numLightProbes=D,n.version=Jm++)}function c(l,h){let u=0,f=0,d=0,x=0,_=0,g=h.matrixWorldInverse;for(let m=0,C=l.length;m<C;m++){let w=l[m];if(w.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(w.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(w.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(w.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function kl(i){let e=new Km(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jm(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kl(i),e.set(s,[o])):r>=a.length?(o=new kl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ac=class extends Hi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(i,e,t){let n=new Zs,s=new Ae,r=new Ae,a=new Et,o=new ac({depthPacking:af}),c=new oc,l={},h=t.maxTextureSize,u={[_i]:Bt,[Bt]:_i,[bn]:bn},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Qm,fragmentShader:e0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new Sn;x.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let m=this.type;this.render=function(L,D,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let T=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),K=i.state;K.setBlending(xi),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let X=m!==Yn&&this.type===Yn,q=m===Yn&&this.type!==Yn;for(let ce=0,j=L.length;ce<j;ce++){let ue=L[ce],Q=ue.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let re=Q.getFrameExtents();if(s.multiply(re),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,Q.mapSize.y=r.y)),Q.map===null||X===!0||q===!0){let ye=this.type!==Yn?{minFilter:Qt,magFilter:Qt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Qn(s.x,s.y,ye),Q.map.texture.name=ue.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let fe=Q.getViewportCount();for(let ye=0;ye<fe;ye++){let Ye=Q.getViewport(ye);a.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),K.viewport(a),Q.updateMatrices(ue,ye),n=Q.getFrustum(),b(D,U,Q.camera,ue,this.type)}Q.isPointLightShadow!==!0&&this.type===Yn&&C(Q,U),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,M,P)};function C(L,D){let U=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qn(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,U,f,_,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,U,d,_,null)}function w(L,D,U,T){let M=null,P=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)M=P;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let K=M.uuid,X=D.uuid,q=l[K];q===void 0&&(q={},l[K]=q);let ce=q[X];ce===void 0&&(ce=M.clone(),q[X]=ce,D.addEventListener("dispose",z)),M=ce}if(M.visible=D.visible,M.wireframe=D.wireframe,T===Yn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let K=i.properties.get(M);K.light=U}return M}function b(L,D,U,T,M){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Yn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);let X=e.update(L),q=L.material;if(Array.isArray(q)){let ce=X.groups;for(let j=0,ue=ce.length;j<ue;j++){let Q=ce[j],re=q[Q.materialIndex];if(re&&re.visible){let fe=w(L,re,T,M);L.onBeforeShadow(i,L,D,U,X,fe,Q),i.renderBufferDirect(U,null,X,fe,L,Q),L.onAfterShadow(i,L,D,U,X,fe,Q)}}}else if(q.visible){let ce=w(L,q,T,M);L.onBeforeShadow(i,L,D,U,X,ce,null),i.renderBufferDirect(U,null,X,ce,L,null),L.onAfterShadow(i,L,D,U,X,ce,null)}}let K=L.children;for(let X=0,q=K.length;X<q;X++)b(K[X],D,U,T,M)}function z(L){L.target.removeEventListener("dispose",z);for(let U in l){let T=l[U],M=L.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}var n0={[co]:lo,[ho]:po,[fo]:mo,[bs]:uo,[lo]:co,[po]:ho,[mo]:fo,[uo]:bs};function i0(i,e){function t(){let N=!1,Me=new Et,te=null,le=new Et(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!N&&(i.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,Re,Ke,mt,At){At===!0&&(Ee*=mt,Re*=mt,Ke*=mt),Me.set(Ee,Re,Ke,mt),le.equals(Me)===!1&&(i.clearColor(Ee,Re,Ke,mt),le.copy(Me))},reset:function(){N=!1,te=null,le.set(-1,0,0,0)}}}function n(){let N=!1,Me=!1,te=null,le=null,Ee=null;return{setReversed:function(Re){if(Me!==Re){let Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let mt=Ee;Ee=null,this.setClear(mt)}Me=Re},getReversed:function(){return Me},setTest:function(Re){Re?se(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Re){te!==Re&&!N&&(i.depthMask(Re),te=Re)},setFunc:function(Re){if(Me&&(Re=n0[Re]),le!==Re){switch(Re){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Re}},setLocked:function(Re){N=Re},setClear:function(Re){Ee!==Re&&(Me&&(Re=1-Re),i.clearDepth(Re),Ee=Re)},reset:function(){N=!1,te=null,le=null,Ee=null,Me=!1}}}function s(){let N=!1,Me=null,te=null,le=null,Ee=null,Re=null,Ke=null,mt=null,At=null;return{setTest:function(et){N||(et?se(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(et){Me!==et&&!N&&(i.stencilMask(et),Me=et)},setFunc:function(et,Ht,un){(te!==et||le!==Ht||Ee!==un)&&(i.stencilFunc(et,Ht,un),te=et,le=Ht,Ee=un)},setOp:function(et,Ht,un){(Re!==et||Ke!==Ht||mt!==un)&&(i.stencilOp(et,Ht,un),Re=et,Ke=Ht,mt=un)},setLocked:function(et){N=et},setClear:function(et){At!==et&&(i.clearStencil(et),At=et)},reset:function(){N=!1,Me=null,te=null,le=null,Ee=null,Re=null,Ke=null,mt=null,At=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,_=!1,g=null,m=null,C=null,w=null,b=null,z=null,L=null,D=new ft(0,0,0),U=0,T=!1,M=null,P=null,K=null,X=null,q=null,ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ue=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=ue>=1):Q.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=ue>=2);let re=null,fe={},ye=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),ht=new Et().fromArray(ye),oe=new Et().fromArray(Ye);function me(N,Me,te,le){let Ee=new Uint8Array(4),Re=i.createTexture();i.bindTexture(N,Re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<te;Ke++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Me+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Re}let $={};$[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(bs),G(!1),F(Vc),se(i.CULL_FACE),I(xi);function se(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Fe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ze(N,Me){return u[N]!==Me?(i.bindFramebuffer(N,Me),u[N]=Me,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Me),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function We(N,Me){let te=d,le=!1;if(N){te=f.get(Me),te===void 0&&(te=[],f.set(Me,te));let Ee=N.textures;if(te.length!==Ee.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Ke=Ee.length;Re<Ke;Re++)te[Re]=i.COLOR_ATTACHMENT0+Re;te.length=Ee.length,le=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,le=!0);le&&i.drawBuffers(te)}function ct(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let he={[Ni]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};he[Dh]=i.MIN,he[Uh]=i.MAX;let xe={[Nh]:i.ZERO,[zh]:i.ONE,[Fh]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,Me,te,le,Ee,Re,Ke,mt,At,et){if(N===xi){_===!0&&(Fe(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),N!==Ih){if(N!==g||et!==T){if((m!==Ni||b!==Ni)&&(i.blendEquation(i.FUNC_ADD),m=Ni,b=Ni),et)switch(N){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,w=null,z=null,L=null,D.set(0,0,0),U=0,g=N,T=et}return}Ee=Ee||Me,Re=Re||te,Ke=Ke||le,(Me!==m||Ee!==b)&&(i.blendEquationSeparate(he[Me],he[Ee]),m=Me,b=Ee),(te!==C||le!==w||Re!==z||Ke!==L)&&(i.blendFuncSeparate(xe[te],xe[le],xe[Re],xe[Ke]),C=te,w=le,z=Re,L=Ke),(mt.equals(D)===!1||At!==U)&&(i.blendColor(mt.r,mt.g,mt.b,At),D.copy(mt),U=At),g=N,T=!1}function be(N,Me){N.side===bn?Fe(i.CULL_FACE):se(i.CULL_FACE);let te=N.side===Bt;Me&&(te=!te),G(te),N.blending===xs&&N.transparent===!1?I(xi):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function F(N){N!==Ah?(se(i.CULL_FACE),N!==P&&(N===Vc?i.cullFace(i.BACK):N===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),P=N}function ve(N){N!==K&&(j&&i.lineWidth(N),K=N)}function Xe(N,Me,te){N?(se(i.POLYGON_OFFSET_FILL),(X!==Me||q!==te)&&(i.polygonOffset(Me,te),X=Me,q=te)):Fe(i.POLYGON_OFFSET_FILL)}function Ie(N){N?se(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+ce-1),re!==N&&(i.activeTexture(N),re=N)}function v(N,Me,te){te===void 0&&(re===null?te=i.TEXTURE0+ce-1:te=re);let le=fe[te];le===void 0&&(le={type:void 0,texture:void 0},fe[te]=le),(le.type!==N||le.texture!==Me)&&(re!==te&&(i.activeTexture(te),re=te),i.bindTexture(N,Me||$[N]),le.type=N,le.texture=Me)}function W(){let N=fe[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(N){ht.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ht.copy(N))}function Le(N){oe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function rt(N,Me){let te=l.get(Me);te===void 0&&(te=new WeakMap,l.set(Me,te));let le=te.get(N);le===void 0&&(le=i.getUniformBlockIndex(Me,N.name),te.set(N,le))}function Qe(N,Me){let le=l.get(Me).get(N);c.get(Me)!==le&&(i.uniformBlockBinding(Me,le,N.__bindingPointIndex),c.set(Me,le))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,fe={},u={},f=new WeakMap,d=[],x=null,_=!1,g=null,m=null,C=null,w=null,b=null,z=null,L=null,D=new ft(0,0,0),U=0,T=!1,M=null,P=null,K=null,X=null,q=null,ht.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Fe,bindFramebuffer:Ze,drawBuffers:We,useProgram:ct,setBlending:I,setMaterial:be,setFlipSided:G,setCullFace:F,setLineWidth:ve,setPolygonOffset:Xe,setScissorTest:Ie,activeTexture:A,bindTexture:v,unbindTexture:W,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:De,texImage3D:Ge,updateUBOMapping:rt,uniformBlockBinding:Qe,texStorage2D:it,texStorage3D:ge,texSubImage2D:ne,texSubImage3D:ze,compressedTexSubImage2D:we,compressedTexSubImage3D:Pe,scissor:Je,viewport:Le,reset:pt}}function Bl(i,e,t,n){let s=s0(n);switch(t){case Ql:return i*e;case th:return i*e;case nh:return i*e*2;case xa:return i*e/s.components*s.byteLength;case Lc:return i*e/s.components*s.byteLength;case ih:return i*e*2/s.components*s.byteLength;case Dc:return i*e*2/s.components*s.byteLength;case eh:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Uc:return i*e*4/s.components*s.byteLength;case zr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case So:return Math.max(i,16)*Math.max(e,8)/4;case yo:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Br:case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sh:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function s0(i){switch(i){case jn:case $l:return{byteLength:1,components:1};case qs:case Kl:case nr:return{byteLength:2,components:1};case Ic:case Pc:return{byteLength:2,components:4};case Bi:case Cc:case Jn:return{byteLength:4,components:1};case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function r0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,v){return d?new OffscreenCanvas(A,v):Gr("canvas")}function _(A,v,W){let ae=1,de=Ie(A);if((de.width>W||de.height>W)&&(ae=W/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ne=Math.floor(ae*de.width),ze=Math.floor(ae*de.height);u===void 0&&(u=x(ne,ze));let we=v?x(ne,ze):u;return we.width=ne,we.height=ze,we.getContext("2d").drawImage(A,0,0,ne,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ne+"x"+ze+")."),we}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,v,W,ae,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=v;if(v===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),v===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),v===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),v===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),v===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),v===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),v===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),v===i.RGBA){let ze=de?va:ut.getTransfer(ae);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=ze===gt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(A,v){let W;return A?v===null||v===Bi||v===Es?W=i.DEPTH24_STENCIL8:v===Jn?W=i.DEPTH32F_STENCIL8:v===qs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bi||v===Es?W=i.DEPTH_COMPONENT24:v===Jn?W=i.DEPTH_COMPONENT32F:v===qs&&(W=i.DEPTH_COMPONENT16),W}function z(A,v){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==zn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function L(A){let v=A.target;v.removeEventListener("dispose",L),U(v),v.isVideoTexture&&h.delete(v)}function D(A){let v=A.target;v.removeEventListener("dispose",D),M(v)}function U(A){let v=n.get(A);if(v.__webglInit===void 0)return;let W=A.source,ae=f.get(W);if(ae){let de=ae[v.__cacheKey];de.usedTimes--,de.usedTimes===0&&T(A),Object.keys(ae).length===0&&f.delete(W)}n.remove(A)}function T(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let W=A.source,ae=f.get(W);delete ae[v.__cacheKey],a.memory.textures--}function M(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(v.__webglFramebuffer[ae]))for(let de=0;de<v.__webglFramebuffer[ae].length;de++)i.deleteFramebuffer(v.__webglFramebuffer[ae][de]);else i.deleteFramebuffer(v.__webglFramebuffer[ae]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ae])}else{if(Array.isArray(v.__webglFramebuffer))for(let ae=0;ae<v.__webglFramebuffer.length;ae++)i.deleteFramebuffer(v.__webglFramebuffer[ae]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ae=0;ae<v.__webglColorRenderbuffer.length;ae++)v.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ae]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let W=A.textures;for(let ae=0,de=W.length;ae<de;ae++){let ne=n.get(W[ae]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(W[ae])}n.remove(A)}let P=0;function K(){P=0}function X(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function q(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ce(A,v){let W=n.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){let ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(W,A,v);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+v)}function j(A,v){let W=n.get(A);if(A.version>0&&W.__version!==A.version){oe(W,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+v)}function ue(A,v){let W=n.get(A);if(A.version>0&&W.__version!==A.version){oe(W,A,v);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+v)}function Q(A,v){let W=n.get(A);if(A.version>0&&W.__version!==A.version){me(W,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+v)}let re={[vo]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},fe={[Qt]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},ye={[cf]:i.NEVER,[pf]:i.ALWAYS,[lf]:i.LESS,[ah]:i.LEQUAL,[hf]:i.EQUAL,[df]:i.GEQUAL,[ff]:i.GREATER,[uf]:i.NOTEQUAL};function Ye(A,v){if(v.type===Jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zn||v.magFilter===Ta||v.magFilter===fr||v.magFilter===ki||v.minFilter===zn||v.minFilter===Ta||v.minFilter===fr||v.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qt||v.minFilter!==fr&&v.minFilter!==ki||v.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ht(A,v){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",L));let ae=v.source,de=f.get(ae);de===void 0&&(de={},f.set(ae,de));let ne=q(v);if(ne!==A.__cacheKey){de[ne]===void 0&&(de[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),de[ne].usedTimes++;let ze=de[A.__cacheKey];ze!==void 0&&(de[A.__cacheKey].usedTimes--,ze.usedTimes===0&&T(v)),A.__cacheKey=ne,A.__webglTexture=de[ne].texture}return W}function oe(A,v,W){let ae=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=i.TEXTURE_3D);let de=ht(A,v),ne=v.source;t.bindTexture(ae,A.__webglTexture,i.TEXTURE0+W);let ze=n.get(ne);if(ne.version!==ze.__version||de===!0){t.activeTexture(i.TEXTURE0+W);let we=ut.getPrimaries(ut.workingColorSpace),Pe=v.colorSpace===mi?null:ut.getPrimaries(v.colorSpace),it=v.colorSpace===mi||we===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ge=_(v.image,!1,s.maxTextureSize);ge=Xe(v,ge);let De=r.convert(v.format,v.colorSpace),Ge=r.convert(v.type),Je=w(v.internalFormat,De,Ge,v.colorSpace,v.isVideoTexture);Ye(ae,v);let Le,rt=v.mipmaps,Qe=v.isVideoTexture!==!0,pt=ze.__version===void 0||de===!0,N=ne.dataReady,Me=z(v,ge);if(v.isDepthTexture)Je=b(v.format===ws,v.type),pt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Je,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Je,ge.width,ge.height,0,De,Ge,null));else if(v.isDataTexture)if(rt.length>0){Qe&&pt&&t.texStorage2D(i.TEXTURE_2D,Me,Je,rt[0].width,rt[0].height);for(let te=0,le=rt.length;te<le;te++)Le=rt[te],Qe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Le.width,Le.height,De,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,te,Je,Le.width,Le.height,0,De,Ge,Le.data);v.generateMipmaps=!1}else Qe?(pt&&t.texStorage2D(i.TEXTURE_2D,Me,Je,ge.width,ge.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,De,Ge,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Je,ge.width,ge.height,0,De,Ge,ge.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qe&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Je,rt[0].width,rt[0].height,ge.depth);for(let te=0,le=rt.length;te<le;te++)if(Le=rt[te],v.format!==Pn)if(De!==null)if(Qe){if(N)if(v.layerUpdates.size>0){let Ee=Bl(Le.width,Le.height,v.format,v.type);for(let Re of v.layerUpdates){let Ke=Le.data.subarray(Re*Ee/Le.data.BYTES_PER_ELEMENT,(Re+1)*Ee/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Re,Le.width,Le.height,1,De,Ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,ge.depth,De,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Je,Le.width,Le.height,ge.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Le.width,Le.height,ge.depth,De,Ge,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Je,Le.width,Le.height,ge.depth,0,De,Ge,Le.data)}else{Qe&&pt&&t.texStorage2D(i.TEXTURE_2D,Me,Je,rt[0].width,rt[0].height);for(let te=0,le=rt.length;te<le;te++)Le=rt[te],v.format!==Pn?De!==null?Qe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Le.width,Le.height,De,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,te,Je,Le.width,Le.height,0,De,Ge,Le.data)}else if(v.isDataArrayTexture)if(Qe){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Je,ge.width,ge.height,ge.depth),N)if(v.layerUpdates.size>0){let te=Bl(ge.width,ge.height,v.format,v.type);for(let le of v.layerUpdates){let Ee=ge.data.subarray(le*te/ge.data.BYTES_PER_ELEMENT,(le+1)*te/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ge.width,ge.height,1,De,Ge,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,Ge,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,ge.width,ge.height,ge.depth,0,De,Ge,ge.data);else if(v.isData3DTexture)Qe?(pt&&t.texStorage3D(i.TEXTURE_3D,Me,Je,ge.width,ge.height,ge.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,Ge,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Je,ge.width,ge.height,ge.depth,0,De,Ge,ge.data);else if(v.isFramebufferTexture){if(pt)if(Qe)t.texStorage2D(i.TEXTURE_2D,Me,Je,ge.width,ge.height);else{let te=ge.width,le=ge.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Je,te,le,0,De,Ge,null),te>>=1,le>>=1}}else if(rt.length>0){if(Qe&&pt){let te=Ie(rt[0]);t.texStorage2D(i.TEXTURE_2D,Me,Je,te.width,te.height)}for(let te=0,le=rt.length;te<le;te++)Le=rt[te],Qe?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De,Ge,Le):t.texImage2D(i.TEXTURE_2D,te,Je,De,Ge,Le);v.generateMipmaps=!1}else if(Qe){if(pt){let te=Ie(ge);t.texStorage2D(i.TEXTURE_2D,Me,Je,te.width,te.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ge,ge)}else t.texImage2D(i.TEXTURE_2D,0,Je,De,Ge,ge);g(v)&&m(ae),ze.__version=ne.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function me(A,v,W){if(v.image.length!==6)return;let ae=ht(A,v),de=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let ne=n.get(de);if(de.version!==ne.__version||ae===!0){t.activeTexture(i.TEXTURE0+W);let ze=ut.getPrimaries(ut.workingColorSpace),we=v.colorSpace===mi?null:ut.getPrimaries(v.colorSpace),Pe=v.colorSpace===mi||ze===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let it=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,De=[];for(let le=0;le<6;le++)!it&&!ge?De[le]=_(v.image[le],!0,s.maxCubemapSize):De[le]=ge?v.image[le].image:v.image[le],De[le]=Xe(v,De[le]);let Ge=De[0],Je=r.convert(v.format,v.colorSpace),Le=r.convert(v.type),rt=w(v.internalFormat,Je,Le,v.colorSpace),Qe=v.isVideoTexture!==!0,pt=ne.__version===void 0||ae===!0,N=de.dataReady,Me=z(v,Ge);Ye(i.TEXTURE_CUBE_MAP,v);let te;if(it){Qe&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,rt,Ge.width,Ge.height);for(let le=0;le<6;le++){te=De[le].mipmaps;for(let Ee=0;Ee<te.length;Ee++){let Re=te[Ee];v.format!==Pn?Je!==null?Qe?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Re.width,Re.height,Je,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,rt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,0,0,Re.width,Re.height,Je,Le,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee,rt,Re.width,Re.height,0,Je,Le,Re.data)}}}else{if(te=v.mipmaps,Qe&&pt){te.length>0&&Me++;let le=Ie(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,rt,le.width,le.height)}for(let le=0;le<6;le++)if(ge){Qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De[le].width,De[le].height,Je,Le,De[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,rt,De[le].width,De[le].height,0,Je,Le,De[le].data);for(let Ee=0;Ee<te.length;Ee++){let Ke=te[Ee].image[le].image;Qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Ke.width,Ke.height,Je,Le,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,rt,Ke.width,Ke.height,0,Je,Le,Ke.data)}}else{Qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Je,Le,De[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,rt,Je,Le,De[le]);for(let Ee=0;Ee<te.length;Ee++){let Re=te[Ee];Qe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,0,0,Je,Le,Re.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee+1,rt,Je,Le,Re.image[le])}}}g(v)&&m(i.TEXTURE_CUBE_MAP),ne.__version=de.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function $(A,v,W,ae,de,ne){let ze=r.convert(W.format,W.colorSpace),we=r.convert(W.type),Pe=w(W.internalFormat,ze,we,W.colorSpace),it=n.get(v),ge=n.get(W);if(ge.__renderTarget=v,!it.__hasExternalTextures){let De=Math.max(1,v.width>>ne),Ge=Math.max(1,v.height>>ne);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ne,Pe,De,Ge,v.depth,0,ze,we,null):t.texImage2D(de,ne,Pe,De,Ge,0,ze,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,de,ge.__webglTexture,0,G(v)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,de,ge.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,v,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let ae=v.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,ne=b(v.stencilBuffer,de),ze=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=G(v);F(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ne,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,A)}else{let ae=v.textures;for(let de=0;de<ae.length;de++){let ne=ae[de],ze=r.convert(ne.format,ne.colorSpace),we=r.convert(ne.type),Pe=w(ne.internalFormat,ze,we,ne.colorSpace),it=G(v);W&&F(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Pe,v.width,v.height):F(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ae=n.get(v.depthTexture);ae.__renderTarget=v,(!ae.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ce(v.depthTexture,0);let de=ae.__webglTexture,ne=G(v);if(v.depthTexture.format===vs)F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(v.depthTexture.format===ws)F(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ze(A){let v=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ae=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ae){let de=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),v.__depthDisposeCallback=de}v.__boundDepthTexture=ae}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(v.__webglFramebuffer,A)}else if(W){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]===void 0)v.__webglDepthbuffer[ae]=i.createRenderbuffer(),se(v.__webglDepthbuffer[ae],A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),se(v.__webglDepthbuffer,A,!1);else{let ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(A,v,W){let ae=n.get(A);v!==void 0&&$(ae.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ze(A)}function ct(A){let v=A.texture,W=n.get(A),ae=n.get(v);A.addEventListener("dispose",D);let de=A.textures,ne=A.isWebGLCubeRenderTarget===!0,ze=de.length>1;if(ze||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=v.version,a.memory.textures++),ne){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let Pe=0;Pe<v.mipmaps.length;Pe++)W.__webglFramebuffer[we][Pe]=i.createFramebuffer()}else W.__webglFramebuffer[we]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<v.mipmaps.length;we++)W.__webglFramebuffer[we]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ze)for(let we=0,Pe=de.length;we<Pe;we++){let it=n.get(de[we]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&F(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<de.length;we++){let Pe=de[we];W.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[we]);let it=r.convert(Pe.format,Pe.colorSpace),ge=r.convert(Pe.type),De=w(Pe.internalFormat,it,ge,Pe.colorSpace,A.isXRRenderTarget===!0),Ge=G(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,De,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,W.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),se(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v);for(let we=0;we<6;we++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)$(W.__webglFramebuffer[we][Pe],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Pe);else $(W.__webglFramebuffer[we],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(v)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let we=0,Pe=de.length;we<Pe;we++){let it=de[we],ge=n.get(it);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Ye(i.TEXTURE_2D,it),$(W.__webglFramebuffer,A,it,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),g(it)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(we=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ae.__webglTexture),Ye(we,v),v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)$(W.__webglFramebuffer[Pe],A,v,i.COLOR_ATTACHMENT0,we,Pe);else $(W.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,we,0);g(v)&&m(we),t.unbindTexture()}A.depthBuffer&&Ze(A)}function he(A){let v=A.textures;for(let W=0,ae=v.length;W<ae;W++){let de=v[W];if(g(de)){let ne=C(A),ze=n.get(de).__webglTexture;t.bindTexture(ne,ze),m(ne),t.unbindTexture()}}}let xe=[],I=[];function be(A){if(A.samples>0){if(F(A)===!1){let v=A.textures,W=A.width,ae=A.height,de=i.COLOR_BUFFER_BIT,ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(A),we=v.length>1;if(we)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let it=n.get(v[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,W,ae,0,0,W,ae,de,i.NEAREST),c===!0&&(xe.length=0,I.length=0,xe.push(i.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(ne),I.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Pe]);let it=n.get(v[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function G(A){return Math.min(s.maxSamples,A.samples)}function F(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Xe(A,v){let W=A.colorSpace,ae=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Rs&&W!==mi&&(ut.getTransfer(W)===gt?(ae!==Pn||de!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=j,this.setTexture3D=ue,this.setTextureCube=Q,this.rebindTextures=We,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=$,this.useMultisampledRTT=F}function a0(i,e){function t(n,s=mi){let r,a=ut.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.BYTE;if(n===Kl)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===eh)return i.RGB;if(n===Pn)return i.RGBA;if(n===th)return i.LUMINANCE;if(n===nh)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===xa)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===ih)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===zr||n===Fr||n===Or||n===kr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===bo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===Uo||n===No||n===zo||n===Fo||n===Oo||n===ko||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Vo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cc=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gi=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},o0={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fn({vertexShader:c0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,_=new lc,g=t.getContextAttributes(),m=null,C=null,w=[],b=[],z=new Ae,L=null,D=new jt;D.viewport=new Et;let U=new jt;U.viewport=new Et;let T=[D,U],M=new cc,P=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let me=w[oe];return me===void 0&&(me=new Hs,w[oe]=me),me.getTargetRaySpace()},this.getControllerGrip=function(oe){let me=w[oe];return me===void 0&&(me=new Hs,w[oe]=me),me.getGripSpace()},this.getHand=function(oe){let me=w[oe];return me===void 0&&(me=new Hs,w[oe]=me),me.getHandSpace()};function X(oe){let me=b.indexOf(oe.inputSource);if(me===-1)return;let $=w[me];$!==void 0&&($.update(oe.inputSource,oe.frame,l||a),$.dispatchEvent({type:oe.type,data:oe.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ce);for(let oe=0;oe<w.length;oe++){let me=b[oe];me!==null&&(b[oe]=null,w[oe].disconnect(me))}P=null,K=null,_.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,C=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(oe){l=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){let me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),C=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let me=null,$=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=g.stencil?ws:vs,$=g.stencil?Es:Bi);let Fe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Qn(f.textureWidth,f.textureHeight,{format:Pn,type:jn,depthTexture:new ea(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ht.setContext(s),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ce(oe){for(let me=0;me<oe.removed.length;me++){let $=oe.removed[me],se=b.indexOf($);se>=0&&(b[se]=null,w[se].disconnect($))}for(let me=0;me<oe.added.length;me++){let $=oe.added[me],se=b.indexOf($);if(se===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=b.length){b.push($),se=Ze;break}else if(b[Ze]===null){b[Ze]=$,se=Ze;break}if(se===-1)break}let Fe=w[se];Fe&&Fe.connect($)}}let j=new k,ue=new k;function Q(oe,me,$){j.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition($.matrixWorld);let se=j.distanceTo(ue),Fe=me.projectionMatrix.elements,Ze=$.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),ct=Fe[14]/(Fe[10]+1),he=(Fe[9]+1)/Fe[5],xe=(Fe[9]-1)/Fe[5],I=(Fe[8]-1)/Fe[0],be=(Ze[8]+1)/Ze[0],G=We*I,F=We*be,ve=se/(-I+be),Xe=ve*-I;if(me.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Xe),oe.translateZ(ve),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let Ie=We+ve,A=ct+ve,v=G-Xe,W=F+(se-Xe),ae=he*ct/A*Ie,de=xe*ct/A*Ie;oe.projectionMatrix.makePerspective(v,W,ae,de,Ie,A),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function re(oe,me){me===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(me.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let me=oe.near,$=oe.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&($=_.depthFar)),M.near=U.near=D.near=me,M.far=U.far=D.far=$,(P!==M.near||K!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,K=M.far),D.layers.mask=oe.layers.mask|2,U.layers.mask=oe.layers.mask|4,M.layers.mask=D.layers.mask|U.layers.mask;let se=oe.parent,Fe=M.cameras;re(M,se);for(let Ze=0;Ze<Fe.length;Ze++)re(Fe[Ze],se);Fe.length===2?Q(M,D,U):M.projectionMatrix.copy(D.projectionMatrix),fe(oe,M,se)};function fe(oe,me,$){$===null?oe.matrix.copy(me.matrixWorld):(oe.matrix.copy($.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(me.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(me.projectionMatrix),oe.projectionMatrixInverse.copy(me.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Yo*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(oe){c=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ye=null;function Ye(oe,me){if(h=me.getViewerPose(l||a),x=me,h!==null){let $=h.views;d!==null&&(e.setRenderTargetFramebuffer(C,d.framebuffer),e.setRenderTarget(C));let se=!1;$.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let Ze=0;Ze<$.length;Ze++){let We=$[Ze],ct=null;if(d!==null)ct=d.getViewport(We);else{let xe=u.getViewSubImage(f,We);ct=xe.viewport,Ze===0&&(e.setRenderTargetTextures(C,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(C))}let he=T[Ze];he===void 0&&(he=new jt,he.layers.enable(Ze),he.viewport=new Et,T[Ze]=he),he.matrix.fromArray(We.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(We.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ct.x,ct.y,ct.width,ct.height),Ze===0&&(M.matrix.copy(he.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(he)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Ze=u.getDepthInformation($[0]);Ze&&Ze.isValid&&Ze.texture&&_.init(e,Ze,s.renderState)}}for(let $=0;$<w.length;$++){let se=b[$],Fe=w[$];se!==null&&Fe!==void 0&&Fe.update(se,me,l||a)}ye&&ye(oe,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),x=null}let ht=new hh;ht.setAnimationLoop(Ye),this.setAnimationLoop=function(oe){ye=oe},this.dispose=function(){}}},Di=new ei,h0=new wt;function f0(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,lh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,C,w,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,C,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let C=e.get(m),w=C.envMap,b=C.envMapRotation;w&&(g.envMap.value=w,Di.copy(b),Di.x*=-1,Di.y*=-1,Di.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(Di)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,C,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,w){let b=w.program;n.uniformBlockBinding(C,b)}function l(C,w){let b=s[C.id];b===void 0&&(x(C),b=h(C),s[C.id]=b,C.addEventListener("dispose",g));let z=w.program;n.updateUBOMapping(C,z);let L=e.render.frame;r[C.id]!==L&&(f(C),r[C.id]=L)}function h(C){let w=u();C.__bindingPointIndex=w;let b=i.createBuffer(),z=C.__size,L=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,z,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let w=s[C.id],b=C.uniforms,z=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let L=0,D=b.length;L<D;L++){let U=Array.isArray(b[L])?b[L]:[b[L]];for(let T=0,M=U.length;T<M;T++){let P=U[T];if(d(P,L,T,z)===!0){let K=P.__offset,X=Array.isArray(P.value)?P.value:[P.value],q=0;for(let ce=0;ce<X.length;ce++){let j=X[ce],ue=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,K+q,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,q),q+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(C,w,b,z){let L=C.value,D=w+"_"+b;if(z[D]===void 0)return typeof L=="number"||typeof L=="boolean"?z[D]=L:z[D]=L.clone(),!0;{let U=z[D];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return z[D]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function x(C){let w=C.uniforms,b=0,z=16;for(let D=0,U=w.length;D<U;D++){let T=Array.isArray(w[D])?w[D]:[w[D]];for(let M=0,P=T.length;M<P;M++){let K=T[M],X=Array.isArray(K.value)?K.value:[K.value];for(let q=0,ce=X.length;q<ce;q++){let j=X[q],ue=_(j),Q=b%z,re=Q%ue.boundary,fe=Q+re;b+=re,fe!==0&&z-fe<ue.storage&&(b+=z-fe),K.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=ue.storage}}}let L=b%z;return L>0&&(b+=z-L),C.__size=b,C.__cache={},this}function _(C){let w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function g(C){let w=C.target;w.removeEventListener("dispose",g);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ta=class{constructor(e={}){let{canvas:t=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let x=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,C=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=vi,this.toneMappingExposure=1;let b=this,z=!1,L=0,D=0,U=null,T=-1,M=null,P=new Et,K=new Et,X=null,q=new ft(0),ce=0,j=t.width,ue=t.height,Q=1,re=null,fe=null,ye=new Et(0,0,j,ue),Ye=new Et(0,0,j,ue),ht=!1,oe=new Zs,me=!1,$=!1,se=new wt,Fe=new wt,Ze=new k,We=new Et,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function xe(){return U===null?Q:1}let I=n;function be(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Re,!1),I===null){let O="webgl2";if(I=be(O,S),I===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let G,F,ve,Xe,Ie,A,v,W,ae,de,ne,ze,we,Pe,it,ge,De,Ge,Je,Le,rt,Qe,pt,N;function Me(){G=new Rp(I),G.init(),Qe=new a0(I,G),F=new Mp(I,G,e,Qe),ve=new i0(I,G),F.reverseDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),Xe=new Pp(I),Ie=new Wm,A=new r0(I,G,ve,Ie,F,Qe,Xe),v=new Ep(b),W=new Ap(b),ae=new Of(I),pt=new yp(I,ae),de=new Cp(I,ae,Xe,pt),ne=new Dp(I,de,ae,Xe),Je=new Lp(I,F,A),ge=new Sp(Ie),ze=new Gm(b,v,W,G,F,pt,ge),we=new f0(b,Ie),Pe=new qm,it=new jm(G),Ge=new _p(b,v,W,ve,ne,d,c),De=new t0(b,ne,F),N=new u0(I,Xe,F,ve),Le=new bp(I,G,Xe),rt=new Ip(I,G,Xe),Xe.programs=ze.programs,b.capabilities=F,b.extensions=G,b.properties=Ie,b.renderLists=Pe,b.shadowMap=De,b.state=ve,b.info=Xe}Me();let te=new hc(b,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=G.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=G.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(j,ue,!1))},this.getSize=function(S){return S.set(j,ue)},this.setSize=function(S,O,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,ue=O,t.width=Math.floor(S*Q),t.height=Math.floor(O*Q),J===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(j*Q,ue*Q).floor()},this.setDrawingBufferSize=function(S,O,J){j=S,ue=O,Q=J,t.width=Math.floor(S*J),t.height=Math.floor(O*J),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,O,J,Y){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,O,J,Y),ve.viewport(P.copy(ye).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,O,J,Y){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,O,J,Y),ve.scissor(K.copy(Ye).multiplyScalar(Q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){ve.setScissorTest(ht=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){fe=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(S=!0,O=!0,J=!0){let Y=0;if(S){let B=!1;if(U!==null){let _e=U.texture.format;B=_e===Uc||_e===Dc||_e===Lc}if(B){let _e=U.texture.type,Ce=_e===jn||_e===Bi||_e===qs||_e===Es||_e===Ic||_e===Pc,E=Ge.getClearColor(),y=Ge.getClearAlpha(),H=E.r,ie=E.g,Z=E.b;Ce?(x[0]=H,x[1]=ie,x[2]=Z,x[3]=y,I.clearBufferuiv(I.COLOR,0,x)):(_[0]=H,_[1]=ie,_[2]=Z,_[3]=y,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT),J&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Pe.dispose(),it.dispose(),Ie.dispose(),v.dispose(),W.dispose(),ne.dispose(),pt.dispose(),N.dispose(),ze.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ji),te.removeEventListener("sessionend",$i),Dn.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let S=Xe.autoReset,O=De.enabled,J=De.autoUpdate,Y=De.needsUpdate,B=De.type;Me(),Xe.autoReset=S,De.enabled=O,De.autoUpdate=J,De.needsUpdate=Y,De.type=B}function Re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ke(S){let O=S.target;O.removeEventListener("dispose",Ke),mt(O)}function mt(S){At(S),Ie.remove(S)}function At(S){let O=Ie.get(S).programs;O!==void 0&&(O.forEach(function(J){ze.releaseProgram(J)}),S.isShaderMaterial&&ze.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,J,Y,B,_e){O===null&&(O=ct);let Ce=B.isMesh&&B.matrixWorld.determinant()<0,E=Qi(S,O,J,Y,B);ve.setMaterial(Y,Ce);let y=J.index,H=1;if(Y.wireframe===!0){if(y=de.getWireframeAttribute(J),y===void 0)return;H=2}let ie=J.drawRange,Z=J.attributes.position,Se=ie.start*H,Oe=(ie.start+ie.count)*H;_e!==null&&(Se=Math.max(Se,_e.start*H),Oe=Math.min(Oe,(_e.start+_e.count)*H)),y!==null?(Se=Math.max(Se,0),Oe=Math.min(Oe,y.count)):Z!=null&&(Se=Math.max(Se,0),Oe=Math.min(Oe,Z.count));let He=Oe-Se;if(He<0||He===1/0)return;pt.setup(B,Y,E,J,y);let ot,qe=Le;if(y!==null&&(ot=ae.get(y),qe=rt,qe.setIndex(ot)),B.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*xe()),qe.setMode(I.LINES)):qe.setMode(I.TRIANGLES);else if(B.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),ve.setLineWidth(Ue*xe()),B.isLineSegments?qe.setMode(I.LINES):B.isLineLoop?qe.setMode(I.LINE_LOOP):qe.setMode(I.LINE_STRIP)}else B.isPoints?qe.setMode(I.POINTS):B.isSprite&&qe.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ue=B._multiDrawStarts,yt=B._multiDrawCounts,at=B._multiDrawCount,Ut=y?ae.get(y).bytesPerElement:1,nn=Ie.get(Y).currentProgram.getUniforms();for(let St=0;St<at;St++)nn.setValue(I,"_gl_DrawID",St),qe.render(Ue[St]/Ut,yt[St])}else if(B.isInstancedMesh)qe.renderInstances(Se,He,B.count);else if(J.isInstancedBufferGeometry){let Ue=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yt=Math.min(J.instanceCount,Ue);qe.renderInstances(Se,He,yt)}else qe.render(Se,He)};function et(S,O,J){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,ji(S,O,J),S.side=_i,S.needsUpdate=!0,ji(S,O,J),S.side=bn):ji(S,O,J)}this.compile=function(S,O,J=null){J===null&&(J=S),m=it.get(J),m.init(O),w.push(m),J.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),S!==J&&S.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let Y=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let _e=B.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let E=_e[Ce];et(E,J,B),Y.add(E)}else et(_e,J,B),Y.add(_e)}),w.pop(),m=null,Y},this.compileAsync=function(S,O,J=null){let Y=this.compile(S,O,J);return new Promise(B=>{function _e(){if(Y.forEach(function(Ce){Ie.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){B(S);return}setTimeout(_e,10)}G.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ht=null;function un(S){Ht&&Ht(S)}function Ji(){Dn.stop()}function $i(){Dn.start()}let Dn=new hh;Dn.setAnimationLoop(un),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){Ht=S,te.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},te.addEventListener("sessionstart",Ji),te.addEventListener("sessionend",$i),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(O),O=te.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,U),m=it.get(S,w.length),m.init(O),w.push(m),Fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),oe.setFromProjectionMatrix(Fe),$=this.localClippingEnabled,me=ge.init(this.clippingPlanes,$),g=Pe.get(S,C.length),g.init(),C.push(g),te.enabled===!0&&te.isPresenting===!0){let _e=b.xr.getDepthSensingMesh();_e!==null&&Si(_e,O,-1/0,b.sortObjects)}Si(S,O,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(re,fe),he=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,he&&Ge.addToRenderList(g,S),this.info.render.frame++,me===!0&&ge.beginShadows();let J=m.state.shadowsArray;De.render(J,S,O),me===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,B=g.transmissive;if(m.setupLights(),O.isArrayCamera){let _e=O.cameras;if(B.length>0)for(let Ce=0,E=_e.length;Ce<E;Ce++){let y=_e[Ce];kt(Y,B,S,y)}he&&Ge.render(S);for(let Ce=0,E=_e.length;Ce<E;Ce++){let y=_e[Ce];ai(g,S,y,y.viewport)}}else B.length>0&&kt(Y,B,S,O),he&&Ge.render(S),ai(g,S,O);U!==null&&(A.updateMultisampleRenderTarget(U),A.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(b,S,O),pt.resetDefaultState(),T=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],me===!0&&ge.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function Si(S,O,J,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||oe.intersectsSprite(S)){Y&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Fe);let Ce=ne.update(S),E=S.material;E.visible&&g.push(S,Ce,E,J,We.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||oe.intersectsObject(S))){let Ce=ne.update(S),E=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),We.copy(Ce.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(Fe)),Array.isArray(E)){let y=Ce.groups;for(let H=0,ie=y.length;H<ie;H++){let Z=y[H],Se=E[Z.materialIndex];Se&&Se.visible&&g.push(S,Ce,Se,J,We.z,Z)}}else E.visible&&g.push(S,Ce,E,J,We.z,null)}}let _e=S.children;for(let Ce=0,E=_e.length;Ce<E;Ce++)Si(_e[Ce],O,J,Y)}function ai(S,O,J,Y){let B=S.opaque,_e=S.transmissive,Ce=S.transparent;m.setupLightsView(J),me===!0&&ge.setGlobalState(b.clippingPlanes,J),Y&&ve.viewport(P.copy(Y)),B.length>0&&Gt(B,O,J),_e.length>0&&Gt(_e,O,J),Ce.length>0&&Gt(Ce,O,J),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function kt(S,O,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Qn(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?nr:jn,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let _e=m.state.transmissionRenderTarget[Y.id],Ce=Y.viewport||P;_e.setSize(Ce.z,Ce.w);let E=b.getRenderTarget();b.setRenderTarget(_e),b.getClearColor(q),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),he&&Ge.render(J);let y=b.toneMapping;b.toneMapping=vi;let H=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),me===!0&&ge.setGlobalState(b.clippingPlanes,Y),Gt(S,J,Y),A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e),G.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Z=0,Se=O.length;Z<Se;Z++){let Oe=O[Z],He=Oe.object,ot=Oe.geometry,qe=Oe.material,Ue=Oe.group;if(qe.side===bn&&He.layers.test(Y.layers)){let yt=qe.side;qe.side=Bt,qe.needsUpdate=!0,Ki(He,J,Y,ot,qe,Ue),qe.side=yt,qe.needsUpdate=!0,ie=!0}}ie===!0&&(A.updateMultisampleRenderTarget(_e),A.updateRenderTargetMipmap(_e))}b.setRenderTarget(E),b.setClearColor(q,ce),H!==void 0&&(Y.viewport=H),b.toneMapping=y}function Gt(S,O,J){let Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,_e=S.length;B<_e;B++){let Ce=S[B],E=Ce.object,y=Ce.geometry,H=Y===null?Ce.material:Y,ie=Ce.group;E.layers.test(J.layers)&&Ki(E,O,J,y,H,ie)}}function Ki(S,O,J,Y,B,_e){S.onBeforeRender(b,O,J,Y,B,_e),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(b,O,J,Y,S,_e),B.transparent===!0&&B.side===bn&&B.forceSinglePass===!1?(B.side=Bt,B.needsUpdate=!0,b.renderBufferDirect(J,O,Y,B,S,_e),B.side=_i,B.needsUpdate=!0,b.renderBufferDirect(J,O,Y,B,S,_e),B.side=bn):b.renderBufferDirect(J,O,Y,B,S,_e),S.onAfterRender(b,O,J,Y,B,_e)}function ji(S,O,J){O.isScene!==!0&&(O=ct);let Y=Ie.get(S),B=m.state.lights,_e=m.state.shadowsArray,Ce=B.state.version,E=ze.getParameters(S,B.state,_e,O,J),y=ze.getProgramCacheKey(E),H=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?W:v).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,H===void 0&&(S.addEventListener("dispose",Ke),H=new Map,Y.programs=H);let ie=H.get(y);if(ie!==void 0){if(Y.currentProgram===ie&&Y.lightsStateVersion===Ce)return Ds(S,E),ie}else E.uniforms=ze.getUniforms(S),S.onBeforeCompile(E,b),ie=ze.acquireProgram(E,y),H.set(y,ie),Y.uniforms=E.uniforms;let Z=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Z.clippingPlanes=ge.uniform),Ds(S,E),Y.needsLights=ar(S),Y.lightsStateVersion=Ce,Y.needsLights&&(Z.ambientLightColor.value=B.state.ambient,Z.lightProbe.value=B.state.probe,Z.directionalLights.value=B.state.directional,Z.directionalLightShadows.value=B.state.directionalShadow,Z.spotLights.value=B.state.spot,Z.spotLightShadows.value=B.state.spotShadow,Z.rectAreaLights.value=B.state.rectArea,Z.ltc_1.value=B.state.rectAreaLTC1,Z.ltc_2.value=B.state.rectAreaLTC2,Z.pointLights.value=B.state.point,Z.pointLightShadows.value=B.state.pointShadow,Z.hemisphereLights.value=B.state.hemi,Z.directionalShadowMap.value=B.state.directionalShadowMap,Z.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Z.spotShadowMap.value=B.state.spotShadowMap,Z.spotLightMatrix.value=B.state.spotLightMatrix,Z.spotLightMap.value=B.state.spotLightMap,Z.pointShadowMap.value=B.state.pointShadowMap,Z.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=ie,Y.uniformsList=null,ie}function Ei(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=ys.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ds(S,O){let J=Ie.get(S);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Qi(S,O,J,Y,B){O.isScene!==!0&&(O=ct),A.resetTextureUnits();let _e=O.fog,Ce=Y.isMeshStandardMaterial?O.environment:null,E=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Rs,y=(Y.isMeshStandardMaterial?W:v).get(Y.envMap||Ce),H=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ie=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Z=!!J.morphAttributes.position,Se=!!J.morphAttributes.normal,Oe=!!J.morphAttributes.color,He=vi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(He=b.toneMapping);let ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,qe=ot!==void 0?ot.length:0,Ue=Ie.get(Y),yt=m.state.lights;if(me===!0&&($===!0||S!==M)){let Ct=S===M&&Y.id===T;ge.setState(Y,S,Ct)}let at=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==yt.state.version||Ue.outputColorSpace!==E||B.isBatchedMesh&&Ue.batching===!1||!B.isBatchedMesh&&Ue.batching===!0||B.isBatchedMesh&&Ue.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ue.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ue.instancing===!1||!B.isInstancedMesh&&Ue.instancing===!0||B.isSkinnedMesh&&Ue.skinning===!1||!B.isSkinnedMesh&&Ue.skinning===!0||B.isInstancedMesh&&Ue.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ue.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ue.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ue.instancingMorph===!1&&B.morphTexture!==null||Ue.envMap!==y||Y.fog===!0&&Ue.fog!==_e||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ge.numPlanes||Ue.numIntersection!==ge.numIntersection)||Ue.vertexAlphas!==H||Ue.vertexTangents!==ie||Ue.morphTargets!==Z||Ue.morphNormals!==Se||Ue.morphColors!==Oe||Ue.toneMapping!==He||Ue.morphTargetsCount!==qe)&&(at=!0):(at=!0,Ue.__version=Y.version);let Ut=Ue.currentProgram;at===!0&&(Ut=ji(Y,O,B));let nn=!1,St=!1,sn=!1,lt=Ut.getUniforms(),Rt=Ue.uniforms;if(ve.useProgram(Ut.program)&&(nn=!0,St=!0,sn=!0),Y.id!==T&&(T=Y.id,St=!0),nn||M!==S){ve.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),vf(se),_f(se),lt.setValue(I,"projectionMatrix",se)):lt.setValue(I,"projectionMatrix",S.projectionMatrix),lt.setValue(I,"viewMatrix",S.matrixWorldInverse);let an=lt.map.cameraPosition;an!==void 0&&an.setValue(I,Ze.setFromMatrixPosition(S.matrixWorld)),F.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,St=!0,sn=!0)}if(B.isSkinnedMesh){lt.setOptional(I,B,"bindMatrix"),lt.setOptional(I,B,"bindMatrixInverse");let Ct=B.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(I,"boneTexture",Ct.boneTexture,A))}B.isBatchedMesh&&(lt.setOptional(I,B,"batchingTexture"),lt.setValue(I,"batchingTexture",B._matricesTexture,A),lt.setOptional(I,B,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",B._indirectTexture,A),lt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",B._colorsTexture,A));let rn=J.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Je.update(B,J,Ut),(St||Ue.receiveShadow!==B.receiveShadow)&&(Ue.receiveShadow=B.receiveShadow,lt.setValue(I,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Rt.envMap.value=y,Rt.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Rt.envMapIntensity.value=O.environmentIntensity),St&&(lt.setValue(I,"toneMappingExposure",b.toneMappingExposure),Ue.needsLights&&wi(Rt,sn),_e&&Y.fog===!0&&we.refreshFogUniforms(Rt,_e),we.refreshMaterialUniforms(Rt,Y,Q,ue,m.state.transmissionRenderTarget[S.id]),ys.upload(I,Ei(Ue),Rt,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ys.upload(I,Ei(Ue),Rt,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(I,"center",B.center),lt.setValue(I,"modelViewMatrix",B.modelViewMatrix),lt.setValue(I,"normalMatrix",B.normalMatrix),lt.setValue(I,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Ct=Y.uniformsGroups;for(let an=0,on=Ct.length;an<on;an++){let vn=Ct[an];N.update(vn,Ut),N.bind(vn,Ut)}}return Ut}function wi(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function ar(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,O,J){Ie.get(S.texture).__webglTexture=O,Ie.get(S.depthTexture).__webglTexture=J;let Y=Ie.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=J===void 0,Y.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){let J=Ie.get(S);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,J=0){U=S,L=O,D=J;let Y=!0,B=null,_e=!1,Ce=!1;if(S){let y=Ie.get(S);if(y.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(y.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(y.__hasExternalTextures)A.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Z=S.depthTexture;if(y.__boundDepthTexture!==Z){if(Z!==null&&Ie.has(Z)&&(S.width!==Z.image.width||S.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let H=S.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(Ce=!0);let ie=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ie[O])?B=ie[O][J]:B=ie[O],_e=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?B=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(ie)?B=ie[J]:B=ie,P.copy(S.viewport),K.copy(S.scissor),X=S.scissorTest}else P.copy(ye).multiplyScalar(Q).floor(),K.copy(Ye).multiplyScalar(Q).floor(),X=ht;if(ve.bindFramebuffer(I.FRAMEBUFFER,B)&&Y&&ve.drawBuffers(S,B),ve.viewport(P),ve.scissor(K),ve.setScissorTest(X),_e){let y=Ie.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,y.__webglTexture,J)}else if(Ce){let y=Ie.get(S.texture),H=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.__webglTexture,J||0,H)}T=-1},this.readRenderTargetPixels=function(S,O,J,Y,B,_e,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(E=E[Ce]),E){ve.bindFramebuffer(I.FRAMEBUFFER,E);try{let y=S.texture,H=y.format,ie=y.type;if(!F.textureFormatReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&J>=0&&J<=S.height-B&&I.readPixels(O,J,Y,B,Qe.convert(H),Qe.convert(ie),_e)}finally{let y=U!==null?Ie.get(U).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,y)}}},this.readRenderTargetPixelsAsync=async function(S,O,J,Y,B,_e,Ce){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(E=E[Ce]),E){let y=S.texture,H=y.format,ie=y.type;if(!F.textureFormatReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-Y&&J>=0&&J<=S.height-B){ve.bindFramebuffer(I.FRAMEBUFFER,E);let Z=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Z),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(O,J,Y,B,Qe.convert(H),Qe.convert(ie),0);let Se=U!==null?Ie.get(U).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Se);let Oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await xf(I,Oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Z),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Z),I.deleteSync(Oe),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,J=0){S.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);let Y=Math.pow(2,-J),B=Math.floor(S.image.width*Y),_e=Math.floor(S.image.height*Y),Ce=O!==null?O.x:0,E=O!==null?O.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Ce,E,B,_e),ve.unbindTexture()},this.copyTextureToTexture=function(S,O,J=null,Y=null,B=0){S.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],O=arguments[2],B=arguments[3]||0,J=null);let _e,Ce,E,y,H,ie,Z,Se,Oe,He=S.isCompressedTexture?S.mipmaps[B]:S.image;J!==null?(_e=J.max.x-J.min.x,Ce=J.max.y-J.min.y,E=J.isBox3?J.max.z-J.min.z:1,y=J.min.x,H=J.min.y,ie=J.isBox3?J.min.z:0):(_e=He.width,Ce=He.height,E=He.depth||1,y=0,H=0,ie=0),Y!==null?(Z=Y.x,Se=Y.y,Oe=Y.z):(Z=0,Se=0,Oe=0);let ot=Qe.convert(O.format),qe=Qe.convert(O.type),Ue;O.isData3DTexture?(A.setTexture3D(O,0),Ue=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ue=I.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ue=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let yt=I.getParameter(I.UNPACK_ROW_LENGTH),at=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ut=I.getParameter(I.UNPACK_SKIP_PIXELS),nn=I.getParameter(I.UNPACK_SKIP_ROWS),St=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,He.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,y),I.pixelStorei(I.UNPACK_SKIP_ROWS,H),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ie);let sn=S.isDataArrayTexture||S.isData3DTexture,lt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Rt=Ie.get(S),rn=Ie.get(O),Ct=Ie.get(Rt.__renderTarget),an=Ie.get(rn.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,an.__webglFramebuffer);for(let on=0;on<E;on++)sn&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.get(S).__webglTexture,B,ie+on),S.isDepthTexture?(lt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.get(O).__webglTexture,B,Oe+on),I.blitFramebuffer(y,H,_e,Ce,Z,Se,_e,Ce,I.DEPTH_BUFFER_BIT,I.NEAREST)):lt?I.copyTexSubImage3D(Ue,B,Z,Se,Oe+on,y,H,_e,Ce):I.copyTexSubImage2D(Ue,B,Z,Se,Oe+on,y,H,_e,Ce);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ue,B,Z,Se,Oe,_e,Ce,E,ot,qe,He.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Ue,B,Z,Se,Oe,_e,Ce,E,ot,He.data):I.texSubImage3D(Ue,B,Z,Se,Oe,_e,Ce,E,ot,qe,He):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Z,Se,_e,Ce,ot,qe,He.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Z,Se,He.width,He.height,ot,He.data):I.texSubImage2D(I.TEXTURE_2D,B,Z,Se,_e,Ce,ot,qe,He);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,nn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St),B===0&&O.generateMipmaps&&I.generateMipmap(Ue),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,O,J=null,Y=null,B=0){return S.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],O=arguments[3],B=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,J,Y,B)},this.initRenderTarget=function(S){Ie.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){L=0,D=0,U=null,ve.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var na=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ia=class extends gn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Qt,h=Qt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ae:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new k,s=[],r=[],a=[],o=new k,c=new wt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new k)}r[0]=new k,a[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Zt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Js=class extends wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends Js{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Lr=new k,no=new zc,io=new zc,so=new zc,$s=class extends wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),l=Lr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),no.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,_,g),io.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,_,g),so.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(no.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),io.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),so.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(no.calc(c),io.calc(c),so.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vl(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function d0(i,e){let t=1-i;return t*t*e}function p0(i,e){return 2*(1-i)*i*e}function m0(i,e){return i*i*e}function Gs(i,e,t,n){return d0(i,e)+p0(i,t)+m0(i,n)}function g0(i,e){let t=1-i;return t*t*t*e}function x0(i,e){let t=1-i;return 3*t*t*i*e}function v0(i,e){return 3*(1-i)*i*i*e}function _0(i,e){return i*i*i*e}function Ws(i,e,t,n,s){return g0(i,e)+x0(i,t)+v0(i,n)+_0(i,s)}var sa=class extends wn{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uc=class extends wn{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y),Ws(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends wn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dc=class extends wn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends wn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(e,s.x,r.x,a.x),Gs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends wn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(e,s.x,r.x,a.x),Gs(e,s.y,r.y,a.y),Gs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Vl(o,c.x,l.x,h.x,u.x),Vl(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},la=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:$s,CubicBezierCurve:sa,CubicBezierCurve3:uc,EllipseCurve:Js,LineCurve:ra,LineCurve3:dc,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:ca}),pc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new la[s.type]().fromJSON(s))}return this}},ha=class extends pc{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new sa(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Js(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ti=class i extends Sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],g=n/2,m=0;C(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function C(){let b=new k,z=new k,L=0,D=(t-e)/n;for(let U=0;U<=r;U++){let T=[],M=U/r,P=M*(t-e)+e;for(let K=0;K<=s;K++){let X=K/s,q=X*c+o,ce=Math.sin(q),j=Math.cos(q);z.x=P*ce,z.y=-M*n+g,z.z=P*j,u.push(z.x,z.y,z.z),b.set(ce,D,j).normalize(),f.push(b.x,b.y,b.z),d.push(X,1-M),T.push(x++)}_.push(T)}for(let U=0;U<s;U++)for(let T=0;T<r;T++){let M=_[T][U],P=_[T+1][U],K=_[T+1][U+1],X=_[T][U+1];(e>0||T!==0)&&(h.push(M,P,X),L+=3),(t>0||T!==r-1)&&(h.push(P,K,X),L+=3)}l.addGroup(m,L,0),m+=L}function w(b){let z=x,L=new Ae,D=new k,U=0,T=b===!0?e:t,M=b===!0?1:-1;for(let K=1;K<=s;K++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),x++;let P=x;for(let K=0;K<=s;K++){let q=K/s*c+o,ce=Math.cos(q),j=Math.sin(q);D.x=T*j,D.y=g*M,D.z=T*ce,u.push(D.x,D.y,D.z),f.push(0,M,0),L.x=ce*.5+.5,L.y=j*.5*M+.5,d.push(L.x,L.y),x++}for(let K=0;K<s;K++){let X=z+K,q=P+K;b===!0?h.push(q,q+1,X):h.push(q+1,q,X),U+=3}l.addGroup(m,U,b===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nt=class i extends ti{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ks=class extends ha{constructor(e){super(e),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ha().fromJSON(s))}return this}},y0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=mh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=w0(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return js(r,a,t,o,c,d,0),a}};function mh(i,e,t,n,s){let r,a;if(s===z0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Hl(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Hl(r,i[r],i[r+1],a);return a&&ya(a,a.next)&&(er(a),a=a.next),a}function Gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ya(t,t.next)||bt(t.prev,t,t.next)===0)){if(er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function js(i,e,t,n,s,r,a){if(!i)return;!a&&r&&I0(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?M0(i,n,s,r):b0(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),er(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=S0(Gi(i),e,t),js(i,e,t,n,s,r,2)):a===2&&E0(i,e,t,n,s,r):js(Gi(i),e,t,n,s,r,1);break}}}function b0(i){let e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&gs(s,o,r,c,a,l,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function M0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(bt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=mc(d,x,e,t,n),C=mc(_,g,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=m&&b&&b.z<=C;){if(w.x>=d&&w.x<=_&&w.y>=x&&w.y<=g&&w!==s&&w!==a&&gs(o,h,c,u,l,f,w.x,w.y)&&bt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=d&&b.x<=_&&b.y>=x&&b.y<=g&&b!==s&&b!==a&&gs(o,h,c,u,l,f,b.x,b.y)&&bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=_&&w.y>=x&&w.y<=g&&w!==s&&w!==a&&gs(o,h,c,u,l,f,w.x,w.y)&&bt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=C;){if(b.x>=d&&b.x<=_&&b.y>=x&&b.y<=g&&b!==s&&b!==a&&gs(o,h,c,u,l,f,b.x,b.y)&&bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function S0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ya(s,r)&&gh(s,n,n.next,r)&&Qs(s,r)&&Qs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function E0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&D0(a,o)){let c=xh(a,o);a=Gi(a,a.next),c=Gi(c,c.next),js(a,e,t,n,s,r,0),js(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function w0(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=mh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(L0(l));for(s.sort(T0),r=0;r<s.length;r++)t=A0(s[r],t);return t}function T0(i,e){return i.x-e.x}function A0(i,e){let t=R0(i,e);if(!t)return e;let n=xh(t,i);return Gi(n,n.next),Gi(t,t.next)}function R0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&gs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Qs(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&C0(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function C0(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function I0(i,e,t,n){let s=i;do s.z===0&&(s.z=mc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,P0(s)}function P0(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function mc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function L0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function D0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!U0(i,e)&&(Qs(i,e)&&Qs(e,i)&&N0(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||ya(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ya(i,e){return i.x===e.x&&i.y===e.y}function gh(i,e,t,n){let s=Ur(bt(i,e,t)),r=Ur(bt(i,e,n)),a=Ur(bt(t,n,i)),o=Ur(bt(t,n,e));return!!(s!==r&&a!==o||s===0&&Dr(i,t,e)||r===0&&Dr(i,n,e)||a===0&&Dr(t,i,n)||o===0&&Dr(t,e,n))}function Dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ur(i){return i>0?1:i<0?-1:0}function U0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qs(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function N0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xh(i,e){let t=new gc(i.i,i.x,i.y),n=new gc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hl(i,e,t,n){let s=new gc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Gl(e),Wl(n,e);let a=e.length;t.forEach(Gl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Wl(n,t[c]);let o=y0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Gl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fa=class i extends Sn{constructor(e=new Ks([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:F0,w,b=!1,z,L,D,U;m&&(w=m.getSpacedPoints(h),b=!0,f=!1,z=m.computeFrenetFrames(h,!1),L=new k,D=new k,U=new k),f||(g=0,d=0,x=0,_=0);let T=o.extractPoints(l),M=T.shape,P=T.holes;if(!Xs.isClockWise(M)){M=M.reverse();for(let he=0,xe=P.length;he<xe;he++){let I=P[he];Xs.isClockWise(I)&&(P[he]=I.reverse())}}let X=Xs.triangulateShape(M,P),q=M;for(let he=0,xe=P.length;he<xe;he++){let I=P[he];M=M.concat(I)}function ce(he,xe,I){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(xe,I)}let j=M.length,ue=X.length;function Q(he,xe,I){let be,G,F,ve=he.x-xe.x,Xe=he.y-xe.y,Ie=I.x-he.x,A=I.y-he.y,v=ve*ve+Xe*Xe,W=ve*A-Xe*Ie;if(Math.abs(W)>Number.EPSILON){let ae=Math.sqrt(v),de=Math.sqrt(Ie*Ie+A*A),ne=xe.x-Xe/ae,ze=xe.y+ve/ae,we=I.x-A/de,Pe=I.y+Ie/de,it=((we-ne)*A-(Pe-ze)*Ie)/(ve*A-Xe*Ie);be=ne+ve*it-he.x,G=ze+Xe*it-he.y;let ge=be*be+G*G;if(ge<=2)return new Ae(be,G);F=Math.sqrt(ge/2)}else{let ae=!1;ve>Number.EPSILON?Ie>Number.EPSILON&&(ae=!0):ve<-Number.EPSILON?Ie<-Number.EPSILON&&(ae=!0):Math.sign(Xe)===Math.sign(A)&&(ae=!0),ae?(be=-Xe,G=ve,F=Math.sqrt(v)):(be=ve,G=Xe,F=Math.sqrt(v/2))}return new Ae(be/F,G/F)}let re=[];for(let he=0,xe=q.length,I=xe-1,be=he+1;he<xe;he++,I++,be++)I===xe&&(I=0),be===xe&&(be=0),re[he]=Q(q[he],q[I],q[be]);let fe=[],ye,Ye=re.concat();for(let he=0,xe=P.length;he<xe;he++){let I=P[he];ye=[];for(let be=0,G=I.length,F=G-1,ve=be+1;be<G;be++,F++,ve++)F===G&&(F=0),ve===G&&(ve=0),ye[be]=Q(I[be],I[F],I[ve]);fe.push(ye),Ye=Ye.concat(ye)}for(let he=0;he<g;he++){let xe=he/g,I=d*Math.cos(xe*Math.PI/2),be=x*Math.sin(xe*Math.PI/2)+_;for(let G=0,F=q.length;G<F;G++){let ve=ce(q[G],re[G],be);se(ve.x,ve.y,-I)}for(let G=0,F=P.length;G<F;G++){let ve=P[G];ye=fe[G];for(let Xe=0,Ie=ve.length;Xe<Ie;Xe++){let A=ce(ve[Xe],ye[Xe],be);se(A.x,A.y,-I)}}}let ht=x+_;for(let he=0;he<j;he++){let xe=f?ce(M[he],Ye[he],ht):M[he];b?(D.copy(z.normals[0]).multiplyScalar(xe.x),L.copy(z.binormals[0]).multiplyScalar(xe.y),U.copy(w[0]).add(D).add(L),se(U.x,U.y,U.z)):se(xe.x,xe.y,0)}for(let he=1;he<=h;he++)for(let xe=0;xe<j;xe++){let I=f?ce(M[xe],Ye[xe],ht):M[xe];b?(D.copy(z.normals[he]).multiplyScalar(I.x),L.copy(z.binormals[he]).multiplyScalar(I.y),U.copy(w[he]).add(D).add(L),se(U.x,U.y,U.z)):se(I.x,I.y,u/h*he)}for(let he=g-1;he>=0;he--){let xe=he/g,I=d*Math.cos(xe*Math.PI/2),be=x*Math.sin(xe*Math.PI/2)+_;for(let G=0,F=q.length;G<F;G++){let ve=ce(q[G],re[G],be);se(ve.x,ve.y,u+I)}for(let G=0,F=P.length;G<F;G++){let ve=P[G];ye=fe[G];for(let Xe=0,Ie=ve.length;Xe<Ie;Xe++){let A=ce(ve[Xe],ye[Xe],be);b?se(A.x,A.y+w[h-1].y,w[h-1].x+I):se(A.x,A.y,u+I)}}}oe(),me();function oe(){let he=s.length/3;if(f){let xe=0,I=j*xe;for(let be=0;be<ue;be++){let G=X[be];Fe(G[2]+I,G[1]+I,G[0]+I)}xe=h+g*2,I=j*xe;for(let be=0;be<ue;be++){let G=X[be];Fe(G[0]+I,G[1]+I,G[2]+I)}}else{for(let xe=0;xe<ue;xe++){let I=X[xe];Fe(I[2],I[1],I[0])}for(let xe=0;xe<ue;xe++){let I=X[xe];Fe(I[0]+j*h,I[1]+j*h,I[2]+j*h)}}n.addGroup(he,s.length/3-he,0)}function me(){let he=s.length/3,xe=0;$(q,xe),xe+=q.length;for(let I=0,be=P.length;I<be;I++){let G=P[I];$(G,xe),xe+=G.length}n.addGroup(he,s.length/3-he,1)}function $(he,xe){let I=he.length;for(;--I>=0;){let be=I,G=I-1;G<0&&(G=he.length-1);for(let F=0,ve=h+g*2;F<ve;F++){let Xe=j*F,Ie=j*(F+1),A=xe+be+Xe,v=xe+G+Xe,W=xe+G+Ie,ae=xe+be+Ie;Ze(A,v,W,ae)}}}function se(he,xe,I){c.push(he),c.push(xe),c.push(I)}function Fe(he,xe,I){We(he),We(xe),We(I);let be=s.length/3,G=C.generateTopUV(n,s,be-3,be-2,be-1);ct(G[0]),ct(G[1]),ct(G[2])}function Ze(he,xe,I,be){We(he),We(xe),We(be),We(xe),We(I),We(be);let G=s.length/3,F=C.generateSideWallUV(n,s,G-6,G-3,G-2,G-1);ct(F[0]),ct(F[1]),ct(F[3]),ct(F[1]),ct(F[2]),ct(F[3])}function We(he){s.push(c[he*3+0]),s.push(c[he*3+1]),s.push(c[he*3+2])}function ct(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return O0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new la[s.type]().fromJSON(s)),new i(n,e.options)}},F0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ae(r,a),new Ae(o,c),new Ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ae(a,1-c),new Ae(l,1-u),new Ae(f,1-x),new Ae(_,1-m)]:[new Ae(o,1-c),new Ae(h,1-u),new Ae(d,1-x),new Ae(g,1-m)]}};function O0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Wi=class i extends Sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new k,f=new k,d=[],x=[],_=[],g=[];for(let m=0;m<=n;m++){let C=[],w=m/n,b=0;m===0&&a===0?b=.5/t:m===n&&c===Math.PI&&(b=-.5/t);for(let z=0;z<=t;z++){let L=z/t;u.x=-e*Math.cos(s+L*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(s+L*r)*Math.sin(a+w*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(L+b,1-w),C.push(l++)}h.push(C)}for(let m=0;m<n;m++)for(let C=0;C<t;C++){let w=h[m][C+1],b=h[m][C],z=h[m+1][C],L=h[m+1][C+1];(m!==0||a>0)&&d.push(w,b,L),(m!==n-1||c<Math.PI)&&d.push(b,z,L)}this.setIndex(d),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vt=class i extends Sn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new k,u=new k,f=new k;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,C=(s+1)*d+x;a.push(_,g,C),a.push(g,m,C)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ua=class i extends Sn{constructor(e=new oa(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,c=new k,l=new Ae,h=new k,u=[],f=[],d=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(d,2));function _(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),C(),m()}function g(w){h=e.getPointAt(w/t,h);let b=a.normals[w],z=a.binormals[w];for(let L=0;L<=s;L++){let D=L/s*Math.PI*2,U=Math.sin(D),T=-Math.cos(D);c.x=T*b.x+U*z.x,c.y=T*b.y+U*z.y,c.z=T*b.z+U*z.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let z=(s+1)*(w-1)+(b-1),L=(s+1)*w+(b-1),D=(s+1)*w+b,U=(s+1)*(w-1)+b;x.push(z,L,U),x.push(L,D,U)}}function C(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)l.x=w/t,l.y=b/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new la[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ni=class extends Hi{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Nr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function k0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xc=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qc:r=e,o=2*t-n;break;case Yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qc:a=e,c=2*n-t;break;case Yc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,m=-f*g+2*f*_-f*x,C=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,w=(-1-d)*g+(1.5+d)*_+.5*x,b=d*g-d*_;for(let z=0;z!==o;++z)r[z]=m*a[h+z]+C*a[l+z]+w*a[c+z]+b*a[u+z];return r}},vc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},_c=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nr(t,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nr(e.times,Array),values:Nr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&k0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[d+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=qo;var Xi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Vr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Ln{};yc.prototype.ValueTypeName="color";var bc=class extends Ln{};bc.prototype.ValueTypeName="number";var Mc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)bi.slerpFlat(r,0,a,l-o,a,l,c);return r}},da=class extends Ln{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName="quaternion";da.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Ln{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Vr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Ln{};Sc.prototype.ValueTypeName="vector";var Ec=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},B0=new Ec,wc=class{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pa=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ma=class extends pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ro=new wt,Xl=new k,ql=new k,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ac=class extends Tc{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Ac}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fc="\\[\\]\\.:\\/",V0=new RegExp("["+Fc+"]","g"),Oc="[^"+Fc+"]",H0="[^"+Fc.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",Oc),W0=/(WCOD+)?/.source.replace("WCOD",H0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),Y0=new RegExp("^"+G0+W0+X0+q0+"$"),Z0=["material","materials","bones","map"],Rc=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Z0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Rc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ii=null,ri=null,xn=(function(){try{var i=localStorage.getItem("rm3dsnd");return i===null?!0:i==="1"}catch{return!0}})();function Ls(){if(!ii)try{ii=new(window.AudioContext||window.webkitAudioContext),ri=ii.createGain(),ri.gain.value=.22;var i=ii.createDynamicsCompressor();ri.connect(i),i.connect(ii.destination)}catch{return null}return ii.state==="suspended"&&ii.resume().catch(function(){}),ii}["pointerdown","keydown","touchstart"].forEach(function(i){window.addEventListener(i,function(){xn&&Ls()},{once:!0,passive:!0})});function fn(i,e,t,n,s,r){var a=Ls();if(!(!a||!xn)){var o=a.createOscillator(),c=a.createGain(),l=a.currentTime+(n||0);o.type=t||"sine",o.frequency.setValueAtTime(i,l),r&&o.frequency.exponentialRampToValueAtTime(Math.max(40,i*r),l+e),c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(s||.5,l+.012),c.gain.exponentialRampToValueAtTime(1e-4,l+e),o.connect(c),c.connect(ri),o.start(l),o.stop(l+e+.03)}}var kc={pop:function(){fn(500,.09,"sine",0,.6,2.2)},giggle:function(){for(var i=0;i<5;i++)fn(700+i%2*220,.07,"triangle",i*.075,.4,1.3)},ok:function(){fn(660,.12,"sine",0,.5),fn(880,.18,"sine",.11,.5),fn(1320,.22,"sine",.22,.35)},no:function(){fn(220,.18,"square",0,.3,.7),fn(165,.24,"square",.16,.3,.7)},grumble:function(){fn(95,.5,"sawtooth",0,.35,.8),fn(88,.45,"sawtooth",.35,.3,.75)},whoosh:function(){fn(300,.25,"sawtooth",0,.15,3)},yawn:function(){fn(400,.6,"sine",0,.3,.5)},boing:function(){fn(180,.35,"sine",0,.5,3.5)},dance:function(){[0,2,4,5,7,5,4,2].forEach(function(i,e){fn(440*Math.pow(2,i/12),.1,"triangle",e*.11,.35)})}};function $0(i,e,t){var n=Ls();if(!n||!xn)return 0;var s=sr[i]||sr.mimi,r=0,a=0,o=0,c=String(e).replace(/<[^>]+>/g,""),l=/[?\u061F]\s*[^\w\u0600-\u06FF]*$/.test(c),h=/!/.test(c),u=["a","e","i","o","u"];for(r=0;r<c.length&&o<30;r++){var f=c.charAt(r),d=f.charCodeAt(0);if(f===" "){a+=.05;continue}if(/[.,!?\u060C\u061F:;\u2026\-]/.test(f)){a+=.12;continue}if(!(d>126976||d>=9728&&d<10240)&&r%2!==1){var x=s.f0*Math.pow(2,(d*7%9-4)/14)*(l&&r>c.length-6?1.2:1)*(h?1.05:1),_=u[d%5];ke(s,x,.09,a,.32,{v1:_,v2:u[(d+2)%5],g:1.03,wave:s.wave==="square"?"square":"triangle",rough:0}),o++,a+=.105}}return t&&t(a),a}var Ps=(function(){var i=new Uint8Array([70,140,205,255]),e=new ia(i,4,1,xa);return e.minFilter=e.magFilter=Qt,e.needsUpdate=!0,e})(),K0=new tn({color:2760007,side:Bt});function Ot(i,e){var t=new ni(Object.assign({color:i,gradientMap:Ps},e||{}));return t}function je(i,e,t,n){var s=new $e(i,typeof e=="object"?e:Ot(e,n));if(t!==!1){var r=new $e(i,K0);r.scale.setScalar(1.045),r.userData.ol=1,s.add(r)}return s}function R(i,e,t,n,s,r){var a=je(new Wi(i,28,20),e,r);return a.scale.set(t||1,n||1,s||1),a}function p(i,e,t,n){return i.position.set(e,t,n),i}var Dt=2760007,vh={a:[800,1250],e:[550,1800],i:[300,2300],o:[500,900],u:[350,700]},ba=null,Bc=0;function Mh(i){if(!ba||ba.sampleRate!==i.sampleRate){for(var e=i.sampleRate,t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0),s=0;s<e;s++)n[s]=Math.random()*2-1;ba=t}return ba}function ke(i,e,t,n,s,r){var a=Ls();if(!(!a||!xn)){r=r||{};var o=a.currentTime+(n||0),c=r.wave||i.wave||"sawtooth",l=a.createOscillator();l.type=c,l.frequency.setValueAtTime(e,o),r.g&&l.frequency.exponentialRampToValueAtTime(Math.max(50,e*r.g),o+t);var h=r.vib!=null?r.vib:i.vib||0;if(h){var u=a.createOscillator(),f=a.createGain();u.frequency.value=r.vr||6,f.gain.value=e*h,u.connect(f),f.connect(l.frequency),u.start(o),u.stop(o+t+.05)}var d=a.createGain(),x=s??.5,_=r.att||.018;if(d.gain.setValueAtTime(1e-4,o),d.gain.exponentialRampToValueAtTime(x,o+_),d.gain.setValueAtTime(x,o+Math.max(_,t*.55)),d.gain.exponentialRampToValueAtTime(1e-4,o+t),r.am){var g=a.createOscillator(),m=a.createGain(),C=a.createGain();C.gain.value=.5,m.gain.value=.5,g.frequency.value=r.am,g.connect(m),m.connect(C.gain),d.connect(C),C.connect(ri),g.start(o),g.stop(o+t+.05)}else d.connect(ri);var w=vh[r.v1||i.v1||"a"],b=vh[r.v2||r.v1||i.v2||i.v1||"a"];[0,1].forEach(function(T){var M=a.createBiquadFilter();M.type="bandpass";var P=e>700;M.Q.value=P?1.6:T?9:6,M.frequency.setValueAtTime(w[T],o),M.frequency.linearRampToValueAtTime(b[T],o+t);var K=a.createGain();K.gain.value=(T?2.2:3.4)*(P?1.5:1),l.connect(M),M.connect(K),K.connect(d)});var z=r.rough!=null?r.rough:i.rough||0;if(z){var L=a.createBufferSource();L.buffer=Mh(a),L.loop=!0;var D=a.createBiquadFilter();D.type="bandpass",D.frequency.value=Math.min(3e3,e*3),D.Q.value=.8;var U=a.createGain();U.gain.value=z*1.6,L.connect(D),D.connect(U),U.connect(d),L.start(o),L.stop(o+t+.05)}l.start(o),l.stop(o+t+.05)}}function Zi(i,e,t,n,s,r){var a=Ls();if(!(!a||!xn)){var o=a.currentTime+(t||0),c=a.createBufferSource();c.buffer=Mh(a),c.loop=!0;var l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=i,l.Q.value=s||1;var h=a.createGain();if(h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(n||.5,o+.015),h.gain.exponentialRampToValueAtTime(1e-4,o+e),r){var u=a.createOscillator(),f=a.createGain(),d=a.createGain();d.gain.value=.5,u.type="square",u.frequency.value=r,f.gain.value=.5,u.connect(f),f.connect(d.gain),c.connect(l),l.connect(h),h.connect(d),d.connect(ri),u.start(o),u.stop(o+e+.05)}else c.connect(l),l.connect(h),h.connect(ri);c.start(o),c.stop(o+e+.05)}}var sr={mimi:{f0:640,wave:"sawtooth",v1:"a",v2:"e",rough:.05},pingo:{f0:250,wave:"square",v1:"a",rough:.35},bani:{f0:1250,wave:"triangle",v1:"i",rough:0},leo:{f0:115,wave:"sawtooth",v1:"a",v2:"o",rough:.5,vib:.02},foxy:{f0:800,wave:"sawtooth",v1:"e",v2:"i",rough:.1},chao:{f0:170,wave:"sawtooth",v1:"o",v2:"u",rough:.25},poofy:{f0:260,wave:"sawtooth",v1:"o",v2:"u",rough:.1},luki:{f0:480,wave:"triangle",v1:"u",v2:"o",rough:0,vib:.03},kiko:{f0:400,wave:"sawtooth",v1:"u",v2:"a",rough:.1},dooni:{f0:220,wave:"sawtooth",v1:"a",v2:"o",rough:.4},jooji:{f0:2100,wave:"triangle",v1:"i",rough:0},dragi:{f0:300,wave:"sawtooth",v1:"a",v2:"o",rough:.35,vib:.02},rexi:{f0:95,wave:"sawtooth",v1:"a",v2:"o",rough:.8,vib:.015},tuli:{f0:330,wave:"triangle",v1:"o",v2:"u",rough:0,vib:.015},pupi:{f0:520,wave:"sawtooth",v1:"a",v2:"o",rough:.2},lami:{f0:380,wave:"sawtooth",v1:"a",v2:"e",rough:.3,vib:.03},koaly:{f0:300,wave:"sawtooth",v1:"o",v2:"a",rough:.45},gigi:{f0:440,wave:"triangle",v1:"u",v2:"o"},slowy:{f0:240,wave:"triangle",v1:"i",v2:"a",vib:.02},oinky:{f0:240,wave:"square",v1:"o",rough:.6},gogo:{f0:80,wave:"sawtooth",v1:"o",v2:"u",rough:.75},peli:{f0:300,wave:"square",v1:"a",rough:.45},lady:{f0:1800,wave:"triangle",v1:"i",rough:.05},sara:{f0:720,wave:"triangle",v1:"a",v2:"e"},nilu:{f0:680,wave:"triangle",v1:"e",v2:"a"},roya:{f0:760,wave:"triangle",v1:"a",v2:"i"},mina:{f0:740,wave:"triangle",v1:"o",v2:"a"},yasi:{f0:820,wave:"triangle",v1:"a",v2:"i",vib:.02},dodo:{f0:210,wave:"square",v1:"o",v2:"a",rough:.5},clowny:{f0:520,wave:"triangle",v1:"o",v2:"u",vib:.03},goldy:{f0:760,wave:"sine",v1:"u",v2:"o",vib:.04},dolfi:{f0:900,wave:"sine",v1:"i",v2:"a",vib:.05},shrimpy:{f0:1100,wave:"triangle",v1:"i",rough:.1},seaby:{f0:850,wave:"sine",v1:"u",v2:"i",vib:.04},krabi:{f0:260,wave:"square",v1:"a",rough:.6},hippi:{f0:110,wave:"sawtooth",v1:"o",v2:"u",rough:.6},bugo:{f0:140,wave:"square",v1:"u",v2:"a",rough:.5},hoppy:{f0:700,wave:"sawtooth",v1:"i",v2:"e",rough:.3},pouya:{f0:180,wave:"sawtooth",v1:"a",v2:"o"},farid:{f0:160,wave:"sawtooth",v1:"o",v2:"a"},ario:{f0:230,wave:"sawtooth",v1:"e",v2:"a"},dana:{f0:780,wave:"triangle",v1:"a",v2:"e"},shiva:{f0:700,wave:"triangle",v1:"e",v2:"i"},sina:{f0:190,wave:"sawtooth",v1:"i",v2:"a"},niki:{f0:800,wave:"triangle",v1:"i",v2:"a"},mahsa:{f0:740,wave:"triangle",v1:"a",v2:"o"},omid:{f0:170,wave:"sawtooth",v1:"o",v2:"a",rough:.1},babak:{f0:150,wave:"sawtooth",v1:"a",v2:"o",rough:.2},kian:{f0:190,wave:"sawtooth",v1:"e",v2:"a"},arash:{f0:210,wave:"sawtooth",v1:"i",v2:"a"},sami:{f0:200,wave:"sawtooth",v1:"a",v2:"e",rough:.1}},Ma={mimi:function(i,e){ke(i,560,.16,0,.5,{g:1.6,v1:"a",v2:"e"}),ke(i,900,.38,.15,.5,{g:.6,v1:"e",v2:"o",vib:.02})},pingo:function(i,e){ke(i,280,.14,0,.5,{g:1.1}),ke(i,300,.22,.19,.5,{g:.9,rough:.5})},bani:function(i,e){ke(i,1300,.08,0,.4,{g:1.3}),ke(i,1450,.09,.12,.4,{g:1.25})},leo:function(i,e){ke(i,130,.95,0,.6,{g:.65,rough:.8,vib:.03,vr:9}),Zi(300,.6,0,.12,.7)},foxy:function(i,e){ke(i,850,.08,0,.45,{g:1.35}),ke(i,900,.08,.1,.45,{g:1.3}),ke(i,1e3,.28,.21,.45,{g:.75,v1:"i",vib:.03,vr:10})},chao:function(i,e){ke(i,160,.55,0,.55,{g:.8,rough:.35,v1:"o",v2:"u"})},poofy:function(i,e){ke(i,240,.2,0,.5,{g:1.3,v1:"o"}),ke(i,300,.38,.2,.45,{g:.8,v1:"u",v2:"a"})},luki:function(i,e){ke(i,420,.45,0,.45,{g:1.5,vib:.05,vr:5}),ke(i,630,.55,.4,.4,{g:.6,vib:.06,vr:5})},kiko:function(i,e){ke(i,380,.12,0,.45,{g:1.3}),ke(i,420,.12,.15,.45,{g:1.3}),ke(i,520,.16,.32,.45,{g:.85,v1:"a"}),ke(i,540,.2,.5,.45,{g:.8,v1:"a"})},dooni:function(i,e){ke(i,520,.36,0,.5,{g:1.5,v1:"i",rough:.55}),ke(i,250,.5,.34,.55,{g:.75,v1:"a",v2:"o",rough:.6}),ke(i,540,.3,.95,.45,{g:1.4,v1:"i",rough:.5}),ke(i,240,.4,1.22,.5,{g:.75,v1:"a",v2:"o",rough:.6})},jooji:function(i,e){[0,.09,.18].forEach(function(t){ke(i,2200,.06,t,.3,{g:1.4})}),ke(i,1900,.13,.32,.3,{g:.8})},dragi:function(i,e){ke(i,230,.65,0,.55,{g:1.6,v1:"a",v2:"o",rough:.55,vib:.04,vr:8}),ke(i,880,.5,.1,.15,{g:1.5,wave:"sine"})},rexi:function(i,e){ke(i,700,.28,0,.4,{g:.5,rough:.8,v1:"e",v2:"a"}),ke(i,100,1,.12,.65,{g:.6,rough:1,vib:.025,vr:12}),Zi(220,.8,.1,.15,.6)},tuli:function(i,e){ke(i,320,.5,0,.4,{g:.9,v1:"o",v2:"u"}),ke(i,900,.07,.56,.25,{g:1.3})},pupi:function(i,e){ke(i,520,.13,0,.55,{g:.55,v1:"a",v2:"o",rough:.35}),ke(i,540,.13,.24,.55,{g:.55,v1:"a",v2:"o",rough:.35})}},Sh={happy:function(i,e){ke(i,i.f0,.12,0,.45,{g:1.25}),ke(i,i.f0*1.25,.17,.13,.45,{g:1.2})},greet:function(i,e){(Ma[e.voice]||Ma.mimi)(i,e)},laugh:function(i,e){for(var t=0;t<5;t++)ke(i,i.f0*(t%2?1.4:1.15),.07,t*.085,.4,{g:.85,v1:"a",v2:"a"})},sad:function(i,e){ke(i,i.f0*1.1,.8,0,.4,{g:.6,vib:.04,vr:5,v1:"u",v2:"o"})},angry:function(i,e){ke(i,i.f0*.7,.22,0,.55,{g:.8,rough:.7}),ke(i,i.f0*.65,.3,.26,.55,{g:.75,rough:.8})},scared:function(i,e){ke(i,i.f0*1.6,.2,0,.45,{g:1.5,vib:.08,vr:14}),ke(i,i.f0*1.8,.16,.24,.4,{g:1.3,vib:.08,vr:14})},sleepy:function(i,e){ke(i,i.f0*.8,1,0,.35,{g:.55,v1:"a",v2:"u",att:.12})},snore:function(i,e){ke(i,i.f0*.45,.55,0,.25,{g:.8,rough:1,att:.15})},yum:function(i,e){for(var t=0;t<3;t++)ke(i,i.f0*(.95+t*.06),.1,t*.14,.4,{g:1.1,v1:"u",v2:"o"})},love:function(i,e){ke(i,i.f0*1.1,.55,0,.38,{g:1.3,vib:.03,vr:6,v1:"o",v2:"a",att:.08})},raspberry:function(i,e){Zi(900,.55,0,2.4,.9,26)},smack:function(i,e){Zi(2200,.05,0,.5,1.5),fn(700,.09,"sine",.02,.35,1.9)},taunt:function(i,e){ke(i,i.f0*1.3,.22,0,.45,{g:.8,v1:"e",v2:"a"}),ke(i,i.f0*1.1,.26,.26,.45,{g:.8,v1:"e",v2:"a"})},sneeze:function(i,e){ke(i,i.f0*1.1,.3,0,.3,{g:1.3,att:.2}),Zi(2400,.16,.4,.55,.8),ke(i,i.f0*.8,.12,.42,.4,{g:.6})},dizzy:function(i,e){ke(i,i.f0,.9,0,.4,{g:1,vib:.12,vr:4})},whee:function(i,e){ke(i,i.f0,.5,0,.42,{g:1.8,v1:"i",v2:"a"})},grunt:function(i,e){ke(i,i.f0*.6,.25,0,.5,{g:.8,rough:.8})},hup:function(i,e){ke(i,i.f0*1.2,.08,0,.35,{g:1.4})},ouch:function(i,e){ke(i,i.f0*1.4,.2,0,.45,{g:.6,v1:"a",v2:"o"})},hmph:function(i,e){Zi(500,.22,0,.3,.6),ke(i,i.f0*.6,.25,.05,.4,{g:.7,rough:.4})},purr:function(i,e){ke(i,i.f0*.15,1.2,0,.5,{wave:"sawtooth",am:26,rough:.4,g:1,v1:"o",att:.2})},whine:function(i,e){ke(i,i.f0*1.5,.6,0,.35,{g:.8,vib:.05,vr:7,v1:"i",v2:"o"})},growl:function(i,e){ke(i,i.f0*.5,.8,0,.5,{g:.9,rough:.9,am:30,att:.1}),Zi(300,.6,.05,.12,.7)},chirp:function(i,e){ke(i,i.f0*1.05,.06,0,.3,{g:1.4}),ke(i,i.f0*1.15,.06,.09,.3,{g:1.4})},squeak:function(i,e){ke(i,i.f0*1.6,.09,0,.35,{g:1.5,v1:"i"})},ooh:function(i,e){Ma.kiko(i,e)}},j0={greet:1.2,laugh:.5,sad:.85,angry:.6,scared:.45,sleepy:1.1,snore:.7,yum:.45,love:.6,raspberry:.6,smack:.15,taunt:.55,sneeze:.6,dizzy:.95,whee:.55,grunt:.3,hup:.1,ouch:.25,hmph:.35,purr:1.3,whine:.65,growl:.85,chirp:.2,squeak:.1,ooh:.7,happy:.35};function Sa(i,e,t){var n=Ls();if(!n||!xn||!i)return 0;var s=n.currentTime;if(s<Bc&&!t)return 0;var r=sr[i.voice]||sr.mimi,a=Sh[e];if(!a)return 0;var o=i.voice,c=j0[e]||.5;return e==="greet"&&(c={leo:1,dooni:1.6,rexi:1.2}[o]||.8),a(r,i),Bc=s+c*.8,c}var Q0={wave:"greet",cheer:"happy",laugh:"laugh",sad:"sad",angry:"angry",scared:"scared",yawn:"sleepy",sleep:"snore",loaf:"snore",eat:"yum",hearteyes:"love",hug:"love",kiss:"smack",raspberry:"raspberry",tongue:"raspberry",taunt:"taunt",sneeze:"sneeze",dizzy:"dizzy",faint:"sad",spin:"whee",flex:"grunt",clap:"happy",sulk:"hmph",turnback:"hmph",booty:"laugh",hipshake:"happy",wink:"happy",shy:"squeak",bored:"sleepy",shrug:"hmph",facepalm:"sad",roar:"growl",purr:"purr",bray:"greet",breathe:"growl",stomp:"growl",peck:"chirp",scratch:"ooh",hide:"squeak",beg:"whine",flap:"chirp",thump:"grunt",nibble:"yum",binky:"whee",swat:"hup",manes:"growl",dive:"hup",fishgulp:"yum",nod:"happy",idea:"happy",bow:"happy"};function Tt(i,e,t){var n=new $s(i.map(function(s){return new k(s[0],s[1],s[2])}));return je(new ua(n,20,e,8,!1),t)}var ir={mimi:{g:"f",kind:"cat",fur:14015724,dark:10135236,belly:16777215,inner:16757702,nose:16748459,voice:"mimi",grav:1,jump:1,speed:1},pingo:{g:"m",kind:"penguin",fur:8365788,dark:5603517,belly:16777215,beak:16751918,voice:"pingo",grav:1,jump:.85,speed:.8},bani:{g:"f",kind:"bunny",fur:16774904,dark:16765919,belly:16777215,inner:16759245,nose:16748459,voice:"bani",grav:1,jump:1.25,speed:1},leo:{g:"m",kind:"lion",fur:16235596,dark:14257695,belly:16770728,mane:[14916149,13202204],nose:8011548,voice:"leo",grav:1,jump:1,speed:.9},foxy:{g:"f",kind:"fox",fur:16102250,dark:14256954,belly:16774370,inner:16763350,nose:2760007,voice:"foxy",grav:1,jump:1.1,speed:1.15},chao:{g:"m",kind:"bear",fur:15246426,dark:14263361,belly:16773334,inner:16765352,nose:2760007,voice:"chao",grav:1,jump:.95,speed:.9},poofy:{g:"f",kind:"bear",fur:10842694,dark:8019143,belly:12158295,inner:7030055,nose:2760007,hood:8019143,voice:"poofy",grav:1,jump:.9,speed:.85},luki:{g:"m",kind:"ghost",fur:13616373,dark:11773167,belly:15130364,voice:"luki",grav:.3,jump:.9,speed:.9},kiko:{g:"m",kind:"monkey",fur:10119742,dark:7227175,belly:15980462,inner:15980462,nose:2760007,voice:"kiko",grav:1,jump:1.3,speed:1.2},dooni:{g:"m",kind:"donkey",fur:12035994,dark:7299672,belly:16117476,inner:16764888,nose:2760007,voice:"dooni",grav:1,jump:.9,speed:.9},jooji:{g:"f",kind:"chick",fur:16769116,dark:16763187,belly:16774064,beak:16751918,voice:"jooji",grav:1,jump:1,speed:1.1},dragi:{g:"f",kind:"dragon",fur:12164095,dark:8346864,belly:16771235,inner:16765286,nose:2760007,voice:"dragi",grav:1,jump:1.1,speed:1},rexi:{g:"m",kind:"dino",fur:6541220,dark:3120246,belly:15400947,inner:16751164,nose:2760007,voice:"rexi",grav:1,jump:.8,speed:.95},tuli:{g:"f",kind:"turtle",fur:9425274,dark:6270546,belly:15988681,inner:10124092,nose:2760007,voice:"tuli",grav:1,jump:.55,speed:.45},pupi:{g:"f",kind:"puppy",fur:16777215,dark:15260879,belly:16777215,inner:15852760,nose:2760007,voice:"pupi",grav:1,jump:1.1,speed:1.15},lami:{g:"f",kind:"llama",fur:16181974,dark:14271392,belly:16775146,inner:3983028,nose:2760007,voice:"lami",grav:1,jump:1,speed:1},koaly:{g:"m",kind:"koala",fur:10397364,dark:7173509,belly:15659252,inner:15979486,nose:2829107,voice:"koaly",grav:1,jump:.7,speed:.55},gigi:{g:"f",kind:"giraffe",fur:16766046,dark:12154415,belly:16773314,inner:12154415,nose:2760007,voice:"gigi",grav:1,jump:.9,speed:.9},slowy:{g:"m",kind:"sloth",fur:11901560,dark:8019773,belly:15260095,inner:15392712,nose:2760007,voice:"slowy",grav:1,jump:.5,speed:.4},oinky:{g:"f",kind:"pig",fur:16757703,dark:15765419,belly:16763609,inner:16748464,nose:16744355,voice:"oinky",grav:1,jump:.9,speed:.95},gogo:{g:"m",kind:"gorilla",fur:7106434,dark:4869212,belly:10131366,inner:13219756,nose:1908006,voice:"gogo",grav:1.1,jump:.9,speed:.9},peli:{g:"f",kind:"pelican",fur:16777215,dark:14279406,belly:15988731,beak:16756285,inner:16762726,voice:"peli",grav:1,jump:.9,speed:.8},lady:{g:"f",kind:"ladybug",fur:16727357,dark:2829107,belly:16770019,head:2829107,voice:"lady",grav:.6,jump:1.2,speed:1.1},rexa:{g:"f",kind:"dino",fur:9079356,dark:6052898,belly:15130536,inner:16747109,nose:2760007,voice:"rexi",grav:1,jump:0.8,speed:0.9},blazo:{g:"m",kind:"dino",fur:7311210,dark:4151876,belly:14279368,inner:16755601,nose:2760007,voice:"rexi",grav:1,jump:0.8500000000000001,speed:0.9400000000000001},orro:{g:"m",kind:"dino",fur:11034682,dark:7223840,belly:15257510,inner:16747109,nose:2760007,voice:"rexi",grav:1,jump:0.9,speed:0.98},viola:{g:"f",kind:"dino",fur:5208666,dark:2968119,belly:14016693,inner:16755601,nose:2760007,voice:"rexi",grav:1,jump:0.8,speed:1.02},tano:{g:"m",kind:"dino",fur:13215339,dark:9202490,belly:15786684,inner:16747109,nose:2760007,voice:"rexi",grav:1,jump:0.8500000000000001,speed:0.9},minty:{g:"f",kind:"dino",fur:8824382,dark:5599519,belly:14937008,inner:16755601,nose:2760007,voice:"rexi",grav:1,jump:0.9,speed:0.9400000000000001},spiko:{g:"m",kind:"dino",fur:8025700,dark:4868152,belly:14209720,inner:16747109,nose:2760007,voice:"rexi",grav:1,jump:0.8,speed:0.98},yelli:{g:"f",kind:"dino",fur:13152352,dark:9402928,belly:15919288,inner:16755601,nose:2760007,voice:"rexi",grav:1,jump:0.8500000000000001,speed:1.02},tweety:{g:"m",kind:"chick",fur:16498733,dark:15900160,belly:16773560,beak:16757504,voice:"jooji",grav:1,jump:1,speed:1},parro:{g:"f",kind:"chick",fur:15022389,dark:2001125,belly:16771899,beak:16757504,voice:"jooji",grav:1,jump:1,speed:1},ducky:{g:"f",kind:"chick",fur:16777215,dark:16769154,belly:16776679,beak:16750592,voice:"dodo",grav:1,jump:1,speed:1},robin:{g:"m",kind:"chick",fur:9268835,dark:6111287,belly:16740419,beak:16758605,voice:"jooji",grav:1,jump:1,speed:1},owly:{g:"m",kind:"chick",fur:9136970,dark:6112816,belly:15260092,beak:16757504,voice:"dodo",grav:1,jump:1,speed:1},tuco:{g:"m",kind:"chick",fur:2171169,dark:0,belly:16777215,beak:16750592,voice:"dodo",grav:1,jump:1,speed:1},emper:{g:"m",kind:"penguin",fur:2503224,dark:1056807,belly:16777215,beak:16752640,voice:"pingo",grav:1,jump:0.8,speed:0.8},blupe:{g:"f",kind:"penguin",fur:5995161,dark:3097944,belly:16777215,beak:16747109,voice:"pingo",grav:1,jump:0.85,speed:0.85},flami:{g:"f",kind:"pelican",fur:16027569,dark:15483002,belly:16301008,beak:7162945,inner:16301008,voice:"peli",grav:1,jump:0.9,speed:0.8},beeo:{g:"m",kind:"ladybug",fur:16766464,dark:2171169,belly:16774557,head:2171169,voice:"lady",grav:0.6,jump:1.2,speed:1.1},monar:{g:"f",kind:"ladybug",fur:16740096,dark:2171169,belly:16769202,head:2171169,voice:"lady",grav:0.5,jump:1.3,speed:1.1},bluey:{g:"m",kind:"ladybug",fur:9067051,dark:4861460,belly:14270618,head:4861460,voice:"lady",grav:0.6,jump:1.2,speed:1.1},leafy:{g:"f",kind:"ladybug",fur:6732650,dark:1793568,belly:14478792,head:1793568,voice:"lady",grav:0.6,jump:1.2,speed:1.1},scarab:{g:"m",kind:"beetle",fur:35195,dark:19776,belly:8440772,head:26972,voice:"bugo",grav:1,jump:0.8,speed:0.95},stagi:{g:"m",kind:"beetle",fur:7162945,dark:4073251,belly:12364452,head:5125166,voice:"bugo",grav:1,jump:0.8,speed:0.95},anty:{g:"f",kind:"beetle",fur:9251595,dark:4073251,belly:14132110,head:6101512,voice:"bugo",grav:1,jump:0.9,speed:1.2},cricky:{g:"m",kind:"grasshopper",fur:9268835,dark:6111287,belly:14142664,voice:"hoppy",grav:1,jump:1.6,speed:1.1},mantis:{g:"f",kind:"grasshopper",fur:11457921,dark:5606191,belly:15857897,voice:"hoppy",grav:1,jump:1.5,speed:1.1},appli:{g:"f",kind:"ghost",fur:15022389,dark:12000284,belly:15702682,fruit:1,leaf:4431943,stem:7162945,voice:"jooji",grav:1,jump:1.1,speed:0.95},oranj:{g:"m",kind:"ghost",fur:16485376,dark:15094016,belly:16764032,fruit:1,leaf:4431943,stem:5606191,spots:[[-0.3,-0.7],[0.35,-0.55],[0,-0.4]],sc:15690752,sr:.07,voice:"lady",grav:1,jump:1.1,speed:0.95},lemi:{g:"f",kind:"ghost",fur:16635957,dark:16361509,belly:16774557,fruit:1,leaf:8172354,stem:8172354,ft:[1.05,1,1.05],voice:"jooji",grav:1,jump:1.1,speed:0.95},nana:{g:"m",kind:"ghost",fur:16771899,dark:16361509,belly:16775620,fruit:1,leaf:-1,stem:7162945,ft:[.62,1.5,.75],voice:"lady",grav:1,jump:1.1,speed:0.95},berry:{g:"f",kind:"ghost",fur:15277667,dark:11342935,belly:16301008,fruit:1,leaf:4431943,leaf2:1,stem:6732650,spots:[[-0.4,-0.35],[0.4,-0.35],[0,-0.6],[-0.2,-0.85],[0.25,-0.85],[-0.65,-0.65],[0.65,-0.65]],hs:[[-0.85,0.2],[0.85,0.2],[-0.65,0.7],[0.65,0.7],[0,0.88],[-0.9,-0.2],[0.9,-0.2]],sc:16773494,sr:.11,ft:[.95,1.15,.95],voice:"jooji",grav:1,jump:1.1,speed:0.95},melo:{g:"m",kind:"ghost",fur:4431943,dark:1793568,belly:13166281,fruit:1,leaf:-1,stem:3369246,spots:[[-0.55,-0.45],[0.55,-0.45],[0,-0.78],[-0.3,-0.9],[0.3,-0.9]],hs:[[-0.85,0.35],[0.85,0.35],[0,0.88],[-0.55,0.7],[0.55,0.7]],sc:1793568,sr:.14,voice:"lady",grav:1,jump:1.1,speed:0.95},grapo:{g:"f",kind:"ghost",fur:8280002,dark:4532128,belly:11771355,fruit:1,leaf:4431943,stem:6111287,spots:[[-0.45,-0.4],[0.45,-0.4],[0,-0.7],[-0.7,-0.1],[0.7,-0.1]],hs:[[-0.8,0.35],[0.8,0.35],[0,0.88]],sc:11771355,sr:.13,voice:"jooji",grav:1,jump:1.1,speed:0.95},peary:{g:"m",kind:"ghost",fur:10275941,dark:6856504,belly:14478792,fruit:1,leaf:4431943,stem:7162945,ft:[1,1.25,1],voice:"lady",grav:1,jump:1.1,speed:0.95},peachy:{g:"f",kind:"ghost",fur:16755601,dark:16740419,belly:16769202,fruit:1,leaf:4431943,leaf2:1,stem:7162945,voice:"jooji",grav:1,jump:1.1,speed:0.95},cherri:{g:"f",kind:"ghost",fur:12720219,dark:8916559,belly:16027569,fruit:1,leaf:4431943,leaf2:1,stem:7162945,ft:[1.1,.95,1.1],voice:"jooji",grav:1,jump:1.1,speed:0.95},kiwo:{g:"m",kind:"ghost",fur:9268835,dark:6111287,belly:12968357,fruit:1,leaf:-1,stem:-1,spots:[[-0.4,-0.5],[0.4,-0.5],[0,-0.8]],hs:[[-0.85,0.2],[0.85,0.2],[0,0.88]],sc:4073251,sr:.05,voice:"lady",grav:1,jump:1.1,speed:0.95},pina:{g:"m",kind:"ghost",fur:16498733,dark:16088855,belly:16773494,fruit:1,leaf:3046706,crown:6,stem:-1,spots:[[-0.4,-0.45],[0.4,-0.45],[0,-0.7],[-0.7,-0.15],[0.7,-0.15],[0,-0.2]],sc:16088855,sr:.07,ft:[1,1.25,1],voice:"lady",grav:1,jump:1.1,speed:0.95},avoca:{g:"f",kind:"ghost",fur:5606191,dark:3369246,belly:14477173,fruit:1,leaf:-1,stem:-1,ft:[1,1.25,1],voice:"jooji",grav:1,jump:1.1,speed:0.95},coco:{g:"m",kind:"ghost",fur:7162945,dark:4073251,belly:16777215,fruit:1,leaf:-1,stem:-1,spots:[[-0.25,-0.55],[0.25,-0.55],[0,-0.8]],sc:4073251,sr:.09,voice:"lady",grav:1,jump:1.1,speed:0.95},mango:{g:"m",kind:"ghost",fur:16763432,dark:16361509,belly:16774064,fruit:1,leaf:3046706,leaf2:1,stem:6732650,spots:[[-0.6,-0.15],[-0.45,-0.45],[-0.75,-0.4]],hs:[[-0.8,0.1],[-0.65,0.55],[0.8,0.8]],sc:15684432,sr:.15,ft:[1.2,1.0,.95],voice:"lady",grav:1,jump:1.1,speed:0.95},sara:{g:"f",kind:"human",job:"doctor",hair:"bun",hc:4860698,skin:15909531,fur:16777215,dark:2920352,belly:3520452,voice:"sara",grav:1,jump:1,speed:1},nilu:{g:"f",kind:"human",job:"teacher",hair:"bob",hc:7027487,skin:14262394,fur:15774529,dark:5913128,belly:16777215,voice:"nilu",grav:1,jump:1,speed:1},roya:{g:"f",kind:"human",job:"astro",hair:"pony",hc:2829107,skin:15909531,fur:16054010,dark:12108502,belly:14673650,voice:"roya",grav:1,jump:1.2,speed:1},mina:{g:"f",kind:"human",job:"artist",hair:"curly",hc:11882539,skin:11037509,fur:8019184,dark:4864655,belly:10126079,voice:"mina",grav:1,jump:1,speed:1.05},yasi:{g:"f",kind:"human",job:"singer",hair:"long",hc:10841087,skin:16766901,fur:16732067,dark:12724346,belly:16765286,voice:"yasi",grav:1,jump:1,speed:1.05},omid:{g:"m",kind:"human",job:"chef",hair:"short",hc:2825492,skin:14262394,fur:16777215,dark:3817301,belly:15199736,voice:"omid",grav:1,jump:.9,speed:.9},babak:{g:"m",kind:"human",job:"builder",hair:"short",hc:2829107,skin:11037509,fur:16747039,dark:3885675,belly:16763187,voice:"babak",grav:1,jump:.9,speed:.9},kian:{g:"m",kind:"human",job:"pilot",hair:"short",hc:1908006,skin:15909531,fur:2307691,dark:1450570,belly:16777215,voice:"kian",grav:1,jump:1,speed:1},arash:{g:"m",kind:"human",job:"scientist",hair:"wild",hc:15658734,skin:16766901,fur:16777215,dark:7044505,belly:10475775,voice:"arash",grav:1,jump:.9,speed:1},sami:{g:"m",kind:"human",job:"gamer",hair:"spiky",hc:2078207,skin:8014379,fur:8015103,dark:3811983,belly:5977814,voice:"sami",grav:1,jump:1.15,speed:1.1},dodo:{g:"m",kind:"dodo",fur:10465474,dark:8228772,belly:14279404,beak:14925898,inner:15784298,voice:"dodo",grav:1,jump:.7,speed:.75},clowny:{g:"m",kind:"clownfish",fur:16742938,dark:14900480,belly:16756838,voice:"clowny",grav:.35,jump:1,speed:.9},goldy:{g:"f",kind:"goldfish",fur:16730670,dark:16747100,belly:16757145,voice:"goldy",grav:.35,jump:1.1,speed:1},dolfi:{g:"m",kind:"dolphin",fur:7317724,dark:5211837,belly:15923455,voice:"dolfi",grav:.35,jump:1.2,speed:1.1},shrimpy:{g:"f",kind:"shrimp",fur:16748410,dark:15032394,belly:16765124,voice:"shrimpy",grav:.6,jump:1.2,speed:1.1},seaby:{g:"f",kind:"seahorse",fur:16758861,dark:15043103,belly:16769960,voice:"seaby",grav:.3,jump:1,speed:.7},krabi:{g:"m",kind:"crab",fur:16734794,dark:14039596,belly:16757672,voice:"krabi",grav:1,jump:.9,speed:1},hippi:{g:"f",kind:"hippo",fur:12034244,dark:9271200,belly:15320016,inner:15320016,nose:6968696,voice:"hippi",grav:1.1,jump:.6,speed:.6},bugo:{g:"m",kind:"beetle",fur:4163280,dark:2775702,belly:9417960,head:7314390,voice:"bugo",grav:1,jump:.8,speed:.95},hoppy:{g:"m",kind:"grasshopper",fur:9163599,dark:6267700,belly:14086824,voice:"hoppy",grav:1,jump:1.6,speed:1.1},pouya:{g:"m",kind:"human",job:"doctor",hair:"short",hc:2825492,skin:14262394,fur:16777215,dark:2920352,belly:3520452,voice:"pouya",grav:1,jump:1,speed:1},farid:{g:"m",kind:"human",job:"teacher",hair:"short",hc:5593702,skin:15909531,fur:9067067,dark:3811880,belly:16777215,voice:"farid",grav:1,jump:.9,speed:.9},ario:{g:"m",kind:"human",job:"student",hair:"spiky",hc:2825492,skin:16766901,fur:3898367,dark:2767467,belly:16777215,voice:"ario",grav:1,jump:1.2,speed:1.1},dana:{g:"f",kind:"human",job:"student",cap:1,hair:"long",hc:3810068,skin:14262394,fur:16743068,dark:7027274,belly:16777215,voice:"dana",grav:1,jump:1.1,speed:1.05},shiva:{g:"f",kind:"human",job:"lawyer",hair:"bob",hc:1908006,skin:15909531,fur:3093312,dark:1908522,belly:16777215,voice:"shiva",grav:1,jump:.95,speed:1},sina:{g:"m",kind:"human",job:"engineer",hair:"short",hc:4860698,skin:14262394,fur:13035594,dark:3885675,belly:15265532,voice:"sina",grav:1,jump:.95,speed:1},niki:{g:"f",kind:"human",job:"programmer",hair:"pony",hc:1908006,skin:16766901,fur:11832575,dark:5914528,belly:15195391,voice:"niki",grav:1,jump:1.05,speed:1.05},mahsa:{g:"f",kind:"human",job:"nurse",hair:"bob",hc:2825492,skin:14262394,fur:16752578,dark:14246026,belly:16777215,voice:"mahsa",grav:1,jump:1,speed:1},hana:{g:"f",kind:"human",job:"magic",hair:"short",hc:16743096,skin:16769999,fur:16734885,dark:12725882,belly:16773288,eye:16732067,er:.22,ea:1.4,ex:.4,voice:"yasi",grav:1,jump:1.15,speed:1.1},ryo:{g:"m",kind:"human",job:"hero",hair:"spiky",hc:16747039,skin:16175016,fur:3107839,dark:1718943,belly:16777215,eye:3121407,er:.2,ea:1.4,voice:"sami",grav:1,jump:1.2,speed:1.15},kaze:{g:"f",kind:"human",job:"ninja",hair:"pony",hc:3811962,skin:16177600,fur:2764618,dark:1316904,belly:5922698,eye:8015103,er:.2,ea:1.45,voice:"niki",grav:.9,jump:1.3,speed:1.2},yuki:{g:"f",kind:"human",job:"school",hair:"long",hc:1908026,skin:16769999,fur:16054015,dark:2240602,belly:16777215,eye:4877311,er:.21,ea:1.4,voice:"mina",grav:1,jump:1.05,speed:1.05},zorp:{g:"m",kind:"human",job:"alien",hair:"none",hc:5953114,skin:8118394,fur:12109016,dark:5925512,belly:15266047,eye:1118481,er:.27,ea:1.6,ex:.5,ey:.05,voice:"arash",grav:.8,jump:1.3,speed:1},blip:{g:"m",kind:"human",job:"cyclops",hair:"none",hc:9060304,skin:11561712,fur:4861834,dark:2759258,belly:14268671,eye:16769354,er:.4,ea:1.1,ex:.05,ey:.12,voice:"babak",grav:.9,jump:1.2,speed:1},octa:{g:"f",kind:"human",job:"octo",hair:"none",hc:16740264,skin:16752324,fur:6963104,dark:3809136,belly:16765414,eye:3809136,er:.22,ea:1.35,voice:"roya",grav:.9,jump:1.1,speed:1},fuzz:{g:"m",kind:"human",job:"fuzz",hair:"none",hc:4892927,skin:5944575,fur:3112920,dark:1724319,belly:12575743,eye:16765952,er:.2,ea:1.1,ex:.42,voice:"babak",grav:1,jump:1.2,speed:1.1},gobo:{g:"m",kind:"human",job:"goblin",hair:"none",hc:4885034,skin:8176195,fur:7031338,dark:3811348,belly:13214827,eye:16765952,er:.17,ea:1.2,voice:"omid",grav:1,jump:1,speed:1.1},gloop:{g:"m",kind:"human",job:"gloop",hair:"none",hc:10112992,skin:12086527,fur:9060304,dark:5906336,belly:14859007,eye:1118481,er:.2,voice:"sami",grav:.8,jump:1.3,speed:.95},dem:{g:"m",kind:"human",job:"demon",hair:"none",hc:12852778,skin:15222074,fur:4853792,dark:2361362,belly:16747114,eye:16769354,er:.17,ea:1.25,voice:"kian",grav:1,jump:1.1,speed:1.05},drac:{g:"m",kind:"human",job:"vamp",hair:"short",hc:1118488,skin:15328494,fur:1708064,dark:656912,belly:11538474,eye:13635632,er:.15,ea:1.25,voice:"farid",grav:1,jump:1,speed:.95},zomb:{g:"m",kind:"human",job:"zombie",hair:"wild",hc:3820074,skin:10467450,fur:5925498,dark:2765632,belly:9083562,eye:15790272,er:.17,ea:1,voice:"omid",grav:1,jump:.8,speed:.8},skel:{g:"m",kind:"human",job:"skeleton",hair:"none",hc:16777215,skin:16052710,fur:1908784,dark:921624,belly:1908784,eye:0,er:.23,ea:1.2,ex:.38,voice:"babak",grav:1,jump:1.2,speed:1.1},jack:{g:"m",kind:"human",job:"pumpkin",hair:"none",hc:4880922,skin:16747039,fur:2826304,dark:1182752,belly:5913226,eye:16769354,er:.17,ea:1.2,voice:"sami",grav:1,jump:1.1,speed:1},wolfy:{g:"m",kind:"human",job:"were",hair:"none",hc:7031338,skin:10121288,fur:4872826,dark:2765894,belly:13217930,eye:16761856,er:.16,ea:1.25,voice:"babak",grav:1,jump:1.1,speed:1.1},merlo:{g:"m",kind:"human",job:"wizard",hair:"none",hc:15921906,skin:15780262,fur:5914576,dark:3022730,belly:10126079,eye:3898367,er:.13,voice:"farid",grav:1,jump:.85,speed:.85},morga:{g:"f",kind:"human",job:"witch",hair:"long",hc:1710626,skin:10933866,fur:2826042,dark:1314334,belly:6963104,eye:16734928,er:.17,ea:1.3,voice:"nilu",grav:.95,jump:1.1,speed:1},pip:{g:"m",kind:"human",job:"apprentice",hair:"short",hc:11882539,skin:15909531,fur:2067158,dark:1003402,belly:16765286,eye:3811860,er:.16,voice:"ario",grav:1,jump:1.2,speed:1.15},ilia:{g:"f",kind:"human",job:"sorc",hair:"long",hc:14674431,skin:16508118,fur:5941480,dark:2779816,belly:15267583,eye:4901119,er:.19,ea:1.35,voice:"sara",grav:.95,jump:1.05,speed:1},baly:{g:"f",kind:"human",job:"butterfly",hair:"bob",hc:8011728,skin:16769999,fur:16751151,dark:12735514,belly:16769162,eye:11554815,er:.2,ea:1.35,voice:"mina",grav:.7,jump:1.3,speed:1.1},marin:{g:"f",kind:"human",job:"mermaid",hair:"long",hc:3133632,skin:16769999,fur:3127496,dark:1736616,belly:12580095,eye:1744848,er:.21,ea:1.4,voice:"yasi",grav:.9,jump:1.1,speed:1}},eg={cat:{eye:3129216,er:.18,ea:1.25},penguin:{er:.15,ex:.36,ea:1.1},bunny:{eye:14042479,er:.17},lion:{eye:13208090,er:.15,lid:.25,ea:1},fox:{eye:13203482,er:.15,ea:1.35,lid:-.3},bear:{er:.11,ex:.42,ea:1},ghost:{er:.2,ea:1.1,ex:.34},monkey:{er:.14,ex:.34,ea:1.05},donkey:{er:.15,lid:.4,ea:1},chick:{er:.2,ex:.34,ea:1.1},dragon:{eye:15774234,er:.17,ea:1.3},dino:{eye:16747039,er:.15,ex:.46,ea:1.1},turtle:{er:.13,lid:.5},puppy:{eye:8014378,er:.18,ea:1.1},llama:{er:.14,ex:.42,lid:.2},koala:{er:.1,ex:.38,ey:.2},giraffe:{er:.17,ea:1.4},sloth:{er:.1,lid:.55},pig:{er:.1,ex:.5},gorilla:{er:.1,ex:.3,lid:-.45},pelican:{er:.13,ex:.55},ladybug:{er:.18,ex:.42,ea:1.1},dodo:{er:.12,ex:.5},clownfish:{er:.22,ex:.52,ea:1},goldfish:{er:.24,ex:.55},dolphin:{er:.12,ex:.55},shrimp:{er:.2,ex:.4},seahorse:{er:.13,ex:.5,lid:.3},crab:{er:.12,ex:.38},hippo:{er:.1,ex:.62,ey:.4},beetle:{er:.12,ex:.35},grasshopper:{er:.22,ex:.5,ea:1.3},human:{er:.14,ea:1.25,ex:.38}},_h={cat:{t:[.9,1,.95],h:[1.06,.94,1]},penguin:{t:[1.05,1.3,1],h:[.92,.88,.95],hd:-.12},bunny:{t:[.88,1.15,.9],h:[.95,1.02,.95]},lion:{t:[1.12,1,1.05],h:[1.08,1.04,1]},fox:{t:[.82,1.05,.88],h:[1.08,.88,1.05],rs:1},bear:{t:[1.2,1,1.1],h:[1,.95,1]},ghost:{t:[.95,1.25,.95],h:[1,1,1]},monkey:{t:[.8,.95,.8],h:[1.08,1,1],rs:.96},donkey:{t:[1,1,1.1],h:[.92,1.12,1.05]},chick:{t:[1.25,.9,1.15],h:[1.12,1,1.05],rs:.92},dragon:{t:[1,1.12,1],h:[1,1,1]},dino:{t:[1,1.28,1.1],h:[1,.92,1.1]},turtle:{t:[1.1,.8,1.1],h:[.9,.85,.9],rs:.95},puppy:{t:[.85,.85,.9],h:[1.14,1.06,1.05],rs:.95},llama:{t:[.95,1.1,.95],h:[.95,1,.95]},koala:{t:[1.05,.95,1],h:[1.2,1.05,1.05]},giraffe:{t:[.9,1,.95],h:[.92,.95,.95]},sloth:{t:[1.05,1,1],h:[1.08,.95,1]},pig:{t:[1.25,.98,1.1],h:[1.05,.95,1]},gorilla:{t:[1.3,1.12,1.08],h:[.9,.88,.95],rs:1.05},pelican:{t:[1,1.2,1],h:[.9,.95,.95]},ladybug:{t:[1.2,.95,1.1],h:[1.05,.9,1],rs:.95},dodo:{t:[1.2,1.1,1.1],h:[.92,.9,.95]},clownfish:{t:[1.05,1,.95],h:[1.05,.95,1]},goldfish:{t:[1,1.05,.95],h:[1.08,1,1]},dolphin:{t:[.92,1.2,.95],h:[.95,1,1.05]},shrimp:{t:[.85,1.15,.85],h:[.95,.95,.95]},seahorse:{t:[.8,1.25,.85],h:[1,1,1]},crab:{t:[1.5,.8,1.1],h:[.8,.75,.85],rs:.95},hippo:{t:[1.3,1,1.15],h:[1.2,.98,1.1],rs:.98},beetle:{t:[1.2,1.05,1.15],h:[.95,.9,.95]},grasshopper:{t:[.7,1.3,.75],h:[1,.9,1],rs:1},human:{t:[1,1.1,.95],h:[.98,.98,.98]}},yh={sara:1,nilu:1,roya:1.02,mina:.98,yasi:1.04,omid:1.03,babak:1.07,kian:1.05,arash:1.02,sami:.96,pouya:1.05,farid:1.04,ario:.93,dana:.96,shiva:1.02,sina:1.04,niki:.97,mahsa:1},Yi=function(){return new tn({color:Dt})};function Ne(){return new gi}function Tn(i,e,t,n,s,r,a){var o=Ne();p(o,t*n,s,0);var c,l=e;if(l==="round"){c=R(.3,r,1,1,.5);var h=R(.17,a,1,1,.4,!1);p(h,0,0,.1),c.add(h),c.position.y=.08}else if(l==="cone"){c=je(new nt(.34,.72,4),r),c.position.y=.26,c.scale.z=.55;var u=je(new nt(.19,.46,4),a,!1);u.position.set(0,-.04,.1),c.add(u)}else if(l==="long"){c=R(.24,r,.72,2.7,.5),c.position.y=.62;var f=R(.13,a,.7,2.3,.3,!1);p(f,0,0,.09),c.add(f)}else if(l==="big"){c=je(new nt(.4,1.15,4),r),c.position.y=.5,c.scale.z=.45;var d=je(new nt(.22,.8,4),a,!1);d.position.set(0,-.05,.1),c.add(d)}return o.add(c),i.head.add(o),o}function tg(i){var e=ir[i],t=e.kind,n={id:i,S:e,K:t},s=e.fur;n.root=Ne(),n.sq=Ne(),n.root.add(n.sq),n.body=Ne(),p(n.body,0,1.32,0),n.sq.add(n.body);var r=R(.95,s,1.12,1,1);n.body.add(r),n.torso=r,t!=="ghost"&&t!=="ladybug"&&n.body.add(p(R(.62,e.belly,1,1,.5,!1),0,-.08,.6)),n.head=Ne(),p(n.head,0,t==="giraffe"?2.1:1.62,.05),n.hy0=t==="giraffe"?2.1:1.62,n.body.add(n.head);var a=R(1.02,t==="human"?e.skin:e.head||s,1.1,.96,.98);n.head.add(a),n.hs=a;var o=eg[t];if(o)for(var c in o)e[c]==null&&(e[c]=o[c]);var l=e.ex||.4,h=e.ey==null?.12:e.ey,u=.9,f=e.er||.165,d={eyes:[],arcs:[]};n.EX=l,n.EY=h;var x=t==="human"?e.skin:e.head||s;[-1,1].forEach(function(E){var y=Ne();p(y,E*l,h,u);var H=R(f,e.eye||Dt,1,e.ea||1.18,.55,!1);if(y.add(H),e.eye&&y.add(p(R(f*.6,Dt,1,(e.ea||1.18)*1.05,.6,!1),0,0,f*.12)),e.lid){var ie=R(f*1.25,x,1.05,.55,.8,!1);p(ie,0,f*(.75+(e.ea||1.18)*.05),f*.3),ie.rotation.z=E*(e.lid>0?-.3:.38),y.add(ie)}y.add(p(R(f*.36,16777215,1,1,1,!1),f*.38,f*.45,f*.45)),y.add(p(R(f*.18,16777215,1,1,1,!1),-f*.3,-f*.35,f*.5)),n.head.add(y),d.eyes.push(y);var Z=new $e(new vt(f*1.1,f*.26,8,18,Math.PI),Yi());p(Z,E*l,h-f*.2,u+.03),Z.visible=!1,n.head.add(Z),d.arcs.push(Z);var Se=new $e(new vt(f*1.1,f*.26,8,18,Math.PI),Yi());Se.rotation.z=Math.PI,p(Se,E*l,h+f*.2,u+.03),Se.visible=!1,n.head.add(Se),(d.arcs2=d.arcs2||[]).push(Se)});var _=-.2,g=.98;d.smile=new $e(new vt(.13,.03,8,16,Math.PI),Yi()),d.smile.rotation.z=Math.PI,p(d.smile,0,_+.05,g),n.head.add(d.smile),d.frown=new $e(new vt(.11,.03,8,16,Math.PI),Yi()),p(d.frown,0,_-.03,g),d.frown.visible=!1,n.head.add(d.frown),d.open=R(.17,7021383,1,1,.5,!1),p(d.open,0,_-.02,g-.02),d.open.visible=!1,n.head.add(d.open),d.tongue=R(.09,16744352,1.3,.7,.4,!1),p(d.tongue,0,_-.09,g+.02),d.tongue.visible=!1,n.head.add(d.tongue),d.brows=[-1,1].map(function(E){var y=new $e(new En(.26,.05,.04),Yi());return p(y,E*l,h+f*2.1,u+.02),y.visible=!1,n.head.add(y),y}),d.blush=[-1,1].map(function(E){var y=R(.16,16748462,1,.6,.2,!1);return y.material=new tn({color:16748462,transparent:!0,opacity:0}),p(y,E*(l+.3),h-.22,u-.06),n.head.add(y),y}),d.tears=[-1,1].map(function(E){var y=R(.06,6210815,1,1.5,1,!1);return p(y,E*l,h-.15,u+.05),y.visible=!1,n.head.add(y),y}),d.tongue2=R(.12,16740245,1,1.5,.55,!1),p(d.tongue2,0,_-.2,g+.05),d.tongue2.visible=!1,n.head.add(d.tongue2),d.hearts=[-1,1].map(function(E){var y=new Ks;y.moveTo(0,-.5),y.bezierCurveTo(-.9,.1,-.5,.8,0,.35),y.bezierCurveTo(.5,.8,.9,.1,0,-.5);var H=new fa(y,{depth:.12,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2});H.center();var ie=new $e(H,new tn({color:16723810}));return p(ie,E*l,h,u+.06),ie.visible=!1,n.head.add(ie),ie}),n.F=d,n.arms=[-1,1].map(function(E){var y=Ne();p(y,E*.95,.45,.08);var H=R(.23,t==="penguin"||t==="pelican"?e.dark:s,.8,1.7,.85);return p(H,0,-.34,0),y.add(H),n.body.add(y),y.userData.s=E,y}),n.legs=[-1,1].map(function(E){var y=Ne();p(y,E*.45,.68,0);var H=R(.3,t==="human"?e.dark:t==="dodo"||t==="penguin"||t==="chick"||t==="pelican"?e.beak:t==="ladybug"?e.dark:t==="bear"&&e.hood||e.dark===e.fur?s:t==="lion"||t==="fox"||t==="cat"?e.fur:s,1.1,.68,1.3);return p(H,0,-.36,.14),y.add(H),n.sq.add(y),y.userData.s=E,y}),(t==="ghost"||t==="clownfish"||t==="goldfish"||t==="dolphin"||t==="seahorse")&&n.legs.forEach(function(E){E.visible=!1}),n.tail=[];var m={cat:[.14,s],lion:[.1,s],fox:[.2,s],bear:[.16,s],bunny:[0,s],penguin:[0,s],ghost:[0,s],monkey:[.1,s],donkey:[.08,s],chick:[0,s],dragon:[.15,s],dino:[.22,s],turtle:[.09,s],puppy:[.17,s],llama:[.1,s],koala:[0,s],giraffe:[.1,s],sloth:[.09,s],pig:[0,s],gorilla:[0,s],pelican:[0,s],ladybug:[0,s],human:[0,s],dodo:[0,s],clownfish:[.22,s],goldfish:[.26,e.dark],dolphin:[.17,s],shrimp:[.2,s],seahorse:[0,s],crab:[0,s],hippo:[.1,s],beetle:[0,s],grasshopper:[0,s]}[t],C=m[0];if(C)for(var w=n.body,b=[0,-.6,-.8],z=0;z<4;z++){var L=Ne();z===0?p(L,b[0],b[1],b[2]):p(L,0,.42,0),w.add(L);var D=R(t==="fox"?.2+(z===1?.12:0)-z*.02:C*(1.2-z*.06),t==="fox"&&z===3?16777215:t==="lion"&&z===3?e.mane[1]:s,1,t==="fox"?1.4:1.6,1);p(D,0,.2,0),L.add(D),w=L,n.tail.push(L),L.rotation.x=-.5}t==="bunny"&&(n.pom=R(.3,16777215),p(n.pom,0,-.72,-.85),n.body.add(n.pom));var U=_h[t]||_h.cat,T=U.t[0],M=U.t[1],P=U.t[2];(e.fruit||e.ft)&&(T=(e.ft||[1.2,1,1.15])[0],M=(e.ft||[1.2,1,1.15])[1],P=(e.ft||[1.2,1,1.15])[2]);t==="human"&&(e.g==="f"?(T*=.9,M*=.98):(T*=1.07,M*=1.04)),n.torso.scale.set(1.12*T,1*M,1*P),n.body.children[1]&&t!=="ghost"&&n.body.children[1].scale.set(T,M*.95,.5),n.head.scale.set(U.h[0],U.h[1],U.h[2]),n.hy0=(n.hy0||1.62)+(M-1)*.95+(U.hd||0)+(U.h[1]-1)*.6,n.head.position.y=n.hy0,n.arms.forEach(function(E,y){var H=y?1:-1;E.position.x=H*.95*(1+(T-1)*.95),E.position.y=.45+(M-1)*.5}),n.legs.forEach(function(E,y){var H=y?1:-1;E.position.x=H*.45*(.7+T*.3)});var K=U.rs||1;if(t==="human"&&yh[i]&&(K=yh[i]),n.root.scale.setScalar(K),n.ears=[],t==="cat"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"cone",E,.62,.82,s,e.inner);return y.rotation.z=-E*.3,y}),n.head.add(p(R(.34,16777215,1.3,.85,.6,!1),0,-.2,.82)),n.nose=p(je(new nt(.08,.08,3),e.nose,!1),0,-.04,1.08),n.nose.rotation.x=Math.PI,n.head.add(n.nose),n.whisk=[],[-1,1].forEach(function(E){[-.08,.06].forEach(function(y,H){var ie=new $e(new En(.55,.018,.018),Yi());p(ie,E*.72,-.12+y,.8),ie.rotation.z=E*(H?-.12:.1),n.head.add(ie),n.whisk.push(ie)})}),[-1,0,1].forEach(function(E){var y=new $e(new En(.05,.26,.02),new tn({color:e.dark}));p(y,E*.22,.88,.85),y.rotation.z=E*.35,y.rotation.x=-.5,n.head.add(y)})),t==="bunny"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"long",E,.42,.85,s,e.inner);return y.rotation.z=-E*.12,y}),n.nose=p(R(.1,e.nose,1.2,.9,.8,!1),0,-.05,1.06),n.head.add(n.nose),n.head.add(p(R(.08,16777215,1,1.6,.5,!1),0,-.3,1)),n.head.add(p(R(.08,16777215,1,1.6,.5,!1),0,-.3,1))),t==="fox"){n.ears=[-1,1].map(function(E){var y=Tn(n,"big",E,.62,.75,s,e.inner);return y.rotation.z=-E*.25,y}),n.head.add(p(R(.66,e.belly,1.2,.75,.55),0,-.26,.74)),n.nose=p(R(.09,Dt,1.2,.9,.8,!1),0,-.09,1.04),n.head.add(n.nose);var X=new $e(new vt(1.06,.06,8,28,Math.PI),new tn({color:3108336}));p(X,0,.12,0),n.head.add(X),[-1,1].forEach(function(E){n.head.add(p(R(.22,3108336,.8,1,1),E*1.06,.12,0))})}if(t==="bear")if(n.ears=[-1,1].map(function(E){return Tn(n,"round",E,.8,.72,s,e.inner)}),n.head.add(p(R(.48,e.belly,1.2,.8,.6),0,-.2,.78)),n.nose=p(R(.1,Dt,1.4,.8,.8,!1),0,-.04,1.04),n.head.add(n.nose),e.hood){var q=R(1.16,e.hood,1.12,1,.9);p(q,0,.02,-.22),n.head.add(q)}else[-1,1].forEach(function(E){var y=new $e(new vt(.27,.04,8,24),new tn({color:3811866}));p(y,E*.4,.12,.98),n.head.add(y)}),n.head.add(p(new $e(new En(.2,.04,.03),new tn({color:3811866})),0,.14,1.02));if(t==="lion"){n.mane=Ne(),n.head.add(n.mane);for(var z=0;z<16;z++){var ce=z/16*Math.PI*2,j=R(.42,z%2?e.mane[1]:e.mane[0],1,1,.9);p(j,Math.cos(ce)*1.08,Math.sin(ce)*1,-.4),n.mane.add(j)}n.ears=[-1,1].map(function(E){var y=Tn(n,"round",E,.8,.9,s,15902298);return y.position.z=.08,y}),n.head.add(p(R(.48,e.belly,1.15,.85,.6),0,-.22,.8)),n.nose=p(je(new nt(.13,.12,3),e.nose,!1),0,-.03,1.12),n.nose.rotation.x=Math.PI,n.head.add(n.nose)}if(t==="penguin"){n.head.add(p(R(.82,16777215,1,.9,.42,!1),0,-.1,.56)),n.beak=Ne(),p(n.beak,0,-.05,1);var ue=je(new nt(.16,.38,4),e.beak,!1);ue.rotation.x=Math.PI/2,ue.position.z=.1,n.beak.add(ue),n.head.add(n.beak),n.head.add(p(je(new nt(.1,.4,4),e.dark,!1),0,1,0)),n.body.children[1].scale.set(1.1,1.1,.5)}if(t==="ghost"&&!e.fruit&&(n.orbs=[0,1,2].map(function(E){var y=R(.14+E*.03,e.dark,1,1,1,!1);return n.root.add(y),y}),n.head.add(p(Tt([[0,1,0],[.1,1.4,0],[.4,1.5,0],[.5,1.3,0]],.13,e.dark),0,0,0))),t==="monkey"&&(n.ears=[-1,1].map(function(E){return Tn(n,"round",E,.98,.12,s,e.inner)}),n.head.add(p(R(.5,e.belly,1.3,.72,.5),0,-.26,.8)),n.nose=p(R(.06,Dt,1.6,.8,.8,!1),0,-.15,1.1),n.head.add(n.nose),n.head.add(p(R(.3,s,1,1.2,1),0,.98,.25))),t==="donkey"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"long",E,.5,.8,s,e.inner);return y.rotation.z=-E*.45,y}),n.head.add(p(R(.55,e.belly,1.2,.8,.7),0,-.3,.78)),n.nose=p(R(.09,Dt,1.4,.8,.8,!1),0,-.18,1.12),n.head.add(n.nose),n.head.add(p(R(.26,e.dark,.7,1.2,.6),0,1,.35))),t==="chick"){n.ears=[],n.beak=Ne(),p(n.beak,0,-.08,1);var Q=je(new nt(.15,.3,4),e.beak,!1);Q.rotation.x=Math.PI/2,Q.position.z=.08,n.beak.add(Q),n.head.add(n.beak),[-.18,0,.18].forEach(function(E){var y=R(.1,s,.8,1.8,.8);p(y,E,1.02-Math.abs(E)*.4,.2),y.rotation.z=-E*2.2,n.head.add(y)})}if(t==="dragon"){n.ears=[],[-1,1].forEach(function(E){var y=je(new nt(.17,.55,6),e.inner);p(y,E*.5,.96,.1),y.rotation.z=-E*.35,n.head.add(y);var H=Ne();p(H,E*.75,.8,-.55);var ie=R(.7,e.dark,1.5,.95,.13);p(ie,E*.95,.1,-.1),H.add(ie);var Z=R(.4,e.inner,1.1,.8,.1,!1);p(Z,E*1.5,.1,-.05),H.add(Z),n.body.add(H),(n.wings=n.wings||[])[E<0?0:1]=H}),n.head.add(p(R(.46,e.belly,1.25,.75,.65),0,-.28,.76)),[-1,1].forEach(function(E){n.head.add(p(R(.04,Dt,1,1,1,!1),E*.12,-.1,1.15))});for(var z=0;z<3;z++){var re=je(new nt(.16-z*.02,.34,4),e.inner);p(re,0,.7-z*.34,-.95),re.rotation.x=-2.6,n.body.add(re)}}if(t==="dino"){n.ears=[],n.head.add(p(R(.55,s,1.15,.72,.95),0,-.3,.78)),n.head.add(p(R(.5,e.belly,1.1,.5,.8),0,-.46,.8)),[-1,1].forEach(function(E){n.head.add(p(R(.04,Dt,1,1,1,!1),E*.2,-.12,1.22))});for(var fe=0;fe<4;fe++){var ye=je(new nt(.2-fe*.02,.38,4),e.inner);p(ye,0,.98-fe*.26,-.3-fe*.2),ye.rotation.x=-.3-fe*.3,n.head.add(ye)}for(var Ye=0;Ye<3;Ye++){var ht=je(new nt(.2,.38,4),e.inner);p(ht,0,.5-Ye*.4,-.98),ht.rotation.x=-2.5,n.body.add(ht)}}if(t==="turtle"){n.ears=[];var oe=R(1,e.inner,1.42,1.3,.95);p(oe,0,.3,-.12),n.body.add(oe),[[0,1.05,-.25],[-.7,.95,-.3],[.7,.95,-.3],[-1.18,.35,-.15],[1.18,.35,-.15],[0,.4,-1.05]].forEach(function(E){var y=R(.27,7032607,1,1,.6,!1);p(y,E[0],E[1],E[2]),n.body.add(y)}),n.head.add(p(R(.42,e.belly,1.2,.72,.6),0,-.28,.8)),n.nose=p(R(.05,Dt,1.4,.8,.8,!1),0,-.1,1.08),n.head.add(n.nose)}t==="puppy"&&(n.ears=[-1,1].map(function(E){var y=Ne();p(y,E*.86,.55,.05);var H=R(.3,e.inner,.75,1.8,.55);return p(H,0,-.42,0),y.add(H),n.head.add(y),y.rotation.z=-E*.25,y}),n.head.add(p(R(.36,s,1,1,1),0,.98,.3)),[-1,1].forEach(function(E){n.head.add(p(R(.3,s,1,1,.9),E*.9,-.35,.35)),n.head.add(p(R(.22,s,1,1,.9),E*.55,.95,.1))}),n.head.add(p(R(.4,16777215,1.2,.8,.6),0,-.26,.8)),n.nose=p(R(.11,Dt,1.3,.9,.8,!1),0,-.1,1.12),n.head.add(n.nose));var me=2829107;function $(E,y,H,ie,Z){return je(new En(E,y,H),ie,Z)}function se(E,y,H,ie,Z){return je(new ti(E,y,H,18),ie,Z)}function Fe(E,y,H,ie,Z,Se,Oe){var He=1-y*y-H*H;if(!(He<.05)){var ot=Math.sqrt(He),qe=R(ie,Z,1,1,.35,!1);p(qe,y*Se*(Oe||1),H*Se,ot*Se),qe.lookAt(qe.position.x*2,qe.position.y*2,qe.position.z*2),E.add(qe)}}if(t==="llama"){n.ears=[-1,1].map(function(E){var y=Tn(n,"round",E,.7,.95,s,e.inner);return y.scale.set(1,2.1,1),y.rotation.z=-E*.6,y}),n.root.scale.setScalar(.85),n.head.position.y=n.hy0=1.95,n.head.add(p(R(.52,e.belly,1.2,.8,.7),0,-.3,.78)),n.nose=p(R(.09,Dt,1.4,.8,.8,!1),0,-.15,1.14),n.head.add(n.nose),[-.24,0,.24].forEach(function(E,y){n.head.add(p(R(.28,s,1,1.1,1),E,1-Math.abs(E)*.3,.2))}),n.body.add(p(R(.5,s,.85,1.9,.85),0,1.3,.15));var Ze=new $e(new vt(.98,.13,8,28),Ot(e.inner));Ze.rotation.x=Math.PI/2,Ze.scale.set(1.14,1,1.02),p(Ze,0,.08,0),n.body.add(Ze);var We=new $e(new vt(.98,.06,8,28),Ot(16765286));We.rotation.x=Math.PI/2,We.scale.set(1.14,1,1.02),p(We,0,-.16,0),n.body.add(We)}if(t==="koala"&&(n.ears=[-1,1].map(function(E){var y=Ne();p(y,E*.82,.8,-.02);var H=R(.5,s,1,1,.55);return y.add(H),y.add(p(R(.33,e.inner,1,1,.4,!1),0,0,.18)),y.add(p(R(.14,16777215,1.2,1,.5,!1),E*.12,-.28,.22)),n.head.add(y),y}),n.nose=p(R(.2,e.nose,1.1,1.45,.8),0,-0,1.06),n.head.add(n.nose),n.head.add(p(R(.4,e.belly,1.2,.75,.6,!1),0,-.3,.85)),n.head.add(p(R(.2,16777215,1.3,.6,.4,!1),0,1,.1))),t==="giraffe"){n.root.scale.setScalar(.78),n.ears=[-1,1].map(function(E){var y=Tn(n,"long",E,.98,.3,s,e.inner);return y.rotation.z=-E*1.25,y}),n.head.add(p(R(.5,e.belly,1.25,.78,.72),0,-.3,.8)),n.nose=p(R(.09,Dt,1.5,.8,.8,!1),0,-.16,1.18),n.head.add(n.nose),[-1,1].forEach(function(E){var y=Ne();p(y,E*.38,.92,0),y.add(p(se(.09,.11,.44,s),0,.2,0)),y.add(p(R(.14,e.dark,1,1,1),0,.46,0)),n.head.add(y)}),n.body.add(p(R(.5,s,.85,2,.85),0,1.4,.05));var ct=Ne();n.body.add(ct);for(var he=0;he<5;he++)ct.add(p(R(.14,e.dark,1,1,1,!1),0,1+he*.38,-.4-he%2*.02));[[-.5,.55],[.45,.3],[-.2,-.35],[.15,-.15]].forEach(function(E){Fe(n.torso,E[0],E[1],.17,e.dark,.95,1.12)}),[[-.7,.5],[.7,.55],[-.6,-.3],[.5,-.1]].forEach(function(E){Fe(n.hs,E[0],E[1]*.5+.35,.13,e.dark,1,1.1)})}if(t==="sloth"&&(n.ears=[],n.head.add(p(R(.8,15985366,1.15,.78,.5,!1),0,.06,.68)),[-1,1].forEach(function(E){n.head.add(p(R(.3,5916208,1,1.5,.5,!1),E*.4,.1,.8))}),n.nose=p(R(.1,Dt,1.4,.9,.8,!1),0,-.1,1.04),n.head.add(n.nose),n.arms.forEach(function(E){E.children[0].scale.set(.9,2.05,.9),E.children[0].position.y=-.5,[-1,0,1].forEach(function(y){E.add(p(je(new nt(.06,.3,4),15985367,!1),y*.1,-1.12,.05))})}),n.head.add(p(R(.3,s,1.2,.8,1),0,.95,.2))),t==="pig"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"cone",E,.62,.82,s,e.inner);return y.rotation.z=-E*.7,y.rotation.x=.5,y}),n.head.add(p(R(.42,e.nose,1.2,.95,.7),0,-.2,1)),[-1,1].forEach(function(E){n.head.add(p(R(.055,Dt,.8,1.4,.6,!1),E*.14,-.2,1.38))}),n.nose=p(R(.001,s,1,1,1,!1),0,-.1,1.2),n.head.add(n.nose),n.body.add(p(Tt([[0,-.5,-.9],[.22,-.42,-1.22],[0,-.22,-1.38],[-.2,-.36,-1.2]],.06,e.dark),0,0,0))),t==="gorilla"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"round",E,1,0,s,e.dark);return y}),n.torso.scale.set(1.3,1.12,1.08),n.arms.forEach(function(E,y){var H=y?1:-1;E.position.x=H*1.18,E.children[0].scale.set(1.35,1.85,1.3),E.children[0].position.y=-.45}),n.head.add(p(R(.78,e.inner,1.1,.85,.5,!1),0,-.1,.66)),n.head.add(p(R(.6,s,1.3,.35,.5),0,.42,.72)),n.nose=p(R(.1,Dt,1.6,.6,.6,!1),0,-.1,1.06),n.head.add(n.nose),n.head.add(p(R(.5,s,1,.8,1),0,.9,-.15)),n.body.children[1].scale.set(1.4,1.2,.55),[-1,1].forEach(function(E){n.legs.forEach(function(y){y.children[0].scale.set(1.3,.8,1.35)})})),t==="pelican"){n.ears=[],n.beak=Ne(),p(n.beak,0,-.06,.98);var xe=je(new nt(.22,1.5,5),e.beak,!0);xe.rotation.x=Math.PI/2+.45,xe.position.set(0,-.3,.62),xe.scale.set(1.3,1,.6),n.beak.add(xe),n.beak.add(p(R(.1,16747069,1,1,1.4,!1),0,-.72,1.2)),n.beak.add(p(R(.4,e.inner,1.1,.8,2),0,-.52,.55)),n.head.add(n.beak),n.head.add(p(R(.3,s,1,1.2,1),0,.98,-.1)),n.head.add(p(R(.2,e.dark,1,1.4,.8,!1),0,.95,-.45))}if(e.fruit){var zqL=e.leaf==null?3706428:e.leaf,zqS=e.stem==null?7027759:e.stem,zqN=e.crown||0;if(zqS>=0)n.head.add(p(R(.12,zqS,1,2.2,1,!1),0,1.1,0));if(zqN){for(var zqI=0;zqI<zqN;zqI++){var zqA=zqI/zqN*Math.PI*2,zqC=je(new nt(.2,.85,5),zqL,!1);p(zqC,Math.cos(zqA)*.2,1.38,Math.sin(zqA)*.2);zqC.rotation.z=-Math.cos(zqA)*.45;zqC.rotation.x=Math.sin(zqA)*.45;n.head.add(zqC)}}else if(zqL>=0){var zqF=p(R(.34,zqL,1.6,.42,.8,!1),.34,1.14,0);zqF.rotation.z=-.5;n.head.add(zqF);if(e.leaf2){var zqM=p(R(.3,zqL,1.4,.4,.7,!1),-.3,1.12,0);zqM.rotation.z=.5;n.head.add(zqM)}}(e.spots||[]).forEach(function(E){Fe(n.torso,E[0],E[1],e.sr||.09,e.sc==null?e.dark:e.sc,.95,1)}),(e.hs||[]).forEach(function(E){Fe(n.head,E[0],E[1],e.sr||.09,e.sc==null?e.dark:e.sc,1.0,1)})}if(t==="ladybug"){n.ears=[],[[-.45,.45],[.45,.45],[-.65,-.1],[.65,-.1],[0,.1],[-.3,-.55],[.3,-.55]].forEach(function(E){Fe(n.torso,E[0],E[1],.15,me,.95,1.12)}),n.ears=[-1,1].map(function(E){var y=Ne();p(y,E*.38,.88,.15);var H=Tt([[0,0,0],[E*.12,.35,.06],[E*.3,.62,.14]],.05,me);return y.add(H),y.add(p(R(.13,me,1,1,1),E*.3,.64,.14)),n.head.add(y),y}),n.head.add(p(R(.4,16777215,1.4,.5,.3,!1),0,0,1)),[-1,1].forEach(function(E){n.head.add(p(R(.14,16777215,1.4,1.1,.3,!1),E*.7,.02,.72))}),n.wings=[-1,1].map(function(E){var y=Ne();p(y,E*.15,.8,-.9);var H=R(.7,e.fur,.62,1.1,.3);return p(H,E*.42,-.1,-.08),y.add(H),y.add(p(R(.12,me,1,1,.5,!1),E*.5,-.1,-.34)),n.body.add(y),y});var I=$(.035,1.55,.04,me,!1);p(I,0,.1,-.96),n.body.add(I)}if(t==="human"){let y=function(Z){F.add(p(R(.55,be,Z||1.7,.42,.55),0,.8,.6))},H=function(Z){[-1,1].forEach(function(Se){var Oe=new $e(new vt(.24,.035,8,20),Ot(Z||me));p(Oe,Se*.4,.12,1),F.add(Oe)}),F.add(p($(.18,.035,.03,Z||me,!1),0,.14,1.02))},ie=function(Z){return Z};n.ears=[],n.arms.forEach(function(Z){Z.add(p(R(.17,e.skin,1,1,1),0,-.76,.03))}),[-1,1].forEach(function(Z){n.head.add(p(R(.17,e.skin,.8,1,.8),Z*1.04,-.06,-.02))}),n.nose=p(R(.07,e.skin,1,1,1,!1),0,-.08,1),n.head.add(n.nose);var be=e.hc,q=e.hair,G=n.body,F=n.head,ve=function(Z,Se,Oe){F.add(p(R(Oe||1.07,be,1.1,.95,1),0,Se??.3,Z??-.24))};if(q==="long")ve(),y(),F.add(p(R(.95,be,1.15,1.6,.55),0,-.55,-.72)),[-1,1].forEach(function(Z){F.add(p(R(.28,be,.8,1.9,.7),Z*1,-.2,.15))});else if(q==="bob")ve(),y(),F.add(p(R(.9,be,1.2,1,.6),0,-.15,-.62)),[-1,1].forEach(function(Z){F.add(p(R(.34,be,.8,1.5,.8),Z*1,-.05,.05))});else if(q==="pony")ve(),y(),F.add(p(R(.16,16735386,1,1,1,!1),0,.55,-1.02)),F.add(p(Tt([[0,.5,-1.05],[0,.1,-1.5],[0,-.5,-1.45],[0,-.95,-1.2]],.24,be),0,0,0));else if(q==="bun")ve(),y(1.5),F.add(p(R(.4,be,1,1,1),0,1.1,-.3)),F.add(p(R(.1,16735386,1.6,.6,1.6,!1),0,.86,-.3));else if(q==="curly"){ve();for(var Xe=0;Xe<11;Xe++){var ce=Xe/11*Math.PI*2;F.add(p(R(.34,be,1,1,1),Math.cos(ce)*1.05,.55+Math.sin(ce)*.62,-.2))}F.add(p(R(.38,be,1,1,1),-.4,1,.3)),F.add(p(R(.38,be,1,1,1),.4,1,.3)),F.add(p(R(.38,be,1,1,1),0,1.12,0))}else if(q==="short")ve(),F.add(p(R(.5,be,1.7,.4,.5),0,.86,.55));else if(q==="spiky"){ve();for(var Ie=0;Ie<7;Ie++){var A=(Ie-3)*.3,v=je(new nt(.2,.6,5),be);p(v,A,1-Math.abs(A)*.3,.1),v.rotation.z=-A*.7,F.add(v)}}else if(q==="wild"){ve(-.2,.3,1.1);for(var W=0;W<10;W++){var ae=W/10*Math.PI*2,de=R(.3,be,1,1,1);p(de,Math.cos(ae)*1.22,.35+Math.sin(ae)*.85,-.2),F.add(de)}[-1,1].forEach(function(Z){F.add(p(R(.36,be,1,1,1),Z*.5,1.1,.15))})}var ne=e.job;if(ne==="doctor"){var ze=new $e(new vt(.52,.045,8,24,Math.PI),Ot(5593702));ze.rotation.z=Math.PI,p(ze,0,.82,.78),G.add(ze),G.add(p(R(.11,13226204,1,1,.6),0,.22,.98)),G.add(p($(.09,.28,.04,16726862,!1),.45,.2,.98)),G.add(p($(.28,.09,.04,16726862,!1),.45,.2,.98)),F.add(p($(.5,.12,.05,3520452,!1),0,.75,.98))}if(ne==="teacher"){H(3811880);var we=Ne();p(we,0,-.8,.2),we.add($(.5,.66,.14,3120368)),we.add(p($(.44,.6,.02,16777215,!1),0,0,.08)),n.arms[1].add(we),G.add(p($(.3,.06,.03,14705754,!1),0,.75,.8))}if(ne==="astro"){var Pe=je(new Wi(1.32,24,18),new tn({color:12575743,transparent:!0,opacity:.38,depthWrite:!1}),!1);Pe.scale.set(1.1,1.06,1.08),p(Pe,0,.02,-.02),F.add(Pe);var it=new $e(new vt(.95,.13,10,28),Ot(16777215));it.rotation.x=Math.PI/2,p(it,0,-.94,0),F.add(it),G.add(p(R(.14,16747069,1,1,.5,!1),-.45,.3,.98)),G.add(p(R(.14,3898367,1,1,.5,!1),.45,.3,.98));var ge=Ne();p(ge,.95,.7,-.2),ge.add(p(se(.025,.025,.5,16777215,!1),0,.25,0)),ge.add(p(R(.08,16726862,1,1,1,!1),0,.52,0)),F.add(ge)}if(ne==="artist"){var ue=R(.82,14689374,1.25,.45,1.15);p(ue,-.1,.98,0),ue.rotation.z=.22,F.add(ue),F.add(p(R(.1,14689374,1,1.4,1,!1),-.15,1.35,0));var ye=Ne();p(ye,0,-.8,.22);var De=se(.4,.4,.06,14267002);De.rotation.x=Math.PI/2,ye.add(De),[16726862,3520452,16765286,8048714].forEach(function(Oe,He){ye.add(p(R(.07,Oe,1,1,.6,!1),Math.cos(He*1.6)*.2,Math.sin(He*1.6)*.17,.06))}),n.arms[0].add(ye),G.add(p(R(.1,16726862,1,1,.5,!1),.4,.3,.99)),G.add(p(R(.08,16765286,1,1,.5,!1),-.35,.1,.99)),G.add(p(R(.09,3520452,1,1,.5,!1),.3,-.2,.99))}if(ne==="singer"){var Ge=Ne();p(Ge,0,-.8,.2),Ge.add(p(se(.05,.06,.55,4475480),0,.1,0)),Ge.add(p(R(.17,13226204,1,1,1),0,.45,0)),n.arms[1].add(Ge),[-1,1].forEach(function(Z){F.add(p(R(.09,16765286,1,1,1,!1),Z*1.06,-.3,0)),F.add(p(R(.07,16777215,1,1,1,!1),Z*1.06,-.45,0))}),G.add(p(R(.13,16765286,1.2,1.2,.5,!1),0,.35,.99))}if(ne==="chef"&&(F.add(p(se(.8,.86,.5,16777215),0,1.15,-.05)),[-.42,0,.42].forEach(function(Z,Se){F.add(p(R(.5,16777215,1,1,1),Z*1,1.65+(Se===1?.12:0),-.05+(Se===1?0:-0)))}),F.add(p(R(.1,16726862,1,1,1,!1),0,1,.85)),G.add(p(R(.28,14689374,1.4,.7,.6),0,.82,.8)),G.add(p(R(.1,2829107,1,1,1,!1),.18,.3,1)),G.add(p(R(.1,2829107,1,1,1,!1),-.18,.3,1)),[-1,1].forEach(function(Z){F.add(p(R(.17,be,1.4,.8,1),Z*.17,-.26,1.05))})),ne==="builder"){var Je=R(1,16763904,1.12,.8,1.02);p(Je,0,.5,-.02),F.add(Je);var Le=se(1.15,1.15,.08,16763904);p(Le,0,.46,.15),Le.scale.set(1.05,1,1.12),F.add(Le),F.add(p($(.14,.55,.5,16757504,!1),0,1.15,0)),[.25,-.15].forEach(function(Z){G.add(p($(1.9,.16,.2,15199989,!1),0,Z,.84))}),G.children[1].material.color.set(e.belly);var rt=Ne();p(rt,0,-.8,.2),rt.add(p(se(.05,.05,.7,9067051),0,.15,0)),rt.add(p($(.5,.22,.2,8226454),0,.55,0)),n.arms[1].add(rt)}if(ne==="pilot"){var Qe=se(.9,1,.5,1450570);p(Qe,0,.98,-.05),F.add(Qe);var pt=se(1,1,.08,989238);p(pt,0,.78,.5),pt.scale.set(1,1,.8),F.add(pt),F.add(p($(2,.14,.08,16777215,!1),0,.8,0)).scale.z=1,F.add(p(R(.17,16765286,1.3,1,.5),0,.95,.96)),G.add(p($(.14,.5,.05,16726862,!1),0,.35,.99)),[-1,1].forEach(function(Z){G.add(p(R(.2,16765286,1.3,.7,.8),Z*.78,.85,.1)),[-.15,.05].forEach(function(Se){G.add(p(R(.07,16765286,1,1,.5,!1),0,Se-.1,.99-Math.abs(Z)*0))})})}if(ne==="scientist"){H(5593702);var N=Ne();p(N,0,-.8,.2),N.add(p(se(.07,.07,.3,14674165),0,.3,0)),N.add(p(R(.24,7331962,1,1,1),0,0,0)),N.add(p(R(.1,16777215,1,1,1,!1),.08,.1,.15)),n.arms[1].add(N),G.add(p($(.5,.3,.05,16774064,!1),.45,.1,.99))}if(ne==="gamer"){var Me=new $e(new vt(1.08,.07,8,28,Math.PI),Ot(2829107));Me.rotation.y=Math.PI/2,Me.rotation.z=0,p(Me,0,.2,0),F.add(Me),[-1,1].forEach(function(Z){F.add(p(R(.28,2829107,.6,1,1),Z*1.1,.08,0)),F.add(p(R(.14,2883488,.5,.8,.8,!1),Z*1.18,.08,0))}),F.add(p(Tt([[1.1,.02,.1],[1.1,-.35,.5],[.55,-.45,.95]],.035,2829107),0,0,0)),F.add(p(R(.08,2883488,1,1,1,!1),.55,-.45,.96)),G.add(p(R(.62,e.fur,1.5,1,.7),0,.78,-.5));var te=$(.9,.22,.3,2829107);p(te,0,0,1.02),G.add(te),[-1,1].forEach(function(Z){G.add(p(R(.07,Z>0?16726862:2883488,1,1,1,!1),Z*.28,.02,1.18))})}}if(t==="dodo"){n.ears=[],n.beak=Ne(),p(n.beak,0,-.02,.98);var le=je(new nt(.4,1.2,6),e.beak,!0);le.rotation.x=Math.PI/2+.55,le.position.set(0,-.5,.55),le.scale.set(1.25,1,1),n.beak.add(le),n.beak.add(p(R(.3,7319658,1.2,.8,1.4),0,-.28,.3)),n.beak.add(p(R(.14,12597547,1,1.1,1.3,!1),0,-.85,1.1)),n.head.add(n.beak),[-.2,0,.2].forEach(function(E){var y=R(.13,e.dark,.8,1.9,.8);p(y,E,1.08-Math.abs(E)*.3,0),y.rotation.z=-E*2.5,n.head.add(y)}),n.torso.scale.set(1.2,1.05,1.1),n.arms.forEach(function(E){E.children[0].scale.set(.9,1.3,.6)}),[-1,1].forEach(function(E){n.body.add(p(R(.2,e.dark,.8,1.5,.5,!1),E*.5,-.2,-.85))})}if(t==="clownfish"||t==="goldfish"){n.ears=[];var Ee=R(.2,e.dark,1.5,.8,1);if(p(Ee,0,-.22,1),n.head.add(Ee),n.head.add(p(R(.12,16765636,1.4,.7,.6,!1),0,-.24,1.14)),n.arms.forEach(function(E,y){var H=y?1:-1;E.children[0].scale.set(.6,1.2,1.5),E.children[0].position.set(H*.2,-.2,0),E.children[0].material.color.set(e.dark)}),n.body.add(p(je(new nt(.45,.7,4),e.dark),0,1,-.2)),n.head.add(p(je(new nt(.35,.6,4),e.dark),0,1.02,-.15)),t==="clownfish"){[[.35,.93,0],[0,0,0]].forEach(function(){});var et=function(ie,Z,Se,Oe,He){var ot=new $e(new vt(Se,He,10,28),Ot(16777215));ot.rotation.x=Math.PI/2,ot.scale.set(1.12,1,1),p(ot,0,Z,0),ie.add(ot);var qe=new $e(new vt(Se,He*1.7,10,28),new tn({color:2760007,side:Bt}));qe.rotation.x=Math.PI/2,qe.scale.set(1.12,1,1),p(qe,0,Z,0),ie.add(qe)},ze=function(ie,Z,Se,Oe,He){var ot=R(Se,16777215,Oe,.22,He);p(ot,0,Z,0),ie.add(ot)},Me=new $e(new Wi(1,20,14,0,Math.PI*2,1.6,.55),Ot(16777215));Me.scale.set(1.1,.96,.98),Me.rotation.x=Math.PI/2,Me.rotation.y=0;var Re=function(ie,Z,Se,Oe,He){var ot=R(Oe,16777215,He,.16,1);p(ot,0,Se,0),ie.add(ot)},Ke=function(ie,Z,Se,Oe){var He=new $e(new ti(1,1,.42,28,1,!0),new ni({color:16777215,gradientMap:Ps,side:bn}));He.scale.set(Se,1,Oe),p(He,0,Z,0),ie.add(He)};Ke(n.head,-.55,.93,.93),Ke(n.body,.25,1.04,.99),Ke(n.body,-.6,.88,.82);var mt=R(.95,e.dark,1,1,.12);p(mt,0,-.15,-1.3),n.body.add(mt),[-1,1].forEach(function(ie){var Z=R(.4,e.dark,.5,1,1.2);p(Z,ie*1.2,-.1,0),n.body.add(Z)})}else{n.head.add(p(R(.2,e.dark,.5,1,1.5),0,.98,.2)),n.fins=[],[-1,1].forEach(function(E){var y=R(.5,e.dark,.12,1.4,1.3);y.material=new ni({color:e.dark,gradientMap:Ps,transparent:!0,opacity:.78}),p(y,E*.55,-.1,-.85),y.rotation.z=E*.3,n.body.add(y)});var At=R(1.35,e.dark,1,1,.12);At.material=new ni({color:e.dark,gradientMap:Ps,transparent:!0,opacity:.8}),p(At,0,-.1,-1.35),n.body.add(At),[-1,1].forEach(function(E){var y=R(.55,e.dark,.5,1.2,1.5);y.material=At.material,p(y,E*1.25,-.2,0),y.rotation.z=E*.5,n.body.add(y)}),[-1,1].forEach(function(E){n.head.add(p(R(.2,16777215,1,1,1,!1),E*.76,.12,.62))})}}function et(E,y,H,ie,Z,Se){var Oe=new $e(new ti(1,1,Se||.2,28,1,!0),new ni({color:Z,gradientMap:Ps,side:bn}));return Oe.scale.set(H,1,ie),p(Oe,0,y,0),E.add(Oe),Oe}function Ht(E,y,H,ie,Z,Se){var Oe=R(E,y,H,ie,Z,!1);return Oe.material=new ni({color:y,gradientMap:Ps,transparent:!0,opacity:Se||.85}),Oe}if(t==="dolphin"){n.ears=[],n.head.add(p(R(.42,s,.85,.65,1.6),0,-.3,1)),n.head.add(p(R(.3,e.belly,.8,.4,1.4,!1),0,-.46,1)),n.head.add(p(R(.06,Dt,1.4,.5,.6,!1),0,.98,.1)),n.nose=p(R(.001,s,1,1,1,!1),0,-.25,1.6),n.head.add(n.nose);var un=je(new nt(.35,.85,4),e.dark);un.rotation.x=-.5,p(un,0,.85,-.75),n.body.add(un);var Ji=je(new nt(.3,.8,4),e.dark);Ji.rotation.x=-.35,p(Ji,0,1.25,-.2),n.head.add(Ji),n.head.add(p(R(.55,e.belly,1.5,.55,.5,!1),0,-.5,.9)),n.head.add(p(R(.35,s,1,.6,1.2),0,-.3,1.25)),n.arms.forEach(function(E,y){var H=y?1:-1;E.children[0].scale.set(.55,1.3,1.5),E.children[0].position.set(H*.2,-.25,0),E.children[0].material.color.set(e.dark)}),[-1,1].forEach(function(E){var y=Ht(.55,e.dark,1.2,.2,.8,1);p(y,E*.55,-.55,-1.2),y.rotation.z=E*.4,n.body.add(y)})}if(t==="shrimp"){n.ears=[],[-1,1].forEach(function(y){n.head.add(p(Tt([[y*.25,.9,.1],[y*.7,1.5,.1],[y*1.2,1.7,-.1],[y*1.6,1.4,-.3]],.035,e.dark),0,0,0)),n.head.add(p(Tt([[y*.15,.9,.2],[y*.3,1.6,.3],[y*.45,2.1,.1]],.03,e.dark),0,0,0))}),[.35,-.2,-.65].forEach(function(y,H){et(n.body,y,1.08-H*.07,1.02-H*.07,e.dark,.15)});var mt=Ne();p(mt,0,-.6,-.95),[-1,0,1].forEach(function(y){var H=Ht(.42,e.dark,.45,1.1,.2,.95);p(H,y*.38,-.3,-.15),H.rotation.z=y*.45,mt.add(H)}),n.body.add(mt),n.head.add(p(je(new nt(.14,.5,4),e.dark),0,.98,.55)),n.head.add(p(R(.15,16765124,1.4,.8,.6,!1),0,-.24,1))}if(t==="seahorse"){n.ears=[];var $i=je(new ti(.22,.3,.7,14),s);$i.rotation.x=Math.PI/2+.5,p($i,0,-.55,1.15),n.head.add($i),n.head.add(p(R(.24,e.dark,1,.9,.9),0,-.78,1.45)),[0,1,2,3].forEach(function(E){var y=je(new nt(.17-E*.02,.6,4),e.dark);p(y,(E-1.5)*.3,1.05-Math.abs(E-1.5)*.15,-.05),y.rotation.z=-(E-1.5)*.35,n.head.add(y)}),[-.35,-0,.35].forEach(function(E){et(n.body,E,1.05,.98,e.dark,.12)}),n.body.add(p(Tt([[.4,-.7,-.3],[1.2,-1,-.3],[1.75,-.5,-.3],[1.55,.05,-.3],[1.15,-.05,-.3],[1.25,-.35,-.3]],.2,s),0,0,0));var Dn=Ht(.5,e.dark,.15,1.2,1,.8);p(Dn,0,.2,-.95),n.body.add(Dn),n.arms.forEach(function(E,y){E.children[0].scale.set(.5,1,1.3),E.children[0].material.color.set(e.dark)})}if(t==="crab"&&(n.ears=[],n.torso.scale.set(1.45,.95,1.1),n.body.children[1].scale.set(1.5,1,.5),[-1,1].forEach(function(E){var y=se(.05,.05,.35,s,!1);p(y,E*.35,.98,.55),n.head.add(y),n.head.add(p(R(.17,16777215,1,1.1,1,!1),E*.35,1.2,.6)),n.head.add(p(R(.08,Dt,1,1,1,!1),E*.35,1.2,.74))}),n.arms.forEach(function(E,y){var H=y?1:-1;E.position.x=H*1.4;var ie=Ne();p(ie,0,-.9,.05),ie.add(p(R(.34,e.dark,1.1,1,.8),H*0,0,0));var Z=je(new nt(.16,.5,4),s);p(Z,-.14,.38,0),Z.rotation.z=.35,ie.add(Z);var Se=je(new nt(.16,.5,4),s);p(Se,.14,.38,0),Se.rotation.z=-.35,ie.add(Se),E.add(ie),n.claws=(n.claws||[]).concat([ie])}),[-1,1].forEach(function(E){[0,1,2].forEach(function(y){var H=je(new nt(.1,.6,4),e.dark);p(H,E*(1.4+y*.05),-.35-y*.3,.2-y*.25),H.rotation.z=E*1.9,n.body.add(H)})})),t==="hippo"&&(n.ears=[-1,1].map(function(E){var y=Tn(n,"round",E,.72,.85,s,e.belly);return y}),n.head.add(p(R(.78,e.belly,1.4,.85,.9),0,-.3,.72)),[-1,1].forEach(function(E){n.head.add(p(R(.07,Dt,.9,1.3,.6,!1),E*.3,-0,1.38)),n.head.add(p(R(.16,s,1,1,.8),E*.4,.45,1))}),n.nose=p(R(.001,s,1,1,1,!1),0,-.1,1.3),n.head.add(n.nose),[-1,1].forEach(function(E){n.head.add(p($(.1,.14,.05,16777215,!1),E*.22,-.62,1.28))}),n.torso.scale.set(1.25,1.05,1.1)),t==="beetle"){n.ears=[];var Si=je(new nt(.24,1.3,5),14266475);Si.rotation.x=-.35,p(Si,0,1.45,.35),n.head.add(Si),n.ears=[-1,1].map(function(y){var H=Ne();return p(H,y*.35,.9,.15),H.add(Tt([[0,0,0],[y*.15,.4,.1],[y*.4,.65,.25]],.045,2042426)),H.add(p(R(.12,2042426,1,1,1),y*.4,.66,.25)),n.head.add(H),H}),n.head.add(p(R(.45,3820138,1.4,.5,.3,!1),0,-.15,.95));var I=$(.035,1.55,.04,988710,!1);p(I,0,.1,-.96),n.body.add(I),[.45,-.3].forEach(function(y){[-1,1].forEach(function(H){var ie=je(new ti(.05,.05,.5,6),2042426);p(ie,H*1.05,y,.1),ie.rotation.z=H*1.1,n.body.add(ie)})}),n.body.add(p(R(.22,9417960,.7,1.4,.2,!1),-.4,.5,-.97))}if(t==="grasshopper"&&(n.ears=[],n.ears=[-1,1].map(function(E){var y=Ne();return p(y,E*.3,.9,.1),y.add(Tt([[0,0,0],[E*.3,.6,-.1],[E*.8,1.1,-.3],[E*1.3,1.3,-.5]],.035,e.dark)),n.head.add(y),y}),n.head.add(p(R(.4,e.belly,1.2,.7,.6,!1),0,-.26,.85)),n.head.add(p(je(new nt(.12,.35,4),e.dark),0,.98,.5)),[-1,1].forEach(function(E){var y=Ht(.5,14086824,.35,2,.2,.8);p(y,E*.5,.1,-.95),y.rotation.z=E*.1,n.body.add(y)}),[-.3,.2].forEach(function(E){et(n.body,E,1.08,1.03,e.dark,.1)}),n.legs.forEach(function(E,y){var H=y?1:-1;E.children[0].scale.set(.9,2.2,1.1),E.children[0].position.set(H*.22,-.2,0),E.add(p(je(new nt(.12,.6,4),e.dark),H*.5,.1,-.25))})),t==="human"){let E=function(y){[-1,1].forEach(function(H){var ie=new $e(new vt(.24,.035,8,20),Ot(y||me));p(ie,H*.4,.12,1),kt.add(ie)}),kt.add(p($(.18,.035,.03,y||me,!1),0,.14,1.02))};var ai=e.job,kt=n.head,Gt=n.body;if(ai==="student")if(e.cap){var Ki=$(1.7,.1,1.7,2302778);p(Ki,0,1.12,-.02),Ki.rotation.y=.5,kt.add(Ki),kt.add(p(se(.8,.8,.3,2302778),0,.95,-.02));var ji=Tt([[.7,1.12,.7],[1,.95,.9],[1.05,.5,.9]],.035,16765286);kt.add(ji),kt.add(p(R(.1,16765286,1,1.5,1),1.05,.4,.9));var Ei=Ne();p(Ei,0,-.85,.2);var v=se(.1,.1,.7,16775136);v.rotation.z=Math.PI/2,Ei.add(v),Ei.add(p($(.1,.22,.22,14689374,!1),0,0,0)),n.arms[1].add(Ei)}else{var Ds=R(.75,16735290,1.1,1.3,.6);p(Ds,0,.35,-.95),Gt.add(Ds),Gt.add(p(R(.3,14697770,1.3,.9,.5),0,.05,-1.35)),[-1,1].forEach(function(y){var H=$(.14,1,.08,14697770,!1);p(H,y*.55,.5,.95),H.rotation.z=y*.05,Gt.add(H)});var Qi=Ne();p(Qi,0,-.8,.2),Qi.add($(.5,.2,.4,3120368)),Qi.add(p($(.5,.2,.4,16765286),0,.22,0)),n.arms[1].add(Qi),kt.add(p($(.5,.06,.06,2829107,!1),0,.5,.98))}if(ai==="lawyer"){Gt.add(p($(.16,.55,.05,12597547,!1),0,.3,.99)),Gt.add(p(R(.13,16765286,1.2,1.2,.5,!1),-.42,.32,1)),E(2829107);var wi=Ne();p(wi,0,-.85,.2),wi.add($(.8,.55,.22,9067051)),wi.add(p($(.3,.08,.26,4861716,!1),0,.32,0)),wi.add(p($(.1,.1,.28,16765286,!1),0,0,0)),n.arms[1].add(wi),[-1,1].forEach(function(y){Gt.add(p($(.5,.08,.06,16777215,!1),y*.3,.62,1)).rotation})}if(ai==="engineer"){var ar=R(1,16777215,1.12,.8,1.02);p(ar,0,.5,-.02),kt.add(ar);var S=se(1.15,1.15,.08,16777215);p(S,0,.46,.15),S.scale.set(1.05,1,1.12),kt.add(S),kt.add(p($(.14,.55,.5,3120368,!1),0,1.15,0)),E(5593702),[.25,-.15].forEach(function(y){Gt.add(p($(1.9,.14,.2,15199989,!1),0,y,.84))});var O=Ne();p(O,0,-.85,.2);var J=se(.14,.14,.8,15260080);J.rotation.z=Math.PI/2,O.add(J),O.add(p($(.82,.04,.04,3120368,!1),0,0,.15)),n.arms[1].add(O)}if(ai==="programmer"){E(16735386);var Ee=Ne();p(Ee,0,-.1,1),Ee.rotation.x=-.25,Ee.add($(1,.68,.06,13226204)),Ee.add(p($(.9,.58,.02,1777466,!1),0,0,.04)),[[-.25,.15,.5,2883488],[-.15,0,.6,7321599],[-.3,-.15,.3,16748464],[-.1,-.28,.4,16765286]].forEach(function(H){Ee.add(p($(H[2],.07,.02,H[3],!1),H[0],H[1],.06))}),Ee.add(p($(1.05,.08,.4,10134453),0,-.4,-.12)),Gt.add(Ee),kt.add(p(R(.1,16735386,1,1,1,!1),0,.55,-1.02))}if(ai==="nurse"){kt.add(p(se(.62,.66,.34,16777215),0,1.08,0)),kt.add(p($(.28,.08,.04,16726862,!1),0,1.1,.64)),kt.add(p($(.08,.28,.04,16726862,!1),0,1.1,.64)),Gt.add(p($(.09,.28,.04,16726862,!1),.45,.2,.98)),Gt.add(p($(.28,.09,.04,16726862,!1),.45,.2,.98));var Y=Ne();p(Y,0,-.85,.2),Y.add($(.55,.7,.06,9067051)),Y.add(p($(.46,.6,.02,16777215,!1),0,0,.04)),Y.add(p($(.08,.24,.02,16726862,!1),0,.05,.06)),Y.add(p($(.24,.08,.02,16726862,!1),0,.05,.06)),n.arms[1].add(Y);var B=new $e(new vt(.5,.04,8,24,Math.PI),Ot(5593702));B.rotation.z=Math.PI,p(B,0,.82,.78),Gt.add(B)}(function(){var y=e.job;if(["magic","hero","ninja","school","alien","cyclops","octo","fuzz","goblin","gloop","demon","vamp","zombie","skeleton","pumpkin","were","wizard","witch","apprentice","sorc","butterfly","mermaid"].indexOf(y)<0)return;function H(ee,Ve,xt,Nt){return ee.add(Ve),Ve.rotation[xt]=Nt,Ve}function ie(ee,Ve,xt,Nt){return je(new nt(ee,Ve,Nt||12),xt,!0)}function Z(ee,Ve,xt,Nt,zt,Xt){var Bn=Ne();p(Bn,Ve,xt,Nt);for(var Vn=0;Vn<5;Vn++){var ci=ie(zt*.42,zt,Xt,4);ci.position.y=zt*.5;var ln=Ne();ln.rotation.z=-Vn*Math.PI*2/5,ln.add(ci),Bn.add(ln)}return Bn.add(R(zt*.45,Xt,1,1,.5,!1)),ee.add(Bn),Bn}function Se(ee,Ve,xt,Nt,zt,Xt,Bn,Vn,ci){var ln=Ne();return p(ln,Ve,xt,Nt),ln.rotation.z=zt,ln.add(p(se(.035,.035,Xt,Bn,!1),0,Xt/2,0)),ln.add(p(R(Vn,ci,1,1,1),0,Xt+Vn*.6,0)),ee.add(ln),ln}function Oe(ee,Ve,xt,Nt,zt){var Xt=Ne();p(Xt,0,zt??.72,-.05);var Bn=se(Ve*1.55,Ve*1.55,.07,xt);Xt.add(Bn);var Vn=ie(Ve,ee*.6,xt,16);Vn.position.y=ee*.3,Xt.add(Vn);var ci=ie(Ve*.55,ee*.5,xt,14);ci.position.set(Nt*.5,ee*.72,0),ci.rotation.z=-Nt*.5,Xt.add(ci);var ln=ie(Ve*.2,ee*.22,xt,10);return ln.position.set(Nt*1.1,ee*1,0),ln.rotation.z=-Nt*1.1,Xt.add(ln),F.add(Xt),Xt}function He(ee,Ve,xt,Nt){for(var zt=0;zt<ee;zt++){var Xt=(zt-(ee-1)/2)*xt;H(F,p(ie(.05,.14,Nt||16777215,4),Xt,Ve,.97),"z",Math.PI)}}if(y==="magic"){[-1,1].forEach(function(ee){F.add(p(Tt([[ee*.95,.75,-.1],[ee*1.6,.2,-.3],[ee*1.65,-.7,-.2],[ee*1.25,-1.5,-.05]],.3,be),0,0,0)),F.add(p(R(.2,16723838,1.2,1.2,.8,!1),ee*.95,.75,.1))}),Z(F,0,.78,.98,.26,16767050),Z(G,0,.35,.99,.22,16767050),F.add(p(R(.45,16777215,1.5,.5,.5),0,.98,-.1));var ot=Ne();p(ot,0,-.8,.2),ot.add(p(se(.04,.04,.9,16751312),0,.2,0)),Z(ot,0,.8,0,.26,16767050),n.arms[1].add(ot)}if(y==="hero"){var qe=se(1.04,1.04,.22,13639722);p(qe,0,.42,-.02),qe.scale.set(1.08,1,1),F.add(qe),F.add(p($(.5,.26,.06,13226204),0,.42,1.02)),F.add(p($(.18,.1,.02,6976128,!1),0,.42,1.06));var Ue=new $e(new vt(.78,.15,10,24),Ot(13639722));Ue.rotation.x=Math.PI/2,p(Ue,0,.88,.05),G.add(Ue),G.add(p(Tt([[.5,.85,-.5],[.9,.2,-.9],[1.2,-.6,-1]],.15,13639722),0,0,0));var yt=Ne();p(yt,.2,.3,-1.05),yt.rotation.z=.6,yt.add($(.12,1.7,.06,14673648)),yt.add(p($(.5,.1,.1,9067051),0,-.8,0)),G.add(yt)}if(y==="ninja"){var at=se(1.04,1.04,.24,3095146);p(at,0,.42,-.02),at.scale.set(1.08,1,1),F.add(at),F.add(p($(.6,.28,.06,13226204),0,.42,1.03)),H(F,p(ie(.08,.2,4871528,4),0,.42,1.08),"x",Math.PI/2),F.add(p(R(.78,2764618,1.15,.55,.6),0,-.45,.66)),[-1,1].forEach(function(ee){F.add(p(Tt([[ee*.95,.45,-.4],[ee*1.5,.5,-.9],[ee*1.9,.1,-1.1]],.08,3095146),0,0,0))});var Ut=Ne();p(Ut,0,-.8,.2),[0,1].forEach(function(ee){var Ve=$(.7,.12,.05,13226204);Ve.rotation.z=ee*Math.PI/2+.4,Ut.add(Ve)}),Ut.add(R(.08,2764618,1,1,1)),n.arms[1].add(Ut)}if(y==="school"){[-1,1].forEach(function(ee){F.add(p(Tt([[ee*.95,.65,-.1],[ee*1.5,.1,-.2],[ee*1.6,-.9,-.1],[ee*1.3,-1.6,0]],.26,be),0,0,0)),F.add(p(R(.17,16726890,1.2,1,.7,!1),ee*.95,.65,.1))});var nn=$(1.5,.1,1,2240602);p(nn,0,.78,.55),nn.rotation.x=.75,G.add(nn),H(G,p($(1.52,.04,.98,16777215,!1),0,.79,.56),"x",.75),G.add(p(R(.2,13639493,1.5,.9,.6,!1),0,.55,1)),[-1,1].forEach(function(ee){H(G,p(ie(.18,.4,13639493,4),ee*.22,.38,1),"z",ee*2.3)});var St=Ne();p(St,0,-.85,.2),St.add($(.6,.45,.2,9067051)),St.add(p($(.64,.1,.24,5913114,!1),0,.22,0)),n.arms[1].add(St)}if(y==="alien"){n.head.scale.multiplyScalar(1.15),[-1,1].forEach(function(ee){Se(F,ee*.45,.9,.1,-ee*.35,.7,4896842,.15,16773226)}),F.add(p(R(.06,3115567,1,1.5,1,!1),-.08,-.12,1)),F.add(p(R(.06,3115567,1,1.5,1,!1),.08,-.12,1)),G.add(p($(1.4,.18,.1,8030888,!1),0,.75,.86)),G.add(p(R(.14,7332095,1,1,.6,!1),0,.3,.99));var sn=Ne();p(sn,0,-.8,.2),sn.add(R(.2,7332095,1,1,1)),n.arms[1].add(sn)}if(y==="cyclops"&&(Se(F,0,.95,.2,0,.5,6959024,.13,16739024),[-1,1].forEach(function(ee){H(F,p(ie(.14,.5,15787775,8),ee*.62,.85,.3),"z",-ee*.5),H(F,p(ie(.09,.32,15787775,8),ee*.85,.55,.2),"z",-ee*.9)}),He(5,-.4,.17),G.add(p(R(.1,3809136,1,1,1,!1),-.3,.3,1)),G.add(p(R(.14,3809136,1,1,1,!1),.3,.1,1))),y==="octo"){for(var lt=0;lt<6;lt++){var Rt=(lt-2.5)*.42;F.add(p(Tt([[Math.sin(Rt)*.8,.8,-.1-Math.cos(Rt)*.1],[Math.sin(Rt)*1.3,.5,-.45],[Math.sin(Rt)*1.5,-.3,-.5],[Math.sin(Rt)*1.2+(lt%2?.2:-.2),-1.2,-.35]],.2,be),0,0,0))}var rn=Ne();p(rn,0,.62,.93),rn.add(R(.16,16777215,1,1,.5)),rn.add(p(R(.09,3809136,1,1,.6,!1),0,0,.06)),F.add(rn),[[-.5,.3],[.5,.35],[-.2,-.5]].forEach(function(ee){F.add(p(R(.05,16765414,1,1,.6,!1),ee[0],ee[1],.98))})}if(y==="fuzz"){for(var Ct=0;Ct<14;Ct++){var an=Ct/14*Math.PI*2;F.add(p(R(.3,be,1,1.1,1),Math.cos(an)*1.02,.1+Math.sin(an)*.92,-.1))}[-1,1].forEach(function(ee){H(F,p(ie(.17,.6,16773832,8),ee*.55,1,.1),"z",-ee*.25)}),He(4,-.42,.18),He(2,-.5,.4,16773832);for(var on=0;on<8;on++){var vn=on/8*Math.PI*2;G.add(p(R(.28,be,1,1.2,1),Math.cos(vn)*1,.1+Math.sin(vn)*.95,-.35))}}if(y==="goblin"&&([-1,1].forEach(function(ee){var Ve=ie(.32,1.2,e.skin,4);p(Ve,ee*1.35,.15,0),Ve.rotation.z=-ee*1.35,F.add(Ve)}),F.add(p(R(.2,e.skin,1.1,1,1.2),0,-.12,1.05)),[[-.5,.6],[.4,.72],[.1,.8]].forEach(function(ee){F.add(p(R(.07,5937706,1,1,1,!1),ee[0],ee[1],.8))}),He(4,-.42,.2,15787696),F.add(p(se(.6,.8,.45,7031338),0,.92,-.05)),G.add(p($(1.6,.22,.12,7031338,!1),0,0,.98)),G.add(p($(.22,.26,.06,16765286,!1),0,0,1.05))),y==="gloop"&&(Se(F,0,.9,.3,0,.6,9060304,.22,16777215),Se(F,-.55,.8,.2,.35,.55,9060304,.2,16777215),Se(F,.55,.8,.2,-.35,.55,9060304,.2,16777215),[[0,.9+.6+.13,.3],[-.55-.2,.8+.55+.1,.2],[.55+.2,.8+.55+.1,.2]].forEach(function(ee){F.add(p(R(.09,1118481,1,1,.6,!1),ee[0],ee[1],ee[2]+.17))}),[[-.9,-.8],[.8,-.9],[.2,-1]].forEach(function(ee){G.add(p(R(.17,e.skin,.8,1.5,.8,!1),ee[0],ee[1],.7))}),[[-.4,.3],[.4,0],[0,-.4]].forEach(function(ee){G.add(p(R(.14,e.belly,1,1,.5,!1),ee[0],ee[1],.98))})),y==="demon"){[-1,1].forEach(function(ee){F.add(p(Tt([[ee*.5,.85,.1],[ee*.8,1.5,0],[ee*.55,1.95,.2]],.12,2822168),0,0,0))});var or=Ne();[-1,1].forEach(function(ee){var Ve=R(.7,7999520,.18,1.1,1);p(Ve,ee*.95,.5,-1),Ve.rotation.z=ee*.5,G.add(Ve)}),G.add(p(Tt([[0,-.5,-.9],[0,-1,-1.7],[.6,-1.4,-1.9],[.9,-1,-1.9]],.1,12852778),0,0,0)),G.add(p(ie(.2,.35,12852778,4),.9,-.8,-1.9)),He(2,-.4,.3);var oi=Ne();p(oi,0,-.8,.2),oi.add(p(se(.04,.04,1.2,2829107),0,.3,0)),[-1,0,1].forEach(function(ee){oi.add(p(ie(.06,.35,13226204,5),ee*.16,.98,0))}),n.arms[1].add(oi)}if(y==="vamp"){H(F,p(ie(.12,.3,be,4),0,.72,.85),"x",Math.PI),He(0,0,0),[-1,1].forEach(function(ee){H(F,p(ie(.05,.16,16777215,4),ee*.12,-.4,.97),"z",Math.PI)});var Us=R(1,1706516,1.15,1.2,.3);p(Us,0,.05,-1),G.add(Us),G.add(p(R(.9,11538474,1.1,1.1,.2,!1),0,.05,-.84)),[-1,1].forEach(function(ee){var Ve=$(.1,.8,.5,1706516);p(Ve,ee*.85,.85,-.2),Ve.rotation.z=-ee*.3,G.add(Ve)}),G.add(p(R(.1,11538474,1,1,1,!1),0,.6,1))}if(y==="zombie"&&(H(F,p($(.6,.06,.04,4864554,!1),.1,.55,1),"z",.3),[-.2,0,.2].forEach(function(ee){F.add(p($(.04,.16,.03,4864554,!1),.1+ee,.55,1))}),F.add(p($(.1,.14,.03,15790272,!1),-.1,-.42,.98)),H(G,p($(.5,.25,.05,e.skin,!1),-.5,.5,1),"z",.4),G.add(p($(.1,.5,.04,2765632,!1),.5,-.2,1)),[[-.3,.1],[.4,.2]].forEach(function(ee){G.add(p(R(.09,9050650,1.5,1,.4,!1),ee[0],ee[1],1))})),y==="skeleton"){[0,1,2,3].forEach(function(ee){G.add(p($(1.3-ee*.15,.1,.08,16052710,!1),0,.55-ee*.3,1))}),G.add(p($(.1,1.1,.08,16052710,!1),0,0,.99)),H(F,p(ie(.1,.22,2829107,3),0,-.12,1),"x",Math.PI);for(var On=0;On<6;On++)F.add(p($(.1,.14,.05,16777215,!1),(On-2.5)*.13,-.45,.96));[-.4,0,.4].forEach(function(ee){F.add(p($(.025,.16,.03,2829107,!1),ee*.65,-.45,1))});var Be=Ne();p(Be,0,-.8,.2),Be.add(se(.05,.05,.7,16052710)),[-1,1].forEach(function(ee){Be.add(p(R(.1,16052710,1,1,1),ee*.08,.38,0)),Be.add(p(R(.1,16052710,1,1,1),ee*.08,-.38,0))}),n.arms[1].add(Be)}if(y==="pumpkin"){for(var dt=-3;dt<=3;dt++){var dn=dt*.3;F.add(p(R(.12,14248448,.6,4.2,1,!1),dn*1.1,0,.88-Math.abs(dt)*.08))}F.add(p(se(.12,.16,.45,4880922),0,1.15,0)),F.add(p(Tt([[.1,1.35,0],[.4,1.5,0],[.5,1.2,0]],.04,4880922),0,0,0)),H(F,p(ie(.2,.3,3836442,4),.3,1.1,0),"z",-.9);for(var cn=0;cn<5;cn++)H(F,p(ie(.08,.13,16769354,3),(cn-2)*.17,-.4+cn%2*.06,.96),"z",cn%2?0:Math.PI);G.add(p($(1,.2,.1,3836442,!1),0,.78,.9))}if(y==="were"){[-1,1].forEach(function(ee){H(F,p(ie(.3,.8,be,4),ee*.6,.95,0),"z",-ee*.2),H(F,p(ie(.15,.5,14262394,4),ee*.6,.9,.08),"z",-ee*.2),F.add(p(R(.28,be,1,1,1),ee*1,-.3,.3))}),F.add(p(R(.4,e.skin,1.2,.8,1.1),0,-.3,.85)),F.add(p(R(.11,1118481,1.3,.9,.8,!1),0,-.1,1.38)),[-1,1].forEach(function(ee){H(F,p(ie(.05,.16,16777215,4),ee*.2,-.5,1),"z",Math.PI)});for(var $t=0;$t<5;$t++)F.add(p(ie(.2,.4,be,4),($t-2)*.35,.98-Math.abs($t-2)*.08,.1));H(G,p($(.5,.25,.05,4872826,!1),.5,.4,1),"z",-.4)}if(y==="wizard"){Oe(1.6,.95,5914576,.4),Z(F,.25,1.6,.85,.16,16767050),Z(F,-.35,1.25,.93,.13,16767050),F.add(p(R(.62,15921906,1.3,1.9,.8),0,-1.1,.72)),F.add(p(R(.3,15921906,1.9,.5,.7),0,-.2,.95)),[-1,1].forEach(function(ee){F.add(p(R(.2,15921906,1,1,1),ee*.55,.65,.7))});var Wt=Ne();p(Wt,0,-.8,.2),Wt.add(p(se(.05,.06,1.9,9067051),0,.4,0)),Wt.add(p(R(.22,7332095,1,1,1),0,1.5,0)),n.arms[1].add(Wt),G.add(p($(1.5,.14,.1,16765286,!1),0,.1,.98))}if(y==="witch"){Oe(1.5,.8,1710626,-.3),F.add(p($(1,.2,.06,11561712,!1),0,.85,.8)),F.add(p($(.2,.26,.04,16765286,!1),0,.85,.85)),F.add(p(R(.14,8038474,1,1,1,!1),0,-.1,1.06)),F.add(p(R(.04,4876842,1,1,1,!1),.05,-.04,1.15));var kn=Ne();p(kn,0,-.85,.2);var Un=se(.05,.05,1.8,9067051);Un.rotation.z=Math.PI/2,kn.add(Un);var cr=ie(.25,.7,14267002,8);cr.rotation.z=Math.PI/2,cr.position.x=-1.2,kn.add(cr),kn.rotation.z=.2,n.arms[1].add(kn),G.add(p(R(.14,11561712,1.2,1.2,.5,!1),0,.5,1))}if(y==="apprentice"){let ee=function(){[-1,1].forEach(function(Ve){var xt=new $e(new vt(.26,.04,8,20),Ot(9067051));p(xt,Ve*.4,.12,1),F.add(xt)}),F.add(p($(.18,.04,.03,9067051,!1),0,.14,1.02))};Oe(1.2,.62,2067158,.4,.78),Z(F,.18,1.05,.6,.1,16767050),ee(),[0,1,2].forEach(function(Ve){var xt=new $e(new vt(.8,.13,8,24),Ot(Ve%2?16765286:13639722));xt.rotation.x=Math.PI/2,p(xt,0,.95-Ve*.08,.02),xt.scale.set(1.1+Ve*.04,1,1.1),G.add(xt)});var An=Ne();p(An,0,-.8,.2),An.add(p(se(.035,.035,.8,2829107),0,.2,0)),An.add(p(R(.1,16767050,1,1,1,!1),0,.7,0)),[[.2,.85],[-.2,.95],[.1,1.15]].forEach(function(Ve){Z(An,Ve[0],Ve[1],0,.08,16767050)}),n.arms[1].add(An)}if(y==="sorc"){var Ti=new $e(new vt(.8,.05,8,24,Math.PI),Ot(14674431));p(Ti,0,.55,.5),Ti.rotation.x=.3,F.add(Ti),F.add(p(ie(.1,.3,4901119,4),0,1.25,.75)),F.add(p(R(.1,4901119,1,1.3,.8,!1),0,1,.9)),[-1,1].forEach(function(ee){var Ve=$(.1,.9,.5,5941480);p(Ve,ee*.85,.75,-.1),Ve.rotation.z=-ee*.3,G.add(Ve)}),G.add(p(R(1.1,12575743,1.5,1.3,.3),0,.1,-.9));var Ai=Ne();p(Ai,0,-.8,.35),Ai.add(R(.3,9429247,1,1,1)),Ai.add(p(R(.14,16777215,1,1,1,!1),.08,.1,.22)),n.arms[1].add(Ai);for(var lr=0;lr<6;lr++)G.add(p(R(.05,16777215,1,1,1,!1),(lr-2.5)*.28,.25+lr%2*.2,1))}if(y==="butterfly"&&([-1,1].forEach(function(ee){F.add(p(Tt([[ee*.35,.9,.3],[ee*.55,1.5,.3],[ee*.9,1.8,.2]],.035,3811860),0,0,0)),F.add(p(R(.1,16751151,1,1,1),ee*.9,1.82,.2))}),n.wings=[-1,1].map(function(ee){var Ve=Ne();p(Ve,ee*.15,.6,-.9);var xt=R(1,e.fur,.95,1.25,.1);p(xt,ee*.9,.5,0),xt.rotation.z=-ee*.35,Ve.add(xt);var Nt=R(.65,e.dark,.9,1.05,.1);return p(Nt,ee*.62,-.55,.02),Nt.rotation.z=ee*.3,Ve.add(Nt),[[.9,.75,.32,16777215],[1.1,.3,.2,2829107],[.65,-.5,.24,16769162],[.8,1.05,.15,2829107]].forEach(function(zt){Ve.add(p(R(zt[2],zt[3],1,1,.4,!1),ee*zt[0],zt[1],.1))}),G.add(Ve),Ve}),G.add(p($(1.4,.12,.1,16777215,!1),0,.3,.98)),G.add(p($(1.5,.12,.1,8011728,!1),0,0,.98)),F.add(p(R(.2,16743096,1.4,.8,.5,!1),0,.95,.4))),y==="mermaid"){n.legs.forEach(function(ee){ee.visible=!1}),G.add(p(R(.8,e.fur,1.1,1,.9),0,-.75,.05)),G.add(p(R(.62,e.fur,1,1.25,.8),0,-1.2,0));for(var es=0;es<5;es++)G.add(p(R(.09,e.belly,1,1,.4,!1),(es%2?.2:-.2)+(es-2)*.05,-.55-es*.2,.82-es*.06));[-1,1].forEach(function(ee){var Ve=R(.55,e.dark,1.5,.28,.5);p(Ve,ee*.45,-1.75,-.1),Ve.rotation.z=ee*.55,G.add(Ve)}),[-1,1].forEach(function(ee){var Ve=R(.32,16751300,1.25,.85,.6);p(Ve,ee*.3,.48,.92),G.add(Ve),G.add(p(R(.06,16766696,1,1,1,!1),ee*.3,.5,1.2))}),F.add(p(R(.14,16738976,1.1,1.1,.5,!1),.55,.85,.8)),F.add(p(R(.08,16767050,1,1,.5,!1),.55,.85,.93));for(var Ea=0;Ea<6;Ea++){var wa=(Ea-2.5)*.22;G.add(p(R(.07,16777215,1,1,1,!1),Math.sin(wa)*.8,.72-Math.cos(wa)*.15+.1,.85+Math.cos(wa)*.12))}var hr=Ne();p(hr,0,-.8,.2),hr.add(p(se(.04,.04,1.4,14267002),0,.3,0)),[-1,0,1].forEach(function(ee){hr.add(p(ie(.06,.3,16767050,5),ee*.16,1.1,0))}),n.arms[1].add(hr)}})()}if(e.g==="f"&&t==="human")d.eyes.forEach(function(E,y){var H=y?1:-1;[0,1,2].forEach(function(ie){var Z=new $e(new En(.13,.035,.03),Yi());p(Z,H*.17,.17+ie*.04-.02,0),Z.rotation.z=H*(.5+ie*.35)*-1,E.add(Z)})});else if(t!=="human"){if(0)var _e;else if(0)var Ce}return(function(){var E=n.body,y=n.head,H=n.arms[1],ie=n.arms[0];function Z(Be,dt,dn,cn,$t,Wt,kn){var Un=new $e(new vt(dn,cn,10,28),Ot($t));return Un.rotation.x=Math.PI/2,Un.scale.set(Wt||1,kn||1,1),p(Un,0,dt,0),Be.add(Un),Un}function Se(Be,dt,dn,cn,$t){p(dt,dn||0,cn??-.8,$t??.2),Be.add(dt)}function Oe(Be,dt,dn,cn,$t,Wt,kn,Un,cr){var An=Ne();p(An,dt,dn,cn);for(var Ti=0;Ti<$t;Ti++){var Ai=Ti/$t*Math.PI*2;An.add(p(R(Wt,kn,1,1,.45,!1),Math.cos(Ai)*Wt*1.15,Math.sin(Ai)*Wt*1.15,0))}return An.add(p(R(Wt*.8,Un,1,1,.6,!1),0,0,Wt*.15)),Be.add(An),An}function He(Be,dt,dn,cn,$t){var Wt=se(dt,dn,cn,Be);p(Wt,0,$t??-.62,0),Wt.scale.z=.95,E.add(Wt)}if(i==="mimi"&&(Z(E,.8,.62,.07,14689374,1,.8).position.z=.35,E.add(p(R(.13,16765286,1,1,1),0,.6,.98)),et(E,.35,.98,.94,e.dark,.08),et(E,-.05,1,.96,e.dark,.08)),i==="pingo"&&(Z(E,.98,.72,.13,16740156,1.15,1),E.add(p($(.22,.6,.1,16740156),.45,.55,.88)),E.add(p($(.22,.1,.12,16777215,!1),.45,.4,.9))),i==="bani"){[-1,1].forEach(function(Be){y.add(p(R(.3,16777215,1.1,.9,.8),Be*.78,-.25,.5))});var ot=Ne();ot.add(je(new nt(.15,.5,5),16747051)),ot.rotation.z=Math.PI,[-1,0,1].forEach(function(Be){var dt=je(new nt(.06,.25,4),5025616,!1);p(dt,Be*.08,.35,0),dt.rotation.z=-Be*.5,ot.add(dt)}),Se(H,ot,0,-.85,.2)}if(i==="leo"){var qe=Ne();p(qe,0,1.12,.15),qe.add(p(se(.4,.46,.28,16765286),0,0,0)),[-1,0,1].forEach(function(Be){qe.add(p(je(new nt(.12,.3,4),16765286),Be*.28,.26,0)),qe.add(p(R(.06,16726862,1,1,1,!1),Be*.28,.43,0))}),y.add(qe)}if(i==="foxy"&&([-1,1].forEach(function(Be){[0,1].forEach(function(dt){var dn=je(new nt(.16,.5,4),16774370,!1);p(dn,Be*(.98+dt*.02),-.18-dt*.2,.45),dn.rotation.z=Be*-1.9-dt*Be*.35*-1,y.add(dn)})}),Z(E,.85,.6,.06,3108336,1,.9).position.z=.3),i==="chao"){var Ue=Ne();Ue.add(p(R(.34,14256671,1,.85,1),0,0,0)),Ue.add(p(se(.22,.24,.08,7029795),0,.3,0)),Ue.add(p(R(.2,16765286,1.2,.5,1.2,!1),0,.22,0)),Se(H,Ue,0,-.85,.25),E.add(p($(.4,.5,.05,14263361,!1),0,0,1))}if(i==="poofy"&&(et(E,.3,1,.96,16765286,.1),et(E,-.1,1.02,.98,16765286,.1),y.add(p(R(.1,16735386,1,1,1,!1),.55,.95,.7))),i==="luki"){var yt=Ne();p(yt,0,1,0),yt.add(p(se(1,1,.08,4861071),0,0,0));var at=je(new nt(.6,1.1,8),4861071);p(at,0,.6,0),at.rotation.z=.2,yt.add(at),yt.add(p($(1,.12,.5,16765286,!1),0,.12,0)).scale,yt.add(p(R(.1,16765286,1,1,1,!1),.15,1.2,0)),yt.rotation.x=-.1,y.add(yt)}if(i==="kiko"){var Ut=Tt([[0,0,0],[.15,.35,0],[0,.7,0],[-.2,1,0]],.09,16767291);Se(H,Ut,0,-.95,.25),E.add(p(R(.1,7227175,1,1,1,!1),0,-.45,1))}if(i==="dooni"&&(Oe(y,.3,.98,.62,6,.11,16740261,16765286),Oe(y,.52,.88,.56,5,.08,16777215,16765286),[-1,1].forEach(function(Be){y.add(p(R(.22,e.dark,.6,.4,.3,!1),Be*.85,.1,.5))})),i==="jooji"){var nn=new $e(new Wi(1.08,24,12,0,Math.PI*2,0,Math.PI*.34),Ot(16775144));nn.scale.set(1.12,1,1),p(nn,0,.18,-.05),y.add(nn);for(var St=0;St<9;St++){var sn=St/9*Math.PI*2,lt=je(new nt(.12,.24,4),16775144,!1);p(lt,Math.cos(sn)*1,.94+0,Math.sin(sn)*.95),lt.rotation.x=Math.sin(sn)*.5,lt.rotation.z=-Math.cos(sn)*.5,y.add(lt)}}if(i==="dragi"&&([[0,-.55],[0,-.3],[0,-.05]].forEach(function(Be,dt){Fe(n.torso,Be[0],Be[1],.3-dt*.04,16765286,.95,1.12)}),y.add(p(R(.1,16765286,1,1,1,!1),0,.75,1))),i==="rexi"&&([[-.4,.5],[.35,.6],[0,.2],[-.55,-.1],[.55,0]].forEach(function(Be){Fe(n.torso,Be[0],Be[1],.17,16751164,.95,1.12)}),n.arms.forEach(function(Be){Be.children[0].scale.set(.55,.95,.55),Be.children[0].position.y=-.2}),[-1,1].forEach(function(Be){y.add(p(je(new nt(.05,.14,4),16777215,!1),Be*.22,-.45,1.12))})),i==="tuli"&&(Oe(E,-.35,1.3,-.2,6,.16,16740261,16765286),Oe(E,.3,1.15,-.3,5,.11,16777215,16765286)),i==="pupi"){[[-.6,.4],[.5,.5],[.1,.15],[-.4,-.3],[.55,-.1],[0,-.55]].forEach(function(Be){Fe(n.torso,Be[0],Be[1],.15,me,.95,1.12)}),Fe(n.hs,-.55,.3,.2,4864818,1,1.1);var Rt=new $e(new vt(.62,.09,8,24),Ot(14689374));Rt.rotation.x=Math.PI/2,Rt.scale.set(1.1,1,.85),p(Rt,0,.85,.3),E.add(Rt);var rn=je(new nt(.28,.5,3),14689374,!1);rn.rotation.x=Math.PI,p(rn,0,.5,.95),E.add(rn)}if(i==="lami"&&[-1,1].forEach(function(Be){y.add(p(R(.3,16775146,1,1.1,.9),Be*.85,-.15,.25)),y.add(p(R(.1,16735386,1,1.4,1,!1),Be*.82,.55,.2))}),i==="koaly"){var Ct=Ne();Ct.add(p(R(.3,6270546,.5,1.5,.15,!1),-.1,0,0)),Ct.add(p(R(.26,8047459,.5,1.4,.15,!1),.12,.05,0)),Ct.add(p(se(.03,.03,.5,7030055,!1),0,-.3,0)),Se(H,Ct,0,-.9,.25)}if(i==="gigi"&&(Oe(y,0,1,.55,6,.11,16777215,16747069),et(E,.2,1,.96,16740261,.1)),i==="slowy"&&([-1,1].forEach(function(Be){var dt=R(.12,6270546,1,2,.3,!1);p(dt,Be*.5,1,.15),dt.rotation.z=Be*.6,y.add(dt)}),et(E,0,1,.98,9086554,.16)),i==="oinky"){var an=$(.9,.7,.1,3898367);p(an,0,.1,.96),E.add(an),[-1,1].forEach(function(Be){var dt=$(.14,1,.08,3898367,!1);p(dt,Be*.42,.7,.94),E.add(dt),E.add(p(R(.08,16765286,1,1,1,!1),Be*.42,.35,1))})}if(i==="gogo"){E.add(p($(.8,.08,.05,16765286,!1),0,0,1));var on=Tt([[0,0,0],[.15,.35,0],[0,.7,0]],.1,16767291);Se(H,on,0,-.95,.35)}if(i==="peli"){var vn=Ne();p(vn,0,1.05,.05),vn.add(p(se(.7,.75,.35,16777215),0,.1,0)),vn.add(p(se(.76,.76,.1,3099279,!1),0,-.05,0));var or=se(.8,.8,.08,1780314);or.scale.set(1,1,.7),p(or,0,-.12,.4),vn.add(or),vn.add(p(R(.11,16765286,1.2,1,.5),0,.08,.75)),y.add(vn)}if(i==="lady"&&Oe(y,0,1,.5,6,.1,16777215,16765286),i==="dodo"&&Z(E,.85,.62,.08,16740156,1,.9),i==="clowny"&&E.add(p(R(.1,2829107,1,1,1,!1),0,-.1,1)),i==="goldy"&&(y.add(p(R(.08,16765286,1,1,1,!1),0,.98,.7)),[-1,0,1].forEach(function(Be){y.add(p(R(.06,16765286,1,1,1,!1),Be*.25,.9-Math.abs(Be)*.08,.7))})),i==="dolfi"&&([-1,1].forEach(function(Be){y.add(p(R(.1,16777215,1,1,.5,!1),Be*.8,-.15,.4))}),Z(E,.82,.6,.06,16735324,1,.9)),i==="seaby")for(var oi=0;oi<9;oi++){var Us=oi/9*Math.PI*2;E.add(p(R(.1,16777215,1,1,1,!1),Math.cos(Us)*.62,.85,Math.sin(Us)*.55+.1))}if(i==="krabi"&&(E.add(p(R(.1,16765286,1,1,1,!1),0,-.1,1)),[-.5,.5].forEach(function(Be){Fe(n.torso,Be,.4,.13,16757672,.95,1.4)})),i==="hippi"&&(Oe(y,.55,.85,.8,5,.1,16748464,16765286),et(E,.2,1.3,1.1,16748464,.1)),i==="hoppy"){var On=Ne();p(On,0,1.05,.05),On.add(p(se(1.15,1.15,.06,14926955),0,0,0)),On.add(p(se(.6,.62,.45,14926955),0,.22,0)),On.add(p(se(.63,.63,.1,12597547,!1),0,.1,0)),y.add(On)}i==="bugo"&&([-1,1].forEach(function(Be){var dt=Ne()}),[-.3,.3].forEach(function(Be){Fe(n.torso,Be,.45,.13,988710,.95,1.2),Fe(n.torso,Be*1.3,-.05,.13,988710,.95,1.2)})),i==="shrimpy"&&y.add(p(R(.08,16765286,1,1,1,!1),.5,.85,.6)),i==="dana"&&He(7027274,.62,1.18,.75),i==="yasi"&&(He(16732067,.6,1.3,.85),et(E,-.85,1.3,1.25,16765286,.08)),i==="sara"&&He(16777215,.78,1.2,.9,-.55),i==="mina"&&He(8019184,.72,1.15,.8),i==="shiva"&&He(1908522,.85,.98,.65,-.55),i==="mahsa"&&He(16752578,.7,1.1,.7),i==="nilu"&&He(5913128,.8,1.1,.7,-.55),i==="roya"&&E.add(p(R(.2,16747069,1,1,.5,!1),0,-.45,.98))})(),n}var rr=1.3,Mi={bsx:1,bsy:1,by:0,bx:0,bz:0,bry:0,hx:0,hy:0,hz:0,hoy:0,ear:0,earx:0,earR:0,aLx:0,aLz:0,aRx:0,aRz:0,lLx:0,lRx:0,lLy:0,lRy:0,tz:0,ty:0,eye:1,happy:0,sleepy:0,brow:0,mo:0,sm:.35,blush:.25,tear:0,ex1:0,ex2:0,rz:0,rx:0,hop:0,tw:1,tg:0,heart:0,wink:0,cheek:0,wing:.3},ng={bsx:260,bsy:260,by:220,bx:160,bz:160,bry:120,hx:130,hy:130,hz:120,hoy:200,ear:70,earx:70,earR:70,aLx:170,aLz:170,aRx:170,aRz:170,lLx:260,lRx:260,lLy:260,lRy:260,tz:60,ty:60,eye:400,happy:300,sleepy:120,brow:200,mo:260,sm:200,blush:80,tear:100,ex1:120,ex2:120,rz:90,rx:90,hop:300,tw:120,tg:200,heart:200,wink:400,cheek:150,wing:90},si=function(i){return i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)},pe=function(i,e,t,n,s){return si((i-e)/(t-e))*(1-si((i-n)/(s-n)))},V=Math.sin;var Jt=Math.PI,Eh={wave:{d:2.2,f:function(i){var e=pe(i,0,.25,1.8,2.2);return{aRz:2.5*e,aRx:-.3*e+V(i*12)*.35*e,hz:.15*e,happy:e,mo:.35*e,bsy:1+V(i*6)*.01}}},cheer:{d:2,f:function(i){var e=pe(i,0,.15,1.7,2),t=Math.abs(V(i*9));return{aLz:-2.6*e,aRz:2.6*e,by:t*.4*e,bsy:1+t*.08*e,lLx:-t*.4*e,lRx:-t*.4*e,hx:-.15*e,happy:e,mo:.8*e}}},bow:{d:1.8,f:function(i){var e=pe(i,0,.4,1.1,1.8);return{bx:.65*e,hx:.3*e,aLx:.6*e,aRx:.6*e,happy:e}}},sad:{d:3.2,f:function(i){var e=pe(i,0,.5,2.6,3.2);return{hx:.45*e,bx:.15*e,aLz:-.1,aRz:.1,sleepy:.6*e,sm:-1*e,tear:e,brow:-1*e,bsy:1-.04*e,ear:.5*e}}},think:{d:2.6,f:function(i){var e=pe(i,0,.4,2.1,2.6);return{hz:.28*e,hy:.2*e,aRx:-1.9*e,aRz:.5*e,brow:.6*e,px:.5,mo:.1*e}}},laugh:{d:2,f:function(i){var e=pe(i,0,.1,1.7,2);return{bsy:1+V(i*26)*.05*e,by:Math.abs(V(i*13))*.1*e,hx:-.2*e,mo:.9*e,happy:e,aLx:-.4*e,aRx:-.4*e,bz:V(i*9)*.06*e,blush:.8*e}}},spin:{d:1,f:function(i){var e=i/1;return{bry:e*2*Jt,by:V(e*Jt)*.6,bsy:1+V(e*Jt)*.1,aLz:-1.4,aRz:1.4,happy:1}}},dance:{d:4,f:function(i){var e=pe(i,0,.3,3.6,4),t=i*8;return{bz:V(t)*.2*e,by:Math.abs(V(t))*.3*e,hz:V(t+1)*.25*e,aLz:(-1.2+V(t)*.9)*e,aRz:(1.2+V(t+Jt)*.9)*e,lLx:V(t)*.5*e,lRx:-V(t)*.5*e,tz:V(t)*.5,happy:e,mo:.6*e,ear:V(t)*.2}}},yawn:{d:2.6,f:function(i){var e=pe(i,.2,.9,1.7,2.5);return{mo:1*e,hx:-.45*e,eye:1-.9*e,aLz:-2.2*e,aRz:2.2*e,bsy:1+.06*e,by:.08*e,sleepy:.5*e}}},sit:{d:99,loop:1,f:function(i){var e=si(i/.5);return{by:-.38*e,bsy:1-.06*e,lLx:-1.35*e,lRx:-1.35*e,lLy:.15*e,lRy:.15*e,bx:-.1*e,aLz:-.15,aRz:.15}}},sleep:{d:99,loop:1,fx:"zzz",f:function(i){var e=si(i/.9),t=V(i*1.6)*.025;return{by:-.45*e,bsy:1-.14*e+t,bsx:1+.08*e,lLx:-1.4*e,lRx:-1.4*e,hx:.55*e,hz:.15*e,bx:.2*e,sleepy:1,eye:1-e,mo:0,sm:.4,aLx:.4*e,aRx:.4*e,ear:.7*e,tz:.2}}},scared:{d:1.6,f:function(i){var e=pe(i,0,.08,1.2,1.6),t=V(i*40)*e;return{eye:1+.3*e,bz:t*.06,by:.15*e,bsy:1.08*e+(1-e),bsx:1-.06*e,aLz:-1.8*e,aRz:1.8*e,hx:.1*e,mo:.5*e,sm:-.6*e,ear:-.6*e,brow:.7*e,lLx:t*.2,lRx:-t*.2}}},angry:{d:2,f:function(i){var e=pe(i,0,.2,1.6,2),t=V(i*22)*e;return{brow:1*e,sm:-1*e,hx:.2*e,by:Math.abs(V(i*11))*.12*e,lLx:V(i*11)*.6*e,lRx:-V(i*11)*.6*e,aLz:-.6*e,aRz:.6*e,bz:t*.04,mo:.3*e,blush:.9*e,bx:.15*e}}},eat:{d:2.4,f:function(i){var e=pe(i,0,.3,2,2.4),t=(V(i*16)+1)/2;return{aLx:-1.8*e,aRx:-1.8*e,aLz:-.3*e,aRz:.3*e,mo:t*.55*e,hx:.1*e,happy:.6*e,bsy:1+V(i*16)*.012,blush:.7*e}}},groom:{d:3.2,f:function(i){var e=pe(i,0,.5,2.7,3.2),t=V(i*7)*e;return{by:-.38*e,lLx:-1.35*e,lRx:-1.35*e,lLy:.15*e,lRy:.15*e,aRx:-2.3*e+t*.25,aRz:.35*e,hz:.3*e*(1+t*.2),hx:.25*e,happy:e,sm:.6,mo:.15*e,tz:V(i*3)*.3}}},purr:{d:2.8,fx:"heart",f:function(i){var e=pe(i,0,.2,2.4,2.8);return{happy:e,sm:1,blush:1*e,bz:V(i*50)*.018*e,bsy:1+V(i*50)*.01,hz:.2*e,hx:-.1*e,mo:.15*e,ear:-.2*e,tz:V(i*3)*.5}}},poke:{d:1.2,f:function(i){var e=pe(i,0,.08,.6,1.2);return{bsx:1+.18*e,bsy:1-.18*e,eye:1.25,brow:.6*e,mo:.4*e,hz:V(i*30)*.08*e,aLz:-1.2*e,aRz:1.2*e,ear:-.4*e,sm:-.3*e}}},nod:{d:1,f:function(i){return{hx:V(i*12)*.3*pe(i,0,.1,.8,1),happy:.5,sm:1}}},no:{d:1,f:function(i){return{hy:V(i*16)*.45*pe(i,0,.1,.8,1),brow:.5,sm:-.5}}},idea:{d:1.4,f:function(i){var e=pe(i,0,.15,1,1.4);return{aRz:2.7*e,aRx:-.3,by:.12*e,eye:1.2,mo:.5*e,happy:.6*e,hx:-.15*e,ear:-.5*e}}},stretch:{d:3,f:function(i){var e=pe(i,0,.8,2.2,3);return{bx:.85*e,by:.1*e,aLx:2.3*e,aRx:2.3*e,lLx:.2*e,lRx:.2*e,hx:-.5*e,tz:-.5*e,mo:.3*e,happy:.8*e,bsy:1+.05*e}}},tongue:{d:2,f:function(i){var e=pe(i,0,.15,1.6,2);return{tg:e,mo:.25*e,hz:V(i*14)*.12*e,sm:1,brow:.3*e,bz:V(i*14)*.03*e,blush:.7*e}}},raspberry:{d:1.8,fxs:[[.3,"drops"]],f:function(i){var e=pe(i,0,.1,1.5,1.8);return{tg:e,mo:.3*e,hz:V(i*30)*.12*e,eye:.8,brow:.5*e,hx:-.1*e,bsy:1+V(i*30)*.02*e,sm:1}}},wink:{d:1.4,f:function(i){var e=pe(i,0,.12,1.1,1.4);return{wink:e,sm:1,mo:.2*e,hz:.15*e,blush:.7*e,aRz:.3*e}}},hearteyes:{d:2.8,fxs:[[.3,"heart"]],f:function(i){var e=pe(i,0,.2,2.4,2.8),t=1+V(i*10)*.12;return{heart:e*t,blush:1*e,sm:1,mo:.25*e,bsy:1+V(i*10)*.02*e,hz:V(i*3)*.1*e,aLx:-.6*e,aRx:-.6*e,aLz:-.3*e,aRz:.3*e,ear:-.2*e}}},kiss:{d:2.4,fxs:[[1.05,"kiss"],[1.4,"kiss"]],f:function(i){var e=pe(i,0,.35,.95,1.05),t=pe(i,.95,1.15,1.9,2.4);return{aRx:-2.4*e-1.2*t,aRz:-.4*e-1.4*t,mo:.14*e,hz:.2*e,blush:1*(e+t),happy:t>.4?1:0,sm:1,hx:-.1*t,bx:.1*t,aLz:-.1}}},hug:{d:2.8,fxs:[[1.3,"heart"]],f:function(i){var e=pe(i,0,.4,2.3,2.8),t=pe(i,.9,1.3,1.9,2.3);return{aLz:(-1.7+t*2.1)*e,aRz:(1.7-t*2.1)*e,aLx:-1.3*e,aRx:-1.3*e,bx:.25*e,bsx:1-.05*t,bsy:1+.03*t,hz:.2*e,happy:e,blush:1*e,sm:1,mo:.1}}},sulk:{d:99,loop:1,f:function(i){var e=si(i/.7),t=Math.max(0,V(i*7));return{bry:Jt*.8*e,hy:-1.9*e,hx:.2*e,aLz:1.15*e,aRz:-1.15*e,aLx:-.9*e,aRx:-.9*e,cheek:e,brow:e,sm:-1,eye:.6,blush:.8*e,lRx:t*.3*e,tz:V(i*6)*.6*e,mo:0}}},turnback:{d:3.4,f:function(i){var e=pe(i,0,.5,2.7,3.4),t=pe(i,1.7,2,2.6,3);return{bry:Jt*e,hy:-1.7*t,wink:t,tg:t,sm:1,hx:-.05*t,tz:V(i*5)*.4,hz:.1*t,blush:.8*t}}},hipshake:{d:3.2,f:function(i){var e=pe(i,0,.3,2.8,3.2),t=V(i*15);return{bz:t*.32*e,bry:V(i*15+1.5)*.45*e,by:Math.abs(t)*.14*e,aLz:(-1.2+V(i*15)*.6)*e,aRz:(1.2+V(i*15)*.6)*e,lLx:V(i*15)*.3*e,lRx:-V(i*15)*.3*e,hz:-t*.2*e,happy:e,mo:.5*e,tz:t*1.2,ear:t*.3*e,blush:.8*e}}},booty:{d:3.2,f:function(i){var e=pe(i,0,.45,2.8,3.2),t=V(i*20),n=pe(i,.8,1.1,2.7,3.2);return{bry:Jt*e,bx:.5*e,by:-.12*e+Math.abs(t)*.08*e,bz:t*.3*e,hy:-1.6*n,wink:n,tg:n,aLz:-.9*e,aRz:.9*e,tz:t*1.6*e,ear:t*.25*e,sm:1,hx:-.2*n,blush:.9*n}}},shrug:{d:1.8,f:function(i){var e=pe(i,0,.2,1.3,1.8);return{aLz:-.7*e,aRz:.7*e,aLx:-.3*e,aRx:-.3*e,by:.1*e,hz:.3*e,brow:-.7*e,sm:-.2*e,mo:.1*e,ear:.3*e,bz:V(i*4)*.05*e}}},facepalm:{d:2.4,f:function(i){var e=pe(i,0,.3,1.9,2.4);return{aRx:-2.55*e,aRz:-.15*e,hx:.35*e,bx:.1*e,eye:1-.5*e,sm:-.3*e,brow:-.6*e,sleepy:.5*e,ear:.6*e,by:-.04*e}}},clap:{d:2.2,fxs:[[.4,"clap"],[.8,"clap"],[1.2,"clap"],[1.6,"clap"]],f:function(i){var e=pe(i,0,.2,1.9,2.2),t=(V(i*17)+1)/2;return{aLx:-1.2*e,aRx:-1.2*e,aLz:(.6-t*.45)*e,aRz:(-.6+t*.45)*e,by:Math.abs(V(i*8.5))*.1*e,happy:e,mo:.6*e,hz:V(i*4)*.08*e}}},flex:{d:2.4,fxs:[[.6,"flex"]],f:function(i){var e=pe(i,0,.3,2,2.4),t=(V(i*6)+1)/2;return{aLz:-1.9*e,aRz:1.9*e,aLx:-.6*e,aRx:-.6*e,bsx:1+.08*t*e,bsy:1+.03*t*e,hx:-.2*e,brow:.7*e,sm:1,mo:.2*e,by:.06*e,hz:V(i*3)*.08*e}}},peekaboo:{d:3,f:function(i){var e=pe(i,0,.3,1.5,1.7),t=pe(i,1.6,1.8,2.7,3);return{aLx:-2.45*e,aRx:-2.45*e,aLz:.55*e,aRz:-.55*e,hx:.1*e,eye:1-.3*e,happy:t,mo:.7*t,bsy:1+.05*t,by:.15*t,aLz2:0,blush:1*t,sm:1}}},dizzy:{d:2.8,fxs:[[.2,"swirl"],[1.2,"swirl"]],f:function(i){var e=pe(i,0,.3,2.3,2.8);return{bz:V(i*4)*.22*e,hz:V(i*4+1)*.3*e,bry:V(i*3)*.5*e,tg:.8*e,mo:.15*e,eye:1-.15*V(i*9)*e,brow:-.6*e,sm:-.2*e,lLx:V(i*4)*.3*e,lRx:-V(i*4)*.3*e,aLz:-1*e,aRz:1*e,ear:V(i*4)*.4*e}}},faint:{d:3,f:function(i){var e=pe(i,0,.45,2.2,3),t=si(i/.45);return{rz:1.5*e,by:-.5*e,eye:1-.9*e,sleepy:1,tg:.6*e,mo:.2*e,aLz:-1.4*e,aRz:1.4*e,lLx:.3*e,lRx:-.3*e,hz:.3*e,ear:.8*e,sm:-.3}}},salute:{d:2,f:function(i){var e=pe(i,0,.2,1.6,2);return{aRx:-2.65*e,aRz:-1*e,hx:-.1*e,sm:.2,brow:.6*e,by:.02*e,bsy:1+.04*e,aLz:0,lLx:0}}},sneeze:{d:2,fxs:[[1,"achoo"]],f:function(i){var e=pe(i,0,.8,1,1.05),t=pe(i,1,1.1,1.5,1.9);return{hx:-.6*e+.7*t,mo:.5*e+1.1*t,eye:1-.9*t+.1*e,bx:.3*t,bsy:1+.05*e-.08*t,aLz:-.5*e,aRz:.5*e,brow:.5*e,ear:-.6*e+.8*t,by:.08*e}}},shy:{d:2.6,f:function(i){var e=pe(i,0,.4,2.2,2.6);return{blush:1.3*e,hx:.35*e,hz:.25*e,bry:.55*e,aLx:-1.1*e,aRx:-1.1*e,aLz:.35*e,aRz:-.35*e,bz:V(i*3)*.08*e,sm:.8,mo:.1*e,eye:.8,ear:.5*e,lLx:V(i*5)*.15*e,tz:.5*e}}},taunt:{d:2.6,f:function(i){var e=pe(i,0,.2,2.3,2.6),t=V(i*11);return{tg:e,mo:.3*e,hz:t*.22*e,hy:0,aLz:-2.5*e+t*.35*e,aRz:2.5*e-t*.35*e,aLx:-.4*e,aRx:-.4*e,bz:t*.08*e,brow:.4*e,by:Math.abs(t)*.05*e,sm:1,ear:t*.3*e,tz:t*1.2}}},bored:{d:3,f:function(i){var e=pe(i,0,.4,2.6,3),t=Math.max(0,V(i*8));return{hy:.9*e,hx:.1*e,eye:.55,sleepy:.5*e,sm:-.15*e,lLx:-t*.35*e,bz:V(i*1.4)*.04,aLz:-.1,aRz:.1,ear:.5*e,tz:V(i*2)*.3,mo:0,brow:-.3*e}}},twirl:{d:1.6,f:function(i){var e=pe(i,0,.15,1.4,1.6),t=i/1.6;return{bry:t*4*Jt,by:V(t*Jt)*.4,aLz:-1.7*e,aRz:1.7*e,happy:e,hz:.1*e,blush:.5*e,mo:.4*e}}},bounce:{d:2.4,f:function(i){var e=pe(i,0,.2,2.1,2.4),t=Math.abs(V(i*7));return{by:t*.45*e,bsy:1+(.08*t-.1*(1-t))*e,bsx:1+(.08*(1-t)-.04*t)*e,aLz:-.9*t*e,aRz:.9*t*e,happy:e,mo:.5*e,ear:-.4*t*e}}},jumpjack:{d:2.4,f:function(i){var e=pe(i,0,.2,2.1,2.4),t=(V(i*10)+1)/2;return{aLz:-(.3+2.2*t)*e,aRz:(.3+2.2*t)*e,by:t*.25*e,lLx:-t*.3*e,lRx:-t*.3*e,happy:e,mo:.6*e}}},headbang:{d:2.4,f:function(i){var e=pe(i,0,.2,2.1,2.4),t=i*10;return{hx:V(t)*.45*e,bx:V(t)*.12*e,by:Math.abs(V(t))*.05*e,aRx:-1.2*e,aLx:-.8*e,brow:.5*e,sm:1,mo:.4*e,ear:V(t)*.4*e,tg:0}}},thumbsup:{d:1.8,f:function(i){var e=pe(i,0,.25,1.4,1.8);return{aRx:-1.6*e,aRz:-.15*e,wink:.9*e,sm:1,hz:.1*e,blush:.6*e,by:.06*e,mo:.2*e}}},pout:{d:2,f:function(i){var e=pe(i,0,.25,1.6,2);return{cheek:e,brow:.6*e,sm:-1*e,bry:.4*e,hy:-.5*e,aLx:-1.2*e,aRx:-1.2*e,aLz:.5*e,aRz:-.5*e,blush:.7*e}}},shake:{d:1.6,f:function(i){var e=pe(i,0,.12,1.4,1.6),t=V(i*45)*e;return{bz:t*.08,hz:t*.12,aLz:-.3*e+t*.2,aRz:.3*e-t*.2,eye:1+.1*e,mo:.3*e,sm:-.2*e}}},sway:{d:3.6,f:function(i){var e=pe(i,0,.5,3.1,3.6),t=V(i*3);return{bz:t*.18*e,hz:-t*.2*e,aLz:(-.5+t*.5)*e,aRz:(.5+t*.5)*e,happy:.7*e,sm:1,tz:t*.5*e,ear:t*.3*e,lLx:t*.1*e,lRx:-t*.1*e}}},cutepose:{d:2.4,fxs:[[.5,"heart"]],f:function(i){var e=pe(i,0,.3,2,2.4);return{aLx:-2.3*e,aRx:-2.3*e,aLz:.7*e,aRz:-.7*e,hz:.25*e,happy:e,blush:1*e,sm:1,bz:V(i*4)*.03*e,by:.04*e}}},tiptoe:{d:2.6,f:function(i){var e=pe(i,0,.3,2.3,2.6),t=V(i*6);return{by:.12*e,lLy:Math.max(0,t)*.2*e,lRy:Math.max(0,-t)*.2*e,bz:t*.05*e,hx:.1*e,sm:1,aLz:-.5*e,aRz:.5*e,eye:1.15,brow:.4*e,mo:.1*e}}},pose:{d:2.4,f:function(i){var e=pe(i,0,.3,2,2.4);return{aLz:-.95*e,aRz:.95*e,aLx:-.5*e,aRx:-.5*e,hz:.12*e,hx:-.12*e,sm:1,brow:.3*e,bsy:1+.03*e,by:.03*e,blush:.4*e}}},robot:{d:3,f:function(i){var e=pe(i,0,.2,2.7,3),t=Math.floor(i*4)%4;return{hy:(t===1?.5:t===3?-.5:0)*e,aLx:(t%2?-1.4:-.4)*e,aRx:(t%2?-.4:-1.4)*e,aLz:-.3*e,aRz:.3*e,bz:(t===0?.06:t===2?-.06:0)*e,eye:1.1,sm:.1,brow:.3*e}}},spit:{d:2.2,k:"llama",fxs:[[.9,"drops"]],f:function(i){var e=pe(i,0,.6,.85,.95),t=pe(i,.9,1,1.7,2.2);return{hx:-.5*e+.2*t,bx:-.2*e,mo:.9*t,brow:.6*(e+t),ear:.6*e,eye:1-.3*t,tz:.3*e}}},cuddle:{d:3.4,k:"koala",fxs:[[1.2,"heart"]],f:function(i){var e=pe(i,0,.5,2.9,3.4);return{aLx:-1.5*e,aRx:-1.5*e,aLz:.8*e,aRz:-.8*e,hz:.3*e,hx:.2*e,happy:e,blush:1*e,sleepy:.3*e,bsy:1-.03*e+V(i*2)*.01,sm:1}}},reach:{d:3.2,k:"giraffe",f:function(i){var e=pe(i,0,.6,2.6,3.2),t=(V(i*11)+1)/2;return{hoy:.55*e,hx:-.45*e,mo:t*.5*e,happy:.6*e,aLz:-.3*e,aRz:.3*e,ear:.3*e,bx:-.12*e,blush:.6*e}}},slowwave:{d:4,k:"sloth",f:function(i){var e=pe(i,0,1,3,4);return{aRz:2.4*e+V(i*2)*.2*e,hz:.15*e,happy:.8*e,sm:1,eye:1-.35*e,sleepy:.4*e,bz:V(i*1.5)*.03*e}}},oink:{d:1.8,k:"pig",fxs:[[.3,"note"]],f:function(i){var e=pe(i,0,.1,1.5,1.8),t=Math.max(0,V(i*14));return{hx:-.3*t*e,mo:.5*t*e,bsy:1+.04*t*e,happy:.5*e,ear:-.4*e,tz:V(i*8)*.5*e,blush:.6*e}}},chestbeat:{d:2.8,k:"gorilla",fxs:[[.5,"shake"],[1.1,"shake"],[1.7,"shake"]],f:function(i){var e=pe(i,0,.25,2.4,2.8),t=V(i*14),n=Math.max(0,t),s=Math.max(0,-t);return{aLx:-1.5*n*e-.3*e,aRx:-1.5*s*e-.3*e,aLz:.9*e,aRz:-.9*e,bsy:1+.05*e,hx:-.3*e,mo:.8*e,brow:1*e,bz:V(i*7)*.04*e,eye:1.05}}},scoop:{d:3,k:"pelican",f:function(i){var e=pe(i,0,.4,2.6,3),t=pe(i,.5,.9,1.4,1.8),n=pe(i,1.6,1.9,2.4,2.6);return{hx:.6*t-.35*n,mo:.9*t+.3*n,bx:.35*t,aLz:-.9*e,aRz:.9*e,happy:.6*n,ex2:n,eye:1.05}}},buzz:{d:2.2,k:"ladybug",f:function(i){var e=pe(i,0,.2,1.9,2.2),t=V(i*50);return{wing:.3+(V(i*40)+1)*.5*e,by:.12*e+V(i*9)*.03*e,bz:t*.03*e,aLz:-.4*e,aRz:.4*e,happy:.7*e,mo:.3*e,tz:V(i*6)*.5*e}}},bubbles:{d:2.8,k:"fish",fxs:[[.5,"drops"],[1.1,"drops"],[1.7,"drops"]],f:function(i){var e=pe(i,0,.3,2.5,2.8),t=Math.max(0,V(i*7));return{mo:.55*t*e,hx:-.15*e,happy:.5*e,bsy:1+.04*t*e,tz:V(i*5)*.6*e,aLz:-.3*e,aRz:.3*e,blush:.6*e}}},splash:{d:1.8,k:"goldfish",fxs:[[.5,"drops"]],f:function(i){var e=i/1.8,t=pe(i,0,.1,1.5,1.8);return{bry:V(e*Jt)*2.4,bz:V(e*Jt*3)*.5,by:V(e*Jt)*.5,aLz:-1.6*t,aRz:1.6*t,happy:1,mo:.6,tz:V(i*14)*.9}}},dolphinjump:{d:1.6,k:"dolphin",fxs:[[.2,"drops"],[1.3,"drops"]],f:function(i){var e=i/1.6,t=pe(i,0,.1,1.4,1.6);return{by:V(e*Jt)*.9,bx:(-.9+e*1.8)*t,aLz:-1.2*t,aRz:1.2*t,happy:1,mo:.7,tz:V(i*10)*.5,hx:-.2*t}}},flick:{d:1.6,k:"shrimp",f:function(i){var e=pe(i,0,.1,1.3,1.6),t=Math.max(0,V(i*12));return{by:t*.3*e,bx:.3*t*e,tz:-1.2*t*e,aLz:-.8*e,aRz:.8*e,happy:.8*e,mo:.4*e,ear:V(i*12)*.5*e}}},bob:{d:3,k:"seahorse",f:function(i){var e=pe(i,0,.4,2.6,3),t=V(i*2.6);return{by:t*.18*e+.1*e,bz:t*.1*e,hx:t*.1*e,tz:V(i*2.6+1)*.9*e,happy:.6*e,sm:1,ear:t*.4*e}}},pinch:{d:2.4,k:"crab",f:function(i){var e=pe(i,0,.2,2.1,2.4),t=(V(i*12)+1)/2;return{aLz:-(1+t*.8)*e,aRz:(1+t*.8)*e,aLx:-.6*e,aRx:-.6*e,bz:V(i*6)*.1*e,by:Math.abs(V(i*6))*.08*e,brow:.7*e,sm:-.3*e,mo:.3*e,eye:1.1}}},hippoyawn:{d:3,k:"hippo",f:function(i){var e=pe(i,.1,.8,2,2.8);return{mo:1.4*e,hx:-.55*e,eye:1-.8*e,bsy:1+.05*e,aLz:-.3*e,aRz:.3*e,sleepy:.5*e,ear:.4*e,by:.06*e}}},charge:{d:2.4,k:"beetle",fxs:[[1,"shake"]],f:function(i){var e=pe(i,0,.6,.9,1),t=pe(i,.9,1,1.8,2.4);return{bx:-.25*e+.6*t,hx:-.2*e+.5*t,by:-.04*e,brow:1*(e+t),sm:-.6*(e+t),mo:.4*t,bz:V(i*40)*.03*e,eye:1.05,ear:.5*e}}},leap:{d:2,k:"grasshopper",f:function(i){var e=pe(i,0,.5,.7,.8),t=pe(i,.75,.85,1.5,2);return{bsy:1-.22*e+.12*t,bsx:1+.1*e,by:-.12*e+.5*t,lLx:.6*e-.9*t,lRx:.6*e-.9*t,aLz:-1.2*t,aRz:1.2*t,happy:t,mo:.5*t,ear:-.6*t}}},scratch:{d:3,k:"monkey",fxs:[[1.2,"note"]],f:function(i){var e=pe(i,0,.3,2.6,3),t=V(i*14);return{aRz:(-1.4+t*.25)*e,aRx:-.2*e,aLz:-.2*e,hz:.15*e,hy:.3*e,mo:.4*e,sm:1,bz:t*.06*e,tz:V(i*3)*.5,bsy:1+t*.01,lLx:0}}},bray:{d:2.6,k:"donkey",fxs:[[.7,"note"]],f:function(i){var e=pe(i,0,.3,2.2,2.6),t=V(i*12);return{hx:-.55*e,mo:1*e,ear:-.5*e+t*.15*e,bsy:1+.04*e,eye:1-.5*e,hz:t*.08*e,tz:t*.5*e}}},peck:{d:2.2,k:"chick",f:function(i){var e=pe(i,0,.1,2,2.2),t=Math.max(0,V(i*13));return{hx:.7*t*e,bx:.25*t*e,mo:.1*e,aLz:-.5*e,aRz:.5*e,by:-.05*t*e}}},breathe:{d:2.6,k:"dragon",fxs:[[.9,"fire"]],f:function(i){var e=pe(i,0,.6,.9,1),t=pe(i,.9,1,1.9,2.6);return{hx:-.35*e+.15*t,bsy:1+.06*e-.04*t,mo:1*t+.2*e,aLz:-.5*e,aRz:.5*e,eye:1-.3*t,brow:.6*t,bx:-.05*e}}},stomp:{d:2.4,k:"dino",fxs:[[.5,"shake"],[1.2,"shake"]],f:function(i){var e=pe(i,0,.1,2.2,2.4),t=Math.max(0,V(i*5));return{by:-.1*t*e+.06*e,bz:V(i*5)*.1*e,lLx:t*.8*e,lRx:Math.max(0,-V(i*5))*.8*e,brow:.8*e,mo:.7*e,hx:-.15*e,aLz:-.6*e,aRz:.6*e,tz:V(i*5)*.5}}},hide:{d:3.2,k:"turtle",f:function(i){var e=pe(i,0,.35,2.7,3.2);return{bsy:1-.18*e,bsx:1+.06*e,hx:.85*e,hy:0,by:-.1*e,aLz:.2*e,aRz:-.2*e,eye:1-.9*e,sleepy:e,lLx:0,tz:0}}},beg:{d:3,k:"puppy",fxs:[[.8,"heart"]],f:function(i){var e=pe(i,0,.4,2.6,3),t=V(i*14);return{aLx:-1*e,aRx:-1*e,aLz:-.2*e+V(i*6)*.1*e,aRz:.2*e,hx:-.2*e,hz:V(i*3)*.2*e,ear:.3*e,tz:t*1.6,bsy:1-.06*e,by:-.05*e,sm:1,mo:.3*e,eye:1,brow:.5*e}}},lookaround:{d:4.2,k:"turtle",f:function(i){var e=pe(i,0,.4,3.8,4.2);return{hy:V(i*1.9)*1.05*e,hz:V(i*1.9+1.6)*.12*e,hx:-.08*e,eye:1.1,brow:.3*e,ear:0,sm:.6}}},wiggle:{d:1.1,k:"cat",f:function(i){var e=pe(i,0,.12,.9,1.1),t=V(i*34)*e;return{bx:.55*e,by:-.34*e,bz:t*.09,lLx:-.2*e,lRx:-.2*e,aLx:.9*e,aRx:.9*e,hx:-.35*e,eye:1.2,px:0,ear:-.7*e,tz:t*1.3,ty:0,mo:.1}}},swat:{d:1.1,k:"cat",f:function(i){var e=pe(i,0,.1,.7,1.1),t=V(i*20);return{aRx:-1.9*e+t*.4*e,aRz:.4*e,aLx:.5*e,bx:.3*e,hx:.1*e,eye:1.2,ear:-.4*e,tz:V(i*10)*.7,bsy:1-.05*e}}},arch:{d:1.6,k:"cat",f:function(i){var e=pe(i,0,.1,1.2,1.6);return{bsy:1.12*e+(1-e),bsx:1-.12*e,by:.2*e,hx:.35*e,mo:.3*e,sm:-.8*e,brow:1*e,tz:1.2*e,ex1:e,ear:-.9*e,aLz:-.5*e,aRz:.5*e,lLx:.15*e,lRx:.15*e,bz:V(i*30)*.03*e}}},loaf:{d:99,loop:1,k:"cat",fx:"zzz",f:function(i){var e=si(i/.8);return{by:-.55*e,bsy:1-.22*e,bsx:1+.14*e,lLx:-1.5*e,lRx:-1.5*e,hx:.3*e,hz:.2*e,sleepy:.9,eye:1-.85*e,happy:.3,aLx:.3,aRx:.3,tz:.3*e,ear:.3*e,sm:.7}}},tailchase:{d:2.6,k:"cat",f:function(i){var e=pe(i,0,.3,2.2,2.6);return{bry:i*9*e,hx:.3*e,hy:.5*e,by:Math.abs(V(i*9))*.1*e,aLz:-1*e,aRz:1*e,tz:V(i*9)*.5,happy:.6*e,mo:.5*e,lLx:V(i*18)*.8*e,lRx:-V(i*18)*.8*e}}},flap:{d:1.8,k:"penguin",f:function(i){var e=pe(i,0,.15,1.5,1.8),t=V(i*30)*e;return{aLz:(-1.3+t*.7)*e,aRz:(1.3-t*.7)*e,by:Math.abs(V(i*15))*.16*e,mo:.6*e,happy:e,ex2:e,hx:-.2*e,bsy:1+.04*e}}},slide:{d:99,loop:1,k:"penguin",f:function(i){var e=si(i/.25);return{bx:1.38*e,by:-.62*e,hx:-1.05*e,aLz:-1.8*e,aRz:1.8*e,aLx:1.2*e,aRx:1.2*e,lLx:.9*e,lRx:.9*e,lLy:.1,lRy:.1,happy:.9,mo:.6*e,sm:1,bsx:1+.05*e,ear:0,tw:1}}},shiver:{d:2.4,k:"penguin",f:function(i){var e=pe(i,0,.2,2,2.4),t=V(i*55)*e;return{bz:t*.07,bsy:1-.04*e,aLz:-.1*e,aRz:.1*e,eye:1-.4*e,sm:-.4*e,mo:.2*e+(V(i*55)+1)*.08*e,hz:t*.05,brow:-.4*e,blush:0,ex2:0}}},fishgulp:{d:2.2,k:"penguin",f:function(i){var e=pe(i,0,.35,1.5,2.2),t=pe(i,0,.35,.9,1.2);return{hx:-.6*t,mo:1*t+.2,ex2:1*t,eye:1.1,aLz:-.8*t,aRz:.8*t,bsy:1+.05*t,happy:si((i-1.2)/.2)*pe(i,1.2,1.4,2,2.2),by:.1*t}}},thump:{d:1.6,k:"bunny",f:function(i){var e=pe(i,0,.1,1.3,1.6),t=Math.max(0,V(i*15))*e;return{lLx:-.9*t,by:.08*t,bx:-.1*e,ear:.4*e,earx:-.2*e,brow:.6*e,mo:.15,hx:-.1*e,eye:1.2,tz:V(i*15)*.3}}},binky:{d:1.1,k:"bunny",f:function(i){var e=i/1.1;return{bry:V(e*Jt)*1.4,bz:V(e*Jt*2)*.5,by:0,aLz:-1.8,aRz:1.8,lLx:-.5,lRx:.5,happy:1,mo:.6,ear:V(e*Jt*4)*.4}}},nibble:{d:2.6,k:"bunny",fx:"carrot",f:function(i){var e=pe(i,0,.3,2.2,2.6),t=(V(i*22)+1)/2;return{by:-.38*e,lLx:-1.35*e,lRx:-1.35*e,aLx:-1.7*e,aRx:-1.7*e,aLz:-.25*e,aRz:.25*e,mo:t*.4*e,hx:.15*e,happy:.6*e,ear:-V(i*22)*.15*e,blush:.8*e}}},roar:{d:2.4,k:"lion",fx:"shake",f:function(i){var e=pe(i,.15,.5,1.6,2.2),t=V(i*40)*e;return{mo:1.2*e,hx:-.5*e,bx:-.25*e,ex1:e,brow:1*e,eye:1.1,aLz:-1.4*e,aRz:1.4*e,by:.05*e,bsy:1+.06*e,bz:t*.02,sm:-1,tz:.2*e}}},manes:{d:1.8,k:"lion",f:function(i){var e=pe(i,0,.1,1.5,1.8);return{hy:V(i*22)*.55*e,hz:V(i*22+1)*.15*e,ex1:e*(.5+V(i*22)*.5),happy:.7*e,mo:.4*e}}},dive:{d:1.2,k:"fox",f:function(i){var e=pe(i,0,.25,.8,1.2);return{bx:.8*e,by:.35*e,aLx:1.4*e,aRx:1.4*e,lLx:.7*e,lRx:.7*e,hx:-.3*e,tz:-.8*e,eye:1.2,mo:.4*e,ear:-.3*e}}},wobble:{d:2,k:"ghost",f:function(i){var e=pe(i,0,.2,1.7,2);return{bz:V(i*8)*.3*e,bsx:1+V(i*16)*.1*e,bsy:1-V(i*16)*.1*e,happy:e,mo:.5*e,by:.1*e}}}},ig={base:{},happy:{happy:1,mo:.35,sm:1},wow:{eye:1.3,mo:.6,brow:.8},worried:{brow:-1,sm:-.6,eye:1.05},cry:{tear:1,sm:-1,brow:-1,happy:0,mo:.2},sleepy:{sleepy:1,eye:.35},angry:{brow:1,sm:-1,blush:.8},love:{happy:1,blush:1,sm:1,mo:.2}},wh={cat:["wiggle","swat","arch","loaf","tailchase","groom","purr"],penguin:["flap","slide","shiver","fishgulp"],bunny:["thump","binky","nibble","groom"],lion:["roar","manes","groom"],fox:["dive","groom","purr"],bear:[],ghost:["wobble"],monkey:["scratch"],donkey:["bray"],chick:["peck"],dragon:["breathe"],dino:["stomp"],turtle:["hide","lookaround"],puppy:["beg"],llama:["spit"],koala:["cuddle"],giraffe:["reach"],sloth:["slowwave"],pig:["oink"],gorilla:["chestbeat"],pelican:["scoop","flap"],ladybug:["buzz"],human:[],dolphin:["dolphinjump"],shrimp:["flick"],seahorse:["bob"],crab:["pinch"],hippo:["hippoyawn"],beetle:["charge"],grasshopper:["leap"],dodo:["flap"],clownfish:["bubbles"],goldfish:["bubbles","splash"]},Th=["wave","cheer","bow","sad","think","laugh","spin","dance","yawn","sit","sleep","scared","angry","eat","nod","no","idea","stretch","tongue","raspberry","wink","hearteyes","kiss","hug","sulk","turnback","hipshake","booty","shrug","facepalm","clap","flex","peekaboo","dizzy","faint","salute","sneeze","shy","taunt","bored","twirl","bounce","jumpjack","headbang","thumbsup","pout","shake","sway","cutepose","tiptoe","pose","robot"],bh={cat:[1,.8,.6,.06,.05,.12],penguin:[.8,.45,.9,.1,.26,.05],bunny:[1,.7,.5,.1,.03,.1],lion:[.9,.7,.9,.08,.06,.02],fox:[1.2,.9,.6,.06,.05,.15],bear:[.9,.7,.8,.08,.08,.05],ghost:[.8,0,.3,.02,.1,.15],monkey:[1.2,.8,.9,.08,.06,.1],donkey:[.9,.7,.5,.06,.04,.05],chick:[1.3,.5,.9,.1,.2,.05],dragon:[1,.7,.5,.07,.06,.08],dino:[.85,.8,.4,.09,.08,.08],turtle:[.6,.5,.5,.04,.1,.03],puppy:[1.3,.9,.6,.08,.05,.12],llama:[1,.7,.7,.07,.05,.05],koala:[.6,.5,.6,.05,.06,.03],giraffe:[.9,.8,.6,.06,.04,.05],sloth:[.4,.5,.4,.03,.08,.02],pig:[1,.7,.7,.1,.06,.06],gorilla:[.85,.7,1,.09,.09,.08],pelican:[.8,.45,.8,.1,.2,.05],ladybug:[1.2,.8,.4,.08,.04,.1],human:[1,.85,.9,.07,.05,.06],dodo:[.8,.55,.8,.1,.2,.05],clownfish:[.9,0,.3,.02,.1,.15],goldfish:[.9,0,.3,.02,.1,.15],dolphin:[1,0,.3,.02,.1,.15],shrimp:[1.1,.8,.5,.1,.08,.1],seahorse:[.6,0,.3,.02,.1,.1],crab:[1.2,.9,.3,.06,.12,.02],hippo:[.6,.5,.6,.06,.05,.03],beetle:[1,.7,.5,.07,.04,.05],grasshopper:[1.1,.8,.5,.1,.03,.05]};function Vt(i,e,t){var n=this;this.host=i,this.size=t||180,this.alive=!0,this.r=new ta({antialias:!0,alpha:!0,powerPreference:"low-power"}),this.r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.r.setClearColor(0,0),this.cv=this.r.domElement,this.cv.style.cssText="display:block;width:100%;height:100%;touch-action:none",i.appendChild(this.cv),this.sc=new na,this.cam=new jt(30,1,.1,60),this.cam.position.set(0,2.1+(rr-1)*.15,10.6*rr),this.cam.lookAt(0,1.95,0),this.sc.add(new ma(16777215,12167423,1.2));var s=new tr(16777215,1.5);s.position.set(2.5,5,6),this.sc.add(s);var r=new tr(12890367,.8);r.position.set(-4,2,-3),this.sc.add(r),this.cache={},this.J={},this.V={},this.T={};for(var a in Mi)this.J[a]=Mi[a],this.V[a]=0,this.T[a]=Mi[a];this.t=0,this.phase=0,this.blinkAt=2,this.blink=0,this.clip=null,this.face={},this.lookT=[0,0],this.lookC=[0,0],this.facing=0,this.faceT=0,this.ph={vx:0,vy:0,ground:!0,held:!1,dir:1,speed:0},this.queue=[],this.twitch=3,this.noise=Math.random()*100,this.setChar(e||"mimi"),this.setSize(this.size),this.last=performance.now(),this._loop=function(o){if(n.alive){requestAnimationFrame(n._loop);var c=Math.min(.05,(o-n.last)/1e3);n.last=o,n.step(c),n.r.render(n.sc,n.cam)}},requestAnimationFrame(this._loop)}Vt.prototype.setSize=function(i){this.size=i,this.r.setSize(i*rr,i*rr,!1),this.cam.aspect=1,this.cam.updateProjectionMatrix()};Vt.prototype.setChar=function(i){ir[i]||(i="mimi"),this.P&&this.sc.remove(this.P.root),this.P=this.cache[i]||(this.cache[i]=tg(i)),this.sc.add(this.P.root),this.id=i,this.clip=null;for(var e in Mi)this.J[e]=Mi[e],this.V[e]=0};Vt.prototype.play=function(i,e){var t=Eh[i];if(!t)return!1;e=e||{},this.clip={n:i,c:t,t:0,loop:!!t.loop,lock:!!e.lock,fi:0},t.fx&&this.host.fx&&this.host.fx(t.fx,this);var n={wave:"pop",cheer:"ok",roar:"grumble",yawn:"yawn",angry:"grumble",scared:"boing",laugh:"giggle",dance:"dance",spin:"whoosh",slide:"whoosh",binky:"boing",thump:"pop",purr:"pop",arch:"boing",sad:"no",no:"no",nod:"pop",idea:"ok",kiss:"pop",bray:"grumble",breathe:"whoosh",stomp:"boing",peck:"pop",scratch:"giggle",beg:"giggle",hearteyes:"giggle",tongue:"giggle",raspberry:"giggle",taunt:"giggle",clap:"pop",sneeze:"whoosh",faint:"no",hug:"ok",booty:"giggle",hipshake:"dance",dizzy:"boing",flex:"pop",wink:"pop"}[i];if(this.sfxOn){var s=i==="bray"&&this.P.K!=="donkey"?null:Q0[i];s?Sa(this.P.S,s):n&&kc[n]()}return!0};Vt.prototype.emote=function(i,e){return this.sfxOn?Sa(this.P.S,i,e):0};Vt.prototype.stop=function(){this.clip=null};Vt.prototype.isBusy=function(){return!!this.clip&&!(this.clip.c.d>=99)};Vt.prototype.setFace=function(i){this.face=ig[i]||{}};Vt.prototype.look=function(i,e){this.lookT=i==null?null:[Math.max(-1,Math.min(1,i)),Math.max(-1,Math.min(1,e))]};Vt.prototype.setPhys=function(i){this.ph=i};Vt.prototype.snapRoll=function(){this.J.rz=0,this.V.rz=0};Vt.prototype.impact=function(i){this.V.bsy-=i*.0035,this.V.bsx+=i*.0035,this.V.by-=i*.0016};Vt.prototype.stretchJump=function(){this.V.bsy+=3.2,this.V.bsx-=1.6};Vt.prototype.speak=function(i){if(this.sfxOn){var e=this,t=$0(this.P.S.voice,i);this.talk=this.t+t}};Vt.prototype.names=function(){return Th.concat(wh[this.P.K]||[])};Vt.prototype.step=function(i){var e=this.P,t=this.J,n=this.V,s=this.T,r,a=this.ph,o=this.t+=i,c=bh[e.K]||bh.cat;for(r in Mi)s[r]=Mi[r];var l=V(o*2.1+this.noise);s.bsy+=l*.018,s.bsx-=l*.008,s.hy+=V(o*.5+this.noise)*.03,s.tz+=V(o*1.4)*.35,s.ty+=V(o*.9)*.25,e.K==="turtle"&&(s.hy+=V(o*.8+this.noise)*.55,s.hz+=V(o*.8+this.noise+1)*.06),e.K==="dragon"&&(s.wing=.3+V(o*2.2)*.08),this.blinkAt-=i,this.blinkAt<0&&(this.blink=.14,this.blinkAt=1.8+Math.random()*3.2,Math.random()<.2&&(this.blinkAt=.25)),this.blink>0&&(this.blink-=i,s.eye*=Math.max(.06,Math.abs(this.blink-.07)/.07)),this.twitch-=i,this.twitch<0&&(this.twitch=2+Math.random()*4,this.earFlick=.3),this.earFlick>0&&(this.earFlick-=i,s.ear+=V(this.earFlick*40)*.35);var h=Math.abs(a.vx),u=a.dir||1;if(a.held){var f=V(o*5);s.aLz=-2.2,s.aRz=2.2,s.by=-.1,s.bsy=1.12,s.bsx=.92,s.lLx=.25+f*.25,s.lRx=.25-f*.25,s.eye=1.15,s.mo=.35,s.ear=.5,s.tz=.6+f*.4,s.hx=.1,s.rz=(a.swing||0)*.6}else if(a.fly){var d=V(o*13)*.5+.5,x=Math.min(1,h/300);s.wing=d,s.aLz=-.5,s.aRz=.5,s.aLx=-.3,s.aRx=-.3,s.lLx=.7,s.lRx=.5,s.bx=.25+.3*x,s.by=-V(o*13)*.06-.02,s.happy=.6,s.mo=.4,s.eye=1.05,s.tz=1.2+V(o*6)*.5,s.rz=(a.bank||0)+(a.vy||0)*-7e-4*u,s.hx=-.2}else if(a.ground){if(h>18&&!(this.clip&&this.clip.lock)){this.phase+=i*Math.min(h,420)*.035*c[0]*(e.K==="penguin"?.8:1);var g=V(this.phase),m=Math.abs(V(this.phase));e.K==="bunny"&&(s.lLx=g*.15,s.lRx=g*.15),s.lLx+=g*c[1],s.lRx-=g*c[1],s.aLx=-g*c[2],s.aRx=g*c[2],s.by+=m*c[3]*(1+h/300),s.bz+=V(this.phase)*c[4],s.bx+=c[5]*Math.min(1,h/250),s.hz+=-V(this.phase)*c[4]*.5,s.tz+=V(this.phase*2)*.35,s.ear+=V(this.phase*2)*.12,e.K==="penguin"&&(s.aLz=-.7-m*.5,s.aRz=.7+m*.5),h>260&&(s.bx+=.12,s.eye*=1,s.mo+=.2,s.happy+=.5)}}else{var _=a.vy<0;s.aLz=_?-2.3:-1.1,s.aRz=_?2.3:1.1,s.lLx=_?-.6:.35,s.lRx=_?-.2:.5,s.bsy=_?1.1:1.02,s.bsx=_?.93:.99,s.eye=1.1,s.mo=_?.25:.5,s.happy=_?.7:0,s.ear=_?-.4:.9,s.earx=_?0:.3,s.tz+=_?0:.8,s.rz=a.rot||0,s.rx=0,s.bx=_?-.15:.1,s.hx=_?-.2:-.1}var C=this.clip;if(C){if(C.t+=i,C.c.fxs)for(;C.fi<C.c.fxs.length&&C.t>=C.c.fxs[C.fi][0];)this.host.fx&&this.host.fx(C.c.fxs[C.fi][1],this),C.fi++;var w=C.c.f(C.t,e);for(r in w)s[r]=w[r];C.t>=C.c.d&&!C.loop&&(this.clip=null)}this.lookT?(this.lookC[0]+=(this.lookT[0]-this.lookC[0])*Math.min(1,i*6),this.lookC[1]+=(this.lookT[1]-this.lookC[1])*Math.min(1,i*6)):(this.lookC[0]*=1-Math.min(1,i*3),this.lookC[1]*=1-Math.min(1,i*3)),s.hy+=this.lookC[0]*.55,s.hx-=this.lookC[1]*.35,s.hz+=this.lookC[0]*.05;for(r in this.face)s[r]=this.face[r];this.talk&&o<this.talk&&(s.mo=Math.max(s.mo,.25+(V(o*22)+1)*.22));for(r in Mi){var b=ng[r]||150,z=r==="tz"||r==="ear"||r==="ty"?.35:.55,L=2*z*Math.sqrt(b);n[r]+=((s[r]-t[r])*b-n[r]*L)*i,t[r]+=n[r]*i}var D=a.held?0:h>18||this.clip&&this.clip.n==="slide"?u*1.05:0;this.faceT+=(D-this.faceT)*Math.min(1,i*7);var U=t.by+t.hop;e.root.rotation.set(t.rx,this.faceT+t.bry,t.rz),e.sq.scale.set(t.bsx,t.bsy,t.bsx),e.sq.position.y=Math.max(0,U)*.9,e.body.position.y=1.32+Math.min(0,U)*.9,e.body.rotation.set(t.bx,0,t.bz),e.head.rotation.set(t.hx,t.hy,t.hz),e.wings&&e.wings.forEach(function(re,fe){var ye=fe?1:-1;re.rotation.z=ye*(-.35+t.wing*1.5),re.rotation.y=ye*.25}),e.head.position.y=(e.hy0||1.62)+t.hoy,e.arms[0].rotation.set(t.aLx,0,t.aLz),e.arms[1].rotation.set(t.aRx,0,t.aRz),e.legs[0].rotation.x=t.lLx,e.legs[1].rotation.x=t.lRx,e.legs[0].position.y=.68+t.lLy,e.legs[1].position.y=.68+t.lRy,e.ears.forEach(function(re,fe){var ye=fe?1:-1;re.rotation.z=-ye*(e.K==="bunny"?.12:.3)+(t.ear+(fe?t.earR:0))*-ye*.7+(t.ex1&&e.K==="lion",0),re.rotation.x=t.earx-(a.vy?Math.max(-.6,Math.min(.9,a.vy*.0012))*(e.K==="bunny"?1:.4):0)});var T=t.tz,M=t.ty;e.tail.forEach(function(re,fe){var ye=fe?e.tail[fe-1].rotation.z:0;re.rotation.z=T*(.55+fe*.15)+(fe?ye*.2:0),re.rotation.y=M*.3,fe===0?re.rotation.x=-.5-t.ex1*.5+(t.by>.1?-.2:0):re.rotation.x=.25+V(o*2+fe)*.06;var Ye=1+(e.K==="cat"?t.ex1*.5:0);re.scale.set(Ye,1,Ye)}),e.pom&&(e.pom.position.y=-.72+V(o*3)*.02);var P=e.F,K=Math.max(.05,t.eye),X=t.happy>.5,q=t.sleepy>.75&&t.eye<.5,ce=t.wink>.5,j=t.heart>.05;P.eyes.forEach(function(re,fe){re.visible=!X&&!q&&!j&&!(fe===0&&ce),re.scale.set(1,K*(t.sleepy>.3&&!q?1-t.sleepy*.5:1),1),re.position.x=(fe?1:-1)*e.EX+this.lookC[0]*.05,re.position.y=e.EY+this.lookC[1]*.05},this),P.arcs.forEach(function(re,fe){re.visible=X&&!q&&!j||fe===0&&ce&&!X&&!j}),P.hearts.forEach(function(re){re.visible=j;var fe=Math.max(.01,t.heart)*.3;re.scale.set(fe,fe,fe*1.5)}),P.tongue2.visible=t.tg>.05,P.tongue2.scale.set(1,.3+t.tg*1.1,.6),P.tongue2.position.y=-.2-.06-t.tg*.14,P.blush.forEach(function(re){re.scale.setScalar(1+t.cheek*.7)}),P.arcs2.forEach(function(re){re.visible=q});var ue=Math.max(0,t.mo);if(P.open.visible=ue>.08,P.open.scale.set(.7+ue*.5,.25+ue*1.1,.5),P.tongue.visible=ue>.5&&t.sm>.3,P.smile.visible=ue<=.08&&t.sm>=-.2,P.frown.visible=ue<=.08&&t.sm<-.2,P.smile.scale.y=Math.max(.3,t.sm),P.brows.forEach(function(re,fe){var ye=fe?1:-1;re.visible=Math.abs(t.brow)>.15,re.rotation.z=-ye*t.brow*.45,re.position.y=e.EY+.35+Math.max(0,t.brow)*.1}),P.blush.forEach(function(re){re.material.opacity=Math.max(0,Math.min(.9,t.blush))}),P.tears.forEach(function(re,fe){re.visible=t.tear>.3,re.position.y=.12-.15-(o*1.3+fe*.5)%1*.5*(t.tear>.3?1:0)}),e.mane){var Q=1+t.ex1*.22;e.mane.scale.set(Q,Q,1),e.mane.rotation.z=V(o*2)*.02}e.beak&&(e.beak.rotation.x=ue*.15),e.whisk&&e.whisk.forEach(function(re,fe){re.rotation.z=(fe<2?-1:1)*((fe%2?-.12:.1)+t.sleepy*0+t.ear*.1)}),e.orbs&&e.orbs.forEach(function(re,fe){var ye=o*(.9+fe*.3)+fe*2.1;re.position.set(Math.cos(ye)*1.9,2+Math.sin(ye*1.3)*.5+fe*.3,Math.sin(ye)*1.2)})};Vt.prototype.destroy=function(){this.alive=!1;try{this.r.dispose(),this.cv.remove()}catch{}};window.PALS={_test:{setCtx:function(i,e){ii=i,ri=e,Bc=0},emos:Object.keys(Sh),vx:sr,emote:Sa,sig:Ma},emote:function(i,e,t){return xn?Sa(ir[i],e,t):0},PAD:rr,ok:(function(){try{var i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}})(),chars:Object.keys(ir),kinds:ir,create:function(i,e,t){var n=new Vt(i,e,t);return n.sfxOn=xn,n},sound:function(i){if(i===void 0)return xn;xn=!!i;try{localStorage.setItem("rm3dsnd",xn?"1":"0")}catch{}return xn},sfx:function(i){xn&&kc[i]&&kc[i]()},clips:Object.keys(Eh),commons:Th,kindClips:wh};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

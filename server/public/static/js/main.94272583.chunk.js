(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(224)},196:function(e,t,n){},198:function(e,t,n){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(103),i=n.n(r),c=(n(196),n(4)),s=n(7),l=n(9),u=n(8),d=n(10),p=n(228),m=n(227),h=(n(198),n(32)),g=n(225),f=(n(200),n(26)),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){n.props.logout()},n.state={loggedInUser:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return console.log("USER IN NAVBAR"),console.log(this.state.loggedInUser),this.state.loggedInUser?o.a.createElement("nav",{className:"nav-style"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{onClick:this.handleLogout},"Logout")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/scope"},"See Scope"))," ",o.a.createElement("li",null,o.a.createElement(g.a,{to:"/camera"},"See AR"))," ",o.a.createElement("li",null,o.a.createElement(g.a,{to:"/upload-scope"},"New Scope")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/upload-media-img"},"Add Image")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/upload-media-video"},"Add Video")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/profile"},"My Profile"))),o.a.createElement("h2",null,"Welcome, ",this.state.loggedInUser.username)):o.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(g.a,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/signup"},"Signup")),o.a.createElement("li",null,o.a.createElement(g.a,{to:"/login"},"Login"))))}}]),t}(a.Component),w=n(13),S=n.n(w);n(24).config();var E=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentuser").then(function(e){return e.data}).catch(function(e){console.error("Error in getUser",e)})},this.logout=function(){return console.log("TRYING AT FRONT"),t.service.get("/logout").then(function(e){return e.data})},this.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api/auth"),withCredentials:!0})},b=n(33),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then(function(e){n.setState({username:"",password:""}),n.props.getUser(e.user)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(b.a)({},a,o))},n.state={username:"",password:""},n.service=new E,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Welcome!, create your account next:"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),o.a.createElement("fieldset",null,o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),o.a.createElement("input",{type:"submit",value:"Sign up"})))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({username:t,password:a,error:!1}),n.props.getUser(e)}).catch(function(e){n.setState({username:t,password:a,error:!0})})},n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(b.a)({},a,o))},n.state={username:"",password:""},n.service=new E,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Please, login to our site"),o.a.createElement("form",{onSubmit:this.handleFormSubmit},o.a.createElement("fieldset",null,o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),o.a.createElement("fieldset",null,o.a.createElement("label",null,"Password:"),o.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),o.a.createElement("input",{type:"submit",value:"Login"})),o.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component),C=n(2),j=n(2);j.DeviceOrientationControls=function(e){var t=this;this.object=e,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alphaOffset=0;var n=function(e){t.deviceOrientation=e},a=function(){t.screenOrientation=window.orientation||0},o=function(){var e=new j.Vector3(0,0,1),t=new j.Euler,n=new j.Quaternion,a=new j.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));return function(o,r,i,c,s){t.set(i,r,-c,"YXZ"),o.setFromEuler(t),o.multiply(a),o.multiply(n.setFromAxisAngle(e,-s))}}();this.connect=function(){a(),window.addEventListener("orientationchange",a,!1),window.addEventListener("deviceorientation",n,!1),t.enabled=!0},this.disconnect=function(){window.removeEventListener("orientationchange",a,!1),window.removeEventListener("deviceorientation",n,!1),t.enabled=!1},this.update=function(){if(!1!==t.enabled){var e=t.deviceOrientation;if(e){var n=e.alpha?j.Math.degToRad(e.alpha)+t.alphaOffset:0,a=e.beta?j.Math.degToRad(e.beta+90):j.Math.degToRad(90),r=e.gamma?j.Math.degToRad(e.gamma):0,i=t.screenOrientation?j.Math.degToRad(t.screenOrientation):0;o(t.object.quaternion,n,a,r,i)}}},this.dispose=function(){t.disconnect()},this.connect()};var I=j.DeviceOrientationControls,D=n(2);D.TrackballControls=function(e,t){var n=this,a={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new D.Vector3;var o=new D.Vector3,r=a.NONE,i=a.NONE,c=new D.Vector3,s=new D.Vector2,l=new D.Vector2,u=new D.Vector3,d=0,p=new D.Vector2,m=new D.Vector2,h=0,g=0,f=new D.Vector2,v=new D.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var w={type:"change"},S={type:"start"},E={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}};var b=function(){var e=new D.Vector2;return function(t,a){return e.set((t-n.screen.left)/n.screen.width,(a-n.screen.top)/n.screen.height),e}}(),y=function(){var e=new D.Vector2;return function(t,a){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-a))/n.screen.width),e}}();function O(e){!1!==n.enabled&&(window.removeEventListener("keydown",O),i=r,r===a.NONE&&(e.keyCode!==n.keys[a.ROTATE]||n.noRotate?e.keyCode!==n.keys[a.ZOOM]||n.noZoom?e.keyCode!==n.keys[a.PAN]||n.noPan||(r=a.PAN):r=a.ZOOM:r=a.ROTATE))}function C(e){!1!==n.enabled&&(r=i,window.addEventListener("keydown",O,!1))}function j(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r===a.NONE&&(r=e.button),r!==a.ROTATE||n.noRotate?r!==a.ZOOM||n.noZoom?r!==a.PAN||n.noPan||(f.copy(b(e.pageX,e.pageY)),v.copy(f)):(p.copy(b(e.pageX,e.pageY)),m.copy(p)):(l.copy(y(e.pageX,e.pageY)),s.copy(l)),document.addEventListener("mousemove",I,!1),document.addEventListener("mouseup",M,!1),n.dispatchEvent(S))}function I(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r!==a.ROTATE||n.noRotate?r!==a.ZOOM||n.noZoom?r!==a.PAN||n.noPan||v.copy(b(e.pageX,e.pageY)):m.copy(b(e.pageX,e.pageY)):(s.copy(l),l.copy(y(e.pageX,e.pageY))))}function M(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),r=a.NONE,document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",M),n.dispatchEvent(E))}function x(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:p.y-=.025*e.deltaY;break;case 1:p.y-=.01*e.deltaY;break;default:p.y-=25e-5*e.deltaY}n.dispatchEvent(S),n.dispatchEvent(E)}}function k(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:r=a.TOUCH_ROTATE,l.copy(y(e.touches[0].pageX,e.touches[0].pageY)),s.copy(l);break;default:r=a.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;g=h=Math.sqrt(t*t+o*o);var i=(e.touches[0].pageX+e.touches[1].pageX)/2,c=(e.touches[0].pageY+e.touches[1].pageY)/2;f.copy(b(i,c)),v.copy(f)}n.dispatchEvent(S)}}function R(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:s.copy(l),l.copy(y(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY;g=Math.sqrt(t*t+a*a);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,r=(e.touches[0].pageY+e.touches[1].pageY)/2;v.copy(b(o,r))}}function T(e){if(!1!==n.enabled){switch(e.touches.length){case 0:r=a.NONE;break;case 1:r=a.TOUCH_ROTATE,l.copy(y(e.touches[0].pageX,e.touches[0].pageY)),s.copy(l)}n.dispatchEvent(E)}}function N(e){!1!==n.enabled&&e.preventDefault()}this.rotateCamera=function(){var e,t=new D.Vector3,a=new D.Quaternion,o=new D.Vector3,r=new D.Vector3,i=new D.Vector3,p=new D.Vector3;return function(){p.set(l.x-s.x,l.y-s.y,0),(e=p.length())?(c.copy(n.object.position).sub(n.target),o.copy(c).normalize(),r.copy(n.object.up).normalize(),i.crossVectors(r,o).normalize(),r.setLength(l.y-s.y),i.setLength(l.x-s.x),p.copy(r.add(i)),t.crossVectors(p,c).normalize(),e*=n.rotateSpeed,a.setFromAxisAngle(t,e),c.applyQuaternion(a),n.object.up.applyQuaternion(a),u.copy(t),d=e):!n.staticMoving&&d&&(d*=Math.sqrt(1-n.dynamicDampingFactor),c.copy(n.object.position).sub(n.target),a.setFromAxisAngle(u,d),c.applyQuaternion(a),n.object.up.applyQuaternion(a)),s.copy(l)}}(),this.zoomCamera=function(){var e;r===a.TOUCH_ZOOM_PAN?(e=h/g,h=g,c.multiplyScalar(e)):(1!==(e=1+(m.y-p.y)*n.zoomSpeed)&&e>0&&c.multiplyScalar(e),n.staticMoving?p.copy(m):p.y+=(m.y-p.y)*this.dynamicDampingFactor)},this.panCamera=function(){var e=new D.Vector2,t=new D.Vector3,a=new D.Vector3;return function(){e.copy(v).sub(f),e.lengthSq()&&(e.multiplyScalar(c.length()*n.panSpeed),a.copy(c).cross(n.object.up).setLength(e.x),a.add(t.copy(n.object.up).setLength(e.y)),n.object.position.add(a),n.target.add(a),n.staticMoving?f.copy(v):f.add(e.subVectors(v,f).multiplyScalar(n.dynamicDampingFactor)))}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(c.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,c.setLength(n.maxDistance)),p.copy(m)),c.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,c.setLength(n.minDistance)),p.copy(m)))},this.update=function(){c.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,c),n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>1e-6&&(n.dispatchEvent(w),o.copy(n.object.position))},this.reset=function(){r=a.NONE,i=a.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),c.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(w),o.copy(n.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",N,!1),this.domElement.removeEventListener("mousedown",j,!1),this.domElement.removeEventListener("wheel",x,!1),this.domElement.removeEventListener("touchstart",k,!1),this.domElement.removeEventListener("touchend",T,!1),this.domElement.removeEventListener("touchmove",R,!1),document.removeEventListener("mousemove",I,!1),document.removeEventListener("mouseup",M,!1),window.removeEventListener("keydown",O,!1),window.removeEventListener("keyup",C,!1)},this.domElement.addEventListener("contextmenu",N,!1),this.domElement.addEventListener("mousedown",j,!1),this.domElement.addEventListener("wheel",x,!1),this.domElement.addEventListener("touchstart",k,!1),this.domElement.addEventListener("touchend",T,!1),this.domElement.addEventListener("touchmove",R,!1),window.addEventListener("keydown",O,!1),window.addEventListener("keyup",C,!1),this.handleResize(),this.update()},D.TrackballControls.prototype=Object.create(D.EventDispatcher.prototype),D.TrackballControls.prototype.constructor=D.TrackballControls;var M=D.TrackballControls,x=n(2);x.CSS3DRenderer=function(){var e,t,n,a;console.log("THREE.CSS3DRenderer",x.REVISION);var o=new x.Matrix4,r={camera:{fov:0,style:""},objects:new WeakMap},i=document.createElement("div");i.style.overflow="hidden",this.domElement=i;var c=document.createElement("div");c.style.WebkitTransformStyle="preserve-3d",c.style.transformStyle="preserve-3d",i.appendChild(c);var s=/Trident/i.test(navigator.userAgent);function l(e){return Math.abs(e)<1e-10?0:e}function u(e){var t=e.elements;return"matrix3d("+l(t[0])+","+l(-t[1])+","+l(t[2])+","+l(t[3])+","+l(t[4])+","+l(-t[5])+","+l(t[6])+","+l(t[7])+","+l(t[8])+","+l(-t[9])+","+l(t[10])+","+l(t[11])+","+l(t[12])+","+l(-t[13])+","+l(t[14])+","+l(t[15])+")"}function d(e,t){var o=e.elements,r="matrix3d("+l(o[0])+","+l(o[1])+","+l(o[2])+","+l(o[3])+","+l(-o[4])+","+l(-o[5])+","+l(-o[6])+","+l(-o[7])+","+l(o[8])+","+l(o[9])+","+l(o[10])+","+l(o[11])+","+l(o[12])+","+l(o[13])+","+l(o[14])+","+l(o[15])+")";return s?"translate(-50%,-50%)translate("+n+"px,"+a+"px)"+t+r:"translate(-50%,-50%)"+r}this.getSize=function(){return{width:e,height:t}},this.setSize=function(o,r){n=(e=o)/2,a=(t=r)/2,i.style.width=o+"px",i.style.height=r+"px",c.style.width=o+"px",c.style.height=r+"px"};var p=function(){var e=new x.Vector3,t=new x.Vector3;return function(n,a){return e.setFromMatrixPosition(n.matrixWorld),t.setFromMatrixPosition(a.matrixWorld),e.distanceToSquared(t)}}();function m(e){for(var t=function(e){var t=[];return e.traverse(function(e){e instanceof x.CSS3DObject&&t.push(e)}),t}(e).sort(function(e,t){return r.objects.get(e).distanceToCameraSquared-r.objects.get(t).distanceToCameraSquared}),n=t.length,a=0,o=t.length;a<o;a++)t[a].element.style.zIndex=n-a}this.render=function(e,t){var l=t.projectionMatrix.elements[5]*a;r.camera.fov!==l&&(t.isPerspectiveCamera&&(i.style.WebkitPerspective=l+"px",i.style.perspective=l+"px"),r.camera.fov=l),e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld();var h=t.isOrthographicCamera?"scale("+l+")"+u(t.matrixWorldInverse):"translateZ("+l+"px)"+u(t.matrixWorldInverse),g=h+"translate("+n+"px,"+a+"px)";r.camera.style===g||s||(c.style.WebkitTransform=g,c.style.transform=g,r.camera.style=g),function e(t,n,a){if(t instanceof x.CSS3DObject){var i;t instanceof x.CSS3DSprite?(o.copy(n.matrixWorldInverse),o.transpose(),o.copyPosition(t.matrixWorld),o.scale(t.scale),o.elements[3]=0,o.elements[7]=0,o.elements[11]=0,o.elements[15]=1,i=d(o,a)):i=d(t.matrixWorld,a);var l=t.element,u=r.objects.get(t);if(void 0===u||u!==i){l.style.WebkitTransform=i,l.style.transform=i;var m={style:i};s&&(m.distanceToCameraSquared=p(n,t)),r.objects.set(t,m)}l.parentNode!==c&&c.appendChild(l)}for(var h=0,g=t.children.length;h<g;h++)e(t.children[h],n,a)}(e,t,h),s&&m(e)}};var k=x.CSS3DRenderer,R=n(2);(R=n(2)).CSS3DObject=function(e){R.Object3D.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",function(){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})},R.CSS3DObject.prototype=Object.create(R.Object3D.prototype),R.CSS3DObject.prototype.constructor=R.CSS3DObject,R.CSS3DSprite=function(e){R.CSS3DObject.call(this,e)},R.CSS3DSprite.prototype=Object.create(R.CSS3DObject.prototype),R.CSS3DSprite.prototype.constructor=R.CSS3DSprite;var T=function(e,t,n,a,o){var r=document.createElement("div");r.style.width="".concat(200,"px"),r.style.backgroundColor="#000";var i=document.createElement("iframe");i.style.border="0px";var c=["https://www.youtube.com/embed/",e,"?rel=0"].join("");i.src=c,r.appendChild(i);var s=new R.CSS3DObject(r);return s.position.set(t,n,a),s.rotation.y=o,console.log(e),console.log(c),s},N=function(e,t,n,a,o){var r=document.createElement("div");r.style.backgroundColor="#000";var i=document.createElement("img");i.style.border="0px",i.src=e,i.style.width="".concat(200,"px"),i.style.height="auto",r.appendChild(i);var c=new R.CSS3DObject(r);return c.position.set(t,n,a),c.rotation.y=o,console.log(e),c},U=function(e,t){var n,a,o=e-50,r=t.length,i=2*Math.PI/r,c=new R.Group;return t.forEach(function(e,t){var r=i*t;n=o*Math.cos(r),a=o*Math.sin(r);var s=3*Math.PI/2-r;if("IMAGE"==e.type){var l=new N(e.url,n,0,a,s);c.add(l)}else if("YOUTUBE"==e.type){var u=new T(e.url,n,0,a,s);c.add(u)}else{var d=new T(e,n,0,a,s);c.add(d)}}),c},L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).cameraStart=function(){var t=document.querySelector("#camera--view");navigator.mediaDevices.getUserMedia(e.state.constraints).then(function(e){e.getTracks()[0];t.srcObject=e}).catch(function(e){console.error("Oops. Something is broken.",e)})},e.state={cameraView:document.querySelector("#camera--view"),constraints:{video:{facingMode:"environment"},audio:!1}},window.addEventListener("load",e.cameraStart,!1),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("video",{className:"camera",id:"camera--view",autoPlay:!0,playsInline:!0})}}]),t}(o.a.Component);n(24).config();var P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getImage=function(e){return n.service.get("/spaces/".concat(e)).then(function(e){console.log("Image from DB "+e.data),n.setState({image:e.data.image,media:e.data.media})}).catch(function(e){return console.log(e)})},n.init=function(e){var t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS;n.setState({controls:new I(t)}),t.position.set(0,0,-1e-4),o.domElement.className="scope",i.domElement.className="scopeCSS";var c=new C.SphereBufferGeometry(n.state.spaceRadius,60,40);c.scale(-1,1,1);var s=new C.TextureLoader;s.crossOrigin="";var l=s.load(n.state.image),u=new C.MeshBasicMaterial({map:l}),d=new C.Mesh(c,u);a.add(d);var p=new C.BoxBufferGeometry(100,100,100,4,4,4),m=new C.MeshBasicMaterial({color:16711935,wireframe:!0});new C.Mesh(p,m);console.log("MEDIA FROM THIS SPACE DB"),console.log(n.state.media);var h=U(n.state.spaceRadius,n.state.media);r.add(h);var g=document.getElementById("scopediv");o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),g.appendChild(o.domElement),i.setSize(window.innerWidth,window.innerHeight),g.appendChild(i.domElement),window.addEventListener("resize",n.onWindowResize,!1)},n.animate=function(){var e=n.state,t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS,c=e.controls;window.requestAnimationFrame(n.animate),c.update(),o.render(a,t),i.render(r,t)},n.onWindowResize=function(){var e=n.state,t=e.camera,a=e.renderer,o=e.rendererCSS;t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)},n.componentDidMount=function(){var e=n.state.id;n.getImage(e).then(function(){n.init(n.state),n.animate()})},n.componentDidUpdate=function(e){if(n.props.id!==e.id){var t=n.props.id;n.setState({id:t}),n.getImage(t).then(function(){n.init(n.state),n.animate()})}},n.state={spaceRadius:500,camera:new C.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1100),scene:new C.Scene,sceneCSS:new C.Scene,renderer:new C.WebGLRenderer({antialias:!0}),rendererCSS:new k,id:n.props.id},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"scopediv"})}}]),t}(o.a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ScopeView"},o.a.createElement(P,{id:this.props.id}))}}]),t}(a.Component),A=function(){return new Promise(function(e,t){navigator.geolocation||t("No geolocation available"),navigator.geolocation.getCurrentPosition(function(t){var n={lat:t.coords.latitude,lng:t.coords.longitude};e(n)},t)})};n(24).config();var V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createSpace=function(e,t){t.lat,t.lng;console.log(t);var a={image:e,creator:n.state.loggedInUser._id,location:t};return n.service.post("/spaces",a).then(function(e){console.log("CREATED NEW SPACE:"),console.log(e.data),n.sendNewSpace(e.data),n.addSpaceToUser(e.data)}).catch(function(e){return console.log(e)})},n.sendNewSpace=function(e){n.props.newSpace(e._id,e.location)},n.addSpaceToUser=function(e){var t=n.state.loggedInUser;console.log("ADD TO USER CATALOG"),console.log(e),console.log(t),n.updateCatalog(t.catalog,e._id)},n.updateCatalog=function(e,t){var a={spaceId:t};return n.service.patch("/catalog/".concat(e),a).then(function(e){console.log("Catalog updated on DB "+e.data)}).catch(function(e){return console.log(e)})},n.state={loggedInUser:n.props.userInSession},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.uploadImage(this.state.file).then(function(){console.log("uploaded image to create space"),console.log(t.state.img_url),A().then(function(e){console.log(e),t.createSpace(t.state.img_url,e)})})}},{key:"uploadImage",value:function(e){var t=this,n=new FormData;return n.append("photo",e),this.service.post("/uploadCloud",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.setState({img_url:e.data.secure_url})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{class:"file is-boxed"},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{className:"file-input",type:"file",onChange:function(t){return e.handleChange(t)}})," ",o.a.createElement("br",null),o.a.createElement("span",{className:"file-cta"},o.a.createElement("span",{className:"file-label"},"Choose a panorama")),o.a.createElement(f.Button,{type:"submit",isColor:"primary"},"Upload Space"))))}}]),t}(o.a.Component);n(24).config();var z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createMedia=function(e){var t={url:e,type:"IMAGE"};return n.service.post("/media",t).then(function(e){console.log("CREATED NEW IMAGE:"),console.log(e.data),n.addMediaToSpace(e.data)}).catch(function(e){return console.log(e)})},n.addMediaToSpace=function(e){var t=n.state.spaceID;n.updateSpace(e,t)},n.updateSpace=function(e,t){var a=e;return n.service.patch("/spaces/".concat(t),a).then(function(e){console.log("Space updated on DB "+e.data)}).catch(function(e){return console.log(e)})},n.state={loggedInUser:n.props.userInSession,spaceID:n.props.currentSpace},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.uploadImage(this.state.file).then(function(){console.log("uploaded image to this space"),console.log(t.state.img_url),t.createMedia(t.state.img_url)})}},{key:"uploadImage",value:function(e){var t=this,n=new FormData;return n.append("photo",e),this.service.post("/uploadCloud",n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.setState({img_url:e.data.secure_url})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{class:"file is-boxed"},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{className:"file-input",type:"file",onChange:function(t){return e.handleChange(t)}})," ",o.a.createElement("br",null),o.a.createElement("span",{className:"file-cta"},o.a.createElement("span",{className:"file-label"},"Choose an image")),o.a.createElement(f.Button,{type:"submit",isColor:"primary"},"Upload Images to this Scope"))))}}]),t}(o.a.Component),B=n(2);(B=n(2)).CSS3DObject=function(e){B.Object3D.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",function(){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})},B.CSS3DObject.prototype=Object.create(B.Object3D.prototype),B.CSS3DObject.prototype.constructor=B.CSS3DObject,B.CSS3DSprite=function(e){B.CSS3DObject.call(this,e)},B.CSS3DSprite.prototype=Object.create(B.CSS3DObject.prototype),B.CSS3DSprite.prototype.constructor=B.CSS3DSprite;var H=function(e,t,n,a,o){var r=document.createElement("div");r.style.width="".concat(200,"px"),r.style.backgroundColor="#000";var i=document.createElement("iframe");i.style.border="0px";var c=["https://www.youtube.com/embed/","B-DuL2W71W4","?rel=0"].join("");i.src=c,r.appendChild(i);var s=new B.CSS3DObject(r);return s.position.set(t,n,a),s.rotation.y=o,s},_=function(e,t,n,a,o){var r=document.createElement("div");r.style.backgroundColor="#000";var i=document.createElement("img");i.style.border="0px",i.src="https://scontent-mad1-1.cdninstagram.com/vp/30f76f820acdb893b9cb648ae0adfd57/5C5FEA68/t51.2885-15/e35/25018699_872711359576719_1019478494217764864_n.jpg",i.style.width="".concat(200,"px"),i.style.height="auto",r.appendChild(i);var c=new B.CSS3DObject(r);return c.position.set(t,n,a),c.rotation.y=o,c},Y=function(e,t){var n,a,o=e-50,r=t.length,i=2*Math.PI/r,c=new B.Group;return t.forEach(function(e,t){var r=i*t;n=o*Math.cos(r),a=o*Math.sin(r);var s=3*Math.PI/2-r;if(t%2==0){var l=new _(e,n,0,a,s);c.add(l)}else{var u=new H(e,n,0,a,s);c.add(u)}}),c};n(24).config();var F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getImage=function(e){return n.service.get("/spaces/".concat(e)).then(function(e){n.setState({image:e.data.image,media:e.data.media}),console.log("Image from DB "+e.data.image)}).catch(function(e){return console.log(e)})},n.init=function(e){var t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS;n.setState({controls:new I(t)}),t.position.set(0,0,-1e-4),o.domElement.className="scopehidden",i.domElement.className="scopeCSS";var c=new C.SphereBufferGeometry(n.state.spaceRadius,60,40);c.scale(-1,1,1);var s=new C.TextureLoader;s.crossOrigin="";var l=s.load(n.state.image),u=new C.MeshBasicMaterial({map:l}),d=new C.Mesh(c,u);a.add(d);var p=new C.BoxBufferGeometry(100,100,100,4,4,4),m=new C.MeshBasicMaterial({color:16711935,wireframe:!0});new C.Mesh(p,m);console.log("MEDIA FROM THIS SPACE DB"),console.log(n.state.media);var h=Y(n.state.spaceRadius,n.state.media);r.add(h);var g=document.getElementById("scopecamdiv");o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),g.appendChild(o.domElement),i.setSize(window.innerWidth,window.innerHeight),g.appendChild(i.domElement),window.addEventListener("resize",n.onWindowResize,!1)},n.animate=function(){var e=n.state,t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS,c=e.controls;window.requestAnimationFrame(n.animate),c.update(),o.render(a,t),i.render(r,t)},n.onWindowResize=function(){var e=n.state,t=e.camera,a=e.renderer,o=e.rendererCSS;t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)},n.componentDidMount=function(){var e=n.state.id;n.getImage(e).then(function(){n.init(n.state),n.animate()})},n.componentDidUpdate=function(e){if(n.props.id!==e.id){var t=n.props.id;n.setState({id:t}),n.getImage(t).then(function(){n.init(n.state),n.animate()})}},n.state={spaceRadius:500,camera:new C.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1100),scene:new C.Scene,sceneCSS:new C.Scene,renderer:new C.WebGLRenderer({antialias:!0}),rendererCSS:new k,id:n.props.id},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"scopecamdiv"},o.a.createElement(L,null))}}]),t}(o.a.Component);n(24).config();var X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log(e);var t=e.target.value;n.setState({youtubeID:t})},n.createMedia=function(e){var t={url:e,type:"YOUTUBE"};return n.service.post("/media",t).then(function(e){console.log("CREATED NEW YOUTUBE VIDEO:"),console.log(e.data),n.addMediaToSpace(e.data)}).catch(function(e){return console.log(e)})},n.addMediaToSpace=function(e){var t=n.state.spaceID;n.updateSpace(e,t)},n.updateSpace=function(e,t){var a=e;return n.service.patch("/spaces/".concat(t),a).then(function(e){console.log("Space updated on DB "+e.data)}).catch(function(e){return console.log(e)})},n.state={loggedInUser:n.props.userInSession,spaceID:n.props.currentSpace,youtubeID:""},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("uploaded youtube video to this space"),console.log(this.state.img_url),this.createMedia(this.state.youtubeID)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{type:"text",name:"youtubeID",onChange:function(t){return e.handleChange(t)},placeholder:"VVsCOnWGHh8"}),o.a.createElement("button",{type:"submit"},"Upload Media")))}}]),t}(o.a.Component);n(24).config();var q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getScopes=function(){var e=n.props.userInSession.catalog,t=[];return n.setState({catalogId:e}),n.service.get("/catalog/".concat(e)).then(function(e){return e.data.spaces.forEach(function(e){t.push(n.service.get("/spaces/".concat(e)))}),Promise.all(t)}).then(function(e){var t=[];e.forEach(function(e){t.push(e.data)}),n.setState({userSpaces:t})}).catch(function(e){return console.log(e)})},n.state={loggedInUser:e.userInSession},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n.getScopes(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){if(this.props.userInSession){var e=this.state.userSpaces;return e?(e.forEach(function(e){}),o.a.createElement("div",null,o.a.createElement("h1",{className:"profile-feed"},"Profile"),e.map(function(e){return o.a.createElement("div",{key:e._id,className:"scope-in-feed"},o.a.createElement(g.a,{to:"/scope/".concat(e._id)},o.a.createElement("img",{className:"panorama-feed",height:"50px",src:e.image})))}))):o.a.createElement("div",{className:"profile-feed"},o.a.createElement("h1",null,"Profile"))}return o.a.createElement("div",null)}}]),t}(a.Component);n(24).config();var Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getScopes=function(){var e=n.props.match.params.username,t=[];n.service.get("auth/user/".concat(e)).then(function(e){var t=e.data.catalog;return console.log("USER FROM DB TO PROFILE"),console.log(e),n.setState({catalogId:t}),n.service.get("/catalog/".concat(t))}).then(function(e){return e.data.spaces.forEach(function(e){t.push(n.service.get("/spaces/".concat(e)))}),Promise.all(t)}).then(function(e){var t=[];e.forEach(function(e){t.push(e.data)}),n.setState({userSpaces:t})}).catch(function(e){return console.log(e)})},n.state={},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.userInSession})),this.getScopes()}},{key:"render",value:function(){var e=this.state.userSpaces;return e?(e.forEach(function(e){}),o.a.createElement("div",null,o.a.createElement("h1",{className:"profile-feed"},"Profile"),e.map(function(e){return o.a.createElement("div",{key:e._id,className:"scope-in-feed"},o.a.createElement(g.a,{to:"/scope/".concat(e._id)},o.a.createElement("img",{className:"panorama-feed",height:"50px",src:e.image})))}))):o.a.createElement("div",{className:"profile-feed"},o.a.createElement("h1",null,"Profile"))}}]),t}(a.Component);n(24).config();var G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getImage=function(e){var t=[];return n.service.get("/spaces/".concat(e)).then(function(e){n.setState({image:e.data.image,mediaIDs:e.data.media}),console.log("Image from DB "+e.data.image)}).then(function(){return n.state.mediaIDs.forEach(function(e){t.push(n.service.get("/media/".concat(e)))}),Promise.all(t)}).then(function(e){var t=[];e.forEach(function(e){t.push(e.data)}),n.setState({media:t}),console.log("MEDIA OBJECTS IN STATE"),console.log(n.state.media)}).catch(function(e){return console.log(e)})},n.init=function(e){var t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS;n.setState({controls:new M(t)}),t.position.set(0,0,-.001),o.domElement.className="scope",i.domElement.className="scopeCSS";var c=new C.SphereBufferGeometry(n.state.spaceRadius,60,40);c.scale(-1,1,1);var s=new C.TextureLoader;s.crossOrigin="";var l=s.load(n.state.image),u=new C.MeshBasicMaterial({map:l}),d=new C.Mesh(c,u);a.add(d),console.log("MEDIA FROM THIS SPACE DB"),console.log(n.state.media);var p=Y(n.state.spaceRadius,n.state.media);console.log(p),r.add(p);var m=document.getElementById("scopediv");o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),m.appendChild(o.domElement),i.setSize(window.innerWidth,window.innerHeight),m.appendChild(i.domElement),window.addEventListener("resize",n.onWindowResize,!1)},n.animate=function(){var e=n.state,t=e.camera,a=e.scene,o=e.renderer,r=e.sceneCSS,i=e.rendererCSS,c=e.controls;window.requestAnimationFrame(n.animate),c.update(),o.render(a,t),i.render(r,t)},n.onWindowResize=function(){var e=n.state,t=e.camera,a=e.renderer,o=e.rendererCSS;t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)},n.componentDidMount=function(){var e=n.props.match.params.id;n.getImage(e).then(function(){n.init(n.state),n.animate()})},n.state={spaceRadius:500,camera:new C.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1100),scene:new C.Scene,sceneCSS:new C.Scene,renderer:new C.WebGLRenderer({antialias:!0}),rendererCSS:new k},n.service=S.a.create({baseURL:"".concat("https://in-situ.herokuapp.com","/api")}),console.log("COMPONENT SCOPE ID"),console.log(n.props),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"scopediv"})}}]),t}(o.a.Component),Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getTheUser=function(t){e.setState({loggedInUser:t})},e.logout=function(){e.service.logout().then(function(){e.setState({loggedInUser:null})})},e.actualizeSpace=function(t,n){e.setState({spaceId:t,spaceLocation:n})},e.state={loggedInUser:null,spaceId:"5bc3313fdd315804e045a573",spaceLocation:{lat:40.3923451,lng:-3.6985332999999994}},e.service=new E,e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement(v,{userInSession:this.state.loggedInUser,logout:this.logout})),o.a.createElement(p.a,null,o.a.createElement(m.a,{exact:!0,path:"/signup",render:function(){return o.a.createElement(y,{getUser:e.getTheUser})}}),o.a.createElement(m.a,{exact:!0,path:"/login",render:function(){return o.a.createElement(O,{getUser:e.getTheUser})}}),o.a.createElement(m.a,{path:"/profile/:username",render:function(e){return o.a.createElement(Z,e)}}),o.a.createElement(m.a,{exact:!0,path:"/profile",render:function(){return o.a.createElement(q,{userInSession:e.state.loggedInUser})}}),o.a.createElement(m.a,{path:"/scope/:id",render:function(e){return o.a.createElement(G,e)}}),o.a.createElement(m.a,{exact:!0,path:"/scope",render:function(){return o.a.createElement(W,{id:e.state.spaceId})}}),o.a.createElement(m.a,{exact:!0,path:"/camera",render:function(){return o.a.createElement(F,{id:e.state.spaceId})}}),o.a.createElement(m.a,{exact:!0,path:"/upload-scope",render:function(){return o.a.createElement(V,{newSpace:function(t,n){e.actualizeSpace(t,n)},userInSession:e.state.loggedInUser})}}),o.a.createElement(m.a,{exact:!0,path:"/upload-media-img",render:function(){return o.a.createElement(z,{userInSession:e.state.loggedInUser,currentSpace:e.state.spaceId})}}),o.a.createElement(m.a,{exact:!0,path:"/upload-media-video",render:function(){return o.a.createElement(X,{userInSession:e.state.loggedInUser,currentSpace:e.state.spaceId})}})))}}]),t}(a.Component),J=n(226);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(J.a,null,o.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,2,1]]]);
//# sourceMappingURL=main.94272583.chunk.js.map
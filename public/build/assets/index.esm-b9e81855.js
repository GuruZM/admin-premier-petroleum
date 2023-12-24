import{R as m}from"./app-db9bbc0b.js";var ge=e=>e.type==="checkbox",ne=e=>e instanceof Date,U=e=>e==null;const cr=e=>typeof e=="object";var O=e=>!U(e)&&!Array.isArray(e)&&cr(e)&&!ne(e),Sr=e=>O(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,kr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Er=(e,i)=>e.has(kr(i)),Cr=e=>{const i=e.constructor&&e.constructor.prototype;return O(i)&&i.hasOwnProperty("isPrototypeOf")},He=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function B(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(He&&(e instanceof Blob||e instanceof FileList))&&(r||O(e)))if(i=r?[]:{},!r&&!Cr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=B(e[t]));else return e;return i}var oe=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,i,r)=>{if(!i||!O(e))return r;const t=oe(i.split(/[,[\].]+?/)).reduce((n,l)=>U(n)?n:n[l],e);return k(t)||t===e?k(e[i])?r:e[i]:t},Z=e=>typeof e=="boolean";const sr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},W={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Or=m.createContext(null),Tr=()=>m.useContext(Or);var Lr=(e,i,r,t=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const c=l;return i._proxyFormState[c]!==W.all&&(i._proxyFormState[c]=!t||W.all),r&&(r[c]=!0),e[c]}});return n},q=e=>O(e)&&!Object.keys(e).length,Rr=(e,i,r,t)=>{r(e);const{name:n,...l}=e;return q(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(c=>i[c]===(!t||W.all))},$=e=>Array.isArray(e)?e:[e];function fr(e){const i=m.useRef(e);i.current=e,m.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var X=e=>typeof e=="string",Ur=(e,i,r,t,n)=>X(e)?(t&&i.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),d(r,l))):(t&&(i.watchAll=!0),r),We=e=>/^\w*$/.test(e),dr=e=>oe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),S=(e,i,r)=>{let t=-1;const n=We(i)?[i]:dr(i),l=n.length,c=l-1;for(;++t<l;){const b=n[t];let A=r;if(t!==c){const M=e[b];A=O(M)||Array.isArray(M)?M:isNaN(+n[t+1])?{}:[]}e[b]=A,e=e[b]}return e},Mr=(e,i,r,t,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:n||!0}}:{},ee=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(Math.random()*16+e)%16|0;return(i=="x"?r:r&3|8).toString(16)})},Se=(e,i,r={})=>r.shouldFocus||k(r.shouldFocus)?r.focusName||`${e}.${k(r.focusIndex)?i:r.focusIndex}.`:"",Be=e=>({isOnSubmit:!e||e===W.onSubmit,isOnBlur:e===W.onBlur,isOnChange:e===W.onChange,isOnAll:e===W.all,isOnTouch:e===W.onTouched}),Pe=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));const le=(e,i,r,t)=>{for(const n of r||Object.keys(e)){const l=d(e,n);if(l){const{_f:c,...b}=l;if(c){if(c.refs&&c.refs[0]&&i(c.refs[0],n)&&!t)break;if(c.ref&&i(c.ref,c.name)&&!t)break;le(b,i)}else O(b)&&le(b,i)}}};var yr=(e,i,r)=>{const t=oe(d(e,r));return S(t,"root",i[r]),S(e,r,t),e},$e=e=>e.type==="file",re=e=>typeof e=="function",Ae=e=>{if(!He)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ve=e=>X(e),je=e=>e.type==="radio",be=e=>e instanceof RegExp;const ir={value:!1,isValid:!1},ar={value:!0,isValid:!0};var gr=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?ar:{value:e[0].value,isValid:!0}:ar:ir}return ir};const ur={isValid:!1,value:null};var _r=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,ur):ur;function nr(e,i,r="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||Z(e)&&!e)return{type:r,message:ve(e)?e:"",ref:i}}var ue=e=>O(e)&&!be(e)?e:{value:e,message:""},qe=async(e,i,r,t,n)=>{const{ref:l,refs:c,required:b,maxLength:A,minLength:M,min:z,max:E,pattern:_,validate:G,name:N,valueAsNumber:ce,mount:ie,disabled:fe}=e._f,F=d(i,N);if(!ie||fe)return{};const P=c?c[0]:l,j=V=>{t&&P.reportValidity&&(P.setCustomValidity(Z(V)?"":V||""),P.reportValidity())},g={},v=je(l),x=ge(l),C=v||x,H=(ce||$e(l))&&k(l.value)&&k(F)||Ae(l)&&l.value===""||F===""||Array.isArray(F)&&!F.length,I=Mr.bind(null,N,r,g),_e=(V,p,D,R=Y.maxLength,J=Y.minLength)=>{const K=V?p:D;g[N]={type:V?R:J,message:K,ref:l,...I(V?R:J,K)}};if(n?!Array.isArray(F)||!F.length:b&&(!C&&(H||U(F))||Z(F)&&!F||x&&!gr(c).isValid||v&&!_r(c).isValid)){const{value:V,message:p}=ve(b)?{value:!!b,message:b}:ue(b);if(V&&(g[N]={type:Y.required,message:p,ref:P,...I(Y.required,p)},!r))return j(p),g}if(!H&&(!U(z)||!U(E))){let V,p;const D=ue(E),R=ue(z);if(!U(F)&&!isNaN(F)){const J=l.valueAsNumber||F&&+F;U(D.value)||(V=J>D.value),U(R.value)||(p=J<R.value)}else{const J=l.valueAsDate||new Date(F),K=he=>new Date(new Date().toDateString()+" "+he),de=l.type=="time",te=l.type=="week";X(D.value)&&F&&(V=de?K(F)>K(D.value):te?F>D.value:J>new Date(D.value)),X(R.value)&&F&&(p=de?K(F)<K(R.value):te?F<R.value:J<new Date(R.value))}if((V||p)&&(_e(!!V,D.message,R.message,Y.max,Y.min),!r))return j(g[N].message),g}if((A||M)&&!H&&(X(F)||n&&Array.isArray(F))){const V=ue(A),p=ue(M),D=!U(V.value)&&F.length>+V.value,R=!U(p.value)&&F.length<+p.value;if((D||R)&&(_e(D,V.message,p.message),!r))return j(g[N].message),g}if(_&&!H&&X(F)){const{value:V,message:p}=ue(_);if(be(V)&&!F.match(V)&&(g[N]={type:Y.pattern,message:p,ref:l,...I(Y.pattern,p)},!r))return j(p),g}if(G){if(re(G)){const V=await G(F,i),p=nr(V,P);if(p&&(g[N]={...p,...I(Y.validate,p.message)},!r))return j(p.message),g}else if(O(G)){let V={};for(const p in G){if(!q(V)&&!r)break;const D=nr(await G[p](F,i),P,p);D&&(V={...D,...I(p,D.message)},j(D.message),r&&(g[N]=V))}if(!q(V)&&(g[N]={ref:P,...V},!r))return g}}return j(!0),g},ke=(e,i)=>[...e,...$(i)],Ee=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ce(e,i,r){return[...e.slice(0,i),...$(r),...e.slice(i)]}var Oe=(e,i,r)=>Array.isArray(e)?(k(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(i,1)[0]),e):[],Te=(e,i)=>[...$(i),...$(e)];function Nr(e,i){let r=0;const t=[...e];for(const n of i)t.splice(n-r,1),r++;return oe(t).length?t:[]}var Le=(e,i)=>k(i)?[]:Nr(e,$(i).sort((r,t)=>r-t)),Re=(e,i,r)=>{[e[i],e[r]]=[e[r],e[i]]};function Ir(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=k(e)?t++:e[i[t++]];return e}function Br(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:We(i)?[i]:dr(i),t=r.length===1?e:Ir(e,r),n=r.length-1,l=r[n];return t&&delete t[l],n!==0&&(O(t)&&q(t)||Array.isArray(t)&&Br(t))&&L(e,r.slice(0,-1)),e}var lr=(e,i,r)=>(e[i]=r,e);function Xr(e){const i=Tr(),{control:r=i.control,name:t,keyName:n="id",shouldUnregister:l}=e,[c,b]=m.useState(r._getFieldArray(t)),A=m.useRef(r._getFieldArray(t).map(ee)),M=m.useRef(c),z=m.useRef(t),E=m.useRef(!1);z.current=t,M.current=c,r._names.array.add(t),e.rules&&r.register(t,e.rules),fr({next:({values:g,name:v})=>{if(v===z.current||!v){const x=d(g,z.current);Array.isArray(x)&&(b(x),A.current=x.map(ee))}},subject:r._subjects.array});const _=m.useCallback(g=>{E.current=!0,r._updateFieldArray(t,g)},[r,t]),G=(g,v)=>{const x=$(B(g)),C=ke(r._getFieldArray(t),x);r._names.focus=Se(t,C.length-1,v),A.current=ke(A.current,x.map(ee)),_(C),b(C),r._updateFieldArray(t,C,ke,{argA:Ee(g)})},N=(g,v)=>{const x=$(B(g)),C=Te(r._getFieldArray(t),x);r._names.focus=Se(t,0,v),A.current=Te(A.current,x.map(ee)),_(C),b(C),r._updateFieldArray(t,C,Te,{argA:Ee(g)})},ce=g=>{const v=Le(r._getFieldArray(t),g);A.current=Le(A.current,g),_(v),b(v),r._updateFieldArray(t,v,Le,{argA:g})},ie=(g,v,x)=>{const C=$(B(v)),H=Ce(r._getFieldArray(t),g,C);r._names.focus=Se(t,g,x),A.current=Ce(A.current,g,C.map(ee)),_(H),b(H),r._updateFieldArray(t,H,Ce,{argA:g,argB:Ee(v)})},fe=(g,v)=>{const x=r._getFieldArray(t);Re(x,g,v),Re(A.current,g,v),_(x),b(x),r._updateFieldArray(t,x,Re,{argA:g,argB:v},!1)},F=(g,v)=>{const x=r._getFieldArray(t);Oe(x,g,v),Oe(A.current,g,v),_(x),b(x),r._updateFieldArray(t,x,Oe,{argA:g,argB:v},!1)},P=(g,v)=>{const x=B(v),C=lr(r._getFieldArray(t),g,x);A.current=[...C].map((H,I)=>!H||I===g?ee():A.current[I]),_(C),b([...C]),r._updateFieldArray(t,C,lr,{argA:g,argB:x},!0,!1)},j=g=>{const v=$(B(g));A.current=v.map(ee),_([...v]),b([...v]),r._updateFieldArray(t,[...v],x=>x,{},!0,!1)};return m.useEffect(()=>{if(r._state.action=!1,Pe(t,r._names)&&r._subjects.state.next({...r._formState}),E.current&&(!Be(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([t]).then(g=>{const v=d(g.errors,t),x=d(r._formState.errors,t);(x?!v&&x.type||v&&(x.type!==v.type||x.message!==v.message):v&&v.type)&&(v?S(r._formState.errors,t,v):L(r._formState.errors,t),r._subjects.state.next({errors:r._formState.errors}))});else{const g=d(r._fields,t);g&&g._f&&qe(g,r._formValues,r._options.criteriaMode===W.all,r._options.shouldUseNativeValidation,!0).then(v=>!q(v)&&r._subjects.state.next({errors:yr(r._formState.errors,v,t)}))}r._subjects.values.next({name:t,values:{...r._formValues}}),r._names.focus&&le(r._fields,(g,v)=>{if(r._names.focus&&v.startsWith(r._names.focus)&&g.focus)return g.focus(),1}),r._names.focus="",r._updateValid(),E.current=!1},[c,t,r]),m.useEffect(()=>(!d(r._formValues,t)&&r._updateFieldArray(t),()=>{(r._options.shouldUnregister||l)&&r.unregister(t)}),[t,r,n,l]),{swap:m.useCallback(fe,[_,t,r]),move:m.useCallback(F,[_,t,r]),prepend:m.useCallback(N,[_,t,r]),append:m.useCallback(G,[_,t,r]),remove:m.useCallback(ce,[_,t,r]),insert:m.useCallback(ie,[_,t,r]),update:m.useCallback(P,[_,t,r]),replace:m.useCallback(j,[_,t,r]),fields:m.useMemo(()=>c.map((g,v)=>({...g,[n]:A.current[v]||ee()})),[c,n])}}var Ue=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}},Fe=e=>U(e)||!cr(e);function se(e,i){if(Fe(e)||Fe(i))return e===i;if(ne(e)&&ne(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const n of r){const l=e[n];if(!t.includes(n))return!1;if(n!=="ref"){const c=i[n];if(ne(l)&&ne(c)||O(l)&&O(c)||Array.isArray(l)&&Array.isArray(c)?!se(l,c):l!==c)return!1}}return!0}var hr=e=>e.type==="select-multiple",Pr=e=>je(e)||ge(e),Me=e=>Ae(e)&&e.isConnected,vr=e=>{for(const i in e)if(re(e[i]))return!0;return!1};function xe(e,i={}){const r=Array.isArray(e);if(O(e)||r)for(const t in e)Array.isArray(e[t])||O(e[t])&&!vr(e[t])?(i[t]=Array.isArray(e[t])?[]:{},xe(e[t],i[t])):U(e[t])||(i[t]=!0);return i}function Ar(e,i,r){const t=Array.isArray(e);if(O(e)||t)for(const n in e)Array.isArray(e[n])||O(e[n])&&!vr(e[n])?k(i)||Fe(r[n])?r[n]=Array.isArray(e[n])?xe(e[n],[]):{...xe(e[n])}:Ar(e[n],U(i)?{}:i[n],r[n]):r[n]=!se(e[n],i[n]);return r}var Ne=(e,i)=>Ar(e,i,xe(i)),br=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>k(e)?e:i?e===""?NaN:e&&+e:r&&X(e)?new Date(e):t?t(e):e;function Ie(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return $e(i)?i.files:je(i)?_r(e.refs).value:hr(i)?[...i.selectedOptions].map(({value:r})=>r):ge(i)?gr(e.refs).value:br(k(i.value)?e.ref.value:i.value,e)}var qr=(e,i,r,t)=>{const n={};for(const l of e){const c=d(i,l);c&&S(n,l,c._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:t}},ye=e=>k(e)?e:be(e)?e.source:O(e)?be(e.value)?e.value.source:e.value:e,Hr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function or(e,i,r){const t=d(e,r);if(t||We(r))return{error:t,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),c=d(i,l),b=d(e,l);if(c&&!Array.isArray(c)&&r!==l)return{name:r};if(b&&b.type)return{name:l,error:b};n.pop()}return{name:r}}var Wr=(e,i,r,t,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?t.isOnBlur:n.isOnBlur)?!e:(r?t.isOnChange:n.isOnChange)?e:!0,$r=(e,i)=>!oe(d(e,i)).length&&L(e,i);const jr={mode:W.onSubmit,reValidateMode:W.onChange,shouldFocusError:!0};function Kr(e={},i){let r={...jr,...e},t={submitCount:0,isDirty:!1,isLoading:re(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:r.errors||{},disabled:!1},n={},l=O(r.defaultValues)||O(r.values)?B(r.defaultValues||r.values)||{}:{},c=r.shouldUnregister?{}:B(l),b={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},M,z=0;const E={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Ue(),array:Ue(),state:Ue()},G=e.resetOptions&&e.resetOptions.keepDirtyValues,N=Be(r.mode),ce=Be(r.reValidateMode),ie=r.criteriaMode===W.all,fe=s=>a=>{clearTimeout(z),z=setTimeout(s,a)},F=async s=>{if(E.isValid||s){const a=r.resolver?q((await I()).errors):await V(n,!0);a!==t.isValid&&_.state.next({isValid:a})}},P=s=>E.isValidating&&_.state.next({isValidating:s}),j=(s,a=[],u,y,f=!0,o=!0)=>{if(y&&u){if(b.action=!0,o&&Array.isArray(d(n,s))){const h=u(d(n,s),y.argA,y.argB);f&&S(n,s,h)}if(o&&Array.isArray(d(t.errors,s))){const h=u(d(t.errors,s),y.argA,y.argB);f&&S(t.errors,s,h),$r(t.errors,s)}if(E.touchedFields&&o&&Array.isArray(d(t.touchedFields,s))){const h=u(d(t.touchedFields,s),y.argA,y.argB);f&&S(t.touchedFields,s,h)}E.dirtyFields&&(t.dirtyFields=Ne(l,c)),_.state.next({name:s,isDirty:D(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else S(c,s,a)},g=(s,a)=>{S(t.errors,s,a),_.state.next({errors:t.errors})},v=s=>{t.errors=s,_.state.next({errors:t.errors,isValid:!1})},x=(s,a,u,y)=>{const f=d(n,s);if(f){const o=d(c,s,k(u)?d(l,s):u);k(o)||y&&y.defaultChecked||a?S(c,s,a?o:Ie(f._f)):K(s,o),b.mount&&F()}},C=(s,a,u,y,f)=>{let o=!1,h=!1;const w={name:s},T=!!(d(n,s)&&d(n,s)._f.disabled);if(!u||y){E.isDirty&&(h=t.isDirty,t.isDirty=w.isDirty=D(),o=h!==w.isDirty);const Q=T||se(d(l,s),a);h=!!(!T&&d(t.dirtyFields,s)),Q||T?L(t.dirtyFields,s):S(t.dirtyFields,s,!0),w.dirtyFields=t.dirtyFields,o=o||E.dirtyFields&&h!==!Q}if(u){const Q=d(t.touchedFields,s);Q||(S(t.touchedFields,s,u),w.touchedFields=t.touchedFields,o=o||E.touchedFields&&Q!==u)}return o&&f&&_.state.next(w),o?w:{}},H=(s,a,u,y)=>{const f=d(t.errors,s),o=E.isValid&&Z(a)&&t.isValid!==a;if(e.delayError&&u?(M=fe(()=>g(s,u)),M(e.delayError)):(clearTimeout(z),M=null,u?S(t.errors,s,u):L(t.errors,s)),(u?!se(f,u):f)||!q(y)||o){const h={...y,...o&&Z(a)?{isValid:a}:{},errors:t.errors,name:s};t={...t,...h},_.state.next(h)}P(!1)},I=async s=>r.resolver(c,r.context,qr(s||A.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),_e=async s=>{const{errors:a}=await I(s);if(s)for(const u of s){const y=d(a,u);y?S(t.errors,u,y):L(t.errors,u)}else t.errors=a;return a},V=async(s,a,u={valid:!0})=>{for(const y in s){const f=s[y];if(f){const{_f:o,...h}=f;if(o){const w=A.array.has(o.name),T=await qe(f,c,ie,r.shouldUseNativeValidation&&!a,w);if(T[o.name]&&(u.valid=!1,a))break;!a&&(d(T,o.name)?w?yr(t.errors,T,o.name):S(t.errors,o.name,T[o.name]):L(t.errors,o.name))}h&&await V(h,a,u)}}return u.valid},p=()=>{for(const s of A.unMount){const a=d(n,s);a&&(a._f.refs?a._f.refs.every(u=>!Me(u)):!Me(a._f.ref))&&me(s)}A.unMount=new Set},D=(s,a)=>(s&&a&&S(c,s,a),!se(ze(),l)),R=(s,a,u)=>Ur(s,A,{...b.mount?c:k(a)?l:X(s)?{[s]:a}:a},u,a),J=s=>oe(d(b.mount?c:l,s,e.shouldUnregister?d(l,s,[]):[])),K=(s,a,u={})=>{const y=d(n,s);let f=a;if(y){const o=y._f;o&&(!o.disabled&&S(c,s,br(a,o)),f=Ae(o.ref)&&U(a)?"":a,hr(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(w=>w===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):$e(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:s,values:{...c}})))}(u.shouldDirty||u.shouldTouch)&&C(s,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Ve(s)},de=(s,a,u)=>{for(const y in a){const f=a[y],o=`${s}.${y}`,h=d(n,o);(A.array.has(s)||!Fe(f)||h&&!h._f)&&!ne(f)?de(o,f,u):K(o,f,u)}},te=(s,a,u={})=>{const y=d(n,s),f=A.array.has(s),o=B(a);S(c,s,o),f?(_.array.next({name:s,values:{...c}}),(E.isDirty||E.dirtyFields)&&u.shouldDirty&&_.state.next({name:s,dirtyFields:Ne(l,c),isDirty:D(s,o)})):y&&!y._f&&!U(o)?de(s,o,u):K(s,o,u),Pe(s,A)&&_.state.next({...t}),_.values.next({name:s,values:{...c}}),!b.mount&&i()},he=async s=>{const a=s.target;let u=a.name,y=!0;const f=d(n,u),o=()=>a.type?Ie(f._f):Sr(s),h=w=>{y=Number.isNaN(w)||w===d(c,u,w)};if(f){let w,T;const Q=o(),ae=s.type===sr.BLUR||s.type===sr.FOCUS_OUT,pr=!Hr(f._f)&&!r.resolver&&!d(t.errors,u)&&!f._f.deps||Wr(ae,d(t.touchedFields,u),t.isSubmitted,ce,N),we=Pe(u,A,ae);S(c,u,Q),ae?(f._f.onBlur&&f._f.onBlur(s),M&&M(0)):f._f.onChange&&f._f.onChange(s);const De=C(u,Q,ae,!1),wr=!q(De)||we;if(!ae&&_.values.next({name:u,type:s.type,values:{...c}}),pr)return E.isValid&&F(),wr&&_.state.next({name:u,...we?{}:De});if(!ae&&we&&_.state.next({...t}),P(!0),r.resolver){const{errors:rr}=await I([u]);if(h(Q),y){const Dr=or(t.errors,n,u),tr=or(rr,n,Dr.name||u);w=tr.error,u=tr.name,T=q(rr)}}else w=(await qe(f,c,ie,r.shouldUseNativeValidation))[u],h(Q),y&&(w?T=!1:E.isValid&&(T=await V(n,!0)));y&&(f._f.deps&&Ve(f._f.deps),H(u,T,w,De))}},Ke=(s,a)=>{if(d(t.errors,a)&&s.focus)return s.focus(),1},Ve=async(s,a={})=>{let u,y;const f=$(s);if(P(!0),r.resolver){const o=await _e(k(s)?s:f);u=q(o),y=s?!f.some(h=>d(o,h)):u}else s?(y=(await Promise.all(f.map(async o=>{const h=d(n,o);return await V(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&F()):y=u=await V(n);return _.state.next({...!X(s)||E.isValid&&u!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:u}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!y&&le(n,Ke,s?f:A.mount),y},ze=s=>{const a={...l,...b.mount?c:{}};return k(s)?a:X(s)?d(a,s):s.map(u=>d(a,u))},Ge=(s,a)=>({invalid:!!d((a||t).errors,s),isDirty:!!d((a||t).dirtyFields,s),isTouched:!!d((a||t).touchedFields,s),error:d((a||t).errors,s)}),Fr=s=>{s&&$(s).forEach(a=>L(t.errors,a)),_.state.next({errors:s?t.errors:{}})},Je=(s,a,u)=>{const y=(d(n,s,{_f:{}})._f||{}).ref;S(t.errors,s,{...a,ref:y}),_.state.next({name:s,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&y&&y.focus&&y.focus()},xr=(s,a)=>re(s)?_.values.subscribe({next:u=>s(R(void 0,a),u)}):R(s,a,!0),me=(s,a={})=>{for(const u of s?$(s):A.mount)A.mount.delete(u),A.array.delete(u),a.keepValue||(L(n,u),L(c,u)),!a.keepError&&L(t.errors,u),!a.keepDirty&&L(t.dirtyFields,u),!a.keepTouched&&L(t.touchedFields,u),!r.shouldUnregister&&!a.keepDefaultValue&&L(l,u);_.values.next({values:{...c}}),_.state.next({...t,...a.keepDirty?{isDirty:D()}:{}}),!a.keepIsValid&&F()},Qe=({disabled:s,name:a,field:u,fields:y,value:f})=>{if(Z(s)){const o=s?void 0:k(f)?Ie(u?u._f:d(y,a)._f):f;S(c,a,o),C(a,o,!1,!1,!0)}},pe=(s,a={})=>{let u=d(n,s);const y=Z(a.disabled);return S(n,s,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:s}},name:s,mount:!0,...a}}),A.mount.add(s),u?Qe({field:u,disabled:a.disabled,name:s,value:a.value}):x(s,!0,a.value),{...y?{disabled:a.disabled}:{},...r.progressive?{required:!!a.required,min:ye(a.min),max:ye(a.max),minLength:ye(a.minLength),maxLength:ye(a.maxLength),pattern:ye(a.pattern)}:{},name:s,onChange:he,onBlur:he,ref:f=>{if(f){pe(s,a),u=d(n,s);const o=k(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Pr(o),w=u._f.refs||[];if(h?w.find(T=>T===o):o===u._f.ref)return;S(n,s,{_f:{...u._f,...h?{refs:[...w.filter(Me),o,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),x(s,!1,void 0,o)}else u=d(n,s,{}),u._f&&(u._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(Er(A.array,s)&&b.action)&&A.unMount.add(s)}}},Xe=()=>r.shouldFocusError&&le(n,Ke,A.mount),Vr=s=>{Z(s)&&(_.state.next({disabled:s}),le(n,(a,u)=>{let y=s;const f=d(n,u);f&&Z(f._f.disabled)&&(y||(y=f._f.disabled)),a.disabled=y},0,!1))},Ye=(s,a)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let y=B(c);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:o}=await I();t.errors=f,y=o}else await V(n);L(t.errors,"root"),q(t.errors)?(_.state.next({errors:{}}),await s(y,u)):(a&&await a({...t.errors},u),Xe(),setTimeout(Xe)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors),submitCount:t.submitCount+1,errors:t.errors})},mr=(s,a={})=>{d(n,s)&&(k(a.defaultValue)?te(s,d(l,s)):(te(s,a.defaultValue),S(l,s,a.defaultValue)),a.keepTouched||L(t.touchedFields,s),a.keepDirty||(L(t.dirtyFields,s),t.isDirty=a.defaultValue?D(s,d(l,s)):D()),a.keepError||(L(t.errors,s),E.isValid&&F()),_.state.next({...t}))},Ze=(s,a={})=>{const u=s?B(s):l,y=B(u),f=s&&!q(s)?y:l;if(a.keepDefaultValues||(l=u),!a.keepValues){if(a.keepDirtyValues||G)for(const o of A.mount)d(t.dirtyFields,o)?S(f,o,d(c,o)):te(o,d(f,o));else{if(He&&k(s))for(const o of A.mount){const h=d(n,o);if(h&&h._f){const w=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(Ae(w)){const T=w.closest("form");if(T){T.reset();break}}}}n={}}c=e.shouldUnregister?a.keepDefaultValues?B(l):{}:B(f),_.array.next({values:{...f}}),_.values.next({values:{...f}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&i(),b.mount=!E.isValid||!!a.keepIsValid,b.watch=!!e.shouldUnregister,_.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!se(s,l)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Ne(l,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitSuccessful:a.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},er=(s,a)=>Ze(re(s)?s(c):s,a);return{control:{register:pe,unregister:me,getFieldState:Ge,handleSubmit:Ye,setError:Je,_executeSchema:I,_getWatch:R,_getDirty:D,_updateValid:F,_removeUnmounted:p,_updateFieldArray:j,_updateDisabledField:Qe,_getFieldArray:J,_reset:Ze,_resetDefaultValues:()=>re(r.defaultValues)&&r.defaultValues().then(s=>{er(s,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:Vr,_subjects:_,_proxyFormState:E,_setErrors:v,get _fields(){return n},get _formValues(){return c},get _state(){return b},set _state(s){b=s},get _defaultValues(){return l},get _names(){return A},set _names(s){A=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:Ve,register:pe,handleSubmit:Ye,watch:xr,setValue:te,getValues:ze,reset:er,resetField:mr,clearErrors:Fr,unregister:me,setError:Je,setFocus:(s,a={})=>{const u=d(n,s),y=u&&u._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),a.shouldSelect&&f.select())}},getFieldState:Ge}}function Yr(e={}){const i=m.useRef(),r=m.useRef(),[t,n]=m.useState({isDirty:!1,isValidating:!1,isLoading:re(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:re(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Kr(e,()=>n(c=>({...c}))),formState:t});const l=i.current.control;return l._options=e,fr({subject:l._subjects.state,next:c=>{Rr(c,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const c=l._getDirty();c!==t.isDirty&&l._subjects.state.next({isDirty:c})}},[l,t.isDirty]),m.useEffect(()=>{e.values&&!se(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,n(c=>({...c}))):l._resetDefaultValues()},[e.values,l]),m.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),m.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=Lr(t,l),i.current}export{Xr as a,Yr as u};

function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequire3a11;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequire3a11=a),a.register("fCemW",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("fCemW").register(JSON.parse('{"f9fpV":"index.722f1d67.js","eyyUD":"icons.c14567a0.svg"}'));var o=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),s=new M(r||[]);return i(o,"_invoke",{value:x(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};function v(){}function m(){}function _(){}var y={};l(y,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(q([])));b&&b!==n&&r.call(b,o)&&(y=b);var k=_.prototype=v.prototype=Object.create(y);function $(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw a;return j()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=L(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?f:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}function L(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=d(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function q(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:m,configurable:!0}),m.displayName=l(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},$(E.prototype),l(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},$(k),l(k,c,"Generator"),l(k,o,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=q,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}const s="https://forkify-api.herokuapp.com/api/v2/recipes/",c="be2c0b85-d4c5-49b6-89b1-8aa28a355404",l=async(e,t)=>{try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),a=await i.json();if(!i.ok)throw new Error(`${a.message} (${i.status})`);return a}catch(e){throw e}var n},u={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},d=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},h=function(e=u.search.page){u.search.page=e;const t=(e-1)*u.search.resultsPerPage,n=e*u.search.resultsPerPage;return u.search.results.slice(t,n)},p=e=>{u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),localStorage.setItem("bookmark",JSON.stringify(u.bookmarks))};(()=>{const e=localStorage.getItem("bookmark");e&&(u.bookmarks=JSON.parse(e))})();var f,g,v,m;f=new URL(a("fCemW").resolve("eyyUD"),import.meta.url).toString();class _{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];console.log(n,e.isEqualNode(n)),e.isEqualNode(n)||""===e.firstChild.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${t(f)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const n=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${t(f)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(e=this._message){const n=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${t(f)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var a=n.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(v=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},m=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(v(this.denominator)){var e=m(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}v(this.numerator)&&(e=m(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},g=Fraction;var y=new class extends _{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addBookmarkHandler(e){this._parentElement.addEventListener("click",(t=>{t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${t(f)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${t(f)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update="${this._data.servings>=1?this._data.servings-1:this._data.servings}">\n              <svg>\n                <use href="${t(f)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update="${this._data.servings+1}">\n              <svg>\n                <use href="${t(f)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${t(f)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${t(f)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${t(f)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${t(f)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new g(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}addHandlerUpdateServing(e){this._parentElement.addEventListener("click",(t=>{t.preventDefault();const n=t.target.closest(".btn--update-servings");if(!n)return;const r=+n.dataset.update;e(r)}))}};var w=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var b=new class extends _{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${t(f)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var k=new class extends _{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map((e=>b.render(e,!1))).join("")}_generateMarkupPreview(e){const t=window.location.hash.slice(1);return`\n    <li class="preview">\n      <a class="preview__link ${e.id===t?"preview__link--active":" "}" href="#${e.id}">\n        <figure class="preview__fig">\n          <img src="${e.image}" alt="${e.title}" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${e.title}</h4>\n          <p class="preview__publisher">${e.publisher}</p>\n          <div class="preview__user-generated">\n            <svg>\n              <use href="src/img/icons.svg#icon-user"></use>\n            </svg>\n          </div>\n        </div>\n      </a>\n    </li>\n    `}};var $=new class extends _{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};var E=new class extends _{_parentElement=document.querySelector(".pagination");_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return console.log(e),1===this._data.page&&e>1?`\n             <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">\n                 <span>Page ${this._data.page+1}</span>\n                 <svg class="search__icon">\n                    <use href="${t(f)}#icon-arrow-right"></use>\n                 </svg>\n          </button> \n        `:this._data.page===e&&e>1?`\n            <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">\n                <svg class="search__icon">\n                    <use href="${t(f)}#icon-arrow-left"></use>\n                </svg>\n                <span>Page ${this._data.page-1}</span>\n            </button>\n        `:this._data.page<e?`\n        <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n                <use href="${t(f)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${this._data.page-1}</span>\n        </button>\n        <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${this._data.page+1}</span>\n            <svg class="search__icon">\n                <use href="${t(f)}#icon-arrow-right"></use>\n            </svg>\n        </button> \n        `:""}addHandlerBtn(e){this._parentElement.addEventListener("click",(t=>{t.preventDefault();const n=t.target.closest(".btn--inline");n&&e(+n.dataset.goto)}))}};var x=new class extends _{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="find another recipe and bookmark it";_message="";_generateMarkup(){return this._data.map((e=>b.render(e,!1))).join("")}_generateMarkupPreview(e){const t=window.location.hash.slice(1);return`\n    <li class="preview">\n      <a class="preview__link ${e.id===t?"preview__link--active":" "}" href="#${e.id}">\n        <figure class="preview__fig">\n          <img src="${e.image}" alt="${e.title}" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${e.title}</h4>\n          <p class="preview__publisher">${e.publisher}</p>\n          <div class="preview__user-generated">\n            <svg>\n              <use href="src/img/icons.svg#icon-user"></use>\n            </svg>\n          </div>\n        </div>\n      </a>\n    </li>\n    `}};const L=async function(){try{const e=window.location.hash.slice(1);if(k.update(h()),!e)return;y.renderSpinner(),await async function(e){try{const t=await l(`${s}${e}?key=${c}`);u.recipe=d(t),u.bookmarks.some((t=>t.id===e))?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1,console.log(u.bookmarks)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),y.render(u.recipe)}catch(e){y.renderError(),console.error(e)}},S=async function(){try{k.renderSpinner();const e=w.getQuery();if(!e)return;await async function(e){try{u.search.query=e;const t=await l(`${s}?search=${e}&key=${c}`);console.log(t),u.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))),u.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),k.render(h(6)),E.render(u.search)}catch(e){console.log(e)}},F=function(e){k.render(h(e)),E.render(u.search)},M=async function(e){try{$.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient fromat! Please use the correct format :)");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await l(`${s}?key=${c}`,n);u.recipe=d(r),console.log(r),p(u.recipe)}catch(e){throw e}}(e),console.log(e),$.renderSpinner(),y.render(u.recipe),$.renderMessage(),x.render(u.bookmarks),window.history.pushState(null,"",`#${u.recipe.id}`),setTimeout((()=>{$.toggleWindow()}),2500)}catch(e){console.error("💥",e),$.renderError(e.message)}},q=e=>{var t;t=e,console.log(u.recipe),u.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/u.recipe.servings})),u.recipe.servings=t,y.update(u.recipe)},j=()=>{p(u.recipe),y.render(u.recipe),x.render(u.bookmarks)};y.addHandlerRender(L),w.addHandlerSearch(S),$.addHandlerUpload(M),y.addBookmarkHandler(j),E.addHandlerBtn(F),y.addHandlerUpdateServing(q);
//# sourceMappingURL=index.722f1d67.js.map

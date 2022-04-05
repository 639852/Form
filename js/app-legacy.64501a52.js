(function(){"use strict";var t={237:function(t,e,a){var r=a(144),i=a(620),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app"},[a("h1",{staticClass:"title-h1"},[t._v("Форма создания клиента")]),a("form",{staticClass:"form"},[a("data-wrapper",{attrs:{counter:t.counter},on:{changeValid:t.changeValid}})],1),a("form-buttons",{attrs:{counter:t.counter,invalid:t.invalid},on:{changeCounter:t.changeCounter}})],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-wrapper"},[a("personal-data",{on:{changeValid:t.changeValid}}),a("address-data",{on:{changeValid:t.changeValid}}),a("passport-data",{on:{changeValid:t.changeValid}})],1)},o=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"data"},[a("legend",{staticClass:"title"},[t._v("Адресные данные:")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.index.$model,expression:"$v.index.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Индекс"},domProps:{value:t.$v.index.$model},on:{change:function(e){return t.$set(t.$v.index,"$model",e.target.value)}}}),t.$v.index.$error?a("span",{staticClass:"invalid"},[t._v(" Поле должно содержать только цифры! ")]):t._e(),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Страна"}}),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Область"}}),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.city.$model,expression:"$v.city.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Город*"},domProps:{value:t.$v.city.$model},on:{change:function(e){return t.$set(t.$v.city,"$model",e.target.value)}}}),t.$v.city.$error?a("span",{staticClass:"invalid"},[t.$v.city.validFormat?[t._v(" Поле обязательно для заполнения! ")]:[t._v(" Поле должно содержать только буквы! ")]],2):t._e(),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Улица"}}),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Дом"}})])},u=[],c=a(379),v={data(){return{index:"",city:""}},validations:{index:{validFormat:t=>/^[0-9]*$/.test(t)},city:{required:c.C1,validFormat:t=>/^[а-яёa-z]*$/i.test(t)}},updated(){this.$emit("changeValid",this.$v.$invalid,"address")}},p=v,m=a(1),$=(0,m.Z)(p,d,u,!1,null,null,null),h=$.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"data"},[a("legend",{staticClass:"title"},[t._v("Паспортные данные:")]),a("select",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.documentType.$model,expression:"$v.documentType.$model",modifiers:{lazy:!0}}],staticClass:"select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.documentType,"$model",e.target.multiple?a:a[0])}}},[t._m(0)]),t.$v.documentType.$error?a("span",{staticClass:"invalid"},[t._v(" Поле обязательно для заполнения! ")]):t._e(),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Серия"}}),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.number.$model,expression:"$v.number.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Номер*"},domProps:{value:t.$v.number.$model},on:{change:function(e){return t.$set(t.$v.number,"$model",e.target.value)}}}),t.$v.number.$error?a("span",{staticClass:"invalid"},[t._v(" Номер паспорта должен быть в формате 567890! ")]):t._e(),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Кем выдан"}}),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.date.$model,expression:"$v.date.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Дата выдачи*"},domProps:{value:t.$v.date.$model},on:{change:function(e){return t.$set(t.$v.date,"$model",e.target.value)}}}),t.$v.date.$error?a("span",{staticClass:"invalid"},[t._v(" Дата должна быть в формате ДД.ММ.ГГГГ! ")]):t._e()])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("optgroup",{attrs:{label:"Тип документа*"}},[a("option",{attrs:{value:""}},[t._v("Выберите тип документа:")]),a("option",{attrs:{value:"passport"}},[t._v("Паспорт")]),a("option",{attrs:{value:"certificate"}},[t._v("Свидетельство о рождении")]),a("option",{attrs:{value:"license"}},[t._v("Вод. удостоверение")])])}],g={data(){return{documentType:"",number:"",date:""}},validations:{documentType:{required:c.C1},number:{required:c.C1,validFormat:t=>/^\d{6}$/.test(t)},date:{required:c.C1,validDate:t=>/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/.test(t)}},updated(){this.$emit("changeValid",this.$v.$invalid,"passport")}},_=g,C=(0,m.Z)(_,f,y,!1,null,null,null),x=C.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",{staticClass:"data"},[a("legend",{staticClass:"title"},[t._v("Персональные данные:")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.lastName.$model,expression:"$v.lastName.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.$v.lastName.$model},on:{change:function(e){return t.$set(t.$v.lastName,"$model",e.target.value)}}}),t.$v.lastName.$error?a("span",{staticClass:"invalid"},[t.$v.lastName.validFormat?[t._v(" Поле обязательно для заполнения! ")]:[t._v(" Поле должно содержать только кириллицу! ")]],2):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.firstName.$model,expression:"$v.firstName.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.$v.firstName.$model},on:{change:function(e){return t.$set(t.$v.firstName,"$model",e.target.value)}}}),t.$v.firstName.$error?a("span",{staticClass:"invalid"},[t.$v.firstName.validFormat?[t._v(" Поле обязательно для заполнения! ")]:[t._v(" Поле должно содержать только кириллицу! ")]],2):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.patronymic.$model,expression:"$v.patronymic.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Отчество"},domProps:{value:t.$v.patronymic.$model},on:{change:function(e){return t.$set(t.$v.patronymic,"$model",e.target.value)}}}),t.$v.patronymic.$error?a("span",{staticClass:"invalid"},[t._v(" Поле должно содержать только кириллицу! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.birthday.$model,expression:"$v.birthday.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"text",placeholder:"Дата рождения*"},domProps:{value:t.$v.birthday.$model},on:{change:function(e){return t.$set(t.$v.birthday,"$model",e.target.value)}}}),t.$v.birthday.$error?a("span",{staticClass:"invalid"},[t._v(" Дата должна быть в формате ДД.ММ.ГГГГ! ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.tel.$model,expression:"$v.tel.$model",modifiers:{lazy:!0}}],staticClass:"input",attrs:{type:"tel",placeholder:"Номер телефона*"},domProps:{value:t.$v.tel.$model},on:{change:function(e){return t.$set(t.$v.tel,"$model",e.target.value)}}}),t.$v.tel.$error?a("span",{staticClass:"invalid"},[t.$v.tel.maxLength?t.$v.tel.validFormat?t._e():[t._v(" Неверный формат номера! ")]:[t._v(" Длина номера не должна превышать "+t._s(t.$v.tel.$params.maxLength.max)+" символов! ")]],2):t._e(),a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Пол"}}),a("select",{directives:[{name:"model",rawName:"v-model.lazy",value:t.$v.customerGroup.$model,expression:"$v.customerGroup.$model",modifiers:{lazy:!0}}],staticClass:"select",attrs:{multiple:"",size:"5"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$v.customerGroup,"$model",e.target.multiple?a:a[0])}}},[t._m(0)]),t.$v.customerGroup.$error?a("span",{staticClass:"invalid"},[t._v(" Поле обязательно для заполнения! ")]):t._e(),t._m(1),t._m(2)])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("optgroup",{attrs:{label:"Группа клиентов*"}},[a("option",{attrs:{value:"VIP"}},[t._v("VIP")]),a("option",{attrs:{value:"Проблемные"}},[t._v("Проблемные")]),a("option",{attrs:{value:"ОМС"}},[t._v("ОМС")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"select"},[a("optgroup",{attrs:{label:"Лечащий врач"}},[a("option",{attrs:{value:""}},[t._v("Выберите врача:")]),a("option",{attrs:{value:"Иванов"}},[t._v("Иванов")]),a("option",{attrs:{value:"Захаров"}},[t._v("Захаров")]),a("option",{attrs:{value:"Чернышева"}},[t._v("Чернышева")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"checkbox"},[a("input",{attrs:{type:"checkbox"}}),a("span",[t._v("Не отправлять СМС.")])])}],w={data(){return{firstName:"",lastName:"",patronymic:"",birthday:"",tel:"",customerGroup:[]}},validations:{firstName:{required:c.C1,validFormat:t=>/^[а-яё]*$/i.test(t)},lastName:{required:c.C1,validFormat:t=>/^[а-яё]*$/i.test(t)},patronymic:{validFormat:t=>/^[а-яё]*$/i.test(t)},birthday:{required:c.C1,validDate:t=>/(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/.test(t)},tel:{required:c.C1,maxLength:(0,c.BS)(11),validFormat:t=>/^((\+7|7)+([0-9]){10})$/.test(t)},customerGroup:{required:c.C1}},updated(){this.$emit("changeValid",this.$v.$invalid,"personal")}},z=w,F=(0,m.Z)(z,b,N,!1,null,null,null),V=F.exports,P={components:{PersonalData:V,AddressData:h,PassportData:x},data(){return{sliderWidth:0,sliderMargin:0,personal:!0,address:!0,passport:!0}},props:{counter:{type:Number,required:!0}},computed:{allInvalid(){return this.personal||this.address||this.passport}},mounted(){this.initSlider(),window.addEventListener("resize",this.initSlider)},methods:{initSlider(){const t=document.querySelector(".form"),e=getComputedStyle(t).paddingBottom,a=getComputedStyle(this.$el).gap;this.sliderWidth=t.offsetWidth-2*parseFloat(e),this.$el.childrenMargin=parseFloat(a)*(this.$el.children.length-1),Array.from(this.$el.children).forEach((t=>{t.style.width=this.sliderWidth+"px"})),this.$el.style.width=this.sliderWidth*this.$el.children.length+this.$el.childrenMargin+"px",this.moveSlider()},moveSlider(){const t=this.$el.childrenMargin/(this.$el.children.length-1)*this.counter;this.$el.style.height=this.$el.children[this.counter].offsetHeight+"px",0===this.counter?this.$el.style.transform="translateX(0px)":this.$el.style.transform=`translateX(-${this.counter*this.sliderWidth+t}px)`},changeValid(t,e){this[e]=t,this.$emit("changeValid",this.allInvalid),this.$el.style.height=this.$el.children[this.counter].offsetHeight+"px"}},watch:{counter(){this.moveSlider()}}},q=P,E=(0,m.Z)(q,n,o,!1,null,null,null),k=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"buttons",staticClass:"buttons"},[t.counter>0?a("button",{staticClass:"button prev",on:{click:t.prevHandler}},[t._v(" Предыдущий шаг ")]):t._e(),t.counter<2?a("button",{staticClass:"button next",on:{click:t.nextHandler}},[t._v(" Следующий шаг ")]):t._e(),2!==t.counter||t.invalid?t._e():a("button",{staticClass:"button",on:{click:t.submitForm}},[t._v(" Завершить ")])])},S=[],Z={props:{counter:{type:Number,required:!0},invalid:{type:Boolean,required:!0}},methods:{prevHandler(){this.$emit("changeCounter",this.counter-1)},nextHandler(){this.$emit("changeCounter",this.counter+1)},submitForm(){console.log(this.$refs.buttons.previousSibling),alert("Клиент успешно создан")}}},T=Z,W=(0,m.Z)(T,O,S,!1,null,"09a0447e",null),j=W.exports,D={name:"App",components:{DataWrapper:k,FormButtons:j},data(){return{counter:0,invalid:!0}},methods:{changeCounter(t){this.counter=t},changeValid(t){this.invalid=t}}},G=D,H=(0,m.Z)(G,l,s,!1,null,null,null),A=H.exports;r.Z.config.productionTip=!1,r.Z.config.devtools=!0,r.Z.use(i.kf),new r.Z({render:t=>t(A)}).$mount("#app")}},e={};function a(r){var i=e[r];if(void 0!==i)return i.exports;var l=e[r]={exports:{}};return t[r](l,l.exports,a),l.exports}a.m=t,function(){var t=[];a.O=function(e,r,i,l){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],l=t[u][2];for(var n=!0,o=0;o<r.length;o++)(!1&l||s>=l)&&Object.keys(a.O).every((function(t){return a.O[t](r[o])}))?r.splice(o--,1):(n=!1,l<s&&(s=l));if(n){t.splice(u--,1);var d=i();void 0!==d&&(e=d)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[r,i,l]}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,l,s=r[0],n=r[1],o=r[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(o)var u=o(a)}for(e&&e(r);d<s.length;d++)l=s[d],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(u)},r=self["webpackChunkform"]=self["webpackChunkform"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(237)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.64501a52.js.map
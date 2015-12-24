/*!
 * vue-region-picker [name] 
 * (c) 2015 Qingwei Li
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.component=t():(e.RegionPicker=e.RegionPicker||{},e.RegionPicker.component=t())}(this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var o=i[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="/dist/",t(0)}([function(e,t,i){e.exports=i(1),("function"==typeof e.exports?e.exports.options:e.exports).template=i(3)},function(e,t){"use strict";e.exports={version:"1.0.0",name:"RegionPicker",data:function(){return{provinceSelected:[],citySelected:[],districtSelected:[]}},props:{province:{required:!0,twoWay:!0},city:{required:!0,twoWay:!0},district:{required:!0,twoWay:!0},init:{type:Object,"default":function(){return{province:"",city:"",district:""}},validator:function(e){for(var t in e)if("string"!=typeof e[t])return!1;return!0}},auto:{type:Boolean,"default":!1},placeholder:{type:Object,"default":function(){return{province:"请选择",city:"请选择",district:"请选择"}}},required:{type:Boolean,"default":!1},data:{type:Object,required:!0}},methods:{_filter:function(e){var t=[];for(var i in this.data)this.data.hasOwnProperty(i)&&this.data[i][1]===e&&t.push([i,this.data[i][0]]);return t},_selected:function(e,t){var i=this._filter(e),r=0;if(this.init[t]&&"string"==typeof this.init[t])for(var o in i)if(i[o][1].indexOf(this.init[t])>-1){r=o;break}return this.$set(t+"Selected",i[r]||[]),i}},computed:{provinces:function(){return this.init.province&&"string"==typeof this.init.province?this._selected("086","province"):this._filter("086")},cities:function(){return this._selected(this.provinceSelected[0],"city")},districts:function(){return this._selected(this.citySelected[0],"district")},province:function(){return this.provinceSelected[1]},city:function(){return this.citySelected[1]},district:function(){return this.districtSelected[1]}}}},,function(e,t){e.exports='<div class=region-picker><label class=province><slot name=province></slot><select class=province-select v-model=provinceSelected :required=required><option value="" v-text=placeholder.province><option v-for="item in provinces" :value=item v-text=item[1]></select></label><label class=city v-show="!auto || cities.length"><slot name=city></slot><select class=city-select v-model=citySelected :required="required && cities.length > 0"><option value="" v-text=placeholder.city><option v-for="item in cities" :value=item v-text=item[1]></select></label><label class=district v-show="!auto || districts.length"><slot name=district></slot><select class=district-select v-model=districtSelected :required="required && districts.length > 0"><option value="" v-text=placeholder.district><option v-for="item in districts" :value=item v-text=item[1]></select></label></div>'}])});
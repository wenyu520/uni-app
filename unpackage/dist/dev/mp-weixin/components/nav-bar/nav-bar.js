(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/nav-bar/nav-bar"],{

/***/ 38:
/*!*************************************************!*\
  !*** E:/uni-app/components/nav-bar/nav-bar.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=template&id=32f97491&scoped=true& */ 39);
/* harmony import */ var _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=style&index=0&id=32f97491&lang=scss&scoped=true& */ 43);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32f97491",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/uni-app/components/nav-bar/nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/*!********************************************************************************************!*\
  !*** E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=template&id=32f97491&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nav-bar.vue?vue&type=template&id=32f97491&scoped=true& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_template_id_32f97491_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 40:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=template&id=32f97491&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 41:
/*!**************************************************************************!*\
  !*** E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nav-bar.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 42:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 主页页面的页面路径
// 关联功能：打开的页面只有一个的时候右上角自动显示返回首页按钮，下面这个数组是排除显示返回首页的页面。
// 主页使用场景：小程序分享出去的页面，用户点击开是分享页面，很多情况下是没有返回首页按钮的
var mainPagePath = ["pages/home/home", "/pages/partTime/partTime", "/pages/myPartTime/myPartTime", "/pages/my/my"];
//返回首页的地址
var homePath = "/pages/home/home";
//白色表达值
var whiteList = ["#FFF", "#FFFFFF", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"];var _default2 =
{
  props: {
    //是否显示返回按钮
    back: {
      type: Boolean,
      default: function _default() {
        return true;
      } },

    //导航背景色，bg为false的时候导航通透
    bgColor: {
      type: String,
      default: function _default() {
        return "#FFF";
      } },

    //导航字体颜色，字体颜色为白色的时候会把手机状态栏设置为白色，否则为黑色
    fontColor: {
      type: String,
      default: function _default() {
        return "#000";
      } },

    //标题是否居中
    titleCenter: {
      type: Boolean,
      default: function _default() {
        return true;
      } },

    //标题
    title: {
      type: String,
      default: function _default() {
        return "";
      } },

    //类型 fixed为固定 默认 
    // ordinary 普通的 不固定
    // transparent 透明不固定的
    //transparentFixed  透明固定的
    type: {
      type: String,
      default: function _default() {
        return "fixed";
      } },

    //透明固定的时候字体颜色
    transparentFixedFontColor: {
      type: String,
      default: function _default() {
        return "#000";
      } } },


  data: function data() {
    return {
      //状态栏高度
      statusBarHeight: 0,
      //当前页面是否是第一个页面
      firstPage: false,
      //透明度值
      transparentValue: 1,
      //标题
      navTitle: "",
      //字体色
      navFontColor: "#000",
      //背景色
      navBgColor: "#FFF",
      //透明底字体色
      navTransparentFixedFontColor: "#000" };

  },
  computed: {
    //导航固定
    navFixed: function navFixed() {
      if (this.type == "transparentFixed" || this.type == "fixed") {
        return true;
      } else {
        return false;
      }
    },
    //导航底部线是否显示 || 改变状态栏颜色
    navLine: function navLine() {
      if (this.type !== "transparent" && whiteList.includes(this.navBgColor)) {
        return true;
      } else {
        return false;
      }
    } },

  watch: {
    title: function title(val) {
      this.navTitle = val;
    },
    fontColor: function fontColor(val) {
      this.navFontColor = val;
    },
    bgColor: function bgColor(val) {
      this.navBgColor = val;
    },
    transparentFixedFontColor: function transparentFixedFontColor(val) {
      this.navTransparentFixedFontColor = val;
    } },

  //第一次加载
  created: function created(e) {
    this.navTitle = this.title;
    this.navFontColor = this.fontColor;
    this.navBgColor = this.bgColor;
    this.navTransparentFixedFontColor = this.transparentFixedFontColor;
    var _this = this;
    if (this.type == "transparentFixed") {
      this.transparentValue = 0;
    }
    //判断导航栏颜色
    if (whiteList.includes(this.navFontColor)) {
      // 改变手机状态栏颜色
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: this.navBgColor });

    } else {
      // 改变手机状态栏颜色
      uni.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: this.navBgColor });

    }
    //获取手机状态栏高度
    this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
    //获取微信的所有页面
    var currentPages = getCurrentPages();
    var pageLen = currentPages.length;
    //判断是否是第一个页面，如果是有设置back为true的页面，将不显示返回箭头，而现实返回首页按钮
    if (pageLen == 1 && mainPagePath.includes(currentPages[0].route)) {
      this.firstPage = true;
    }
    //监听页面滚动，type为transparentFixed的时候页面向下滚动的时候导航逐渐变白
    if (this.type == "transparentFixed") {

      currentPages[pageLen - 1].onPageScroll = function (e) {
        _this.$emit("scroll", e);
        if (e.scrollTop > 180) {
          _this.transparentValue = 1;
        } else {
          _this.transparentValue = e.scrollTop / 180;
        }
      };












    }
  },
  //方法
  methods: {
    //返回上一页面
    onBackPage: function onBackPage() {
      uni.navigateBack();
    },
    //返回首页
    onBackHome: function onBackHome() {
      uni.switchTab({
        url: homePath });

    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!***********************************************************************************************************!*\
  !*** E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=style&index=0&id=32f97491&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nav-bar.vue?vue&type=style&index=0&id=32f97491&lang=scss&scoped=true& */ 44);
/* harmony import */ var _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_yu_h_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nav_bar_vue_vue_type_style_index_0_id_32f97491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 44:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/uni-app/components/nav-bar/nav-bar.vue?vue&type=style&index=0&id=32f97491&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/nav-bar/nav-bar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/nav-bar/nav-bar-create-component',
    {
        'components/nav-bar/nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(38))
        })
    },
    [['components/nav-bar/nav-bar-create-component']]
]);                

webpackJsonp([15],{sxPy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("hr"),t._v(" "),s("h2",{attrs:{id:"name%3A-2018-12-18-translate-13layout%3A-posttitle%3A-'%5B%E8%AF%91%5Ddevtools-tips-day13-%3Aobjects-%26-functions'date%3A-2018-12-18categories%3A-sitetags%3A-%5Bchrome%2C-tools%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpdehofj22kw3vc4qp.jpg'info%3A-'%E6%9C%AC%E6%96%87%E6%98%AF%E4%BD%9C%E8%80%85-%5Btomek-su%C5%82kowski%5D-%E5%8F%91%E5%B8%83%E5%9C%A8-%5Bmedium%5D%E4%B8%8A%E7%9A%84%E4%B8%80%E4%B8%AA%E7%B3%BB%E5%88%97%E7%9A%84%E7%AC%AC13%E7%AF%87%EF%BC%8C%E8%BF%99%E4%B8%AA%E7%B3%BB%E5%88%97%E4%B8%80%E5%85%B1%E6%9C%8924%E7%AF%87'"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2018-12-18-translate-13layout%3A-posttitle%3A-'%5B%E8%AF%91%5Ddevtools-tips-day13-%3Aobjects-%26-functions'date%3A-2018-12-18categories%3A-sitetags%3A-%5Bchrome%2C-tools%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpdehofj22kw3vc4qp.jpg'info%3A-'%E6%9C%AC%E6%96%87%E6%98%AF%E4%BD%9C%E8%80%85-%5Btomek-su%C5%82kowski%5D-%E5%8F%91%E5%B8%83%E5%9C%A8-%5Bmedium%5D%E4%B8%8A%E7%9A%84%E4%B8%80%E4%B8%AA%E7%B3%BB%E5%88%97%E7%9A%84%E7%AC%AC13%E7%AF%87%EF%BC%8C%E8%BF%99%E4%B8%AA%E7%B3%BB%E5%88%97%E4%B8%80%E5%85%B1%E6%9C%8924%E7%AF%87'","aria-hidden":"true"}},[t._v("#")]),t._v(" name: 2018-12-18-Translate-13\nlayout: post\ntitle: '[译]Devtools tips day13 :objects & functions'\ndate: 2018-12-18\ncategories: Site\ntags: [Chrome, Tools]\ncoverimg: 'http://ww1.sinaimg.cn/large/88b26e1cgy1g0rzpdehofj22kw3vc4qp.jpg'\ninfo: '本文是作者 [Tomek Sułkowski] 发布在 [medium]上的一个系列的第13篇，这个系列一共有24篇'")]),t._v(" "),s("blockquote",[s("p",[t._v("本文"),s("a",{attrs:{href:"https://juejin.im/post/5c18b2d66fb9a049d235fc82"}},[t._v("掘金同步连接")])])]),t._v(" "),s("h3",{attrs:{id:"%E7%89%B9%E5%88%AB%E5%A3%B0%E6%98%8E"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E7%89%B9%E5%88%AB%E5%A3%B0%E6%98%8E","aria-hidden":"true"}},[t._v("#")]),t._v(" 特别声明")]),t._v(" "),s("p",[t._v("本文是作者 "),s("a",{attrs:{href:"https://twitter.com/sulco"}},[t._v("Tomek Sułkowski")]),t._v(" 发布在 "),s("a",{attrs:{href:"https://medium.com/@tomsu"}},[t._v("medium")]),t._v(" 上的一个系列。"),s("br"),t._v(" "),s("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2"}},[t._v("授权的记录在这里")]),s("br")]),t._v(" "),s("h3",{attrs:{id:"%E6%AD%A3%E6%96%87"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E6%AD%A3%E6%96%87","aria-hidden":"true"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),s("p",[t._v("在马上就要迎来假期的这 24 天里，我将会发布一系列短篇的文章，关于如何更加有意思的使用开发工具，"),s("a",{attrs:{href:"https://juejin.im/post/5c1365a9e51d452f8e6034cb"}},[t._v("昨天")]),t._v('我们见过了条件断点和" '),s("em",[t._v("ninja logs")]),t._v(' ",今天我们继续来看...')]),t._v(" "),s("h3",{attrs:{id:"35.-queryobjects-function-%E5%AF%B9%E8%B1%A1%E6%9F%A5%E8%AF%A2%E6%96%B9%E6%B3%95"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#35.-queryobjects-function-%E5%AF%B9%E8%B1%A1%E6%9F%A5%E8%AF%A2%E6%96%B9%E6%B3%95","aria-hidden":"true"}},[t._v("#")]),t._v(" 35. "),s("code",[t._v("queryObjects function")]),t._v(" 对象查询方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1200/1*q5UZ0iBkZTsjtwFXgzGSkw.png",alt:""}})]),t._v(" "),s("p",[t._v("假如我们有这样一段代码，我们在里面定义了一些对象。")]),t._v(" "),s("p",[t._v("在一个特定的时刻，特定的执行上下文存在哪些对象呢？")]),t._v(" "),s("p",[s("code",[t._v("Chrome DevTools")]),t._v(" 有一个 "),s("code",[t._v("queryObjects")]),t._v(" 函数，向我们展示了这一点。")]),t._v(" "),s("p",[t._v("请注意，列表中创建的最后一个对象是如何不可用的，因为在代码执行后，对于它的引用并没有留存下来，现在我们只有 "),s("code",[t._v("3")]),t._v(" 个 "),s("code",[t._v("person")]),t._v(" 对象：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*Af8-f_JKqiIwZYkXTgZe9A.gif",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"36.-monitor-functions-%E9%95%9C%E5%83%8F%E5%87%BD%E6%95%B0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#36.-monitor-functions-%E9%95%9C%E5%83%8F%E5%87%BD%E6%95%B0","aria-hidden":"true"}},[t._v("#")]),t._v(" 36. "),s("code",[t._v("monitor functions")]),t._v(" 镜像函数")]),t._v(" "),s("p",[s("code",[t._v("monitor")]),t._v(" 是 "),s("code",[t._v("DevTools")]),t._v(" 的一个方法, 它能够让你 "),s("code",[t._v("spy(潜入)")]),t._v(" 到任何 "),s("em",[t._v("function calls(方法的调用)")]),t._v(" 中：每当一个 "),s("code",[t._v("spied 被潜入")]),t._v(" 的方法运行的时候，"),s("code",[t._v("console 控制台")]),t._v(" 会把它的实例打印出来，包含函数名以及调用它的参数。")]),t._v(" "),s("p",[t._v("让我们把前面例子里面的 "),s("code",[t._v("Person")]),t._v(" 类拿过来并且扩展它给它加两个方法：")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-class"},[s("span",{staticClass:"hljs-keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"hljs-title"},[t._v("Person")]),t._v(" ")]),t._v("{\n  "),s("span",{staticClass:"hljs-keyword"},[t._v("constructor")]),t._v("(name, role) {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".name = name;\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".role = role;\n  }\n\n  greet() {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".getMessage("),s("span",{staticClass:"hljs-string"},[t._v("'greeting'")]),t._v(");\n  }\n  getMessage(type) {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (type === "),s("span",{staticClass:"hljs-string"},[t._v("'greeting'")]),t._v(") {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("`Hello, I'm "),s("span",{staticClass:"hljs-subst"},[t._v("${"),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".name}")]),t._v("!`")]),t._v(";\n    }\n  }\n}\n")])]),t._v(" "),s("p",[t._v("如你所见，"),s("code",[t._v("greet")]),t._v(" 方法通过一个特殊的参数来执行 "),s("code",[t._v("getMessage")]),t._v(" 方法，让我们看看对 "),s("code",[t._v("getMessage")]),t._v(" 方法的追踪会产生什么结果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*1lhOKaqL5yOZbzvfOCJlsg.gif",alt:""}})]),t._v(" "),s("p",[t._v("这会让我们少写很多 "),s("code",[t._v("console.logs")]),t._v(" !")]),t._v(" "),s("p",[t._v("今天的分享就到这里~")]),t._v(" "),s("p",[t._v("我们注意到，")]),t._v(" "),s("p",[t._v("惯例： 如果你从这里学到了一些新东西")]),t._v(" "),s("p",[t._v("→ 你可以点个赞再走嘛~"),s("br"),t._v("\n→ 关注我："),s("a",{attrs:{href:"https://twitter.com/sulco"}},[t._v("Twitter：Tomek Sułkowski")])]),t._v(" "),s("h3",{attrs:{id:"%E5%85%B6%E4%BB%96%E7%B3%BB%E5%88%97"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%B6%E4%BB%96%E7%B3%BB%E5%88%97","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他系列")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第一天：console 中的'$'")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0a0d5ff265da61117a1c75"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第二天：copying & saving")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0a8ce6f265da6141716329"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第三天：console methods")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0d2d85f265da612061a62f"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第四天：the Elements panel（元素面板）")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0edc31f265da611c26d08a"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第五天：console 的 log 中,让人疑惑的案例")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0ee12551882545e24ef291"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第六天：command 菜单")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c0fdfc46fb9a049b13e0d82"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第七天：异步 consle 的趣味小窍门")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c10d9d1f265da6118019028"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第八天：Color picker（颜色选择器）")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c11809ef265da61141c76f1"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第九天：给 console 计时")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1365a9e51d452f8e6034cb"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十天：custom formatters（自定义格式转换器）")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c137ac3f265da617974b675"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十一天：style editors continued（样式编辑器后续）")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c16d943518825566d2365f3"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十二天：忍者日志打印！(the ninja logs)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c18b2d66fb9a049d235fc82"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十三天：对象 & 方法")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c18b375f265da614e2c02e1"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十四天：其他快捷键~")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1b09f9f265da616f6feb9e"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十五天：Twitter day~")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1b16556fb9a049ff4e14dd"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十六天：断点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1b3393e51d45482717a2b7"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十七天：再会console")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1b3cece51d452d1871ae37"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十八天：Drawer 里的秘密")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c1b4df45188255e9b61fde5"}},[t._v("【译】你不知道的 Chrome 调试工具技巧 第十九天：深入 Drawer ")])])]),t._v(" "),s("h3",{attrs:{id:"%E5%86%99%E5%9C%A8%E6%9C%80%E5%90%8E"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E5%86%99%E5%9C%A8%E6%9C%80%E5%90%8E","aria-hidden":"true"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("p",[t._v("如果你对我的翻译表示肯定，也可以关注我一波哦~\n顺便我的开源项目，求一波 star→ "),s("a",{attrs:{href:"https://github.com/DendiSe7enGitHub/vue-blog-generater"}},[t._v("看这里, 美丽的博客系统")])]),t._v(" "),s("h3",{attrs:{id:"%E4%BD%9C%E8%80%85%E5%9C%A8-twitter-%E4%B8%8A%E6%8E%A8%E8%8D%90%E6%88%91%E4%BB%AC%E7%9A%84%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AF%91%E5%95%A6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BD%9C%E8%80%85%E5%9C%A8-twitter-%E4%B8%8A%E6%8E%A8%E8%8D%90%E6%88%91%E4%BB%AC%E7%9A%84%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AF%91%E5%95%A6","aria-hidden":"true"}},[t._v("#")]),t._v(" 作者在 Twitter 上推荐我们的中文翻译啦")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/13/167a5ae8a72ac531?imageView2/2/w/800/q/100",alt:""}})])])}]},r=s("VU/8")(null,a,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=15.a592bc8f3e041a4a158c.js.map
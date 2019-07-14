webpackJsonp([30],{i5cb:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("hr"),s._v(" "),e("h2",{attrs:{id:"name%3A-2019-01-17-jslayout%3A-posttitle%3A-'%E5%89%8D%E7%AB%AF%E6%80%AA%E8%B0%88-01.%E4%BB%8E-for-of-%E8%81%8A%E5%88%B0-generator'date%3A-2019-01-17categories%3A-sitetags%3A-%5Bjavascript%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cly1g4z8vdh2p7j24iu30l1l0.jpg'info%3A-'%E6%95%B0%E7%BB%84%E4%B9%9F%E6%98%AF%E5%AF%B9%E8%B1%A1%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E7%94%A8-for-of-%E6%9D%A5%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1%E5%91%A2%EF%BC%9Ffor-of-%E6%80%8E%E4%B9%88%E8%83%BD%E8%81%8A%E5%88%B0-generator-%EF%BC%9F'"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2019-01-17-jslayout%3A-posttitle%3A-'%E5%89%8D%E7%AB%AF%E6%80%AA%E8%B0%88-01.%E4%BB%8E-for-of-%E8%81%8A%E5%88%B0-generator'date%3A-2019-01-17categories%3A-sitetags%3A-%5Bjavascript%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cly1g4z8vdh2p7j24iu30l1l0.jpg'info%3A-'%E6%95%B0%E7%BB%84%E4%B9%9F%E6%98%AF%E5%AF%B9%E8%B1%A1%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E7%94%A8-for-of-%E6%9D%A5%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1%E5%91%A2%EF%BC%9Ffor-of-%E6%80%8E%E4%B9%88%E8%83%BD%E8%81%8A%E5%88%B0-generator-%EF%BC%9F'","aria-hidden":"true"}},[s._v("#")]),s._v(" name: 2019-01-17-js\nlayout: post\ntitle: '前端怪谈 01.从 for of 聊到 Generator'\ndate: 2019-01-17\ncategories: Site\ntags: [Javascript]\ncoverimg: 'http://ww1.sinaimg.cn/large/88b26e1cly1g4z8vdh2p7j24iu30l1l0.jpg'\ninfo: '数组也是对象，为什么不能用 for of 来遍历对象呢？for of 怎么能聊到 Generator ？'")]),s._v(" "),e("h3",{attrs:{id:"%E4%BD%A0%E8%83%BD%E5%AD%A6%E5%88%B0%E4%BB%80%E4%B9%88"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BD%A0%E8%83%BD%E5%AD%A6%E5%88%B0%E4%BB%80%E4%B9%88","aria-hidden":"true"}},[s._v("#")]),s._v(" 你能学到什么")]),s._v(" "),e("ul",[e("li",[s._v("对 "),e("code",[s._v("for of")]),s._v(" 更深入的理解")]),s._v(" "),e("li",[e("code",[s._v("iterator")]),s._v(" 到底是何方神圣?")]),s._v(" "),e("li",[s._v("数组也是对象，为什么不能用 "),e("code",[s._v("for of")]),s._v(" 来遍历对象呢？")]),s._v(" "),e("li",[s._v("如何实现对象的 "),e("code",[s._v("for of")]),s._v("?")]),s._v(" "),e("li",[e("code",[s._v("Generator")]),s._v(" 又是何方神圣？")]),s._v(" "),e("li",[e("code",[s._v("Generator")]),s._v(" 有什么用呢？")])]),s._v(" "),e("h3",{attrs:{id:"%E8%81%8A%E8%81%8Afor-of"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E8%81%8A%E8%81%8Afor-of","aria-hidden":"true"}},[s._v("#")]),s._v(" 聊聊"),e("code",[s._v("for of")])]),s._v(" "),e("p",[s._v("说起 "),e("code",[s._v("for of")]),s._v(" 相信每个写过 "),e("code",[s._v("JavaScript")]),s._v(" 的人都用过 "),e("code",[s._v("for of")]),s._v(" ，平时我们用它做什么呢？大多数情况应该就是遍历数组了，当然，更多时候，我们也会用 "),e("code",[s._v("map()")]),s._v(" 或者 "),e("code",[s._v("filer()")]),s._v(" 来遍历一个数组。 但是就像我们标题里面说的，它跟 "),e("code",[s._v("Generator")]),s._v(" 能扯上什么关系呢？")]),s._v(" "),e("p",[s._v("首先我们想一个问题，为什么使用 "),e("code",[s._v("for of")]),s._v(" 或者 "),e("code",[s._v("map()")]),s._v(" / "),e("code",[s._v("filer()")]),s._v(" 方法就可以遍历一个数组 (或者类数组对象: "),e("code",[s._v("Strings")]),s._v(" , "),e("code",[s._v("Maps")]),s._v(" , "),e("code",[s._v("Sets")]),s._v(" , "),e("code",[s._v("arguments")]),s._v(" ) 呢？ 为什么不能用他们来遍历一个对象呢？")]),s._v(" "),e("p",[s._v("在真正揭开谜底之前，站在 "),e("code",[s._v("for of")]),s._v(" 的角度想一下，现在让你去遍历一个数组，你需要知道什么信息呢？")]),s._v(" "),e("ul",[e("li",[s._v("对应下标的值")]),s._v(" "),e("li",[s._v("是否遍历结束的标志")])]),s._v(" "),e("p",[s._v("带着这样的思考，我们打印一个数组来看看这里面的玄机：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" numbersArray = ["),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),e("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),e("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("];\n\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".dir(numbersArray);\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e4c9af6d?w=1049&h=823&f=jpeg&s=199880",alt:""}})]),s._v(" "),e("p",[s._v("数组 (或者类数组对象: "),e("code",[s._v("Strings")]),s._v(" , "),e("code",[s._v("Maps")]),s._v(" , "),e("code",[s._v("Sets")]),s._v(" , "),e("code",[s._v("arguments")]),s._v(" ) 的原型中都实现了一个方法 "),e("code",[s._v("Symbol.iterator")]),s._v("，问题来了，那么这个 "),e("code",[s._v("Symbol.iterator")]),s._v(" 又有什么用呢？ 拿出来试一下就知道了：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" iterator = numbersArray["),e("span",{staticClass:"hljs-built_in"},[s._v("Symbol")]),s._v(".iterator]();\n"),e("span",{staticClass:"hljs-comment"},[s._v("// 我们把这个 Symbol.iterator 打印一下看看里面到底有些什么")]),s._v("\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".dir(iterator);\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e557ba6b?w=567&h=231&f=jpeg&s=49559",alt:""}})]),s._v(" "),e("p",[s._v("这里有一个 "),e("code",[s._v("next()")]),s._v(" 方法对吗？执行这个 "),e("code",[s._v("next()")]),s._v(" 方法：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[s._v("iterator.next(); "),e("span",{staticClass:"hljs-comment"},[s._v("// 输出 {value: 1, done: false}")]),s._v("\niterator.next(); "),e("span",{staticClass:"hljs-comment"},[s._v("// 输出 {value: 2, done: false}")]),s._v("\niterator.next(); "),e("span",{staticClass:"hljs-comment"},[s._v("// 输出 {value: 3, done: false}")]),s._v("\niterator.next(); "),e("span",{staticClass:"hljs-comment"},[s._v("// 输出 {value: undefined, done: true}")]),s._v("\n")])]),s._v(" "),e("blockquote",[e("p",[s._v("请注意，当下标超出时，value: undefined")])]),s._v(" "),e("p",[s._v("我们发现这个 "),e("code",[s._v("iterator.next()")]),s._v(" 每次都返回了一个对象。这对象包含两个信息：当前下标的值，以及遍历是否结束的标志。这印证了我们之前思考，有了这两个信息，你作为 "),e("code",[s._v("for of")]),s._v(" 函数，也能打印出数组的每一项了不是吗？")]),s._v(" "),e("p",[s._v("新的问题来了，"),e("code",[s._v("iterator")]),s._v(" 到底是何方神圣呢？")]),s._v(" "),e("h3",{attrs:{id:"iterator(%E8%BF%AD%E4%BB%A3%E5%99%A8)-%26-the-iterator-protocol%EF%BC%88%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE%EF%BC%89"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iterator(%E8%BF%AD%E4%BB%A3%E5%99%A8)-%26-the-iterator-protocol%EF%BC%88%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE%EF%BC%89","aria-hidden":"true"}},[s._v("#")]),s._v(" "),e("code",[s._v("iterator")]),s._v("(迭代器) & "),e("code",[s._v("The iterator protocol")]),s._v("（迭代协议）")]),s._v(" "),e("p",[s._v("聊到了 "),e("code",[s._v("iterator")]),s._v(" 我们不得不先说一下 "),e("code",[s._v("The iterator protocol")]),s._v("（迭代协议）")]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols"}},[s._v('" The iterable protocol allows JavaScript objects to define or customize their iteration behavior " - MDN')])])]),s._v(" "),e("p",[s._v("MDN 上是这么说的："),e("code",[s._v("The iterator protocol")]),s._v(" 允许 "),e("code",[s._v("JavaScript")]),s._v(" 对象去定义或定制它们的迭代行为 \b，所以上面出现的 "),e("code",[s._v("Symbol.iterator")]),s._v(" 这个方法，就是数组对于这个协议的实现。那么按照这个协议，数组是怎么实现了一个 "),e("code",[s._v("iterator")]),s._v(" 呢？")]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators"}},[s._v('"In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. More specifically an iterator is any object which implements the Iterator protocol by having a next() method which returns an object with two properties: value, the next value in the sequence; and done, which is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator\'s return value." - MDN')])])]),s._v(" "),e("p",[s._v("这一大段看起来比较费劲，简单来说就像我们上一章节所印证的，它实现的方式是定义了一个 "),e("code",[s._v("next()")]),s._v(" 方法，而这个 "),e("code",[s._v("next()")]),s._v(" 方法每次被执行都会返回一个对象: "),e("code",[s._v("{value:xxx/undefined , done: true/false }")]),s._v(" 其中 "),e("code",[s._v("value")]),s._v(" 代表的是当前遍历到的值，"),e("code",[s._v("done")]),s._v(" 代表是否遍历结束。")]),s._v(" "),e("p",[s._v("本小节回答了我们之前的提问: 为什么不能用 "),e("code",[s._v("for of")]),s._v(" 来遍历一个对象呢？ 原因很简单："),e("code",[s._v("JavaScript")]),s._v(" 的对象中没有实现一个这样的 "),e("code",[s._v("iterator")]),s._v(" 。你可以打印一个对象来看看结果如何：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".dir({ "),e("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),e("span",{staticClass:"hljs-attr"},[s._v("b")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(" });\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e5a8f20b?w=656&h=349&f=jpeg&s=97318",alt:""}})]),s._v(" "),e("p",[s._v("okay, 到这里如果就结束的话，那我们了解得还不够深入，于是再问一个问题：")]),s._v(" "),e("p",[s._v("Why is there no built-in object iteration ？ （为什么在 "),e("code",[s._v("object")]),s._v(" 中没有内置迭代器呢? ）")]),s._v(" "),e("h3",{attrs:{id:"%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8-object-%E4%B8%AD%E6%B2%A1%E6%9C%89%E5%86%85%E7%BD%AE%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%91%A2%3F"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8-object-%E4%B8%AD%E6%B2%A1%E6%9C%89%E5%86%85%E7%BD%AE%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%91%A2%3F","aria-hidden":"true"}},[s._v("#")]),s._v(" 为什么在 "),e("code",[s._v("object")]),s._v(" 中没有内置迭代器呢?")]),s._v(" "),e("p",[s._v("对啊，为什么呢？ 我们在各样的场景中也需要来遍历一个对象啊？为什么没有内置一个迭代器呢？要回答这个问题，我们得从另外一个角度出发，了解一些基本的概念：")]),s._v(" "),e("p",[s._v("我们常常说遍历对象，但是简单来说，只会在两种层级上来对一个 "),e("code",[s._v("JavaScript")]),s._v(" 对象进行遍历：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("程序的层级 - 什么意思呢？在程序层级上，我们对一个对象进行迭代，是在迭代展示其结构的对象属性。 可能还不是很好理解，举个栗子："),e("code",[s._v("Array.prototype.length")]),s._v(" 这个属性与对象的结构相关，但却不是它的数据。")])]),s._v(" "),e("li",[e("p",[s._v("数据的层级 - 意味着迭代数据结构并提取它的数据。举个栗子：我们在迭代一个数组的时候，迭代器是对于它的 每一个数据进行迭代，如果 "),e("code",[s._v("array = [a, b, c, d]")]),s._v(" 那么迭代器访问到的是 "),e("code",[s._v("1, 2, 3, 4")]),s._v("。")])])]),s._v(" "),e("p",[s._v("明白了这个缘由，"),e("code",[s._v("JavaScript")]),s._v(" 虽然不支持用 "),e("code",[s._v("for of")]),s._v(" 来遍历对象，但是提供了一个 "),e("code",[s._v("for in")]),s._v(" 方法来遍历所有非 "),e("code",[s._v("Symbol")]),s._v(" 类型并且是可枚举的属性。")]),s._v(" "),e("p",[s._v("标准不支持，如果我们就是要用 "),e("code",[s._v("for-of")]),s._v(" 来遍历对象呢？那我们可以任性的实现一个啊：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".prototype["),e("span",{staticClass:"hljs-built_in"},[s._v("Symbol")]),s._v(".iterator] = "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("*("),e("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" [key, value] "),e("span",{staticClass:"hljs-keyword"},[s._v("of")]),s._v(" "),e("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".entries("),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(")) {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" { key, value };\n  }\n};\n")])]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" { key, value } "),e("span",{staticClass:"hljs-keyword"},[s._v("of")]),s._v(" { "),e("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),e("span",{staticClass:"hljs-attr"},[s._v("b")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),e("span",{staticClass:"hljs-attr"},[s._v("c")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(" }) {\n  "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(key, value);\n}\n")])]),s._v(" "),e("p",[s._v("不知道你有没有注意一个细节，在我们任性的实现一个 "),e("code",[s._v("iterator")]),s._v(" 的代码中，我们用到了一个很奇怪的结构 "),e("code",[s._v("function*() {}")]),s._v(" ，这个就是我们接下来要介绍的 "),e("code",[s._v("Generator")])]),s._v(" "),e("h3",{attrs:{id:"generators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generators","aria-hidden":"true"}},[s._v("#")]),s._v(" Generators")]),s._v(" "),e("p",[s._v("看到这个名字觉得很厉害哈，但其实很简单，写一个 "),e("code",[s._v("Generator")]),s._v(" 你只需要在函数名和 "),e("code",[s._v("function")]),s._v(" 关键字中间加一个 "),e("code",[s._v("*")]),s._v(" 号就可以了。至于里面的 "),e("code",[s._v("yield")]),s._v(" 是什么，后面会说的。")]),s._v(" "),e("p",[e("code",[s._v("talk is cheap , show me the code")]),s._v(" ,用一个例子，简单说一下概念。")]),s._v(" "),e("p",[s._v("我们现在定义了一个这样的 "),e("code",[s._v("Generator")]),s._v(" 叫做 "),e("code",[s._v("gen")])]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),e("span",{staticClass:"hljs-title"},[s._v("gen")]),s._v("("),e("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(";\n}\n")])]),s._v(" "),e("p",[s._v("我们只能看到，这里面有 4 个语句，那打印一下看看呗：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e5cc6792?w=1962&h=930&f=jpeg&s=284880",alt:""}})]),s._v(" "),e("p",[s._v("这里发现了一个熟悉的函数，"),e("code",[s._v("next()")]),s._v(" 方法，我们把 "),e("code",[s._v("gen")]),s._v(" 实例化一下，执行一下它的 "),e("code",[s._v("next()")]),s._v(" 来看看结果：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e67553ce?w=1874&h=938&f=jpeg&s=169246",alt:""}})]),s._v(" "),e("p",[s._v("还是熟悉的味道，那么到这里，我们已经知道，"),e("code",[s._v("Generator")]),s._v(" 可以实例化出一个 "),e("code",[s._v("iterator")]),s._v(" ，并且这个 "),e("code",[s._v("yield")]),s._v(" 语句就是用来中断代码的执行的，也就是说，配合 "),e("code",[s._v("next()")]),s._v(" 方法，每次只会执行一个 "),e("code",[s._v("yield")]),s._v(" 语句。")]),s._v(" "),e("p",[s._v("多说一句，针对 "),e("code",[s._v("Generator")]),s._v(" 本身，还有一个有意思的特性，"),e("code",[s._v("yield")]),s._v(" 后面可以跟上另一个 "),e("code",[s._v("Generator")]),s._v(" 并且他们会按照次序执行：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),e("span",{staticClass:"hljs-title"},[s._v("gen")]),s._v("("),e("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v("* gen2();\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(";\n}\n\n"),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),e("span",{staticClass:"hljs-title"},[s._v("gen2")]),s._v("("),e("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(";\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" "),e("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(";\n}\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" iterator = gen();\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(iterator.next());\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(iterator.next());\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(iterator.next());\n"),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(iterator.next());\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/17/1685b1a5e631b7fe?w=2088&h=1128&f=jpeg&s=349348",alt:""}})]),s._v(" "),e("p",[s._v("结果很有意思不是吗？而且 "),e("code",[s._v("return")]),s._v(" 会终结整个 "),e("code",[s._v("Generator")]),s._v(" ，换句话说：写在 "),e("code",[s._v("return")]),s._v(" 后面的 "),e("code",[s._v("yield")]),s._v(" 不会执行。")]),s._v(" "),e("h3",{attrs:{id:"generator-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8%3F"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generator-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8%3F","aria-hidden":"true"}},[s._v("#")]),s._v(" Generator 有什么用?")]),s._v(" "),e("p",[e("code",[s._v("Generator")]),s._v(" 有什么用? 聪明的同学可能已经猜到了，是的，它能够中断执行代码的特性，可以帮助我们来控制异步代码的执行顺序：")]),s._v(" "),e("p",[s._v("例如有两个异步的函数 "),e("code",[s._v("A")]),s._v(" 和 "),e("code",[s._v("B")]),s._v(", 并且 "),e("code",[s._v("B")]),s._v(" 的参数是 "),e("code",[s._v("A")]),s._v(" 的返回值，也就是说，如果 "),e("code",[s._v("A")]),s._v(" 没有执行结束，我们不能执行 "),e("code",[s._v("B")]),s._v("。")]),s._v(" "),e("p",[s._v("那这时候我们写一段伪代码：")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),e("span",{staticClass:"hljs-title"},[s._v("effect")]),s._v("("),e("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" { param } = "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" A();\n  "),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" { result } = "),e("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" B(param);\n  "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".table(result);\n}\n")])]),s._v(" "),e("p",[s._v("这时候我们如果需要得到 "),e("code",[s._v("result")]),s._v(" 那么我们就需要:")]),s._v(" "),e("pre",{staticClass:"hljs"},[e("code",[e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" iterator = effect();\niterator.next();\niterator.next();\n")])]),s._v(" "),e("p",[s._v("执行两次 "),e("code",[s._v("next()")]),s._v(" 得到结果，看起来很傻不是吗？有没有好的办法呢？（废话，肯定有啊）\n假设你在每次执行 "),e("code",[s._v("A()")]),s._v(" / "),e("code",[s._v("B()")]),s._v(" 的请求结束之后，都会自动执行 "),e("code",[s._v("next()")]),s._v(" 方法呢？这不就解决了吗?")]),s._v(" "),e("p",[s._v("这样的库早就存在了，建议大家参考 "),e("code",[s._v("co")]),s._v(" 的源码，当然你也可以通过阅读 "),e("a",{attrs:{href:"https://juejin.im/post/5c4045d1f265da617831ace3"}},[s._v("这篇文章")]),s._v(" 来看看，到底 "),e("code",[s._v("Generator")]),s._v(" 是怎么玩的。")])])}]},v=e("VU/8")(null,a,!1,null,null,null);t.default=v.exports}});
//# sourceMappingURL=30.85a4fcee686db60223cb.js.map
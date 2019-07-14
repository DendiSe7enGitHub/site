webpackJsonp([0],{AseM:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("hr"),s._v(" "),t("h2",{attrs:{id:"name%3A-2018-11-23-asynclayout%3A-posttitle%3A-'generator-%2B-promise-%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B'info%3A-'%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E4%B8%80%E7%9B%B4%E6%98%AF%E4%B8%80%E4%B8%AAjavascript%E5%9C%A8%E6%8E%A2%E8%AE%A8%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%8C%E7%8E%B0%E5%9C%A8%E4%B9%9F%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E8%AE%B8%E5%A4%9A%E6%88%90%E7%86%9F%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%EF%BC%8C%E7%8E%B0%E5%9C%A8%E5%B0%B1generator-%2B-promise-%E8%BF%99%E7%A7%8D%E6%96%B9%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%E4%B8%80%E6%8A%8A'date%3A-2018-11-23categories%3A-lifetags%3A-%5Bjavascript%2C-generator%2C-promise%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpbzfafj23sw2j4k7c.jpg'"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2018-11-23-asynclayout%3A-posttitle%3A-'generator-%2B-promise-%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B'info%3A-'%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B%E4%B8%80%E7%9B%B4%E6%98%AF%E4%B8%80%E4%B8%AAjavascript%E5%9C%A8%E6%8E%A2%E8%AE%A8%E7%9A%84%E9%97%AE%E9%A2%98%EF%BC%8C%E7%8E%B0%E5%9C%A8%E4%B9%9F%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E8%AE%B8%E5%A4%9A%E6%88%90%E7%86%9F%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%EF%BC%8C%E7%8E%B0%E5%9C%A8%E5%B0%B1generator-%2B-promise-%E8%BF%99%E7%A7%8D%E6%96%B9%E5%BC%8F%E6%9D%A5%E5%AE%9E%E7%8E%B0%E4%B8%80%E6%8A%8A'date%3A-2018-11-23categories%3A-lifetags%3A-%5Bjavascript%2C-generator%2C-promise%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpbzfafj23sw2j4k7c.jpg'","aria-hidden":"true"}},[s._v("#")]),s._v(" name: 2018-11-23-Async\nlayout: post\ntitle: 'Generator + Promise 实现异步编程'\ninfo: '怎样实现异步编程一直是一个JavaScript在探讨的问题，现在也已经有了许多成熟的解决方案，现在就Generator + Promise 这种方式来实现一把'\ndate: 2018-11-23\ncategories: LIFE\ntags: [Javascript, Generator, Promise]\ncoverimg: 'http://ww1.sinaimg.cn/large/88b26e1cgy1g0rzpbzfafj23sw2j4k7c.jpg'")]),s._v(" "),t("h3",{attrs:{id:"%E5%9F%BA%E7%A1%80%E5%8E%9F%E7%90%86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E5%8E%9F%E7%90%86","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础原理")]),s._v(" "),t("p",[s._v("我们项目中使用的是"),t("code",[s._v("Generator")]),s._v("配合"),t("code",[s._v("Promise")]),s._v("来实现了异步的编程，在我们继续之前，我们需要明白：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("Generator")]),s._v("作为 ES6 中使用协程的解决方案来处理异步编程的具体实现，以下是它的特点")])]),s._v(" "),t("ul",[t("li",[s._v("\b"),t("code",[s._v("Generator")]),s._v("中可以使用"),t("code",[s._v("yield")]),s._v("关键字配合调用"),t("code",[s._v("gen.next()")]),s._v("来将其内部的语句分割执行。\n简言之 : "),t("code",[s._v("next()")]),s._v("被调用一次，则"),t("code",[s._v("yield")]),s._v("语句被执行一句，\b 随着"),t("code",[s._v("next()")]),s._v("调用，"),t("code",[s._v("yield")]),s._v("语句被依次执行。")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("Promise")]),s._v("表示一个异步操作的最终状态（完成或失败），以及其返回的值。\n参考"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"}},[s._v("Promise-MDN")])])]),s._v(" "),t("p",[s._v("所以,异步编程使用 \b"),t("code",[s._v("Generator")]),s._v("和"),t("code",[s._v("Promise")]),s._v("来实现的原理是什么呢？")]),s._v(" "),t("ol",[t("li",[s._v("因为 \b"),t("code",[s._v("Generator")]),s._v("本身"),t("code",[s._v("yield")]),s._v("语句是分离执行的，所以我们利用这一点，在"),t("code",[s._v("yield")]),s._v("语句中 \b 返回一个"),t("code",[s._v("Promise")])]),s._v(" "),t("li",[s._v("首次调用"),t("code",[s._v("Generator")]),s._v("中的"),t("code",[s._v("next()")]),s._v("后 \b\b 假设返回值叫"),t("code",[s._v("result")]),s._v(",那么此时"),t("code",[s._v("result.value")]),s._v("就是我们定义在"),t("code",[s._v("Generator")]),s._v("中的"),t("code",[s._v("Promise")]),s._v("对象")])]),s._v(" "),t("p",[t("em",[s._v("注意：在这一步，我们已经把原来的执行流程暂停，转而执行"),t("code",[s._v("Promise")]),s._v("的内容,\b 已经实现了控制异步代码的执行，因为此时我们如果不继续执行"),t("code",[s._v("next()")]),s._v("则"),t("code",[s._v("generator")]),s._v("中当前被执行的"),t("code",[s._v("yield")]),s._v("后面的内容不会继续执行,这已经达到了我们需要的效果")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("接下来我们就是在执行完当前"),t("code",[s._v("Promise")]),s._v("之后，让代码继续往下执行，直到遇到下一个"),t("code",[s._v("yield")]),s._v("语句:"),t("br"),s._v(" "),t("em",[s._v("请注意，这一步是最关键的")]),s._v(" \b 所以我们怎么做呢:")])]),s._v(" "),t("p",[s._v("\b 步骤 1： 在当前的"),t("code",[s._v("Promise")]),s._v("的"),t("code",[s._v("then()")]),s._v("方法中，继续执行"),t("code",[s._v("gen.next()")]),s._v("\n步骤 2： 当"),t("code",[s._v("gen.next()")]),s._v("返回的结果"),t("code",[s._v("result.done === true")]),s._v("时,我们拿到"),t("code",[s._v("result.value")]),s._v("【也就是一个新的"),t("code",[s._v("Promise")]),s._v("对象】再次执行并且在它的"),t("code",[s._v("then()")]),s._v("方法中继续上面的步骤 1，直至"),t("code",[s._v("result.done === false")]),s._v("的时候。这时候调用"),t("code",[s._v("resolve()")]),s._v("使"),t("code",[s._v("promise")]),s._v("状态改变，因为所有的"),t("code",[s._v("yield")]),s._v("语句已经被执行完。")]),s._v(" "),t("ul",[t("li",[s._v("步骤 1 保证了我们可以走到下一个"),t("code",[s._v("yield")]),s._v("语句")]),s._v(" "),t("li",[s._v("步骤 2 保证了下一个"),t("code",[s._v("yield")]),s._v("语句执行完不会中断，直至"),t("code",[s._v("Generator")]),s._v("中的最后一个"),t("code",[s._v("yield")]),s._v("语句被执行完。\n示意图:")])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://ww1.sinaimg.cn/large/88b26e1cgy1fxhu2b6k7qj220213s0yp.jpg",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0","aria-hidden":"true"}},[s._v("#")]),s._v(" 具体实现")]),s._v(" "),t("blockquote",[t("p",[s._v("从"),t("code",[s._v("co")]),s._v("库中的一个 demo 开始，了解我们的整个异步请求封装实现")])]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("co("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("*("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" me.loginAction(me.form);\n    ...\n});\n")])]),s._v(" "),t("p",[s._v("在这里我们引入了"),t("code",[s._v("co")]),s._v("库，并且用"),t("code",[s._v("co")]),s._v("来包裹了一个"),t("code",[s._v("generator")]),s._v("（生成器）对象。"),t("br"),s._v("\n接下来我们看下"),t("code",[s._v("co")]),s._v("对于包裹起来的"),t("code",[s._v("generator")]),s._v("做了什么处理")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("co")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("gen")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.获取当前co函数的执行上下文环境,获取到参数列表")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" ctx = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 2.返回一个Promise对象")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//  判断并且使用ctx:context(上下文环境)和arg:arguments(参数列表)初始化generator并且复制给gen")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 注意:")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// gen = gen.apply(ctx, args)之后")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 我们调用 gen.next() 时，返回的是一个指针，实际的值是一个对象")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 对象的形式：{done:[false | true], value: ''}")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" gen === "),t("span",{staticClass:"hljs-string"},[s._v("'function'")]),s._v(") gen = gen.apply(ctx, args);\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当返回值不为gen时或者gen.next的类型不为function【实际是判断是否为generator】时")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当前promise状态被设置为resolve而结束")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!gen || "),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" gen.next !== "),t("span",{staticClass:"hljs-string"},[s._v("'function'")]),s._v(") "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" resolve(gen);\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 否则执行onFulfilled()")]),s._v("\n    onFulfilled();\n  });\n}\n")])]),s._v(" "),t("p",[s._v("总结一下这里发生了什么")]),s._v(" "),t("ol",[t("li",[s._v("返回一个"),t("code",[s._v("promise")])]),s._v(" "),t("li",[s._v("promise 中将被包裹的"),t("code",[s._v("generator")]),s._v("实例化为一个指针，指向"),t("code",[s._v("generator")]),s._v("中第一个"),t("code",[s._v("yield")]),s._v("语句")]),s._v(" "),t("li",[s._v("判断"),t("code",[s._v("generator")]),s._v("实例化出来的指针是否存在：如果没有"),t("code",[s._v("yield")]),s._v("语句则指针不存在\n判断指针"),t("code",[s._v("gen.next()")]),s._v("方法是否为"),t("code",[s._v("function")]),s._v("：如果不为"),t("code",[s._v("function")]),s._v("证明无法执行"),t("code",[s._v("gen.next()")]),s._v("\n条件有一项不满足就将"),t("code",[s._v("promise")]),s._v("的状态置为"),t("code",[s._v("resolve")]),s._v("\n否则执行"),t("code",[s._v("onFulfilled()")])])]),s._v(" "),t("p",[s._v("接下来我们看下"),t("code",[s._v("onFulfilled()")]),s._v("的实现")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("onFulfilled")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("res")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 在执行onFulfilled时，定义了一个ret来储存gen.next(res)执行后的指针对象")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" ret;\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("try")]),s._v(" {\n    ret = gen.next(res);\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 在这里，yield\b语句\b抛出的值就是{value:me.loginAction(me.form), done:false}")]),s._v("\n  } "),t("span",{staticClass:"hljs-keyword"},[s._v("catch")]),s._v(" (e) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" reject(e);\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 将ret对象传入到我们定义在promise中的next方法中")]),s._v("\n  next(ret);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(";\n}\n")])]),s._v(" "),t("p",[s._v("总结一下，"),t("code",[s._v("onFulfilled")]),s._v("最主要的工作就是")]),s._v(" "),t("ol",[t("li",[s._v("执行"),t("code",[s._v("gen.next()")]),s._v(" 使代码执行到"),t("code",[s._v("yield")]),s._v("语句")]),s._v(" "),t("li",[s._v("将执行后返回的结果传入我们自定义的"),t("code",[s._v("next()")]),s._v("方法中")])]),s._v(" "),t("p",[s._v("那么我们再来看"),t("code",[s._v("next()")]),s._v("方法")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("next")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ret")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 进入next中首先判断我们传入的ret的done状态:")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 情况1:ret.done = true 代表我们这个generator中所有yield语句都已经执行完。")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 那么将ret.value传入到\bresolve()中，promise的状态变成解决，整个过程结束。")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (ret.done) "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" resolve(ret.value);\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 情况2:当前ret.done = false 代表generator还未将所有的yield语句执行完，那么这时候")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 我们把当前上下文和ret.value传入toPromise中，将其转换为对应的Promise对象`value`")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" value = toPromise.call(ctx, ret.value);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (value && isPromise(value)) "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" value.then(onFulfilled, onRejected);\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 当value确实是一个promise对象的时候，\breturn value.then(onFulfilled,onRejected)")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 我们重新进入到了generator中，执行下一条yield语句")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" onRejected(\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("TypeError")]),s._v("(\n      "),t("span",{staticClass:"hljs-string"},[s._v("'You may only yield a function, promise, generator, array, or object, '")]),s._v(" +\n        "),t("span",{staticClass:"hljs-string"},[s._v("'but the following object was passed: \"'")]),s._v(" +\n        "),t("span",{staticClass:"hljs-built_in"},[s._v("String")]),s._v("(ret.value) +\n        "),t("span",{staticClass:"hljs-string"},[s._v("'\"'")]),s._v("\n    )\n  );\n}\n")])]),s._v(" "),t("p",[s._v("总结一下，"),t("code",[s._v("next")]),s._v("主要工作")]),s._v(" "),t("ol",[t("li",[s._v("判断上一次"),t("code",[s._v("yield")]),s._v("语句的执行结果")]),s._v(" "),t("li",[s._v("将"),t("code",[s._v("yield")]),s._v("的 \b"),t("code",[s._v("result")]),s._v("的"),t("code",[s._v("value")]),s._v("值【其实就是我们要异步执行的"),t("code",[s._v("Promise")]),s._v("】")]),s._v(" "),t("li",[s._v("执行"),t("code",[s._v("value")]),s._v("的"),t("code",[s._v("then")]),s._v("方法，重新进入到"),t("code",[s._v("onFulfilled")]),s._v("方法中，而在"),t("code",[s._v("onFulfilled")]),s._v("中，我们又将进入到当前方法，如此循环的调用，实现了"),t("code",[s._v("generator")]),s._v("和"),t("code",[s._v("Promise")]),s._v("的执行切换，从而实现了"),t("code",[s._v("Promise")]),s._v("的内容按照我们所定义的顺序执行。")])]),s._v(" "),t("p",[s._v("至此就是全部异步编程的实现。")])])}]},a=t("VU/8")(null,v,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=0.bc6e99ab68d68b34d293.js.map
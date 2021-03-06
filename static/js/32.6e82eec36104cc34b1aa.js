webpackJsonp([32],{N6V9:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("hr"),s._v(" "),a("h2",{attrs:{id:"name%3A-2018-12-07-sitelayout%3A-posttitle%3A-'auto-update-your-site-with-hooks'date%3A-2018-12-04categories%3A-sitetags%3A-%5Bsite%2C-git%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpc831hj223z2u1e0y.jpg'info%3A-'%E6%89%8B%E6%91%B8%E6%89%8B%EF%BC%8C%E6%8A%8A%E4%BD%A0%E4%BB%8E%E6%9C%BA%E6%A2%B0%E7%9A%84%E4%B8%AA%E4%BA%BA%E7%AB%99%E5%8F%91%E5%B8%83%E9%83%A8%E7%BD%B2%E7%9A%84%E9%87%8D%E5%A4%8D%E5%B7%A5%E4%BD%9C%E4%B8%AD%E8%A7%A3%E6%94%BE%E5%87%BA%E6%9D%A5%EF%BC%81'"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2018-12-07-sitelayout%3A-posttitle%3A-'auto-update-your-site-with-hooks'date%3A-2018-12-04categories%3A-sitetags%3A-%5Bsite%2C-git%5Dcoverimg%3A-'http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F88b26e1cgy1g0rzpc831hj223z2u1e0y.jpg'info%3A-'%E6%89%8B%E6%91%B8%E6%89%8B%EF%BC%8C%E6%8A%8A%E4%BD%A0%E4%BB%8E%E6%9C%BA%E6%A2%B0%E7%9A%84%E4%B8%AA%E4%BA%BA%E7%AB%99%E5%8F%91%E5%B8%83%E9%83%A8%E7%BD%B2%E7%9A%84%E9%87%8D%E5%A4%8D%E5%B7%A5%E4%BD%9C%E4%B8%AD%E8%A7%A3%E6%94%BE%E5%87%BA%E6%9D%A5%EF%BC%81'","aria-hidden":"true"}},[s._v("#")]),s._v(" name: 2018-12-07-Site\nlayout: post\ntitle: 'Auto update your site with hooks'\ndate: 2018-12-04\ncategories: Site\ntags: [Site, Git]\ncoverimg: 'http://ww1.sinaimg.cn/large/88b26e1cgy1g0rzpc831hj223z2u1e0y.jpg'\ninfo: '手摸手，把你从机械的个人站发布部署的重复工作中解放出来！'")]),s._v(" "),a("blockquote",[a("p",[s._v("本文同步连接 \b"),a("a",{attrs:{href:"https://juejin.im/post/5c094bb7518825061a2bcfe6"}},[s._v("掘金")])])]),s._v(" "),a("h3",{attrs:{id:"%E4%B8%BA%E4%BB%80%E4%B9%88%EF%BC%9F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%EF%BC%9F","aria-hidden":"true"}},[s._v("#")]),s._v(" 为什么？")]),s._v(" "),a("blockquote",[a("p",[s._v("为什么要实现自动部署？")])]),s._v(" "),a("p",[s._v("在 2 个月的时间里，一直都在忙着整理博客，每一个程序员都有一个博客梦（当然也不排除有些是没有的），我先后使用过各种博客系统:"),a("br")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress"}},[s._v("vuepress")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/nozzle/react-static"}},[s._v("react-static")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jekyll/jekyll"}},[s._v("jekyll")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/hexojs/hexo"}},[s._v("hexo")]),a("br"),s._v("\n...")])]),s._v(" "),a("p",[s._v("这些都因为前前后后的原因，我没有采用，而是自己写了一个博客系统："),a("a",{attrs:{href:"https://github.com/DendiSe7enGitHub/vue-blog-generater"}},[s._v("vue-blog-generater")]),s._v("【请允许我再求一波 star】"),a("a",{attrs:{href:"https://juejin.im/user/585a2f52128fe10069ba1b95"}},[s._v("点击这里")]),s._v("查看说明文档")]),s._v(" "),a("p",[s._v("为什么呢？因为我需要一个自己对其高度熟悉的系统，这样有什么问题，我都知道问题出在哪，因为之前的这些系统，当然很好，但是无论是主题的编辑，还是代码的部署以及自定义，这些都不能满足我的要求。")]),s._v(" "),a("p",[s._v("话说回来，当我实现好了基础功能和页面之后，我开心了好一会儿，然后把一些还有意义的博文转移过来，这就涉及到了发布和部署。")]),s._v(" "),a("p",[s._v("我们都知道一个"),a("code",[s._v("vue-cli")]),s._v("生成的项目，通常打包的目录都是"),a("code",[s._v("dist")]),s._v("，那么我实际上需要挂载到服务器上的代码就是这个"),a("code",[s._v("dist")]),s._v("中的代码。")]),s._v(" "),a("p",[s._v("那按照常理，整个文章的更新流程应该是这样："),a("br")]),s._v(" "),a("ol",[a("li",[s._v("新建文件，编写"),a("code",[s._v("markdown")]),s._v("博文")]),s._v(" "),a("li",[a("code",[s._v("npm run build")]),s._v(" 编译到"),a("code",[s._v("dist")])]),s._v(" "),a("li",[s._v("将"),a("code",[s._v("dist")]),s._v("的文件上传到对应的代码仓库"),a("code",[s._v("dist")])]),s._v(" "),a("li",[s._v("将当前生成器的文件同步上传到对应代码仓库"),a("code",[s._v("main")])]),s._v(" "),a("li",[s._v("登录服务器，"),a("code",[s._v("git clone dist仓库")]),s._v("到指定的位置")])]),s._v(" "),a("p",[s._v("看到了吧，只是更新一篇文章，却需要这么多步骤，是不是觉得很麻烦呢？麻烦就对了，在这里我们就是来解决这个麻烦的。")]),s._v(" "),a("h3",{attrs:{id:"%E5%A6%82%E4%BD%95%E5%81%9A%EF%BC%9F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%A6%82%E4%BD%95%E5%81%9A%EF%BC%9F","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何做？")]),s._v(" "),a("blockquote",[a("p",[s._v("我明白了为什么要做自动部署，但是我从哪下手呢？")])]),s._v(" "),a("p",[s._v("做一件事情之前，我们要理清楚思路，有哪些步骤呢？其实非常简单：")]),s._v(" "),a("ol",[a("li",[s._v("新建文件，编写"),a("code",[s._v("markdown")]),s._v("博文【这一步是跑不掉的】")]),s._v(" "),a("li",[a("code",[s._v("npm run build")]),s._v(" 编译到"),a("code",[s._v("dist")]),s._v(",执行"),a("code",[s._v("build.js")]),s._v("中判断"),a("code",[s._v("config.js")]),s._v("中是否配置了"),a("code",[s._v("dist")]),s._v("的远程仓库地址。"),a("br"),s._v("\n如果配置了就对当前项目的"),a("code",[s._v("dist")]),s._v("目录，进行"),a("code",[s._v("git")]),s._v("初始化，同时将整体代码上传到"),a("code",[s._v("Main仓库")]),a("strong",[s._v("这里默认不配置，"),a("code",[s._v("Main")]),s._v("仓库相当于本地仓库关联的远程仓库")])]),s._v(" "),a("li",[s._v("给本地"),a("code",[s._v("dist")]),s._v("目录关联远程仓库，并把代码推送到指定的"),a("code",[s._v("dist")]),s._v("对应的远程仓库中。")]),s._v(" "),a("li",[s._v("服务器进行配置，当接受到托管平台发送的"),a("code",[s._v("POST")]),s._v("请求时，做出对应的响应：拉取远程"),a("code",[s._v("dist")]),s._v("仓库的"),a("code",[s._v("master")]),s._v("分支并且强制覆盖本地的"),a("code",[s._v("master")]),s._v("分支")])]),s._v(" "),a("h3",{attrs:{id:"%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%EF%BC%9F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%EF%BC%9F","aria-hidden":"true"}},[s._v("#")]),s._v(" 具体实现？")]),s._v(" "),a("p",[s._v("我们先来看看在第 2，3 个所说的内容怎么实现。")]),s._v(" "),a("ul",[a("li",[s._v("准备工作：安装需要的库\n"),a("br"),a("code",[s._v("shell")]),s._v(" "),a("strong",[s._v("帮助我们在 nodejs 中执行命令")]),s._v(" "),a("br"),a("code",[s._v("chalk")]),s._v(" "),a("strong",[s._v("丰富打印信息")])])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("//安装shell\nyarn add shell --save\nyarn add chalk --save\n")])]),s._v(" "),a("ul",[a("li",[s._v("我们在"),a("code",[s._v("build.js")]),s._v("中设计一个函数"),a("code",[s._v("autoUpdate")]),s._v("，来帮助我们提交"),a("code",[s._v("main")]),s._v("仓库和我们的"),a("code",[s._v("dist")]),s._v("仓库的更新，我们先实现更新"),a("code",[s._v("main")]),s._v("仓库："),a("strong",[s._v("请注意：这里需要使用 await 确保代码的执行顺序")])])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" config = "),a("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'../config'")]),s._v(");\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" shell = "),a("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'shelljs'")]),s._v(");\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("autoUpdate")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(chalk.cyan("),a("span",{staticClass:"hljs-string"},[s._v("`Start to upload whole project to coding.net`")]),s._v("));\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!shell.which("),a("span",{staticClass:"hljs-string"},[s._v("'git'")]),s._v(")) {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("//向命令行打印git命令不可用的提示信息")]),s._v("\n    shell.echo("),a("span",{staticClass:"hljs-string"},[s._v("'Sorry, this script requires git'")]),s._v(");\n    "),a("span",{staticClass:"hljs-comment"},[s._v("//退出当前进程")]),s._v("\n    shell.exit("),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n  }\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// 推送当前目录[main 目录]的代码")]),s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("'git add .'")]),s._v(");\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("`git commit -m '"),a("span",{staticClass:"hljs-subst"},[s._v("${config.commitMessage}")]),s._v("'`")]),s._v(").code;\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("'git push origin master -f'")]),s._v(");\n  "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(chalk.green("),a("span",{staticClass:"hljs-string"},[s._v("`main dir-> succeed`")]),s._v("));\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("@/config/index.js")]),s._v("中配置 "),a("strong",[s._v("dist 远程仓库")]),s._v(" 相关的属性的值")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n   ...\n   distOriginSSh: "),a("span",{staticClass:"hljs-string"},[s._v("'git@github.com:xxx/xxx-blog-xxx.git'")]),s._v(",\n   ...\n}\n")])]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("autoUpdate")]),s._v("中添加提交"),a("code",[s._v("dist")]),s._v("仓库的更新的代码："),a("strong",[s._v("请注意：这里需要使用 await 确保代码的执行顺序")])])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("//进入到dist目录下")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.cd("),a("span",{staticClass:"hljs-string"},[s._v("'dist'")]),s._v(");\n"),a("span",{staticClass:"hljs-comment"},[s._v("//执行 git init")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec(config.initLocal);\n"),a("span",{staticClass:"hljs-comment"},[s._v("//删除本地的dist已经对应的远程仓库")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec(config.deleteRemote);\n"),a("span",{staticClass:"hljs-comment"},[s._v("//添加目标远程仓库到dist")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("`git remote add origin '"),a("span",{staticClass:"hljs-subst"},[s._v("${config.distOriginSSh}")]),s._v("'`")]),s._v(");\n"),a("span",{staticClass:"hljs-comment"},[s._v("//提交")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("'git add .'")]),s._v(");\n"),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" code = "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("`git commit -m '"),a("span",{staticClass:"hljs-subst"},[s._v("${config.commitMessage}")]),s._v("'`")]),s._v(").code;\n"),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (code !== "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(") {\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.echo("),a("span",{staticClass:"hljs-string"},[s._v("'Error: Git commit failed'")]),s._v(");\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exit(code);\n} "),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" shell.exec("),a("span",{staticClass:"hljs-string"},[s._v("'git push origin master -f'")]),s._v(");\n  "),a("span",{staticClass:"hljs-comment"},[s._v("//chalk 这个库是为了丰富打印信息的")]),s._v("\n  "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(chalk.green("),a("span",{staticClass:"hljs-string"},[s._v("`dist-> succeed`")]),s._v("));\n}\n")])]),s._v(" "),a("p",[s._v("实现了本地上传到远程仓库，那么接下来我们需要去做几件事，来实现步骤 4："),a("br"),s._v(" "),a("strong",[s._v("这里默认你已经在服务器上完成了对 dist 代码的部署")])]),s._v(" "),a("ol",[a("li",[s._v("在自己的服务器上启动一个服务，监听"),a("code",[s._v("POST")]),s._v("的请求，如果确定这个请求是通知我们需要更新服务器上对应"),a("code",[s._v("dist")]),s._v("目录对应的源码的话，执行对应的"),a("code",[s._v("git")]),s._v("命令来更新。")]),s._v(" "),a("li",[s._v("配置远程仓库的"),a("code",[s._v("hooks")]),s._v(",在监听到我们的"),a("code",[s._v("push")]),s._v("请求时，就会自动"),a("code",[s._v("POST")]),s._v("一个请求到我们配置的"),a("code",[s._v("hooks")]),s._v("对应的地址中。这个地址也就是我们在服务器上启动的服务地址。")])]),s._v(" "),a("p",[s._v("Okay，知道了要做什么，那我们就开始吧。首先在服务器上启动一个"),a("code",[s._v("node server")]),s._v(",我们新建一个"),a("code",[s._v("server.js")]),s._v(",并且进入到编辑状态")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("touch server.js\n//如果你安装了vim\nvim server.js\n//如果没有安装vim,可以用vi\nvi server.js\n//进入文件后，我们可以按a健进入 insert状态\n")])]),s._v(" "),a("p",[s._v("可以参考我的"),a("code",[s._v("server.js")]),s._v("进行配置 "),a("strong",[s._v("请注意，需要你自己配置端口和路径，我已经去除了我自己的配置")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" http = "),a("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'http'")]),s._v(")\n  , exec = "),a("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'exec'")]),s._v(")\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 配制你的端口号")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" PORT = XXX\n  , PATH = "),a("span",{staticClass:"hljs-string"},[s._v("'./xxx'")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("//PATH:你的dist目录的路径，相对于server.js所在的目录而言。")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" deployServer = http.createServer("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("request, response")]),s._v(") ")]),s._v("{\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (request.url.search("),a("span",{staticClass:"hljs-regexp"},[s._v("/deploy\\/?$/i")]),s._v(") > "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(") {\n\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" commands = [\n      "),a("span",{staticClass:"hljs-string"},[s._v("'cd '")]),s._v(" + PATH,\n      "),a("span",{staticClass:"hljs-string"},[s._v("'git fetch --all'")]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v("'git reset --hard origin/master'")]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v("'git pull'")]),s._v("\n    ].join("),a("span",{staticClass:"hljs-string"},[s._v("' && '")]),s._v(")\n\n    exec(commands, "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("err, out, code")]),s._v(") ")]),s._v("{\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (err "),a("span",{staticClass:"hljs-keyword"},[s._v("instanceof")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v(") {\n        response.writeHead("),a("span",{staticClass:"hljs-number"},[s._v("500")]),s._v(")\n        response.end("),a("span",{staticClass:"hljs-string"},[s._v("'Server Internal Error.'")]),s._v(")\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" err\n      }\n      process.stderr.write(err)\n      process.stdout.write(out)\n      response.writeHead("),a("span",{staticClass:"hljs-number"},[s._v("200")]),s._v(")\n      response.end("),a("span",{staticClass:"hljs-string"},[s._v("'Deploy Done.'")]),s._v(")\n\n    })\n\n  } "),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n\n    response.writeHead("),a("span",{staticClass:"hljs-number"},[s._v("404")]),s._v(")\n")])]),s._v(" "),a("p",[s._v("编辑完成后，然后我们先按下"),a("code",[s._v("esc")]),s._v("然后输入"),a("code",[s._v(":wq!")]),s._v("保存文件。然后"),a("code",[s._v("node server.js")]),s._v("启动一个服务。但是你又会发现，"),a("code",[s._v("node server.js")]),s._v("这样启动的服务会在一段时间后自动停止，所以我们需要来用一个守护进程的工具来守护我们的服务，推荐大家使用"),a("code",[s._v("forever")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("#安装")]),s._v("\nnpm install forever -g\n"),a("span",{staticClass:"hljs-comment"},[s._v("#启动")]),s._v("\nforever server.js\n")])]),s._v(" "),a("p",[s._v("还没有结束，我们还需要在"),a("code",[s._v("nginx")]),s._v("配置文件中设置一个代理，将对应子域名代理到我们刚刚配置的端口上。这样做的原因是因为我只有一个域名···")]),s._v(" "),a("p",[s._v("你可能会问什么是子域名，比如我有一个一级域名"),a("code",[s._v("dendoink.com")]),s._v("那么我可以在解析的时候多添加一条新记录"),a("code",[s._v("xxx.dendoink.com")]),s._v("，这个就是子域名，他同样可以访问到我们域名对应的服务器。")]),s._v(" "),a("p",[s._v("如果你使用的也是 nginx 来管理服务，那可以参考我下面的配置")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    server {\n    listen       80;\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# 配置你的子域名")]),s._v("\n    server_name  xxx.你的域名.com;\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#charset koi8-r;")]),s._v("\n    access_log  /var/"),a("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("/nginx/githook.dendoink.com.access.log  main;\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# 这里是重点")]),s._v("\n    location / {\n        proxy_pass http://127.0.0.1:1024;\n    }\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#error_page  404              /404.html;")]),s._v("\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#")]),s._v("\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# proxy the PHP scripts to Apache listening on 127.0.0.1:80")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    proxy_pass   http://127.0.0.1;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#}")]),s._v("\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#location ~ \\.php$ {")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    root           html;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    fastcgi_pass   127.0.0.1:9000;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    fastcgi_index  index.php;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    include        fastcgi_params;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#}")]),s._v("\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("# concurs with nginx's one")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#location ~ /\\.ht {")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#    deny  all;")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("#}")]),s._v("\n}\n")])]),s._v(" "),a("p",[s._v("这样配置好以后我们就可以通过外部访问到我们定义好的服务啦。只需要把这个地址加入到对应的 githook 的配置中【具体的 hook 配置参考你的托管平台教程】。")]),s._v(" "),a("p",[s._v("是不是很简单呢？有任何问题可以掘金和我联系，或者邮件 dendise7en@gmail.com")]),s._v(" "),a("p",[s._v("另外求一波关注和 star -> "),a("a",{attrs:{href:"https://github.com/DendiSe7enGitHub/vue-blog-generater"}},[s._v("看这里，最美博客系统~")]),a("br"),s._v("\n另外求一波关注和 star -> "),a("a",{attrs:{href:"https://github.com/DendiSe7enGitHub/vue-blog-generater"}},[s._v("看这里，最美博客系统~")]),a("br"),s._v("\n另外求一波关注和 star -> "),a("a",{attrs:{href:"https://github.com/DendiSe7enGitHub/vue-blog-generater"}},[s._v("看这里，最美博客系统~")]),a("br")]),s._v(" "),a("p",[a("br"),s._v("特别声明：题图来源"),a("a",{attrs:{href:"https://unsplash.com/"}},[s._v("unsplash")])])])}]},n=a("VU/8")(null,e,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=32.6e82eec36104cc34b1aa.js.map
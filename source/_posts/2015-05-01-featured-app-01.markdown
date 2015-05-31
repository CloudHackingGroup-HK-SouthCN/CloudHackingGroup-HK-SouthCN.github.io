---
layout: post
title: "特色应用：可能是世界上最小的导航网站"
date: 2015-05-01 14:34:14 +0800
comments: true
categories: [PaaS, CNPaaS, App]
description: "可能是世界上最小的导航网站"
author: Zhizhao Lin
---

[CNPaaS] 上线后，平台上迎来了一个简洁轻巧而实用的应用，它有一个有趣的名字：  
**可能是世界上最小的导航网站**。

<img class="center" src="{{root_url}}/images/posts/featured-app-01.png" title="可能是世界上最小的导航网站"></img>

这个应用的网址是：  
<http://pages-sunyanzi.app.cnpaas.io>

同时它使用了 CNPaaS [自定义网址](http://doc.cnpaas.io/usage/custom-domains.html)功能，给这个应用关联了一个顶级域名：    
**<http://tok4.com>**

整个应用只有一个模拟键盘的界面，每个键可以增加或删除一个对应的网址，打开应用之后，直接敲自己的键盘，就能打开对应的网站，而且不会因为浏览器的关闭而失效。实用、方便。简单得甚至完全不需要说明书。 

把它用作网址导航，把常用的网站关联好，每次上网先打开这个网页，便不需要总是要到地址栏去输入网址那么麻烦了。

该应用源于作者 [Sunyanzi] 的网友三年前的[一个创意](https://v2ex.com/t/32295)。

可是三年来这个创意一直没有人理会，于是 Sunyanzi 就自己动手实现出来了。

这个应用只是用了最基础的前端技术：HTML + CSS + Javasript。  
代码在 Github 开源：  
<https://github.com/qex/keystart>  
开源协议是 WTFPL ，也就是拿来怎么处理都行。

关于这个应用，Sunyanzi 如是说：

* “所有内容都是存在本地的 … 不用担心隐私泄露 … ”
* “我在一开始写的时候本来是用 localStorage 的 … 后来为了兼容才改成 cookie … “
* “这个东西的核心是简洁 … 以及不需要任何说明性文字的一目了然 … 我不太希望它变得臃肿 … ”

如果你每次上网都有些网站是必开的话，不妨用它来管理这些网址，并设置成你的浏览器启动页面。

关于这个应用，你可以在 [V2EX这个帖子里](https://v2ex.com/t/183945) 了解到更多。
	
有了创意，就尽可能马上动手去做，用最快捷的方法把演示做出来。

CNPaaS 就是为帮助开发者实现这个目的而存在的，避开从应用开发到可以演示中间的许多繁杂而头痛的环节。

如果对这个应用的键盘设计感兴趣，或许你还可以看看以下两个演示：

1. **Apple Keyboard via CSS3**    
<http://html-quasimo.app.cnpaas.io/apple-keyboard-via-css3.html>  
一个用纯CSS3来模拟苹果蓝牙键盘的演示，代码来自[CSSDECK](http://cssdeck.com/labs/apple-keyboard-via-css3)。

2. **Pure CSS Happy Hacking Keyboard**   
<http://html-quasimo.app.cnpaas.io/pure-css-hhkb.html>  
一个用纯CSS来模拟HHKB的演示，代码来自[CODEPEN](http://codepen.io/dehash/pen/nEJyf)。

要在线上创建类似以上两个演示的方法非常简单，可以参考 CNPaaS 关于 [如何部署静态网站](http://doc.cnpaas.io/tutorial/static.html) 的文档，在后台创建 “静态网页/HTML5” 类型的应用后，用 git 根据应用的git地址 把默认页面的代码 clone 下来，然后改写 public 目录里的 index.html 或者新建 html 文件即可，完成后用 git 命令 commit 然后：    
`git push origin master` 
即可。

如果你也在 CNPaaS 创建了属于你的演示项目，不妨 [联系我们] ，我们会分享给更多的朋友。


[CNPaas]:http://www.cnpaas.io
[Sunyanzi]:http://mop.sunyanzi.cn
[联系我们]:http://www.cnpaas.io/contact-us/
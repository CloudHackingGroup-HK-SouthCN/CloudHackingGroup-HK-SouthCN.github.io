---
layout: post
title: "特色应用：Skimige Ran 的博客"
date: 2015-08-14 10:34:14 +0800
comments: true
categories: [PaaS, CNPaaS, App]
description: "静态及 Typecho 网站在 CNPaaS 的实践"
author: Zhizhao Lin
---

这期的特色用户我们想介绍一位网友的两个版本的博客。

这位网友叫 Skimige Ran 。开始的时候在 [CNPaaS] 的 [PHP 环境]下，用我们介绍过的 [Typecho] ，搭建了用于记录生活点滴一个精美的 blog ：

<img class="center" src="{{root_url}}/images/posts/fa04a.jpg" title="blog.ikevin.in in Typecho"></img>

<http://t-ranjianghao.app.cnpaas.io>

并用[自定义网址]功能，把该应用绑定到自己的独立域名上。

后来 Skimige Ran 改用了[纸小墨]这个使用GO语言编写的静态博客构建工具，来构建自己的新 blog 。这个工具的原理跟 [Hexo] 类似，可以将 [MarkDown] 格式的文档转成完整的 html 网站。

Skimige Ran 为此在 CNPaaS 创建了一个[静态网站类型]新的应用，并将新 blog 部署到上面：

<img class="center" src="{{root_url}}/images/posts/fa04b.jpg" title="www.ikevin.in"></img>

然后还是通过 CNPaaS 应用后台的自定义网址功能，轻松地将给这个新 blog 设定了一个顶级域名：

**<http://ikevin.in>**

原本该域名是用于之前创建的 Typecho blog 上的，在试用新的工具构建网站后，他在旧 blog 的 CNPaaS 应用后台里，重设了这样一个自定义网址：

**<http://blog.ikevin.in>**

就这样，Skimige Ran 很方便和轻松随意地管理着自己的两个网站。



[CNPaas]:http://www.cnpaas.io
[Hexo]:http://hexo.io
[MarkDown]:http://daringfireball.net/projects/markdown/
[静态网站类型]:http://doc.cnpaas.io/tutorial/static.html
[PHP 环境]:http://doc.cnpaas.io/usage/php.html
[Typecho]:http://doc.cnpaas.io/tutorial/typecho.html
[自定义网址]:http://doc.cnpaas.io/usage/custom-domains.html
[纸小墨]:http://www.inkpaper.io
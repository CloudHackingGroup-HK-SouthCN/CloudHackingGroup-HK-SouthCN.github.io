---
layout: post
title: "走进 PaaS 领域"
date: 2014-07-08 13:02:51 +0800
comments: true
categories: [PaaS, CNPaaS, China]
description: "PaaS 领域为什么变得越来越火?"
published: false
author: Jimmy Chu
---

## 走进PaaS

两个月前，我面临的一个问题促使我对云计算技术进行了更深入的学习，特别是在[PaaS方面](http://en.wikipedia.org/wiki/Platform_as_a_service)。我之前一直使用Heroku，它给我的部署经历提供非常好的用户体验。然而我需要在中国大陆部署我的应用程序，并一直在寻找能帮我管理应用程序基础设施的类似平台。

我发现的最相似的是 [SAE](http://sae.sina.com.cn/)，但它并不支持Ruby on Rails。还有 [AVOS Cloud](https://cn.avoscloud.com/) 和 [Bmob](http://www.codenow.cn/)，但它们更像是提供应用程序接口来减轻开发负担而不是托管应用程序。所以事实上，我没有发现能像Heroku那样运作的如此好的平台。我还发现有人建议在[Digital Ocean上部署Dokku](http://goo.gl/vMEhcx) (或者其他托管服务提供商)。

后来我发现，中国没有人在这个领域寻求解决方案其实并不奇怪。根据[MIIT的最新报告](http://goo.gl/Hik8yY) (第 16 页)，Heroku所在的PaaS服务只占云计算市场收入的5%不到，大约2.2亿人民币。

## PaaS: 一个有待解决的问题

但这个问题还是需要解决的。随着学习的进行，我很快把注意力转向了美国。人们也面临着同样的问题，而事实更是这样。由于IaaS服务变得突出，而且企业有时宁愿用混合云来储存内部数据，所以现在开发者手中有成千上百个可以轻松访问的服务器，但服务器的标准化却成了问题。EC2允许管理者对用户数据进行说明，像实例的初始化脚本一样。这个方向看起来前景不错，像 [Vagrant](http://www.vagrantup.com/) 和 [Chef](http://www.getchef.com/chef/) 这些项目正在朝这个方向发展并且正在部分缓解这个问题。但管理者仍然需要SSH去连接服务器，而且把虚拟机当做底层技术还需要占用大量系统资源。

## 越来越火热

人们也在探索其他可能性，所以 [Docker](http://www.docker.com/) 和 [OpenShift](https://www.openshift.com/) 应运而生。他们正在研究他们是否可以在尽可能多地重复使用系统资源的同时使应用程序实例安全运行并且可以对彼此的运行进行沙盒操作。事实上，Jeff Lindsay 的[一篇文章](http://goo.gl/T3sJEr) 很好地总结了他的职业发展历程，主要是他如何发现市场发展对于PaaS的需求。他现在正在进行一个叫 [Flynn](https://flynn.io/) 项目，因为引入了分布式服务存储库这个概念，该项目将带领PaaS进入一个新的层次。（他同时也是建立 [Dokku](http://goo.gl/s841B) 这个单服务器Heroku的人）

当我在对这些令人兴奋的项目进行更深入的学习时，我也在重新思考，中国大陆的PaaS领域会发生什么，而我又可以在这个领域做些什么。

在接下来的文章里，我会覆盖更多关于PaaS在美国和中国的发展，然后着重介绍Docker。

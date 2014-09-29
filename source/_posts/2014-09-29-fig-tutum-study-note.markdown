---
layout: post
title: "Fig 及 Tutum 学习小结"
date: 2014-09-29 16:59:17 +0800
comments: true
categories: [PaaS, Docker]
description: "Fig 及 Tutum 学习小结"
author: Jimmy Chu
---

## Fig － Docker 多容器协调工具

{% img center http://www.fig.sh/img/logo.png 180 Fig - Docker 多容器协调工具 %}

我最近和同事共同研究 Docker 的开发生态系统。今天开始去尝试用 [Fig](http://www.fig.sh/). Fig 团队甚至乎被 [Docker](http://www.docker.com) [原团队收购去](http://blog.docker.com/2014/07/welcoming-the-orchard-and-fig-team/)了。

如果你在开发 RoR 应用时用过 Foreman 布署应用。就不难理解 Fig。现在网络应用趋向分成不同的服务, 以服务为单元来运行。这样一个应用跑起来底下其实就有好几个服务的互相协调运作。一个 RoR 应用可以有 Rails 的服务，数据库服务，及 后台 workers 的服务。而 Foreman 就是那工具可轻松的把这三个服务一并跑起来并互相连接，使那个应用能完整的运作。

那现在当你把 Docker 整合到你的开发流程里面，有多个服务，你就要把每个服务设到一个 Docker 容器内跑，并把各容器连起来让他们能沟通起来。但其实要把一个应用容器化其实是有挺多东西要设置的。我们团队也手动设置过一个组件放在 Docker 容器跑，这可能就花上 三天时间吧。而现在是多个应用，并最后把它连起来。Fig 就是用来解决这个问题。

在一个 fig.yml (可理解为 Foreman 里的 Procfile 般) 里，你就设定此应用的不同组件，及他们如何连结，挺方便。以下是一个跑 Rails 应用的 设置。

``` yaml 一个 fig.yml 的范例
db:
  image: postgres:latest
  ports:
    - "5432"
web:
  build: .
  command: bundle exec rackup -p 3000
  volumes:
    - .:/myapp
  ports:
    - "3000:3000"
  links:
    - db
```

这里说明了有一个 `db` 及 `web` 的服务。`db` 的服务来自 Docker 官方镜像 `postgres:latest`, 听着 `5432` 端口。而 `web` 那边，则会从本目录的 Dockerfile 来 建立起来。最后走的指令是 `bundle exec rackup -p 3000`. 本目录 也分享到容器内的 `myapp` 目录内。最后就是把他与 `db` 容器连起来。

#### Fig 的另一利害之处

我认为 Fig 另一个利害的地方是他有一个 [scale 的指令](http://www.fig.sh/cli.html)，如下：

	fig scale web=2 worker=3

然后就可很容易的把应用扩展为多个单元 跑在不同的容器内。当然，如果真在生产环境跑一个应用，我们还要在前面设负载均衡器，及如何可把容器放在不同的物理服务器内。这些文档也没有详细说明。

留待下一步试验吧。

## Tutum － Docker 容器的云托管服务

<img class="center" src="{{root_url}}/images/posts/tutum.png" width="180px" title="Tutum － Docker 容器的云托管服务"></img>

Docker 生态已足够巨大到甚至乎有初创企业搞了个 Docker 容器的云托管服务。[Tutum](www.tutum.co) 就是赌在会越来越多人在 Docker 上作开发，以致到以 Docker 为单元的去部署生产应用。这样的话，一台虚拟机也嫌多，你需要的只是一个地方可跑你多个 Docker 容器。

而且他也有一些模版，可试范怎样跑起一个 MySQL 服务来，甚至怎样跑起一个 WordPress 来 (就是如何把一个 php 服务和 数据库服务跑并连起来)。

到底以 Docker 为单位的部署到生产环境上这概念，会被接受到那从程度，在国内的接受度又会怎样？这些都拭目以待。

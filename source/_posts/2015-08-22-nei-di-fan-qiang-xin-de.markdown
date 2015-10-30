---
layout: post
title: "内地翻墙心得"
date: 2015-08-22 15:21:40 +0800
comments: true
categories: [生活, 中国]
description: "内地使用 VPN"
published: false
author: Jimmy Chu
---

最近在中国内地出差了约两周。以前一直用着 Astrill 的 VPN (你懂的 :smile:)。但以前只是在内地待两三天，然后就回香港把所有要 sync 的东西都 sync 回去。有时很的不行，还可以说那些事情待两三天后回香港再做吧。

但这次不行。Astrill 我是用 Pro 的版本。他的 OpenWeb 连线好。但 OpenVPN 及 ShealthVPN 基本连不上。OpenWeb 是 http/https 代理。如果只是浏览网站那还可以，但我同时也要做开发。Ruby 项目的 gems 得从 rubygems.org 下载。当然有[淘宝镜像](http://ruby.taobao.org/)。但我还要运行 Vagrant 等 ruby 软件，它内部已设置从 rubygems.org 获取，而我又不想 hack 它的源代码。

所以逼使我一定要认真找个好 (即便是付费，我认为有价值的东西是值得付费的) 的 VPN 服务商。研究过后，发现有:

  * **[Express VPN](https://www.expressvpn.com/)**, 及
  * **[VyprVPN](https://www.goldenfrog.com/vyprvpn)**

这两个软件在我的 mac 上都运行得很好。每个我都试了 3 个小时左右，没怎么掉线。我网上查过原来就算你自行连到国外服务器如 `ssh -D` 等连接，头 10 分钟是好的，之后会越来越慢，然后就连不上。原来 GFW 内会对 数据包做 [深度检测](https://zh.wikipedia.org/wiki/深度包检测) (这事美国政府也有做) 及一些算法学习。当有很大可能性认为你在用 VPN 连接，他们便会开始掉失数据包。所以 VPN 商现在要再把数据打乱，再用 ssl/https 等协议，把自己 VPN 的属性收藏好 :smile:

VyprVPN 有个 **Chameleon** 模式正会打乱自己的元数据来防 DPI. 我想 Express VPN 也有用类似技术吧。反正他们俩的 连接都挺快，挺稳定。

下一步，很自然就是把自己的手机也翻上墙。以上两个服务商都有 iOS／Android apps. 但搞了一轮后：

  * VyprVPN 在我装有 iOS 6 的 iPhone 基本连不上。可能他们在 iOS 8 会更好吧。(我因为某些个人原因，不更新 iOS 操作系统)。
  * ExpressVPN 软件要 iOS 8 以上。
  * 所以我最后用了 **[VPN Express](https://itunes.apple.com/us/app/vpn-express/id375584677)**。然后连得挺好的。我试了 youtube 30 分钟，能同步回 dropbox 的档案，查到所有 gmail 邮箱。
  * ExpressVPN 在我 Android v4.4 上运行的挺好的。

所以最后，我的 VPN 服务商为：

  * mac 上用 Express VPN
  * iPhone (iOS v6) 上用 VPN Express
  * Android 上用 Express VPN

今天在 [Hacker News](https://news.ycombinator.com/item?id=10101469) 看到 [Shadowsocks 的作者要在 github 上删掉自己的代码](https://github.com/shadowsocks/shadowsocks-iOS/issues/124#issuecomment-133630294)。但愿有天我们能在国家中呼吸到更自由的空气。。。

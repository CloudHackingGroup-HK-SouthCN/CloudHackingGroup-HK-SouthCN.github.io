---
layout: post
title: "Getting into PaaS"
date: 2014-06-17 17:25:03 +0800
comments: true
categories: [PaaS, China, Market]
description: "A brief description on how I get into PaaS field, and why this field is getting more and more attention."
author: Jimmy Chu
---

### Couldn't find a good PaaS Solution in China

I faced a problem two months ago and it inspired me to learn more about cloud technology and specifically on the [PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service) layer. I had been using Heroku before and had a superb user experience about my deployment experience. Then I needed to deploy my app in mainland China, and was looking for similar platform that could save me from managing my app infrastructure.

The closest I found is [SAE](http://sae.sina.com.cn/), but it doesn't support Ruby on Rails yet. While [AVOS Cloud](https://cn.avoscloud.com/) and [Bmob](http://www.codenow.cn/) did get on the radar, they are more like development API to ease my development effort rather than hosting my app. So in fact, I found nothing that work as neatly as Heroku. I also found people suggest [deploying Dokku on Digital Ocean](http://goo.gl/vMEhcx) (or whatever your hosting provider is).

Then I found it is not surprising that nobody in China is building solutions in this domain. According to the [latest report from MIIT](http://goo.gl/Hik8yY)(page 16), PaaS, the category where Heroku is at, accounted for no more than 5% of the cloud market revenue, or about 220M RMB.

But this is a problem need to be solved. As my study goes, I soon switched my attention to US. People are also facing the same problem, and in fact more so. As IaaS services rise into prominence, with corporate sometimes preferring hybrid cloud to store their internal data, it is now in developer hands that they could easily access hundred of servers. Then comes the problem of standardizing these hundred of servers. EC2 allows administrators to specify user data, which acts as instance initialization scripts. This looks like a promising direction. Projects such as [Vagrant](http://www.vagrantup.com/), and [Chef](http://www.getchef.com/chef/) are building toward this direction and is mitigating part of the problem. But administrators still have to ssh to connect to servers. Also, using VM as the underlying technology has a large foot-print on the system resources.

So people are exploring other alternatives, and thus solution such as [Docker](http://www.docker.com/) and [OpenShift](https://www.openshift.com/) are born. They are exploring if they could reuse as much system resources as possible, while making application instances running securely and sandboxing their operations from each others. In fact, Jeff Lindsay had [a nice article](http://goo.gl/T3sJEr) summarizing his career progression, how he see the demand of PaaS in the market grow. He is now working on a new project, [Flynn](https://flynn.io/), which is bringing PaaS to a new level with a concept of distributed services repository. (He is also the one building [Dokku](http://goo.gl/s841B), a single-server Heroku!!)

As I am learning more about these exciting projects, it also make me rethink on what could happen to the PaaS direction in mainland China, and possibly I could do in this area.

I will cover more about the PaaS development in US and China, then I will zero in to what Docker is about in my upcoming articles.

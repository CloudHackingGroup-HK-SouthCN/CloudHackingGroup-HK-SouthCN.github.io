---
layout: post
title: "Climbing Over the GFW"
date: 2015-08-22 15:41:49 +0800
comments: true
categories: [living, China]
description: "Lesson learned on climbing over the GFW"
published: false
author: Jimmy Chu
---

I had a business trip in China in the past two weeks, and this put my current VPN provider, Astrill, into test.

In its Pro subscription, Astrill has the OpenWeb, OpenVPN, and StealthVPN mode. OpenWeb is an HTTP/HTTPS proxy, which works well but only for http connections (ie. web browsing and connecting to http destination).

This is fine most of the time, but I am a ruby developer. I run `bundle install`, and get ruby gems from https://rubygems.org/. (It is fine also if you own the ruby project and could change the gems download destination to [taobao mirror](http://ruby.taobao.org/), but not fine if you are running Vagrant and other ruby project you do not own.)

Astrill OpenVPN and StealthVPN simply do not work in China.

So, I researched and experimented a bit. I found:

  * **[Express VPN](https://www.expressvpn.com/)**, and
  * **[VyprVPN](https://www.goldenfrog.com/vyprvpn)**

These two services work well on my mac. I have tried each of them for more than 3 hours. I learn that some VPNs and even `ssh -D` would work for the first ten minutes in China, then it will start dropping data packets. This is because the GFW would do deep packet inspection (DPI) and use machine lerning to find heuristics to guess which TCP/UDP connection is likely being used as a VPN. When they think there is a high probability it is a VPN connection, they simply drop the packets. Now to bypass that, VPN tools need to obfuscate the data and hide itself from detection :smile:.

Btw, I learned that [DPI is also performed in US](https://en.wikipedia.org/wiki/Deep_packet_inspection)

VyprVPN has a **Chameleon** mode that would scramble metadata to prevent DPI, VPN blocking and throttling. ExpressVPN might also have similar technology, but didn't specifically mentioned in their website. ExpressVPN also work properly on my mac.

The next natural extension would be to have your mobile device climb over the firewall as well. Both service providers offer iOS / Android version app for that.

After experimenting:

  * VyprVPN doesn't connect very well on my iOS v6 (I know, it is prehistoric) iPhone. But you could try it out in your device with the latest iOS device
  * ExpressVPN requires at least iOS v8
  * So instead I tried **[VPN Express](https://itunes.apple.com/us/app/vpn-express/id375584677)** and work well on my iPhone. But I am not a heavy mobile device user. I checked that I could connect to Youtube for over 30 mins, sync all my Dropbox files, and check all my gmail accounts
  * ExpressVPN does work well on my Android v4.4 device

So my VPN service providers now:

  * Express VPN on my mac
  * VPN Express on my iPhone (iOS v6)
  * Express VPN on my android device

As a side note, today I also learn that [Shadowsocks code is removed by the author due to **regulation**](https://github.com/shadowsocks/shadowsocks-iOS/issues/124#issuecomment-133630294). ([Hacker news discussion](https://news.ycombinator.com/item?id=10101469)). Sad.

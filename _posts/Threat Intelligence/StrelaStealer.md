---
title: "Tracking StrelaStealer"
classes: wide
header:
  teaser: /assets/images/site-images/StrelaStealer.jpg
ribbon: blue
description: "Tracking StrelaStealer"
categories:
  - Threat Intelligence
toc: true
---

# Overview

Welcome to our blog where we delve into the latest intelligence gathering techniques from Twitter/X. Today, we begin by acquiring initial intelligence in the form of an IP address.


# Threat Intelligence

Recently, [SpiderLabs](https://x.com/SpiderLabs/status/1811782097679343725) shared an IP address associated with StrelaStealer: ```45[.]9.74.32```.

![](/assets/images/StrelaStealer/image1.jpg)

Our journey starts with this IP address. First, let's explore it using **Validin**:

![](/assets/images/StrelaStealer/image2.jpg)

Our investigation reveals 22 domains associated with this IP:

```
farpetor[.]shop
wordmover[.]shop
gloomcutter[.]shop
flameshamer[.]shop
warcracker[.]shop
wordstaker[.]shop
gloomstinger[.]shop
wordbracer[.]shop
glynnorin[.]shop
grike[.]shop
gunigunde[.]shop
zinhice[.]shop
gonnhild[.]shop
hild[.]shop
geriguna[.]shop
haelma[.]shop
gerlia[.]shop
marda[.]shop
gotrada[.]shop
gotlinde[.]shop
free[.]datacheap[.]ru
mugn[.]rolimpatr[.]org[.]uk
```
Let's dive deeper into one of these domains, starting with ```farpetor[.]shop```, to gather more information using **VirusTotal**:

![](/assets/images/StrelaStealer/image6.jpg)

**VirusTotal** shows only 19 domains associated with this IP

![](/assets/images/StrelaStealer/image7.jpg)

Let's see **WhoisLookup** details

![](/assets/images/StrelaStealer/image3.jpg)


This domain is registered from Ukraine

Created on 2023-12-07 00:00:00

Name server 1: NS1.SNEL.COM

Name server 2: NS2.SNEL.COM

Name server 3: NS3.SNEL.COM

Virus Total show that our IP has associated malwares files

![](/assets/images/StrelaStealer/image5.jpg)

```
0336c5a4d08cfc9c61309cda27f373fa89cc8789efa4c67decb5c5ebd11c0480
```
dropped 3 files

contacted 2 urls

contacted 2 domains

contacted 5 ips

![](/assets/images/StrelaStealer/image8.jpg)

They removed their services 

![](/assets/images/StrelaStealer/image10.jpg)

![](/assets/images/StrelaStealer/image11.jpg)


```free[.]datacheap[.]ru``` is from the resolved domains from our IP

Let's see what this site "datacheap[.]ru" is 

![](/assets/images/StrelaStealer/image9.jpg)

It's a russian servers hosting site.



# Domain Indicators

```
farpetor[.]shop
wordmover[.]shop
gloomcutter[.]shop
flameshamer[.]shop
warcracker[.]shop
wordstaker[.]shop
gloomstinger[.]shop
wordbracer[.]shop
glynnorin[.]shop
grike[.]shop
gunigunde[.]shop
zinhice[.]shop
gonnhild[.]shop
hild[.]shop
geriguna[.]shop
haelma[.]shop
gerlia[.]shop
marda[.]shop
gotrada[.]shop
gotlinde[.]shop
free[.]datacheap[.]ru
mugn[.]rolimpatr[.]org[.]uk
```




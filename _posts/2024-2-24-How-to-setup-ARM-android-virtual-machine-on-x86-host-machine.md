---
layout: post
title: "How to setup ARM android virtual machine on x86 host machine"
date: 2024-02-24
description: "Setup ARM android virtual machine on x86 host machine tutorial"
image:  '/images/AndroidARM.jpeg'
tags:   [android, tutorial]
---

# Why I wrote this?

After struggling for four consecutive days to set it up, I encountered numerous errors and realized that I was not the only one facing such problems. Therefore, I decided to write an article to help anyone who wants to run an Android ARM machine, so they don't waste their time trying to figure out the correct way.

# How to setup?

First we need to turn on hyper-V

![](/images/How to setup ARM android virtual machine on x86 host machine/image5.jpg)

![](/images/How to setup ARM android virtual machine on x86 host machine/image6.jpg)

If you don't have hyper-v you need to install this (also of this tutorial didn't work with you you need to install it)

```
https://github.com/google/android-emulator-hypervisor-driver/releases
```
Next we need to navigate to

```
https://stackoverflow.com/questions/37505709/how-do-i-download-the-android-sdk-without-downloading-android-studio/51429326#51429326
```
and download **SDK Installer_r24.4.1** 

![](/images/How to setup ARM android virtual machine on x86 host machine/image1.jpg)

# Which android version to install?

First open **SDK Manager**

I tried many versions of ARM android images and the only version worked is **7.1.1 API 25**

![](/images/How to setup ARM android virtual machine on x86 host machine/image3.jpg)

You need to install these also

![](/images/How to setup ARM android virtual machine on x86 host machine/image2.jpg)

The intel HAXM is required to run this avd HAXM is not installed error message can be solved by installing **intel x86 emulator accelerator**:

![](/images/How to setup ARM android virtual machine on x86 host machine/image4.jpg)

install this also
```
https://github.com/intel/haxm
```

Now open **AVD Manager**

![](/images/How to setup ARM android virtual machine on x86 host machine/image7.jpg)

In my case if I choosed a device rather than **Nexus 4** or **WXGA Tablet** the vm won't work. (I really don't know why)

Also make the internal storage 200 - 500 mb if the machine didn't open

And check **use host gpu** option

Now let's start the machine

![](/images/How to setup ARM android virtual machine on x86 host machine/image8.jpg)

![](/images/How to setup ARM android virtual machine on x86 host machine/image9.jpg)

It worked!

if you faced any errors feel free to contact me

Thanks For Reading :)

---
title: "Obfuscated Challenge Walkthrough"
classes: wide
header:
  teaser: /assets/images/site-images/Obfuscated.jpg
ribbon: Red
description: "Malware Analysis Challenge from Cyber Defenders - Difficulty: Medium"
categories:
  - Malware Analysis
toc: true


---

# Obfuscated Challenge Walkthrough

Category: Malware Analysis

Difficulty: Medium

The challenge is from http://cyberdefenders.org

Note: According to Cyber Defenders' rules I replaced some letters of the flags with "#".

## Scenario

During your shift as a SOC analyst, the enterprise EDR alerted a suspicious behavior from an end-user machine. The user indicated that he received a recent email with a DOC file from an unknown sender and passed the document for you to analyze.

```
Challenge Link
https://cyberdefenders.org/blueteam-ctf-challenges/76#nav-questions
```

## 1st Question

What is the sha256 hash of the doc file?

answer: It's an easy question, I'll open the sample in **pestudio**

![](/assets/images/Obfuscated/1.jpg)

## 2nd Question

Multiple streams contain macros in this document. Provide the number of lowest one.

answer: I'll use **Oledump** to see the streams
```
oledump.py 49b367ac261a722a7c2bbbc328c32545 -v
```

![](/assets/images/Obfuscated/2.jpg)

## 3rd Question

What is the decryption key of the obfuscated code?

answer: I'll use **Olevba** to see the macro code

![](/assets/images/Obfuscated/3.jpg)

This string is passed to the dropped file **####tools.js** so I thought that this string is the key, and It is.

## 4th Question

What is the name of the dropped file?

Let's examine the macro code

![](/assets/images/Obfuscated/4.jpg)

answer: The file name is "####tools.js"

## 5th Question

This script uses what language?

answer: After examining the dropped file, we can say that the script is written in **##va script**.

## 6th Question

What is the name of the variable that is assigned the command-line arguments?

answer: When I took a look in the file I saw that **wv##** is the variable that we are looking for.

![](/assets/images/Obfuscated/6.jpg)

## 7th Question

How many command-line arguments does this script expect?

answer: In the second line, we see that **wv##** is an array of command line arguments. In the next line, we can see the numeric value that is used as an index refers to the command line argument that the script will use.

## 8th Question

What instruction is executed if this script encounters an error?

answer: If there is any error occurred the script will close itself by using **W###ipt.Quit()** instruction.

![](/assets/images/Obfuscated/8.jpg)

## 9th Question

What function returns the next stage of code (i.e. the first round of obfuscated code)?

answer: The function we are looking for is the function which has large string value.

![](/assets/images/Obfuscated/9.jpg)

## 10th Question

The function **LXv5** is an important function, what variable is assigned a key string value in determining what this function does?

answer: **LU##** is assigned a key string value used for base64 decoding.

![](/assets/images/Obfuscated/10.jpg)

## 11th Question

What encoding scheme is this function responsible for decoding?

answer: The key and padding in the end of the string say that the string is encoded by **ba##64**

![](/assets/images/Obfuscated/11-1.jpg)
![](/assets/images/Obfuscated/11-2.jpg)

## 12th Question

In the function CpPT, the first two for loops are responsible for what important part of this function?

answer: I wasn't sure if it **rc4** or not so I searched in google and now I'm sure that it's rc4 and the first two loops are responsible for **Key-###eduling algorithm**

![](/assets/images/Obfuscated/12.jpg)

## 13th Question

The function CpPT requires two arguments, where does the value of the first argument come from?

answer: After tracing the first argument we found that the value comes from **wv##** variable which is assigned the **com####-line argument**.

![](/assets/images/Obfuscated/13-1.jpg)
![](/assets/images/Obfuscated/13-2.jpg)

## 14th Question

For the function CpPT, what does the first argument represent?

answer: After doing some search for **Rc4** or if you are familiar with **Rc4** you would know that the first argument is the key that used for ##cryption

![](/assets/images/Obfuscated/14.jpg)

## 15th Question

What encryption algorithm does the function CpPT implement in this script?

answer: Rc#

## 16th Question

What function is responsible for executing the deobfuscated code?

answer: If we go to the first lines in the script we can see that the deobfuscated code is executed by **ev##** function.

![](/assets/images/Obfuscated/16.jpg)

## 17th Question

What Windows Script Host program can be used to execute this script in command-line mode?

answer: I searched google to know the answer

![](/assets/images/Obfuscated/17.jpg)

## 18th Question

What is the name of the first function defined in the deobfuscated code?

answer: After decoding and decrypting the script using CyberChef I got this code

![](/assets/images/Obfuscated/18.jpg)

The first function is **Us##**

I hope you enjoyed my write-up.

---
title: 'Greedy'
pubDate: 2024-09-11
description: 'Greedy'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Greedy
猜最佳解會長怎樣然後直接構造

## 找零錢問題
有一個國家有面值為 1, 5, 10, 50, 100, 500, 1000, 2000 ，求找出 $x$ 元須要的最少硬幣數量

## [不相交線段](https://cses.fi/problemset/task/1629)
給 $N$ 條數線上的線段，每條有 $(l_i, r_i)$ 。求從 $N$ 條線段中選最多條使得他們不相交

一種證明方式是如果有一組解跟你不一樣，衲衣定可以把它對成你構出來的解。

## 股票買賣問題
剛開始你沒有股票，給 $N$ 天股市的價格 $p_1 \dots p_n$ ，且你最多同時持有一張股票，求你的最大獲利 (當天可以同時買跟賣)。

## [maximum subarray sum](https://cses.fi/problemset/task/1643)
蓋完前綴和之後枚舉右界之後 - 前綴 min

一個常見的證明方法是證相鄰兩個比大小，然後根據 bubble sort 證明我們的排序是對的

[外送餐點](https://oj.ntucpc.org/problems/730)

練習題
- 基本上到 [CF](https://codeforces.com/) 戳[難度 800 ~ 1100](https://codeforces.com/problemset?tags=800-1100) 很容易戳到 greedy ，但是會偏梗
- [最大平均區間](https://oj.ntucpc.org/problems/718)
- [TIOJ 1861](https://tioj.ck.tp.edu.tw/problems/1861)
- [CF 1509B](https://codeforces.com/contest/1509)
- [TIOJ 1337 隕石](https://tioj.ck.tp.edu.tw/problems/1337)

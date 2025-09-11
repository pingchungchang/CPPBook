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
基本上就是每次選最佳的策略，很難好好講清楚他的思想是啥。

## 找零錢問題
有一個國家有面值為 1, 5, 10, 50, 100, 500, 1000, 2000 ，求找出 $x$ 元須要的最少硬幣數量

## 不相交線段
給 $N$ 條數線上的線段，每條有 $(l_i, r_i)$ 。求從 $N$ 條線段中選最多條使得他們不相交

## 股票買賣問題
剛開始你沒有股票，給 $N$ 天股市的價格 $p_1 \dots p_n$ ，且你最多同時持有一張股票，求你的最大獲利 (當天可以同時買跟賣)。

## maximum subarray sum
蓋完前綴和之後枚舉右界之後 - 前綴 min

基本上可以大概感性理解一下正確性，證明通常都有點麻煩

練習題
- [CF 1509B](https://codeforces.com/contest/1509)
- [TIOJ 1337 隕石](https://tioj.ck.tp.edu.tw/problems/1337)
- [TIOJ 1861](https://tioj.ck.tp.edu.tw/problems/1861)

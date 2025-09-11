---
title: 'DC'
pubDate: 2024-09-11
description: 'DC'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Divide and Conquer (分治)

## Merge Sort
基本上講過了

## [逆序數對](https://tioj.ck.tp.edu.tw/problems/1080)
求有多少組 $(i, j)$ $i<j$ && $a_i > a_j$
- 把陣列切兩半
- 兩半先分別算好數量之後排好序
- 把兩半排序好的陣列 merge ，同時算答案

## [最近點對](https://tioj.sprout.tw/problems/507)
- 照 $x$ 座標排序好之後分治，並紀錄一個 global min
- merge 的時候，只要考慮距離 $x$ $d$ 以內的人就好，可以每個人的選項只有常數個

## [OJDL 7162](https://ojdl.ck.tp.edu.tw/problem/7162)
就 ... 最常見的分治套路題

基本上分治的題目都超級難，所以現在大概教這些就夠用了

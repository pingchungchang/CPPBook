---
title: 'Week 1'
pubDate: 2024-08-29
description: 'Week 1'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Week 1

## 基本 C++ 語法
##  array, vector

# 題目
- [x] [篩質數](https://oj.ntucpc.org/problems/550)
<details><summary> 提示 </summary>
開一個長度為 N 的 `vector<bool> not_prime`，然後跑

```cpp
not_prime[1] = 0;
for(int i = 2;i<=N;i++) {
    for(int j = i+i;j<=N;j+=i) {
        not_prime[j] = false;
    }
}
```

想想看為何這樣是 $O(N log N)$ (這題 $O(N log N )$ 會過)
</details>

- [內積練習](https://oj.ntucpc.org/problems/548)
- [x] [合併單調序列](https://oj.ntucpc.org/problems/549)
- [骰子](https://oj.ntucpc.org/problems/554)
- [最大和](https://oj.ntucpc.org/problems/579)
- [電神帆哥的煩惱](https://oj.ntucpc.org/problems/533) 
（這題有兩個陷阱：首先要用 unsigned long long 存數字，再來是空間複雜度 $O(N)$ 的演算法不會過，要 $O(N)$ 時間，$O(1)$ 空間）
- [x] [一元二次方程式](https://zerojudge.tw/ShowProblem?problemid=a006)
- [GCD](https://zerojudge.tw/ShowProblem?problemid=d255)
    - 預處理
    - 或如果會輾轉鄉除法可以直接砸
- [ABC 340 B](https://atcoder.jp/contests/abc340/tasks/abc340_b)
- [ABC 142 C](https://atcoder.jp/contests/abc142/tasks/abc142_c)
- [ABC 135 B](https://atcoder.jp/contests/abc135/tasks/abc135_b)
    - 可以試試看寫 `bool is_sorted(vector<int> v)` 的 function，程式碼應該會比較好讀
- [cses](https://cses.fi/problemset/list/) 裡面 introductory problems 到 trailing zeros 前的問題
    - [x] [Missing Number](https://cses.fi/problemset/task/1083)


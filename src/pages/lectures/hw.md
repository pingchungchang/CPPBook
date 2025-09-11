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

# Week 2
## Iterator, Reference
## Sorting
注意題目不一定跟 lower_bound, sorting 有關
- [x] <a href="https://cses.fi/problemset/task/1621"> CSES Distince Numbers </a>
- [x] <a href="https://cses.fi/problemset/task/1084"> CSES Apartments </a>
- [x] <a href="https://cses.fi/problemset/task/1090"> CSES Ferris Wheel</a>
- [x] [CSES Sum of Two Values](https://cses.fi/problemset/task/1640)
- [x] [CSES Missing Coin Sum](https://cses.fi/problemset/task/2183)
- [CF 299A](https://codeforces.com/problemset/problem/299/A)
- [CF 1946A](https://codeforces.com/problemset/problem/1946/A)
- [CF 1975A](https://codeforces.com/problemset/problem/1975/A)
- [CF 1975B](https://codeforces.com/contest/1975/problem/B)
- [CSA Rectangle Partition](https://csacademy.com/contest/archive/task/rectangle-partition/)
    - 注意只要數那 (N+1)*(M+1) 個就好，不是要對所有形成的長方形都問一次
- [ABC 362B](https://atcoder.jp/contests/abc362/tasks/abc362_b)
- [ARC 154D](https://atcoder.jp/contests/arc154/tasks/arc154_d)
    - 這題是非常難想到的排序題，有興趣可以想想看

# Week 3
- [x] [CSES Static Range Sum Queries](https://cses.fi/problemset/task/1646) 前綴和練習題
- [x] [CSES Sum of Two Values](https://cses.fi/problemset/task/1640) (現在有 STL 應該可以做了)
- [x] [CSES Concert Tickets](https://cses.fi/problemset/task/1091) (set 基本應用)
- [x] [CSES Towers](https://cses.fi/problemset/task/1073) (set 基本應用)
- [x] [CSES Array Division](https://cses.fi/problemset/task/1085)
    <details><summary> 提示 </summary>
    假設我要求每一段的總和要 <= x ，我最少要切成幾段？

    要求每一段總和越小，要切的段數會越多

    所以就二分搜答案，如果需要的最少段數 <= k 則 r = mid ，否則 l = mid
    </details>

- [x] [CSES Subarray Sums II](https://cses.fi/problemset/task/1661)
- [x] [CSES Maximum Subarray Sum II](https://cses.fi/problemset/task/1644)
- [CSES Distinct Values Subarrays II](https://cses.fi/problemset/task/2428) (set 應用)
- [CSES Nearest Smaller Values](https://cses.fi/problemset/task/1645) (作法不少，可以用 stack 做 $O(N)$ 也可以大到小排好之後用 set 做 $O(N \log N)$)
- [CSES Forest Queries](https://cses.fi/problemset/task/1652) 二維的前綴和練習題

以下是一些比較隨機抓出來的題目，應該比較簡單
- [CF 2072A](https://codeforces.com/contest/2072/problem/A)
- [ABC 407A](https://atcoder.jp/contests/abc407/tasks/abc407_a)
- [ABC 407B](https://atcoder.jp/contests/abc407/tasks/abc407_b) 輸出浮點數：
```cpp
float x; // or double x
cout << fixed << setprecision(20) << x; // 輸出 20 位數小數
```
- [ABC 295C](https://atcoder.jp/contests/abc295/tasks/abc295_c)
- [ABC 235C](https://atcoder.jp/contests/abc235/tasks/abc235_c) 可以粗暴的開 `map<int, vector<int>>` 做

---
title: 'DP'
pubDate: 2024-09-11
description: 'DP'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Dynamic Programming (動態規劃)
最簡單的理解方式是在算遞迴的時候，用一個陣列/map 把以前算過的東西記下來避免重複計算

## 遞迴 vs DP
```cpp
int f(int x) {
    if(x == 0 || x == 1) return 1;
    else return f(x-1) + f(x-2);
}
cout << f(N);
```
複雜度 $O(\phi^N)$
```cpp
vector<int> done(N+1);
fill(done.begin(), done.end(), -1);
int f(int x) {
    if (done[x] != -1) return done[x];
    done[x] = f(x-1) + f(x-2);
    return done[x];
}
cout << f(N);
```
複雜度 $O(N)$ (為啥?)

然後會發現有更好寫的寫法
```cpp
vector<int> dp(N+1);
dp[0] = dp[1] = 1;
for(int i = 2;i<=N;i++) dp[i] = dp[i-1] + dp[i-2];
cout << dp[N];
```

## DP 的精神
把算過的地方存起來，把 top-down 改成 bottom-up

## [背包問題](https://cses.fi/problemset/task/1634)
定義 $f(i, j)$ 為用前 $i$ 種硬幣湊出 $j$ 元的方法數，那 <br>
$f(i, j) = min(f(i-1, j), f(i, j-a_i))$
所以就變成
```cpp
int dp[N+1][W+1];
dp[0][0] = 0;
for(auto &i:dp) for(auto &j:i) j = INT_MAX/2;
for(int i = 1;i<=N;i++) {
    for(int j = 0;j<=W;j++) {
        dp[i][j] = dp[i-1][j];
        if (j >= a[i]) {
            dp[i][j] = min(dp[i][j], dp[i][j-a[i]]);
        }
    }
}
```
然後會發現根本不用開 $O(NW)$ 的陣列
```cpp
int dp[W+1];
for(auto &i:dp) i = INT_MAX / 2;
for(int i = 1;i<=N;i++) {
    for(int j = 0;j<=W;j++) {
        if (j>=a[i]) dp[j] = min(dp[j], dp[j-a[i]]);
    }
}
```
這個技巧叫做滾動 DP

## LCS

## LIS

## DP and DAG

基本上會希望 cses 的 DP section **一定**要寫完

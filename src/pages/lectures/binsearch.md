---
title: 'Binsearch'
pubDate: 2024-08-29
description: 'Binsearch'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Binary Search
因為有點東西所以獨立出來講

## 每個人都會講的終極密碼
- 出題者在心中想一個 1 ~ 100 之間的數字
- 參賽者每次猜一個數字，出題者會告訴他心中的數字比猜的大還是小還是猜到了
- 參賽者要怎麼猜才比較容易猜出來

## Code
```cpp
int binsearch(int l, int r) {
    while(l != r) {
        int mid = (l+r) / 2;
        if (guess(mid) == "=") {
            return mid;
        }
        else if (guess(mid) == ">") {
            r = mid - 1;
        }
        else {
            l = mid;
        }
    }
}
```

## 變形
### 三分搜/斜率二分搜/黃金比例搜
- 今天如果你的 f(x) 滿足凸性(f(x+1)-f(x) >= f(x)-f(x-1)) ，並且你想要找函數的最低點可以用
```cpp
while(l+1 < r) {
    int ml = int((l*2+r) / 3.0);
    int mr = int((l+r*2) / 3.0);
    if (f(ml) < f(mr)) r = mr;
    else l = ml;
}
```


## 例子
- 找一個排序好的陣列中第一個比 x 大的數字
- f(x) 是單調遞增的，但是很難直接帶公式算 f(x) 的時候

## 題目
[leetcode 704](https://leetcode.com/problems/binary-search/description/)
[ABC231 C](https://atcoder.jp/contests/abc231/tasks/abc231_c)
[CF 1201 C](https://codeforces.com/contest/1201/problem/C)
[CSES Array Division](https://cses.fi/problemset/task/1085)
[CSES Factory Machines](https://cses.fi/problemset/task/1620)

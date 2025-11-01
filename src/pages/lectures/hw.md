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
## STL
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

# Week 4
## Greedy
- [最大平均區間](https://oj.ntucpc.org/problems/718)
    <details><summary> 提示 </summary>
        可以證明長度一定不大於 5
    </details>
- [CSES Stick Divisions](https://cses.fi/problemset/task/1161)
    <details><summary> 提示 </summary>
        倒著做回來，變成要把 N 段合併成一根大木棒，然後每次合併的代價是合併後的長度和。<br>
    每次挑最短的兩根合併 -> 可以用 priority_queue 實作
    </details>
## DP
- [Atcoder Frog 1](https://atcoder.jp/contests/dp/tasks/dp_a)
    <details><summary> 提示 </summary>
        定義 f(i) 跳到第 i 格的最低 cost，那 f(i) = min(f(i-1)+|h[i]-h[i-1]|, f(i-2)+|h[i]-h[i-2]|$
    </details>
- [Atcoder Frog 2](https://atcoder.jp/contests/dp/tasks/dp_b): 應該跟上一題一樣，但是可能要 bottom-up 才會過
- [LCS](https://atcoder.jp/contests/dp/tasks/dp_f)
- [CSES Building Roads](https://cses.fi/problemset/task/1666)
如果還要寫更多題目的話可以去刷 CSES 的 DP

# Week 5
## Shortest Path
- [純粹是一題簡單題](https://codeforces.com/contest/20/problem/A)
- [最短路](https://atcoder.jp/contests/abc340/tasks/abc340_d)
- [CSES Shortest Routes II](https://cses.fi/problemset/task/1672)
- [CSES Flight Discount](https://cses.fi/problemset/task/1195)
- [需要非常好好處理的 BFS](https://atcoder.jp/contests/abc170/tasks/abc170_f)

下面兩題很有教育意義但很難（希望我下次上課記得講）
- [值得思考的題目](https://tioj.ck.tp.edu.tw/problems/2204)
- [另一個好題](https://tioj.ck.tp.edu.tw/problems/2151)

# Week 6
### Greedy
- [特調米漿優惠券](https://oj.ntucpc.org/problems/33)
- [侯女神與三的倍數](https://oj.ntucpc.org/problems/21)
- [切蛋糕](https://oj.ntucpc.org/problems/11)
- [CF 1982C](https://codeforces.com/problemset/problem/1982/C)
- [ABC 287C](https://atcoder.jp/contests/abc287/tasks/abc287_d)
### DP
- [別離太遠](https://oj.ntucpc.org/problems/94)
- [別離太近](https://oj.ntucpc.org/problems/95)
### Graph & Shortest Path
- [ABC 287C](https://atcoder.jp/contests/abc287/tasks/abc287_c)
- [ABC 404C](https://atcoder.jp/contests/abc404/tasks/abc404_c)
- [ABC 305E](https://atcoder.jp/contests/abc305/tasks/abc305_e)
- [ABC 317E](https://atcoder.jp/contests/abc317/tasks/abc317_e)
- [ABC 237E](https://atcoder.jp/contests/abc237/tasks/abc237_e) ，這題的建模有點有趣，可以參考看看物理位能的想法
### Misc (簡單題或者不用演算法的題目）
- [靈魂繪手](https://oj.ntucpc.org/problems/138)
- [法語題](https://oj.ntucpc.org/problems/117)
- [ABC 287B](https://atcoder.jp/contests/abc287/tasks/abc287_b)

# Week 7
- [並查集模板題](https://codeforces.com/edu/course/2/lesson/7/1/practice/contest/289390/problem/A)
- [並查集維護極值](https://codeforces.com/edu/course/2/lesson/7/1/practice/contest/289390/problem/B)
    <details><summary> 提示 </summary> 
        union(a,b) 時，我們可以用一個變數 sz 紀錄合併後的大小，當然也可以用一個變數 mn 紀錄最小值，合併時把新的根紀錄 mn[a] = min(mn[a], mn[b]) 就好了
    </details>
- [CSES Road Preparation](https://cses.fi/problemset/task/1675)
- [CF 385A](https://codeforces.com/contest/744/problem/A) 有不用並查集的作法
- [CF 25D](https://codeforces.com/contest/25/problem/D) 這題比較難，可以跳過
### DP
- [Vacation](https://atcoder.jp/contests/dp/tasks/dp_c)
- [Knapsack](https://atcoder.jp/contests/dp/tasks/dp_d)
### 底下是一些的簡單題
- [ABC 419A](https://atcoder.jp/contests/abc419/tasks/abc419_a)
- [ABC 419B](https://atcoder.jp/contests/abc419/tasks/abc419_b)
- [ABC 419C](https://atcoder.jp/contests/abc419/tasks/abc419_c)
### 下次可以帶到的雜事
- [ABC 419D](https://atcoder.jp/contests/abc419/tasks/abc419_d)

# Week 8
## 基本
- [樹上匹配](https://cses.fi/problemset/task/1130)
- [拓樸排序](https://cses.fi/problemset/task/1679)
- [GCD](https://tioj.ck.tp.edu.tw/problems/1700)
- [質數篩](https://oj.ntucpc.org/problems/550)
## 練習題
- [高中數學](https://atcoder.jp/contests/abc178/tasks/abc178_c)
- [多一點東西的質數篩](https://tioj.ck.tp.edu.tw/problems/1036)
- [想一下的拓撲排序](https://codeforces.com/contest/510/problem/C)
- [DAG DP](https://cses.fi/problemset/task/1680)

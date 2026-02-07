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

# Week 9
## 練習
- [ABC 410 A-D](https://atcoder.jp/contests/abc410/tasks)
    - 到 E 應該都是教過的內容
- [ABC 429 A-D](https://atcoder.jp/contests/abc429/tasks)
    - 到 E 應該都是教過的內容
- [ABC 430 A-D](https://atcoder.jp/contests/abc430/tasks)
# Week 10
## 線段樹
- [高斯消](https://tioj.ck.tp.edu.tw/problems/2170)
- [CF EDU](https://codeforces.com/edu/course/2/lesson/4/1/practice)
- [CF EDU-2](https://codeforces.com/edu/course/2/lesson/4/2/practice)
## 隨便戳一些簡單題
- [ABC 372 A-D](https://atcoder.jp/contests/abc372/tasks)
    - 到 E 應該都是教過的內容
- [ABC 388 A-D](https://atcoder.jp/contests/abc388/tasks)
    - 到 E 應該都是教過的內容

# Week 11
- [ABC 344 E](https://atcoder.jp/contests/abc344/tasks/abc344_e)
- [ABC 328 A-E](https://atcoder.jp/contests/abc328/tasks)
- [ABC 324](https://atcoder.jp/contests/abc324/tasks)

# Week 12
## 上課的技巧
- 分數規劃：[化學100題](https://ojdl.ck.tp.edu.tw/contest/20/problem/E)
    - 這題複雜度是 $O(n \times \epsilon)$ ，可能時限有點緊，要通過的話要會用 `std::nth_element`
- [CSA Growing Trees](https://csacademy.com/contest/archive/task/growing-trees) 
    <details><summary> 提示 </summary>
        考慮樹上的每一條路徑都會是一個一次函數
    </details>
- [位元 DP](https://cses.fi/problemset/task/1690)
- [另一題位元 DP](https://atcoder.jp/contests/abc215/tasks/abc215_e)

## DP & DS
- [CSES Money Sums](https://cses.fi/problemset/task/1745/)
- [CSES Removal Game](https://cses.fi/problemset/task/1097)
## 下週應該會講的題目
- [CSES Increasing Subsequence II](https://cses.fi/problemset/task/1748/)

# Week 13
資訊之芽的 pretest 可以寫一下
- [TIOJ 2203](https://tioj.ck.tp.edu.tw/problems/2203)
- [TIOJ 2208](https://tioj.ck.tp.edu.tw/problems/2208)
- [TIOJ 2314](https://tioj.ck.tp.edu.tw/problems/2314)
- [TIOJ 2162](https://tioj.ck.tp.edu.tw/problems/2162)
- [TIOJ 2167](https://tioj.ck.tp.edu.tw/problems/2167)

# Week14
- [CSES Increasing Subsequence II](https://cses.fi/problemset/task/1748/)
- [ABC DP Contest P](https://atcoder.jp/contests/dp/tasks/dp_p)
- [CSES Company Queries I](https://cses.fi/problemset/task/1687)
- [CSES Company Queries II](https://cses.fi/problemset/task/1688)
- [CSES Distance Queries](https://cses.fi/problemset/task/1135)
- [CSES MST Edge Check](https://cses.fi/problemset/task/3407)
- [ABC 361 E](https://atcoder.jp/contests/abc361/tasks/abc361_e)
    <details><summary> 提示 </summary>
        想想看樹上哪些邊只要走一次，哪些邊會需要走兩次
    </details>
- [ABC 368 D](https://atcoder.jp/contests/abc368/tasks/abc368_d)
- [CF 1057 A](https://codeforces.com/problemset/problem/1057/A): 給一棵樹，輸出從 1 號走到 $n$ 號的路徑
- [ABC 070 D](https://atcoder.jp/contests/abc070/tasks/abc070_d)
    <details><summary> 提示 </summary>
        dis(s -> k -> t) = dis(s -> k) + dis(k -> t) = dis(k -> s) + dis(k -> t) 
    </details>

# Week 15
## 複習：
- [CSA Max Score Tree](https://csacademy.com/contest/archive/task/max-score-tree/)
- [ABC 294F](https://atcoder.jp/contests/abc294/tasks/abc294_f)
- [ABC 355F](https://atcoder.jp/contests/abc355/tasks/abc355_f)
- [CSA Max Or Subarray](https://csacademy.com/contest/archive/task/max-or-subarray/statement/)
- [CSA Dominant Free Sets](https://csacademy.com/contest/archive/task/dominant-free-sets/statement/)
- [CSA Connect the Graph](https://csacademy.com/contest/archive/task/connect-the-graph/)
- [NewWorld Online](https://oj.ntucpc.org/problems/107)
## 樹壓平
- [ABC 202E](https://atcoder.jp/contests/abc202/tasks/abc202_e)
- [ABC 294G](https://atcoder.jp/contests/abc294/tasks/abc294_g)
- [奇怪的樹上操作](https://oj.ntucpc.org/problems/27)
- [迷宮設置](https://oj.ntucpc.org/problems/104)
- [USACO Snow Cow](https://usaco.org/index.php?page=viewproblem2&cpid=973#)
- [CF 600E](https://codeforces.com/contest/600/problem/E)
## Connected Components
- [芽芽逛大街](https://tioj.sprout.tw/problems/477/)
- [謠言問題](https://tioj.sprout.tw/problems/164/)
- [平衡的技能樹](https://tioj.sprout.tw//problems/475/)
- [TIOJ 1683](https://tioj.ck.tp.edu.tw/problems/1683)

# Week 16
## 複習
- [ABC 337G](https://atcoder.jp/contests/abc337/tasks/abc337_g)
- [ABC 334G](https://atcoder.jp/contests/abc334/tasks/abc334_g)

## 計算幾何-基礎
- [向左轉向右轉](https://tioj.sprout.tw//problems/355/)
- [CSES Point in Polygon](https://cses.fi/problemset/task/2192)
- [TIOJ 1205](https://tioj.ck.tp.edu.tw/problems/1205)
- [CSES Convex Hull](https://cses.fi/problemset/task/2195)
- [數三角形](https://tioj.sprout.tw/problems/502/)
- [最遠點對](https://tioj.ck.tp.edu.tw/problems/1105)

# Week 17
## 計算幾何應用
- [TIOJ 2396](https://tioj.ck.tp.edu.tw/problems/2396)
- [OJDL 7201](https://ojdl.ck.tp.edu.tw/problem/7201)
- [OJDL 7203](https://ojdl.ck.tp.edu.tw/problem/7203)
## Hashing
- [PCC 字串](https://ojdl.ck.tp.edu.tw/problem/7174)
- [CSES Palindrome Queries](https://cses.fi/problemset/task/2420)
- [CSAcadamy Similar Words](https://csacademy.com/contest/archive/task/similar_words/statement/)
## KMP
- [CSES Finding Periods](https://cses.fi/problemset/task/1733)
## 目前教過範圍的雜題
- [TIOJ 2390](https://tioj.ck.tp.edu.tw/problems/2390)
- [TIOJ 2392](https://tioj.ck.tp.edu.tw/problems/2392)
- [TIOJ 2397](https://tioj.ck.tp.edu.tw/problems/2397)
- [TIOJ 1892](https://tioj.ck.tp.edu.tw/problems/1892)
- [TIOJ 1907](https://tioj.ck.tp.edu.tw/problems/1907)
- [TIOJ 1337](https://tioj.ck.tp.edu.tw/problems/1337)
如果題目不夠就去 codeforces 戳 800 ~ 1700 的題目練習，風格會跟我們教過的差很多但是要會做

這裡有超過一百題了耶，感覺偏少？

## Virtual
virtual 的頻率大概最多不要超過每週三場，重要的應該要是檢討跟補題

我發現這裡的題目超過一百題了，後面寫題會越來越順的

檢討的部份可能有些題目我也不會做，需要花時間想
- [COCI 2019 R1](https://oj.uz/problems/source/coci20182019r1)
- [COCI 2019 R2](https://oj.uz/problems/source/coci20182019r2)
- [JOI Final 2017](https://oj.uz/problems/source/joifinal20162017)
- [SNOI 2017](https://oj.uz/problems/source/sgnoi2017)

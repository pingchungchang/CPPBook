---
title: 'Tree(1)'
pubDate: 2024-09-19
description: 'Tree(1)'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# MST & Tree(樹)
以防萬一忘記再貼一次定義們
- 樹(tree)：
    - 連通
    - 只有 $N-1$ 條邊
    - 任兩個點之間的最短路徑都存在且唯一
    - 沒有環
    - 以上四個只要成立其中兩個那剩下的都會對

## 名詞定義
- 有根/無根：是否有根節點
- 父節點：該節點往跟走一步會到的節點
- 祖先節點：父節點 $^ k$
- 子節點：鄰居中不是父節點的人們
- 葉節點：沒有子節點的人們
- 子孫：子節點 $^k$
- 子樹：子孫所形成的樹
- 深度：跟節點走到該節點要幾步

## Mimimum Spanning Tree (MST, 最小生成樹)
給一張連通邊權非負的圖，求選一些邊使得邊權總和最小，並且只留下選的邊圖會連通

一些觀察：
- 選的那些邊一定不會有環(如果有的話不如砍掉一條)
- 選的邊要讓圖連通

那不就是棵樹嗎？

### Kruskral
想法如下：
```py
把所有邊按照邊權小到大排好
for (u, v, w) in edges:
    if 加完 (u, v) 之後會形成環：
        不加入 (u, v)
    else:
        加入 (u, v)
```
問題會出現在要怎麼檢查有沒有環

觀察到，如果原圖沒有環，但是加上 $(u, v)$ 之後有環，那再加邊之前 $(u, v)$ 是連通的，於是問題變成要怎麼查 $(u, v)$ 是否連通

暴力？複雜度變成 $O(MN+M\log N)$

[並查集](/CPPBook/lectures/dsu)

```cpp
sort(edges.begin(), edges.end(), [](E a, E b) {
    return a.w < b.w;
});
DSU dsu(N);
for(auto &e: edges) {
    if (dsu.find(e.a) != dsu.find(e.b)) {
        choose(e);
    }
}
```
複雜度？

### Prim
基本上很像 Dijkstra 
```py
選一個點當作起點，維護一個集合 S 跟一個陣列 dis
初始化時將所有點放入 S ，並設定 dis[i] = inf
dis[起點] 設為 0
for (int i = 0; i < N; i++) {
    找出一個 dis[u] 最小的 u 
    選擇當時連向 u 的邊
    S.erase(u)
    for (auto [v, w]: G[u]) {
        dis[v] = min(dis[v], w);
    }
}
```
複雜度？

### Boruvka
需要保證邊權相異才可以使用（如果有相同邊權那就隨便給個大小順序）
```py
對每個點找連出去邊權最小的邊
選擇這些邊（因為邊權都不相等所以沒有環）
把形成連通塊的節點縮成一個節點之後回到第一步
```
可以證明最多跑 $O(\log N)$ 次第一步就會結束，因為每次連通塊數量至少砍半

因此好好寫的話複雜度可以到 $O(M \log M)$

### MST 的性質
- 需要連通的邊權總和最小
- 任何兩點 $u, v$ 從 $u$ 走到 $v$ 經過的最大邊權最小值會跟 MST 上一樣

### 例題
- [CSES Road Reparation](https://cses.fi/problemset/task/1675)
- [CF 472D](https://codeforces.com/contest/472/problem/D)

## DFS
DFS 超級適合拿來遍歷一棵樹，作法如下：

```cpp
vector<int> tree[mxn];

void dfs(int now, int par) {
    for(auto nxt: tree[now]) {
        if (nxt == par) continue;
        dfs(nxt, now);
    }
    // 該節點的子樹都已經走完了
}
dfs(0, 0);
```

比如說，要算各個節點的深度(各節點到根的距離）：
```cpp
vector<int> tree[mxn];
int dep[mxn];
void dfs(int now, int par) {
    for (auto nxt: tree[now]) {
        if (nxt == par) continue;
        dep[nxt] = dep[now] + 1;
        dfs(nxt, now);
    }
    return;
}
```

比如說，要算各個節點的子樹大小：
```cpp
vector<int> tree[mxn];
int sz[mxn];
void dfs(int now, int par) {
    for (auto nxt: tree[now]) {
        if (nxt == par) continue;
        dfs(nxt, now);
        sz[now] += sz[nxt];
    }
    return;
}
```

### 例題
- [CSES Subordinates](https://cses.fi/problemset/task/1674)

### 更多樹 DP
- [樹上匹配](https://cses.fi/problemset/task/1130)
- [樹上獨立集](https://atcoder.jp/contests/dp/tasks/dp_p)
- [數直徑](https://cses.fi/problemset/task/1131)
- [樹重心](https://cses.fi/problemset/task/2079)
- [換根 DP](https://cses.fi/problemset/task/1133)

更多樹相關的知識可能講完資料結構再回來會比較好

<!-- TODO: tree dp, rerooting dp, centroid, diameter, lca, hld, cd, -->

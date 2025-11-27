---
title: 'Shortest Path'
pubDate: 2024-09-19
description: 'Shortest Path'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Shortest Path (最短路)
基本上，對於無向圖我們可以把每條邊拆成兩條有向邊

## 單點源
詢問從一個點出發找到其他各點的最短路

### 無邊權
還記得 BFS 嗎？每個點進到 queue 裡的時間點就是它的距離

### 負邊權
Bellman-Ford: 概念有點像是 DP ，流程如下：
```py
initialize dis[i] = 0 if i == 0 else inf
do N times:
    for (u, v, w) in edges: 
        dis[v] = min(dis[u] + w, dis[v])
return dis
```
如果沒有負環的話，可以證明最短路徑最多經過 $N-1$ 條邊

- 例題：[CSES High Score](https://cses.fi/problemset/task/1673)

複雜度？

### 非負邊權
Dijkstra: 有點像 BFS 但是把 queue 換成 heap
```py
initialize dis[i] = 0 if i == 0 else inf
S = {0, 1, 2, ... N-1}
while |S| > 0:
    find i in S such that dis[i] is min
    remove i from S
    for (i, v, w) in edges:
        if v in S and dis[v] > dis[i] + w:
            dis[v] = dis[i] + w
```
概念大概長這樣，實際運行上， $S$ 可以用 heap 維護，或者可以直接開一個陣列紀錄 $i$ 在不在 $S$ 裡面
```cpp
int adj[mxn][mxn]; // adjacency matrix, adj[i][j] = -1 if edge doesn't exist
int get_min(vector<int> &dis, vector<bool> &in_s) {
    int ans = -1;
    int N = dis.size();
    for (int i = 0; i<N; i++) {
        if (in_s[i]) {
            if (ans == -1 || dis[ans] > dis[i]) ans = i;
        }
    }
    return ans;
}
vector<int> Dijkstra(int N, int s) {
    vector<int> dis(N, INT_MAX / 2);
    vector<bool> in_s(N, true);
    dis[s] = 0;
    for (int c = 0; c < N; c++) {
        int i = get_min(dis, in_s);
        for (int v = 0; v < N; v++) {
            int w = adj[i][v];
            if (!in_s[v] || w == -1) continue;
            dis[v] = min(dis[v], dis[i] + w);
        }
    }
}
```
複雜度？
```cpp
struct Edge {
    int to, weight;
};
vector<int> Dijkstra(vector<vector<Edge>> &G, int N, int s) {
    vector<int> dis(N, INT_MAX / 2);
    vector<bool> in_s(N, true);
    dis[s] = 0;
    priority_queue<pair<int, int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
    for(int i = 0; i<N; i++) {
        pq.push(make_pair(dis[i], i));
    }
    while (!pq.empty()) {
        auto [_, i] = pq.top();
        pq.pop();
        if (!in_s[i]) continue;
        in_s[i] = false;
        for (auto &e:G[i]) {
            int v = e.to, w = e.weight;
            if (dis[v] > dis[i] + w) {
                dis[v] = dis[i] + w;
                pq.push(make_pair(dis[v], v));
            }
        }
    }
    return dis;
}
```

### 另一份 code
```cpp
void dijkstra(int s) {
    priority_queue<pll, vector<pll>, greater<pll>> S;
    // initialize dis[i] = 0 if i == 0 else inf
    fill(dis, dis + n + 1, LLONG_MAX / 2);
    dis[s] = 0;
    // S = {0, 1, 2, ... N-1}
    for (int i = 1; i <= n; i++) {
        S.push(pll(dis[i], i));
    }

    // while |S| > 0:
    while(S.size() > 0) {
        // find i in S such that dis[i] is min
        auto [d, u] = S.top(); S.pop();
        if (vis[u]) continue;

        // remove i from S
        vis[u] = true;

        // for (i, v, w) in edges:
        for (auto [v, w]: g[u]) {
            // if v in S and dis[v] > dis[i] + w:
            if (!vis[v] && dis[v] > dis[u] + w) {
                // dis[v] = dis[i] + w
                dis[v] = dis[u] + w;
                // update S
                S.push(pll(dis[v], v));
            }
        }
    }
    return;
}
```
複雜度？
- 例題：[CSES Shortest Routes I](https://cses.fi/problemset/task/1671)

## 多點源
多筆詢問 $(s, t)$ 的最短路
## Floyd-Warshall
直接 dp ，定義 $dp(i, j, k)$ 表示考慮除了端點外只經過前 $i$ 個節點從 $j$ 走到 $k$ 的最短路徑，則有 
$$dp(i, j, k) = min(dp(i-1, j, k), dp(i-1, j, i) + dp(i-1, i, k))$$
然後發現可以滾動 (因為 $dp(i, *, *)$ 只跟 $dp(i-1, *, *)$ 有關
```cpp
int adj[mxn][mxn]; // adj[i][j] = INT_MAX / 2 if no edge exists
int dis[mxn][mxn];
void Floyd_Warshall() {
    for (int i = 0; i<N; i++) {
        for (int j = 0; j<N; j++) {
            dis[i][j] = adj[i][j];
        }
    }
    for (int i = 0; i<N; i++) {
        for (int j = 0; j<N; j++) {
            for (int k = 0; k<N; k++) {
                dis[j][k] = min(dis[j][k], dis[j][i]+dis[i][k]);
            }
        }
    }
}
```
小知識: 如果 $(i, j, k)$ 順序打錯的話可以證明跑三次一定會對 ([reference](https://arxiv.org/abs/1904.01210))
- 例題：[CSES Shortest Routes II](https://cses.fi/problemset/task/1672)


## 建圖
有時候，直接在原圖上面跑最短路不一定是我們要的答案
- [ABC 420 D](https://atcoder.jp/contests/abc420/tasks/abc420_d)
- [CSES Flight Discount](https://cses.fi/problemset/task/1195)
- [CSES Flight Routes](https://cses.fi/problemset/task/1196)
- [CSES Nearest Shops](https://cses.fi/problemset/task/3303)

## 其他題目
- [CSES Labyrinth](https://cses.fi/problemset/task/1193): 想一下要怎麼還原解（小心時限）
- [CSES Monsters](https://cses.fi/problemset/task/1194)


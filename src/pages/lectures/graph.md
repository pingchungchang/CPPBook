---
title: 'Graph'
pubDate: 2024-09-19
description: 'Graph'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Graph (圖論)
一張圖是由一些點 $V$ 跟邊 $E$ 所構成的，每條邊連接兩個點

通常點數用 $V/N$ 代表，邊數用 $E/M$ 代表，

## 定義
- 有向圖：邊有方向的圖，通常邊會用 $a \to b$ 表示
- 無向圖：邊沒有方向的圖，兩個方向都可以走。某些情況下可以當成同時存在 $a \to b, b \to a$ 兩條邊的有向圖
- 重邊：有一個邊 $(a, b)$ 出現超過一次
- 自環：一個 $a \to a$ 的邊（不管有向無向）

## 圖的類型
- 簡單圖：沒有重邊跟自環的圖
- 連通圖：無向圖才有，表示任何兩個點可以互相抵達對方
- 樹(tree)：
    - 連通
    - 只有 $N-1$ 條邊
    - 任兩個點之間的最短路徑都存在且唯一
    - 沒有環
    - 以上四個只要成立其中兩個那剩下的都會對
- 森林(forest)：一堆樹
- 有向無環圖(directed acyclic graph, DAG): 
    - 有向圖
    - 沒有環

## 存圖方式
- 鄰接矩陣：
```cpp
const int mxn = 2020
bool adj[mxn][mxn];
void add_edge(int a, int b) {
    adj[a][b] = 1;
}
```
通常 $M = O(N^2)$ 會用這個
- `vector<vector<int>>`：
```cpp
vector<vector<int>> G(N, vector<int>());
void add_edge(int a, int b) {
    G[a].push_back(b);
}
```
通常 $M = \Omega(N)$ 的時候會用這個
- 前向星 (linked list): 
```cpp
int head[N], nxt[MAX_M], to[MAX_M];
int M = 0;
void add_edge(int a, int b) {
    M ++;
    nxt[M] = head[a];
    head[a] = M;
    to[a] = b;
}
// to enumerate edges u -> v from a vertex u:
for(int eid = head[u]; eid; eid = nxt[eid]) {
    int v = to[eid];
}
```
如果 $M = \Theta(N)$ 且 $N \ge 10 ^ 6$ 建議用這個

## 遍歷
- BFS (Breadth-First Search): 先選擇一個起點，把它放進一個 queue ，之後每跑一個節點就把他的鄰居中還沒跑過的點放進 queue

[動畫](https://www.cs.usfca.edu/~galles/visualization/BFS.html)
```cpp
vector<vector<int>> G(N);
vector<bool> vis(N);
void bfs() {
    queue<int> q;
    q.push(0);
    while (!q.empty()) {
        int now = q.front();
        q.pop();
        for(int nxt: G[now]) {
            if (vis[nxt] == false) {
                vis[nxt] = true;
                q.push(nxt);
            }
        }
    }
}
```
用途：對於一張沒有邊權的圖，可以證明如果 $dis(0, u) < dis(0, v)$ 則 $u$ 會比較早進入 queue 中
- DFS (Depth-First Search): 先選擇一個起點，然後遞迴地先處理他的鄰居中還沒走過的人

[動畫](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
```cpp
vector<vector<int>> G(N);
vector<bool> vis(N);
void dfs(int now) {
    vis[now] = true;
    for(int nxt: G[now]) {
        if (vis[nxt] == false) {
            dfs(nxt);
        }
    }
}
dfs(0);
```
用途：
- 之後會講到的雙連通分量會用到
- [二分圖判定](https://cses.fi/problemset/task/1668)
- [找環](https://cses.fi/problemset/task/1669)
- 對於一棵樹來說會先把所有子節點跑完再跑父節點 $ \to$ 很適合跑 DP 的順序

值得注意的是如果把 BFS 的 queue 換成 stack 會得到某種 DFS

兩種作法都各有自己的用處

## 連通塊數量
- 對沒有走過的點跑一次 BFS/DFS 並標記所有走得到的點，最後數跑了幾次 BFS/DFS
    ```cpp
    int cnt = 0;
    for(int i = 0;i<N;i++) {
        if (vis[i] == 0) cnt++, dfs(i);
    }
    return cnt;
    ```
    複雜度 $O(N+M)$

例題：
- [CSES Counting Rooms](https://cses.fi/problemset/task/1192)
- [CSES Building Roads](https://cses.fi/problemset/task/1666)

## DAG
### 拓樸排序
- 找一個點的順序使得如果 a -> b ，那 a 在 b 前面
- 可以用類似 bfs 也可以用類似 dfs
- [CSES Course Schedule](https://cses.fi/problemset/task/1679)
- [CF 510 C](https://codeforces.com/problemset/problem/510/C)
### DAG DP
- [CSES Longest Flight Route](https://cses.fi/problemset/task/1680)
- [Atcoder DP contest G](https://atcoder.jp/contests/dp/tasks/dp_g)

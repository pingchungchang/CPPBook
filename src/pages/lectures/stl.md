---
title: 'Week 2'
pubDate: 2024-08-29
description: 'Week 2'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Week 2

## More about Time Complexity
### More details for asymptotic notation
$f(n) = \Omicron(g(n)) \leftrightarrow \exists$ $c > 0, N_0 \in \mathbb{N}$ $s.t. \forall N \ge N_0, f(N) \le c g(N)$

$f(n) = \Omega(g(n)) \leftrightarrow \exists$ $c > 0, N_0 \in \mathbb{N}$ $s.t. \forall N \ge N_0, f(N) \ge c g(N)$ 

當然還有 $\omicron (), \omega()$ 但是基本上不太會用到，定義可以想成是更嚴格的大或小，連比值大於 0 都不行

不只時間，空間也可以這樣定義

### 遞迴
來看 code 猜複雜度
```cpp
int f(int x) {
    if (x == 1) return 1;
    else return f(x-1)+1;
}
```
$T(n) = T(n-1) + 1$

```cpp
int f(int x) {
    if (x == 1) return 1;
    else return f(x/2) + 1;
}
```
$T(n) = T(n/2) + 1$

## Pointer+Iterator+Reference
### 指標(pointer)
就是一個指向某個物品的指針
```cpp
int x = 4;
int* a = &x; // a 是一個指向 x 的指標
*a = 3; // x 會被改成 3
```
### 參考(reference)
C 裡面的指標太複雜了，改用參考看起來比較乾淨
```cpp
void modify(int &k, int value) {
    k = value;
    return;
}
int x = 3;
int &a = x;
modify(a, 4); // a = x = 4
```
### 迭代器(iterator)
可以想成 C++ 中每個 STL 物件的指標
```cpp
vector<int> v = {1, 2, 3, 4};
vector<int>::iterator it = v.begin(); //可以想成 v[0] 的指標
it = v.end(); // 可以想成是 v[v.size()] 的指標
```
有了 iterator 就可以用下面的東西 for loop 遍歷一個 vector
```cpp
vector<int> v;
for(auto it = v.begin(); it  v.end(); it++) {
    cout << *it << ' ';
}
```

## Algorithm
Usage:
```cpp
#include <algorithm>
```
### sort
C++ 有內建排序的語法
`sort(iter first, iter last)`
```cpp
vector<int> v = {4, 3, 2, 1};
sort(v.begin(), v.end());
```
- 會排序 [first, last-1] 的元素
- 注意到 C++ 多數的東西都是 [left, right-1] 的形式(左閉右開）
- <a href = "/CPPBook/lectures/sorting"> 關於 sorting </a>
### lower_bound/upper_bound
- `lower_bound(iter first, iter last, T val)`
- 會回傳一個 iterator，表示這個陣列中第一至少為 val 的指標(找不到則是 last)
- **只能在已經排序好的陣列使用**
- <a href = "/CPPBook/lectures/binsearch">關於二分搜</a>

### 其他 algorithm 內部的東西們
- unique(iter first, iter last): 將 [first, last) 之間的元素中所有重複的人放到陣列最後面
- stable_sort(iter first, iter last): 保證 stable 排序跟比較次數的 sort
- min(a, b)/max(a, b): 取 min 跟 max ，要比較很多人可以用 max({a, b, c, d})
- swap(T &a,T &b): 交換 a, b 的值 (a = b 是合法的)
- 還有很多，到時候再學也可以

## Containers
基本上只要是 C++ 的 container 都會有 iterator (.begin(), .end(), .rbegin(), ...)
### String
- C++ 中的字串，基本上可以想像成是 `vector<char>`
- Usage:
```cpp
#include <iostream>
#include <string>
using namespace std;

int main () {
    string s;
    cin >> s; // 會輸入直到換行或空白
    string t = "abc";
    s += t;
    s[3] = 'b'; // 改字元
    s.substr(1, 3); // s[1] 取長度為 3 的 substring
}
```
### Stack
- push(x): 新增一個元素到 stack 中
- pop():  移除最晚 push 的元素
- size(): 詢問 stack 的大小
- top(): 詢問最晚新增的元素是誰
- [模板題](https://oj.ntucpc.org/problems/658)
- 時間複雜度
    - push(x): $O(1)$ <br>
    - pop() : $O(1)$ <br>
    - size(): $O(1)$ <br>
    - top(): $O(1)$ <br>
#### STL 中的 stack
```cpp
#include <stack>
std::stack<int> stk;
stk.push(3);
stk.push(4);
stk.top(); // 4
stk.pop();
stk.size();
```
另一個常見的作法是直接用 vector 當作 stack 用
- [練習題](https://zerojudge.tw/ShowProblem?problemid=c123)

### Queue
- push(x): 新增一個元素到 queue 中
- pop():  移除最**早** push 的元素
- size(): 詢問 queue 的大小
- front(): 詢問最**早**新增的元素是誰
- [模板題](https://oj.ntucpc.org/problems/654)
- 時間複雜度
    - push(x): $O(1)$ <br>
    - pop() : $O(1)$ <br>
    - size(): $O(1)$ <br>
    - top(): $O(1)$ <br>
#### STL 中的 queue
```cpp
#include <queue>
std::queue<int> que;
q.push(3);
q.push(4);
q.front(); // 3
q.pop();
q.size();
```
[練習題](https://zerojudge.tw/ShowProblem?problemid=e155)
### Deque
- 同時支援 queue 的 push, pop, front 以及 stack 的 push, pop, front
#### STL
```cpp
#include <deque>
using namespace std;
deque<int> deq;
deq.push_front(3);
deq.push_back(4);
deq.front();
deq.back();
deq.pop_front();
deq.pop_back();
```
到時候介紹 sliding window 跟凸四邊形應該要講到跟用到 deque
### linked list

基本上都是要用 iterator 存取跟應用
```cpp
#include <list>
using namespace std;
list<int> l;
l.push_front();
l.pop_front();
```
- [練習題](https://zerojudge.tw/ShowProblem?problemid=b551)


## 題目
- 可以把 cses introductory 寫完了(除了最後一題很難以外)

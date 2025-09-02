---
title: 'Sorting'
pubDate: 2024-08-29
description: 'Sorting'
author: 'PCC'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["Basic", "CPP"]
layout: '../../layouts/MyLayout.astro'
---
# Sorting
因為關於排序的東西有點多所以拉出來講

## 問題
給一個長度為 $N$ 的陣列 $a_0, a_1, \cdots a_{N-1}$ <br>
輸出一個排列 $p_0, p_1, \dots p_{N-1}$ 使得 $a_{p_0} \le a_{p_1} \le \cdots a_{p_{N-1}}$ <br>

## Selection Sort
```py
for i = 0 .. N-1
    find smallest element p in a[i:N-1]
    swap a[i] and a[p]
```
```cpp
for(int i = 0;i<N;i++) {
    int p = i;
    for(int j = i;j<N;j++) {
        if (arr[j] < arr[p]) p = j;
    }
    swap(arr[p], arr[i]);
}
```
複雜度？

## Bubble Sort
```cpp!=
bool not_sorted(vector<int> &v) {
    for(int i = 1;i<v.size();i++) {
        if (v[i] < v[i-1]) return false;
    }
    return true;
}
while(not_sorted(v)) {
    for(int i = 1;i<v.size();i++) {
        if (v[i] < v[i-1]) swap(v[i], v[i-1]);
    }
}
```
複雜度？

## Merge Sort
- 用到分治(divide and conquer)
- 想法是如果我們有兩個長度分別為 $L, R$ 且已經排序好的陣列，我們可以用 $O(L+R)$ 的時間將兩個陣列的結果合併<br>
- 可以用到[這題](https://oj.ntucpc.org/problems/549)的技巧
```cpp
void combine(vector<int> &v, int l, int mid, int r) {
    // TODO
}
void merge_sort(vector<int> &v, int l, int r) {
    if (l == r) return;
    int mid = (l+r) / 2;
    merge_sort(v, l, mid);
    merge_sort(v, mid+1, r);
    combine(v, l, mid, r);
}
```
複雜度？

### Quick Sort
選一個數字當 pivot，把比他小的放一邊；比他大的放另一邊，之後遞迴
```cpp
void quick_sort(vector<int> &v) {
    vector<int> left, right;
    int pivot = 0;
    for(int i = 0;i<v.size();i++) {
        if (i == 0) continue;
        else if(v[i] >= v[pivot]) right.push_back(v[i]);
        else left.push_back(v[i]);
    }
    quick_sort(left);
    quick_sort(right);
    int x = v[pivot];
    for(int i = 0;i<left.size();i++) v[i] = left[i];
    if (left.size() != v.size()) v[left.size()] = x;
    for(int i = 0;i<right.size();i++) v[left.size() + 1 + i] = right[i];
    return;
}
```
複雜度？

## 題目
- [zj a104](https://zerojudge.tw/ShowProblem?problemid=a104)
- [zj a915](https://zerojudge.tw/ShowProblem?problemid=a915)
- [CSES Tasks and Deadlines](https://cses.fi/problemset/task/1630)

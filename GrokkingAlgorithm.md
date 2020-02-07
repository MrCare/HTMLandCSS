# Grokking Algorithms

An illustrated guide for programmers and other curious people

`America - Aditya Bhargava`

**经典算法：**

- 二分查找
- 数组和链表
- 递归
- 分治算法
- 动态规划
- 贪婪算法
- 散列表 Hash
- 图算法
- 最近邻算法

有一天大概夜里10点左右，我刚刚在学校上完课回家，走在楼道里突然我想到了Apartment和house两个单词。为什么老美有那么强大的创新和创造能力呢？这么枯燥深奥的内容竟然可以写的这么简单，这么好？可能因为他们住在house里......

可以享有和支配更多资源，可以完全不care其他乱七八糟的shit，从而在自己的爱好上不断积累，最终变得很强，现在是个大学就要开算法吧，可是就算是在国内最顶尖的清华大学，能像这位作者一样，真正理解的又有多少呢？把这几种算法生动形象清晰地讲出来的，又有多少呢？

对了，这个人还是自学成才。

## 1. 二分查找

```Python
def binary_search(list, item):
    low = 0
    high = len(list)-1
    while low < high:
        mid = (low + high) // 2
        guess = list[mid]
        if guess == item:
            return mid
        elif guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None
```

### 复杂度

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(log n)   | O(1)       |

**注：**

- list必须满足有序且可随机访问

运行时间快慢复杂度顺序：

```
最快 <------------------------------> 最慢
O(1) O(log n) O(n) O(nlog n) O(n^2) O(n!)
```

### 小结

- 二分查找速度比简单查找快得多
- O(log n) 比 O(n) 快，需要搜索的元素越多，前者比后者就快得越多
- 算法运行时间不以秒为单位
- 算法运行时间是从其增速的角度度量的
- 算法运行时间用大O表示法表示

## 2. 选择排序

数组和链表：

|   操作   |     数组     |     链表     |
| -------- | ------------ | ------------ |
| 读取     | O(1)线性时间 | O(n)常量时间 |
| 访问方式 | 随机访问     | 顺序访问     |
| 插入     | O(n)         | O(1)         |
| 删除     | O(n)         | O(1)         |

```Python
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i, each in enumerate(arr):
        if each < smallest:
            smallest = each
            smallest_index = i
    return smallest_index

def selectionSort(arr):
    new_arr = []
    while arr != []:
        smallest = findSmallest(arr)
        new_arr.append(arr.pop(smallest))
    return new_arr
```

**注**：

- list的pop方法接收一个index，在修改list的同时返回pop掉的元素

### 复杂度

| 时间复杂度 | 空间复杂度 |
| ---------- | ---------- |
| O(n^2)     | O(n)       |

### 小结

- 计算机内存是抽屉模型
- 需要储存多个元素时，可使用数组或链表
- 数组的元素在内存中是相邻的
- 链表的元素在内存中是分开的，每个元素储存了下一个元素的地址
- 数组的读取速度很快，而链表的插入和删除速度很快
- 在同一个数组中，所有元素的类型都必须相同（都为int,double等）

**问：**

- Python 的 list 到底是什么数据结构？（元素的类型可以不同，）

## 3. 递归

编写递归函数时，必须告诉它何时停止递归，正因如此，每个递归函数都有两部分：基线条件（base case）和递归条件（recursive case）。recursive case 是指函数自己调用自己，而基线条件则是递归的出口，如果没有基线条件或者基线条件错误就会造成无限循环。

### 栈

-是一种先进后出的数据组织结构，四则运算就是栈来组织的

- `调用栈（call stack）`：当一次调用发生时，计算机会分配一块内存用来储存被调用函数的所有信息，如果这些信息在没有被处理完之前，又发生了新的调用，那么未处理完的内存块和新调用分配的内存块之间的组织形式就是栈，栈可以方便地追踪处理顺序，新的调用分配的内存块被压入栈，当栈底元素结束调用时，就开始处理栈顶的内存块，处理完的就被弹出，继续处理栈顶的内存块，直至调用栈所有元素都被弹出（处理结束）。总结：调用栈就是追踪“函数调用”发生时数据处理顺序的一种数据组织方式。

使用栈虽然很方便，但是也要付出代价：储存详尽的信息可能占用大量的内存。每个函数都要占用一定的内存，如果栈很高，就意味着计算机储存了大量函数调用的信息，在这种情况下，你有两种选择：

- 重新编写代码，转而使用循环
- 使用`尾递归`，递归函数的最后一步除了调用自身之外没有其他的变量，这样可以大大减小调用栈的高度，但是Python，和JS都不支持尾递归
- 尾递归编程是一种逻辑的表述，但是需要编译才能让计算机执行，这与语言的解释机制有关，所谓的支持，就是当解释器读到这一种逻辑表达后，可以按照我们想要让其运行的方式指导计算机硬件进行处理，然而，这样的方式 Python 和 JS 仍然还是会按照普通的递归方式进行处理，达不到减小调用栈高度，节约内存的效果
- 个人感觉尾递归在处理逻辑上与迭代相同，但是在编程形式上更为简单，将较为复杂的脑力劳动从逻辑编程层面转移到了解释器层面，从而减小编程难度。

### 小结

- 每个递归函数都有两个条件：基线条件和递归条件
- 所有的函数调用都进入调用栈
- 调用栈可能很长，这将占用大量内存
- stack overflow 大名鼎鼎的程序员学习与成长论坛

## 4. 分治算法（Divide and Conquer D&C）

D&C 算法是建立在递归的基础上的，这是一种简化复杂问题的策略：

- 找出基线条件，这种条件必须尽可能简单
- 不断将问题分解（缩小规模），直至符合基线条件

### 辗转相除法求最大公约数
```Python
def greatestCommonDivisor(a, b):
    #让a始终为较大的数
    if a < b:
        a, b = b, a
    else:
        pass
    #基线条件
    if a % b == 0:
        return b
    else:
        a, b = b, a % b
        return greatestCommonDivisor(a, b)
```

**证明**

> 欧几里得算法：求两个正整数的最大公约数算法，是由古希腊数学家欧几里得在其著作《几何原本》中描述的，可用于RSA领域，又名：辗转相除法

> 以除数和余数反复做除法运算，当余数为0时，去当前算式的除数为最大公约数

GCD(Greatest Common Divisor):
```
gcd(a, b) = gcd(b, a mod b)
a > b 且 r = a mod b; r != 0
证：
设：gcd(a, b) = c
    a = nc; b = mc; m 与 n 互质
    r = a - kb
    r = (n - km)c
所以：c为b, r的公约数
只需证：m 与 n - km 互质
假设：m 与 n - km 拥有公约数 sigma
    gcd(mc, nc-kmc) = sigma * c
    gcd(mc, nc) = sigma * c 与题设矛盾
得证！ 
```

**小结**

- D&C将问题逐步分解。使用D&C处理列表时，基线条件很可能是列表长度小于等于 1 的数组

## 5. 快速排序

C 语言标准库中的函数qsort实现就是快速排序，典型的D&C方案

**分析**

- 基线条件：数组元素为空或仅有一个（无需排序）
- 缩小问题规模：选出一个元素，将序列分成全部大于该元素和全部小于该元素的两部分，再对子序列进行排序

**工作原理**

- 从数组中选择一个元素，这个元素被称为基准值（pivot）
- 找出比基准值小的元素以及比基准值大的元素，这一步被称为：分区（partitioning）
- 假设子数组是排好序的
- 将元素小于基准值的子数组，基准值和元素大于基准值的子数组相加
- 对子数组递归调用自身排序算法

```Python
def quikSort(arr):
    if len(arr) == 0 or len(arr) == 1:
        return arr
    else:
        right_list = []
        left_list = []
        #pivot值选为arr的第一个元素
        pivot = arr[0]
        for each in arr[1:]:
            if each > pivot:
                right_list.append(each)
            else:
                left_list.append(each)
        return quikSort(left_list) + [pivot] + quikSort(right_list)
```

**归并排序**

```Python
#归并排序
def MergeSort(lists):
    if len(lists) <= 1:
        return lists
    mid = len(lists)//2
    #递归
    listA = MergeSort(lists[:mid])
    listB = MergeSort(lists[mid:])
    print("========listA========")
    print(listA)
    print("========listB========")
    print(listB)
    return MergeSortedLists(listA, listB)

#合并两个有序数集
def MergeSortedLists(listA, listB):
    newList = list()
    a = 0
    b = 0
    # Merge the two lists together until one is empty
    while a < len(listA) and b < len(listB):
        if listA[a] < listB[b]:
            newList.append(listA[a])
            a += 1
        else:
            newList.append(listB[b])
            b += 1
    # If listA contains more items,append them to newList
    while a < len(listA):
        newList.append(listA[a])
        a += 1

    while b < len(listB):
        newList.append(listB[b])
        b += 1
    return newList

    # If listB contains more items,append them to newList

if __name__ == "__main__":
    lists = [3, 5, 4, 2, 1, 6]
    print(lists)
    result = MergeSort(lists)
    print(result)
```

**复杂度**

|    算法    |  时间复杂度   |   空间复杂度   |
| ---------- | ------------- | -------------- |
| 快速排序法 | 平均O(nlog n) | O(n) 最佳 O(1) |
| 归并排序法 | 严格O(nlog n) | 最佳 O(n)      |

> 快速排序法的常量时间小于归并排序法（开辟新的储存空间需要的时间），本例中的快排并不是最佳实践，所以在时间复杂度相同的情况下，快排更快一些，然而快排是不稳定的，如果pivot不能随机选择，那么时间复杂度会劣化到O(n^2)

**小结**

- 实现快速排序时，一定要随机地选择用作基准值的元素
- 常量时间事关重大，这就是快速排序比归并排序更快的原因所在
- 比较简单查找和二分查找时，常量几乎无关紧要，因为列表很长时，O(log n)的速度比O(n)快得多

## 6. 散列表

**散列函数**

无论你给它什么数据，它都还给你一个数字

## 狄克斯特拉算法

## 附加：有用技能

**查看python安装目录的方法**

```Python
import sys
print(sys.path)
```

**查看模块所包含的属性和方法**

```Python
import math
dir(math)
```

**查看模块文件所在目录**

```Python
import random
random.__file__
```
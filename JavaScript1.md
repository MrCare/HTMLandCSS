# JavaScript

## 1 JavaScript 简介

JavaScript诞生于1995年，学会使用它仅需要片刻，但是真正掌握却需要数年时间。要想全面理解和掌握JavaScript，关键在于弄清楚它的*本质，历史和局限性* ——《JavaScript高级程序设计》

### 1.1 JavaScript 简史

1995年由Netscape开发，用于客户端处理表单数据验证，简称JS与Java并无关系，之所以叫这个名字只是想蹭Java的热度。然而微软也推出了其自己的浏览器开发语言，并与JS采用了互不兼容的标准，这导致了开发者做开发要熟悉两套标准，最后欧洲计算机制造商协会ECMA负责指定一种“标准化一种通用，跨平台，供应商中立的脚本语言的语法和语义”，并命名为ECMAScript的新脚本语言标准。

## 1.2 JavaScript 实现

虽然 JavaScript 和 ECMAScript 通常被人用来表达相同的含义，但是 JavaScript 的含义却比 ECMA-262 中规定的要多的多。一个完整的JavaScript实现应该由下列三个不同的部分组成：

1. 核心 ECMAScript

2. 文档对象模型 DOM

3. 浏览器对象模型 BOM

#### 1.2.1 ECMAScript

由ECMA-26定义的ECMAScript（简称ES）与Web浏览器没有依赖关系。实际上这门语言不包含输入和输出定义。ECMA-262定义的只是这门语言的基础，而在此基础上可以构建更完善的脚本语言。常见的Web浏览器只是其宿主环境之一，宿主环境还提供该语言的拓展，以便语言与环境之间的对接交互。而这些扩展，如DOM，则利用ES的核心类型和语法提供更多具体的功能，以便实现针对环境的操作，其他宿主环境包括Node（服务端JavaScript平台）和AdobeFlash。



ECMA-262标准规定内容如下：

1. 语法

2. 类型

3. 语句

4. 关键字

5. 保留字

6. 操作符

7. 对象



#### 1.2.2 文档对象模型

DOM：Document Object Model 是针对 XML 但经过扩展用于 HTML 的应用程序编程接口（API：Application Programming Interface）,DOM把整个页面映射为一个多层节点结构。借助其提供的API可以轻松删除，添加，修改任何节点：如`document.getElementById()`方法，可以通过Id获取节点对象。





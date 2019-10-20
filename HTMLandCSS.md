# HTML & CSS

前端技术千变万化，想要寻根溯源需要从最古老的事情开始，今日Twiter的设计理念如同古希腊的莎草纸，苹果系列总体的设计灵感也可从初代苹果电脑中略见一二，想要透彻了解一块技术，一定要踏踏实实地从头开始，学力学要从数学开始，学机器学习要从统计学开始，在我持续的学习生涯中领悟最深的道理就是踏踏实实从0开始才是捷径。前端技术的源头就在HTML&CSS

学习书籍：《Head First HTML & CSS》

## Web 语言

| WEB lANGUAGE | LONG NAME                 | FUNCTION |
| ------------ | ------------------------- | -------- |
| HTML 超文本标记语言 | HyperText Markup Language | 搭建页面结构   |
| CSS 层叠样式表    | Cascading Stytle Sheets   | 显示页面表现   |

提速工具

- Dreamweaver

- Coda;TextMate;CoffeeCup; AptanaStudio 编辑器

**边角知识**

```html
<!-- 注释 annotations -->

<style type="text/css">
    <!-- 
    style的属性只有上述一个可以省略，style元素必须放在<head></head>中 
    -->
</style>
```

- 浏览器会忽略多余的white space

## HyperText 超文本

```html
<!-- 
    两个a之间是 hypertext 属性 href 是 hypertext Reference
-->

<a href="nextpage.html"> next page </a>
```

## 构建模块

设计路线

1. 草图：简笔画一样的页面

2. 略图：分模块画出并写好各部分的标签

3. 网页：根据略图填入内容

**边角知识**

```html
<!--
    block元素与inline元素：以引用为例
    block元素特例独行，inline元素随波逐流
-->

<blockquote>
    blockquote是将引用单独成一段 <br>
    break元素用来换行
</blockquote>

<q> q元素是将引用内嵌在行中 </q>

<!--
    设计为没有任何内容的元素为void元素，如<br>，<img>只需使用一个开始标记，这是一种方便的简写形式，可以减少HTML中的标记数量
-->
```

- 创建列表:
  
  1. 将每个列表项放在一个`<li> list item </li>`中
  
  2. 用`<ol> ordered list </ol>`或`<ul> unordered list </ul>`元素包围列表项

- 定义列表：

```html
<dl>
    <dt>
        defined list 的 title
    </dt>
    <dd>
        defined list 的 description        
    </dd>
</dl>
```

- 字符实体：

| 字符实体 | 指令            | character entity   |
| ---- | ------------- | ------------------ |
| `<`  | `&lt;`        | less than          |
| `>`  | `&gt;`        | greater than       |
| `&`  | `&amp;`       | ampersand          |
| 版权符号 | `&copyright;` | copyright          |
| 空格   | `&nbsp;`      | non-breaking space |

[官方链接：w3schools](http://www.w3schools.com/tags/ref_entities.asp)

[官方链接：unicode](http://www.unicode.org/charts/)

HTML 元素总结：

| 元素                         | 原意                        | 作用        |
| -------------------------- | ------------------------- | --------- |
| `<html></html>`            | HyperText Markup Language | 始终        |
| `<head></head>`            | Head                      | 浏览器标题栏    |
| `<title></title>`          | Title                     | 标题        |
| `<style></style>`          | CSS Style                 | 定义某一结构的样式 |
| `<body></body>`            | Body                      | 浏览器窗口主体   |
| `<p></p>`                  | Paragraph                 | 段落        |
| `<q></q>`                  | Quote                     | 引用        |
| `<blockquote></blocquote>` | Block Quote               | 块引用       |
| `<em><em>`                 | Emphasis                  | 强调（斜体）    |
| `<strong><strong>`         | Strongly Emphasis         | 超级强调（加粗）  |
| `<code><code>`             | Code                      | 以代码字体显示   |
| `<pre></pre>`              | Preview                   | 保留原始格式显示  |
| `<time></time>`            | Time and Date             | 日期时间模块    |
| `<ol></ol>`                | Ordered list              | 有序列表      |
| `<ul></ul>`                | Undered list              | 无序列表      |
| `<li></li>`                | List Item                 | 列表元素      |
| `<br>`                     | Break                     | 回车并换行     |
| `<img>`                    | Imge                      | 显示图像      |
| `<a></a>`                  | At                        | 链接        |

## 发布网页

主流 FTP (File Transfer Protocol)

| Mac OS X  | 官方网站                                            | Windows   | 官方网站                                                  |
| --------- | ----------------------------------------------- | --------- | ----------------------------------------------------- |
| Fetch     | [fetchsoftworks.com](http://fetchsoftworks.com) | Smart FTP | [www.smartftp.com](http://www.smartftp.com/download/) |
| Transmit  | [www.panic.com](http://www.panic.com/transmit/) | WS_FTP    | [www.wsftple.com](http://www.wsftple.com)             |
| Cyberduck | [cyberduck](http://cyberduck.ch/) 免费            | Cyberduck | [cyberduck](http://cyberduck.ch/) 免费                  |

注意：

- 域名与网站名：chezijin.cn是域名；www.chezijin.cn & home.chezijin.cn 这些是网站名，域名唯一，在某一个域名下的网站可以有很多

- HTTP (HyperText Transfer Protocol)

- URL (Uniform Resource Locator)

- 如果 URL 只输入了网站名则会在服务器根目录下自动寻找`index.html`文件或`default.htm`文件，根据服务器类型选择

- 链接地址尽量采用相对路径，便于网站维护

**边角知识**

```html
<!--
    1. 为<a></a>增加 title 属性，用于解释链接文本指向的页面
    2. 通过指向有id属性的模块使链接指向特定目标
    3. 为<a></a>增加 target 属性，用于在新的窗口打开链接页面    
-->

<p id="Here">
    Here is the new page
</p>
<a 
    href="newpage.html#Here"
    title="point to newpage"
    target="_blank"> Click here </a>
```

- 用`#id`的方式指定链接的目标模块

- `titile="最好与目标页面<head>中<title>一致"`

- `target="_blank"` 每次点击链接都会打开新的窗口，点击5次就打开5个

- `target="anothername"`每次点击该链接只会打开一个窗口，点击5次只新打开1个，anothername是这个新窗口的名字

## 媒体

### 图像

三种图像格式

- JPEG
  
  - 适合连续色调图像，如照片
  
  - 可以表示多达1600万种不同颜色的图像
  
  - 文件较小
  
  - 有损格式
  
  - 不支持透明度
  
  - 不支持动画

- PNG
  
  - 适合单色图像和线条构成的图像（logo 剪贴画 和图像中的小文本）
  
  - 可以表示上百万种不同颜色的图像 PNG-8；PNG-24 和 PNG-32 取决于你需要表示多少种颜色
  
  - 无损格式
  
  - 支持透明
  
  - 与相应JPEG文件比PNG文件大小取决于使用的颜色数，可能更小也可能更大

- GIF
  
  - 适合单色图像和线条构成的图形
  
  - 可以表示最多256种不同颜色的图像
  
  - 无损格式
  
  - 支持透明度，不过只允许一种颜色设置为透明
  
  - GIF比相应JPEG大
  
  - 支持动画

**边角知识**：

```html
<!--
    1. src属性是图像的url
    2. width与height属性是图像的大小
    3. 一般用CSS调整图像样式
    4. 如果img损坏了会显示alt属性的内容
-->

<img 
    src="URL or File"
    width="48"
    height="100"
    alt=“description if img break”>
```

- 浏览器窗口宽度大约为800像素

- 一般图像宽度要小于800 pixels

- 如果把一个透明的图像放在Web页面中，则要确保这个图像的蒙版颜色与Web页面的背景色一致

- antialias 抗锯齿化技术

## HTML工业界标准

### HTML演变历史

- 1989-1991初期：HTML1.0-2.0

- 1995：Netscape 与 Microsoft 的浏览器战争：HTML3.0

- 1998：W3C(World Wide Web Consortium)：HTML4.0

- 1999：统一来临：HTML4.01

- 2001：严格统一格式：XHTML1.0(Extensible Markup Language)

- 2009-2012：被HTML5取代，可以加入丰富的功能：HTML5

```html
<!--
    1. 在文件第一行加入如下字段以制定使用HTML的版本，如下是HTML5的标准格式
    2. 在<html>中加入lang属性（language）指定语言
    3. 在<head>中加入<meta>指定元信息
-->

<!DOCTYPE html>
<html lang="all">
    <head>
        <meta charset="utf-8">
        <title> A normal title </title>
    </head>
</html>
```

- HTML5规范具有向后兼容性（backwards compatibility）

### W3C验证工具

验证html文件是否存在错误

验证地址：

- [validator](http://validator.w3.org)

- **UTF-8**（Universal Character Set/Unicode Transformation Format）

- meta标签：元信息 （meta information）

### 遵循规范

```html
<!--
    1. 一定要以<doctype>开头
    2. <html>元素必须要具备
    3. 只有<head><body>可以直接放在<html>元素中
    4. 在<head>中用<meta charset="utf-8">指定正确的字符编码
    5. 在<head>元素中必须包含<title>，除此仅可以包含<meta>，<style>
    6. 不允许在void元素中嵌套其他内联元素
    7. 检查属性，有些元素是必要的，有些是可选的<img src="" alt="">都是必要属性
-->
```

## CSS基础

为结构体增加样式：

```css
/*
    1. 选择需要增加样式的元素，可以用逗号分隔
    2. 指定想要设置样式的属性，成为selector选择器
    3. 冒号后加对应样式选项
    4. 最后以分号结尾
*/

h1, h2 {
    background-color: red;
}
```

注意：

- 把共同的样式合并到一起，倘若它们有改变，只需要修改一个规则，如果分开就要修改多个额规则，这样很容易出错。

为多个html结构指定相同的CSS风格：

```html
<!--
    1. 将CSS文件单独抽离成一个.css文件
    2. 将html中的<style>元素用void元素<link>替换
    3. rel属性制定了html文件与连接文件的关系，必须具有
-->

<head>
    <meta charset="utf-8">
    <title> A title </title>
    <link rel="stylesheet" href=“xxx.css”>
</head>
```

**边角知识**：

- 衬线字体：serif，sans-serif没有衬线

- 元素的某些样式存在继承关系，如 font-family

- 可以为某个元素指定单独规则覆盖继承属性

- 在CSS中写注释`/*annotations*/`

为不同的p元素单独设置样式：

```css
/*
    1. 为不同的<p>元素单独设置样式
    2. 在html中引入类class属性
    3. 编写类选择器
*/

p.first {
    color: green;
}
p.second {
    color: red;
}
.third {
    color: blue;
}
```

- 对应的html结构：

```html
<!--
    1. 除了<p>的其他原文都省略了
    2. 定义三个<p>分属于三类
-->

<p class="first"></p>
<p class="second"></p>
<h1 class="third"></h1>
```

类class的深入分析：

- 元素可以加入很多class中`<p class="first second third">`

- 应用样式的常识性规则：
  
  - 有没有某个selector选择了元素
  
  - 如果没有，就依赖于继承，去查找父元素
  
  - 都没有就使用默认值
  
  - 如果多个选择器选择一个元素：

```css
p { color: black;}

/*
    1. 这个会覆盖上一条
*/
.first { color: green;} 

/*
    1. 以下三条规则无贵贱之分，但是都会覆盖上一条
    2. 如果贵贱程度相同，那么会应用最后列出的语句
*/
p.first { color: green;}
p.second { color: blue;}
p.third { color: purple;}
```

CSS验证工具：

- [CSS在线验证工具](http://jigsaw.w3.org/css-validator)

CSS属性：

| Attribution      | function           |
| ---------------- | ------------------ |
| color            | 文本元素字体颜色           |
| font-weight      | 控制文本粗细，设置粗体        |
| left             | 指定元素左边所在位置         |
| line-height      | 设置文本元素中的行距         |
| top              | 控制元素顶部位置           |
| background-color | 控制元素背景颜色           |
| border           | 控制元素周围加边框          |
| padding          | 在元素边缘和其内容之间留有空间    |
| font-size        | 让文本更大或者更小          |
| text-align       | 使用这个属性将文本左对齐居中或右对齐 |
| font-style       | 设置斜体文本             |
| list-style       | 这个元素允许你改变列表中列表项的外观 |
| background-image | 在元素后面放一个图像         |

## 增加字体和颜色样式

### 字体

```css
/*
    1. 用font-family属性定制页面中使用的字体
    2. 用font-size属性控制字体大小
    3. 用color属性控制字体颜色
    4. 用font-weight属性影响字体的粗细
    5. 用text-dectoration属性为文本增加更多风格
*/

body {
    font-family: Verdana;
    font-size: 14px;
    color: silver;
    font-weight: bold;
    text-decoration: underline;
}
```

属性细节：

| font-family 通用字体系列 | Interpretation     |
| ------------------ | ------------------ |
| sans-serif         | 无衬线字体，认为在计算机上更易于读识 |
| monospace          | 字体包含固定宽度的字符，用于显示代码 |
| serif              | 有衬线字体，新闻排版         |
| cursive            | 手写风格字体             |
| fantasy            | 装饰风格字体             |

- eg：

```css
/*
    1. 使用font-family属性可以制定多个字体，只要输入这些字体名，并用逗号分隔
    2. 要完全按照名称输入字体
    3. 最后放一个通用字体系列名称，如上表所示
    4. 按照协议浏览器会逐一寻找候选字体，如果搜索到最后依然没有，则用默认最后的字体系列的默认字体
    5. 如果字体名中包含空格，需要在字体名左右加引号

body {
    font-family: Verdana, Geneva, Arial, sans-serif;
}
```

### Web字体

现代浏览器可直接向用户提供字体：

- woff（web open font format）格式文件可以在请求时提供字体

- 如果用户是不支持web字体的移动设备，仍然需要制定候选字体

步骤：

- 确定字体

- 在服务器上备齐所有的字体文件格式
  
  - `.ttf`
  
  - `.otf`
  
  - `.eot`
  
  - `.svg`
  
  - `.woff`

- 在CSS中增加`@font-face`属性

```css
/*
    1. @font-face会建立一个字体，将指定一个font-family名，以便以后使用
    2. 用font-family属性为新字体创建名字，一般与其本名一致
    3. src属性告诉浏览器在哪里得到这个属性
    4. 在CSS中使用web字体
    5. 加载页面测试
*/

@font-face {
    font-family: "Emblema One";
    src: url("EmblemaOne-Regular.woff")
         url("EmblemaOne-Regular.ttf")
}

h1 {
    font-family: "Emblema One"
}
```

- `@font-face`是一个CSS内置规则，不是一个选择器规则，还有两个常见的CSS内置规则：
  
  - `@import`：允许导入其他CSS文件
  
  - `@media`：允许创建某种“媒体”类型规则

- web字体托管服务：
  
  - 直接用ulr连接到托管网站：
  
  - [FontSquirrel](http://www.fontsquirrel.com/)
  
  - [Google web 字体服务](http://www.google.com/webfonts)

- 尽量还是使用本机字体服务，web字体会拖慢相应速度

### 字体大小

```css
/*
    1. 用px值指定字体大小，px必须紧跟在像素数后面，之间不能有空格
     . 在css中，自摸最低部分与最高部分之间有 px 像素
    2. 用一个百分数指定字体大小时，会相对于另一个字体大小指出这个字体有多大
     . 用百分数指定字体大小时是相对于父元素字体大小
    3. 用em制定字体大小，em是一个比例因子
     . em指定字体大小是相对于父元素字体大小
    4. 用关键字指定字体大小
     . 关键字包括xx-small, x-small, small, medium, large, x-large, xx-large浏览器默认
     . 如果关键字为small，像素大小大约是12px
*/

body {
    font-size: 14px;    
}
h1 {
    font-size: 150%;
}
h2 {
    font-size: 1.5em;
}
body {
    font-size: small;    
}
```

如何指定字体大小：使不同浏览器显示一致效果

- 选择一个关键字（推荐small或medium），指定它作为body规则中的字体大小，这相当与页面默认字体大小

- 使用em或百分数，相对于body字体大小指定其他元素字体大小

- 不同浏览器的默认字体body大小一般为16px

- 在body规则中直接使用90%，则是默认字体大小的90%

- h1是默认体文本字体大小的200%，以此类推150%，120%，100%（h4），90%，60%

### 字体粗细

```css
/*
    1. 可以用font-weight控制字体粗细
    2. 该属性的值为 bold与normal
*/

body{
    font-weight: bold;
    font-weight: normal;
}
```

### 字体风格

```css
/*
    1. italic 斜体和 oblique 倾斜使字体看起来是倾斜的
    2. 使用 font-style 属性得到倾斜文本
    3. 字体和浏览器的风格会导致有时候 斜体和倾斜是一样的，这个有时候根本无从控制
     . 任选其一即可
*/

body {
    font-style: oblique;
    font-style: italic
}
```

### 字体颜色

- 用rgb表示每个通道处于0-255之间

- 颜色可以用hexadecimal表示，2位16进制数可以表示256个十进制数，（8位二进制数）

- rgb两位16进制数如果都相等可以用一个位表示

### 文本装饰

设置 text-decoration 属性

```css
/*
    1. line-through 会让文本中间出现穿过的横线
    2. underline;overline 写在一起就是让文本上下方体现划线
    3. none 可以让文本没有任何装饰
    4. 如果想让装饰效果累加，就要写在同一个规则里
*/
em {
    text-decoration: line-through;
}
em {
    text-decoration: underline overline;
}
em {
    text-decoration: none;
}
```

HTML中的删除线标签：

- `<del>`：把HTML中的某些内容标记为要删除的内容

- `<ins>`：把HTML中的某些内容标记为要插入的内容

### 行间距

- line-height

```css
/*
    1. 首先用关键字定义字体的大小
    2. 定义字体类型
    3. line-height 定义行距，是1.6倍的字体大小
    4. 在出版行业中行间距也称leading
*/

body {
    font-size: small;
    font-family: Verdana, Helvetica, Arial, sans-serif;
    line-height: 1.6em;
}
```

## 盒模型

- 从CSS角度看，每个元素是一个盒子，每个盒子由一个内容区以及可选的内边距，边框，和外边距组成
  
  - content area
  
  - padding
  
  - border
  
  - margin

- 元素的背景颜色（或背景图像）会延伸到内边距下面，但不会延伸到外边距

```css
/*
    1. border-color 边框颜色
     . border-width 边框宽度
     . border-style 边框样式 groove 槽线；solid 实线；double 双线；outset 外凸；dotted 虚线；dashed 破折线；inset 内凹；ridge 脊线
     . border-width 边框宽度 关键字：thin（1px）；medium（2px）；thick（4px）或者直接按像素指定
     . border-color 边框颜色 关键字：red 或 rgb（204， 102，0）或 #ff0000
     . border-top（left；right；bottom）-color（style；width）可以独立指定某一边框
     . border-radius 边框圆角半径
     . border-top-left-radius 边框左上角圆角半径（要放在上一条指令之下）
    2. padding 内边距
     . padding-left 左内边距（要放在上一条指令之下）
    3. margin 外边距
     . margin-left 左外边距（要放在上一条指令之下）
    4. background-image url(img.png) 指定背景图片
     . background-repeat 背景图片是否平铺 repeat默认；repeat-x在水平方向平铺；repeat-y在垂直方向重复；inherit 按父元素的设置来处理; no-repeat 不平铺
     . background-position 背景图片位置 top left；
*/

body {
    line-height: 1.9em;
    font-style: italic;
    font-family: Georgia, "Times New Roman", serif;
    color: #444444
    border-color: black;
    border-width: 1px;
    border-style: solid;
    background-color: #a7cece;
    padding: 25px;
    margin: 30px;
    background-image: url(images/background.gif)
    background-repeat: no-repeat;
    background-position: top left;    
}
```

如果是唯一样式，最好对id使用selector而不是对class：

- eg：包含页面页脚的一个段落；包含任务列表的一个`<ol>`元素；包含每日图片的`<img>`元素

注意：

- 一个id可以出现在多个页面中，

- 一个页面只能含有一个id

- 出现在多个页面中的同一个id可以制定不同的元素

```css
/*
    1. 选择id的两种方式
    2. 选择类的两种方式
*/

#footer {
    color: red;
}
p#footer {
    color: red;
}
.class1 {
    color: red;
}
p.class1 {
    color: red;
}
```

### 混合样式表

- 在HTML中可以制定多个样式表，各种样式表从上到下排列，最下面的样式表最优先

- 有时候有一个样式表作为页面的基础样式，要修改样式不是修改这个样式表而是链接这个样式表，然后在它下面提供你自己的样式表，制定你想修改的样式

```html
<!DOCTYPE html>
<html lang="all">
    <head>
        <meta charset="utf-8">
        <title>Head First</title>
        <link href="css1.css" rel="stylesheet">
        <link href="css2.css" rel="stylesheet">
        <link href="css3.css" rel="stylesheet">
    </head>
    <body>

    </body>
</html>
```

- 针对不同的设备采用不同的样式表，利用`media`属性

```css
<!--
    1. 指定有屏幕的设备，而且屏幕宽度不超过480像素
    2. 匹配打印机设备
    3. 查询中还有许多属性可以用，如 min-device-width；max-device-width；orientation (landscape; portrait) 等
    4. 可以为HTML增加多个<link>标记涵盖你要支持的所有设备
-->

<link href="mobile.css" rel="stylesheet" media="screen and (max-device-width: 480px)">
<link href="print.css" rel="stylesheet" media="print">
```

- 还可以直接在CSS中增加媒体查询

```css
/*
    1. 使用@media规则，对于这个查询匹配的设备，将所有适用的规则放在大括号里
    2. 采用这种方式@media规则中只包含特定于一种媒体类型的CSS规则。在CSS文件中要把对所有媒体类型都通用的规则放在所有@media规则的下面，这样就不用不必要的重复规则了。浏览器加载页面时，它会通过媒体类型来确定页面适用的规则，而将不匹配的规则忽略。
    3. selector 选择id和类的时候，#和.与id与类之间不能有空格，否则会识别不出来
*/

@media screen and (min-device-width: 480px) {
    #guarantee {
        margin-right: 250px;
    }
}
@media print {
    body {
        font-family: Times, "Times New Roman", serif;
    }
}

p.all {
    color: red;
}
```

- 媒体查询是目前标准组织在积极发展的一个领域，所以要密切关注指定设备的最佳实践，这方面还在不断演进和发展

- 注意：如果使用@media有时会让css文件特别庞大，所以建议使用<link>元素来制定不同样式

## 高级WEB建设

### 块逻辑分区

- `<div>`与`id` 共同使用 div is short for division

- 在页面中不要滥用div，如果有助于将页面分解为逻辑区，从而保证结构清晰并便于指定样式，那么可以增加更多的结构，如果只是为了在页面中创建大量结构而增加div，就只会让页面复杂，而没有任何实际好处

**边角知识**：

- `width:200px;`  指定元素内容区的宽度

- 盒模型的总宽度 = 内容区宽度 + 左右外边距 + 左右内边距

- 一个块元素的默认宽度是 auto 会延伸占满整个可用空间

- 指定宽度有不同的方法：
  
  - 具体大小，通过按像素指定
  
  - 百分数：宽度为元素所在容器宽度的一个百分比，容器可以是body div等

- `text-align` 会对块元素中的所有内联内容对齐，并且这个属性只能在块元素中设置，而不能直接在内联元素中设置

### 子孙选择器

- 可以按树模型选择某一个元素

```css
/*
    1. 两级元素之间用空格分隔
    2. 用id与元素共同组成子孙选择器
*/

div h2 {
    color: black;
}

#elixirs h2 {
    color: black;
}
```

注意：

- 上述例子1中，子孙选择器会选择所有嵌套在div中的h2元素，无论该元素嵌套的有多深

- 选择一级子孙的方法：

```css
/*
    1. 仅仅选择div的一级子孙h2元素
    2. 以空格分隔的子孙选择器只针对嵌套关系，符合嵌套关系的都会被选择
*/

#elixirs > h2 {
    color: black;
}

#elixirs blockquote h2 {
    color: blue;
}
```

**边角知识**：

- 行高：em is short for the height of elements 相对于父元素的大小

```css
/*
    1. div中所有元素都会继承这个属性，包括标题，其行高是父元素指定字符高度的1倍，假设默认是medium则一般为16px
     . 属性值设为 1em
    2. 我们希望line-height更灵活些，根据不同的字符大小改变，如h2为16px的150%，我们则希望行高是h2的一倍
     . 属性值设为 1
*/

#elixirs {
    line-height: 1em;
}

#elixirs {
    line-height: 1
}
```

### 快捷方式：

```css
/*
    @. 对边距的简写快捷方式
    1. 顺时针指定边距：上，右，下，左
    2. 所有边距相等，统一指定边距：边距值
    3. 上下边距相等，左右边距相等：上下边距 左右边距

    @. 对边框的简写快捷方式
    1. width style color 可以用border一个属性代替，顺序随意

    @. 对背景的简写快捷方式
    1. color image repeat 可以用background一个属性代替，顺序可互换

    @. 对字体的简写快捷方式
    1. 必须制定字体大小 font-size
    2. 如果指定行高，则必须紧邻字体大小 font-size/line-height
    3. 指定 font-family
     . 前三个属性必须按顺序放在最后
    4. font-style font-weight font-decoration 可以乱序放在 font-size之前
     . font: font-style font-weight font-decoration font-size/line-height font-family
*/

body {
    padding: 0px 20px 30px 10px;
    margin: 0px 20px 30px 10px;
    padding: 10px;
    margin: 10px;
    padding: 10px 20px;
    margin: 10px 20px;
}

body {
    border: thin solid #007e7e;
}

body {
    background: white url(images/x.gif) repeat-x;
}

body {
    font: small/1.6em Verdana, Helvetica, Arial, sans-serif;
}
```

参考手册：《CSS Pocket Reference》

### 内联逻辑分区

- `<span>`
  - 增加`<span>`标记
  - 分类class
  - 指定`span`样式

### 伪类Pseudo-class

`<a>`元素的不同状态：

- 未访问状态 `a:link` 需要清空历史记录才能看到

- 已访问状态 `a:visited`

- 悬停状态链接 `a:hover`

- 键盘选择的焦点状态 `a:focus`

- 用户第一次单击链接，就是活动状态 `a:active`

一般要通过如下顺序来处理处于多种状态的情况：

- `link,visited,hover,focus,active`

其他伪类：

- `first-child` 对应元素的第一个子元素，如blockquote中的第一个段落

- `last-child` 对应元素的最后一个子元素，如blockquote中的最后一个段落

本质：

- 浏览器默认定义的一些"类"

- 可以根据访问者使用页面的情况来对元素指定样式

### 层叠

用户访问页面时还有一些另外的样式表

- 作者为页面写的css

- 用户为HTML自己创建的样式，如果你的样式中没有定义这些样式，就会使用用户创建的样式

- 浏览器本身会维护一个默认样式

最优先的是作者样式，然后是读者样式，最后才是浏览器默认样式

层叠的作用：让浏览器确定某个元素的样式

- 浏览器层叠的顺序：
  
  - 收集所有样式表
  
  - 找到所有匹配的声明
  
  - 现在对所有匹配的规则排序
    
    1. 作者
    
    2- 用户
    
    3- 浏览器默认
  
  - 现在按特定性对所有规则排序
    
    1. 选择器包含id，每个id加100
    
    2. 选择器包含类或伪类，每个类加10
    
    3. 选择器包含元素，每个元素加1
    
    4. 得分越大越特定

- 对于冲突规则，按照它们在各个样式表中出现的顺序排序

- 找到一个赢家

- 如果没有找到包含特定属性声明的规则，那么就去查找其父类

## 布局与定位

### 流体布局 Liquid Layouts

#### 流 Flow

- 流实际上就是浏览器在页面上摆放HTML元素所用的方法。浏览器从HTML文件最上面开始，从上到下沿着元素流逐个显示所遇到的各个元素。元素可以分为块元素和内联元素；首先对于块元素，它会在每个块元素之间加入一个换行。所以首先会显示文档中的第一个元素，然后是一个换行，如此继续，从文件最上面一直到文件末尾逐个显示，这就是FLow

- 对于内联元素，流从左上方流向右下方，对于文本浏览器会用不同方式分解文本，使它能刚好适合内容区的大小

- 如果每个块元素的内联内容在内容区的宽度范围内能够放下，就会放在那里；否则，会为内容留出更多垂直的空间，在下一行继续

- 浏览器并排放置两个**内联元素**的时候，这些元素都有外边距，浏览器会在元素之间创建足够的空间，相当于两个外边距之和

- 浏览器上下放置两个**块元素**的时候，会把它们共同的外边距折叠在一起，折叠的外边距高度就是最大的外边距高度
  
  - 只要两个垂直外边距碰到一起，它们就会折叠，即使是一个元素嵌套在另一个元素中也不例外。注意，如果外面的元素有一个边框，那么两个元素的外边距就不会碰到一起，这样也就不会折叠。如果把这个边框去掉，这两个外边距就会折叠。

#### float 浮动元素

如何浮动元素：

1. 首先指定一个id

2. 对浮动元素指定一个宽度，必须制定

3. 在CSS中添加`float: right;`
   
   - 会浮动到右边，还有left值，这样就只能浮动到左边

浏览器如何处理浮动元素：

1. 浏览器正常地将元素流入页面，从文件最上面开始，逐步移向末尾的元素

2. 浏览器遇到浮动元素时，会把它尽可能放在最右边。还会从流中删除这个这个段落，就好像它浮在页面上一样

3. 由于这个浮动段落已经从正常的流中删除，所以其他块元素会填在这里，就好像根本没有这个段落一样。

4. 对于内联元素定位时它们会考虑浮动元素的边界，因此会围绕着浮动元素

5. 可以使用元素的CSS clear属性来提出请求：当元素流入页面时，紫这个元素左边，右边，或两边不允许有浮动内容

注意：

- 不可以浮动到中间

- 浮动元素的外边距不会折叠

- 常见错误：如果有一个主内容区和一个边栏，通常会对它们分别设置一个上外边距。然后如果浮动边栏，它仍然有一个外边距，但这个外边距不会再与它上面的空间折叠，这样一来，如果你不记得浮动元素不会折叠外边距，最后边栏和主内容很有可能会有不同的外边距

- 将图像在段落中向左或向右浮动

### 冻结设计 Frozen Layouts

```css
<!--
    1. 修改HTML，新增一个div元素添加id为 allcontent
    2. 将它包围<body>中所有其他元素
-->

<body>
    <div id="allcontent">
        ...
    </div>
</body>
```

```css
/*
    1. 限制 allcontent <div> 中所有元素和内容的大小，使它们有一个固定的宽度：800px
    2. 包含一些外边距和内边距让页面更清晰
*/

#allcontent {
    width: 800px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #675c47
}
```

流体和冻结之间的状态：凝胶 Jello

- 这种布局下页面会居中显示

```css
#allcontent {
    width: 800px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #675c47;
    margin-left: auto;
    margin-right: auto;
}
```

#### 绝对定位：

- 一个元素绝对定位时，浏览器首先要做的是将它从流中完全删除，然后浏览器将这个元素放置在top和right属性指定的位置上（也可以用bottom和left或它们的组合），分别代表距浏览器页面的某个边的距离。

- 定位元素有一个 z-index 属性，这会指定它在一个虚拟z轴上的位置（上面的元素更靠近你，值更大）

```css
/*
    1. 两个元素，id分别为first与second
    2. 两元素都用 top 与 left 定位
    2. first在上，second在下
*/

#first {
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: 1;
}
#second {
    position: absolute;
    top: 100px;
    left: 50px;
    z-index: 0;
}
```

注意：

- position 的默认属性是 static 元素会被放在流中

- position 有四个属性：
  
  - static 元素放在流中，自动定位
  
  - absolute 元素从流中删除，在页面中，绝对位置
  
  - fixed 元素从流中删除，在窗口的绝对位置
  
  - relative 让元素正常流入页面，不过在页面显示之前要进行偏移

- 指定元素位置：如果用百分数指定，会按照所在父元素的宽度百分比计算位置

- top，right，bottom，left值都可以是负值，按照坐标理解即可

### CSS表格显示

允许你在一个有行和列的表格中显示块元素（稍后会看到），另外通过将内容放在一个CSS表格中，可以很容易地用HTML与CSS创建多栏设计

- 为整个表格创建一个`<div>`

- 为每一行创建一个`<div>`

- 对于每一列就是在行中放入块级元素

```html
<!--
    1. 构建整个表格的结构
-->

<div id="tableContainer1x2">
    <div class="tableRow">
        <div id="content1x1">
            ...
        </div>
        <div id="content1x2">
            ...
        </div>
    </div>
</div>
```

```css
/*
    1. 构建表格样式
    2. table 的 border-spacing 属性是不会与垂直元素的外边距折叠的
*/

div#tableContainer1x2 {
    display: table;
    border-spacing: 10px;
}
div.tableRow {
    display: table-row;
}
div#content1x1 {
    display: table-cell;
    vertical-align: top;
}
div#content1x2 {
    display: table-cell;
    vertical-aligh: top;
}
```

## HTML5标记

新增标签简化div

| Label       | Meaning                             |
| ----------- | ----------------------------------- |
| `<article>` | 表示页面中一个独立的组成部分，如一个博客帖子，用户论坛帖子，或新闻报道 |
| `<nav>`     | 所包含的内容将作为页面导航链接                     |
| `<header>`  | 放在页面顶部的内容或者放在页面某个区块的顶部              |
| `<footer>`  | 页面底部的内容或者放在页面某个区块的底部                |
| `<time>`    | 可能包含一个日期或时间，也可能同时包含时期和时间            |
| `<aside>`   | 包含的内容是对页面内容的补充，如插图或边栏               |
| `<section>` | 一个主题性的内容分组，通常包括一个header可能还有一个footer |
| `<video>`   | 用来为页面增加视频媒体                         |
| `mark`      | 用于突出显示某些文本就像记号笔一样                   |
| `audio`     | 用于在页面中包含声音                          |
| `progress`  | 用于显示任务的完成进度                         |
| `meter`     | 用于显示某个范围的度量                         |
| `canvas`    | 用来在页面中显示JavaScript绘制的图像和动画          |
| `figure`    | 用于定义类似照片，图表甚至代码清单等独立的内容             |

- 组织有相关性的内容就要用到section，而对于独立的内容则要使用article，如果需要把感觉并不相关的内容组织在一起，往往可以用`div`做后备

`<time>`元素的说明:

- 它有一个重要的属性：datetime

- `<time datetime="2012-02-18">2/18/2012</time>`

- 如果元素没有按照官方格式写，就必须要有datetime属性

官方格式：

| Format            | Interpretation |
| ----------------- | -------------- |
| 2019-10           | 可以只指定年和月       |
| 2019              | 也可以只指定年        |
| 2019-10-20 16:40  | 可以指定时间24h      |
| 16:40             | 可以只指定时间        |
| 2019-10-20 16:40z | 表示UTC时间 GMT    |

**边角知识：**

- `<li>`元素有一个属性是 display，默认是block，可以改成inline将其改为内联元素

- 导航栏一般就是`<nav>`元素包含无序列表`<ul>`构成的

`<video>`元素说明：

- `<video controls autoplay width="512" height="288" src="video.mp4"></video>`

- 不同的浏览器支持不同的video格式：

| Browser                 | 容器格式             | 数据格式                  |
| ----------------------- | ---------------- | --------------------- |
| Safari &  IOS           | .MP4             | H.264视频和AAC音频         |
| Google Chrome & Android | .WebM            | VP8视频和Vorbis音频        |
| Firefox or Opera        | 总格式.ogv；容器格式.ogg | Theora视频（开源）和Vorbis音频 |

```html
<!--
    1. 有controls会提供控件
    2. 有autoplay会自动播放
    3. 页面中视频的宽度和高度
    4. 视频的源位置
    5. 提供一个可选的海报图像，视频未播放时显示
    6. 可以增加id
-->

<video controls
       autoplay
       width="512" height="288"
       src="video.mp4"
       poster="images.png"
       id="video">
</video>
```

其他重要属性：

- preload 
  
  - 通常用于细粒度地控制视频如何加载，来实现优化。大多数情况下，浏览器会根据是否设置autoplay以及用户的带宽来选择加载多少视频，可以覆盖这种设置，将preload设为none，在用户真正播放视频之前不下载视频，也可以设置为“metadata”（下载视频元数据，但不下载视频内容），或者可以设置为“auto”，让浏览器默认决定

- width，height
  
  - 会设置视频显示区（视窗）的宽度和高度，poster和视频都会缩放到指定的宽度和高度，视频也会缩放，不过会保持其宽高比，所以如果两边或者上下边有多余的空间，视频会采用上下加黑边（letter-boxed）或左右加黑边（pillar-boxed）的模式来适应显示区大小
  
  - 为保证最佳性能，尽量采用原视频的大小

根据视频格式获取视频的方法：

```html
<!--
    1. 对于每个source元素，浏览器会加载视频文件的元数据，查看能不能播放这个视频
    2. 如果没有符合的格式，浏览器就会显示下面这些文本
    3. 这样性能不佳，可以更具体的制定格式，换取更优的性能
-->

<video controls autoplay width="512" height="288">
    <source src="video.mp4">
    <source src="video.webm">
    <source src="video.ogv">
    <p>Sorry, your browser doesn't support the video element</p>
</video>
```

更具体地制定视频格式：

- src中使用的文件实际上是具体视频（和音频以及一些元数据）的容器

- type是一个可选属性，这是向浏览器提供的一个提示，帮助它确定能不能播放这种类型的文件

- codecs参数指定使用哪个编解码器对视频和音频进行编码

- 单双引号混用来制定视频的编码器和音频的编码器

```css
<source src="video.ogv"
        type='video/ogg; codecs="theora, vorbis"'>
```

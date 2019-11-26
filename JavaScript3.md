# avaScript

## 3 基本概念

- 语法

- 数据类型

- 流控制语句

- 函数

本章主要按照第3版定义的 ECMAScript 介绍这门语言的基本概念，并就第5版的变化给出说明

### 3.1 语法

ECMAScript 的语法大量借鉴了“C”及其他“类C语言”（如 Java 和 Perl）的语法

#### 3.1.1 区分大小写

ECMAScript（以下简称ES）中的一切（变量，函数名和操作符）都区分大小写。这也就意味着，变量名 test 和变量名 Test 分别表示两个不同的变量，而函数名不能使用 typeof， 因为它是一个关键字，但 typeOf（O大写了）则可以是一个有效的函数名

#### 3.1.2 标识符

标识符是指**变量，函数，属性的名字，或者函数的参数**，标识符可以是按照下列格式规则组合起来的一或多个字符：

1. 第一个字符必须是：字母，下划线`_`，或一个美元符号`$`

2. 其他字符可以是：字母，下划线，美元符号或数字

3. 标识符中的字母也可以包含扩展的ASCII 或Unicode字母字符，但并不推荐这样做

**注意：**

- 按照惯例标识符采用驼峰命名法书写，第一个单词小写其他单词首字母大写（最佳实践）

- 不能把关键字，保留字，true，false，和null用作标识符

#### 3.1.3 注释

ES 使用 C 风格的注释，包括单行注释和块级注释

```javascript
//单行注释
/*
    多行注释
*/
```

#### 3.1.4 严格模式

ES 5 引入了严格模式（strict mode）的概念。严格模式是为 JavaScript定义了一种不同的解析与执行模型。在严格模式下，ES 3中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码：

```javascript
"use strict" //全局严格模式

function doSomething(){
    "use strict";
    //局部严格模式
}
```

严格模式代码看起来像字符串，而且也没有赋值给新变量，但其实它是一个编译指示（pragma），用于告诉支持的JavaScript引擎切换到严格模式，这是为了不破坏 ES 3而特意选定的语法

#### 3.1.5 语句

ES中的语句以一个`;`结尾。如果省略，则由浏览器确定语句的结尾，通常情况下会导致错误

### 3.2 关键字和保留字

有`*`的是ES 5新增关键字

| 关键字         | 关键字      | 关键字        | 关键字    |
| ----------- | -------- | ---------- | ------ |
| break       | do       | instanceof | typeof |
| case        | else     | new        | var    |
| catch       | finally  | return     | void   |
| continue    | for      | switch     | while  |
| `debugger*` | function | this       | with   |
| default     | if       | throw      | delete |
| in          | try      |            |        |

ES 3定义的全部保留字如下：

| 保留字      | 保留字        | 保留字       | 保留字          |
| -------- | ---------- | --------- | ------------ |
| abstract | enum       | int       | short        |
| boolean  | export     | interface | static       |
| byte     | extends    | long      | super        |
| char     | final      | native    | synchronized |
| class    | float      | package   | throws       |
| const    | goto       | privte    | transient    |
| debugger | implements | protected | volatile     |
| double   | import     | public    |              |

ES 5 把非严格模式下运行时的保留字缩减为下列这些：

| 保留字   | 保留字    | 保留字     | 保留字   |
| ----- | ------ | ------- | ----- |
| class | enum   | extends | super |
| const | export | import  |       |

在严格模式下，第5版还对以下保留字施加了限制：

| 保留字        | 保留字       | 保留字    |
| ---------- | --------- | ------ |
| implements | package   | public |
| interface  | private   | static |
| let        | protected | yield  |
| eval       | arguments |        |

### 3.3 变量

ES的变量是松散型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说：每个变量仅仅是一个用于保存值的占位符。定义变量要用 var 操作符（var 是一个关键字，后跟变量名，即一个标识符），可以在修改变量的同时修改值的类型，但是并不推荐修改变量的类型。

**注意：**

- 在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁

```javascript
function test(){
    var message = "hi"; //局部变量
}
test();
alert(messagge);        //错误

function test(){
    message = "hi";     //不用var创建，则为全局变量
}
test();
alert(message);         //"hi"
```

- 虽然省略 var 可以定义全局变量，但是这也并不推荐，因为在局部作用域中定义的全局变量很难维护，而且如果有意地忽略了 var 也会由于相应变量不会马上定义而导致不必要的混乱，给未经声明的变量赋值在严格模式下会抛出 ReferenceError 错误。

### 3.4 数据类型

ES有5种数据类型：

1. Undefined

2. Null

3. Boolean

4. Number

5. String

和一种复杂数据类型Object：本质是由一组无序的名值对组成的

#### 3.4.1 typeof操作符

鉴于ES是松散类型的，因此需要有一种手段来检测给定变量的数据类型，对一个值使用 `typeof` 操作符可能会返回下列某个字符串：

| 返回的字符串      | 情形        |
| ----------- | --------- |
| "undefined" | 值未定义      |
| "boolean"   | 值为布尔值     |
| “string”    | 值是字符串     |
| “number”    | 值是数值      |
| “object”    | 值是对象或null |
| “function”  | 值是函数      |

- 从技术角度讲，函数在ES中是对象，不是一种数据类型，然而函数也确实有一些特殊的属性，因此通过 typeof 操作符来区分函数和其他对象是有必要的

#### 3.4.2 Undefined类型

Undefined类型只有一个值，即特殊的undefined。在使用var 声明变量但未对其初始化时，这个变量的值就是undefined：

```javascript
var message
alert(message == undefined);   //true
```

- 一般而言，不存在需要显示地把一个变量设置为undefined值的情况。字面值 undefined 的主要目的是用于比较，引入这个值是为了正式区分空对象指针与未经初始化的变量

- 不过，包含 undefined 值的变量与尚未定义的变量韩式不一样的

```javascript
var message
// var age 这个变量没有声明

alert(message);    //"undefined"
alert(age);        //产生错误

typeof message；   //"undefined"
typeof age;        //"undefined"
```

运行以上代码，第一个警告框会显示变量message的值，即“undefined”。第二个警告框由于传递给 alert() 函数的是尚未声明的变量 age 则会导致一个操作错误，然而令人困惑的是，对于未初始化和未声明的变量执行typeof操作符都反回了 undefined

#### 3.4.3 Null类型

Null类型是第二个只有一个值的数据类型，这个特殊值就是null，从逻辑角度来看，null值表示一个空对象指针，而这也正是使用typeof操作符检测null 值时会返回“object”的原因：

```javascript
var car = null;
alert(typeof car);   //"object"
```

- undefined 值是派生于 null值的，因此ES3规定对它们的相等性测试要返回true：

```javascript
alert(null == undefined);  //true
```

- 最佳实践：把盛放对象的变量初始化为null

#### 3.4.4 Boolean 类型

该类型只有两个字面值：true 和 false，这两个值与数字值不是一回事，因此 true 不一定等于 1，false 也不一定等于 0

**注意：**

- Boolean 类型的字面值true和false是区分大小写的，也就是说，True和False都不是Boolean值，只是标识符。

- 可以对任何数据类型的值调用 `Boolean()` 函数，而且总会返回一个 Boolean 值：

| 数据类型      | 转换为 true 的值          | 转换为 false 的值 |
| --------- | -------------------- | ------------ |
| Boolean   | true                 | false        |
| String    | 任何非空字符串              | “”（空字符串）     |
| Number    | 任何非零数字值（包括 infinity） | 0 和 NaN      |
| Object    | 任何对象                 | null         |
| Undefined | n/a                  | undefined    |

- n/a（或 N/A）是 not applicable 的缩写，意思是“不适用”

- 这些语句对理解流控制语句（如 if 语句）自动执行相应的Boolean转换非常重要：

```javascript
var message = "Hello car";
if (message){
    alert("Value is true")
}
// Value is true 在判断语句中会自动进行类型转换
```

#### 3.4.5 Number 类型

Number类型使用 IEEE754格式来表示整数和浮点数值（双精度数值）

最基本的数值字面量格式是十进制整数：

```javascript
var intNum = 55
```

- 整数还可以通过八进制或十六进制字面值来表示，其中八进制字面值的第一位必须是 0 ，然后是八进制数字序列 0-7，如果字面值中的数值超出范围，那么前置0将被忽略，后面数字被当做十进制解析：

- 注意：八进制字面量在严格模式下是无效的，会导致支持该模式的 JavaScript 引擎抛出错误

```javascript
var octalNum1 = 070;    // 八进制的 56
var octalNum2 = 079;    // 无效的八进制数值 解析为 79
var octalNum3 = 08;     // 无效的八进制数值 解析为 8
```

- 十六进制字面值的前两位必须是0x，后跟任何十六进制数字（0-9及A-F），其中，字母A-F可以大写，也可以小写。如下面例子所示：

```javascript
var hexNum1 = 0xA;      // 十六进制的 10
var hexNum2 = 0x1f;     // 十六进制的 31
```

- 在进行算术计算时，所有以八进制和十六进制表示的数值最终会被转为十进制

- 鉴于 JavaScript 中保存数值的方式，可以保存正0和负0，正0和负0被认为相等

##### 3.4.5.1 浮点数值

所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面至少有1位数字

- 由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ES会不失时机地将浮点数值转换为整数值。显然，如果小数点后没有跟任何数字，那么这个数值就会作为整数值来保存，同样的，如果浮点数值本身表示的是一个整数，那么该值也会被转化为整数：

```javascript
var floatNum1 = 1.;      //小数点后没有数，解析为1
var floatNum2 = 10.0;    //小数点后全是0，解析为10
```

- 可以用科学计数法表示极大或极小的数：

```javascript
var floatNum = 3.125e7   //等于31250000 e 或 E 均可 
```

- 浮点数值的最高精度是17位小数，但是只要不能用二进制精确表示的浮点数都不能进行精确地四则运算，这是使用基于IEEE754数值的浮点计算的通病，ES并非仅此一家

```javascript
function test(a,b,c){
    if (a + b == c){
        alert(true)
    }
}
test(0.1,0.2,0.3)    //没有提示框！
test(0.2,0.2,0.4)    //提示true！
```

##### 3.4.5.2 数值范围

- 由于内存限制，ES并不能保存所有数值，ES能够表示的最小数值存在`Number.MIN_VALUE`中，在大多数浏览器中，这个值是`5e-324`；能够表示的最大数值存在`Number.MAX_VALUE`中，这个值一般是`1.7976931348623157e+308`，如果某次计数的结果超出了JS的数值范围，这个值将被自动转为`Infinity`和`-Infinity`

- 要想确定一个数值是不是有穷的（换句话说，是不是位于最小值和最大值之间）可以用`isFinite()`函数。这个函数在参数位于范围之间时会返回true

- `Number.NEGATIVE_INIFINITY`和`Number.POSITIVE_INFINITY`也可以得到负和正`Infinity`值。可以想见，这两个属性中分别保存着`-Inifnity`和`Infinity`

##### 3.4.5.3 NaN

非数值：not a number是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。例如，在其他编程语言中，任何数值除以非数值都会导致其错误，从而停止代码执行。但是在ES中，任何数值除以非数值会返回 Nan，因此不会影响其他代码的执行

- NaN 本身有两点性质：
  - 任何涉及NaN的操作都会返回NaN
  
  - NaN 与任何值都不相等，包括NaN本身，以下代码会返回false

```javascript
alert(NaN == NaN);    //false
```

- `isNaN()`接受一个参数，返回布尔值：is not a number()

```javascript
isNaN(NaN)    //true
isNaN(10)     //false
isNaN("10")   //false （自动类型转换）
isNaN("blue") //true
isNaN(true)   //false （自动类型转换）
```

- `isNaN()`函数同样适用于对象。在基于对象调用isNan()函数时，会首先调用对象的`valueOf()`方法，然后确定该方法返回的值时候可以转为数值，如果不能（为 `NaN`），则基于这个返回值再调用`toString()`方法，再测试返回值

- 这也是ES中内置函数和操作符的一般执行流程，具体见3.5节

##### 3.4.5.4 数值转换

三个函数：`Number()`，`parseInt()`，`parseFloat()`，第一个函数可以用于任何数据类型，另外两个函数则专门用于把字符串转为数值，这三个函数对于同样的输入会有返回不同的结果。

- `Number()` 规则如下：
  
  - 如果是Boolean值，true和false将分别被转为1和0
  
  - 如果是数字，简单传入返回
  
  - null，返回 0
  
  - undefined，返回 NaN
  
  - 如果是字符串，遵循以下规则：
    
    - 如果只包含数字和符号（包括Infinity），转为十进制数，首位0会被忽略
    
    - 如果是空字符串则转为 0
    
    - 如果字符串包含有效十六进制数，则转为大小相等的十进制
    
    - 如果包含除上述以外的其他字符，则转为 NaN
  
  - 如果是对象，则调用对象的`valueOf()`方法，然后依照前面的规则转换返回的值，如果结果为`NaN`，调用对象的`toString()`方法，然后再次依照前面的规则转换返回的字符串值

- `parseInt()`
  
  - 会忽略前导的空字符
  
  - 会逐个判断字符串，如果是数字则往下继续判断，否则转为NaN
  
  - 直至遇到末尾字符，或者遇到非数字，如小数点：22.5 会转为 22
  
  - 可以指定第二个参数，作为基数，如 8，10，16
  
  - 会忽略前导的空字符

- `parseFloat()`
  
  - 只能解析为十进制，没法制定基数
  
  - 如果传入一个整数，也会返回整数

#### 3.4.6 String 类型

用于表示由0或多个16位 Unicode 字符组成的字符序列，即字符串，字符串可以由双引号或单引号表示，两种方式完全相同，但不能混用

##### 3.4.6.1 字符字面量

转义序列：

| 字面量      | 含义               |
| -------- | ---------------- |
| `\n`     | 换行               |
| `\t`     | 制表               |
| `\b`     | 退格               |
| `\r`     | 回车               |
| `\f`     | 进纸               |
| `\\`     | 斜杠               |
| `\'`     | 单引号              |
| `\"`     | 双引号              |
| `\xnn`   | 以十六进制代码nn表示的一个字符 |
| `\unnnn` | 一个Unicode字符      |

##### 3.4.6.2 字符串特点

- 不可变

- 一旦创建，若想更改，只能销毁重建

```javascript
var lang = "Java";
lang = lang + "Script";
```

- 该例的实现过程是，先创建一个能容纳10个字符的新字串，然后向其中填充`Java`和`Script`，最后将原字符串`Java`和`Script`销毁，因为这两个字符串已经没有用了，这个过程是在后台发生的

##### 3.4.6.3 转换为字符串

有两种方式将一个值转为字符串：

- 调用几乎每个值都有的`toString()`方法
  
  - 数字，布尔值，对象和字符串值，都有一个`toString()`方法，但是null和undefined没有这个方法
  
  - 该方法返回一个原值的副本
  
  - 一般不用传参，但调用数值类型的该方法时可以传入一个进制基数，默认十进制
  
  - 调用null和undefined的该方法不会报错，而是直接忽略

- 使用`String()`函数可以将任何的值转为字符串
  
  - 如果值有`toString()`方法则调用
  
  - `null`返回`"null"`
  
  - `undefined`返回`"undefined"`

- 如果想把某个值转换为字符串，可以使用加号操作符，把它与一个字符串（“”）加在一起

#### 3.4.7 Object类型

ES中的对象是一组数据和功能的集合。对象可以通过执行`new`操作符后跟“对象的构造函数（constructor）”来创建：

- ES中的所有对象，都是`Object()`的实例，`Object()`的每个实例都有以下属性和方法：
  
  - `constructor`：保存着用于创建当前对象的函数
  
  - `hasOwnProperty(propertyName)`：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名必须要以字符串的形式传入
  
  - `propertyIsEnumerable(propertyName)`：用于检查给定属性是否能够使用 for-in语句来枚举，参数属性必须以字符串形式传入
  
  - `toLocaleString()`返回字符串，与执行环境地区对应
  
  - `toString()`返回对象的字符串表示
  
  - `valueOf()`返回对象的字符串，数值，或布尔值表示，通常与`toString()`方法的返回值相同

**注意：**

- 从技术角度讲，ES中的对象行为不一定适用于JS中的其他对象，浏览器中的对象如BOM和DOM中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的，ES不负责定义宿主对象，因此宿主对象也可能不会继承 Object

### 3.5 操作符

ES的操作符可以通过调用对象的`valueOf()`和`toString()`适应许多操作符

#### 3.5.1 一元操作符

只能操作一个值：

- 递增递减操作符与C类似：分为前置型和后置型

- 一元加减操作符表示正负

#### 3.5.2 位操作符

用于最基本的层次上，即按内存中表示数值的位来操作数值

- 按位非：`~`

- 按位与：`&`

- 按位或：`|`

- 按位异或：`^`

- 左移：`<<`：在内存中将数字左移，右侧填零，数字会变大

- 带符号右移：`>>`：在内存中将数字右移，左侧以符号位填充：`65 >> 5   //结果为 2`

- 不带符号右移：`>>>`：会以0填充空位，而且均当正数处理。对于正数来说相同，对于负数来说会导致无符号右移的结果非常之大

#### 3.5.3 布尔操作符

- 逻辑非：`!` 两个同时用相当于`Boolean()`，5个假值

```javascript
!!"blue"      //true
!!undefined   //false
!!""          //false
!!0           //false
!!null        //false
!!NaN         //false
```

- 逻辑与：`&&` 当操作数不是布尔值时：
  
  - 如果第一个操作数是对象，则返回第二个操作数
  
  - 如果第二个操作数是对象，则只有在第一个操作数的求值结果为true的情况下才会返回第二个对象
  
  - 如果两个操作数都是对象，则返回第二个操作数
  
  - 如果第一个是null，返回null
  
  - 如果第一个是NaN，返回NaN
  
  - 如果第一个是undefined，返回undefined
    
    - 理解：null，NaN，undefined都是假值，那么在同真才为真的情景下，自然是返回对象的本身

- 逻辑或：`||`当操作数不是布尔值时：
  
  - 如果第一个操作数是对象，则返回第一个操作数
  
  - 如果第一个操作数的求值结果为false，则返回第二个操作数
  
  - 如果两个操作数都是null，才返回null
  
  - 如果两个操作数都是NaN，才返回NaN
  
  - 如果两个操作数都是undefined，则返回undefined
    
    - 短路操作符，从左到右，一旦满足，立即退出

```javascript
var found = true;
var resault = (found || someUndefinedVariable);    //不会发生错误
alert(result);    //会执行true

var found = true;
var resault = (found || someUndefinedVariable);    //这里会发生错误
```

- 可以利用逻辑或的这个行为来避免为变量赋 null 或 undefined 值，例如：当preferredObject为null的时候，会把backupObject值赋给它。当preferredObject不为null的时候，就会直接赋值

```javascript
var myObject = preferredObject || backupObject;
```

#### 3.5.4 乘性操作符

乘；除；求模 《JavaScript高级程序设计》P47

#### 3.5.5 加性操作符

加法操作符，当操作数为字符串时，会将另一个转为字符串，再进行字符串的拼接。注意16进制数值会被转为十进制数值的字符串

#### 3.5.6 关系操作符

小于，大于，小于等于和大于等于，这几个关系操作符用于对两个值进行比较：

- 先进行类型转换，再比较

- 比较字符串时，比较两个字符串对应位置的字符编码值：
  
  - 大写字母的字符编码全部小于小写字母的字符编码

```javascript
var result = "Brick" < "alphabet";               //true
var result = "Brick".toLowerCase() < "alphabet"; //false
var result = "23" < "3";                         //true
var result = "23" < 3;                           //false
var result = NaN < 3;                            //false
var result = NaN >= 3;                           //false
```

#### 3.5.7 相等操作符

- 相等和不相等：`==`；`!=`
  
  - 强制转型后比较，值相等即相等
  
  - 只可以转换字符串类型和布尔值类型，不能转null和undefined
  
  - `null == undefined  //true`
  
  - `NaN != NaN  /true`
  
  - 如果两个操作数都是对象，比较它们是不是同一个对象，如果两个操作数指向同一个对象，则返回true，否则，返回false

- 全等和不全等：`===`；`!==`
  
  - 类型和值都相等才相等
  
  - `null === undefined  //false`

#### 3.5.8 条件操作符

```javascript
variable = boolean_expression ? true_value : false_value;

//find max number
max = (num1 > num2) ? num1 : num2;
```

#### 3.5.9 赋值操作符

如果在等于号前面添加乘性操作符，加性操作符，或位操作符，就可以完成复合赋值操作，使用这些不会带来任何性能上的提升

#### 3.5.10 逗号操作符

可以在一条语句中执行多个操作：

```javascript
var num1 = 1, num2 = 2, num3 = 3;     //多次赋值
var num = (5,1,4,8,0);                //num 的值为 0
```

如上：逗号在用于赋值时，逗号操作符总会返回表达式中的最后一项

### 3.6 语句

#### 3.6.1 if 语句

```javascript
if (condition1){
    statement1;
}else if(condition2){
    statement2;
}else{
    statement3;
}
```

#### 3.6.2 do-while 语句

```javascript
do{
    statement;
}while(expression);
```

#### 3.6.3 while 语句

```javascript
while(expression){
    statement;
}
```

#### 3.6.4 for 语句

```javascript
for (initialization; expression; post-loop-expression){
    statement;
}
```

- 在循环内部定义的变量，在循环外部仍然可以访问到：

```javascript
var count = 10;
for (var i = 0; i < count; i++){
    alert(i);
}
alert(i);    //10
```

- for 语句中的初始化表达式，控制表达式和循环后表达式都是可选的。将这三个表达式全部省略，就会创建一个无线循环

- 只给出控制表达式，就把for循环转换成了while循环

```javascript
for (;;){          //无限循环
    doSomething();
}

var count = 10;
var i = 0;
for (;i < count;){
    alert(i);
    i++;
}
```

#### 3.6.5 for-in 语句

for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性

```javascript
for (property in expression){
    statement;
} 

for (var propName in window){
    document.write(propName);
}
```

- 对象属性没有顺序，因此通过for-in 循环输出的属性名的顺序是不可预测的，具体来讲，所有属性会被返回一次，但返回先后与浏览器而异

- 但是如果迭代对象变量值为 null 或 undefined for-in 语句会抛出错误，ES5 会结束循环，所以为了最大限度保证兼容性，循环前先检测确认该对象是不是 null 或 undefined

#### 3.6.6 label 语句

使用 label 可以在代码中添加标签：一般与 `break`， `continue` 联合使用

```javascript
label: 
statement
```

#### 3.6.7 break 和 continue 语句

用于在循环中精确控制代码执行：

```javascript
var num = 0;

outermost:
for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++){
        if (i == 5 && j == 5){
            break outermost;
        }
        num++;
    }
}
alert(num)  //55
```

```javascript
var num = 0;
outermost:
for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++){
        if (i == 5 && j == 5){
            continue outermost;
        }
        num++;
    }
}
alert(num) //95
```

建议如果使用label语句，一定要使用描述性标签，同时不要嵌套过多循环

#### 3.6.8 with 语句

with语句作用是将代码的作用域设置到一个特定的对象中：

```javascript
with (expression){
    statement;
}

var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with(location){
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
```

- 在 with 语句的代码块内部，每个变量首先被认为是一个局部变量，如果在局部环境中找不到该变量的定义，就会查找 location 对象中是否有同名属性。

- 严格模式下，使用with语句视为语法错误

- 大量使用with语句会导致性能下降，同时也会给调试代码造成困难，因此在开发大型应用程序时，不建议使用 with 语句

#### 3.6.9 switch 语句

```javascript
switch(expression){
    case value:
        statement;
        break;
    case value:
        statement;
        break;
    default:
        statement;
}
```

- switch 中每一个 case 的含义是：如果表达式等于value，则执行后面语句，而 break 会跳出 switch 语句，如果省略 break 关键字，就会导致执行完当前 case 后，继续执行下一个 case

- 最后的 default 关键字则用于在表达式不匹配前面任意一种情形的时候，执行机动代码

- 如果要省略break，要添加注释，说明是故意省略 break 关键字，如下所示：

```javascript
switch(i){
    case 25;
        //合并两种情形
    case 35;
        alert("25 or 35");
        break;
    default:
        alert("Other")
}
```

### 3.7 函数

ES 中的函数使用 function 关键字来声明，后跟一组参数以及函数体：

```javascript
function functionName(arg0, gar1, ..., argN){
    statements;
}
```

ES 中的函数在定义时不必指定是否返回值，如果不指定返回值，返回undefined

- 推荐的做法是要么让函数始终返回一个值，要么永远不要返回值，否则如果函数有时返回值，有时不返回，就会给调试代码带来不便

#### 3.7.1 理解参数

ES 不介意传递多少个参数，也不在乎传进来参数的类型：

- ES 中的参数在内部是用一个数组表示，可以用arguments对象来访问这个参数数组

- arguments对象只是与数组类似（它并不是Array的实例）

- ES 命名的参数只提供便利，但不必需，在命名参数方面，其他语言可能需要事先创建一个函数签名，将来的调用必需与该签名一致，但ES中没有这些条框

```javascript
function doAdd(){
    if(arguments.length == 1){
        alert(arguments[0] + 10);
    }else if(arguments.length == 2){
        alert(arguments[0] + arguments[1]);
    }
}

doAdd(10)      //20
doAdd(30, 20)  //50
```

- arguments 对象可以与命名参数一起使用

```javascript
function doAdd(num1, num2){
    if(arguments.length == 1){
        alert(num1 + 10);
    }else if(arguments.length == 2){
        alert(arguments[0] + num2);
    }
}
```

- arguments对象中储存的值永远与对应的命名参数的值保持同步，虽然两者是不同的内存空间

- ES 中的所有参数传递的都是值，不可能通过引用传递参数

#### 3.7.2 没有重载

- 如果在ES中定义两个名字相同的函数，则该名字只属于后定义的函数

- 在其他语言（如Java）中，可以为一个函数编写两个定义，只要两个定义的签名（接受的参数类型和数量）不同即可

- 通过检查传入参数的类型和数量并作出不同的反应，可以模仿方法的重载

### 3.8 小结

1. ES 中的基本数据包括 Undefined,Null,Boolean,Number,和String

2. ES 没有整数和浮点数值分别定义不同的数据类型，Number类型可用于表示所有数值

3. ES 也有一种复杂的数据类型，即Object类型，该类型是这门语言中所有对象的基础类型

4. 严格模式为这门语言中容易出错的地方加以限制

5. ES 提供了与C类似的操作符

6. ES 中没有函数签名的概念，函数参数是以一个包含零或多个值的数组形式传递的

7. 不能重载，

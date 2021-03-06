# 运筹学软件优化建模

不抱怨老师，也不抱怨学校，不抱怨学生学习风气，单纯从用户体验方面谈一谈感受，运筹学系列是哈工大管理学院的王牌课程，然而从上学期和计算机学院一起上的运筹学开始，到这学期单独上的运筹学软件优化建模课程，都觉得一般般：

- 没有负责任的助教协助，老师单枪匹马从上课到实验（可以理解，选课一共7个人，来上课人数期望基本是4，要什么助教）

- 本来花钱选了高阶课程，然而因为各式各样的原因，导致8个学时过去了，依然是蜻蜓点水在重复简单基础的概念（这样的课上的开心，听的省劲，但是咱是花钱学本事的对不？）

- 对于没学过的同学来说，还是如觉云里雾里，对于学过的同学来讲，又很简单（这里简单的意思指大概翻翻书就可以回忆起来，没有认知性的难度）

深入分析导致这种情况的原因，我觉得是选课同学的求学主导人格有严重的三级分化：

1. 一种自命清高，谁也不服，鼻孔朝天，确实实力值相对比较高，不满足于花架子想在老师这整到点真本事的

2. 一种家里有薛定谔的矿，60分万岁，想早点修完学分，赶紧毕业回家继承薛定谔的家产的

3. 还有一种资深舔狗，把老师放的屁当圣旨，追求分数而不追求真理的

第一种是极少数派，学什么坚持刨根问底，不整明白如鲠在喉，然而总会在细枝末节处困死，并且眼里常含泪水，因为爱装逼爱的深沉。

第二种和第三种基本一半一半。基本上，一个人求学的状态，就是这三种人格的耦合。我身上曾经最大的股东是第三种：舔狗类型，混了几年，在灵魂解放摆脱了学分绩的支配后跟打了鸡血一样，大股东退位让权，痛苦地蜕变成了第一种类型。

我非常理解第二种和第三种的动机，我从前就深受第三种类型支配，并且有向被第二种类型支配转移的倾向，直到薛定谔的矿塌缩成了没有矿，薛定谔的家产塌缩成了没有家产，彻底断了我第二种主导人格的生命力。其实诱发这种塌缩的方式很简单，比如在某个中秋节回家和老爹老妈喝上两盅，比如与某个远方亲属见见最后一面，比如突然梦里面想起你太奶奶曾经笑着跟你说：我能活到你结婚。

可能大部分人都会羡慕第二种人格而痛恨第三种人格吧，因为大家都想活的快乐并且还有尊严。

但是现实往往是鱼和熊掌不可兼得，有时候还会鱼和熊掌都给你没收了，比如有时候快乐吧，没快乐起来，尊严呢？你一穷学生你有个粑粑的尊严。

其实我对这三种类型的总结基本或多或少都带有一些贬义



## Lingo编程

- 不使用集合语言-小规模问题

- 使用集合语言

**编程步骤**：

1. 确保模型正确：清楚每个式子的意思，变量，下标均严格区分，确定已知数据，模型类型

2. 确定指标集，定义集合（`i,j,k`）

3. 确定变量（程序变量（已知数据的量），决策变量），及其依赖的指标集

4. 正确写出每个式子

不使用集合语言：

```c
max= 4 * x1 + 3 * x2;
2 * x1 + x2 <= 10;
    x1 + x2 <= 8;
         x2 <= 7;
x1 >= 0;
x2 >= 0;
```

- `max，min` 用于定义目标函数

- `@bin(x)`表示变量`x`为0或者1

- `@gin(x)`表示变量`x`为整数

- `@free(x)`表示`x`为任意实数

- `bnd(1,x,u)`表示x为`[1,u]`

使用集合语言

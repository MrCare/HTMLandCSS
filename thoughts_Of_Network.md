# 关于真相的一些思考
## 前言

那可能是一年前的一次和朋友之间的胡吃海喝侃大山，推杯换盏之间不知道谁高喊一句，IPV6是互联网的未来，IPV4即将枯竭！5G时代已来，万物互联，必然会加速这一过程！来来来让我们干杯庆祝IPV4的终于完成了它伟大的历史使命！这一杯我干了！为终结！也为了新生！！！

听到这句话时，吓得我虎躯一震，酒也醒了半分，满脑子都在想：这个逼装的到位了！寥寥数词，却把我所知的关于计算机网络的术语说出了大半，怎么办，怎么办？！下一句怎么接？！

在朋友咕嘟咕嘟眼看一杯快没了的时候，已经被酒精麻痹了大半的大脑灵光一闪，高喝一声，兄台且慢！
看朋友咯咯咯打了个嗝，满眼不解的看向我，我内心一阵抽搐，猛拍大腿：哎呀！错了，此时对方气势正盛，醉眼微醺，贸然打断不仅有失礼节，而且若说不出来个一二三，还显得自己张扬跋扈，酒品不行，失误失误！

我急中生智，抓起旁边兄弟的酒瓶，猛倒一杯，高声说道，都道酒后吐真言，兄弟你对时代脉络把握之清晰，自己见解之独特，胸怀天下，忠肝义胆，实在是我辈楷模，我再敬你一杯！咕咚咕咚咕咚咕咚，完美化解了当前略显尴尬的气氛，随后继续你来我往，各自装逼，其乐融融，直至“相与枕藉乎舟中，不知东方之既白”

那次之后，一直有一个问题像大山一样压在我心头，IPV4枯竭我也有所耳闻，知乎百度众说纷纭，可究竟什么枯竭了？什么时候枯竭了？枯竭有什么影响呢？

原来对于每天，甚至每时每刻都在使用的网络，我是这么的不了解啊

## IP地址

还记得在大一时候，我远赴浙江大学投奔牛哥，当时的笔记本接入浙大的WIFI水土不服，校园网登陆页面迟迟不能跳出，其实在工大时候，我会把登陆网页存成书签，这样相对主动一些，当登陆页面不能自动跳出的时候，主动一点，也可以自己打开登陆页面，成功率很高。但是在这他乡他校，有力难使，非常难受

牛哥看出了我的窘迫，低喝一声，我来看看，掏出手机百度一番，一顿操作，奇迹发生了，自动登录页面跳出来了！我惊讶的问他：你是怎么弄出来的？！

他嘴角浮起一丝狡黠的微笑：我也不知道，就一顿瞎JB整......

可谁又知道，他这一顿瞎几把整的动作，就在我脑海中埋藏了五年

我总会在某个失眠的夜里想起牛哥那在键盘上飞舞的手指，带着 ：“他到底做了什么？”的疑问在黎明到来之前沉沉睡去

### 揭秘：

校园网WLAN会在本地主机试图建立会话时，自动跳出登录界面（猜测应当是在路由中进行了设置），理论上在浏览器地址输入的任意IP地址都可以触发这个机制，比如常见的路由设置IP`192.168.1.1`，DNS服务器IP`8.8.8.8`，胡编乱造的一个公网IP`49.232.48.224`等。

然而这个事情，确确实实是在系统学习了计算机网络之后，才能想的明白。

## IP地址的真相

IP地址是用来区分主机的，采用32 bits 二进制数来区分主机，比如`00000001 00000000 00000000 0000001` 和 `00000001 00000000 00000000 0000011` 就可以用它们代表两个主机，这也是所谓的IP枯竭论调的来源，32 bits 最多能表示 $2^33-1$ 个不同主机，大约42亿个，这对于互联网上的设备来说肯定是不够的，因此有了IP枯竭一词

然而像这种为每个主机分配公网IP地址的奢侈做法早就已经被废弃，IP地址先后经历了“两级三分类”，以及“CIDR（Classless Interdomain routing）” 无分级二分类阶段，即两级多分类的技术阶段，其中两级三分类理论上可以将IP地址资源扩充至原来的三倍，两级多分类根据类别数，至少可以将IP地址资源扩充10倍，再加上NAT（Network Address Translation）地址转换技术，以及DHCP（Dynamic Host Configuration Protocol）动态IP分配技术，IP地址枯竭的问题，其实应该是一个早在“subnet（子网）”概念还没有出现之前，就已被解决的问题。至于IP资源枯竭与IPv6（所谓的未来）根本没有任何的因果关系，强行把两个概念往一起凑，会给喜欢思考的人带来很多困扰。

### 未来

每个人都关心未来，房价会怎样？经济形势会怎样？行业发展会怎样？高考录取分数会怎样？股票价格会怎样？健康状况会怎样？

但是抛开时间尺度谈未来，就像抛开剂量谈毒性，是一种无耻的耍流氓的行为。车轱辘话人人都会说，但是如果表达的观点是混沌的，甚至有可能还是别人的，那有什么意义呢？

这一节，我想真正的，通过自己独立的思考，写出下面这个问题的答案：
IPv6确实在蓬勃发展，但是IPv4可能被赶下王位吗？

至少5年，多则10年，不太可能：

毕竟IPv6的128位二进制足足比IPv4的32位长了3倍，意味着网络层的IP数据报首部的传输数据量大大增加，这区区几十位二进制看起来不起眼，但是要知道在这张大网上的传输的每一次请求，每一个数据包，都带有IP数据报的首部，如果一夜之间全面应用IPv6，就好比全世界60亿人，一夜之间每人长了1斤肉，每一个供人出行的载具，每一架飞机，每一座桥，每一条路，都要承担徒增的压力，总量就是相当于60亿斤肉的各种形式的荷载，能不能承受呢？其实也能，但是需要时间，春风化雨，润物无声那样的一点一点，慢慢慢慢的改变。

IP地址值钱吗？我觉得一文不值，值钱的是路由规则，是网络知道目的地怎么走这件事情。如果网络知道目的地怎么走，那区分目的地是什么的识别号就可以随意更换（随意=便宜），万物互联这个概念其实有点玄乎，我没有必要用我家的冰箱去跟隔壁老李家冰箱通信，如果我家的冰箱能连马云的冰箱，估计也得把马老师吓够呛，我自己能连自己家的冰箱，洗衣机就够了，这样也简单（VLAN虚拟局域网技术可以做到或者是现在已经成为传说的VPN（Virtual Private Network）也可以）

5G的概念会促进IPV6的发展吗？肯定的吧，因为5G是个大热点，能蹭到的全蹭了，蹭了，热了就能得到发展，反过来还会让5G的概念更热，世界的资源是有限的，把概念炒热，才能获得注意力和资源，凡多的应当给予更多，凡少的应当夺其所有，这其实就是真相；但是炒热的概念不可能热的恰到好处，总会因为过热了而冷却的，这也是真相。

其实我说的5年和10年，是没有任何的依据的，因为掌握的知识实在太少了，说个5年10年，仅仅是为了听起来很有说服力的样子。

少年言语，大多如此，信心满满，笃定不移，气势如虹，虎头蛇尾
# fullpage全屏插件

## 案例:

全屏网站，尤其是国外网站。这些网站用几幅很大的图片或色块做背景，再添加一些简单的内容，显得格外的高端大气上档次。比如 魅族

QQ浏览器的官网站: https://browser.qq.com/index_m.html 

fullpage官网: https://alvarotrigo.com/fullPage/zh/#page1

## 介绍 fullpage 插件

fullPage.js 是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站，主要功能有：

+ 支持鼠标滚动

+ 支持前进后退和键盘控制

+ 多个回调函数

+ 支持手机、平板触摸事件

+ 支持 CSS3 动画

+ 支持窗口缩放

+ 窗口缩放时自动调整

+ 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等

  ​

## 兼容性

### 	jQuery 兼容

兼容 jQuery 1.7+。

### 浏览器兼容

| ![IE](http://cdn.dowebok.com/global/ie.png)                  | ![Chrome](http://cdn.dowebok.com/global/chrome.png)          | ![Firefox](http://cdn.dowebok.com/global/firefox.png)        | ![Opera](http://cdn.dowebok.com/global/opera.png)            | ![Safari](http://cdn.dowebok.com/global/safari.png)          |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE8+ ![✔](https://s.w.org/images/core/emoji/11/svg/2714.svg) | Chrome ![✔](https://s.w.org/images/core/emoji/11/svg/2714.svg) | Firefox ![✔](https://s.w.org/images/core/emoji/11/svg/2714.svg) | Opera ![✔](https://s.w.org/images/core/emoji/11/svg/2714.svg) | Safari ![✔](https://s.w.org/images/core/emoji/11/svg/2714.svg) |

## 使用方法

### 4.3.1. 引用文件  

​	在文件夹中有 fullpage 插件的安装包, 如果失效可 自行下载:  https://alvarotrigo.com/fullPage/zh/#page1

```html
<link rel="stylesheet" href="css/jquery.fullPage.css">
<script src="js/jquery.min.js"></script>

<!-- jquery.easings.min.js 用于 easing 参数，也可以使用完整的 jQuery UI 代替，如果不需要设置 easing 参数，可去掉改文件 -->
<script src="js/jquery.easings.min.js"></script>

<!-- 如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要 -->
<script src="js/jquery.slimscroll.min.js"></script>

<script src="js/jquery.fullPage.js"></script>
```

### 4.3.2. HTML 结构

```html
<div id="fullpage">
    <div class="section">第一屏</div>
    <div class="section">第二屏</div>
    <div class="section">
        <div class="slide">第三屏的第一屏</div>
        <div class="slide">第三屏的第二屏</div>
        <div class="slide">第三屏的第三屏</div>
        <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">第四屏</div>
</div>
```

### 4.3.3. JavaScript入口函数

```javascript
$(function(){
    $('#fullpage').fullpage();
});
```

### 4.3.4. fullpage 详细参数

| 选项                              | 类型   | 默认值      | 说明                                                         |
| --------------------------------- | ------ | ----------- | ------------------------------------------------------------ |
| verticalCentered                  | 字符串 | true        | 内容是否垂直居中                                             |
| resize                            | 布尔值 | false       | 字体是否随着窗口缩放而缩放                                   |
| sectionColor                      | 函数   | 无          | 设置背景颜色                                                 |
| anchors                           | 数组   | 无          | 定义锚链接                                                   |
| scrollingSpeed                    | 整数   | 700         | 滚动速度，单位为毫秒                                         |
| easing                            | 字符串 | easeInQuart | 滚动动画方式                                                 |
| menu                              | 布尔值 | false       | 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动 |
| navigation                        | 布尔值 | false       | 是否显示项目导航                                             |
| navigationPosition                | 字符串 | right       | 项目导航的位置，可选 left 或 right                           |
| navigationTooltips                | 数组   | 空          | 项目导航的 tip                                               |
| slidesNavigation                  | 布尔值 | false       | 是否显示左右滑块的项目导航                                   |
| slidesNavPosition                 | 字符串 | bottom      | 左右滑块的项目导航的位置，可选 top 或 bottom                 |
| controlArrowColor                 | 字符串 | #fff        | 左右滑块的箭头的背景颜色                                     |
| loopBottom                        | 布尔值 | false       | 滚动到最底部后是否滚回顶部                                   |
| loopTop                           | 布尔值 | false       | 滚动到最顶部后是否滚底部                                     |
| loopHorizontal                    | 布尔值 | true        | 左右滑块是否循环滑动                                         |
| autoScrolling                     | 布尔值 | true        | 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条 |
| scrollOverflow                    | 布尔值 | false       | 内容超过满屏后是否显示滚动条                                 |
| css3                              | 布尔值 | false       | 是否使用 CSS3 transforms 滚动                                |
| paddingTop                        | 字符串 | 0           | 与顶部的距离                                                 |
| paddingBottom                     | 字符串 | 0           | 与底部距离                                                   |
| fixedElements                     | 字符串 | 无          |                                                              |
| normalScrollElements              |        | 无          |                                                              |
| keyboardScrolling                 | 布尔值 | true        | 是否使用键盘方向键导航                                       |
| touchSensitivity                  | 整数   | 5           |                                                              |
| continuousVertical                | 布尔值 | false       | 是否循环滚动，与 loopTop 及 loopBottom 不兼容                |
| animateAnchor                     | 布尔值 | true        |                                                              |
| normalScrollElementTouchThreshold | 整数   | 5           |                                                              |

### 4.3.5. fullPage.js 方法

注意方法的使用时需要添加：

$.fn.fullpage   比如

```
$.fn.fullpage.moveTo(1);
```

| 名称                   | 说明                                     |
| ---------------------- | ---------------------------------------- |
| moveSectionUp()        | 向上滚动                                 |
| moveSectionDown()      | 向下滚动                                 |
| moveTo(section, slide) | 滚动到                                   |
| moveSlideRight()       | slide 向右滚动                           |
| moveSlideLeft()        | slide 向左滚动                           |
| setAutoScrolling()     | 设置页面滚动方式，设置为 true 时自动滚动 |
| setAllowScrolling()    | 添加或删除鼠标滚轮/触控板控制            |
| setKeyboardScrolling() | 添加或删除键盘方向键控制                 |
| setScrollingSpeed()    | 定义以毫秒为单位的滚动速度               |

### 4.3.6. 回调函数

| 名称           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| afterLoad      | 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算 |
| onLeave        | 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。 |
| afterRender    | 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数   |
| afterSlideLoad | 滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |
| onSlideLeave   | 某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |

每个 section 代表一屏，默认显示“第一屏”，如果要指定加载页面时显示的“屏幕”，可以在对应的 section 加上 class=”active”，如：

```
<div class="section active">第三屏</div>
```

​															

​																			编写整理: 樊
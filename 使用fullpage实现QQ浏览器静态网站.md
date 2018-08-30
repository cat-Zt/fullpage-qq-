## QQ浏览器旧版

### 准备工作: 

##### 		1 下载fullpage 插件

#####      		2 准备素材 

##### 		3  查看 fullpage插件文档, 进行 编写

##### 		4  十分简单的小案例编写

### 引入 文件

```html
<!-- 使用插件  1 先引入css文件 -->
<link rel="stylesheet" href="./lib/jquery.fullpage.css">
<!-- 引入本页面使用的css -->
<link rel="stylesheet" href="./css/index.css">

<!-- 引入jquery文件 -->
<script src="./lib/jquery.js"></script>
<!-- 引入插件js -->
<script src="./lib/jquery.fullpage.js"></script>
<!-- 引入页面js文件 -->
<script src="./js/index.js"></script>
```

### 引入HTML结构

```html
 <!-- 因为旋转的圆是每个分屏都有的 取出来独自编辑 -->
        <div id="qq-bg">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <!-- 背景 结束 -->
        <div id="fullpage">
                <div class="section s1">

                    <div class="sink1 sink2">
                        <img id="sinkimg1" src="./images/skin.png" alt=""> 
                        <img id="sinkimg2" src="./images/skin.gif" alt="">   
                    </div>

                </div>
                <div class="section s2">

                    <div class="sink3 sink4">
                        <img src="./images/title1_1.png" alt="">
                        <img  src="./images/title1_2.png" alt="">
                    </div>

                </div>
                <div class="section s3">

                    <div class="sink5 sink6">
                        <img id="sink5img" src="./images/title3.png" alt="">
                        <div class="browser">
                            <img src="./images/p3ui_tab.png" alt="">
                        </div>
                    </div>

                </div>
                <div class="section s4">

                   <div class="sink7 sink8">
                        <img src="./images/p2pop1.png" alt="">
                        <img src="./images/p2pop2.png" alt="">
                        <img src="./images/p2pop3.png" alt="">
                        <img src="./images/p2pop4.png" alt="">
                        <img src="./images/p2pop5.png" alt="">
                   </div> 

                </div>
        </div>
```

### JS入口函数 与配置 插件的参数

##### 	设置 文字垂直居中方式

##### 	设置导航栏是否显示

##### 	设置是否从顶部返回底部

##### 	设置是否能从底部返回顶部

##### 	设置离开触发 与 加载完毕触发

```js
$(function(){
    $('#fullpage').fullpage({
        //使文字不垂直居中
        verticalCentered:false,
        //显示导航栏
        navigation:true,
        //是否从顶部滚回底部
        loopTop:true,
        //是否从低部滚回顶部
        loopBottom:true,
      
        //一离开就触发
        onLeave:function(index,nextIndex,direction){

            //如果index 不是1 则进行旋转
            if(nextIndex!=1){
                $("#qq-bg").addClass("qq-bg-rotate");
            }else{
                $("#qq-bg").removeClass("qq-bg-rotate");
            }

            //如果index是1 则进行
            if(index==1){
                
                $(".sink1").addClass("sink2");
            }
//-------------------------------------------
            //如果离开的页面  加个更大类  1秒动画过渡之后 再 将原本的状态恢复
            if(index==2){
                $(".sink3").addClass("sink5")
                setTimeout(function(){
                    $(".sink3").attr("class","sink3 sink4")
                      //将过渡属性删除
                    $(".sink3").css("transition","none")

                    // 这样就偷偷的告诉他了
                    document.querySelector(".sink3").offsetTop;
                    // 重新添加过渡!!! 
                    $(".sink3").css("transition","transform 1s");
                },1000)
              
            }

            //离开第三屏的时候需要给其添加回去 sink6
            if(index==3){
                $(".sink5").addClass("sink6")
            }
             //离开第四屏的时候需要给其添加回去 sink8
            if(index==4){
                $(".sink7").addClass("sink8")
            }
        },

				//加载完毕
        afterLoad:function(anchorLink,index){
						//如果加载完毕 是1 则移除类 添加 transition 
            if(index==1){
                
                $(".sink1").removeClass("sink2")
               
            }

            //第二屏加载完 移除 小的状态 然后就有 变化的过程
            if(index==2){
                $(".sink3").removeClass("sink4")
            }
              //第三屏加载完 移除 开始的状态 然后就有 变化的过程
              if(index==3){
                $(".sink5").removeClass("sink6")
            }
              //第四屏加载完 移除 开始的状态 然后就有 变化的过程
              if(index==4){
                $(".sink7").removeClass("sink8")
            }
        }

    });
});
```



### CSS的编写--> 使用scss

##### 	 bug: animate 结束之后重新开始会有 卡顿 现象 . 需调整

##### 	 背景编写 : 

```scss
//background-img  begin
#qq-bg{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition:transform 1s;
    //六个div的公共样式
    div{
        position: absolute;
        background-image:linear-gradient(#ccc,#fff);
        border-radius :50%;
        animation: an_bg infinite linear 20s;
        
    }

    @keyframes an_bg {
        0%{
          transform: translateX(0px) rotate(0deg)  
        }
        100%{
          transform: translateX(-1000px) rotate(720deg)  
        }
    }


    div:nth-child(1){
        width: 8%;
        height: 16%;
        top: 15%;
        left: 15%;

    }
    div:nth-child(2){
        width: 12%;
        height: 26%;
        top: 30%;
        left:30%;

    }
    div:nth-child(3){
        width: 20%;
        height: 40%;
        top: 20%;
        left:50%;

    }
    div:nth-child(4){
        width: 12%;
        height: 27%;
        top: 60%;
        left:80%;

    }
    div:nth-child(5){
        width: 10%;
        height: 20%;
        top: 20%;
        left:90%;

    }
    div:nth-child(6){
        width: 12%;
        height: 22%;
        top: 70%;
        left:100%;

    }
    div:nth-child(7){
        width: 6%;
        height: 12%;
        top: 30%;
        left:120%;

    }
    div:nth-child(8){
        width: 12%;
        height: 24%;
        top: 50%;
        left:140%;

    }
    
}
//background-img  end
//如果切换到234屏则背景需要旋转  
//配合 离开之前触发的函数 onLeave 离开的页面如果不是1屏  则可以 给背景 添加类
.qq-bg-rotate{
    transform: rotate(-30deg)
}

```

### 第一屏

##### 	加载完毕  将  类 sink2  移除  添加过渡. 则 能出现 案例中的 现象  

##### 	离开触发  将类 sink 2 添加  回 sink 1  -->js 代码 第一屏  

```scss
//图片的位置
.s1{
    position: relative;
    //视距
    perspective: 1000px;
    overflow: hidden;
    .sink1{
        width: 600px;
        height: 240px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) ;
        transition: transform 1s;
        //图片的定位
        #sinkimg1{
            position: absolute;
            top: 0;
            left: 0;
        }

    }
    .sink2{
        transform: translate3d(-50%,-50%,800px) rotateY(180deg);
    }
}
```

### 第二屏

##### 	加载完毕之后 将 类  sink 4 移除 

##### 	离开之前 将 类 sink 5  添加   

##### 	需要注意的是: 

bug 1: 我们离开之后移除添加的类 还未恢复 , 所以我们需要恢复

​	解决: 离开之前 1s 之后 进行 添加  sink3 sink 4   

bug 2 : 离开之前 会出现 图片 缩回 现象 然后 再 进行

​	解决:  离开之前 将 过渡 属性进行删除  

bug 3 : 此时 会出现新的 bug  是由于浏览器的智能 造成,因为我们进行移除和赋值 相隔较近并且中间并

​	没有出现其他新的代码,则浏览器会自动忽略掉

​	解决: 在移除与添加之间进行 

```js
  // 这样就偷偷的告诉他了====.不准偷懒...按照命令执行
  document.querySelector(".sink3").offsetTop;
```

```scss
//第二屏
.s2{
    //加相对定位
    position: relative;
    //开始的位置很小 加视距
    perspective: 1000px;
    .sink3{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        //变化的是sink3  过渡给sink3添加
        transition: transform 1s;
        img{
            display:block;
        }
    }
    //开始的状态  小的状态  加载之后 移除
    .sink4{
        transform:translate3d(-50%,-50%,-10000px)
    }
    //离开的状态  变得更大
    .sink5{
        transform: translate3d(-50%,-50%,900px)
    }
}

```

### 第三屏

##### 	将图片位置定义好, 需要从左右两边  移入, 并从    下    x轴之改变 transform: translatex       与  translate Y

##### 	加载完毕 移除   sink6,  添加 过渡属性   离开之前 添加回去

##### 	需要注意的地方:   transform: rotateX(40deg)  使页面   展现  倾斜

```scss
//第三屏
.s3{
    position: relative;
    //开启3d
    transform-style: preserve-3d;
    //开启视距
    perspective: 1000px;
    //超出部分隐藏
    overflow: hidden;
    
    .sink5{
        //正常的状态
        position: absolute;
        width: 100%;
        height: 100%;
        top: 260px;
        left: 600px;
        transform: rotateX(40deg);
        transition: transform 1s; 
        // background-color: red;
        #sink5img{
            position: absolute;
            left: -200px;
            top:100px;
            transition: transform 1s;
            z-index: 11;
        }
        .browser{
            width: 100%;
            height: 100%;
            background-color: aqua;
            transition: transform 1s;
        }
    }
    //开始的状态
    .sink6{
        //大盒子需要在下面  文字需要在左边,第二需要在右边
        transform: translateY(1000px);
       
        //文字
        #sink5img{
            transform: translateX(-2000px);
          
        }
        //右边
        .browser{
            transform: translateX(2000px);
          
        }
    }
}

```

### 第四屏

##### 	将图片定位好 设置 移除类 即可  

```scss
//第四屏
.s4{
    position: relative;
    //开启3d
    transform-style: preserve-3d;
    .sink7{
        width: 630px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: transform 1s;
        img{
            position: absolute;
           
        }
        img:nth-child(1){
            top: 0;
            left: 0;
        }
        img:nth-child(2){
           top: 216px;
           left: 0;
        }
        img:nth-child(3){
           top: 0;
           left: 0;
        }
        img:nth-child(4){
           top: 0;
           right: 0;
        }
        img:nth-child(5){
           bottom: 0;
           left: 0;
        }
        
    }
    .sink8{
        transform:translate3d(-1020px,-380px,0) rotateZ(30deg);
    }
   
}

```





​	
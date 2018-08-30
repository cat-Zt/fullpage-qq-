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


        afterLoad:function(anchorLink,index){

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
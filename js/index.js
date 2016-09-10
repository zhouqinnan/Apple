$(function(){
    // 导航下拉菜单
        $(".aa").click(function(){
            $(".cd").slideDown(562);
            $(".headerbox").css("background","#000");
            $(".bb").css("display","none");
            $(".dd").css("display","none");
            $(".cc").css("display","block","color","#fff");
        });
        $(".cc").click(function(){
         $(".cd").slideUp(562);
        $(".headerbox").css("background","#333");
        $(".bb").css("display","block");
        $(".cc").css("display","none");
    });
// 导航下拉菜单结束
//版权上边
    var falg=true;
    $('.small-column ul').on('click',function(){
        $(this).find('li').slideToggle();
        if (falg){
            $(this).find(".small-col").css({transform:"rotateZ(45deg)"});
            $(this).find(".small-row").css({transform:"rotateZ(-45deg)"});
            falg=false;
        }else{
            $(this).find(".small-col").css({transform:"rotateZ(90deg)"});
            $(this).find(".small-row").css({transform:"rotateZ(0deg)"});
            falg=true;
        }
    })
//    banner
    var as=$('.banner-inner li');
    var lis=$('.btn li');
    var width=3000;
    var t=setInterval(moveL,5000);
    var num=0;
    var next=0;
    var kaiguan=true;
    for(var i=0;i<as.length;i++){
        if(i==0){
            continue;
        }
        as.eq(i).offset({left:width});
        lis.eq(i).removeClass('btn-border');

    }

    function moveL(){
        next++;
        if(next>=4){
            next=0;
        }
        as.eq(next).offset({left:width});
        as.eq(num).animate({left:-width},function(){
            kaiguan=true;
        });
        as.eq(next).animate({left:0});
        num=next;
        for(var j=0;j<lis.length;j++){
            lis.eq(j).removeClass('btn-border');
        }
        lis.eq(num).addClass('btn-border')
    }
    function moveR(){
        next--;
        if(next<0){
            next=3;
        }
        as.eq(next).offset({left:-width});
        as.eq(num).animate({left:width},function(){
            kaiguan=true;
        });
        as.eq(next).animate({left:0});
        num=next;
        for(var j=0;j<lis.length;j++){
            lis.eq(j).removeClass('btn-border');
        }
        lis.eq(num).addClass('btn-border')

    }
    $('.banner-right').on('click',function(){
        if(kaiguan){
            moveL();
            kaiguan=false;
        }else {
            return;
        }

    })
    $('.banner-left').on('click',function(){
        if(kaiguan){
            moveR();
            kaiguan=false
        }else {
            return
        }

    })
    $('.banner').on("mouseover",function(){
        clearInterval(t);
        $('.banner-left').css('display','block');
        $('.banner-right').css('display','block')
    })
    $('.banner').on("mouseout",function(){
        t=setInterval(moveL,5000);
        $('.banner-left').css('display','none');
        $('.banner-right').css('display','none')
    })
    lis.on('click',function(){
        if(kaiguan){
            var nn=$(this).index();

            for(i=0;i<lis.length;i++){
                lis.eq(i).removeClass('btn-border');
                as.eq(i).css({left:width});
            }
            $(this).addClass('btn-border');
            as.eq(nn).animate({left:0},function(){
                kaiguan=true;
            });
            kaiguan=false;
            num=nn;
        }else {
            return;
        }
    })










































})
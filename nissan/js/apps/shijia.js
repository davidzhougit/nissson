/**
 * Created by Administrator on 2016/5/23.
 */
$(document).ready(function(){
    $("#submit").on("click",function(){
        $.ajax({
            type:"POST",
            url:"http://sjz.bokanedu.com/tgr/api/?day=52&type=og",
            data:{name:$("#name").val(),mobile:$("#phone").val()},
            dataType:"json",
            success:function(data){
                if(data.code==0){
                    window.location.href = "success.html";
                }else{
                    alert(data.msg);
                }
            }
        })
    })
})
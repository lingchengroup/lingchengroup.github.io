function i839ujf(){
    var day = new Date();
    var hour = day.getHours();
    var now = new Date();  
    now.setHours(0, 0, 0, 0); // Set current time to midnight  
    now.setHours(now.getHours() + 8); // Add UTC+8 offset  
    var expires = now.toUTCString(); // Convert to UTC string  
}
function dh93fhfv(hd923yhf){
    document.cookie = "lingchengroupadmin-username:"+hd923yhf+"; expires="+i839ujf()+"; path=/"
}
function c28fjaa(lkf0kiw,uf92f2){
    if(lkf0kiw == "lingchendefault-windows23@#$8d"){
        if(uf92f2 == "2507979441"){
            dh93fhfv(uf92f2);
            return true;
            
        }else{
            return false;
        }
    }else if(lkf0kiw == "lingchendefault-creator@#*&di"){
        if(uf92f2 == "2733392694"){
            dh93fhfv(uf92f2);
            return true;
        }else{
            return false;
        }
    }else if(lkf0kiw == "lingchendefault-filegoto@#(Dh"){
        if(uf92f2 == "3599637346"){
            dh93fhfv(uf92f2);
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}



layui.use(function(){
    var form = layui.form;
    var layer = layui.layer;
    var account = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    // 提交事件
    form.on('submit(demo-login)', function(data){
        var field = data.field;
        // window.location.href='./admintologin.php?account='+field['username']+"&password="+field['password'];
        if(field['username'] = "2507979441"){
            c28fjaa(field['password'],"2507979441")
        }else if(field['username'] = "2733392694"){
            c28fjaa(field['password'],"2733392694")
        }else if(field['username'] = "3599637346"){
            c28fjaa(field['password'],"3599637346")
        }
        return false; // 阻止默认 form 跳转
    });

});
var focus=false;
var showdiv12=document.getElementById("nav1-2");
showdiv12.onmouseover=function(){
    focus=true;
    this.style.visibility="visible";
}
showdiv12.onmouseout=function(){
    focus=false;
    this.style.visibility="hidden";
}
var showdiv13=document.getElementById("nav1-3");
showdiv13.onmouseover=function(){
    focus=true;
    this.style.visibility="visible";
}
showdiv13.onmouseout=function(){
    focus=false;
    this.style.visibility="hidden";
}
var showdiv11=document.getElementById("nav1-1");
showdiv11.onmouseover=function(){
    focus=true;
    this.style.visibility="visible";
}
showdiv11.onmouseout=function(){
    focus=false;
    this.style.visibility="hidden";
}
function bindToggle(index,flag){
    if(index == 0){
        var showdiv= document.getElementById("nav1-1");
    }else if(index == 1){
        var showdiv= document.getElementById("nav1-2");
    }else if(index == 2){
        var showdiv= document.getElementById("nav1-3");
    }
    
    var delayshow= function(){
        if(flag ==1 ){
            showdiv.style.visibility="visible";
            showdiv.style.top=index*32+"px";
        }else {
            if(!focus){
                showdiv.style.visibility="hidden";
            }  
        }
    }
    return function(){ 
        setTimeout(delayshow,150);
    } 
}
var menu=document.getElementById("nav2").childNodes;
var index=0;
for(var i=0;i<menu.length;i++){
    if(1==menu[i].nodeType){
        menu[i].onmouseover= bindToggle.call(menu[i],index,1);
        menu[i].onmouseout= bindToggle.call(menu[i],index,0);
        index++;
    }  
} 
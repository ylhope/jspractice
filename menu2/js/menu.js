var focus=false;
var showdiv2=document.getElementById("nav2");

showdiv2.onmouseover=function(){
    focus=true;
    this.style.visibility="visible";
}
showdiv2.onmouseout=function(){
    focus=false;
    this.style.visibility="hidden";
}

function bindToggle(i,flag){
    var showdiv= document.getElementById("nav2").childNodes;
    
    var delayshow= function(){
        if(flag == 1 ){
            showdiv[i].style.visibility="visible";
            // showdiv[i].style.zIndex++;
            console.log(showdiv[i])
            console.log(i)
            if(i == 3){
                showdiv[i].style.left="-250px";
                showdiv[i].style.top="32px";
                // console.log(showdiv[index].style.left)
            }
            if(i ==3 || i==1 |i ==5){
                bindToggle2(showdiv[i].childNodes)
            }
        }else {
            if(!focus){
                showdiv[i].style.visibility="hidden";
                // showdiv[index].style.zIndex--;
            }  
        }
    }
    return function(){ 
        setTimeout(delayshow,150);
    } 
}

function bindToggle2(showdiv){
    var showdiv1= document.getElementById("nav3").childNodes;
    var index =0;
    var index1 =0;
    for(var i=0;i<showdiv.length;i++){
        if(1==showdiv[i].nodeType){
            index++;
        }  
    } 
    for(var i=0;i<showdiv1.length;i++){
        if(1==showdiv1[i].nodeType){
            index1++;
            if(index == index1){
                showdiv1[i].style.visibility="visible";
            }
            
        }  
    } 
}

var menu1=document.getElementById("nav1").childNodes;
var index =0;
for(var i=0;i<menu1.length;i++){
    if(1==menu1[i].nodeType){
        menu1[i].onmouseover= bindToggle(i,1);
        menu1[i].onmouseout= bindToggle(i,0);
        index++;
    }  
} 


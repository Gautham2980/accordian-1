var accordques=document.querySelectorAll(".accord-ques")
 console.log(accordques);
accordques.forEach(function(ques){
     console.log(ques)
    ques.addEventListener("click",function(){
         console.log(ques.nextElementSibling);
        if(ques.nextElementSibling.classList.contains("active")){
            ques.nextElementSibling.classList.remove("active");
            ques.querySelector("i").style.transform="rotate(180deg)"
        }
        else{
            ques.nextElementSibling.classList.add("active");
            ques.querySelector("i").style.transform="rotate(0deg)"
        }
        
      
       
    }
    
    
    
    
    
    )
}
    
    
    
    
    )


    

var icon=document.querySelectorAll(".icon1");
console.log(icon);
icon.forEach(function(e){
    e.addEventListener("click",function(){
       if(e.classList.contains("rotate")){
        e.classList.remove("rotate")
        
       }
       else{
        e.classList.add("rotate");
    
       }
    }

    )
}


)





var allImages = document.querySelectorAll(".item-img");
var lightBoxContainer = document.querySelector(".lightBoxContainer");
var lightBoxInner = document.querySelector(".lightBoxInner")

var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex =0;
var AllimagesArray = [];


for(var i=0; i<allImages.length ;i++)
    {
        
        AllimagesArray.push(  allImages[i]   ) // 1
        
        //--------------------------------------------------------
        allImages[i].addEventListener("click",function(e){
            
          currentIndex =  AllimagesArray.indexOf( e.target  )// 2
            
            
            var myimageSrc = e.target.src;
            
            lightBoxInner.style.backgroundImage = "url("+myimageSrc+")";
            
            lightBoxContainer.classList.add("show");
            
        })
        
        
        
        
    }




close.addEventListener("click",function(){
    
    
    
    lightBoxContainer.classList.remove("show")
    
    
})




next.addEventListener("click",function(){
    
    
    currentIndex = currentIndex+1;
    
    
    if(currentIndex == allImages.length)
        {
            currentIndex =0;
        }
    
    
   var nextImageSrc=allImages[currentIndex].src;
    
     lightBoxInner.style.backgroundImage = "url("+nextImageSrc+")";
    
    
    
    
})




prev.addEventListener("click",function(){
    
    
    currentIndex = currentIndex -1;
    
    if(currentIndex < 0)
        {
            currentIndex = allImages.length-1;
        }
    
   var prevImageSrc=allImages[currentIndex].src;
    
     lightBoxInner.style.backgroundImage = "url("+prevImageSrc+")";
    
    
})


















document.addEventListener("keydown",function(e){
    
    if(e.keyCode == 39)//right
        {
            
            currentIndex = currentIndex+1;


            if(currentIndex == allImages.length)
                {
                    currentIndex =0;
                }


           var nextImageSrc=allImages[currentIndex].src;

             lightBoxInner.style.backgroundImage = "url("+nextImageSrc+")";


    
        }
    
    else if(e.keyCode == 37) //left
        {
            
            currentIndex = currentIndex -1;

            if(currentIndex < 0)
                {
                    currentIndex = allImages.length-1;
                }

           var prevImageSrc=allImages[currentIndex].src;

             lightBoxInner.style.backgroundImage = "url("+prevImageSrc+")";

    
        }
    
    else if(e.keyCode == 27) //close
        {
             
    
            lightBoxContainer.classList.remove("show")
    
        }
    
})




















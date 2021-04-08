function moveSquare(e){
     
    let square = document.getElementById("square");
     
    let cs = window.getComputedStyle(square);
     
    let left = parseInt(cs.marginLeft);
    let top = parseInt(cs.marginTop);
     
    switch(e.key){
         /*для стрелок*/
        case "ArrowLeft":  
            if(left>0)
                square.style.marginLeft = left - 20 + "px";
            break;
        case "ArrowUp":   
            if(top>0)
                square.style.marginTop = top - 20 + "px";
            break;
        case "ArrowRight":   
            if(left < document.documentElement.clientWidth - 50)
                square.style.marginLeft = left + 20 + "px";
            break;
        case "ArrowDown":   
            if(top < document.documentElement.clientHeight - 50)
                square.style.marginTop = top + 20 + "px";
            break;

         /*для WASD*/
        case "a":  
            if(left>0)
                square.style.marginLeft = left - 20 + "px";
            break;
        case "w":   
            if(top>0)
                square.style.marginTop = top - 20 + "px";
            break;
        case "d":   
            if(left < document.documentElement.clientWidth - 50)
                square.style.marginLeft = left + 20 + "px";
            break;
        case "s":   
            if(top < document.documentElement.clientHeight - 50)
                square.style.marginTop = top + 20 + "px";
            break;    
    }
}
 
addEventListener("keydown", moveSquare);
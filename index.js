var color, r, g, b;

function changeColor(){

    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);

    console.log(r,g,b);
    color = 'rgb' + "("+ r +","+ g +","+ b +")";
    console.log(color);
    
    document.body.style.background = color;
    
   
}



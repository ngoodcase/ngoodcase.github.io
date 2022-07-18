window.addEventListener("load", () => { 
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContex("2d");

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;  
    
    ctx.fillRect(50, 50, 200, 200);
});

window.addEventListener('resize, ')
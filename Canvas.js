window.addEventListener("load", () => { 
    const canvas = document.querySelector("#Canvas.js");
    const ctx = canvas.getContex("2d"); 

    ctx.strokeStyle = "red";    
    ctx.fillRect(100, 100, 200, 500);

    });
    
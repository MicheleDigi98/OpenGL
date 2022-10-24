console.log("Start!");

let canvas = document.getElementById("canvas") as HTMLCanvasElement;

function setClearColor(glContext: WebGL2RenderingContext, red = 1, green =  1, blue = 1, alpha = 1): void{
    if(glContext){
        glContext.clearColor(red, green, blue, alpha);
        glContext.clear(glContext.COLOR_BUFFER_BIT);
        glContext.viewport(0, 0, 0, 0);

        console.log(`Current color: ${glContext.getParameter(glContext.COLOR_CLEAR_VALUE)}`);
    }
}

if(canvas !== null){
    //Canvas esistente

    const glContext = canvas.getContext("webgl2");
    if(glContext){
        console.log("GL Context recuperato");

        setClearColor(glContext, 1, 0, 0);
    }else console.log("Errore nel recupero");
}
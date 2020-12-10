import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    const coloursWeft = ['rgb(0,255,255)','rgb(255,0,255)']
    const coloursWarp = ['rgb(255,0,255,0.5)','rgb(0,255,255,0.5)']
    var i =  0
    var x = 0

    ctx.globalCompositeOperation = 'multiply';

    ctx.beginPath()
      // // for(var i = 0; i < colours.length; i ++) {
      //   console.log(i)
      //   var x =+ i  
      //   ctx.fillStyle = colours[i]
      //   ctx.fillRect(0 ,0 ,150,200 );
      //   ctx.fillStyle = colours[i + 1]
      //   ctx.fillRect(150,0,300/colours.length,200);
      //   
      // // }
    //   for(i = 0; i <= 300; i+=30) {
    //     console.log(i)
    //       x += i
    //     ctx.fillStyle = colours[0]

    //     ctx.fillRect(i + x ,0 , 30,200 );
     
    //     ctx.fillStyle = colours[1]
    //     ctx.fillRect(30 + i + x,0, 30,200);      
    // }


let canvasheight = 200;

let canvaswidth = 300; //canvas width

let patternwidth = 30; //single pattern width

let patternheight = 30;

let noofweftpatterns = canvasheight/(patternheight * coloursWeft.length);

let noofpatterns = canvaswidth/(patternwidth * coloursWarp.length); //total number of patterns

let xaxisstart = 0;

let yaxisstart = 0;



var createPatternRepeat = () => {

  for(var c= 0; c < coloursWarp.length; c++) {
      warpPattern(c)
      weftPattern(c)
  }

 
};

const warpPattern = (c) => {
 
  ctx.fillStyle = coloursWarp[c];
  
  ctx.fillRect(xaxisstart ,0 , patternwidth,200 );
  xaxisstart = xaxisstart + patternwidth;
  
}

const weftPattern = (c) => {
  
  ctx.fillStyle = coloursWeft[c]
  
  ctx.fillRect(0, yaxisstart, 300, patternheight);
  yaxisstart = yaxisstart + patternheight  
}


for( i=0; i< noofpatterns;i++)  {
  createPatternRepeat()
}

  //   for(var c= 0; c < colours.length; c++) {
      
  //     ctx.fillStyle = colours[c]
  //     ctx.fillRect(xi ,0 , warpwidth,200 );
  //     xi = xi+warpwidth;


  // }


   }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
  
    //Our draw come here
    draw(context)
  }, [draw])
        
  return (
    <div>
        <canvas width="300" height="200" style={{border: `1px solid #d3d3d3`}} ref={canvasRef} {...props}/>
    </div>
  )
}

export default Canvas
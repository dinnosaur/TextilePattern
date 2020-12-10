import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    const colours = ['#000000','#ff0000']
    ctx.beginPath()
    for(var i = 0; i < 300; i + 30) {
        ctx.fillStyle = '#000000'
        ctx.fillRect(i,0,i + 30,200);
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(i + 30,0,i + 30,200);
        
    }
    ctx.fill()
    // ctx2.fill()
    
    }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
  
    //Our draw come here
    draw(context)
  }, [draw])
        
  return (
    <div>
        <canvas width="300" height="150" style={{border: `1px solid #d3d3d3`}} ref={canvasRef} {...props}/>
    </div>
  )
}

export default Canvas
import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState("olive")
    const changecolor=(mycolor)=>{
        setColor(mycolor)
    }
    return (
        <div   style={{ backgroundColor: color,height:"770px" }}    >
            <div class="container">
                <div class="row row-cols-2 row-cols-lg-3">
                    <div class="col-4 col-lg-2 bg-danger text-white rounded-pill" onClick={()=>setColor("red")}>Red</div>
                    <div class="col-4 col-lg-2 bg-primary text-white rounded-pill" onClick={()=>setColor("blue")}>Blue</div>
                    <div class="col-4 col-lg-2 bg-warning text-dark rounded-pill" onClick={()=>setColor("yellow")}>Yellow</div>
                    <div class="col-4 col-lg-2 bg-success text-white rounded-pill" onClick={()=>setColor("green")}>Green</div>
                    <div class="col-4 col-lg-2 bg-info text-dark rounded-pill" onClick={()=>setColor("skyblue")}>Skyblue</div>
                    <div class="col-4 col-lg-2 bg-secondary text-white rounded-pill" onClick={()=>setColor("grey")}>Grey</div>
                    <div class="col-4 col-lg-2 bg-secondary text-white rounded-pill" onClick={()=>setColor("olive")}>Reset Color</div>

                </div>
            </div>
        </div>
    )
}

export default BgChanger
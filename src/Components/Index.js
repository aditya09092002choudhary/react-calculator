import React from 'react'
import './Style.css'
export default function index() {
    let result=0;
   

    return (
        <div className='containers'>
            <div className="display">
                <input type="text" name="res" value={result} placeholder='0' id="res" readOnly />
            </div>
            <div className="bottom">
                <div className="elements" style={{background:"gray",color:"black"}}>C</div>
                <div className="elements" style={{background:"gray",color:"black"}}>+/-</div>
                <div className="elements" style={{background:"gray",color:"black"}}>%</div>
                <div className="elements" style={{background:"orange",color:"white",fontSize:"25px"}}>&divide;</div>
                <div className="elements">7</div>
                <div className="elements">8</div>
                <div className="elements">9</div>
                <div className="elements" style={{background:"orange",color:"white"}}>X</div>
                <div className="elements">4</div>
                <div className="elements">5</div>
                <div className="elements">6</div>
                <div className="elements" style={{background:"orange",color:"white"}}>-</div>
                <div className="elements">1</div>
                <div className="elements">2</div>
                <div className="elements">3</div>
                <div className="elements" style={{background:"orange",color:"white"}}>+</div>
                <div className="elements" id="zero">0</div>
                <div className="elements">.</div>
                <div className="elements" style={{background:"orange",color:"white"}}>=</div>
            </div>
        </div>
    )
}

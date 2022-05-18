import React,{useState} from 'react'
import './Style.css'
export default function Calculator() {
    const [state, setstate] = useState("");
    
    const handleCLick = (e)=>{
        setstate(state.concat(e.target.name))
    }
    const result = ()=>{
        const ans =  eval(state);
        setstate(ans);
    }
    const clear = ()=>{
        setstate("");
    }
    function remove(){
        setstate(state.slice(0,-1));
    }
    return (
        <div className='containers'>
            <div className="display">
                <input type="text" name="res" value={state} placeholder='0' id="res" readOnly />
            </div>
            <div className="bottom">
                <button onClick={clear} className="elements" style={{background:"gray",color:"black"}}>C</button>
                <button onClick={handleCLick} name='%' className="elements" style={{background:"gray",color:"black"}}>%</button>
                <button onClick={remove} name='X' className="elements" style={{background:"gray",color:"black"}}>X</button>
                <button onClick={handleCLick} name='/' className="elements" style={{background:"orange",color:"white",fontSize:"25px"}}>&divide;</button>
                <button onClick={handleCLick} name='7' className="elements">7</button>
                <button onClick={handleCLick} name='8' className="elements">8</button>
                <button onClick={handleCLick} name='9' className="elements">9</button>
                <button onClick={handleCLick} name='*' className="elements" style={{background:"orange",color:"white"}}>*</button>
                <button onClick={handleCLick} name='4' className="elements">4</button>
                <button onClick={handleCLick} name='5' className="elements">5</button>
                <button onClick={handleCLick} name='6' className="elements">6</button>
                <button onClick={handleCLick} name='-' className="elements" style={{background:"orange",color:"white"}}>-</button>
                <button onClick={handleCLick} name='1' className="elements">1</button>
                <button onClick={handleCLick} name='2' className="elements">2</button>
                <button onClick={handleCLick} name='3' className="elements">3</button>
                <button onClick={handleCLick} name='+' className="elements" style={{background:"orange",color:"white"}}>+</button>
                <button onClick={handleCLick} name='0' className="elements" id="zero">0</button>
                <button onClick={handleCLick} name='.' className="elements">.</button>
                <button onClick={result} className="elements" style={{background:"orange",color:"white"}}>=</button>
            </div>
        </div>
    )
}

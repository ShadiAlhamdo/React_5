
import React from "react";
import Cdata from "./Cdata";
import './Card.css'
console.log(Cdata)
const Card=()=>{
    return(<>
        <div className="card grid top">
            {Cdata.map((e)=>{
                return(
                <div className="box"key={e.id}>
                <div className="img">
                    <img src={e.cover} alt=""/>
                </div>
                <span>{e.category}</span>
                <h2>{e.title}</h2>
            </div>
            )
            })}
            

        </div>
    
    
    </>);
}
export default Card;
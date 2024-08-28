import React from "react";
import Sdata from "../Slide/Sdata";


const CardTow=()=>{
    return(
        <>
         <div className="cardtow top slide">
       
            {Sdata.map((e)=>{
                return(
                    <div className="box">
                        <div className="img">
                            <img src={e.cover} alt=""/>
                        </div>
                        <div className="text">
                            <span>{e.category}</span>
                            <h2>{e.title}</h2>
                            <p>{e.desc}</p>
                        </div>
                    </div>
                )
            })}
    
     
    
    </div>
        </>
    );
}

export default CardTow;
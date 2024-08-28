import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";
import './Style.css'

const Slide=()=>{
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(<>
    <div className="slide">
         <Slider {...settings}>
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
    
     
    </Slider>
    </div>


        </>);
}

export default Slide;
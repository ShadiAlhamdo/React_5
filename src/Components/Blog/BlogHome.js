import React from "react";
import './Blog.css'
import  img1 from '../../Assest/11.jpg'
import  img2 from '../../Assest/qr-code.png'
import Slide from "../Slide/Slide";
import Card from "./Card";
import Footer from "../Footer/Footer";
import CardTow from "./CardTow";
 const BlogHome=()=>{
    const data=[
        {
            id:1,
            titleOne:'YOU CAN CHANGE THE WORLD ',
            titleTow:'STRONG STYLE',
            paraOne:'How Women are Redirecying Hollywood',
            paraTow:'New Ways To Wear Densim Belt Bags Make A Comebak',
            name:'By Shadi Alhamdo',
            subTitle:'How To Shop Mindfuly',
            qrCode:img2,
            cover:img1,
        }
    ];
    return(
        
        <section className="home">
            <div className="left-content">
                {data.map((e)=>{
                    return(
                        <div className="content">
                            <div className="logo">
                                <h1>M</h1>
                            </div>
                            <div className="home-img">
                                <img src={e.cover} alt=""/>
                            </div>
                            <div className="text">
                                <h1>{e.titleOne}</h1>
                                <p>{e.paraOne}</p>
                                <span>{e.name}</span>
                            </div>
                            <div className="text text2">
                                <h1>{e.titleTow}</h1>
                                <p>{e.paraTow}</p>
                                <span>{e.subTitle}</span>
                            </div>
                            <div className="qrcode"><img src={e.qrCode} alt=""/></div>
                        </div>
                    )
                })}
            </div>
            <div className="right-content">
                <Slide/>
                <Card/>
                <CardTow/>
                <Footer/>
                </div>
        </section>
       
    );
 }

 export default BlogHome;
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" 
            alt="banner" />
            <div className="home__row">
            <Product 
            id={12345}
            title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" 
            price={709.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/I/41k21rsIfzS.jpg"/>
            <Product 
            id={23456}
            title="Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black" 
            price={340.00} 
            rating={4} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            </div>
            <div className="home__row">
            <Product 
            id={34567}
            title="Sceptre 20 - 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170° (Horizontal) / 160° (Vertical)" 
            price={546.00} 
            rating={4} 
            image="https://m.media-amazon.com/images/I/51Q2-EXm7RS._AC_UL320_.jpg"/>
            <Product 
            id={45678}
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games" 
            price={69.99} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"/>
            <Product 
            id={56789}
            title="GTRACING Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest and Lumbar Pillow E-Sports Chair Red" 
            price={144.99} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/619sWFsXJ+L._AC_UL320_.jpg"/>
            </div>
            <div className="home__row">
            <Product 
            id={67890}
            title="Samsung Tab A7 Lite 8.7 - Gray 32GB (SM-T220NZAAXAR)" 
            price={94.00} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL320_.jpg"/>
            <Product 
            id={78901}
            title="Wireless Mouse Bluetooth Gaming Optical Mouse A2 Wireless USB Rechargeable RGB Cordless Mice for Pc Laptop White" 
            price={14.99} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/41P1cE-WV6S._AC_UY218_.jpg"/>
            <Product 
            id={89012}
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB" 
            price={499.99} 
            rating={5} 
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UY218_.jpg"/>
            </div>
        </div>
    )
}

export default Home

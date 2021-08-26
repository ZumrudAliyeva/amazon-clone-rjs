import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" 
            alt="banner" />
            <div className="home__row">
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            </div>
            <div className="home__row">
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            </div>
            <div className="home__row">
            <Product 
            id={12345}
            title="lorem ipsum dolor gfxhgcjhvkhvkhvkj" 
            price={546.00} 
            rating={5} 
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
            </div>
        </div>
    )
}

export default Home

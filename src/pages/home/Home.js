import "./Home.css";
import React from 'react';
import { Hero } from '../../components/home/Hero';
import { Display } from "../../components/home/Display";
import { ProductPanel } from "../../components/home/ProductPanel";

export const Home = ({ data }) => {
    return (
        <div className="homeContainer">
            <Hero tagline={data.tagline} subTagline={data.subTagline}/>
            <h1 className="favouritesHeader">SHOP OUR FAVOURITES</h1>
            <Display orientation="right" name={data.display1.name} subtext={data.display1.subtext} id="0" />
            <Display orientation="left" name={data.display2.name} subtext={data.display2.subtext} id="1" />   
            <ProductPanel arrayOfProducts={[data.product1, data.product2, data.product3, data.product4]} />     
        </div>
    )
}

import "./ProductPanel.css";
import React from 'react';

export const ProductPanel = ({ arrayOfProducts }) => {
    return (
        <div className="productPanelContainer">
            <h2 className="productPanelHeader">MOST POPULAR</h2>
            <div className="productPanelList">
                <div className="productPanelProductContainer">
                    <div className="productPanelProductImgContainer">
                        <img className="productPanelProductImg" src={require("../../images/product-img1.jpeg")} />
                    </div>
                    <h3 className="productPanelProductName">{arrayOfProducts[0].name}</h3>
                    <h3 className="productPanelProductPrice">{"$ " + (arrayOfProducts[0].price.toString().includes(".") ? arrayOfProducts[0].price.toString() + "0" : arrayOfProducts[0].price.toString() + ".00")}</h3>
                </div>
                <div className="productPanelProductContainer">
                    <div className="productPanelProductImgContainer">
                        <img className="productPanelProductImg" src={require("../../images/product-img2.jpeg")} />
                    </div>
                    <h3 className="productPanelProductName">{arrayOfProducts[1].name}</h3>
                    <h3 className="productPanelProductPrice">{"$ " + (arrayOfProducts[1].price.toString().includes(".") ? arrayOfProducts[1].price.toString() + "0" : arrayOfProducts[1].price.toString() + ".00")}</h3>
                </div>
                <div className="productPanelProductContainer">
                    <div className="productPanelProductImgContainer">
                        <img className="productPanelProductImg" src={require("../../images/product-img3.jpeg")} />
                    </div>
                    <h3 className="productPanelProductName">{arrayOfProducts[2].name}</h3>
                    <h3 className="productPanelProductPrice">{"$ " + (arrayOfProducts[2].price.toString().includes(".") ? arrayOfProducts[2].price.toString() + "0" : arrayOfProducts[2].price.toString() + ".00")}</h3>
                </div>
                <div className="productPanelProductContainer">
                    <div className="productPanelProductImgContainer">
                        <img className="productPanelProductImg" src={require("../../images/product-img4.jpeg")} />
                    </div>
                    <h3 className="productPanelProductName">{arrayOfProducts[3].name}</h3>
                    <h3 className="productPanelProductPrice">{"$ " + (arrayOfProducts[3].price.toString().includes(".") ? arrayOfProducts[3].price.toString() + "0" : arrayOfProducts[3].price.toString() + ".00")}</h3>
                </div>
            </div>
            <hr className="productPanelBottomBorder" />
        </div>
    )
}

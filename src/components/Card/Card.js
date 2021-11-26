import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"

import './Card.css'

const Cart = (props) => {
    if(props.showCart){
      return (
        <div className="cart-container">
          <h3 className="cart-header">{props.header}</h3>
          <div className="product">
            <img src={props.productImage} alt="product_image" className="product_image"/>
            <p>{props.description}</p>
            <DeleteIcon style={{fill: "gray"}}/>
          </div>
          <button className="btn-checkout">{props.message}</button>
        </div>
      )
    }
    else{
      return null;
    }
}

export default Cart
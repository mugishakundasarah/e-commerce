import React,{useState} from "react"; 
import { Button } from "@material-ui/core"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Modal from '@material-ui/core/Modal/Modal'
import {Box} from "@material-ui/core";

import ShoesProduct1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import ShoesProduct2Thumbnail from '../images/image-product-2-thumbnail.jpg'
import ShoesProduct3Thumbnail from '../images/image-product-3-thumbnail.jpg'
import ShoesProduct4Thumbnail from '../images/image-product-4-thumbnail.jpg'
import ShoesProduct from '../images/image-product-1.jpg';
import './HomePage.css';

const incrementCounter = (count) => count+=1;
const decrementCounter = (count) => count-=1;


const HomePage = () => {
    let [counter, setCounter] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30em",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        outline: 0
      };
    return (
        <div className="main-content">
            <div className="images">
                <img src={ShoesProduct} alt="shoes_product_1" className="shoes_image"/>
                <div className="thumbnail">
                    <img onClick={handleOpen} src={ShoesProduct1Thumbnail} alt="shoe_design" className="shoe_design"/>
                    <img onClick={handleOpen} src={ShoesProduct2Thumbnail} alt="shoe_design" className="shoe_design"/>
                    <img onClick={handleOpen} src={ShoesProduct3Thumbnail} alt="shoe_design" className="shoe_design"/>
                    <img onClick={handleOpen} src={ShoesProduct4Thumbnail} alt="shoe_design" className="shoe_design"/>
                </div>
            </div>
            <div className="description">
                <h1 className="company_title">sneaker company</h1>
                <h1 className="company_description">Fall Limited Edition <div>Sneakers</div></h1>
                <p className="description_paragraph">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they'll 
                    withstand everything the weather can offer.
                </p>
                <h1 className="product_amount">
                    <span>$125.00</span>
                    <span className="badge">50%</span>
                </h1>
                <small className="previous_amount">$250.00</small>
                <div className="product-pricing">
                    <Button 
                        startIcon={<AddIcon style={{fill: 'var(--light-orange)'}} onClick={()=>setCounter(incrementCounter(counter))}/>}  
                        variant="contained"
                        style={{
                            color: 'black',
                            backgroundColor : '#F7F8FD',
                            width: '40%',
                            textTransform: "lowercase",
                            display: "flex", 
                            justifyContent : "space-around"
                        }}
                        endIcon={<RemoveIcon style={{fill: 'var(--light-orange)'}} onClick={()=>setCounter(decrementCounter(counter))}/>}
                    >
                        {counter}
                    </Button>
                    
                    <Button 
                        startIcon={<ShoppingCartOutlinedIcon style={{fill: '#fffffF'}}/>}  
                        variant="contained"
                        style={{
                            color: '#FFFFFF',
                            backgroundColor : '#FF7100',
                            width: '50%',
                            textTransform: "lowercase"
                        }
                        }
                        
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
            <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <Box sx={style}>
                    <img src={ShoesProduct} alt="shoesproduct"/>
                </Box>
      </Modal>
    </div>
        </div>
    )
}

export default HomePage
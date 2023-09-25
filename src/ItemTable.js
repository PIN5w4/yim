import React,{useEffect} from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import WebFont from 'webfontloader';

const ItemTable = ({detail,nmbr}) =>{
          

    return (
        <div className="col-12 col-md-6 cell">
            <div className={`item ${nmbr % 2 === 0 ? 'even' : 'odd'}`}>
                <img src={detail.image} style={{width:'90%',marginLeft:'5%'}}/>
                <br/>
                <br/>
                <label>{detail.description[0]}</label><br/>
                <label>{detail.description[1]}</label><br/>
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-6">
                        <label className="price">฿{detail.price.toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2})}</label>
                    </div>
                    <div className="col-6" style={{marginBottom:'20px'}}>
                        <div className="btn btn-danger rounded-circle basket"><FontAwesomeIcon style={{marginTop:'5px'}} icon={faShoppingBasket} size='2x'/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTable;
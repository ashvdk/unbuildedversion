import React from 'react'

function QuantityControlller(props) {
    return (
        <div style={{display:"flex",fontSize:"22px"}}>
            {props.qty ? <i className="fa fa-minus-square-o" onClick={props.decreaseCartQty}></i> : <i className="fa fa-minus-square-o" style={{color:"grey"}}></i>}
            <div style={{padding:"0px 9px",marginTop:"-3px"}}>{props.qty}</div>
            <i className="fa fa-plus-square-o" onClick={props.increaseCartQty}></i>
        </div>
    )
}

export default QuantityControlller

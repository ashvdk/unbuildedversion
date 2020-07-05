import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div style={modalDesign}>
            <div style={{position:"relative",background: "white none repeat scroll 0% 0%",width: "300px",borderRadius:"5px",height: "200px",display: "flex",alignItems: "center",justifyContent: "center"}}>
                <div style={{textAlign:"center",fontSize:"20px"}}>
                    <div style={{border: "1px solid rgb(224, 224, 224)",position: "absolute",top: "-14px",right: "-14px",borderRadius: "50%",width: "30px",fontSize: "16px",background: "white",display: "flex",alignItems: "center",justifyContent: "center",height: "30px",cursor:"pointer"}} onClick={props.checkout}>
                        X
                    </div>
                    <div style={{color:"#0aa472",marginBottom:"11px"}}>Woohoo!!</div>
                    <div style={{marginBottom:"19px"}}>Your order has been placed</div>
                    <hr style={{width: "100px",color: "rgb(10, 164, 114)"}}/>
                </div>
            </div>
        </div>,
        document.querySelector("#modal-root")
    )
}

const modalDesign = {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

export default Modal
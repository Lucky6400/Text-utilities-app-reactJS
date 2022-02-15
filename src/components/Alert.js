import React from 'react'

const Alert = (props) => {
    
    return (

        <div style={{height:'64px'}}>
            {props.alert && 
        
        <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <b>{props.alert.typ}</b> : {props.alert.msg}
            
        </div>}
        </div>
       
    )
}

export default Alert

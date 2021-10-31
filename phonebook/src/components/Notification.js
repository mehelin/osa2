import React from 'react'
const Notification = ({ message, errorMessage}) => {
    const style = {
        // muuttaa väriä, jos tulee epäonnistuminen tai onnistuminen jne
        color: errorMessage ? 'darkred' : 'darkviolet',
        background: 'lightgrey',
        fontSize: 18,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      };
    
    if (message === null ) {
      return null
    }
    
   
    return (
        <div style={style} >
          {message}
      </div>
    )
  }

  export default Notification
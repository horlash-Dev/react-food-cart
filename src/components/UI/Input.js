import React from "react";


const Input = React.forwardRef((props,ref) => {
    return (
        <input {...props} ref={ref} min={1} max={100}  />
    )
    })
    
    export default Input;
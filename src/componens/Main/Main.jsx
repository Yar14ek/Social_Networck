import React from 'react';
import {classes} from './mainStyle'

function Main(){
    
    const {
        title,
    }=classes
    
    
    
    return(
        <div className = {title}>Hello</div>
        // <div className = {classes.title}>Hello</div>      или так

        )
};
export default Main;
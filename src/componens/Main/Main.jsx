import React,{Fragment} from 'react';
import {classes} from './mainStyle'
import Post from '../Post/Post'

function Main(){
    return(
        <Fragment>
         <div className = {classes.title}>Hello</div>
            <Post/>
        </Fragment>
        )
};
export default Main;
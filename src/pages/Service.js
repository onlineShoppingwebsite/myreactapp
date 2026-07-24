import React,{Fragment} from 'react'
import myimg from "../images/a.jpg";

function Service(){
    const abc="https://m.media-amazon.com/images/I/71SiLxdQ0jL.jpg";
   // const status="success";
   const status="stop";
    return(
        <Fragment>
            <img src='https://m.media-amazon.com/images/I/71SiLxdQ0jL.jpg' alt='ytfgfg' width="200"/>
            <img src={abc} alt="ssssssg"  width="200"/>
            <img src={myimg} alt="fffff" width="200"/>
            <h1 style={{'background-color':'red','color':'green'}}>this is inlne css link</h1>
            <h1 style={{backgroundColor:'red',color:'green',padding:10}}>this is inline css link</h1>
            <h3 className='first'>this is external css</h3>
            <div className="first">
                <h2 style={{backgroundColor:`${status==="stop"? 'red' : 'green'}`}}>this is my status</h2>
            </div>
        </Fragment>
    )
}
export default Service
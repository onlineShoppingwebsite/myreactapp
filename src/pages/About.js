import {Fragment} from "react/jsx-runtime";
export default function About(){
    return(
        <div>
        <h1>heading one</h1>
        <p>this is text<h2>heading box</h2></p>
         <h2>this is heading<p>paragraph box</p></h2>
        </div>
    )
}

//export default About

function About2(){
    return <h4>this is heading four</h4>
}

export {About2}

export function About3(){
    return <h4>this is heading fours</h4>
}
export function Page()
{
    return(
       // <div>
       //<>
       <Fragment>
            <h1>this is first page</h1>
            <h1>heading one</h1>
            </Fragment>
      // </>
       // </div>
    )
}
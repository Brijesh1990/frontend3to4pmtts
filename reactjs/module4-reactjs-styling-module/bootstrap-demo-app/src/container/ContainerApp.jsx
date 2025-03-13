import React from "react";
import { Container,Row,Button } from "react-bootstrap";
function ContainerApp()
{
    return(
        <>
         <Container>
         <h2>This is an examples of Container</h2>
         <hr className="w-25" />
            <Row>
              
                <div className="col-md-4 shadow p-5 mt-5">
                    <p>Provides container</p>
                </div>
                <div className="col-md-7 ms-5 shadow p-5 mt-5 app">
                    <p>This is just check bootstrap as components in React js </p>
                    <p><Button className="btn btn-md btn-danger text-white">Click Me!</Button></p>
                </div>
            </Row>
         </Container>
        </>
    )
}
export default ContainerApp
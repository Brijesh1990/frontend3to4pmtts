import React from "react";
import { Container, Row, Card, CardHeader,CardBody } from "react-bootstrap";
import NavbarApp from "../navbar/NavbarApp";
import ModalApp from "../modal/SignUpApp";
function ToggleApp()
{
    return(
        <>
        <NavbarApp />
        {/* our price card list */}
        <h1 className="text-center">Pricing</h1>
        <p className="text-center">Create and share professional price lists. Customize templates for your products with images, attributes and tiered pricing. Sign up to design your price list!</p>
        <Container className="mt-5 p-3">
            <Row>
                <div className="col-md-4">
                    <Card>
                        <CardHeader><h3 className="text-center">Free</h3></CardHeader>
                        <CardBody>
                            <h1 className="text-center">$0/<span className="fs-4">mo</span></h1>
                            <p className="text-center">Create and share professional price lists. Customize templates for your products with images, attributes and tiered pricing. Sign up to design your price list!</p>
                            <p className="text-center"><button className="btn btn-outline-primary w-75">SignUp for Free</button></p>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card>
                        <CardHeader><h3 className="text-center">Pro</h3></CardHeader>
                        <CardBody>
                            <h1 className="text-center">$85/<span className="fs-4">mo</span></h1>
                            <p className="text-center">Create and share professional price lists. Customize templates for your products with images, attributes and tiered pricing. Sign up to design your price list!</p>
                            <p className="text-center"><button className="btn btn-outline-primary w-75">SignUp for Free</button></p>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card>
                        <CardHeader><h3 className="text-center">EnterPrise</h3></CardHeader>
                        <CardBody>
                            <h1 className="text-center">$450/<span className="fs-4">mo</span></h1>
                            <p className="text-center">Create and share professional price lists. Customize templates for your products with images, attributes and tiered pricing. Sign up to design your price list!</p>
                            <p className="text-center"><button className="btn btn-primary w-75"  data-bs-toggle="modal" data-bs-target="#signUp">SignUp for Free</button></p>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>

        {/* modal componenets */}
        <ModalApp />
        </>
    )
}

export default ToggleApp
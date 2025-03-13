import React from "react";
import { Container,Row } from "react-bootstrap";

function ModalApp()
{
    return(
        <>
           <div className="modal fade" id="signUp" role="dialog">
            <div className="modal-dialog mt-5" style={{maxWidth:"60%"}}>
               <Container fluid>
                <Row>
                    <div className="col-md-6 bg-white text-white p-5">
                        <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="photo" className="img-fluid" />
                    </div>

                    <div className="col-md-6 bg-white">
                      <h2>Sign Up</h2>
                      <hr className="w-50" />
                        <form>
                            <div className="form-group mt-4">
                                <input type="text" placeholder="Email *" className="form-control" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" placeholder="Email *" className="form-control" />
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" placeholder="Phone *" className="form-control" />
                            </div>
                            <div className="form-group mt-4 mb-5">
                                <input type="submit" placeholder="Email *" className="btn btn-primary text-white" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </Row>
               </Container>

            </div>
           </div>
           
        </>
    )
}

export default ModalApp
import * as React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';



const CTA = () => {

    return (
        <div>
            <MDBContainer  >
                <MDBRow>
                    <MDBCol className='text-center'>
                        <h1>Call to action </h1>
                    </MDBCol>
                </MDBRow>
                <div className="text-center">
                    <MDBBtn>Primary</MDBBtn>
                </div>

            </MDBContainer>
        </div>
    )
}

export default CTA
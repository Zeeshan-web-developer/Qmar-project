import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
function footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <span >
                                Copyright &copy; CodewithQamar 
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default footer

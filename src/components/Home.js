import React, { useRef, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

function Home() {
    const inputEl = useRef(null);
    const [ret, setRet] = useState(false);
    const [source, setSource] = useState("Mumbai");
    const [destination, setDestination] = useState("Goa");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    function handleClick(e) {
        e.preventDefault();
        console.log(`User source is ${source}, the user destination is ${destination}, 
        departure date is ${departureDate}, date of return is ${ret}, ${returnDate}`);
    }

    return (
        <Container>
            <div className="card1 mt-5">
                <Form style={{ padding: "15px" }}>
                    <p style={{ marginBottom: "0" }}><i className="fas fa-dove fa-2x"></i> <span className="logotxt">pixigo</span></p>
                    <p style={{ fontWeight: "500" }} >SEARCH - BOOK - GO!</p>
                    <Row>
                        <Col>
                            <label>From</label>
                            <Form.Control
                                as="select"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                                custom>
                                <option>Mumbai</option>
                                <option>Banglore</option>
                                <option>Chennai</option>
                                <option>Delhi</option>
                                <option>Indore</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <label>To</label>
                            <Form.Control
                                as="select"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                custom>
                                <option>Goa</option>
                                <option>Banglore</option>
                                <option>Chennai</option>
                                <option>Delhi</option>
                                <option>Indore</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mt-3" style={{ paddingRight: "15px", paddingLeft: "15px" }}>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Return type journey."
                            onChange={() => { setRet(!ret); inputEl.current.disabled = ret }}
                        />
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <label>Departure</label>
                            <input
                                style={{ borderRadius: "4px", border: "1px solid #D0D3D4" }}
                                type="date"
                                id="datePicker1"
                                onChange={(e) => setDepartureDate(e.target.value)}
                            />
                        </Col>
                        <Col >
                            <label>Return</label>
                            <input
                                style={{ borderRadius: "4px", border: "1px solid #D0D3D4" }}
                                type="date"
                                id="datePicker2"
                                ref={inputEl}
                                onChange={(e) => setReturnDate(e.target.value)}
                                disabled
                            />
                        </Col>
                    </Row>
                    <button className="searchBtn" onClick={handleClick}>Search</button>
                </Form>
            </div>
        </Container>
    )
}

export default Home;

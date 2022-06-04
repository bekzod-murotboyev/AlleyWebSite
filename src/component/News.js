import {Card, Col, Row} from "react-bootstrap";
import prezident1 from "../img/prezident.jpeg";
import prezident2 from "../img/prezident2.jpeg";
import prezident3 from "../img/prezident3.jpeg";
import prezident4 from "../img/prezident4.jpeg";

function news(){

    return(
        <div className='p-5'>
            <div className="row">
                <div className="col-md-6 offset-3 text-center">
                    <h1 className='p-4'>Adiblar Xiyoboni haqida</h1>
                </div>
                <div className="col-md-6 offset-3 text-lg-center">
                    <p className='font-monospace'>Mumtoz adabiyot vakillarini o’z ichiga jamlagan Adiblar xiyoboni
                        2017-yil 18-aprelda Alisher Navoiy nomidagi Oʻzbekiston Milliy bogʻida barpo etildi.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h2>Yangliklar va Tadbirlar</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={prezident1}/>
                                <Card.Body>
                                    <Card.Title>Prezident Adiblar Xiyobonida.</Card.Title>
                                    <Card.Text>
                                        Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={prezident2}/>
                                <Card.Body>
                                    <Card.Title>Prezident Adiblar Xiyobonida.</Card.Title>
                                    <Card.Text>
                                        Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={prezident3}/>
                                <Card.Body>
                                    <Card.Title>Prezident Adiblar Xiyobonida.</Card.Title>
                                    <Card.Text>
                                        Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={prezident4}/>
                                <Card.Body>
                                    <Card.Title>Prezident Adiblar Xiyobonida.</Card.Title>
                                    <Card.Text>
                                        Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi O'zbekiston milliy...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default news
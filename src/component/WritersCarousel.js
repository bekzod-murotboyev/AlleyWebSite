import {Carousel} from "react-bootstrap";
import writerImg from '../img/writer.jpeg'

function WritersCarousel() {

    return <div className='p-5'>
        <div className="row">
            <div className="col-md-12">
                <h1>Yozuvchilar</h1>
            </div>
        </div>
        <div className="row p-5">
            <div className="col-md-12">
                <Carousel variant="dark">
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-25"
                            src={writerImg}
                            alt="First slide"
                        />
                        <Carousel.Caption className='ps-lg-5'>
                            <h3>Cho’lpon</h3>
                            <p className='px-lg-5 ms-lg-5 text-start'>
                                Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov —
                                oʻzbek
                                sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan
                                biri.
                                U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-25"
                            src={writerImg}
                            alt="First slide"
                        />
                        <Carousel.Caption className='ps-lg-5'>
                            <h3>Cho’lpon</h3>
                            <p className='px-lg-5 ms-lg-5 text-start'>
                                Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov —
                                oʻzbek
                                sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan
                                biri.
                                U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-25"
                            src={writerImg}
                            alt="First slide"
                        />
                        <Carousel.Caption className='ps-lg-5'>
                            <h3>Cho’lpon</h3>
                            <p className='px-lg-5 ms-lg-5 text-start'>
                                Choʻlpon Abdulhamid Sulaymon oʻgʻli, asl ismi Abdulhamid Sulaymon oʻgʻli Yunusov —
                                oʻzbek
                                sovet shoiri, yozuvchi, dramaturg va publitsist, yangi oʻzbek sheʼriyati asoschilaridan
                                biri.
                                U o‘z asarlarini tahallus Cho‘lpon bilan imzolagan
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>

}

export default WritersCarousel

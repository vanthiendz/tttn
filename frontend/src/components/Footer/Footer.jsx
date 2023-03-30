import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'




const quick_links = [
    {
        path: '/home',
        display: 'Trang Chủ'
    },
    {
        path: '/about',
        display: 'Thông tin'
    },
    {
        path: '/tours',
        display: 'Địa điểm'
    },
];


const quick_links2 = [
    {
        path: '/gallery',
        display: 'Trưng bày'
    },
    {
        path: '/login',
        display: 'Đăng nhập'
    },
    {
        path: '/register',
        display: 'Đăng ký'
    },
]
const Footer = () => {

    const year = new Date().getFullYear()
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Vietnam Airlines tự hào là Hãng hàng không quốc tế 5 sao <br />
                            Xin trân trọng cảm ơn sự đồng hành của Quý khách và bạn hàng!</p>

                        <div className="social_links d-flex align-itmes-center gap-4" >
                            <span>
                                <Link to='#'><i class="ri-youtube-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-github-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class="ri-instagram-line"></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <h5 className='footer_link-title'>Hỗ Trợ</h5>
                    <ListGroup className='footer_quick-links'>
                        {
                            quick_links.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className='footer_link-title'>Hỗ Trợ</h5>
                    <ListGroup className='footer_quick-links'>
                        {
                            quick_links2.map((item, index) => (
                                <ListGroupItem key={index} className='ps-0 border-0'>
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className='footer_link-title'>Liên hệ</h5>
                    <ListGroup className='footer_quick-links'>

                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-map-pin-line"></i></span>

                                Địa chỉ:
                            </h6>
                            <p className='mb-0'>hồ Chí Minh</p>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-mail-line"></i></span>

                                Email:
                            </h6>
                            <p className='mb-0'>lasjdlkasj@gmail.com</p>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                            <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-phone-line"></i></span>

                                Điện thoại:
                            </h6>
                            <p className='mb-0'>01202020210</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='12' className='text-center pt-5'>
                    <p className="copyright">Copyright {year}</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer 
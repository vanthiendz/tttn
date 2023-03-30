import React from 'react'
import './newletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter_content">
                            <h2>Nhập email để biết thêm thông tin</h2>
                            <div className="newsletter_input">
                                <input type='email' placeholder='Nhập email' />
                                <button className='btn newsletter_btn'>Đăng ký</button>
                            </div>
                            <p>Điểm du lịch nào có nhiều cảnh quan đẹp, món ăn ngon, đáng đến nhất là điều mà nhiều du khách trong và ngoài nước quan tâm khi lên kế hoạch khám phá Việt Nam? Review 20+ địa điểm du lịch nổi tiếng nhất đang thu hút đông đảo khách tham quan.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter
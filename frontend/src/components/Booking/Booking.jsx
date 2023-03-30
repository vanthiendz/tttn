import React, { useState } from 'react'
import './Booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'thien@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: '',
    })

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const serviceFree = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFree)

    const handleClick = e => {
        e.preventDefault()
        navigate("/thank-you")
    }


    return <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>{price} VND <span>/Ngày</span></h3>
            <span className='tour_raiting d-flex align-items-center '>
                <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        <div className="booking_form">
            <h5>Thông tin</h5>
            <Form className='booking_info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Họ và Tên' id='fullName'
                        required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Số điện thoại' id='phone'
                        required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt'
                        required onChange={handleChange} />
                    <input type="number" placeholder='Số ngày' id='guestSize'
                        required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>


        <div className="booking_bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>{price} VNĐ <i class="ri-close-line"></i> 1 Ngày</h5>
                    <span>{price} VNĐ</span>

                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Phí dịch vụ</h5>
                    <span>{serviceFree} VNĐ</span>

                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Tổng</h5>
                    <span>{totalAmount} VNĐ</span>

                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary_btn w-100 mt-4' onClick={handleClick} >Đặt địa điểm</Button>
        </div>
    </div>
}

export default Booking
import React, { useRef } from 'react'
import './Search-Bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const MaxgroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const MaxgroupSize = MaxgroupSizeRef.current.value

        if (location === '' || distance === '' || MaxgroupSize === '') {
            return alert("Thong tin dang trong")
        }
    }
    return (


        <Col lg='12'>
            <div className="search_bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span>
                            <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Địa điểm</h6>
                            <input type="text" placeholder='Dia chi' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span>
                            <i class="ri-pin-distance-line"></i>
                        </span>
                        <div>
                            <h6>Khoảng cách</h6>
                            <input type="number" placeholder='k/m' ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form_group form_group-last'>
                        <span>
                            <i class="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Số thành viên</h6>
                            <input type="number" placeholder='0' ref={MaxgroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search_icon' type='submit' onClick={searchHandler}>
                        <i class="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    )
}

export default SearchBar
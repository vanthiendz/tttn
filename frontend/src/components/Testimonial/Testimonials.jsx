import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSile: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Trước đây khu du lịch sinh thái Cao Minh vốn chỉ là khu dã ngoại, cắm trại, nhưng gần đây có các căn nhà nghỉ dưỡng ven suối, hồ... khá dễ thương. Không khí thì rất trong lành. Mới qua đêm ở đây, sáng dậy còn thấy sương mờ ảo và cò bay (mặc dù đang trong mùa nắng), cảm thấy là lạ nhưng tuyệt vời! Phù hợp với ai có máu bụi bụi như mình</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Bui Van Thien</h6>
                        <p>Khách hàng</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Trước đây khu du lịch sinh thái Cao Minh vốn chỉ là khu dã ngoại, cắm trại, nhưng gần đây có các căn nhà nghỉ dưỡng ven suối, hồ... khá dễ thương. Không khí thì rất trong lành. Mới qua đêm ở đây, sáng dậy còn thấy sương mờ ảo và cò bay (mặc dù đang trong mùa nắng), cảm thấy là lạ nhưng tuyệt vời! Phù hợp với ai có máu bụi bụi như mình</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Bui Van Thien</h6>
                        <p>Khách hàng</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Trước đây khu du lịch sinh thái Cao Minh vốn chỉ là khu dã ngoại, cắm trại, nhưng gần đây có các căn nhà nghỉ dưỡng ven suối, hồ... khá dễ thương. Không khí thì rất trong lành. Mới qua đêm ở đây, sáng dậy còn thấy sương mờ ảo và cò bay (mặc dù đang trong mùa nắng), cảm thấy là lạ nhưng tuyệt vời! Phù hợp với ai có máu bụi bụi như mình</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Bui Van Thien</h6>
                        <p>Khách hàng</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Trước đây khu du lịch sinh thái Cao Minh vốn chỉ là khu dã ngoại, cắm trại, nhưng gần đây có các căn nhà nghỉ dưỡng ven suối, hồ... khá dễ thương. Không khí thì rất trong lành. Mới qua đêm ở đây, sáng dậy còn thấy sương mờ ảo và cò bay (mặc dù đang trong mùa nắng), cảm thấy là lạ nhưng tuyệt vời! Phù hợp với ai có máu bụi bụi như mình</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Bui Van Thien</h6>
                        <p>Khách hàng</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
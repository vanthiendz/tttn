import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
const Home = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero_content">
                                <div className="hero_subtitle d-flex align-items-center">
                                </div>
                                <h1>Khám phá các khu du lịch<span className="highligh"></span></h1>
                                <p>Chương trình Biểu tượng “Bông sen vàng” được giới thiệu lần đầu vào ngày 20/10/2002 đánh dấu bước khởi đầu trong việc xây dựng định hướng toàn diện về thương hiệu của Vietnam Airlines và đã đạt được nhiều thành công đáng kể trên toàn thế giới.
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <h2 className="featured_tour-title">Các khu du lịch</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience_content">
                                <h2>Với nhiều năm kinh nghiệm <br /> Chúng tôi sẵn sàng phục vụ</h2>
                            </div>

                            <div className="counter_wrapper d-flex align-itmes-center gap-5">
                                <div className="counter_box">
                                    <span>12k+</span>
                                    <h6>Hoàn thành</h6>
                                </div>
                                <div className="counter_box">
                                    <span>2k+</span>
                                    <h6>Khách hàng đánh giá</h6>
                                </div>
                                <div className="counter_box">
                                    <span>15</span>
                                    <h6>Năm kinh nghiệm</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h2 className="gallery_title">
                                Số ảnh từ khách hàng
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h2 className="testimonial_title">Các hành khách đánh giá</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Newsletter />

        </>
    )
}

export default Home
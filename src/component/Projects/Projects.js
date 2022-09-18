import React,{useEffect, useRef} from 'react';
import './Projects.css';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Pagination,Navigation } from "swiper";
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/pagination/pagination.min.css";
import "../../../node_modules/swiper/modules/navigation/navigation.min.css";
import { ProjectsData } from '../../assets/Data';
const Projects = ()=>{
    let sectionThree = useRef()
    let turquoiseBg = useRef();
    let darkBg = useRef();
    let content = useRef();
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= sectionThree.current.offsetTop - 500){
            turquoiseBg.current.style.width = '100%';
            darkBg.current.style.width = '100%';
            content.current.style.opacity = 1
        }
    }
    )

    return(
        <>
            <div className='container'>
                <section id='projects' ref={sectionThree} >
                    <div className='background-turquoise-2' ref={turquoiseBg}>
                        <div className='background-dark-2' ref={darkBg}></div>
                    </div>
                    <div className='content' ref={content}>
                        <h2 className='section-tittle' >B2B hall of fame</h2 >
                        <div className='projects-slider'>
                            <Swiper 
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper">

                                    {
                                        ProjectsData.map(({tittle,description,video},idx)=>{
                                            return(
                                                <SwiperSlide key={idx} >
                                                <div className='element'>
                                                    <div className='element-details' >
                                                        <h2 className='section-tittle slider-tittle'>{tittle}</h2>
                                                        <p className='section-p slider-p'>{description}</p>
                                                        <button className='section-btn'>VIEW PROJECT</button>
                                                    </div>
                                                    <video loop muted autoPlay >
                                                        <source src={video} type="video/mp4" />
                                                    </video>
                                                </div>
                                            </SwiperSlide>
                                            )
                                        })
                                    }
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Projects;
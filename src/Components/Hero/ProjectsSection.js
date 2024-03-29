import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../Projects/ProjectItem';
import SectionTitle from '../Reusable/SectionTitle';
import projects from '../../assets/data/projects';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const ProjectSectionStyle = styled.div`
   background-color: ${(props) =>
    props.theme.bg
  };
  color: ${(props) =>
    props.theme.text
  };;
  padding: 10rem 0;
  .swiper {
  width: 45%;
  height: auto;
  background-color: ${(props) =>
    props.theme.bg_2
  };
  padding: 3rem;
}
.swiper-slide {
  text-align: center;
  font-size: 1.8rem;
  background:${(props) => props.theme.bg};
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  @media only screen and (max-width: 768px) {
.swiper {
  width: 100%;
  height: 100%;
}
    }
  
`;

export default function ProjectsSection() {

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <Swiper
          slidesPerView='auto'
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projects.map((project, index) => {

            return (
              <SwiperSlide>
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ProjectSectionStyle>
  );
}

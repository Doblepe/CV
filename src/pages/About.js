
import React from 'react';
import styled from 'styled-components';
//import PText from '../Components/Reusable/PText';
import Map from '../Components/About/Map';
import AboutImg from '../assets/images/about_pic.jpg';
import ContactBanner from '../Components/Contact/ContactBanner';

const AboutPageStyles = styled.div`
  background-color: ${(props) =>
    props.theme.bg
  };
  color: ${(props) =>
    props.theme.text
  };
  padding: 120px 0;
  font-size: 16px;
  line-height: 1.3em;
  font-family: 'Raleway', sans-serif;
 .top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
  a {
    color: ${(props) =>
    props.theme.text
  }}
  a:hover{
    border-bottom-width: 1px solid;
  }
  .education_section{
    gap:2rem;
    font-size: 16px;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 22px;
    margin-bottom: 2rem;
    span {
      background-color:${(props) =>
    props.theme.secondary
  };
      padding: 15px;
      border-radius: 20px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    line-height: 1.3em;
  }
  .about__info {
    background-color: ${(props) =>
    props.theme.bg_2
  };
    border: solid 2px ${(props) =>
    props.theme.secondary
  };
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {border: 2px solid ${(props) => props.theme.secondary};
    }
    margin-top: 10em;
  }
  .about__info__items {
    margin-top: 30px;
    background-color: ${(props) =>
    props.theme.bg_2
  };
    border: solid 2px ${(props) =>
    props.theme.secondary
  };
    padding: 2rem;
  }
  .about__info__item {
    margin-bottom: 5rem;
    padding: auto;
  }
  .about__info__item i{
   font-size: 5rem;
    color: ${(props) =>
    props.theme.icons
  };

  };
  .about__info__heading {
  text-transform: uppercase;  
  font-size: 2.6rem;
  padding: 10px 0 10px 0px;
  color: ${(props) =>
    props.theme.text
  };
   text-align:center;
  border-bottom: 2px solid ${(props) =>
    props.theme.secondary
  };
  }
   h3 {
  font-size: 2.4rem;
  padding: auto;
  color: ${(props) =>
    props.theme.text
  };
   text-align:center;
  }
    h2{
  font-size: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.text};
  font-family: bold;
  padding: 2rem 0 1rem 0;
  color: ${(props) => props.theme.text};
  text-align:center;
    }
  .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding:1rem 
  }

  .fav_box{
    display:flex;
    flex-direction: row;
    justify-content: space-around
  }
  .skills_article{
    justify-content:center;
    align-items: center;
   display: flex;
   flex-direction: column;
   border: solid 2px ${(props) =>
    props.theme.bg
  };
  background-color: ${(props) =>
    props.theme.bg
  };
  margin-top:16px;
  padding: 10px 0;
  width:125px;
  }
  .experience_box{
    margin: 20px 0;
    padding: auto;
    display: flex;
    flex-direction: column;
  }
  p {
    padding:10px;
    font-size: 1.8rem
    line-height: 1.5;
   }
   @media only screen and (max-width: 1100px) {
    padding: 125px 0;
    line-height: 1.3em;
   p {
    padding:10px
    font-size: 1.5rem
   }

    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
     font-size: 1.2rem;
  .icons_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .experience_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .right {
    margin-top: 1em;
    flex-wrap: wrap;
   }img{
      max-height:400px;    }
     h3 {
  font-size: 1.5rem;
  padding: 2rem 0 1rem 0;
  color: ${(props) =>
    props.theme.text
  };
    .aboutSection__left {
    flex: 4;
  }
  .aboutSection__right {
    flex: 3;
  }
  

}
  @media only screen and (max-width: 768px) {
  padding: 120px 0;
  font-size: 16px;
  line-height: 1.3em;
      .right {
    flex-wrap: wrap;
   }
     img{
      max-height:390px;    }
  }
  .icons_box{
    display:flex;
    flex-direction: row;
    justify-content: space-around
    gap: 1rem;
    padding:1rem 
  }
  .experience_box{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
    .top-section {
      flex-direction: column;
      gap:1rem;
    }
    p {
    padding:10px;
    font-size: 1.5rem
   }
  }
  h3 {
  font-size: 1.8rem;
  padding: 1rem 0 1rem 0;
  color: ${(props) =>
    props.theme.text
  };
   h2{
   font-size: 3rem;
   border-bottom: 1px solid ${(props) => props.theme.text};
  font-family: bold;
  padding: 2rem 0 1rem 0;
  color: ${(props) => props.theme.text};
    }
    .about__subheading {
      font-size: 1.5rem;
    }
    .about__heading {
      font-size: 2rem;
    }
    .about__info__heading {
      font-size: 3rem;
      text-align:center;
    }
    .about__info__item i{
   font-size: 3.5rem;
  }
    .aboutSection__left {
    flex: 4;
  }
  .aboutSection__right {
    flex: 3;
  }
  .skills_article{
    justify-content:center;
    align-items: center;
   display: flex;
   flex-flow: wrap;
   border: solid 2px ${(props) =>
    props.theme.secondary
  };
  margin-top:1em;
  padding: 1rem;
  width:90px;
  }
}
  @media only screen and (max-width: 450px) {
    padding: 120px 0;
   p {
    font-size: 1.2rem
   }
   .container{
    width: 100%
   }
  .about__info__items {
    margin-top: 30px;
    background-color: none;
    border: none;
    padding: none;
  }
  .about__info__heading {
      font-size: 2.5rem,;
       text-align:center;
    }
     .about__info__item i{
   font-size: 3.5rem;
  }
    .icons_box{
    display:flex;
    flex-direction: row;
    justify-content: space-around
    gap: 1rem;
    padding:1rem 
    box-sizing: border-box;
  }
    h3 {
  font-size: 2rem;
  font-family: bold;
  padding: 2rem 0 1rem 0;
  color: ${(props) => props.theme.text};
    }
    h2{
   font-size: 2.5rem;
  font-family: bold;
  padding: 2rem 0 1rem 0;
  color: ${(props) => props.theme.text};
    }
    .skills_article{
  justify-content:center;
  align-items: center;
  display: flex;
  flex-flow: wrap;
  border: solid 2px ${(props) =>
  props.theme.secondary
  };
  margin-top:1em;
  padding: 1rem;
  width:65px;
  }
  p{
    padding:10px;
    font-size: 1.5rem;
    margin: auto;
  }
  .experience_box{
    display: block;
    margin: auto;

  }
  }`;

export default function About(props) {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Víctor Pérez</span>
              </p>
              <h2 className="about__heading">A Junior Full Stack Developer</h2>
              <div className="about__info">
                <p>
                  My name is Víctor and after the becoming of the covid-19 pandemy I decided to change my professional career. I've worked in different jobs, but I couldn't find that one which would fit in with my vital objectives until I found the wonderful world of programming.  Digital projects and programming have changed my perspective of life, so I am looking for new profesional opportunities in the Web Development universe.
                </p>
              </div>
              {/*  <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <div className="experience_box">
                <p>- Since june of 2022 i'm coding with Bilbomática and The WhiteTeam developing this app <a href="https://www.geo.euskadi.eus/geobisorea" rel='noreferrer' target='_blank'> ( -- Visor Geoeuskadi --)</a>. It is made with Javascript and some GIS libraries such as Esri && ArcGis. My task are fixing and optimizing the code and developing new features. </p>
                <p>- On the IT world, my first job was coding REACT && PHP at <a href="http://jamenet.eus/" rel='noreferrer' target='_blank'>Jamenet Sollutions</a> for three monts. There I worked using the Scrum methodology and I've learned JIRA.</p>
                <p>- Beside that, I've worked on many different jobs, such as a Journalist, as a comercial, as administrative and also as a Lifeguard. Those jobs let me gain so many soft skills like efficient comunication, emotional intelligence and team working. </p>
              </div>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <p>I've worked with so many languages and frameworks, ask me about wich one you are interested</p>
              <h3>Technologies</h3>
              <div className="icons_box">
                <article className='skills_article'>
                  <i class="devicon-html5-plain"></i>
                  <p>HTML</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-react-original"></i>
                  <p>REACT</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-angularjs-plain"></i>
                  <p>ANGULAR</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-css3-plain"></i>
                  <p>CSS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-javascript-plain"></i>
                  <p>JS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-bootstrap-plain"></i>
                  <p>Bootstrap</p>
                </article>    
                <article className='skills_article'>
                  <i class="devicon-nodejs-plain-wordmark"></i>
                  <p>Node JS</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-mongodb-plain-wordmark"></i>
                  <p>Mongo DB</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-mysql-plain-wordmark"></i>
                  <p>MYSQL</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-python-plain"></i>
                  <p>Python</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-django-plain"></i>
                  <p>Django</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-php-plain"></i>
                  <p>PHP</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-symfony-original"></i>
                  <p>Symfony</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-apache-plain"></i>
                  <p>Apache</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-csharp-plain"></i>
                  <p>C#</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-dotnetcore-plain"></i>
                  <p>.NET</p>
                </article>
              </div>
              <h3>Others</h3>
              <div className="icons_box">
                <article className='skills_article'>
                  <i class="devicon-github-original-wordmark"></i>
                  <p>GitHub</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-vscode-plain-wordmark"></i>
                  <p>VS Code</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-visualstudio-plain"></i>
                  <p>Visual Studio</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-phpstorm-plain"></i>
                  <p>PHP-Storm</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-jira-plain"></i>
                  <p>JIRA</p>
                </article>
                <article className='skills_article'>
                  <i class="devicon-linux-plain"></i>
                  <p>Linux</p>
                </article>
              </div>
              <h3 >My favs: </h3>
              <div className="fav_box">
              <article className='skills_article'>
                <i class="devicon-javascript-plain"></i>
                <p>JS</p>
              </article>
              <article className='skills_article'>
                <i class="devicon-python-plain"></i>
                <p>Python</p>
              </article>
              </div>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <p>- I've studied Jornalism at the UPV/EHU and also a Master degree on Multimedia Journalism.</p>
              <p>- JavaScript Full Stack Developer course on <a href="https://www.linkedin.com/school/code4jobsbbkbootcamp/" rel='noreferrer' target='_blank'>BBK Bootcamp.</a></p>
              <p>- Desarrollo de aplicaciones con Angular on <a href="https://www.linkedin.com/company/ipartek/" rel='noreferrer' target='_blank'> Ipartek.</a></p>
              <p>-  Developing C# and .NET course on <a href='https://www.linkedin.com/search/results/all/?keywords=C2B%20-%20Campus%20To%20Business&sid=zVd' rel='noreferrer' target='_blank'>C2B - Camopus to buisness</a>.</p>
              <p>- Also learning Máster de Programación Avanzada en Python para Big Data, Hacking y Machine Learning with  <a href='https://www.linkedin.com/school/eip-international-business-school/' rel='noreferrer' target='_blank'>EIP International Business School</a>.</p>
            </div>
          </div>
          <Map />
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

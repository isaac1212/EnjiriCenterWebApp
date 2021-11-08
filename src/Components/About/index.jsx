import styled from 'styled-components';
import react, {useEffect, useState} from 'react';
import peter from '../../assets/images/peterImg.jpg';
import {AboutButton} from '../../Components/AboutButton';
import {AboutRightContainer,AboutButtonContainer, AboutLeftContainer, AboutCardBackgroud,AboutCard,CardImg, AboutSub,AboutMe,AboutDescription} from './about.style';
const AboutContainer = styled.div`
  background-color:#5d3513; 
  width:100%;
  height:100vh;
  // position:absolute;
  // top:100%;
  display:flex;
  z-index:4;
  align-items:center;

  @media screen and (max-width:481px){
      flex-direction:column;
      text-align:center;
     margin-top:50px;
  }

  @media screen and (max-width:320px){
    height:100vh;
  }
`;

const About = () =>{

  useEffect( () => {
    AboutData("");
    
}, [])

  const [about, setAbout] = useState([]);



  async function AboutData(){
    const aboutus = "about-us"
  try{
   const res = await fetch(`http://localhost:1337/pages?slug=${aboutus}`);
   const data =  res.json();

    data.then((data) =>{

      console.log(data);
       setAbout(data);

    })
  }catch(err){
    console.error(err);
  }
  }

  console.log(about.profile_pic?.url);

    return (
    <div id="about">
        <AboutContainer>
            <AboutLeftContainer>
                <AboutCardBackgroud/>
                <AboutCard>
      {/* <CardImg src="https://images.unsplash.com/photo-1633157190991-efa146b650f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" /> */}
                <CardImg src={"http://localhost:1337" + about.profile_pic?.url} /> 
                </AboutCard>
            </AboutLeftContainer>
            <AboutRightContainer>
              <AboutMe>
                  About Me
              </AboutMe>
              <AboutSub>
                 {about.About}
              </AboutSub>
              <AboutDescription>
              {about.description}
              </AboutDescription>
             <AboutButtonContainer>
               <AboutButton>Read More</AboutButton>
             </AboutButtonContainer>
            </AboutRightContainer>
        </AboutContainer>
       
    </div>
    );
}


export default About;
import React from 'react';
import styled from 'styled-components';
import facebook from  '../../assets/images/icons/Facebook.png';
import instagram from '../../assets/images/icons/Instagram.png';
import twitter from   '../../assets/images/icons/Twitter.png';
import whatsapp from  '../../assets/images/icons/WhatsApp.png';

import { FooterleftConater, FooterMiddleConater, FooterMiddleContainer, FooterRightConater, FooterRightServices } from './footer.style';

const FooterContainer = styled.div`
background-color:#222222;
height:100vh;
padding: 60px 100px;
display:flex;
justify-content:space-between;

@media screen and (max-width:481px){
  flex-direction:column;
  padding: 10px 30px;
} 
`;

const Footer = ()=>{

    return (
        <div id="footer">
            <FooterContainer>
            <FooterleftConater>
         <h1>Enjiri Center Ministries</h1>

         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. 
         </p>

         <div>
            <a href="http://"> <img src={instagram} alt="Instagram" srcset="" /></a>
            <a href="http://"> <img src={facebook} alt="Facebook" srcset="" /></a>
            <a href="http://"><img src={twitter} alt="Twitter" srcset="" /></a>
            <a href="http://"><img src={whatsapp} alt="whatsap" srcset="" /></a> 
         </div>

            </FooterleftConater>
            <FooterMiddleContainer>
              <div>
              <h1>About</h1>
                
                <ul>
                    <li><a href="http://">History</a></li>
                    <li><a href="http://">Our Team</a></li>
                </ul>
              </div>
               
            </FooterMiddleContainer>
                <FooterRightConater>

                <div>
              <h1>Services</h1>
                
                <ul>
                    <li><a href="http://">Prayer alters</a></li>
                    <li><a href="http://">missions</a></li>
                    <li><a href="http://">Daily outdoors</a></li>
                </ul>
              </div>
                
                </FooterRightConater>    
               <FooterRightServices>
               <div>
              <h1>Others</h1>
                
                <ul>
                    <li><a href="http://">Contact us</a></li>
                    <li><a href="http://">Help</a></li>
                    <li><a href="http://">Privacy</a></li>
                </ul>
              </div>
                
                </FooterRightServices>  
            </FooterContainer>
        </div>
    )
}


export default Footer;
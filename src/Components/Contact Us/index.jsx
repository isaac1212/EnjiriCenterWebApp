import React from 'react';
import phone from '../../assets/images/icons/phone-call.png';
import address from '../../assets/images/icons/address.png';
import email from '../../assets/images/icons/email.png';
import { Contactbackground, ContactButtonContainer, ContactContainer, ContactDescriptionIcon, ContactForm, ContactFormInput, ContactFormInputLabel, ContactFormMessage, ContactInfo, ContactInfoIcon, ContactInfoItem, ContactInputContainer, ContactLeft, ContactLeftTitle, ContactRight, ContactWrapper } from './contact-us.style';
import { AboutButton } from '../AboutButton';

const ContactUs = () => {

    return (
        <div id="contact-us">
            <ContactContainer>
                <Contactbackground></Contactbackground>
               <ContactWrapper>
                 <ContactLeft> 

                     <ContactLeftTitle >
                         Send us a message to:-
                     </ContactLeftTitle>

                     <ContactInfo >
                         <ContactInfoItem>
                             <ContactInfoIcon src={phone} alt="Icon" />
                             +256 778-675-345
                         </ContactInfoItem>
                         <ContactInfoItem>
                             <ContactInfoIcon src={email} alt="Icon" />
                             nsambai72@gmail.com
                         </ContactInfoItem>
                         <ContactInfoItem>
                             <ContactInfoIcon src={address} alt="Icon" />
                             P . 0 . Box 75847 kampala Uganda kampala Uganda
                         </ContactInfoItem>
                     </ContactInfo>
                 </ContactLeft>
                 <ContactRight> 
                     <ContactDescriptionIcon>
                         For any Queries, Get in touch with us. we will be waiting thanks
                     </ContactDescriptionIcon> 
                     <ContactForm>
                         <ContactInputContainer>
                                     <ContactFormInput type="text" placeholder="Enter your name" name="user_name"/>
                         </ContactInputContainer>
                
                         <ContactInputContainer>
                         <ContactFormInput type="text" placeholder="Enter your Subject" name="user_subject" />
                         </ContactInputContainer>
                       
                      <ContactInputContainer>
                         <ContactFormInput type="text" placeholder="Enter your Email" name="user_email" />
 
                      </ContactInputContainer>
                      
                    

                        <ContactFormMessage  />

                        
                        <ContactButtonContainer>
                        <AboutButton missons>Send Mail</AboutButton>
                        </ContactButtonContainer>
                        

                     </ContactForm>
                 </ContactRight>
               </ContactWrapper>
            </ContactContainer>
           
        </div>
    )
}


export default ContactUs;
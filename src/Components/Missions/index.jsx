import React from 'react';
import { Carddescription, CardImage, CardTitle, MissonsContainer} from './missions.style';
import mission1 from '../../assets/images/missions/mission1.jpg';
import { AboutButton } from '../AboutButton';
const Missons = ({post}) => {
    //   console.log("my PRO", post.featured_image.url);
    return (
        <div id="mission">
           <MissonsContainer>
           <CardTitle>{post.title}</CardTitle>
           <CardImage src={"http://localhost:1337" + post.featured_image.url}/>
           <Carddescription>
           {post.description} 
           </Carddescription>
           <AboutButton missons small>
               Read More
           </AboutButton>
           </MissonsContainer>
        </div>
    );
}


export default Missons;
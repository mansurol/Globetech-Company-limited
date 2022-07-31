import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Mainpage from '../MainPage/Mainpage';
import Img1 from '../Img/RC-EDF-Jet-Airplane-MINI-L39-50mm-Remote-Control-Aircraft-Toy.jpg_Q90.jpg_.webp'
import Img2 from '../Img/earth-planet-solar-system-outer-space-png-favpng-jfMehRmSueV8ZGeNukWGP8QiB.jpg'
import './CoverPage.css'
import Button from 'react-bootstrap/Button'
const CoverPage = () => {
    return (
        <div className='bgColor3'>
            <Mainpage/>
            <Container>
                <div className='box4 pt-5'>
                <img src={Img1}></img>

                </div>

                <div>
                           
                <div className='row '>
                    <div className='col-sm-6 mt-5 welcomeStyle'>
                    <h1 style={{color:"#28ACE2"}}>Welcome to  <br/> <span style={{color:"#D4F456"}}>Globetech</span></h1>
                    <p style={{color:"#28ACE2",textAlign:'justify'}}>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even
                         slightly believable. If you are going to use a passage of
                          Lorem Ipsum, you need to be sure there isn't anything embarrassing 
                          hidden in the middle of text. All the Lorem Ipsum generators on the
                           Internet tend to repeat predefined chunks as necessary,
                         making this the first true generator on the Internet.</p>   
                         <div className='d-flex pb-5'>
                         <Button variant="warning">Support us</Button>  
                         <Button className='btnSTYLE ' variant="outline-primary">Our Mission</Button>
                         </div>  
                     </div>  
                     <div className='col-sm-6 mt-5 imgStyle d-flex justify-content-end'>
                     <img src={Img2}/>
                  </div>  
                 </div>
                </div>
            </Container>
        </div>
    );
};

export default CoverPage;
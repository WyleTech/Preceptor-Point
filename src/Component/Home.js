import React from "react";
import desktopImage from '../Images/brickwall.jpg';
import { useState, useEffect } from 'react';
import mobileImage from '../Images/brickwall.jpg';
import CardGroup from "react-bootstrap/CardGroup";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Home = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  return (
    <div className="Home" style={{ backgroundImage: `url(${imageUrl})` }}>
       <div className= "home-logo container col-lg-10">
          <img  src="../Images/PP_Favicon.png" style= {{height:200}} class="img-fluid max-width: 100% mx-auto d-block" alt="Responsive image"></img>
 
              {/* Card List ractice */}
        <div className="Cards-Home">
        <div class="col justify-content-md-center ">
         <CardGroup>
            <Card className="bg-transparent text-white ">
              <Card.Img className="cards-image"  variant="round mx-auto d-block"  alt="Responsive image" src="../Images/face1.jpg " />
              <Card.Body >
                <Card.Title className="Card-Title text-center font-weight-bold ">
                  Find a Preceptor{" "}
                </Card.Title>
                <Card.Text>
                  <a href="/student">
                    <Button className="Button " size="lg" block variant="">
                      Student Inquiry
                    </Button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-transparent text-white">
              <Card.Img className="cards-image"  variant="round mx-auto d-block"  alt="Responsive image"  src="../Images/stethoscope.jpg" />
              <Card.Body>
                <Card.Title className="Card-Title text-center font-weight-bold">
                  Become a Preceptor {" "}
                </Card.Title>
                <Card.Text>
                  <a href="/preceptor">
                    <Button className="Button" size="lg" block variant="">
                    Preceptor Inquiry
                    </Button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
            </CardGroup>
        </div>
        </div>
        <h1 className="Call-Today display-5 responsive-font-sizes text-center">Call Today! (480) 580-3457 </h1>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default Home;
 
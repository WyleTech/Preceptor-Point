import React from "react";
import desktopImage from '../Images/brickwall.jpg';
import { useState, useEffect } from 'react';
import mobileImage from '../Images/brickwall-horizontal.jpg';
import CardGroup from "react-bootstrap/CardGroup";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
  return (
    
    // <div className="Home" id='home' style={{ backgroundImage: `url(${imageUrl})` }}>
       <div className= "home-logo container col-lg-10 mb-5">
          <img  src="../Images/PP_Logo_bizcard_wht.svg" style= {{height:400}} class="img-fluid max-width: 100% mx-auto d-block" alt="Responsive image"></img>
 
              {/* Card List ractice */}
              <div className='container'>
        <div className="Cards-Home">
        <div className="col justify-content-md-center ">
         <CardGroup>
            <Card className="bg-transparent text-white ">
              <Card.Img className="cards-image"  variant="round mx-auto d-block"  alt="Responsive image" src="../Images/face1.jpg " />
              <Card.Body >
                <Card.Title className="Card-Title text-center font-weight-bold ">
                  Find a Preceptor{" "}
                </Card.Title>
                <Card.Text>
                  <Link to="/student">
                    <Button className="Button" style={{fontSize: 20}} size="lg" block variant="">
                      Student Inquiry
                    </Button>
                  </Link>
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
                  <Link to="/preceptor">
                    <Button className="Button" style={{fontSize: 20}} size="lg" block variant="">
                    Preceptor Inquiry
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
            </CardGroup>
                 <Link to="/about">
               <Button className="Button "  style={{fontSize: 20}} size="lg" block variant="" >How it works </Button>
      </Link>
              </div>
              </div>
        </div>
        
        <h1 className="Call-Today display-5 responsive-font-sizes text-center">Call Today! (480) 669-8366 </h1>
      </div>
     
    // </div>
    
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
 
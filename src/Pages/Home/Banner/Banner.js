import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/60Xp1sH/bookdisplaysmall.jpg"
            alt="First slide"
            height={"400px"}
          />
          <Carousel.Caption>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <div>
                <h2 className="pb-3">LOTS OF BOOKS 100% FREE</h2>
                <h5>
                  Welcome to your friendly neighborhood library. We have more
                  than 5000 Ebooks to be discovered
                </h5>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/2FGZHTM/bookstackssmall.jpg"
            alt="Second slide"
            height={"400px"}
          />

          <Carousel.Caption>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <div>
                <h2 className="pb-3">FREE AND DISCOUNTED BEST SELLERS</h2>
                <h5>
                  Join 150,000+ fellow readers. Get free and discounted
                  bestsellers straight to your inbox with the BookCase eBook
                  deals newsletter
                </h5>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/60Xp1sH/bookdisplaysmall.jpg"
            alt="Third slide"
            height={"400px"}
          />

          <Carousel.Caption>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <div>
                <h2 className="pb-3">THE ULTIMATE GUIDE TO FREE EBOOKS</h2>
                <h5>
                  Not sure what to read next? Explore our catalog of public
                  domain books with our editors. Some real gems are hidden in
                  our library
                </h5>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

import React from "react";
import "./Catagories.css";
import { Container } from "react-bootstrap";

const Catagories = () => {
  return (
    <Container className="spaces">
      <div>
        <h2 className="title-text">Browse Genres</h2>
      </div>
      <div>
        <div className="row row-cols-2 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-xs-1 g-5 mt-2">
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg one">
              {" "}
              <img
                src="https://i.ibb.co/Z8PG6jX/genre-1.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg two">
              {" "}
              <img
                src="https://i.ibb.co/rw4d6S4/genre-2.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg three">
              {" "}
              <img
                src="https://i.ibb.co/Ln1W77y/genre-3.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg four">
              {" "}
              <img
                src="https://i.ibb.co/ZmcMnyL/genre-4.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg five">
              {" "}
              <img
                src="https://i.ibb.co/7WkmNPF/genre-5.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg six">
              {" "}
              <img
                src="https://i.ibb.co/swN3wS0/genre-6.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg seven">
              {" "}
              <img
                src="https://i.ibb.co/DCcy4xV/genre-7.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg eight">
              {" "}
              <img
                src="https://i.ibb.co/tXZPzjs/genre-8.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg nine">
              {" "}
              <img
                src="https://i.ibb.co/vPJ79Pv/genre-9.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg ten">
              {" "}
              <img
                src="https://i.ibb.co/pd14Pd0/genre-10.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg eleven">
              {" "}
              <img
                src="https://i.ibb.co/JzjZPHz/genre-11.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-center shadow-lg twelve">
              {" "}
              <img
                src="https://i.ibb.co/h714psv/genre-12.png"
                width={"245px"}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Catagories;

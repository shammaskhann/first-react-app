import { useState } from "react";
import React from 'react';

export default function Carousel() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <>
      <style>
        {`
          .carousel-container {
            width: 80%;
            height: 60vh;
            margin: 0 auto;
          }
          .carousel-inner img {
            height: 60vh;
            object-fit: cover;
          }
          @media (max-width: 990px) {
            .carousel-container {
              width: 100%;
              height: 40vh;
            }
            .carousel-inner img {
              height: 40vh;
            }
          }
          .btncontainer {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          .btn-outline-light {
          border: 2px solid #f8f9fa;
            margin-left: 5px;
            color: red;
            font-weight: bold;
          }
        `}
      </style>
      <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="First slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Second slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Third slide"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btncontainer">
        <button type="button" className="btn btn-danger" onClick={onClick}>Subscribe</button>
        <button type="button" className="btn btn-outline-light">{count}</button>
      </div>
    </>
  );
}
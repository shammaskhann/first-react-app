import React from 'react';

export default function Carousel() {
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
        `}
      </style>
      <div className="carousel-container">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
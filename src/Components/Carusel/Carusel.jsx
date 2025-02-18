// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const data = [
//   { id: 1, image: "path-to-steering-wheel.png", title: "Avto uchun rul" },
//   { id: 2, image: "path-to-signal.png", title: "Avtosignalizatsiya" },
//   { id: 3, image: "path-to-battery.png", title: "Akkumulyatorlar" },
//   { id: 4, image: "path-to-tires.png", title: "Shinalar" },
//   { id: 5, image: "path-to-headlight.png", title: "Fara" },
//   { id: 6, image: "path-to-mats.png", title: "Avtomobil gilamcha" },
//   { id: 7, image: "path-to-oil.png", title: "Motor moylari" },
// ];

// const Carusel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="carousel-container">
//       <Slider {...settings}>
//         {data.map((item) => (
//           <div key={item.id} className="carousel-item">
//             <img src={item.image} alt={item.title} className="carousel-image" />
//             <p className="carousel-title">{item.title}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carusel;

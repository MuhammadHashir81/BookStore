import React from 'react';
import books from "../../public/Books";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FreeBook = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const freeBooks = books.filter((book) => book.category === "Free");
  return (
    <div className="max-w-7xl mx-auto py-8 max-md:mt-12">
      <div className='mx-4'>
      <h2 className='font-semibold text-2xl my-2'>Free courses we offer</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit corrupti veniam magnam eius cupiditate expedita alias, dolorem doloribus. Consequuntur amet sed corporis blanditiis harum praesentium fuga autem sapiente, dolores eaque?</p>
      </div>
     
      <Slider {...settings} className='overflow-hidden'>
       {
        freeBooks.map((book)=>(
          <div className='p-4' key={book.id}>
            <div className='bg-white shadow-md hover:scale-105 hover:cursor-pointer transition-transform duration-300 rounded-3xl'>
              <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
              <div className='p-4 '>
           <h3 className='font-semibold text-xl' >{book.title}</h3>
           <p className='text-gray-800'>{book.category}</p>
              </div>
            </div>
          </div>
        ))
       }
        
      </Slider>
    </div>
  );
}

export default FreeBook;


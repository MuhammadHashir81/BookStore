import React from 'react'

const About = () => {
  return (
      //  <section className="bg-gray-100 py-12 h-screen">
      <div className="container mt-32 mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 mt-12 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="book.png" 
              alt="Books"
              className="w-full rounded-lg  mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos saepe id, voluptatibus dicta expedita iste excepturi ullam adipisci eum veniam laborum blanditiis inventore repellendus quidem. Eos nam blanditiis officiis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, veritatis quidem? Dolore officiis maxime expedita repudiandae autem commodi cum, dolorum excepturi totam blanditiis error, laboriosam pariatur hic. Earum, quae temporibus?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis minima velit est enim dolor, officiis expedita hic sit asperiores, iste ut autem voluptatibus dolores quod dolorem aliquid eum. Adipisci?
            </p>
           
          </div>
        </div>
      </div>
    // </section>
  )
}

export default About
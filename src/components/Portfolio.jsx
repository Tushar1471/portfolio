import React from "react";
import image5 from '../assets/portfolio/Web5.png';
import image3 from "../assets/portfolio/Web3.png";
import image2 from "../assets/portfolio/Web2.png";
import image4 from "../assets/portfolio/Web4.png";
import image1 from '../assets/portfolio/Web1.png'
import image6 from '../assets/portfolio/Web6.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title:'Royate Restuarant',
      src: 'https://tushar1471.github.io/royate_restuarant/',
      img:image1,
      code:'https://github.com/Tushar1471/royate_restuarant',
     
    },
    {
      id: 2,
      title:'Shoezy-Craft Your own FootPrints',
      src: 'https://tushar1471.github.io/shoezy/',
      img:image2,
      code:'https://github.com/Tushar1471/shoezy'
    },
    {
      id: 3,
      title:'TIC TAC TOE',
      src: 'https://tushar1471.github.io/tictactoe/',
      img:image3,
      code:'https://github.com/Tushar1471/tictactoe',
    },
    {
      id: 4,
      title:'UPSKILLED(User Interface)',
      src: ' https://tushar1471.github.io/userinterface/',
      img: image4,
      code:'https://github.com/Tushar1471/userinterface',
    },
    {
      id: 5,
      title:'Spotify Clone',
      src: 'https://tushar1471.github.io/spotify_Clone/',
      img:image5,
      code:'https://github.com/Tushar1471/spotify_Clone',
    },
    {
      id:6,
      title:'Amazon Clone',
      src:'https://tushar1471.github.io/amazon_clone/',
      img:image6,
      code:'https://github.com/Tushar1471/amazon_clone/'
    }
    
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-1">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
       
          {portfolios.map(({ id, src,img,code,title }) => (
            <div key={id} className="shadow-md shadow-gray-800 rounded-lg duration-200 hover:scale-105">
               <h3 className=" flex justify-center mb-2  font-bold inline border-r-4 border-t-4 border-gray-500  p-1 ">{title}</h3>
              <a href={src} target="_blank" rel="noreferrer">
               
              <img
                src={img}
                alt=""
                className="rounded-md duration-300 "
              />
              </a>
              {/* <img
                src={img}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              /> */}
              <div className="flex items-center justify-center  border-l-4 border-b-4 border-gray-500 ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={src} target='_blank' rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

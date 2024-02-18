import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h2 className="w-28 object-contain">Artisum</h2>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/sanikaap", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='text-blue-900 '>OpenAI GPT-4</span>
      </h1>
      
    </header>
  );
};

export default Hero;

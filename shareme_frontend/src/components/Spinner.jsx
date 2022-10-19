import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <MutatingDots
        color='#00bfff'
        height={100}
        width={100}
        secondaryColor='#00bfff'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        className='m-5'
      />
      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
};

export default Spinner;

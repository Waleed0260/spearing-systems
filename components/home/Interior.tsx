import React from "react";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
export type FormData = {
  // name: string;
  email: string;
  // message: string;
};
const Interior = () => {
 

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (


    
    <div className="bg-[#0D2137] w-full flex items-center justify-center">
      <div className="w-[80%] flex md:flex-row flex-col  justify-between items-center m-[30px]">
        <div className="md:w-[40%]">
          <h1 className="heading sm:text-4xl text-2xl font-bold">
            Download The ultimate guide of digital marketing for interior design{" "}
          </h1>
        </div>
        <div>
          <form action="" className="flex items-center mt-3 md:mt-0" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full max-w-lg px-4 py-2 bg-white bg-opacity-75 text-gray-800 rounded-l-md focus:outline-none"
              {...register('email', { required: true })}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF8E2B] text-white font-semibold rounded-r-md hover:bg-orange-600"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Interior;

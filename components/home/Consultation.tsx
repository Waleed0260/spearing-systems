// import React from "react";
// import chart from "../../public/images/Chart.png";
// import Image from "next/image";
// import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Consultation = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
  
      if (response.status === 200) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message");
    }
  };
  

  return (
    <>
    <div className={`w-full flex items-center justify-center bg text-white`}>
      <div className="w-[80%] flex flex-col items-center my-4">
        <p className="font-bold md:text-4xl text-2xl heading">
          READY TO GROW YOUR BUSINESS
        </p>
        <div className="flex md:flex-row flex-col mt-4 justify-between gap-4">
          <div className="md:w-[50%] flex flex-col mt-9 text-white">
            <div className="flex flex-row gap-4">
              <p className="h-[40px] w-[50px] text-center flex  items-center justify-center rounded-[100px] bg-[#FF8E2B] gap-3">
                <FaArrowLeft />
              </p>
              <div>
                <p className="heading text-2xl">
                  Ready to Dominate Your Market?
                </p>
                <p className="text">
                  Jumpstart your digital marketing success in 3 easy steps:
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-[20px]">
              <p className=" text-center flex  items-center justify-center rounded-full h-[40px] w-[90px] bg-[#FF8E2B] gap-3">
                1
              </p>
              <div>
                <p className="heading text-2xl">Contact Us</p>
                <p className="text">
                  Fill out our brief contact form, and we’ll be in touch with
                  you soon to learn more about your business.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 mt-4">
              <p className="text-center flex  items-center justify-center rounded-full h-[40px] w-[100px] bg-[#FF8E2B] gap-3">
                2
              </p>
              <div>
                <p className="heading text-2xl">Launched Target Campaigns</p>
                <p className="text">
                  Our digital marketing experts will work closely with you to
                  implement data-driven strategies that drive business growth.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 mt-4">
              <p className="text-center flex  items-center justify-center rounded-full h-[40px] w-[90px] bg-[#FF8E2B] gap-3">
                3
              </p>
              <div>
                <p className="heading text-2xl">Achieve Lasting Growth </p>
                <p className="text">
                  Solidify your digital presence, expand your brand reach and
                  see outstanding results month-over-month.
                </p>
              </div>
            </div>
            <hr className="mt-5" />
          </div>

          <div className=" flex flex-col md:w-[65%]">
            <p className="font-bold text-xl mid-heading">
              Get a Free consultation
            </p>
            <form
              className="flex flex-col p-5 bg-[#e8e8e8] rounded-md text-black"
              onSubmit={handleSubmit(onSubmit)} // Correctly use handleSubmit for form validation
            >
              <label className="mt-4" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name" // Ensure input ID matches the htmlFor in label
                placeholder="Name"
                className="p-4 bg-white border-[1px] border-[#F5F5F5] rounded-[10px]"
                {...register("name")}
                />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <label className="mt-4" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email" // Ensure input ID matches the htmlFor in label
                placeholder="Enter Email"
                className="p-4 bg-white border-[1px] border-[#F5F5F5] rounded-[10px]"
                {...register("email")}
                />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <label className="mt-4" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject" // Ensure input ID matches the htmlFor in label
                placeholder="Enter Subject"
                className="p-4 bg-white border-[1px] border-[#F5F5F5] rounded-[10px]"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}

              <label className="mt-4" htmlFor="message">
                Message
              </label>
              <textarea
                id="message" // Ensure input ID matches the htmlFor in label
                placeholder="Enter Message"
                className="p-4 bg-white border-[1px] border-[#F5F5F5] rounded-[10px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}

              <button
                type="submit"
                className="bg-white p-3 text-black mt-4 hover:bg-[#FF8E2B] transition-all hover:text-white rounded-[100px]"
                >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
                </>
  );
};

export default Consultation;

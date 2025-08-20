import React from 'react';
import { useForm } from "react-hook-form";
import { Consultation } from '../HomePage/_components/Consultation';
export const Contact = () => {

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm();
  
    const onSubmit = async (data) => {
      try { 
        
        reset();
      } catch (error) {
        console.error(error);
        alert("Xatolik: ma’lumot yuborilmadi");
      }
    };

  return <section>
 <div className="container">



    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* Chap tarafdagi matn */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Let’s Talk</h1>
        <p className="text-gray-600 mb-6">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-700">beebs@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Socials</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* O'ng tarafdagi forma */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
       <input
  type="text"
  placeholder="Name"
  {...register("name", { required: true })}
  className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
/>
{errors.name && <span className="text-red-500">Name is required</span>}

<input
  type="email"
  placeholder="Email"
  {...register("email", { required: true })}
  className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
/>
{errors.email && <span className="text-red-500">Email is required</span>}

<select
  {...register("service", { required: true })}
  className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
>
  <option value="">Select project type</option>
  <option value="CPSS">CPSS</option>
  <option value="Practical Understanding">Practical Understanding</option>
  <option value="CIPA">CIPA</option>
</select>
{errors.service && (
  <span className="text-red-500">Service is required</span>
)}

<select
  {...register("budget", { required: true })}
  className="border border-[#009688] p-3 rounded-md focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
>
  <option value="">Select project budget</option>
  <option value="1000-3000">$1000 - $3000</option>
  <option value="3000-5000">$3000 - $5000</option>
  <option value="5000+">$5000+</option>
</select>
{errors.budget && (
  <span className="text-red-500">Budget is required</span>
)}

<textarea
  placeholder="Message"
  {...register("message", { required: true })}
  className="border border-[#009688] p-3 rounded-md h-32 focus:border-[#009688] focus:ring-1 focus:ring-[#009688] outline-none"
/>
{errors.message && (
  <span className="text-red-500">Message is required</span>
)}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#009688] text-white py-3 rounded-md hover:bg-emerald-700 transition"
        >
          {isSubmitting ? "Yuborilmoqda..." : "Submit"}
        </button>
      </form>
    </div>
   

 </div>
 <Consultation/>
  </section>;
};

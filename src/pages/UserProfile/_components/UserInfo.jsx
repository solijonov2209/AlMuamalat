import React from 'react';
import { useForm } from 'react-hook-form';

export const UserInfo = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="mt-10 bg-white shadow-2xl rounded-2xl p-8">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg" // Rasm manzili o'rnatilgan
            alt="User Avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h2 className="ml-4 text-2xl font-semibold">Alexa Rawles</h2>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg shadow">
          Save
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            {...register('full_name')}
            type="text"
            placeholder="Your First Name"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            {...register('phone_number')}
            type="text"
            placeholder=" Enter your phone number"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Address</label>
          <input
            {...register('address')}
            type="text"
            placeholder="Enter Your Address"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Birthday</label>
          <input
            {...register('gender')}
            type="text"
            placeholder="Enter Your Birthday"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            {...register('images')}
            type="file"
            placeholder=" Enter your image"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );
};

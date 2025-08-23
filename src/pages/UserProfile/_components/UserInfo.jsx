import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import { request } from '../../../services/Request';

export const UserInfo = () => {
  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const res = await request.get('/users/me');
      return res?.data?.data;
    },
  });

  const { register, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (data) {
      reset({
        full_name: data?.full_name,
        phone_number: data?.phone_number,
        address: data?.address,
        gender: data?.gender,
      });
    }
  }, [data, reset]);

  const { mutate, isLoading } = useMutation({
    mutationFn: async (submitData) => {
      return await request.put(`/users/${data?.user_id}`, submitData);
    },
  });

  const onSubmit = (submitData) => {
    mutate(submitData);
    console.log("Yuborilayotgan ma'lumotlar:", submitData);
  };

  return (
    <div className="mt-10 bg-white shadow-2xl rounded-2xl p-8">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <img
            src={
              data?.image_src ||
              'https://randomuser.me/api/portraits/men/44.jpg'
            }
            alt={t('userInfo.avatarAlt')}
            className="w-16 h-16 rounded-full object-cover"
          />
          <h2 className="ml-4 text-2xl font-semibold">{data?.full_name}</h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-700 mb-2">
            {t('userInfo.fullName')}
          </label>
          <input
            {...register('full_name')}
            type="text"
            placeholder={t('userInfo.fullNamePlaceholder')}
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            {t('userInfo.phoneNumber')}
          </label>
          <input
            {...register('phone_number')}
            type="text"
            placeholder={t('userInfo.phonePlaceholder')}
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            {t('userInfo.address')}
          </label>
          <input
            {...register('address')}
            type="text"
            placeholder={t('userInfo.addressPlaceholder')}
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            {t('userInfo.gender')}
          </label>
          <input
            {...register('gender')}
            type="text"
            placeholder={t('userInfo.genderPlaceholder')}
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            {t('userInfo.password')}
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder={t('userInfo.passwordPlaceholder')}
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-[100px] h-[40px] mt-[auto] ml-[auto] bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg shadow"
        >
          {isLoading ? t('userInfo.saving') : t('userInfo.save')}
        </button>
      </form>
    </div>
  );
};

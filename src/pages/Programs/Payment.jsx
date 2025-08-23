import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import tick from '../../assets/Vector.png';
import greenImg from '../../assets/yashilnuqta.png';
import { request } from '../../services/Request';

export const Payment = ({ id, price }) => {
  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: 'userData',
    queryFn: async () => {
      const data = await request.get('users/me');
      return data?.data?.data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: 'coursePost',
    mutationFn: async (submitData) => {
      await request.post('/courses/user', submitData).then((res) => {
        request
          .get(`/courses/purchase/${res?.data?.data?.id}`)
          .then((response) => {
            const url = response?.data?.data?.data;
            if (url) {
              const aTag = document.createElement('a');
              aTag.href = url;
              aTag.target = '_blank';
              aTag.rel = 'noopener noreferrer';
              document.body.appendChild(aTag);
              aTag.click();
            }
          });
      });
    },
  });

  const onSubmit = () => {
    if (!data?.user_id) {
      toast.error(t('payment.loginError'));
      return;
    }

    const submitData = {
      course_id: id,
      user_id: data.user_id,
    };
    mutate(submitData);
  };

  return (
    <section>
      {/* --- START PAYMENT SECTION --- */}
      <div className="flex flex-col md:flex-row p-4 md:p-6 xl:p-8 gap-0 md:gap-0">
        {/* Left Section - Our Services */}
        <div className="w-full md:w-1/2 bg-teal-600 text-white p-6 xl:p-22 rounded-lg shadow-lg flex flex-col gap-10 md:gap-15">
          <h2 className="font-bold text-[36px] mb-4">
            {t('paymentServices.title')}
          </h2>

          <div className="space-y-6">
            <div>
              <img src={tick} alt="icon" className="inline-block" />
              <span className="ml-2 font-semibold text-[20px]">
                {t('paymentServices.item1.title')}
              </span>
              <div className="pl-6 mt-2 ml-2">
                <span className="font-medium text-[14px]">
                  {t('paymentServices.item1.desc')}
                </span>
              </div>
            </div>

            <div>
              <img src={tick} alt="icon" className="inline-block" />
              <span className="ml-2 font-semibold text-[20px]">
                {t('paymentServices.item2.title')}
              </span>
              <div className="pl-6 mt-2 ml-2">
                <span className="font-medium text-[14px]">
                  {t('paymentServices.item2.desc')}
                </span>
              </div>
            </div>

            <div>
              <img src={tick} alt="icon" className="inline-block" />
              <span className="ml-2 font-semibold text-[20px]">
                {t('paymentServices.item3.title')}
              </span>
              <div className="pl-6 mt-2 ml-2">
                <span className="font-medium text-[14px]">
                  {t('paymentServices.item3.desc')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Payment */}
        <div className="w-full md:w-1/2 bg-white p-8 xl:p-20 mt-6 md:mt-0 rounded-lg shadow-lg flex flex-col gap-10">
          <h2 className="font-bold text-[36px] mb-4">{t('payment.title')}</h2>
          <div className="space-y-4">
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item1')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item2')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item3')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item4')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item5')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item6')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span>{t('payment.item7')}</span>
            </div>
            <div>
              <img src={greenImg} alt="icon" className="inline-block mr-2" />
              <span className="text-red-700">
                {t('payment.coursePrice')}{' '}
                {price ? price + " so'm" : t('payment.notAvailable')}
              </span>
            </div>
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            disabled={!price}
            className={`mt-6 w-[222px] py-4 cursor-pointer bg-[#009688] text-white rounded hover:bg-teal-700 transition duration-300 font-bold text-[18px] ${
              !price ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {t('payment.button')}
          </button>
        </div>
      </div>
      {/* --- FINISH PAYMENT SECTION --- */}
    </section>
  );
};

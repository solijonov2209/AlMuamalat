import { toast } from 'react-toastify';
import { request } from '../services/Request';
import { useNavigate } from 'react-router-dom';

function useRegister() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await request.post('/auth/signup', data);

      const accessToken = response?.data?.data?.tokens?.accessToken;

      if (response?.data?.success) {
        toast.success(response.data.message || 'Successfully registered!');
        navigate('/');
      }

      if (accessToken) {
        localStorage.setItem('testUserToken', accessToken);
      } else {
        console.warn('Access token not found in the response');
      }
    } catch (error) {
      console.error('Register failed', error);
      toast.error(error?.response?.data?.message || 'Registration failed!');
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await request.post('/auth/signin', data);

      if (response?.data?.success) {
        toast.success(response.data.message || 'Login successful');
        navigate('/');
      }

      const accessToken = response?.data?.data?.tokens?.accessToken;

      if (accessToken) {
        localStorage.setItem('testUserToken', accessToken);
      } else {
        console.warn('Access token not found in the response');
      }
    } catch (error) {
      console.log('Login failed', error);
      toast.error(error?.response?.data?.message || 'Login failed!');
    }
  };

  return { handleRegister, handleLogin };
}

export default useRegister;

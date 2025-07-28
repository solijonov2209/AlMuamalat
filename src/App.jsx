// App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
  const location = useLocation();
  const hideRoutes = ['/signin', '/register'];
  const shouldShow = !hideRoutes.includes(location.pathname);

  return (
    <>
      {shouldShow && <Header />}
      <main>
        <AppRoutes />
      </main>
      {shouldShow && <Footer />}
    </>
  );
};

export default App;

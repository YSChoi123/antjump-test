import { Outlet } from 'react-router-dom';

import MainHeader from '../components/common/headers/MainHeader';
import MainNavbar from '../components/common/navbars/MainNavbar';
function MainLayout() {
  return (
    <>
      <MainHeader />
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default MainLayout;

import { Routes, Route } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import MainPage from '../../pages/MainPage';
import ProjectlistPage from '../../pages/ProjectlistPage';


function RootRouter() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage/>}/>
            <Route path='projects' element={<ProjectlistPage/>}/>
        </Route>
    </Routes>
  );
}

export default RootRouter;

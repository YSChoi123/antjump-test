import { Routes, Route } from 'react-router-dom';

import ProjectLayout from '../../layouts/ProjectLayout';
import BacklogPage from '../../pages/BacklogPage';

function ProjectRoute() {
  return (
    <Routes>
        <Route path="/" element={<ProjectLayout />}>
            <Route index element={<BacklogPage />}/>
            <Route path="backlog" element={<BacklogPage />}/>
        </Route>
    </Routes>

  );
}

export default ProjectRoute;

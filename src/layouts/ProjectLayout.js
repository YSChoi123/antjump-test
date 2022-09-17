import { Outlet } from 'react-router-dom';

import ProjectNavbar from '../components/common/navbars/ProjectNavbar';
import ProjectHeader from '../components/common/headers/ProjectHeader';

function ProjectLayout() {
  return (
    <>
      <ProjectHeader />
      <ProjectNavbar />
      <Outlet />
    </>
  );
}

export default ProjectLayout;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRoute from './components/routes/MainRoute';
import ProjectRoute from './components/routes/ProjectRoute';
import RootRouter from './components/routes/RootRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RootRouter/>}/>
        <Route path="/main/*" element={<MainRoute/>}/>
        <Route path="/project/*" element={<ProjectRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

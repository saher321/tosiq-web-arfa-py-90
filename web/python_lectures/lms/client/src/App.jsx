import { Route, Routes } from 'react-router';
import DepartmentList from './pages/departments/DepartmentList';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Dashboard />}/>
      <Route path={'/departments'} element={<DepartmentList />}/>
    </Routes>
  );
};

export default App;

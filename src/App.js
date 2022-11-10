import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import UseReducer from './pages/UseReducer';
import UseContext from './pages/UseContext';
import UseMemo from './pages/UseMemo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="use-reducer" element={<UseReducer />} />
        <Route path="use-context" element={<UseContext />} />
        <Route path="use-memo" element={<UseMemo />} />
      </Routes>
    </Layout>
  );
}

export default App;

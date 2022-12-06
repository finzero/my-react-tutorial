import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import UseReducer from './pages/UseReducer';
import UseContext from './pages/UseContext';
import UseMemo from './pages/UseMemo';
import UseCallback from './pages/UseCallback';
import CustomHook from './pages/CustomHook';
import Debounce from './pages/Debounce';

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleRerender = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <Layout>
      {/* <button className="btn btn-sm btn-primary" onClick={toggleRerender}>
        Re-render
      </button> */}
      <Routes>
        <Route path="use-reducer" element={<UseReducer />} />
        <Route path="use-context" element={<UseContext />} />
        <Route path="use-memo" element={<UseMemo />} />
        <Route path="use-callback" element={<UseCallback />} />
        <Route path="custom-hook" element={<CustomHook />} />
        <Route path="debounce" element={<Debounce />} />
      </Routes>
    </Layout>
  );
}

export default App;


import { HashRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/MainPage';
import { ConfigPage } from './pages/config/ConfigPage';
import { Layout } from './pages/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route Component={MainPage} path='/' />
          <Route Component={ConfigPage} path='/cfg' />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

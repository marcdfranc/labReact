import './App.css';
import { Banner } from './components/Banner';
import ErrorBoundary from './components/ErrorBoundary';
import { HouseList } from './components/HouseList';

import { BrowserRouter, Route, Routes } from 'react-router';
import { HouseDetail } from './components/HouseDetail';
import { Houses } from './components/Houses';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>
          <div>Providing Houses all over the world!!</div>
        </Banner>
        <Routes>
          <Route index element={<Houses />} />
          <Route path="house" element={<HouseDetail />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

import { useCallback, useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';

import ErrorBoundary from './components/ErrorBoundary';
import { HouseList } from './components/HouseList';
import navValues from './helpers/navigation/navValues';
import { ComponentPicker } from './components/ComponentPicker';

function App() {
  const navigate = useCallback((navTo) => setNav({ current: navTo, navigate }));

  const [nav, setNav] = useState(navValues.home);

  return (
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>
          <div>Providing Houses all over the world!!</div>
        </Banner>
        <ComponentPicker currentNavLocation={nav.current} />
      </ErrorBoundary>
    </navigationContext.Provider>
  );
}

export default App;

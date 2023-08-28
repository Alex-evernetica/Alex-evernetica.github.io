import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import EnableHookesPage from "./pages/EnableHookesPage/EnableHookesPage";
function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<EnableHookesPage />} />
          </Routes>
      </HashRouter>
  );
}

export default App;

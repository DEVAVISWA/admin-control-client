import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateClients from './pages/CreateClients/CreateClients';
import DeleteClients from './pages/DeleteClients/DeleteClients';
import ShowClient from './pages/ShowClients/ShowClient';
import EditClients from './pages/EditClient/EditClients';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/client/create/:id" element={<CreateClients />} />
        <Route path="/client/edit/:id" element={<EditClients />} />
        <Route path="/client/details/:id" element={<ShowClient />} />
        <Route path="/client/delete/:id" element={<DeleteClients/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;

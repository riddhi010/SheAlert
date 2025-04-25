import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SheAlertLandingPage from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Contacts from './components/contactList';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SheAlertLandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;

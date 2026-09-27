import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InteractivePage from './pages/InteractivePage';
import SchoolPage from './pages/SchoolPage';
import LanguageDetail from './pages/LanguageDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/interactive" element={<InteractivePage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/language/:letter" element={<LanguageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

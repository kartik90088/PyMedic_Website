import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Consultation from './pages/Consultation.jsx';
import Features from './pages/Features.jsx';
import ForPatients from './pages/ForPatients.jsx';
import ForYourTeam from './pages/ForYourTeam.jsx';
import DemoVideo from './pages/DemoVideo.jsx';
import FaqPage from './pages/FaqPage.jsx';
import BookDemo from './pages/BookDemo.jsx';
import Hospitals from './pages/Hospitals.jsx';
import DiagnosticCentre from './pages/DiagnosticCentre.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/for-doctors" element={<Consultation />} />
          <Route path="/features" element={<Features />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/diagnostic-centre" element={<DiagnosticCentre />} />
          <Route path="/for-patients" element={<ForPatients />} />
          <Route path="/for-admin-team" element={<ForYourTeam />} />
          <Route path="/demo-video" element={<DemoVideo />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/book-demo" element={<BookDemo />} />
          {/* Old URLs */}
          <Route path="/consultation" element={<Navigate to="/for-doctors" replace />} />
          <Route path="/patients" element={<Navigate to="/for-patients" replace />} />
          <Route path="/team" element={<Navigate to="/for-admin-team" replace />} />
          <Route path="/for-your-team" element={<Navigate to="/for-admin-team" replace />} />
          <Route path="/contact" element={<Navigate to="/book-demo" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

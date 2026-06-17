import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AdminLayout } from './pages/admin/AdminLayout';
import { DashboardView } from './pages/admin/DashboardView';
import { DoctorsView } from './pages/admin/DoctorsView';
import { AppointmentsView } from './pages/admin/AppointmentsView';
import { ReviewsView } from './pages/admin/ReviewsView';
import { GalleryView } from './pages/admin/GalleryView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardView />} />
          <Route path="appointments" element={<AppointmentsView />} />
          <Route path="doctors" element={<DoctorsView />} />
          <Route path="reviews" element={<ReviewsView />} />
          <Route path="gallery" element={<GalleryView />} />
          <Route path="settings" element={<div className="p-4">Settings Content</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

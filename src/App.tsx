import { BrowserRouter, Route, Routes } from 'react-router'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlanPage } from './pages/PlanPage'
import { TrailDetailPage } from './pages/TrailDetailPage'
import { TrailsPage } from './pages/TrailsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="trails" element={<TrailsPage />} />
          <Route path="trails/:slug" element={<TrailDetailPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


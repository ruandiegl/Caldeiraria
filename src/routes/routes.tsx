import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/SiteLayout';
import Cases from '../pages/Cases';
import Certifications from '../pages/Certifications';
import Company from '../pages/Company';
import EsgPage from '../pages/Company/EsgPage';
import HistoryPage from '../pages/Company/HistoryPage';
import QualityPage from '../pages/Company/QualityPage';
import SocialActionsPage from '../pages/Company/SocialActionsPage';
import StructurePage from '../pages/Company/StructurePage';
import Contact from '../pages/Contact';
import Equipment from '../pages/Equipment';
import Facilities from '../pages/Facilities';
import Home from '../pages/Home';
import People from '../pages/People';
import Products from '../pages/Products';
import Segments from '../pages/Segments';
import { SegmentDetailPage } from '../pages/Segments/SegmentDetailPage';
import ServiceDetail from '../pages/ServiceDetail';
import Services from '../pages/Services';

export function AppRoutes() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Company />} />
        <Route path="/empresa/historia" element={<HistoryPage />} />
        <Route path="/empresa/estrutura" element={<StructurePage />} />
        <Route path="/empresa/qualidade" element={<QualityPage />} />
        <Route path="/empresa/esg" element={<EsgPage />} />
        <Route path="/empresa/acoes-sociais" element={<SocialActionsPage />} />
        <Route path="/empresa/*" element={<Navigate to="/empresa" replace />} />
        <Route path="/segmentos" element={<Segments />} />
        <Route path="/segmentos/:slug" element={<SegmentDetailPage />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/pessoas" element={<People />} />
        <Route path="/pessoas/:topic" element={<People />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/:slug" element={<ServiceDetail />} />
        <Route path="/instalacoes" element={<Facilities />} />
        <Route path="/equipamentos" element={<Equipment />} />
        <Route path="/certificacoes" element={<Certifications />} />
        <Route path="/obras-clientes" element={<Cases />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}

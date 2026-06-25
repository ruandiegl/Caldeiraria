import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/SiteLayout';
import Cases from '../pages/Cases';
import Certifications from '../pages/Certifications';
import Company from '../pages/Company';
import Contact from '../pages/Contact';
import Equipment from '../pages/Equipment';
import Facilities from '../pages/Facilities';
import Home from '../pages/Home';
import People from '../pages/People';
import ServiceDetail from '../pages/ServiceDetail';
import Services from '../pages/Services';

export function AppRoutes() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Company />} />
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

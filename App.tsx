import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HeroPage from './pages/HeroPage';
import OverallAnalysisPage from './pages/OverallAnalysisPage';
import GroupAnalysisPage from './pages/GroupAnalysisPage';
import SectionAnalysisPage from './pages/SectionAnalysisPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/overall" element={<OverallAnalysisPage />} />
          <Route path="/groups" element={<GroupAnalysisPage />} />
          <Route path="/sections/:sectionId" element={<SectionAnalysisPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
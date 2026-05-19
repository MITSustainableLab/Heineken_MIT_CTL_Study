import { useState } from 'react';
import AppShell from './components/layout/AppShell';
import Header from './components/layout/Header';
import Toc from './components/layout/Toc';
import ReportPage, { reportSections } from './pages/ReportPage';
import MethodologyPage, { methodologySections } from './pages/MethodologyPage';
import Phase2ReportPage, { phase2Sections } from './pages/Phase2ReportPage';
import Phase2MethodologyPage, { phase2MethodologySections } from './pages/Phase2MethodologyPage';

export const navGroups = [
  {
    id: 'phase1',
    label: 'Phase 1',
    items: [
      { id: 'report',      label: 'Report' },
      { id: 'methodology', label: 'Methodology' },
    ],
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    items: [
      { id: 'phase2',       label: 'Report' },
      { id: 'phase2method', label: 'Methodology' },
    ],
  },
];

const App = () => {
  const [activePage, setActivePage] = useState('report');

  const sections =
    activePage === 'report'       ? reportSections :
    activePage === 'methodology'  ? methodologySections :
    activePage === 'phase2'       ? phase2Sections :
    phase2MethodologySections;

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-100 text-slate-900">
      <Header groups={navGroups} activePage={activePage} onPageChange={handlePageChange} />
      <AppShell>
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_220px]">
          <div className="grid min-w-0 gap-10">
            {activePage === 'report'       && <ReportPage />}
            {activePage === 'methodology'  && <MethodologyPage />}
            {activePage === 'phase2'       && <Phase2ReportPage />}
            {activePage === 'phase2method' && <Phase2MethodologyPage />}
          </div>
          <Toc sections={sections} />
        </div>
      </AppShell>
    </div>
  );
};

export default App;

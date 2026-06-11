import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects, { ProjectDetail } from './components/Projects';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './App.css';

const PageLayout = ({ children }) => {
  return (
    <div className="App">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

const HomePage = () => (
  <PageLayout>
    <Hero />
    {/* 히어로와 동일 높이 스크롤 영역 — 아래 섹션이 스크롤되며 fixed 히어로 위로 덮임 */}
    <div className="h-screen min-h-[100svh] w-full shrink-0" aria-hidden="true" />
    <About />
  </PageLayout>
);

const AchievementsPage = () => (
  <PageLayout>
    <Timeline />
  </PageLayout>
);

const MembersPage = () => (
  <PageLayout>
    <Team />
  </PageLayout>
);

const ProjectsPage = () => (
  <PageLayout>
    <Projects />
  </PageLayout>
);

const ProjectDetailPage = () => (
  <PageLayout>
    <ProjectDetail />
  </PageLayout>
);

const StudiesPage = () => (
  <PageLayout>
    <About />
  </PageLayout>
);

const AboutOZPage = () => (
  <PageLayout>
    <About />
  </PageLayout>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/2024-2025" element={<HomePage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="/studies" element={<StudiesPage />} />
      <Route path="/about-oz" element={<AboutOZPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;

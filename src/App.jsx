import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import ProjectGallery from './pages/WorkGallery';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<ProjectGallery />} />
        <Route path='/details' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import './index.scss';
import Header from './components/Header';
import MainSection from './modules/Main';
import AboutSection from './modules/About';
import AffilatesSection from './modules/Affilates';
import AdverisersSection from './modules/Adverisers';
import Footer from './components/Footer';
import FaqSection from './modules/Faq';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />
        <MainSection />
        <AboutSection />
        <AffilatesSection />
        <AdverisersSection />
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;

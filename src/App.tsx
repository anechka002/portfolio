import Header from './layout/header/Header';
import Main from './layout/sections/main/Main';
import Skills from './layout/sections/skills/Skills';
import Works from './layout/sections/works/Works';
import Contact from './layout/sections/contacts/Contacts';
import Footer from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import GoTopBtn from './components/goTopBtn/GoTopBtn';

function App() {
  return (
    <div>
      <Particle/>
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      <GoTopBtn/>
    </div>
  );
}

export default App;

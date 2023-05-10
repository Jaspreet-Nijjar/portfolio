import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

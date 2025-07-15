import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GeneralTopics from './sections/GeneralTopics';
import SurvivalGuideEMR from './sections/SurvivalGuideEMR';
import Labs from './sections/Labs';
import Neurology from './sections/Neurology';
import Psychiatry from './sections/Psychiatry';
import Labor from './sections/Labor';
import Ob from './sections/ob';
import Gyn from './sections/gyn';
import Family from './sections/family';
import PHM from './sections/phm';
import Neo from './sections/neo';
import Peds from './sections/peds';
import Im from './sections/im';
import Surgery from './sections/surgery';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GeneralTopics" element={<GeneralTopics />} />
        <Route path="/SurvivalGuideEMR" element={<SurvivalGuideEMR />} />
        <Route path="/Labs" element={<Labs />} />
        <Route path="/Neurology" element={<Neurology />} />
        <Route path="/Psychiatry" element={<Psychiatry />} />
        <Route path="/Labor" element={<Labor />} />
        <Route path="/ob" element={<Ob />} />
        <Route path="/gyn" element={<Gyn />} />
        <Route path="/family" element={<Family />} />
        <Route path="/phm" element={<PHM />} />
        <Route path="/neo" element={<Neo />} />
        <Route path="/peds" element={<Peds />} />
        <Route path="/im" element={<Im />} />
        <Route path="/surgery" element={<Surgery />} />

        {/* Add up to Section16 */}
      </Routes>
    </Router>
  );
}

export default App;
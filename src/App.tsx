import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DesignStrategicSection from './components/DesignStrategicSection';
import ApproachSection from './components/ApproachSection';
import SliderSection from './components/SliderSection';
import ScheduleCall from './components/ScheduleCall';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Header />
      <main>
        <DesignStrategicSection />
        <ApproachSection />
        <SliderSection />
        <ScheduleCall />
      </main>
    </div>
  );
}

export default App;

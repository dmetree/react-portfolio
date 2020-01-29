import React from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom';

import Menu from './components/NavMenu/NavMenu';
import FightGame from './components/FightGame/FightGame';
import EightBall from './components/EightBall/EightBall';
import MeasureLuck from './components/MeasureLuck/MeasureLuck';
import LandingPage from './components/LandingPage/LandingPage';
import Contacts from './components/Contacts/Contacts';



function App() {
  return (
    <div className={s.App}>
      <Menu />
      <Route path='/game' component={FightGame} />
      <Route path='/8_ball' component={EightBall} />
      <Route path='/measure_luck' component={MeasureLuck} />
      <Route path='/landing_page' component={LandingPage} />
      <Route path='/contacts' component={Contacts} />
    </div>
  );
}

export default App;

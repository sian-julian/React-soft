import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Demo from './Demo';
import Sample from './sample';
import Task from './task';
import Comp1 from './comp1';
import Comp2 from './comp2';
import Mapping from './Mapping';
import Shopping from './Shopping';
import About from './About';
import Homepg from './Homepg';
import Contact from './Contact';
import Parent from './props/Parent';
import States from './useState/States';
import Divs from './props/Divs';
import Divp from './props/Divp';
import Datafetching from './api/Datafetching';
import Weather from './weather app/Weather';
import Themeprovider from './context/Themeprovider'
import Bg from './context/Bg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Themeprovider>
    <BrowserRouter>
    <Routes>
      <Route path='/hpg' element={<Homepg></Homepg>}></Route>
      <Route path='/abt' element={<About></About>}></Route>
      <Route path='/cnt' element={<Contact></Contact>}></Route>
      <Route path='/props' element={<Parent></Parent>}></Route>
      <Route path='/state' element={<States></States>}></Route>
      <Route path='/div' element={<Divs></Divs>}></Route>
      <Route path='/divp' element={<Divp></Divp>}></Route>
      <Route path='/data' element={<Datafetching></Datafetching>}></Route>
      <Route path='/wet' element={<Weather></Weather>}></Route>
      <Route path='/bg' element={<Bg></Bg>}></Route>
    </Routes>
    </BrowserRouter>
    </Themeprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Header from './Components/Header/Header';
import Summary from './Components/Summary/Summary';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContatctMe/ContactMe';

// Styles
import './Styles/App.scss';
import './Styles/header.scss';
import './Styles/variables.scss';
import './Styles/Summary.scss';
import './Styles/skills.scss';
import './Styles/projects.scss';
import './Styles/projectitem.scss';
import './Styles/contactme.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Summary />
    <Skills />
    <Projects />
    <ContactMe />
  </React.StrictMode>
);

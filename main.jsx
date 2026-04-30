import React from 'react';
import { createRoot } from 'react-dom/client';
import TigranMediaHero from './TigranMediaHero.jsx';
import TigranMediaSections from './TigranMediaSections.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <TigranMediaHero />
    <TigranMediaSections />
  </>
);

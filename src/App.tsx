import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { VerificarContaPage } from './components/VerificarContaPage';
import { DicasSabaoPage } from './components/DicasSabaoPage';

type Page = 'home' | 'verificar-conta' | 'dicas-sabao';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (currentPage === 'home') {
    return <HomePage onNavigate={handleNavigate} />;
  }
  
  if (currentPage === 'verificar-conta') {
    return <VerificarContaPage onNavigate={handleNavigate} />;
  }
  
  if (currentPage === 'dicas-sabao') {
    return <DicasSabaoPage onNavigate={handleNavigate} />;
  }
  
  return null;
}

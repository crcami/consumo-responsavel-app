import React from 'react';
import { Button } from './ui/button';
import heroImage from 'figma:asset/f51d57d5dad655d5926d385d8a45a12dc1304d34.png';

type HomePageProps = {
  onNavigate: (page: 'home' | 'verificar-conta' | 'dicas-sabao') => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sustainable living - water and nature"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Scrim */}
      <div 
        className="absolute inset-0 opacity-48"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)'
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-start pt-[10vh] sm:pt-[15vh] px-4 sm:px-6 lg:px-24 min-h-screen">
        <div className="flex flex-col gap-4 max-w-2xl">
          {/* Animated Title */}
          <h1 className="animated-gradient-text text-[64px] sm:text-[80px] lg:text-[96px] leading-[1.1]">
            Bem-vindo
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/95">
            Consumo responsável começa aqui.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              onClick={() => onNavigate('verificar-conta')}
              className="rounded-2xl bg-primary hover:bg-primary/90 px-6 py-6"
            >
              Começar agora
            </Button>
            <Button
              onClick={() => onNavigate('dicas-sabao')}
              variant="outline"
              className="rounded-2xl border-2 border-white/80 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-6 py-6"
            >
              Como fazer sabão
            </Button>
          </div>
        </div>
        
        {/* Footer Legal */}
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-24 right-4">
          <p className="text-white/70">
            Projeto ODS 12 — estimativas não substituem a fatura oficial.
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-wave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animated-gradient-text {
          background: linear-gradient(
            120deg,
            #DFF7FF 0%,
            #7EE7A6 25%,
            #5DD9E0 50%,
            #7EE7A6 75%,
            #DFF7FF 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-wave 3s ease-in-out infinite;
          letter-spacing: -0.01em;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.35));
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { Button } from './ui/button';
import { ArrowLeft, Droplets, AlertCircle, Clock, Zap } from 'lucide-react';
import soapImage from 'figma:asset/b070253511470e509a1558c63a9760e36d9d3798.png';

type DicasSabaoPageProps = {
  onNavigate: (page: 'home' | 'verificar-conta' | 'dicas-sabao') => void;
};

export function DicasSabaoPage({ onNavigate }: DicasSabaoPageProps) {
  return (
    <div className="min-h-screen bg-bg-page">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 py-8 lg:py-12">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-text-primary">Como fazer sabão caseiro</h1>
            <p className="text-text-secondary">
              Reutilize óleo de cozinha usado e contribua com o meio ambiente.
            </p>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full h-64 sm:h-80 rounded-[20px] overflow-hidden mb-8 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
          <img
            src={soapImage}
            alt="Sabão caseiro artesanal"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Warning Card */}
        <div className="bg-destructive/10 border-2 border-destructive/30 rounded-[20px] p-5 mb-8 flex gap-4">
          <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div className="flex flex-col gap-2">
            <h3 className="text-destructive">Atenção: Segurança em primeiro lugar</h3>
            <p className="text-text-secondary">
              Use luvas, óculos de proteção e trabalhe em local ventilado. A soda cáustica é corrosiva.
              Mantenha crianças e animais longe durante o preparo.
            </p>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Ingredients */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
            <h2 className="text-text-primary mb-4">Ingredientes</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>1 litro de óleo de cozinha usado (coado)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>150g de soda cáustica (NaOH)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>300ml de água fria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>30ml de álcool (opcional, para acelerar)</span>
              </li>
            </ul>
          </div>
          
          {/* Materials */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
            <h2 className="text-text-primary mb-4">Materiais necessários</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                <span>Balde de plástico resistente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                <span>Colher de pau grande</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                <span>Formas ou caixas para moldar</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                <span>Luvas de borracha e óculos de proteção</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Step by Step */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] mb-8">
          <h2 className="text-text-primary mb-6">Modo de preparo</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary mb-2">Prepare a mistura de soda</h3>
                <p className="text-text-secondary">
                  Em um balde, adicione a água fria primeiro. Depois, aos poucos, adicione a soda cáustica, 
                  mexendo devagar. NUNCA adicione a água sobre a soda. A reação é exotérmica e vai aquecer.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary mb-2">Aguarde esfriar</h3>
                <p className="text-text-secondary">
                  Deixe a mistura de soda e água esfriar até ficar morna (cerca de 40-50°C). 
                  Este processo pode levar 30-40 minutos.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary mb-2">Adicione o óleo</h3>
                <p className="text-text-secondary">
                  Quando a mistura estiver morna, adicione o óleo de cozinha coado. 
                  Mexa constantemente em movimentos circulares por 20-30 minutos.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary mb-2">Adicione o álcool (opcional)</h3>
                <p className="text-text-secondary">
                  Se desejar acelerar o processo, adicione o álcool e continue mexendo até a mistura 
                  engrossar e ficar homogênea (ponto de traço).
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-text-primary mb-2">Despeje nas formas</h3>
                <p className="text-text-secondary">
                  Despeje a mistura nas formas untadas ou forradas com papel manteiga. 
                  Deixe descansar por 24-48 horas em local fresco.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success text-white flex items-center justify-center">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-primary mb-2">Corte e cure</h3>
                <p className="text-text-secondary">
                  Desenforme e corte em barras. Deixe curar por 30 dias em local arejado antes de usar. 
                  Durante a cura, o sabão ficará mais firme e o pH se estabilizará.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-text-primary">Tempo total</h3>
            <p className="text-text-secondary">~1h preparo + 30 dias cura</p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-text-primary">Rendimento</h3>
            <p className="text-text-secondary">~1.5kg de sabão em barra</p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-text-primary">Economia</h3>
            <p className="text-text-secondary">Até 70% vs sabão industrial</p>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="bg-success/10 rounded-[20px] p-6 mb-8">
          <h2 className="text-success mb-4">Benefícios ambientais</h2>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-success">✓</span>
              <span>Evita o descarte inadequado de óleo, que polui rios e lençóis freáticos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success">✓</span>
              <span>Reduz o consumo de produtos industrializados e embalagens plásticas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success">✓</span>
              <span>Economia doméstica: 1 litro de óleo pode render até R$ 25 em sabão</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success">✓</span>
              <span>Contribui para o ODS 12 (Consumo e Produção Responsáveis)</span>
            </li>
          </ul>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate('verificar-conta')}
            className="rounded-2xl bg-primary hover:bg-primary/90 px-6"
          >
            Conferir minha conta de energia
          </Button>
          <Button
            onClick={() => onNavigate('home')}
            variant="outline"
            className="rounded-2xl border-border hover:bg-primary-50"
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
}

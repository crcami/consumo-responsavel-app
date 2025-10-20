import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { SegmentedControl } from './SegmentedControl';
import { CardLeituras } from './CardLeituras';
import { CardTarifa } from './CardTarifa';
import { CardResultado } from './CardResultado';

type VerificarContaPageProps = {
  onNavigate: (page: 'home' | 'verificar-conta' | 'dicas-sabao') => void;
};

export function VerificarContaPage({ onNavigate }: VerificarContaPageProps) {
  const [mode, setMode] = useState<'luz' | 'agua'>('luz');
  
  // Leituras
  const [leituraAnterior, setLeituraAnterior] = useState('');
  const [leituraAtual, setLeituraAtual] = useState('');
  const [diasCiclo, setDiasCiclo] = useState('30');
  
  // Tarifa Luz
  const [classe, setClasse] = useState('residencial');
  const [tarifaBase, setTarifaBase] = useState('0.85');
  const [bandeira, setBandeira] = useState('verde');
  const [usaTarifaMinima, setUsaTarifaMinima] = useState(false);
  const [tarifaMinima, setTarifaMinima] = useState('30.00');
  const [tributos, setTributos] = useState('25');
  const [iluminacaoPublica, setIluminacaoPublica] = useState('15.00');
  
  // Tarifa Água
  const [modeloAgua, setModeloAgua] = useState<'minimo-excedente' | 'faixas'>('minimo-excedente');
  const [tarifaMinimaAgua, setTarifaMinimaAgua] = useState('25.00');
  const [consumoMinimo, setConsumoMinimo] = useState('10');
  const [tarifaExcedente, setTarifaExcedente] = useState('5.50');
  const [faixa1, setFaixa1] = useState('3.50');
  const [faixa2, setFaixa2] = useState('4.50');
  const [faixa3, setFaixa3] = useState('5.50');
  const [faixa4, setFaixa4] = useState('7.00');
  const [esgoto, setEsgoto] = useState('100');
  
  // Resultado
  const [valorFatura, setValorFatura] = useState('');
  
  // Cálculos
  const consumoEstimado = useMemo(() => {
    const anterior = parseFloat(leituraAnterior) || 0;
    const atual = parseFloat(leituraAtual) || 0;
    return Math.max(0, atual - anterior);
  }, [leituraAnterior, leituraAtual]);
  
  const calcularLuz = useMemo(() => {
    const consumo = consumoEstimado;
    const tarifa = parseFloat(tarifaBase) || 0;
    const tributosPct = parseFloat(tributos) || 0;
    const ilumPublica = parseFloat(iluminacaoPublica) || 0;
    const minima = parseFloat(tarifaMinima) || 0;
    
    // Custo base da energia
    let custoEnergia = consumo * tarifa;
    
    // Bandeira tarifária (valores aproximados por kWh)
    let custoBandeira = 0;
    if (bandeira === 'amarela') {
      custoBandeira = consumo * 0.015;
    } else if (bandeira === 'vermelha1') {
      custoBandeira = consumo * 0.045;
    } else if (bandeira === 'vermelha2') {
      custoBandeira = consumo * 0.065;
    }
    
    // Tributos
    const custoTributos = (custoEnergia + custoBandeira) * (tributosPct / 100);
    
    // Total
    let total = custoEnergia + custoBandeira + custoTributos + ilumPublica;
    
    // Aplicar tarifa mínima se necessário
    if (usaTarifaMinima && total < minima) {
      total = minima;
    }
    
    return {
      consumo: custoEnergia,
      bandeira: custoBandeira,
      tributos: custoTributos,
      outras: ilumPublica,
      total,
    };
  }, [consumoEstimado, tarifaBase, bandeira, tributos, iluminacaoPublica, usaTarifaMinima, tarifaMinima]);
  
  const calcularAgua = useMemo(() => {
    const consumo = consumoEstimado;
    const esgotoPct = parseFloat(esgoto) || 0;
    
    let custoAgua = 0;
    
    if (modeloAgua === 'minimo-excedente') {
      const minima = parseFloat(tarifaMinimaAgua) || 0;
      const minConsumo = parseFloat(consumoMinimo) || 10;
      const excedente = parseFloat(tarifaExcedente) || 0;
      
      if (consumo <= minConsumo) {
        custoAgua = minima;
      } else {
        custoAgua = minima + (consumo - minConsumo) * excedente;
      }
    } else {
      // Faixas progressivas
      const f1 = parseFloat(faixa1) || 0;
      const f2 = parseFloat(faixa2) || 0;
      const f3 = parseFloat(faixa3) || 0;
      const f4 = parseFloat(faixa4) || 0;
      
      if (consumo <= 10) {
        custoAgua = consumo * f1;
      } else if (consumo <= 20) {
        custoAgua = 10 * f1 + (consumo - 10) * f2;
      } else if (consumo <= 30) {
        custoAgua = 10 * f1 + 10 * f2 + (consumo - 20) * f3;
      } else {
        custoAgua = 10 * f1 + 10 * f2 + 10 * f3 + (consumo - 30) * f4;
      }
    }
    
    // Esgoto
    const custoEsgoto = custoAgua * (esgotoPct / 100);
    
    const total = custoAgua + custoEsgoto;
    
    return {
      consumo: custoAgua,
      esgoto: custoEsgoto,
      tributos: 0,
      outras: 0,
      total,
    };
  }, [consumoEstimado, modeloAgua, tarifaMinimaAgua, consumoMinimo, tarifaExcedente, faixa1, faixa2, faixa3, faixa4, esgoto]);
  
  const resultado = mode === 'luz' ? calcularLuz : calcularAgua;
  
  const diferenca = useMemo(() => {
    const fatura = parseFloat(valorFatura) || 0;
    if (fatura === 0) return 0;
    return resultado.total - fatura;
  }, [valorFatura, resultado.total]);
  
  return (
    <div className="min-h-screen bg-bg-page">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 py-8 lg:py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-4 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        
        {/* Header */}
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-text-primary">Conferir minha conta</h1>
          <p className="text-text-secondary">
            Estime o valor e compare com a fatura.
          </p>
        </div>
        
        {/* Segmented Control */}
        <div className="mb-6">
          <SegmentedControl value={mode} onChange={setMode} />
        </div>
        
        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            <CardLeituras
              mode={mode}
              leituraAnterior={leituraAnterior}
              leituraAtual={leituraAtual}
              diasCiclo={diasCiclo}
              onLeituraAnteriorChange={setLeituraAnterior}
              onLeituraAtualChange={setLeituraAtual}
              onDiasCicloChange={setDiasCiclo}
              consumoEstimado={consumoEstimado}
            />
            
            {mode === 'luz' ? (
              <CardTarifa
                mode="luz"
                classe={classe}
                tarifaBase={tarifaBase}
                bandeira={bandeira}
                usaTarifaMinima={usaTarifaMinima}
                tarifaMinima={tarifaMinima}
                tributos={tributos}
                iluminacaoPublica={iluminacaoPublica}
                onClasseChange={setClasse}
                onTarifaBaseChange={setTarifaBase}
                onBandeiraChange={setBandeira}
                onUsaTarifaMinimaChange={setUsaTarifaMinima}
                onTarifaMinimaChange={setTarifaMinima}
                onTributosChange={setTributos}
                onIluminacaoPublicaChange={setIluminacaoPublica}
              />
            ) : (
              <CardTarifa
                mode="agua"
                modeloAgua={modeloAgua}
                tarifaMinima={tarifaMinimaAgua}
                consumoMinimo={consumoMinimo}
                tarifaExcedente={tarifaExcedente}
                faixa1={faixa1}
                faixa2={faixa2}
                faixa3={faixa3}
                faixa4={faixa4}
                esgoto={esgoto}
                onModeloAguaChange={setModeloAgua}
                onTarifaMinimaChange={setTarifaMinimaAgua}
                onConsumoMinimoChange={setConsumoMinimo}
                onTarifaExcedenteChange={setTarifaExcedente}
                onFaixa1Change={setFaixa1}
                onFaixa2Change={setFaixa2}
                onFaixa3Change={setFaixa3}
                onFaixa4Change={setFaixa4}
                onEsgotoChange={setEsgoto}
              />
            )}
          </div>
          
          {/* Right Column */}
          <div className="lg:w-[420px] lg:min-w-[420px]">
            <CardResultado
              mode={mode}
              valorEstimado={resultado.total}
              faixaMin={resultado.total * 0.95}
              faixaMax={resultado.total * 1.05}
              resumo={{
                consumo: resultado.consumo,
                bandeira: resultado.bandeira,
                esgoto: resultado.esgoto,
                tributos: resultado.tributos,
                outras: resultado.outras,
              }}
              valorFatura={valorFatura}
              onValorFaturaChange={setValorFatura}
              diferenca={diferenca}
            />
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-8">
          <p className="text-text-secondary text-center">
            Estimativa, não substitui a fatura oficial.
          </p>
        </div>
      </div>
    </div>
  );
}

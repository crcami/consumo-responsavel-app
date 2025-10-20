import React from 'react';
import { InputNumber } from './InputNumber';
import { Badge } from './ui/badge';

type CardLeiturasProps = {
  mode: 'luz' | 'agua';
  leituraAnterior: string;
  leituraAtual: string;
  diasCiclo: string;
  onLeituraAnteriorChange: (value: string) => void;
  onLeituraAtualChange: (value: string) => void;
  onDiasCicloChange: (value: string) => void;
  consumoEstimado: number;
};

export function CardLeituras({
  mode,
  leituraAnterior,
  leituraAtual,
  diasCiclo,
  onLeituraAnteriorChange,
  onLeituraAtualChange,
  onDiasCicloChange,
  consumoEstimado,
}: CardLeiturasProps) {
  const unit = mode === 'luz' ? 'kWh' : 'm³';
  
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col gap-4">
      <h3 className="text-text-primary">Leituras</h3>
      
      <InputNumber
        label="Leitura anterior"
        value={leituraAnterior}
        onChange={onLeituraAnteriorChange}
        unit={unit}
        placeholder="0"
      />
      
      <InputNumber
        label="Leitura atual"
        value={leituraAtual}
        onChange={onLeituraAtualChange}
        unit={unit}
        placeholder="0"
      />
      
      <InputNumber
        label="Dias do ciclo"
        value={diasCiclo}
        onChange={onDiasCicloChange}
        unit="dias"
        placeholder="30"
      />
      
      <div className="flex items-center gap-2">
        <span className="text-text-secondary">Consumo estimado:</span>
        <Badge variant="secondary" className="bg-primary-50 text-primary border-0">
          {consumoEstimado} {unit}
        </Badge>
      </div>
      
      <p className="text-text-secondary">
        Foto do medidor ajuda a conferir.
      </p>
    </div>
  );
}

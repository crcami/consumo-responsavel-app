import React from 'react';
import { InputNumber } from './InputNumber';
import { MiniTable } from './MiniTable';
import { PillDelta } from './PillDelta';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Download, Save } from 'lucide-react';

type CardResultadoProps = {
  mode: 'luz' | 'agua';
  valorEstimado: number;
  faixaMin: number;
  faixaMax: number;
  resumo: {
    consumo: number;
    bandeira?: number;
    esgoto?: number;
    tributos: number;
    outras: number;
  };
  valorFatura: string;
  onValorFaturaChange: (value: string) => void;
  diferenca: number;
};

export function CardResultado({
  mode,
  valorEstimado,
  faixaMin,
  faixaMax,
  resumo,
  valorFatura,
  onValorFaturaChange,
  diferenca,
}: CardResultadoProps) {
  const unit = mode === 'luz' ? 'kWh' : 'm³';
  
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col gap-5">
      <h3 className="text-text-primary">Resultado</h3>
      
      <div className="flex flex-col gap-2">
        <span className="text-text-secondary">Valor estimado</span>
        <div className="text-primary">
          R$ {valorEstimado.toFixed(2)}
        </div>
      </div>
      
      <p className="text-text-secondary">
        Faixa provável: R$ {faixaMin.toFixed(2)} – R$ {faixaMax.toFixed(2)}
      </p>
      
      <div className="flex flex-col gap-3">
        <span className="text-text-primary">Resumo</span>
        <MiniTable
          rows={[
            {
              label: mode === 'luz' ? 'Energia' : 'Água',
              value: `R$ ${resumo.consumo.toFixed(2)}`,
            },
            ...(resumo.bandeira !== undefined
              ? [{ label: 'Bandeira', value: `R$ ${resumo.bandeira.toFixed(2)}` }]
              : []),
            ...(resumo.esgoto !== undefined
              ? [{ label: 'Esgoto', value: `R$ ${resumo.esgoto.toFixed(2)}` }]
              : []),
            {
              label: 'Tributos (estimado)',
              value: `R$ ${resumo.tributos.toFixed(2)}`,
            },
            {
              label: 'Outras taxas',
              value: `R$ ${resumo.outras.toFixed(2)}`,
            },
          ]}
        />
      </div>
      
      <Separator />
      
      <InputNumber
        label="Valor da sua fatura"
        value={valorFatura}
        onChange={onValorFaturaChange}
        unit="R$"
        placeholder="0.00"
        helpText="Digite o valor real da sua conta"
      />
      
      {valorFatura && parseFloat(valorFatura) > 0 && (
        <div className="flex justify-between items-center">
          <span className="text-text-primary">Diferença:</span>
          <PillDelta value={diferenca} />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <Button className="flex-1 rounded-2xl bg-primary hover:bg-primary/90 gap-2">
          <Save className="w-4 h-4" />
          Salvar autoleitura
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-2xl border-border hover:bg-primary-50 gap-2"
        >
          <Download className="w-4 h-4" />
          Exportar PDF
        </Button>
      </div>
      
      <p className="text-text-secondary">
        Esta é uma estimativa calculada com base nos dados informados. Não substitui a fatura oficial emitida pela concessionária.
      </p>
    </div>
  );
}

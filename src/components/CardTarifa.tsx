import React from 'react';
import { InputNumber } from './InputNumber';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { EditableMiniTable } from './MiniTable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Info } from 'lucide-react';

type CardTarifaLuzProps = {
  mode: 'luz';
  classe: string;
  tarifaBase: string;
  bandeira: string;
  usaTarifaMinima: boolean;
  tarifaMinima: string;
  tributos: string;
  iluminacaoPublica: string;
  onClasseChange: (value: string) => void;
  onTarifaBaseChange: (value: string) => void;
  onBandeiraChange: (value: string) => void;
  onUsaTarifaMinimaChange: (value: boolean) => void;
  onTarifaMinimaChange: (value: string) => void;
  onTributosChange: (value: string) => void;
  onIluminacaoPublicaChange: (value: string) => void;
};

type CardTarifaAguaProps = {
  mode: 'agua';
  modeloAgua: 'minimo-excedente' | 'faixas';
  tarifaMinima: string;
  consumoMinimo: string;
  tarifaExcedente: string;
  faixa1: string;
  faixa2: string;
  faixa3: string;
  faixa4: string;
  esgoto: string;
  onModeloAguaChange: (value: 'minimo-excedente' | 'faixas') => void;
  onTarifaMinimaChange: (value: string) => void;
  onConsumoMinimoChange: (value: string) => void;
  onTarifaExcedenteChange: (value: string) => void;
  onFaixa1Change: (value: string) => void;
  onFaixa2Change: (value: string) => void;
  onFaixa3Change: (value: string) => void;
  onFaixa4Change: (value: string) => void;
  onEsgotoChange: (value: string) => void;
};

type CardTarifaProps = CardTarifaLuzProps | CardTarifaAguaProps;

export function CardTarifa(props: CardTarifaProps) {
  if (props.mode === 'luz') {
    return (
      <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col gap-4">
        <h3 className="text-text-primary">Tarifa</h3>
        
        <div className="flex flex-col gap-2">
          <Label>Classe</Label>
          <Select value={props.classe} onValueChange={props.onClasseChange}>
            <SelectTrigger className="rounded-2xl border-border">
              <SelectValue placeholder="Selecione a classe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residencial">Residencial</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <InputNumber
          label="Tarifa base"
          value={props.tarifaBase}
          onChange={props.onTarifaBaseChange}
          unit="R$"
          placeholder="0.85"
          helpText="R$ por kWh"
        />
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Label>Bandeira tarifária</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-text-secondary cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Use a bandeira do mês da conta</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Select value={props.bandeira} onValueChange={props.onBandeiraChange}>
            <SelectTrigger className="rounded-2xl border-border">
              <SelectValue placeholder="Selecione a bandeira" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="verde">Verde</SelectItem>
              <SelectItem value="amarela">Amarela</SelectItem>
              <SelectItem value="vermelha1">Vermelha Patamar 1</SelectItem>
              <SelectItem value="vermelha2">Vermelha Patamar 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-3">
          <Checkbox
            id="tarifa-minima"
            checked={props.usaTarifaMinima}
            onCheckedChange={(checked) => props.onUsaTarifaMinimaChange(!!checked)}
          />
          <label
            htmlFor="tarifa-minima"
            className="text-text-primary cursor-pointer"
          >
            Tarifa mínima / custo de disponibilidade
          </label>
        </div>
        
        {props.usaTarifaMinima && (
          <InputNumber
            label="Valor da tarifa mínima"
            value={props.tarifaMinima}
            onChange={props.onTarifaMinimaChange}
            unit="R$"
            placeholder="30.00"
          />
        )}
        
        <Accordion type="single" collapsible>
          <AccordionItem value="detalhes" className="border-border">
            <AccordionTrigger className="text-text-primary hover:no-underline">
              Detalhes adicionais
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 pt-4">
              <InputNumber
                label="Tributos (PIS/COFINS/ICMS)"
                value={props.tributos}
                onChange={props.onTributosChange}
                unit="%"
                placeholder="25"
                helpText="Percentual aproximado sobre o consumo"
              />
              
              <InputNumber
                label="Contribuição de iluminação pública"
                value={props.iluminacaoPublica}
                onChange={props.onIluminacaoPublicaChange}
                unit="R$"
                placeholder="15.00"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  
  // Água
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col gap-4">
      <h3 className="text-text-primary">Estrutura Tarifária</h3>
      
      <div className="flex flex-col gap-3">
        <Label>Modelo de cobrança</Label>
        <RadioGroup
          value={props.modeloAgua}
          onValueChange={(value) => props.onModeloAguaChange(value as 'minimo-excedente' | 'faixas')}
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="minimo-excedente" id="minimo" />
            <label htmlFor="minimo" className="text-text-primary cursor-pointer">
              Mínimo + Excedente
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="faixas" id="faixas" />
            <label htmlFor="faixas" className="text-text-primary cursor-pointer">
              Faixas progressivas
            </label>
          </div>
        </RadioGroup>
      </div>
      
      {props.modeloAgua === 'minimo-excedente' ? (
        <>
          <div className="flex gap-4">
            <div className="flex-1">
              <InputNumber
                label="Tarifa mínima"
                value={props.tarifaMinima}
                onChange={props.onTarifaMinimaChange}
                unit="R$"
                placeholder="25.00"
              />
            </div>
            <div className="flex-1">
              <InputNumber
                label="Até"
                value={props.consumoMinimo}
                onChange={props.onConsumoMinimoChange}
                unit="m³"
                placeholder="10"
              />
            </div>
          </div>
          
          <InputNumber
            label="Valor por m³ excedente"
            value={props.tarifaExcedente}
            onChange={props.onTarifaExcedenteChange}
            unit="R$"
            placeholder="5.50"
          />
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <Label>Faixas de consumo</Label>
          <EditableMiniTable
            rows={[
              { label: '0-10 m³', value: props.faixa1, onChange: props.onFaixa1Change },
              { label: '11-20 m³', value: props.faixa2, onChange: props.onFaixa2Change },
              { label: '21-30 m³', value: props.faixa3, onChange: props.onFaixa3Change },
              { label: '31+ m³', value: props.faixa4, onChange: props.onFaixa4Change },
            ]}
          />
        </div>
      )}
      
      <InputNumber
        label="Esgoto"
        value={props.esgoto}
        onChange={props.onEsgotoChange}
        unit="%"
        placeholder="100"
        helpText="Percentual sobre o consumo de água"
      />
    </div>
  );
}

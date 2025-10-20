import React from 'react';
import { Label } from './ui/label';

type InputNumberProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: 'kWh' | 'm³' | 'R$' | '%' | 'dias';
  placeholder?: string;
  helpText?: string;
  errorText?: string;
  disabled?: boolean;
};

export function InputNumber({
  label,
  value,
  onChange,
  unit,
  placeholder,
  helpText,
  errorText,
  disabled = false,
}: InputNumberProps) {
  const hasError = !!errorText;

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-text-primary">{label}</Label>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-2xl border bg-white transition-all ${
            hasError
              ? 'border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/20'
              : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/20'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${
            unit ? 'pr-16' : ''
          } outline-none`}
        />
        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary bg-primary-50 px-2 py-1 rounded-lg">
            {unit}
          </span>
        )}
      </div>
      {helpText && !hasError && (
        <span className="text-text-secondary">{helpText}</span>
      )}
      {errorText && (
        <span className="text-destructive">{errorText}</span>
      )}
    </div>
  );
}

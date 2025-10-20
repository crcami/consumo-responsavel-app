import React from 'react';

type PillDeltaProps = {
  value: number;
  tone?: 'saving' | 'overcharge';
};

export function PillDelta({ value, tone }: PillDeltaProps) {
  const isSaving = tone === 'saving' || value < 0;
  const absValue = Math.abs(value);
  
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
        isSaving
          ? 'bg-success/10 text-success'
          : 'bg-destructive/10 text-destructive'
      }`}
    >
      {isSaving ? '↓' : '↑'} R$ {absValue.toFixed(2)}
    </span>
  );
}

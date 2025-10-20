import React from 'react';

type SegmentedControlProps = {
  value: 'luz' | 'agua';
  onChange: (value: 'luz' | 'agua') => void;
};

export function SegmentedControl({ value, onChange }: SegmentedControlProps) {
  return (
    <div className="inline-flex bg-primary-50 rounded-xl p-1 gap-1">
      <button
        onClick={() => onChange('luz')}
        className={`px-6 py-3 rounded-xl transition-all ${
          value === 'luz'
            ? 'bg-white shadow-sm'
            : 'bg-transparent hover:bg-white/50'
        }`}
      >
        <span className={value === 'luz' ? 'text-text-primary' : 'text-text-secondary'}>
          Luz
        </span>
      </button>
      <button
        onClick={() => onChange('agua')}
        className={`px-6 py-3 rounded-xl transition-all ${
          value === 'agua'
            ? 'bg-white shadow-sm'
            : 'bg-transparent hover:bg-white/50'
        }`}
      >
        <span className={value === 'agua' ? 'text-text-primary' : 'text-text-secondary'}>
          Água
        </span>
      </button>
    </div>
  );
}

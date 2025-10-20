import React from 'react';

type MiniTableRow = {
  label: string;
  value: string | React.ReactNode;
};

type MiniTableProps = {
  rows: MiniTableRow[];
};

export function MiniTable({ rows }: MiniTableProps) {
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <div key={index} className="flex justify-between items-center py-2">
          <span className="text-text-secondary">{row.label}</span>
          <span className="text-text-primary">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

type EditableMiniTableProps = {
  rows: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }[];
};

export function EditableMiniTable({ rows }: EditableMiniTableProps) {
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <div key={index} className="flex justify-between items-center gap-4">
          <span className="text-text-secondary flex-shrink-0">{row.label}</span>
          <div className="relative flex-1 max-w-[120px]">
            <input
              type="number"
              value={row.value}
              onChange={(e) => row.onChange(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none pr-12"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
              R$/m³
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

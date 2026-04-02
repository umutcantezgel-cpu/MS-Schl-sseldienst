import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  item1: string | boolean;
  item2: string | boolean;
}

interface Props {
  header1: string;
  header2: string;
  rows: ComparisonRow[] | string;
}

export default function ComparisonTable({ header1, header2, rows }: Props) {
  const renderItem = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="w-5 h-5 text-emerald-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="font-medium text-[color:var(--text-secondary)]">{val}</span>;
  };

  return (
    <div className="my-10 w-full overflow-x-auto not-prose rounded-[var(--radius-lg)] border border-[var(--border-subtle)] shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)]">
            <th className="p-4 font-bold text-[color:var(--text-primary)] w-1/3">Feature</th>
            <th className="p-4 font-bold text-[color:var(--text-primary)] text-center w-1/3 border-l border-[var(--border-subtle)]">{header1}</th>
            <th className="p-4 font-bold text-[color:var(--text-primary)] text-center w-1/3 border-l border-[var(--border-subtle)]">{header2}</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {(() => {
            let parsedRows: ComparisonRow[] = [];
            if (Array.isArray(rows)) parsedRows = rows;
            else if (typeof rows === 'string') {
              try { parsedRows = JSON.parse(rows); } catch (e) { console.error('Failed to parse rows prop', e); }
            }
            return parsedRows.map((row, idx) => (
              <tr key={idx} className="border-b border-[var(--border-subtle)] last:border-0 hover:bg-[var(--color-slate-50)] transition-colors">
                <td className="p-4 text-[color:var(--text-primary)] font-medium bg-[var(--surface-primary)] w-1/3">{row.feature}</td>
                <td className="p-4 text-center border-l border-[var(--border-subtle)] bg-white w-1/3">{renderItem(row.item1)}</td>
                <td className="p-4 text-center border-l border-[var(--border-subtle)] bg-[var(--surface-primary)] w-1/3">{renderItem(row.item2)}</td>
              </tr>
            ));
          })()}
        </tbody>
      </table>
    </div>
  );
}

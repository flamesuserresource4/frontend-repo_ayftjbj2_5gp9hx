import React from 'react';

export default function PaymentOption({ id, label, description, selected, onSelect, children, rightContent }) {
  return (
    <div className="border-b border-slate-200">
      <label className="flex items-start gap-3 p-4 cursor-pointer">
        <input
          type="radio"
          name="payment-method"
          checked={selected}
          onChange={() => onSelect(id)}
          className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-600"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="text-slate-900 font-medium">{label}</div>
            {rightContent}
          </div>
          {description && <p className="text-sm text-slate-600 mt-0.5">{description}</p>}
        </div>
      </label>
      {selected && children}
    </div>
  );
}

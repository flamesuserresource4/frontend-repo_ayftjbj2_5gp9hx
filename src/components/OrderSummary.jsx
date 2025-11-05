import React from 'react';

export default function OrderSummary() {
  return (
    <aside className="w-full max-w-2xl mx-auto mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Order Total</span>
        <span className="text-slate-900 font-semibold">₹3,000</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">Inclusive of all taxes and fees.</p>
    </aside>
  );
}

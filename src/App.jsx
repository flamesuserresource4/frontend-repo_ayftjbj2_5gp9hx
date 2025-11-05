import React from 'react';
import HeroCover from './components/HeroCover';
import PaymentMethods from './components/PaymentMethods';
import OrderSummary from './components/OrderSummary';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroCover />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 -mt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <PaymentMethods />
          </div>
          <div className="order-1 lg:order-2">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}

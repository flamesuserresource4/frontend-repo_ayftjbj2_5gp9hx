import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
      <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white" />
      <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 md:px-8 pb-4">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Secure Checkout</h1>
          <p className="mt-1 text-slate-600">Choose a payment method. Your details are encrypted and protected.</p>
        </div>
      </div>
    </section>
  );
}

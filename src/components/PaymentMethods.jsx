import React, { useEffect, useState } from 'react';
import PaymentOption from './PaymentOption';
import BNPLPanel from './BNPLPanel';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

const LS_KEY = 'selected-payment-method';

export default function PaymentMethods() {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setSelected(saved);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    localStorage.setItem(LS_KEY, id);
  };

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* CREDIT & DEBIT CARDS */}
      <div className="px-4 pt-4 pb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Credit & Debit Cards</div>
      <PaymentOption
        id="cards"
        label={
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-slate-500" />
            <span>Visa •••• 4242</span>
          </div>
        }
        description={
          <span className="inline-flex items-center gap-1 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 rounded-sm bg-slate-100 px-1.5 py-0.5">VISA</span>
            <span className="inline-flex items-center gap-1 rounded-sm bg-slate-100 px-1.5 py-0.5">Mastercard</span>
          </span>
        }
        selected={selected === 'cards'}
        onSelect={handleSelect}
        rightContent={<button className="text-xs text-teal-700 hover:underline">Add New Card +</button>}
      >
        {selected === 'cards' && (
          <div className="px-4 pb-4 text-sm text-slate-600">Enter your card details on the next step.</div>
        )}
      </PaymentOption>

      {/* UPI */}
      <div className="px-4 pt-4 pb-2 text-xs font-medium uppercase tracking-wider text-slate-500">UPI</div>
      <PaymentOption
        id="upi"
        label={
          <div className="flex items-center gap-2">
            <Smartphone size={18} className="text-slate-500" />
            <span>UPI – Approved Bank (i)</span>
          </div>
        }
        description={<span className="text-xs">Add Another UPI ID +</span>}
        selected={selected === 'upi'}
        onSelect={handleSelect}
      >
        {selected === 'upi' && (
          <div className="px-4 pb-4 text-sm text-slate-600">We will redirect you to approve the payment in your UPI app.</div>
        )}
      </PaymentOption>

      {/* BNPL - Primary stimulus */}
      <div className="px-4 pt-4 pb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Buy Now, Pay Later (BNPL)</div>
      <PaymentOption
        id="bnpl"
        label={
          <div className="flex items-center gap-2">
            <Banknote size={18} className="text-teal-600" />
            <span className="text-teal-800">Pay in 3 with 0% fees</span>
          </div>
        }
        description={<span className="text-xs text-teal-700">Popular choice • Fast approval • Trusted by 2M+ users</span>}
        selected={selected === 'bnpl'}
        onSelect={handleSelect}
      >
        {selected === 'bnpl' && <BNPLPanel amount={3000} onPay={() => {}} />}
      </PaymentOption>

      {/* OTHER PAYMENT METHODS */}
      <div className="px-4 pt-4 pb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Other Payment Methods</div>
      <PaymentOption
        id="netbanking"
        label={<span>Net Banking (Choose an Option)</span>}
        selected={selected === 'netbanking'}
        onSelect={handleSelect}
      >
        {selected === 'netbanking' && (
          <div className="px-4 pb-4 text-sm text-slate-600">Select your bank on the next step.</div>
        )}
      </PaymentOption>
      <PaymentOption
        id="other-upi"
        label={<span>Other UPI Apps (Google Pay, PhonePe, Paytm)</span>}
        selected={selected === 'other-upi'}
        onSelect={handleSelect}
      >
        {selected === 'other-upi' && (
          <div className="px-4 pb-4 text-sm text-slate-600">We will redirect you to your chosen app.</div>
        )}
      </PaymentOption>
    </section>
  );
}

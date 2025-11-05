import React, { useEffect, useMemo, useState } from 'react';
import { Star, Shield, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function formatDatePlusMonths(startDate, monthsToAdd) {
  const d = new Date(startDate);
  d.setMonth(d.getMonth() + monthsToAdd);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
}

export default function BNPLPanel({ amount = 3000, onPay }) {
  const perInstallment = useMemo(() => Math.round(amount / 3), [amount]);
  const today = new Date();
  const dates = [0, 1, 2].map((i) => formatDatePlusMonths(today, i));

  const [recentCount, setRecentCount] = useState(14);
  useEffect(() => {
    const id = setInterval(() => {
      setRecentCount((c) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = Math.min(25, Math.max(8, c + delta));
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const [checked, setChecked] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const handlePay = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 1200);
    onPay?.();
  };

  return (
    <div className="px-4 pb-4">
      <div className="rounded-xl border border-teal-100 bg-teal-50/70">
        <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-3 text-white">
          <div className="text-sm">You're one step away from completing your purchase!</div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/30">
            <div className="h-2 rounded-full bg-white" style={{ width: '85%' }} />
          </div>
          <div className="absolute right-4 top-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 text-xs">
            <TrendingUp size={14} />
            <span>Over 2 million users chose this option!</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs text-teal-700 ring-1 ring-inset ring-teal-200">
              <Star className="text-amber-500" size={14} />
              <span>Rated 4.8⭐ by young professionals</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs text-rose-700 ring-1 ring-inset ring-rose-200">
              <Clock size={14} />
              <span>Limited-time 0% offer – ends today</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 text-xs text-sky-700 ring-1 ring-inset ring-sky-200">
              <Shield size={14} />
              <span>0% interest if paid on time</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">Repayment summary</div>
              <div className="text-xs text-slate-500">14 people just used this option in the last hour</div>
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {dates.map((date, i) => (
                <div key={i} className="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700 ring-1 ring-inset ring-slate-200">
                  {i + 1} of 3: ₹{perInstallment.toLocaleString('en-IN')} on {date}
                </div>
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500">See terms</div>
          </div>

          <div className="flex items-start gap-2">
            <input
              id="bnpl-review"
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-600"
            />
            <label htmlFor="bnpl-review" className="text-sm text-slate-700">
              I have reviewed the payment plan.
            </label>
          </div>

          <div className="relative">
            <button
              onClick={handlePay}
              disabled={!checked}
              className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Pay in 3 – Instant Approval 🎉
            </button>
            <AnimatePresence>
              {celebrate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-teal-700 ring-1 ring-teal-200"
                  >
                    <CheckCircle size={18} className="text-teal-600" />
                    <span className="text-sm">You're all set!</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-xs text-slate-500">
            This option remains selected if you navigate back.
          </div>

          <div className="mt-1 text-xs text-slate-500">
            Dynamic activity: <span className="font-medium text-slate-700">{recentCount}</span> people just used this option in the last hour.
          </div>
        </div>
      </div>
    </div>
  );
}

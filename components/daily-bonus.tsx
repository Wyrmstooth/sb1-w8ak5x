"use client"

import { Gift } from 'lucide-react'

export function DailyBonus({ className }: { className?: string }) {
  return (
    <div className={`bg-card rounded-lg p-4 ${className}`}>
      <h2 className="text-lg font-bold mb-4">Daily Bonus</h2>
      <div className="flex items-center justify-center">
        <Gift className="w-12 h-12 text-yellow-400" />
      </div>
      <p className="text-center mt-2">Free Nitro+</p>
    </div>
  )
}
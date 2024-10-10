"use client"

import { Button } from "@/components/ui/button"
import { Diamond } from 'lucide-react'

export function AutoEarn() {
  return (
    <div className="bg-card rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">AutoEarn</h2>
        <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">New</div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Diamond className="w-8 h-8 text-blue-400" />
        <div>
          <p className="text-sm">Earn coins automatically by enabling this function here below</p>
        </div>
      </div>
      <Button className="w-full">Enable AutoEarn</Button>
    </div>
  )
}
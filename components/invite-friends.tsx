"use client"

import { Users } from 'lucide-react'

export function InviteFriends({ className }: { className?: string }) {
  return (
    <div className={`bg-card rounded-lg p-4 ${className}`}>
      <h2 className="text-lg font-bold mb-4">Invite Friends</h2>
      <div className="flex items-center justify-center">
        <Users className="w-12 h-12 text-blue-400" />
      </div>
      <p className="text-center mt-2">Earn rewards</p>
    </div>
  )
}
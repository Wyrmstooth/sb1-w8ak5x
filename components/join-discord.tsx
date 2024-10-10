"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

export function JoinDiscord() {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Join Discord</h2>
      <p className="text-sm mb-4">Join our discord for support or announcements of giveaways</p>
      <Button className="w-full flex items-center justify-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Join Discord
      </Button>
    </div>
  )
}
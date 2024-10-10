"use client"

import Link from 'next/link'
import { Bell, Coins } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">NITRO</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">100.29</span>
          </div>
          <Bell className="w-5 h-5 text-muted-foreground" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
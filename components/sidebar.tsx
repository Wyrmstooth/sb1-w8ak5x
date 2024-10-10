"use client"

import Link from 'next/link'
import { Home, DollarSign, ShoppingCart, Trophy, Clipboard, User } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-16 bg-background border-r border-border">
      <nav className="flex flex-col items-center py-4 space-y-4">
        <Link href="/" className="sidebar-icon"><Home /></Link>
        <Link href="/earn" className="sidebar-icon"><DollarSign /></Link>
        <Link href="/shop" className="sidebar-icon"><ShoppingCart /></Link>
        <Link href="/leaderboard" className="sidebar-icon"><Trophy /></Link>
        <Link href="/quests" className="sidebar-icon"><Clipboard /></Link>
        <Link href="/profile" className="sidebar-icon"><User /></Link>
      </nav>
    </aside>
  )
}
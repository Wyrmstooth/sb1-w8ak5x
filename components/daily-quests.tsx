"use client"

import { Progress } from "@/components/ui/progress"
import { Zap, Clock, Target } from 'lucide-react'

const quests = [
  { id: 1, title: 'Earn 10 XP', icon: Zap, progress: 80, max: 100 },
  { id: 2, title: 'Spend 5 minutes earning', icon: Clock, progress: 50, max: 100 },
  { id: 3, title: 'Complete 2 missions', icon: Target, progress: 10, max: 100 },
]

export function DailyQuests() {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Daily Quests</h2>
      <div className="space-y-4">
        {quests.map((quest) => (
          <div key={quest.id} className="flex items-center space-x-4">
            <quest.icon className="w-6 h-6 text-primary" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span>{quest.title}</span>
                <span className="text-sm text-muted-foreground">{quest.progress}/{quest.max}</span>
              </div>
              <Progress value={quest.progress} max={quest.max} className="h-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
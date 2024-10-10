import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { FeaturedOffers } from "@/components/featured-offers"
import { DailyQuests } from "@/components/daily-quests"
import { AutoEarn } from "@/components/auto-earn"
import { DailyBonus } from "@/components/daily-bonus"
import { InviteFriends } from "@/components/invite-friends"
import { JoinDiscord } from "@/components/join-discord"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome to the Earn Page</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <FeaturedOffers />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <DailyQuests />
                <div>
                  <AutoEarn />
                  <DailyBonus className="mt-6" />
                  <InviteFriends className="mt-6" />
                </div>
              </div>
            </div>
            <div>
              <JoinDiscord />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
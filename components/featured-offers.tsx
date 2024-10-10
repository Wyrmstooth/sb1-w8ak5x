"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const featuredOffers = [
  { id: 1, title: 'Sonic Dash', subtitle: 'Be 1st in the race', reward: 15.44, image: '/sonic-dash.jpg' },
  { id: 2, title: 'Clash of Clans', subtitle: 'Spend Stars', reward: 787.44, image: '/clash-of-clans.jpg' },
  { id: 3, title: 'Pokemon Go', subtitle: 'Catch Pokemon', reward: 9.00, image: '/pokemon-go.jpg' },
  { id: 4, title: 'Clash Royale', subtitle: 'Build an empire', reward: 31.34, image: '/clash-royale.jpg' },
]

export function FeaturedOffers() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Featured Offers</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {featuredOffers.map((offer) => (
          <div key={offer.id} className="featured-offer">
            <Image src={offer.image} alt={offer.title} width={300} height={200} />
            <div className="featured-offer-overlay">
              <h3 className="featured-offer-title">{offer.title}</h3>
              <p className="featured-offer-subtitle">{offer.subtitle}</p>
            </div>
            <div className="featured-offer-reward">${offer.reward.toFixed(2)}</div>
            <Button className="featured-offer-button">Play</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
// components/section-cards.tsx
"use client"

import * as React from "react"

export function SectionCards() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-xl bg-muted/50 p-4">Card 1</div>
      <div className="rounded-xl bg-muted/50 p-4">Card 2</div>
      <div className="rounded-xl bg-muted/50 p-4">Card 3</div>
    </section>
  )
}

export default SectionCards

"use client"

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 border-b">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Overview</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-md px-3 py-1 text-sm border">Profile</button>
        <button className="rounded-md px-3 py-1 text-sm border">Settings</button>
      </div>
    </header>
  )
}

export default SiteHeader

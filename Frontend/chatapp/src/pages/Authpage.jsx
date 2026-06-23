import React from 'react'
import { useWallpaper } from "../context/Wallpaper.js";
import { AuthHeader } from '../components/auth/AuthHeader.jsx';
import { AuthActionPanel } from '../components/auth/AuthActionPanel.jsx';

export const Authpage = () => {
    const { frameStyle } = useWallpaper();
  return (
       <div className="box-border flex min-h-dvh flex-col p-3 sm:p-5 md:p-8" style={frameStyle}>
      <div className="mx-auto flex w-full max-w-368 flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-background text-foreground">
        <AuthHeader />
        <main className="relative flex flex-1 flex-col overflow-hidden md:flex-row">
          <AuthActionPanel />
        </main>
      </div>
    </div>
  )
}



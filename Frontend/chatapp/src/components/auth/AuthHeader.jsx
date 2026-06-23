import React from 'react'
import { AppLogo } from '../Applogo';
import { WallpaperPicker } from '../wallpaperPicker.jsx';
import { ThemePresetPicker } from '../ThemepresetPicker.jsx';
import { Themetoggle } from '../Themetoggle.jsx';
import { APP_NAME } from '../Applogo';
export const AuthHeader = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b border-black/10 bg-[#F6F6F6]/95 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-[#1C1C1E]/95">
      <div className="flex flex-1 items-center gap-2.5 px-1">
        <AppLogo size={30} className="rounded-[7px]" alt="" />
        <div>
          <p className="truncate text-[15px] font-semibold leading-tight">{APP_NAME}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-0.5">
        <WallpaperPicker />

        <ThemePresetPicker />
        
        <Themetoggle />
      </div>
    </header>
    </div>
  )
}



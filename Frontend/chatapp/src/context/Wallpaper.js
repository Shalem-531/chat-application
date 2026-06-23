import { createContext, useContext } from "react";

export const WallpaperContext = createContext(null);

export function useWallpaper() {
  const ctx = useContext(WallpaperContext);
    console.log("ctx:", ctx);

  if (!ctx) {
    throw new Error("useWallpaper must be used within WallpaperProvider");
  }
  return ctx;
}
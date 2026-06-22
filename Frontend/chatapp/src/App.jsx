import { Button } from '@heroui/react';
import { ThemeProvider } from './context/Themecontext';
import { WallpaperProvider } from './context/Wallpapercontext';
import { WallpaperContext } from './context/Wallpaper.js';
import { ThemeContext } from './context/Theme.js';
import {Routes,Route} from "react-router"
import {Chatpage} from "./pages/Chatpage.jsx"
import { Authpage } from './pages/Authpage.jsx';
import {useAuth} from "@clerk/react";
import { Navigate } from 'react-router';
function App() {
  const {isSignedin,isLoaded}=useAuth();
  if(!isLoaded){
    return <p>LOADING.....</p>
  }
  return (
    <div>
      <ThemeProvider>
        <WallpaperProvider>
          <Routes>
            <Route path="/" element={isSignedin ? <Chatpage/> : <Navigate to={"/auth"}/> }></Route>
             <Route path="/auth" element={!isSignedin ?<Authpage/>: <Navigate to={"/"}/>}></Route>
          </Routes>
        </WallpaperProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

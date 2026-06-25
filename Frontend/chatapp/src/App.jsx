import { Button } from '@heroui/react';
import { ThemeProvider } from './context/Themecontext';
import { WallpaperProvider } from './context/Wallpapercontext';
import { ThemeContext } from './context/Theme.js';
import {Routes,Route} from "react-router"
import Chatpage from "./pages/Chatpage.jsx"
import { Authpage } from './pages/Authpage.jsx';
import {useAuth} from "@clerk/react";
import { Navigate } from 'react-router';
import { WallpaperPicker } from './components/wallpaperPicker.jsx';
import { PageLoader } from './components/PageLoader.jsx';
import { useAuthStore } from './store/useAuthStore.js';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
function App() {
  const {isSignedin,isLoaded}=useAuth();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedin) checkAuth();
    else clearAuth();
  }, [checkAuth, clearAuth, isLoaded, isSignedin]);

  if (!isLoaded || (isSignedin && isCheckingAuth)) return <PageLoader />;
  return (
    <div>
      <ThemeProvider>
        <WallpaperProvider>
          <Routes>
         <Route path="/" element={isSignedin ? <Chatpage /> : <Navigate to={"/auth"}/>} />
          <Route path="/auth" element={!isSignedin ? <Authpage /> : <Navigate to={"/"}/>}/>
          </Routes>
          <Toaster/>
        </WallpaperProvider>
      </ThemeProvider>
    </div>
  )
}

export default App

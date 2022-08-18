import { BrowserRouter } from "react-router-dom";
// import { Header } from "./components/header";
import { DraweProvider } from "./contexts/Drawer-context";
import { AppThemeProvider } from "./contexts/theme-context";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <div className="App">
      <AppThemeProvider>
        <DraweProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DraweProvider>
      </AppThemeProvider>
    </div>
  );
};

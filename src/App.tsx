
import { BrowserRouter } from "react-router-dom";
//routes
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/context";


export const App =() => {
  return (
    <AppThemeProvider >
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}



import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      <Analytics />
    </ThemeProvider>
  );
}

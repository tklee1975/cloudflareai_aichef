// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
// import ScrollToTop from "./components/scroll-to-top";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './App.css';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      {/* <ScrollToTop /> */}
      <Router />
    </ThemeProvider>
  );
}

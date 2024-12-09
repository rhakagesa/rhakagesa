import { Route, BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main className="w-full h-full px-4 sm:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

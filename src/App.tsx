import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Error from "./pages/Error";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main className="w-full h-screen px-4 sm:px-0">
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

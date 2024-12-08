import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main className="w-full h-screen px-4 sm:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

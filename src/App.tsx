import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.tsx";
import Event from "./components/Event.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={
            <Event
              event={{
                name: "",
                description: "",
                schedule: "",
                image: "",
              }}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

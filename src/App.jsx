import "./App.css";
import HomePage from "./Component/HomePage";
import Contact from "./Component/Contact";
import About from "./Component/About Us";
import Services from "./Component/Services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Component/Navbar";
import Footer from "./Component/Footer";
import ChatPage from "./Component/ChatPage";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideFooterRoutes = ["/chat"]; // Add more paths here if needed

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

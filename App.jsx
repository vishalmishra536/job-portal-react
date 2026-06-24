import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Jobs from "./Jobs";
import Company from "./Company";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import ContactSales from "./ContactSales";
import PostJob from "./PostJob";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contactsales" element={<ContactSales />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

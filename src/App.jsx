import Nav from "./components/Nav";
import Footer from "./components/Footer";
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Features from "./components/Features";
import Models from "./pages/Models";


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import {
    Product,
    Story,
    Pricing,
    About,
    Join,
    Policy,
    Terms,
    Security,
    EndUser
} from "./pages"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/story" element={<Story />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<Join />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/security" element={<Security />} />
                <Route path="/end-user" element={<EndUser />} />
            </Routes>
        </div>
    )
}

export default App

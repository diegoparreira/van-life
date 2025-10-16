import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail/VanDetail";
import Layout from "./components/Layout/Layout";
import Host from "./pages/Host/Host";
import HostDashboard from "./pages/Host/Dashboard/Dashboard";
import HostVans from "./pages/Host/Vans/Vans";
import HostReviews from "./pages/Host/Reviews/Reviews";
import HostIncomes from "./pages/Host/Incomes/Incomes";
import HostVanDetail from "./pages/Host/Vans/HostVanDetail/HostVanDetail";
import HostVanLayout from "./components/HostVanLayout/HostVanLayout";
import HostVanPricing from "./pages/Host/Vans/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/Host/Vans/HostVanPhotos/HostVanPhotos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="host" element={<Host />}>
                        <Route index element={<HostDashboard />} />
                        <Route path="vans">
                            <Route index element={<HostVans />} />
                            <Route element={<HostVanLayout />}>
                                <Route path=":id" element={<HostVanDetail />} />
                                <Route path=":id/pricing" element={<HostVanPricing />} />
                                <Route path=":id/photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                        <Route path="income" element={<HostIncomes />} />
                        <Route path="reviews" element={<HostReviews />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import React from "react";
// import { Dashboard } from "./components/Dashboard"
// import { Landing } from "./components/Landing"

// for lazy routing
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));


// Client-Side-Routing - 
// Client-side routing refers to the ability of a web application to handle navigation directly within the browser, without making a full request to the server for each page change. This technique is common in modern single-page applications (SPAs) using frameworks like React, Angular, or Vue.

// How Client-Side Routing Works - 
// Initial Page Load:

// The server delivers a single HTML file (the "shell") containing the app.
// JavaScript frameworks take over from there.

// Routing via JavaScript:

// Routes are handled by the browser's history API, which allows manipulating the URL without reloading the page.
// When a user navigates to a different route, the application updates the URL and dynamically renders the appropriate content, often by reusing existing components.

// No Full Page Refresh:

// Instead of requesting a new HTML file from the server, the app dynamically injects content based on the current route.

function App() {

  return (
    <div>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/" element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar(){

  const navigate = useNavigate(); // makes sure we don't re-fetch html, js, ... files from server again when route is changed in client-side-routing

  return(
    <div>
        <button onClick={() => {
          // window.location.href = "/"
          navigate("/");
        }}>Landing Page</button>

        <button onClick={() => {
          // window.location.href = "/dashboard"
          navigate("/dashboard")
        }}>Dashboard Page</button>
    </div>
  )
}

export default App

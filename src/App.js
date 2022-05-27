import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBottom from "./components/MainBottom";
import MainCenter from "./components/MainCenter";
import MainTop from "./components/MainTop";

function App() {
  return (
    <div className=" bg-black text-white max-w-screen-2xl">
      <header className="px-4 py-5 md:px-32 md:py-10">
        <Header />
      </header>
      <main>
        <div className="px-4 py-5 md:px-32 md:py-10">
          <MainTop />
          <MainCenter />
        </div>
        <div className="px-4 md:px-32 bg-gray-800">
          <MainBottom />
        </div>
        <div className="px-4 py-5 md:py-10 md:px-32">
          <Contact/>
        </div>
      </main>
      <footer className="bg-gray-800 px-4 py-5 md:px-32">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

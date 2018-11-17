import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePageBody from"./HomePageBody";
function HomePage() {
    return(
        <div>
            <Header loggedIn={true}/>
            <HomePageBody/>
            <Footer></Footer>
        </div>
    )
}
export default HomePage;
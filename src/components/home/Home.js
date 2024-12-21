import React from "react";
import "./Home.scss"
import Social from "./Social";
import Data from "./Data";
import profile from "../../assets//profile.jpg"
import ScrollDown from "./ScrollDown";
export default function Home(){
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social/>
                    <div className="home-img">
                        <img src={profile}/>
                    </div>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}
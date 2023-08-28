// import { useState } from 'react'
import mobilePic from "./assets/images/image-profile-mobile.webp";
import "./App.css";
import SocialContainer from "./Components/SocialContainer/SocialContainer";
import ContactMeBtn from "./Components/ContactMeBtn/ContactMeBtn";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="background">
      <SocialContainer />
      <div className="image-container">
        <img src={mobilePic} alt="" />
      </div>
      <div className="welcome-container">
        <h1>Nice to meet you! I'm Adams Keyes.</h1>
        <p>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
      <ContactMeBtn />
    </div>
  );
}

export default App;

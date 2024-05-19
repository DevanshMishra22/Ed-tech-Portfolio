import hero from "../assets/hero.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container" id="Home">
        <div className="hero_content">
          <h1 className="heading_main">
            {" "}
            It's Now Easier to Get Quality Education{" "}
          </h1>
          <p className="para_hero">
            Connect in real time with the most effective peer-to-peer texting
            tool for higher education
          </p>
          <input
            className="input_hero"
            type="text"
            placeholder="Enter Your Email"
          />
          <a href="#subscribe">
            <button className=" btn">Submit</button>
          </a>
          <div className="stats">
            <div className="main_card">
              <h3>14k+</h3>
              <p className="para">Total Courses</p>
            </div>
            <div className="main_card">
              <h3>700+</h3>
              <p className="para">Expert Mentors</p>
            </div>
            <div className="main_card">
              <h3>8k+</h3>
              <p className="para">Student Globally</p>
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src={hero} alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;

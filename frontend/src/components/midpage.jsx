import hero from "../assets/heromidpage.png";
import "../styles/Mid.css";
const Midpage = () => {
  return (
    <div className="container_midpage" id="mid">
      <div className="wrapper_mid">
        <div className="hero_midpage">
          <img src={hero} alt="Image" />
        </div>
        <div className="content_midpage">
          <h2>
            Engage Student <br />
            Through Technology
          </h2>
          <p>
            Nowadays it's such a great time. to be a teacher or a student. When
            you can combine learning with technology, the classroom activities
            can reasemble the real world when taking advantage of our intuitive
            and straightforward design studio.
          </p>

          <a href="#Blog">
            {" "}
            <button className="button_mid">See More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Midpage;

import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby sriracha gochujang air plant, viral post-ironic semiotics
            succulents polaroid. Fashion axe photo booth marxism yr seitan
            tousled waistcoat. Brooklyn street art offal artisan forage.
            Skateboard big mood narwhal small batch, migas actually roof party
            mumblecore truffaut chicharrones freegan edison bulb schlitz venmo
            taxidermy. PBR&B kickstarter lo-fi, pickled cliche hoodie subway
            tile prism vape polaroid disrupt.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

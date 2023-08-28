import githubIcon from "../../assets/images/icon-github.svg";
import linkedinIcon from "../../assets/images/icon-linkedin.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import frontendMentorIcon from "../../assets/images/icon-frontend-mentor.svg";
import "./SocialContainer.css";

const SocialContainer = () => {
  return (
    <div className="social-container">
      <h4>adamkeyes</h4>
      <ul className="social-icons-ul">
        <li className="github">{<img src={githubIcon} alt="" />}</li>
        <li>
          <img src={frontendMentorIcon} alt="" />
        </li>
        <li>
          <img src={linkedinIcon} alt="" />
        </li>
        <li>
          <img src={twitterIcon} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default SocialContainer;

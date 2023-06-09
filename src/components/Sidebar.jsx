import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Willian" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/1B5n0SsgsAcwRv9cpfFnk4zvORkU90qo_/view?usp=sharing"
        target="blank"
        className="btn"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

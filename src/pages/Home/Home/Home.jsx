import Banner from "../Banner/Banner";
import DemoPort from "../DemoPort/DemoPort";
import EduNexp from "../EduNexp/EduNexp";
import MeetMe from "../MeetMe/MeetMe";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MeetMe></MeetMe>
            <Skills></Skills>
            <EduNexp></EduNexp>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;
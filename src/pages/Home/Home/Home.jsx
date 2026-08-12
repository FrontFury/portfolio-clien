import Banner from "../HomePage/HomePage";
import Contact from "../Contact/Contact";
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
            <Contact></Contact>

            
        </div>
    );
};

export default Home;
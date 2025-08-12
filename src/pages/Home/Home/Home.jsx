import Banner from "../Banner/Banner";
import EduNexp from "../EduNexp/EduNexp";
import MeetMe from "../MeetMe/MeetMe";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MeetMe></MeetMe>
            <Skills></Skills>
            <EduNexp></EduNexp>
        </div>
    );
};

export default Home;
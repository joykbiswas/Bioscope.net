// import Banner from "../Components/Banner/Banner";

import AllFeatures from "../Components/Home/AllFeature/AllFeatures";
import Banner from "../Components/Home/Banner/Banner";
import Footer from "../Components/Home/Footer/Footer";
import SelectPlan from "../Components/Home/SelectPlan/SelectPlan";
import Subscriptions from "../Components/Home/Subscriptions/Subscriptions";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <AllFeatures></AllFeatures>
            <Subscriptions></Subscriptions>
            <SelectPlan></SelectPlan>
            <Footer></Footer>
        </div>
    );
};

export default Home;
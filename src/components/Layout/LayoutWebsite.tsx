import Header from "../Detail/Header";
import Footer from "../Home/Footer";
import Banner from "../Home/Banner";
import Main from "../Home/Main";
import "../../../css/app.css";
const LayoutWebsite = () => {
  return (
    <>
    <div className="container">
        <Header />
        <Banner />
        <Main />
        <Footer />  
    </div>
    </>
  );
};

export default LayoutWebsite;

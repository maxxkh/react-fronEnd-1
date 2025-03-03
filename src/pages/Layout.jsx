import img1 from '../../src/Components/SiteAssets/ImagesAssets/altar-logo__full__transparent-color-dark.svg'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
export default function Layout({ children }) {
    return (
        <div >
        <Header imgURL={img1}/>
            {children}
        <Footer />
        </div>
    );
}
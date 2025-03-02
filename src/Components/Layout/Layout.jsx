import img1 from '../SiteAssets/ImagesAssets/altar-logo__full__transparent-color-dark.svg'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
    return (
        <div >
        <Header imgURL={img1}/>
            {children}
        <Footer />
        </div>
    );
}
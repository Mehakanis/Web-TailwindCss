import Header from "./components/header";
import HeroSection from "./components/hero-section";
//import Bar from "../../public/Image/bar";
import ProductInfo from "./components/product";
import HFM from "./components/HFM";
import MultipleAccessories from "./components/MA";
import Gallery from "./components/gallery";
import Color from "./components/colors";
import Test from "./components/testimonials";
import Footer from "./components/footer";
export default function Home(){
  return(
    <main className=" max-h-screen ">
<div >
  <Header />
  
</div>
<HeroSection />
{/* <div className="h-[800px] w-[1200px] "> */}
{/* <Bar /> */}
{/* </div> */}

<ProductInfo />
<HFM />
<MultipleAccessories />
<Gallery />
<Color />
<Test />
<Footer />
</main>
  )
}
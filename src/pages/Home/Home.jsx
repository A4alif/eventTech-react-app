import Banner from "../../components/Banner/Banner"
import Greetings from "../../components/Greetings/Greetings"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Services from "../../components/Services/Services"
import Sponsors from "../../components/Sponsors/Sponsors"

const Home = () => {
  return (
    <>
      <Banner />
      <Greetings />
      <Services />
      <NewsLetter />
     <div className="py-16">
     <Sponsors />
     </div>
    </>
  )
}

export default Home
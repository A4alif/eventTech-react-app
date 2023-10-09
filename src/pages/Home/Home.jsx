import Banner from "../../components/Banner/Banner"
import Greetings from "../../components/Greetings/Greetings"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Services from "../../components/Services/Services"

const Home = () => {
  return (
    <>
      <Banner />
      <Greetings />
      <Services />
      <NewsLetter />
    </>
  )
}

export default Home
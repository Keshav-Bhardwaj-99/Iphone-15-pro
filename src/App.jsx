import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Model from './Components/Model';
import ModelView from './Components/ModelView';
import Lights from './Components/Lights';
import * as Sentry from '@sentry/react'
import Features from './Components/Features';
import HowItWorks from './Components/HowItWorks';
import Footer from './Components/Footer';

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <ModelView/>
      <Features/>
      <HowItWorks/>
      <Footer/>

    </main>
  )
}

export default Sentry.withProfiler(App)
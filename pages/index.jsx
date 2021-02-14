import {
  NextHead,
  Landing,
  About,
  Services,
  Contact,
  Footer
} from '../components'

export default function Home() {
  return (
    <div className='container'>
      <NextHead />
      <Landing />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

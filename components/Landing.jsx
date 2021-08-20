import { Header } from '../components'
import { Zoom } from 'react-reveal'

export const Landing = () => {
  return (
    <div id="landing" className='landing'>
      <Header />
      <main>
        <div>
          <Zoom ssrFadeout>
            <h1>
             Digital Marketing Agency Mysore | Netspiders
            </h1>
          <p>
          Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network, being the best didital marketing agency in mysore, we offer customized service to enhance our clients growth in the digital platforms.
          </p>
          </Zoom>
        </div>
        <Zoom ssrFadeout>
        <img className="landing-image" src="web-development.svg" alt="Digital Marketng and Web Development"/>
        </Zoom>
      </main>
    </div>
  )
}

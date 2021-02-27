import {
  Header
} from '../components'

export const Landing = () => {
  return (
    <div id="landing" className='landing'>
      <Header />
      <main>
        <div>
          <h1>
            DIGITAL MARKETING & <br />
            WEB DEVELOPMENT COMPANY
          </h1>
          <p>
          Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network.
          </p>
        </div>
        <img className="landing-image" src="web-development.svg" alt="Digital Marketng and Web Development"/>
      </main>
    </div>
  )
}

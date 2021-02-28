import Bounce from 'react-reveal/Bounce'

export const About = () => {
  return (
    <div className="about" id="about">
      <img className="blur-img" src="about.svg" alt="About Net Spiders" />
      <Bounce ssrFadeout>
        <img src="about.svg" alt="About Net Spiders" />
      </Bounce>
      <div className="content">
        <Bounce ssrFadeout>
          <h2>
            About Us
        </h2>
        <p>
          We are a Bangalore-based start-up that offers Digital Marketing & Web Development services. Many of the world's fastest-growing brands, as well as many small and medium-sized firms, have benefited from our assistance.
        </p>
        <p>
          To ensure that you are confident that we are the best solution for you, we give a complete money return guarantee on our job. In addition to the most popular labels online, we have direct experience in an overwhelming range of industry categories. There is also a strong chance that we have time-tested familiarity with it or a very close experience, regardless of what you are offering.
        </p>
        <p>
          Imagination may be an ambiguous, fuzzy job, but you need to know that the material is being done in the most competent way possible while your money is on the line. That's why each of our protocols were thoroughly reported and regularly implemented, guaranteeing the timeliness, accuracy and progress of each project.
        </p>
        <p>
          We serve as an extension of your marketing department helping you meet the strategic goals of your organisation. That said, we control all of their contact needs with some of our consumers, acting as their whole marketing department.
        </p>
        </Bounce>
      </div>
    </div>
  )
}

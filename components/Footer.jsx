import { servicesContent } from "../utils/content"
import { Social } from "./Social"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Our Services</h2>
        <div className="footer-links">
          <div>
            {servicesContent.map((serv, i) => i < 4 &&
            <a href={`#${serv.title}`} key={serv.title}>
                {serv.title}
              </a>)}
          </div>
          <div>
            {servicesContent.map((serv, i) => i > 3 && i < 8 &&
            <a href={`#${serv.title}`} key={serv.title}>
                {serv.title}
              </a>)}
          </div>
          <div>
            {servicesContent.map((serv, i) => i > 7 && i < 12 &&
            <a href={`#${serv.title}`} key={serv.title}>
                {serv.title}
              </a>)}
          </div>
          <div>
            {servicesContent.map((serv, i) => i > 11 && i < 16 &&
            <a href={`#${serv.title}`} key={serv.title}>
                {serv.title}
              </a>)}
          </div>
          {/* <div>
            <h2>Contact Us</h2>
            {[...new Array(5)].map((_, i) => <a key={i} className="service">
              {i+1}
              </a>)}
          </div> */}
        </div>
        <Social />
        <h5> Copyrights © 2021 <a href="https://www.netspiders.in">Net Spiders</a>.
          All rights reserved </h5>
      </div>
    </div>
  )
}

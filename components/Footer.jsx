import { Social } from "./Social"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div>
            <h2>Services</h2>
            {[...new Array(5)].map((_, i) => <a key={i} className="service">
              {i+1}
              </a>)}
          </div>
          <div>
            {[...new Array(5)].map((_, i) => <a key={i} className="service">
              {i+1}
              </a>)}
          </div>
          <div>
            {[...new Array(5)].map((_, i) => <a key={i} className="service">
              {i+1}
              </a>)}
          </div>
          <div>
            <h2>Contact Us</h2>
            {[...new Array(5)].map((_, i) => <a key={i} className="service">
              {i+1}
              </a>)}
          </div>
        </div>
        <Social />
        <h5> Copyrights © 2021 <a href="https://www.netspiders.in">Net Spiders</a>.
          All rights reserved </h5>
      </div>
    </div>
  )
}

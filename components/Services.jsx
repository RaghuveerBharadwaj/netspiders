import { servicesContent } from "../utils/content"

export const Services = () => {
  return (
    <div className="services" id="services">
      <div className="service-header">
        <h2>Our Services</h2>
        <p>We provide wide range of services from Web Development to Digital Marketing Services</p>
      </div>
      <div className="all-services">
        {servicesContent.map((service, i) =>
        <div key={service.title} className="service">
          <span id={service.title} />
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>)}
      </div>
      <svg className="curve" width="100%" height="100%" viewBox="0 0 1440 73" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-370 43.668C219.2 -85.732 674 112.668 1550 12.668V72.668H-366.8L-370 43.668Z" fill="white" />
      </svg>
    </div>
  )
}

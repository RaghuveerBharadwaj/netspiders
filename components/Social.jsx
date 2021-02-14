const socialIcons = [
  { url: "https://m.facebook.com/raghu.veer.73", icon: <img src='/social/facebook.svg' /> },
  { url: "https://www.linkedin.com/in/raghuveerbharadwaj/", icon: <img src='/social/linkedin.svg' /> },
  { url: "mailto:raghuveer275@gmail.com", icon: <img src='/social/mail.svg' /> },
  { url: "https://t.me/Cyclopzz", icon: <img src='/social/telegram.svg' /> },
  { url: "https://wa.me/+918747899591", icon: <img src='/social/whatsapp.svg' /> },
]

export const Social = () => {
  return (
    <div className="social">
      {socialIcons.map((social, i) => <a
        key={i}
        rel="noopener"
        target="_blank"
        href={social.url}
        className="social-link"
      >
        {social.icon}
      </a>)}
    </div>
  )
}

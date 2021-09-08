import Head from 'next/head'
import React from 'react'

export const NextHead = () => {
  return (
    <Head>
      <title>Digital Marketing Agency Mysore | Net Spiders </title>
      <meta name="description" content="Best digital marketing agency in Mysore. We provider-SEO services, PPC services, Social media marketing and Web design and development services." />
      <link rel="icon" href="/favicon.ico" />
      {/* Canonical */}
      <link rel="canonical" href="https://netspiders.in/" />

      {/* OG Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Helping Business to Succeed Online - Net Spiders" />
      <meta property="og:description" content="Best digital marketing agency in Mysore. We provider-SEO services, PPC services, Social media marketing and Web design and development services." />
      <meta property="og:url" content="https://netspiders.in/" />
      <meta property="og:site_name" content="Net Spiders" />
      <meta property="og:image" content="https://netspiders.in/logo.png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="Helping Business to Succeed Online - Net Spiders" />
      <meta name="twitter:description" content="Best digital marketing agency in Mysore. We provider-SEO services, PPC services, Social media marketing and Web design and development services." />
      <meta name="twitter:title" content="Best Website Development Company in Mysore - Web Designer in Mysore" />
      <meta name="twitter:site" content="https://netspiders.in/" />
      <meta name="twitter:image" content="https://netspiders.in/logo.png" />

      {/* Schema.org Codes */}
      <script type="application/ld+json">
        {`
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Net Spiders",
          "url": "https://netspiders.in/",
          "potentialAction": {
          "@type": "SearchAction",
          "target": "https://netspiders.in//index.com{search_term_string}",
          "query-input": "required name=search_term_string"
        `}
      </script>

      <meta name="google-site-verification" content="sScjrwL9_XG827P0Sl_odbasOi6MBv2qhCL8M5rLLac" />
      <script src="https://www.googletagmanager.com/gtag/js?id=G-M9QT9EH3PS" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M9QT9EH3PS');
        `}
      </script>
    </Head>
  )
}

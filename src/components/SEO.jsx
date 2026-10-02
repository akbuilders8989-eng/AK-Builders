import { useEffect } from 'react'

const SITE_URL = 'https://ak-builders.in'

function SEO({
  title = 'AK BUILDERS | Premium Construction & Architecture',
  description = 'AK BUILDERS provides residential and commercial construction, architecture, renovation, and remodeling services across Chennai and Tiruvallur, Tamil Nadu.',
  path = '/',
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`

    document.title = title

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`)

      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        document.head.appendChild(element)
      }

      element.setAttribute('href', href)
    }

    setMeta('name', 'description', description)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:image', `${SITE_URL}/images/ak-logo.png`)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', `${SITE_URL}/images/ak-logo.png`)

    setLink('canonical', url)

    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="ak-builders"]',
    )

    if (existingSchema) {
      existingSchema.remove()
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ConstructionCompany',
      name: 'AK BUILDERS',
      url: SITE_URL,
      logo: `${SITE_URL}/images/ak-logo.png`,
      image: `${SITE_URL}/images/ak-logo.png`,
      description,
      email: 'hello@ak-builder.in',
      telephone: ['+91 63802 24982', '+91 99409 01290'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '204, Gundu Malli St, Poonga Nagar, Tiruvallur, Kakkalur',
        addressLocality: 'Tiruvallur',
        addressRegion: 'Tamil Nadu',
        postalCode: '602001',
        addressCountry: 'IN',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Chennai',
        },
        {
          '@type': 'City',
          name: 'Tiruvallur',
        },
      ],
      sameAs: [
        'https://www.youtube.com/@AKBuildersOfficial',
        'https://www.instagram.com/ak_builders_2020',
      ],
    }

    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.setAttribute('data-seo-schema', 'ak-builders')
    schemaScript.textContent = JSON.stringify(schema)

    document.head.appendChild(schemaScript)
  }, [title, description, path])

  return null
}

export default SEO

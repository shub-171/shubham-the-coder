import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shubham The Coder | Web Developer',
  description: 'Explore free frontend codes, templates, and web development resources. Discover hand-picked Amazon deals and discounts, get 20% off on Hostinger hosting, and explore web development services. Learn frontend and WordPress development through our YouTube channel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Explore free frontend codes, templates, and web development resources. Discover hand-picked Amazon deals and discounts, get 20% off on Hostinger hosting, and explore web development services. Learn frontend and WordPress development through our YouTube channel." />
        <meta name="keywords" content="frontend codes, templates, web development resources, Amazon deals, discounts, Hostinger hosting, web development services, frontend development, WordPress development, YouTube tutorials" />
        <link rel="canonical" href="https://shubhamthecoder.vercel.app" />

        <meta property="og:title" content="Shubham The Coder | Web Developer" />
        <meta property="og:description" content="Explore free frontend codes, templates, and web development resources. Discover hand-picked Amazon deals and discounts, get 20% off on Hostinger hosting, and explore web development services. Learn frontend and WordPress development through our YouTube channel." />
        <meta property="og:image" content="./opengraph-image.png" />
        <meta property="og:url" content="https://shubhamthecoder.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shubham The Coder | Web Developer" />
        <meta name="twitter:description"
          content="Explore free frontend codes, templates, and web development resources. Discover hand-picked Amazon deals and discounts, get 20% off on Hostinger hosting, and explore web development services. Learn frontend and WordPress development through our YouTube channel." />
        <meta name="twitter:image" content="./twitter-image.png" />
        <meta name="twitter:url" content="https://shubhamthecoder.vercel.app" />

        <meta name="google-site-verification" content="5_7gNHePQh_Pa2pc4MluiFJEF4WAgp__0WMJg71wg_Q" />
        <meta name="robots" content="index, follow" />
        <title>Shubham The Coder | Web Developer</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

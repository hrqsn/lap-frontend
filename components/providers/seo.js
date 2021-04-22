import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Lap | Hal Sakuragi',
  description: 'サイトに設置できる魔法の拍手ボタン👏',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://lap.halsakuragi.com',
    site_name: 'Lap | Hal Sakuragi',
    title: 'Lap | Hal Sakuragi',
    description: 'サイトに設置できる魔法の拍手ボタン👏',
    images: [
      {
        url: 'https://halsakuragi.com/img/cover.png',
        alt: 'Hal Sakuragi'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  }
}

export default function Seo () {
  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='https://halsakuragi.com/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='https://halsakuragi.com/favicon//favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='https://halsakuragi.com/favicon//favicon-16x16.png' />
        <link rel='icon' type='image/png' href='https://halsakuragi.com/favicon/android-chrome-256x256.png' sizes='256x256' />
        <link rel='manifest' href='https://halsakuragi.com/favicon/site.webmanifest' />
      </Head>
    </>
  )
}

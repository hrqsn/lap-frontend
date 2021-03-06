import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Lap - 感謝の気持ちを贈る、もらう',
  description: 'サイトに設置できる魔法の拍手ボタン👏',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://lap.halsakuragi.com',
    site_name: 'Lap',
    title: 'Lap - 感謝の気持ちを贈る、もらう',
    description: 'サイトに設置できる魔法の拍手ボタン👏',
    images: [
      {
        url: 'https://lap.halsakuragi.com/img/cover.png',
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
        <link rel='apple-touch-icon' href='https://lap.halsakuragi.com/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='https://lap.halsakuragi.com/favicon//favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='https://lap.halsakuragi.com/favicon//favicon-16x16.png' />
        <link rel='icon' type='image/png' href='https://lap.halsakuragi.com/favicon/android-chrome-256x256.png' sizes='256x256' />
        <link rel='manifest' href='https://lap.halsakuragi.com/favicon/site.webmanifest' />
      </Head>
    </>
  )
}

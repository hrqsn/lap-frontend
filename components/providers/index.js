import Seo from './seo'

export default function Providers ({ children }) {
  return (
    <>
      <Seo />
      {children}
    </>
  )
}

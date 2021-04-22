import Link from 'next/link'

export default function Header () {
  return (
    <>
      <header className='max-w-screen-lg mx-auto h-24 flex justify-between items-center px-4'>
        <Link href='/'>
          <a>
            <img src='/img/logo.svg' alt='Hal Sakuragi' className='h-9' />
          </a>
        </Link>
        <nav className='text-gray-600'>
          <span className='text-sm text-gray-600 mr-3'>by</span>
          <a href='https://halsakuragi.com/' className='btn btn-sm' target='_blank' rel='noopener noreferrer'>Hal Sakuragi</a>
        </nav>
      </header>
    </>
  )
}

export default function Footer () {
  return (
    <>
      <footer className='max-w-screen-sm mx-auto px-4'>
        <div className='flex flex-col justify-center space-y-6 pt-64 pb-24'>
          <span className='text-center text-sm text-gray-500'>©︎ {new Date().getFullYear()} Hal Sakuragi.</span>
        </div>
      </footer>
    </>
  )
}

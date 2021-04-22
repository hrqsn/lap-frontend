import { X } from 'react-feather'

const Modal = ({ setIsModalOpen, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex md:items-center justify-center md:h-full p-4 text-center sm:items-start h-auto'>
            <div className='fixed inset-0 animation-bg'>
              <div className='absolute inset-0 bg-white' />
            </div>

            <header className='absolute top-0 right-0 m-24'>
              <div className='w-full inline-flex text-gray-600'>
                <a className='ml-auto' onClick={() => setIsModalOpen(false)}><X /></a>
              </div>
            </header>

            <div className='animation-modal inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all max-w-screen-md w-full p-4'>
              <div className='grid grid-cols-7 gap-x-12'>
                <div className='col-span-7 sm:col-span-3'>
                  <div className='color-preview bg-black rounded-md w-full h-full'></div>
                </div>
                <div className='col-span-7 sm:col-span-4 pt-8'>
                  <h1 className='text-xl font-bold'>テーマカラーを編集</h1>
                  <div className='mt-8 flex space-x-6'>
                    <div>
                      <p className='text-sm'>テーマ色</p>
                      <div className='color-picker'>#3730A3</div>
                    </div>
                    <div>
                      <p className='text-sm'>背景色</p>
                      <div className='color-picker'>#3730A3</div>
                    </div>
                    <div>
                      <p className='text-sm'>文字色</p>
                      <div className='color-picker'>#3730A3</div>
                    </div>
                  </div>
                  <button className='mt-10 btn btn-lg btn-primary'>決定して生成する</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

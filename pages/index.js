import Header from '@/components/header'
import Footer from '@/components/footer'
import { useEffect, useState, useRef } from 'react'
import axios from '@/lib/axios'
import { SERVER_BASE_URL } from '@/lib/utils/constants'
import { Copy } from 'react-feather'

export default function Home () {
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [uid, setUid] = useState(null)
  const [code, setCode] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const copied = useRef(null)

  const subscription  = async () => {
    setUid(null)
    setCode(null)
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(`${SERVER_BASE_URL}/new`)
      if (res.data.success) {
        setUid(res.data.uid)
        setLoading(false)
        setIsEditorOpen(true)
        setTimeout(() => scrollTo({
          left: 0,
          top: 640,
          behavior: 'smooth'}), 240)
        generateCode(res.data.uid)
        return
      }
    } catch (error) {
      console.error(error)
      setError(error.message)
      setLoading(false)
      return
    }
  }

  const generateCode = (_uid) => {
    const code = `
      <div class="c-lap-container" data-lap-id="${_uid}" data-lap-bg="ffffff" data-lap-color="6233A9" data-lap-textColor="6233A9"><script src="https://storage.googleapis.com/halsakuragi/lap/1.0.2/widget.min.js"></script></div>`
    return setCode(code)
  }

  const copyCode = () => {
    copied.current.classList.add('visible')
    setTimeout(() => copied.current.classList.remove('visible'), 2000)
    navigator.clipboard.writeText(code)
  }

  return (
    <>
      <Header />

      <main className='max-w-screen-md mx-auto px-4'>
        <div className='mt-24 sm:mt-32'>
          <h1 className='text-2xl sm:text-4xl font-bold text-primary'>感謝の気持ちを送る、もらう</h1>
          <p className='mt-6 text-gray-800'>サイトに設置できる拍手ボタン「Lap」を用意しました。<br />生成されたコードをHTMLに貼り付けるだけで、訪問者からフィードバック👏を受け取れます。</p>
          {error && <p className='text-center mt-8 text-red-600'>{error}</p>}
          <div className='mt-10'>
            <button className={`btn-lg btn-primary ${loading && 'btn-loading'}`} onClick={() => subscription()}>{loading ? 'コードを生成する...' : 'コードを生成する'}</button>
          </div>
        </div>
        {isEditorOpen && (
          <div className='bg-gray-100 p-8 sm:p-20 md:-mx-20 mt-64 rounded-md'>
            <h1 className='text-xl font-bold'>コードを生成しました</h1>
            <p className='mt-6 leading-normal'>コードを生成しました。<br />このコードをコピーして、HTMLのbodyタグ内に貼り付ければ設置完了です。<br />必要に応じて、<span className='text-primary underline'>テーマカラーを編集</span> できます。</p>
            <a href="https://halsakuragi.com/blog/lap" target='_blank' rel='noopener noreferrer' className='inline-block mt-4 text-sm text-primary'>詳しい設置方法はこちら</a>
            <div className='mt-8'>
              <div className="mt-1 flex rounded-md shadow-sm">
                <div className="flex-1 min-w-0 block w-full px-4 py-2.5 rounded-none rounded-l-md sm:text-sm bg-white text-gray-600 word-clamp">{code}</div>
                <div className='relative' onClick={() => copyCode()}>
                  <span onClick={() => copyCode()} className="relative cursor-pointer w-full h-full z-10 inline-flex items-center px-10 rounded-r-md bg-primary text-white sm:text-sm"><span className='hidden sm:block'>コードをコピー</span><span className='block sm:hidden'>コピー</span></span>
                  <div className='copied' ref={copied}>コピーしました！</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className='lap-try'>
        <img src='/img/try.svg' />
      </div>

      <Footer />
    </>
  )
}

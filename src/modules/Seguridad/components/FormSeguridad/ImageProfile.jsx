import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'antd'

const ImageProfile = ({ valueInputPhoto, src }) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <Image className='h-full' width={200} height={230} src={src} />
      <div
        className='flex w-full border-1 border-[#ffffff] cursor-pointer'
        onClick={() => alert('gola')}
      >
        {/* <input type='file' /> */}
        <div className='w-60 bg-[#fff] outline-none'>{valueInputPhoto}</div>
        <div className='p-1 px-3'>
          <FontAwesomeIcon icon={faSearch} className='text-sm' />
        </div>
      </div>
    </div>
  )
}
export default ImageProfile

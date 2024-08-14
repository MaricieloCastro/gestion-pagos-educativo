import { Image } from 'antd'

const ImageProfile = (props) => {
  const { src } = props

  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <Image className='h-full' width={200} height={230} src={src} />
      <div>
        <input type='file' />
      </div>
    </div>
  )
}
export default ImageProfile

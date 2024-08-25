import { useRef, useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'antd'
import PropTypes from 'prop-types'

const ImageProfile = ({ src, edit, setFotoUpload, editAdmin }) => {
  const fileInputRef = useRef(null)

  const [photographyDirection, setPhotographyDirection] = useState(null)
  const [urlImage, setUrlImage] = useState()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]

    setFotoUpload(file)

    if (file) {
      setPhotographyDirection(file.name)

      const url = URL.createObjectURL(file)
      setUrlImage(url)
    }
  }

  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <Image
        className='h-full'
        width={200}
        height={230}
        src={(edit || editAdmin) && !photographyDirection ? src : urlImage}
      />
      <div
        className='flex w-full border-1 border-[#ffffff] cursor-pointer'
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type='file'
          name='ruta_fotografia'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <div
          className={`flex overflow-hidden px-2 ${
            edit || editAdmin ? 'justify-center' : 'justify-start'
          } items-center text-gray-400 w-60 bg-[#fff] outline-none`}
        >
          {edit || (editAdmin && !photographyDirection)
            ? 'Cambiar foto'
            : photographyDirection}
        </div>
        <div className='flex justify-center items-center p-3 px-3'>
          <FontAwesomeIcon icon={faSearch} className='text-sm' />
        </div>
      </div>
    </div>
  )
}

export default ImageProfile

ImageProfile.propTypes = {
  src: PropTypes.string,
  edit: PropTypes.bool,
  setFotoUpload: PropTypes.func,
  editAdmin: PropTypes.bool
}

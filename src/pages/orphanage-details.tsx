import { ReactElement } from 'react'
import { ArrowLeft, X } from 'react-feather'

type AppBarProps = {
  hideBackButton?: boolean
  rightElement?: ReactElement
  title: string
}

function AppBar({ hideBackButton = false, rightElement, title }: AppBarProps) {
  return (
    <div className="border-b-2 px-6">
      <div className="flex items-center justify-between py-6">
        {!hideBackButton && <ArrowLeft />}

        <span className="flex flex-1 justify-center text-base font-medium ">
          {title}
        </span>

        {!!rightElement ? <X /> : <span className="h-6 w-6" />}
      </div>
    </div>
  )
}

type Image = {
  src: string
  alt: string
}

type SliderProps = {
  images: Image[]
}

function Slider({ images }: SliderProps) {
  return (
    <div className="h-64 overflow-y-hidden">
      <div className="flex gap-x-1 ">
        {images.map(({ src, alt }) => (
          <img
            className="w-96"
            key={src}
            src={src}
            alt={alt}
          />
        ))}
      </div>
    </div>
  )
}

const images = [
  {
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/12e41469370391.5b7eaa7f6728a.jpg',
    alt: 'kids drinking',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.tsbQJPlr-5RrhyhjOrrW8QHaE8?pid=ImgDet&rs=1',
    alt: 'kids smiling',
  },
]

export function OrphanageDetails() {
  return (
    <>
      <AppBar title="Orfanato" />
      <Slider images={images} />
    </>
  )
}

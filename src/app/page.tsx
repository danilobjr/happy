'use client'

// import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'
import { MapLoading } from '@components'

const Map = dynamic(
  () => import('../components/map/map').then((mod) => mod.Map),
  { loading: () => <MapLoading />, ssr: false }
)

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Map />
}

'use client'

import dynamic from 'next/dynamic'
import { MdAdd } from 'react-icons/md'
import { MapLoading } from '@components'

const Map = dynamic(
  () => import('../components/map/map').then((mod) => mod.Map),
  { loading: () => <MapLoading />, ssr: false }
)

export default function Home() {
  return (
    <main className="relative h-full overflow-hidden">
      <Map />
      <div className="absolute bottom-0 z-top w-full px-6 pb-8">
        <div className="flex h-14 overflow-hidden rounded-20 bg-white pl-6">
          <span className="flex flex-1 items-center font-medium text-complements">
            2 orphanages found
          </span>
          <button className="flex w-14 items-center justify-center rounded-20 bg-blue">
            <MdAdd color="white" size={24} />
          </button>
        </div>
      </div>
    </main>
  )
}

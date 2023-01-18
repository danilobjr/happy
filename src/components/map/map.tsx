import { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function Map() {
  // TODO memoize this
  // FIXME set anchor position
  const markerIcon = icon({ iconUrl: '/marker.png' })

  return (
    <MapContainer
      className="absolute h-full w-full"
      center={[51.505, -0.09]}
      zoom={13}
    >
      <TileLayer
        attribution={
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={markerIcon}>
        <Popup>This is a popup</Popup>
      </Marker>
    </MapContainer>
  )
}

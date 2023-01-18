import { icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function Map() {
  // TODO memoize this
  // FIXME set anchor position
  const markerIcon = icon({ iconUrl: '/marker.png' })

  return (
    // TODO use mapbox instead?
    <MapContainer
      className="absolute h-full w-full"
      center={[51.505, -0.09]}
      zoom={13}
    >
      <TileLayer
        attribution={
          // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          '&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        }
        url={process.env.NEXT_PUBLIC_MAPBOX_TILE_SERVICE || ''}
      />
      <Marker position={[51.505, -0.09]} icon={markerIcon}>
        <Popup>This is a popup</Popup>
      </Marker>
    </MapContainer>
  )
}

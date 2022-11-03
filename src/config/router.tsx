import { createBrowserRouter } from 'react-router-dom'
import { OrphanageDetails } from '../pages'

export const router = createBrowserRouter([
  {
    path: 'orphanages/:id',
    element: <OrphanageDetails />,
  },
])

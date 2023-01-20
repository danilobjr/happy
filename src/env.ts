import { isNill } from '@utils'

const getEnvVar = (varValue: string | undefined, varName: string): string => {
  if (isNill(varValue)) {
    throw new Error(`Value not found for environment variable '${varName}'`)
  }

  return varValue as string
}

export const env = {
  mapboxTileServerUrl: getEnvVar(
    process.env.NEXT_PUBLIC_MAPBOX_TILE_SERVER_URL,
    'NEXT_PUBLIC_MAPBOX_TILE_SERVER_URL'
  ),
}

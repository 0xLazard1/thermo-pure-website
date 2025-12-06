import { ImageResponse } from 'next/og'

export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: '#0369a1',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '15%',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        TP
      </div>
    ),
    {
      ...size,
    }
  )
}

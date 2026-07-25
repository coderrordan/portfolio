import { EUROPE_COUNTRY_PATHS } from '../../data/europe-country-paths'

const countries = [
  { code: 'IT', delay: '0.6s' },
  { code: 'ES', delay: '1.6s' },
  { code: 'DE', delay: '2.4s' },
  { code: 'SE', delay: '3.2s' },
  { code: 'FR', delay: '4s' },
  { code: 'BE', delay: '4.8s' },
  { code: 'NL', delay: '5.6s' },
  { code: 'PL', delay: '6.4s' },
  { code: 'GB', delay: '7.2s' },
]

const hubs = [
  { id: 'turin', x: 536, y: 494, primary: true },
  { id: 'milan', x: 551, y: 485 },
  { id: 'bologna', x: 564, y: 508 },
  { id: 'rome', x: 574, y: 535, primary: true },
  { id: 'naples', x: 590, y: 553 },
  { id: 'paris', x: 470, y: 455, primary: true },
  { id: 'berlin', x: 558, y: 395, primary: true },
  { id: 'madrid', x: 395, y: 555, primary: true },
  { id: 'stockholm', x: 590, y: 234, primary: true },
  { id: 'brussels', x: 454, y: 405 },
  { id: 'amsterdam', x: 462, y: 382 },
  { id: 'warsaw', x: 680, y: 395 },
  { id: 'london', x: 370, y: 350, primary: true },
]

const routes = [
  { from: 'turin', to: 'madrid', duration: 4.8, offset: -2.1, primary: true },
  { from: 'milan', to: 'berlin', duration: 4.2, offset: -3.6, primary: true },
  { from: 'bologna', to: 'stockholm', duration: 5.8, offset: -1.8, primary: true },
  { from: 'rome', to: 'paris', duration: 4.6, offset: -3.2, primary: true },
  { from: 'milan', to: 'brussels', duration: 3.6, offset: -1.4, primary: true },
  { from: 'turin', to: 'amsterdam', duration: 4, offset: -2.8, primary: true },
  { from: 'bologna', to: 'warsaw', duration: 5.2, offset: -4.1, primary: true },
  { from: 'rome', to: 'london', duration: 5.4, offset: -2.5, primary: true },
  { from: 'turin', to: 'milan', duration: 3.2, offset: -1.9, primary: true },
  { from: 'milan', to: 'bologna', duration: 3.5, offset: -0.8 },
  { from: 'bologna', to: 'rome', duration: 3.9, offset: -2.7 },
  { from: 'rome', to: 'naples', duration: 3.3, offset: -1.2 },
  { from: 'naples', to: 'turin', duration: 4.4, offset: -3.4 },
  { from: 'paris', to: 'madrid', duration: 5.1, offset: -1.7 },
  { from: 'berlin', to: 'paris', duration: 4.5, offset: -3.9 },
  { from: 'paris', to: 'london', duration: 3.7, offset: -2.2 },
  { from: 'london', to: 'amsterdam', duration: 4.1, offset: -0.9 },
  { from: 'amsterdam', to: 'berlin', duration: 3.8, offset: -2.6 },
  { from: 'berlin', to: 'warsaw', duration: 4, offset: -1.5 },
  { from: 'warsaw', to: 'stockholm', duration: 4.7, offset: -3.1 },
  { from: 'brussels', to: 'paris', duration: 3.4, offset: -1.1 },
  { from: 'madrid', to: 'london', duration: 5.6, offset: -4.3 },
]

const hubById = Object.fromEntries(hubs.map((hub) => [hub.id, hub]))

function routePath(route, index) {
  const start = hubById[route.from]
  const end = hubById[route.to]
  const bend = index % 2 === 0 ? -1 : 1
  const distance = Math.hypot(end.x - start.x, end.y - start.y)
  const controlX = (start.x + end.x) / 2 + bend * Math.min(42, distance * 0.16)
  const controlY = (start.y + end.y) / 2 - Math.min(58, distance * 0.2)
  return `M${start.x} ${start.y} Q${controlX} ${controlY} ${end.x} ${end.y}`
}

export default function EuropeNetwork() {
  return (
    <div className="europe-network" aria-hidden="true">
      <svg className="europe-network__map" viewBox="90 0 880 684" role="presentation">
        <defs>
          <pattern id="ivory-map-dots" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="2.2" cy="2.2" r="1.55" />
          </pattern>
          <pattern id="active-country-dots" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="2.2" cy="2.2" r="1.8" />
          </pattern>
          <mask id="europe-land-mask">
            <image href="/images/europe-map.svg" width="1000" height="684" />
          </mask>
          <filter id="network-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g mask="url(#europe-land-mask)">
          <rect width="1000" height="684" fill="url(#ivory-map-dots)" className="europe-network__dotted-land" />
        </g>

        <g className="active-countries">
          {countries.map((country) => (
            <path
              key={country.code}
              d={EUROPE_COUNTRY_PATHS[country.code]}
              className="country-active"
              data-country={country.code}
              style={{ '--country-delay': country.delay }}
            />
          ))}
        </g>

        <g className="continuous-routes">
          {routes.map((route, index) => {
            const path = routePath(route, index)
            return (
              <g key={`${route.from}-${route.to}`} className={`continuous-route${route.primary ? ' continuous-route--primary' : ''}`}>
                <path d={path} className="network-route" />
                <g className="network-package">
                  <rect x="-3.5" y="-3.5" width="7" height="7" rx="0.8" />
                  <path d="M-3.5 -1h7M0-3.5v2.5" />
                  <animateMotion
                    path={path}
                    dur={`${route.duration}s`}
                    begin={`${route.offset}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyPoints="0;0;1;1"
                    keyTimes="0;0.2;0.5;1"
                  />
                  <animate
                    attributeName="opacity"
                    dur={`${route.duration}s`}
                    begin={`${route.offset}s`}
                    repeatCount="indefinite"
                    values="0;0;1;1;0;0"
                    keyTimes="0;0.19;0.2;0.48;0.5;1"
                  />
                </g>
              </g>
            )
          })}
        </g>

        <g className="network-hubs">
          {hubs.map((hub) => (
            <g
              key={hub.id}
              className={`network-hub${hub.id === 'turin' ? ' turin-origin' : ''}${hub.primary ? ' network-hub--primary' : ''}`}
              transform={`translate(${hub.x} ${hub.y})`}
            >
              <circle r="10" className="network-hub__glow" filter="url(#network-glow)" />
              <circle r="3.2" className="network-hub__core" />
              <circle r="7" className="network-hub__ring" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

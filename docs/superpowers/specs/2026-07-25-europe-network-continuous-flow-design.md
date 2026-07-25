# Europe Network Continuous Flow Design

## Goal

Replace the staged batch animation with a living European commerce network. The map must sit farther right, show the full European context as a light ivory dotted silhouette, activate markets with whole-country orange fades, and then remain in a stable state while packages keep moving between Italian and European hubs.

## Visual Direction

- The map is an unframed background layer anchored farther to the right than the current version.
- Europe remains fully legible through an ivory dot pattern. It must feel lighter and warmer than the current solid grey map.
- The left readability gradient protects the hero copy without turning the map into a panel.
- Italy and activated countries use a warm orange overlay. Each country fades as one shape; there are no stripes, stepped fills or batch reveals.
- Northern and eastern Europe remain visible as dotted context even when they are not activated.

## Motion Model

The motion has two phases but no looping reset.

1. On entry, the dotted map fades in and the primary markets activate at irregular offsets over roughly ten seconds.
2. The network reaches a permanent active state. Packages continue indefinitely on differently timed routes between Turin, other Italian cities and European hubs.

Packages do not move in synchronized batches. Each route has a distinct duration, negative initial offset and cadence, producing an organic distributed flow. Some routes originate in Turin, while others connect already active hubs to each other. The route set includes domestic Italian movement as well as cross-border movement.

## Implementation

- Keep `EuropeNetwork.jsx` as the visual component.
- Use the full local Europe SVG only as a mask for an ivory dot pattern.
- Use the extracted country paths for whole-country orange activation.
- Replace the current package and reveal generators with a fixed deterministic route network whose varied timings appear random without runtime randomness or hydration instability.
- Run all package motion indefinitely. Country and map entry animations run once with `forwards` fill mode.
- Under reduced motion, show the final stable map and hide moving packages.
- On mobile, reduce route and package density while preserving the same stable network concept.

## Acceptance Criteria

- The map is visibly farther right and does not compete with the claim.
- All of Europe is represented by light ivory dots rather than solid grey fills.
- Countries fade orange as complete shapes with no segmented reveal.
- The animation never visibly restarts or clears the map.
- Packages move continuously and asynchronously between multiple Italian and European points.
- Mobile shows fewer routes and packages with no horizontal overflow.

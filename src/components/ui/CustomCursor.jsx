export default function CustomCursor() {
  return (
    <>
      <div
        id="cursor"
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent rounded-full pointer-events-none"
        style={{
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        id="cursor-ring"
        className="fixed top-0 left-0 w-10 h-10 border border-accent rounded-full pointer-events-none"
        style={{
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
          opacity: 0.5,
        }}
      />
    </>
  )
}

export default function MediaFrame({
  label,
  caption,
  ratio = '16 / 9',
  priority = false,
  src,
  alt,
  className = '',
}) {
  return (
    <figure className={`media-frame overflow-hidden border border-white/10 bg-[#0b0b0a] ${className}`}>
      <div className="media-frame__bar flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.09em] text-white/60">
        <span className="media-frame__label truncate">{label}</span>
        <span className="media-frame__marker flex shrink-0 items-center" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#e8720c]" />
        </span>
      </div>

      <div className="media-frame__viewport relative grid place-items-center overflow-hidden bg-black/20" style={{ aspectRatio: ratio }}>
        <img
          className="media-frame__image h-full w-full object-contain"
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>

      {caption && (
        <figcaption className="media-frame__caption border-t border-white/10 px-4 py-3 text-xs leading-5 text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

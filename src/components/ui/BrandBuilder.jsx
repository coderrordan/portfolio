import { useTranslation } from '../../i18n/useTranslation'

export default function BrandBuilder() {
  const { BRAND_BUILDER } = useTranslation()

  return (
    <div className="brand-builder" aria-hidden="true">
      <div className="brand-builder__bar">
        <span>{BRAND_BUILDER.label}</span>
        <i />
        <strong>{BRAND_BUILDER.status}</strong>
      </div>

      <div className="brand-builder__stage">
        <div className="brand-builder__orbit orbit-one" />
        <div className="brand-builder__orbit orbit-two" />
        <svg className="brand-builder__lines" viewBox="0 0 600 520" preserveAspectRatio="none">
          <path d="M300 260 L110 95 M300 260 L490 95 M300 260 L82 350 M300 260 L518 350 M300 260 L300 455" />
        </svg>

        <div className="brand-builder__core">
          <span>AMZ</span>
          <strong>{BRAND_BUILDER.brand}</strong>
          <i />
        </div>

        {BRAND_BUILDER.modules.map((module, index) => (
          <div key={module} className={`brand-builder__module module-${index + 1}`}>
            <span>0{index + 1}</span>
            <strong>{module}</strong>
          </div>
        ))}

        <div className="brand-builder__market market-one"><i />IT</div>
        <div className="brand-builder__market market-two"><i />EU</div>
        <div className="brand-builder__market market-three"><i />UK</div>
      </div>

      <div className="brand-builder__footer">
        <span>{BRAND_BUILDER.input}</span>
        <strong>{BRAND_BUILDER.output}</strong>
      </div>
    </div>
  )
}

export default function IndustryCardShell({ title, toneClass, Icon, bgImage, children }) {
  const cardStyle = bgImage?.src ? { "--industry-bg-image": `url(${bgImage.src})` } : undefined;

  return (
    <article className={`industryShowcaseCard ${toneClass || ""} ${bgImage ? "hasIndustryBg" : ""}`} style={cardStyle}>
      <div className="industryShowcaseInner">
        <div className="industryShowcaseHead">
          <span className="industryShowcaseLogo" aria-hidden="true">
            <Icon />
          </span>
          <h3 className="industryShowcaseTitle">{title}</h3>
        </div>
        {children}
      </div>
    </article>
  );
}

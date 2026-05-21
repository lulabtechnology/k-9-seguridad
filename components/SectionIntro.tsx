type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionIntro({ eyebrow, title, text, align = 'left' }: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

/* Display heading with a handwritten script overlay (the Q.SOUCE move).
   Each word is wrapped so ScrollFx can slide the words up into view. */

type Props = {
  as?: "h1" | "h2";
  lines: string[];
  script?: string;
  light?: boolean;
  trigger?: "load" | "scroll";
  className?: string;
};

export function Title({ as = "h2", lines, script, light, trigger = "scroll", className = "" }: Props) {
  const Tag = as;
  const cls = ["title", as === "h1" ? "title--hero" : "title--section", light ? "title--light" : "", className].filter(Boolean).join(" ");
  return (
    <Tag className={cls} data-split={trigger}>
      {lines.map((line, i) => {
        const words = line.split(" ");
        return (
          <span key={`${i}-${line}`} className="title__line">
            {words.map((w, j) => (
              <span key={`${j}-${w}`}>
                {j > 0 ? " " : null}
                <span className="title__word">{w}</span>
              </span>
            ))}
          </span>
        );
      })}
      {script ? <span className="title__script">{script}</span> : null}
    </Tag>
  );
}

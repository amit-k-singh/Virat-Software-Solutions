function parsePolicyBlocks(content) {
  const lines = content.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const current = lines[index].trim();

    if (!current || current === "**") {
      index += 1;
      continue;
    }

    if (current.startsWith("### ")) {
      blocks.push({ type: "h3", text: current.slice(4) });
      index += 1;
      continue;
    }

    if (current.startsWith("## ")) {
      blocks.push({ type: "h2", text: current.slice(3) });
      index += 1;
      continue;
    }

    if (current.startsWith("- ")) {
      const items = [];

      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      blocks.push({ type: "ul", items });
      continue;
    }

    const paragraphParts = [current];
    index += 1;

    while (index < lines.length) {
      const next = lines[index].trim();

      if (!next || next === "**" || next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ")) {
        break;
      }

      paragraphParts.push(next);
      index += 1;
    }

    blocks.push({ type: "p", text: paragraphParts.join(" ") });
  }

  return blocks;
}

export default function PolicyFormattedContent({ content }) {
  const blocks = parsePolicyBlocks(content);

  return (
    <article className="policyFormattedContent" aria-label="Policy content">
      {blocks.map((block, blockIndex) => {
        if (block.type === "h2") {
          return <h2 key={`h2-${blockIndex}`}>{block.text}</h2>;
        }

        if (block.type === "h3") {
          return <h3 key={`h3-${blockIndex}`}>{block.text}</h3>;
        }

        if (block.type === "ul") {
          return (
            <ul key={`ul-${blockIndex}`}>
              {block.items.map((item, itemIndex) => (
                <li key={`li-${blockIndex}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={`p-${blockIndex}`}>{block.text}</p>;
      })}
    </article>
  );
}

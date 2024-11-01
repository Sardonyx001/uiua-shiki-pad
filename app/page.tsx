import { createHighlighter } from "shiki";
import { promises as fs } from "fs";

async function CodeBlock() {
  const uiua = JSON.parse(
    await fs.readFile(process.cwd() + "/app/uiua.json", "utf8"),
  );
  const highlighter = await createHighlighter({
    langs: [uiua],
    themes: ["nord"],
  });

  const code = `
[1 5 8 2]
⟜/+ # Sum
⧻   # Length
÷   # Divide`;

  const out = highlighter.codeToHtml(code, {
    lang: "uiua",
    theme: "nord",
  });
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-4xl">
          <CodeBlock />
        </div>
      </main>
    </div>
  );
}

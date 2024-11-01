import { createHighlighter } from "shiki";
import { promises as fs } from "fs";
import { uiua386 } from "./fonts/uiua385";
import Editor from "@/components/editor";
import IDE from "@/components/ide";

async function CodeBlock({ code }: { code: string }) {
  const uiua = JSON.parse(
    await fs.readFile(process.cwd() + "/app/uiua.json", "utf8"),
  );
  const highlighter = await createHighlighter({
    langs: [uiua],
    themes: ["nord"],
  });

  const out = highlighter.codeToHtml(code, {
    lang: "uiua",
    theme: "nord",
  });
  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}

export default function Home() {
  const code = `⧻ #test
[1 5 8 2]
⟜/+ # Sum
⧻   # Length
÷   # Divide`;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className={`text-4xl ${uiua386.className} flex flex-col gap-8`}>
          <p>{code}</p>
          <IDE />
          <CodeBlock code={code} />
        </div>
      </main>
    </div>
  );
}

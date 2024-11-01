"use client";

import Editor from "@monaco-editor/react";

export default function IDE() {
  return (
    <div className="flex justify-center items-start pt-10 h-screen">
      <div className="w-full max-w-4xl p-4 border">
        <Editor
          height="50vh"
          defaultLanguage="javascript"
          defaultValue='Deno.serve(req => new Response("Hello!"));'
        />
      </div>
    </div>
  );
}

"use client";

import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Editor() {
  const [text, setText] = useState("Write code here");
  return (
    <>
      <Textarea
        className="text-4xl"
        placeholder={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

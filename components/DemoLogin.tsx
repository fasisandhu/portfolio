"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

export default function DemoLogin({ user, pass }: { user: string; pass: string }) {
  return (
    <div className="rounded-lg border border-line bg-inset px-3.5 py-3">
      <div className="label mb-2.5">Demo login</div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
        <CopyField label="username" value={user} />
        <span aria-hidden="true" className="text-line-strong">
          /
        </span>
        <CopyField label="password" value={pass} />
      </div>
    </div>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return; // Clipboard blocked — the value is on screen either way.
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label} ${value}`}
      className="group inline-flex items-center gap-2 rounded-md border border-transparent bg-raised px-2 py-1 font-mono text-[0.8125rem] text-text transition-colors hover:border-line-strong"
    >
      <span className="mono select-all">{value}</span>
      <span aria-hidden="true" className={copied ? "text-accent" : "text-dim group-hover:text-muted"}>
        {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      </span>
      <span className="sr-only" role="status">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

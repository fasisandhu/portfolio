import { statSync } from "node:fs";
import path from "node:path";

/**
 * Size of a file in /public, read at build time so the figure on the page can
 * never drift from the file it describes. Returns "" if the file is missing,
 * and the caller omits the meta rather than printing a wrong number.
 */
export function publicFileSize(publicPath: string): string {
  try {
    const bytes = statSync(path.join(process.cwd(), "public", publicPath)).size;
    return `${Math.round(bytes / 1024)} KB`;
  } catch {
    return "";
  }
}

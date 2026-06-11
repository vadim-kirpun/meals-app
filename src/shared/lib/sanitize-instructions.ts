import "server-only";

import { type IFilterXSSOptions, filterXSS } from "xss";

const INSTRUCTIONS_WHITE_LIST: IFilterXSSOptions["whiteList"] = {
  p: [],
  br: [],
  ol: [],
  ul: [],
  li: [],
  strong: [],
  em: [],
  b: [],
  i: [],
  h2: [],
  h3: [],
  blockquote: [],
};

const SANITIZE_OPTIONS: IFilterXSSOptions = {
  whiteList: INSTRUCTIONS_WHITE_LIST,
  stripIgnoreTag: true,
  stripIgnoreTagBody: ["script", "style", "iframe", "object", "embed"],
};

function normalizeInstructionsInput(content: string) {
  const trimmed = content.trim();

  if (!/<[a-z][^>]*>/i.test(trimmed)) {
    return trimmed.replace(/\n/g, "<br>");
  }

  return trimmed;
}

export function getInstructionsTextLength(content: string) {
  const textOnly = filterXSS(content, {
    whiteList: {},
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script", "style"],
  });

  return textOnly.replace(/\s+/g, " ").trim().length;
}

export function sanitizeInstructions(content: string) {
  const normalized = normalizeInstructionsInput(content);

  return filterXSS(normalized, SANITIZE_OPTIONS).trim();
}

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

test("portfolio landing page includes the door entry interaction", () => {
  assert.match(page, /Welcome[\s\S]*to my house/i);
  assert.match(page, /aria-label="Enter Fauzil's portfolio"/);
  assert.match(page, /setEntered\(true\)/);
  assert.match(page, /useGSAP/);
  assert.match(page, /ScrollTrigger/);
  assert.match(page, /landing/);
  assert.doesNotMatch(page, /className="house"/);
});

test("portfolio landing page feels like an editorial home entrance", () => {
  assert.match(page, /className="landing-eyebrow"/);
  assert.match(page, /className="landing-title"/);
  assert.match(page, /className="landing-stage"/);
  assert.match(page, /className="landing-neighborhood"/);
  assert.match(page, /The digital residence of/);
});

test("portfolio landing page shows scattered bouncing technology logos before entry", () => {
  assert.match(page, /className="landing-logo-field"/);
  assert.match(page, /aria-label="Technology logos"/);
  assert.match(page, /landingLogos/);
  assert.match(page, /simpleicons\.org/);
});

test("portfolio landing page ends with a full-width neighborhood instead of a text footer", () => {
  assert.match(page, /className="landing-neighborhood"/);
  assert.match(page, /neighborhood\.png/);
  assert.doesNotMatch(page, /className="landing-details"/);
});

test("portfolio exposes all essential sections on the same page", () => {
  for (const section of ["about", "projects", "experience", "contact"]) {
    assert.match(page, new RegExp(`id="${section}"`));
  }
});

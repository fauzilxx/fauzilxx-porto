# Portfolio home TDD evidence

## Source

Journeys were derived from the request to build Fauzil Azhim's single-page portfolio.

## Guarantees

| # | What is guaranteed | Test command | Type | Result |
| --- | --- | --- | --- |
| 1 | The home includes the welcome heading, an accessible standalone door entry control, smooth scrolling after entry, and a GSAP/ScrollTrigger integration. | `node --test tests/portfolio.test.mjs` | Structural integration | PASS |
| 2 | About, projects, experience, and contact are rendered as sections in the same page. | `node --test tests/portfolio.test.mjs` | Structural integration | PASS |
| 3 | The Next.js app type-checks, lints, and produces a static production build. | `npm.cmd run lint` and `npm.cmd run build` | Build verification | PASS |
| 4 | The entry retains an accessible door control while presenting the editorial welcome title, location, and portfolio identity details. | `node --test tests/portfolio.test.mjs` | Structural integration | PASS |
| 5 | The initial landing view exposes accessible, repeated technology logos that rise from the lower screen before entry. | `node --test tests/portfolio.test.mjs` | Structural integration | PASS |
| 6 | The initial landing replaces its text footer with a full-width neighborhood illustration. | `node --test tests/portfolio.test.mjs` | Structural integration | PASS |

## RED / GREEN evidence

- RED: `node --test tests/portfolio.test.mjs` initially failed because the starter page did not contain the portfolio heading, entry control, scroll behavior, or sections.
- GREEN: the same command passed with 2/2 tests after the portfolio implementation.
- RED (entrance refresh): `node --test tests/portfolio.test.mjs` failed after the new editorial-entry test was added because the required title, stage, and details did not yet exist.
- GREEN (entrance refresh): the same command passed after the landing markup and responsive styling were implemented.
- RED (landing logos): `node --test tests/portfolio.test.mjs` failed after the scattered-logo contract was introduced because no landing logo field existed.
- GREEN (landing logos): the same command passed with 4/4 tests after the repeated animated technology logos were added.
- RED (landing neighborhood): `node --test tests/portfolio.test.mjs` failed because the required full-width neighborhood and footer removal were absent.
- GREEN (landing neighborhood): the same command passed with 5/5 tests after the transparent illustrated streetscape was added.

## Coverage and known gaps

The project has no configured component-test coverage runner. The Node structural tests cover the page contract; the production build, TypeScript check, and ESLint pass. A browser-based interaction test can be added when the visual direction and final portfolio data are ready.

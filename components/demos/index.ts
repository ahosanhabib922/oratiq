/**
 * Demo registry: name → component.
 *
 * Each demo lives in its own file importing from `@/components/ui/*`, so its
 * source reads exactly like code in a consumer's app. The build script copies
 * every demo's source to /demos/<name>.txt, which the docs' Code toggle
 * fetches — one file, rendered and displayed, so they can never drift apart.
 */

import ButtonVariantsDemo from "./button-variants";
import ButtonLoadingDemo from "./button-loading";
import AccordionDemo from "./accordion-demo";

export const DEMOS: Record<string, React.ComponentType> = {
  "button-variants": ButtonVariantsDemo,
  "button-loading": ButtonLoadingDemo,
  "accordion-demo": AccordionDemo,
};

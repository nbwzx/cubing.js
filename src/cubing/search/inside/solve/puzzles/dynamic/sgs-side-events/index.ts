import { from } from "../../../../../../vendor/p-lazy/p-lazy";

export const searchDynamicSideEvents = from<
  typeof import("./search-dynamic-sgs-side-events")
>(() => import("./search-dynamic-sgs-side-events"));

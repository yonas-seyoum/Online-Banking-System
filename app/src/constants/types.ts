/* Menu Types */

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type MenuItem = {
  route: string;
  icon: IconDefinition;
};
export type MenuItems = {
  [key: string]: MenuItem;
};

/* Transaction Types */

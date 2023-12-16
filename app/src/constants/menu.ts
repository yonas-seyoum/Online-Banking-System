import { MenuItems } from "./types";
import {
  faCreditCard,
  faGear,
  faHouse,
  faMoneyBillTransfer,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

export const menuItems: MenuItems = {
  Dashboard: { route: "/", icon: faHouse },
  Savings: { route: "/savings", icon: faPiggyBank },
  Withdraw: { route: "/withdraw", icon: faMoneyBillTransfer },
  Transfer: { route: "/transfer", icon: faMoneyBillTransfer },
  Utilities: { route: "/utilities", icon: faGear },
  "Exchange Rates": { route: "/settings", icon: faGear },
  Credit: { route: "/settings", icon: faCreditCard },
  Settings: { route: "/settings", icon: faGear },
};

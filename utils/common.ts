interface IRouterListFunc {
  href: string;
  title: string;
  // privat: boolean;
}

export const menuItems = (t: (a: string) => string): IRouterListFunc[] => {
  return [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: "My AI Project",
      href: "/project",
    },
    {
      title: "Who we are",
      href: "/info",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
};

export const palette = {
  black: "#000000",
  white: "#FFFFFF",
  footerGrey: "#31404b",
};

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage;
  }
};

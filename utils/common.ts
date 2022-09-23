interface IRouterListFunc {
  href: string;
  title: string;
}

export const menuItems = (t: (a: string) => string): IRouterListFunc[] => {
  return [
    {
      title: t("menuHome"),
      href: "/",
    },
    {
      title: t("menuProject"),
      href: "/project",
    },
    {
      title: t("menuInfo"),
      href: "/info",
    },
    {
      title: t("menuContact"),
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

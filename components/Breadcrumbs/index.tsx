import React, { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { LinkHome, NextLink, Thing, UnicodeSymbol } from "./style";

const Route2LabelMap = {
  "/": "Home",
  "/info": "Who we are",
  "/contact": "Contact",
  "/project": "My AI Project",
};

export const BreadCrumbs = () => {
  const router = useRouter();

  const [crumbs, setCrumbs] = React.useState([]);

  useEffect(() => {
    const segmentsPath = router.asPath.split("/");
    const segmentsRoute = router.route.split("/");

    const crumbLinks = CombineAccumulatively(segmentsPath);
    const crumbLabels = CombineAccumulatively(segmentsRoute);

    const crumbs = crumbLinks.map((link: string, index: number) => {
      const route = crumbLabels[index];
      const crumb = {
        link: link,
        route: route,
        label: (Route2LabelMap as any)[route] || route,
      };
      return crumb;
    });
    setCrumbs(crumbs);
  }, [router.route]);

  return (
    <Thing>
      {router.pathname !== "/" && (
        <>
          <LinkHome>Home </LinkHome>

          {crumbs.map((item: any, i: number) => {
            return (
              <div key={i}>
                {item.link !== "/" && (
                  <Link href={item.link}>
                    <a>
                      <UnicodeSymbol>&#10095;</UnicodeSymbol>
                      <NextLink>{item.label}</NextLink>
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </>
      )}
    </Thing>
  );
};

const CombineAccumulatively = (segments: any) => {
  const links = segments.reduce((acc: any, cur: any, curIndex: number) => {
    const last = curIndex > 1 ? acc[curIndex - 1] : "";
    const newPath = last + "/" + cur;
    acc.push(newPath);
    return acc;
  }, []);
  return links;
};

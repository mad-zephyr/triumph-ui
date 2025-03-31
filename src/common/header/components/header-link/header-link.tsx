"use client";

import { useTextAnimator } from "@/hooks";
import { Link } from "@/i18n/navigation";
import { AnchorHTMLAttributes, FC, useEffect, useRef } from "react";

import classes from "./styles.module.sass";

type THeaderLink = {} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const HeaderLink: FC<THeaderLink> = ({ href, title }) => {
  const target = useRef<HTMLAnchorElement>(null);
  const {
    animateV4: [animateIn, animateOut],
  } = useTextAnimator(target);

  useEffect(() => {
    const currentTarget = target.current;

    currentTarget?.addEventListener("mouseenter", animateIn);
    currentTarget?.addEventListener("mouseleave", animateOut);

    return () => {
      currentTarget?.removeEventListener("mouseenter", animateIn);
      currentTarget?.removeEventListener("mouseleave", animateOut);
    };
  }, [animateIn, animateOut, target]);

  return href ? (
    <Link href={href} ref={target} className={classes.link}>
      <span>{title}</span>
    </Link>
  ) : (
    <></>
  );
};

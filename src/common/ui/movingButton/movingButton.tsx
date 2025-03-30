/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useGSAP } from "@gsap/react";
import cn from "clsx";
import gsap from "gsap";
import { ButtonHTMLAttributes, FC, MouseEvent, useRef } from "react";
import SplitType from "split-type";

import { Link } from "@/i18n/navigation";

import { Text } from "@/common/ui/text/text";
import styles from "./styles.module.sass";

export type TBaseButton = {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  isMoving?: boolean;
  size?: "large";
  className?: string;
  btnstyle: "moving" | "standard";
  onClick?: () => void;
};

export type TButtonSubmit = TBaseButton &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    btnType: "submit" | "form";
  };

export type TButtonLink = TBaseButton & {
  btnType: "nav_external" | "nav_internal";
  url: string;
};

export type TButton = TButtonLink | TButtonSubmit;

export const MovingButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & TButton
> = ({
  title,
  subtitle,
  variant = "light",
  size = "large",
  btnType,
  ...rest
}) => {
  const mainClass = cn(
    styles.button,
    styles[variant],
    styles[size],
    styles.large
  );

  const container = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const slider = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLSpanElement>(null);

  useGSAP(
    (context, contextSafe) => {
      if (
        !contextSafe ||
        !container.current ||
        !slider.current?.children ||
        !slider.current ||
        !overlay.current
      ) {
        return;
      }

      const text = new SplitType(slider.current, {
        types: "words",
        tagName: "span",
      });

      gsap.set(overlay.current, {
        y: "100%", // Сдвиг текста вверх
        visibility: "visible",
      });

      const overlayText = new SplitType(overlay.current, {
        types: "chars,words",
        tagName: "span",
      });

      const set = contextSafe(() => {
        gsap.set(overlayText.chars, {
          y: "100%", // Сдвиг текста вверх
          stagger: 0.03, // Задержка между анимациями каждого элемента
          duration: 0.25,
        });
      });

      set();

      const handleMouseEnter = contextSafe(() => {
        if (!slider.current?.children) {
          return;
        }
        // Анимация текста внутри slider
        const tl = gsap.timeline();

        tl.to(text.words, {
          y: "-120%", // Сдвиг текста вверх
          stagger: 0.03, // Задержка между анимациями каждого элемента
          duration: 0.25,
        }).set(text.words, {
          y: "120%",
          opacity: 0,
          duration: 0,
        });

        gsap.to(overlayText.chars, {
          y: "-100%", // Сдвиг текста вверх
          x: "0%",
          stagger: 0.03, // Задержка между анимациями каждого элемента
          duration: 0.25,
          ease: "power3.inOut",
          color: "white",
        });
      });

      const handleMouseLeave = contextSafe(() => {
        if (!slider.current?.children) {
          return;
        }

        // Возврат текста внутри slider в начальное положение
        gsap.to(text.words, {
          y: "0%",
          opacity: 1,
          delay: 0.1,
          stagger: 0.03, // Задержка между возвратом
          duration: 0.25,
        });

        const tl = gsap.timeline();

        tl.to(overlayText.chars, {
          y: "-240%", // Сдвиг текста вверх
          stagger: 0.03, // Задержка между анимациями каждого элемента
          duration: 0.25,
          ease: "power3.inOut",
        }).set(overlayText.chars, {
          y: "100%",
          duration: 0,
        });
      });

      container.current.addEventListener("mouseenter", handleMouseEnter);
      container.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.current?.removeEventListener("mouseenter", handleMouseEnter);
        container.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: container }
  );

  if (btnType === "nav_external" || btnType === "nav_internal") {
    const { url, ...linkRest } = rest as TButtonLink;

    return (
      <Link
        href={url}
        //@ts-ignore
        ref={container}
        className={mainClass}
        target={btnType === "nav_external" ? "_blank" : undefined}
        rel={btnType === "nav_external" ? "noopener noreferrer" : undefined}
        {...linkRest}
      >
        <div className={styles.mask}>
          <div ref={slider} className={styles.slider}>
            <Text tag={"span"}>{title}</Text>
            <Text tag={"span"}>{title}</Text>
          </div>
        </div>
        <div className={styles.overlay_mask}>
          <Text tag={"span"} ref={overlay} className={styles.overlay}>
            {subtitle}
          </Text>
        </div>
      </Link>
    );
  }

  if (btnType === "submit" || btnType === "form") {
    const { onClick } = rest;

    const handleClick = (e: MouseEvent) => {
      if (btnType === "form") {
        e.preventDefault();
      }

      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        //@ts-ignore
        ref={container}
        className={mainClass}
        onClick={handleClick}
        {...rest}
      >
        <div className={styles.mask}>
          <div ref={slider} className={styles.slider}>
            <Text tag={"span"}>{title}</Text> <Text tag={"span"}>{title}</Text>
          </div>
        </div>
        <div className={styles.overlay_mask}>
          <Text tag={"span"} ref={overlay} className={styles.overlay}>
            {subtitle}
          </Text>
        </div>
      </button>
    );
  }

  return <></>;
};

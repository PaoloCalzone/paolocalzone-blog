import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { OuterContainer, InnerContainer } from "@/components/Container";

interface NavProps {
  children?: ReactNode;
  href: string;
}

function NavLink({ href, children }: NavProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const french = useRouter().pathname.startsWith("/fr");
  return (
    <footer className="mt-32">
      <OuterContainer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <InnerContainer>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href={french ? "/a-propos" : "/about"}>
                  {french ? "A propos" : "About"}
                </NavLink>
                <NavLink href={french ? "/fr/blog" : "/blog"}>Blog</NavLink>
                <NavLink href={french ? "/projets" : "/projects"}>
                  {french ? "Projets" : "Projects"}
                </NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Paolo Calzone.
              </p>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}

"use client";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <HeaderArea>
      <div className="container">
        <Link
          href="/"
          className="text-white"
          // className={`text-slate-50 font-bold text-lg ${pathname === Link.href ? "bg-sky-100 text-blue-500" : ""}`}
          prefetch={false}
        >
          Logo
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-slate-400 hover:text-slate-50 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="/archive" className="text-slate-400 hover:text-slate-50 transition-colors" prefetch={false}>
            Work
          </Link>
          <Link href="/contact" className="text-slate-400 hover:text-slate-50 transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-slate-400 hover:text-slate-50 transition-colors">
          {/* <MenuIcon className="h-6 w-6" /> */}
          menu
        </button>
      </div>
    </HeaderArea>
  );
}

const HeaderArea = styled.header`
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 50;
  width: calc(100% - 48px);
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(90deg, rgba(51, 65, 85, 0.5) 0%, rgba(148, 151, 189, 0.25) 100%);
  box-shadow: 0px 0px 1px 1px rgb(108 123 134 / 20%);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  div {
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
        padding: 0 12px;
      }
    }
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
    @media (min-width: 1536px) {
      .container {
        max-width: 1536px;
      }
    }
  }
`;

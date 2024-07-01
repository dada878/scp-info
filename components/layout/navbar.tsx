import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 border-b py-3 flex gap-5 container items-center">
      <Link href="/" className="font-bold text-xl flex gap-3 items-center mr-5">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="drop-shadow-xl"
        />
        特選資訊開源平台
      </Link>
      <NavbarItem href="/">各校情報</NavbarItem>
      <NavbarItem href="/">心得彙整</NavbarItem>
      <NavbarItem href="/">交叉查榜</NavbarItem>
    </nav>
  );
}

function NavbarItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-lg hover:text-muted-foreground transition-all"
    >
      {children}
    </Link>
  );
}

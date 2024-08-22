import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="h-screen flex">
      {/* Nav Sidebar */}
      <div className="w-[14%] m:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-gray-50">
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image  src="/logo.png" alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block font-semibold text-lg text-red-400">Future Nation</span>
        </Link>
        <Menu />
      </div>
      {/* Main */}
      <div className="w-[86%] m:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        <h1>Work Damn it!</h1>
        {children}
      </div>
    </div>
    );
  }
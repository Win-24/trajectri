
import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchInput } from "./search-input";


export const HomeNavbar = () => {
    return (
        <nav
            className="flex items-center fixed top-0 left-0 right-0 h-16 bg-white px-2 pr-2 z-50 border-b shadow-md"
        >
            <div
                className="flex w-full items-center gap-4"
            >
                {/* ====== Menu & Logo ====== */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />

                    <Link href="/">
                        <div className="flex items-center p-4 gap-2">
                            <Image 
                                src="/logo.svg" 
                                width={32}
                                height={32}
                                alt="logo"
                            />

                            <p className="text-2xl font-semibold tracking-tight">
                                Trajectri
                            </p>
                        </div>
                    </Link>
                </div>

                {/* ====== Search Bar ====== */}
                <div
                    className="flex flex-1 justify-center max-w-[720px] mx-auto"
                >
                    <SearchInput />
                </div>

                {/* ====== Auth Button ====== */}
                <div
                    className="flex flex-shrink-0 items-center ga-4"
                >
                    <AuthButton />
                </div>
            </div>
        </nav>
    );
}
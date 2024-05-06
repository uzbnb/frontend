import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./searchFilters";
import UserNav from "./userNav";
import AddPropertyButton from "./addPropertyButton";
import { getUserId } from "@/app/lib/actions";

const Navbar = async () => {
    const userId = await getUserId()

    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6 ">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/logo-long.svg"
                            alt="uzbnb logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                        <div className="flex space-x-6">
                        </div>

                        <div className="flex items-center space-x-6">
                            <AddPropertyButton 
                                userId={userId}
                            />

                            <UserNav 
                                userId={userId}
                            />
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

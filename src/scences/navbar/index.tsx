import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage(value: SelectedPage): void
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

   
    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-11/12 `}>
                    <div className={`${flexBetween} w-full gap-16 `}>
                        <img src={Logo} alt="Logo" />
                        {/* RIGHT SIDE */}
                        {
                            isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Contact us" selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-10`}>
                                    <p className="border border-primary-500 px-7 py-2 rounded-full hover:border-secondary-500  duration-500 cursor-pointer">Sign In</p>
                                    <ActionButton  setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>) : (
                                <button className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggle(!isMenuToggle)}
                                >
                                    <Bars3Icon className="w-6 h-6 text-white" />
                                    
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>

            {/* Mobile Menu Model */}
            {!isAboveMediumScreens && isMenuToggle && (
                <div className="fixed right-0 bottom-6 z-40 h-full w-[250px] bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className="flex justify-end px-10 py-12">
                    <button className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggle(!isMenuToggle)}
                                >
                                    <XMarkIcon className="w-6 h-6 text-zinc-50" />
                                </button>
                    </div>
                    {/* Menu Items */}
                    <div className={`${flexBetween} gap-10 text-xl flex-col  `}>
                                    <Link page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                    <Link page="Contact us" selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage} />
                                </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
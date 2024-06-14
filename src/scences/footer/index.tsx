import Logo from "@/assets/Logo.png"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="Logo" />
                    <p className="my-5">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.</p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Mass clinical senescence</p>
                    <p className="my-5">And pregnant that and also</p>
                    <p>Let us live with every body</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">
                        The time of fear of the land of laughter is needed.</p>
                    <div className="flex items-center my-5 gap-2">
                        <PhoneIcon className=" h-5 w-5 text-gray-500" />
                        <p className="text-center">(91+)9543214631</p>
                    </div>
                    <div className="flex  items-center my-5 gap-2">

                        <EnvelopeIcon className="h-5 w-5 text-gray-500" />

                        <p className="text-center">luciferman390@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
    const data = new Date().getFullYear();

    return (
        <div className="w-full flex justify-center bg-gradient-to-r from-teal-950 to-teal-300 py-4 text-white">
            <div className="container flex flex-col items-center py-6">
                <p className="text-lg font-semibold">FarMarcia | Copyright: {data}</p>
                <p className="text-sm">Acesse nossas redes sociais e fique por dentro das novidades</p>
                <div className="flex gap-4 mt-2">
                    <LinkedinLogo size={30} weight="bold" />
                    <InstagramLogo size={30} weight="bold" />
                    <FacebookLogo size={30} weight="bold" />
                </div>
            </div>
        </div>
    );
}

export default Footer;

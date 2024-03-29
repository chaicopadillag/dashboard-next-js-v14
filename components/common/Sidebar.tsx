import Image from "next/image";
import { FaCalculator, FaHeart, FaReact } from "react-icons/fa";
import { MdCatchingPokemon, MdOutlineDashboard } from "react-icons/md";
import { SidebarItem } from "..";

const menuItems = [
    {
        title: 'Dashboard',
        path: '/dashboard/main',
        icon: <MdOutlineDashboard className="w-6 h-6" />,
        subTitle: 'Tablero'
    },
    {
        title: 'Counter',
        path: '/dashboard/counter',
        icon: <FaCalculator className="w-6 h-6" />,
        subTitle: 'Counter client'
    },
    {
        title: 'Pokemones',
        path: '/dashboard/pokemon',
        icon: <MdCatchingPokemon className="w-6 h-6" />,
        subTitle: 'Pokemones anime'
    },
    {
        title: 'Favoritos',
        path: '/dashboard/favorites',
        icon: <FaHeart className="w-6 h-6" />,
        subTitle: 'Pokemones favoritos'
    }
];

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-96 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <FaReact className="mr-2" />
                    <span className="mr-2">Dash</span>
                    <span className="text-blue-500">8</span>
                </h1>
                <p className="text-slate-500 text-sm">With Next.js v14</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={32}
                            height={32}
                            className="rounded-full" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt="Avatar" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Edward Tompson
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarItem key={item.path} {...item} />
                    ))
                }

            </div>
        </div>
    )
}

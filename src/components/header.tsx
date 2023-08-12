"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "../assets/imgs/logo.png";


type compMap = Array<{[key : string] : string}>;

const headerMenuMap : compMap = [
    {"title": "사이트 소개", "link": "/programming-language"},
    {"title": "개발자 소개", "link": "/work-history"},
    {"title": "작품 보기", "link": "/personal-info"},
    {"title": "연락하기", "link": "/#"},
];

const headerBurderAddedMenuMap : compMap = [
    {"title": "SNS", "link": "/programming-language"},
];

const Header = () : JSX.Element => {

    const [mobileBurgerMenuOpen, setMobileBurgerMenuOpen] = useState<boolean>(false);

    return (
        <header className="p-2 md:p-4 bg-white text-slate-500  sticky top-0 z-50 border-b border-slate-300">
            <div className="flex justify-between items-center">

                <div className="md:hidden w-6 h-6 px-4 m-4">

                </div>

                {/* logo */}
                <div className="flex items-center">
                    <Image
                        src={headerLogo}
                        alt="Logo"
                        width={500}
                        height={500}
                        className="h-8 w-8 mr-2"
                    />
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8">
                    {
                        headerMenuMap.map((key) => {
                            return(
                                <Link 
                                    href={key.link}
                                    className="hover:text-slate-900"    
                                >
                                    {key.title}
                                </Link>
                            );
                        })
                    }
                </div>

                {/* SNS */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded">
                        SNS
                    </button>
                </div>

                {/* burger menu button */}
                <button
                    className="md:hidden bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-900 py-2 px-4 rounded"
                    onClick={() => {
                        setMobileBurgerMenuOpen(!mobileBurgerMenuOpen);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>

            {/* burger menu list */}
            {mobileBurgerMenuOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-2">

                        {/* common menu */}
                        {
                            headerMenuMap.map((key) => {
                                return(
                                    <li
                                        className="py-2"
                                    >
                                        <Link 
                                            href={key.link}
                                            className="hover:text-slate-900"
                                        >
                                            {key.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }

                        {/* burger added menu */}
                        {
                            headerBurderAddedMenuMap.map((key) => {
                                return(
                                    <li
                                        className="py-2"
                                    >
                                        <Link 
                                            href={key.link}
                                            className="hover:text-slate-900"
                                        >
                                            {key.title}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            )}

    </header>
    );
}


export default Header;
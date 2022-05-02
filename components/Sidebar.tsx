import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faUserGroup, faBriefcase, faUser, faWallet, fas, fa2 } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

interface Props {
    sidebarOpen: boolean;
    setSidebarOpen(sidebarOpen: boolean): void;
}


const getLinkContent = (label: string, isActive: boolean, imageFileName: string): JSX.Element => {
    return (
        <a className={isActive ? "link-active" : "link"}>
            <Image alt="selectSvg" src={`/asserts/sidebar/${imageFileName}${isActive ? '_select.svg' : '.svg'}`} width="25" height="25" />
            <span className="mx-3">{label}</span>
        </a>
    )
}


const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
    const router = useRouter();
    return (
        <>
            <div onClick={e => {
                setSidebarOpen(!sidebarOpen);
            }} className={`${sidebarOpen ? 'block' : 'hidden'} drop-shadow-lg fixed z-20 inset-0 bg-white opacity-50 transition-opacity lg:hidden`}></div>
            <div className={`${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} border-solid border-2 border-black fixed z-30 inset-y-0 left-0 w-36 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-start pt-8 px-4">
                    <div className="flex flex-col items-center">
                        <span className="mx-2 font-bold">Welcome,</span>
                        <span className="text-custom-xs">Praveen Kumar</span>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-y-2.5 py-3 px-2.5">
                    <hr />
                    <span>Operational</span>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
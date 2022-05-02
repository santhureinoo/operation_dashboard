import Sidebar from "./Sidebar"
import React from 'react';
import Head from "next/head";
import Script from "next/script";
import CustomSelect from "./CustomSelect";

interface Props {
    time: string;
    children: any;
}

const Layout = ({ time, children }: Props) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    return (
        <React.Fragment>
            <Head>
                <title>Operational - Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex h-screen">
                <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
                <div className="flex-1 flex flex-col overflow-auto ">
                    <div className="flex-1 overflow-x-hidden overflow-y-auto">
                        <div className="container mx-auto px-6 py-8">
                            <button onClick={e => {
                                setSidebarOpen(!sidebarOpen)
                            }} className="text-gray-500 focus:outline-none lg:hidden">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <div className="flex justify-between items-center">
                                <span className="text-custom-gray">Last Update: <h3 className="inline text-black font-bold">{time}</h3></span>
                                <div className="flex items-center gap-x-6">
                                    <div className="flex gap-x-2">
                                        <CustomSelect UpperLabel={"Customer"} Value={["All", "Dummy"]} />
                                        <CustomSelect UpperLabel={"Outlet"} Value={["All", "Dummy"]} />
                                    </div>
                                    <div>
                                        <button className="p-1 w-36 bg-custom-darkblue text-white ">Refresh</button>
                                    </div>
                                   
                                </div>
                            </div>


                            <div className="flex flex-col mt-8">
                                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                    <div
                                        className="align-middle inline-block min-w-full sm:rounded-lg">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></Script>
            </main>
        </React.Fragment>
    )
}

export default Layout;
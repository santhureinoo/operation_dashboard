import React, { ReactElement } from "react";
import { dummyDeviceList } from "../common/constant";
import { Device } from "../common/types";
import Layout from "../components/Layout";
import {v4 as uuid} from 'uuid';
const DeviceList = () => {

    const devices: Device[] = dummyDeviceList;

    const labelAndValue = (label: string, value: string) => {
        return (
            <div>
                <span className="block text-xs">{label}</span>
                <span className="font-bold text-lg">{value}</span>
            </div>
        )
    }

    const DeviceUIList = React.useMemo((): JSX.Element[] => {
        return devices.map(device => {
            return (<div key={uuid()} className="w-full h-full grid grid-cols-4 p-4">
                <div className="w-8 bg-red-600"></div>
                {labelAndValue('Occured Since', device.OccuredDate)}
                {labelAndValue('Device', device.Device)}
                {labelAndValue('Status', device.Status)}
            </div>);
        })
    }, [])

    return (
        <React.Fragment>
            <div className="h-[500px] w-full flex flex-col justify-between">
                <div className="flex flex-col divide-y-2 divide-dashed divide-zinc-600">
                    {DeviceUIList}
                </div>
                <div className="flex justify-end">
                    <nav aria-label="Page navigation example">
                        <ul className="flex list-style-none">
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">1</a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">2</a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#">3</a></li>
                            <li className="page-item"><a
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>)
}

export default DeviceList;

DeviceList.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout time={'09:00 | 12/04/2022'}>
            {page}
        </Layout>
    )
}
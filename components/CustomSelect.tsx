import React from "react";

interface Props {
    UpperLabel: string;
    Value: string[];
}

const CustomSelect = ({ UpperLabel, Value }: Props): JSX.Element => {
    const [openMenu, setOpenMenu] = React.useState(false);
    return (
        <React.Fragment>
            <div className="flex justify-center">
                <div>
                    <div className="dropdown relative">
                        <button
                            className=" inline-block px-6 py-2.5 font-medium text-xs leading-tight outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                            type="button"
                            onBlur={() => setOpenMenu(false)}
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <div className="flex flex-col items-end">
                                <span className="font-bold">{UpperLabel}</span>
                                <span className="font-thin text-custom-xs">{Value[0]}</span>
                            </div>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className="w-2 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                            </svg>
                        </button>
                        <ul
                            className={`${openMenu ? '' : 'hidden'} w-full absolute text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none bg-white`}

                        >
                            <li className=" text-sm py-2 px-4 font-normal w-full hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600">
                                Action
                            </li>
                            <li className=" text-sm py-2 px-4 font-normal w-full hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600">
                                Action
                            </li>
                            <li className=" text-sm py-2 px-4 font-normal w-full hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600">
                                Action
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CustomSelect;
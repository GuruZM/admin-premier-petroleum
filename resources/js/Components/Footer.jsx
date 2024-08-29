import React from "react";
export default function Footer() {
    return (
        <footer className="py-6  px-5 print:hidden border-t  border-gray-200 bg-white font-light flex flex-col space-x-2 md:flex-row justify-center items-center">
            <p className="text-gray-700 hover:text-gray-900  opacity-60 font-medium block text-sm">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <a href="" target="_blank" rel="noreferrer" className=" ">
                    Premier Petroleum
                </a>
            </p>
            <span className="text-gray-700 hidden opacity-20 md:flex">|</span>
            <ul className="list-unstyled flex ">
                <li>
                    <a
                        className="text-gray-700 hover:text-gray-900 opacity-60 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://resonantt.com"
                    >
                        Crafted by Resonantt
                    </a>
                </li>
            </ul>
        </footer>
    );
}

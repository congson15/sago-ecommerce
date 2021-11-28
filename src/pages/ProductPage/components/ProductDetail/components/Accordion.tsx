import * as React from 'react';

export interface AccordionProps {
    title:string,
    isShow: boolean,
    handleToggleChange: Function,
    content:any
}

export function Accordion({ title, content, isShow, handleToggleChange }: AccordionProps) {
    return (
        <div className="mt-5">
            <div className="border-b py-4 border-gray-200">
                <div onClick={() => handleToggleChange(!isShow)} className="flex justify-between items-center cursor-pointer">
                    <p className="leading-4 text-gray-800 font-bold">{title}</p>
                    <button
                        className="
            cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            rounded
          "
                    >
                        <svg className={"transform border-none " + (isShow ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={"pt-4 text-base leading-normal mt-4 text-gray-600 tracking-wide mx-2 " + (isShow ? "block" : "hidden")} id="sect">
                    {content}
                </div>
            </div>
        </div>
    );
}

import React from "react";
const Icons = ({ icon, className = "", ...props }) => {
    const iconsList = {
        "btn-arrow": (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="group-hover:stroke-white transition-all duration-300 ease-linear" d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke="#00171F" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        ),
        "white-btn-arrow": (<svg className=" transition-all duration-300 ease-linear" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke="white" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
        </svg>),
        menuIcon: (
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.125 24.75V22H28.875V24.75H4.125ZM4.125 17.875V15.125H28.875V17.875H4.125ZM4.125 11V8.25H28.875V11H4.125Z"
                    fill="white"
                />
            </svg>
        ),
        crossIcon: (
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.8 26.125L6.875 24.2L14.575 16.5L6.875 8.8L8.8 6.875L16.5 14.575L24.2 6.875L26.125 8.8L18.425 16.5L26.125 24.2L24.2 26.125L16.5 18.425L8.8 26.125Z"
                    fill="white"
                />
            </svg>
        ),

    };
    return icon && iconsList[icon];
};
export default Icons;
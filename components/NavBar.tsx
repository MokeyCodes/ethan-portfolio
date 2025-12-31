import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="sticky top-0 bg-blue-950 text-white p-7 w-full h-auto flex">
            {/* Add logo here */}
            <Image
            className="flex"
            src="/Design for JATS. (Job Application Tracking Service).png"
            width={60}
            height={50}
            alt="JATS png"
            />
            <div className="flex items-center">
            <div className="pl-5">Home</div>
            <div className="pl-5">Experiences</div>
            <div className="pl-5">Projects</div>
            </div>



        </nav>
    )
}
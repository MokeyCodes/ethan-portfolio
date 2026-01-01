import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="sticky top-0 bg-blue-950 text-white p-7 w-full h-auto flex">
            {/* Add logo here */}
            <a href='/'>
                <Image
                className="flex rounded-full"
                src="/Design for JATS. (Job Application Tracking Service).png"
                width={60}
                height={50}
                alt="JATS png"
                />
            </a>
            <div className="flex items-center">
                <div className="pl-5"><a href="/">Home</a></div>
                <div className="pl-5"> | </div>
                <div className="pl-5"><a href="/experiences">Experiences</a></div>
                <div className="pl-5"> | </div>
                <div className="pl-5"><a href="/projects">Projects</a></div>
            </div>
        </nav>
    )
}
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <div className="flex flex-col mt-auto border-8 border-red-500 items-center justify-items-center p-4">
                <p className="">Ethan Nguyen-Huu's DATABASE.</p>
                <Image
                className="rounded-full shadow-md hover:shadow-xl"
                width={200}
                height={200}
                src={"/ippo.PNG"}
                alt="Picture of Ippo"
                />
            </div>
            <footer className="border-8 border-red-500 flex flex-col items-center p-8">
                So basically you hover over
                <div className="hover:text-lg hover:font-semibold">
                    here
                </div>
            </footer>
        </div>
    );
}

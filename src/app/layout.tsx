
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Discipline",
    description: "App for people to become disciplined and join the top 1%",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
            <body className={inter.className}>

                <div className="w-full flex flex-row">

                    <div className="border border-red-600 fixed w-[280px] h-full">
                        <div className="flex justify-between">
                            <div className="">Arham</div>
                            <div className="">|||</div>
                        </div>

                        <nav className=" px-4 py-2">
                            <ul className="">
                                <Link
                                    href={"/"}
                                    className=""
                                >
                                    <li className="py-1 px-1 rounded-md bg-slate-200 my-1 cursor-pointer">
                                        Home
                                    </li>
                                </Link>
                                <Link
                                    href={"/todos"}
                                    className=""
                                >
                                    <li className="py-1 px-1 rounded-md bg-slate-200 my-1 cursor-pointer">
                                        Todos
                                    </li>
                                </Link>
                                <Link
                                    href={"/journal"}
                                    className=""
                                >
                                    <li className="py-1 px-1 rounded-md bg-slate-200 my-1 cursor-pointer">
                                        Journal
                                    </li>
                                </Link>
                                <Link
                                    href={"/profile"}
                                    className=""
                                >
                                    <li className="py-1 px-1 rounded-md bg-slate-200 my-1 cursor-pointer">
                                        Profile
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>

                    <main className="app-main flex flex-row justify-center border border-green-400">
                        <div className="w-full flex flex-row max-w-[800px] border border-purple-500">
                            {children}
                        </div>
                    </main>

                </div>

            </body>
        </html>
    );
}

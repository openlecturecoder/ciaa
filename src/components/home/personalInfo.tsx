'use client';

import Image from "next/image";
import myPicture from "../../assets/imgs/mfers9922.jpg";
import cc0 from "../../assets/imgs/cc0.png";
import Link from "next/link";
import { useState } from "react";


const PersonalInfo = () : JSX.Element => {

    const [isVisibleToIntroduce, setIsVisibleToIntroduce] = useState("none");

    const onclickTopImage = () => {
        alert(123);
    }

    return (

        <section className="fr justify-center items-center bg-slate-900 w-full">

            {/* ========================= */}
            {/* desktop screen */}
            {/* ========================= */}
            <div className="p-6 md:p-10">

                {/* code */}
                <div className="text-4xl md:text-9xl flex text-white font-bold text-center justify-between">
                    <p>C</p>
                    <p>O</p>
                    <p>D</p>
                    <p>E</p>
                </div>


                <div className="flex items-center justify-between">

                    {/* IS */}
                    <div>
                        <div
                            className="flex justify-center items-center h-28 md:h-64"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold  text-center">
                                I
                            </p>
                        </div>

                        <div
                            className="flex justify-center items-center h-28 md:h-64"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold text-center">
                                S
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="m-10 md:m-20 flex justify-center items-center w-full rounded">
                        
                            {/* image */}
                            <div className="relative">
                                <Image
                                    src={myPicture}
                                    alt="myPicture"
                                    width={500}
                                    height={500}
                                    // sizes="100vw"
                                    // className="rounded"
                                    // style={{ width: 'auto', height: 'auto', maxHeight: 550 }} // optional
                                />
                                <div 
                                    id="divTopSlideImage" 
                                    className="flex flex-col items-center justify-center bg-transparent hover:bg-slate-500/70 absolute top-0 w-full h-full"
                                    onMouseEnter={()=>{
                                        setIsVisibleToIntroduce('block');
                                    }}
                                    onMouseLeave={()=>{
                                        setIsVisibleToIntroduce('none');
                                    }}
                                >
                                    <button 
                                        onClick={onclickTopImage}
                                        className="px-5 py-2 text-sm font-medium md:px-20 md:py-4 md:text-lg md:font-bold  bg-white text-slate-900 rounded"
                                        style={{display: isVisibleToIntroduce}}
                                    >
                                        Detail of a Mfer.
                                    </button>
                                </div>

                            </div>  
                                
                    </div>

                    {/* an */}
                    <div>

                        <div
                            className="flex justify-center items-center h-28 md:h-64"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold  text-center">
                                A
                            </p>
                        </div>

                        <div
                            className="flex justify-center items-center h-28 md:h-64"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold text-center">
                                N
                            </p>
                        </div>

{/*                     <div
                            className="flex justify-center items-center h-20 md:h-44"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold text-center">
                                T
                            </p>
                        </div>
                        <div
                            className="flex justify-center items-center h-20 md:h-44"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold text-center">
                                H
                            </p>
                        </div>
                        <div
                            className="flex justify-center items-center h-20 md:h-44"
                        >
                            <p className="text-4xl md:text-9xl text-white font-bold text-center">
                                E
                            </p>
                        </div> */}
                        
                    </div>
                </div>

                {/* arts */}
                <div className="text-4xl md:text-9xl flex text-white font-bold text-center justify-between items-center">
                    <p>A</p>
                    <p>R</p>
                    <p>T</p>
                    <Image
                        src={cc0}
                        alt="cc0"
                        width={128}
                        height={128}
                        className="h-10 w-10 md:h-24 md:w-24"
                                    // sizes="100vw"
                                    // className="rounded"
                                    // style={{ width: 'auto', height: 'auto', maxHeight: 550 }} // optional
                    />
                </div>
            </div>
            {/* ========================= */}
            {/* ========================= */}
            {/* ========================= */}





        </section>

    );
};

export default PersonalInfo;
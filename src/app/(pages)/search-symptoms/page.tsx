"use client";
import Header from "@/app/components/layout/header";
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Image from "next/image"

const SearchSymptomsPage = () => {
    const [isAdvancedSearchEnabled, setIsAdvancedSearchEnabled] = useState(false);

    const [inputValue, setInputValue] = useState("");
    return (
        <div className="bg-white h-[100vh] px-[15%] pt-[10%]">
            <Header />
            <title>Search Symptoms</title>
            <Image
                alt="Search Page"
                loading="lazy"
                decoding="async"
                style={{
                    position: 'absolute',
                    height: '80%',
                    width: '80%',
                    right: '0',
                    bottom: '0',
                    color: 'transparent'
                }}
                src="/graphics/searchpage.svg"
                width={0}
                height={0}
            />
            <Image
            alt="Search Page"
            loading="lazy"
            decoding="async"
            style={{
                position: 'absolute',
                height: '70%',
                width: '70%',
                right: '0',
                bottom: '5',
                color: 'transparent'
            }}
            src="/graphics/searchpageicon.svg"
            width={0}
            height={0}
            />
            <div className="flex z-10 flex-col gap-5 mt-16">
                <h1 className="text-7xl">
                    Welcome to <span className="text-[#64B5B7]">BSDOC</span> 
                </h1>
                <div className="flex items-center gap-4">
                    <p className="pl-7">Advanced Search</p>
                    <button
                        onClick={() => setIsAdvancedSearchEnabled(!isAdvancedSearchEnabled)}
                        className={`w-12 h-6 rounded-full transition duration-300 border-[#777777] border-[1px] ${isAdvancedSearchEnabled ? 'bg-blue-500 border-[#3B77E5]' : 'bg-gray-300 border-[#777777]'} relative`}
                    >
                        <span
                            className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transform transition-transform duration-300 ease-in-out
                                ${isAdvancedSearchEnabled ? 'translate-x-1 bg-white' : '-translate-x-5 bg-[#777777]'}`}
                        ></span>
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="relative py-4 pl-10 shadow-md border-[1px] rounded-xl px-6 bg-white text-gray-500 text-[35px] flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} // Track input value
                            className={`w-full border-none outline-none text-xl ${inputValue ? 'text-[#2D383D] font-normal' : 'text-gray-500 font-light'}`} // Conditional color change
                        />
                        <button className="">
                            <IoSearch className="text-gray-500 hover:scale-110 active:scale-90 transition duration-300" />
                        </button>
                    </div>
                    <p className="text-gray-500">
                        Introducing a new way to diagnose your sickness.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SearchSymptomsPage;
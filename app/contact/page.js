"use client";
import { useState, useEffect } from "react";
import Head from "next/head";



export default function Contact() {
    return (
        <>
        
        <header className="w-full bg-gradient-to-r from-zinc-800 to-zinc-200 flex flex-row justify-start items-center h-20 text-white">


        <a className="flex flex-row" href="/">
        
        <div className="w-15 ml-10 flex flex-row">

            <img src="./Mercedes-Logo.png"></img>
        </div>

        <div className="text-xl font-bold pl-10 mt-5">
            <p>Mercedes</p>
        </div></a>

        <div className="flex flex-1 justify-center mr-20">
    <nav className="flex gap-30 text-xl text-gray-300">
    <a
      href="/"
      className="relative px-2 py-1 transition duration-300 ease-in-out hover:text-white group"
    >
      Accueil
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="/information"
      className="relative px-2 py-1 transition duration-300 ease-in-out hover:text-white group"
    >
      À propos
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="/contact"
      className="relative px-2 py-1 transition duration-300 ease-in-out hover:text-white group"
    >
      Contact
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
    </nav>
    </div>


        <div className="flex justify-end mr-10">

            <a href="/login">
            <button
        className="relative rounded-lg bg-gradient-to-r from-zinc-900 via-gray-600 to-gray-400 w-40 h-13 cursor-pointer text-white font-semibold
             transition-transform duration-300 ease-in-out hover:scale-110
             bg-[length:200%_200%] animate-gradient-move shadow-lg shadow-zinc-700/30"
        >
        Connexion
        </button>

            </a>           
        </div>
        </header>

        <div className=" flex flex-col mt-20 items-center">
            
            <div className="max-w-3xl mx-auto bg-zinc-800 text-white p-8 rounded-3xl shadow-lg mt-10">
  <h2 className="text-4xl font-bold mb-4 text-center">Formulaire de contact</h2>
  <div className="border-b-2 border-gray-600 mb-8"></div>

  <form className="space-y-6">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="text-lg mb-2 font-semibold">Nom</label>
        <input
          placeholder="DuPont"
          className="px-4 py-2 rounded-lg border border-gray-400 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-2 font-semibold">Prénom</label>
        <input
          placeholder="Nicolas"
          className="px-4 py-2 rounded-lg border border-gray-400 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="text-lg mb-2 font-semibold">Email</label>
        <input
          type="email"
          placeholder="denis@gmail.com"
          className="px-4 py-2 rounded-lg border border-gray-400 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg mb-2 font-semibold">Téléphone</label>
        <input
          type="tel"
          placeholder="0600000000"
          className="px-4 py-2 rounded-lg border border-gray-400 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    
    <div className="flex flex-col">
      <label className="text-lg mb-2 font-semibold">Message</label>
      <textarea
        placeholder="Écrivez votre message ici..."
        rows={5}
        className="px-4 py-2 rounded-lg border border-gray-400 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      ></textarea>
    </div>

    
    <button
      type="submit"
      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
    >
      Envoyer
    </button>
  </form>
</div>


        </div>

        <footer>
        <div className="flex mt-20 bg-zinc-900 h-50 flex-col items-center">
            <div className="mt-5">
                <img className="w-13" src="/Mercedes-Logo.png"></img>
            </div>

            <div className="flex flex-row gap-150 transition-colors 300">

            <div className="w-100 h-30 justify-between flex">
                <div className="flex flex-col gap-3">
                    <a className="text-gray-500 hover:text-white transition-colors duration-300" href="/">Accueil</a>
                    <a className="text-gray-500 hover:text-white transition-colors duration-300" href="/login">Connexion</a>
                </div>

                <div className="flex flex-col gap-3">
                    <a className="text-gray-500 hover:text-white transition-colors duration-300" href="/contact">Contact</a>
                    <a className="text-gray-500 hover:text-white transition-colors duration-300" href="/information">FAQ</a>
                </div>
            </div>

            <div className="w-150 h-30 justify-between flex">
                <div className="flex flex-col gap-2">

                    <div className="w-70">
                    <p className="text-gray-500 hover:text-white transition-colors duration-300">Adresse : </p>
                    <p className="text-gray-500 hover:text-white transition-colors duration-300">7 Av. Nicéphore Niépce, 78180 Montigny-le-Bretonneux, France</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="text-gray-500 hover:text-white transition-colors duration-300">Fais avec ❤️ par Denis</p>
                    <p className="text-gray-500 hover:text-white transition-colors duration-300">Copyright 2025</p>
                </div>
            </div>

            </div>
        </div>
    </footer>


        </>
    );
}
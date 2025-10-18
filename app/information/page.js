"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Information() {

    
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment connecter mon smartphone avec Android Auto ?",
      answer:
        "Android Auto vous permet de connecter votre smartphone à votre véhicule et d'accéder à des fonctionnalités comme la navigation ou les appels mains libres tout en restant concentré sur la route.",
    },
    {
      question: "Qu'est-ce que Mercedes-Benz PRE-SAFE PLUS ?",
      answer:
        "Mercedes-Benz PRE-SAFE PLUS peut contribuer à prévenir les collisions et à renforcer la protection des occupants en cas d’accident. Du prétensionnement automatique des ceintures de sécurité à l’activation des freins, PRE-SAFE PLUS est un système de sécurité novateur conçu pour faire de l'habitacle de votre Mercedes-Benz l'un des endroits les plus sûrs sur la route.",
    },
    {
      question: "Comment utiliser Apple CarPlay dans ma Mercedes-Benz ?",
      answer:
        "Pour connecter votre iPhone à l’écran multimédia de votre voiture, activez Apple CarPlay. Une fois connecté, vous pouvez accéder à certaines de vos applications préférées directement depuis l’écran du véhicule. Utilisez Siri ou les commandes intégrées pour passer des appels, obtenir des itinéraires, consulter votre agenda et bien plus encore — le tout en gardant les mains sur le volant et les yeux sur la route.",
    },

    {
      question: "Qu'est-ce que l'assistant de régulation de distance DISTRONIC de Mercedes-Benz ?",
      answer:
        "L'assistant de régulation de distance DISTRONIC est un système d'assistance à la conduite qui rend la conduite de votre Mercedes-Benz plus facile et plus relaxante, notamment dans les embouteillages. Il vous aide intelligemment à freiner, accélérer et naviguer dans les conditions de circulation changeantes pour un trajet plus sûr et sans stress.",
    },

    {
      question: "Phares MULTIBEAM LED de Mercedes-Benz : de quoi s'agit-il ?",
      answer:
        "Grâce à leur technologie intelligente et entièrement automatisée, les phares MULTIBEAM LED de Mercedes-Benz adaptent l’éclairage de la route de façon optimale, que vous circuliez en ville, sur autoroute ou par temps de pluie.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


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


        <div className="flex justify-center mt-20">
            <div className="bg-zinc-800 h-150 border-2 border-white rounded-2xl w-150 flex flex-col items-center pt-10">
                <div className="flex flex-col">
                    <p className="text-2xl  ml-5">Questions Fréquentes :</p>
                    <div className="border-b-2 mt-2 ml-5 w-90"></div>

                    {faqs.map((faq, index) => (

                    <div key={index} className="mt-10 ml-5"> 
                        
                    <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
                >
                    {faq.question}
                    <span className="ml-2 text-white">
                    {openIndex === index ? "▲" : "▼"}
                    </span>
                    </button>

                    <div
                    className={`transition-all overflow-hidden duration-300 justify-center items-center flex ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                    >
                    
                    <p className="text-gray-300">{faq.answer}</p>
                    </div>
                        
                    </div>
                    ))}
                </div>
                
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
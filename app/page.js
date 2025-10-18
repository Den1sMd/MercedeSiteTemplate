"use client";
import { useState, useEffect } from "react";
import { Gem, Percent, Wrench, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion, scale } from "framer-motion";


export default function WelcomePage() {
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

<div className="relative w-full h-150 flex items-center justify-center overflow-hidden">
  
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover "
  >
    <source src="./mercedespres.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la vidéo.
  </video>


  <div className="relative z-10 text-white text-3xl font-bold">
    Rejoindre Mercedes c'est rejoindre une famille !
  </div>


  <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
</div>


<div className="pt-20 bg-zinc-950 w-full h-100 flex flex-col items-center">

        <p className="text-4xl font-bold">Nos modéles tendances</p>

        <div className="flex flex-row justify-center items-center gap-10 pt-20">
            <div className="flex flex-row bg-black border border-white rounded-lg justify-center w-max h-max">

                <div className="flex flex-col gap-1 mt-5 ml-4 mr-20">
                <p>Model : <span className="font-bold">Mercedes C63 AMG</span></p>
                <p>Kilometrage : <span className="font-bold">44 117 KM</span></p>
                <p>Carburant : <span className="font-bold">Essence</span></p>
                <p>Année : <span className="font-bold">2020</span></p>
                <p>Prix : <span className="font-bold">78 890 €</span></p>

                <a href="/mercedes-c63-amg"><motion.button

                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white w-full text-black rounded-lg cursor-pointer">
                    En savoir plus
                </motion.button></a>

                
                </div>

                <div>
                    <img className="w-70 h-49 rounded-r-lg" src="/c63.png"></img>
                </div>

            </div>


            <div className="flex flex-row bg-black border border-white rounded-lg justify-center w-max h-max">

                <div className="flex flex-col gap-1 mt-5 ml-4 mr-20">
                <p>Model : <span className="font-bold">Mercedes GLC</span></p>
                <p>Kilometrage : <span className="font-bold">82 131 KM</span></p>
                <p>Carburant : <span className="font-bold">Hybride</span></p>
                <p>Année : <span className="font-bold">2022</span></p>
                <p>Prix : <span className="font-bold">50 900 €</span></p>

                <a href="/mercedes-glc"><motion.button

                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white w-full text-black rounded-lg cursor-pointer">
                    En savoir plus
                </motion.button></a>

                
                </div>

                <div>
                    <img className="w-70 h-49 rounded-r-lg" src="/glc.png"></img>
                </div>

            </div>

            <div className="flex flex-row bg-black border border-white rounded-lg justify-center w-max h-max">

                <div className="flex flex-col gap-1 mt-5 ml-4 mr-20">
                <p>Model : <span className="font-bold">Mercedes Classe GLE</span></p>
                <p>Kilometrage : <span className="font-bold">59 189 KM</span></p>
                <p>Carburant : <span className="font-bold">Hybride</span></p>
                <p>Année : <span className="font-bold">2020</span></p>
                <p>Prix : <span className="font-bold">68 900 €</span></p>

                <a href="/mercedes-gle"><motion.button

                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white w-full text-black rounded-lg cursor-pointer">
                    En savoir plus
                </motion.button></a>

                
                </div>

                <div>
                    <img className="w-70 h-49 rounded-r-lg" src="/gle.png"></img>
                </div>

            </div>
        </div>
    
</div>


<motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
className="flex flex-row justify-between mt-20 h-200">
    <div className="flex justify-start w-100 ml-10 flex-col">
        <p className="text-5xl">Réservez votre prochain rendez-vous chez le concessionnaire.</p>
        <div className="border-b-3 mt-20"></div>
    </div>

    <div className="flex">
        <img src="boutique.png"></img>
    </div>
</motion.div>



    <div className="mt-20 flex flex-col items-center">
    <p className="text-4xl font-bold">Avantages Mercedes</p>

    <div className="flex flex-row mt-20 gap-40">

    <div className="flex bg-zinc-800 w-100 h-50 rounded-2xl flex-col items-center border-2 border-white group hover:bg-zinc-700 transition-colors duration-300">
    <Gem className="w-15 h-15 text-gray-400 group-hover:text-white mt-5 transition-colors duration-300" />
    <div className="flex justify-center items-center w-90">
    <p className="text-1xl mt-5 text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
      Profitez d’avantages exclusifs et d’un service premium, parce que chaque kilomètre compte avec Mercedes.
    </p>
    </div>
    </div>

    <div className="flex bg-zinc-800 w-100 h-50 rounded-2xl flex-col items-center border-2 border-white group hover:bg-zinc-700 transition-colors duration-300">
    <Percent className="w-15 h-15 text-gray-400 group-hover:text-white mt-5 transition-colors duration-300" />
    <div className="flex justify-center items-center w-90">
    <p className="text-1xl mt-5 text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
      Obtenez des offres exclusifs rien que pour vous en rejoignant notre programme de fidélité !
    </p>
    </div>
    </div>

    <div className="flex bg-zinc-800 w-100 h-50 rounded-2xl flex-col items-center border-2 border-white group hover:bg-zinc-700 transition-colors duration-300">
    <Wrench className="w-15 h-15 text-gray-400 group-hover:text-white mt-5 transition-colors duration-300" />
    <div className="flex justify-center items-center w-90">
    <p className="text-1xl mt-5 text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
      Ayez des avantages et des promotions sur vos Contrôle Technique chez Mercedes.
    </p>
    </div>
    </div>

    </div>
</div>

<motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="mt-30 flex flex-row"
>
    <div className="w-350">
        <img className="rounded-2xl" src="/merc2.jpg"></img>
    </div>

    <div className="flex flex-col w-200">
        <p className="text-5xl ml-5">Rejoignez plus de 100 000 Utilisateur à travers le monde !</p>
        <div className="border-b-3 w-120 ml-5 mt-15"></div>
    </div>
</motion.div>

    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className="mt-50 flex flex-row">
        <div className="flex flex-col w-200">
            <p className="text-6xl ml-5">Suivez-nous sur nos réseaux</p>
            <div className="border-b-3 ml-5 mt-15 w-120"></div>

      <div className="flex gap-15 mt-15 ml-5">
      
      <a href="https://instagram.com/mercedesbenz"><div className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer
                      transition-transform duration-300 hover:scale-110 
                      hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-yellow-400">
        <Instagram className="w-6 h-6 text-white" />
      </div></a>

      
      <a href="https://www.linkedin.com/company/mercedes-benz-france/?originalSubdomain=fr"><div className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer
                      transition-transform duration-300 hover:scale-110
                      hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-400">
        <Linkedin className="w-6 h-6 text-white" />
      </div></a>

      
      <a href="https://x.com/mbfrance_"><div className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer
                      transition-transform duration-300 hover:scale-110
                      hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-200">
        <Twitter className="w-6 h-6 text-white" />
      </div></a>

      
      <a href="https://www.youtube.com/@MercedesBenz"><div className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer
                      transition-transform duration-300 hover:scale-110
                      hover:bg-gradient-to-br hover:from-red-600 hover:to-red-400">
        <Youtube className="w-6 h-6 text-white" />
      </div></a>
      
    </div>
        </div>

        <div className="w-300">
            <img className="rounded-2xl" src="daria.jpg"></img>
        </div>
    </motion.div>
    
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
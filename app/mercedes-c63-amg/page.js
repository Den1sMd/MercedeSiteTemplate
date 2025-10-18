"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CarPage() {
  const images = ["/c63/1.png", "/c63/2.png", "/c63/3.png"];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [numero, setNumero] = useState("Voir le numéro")

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const changeNumero = () => {
  setNumero((prev) =>
    prev === "Voir le numéro" ? "0102819201" : "Voir le numéro"
  );
  };


 

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
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


        <div className="flex flex-col items-center min-h-screen overflow-x-hidden">

        <div className="flex flex-row justify-center h-screen w-screen gap-15 mt-30">
        
        <div className="flex flex-col bg-black w-[500px] h-[350px] rounded-md border border-white ">

    <div className="flex flex-row h-full w-full">

        <div 
        onClick={() => openModal(0)}
        className="flex w-[290px] h-[270px] rounded-3xl cursor-pointer">
        <img className="rounded-tl-md w-full h-full border border-white object-cover" src={images[0]} alt="Image 1"/>
        </div>

        <div className="flex flex-col w-full h-full">

        <div 
        onClick={() => openModal(1)}
        className="flex w-full h-[135px] rounded-3xl cursor-pointer">
            <img className="rounded-tr-md w-full h-full border border-white object-cover" src={images[1]} alt="Image 2"/>
        </div>

        <div 
        onClick={() => openModal(2)}
        className="flex w-full h-[135px] rounded-3xl cursor-pointer">
            <img className="w-full h-full border border-white object-cover" src={images[2]} alt="Image 3"/>
        </div>

        </div>

    </div>

    <div className="flex mb-20 h-full bg-zinc-800 w-full pb-7 border border-white rounded-b-md">
        <p className="text-xl ml-5 mt-5">Mercedes Classe C coupe AMG 63 S</p>
        <p className="text-xl ml-5 mt-5">Prix : 78890€</p>
    </div>

    {selectedImageIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div
            className="relative max-w-4xl w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-0 right-1 text-white text-3xl"
            >
              <X size={50} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 text-white text-3xl"
            >
              <ChevronLeft size={50} />
            </button>

            <img
              src={images[selectedImageIndex]}
              alt="Grande image"
              className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 text-white text-3xl"
            >
              <ChevronRight size={50} />
            </button>
          </div>
        </div>
      )}

    

    <div className="border-b-1 border border-white"></div>

    <div className="flex flex-col">
        <div className="pt-10">
            <p className="font-bold text-xl">Les informations clés</p>
        </div>

        <div className="flex flex-row pt-5 gap-40 w-max h-max">

        <div className="flex flex-col gap-4 w-80">

        <div className="flex flex-row justify-between">
            <p>Marque</p>
            <p className="font-bold">MERCEDES-BENZ</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Année modèle</p>
            <p className="font-bold">2020</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Énergie</p>
            <p className="font-bold">Essence</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Nombre de portes</p>
            <p className="font-bold">2</p>
        </div>

        </div>


        <div className="flex flex-col gap-4 w-80">

        <div className="flex flex-row justify-between">
            <p>Modèle</p>
            <p className="font-bold">Classe C</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Kilométrage</p>
            <p className="font-bold">44117 km</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Boîte de vitesse</p>
            <p className="font-bold">Automatique</p>
        </div>

        <div className="flex flex-row justify-between">
            <p>Nombre de place(s)</p>
            <p className="font-bold">4</p>
        </div>

        </div>

        </div>
    </div>

    <div className="border-b-1 border border-white mt-10"></div>

    <div className="flex flex-col w-full max-w-[600px] mt-5">
  <p className="font-bold text-2xl mb-3">Description</p>

  <div className="bg-zinc-800 text-white p-4 rounded-lg shadow-md border border-zinc-700 ">
    <p className="leading-relaxed text-sm md:text-base ">
      Cette voiture est équipée d’un moteur puissant, d’un design sportif et d’un intérieur luxueux.
      Elle offre des performances exceptionnelles tout en conservant un confort remarquable pour le conducteur et les passagers.
      
    </p>
  </div>
</div>




    </div>

    


        <div className="flex bg-zinc-800 w-[300] h-[250] rounded-md border border-white">
            <div className="flex flex-col items-center w-full h-full">
                <div className="flex flex-row w-full h-full">

                    <div className="flex justify-start w-50 h-30 pl-5 pb-5 ">
                        <img className="w-15" src="/c63/Mercedes-Logo.svg"></img>
                    </div>

                    <div className="flex w-full h-full pt-8 pr-5">
                        <p className="text-xl">Mercedes Paris</p>
                    </div>

                </div>
                    
                <div className="flex flex-col justify-center items-center w-full h-full gap-4 mb-40">
                <a href="/login"><button
                className="bg-blue-950 w-60 h-10 rounded-xl cursor-pointer text-white font-semibold transition-all duration-300 ease-in-out hover:bg-blue-800 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40">
                    Envoyer un message
                </button></a>

                <button 
                onClick={changeNumero}
                className="bg-white w-60 h-10 rounded-xl cursor-pointer text-black font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50">
                    {numero}
                </button>
                </div>


                <div>
                    
                </div>
            </div>

        

        </div>

        </div>

        


        </div>

        
        
        </>
    )
}
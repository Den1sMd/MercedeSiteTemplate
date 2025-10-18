"use client";
import { useState, useEffect } from "react";


export default function LoginPage() {

  const images = ["/mercedes.jpg", "/mercedes2.jpg", "/mercedes3.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000)

    return (() => clearInterval(interval))
  }, [])



  return (
    <div className="flex justify-between items-center w-full h-screen">
      <div className="w-1/2 flex justify-center items-center">

        <form className="bg-neutral-900 w-[550px] h-[450px] rounded-lg flex justify-between">
          <div className="flex flex-col justify-center p-10 w-1/2">
              <img src="/Mercedes-Logo.png" className="w-[150px]"/>
              
              <p className="pt-10 font-bold">Commencez votre aventure dès maintenant en rejoignant Mercedes.</p>

              <p className="text-sm pt-5">Pas encore de compte ? Créez-en un en cliquant <a href="/register" className="font-bold">ici </a></p>
          </div>

          <div className="flex flex-col pt-10px justify-center items-center w-1/2 pr-10">
            <div className="flex flex-col justify-center items-center w-[250px] h-[300px] border border-white rounded-lg gap-1">
            <p className="font-bold">Connexion</p>

            <div className="flex flex-col p-5 gap-2">
              <label>Email</label>
              <input type="text" className="border-2 p-3 rounded-md text-sm" placeholder="denis@gmail.com"/>

              <label>Mot de passe</label>
              <input type="password" className="border-2 p-3 rounded-md text-sm" placeholder="*****"/>

              <div className="flex justify-center items-center">
              <button className="mt-2 w-1/2 h-[40px] bg-zinc text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]">
              Connexion
              </button>


              </div>
              

            </div>
          </div>
          </div>
        
        </form>
        </div> 


      <div className="w-1/2 h-full relative overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
          alt="Mercedes"
        />
      ))}
    </div>

    </div>
  );
}

"use client";
import { useState, useEffect } from "react";


export default function RegisterPage() {

    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen">

        <div className="bg-neutral-900 w-[550px] h-[550px] rounded-lg  flex flex-col items-center">
            <img src="/Mercedes-Logo.png" className="w-[100px] pt-5"></img>


            <div className="flex flex-col p-5 gap-2">
              <label>Email</label>
              <input type="text" className="border-2 p-3 rounded-md text-sm" placeholder="denis@gmail.com"/>

              <label>Mot de passe</label>
              <input type="password" className="border-2 p-3 rounded-md text-sm" placeholder="*****"/>

              <label className="pt-3">Confirmer votre mot de passe</label>
              <input type="password" className="border-2 p-3 rounded-md text-sm" placeholder="*****"/>

              <div className="flex justify-center items-center pt-5">
              <button className="mt-2 w-1/2 h-[40px] bg-zinc text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]">
              S'enregistrer
              </button>
              </div>
              
            <div className="flex pt-4">

                <p>Vous avez déja un compte ? Cliquer <a className="font-bold" href="/login">Ici</a> pour vous connecté !</p>

            </div>

            </div>

            
        </div>

        </div>
        </>
    )
}

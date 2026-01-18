"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schéma identique à l'API
const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur serveur");

      setIsSuccess(true);
      reset(); // Vide le formulaire

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (e) {
      setError("Une erreur est survenue. Réessayez plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative overflow-hidden bg-[#111] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
      {/* Petit effet de lumière en haut à droite */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="space-y-8 relative z-10">
        {/* --- Champ NOM --- */}
        <div className="group">
          <label
            htmlFor="name"
            className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-cyan-400 transition-colors">
            Nom complet
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {/* Icône User */}
              <svg
                className={`w-5 h-5 transition-colors ${errors.name ? "text-red-400" : "text-gray-500 group-focus-within:text-cyan-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              {...register("name")}
              className={`w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:bg-black transition-all duration-300 ${
                errors.name
                  ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                  : "focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              }`}
              placeholder="Votre nom..."
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* --- Champ EMAIL / ENTREPRISE --- */}
        <div className="group">
          <label
            htmlFor="email"
            className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-cyan-400 transition-colors">
            Email / Entreprise
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              {/* Icône Building/Mail  */}
              <svg
                className={`w-5 h-5 transition-colors ${errors.email ? "text-red-400" : "text-gray-500 group-focus-within:text-cyan-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m8-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m-4-5h9M9 7h6"
                />
              </svg>
            </div>
            <input
              {...register("email")}
              type="email"
              className={`w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:bg-black transition-all duration-300 ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                  : "focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              }`}
              placeholder="contact@entreprise.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* --- Champ MESSAGE --- */}
        <div className="group">
          <label
            htmlFor="message"
            className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1 group-focus-within:text-cyan-400 transition-colors">
            Votre Message
          </label>
          <div className="relative">
            <div className="absolute top-4 left-4 pointer-events-none">
              {/* Icône Message */}
              <svg
                className={`w-5 h-5 transition-colors ${errors.message ? "text-red-400" : "text-gray-500 group-focus-within:text-cyan-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <textarea
              {...register("message")}
              rows={5}
              className={`w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:bg-black transition-all duration-300 resize-none ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                  : "focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              }`}
              placeholder="Votre message ici..."
            />
          </div>
          {errors.message && (
            <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* --- BOUTON D'ENVOI --- */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative overflow-hidden group bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-900/20">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Envoi en cours...</span>
              </>
            ) : isSuccess ? (
              <>
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Message envoyé !</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </div>
        </button>

        {/* --- FEEDBACK --- */}
        {isSuccess && (
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium animate-pulse">
            Merci ! Votre message a bien été reçu.
          </div>
        )}
        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium">
            {error}
          </div>
        )}
      </div>
    </form>
  );
};

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schéma identique à l'API pour la validation côté client
const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erreur serveur');

      setIsSuccess(true);
      reset(); // Vide le formulaire
      
      // Enlève le message de succès après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (e) {
      setError("Une erreur est survenue. Réessayez plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
      
      {/* Champ Nom */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-400">Nom complet</label>
        <input
          {...register('name')}
          className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
            errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
      </div>

      {/* Champ Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
        <input
          {...register('email')}
          className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${
            errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
          }`}
          placeholder="john@exemple.com"
        />
        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
      </div>

      {/* Champ Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
        <textarea
          {...register('message')}
          rows={5}
          className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
          }`}
          placeholder="Bonjour, je vous contacte pour..."
        />
        {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Envoi...
          </>
        ) : isSuccess ? (
          "Message envoyé !"
        ) : (
          "Envoyer le message"
        )}
      </button>

      {/* Feedback visuel */}
      {isSuccess && (
        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm">
          Merci ! Je vous répondrai dans les plus brefs délais.
        </div>
      )}
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm">
          {error}
        </div>
      )}
    </form>
  );
};
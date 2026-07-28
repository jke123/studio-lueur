"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const services = [
  "Mariage",
  "Portrait",
  "Corporate",
  "Événementiel",
  "Mode",
  "Autre",
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || name.length < 2) next.name = "Merci d'indiquer votre nom.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Adresse e-mail invalide.";
    if (!message || message.length < 10)
      next.message = "Décrivez votre projet en quelques mots (10 caractères min).";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return; // anti double-envoi

    const data = new FormData(e.currentTarget);
    if (!validate(data)) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Configuration EmailJS manquante. Renseignez .env.local à partir de .env.example."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        });
      }
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-gold">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 w-full rounded-lg border border-white/15 bg-ink-900 px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
            placeholder="Votre nom"
          />
          {errors.name && (
            <p className="mt-1.5 font-body text-xs text-wine-light">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-gold">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-lg border border-white/15 bg-ink-900 px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
            placeholder="vous@exemple.com"
          />
          {errors.email && (
            <p className="mt-1.5 font-body text-xs text-wine-light">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide text-gold">
            Téléphone (optionnel)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-white/15 bg-ink-900 px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
            placeholder="+229 00 00 00 00"
          />
        </div>
        <div>
          <label htmlFor="service" className="font-mono text-xs uppercase tracking-wide text-gold">
            Type de projet
          </label>
          <select
            id="service"
            name="service"
            defaultValue="Mariage"
            className="mt-2 w-full rounded-lg border border-white/15 bg-ink-900 px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-gold">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-ink-900 px-4 py-3 font-body text-sm text-bone outline-none transition-colors focus:border-gold"
          placeholder="Décrivez votre projet, la date envisagée et le lieu…"
        />
        {errors.message && (
          <p className="mt-1.5 font-body text-xs text-wine-light">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-body text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 font-body text-sm text-gold"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Message envoyé — nous vous répondrons rapidement.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg border border-wine-light/40 bg-wine/10 px-4 py-3 font-body text-sm text-wine-light"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            L&apos;envoi a échoué. Vérifiez la configuration EmailJS ou contactez-nous directement.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

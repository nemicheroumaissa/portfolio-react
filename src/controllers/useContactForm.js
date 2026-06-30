import { useState } from "react";

const RECIPIENT = "nemicheroumaissa7@gmail.com";

/**
 * CONTROLLER — gère l'état du formulaire et l'envoi via mailto.
 */
export function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio — message de ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n---\nNom : ${form.name.trim()}\nEmail : ${form.email.trim()}`
    );

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  };

  return { form, status, update, submit };
}

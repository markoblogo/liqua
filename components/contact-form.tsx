"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "broker",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="rounded-2xl border border-black/15 p-6 sm:p-8">
      {submitted ? (
        <div className="rounded-xl border border-black/20 bg-black/[0.02] p-5">
          <p className="text-base font-medium text-black">Request received.</p>
          <p className="mt-2 text-sm text-black/70">
            We will contact you shortly with next steps.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 rounded-full border border-black px-4 py-1.5 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Request access form">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              id="name"
              label="Name"
              value={form.name}
              onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
              required
            />
            <Input
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              id="company"
              label="Company"
              value={form.company}
              onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
              required
            />
            <label className="space-y-1 text-sm font-medium text-black/80" htmlFor="role">
              Role
              <select
                id="role"
                value={form.role}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, role: event.target.value }))
                }
                className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm text-black outline-none transition focus:border-black"
              >
                <option value="broker">Broker</option>
                <option value="trader">Trader</option>
                <option value="farmer">Farmer</option>
                <option value="partner">Partner / Investor</option>
              </select>
            </label>
          </div>

          <label className="space-y-1 text-sm font-medium text-black/80" htmlFor="message">
            Message
            <textarea
              id="message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="min-h-28 w-full rounded-lg border border-black/20 px-3 py-2 text-sm text-black outline-none transition focus:border-black"
              placeholder="Tell us your role and what access you need."
            />
          </label>

          <button
            type="submit"
            className="rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Send request
          </button>
        </form>
      )}
    </div>
  );
}

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

function Input({ id, label, type = "text", value, onChange, required }: InputProps) {
  return (
    <label className="space-y-1 text-sm font-medium text-black/80" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm text-black outline-none transition focus:border-black"
      />
    </label>
  );
}

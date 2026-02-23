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
    <div className="surface-card section-fade" data-ascii-role="card">
      {submitted ? (
        <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] p-5">
          <p className="text-base font-medium text-[var(--text)]">Request received.</p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            We will contact you shortly with next steps.
          </p>
          <button type="button" onClick={() => setSubmitted(false)} className="button-secondary mt-4">
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
            <label className="space-y-1 text-sm font-medium text-[var(--muted)]" htmlFor="role">
              Role
              <select
                id="role"
                value={form.role}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, role: event.target.value }))
                }
                className="field-input"
              >
                <option value="broker">Broker</option>
                <option value="trader">Trader</option>
                <option value="farmer">Farmer</option>
                <option value="partner">Partner / Investor</option>
              </select>
            </label>
          </div>

          <label className="space-y-1 text-sm font-medium text-[var(--muted)]" htmlFor="message">
            Message
            <textarea
              id="message"
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="field-input min-h-28"
              placeholder="Tell us your role and what access you need."
            />
          </label>

          <button type="submit" className="button-primary" data-ascii-role="cta">
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
    <label className="space-y-1 text-sm font-medium text-[var(--muted)]" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="field-input"
      />
    </label>
  );
}

"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  website: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  role: "broker",
  message: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/request-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form
        })
      });

      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Unable to submit request. Please try again.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setError("Unable to submit request. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="surface-card section-fade" data-ascii-role="card">
        <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] p-5">
          <p className="text-base font-medium text-[var(--text)]">Request received.</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">
            Thank you. We reply personally to early access and partnership inquiries.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="button-secondary mt-4"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card section-fade" data-ascii-role="card">
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
          <label className="space-y-1.5 text-[0.95rem] font-medium text-[var(--text)]" htmlFor="role">
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

        <label className="space-y-1.5 text-[0.95rem] font-medium text-[var(--text)]" htmlFor="message">
          Message
          <textarea
            id="message"
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            className="field-input min-h-28"
            placeholder="Briefly describe your profile and collaboration interest."
          />
        </label>

        <label className="hidden" htmlFor="website">
          Website
          <input
            id="website"
            value={form.website}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, website: event.target.value }))
            }
            className="field-input"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <div className="space-y-3">
          <button
            type="submit"
            className="button-primary"
            data-ascii-role="cta"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Request access"}
          </button>

          {status === "error" ? (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          ) : null}

          <div className="text-sm leading-relaxed text-[var(--muted)]">
            <p><strong>Early access / partnership conversations.</strong></p>
            <p>We reply personally. No mailing list spam.</p>
          </div>
        </div>
      </form>
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
    <label className="space-y-1.5 text-[0.95rem] font-medium text-[var(--text)]" htmlFor={id}>
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

"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "pending" | "success" | "error";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      setError("Enter a valid work email address.");
      return;
    }
    setError(null);
    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className="signup-success">Thanks — we&rsquo;ll be in touch shortly.</p>;
  }

  return (
    <form className="signup" onSubmit={handleSubmit} noValidate>
      <div className="signup-row">
        <div className="field">
          <input
            className="input"
            type="email"
            required
            placeholder="you@company.com"
            aria-label="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "pending"}
          />
          {error && <div className="field-error">{error}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={status === "pending"}>
          {status === "pending" ? "Sending…" : "Talk to us"}
        </button>
      </div>
    </form>
  );
}

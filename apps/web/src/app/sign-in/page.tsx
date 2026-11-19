"use client";

import { useState } from "react";

/**
 * Placeholder auth shell — wired to Supabase Auth in Module 01.
 * This page exists to validate the routing and design system only.
 */
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-lg border border-line bg-surface p-8 shadow-card">
        <h1 className="text-xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-1 text-sm text-ink-secondary">
          Welcome back. Enter your email to continue.
        </p>
        {submitted ? (
          <p className="mt-6 rounded-md bg-accent-soft px-4 py-3 text-sm text-accent">
            Auth is configured in Module 01. For now this confirms routing works.
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="block text-sm font-medium">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-line px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Continue
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

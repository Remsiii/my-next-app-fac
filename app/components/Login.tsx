'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tlpjwjtoazgvikfuxjkh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscGp3anRvYXpndmlrZnV4amtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNTc1ODcsImV4cCI6MjA0OTkzMzU4N30.EC6gDsulJlHexoYN-70Ot2WIKp6KkNl2BpiFR6p0ot0'
);

const handleSignup = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase
      .from('users') // Tabelle: users
      .insert([{ email, password }]); // Einfügen von email & password

    if (error) {
      console.error('Fehler beim Einfügen:', error.message);
      return { success: false, error: error.message };
    }

    console.log('Benutzer erfolgreich registriert:', data);
    return { success: true };
  } catch (err) {
    console.error('Unerwarteter Fehler:', err);
    return { success: false, error: 'Unerwarteter Fehler aufgetreten' };
  }
};

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleSignup(email, password);
    if (result.success) {
      console.log('Signup erfolgreich');
      router.push('/404'); // Navigiere zur Erfolgsseite
    } else {
      console.error('Signup fehlgeschlagen:', result.error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-[396px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full bg-blue-600 text-white text-xl font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
          type="submit"
        >
          Registrieren
        </button>
      </form>
    </div>
  );
}

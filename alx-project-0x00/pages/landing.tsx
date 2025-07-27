import React from "react";
import Button from "../components/Button";

const Landing = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-2xl font-semibold">Landing Page Buttons</h1>

      <div className="flex flex-wrap gap-4">
        <Button title="Small + rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Medium + rounded-md" size="medium" shape="rounded-md" />
        <Button title="Large + rounded-full" size="large" shape="rounded-full" />
      </div>
    </main>
  );
};

export default Landing;

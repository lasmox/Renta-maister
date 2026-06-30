export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-6xl font-extrabold tracking-tight text-destructive mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-2">Stranica nije pronađena</h2>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Žao nam je, ali stranica koju tražite ne postoji ili je premještena.
      </p>
      <a 
        href="/" 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:opacity-90 transition-opacity"
      >
        Povratak na početnu
      </a>
    </div>
  );
}

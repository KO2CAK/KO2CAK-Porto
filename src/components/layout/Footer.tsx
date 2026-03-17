export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {year} Koko Yoga Adhitya. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Marine Surveyor & Naval Architect
        </p>
      </div>
    </footer>
  )
}

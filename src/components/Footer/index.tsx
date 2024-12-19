
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-12 sm:flex-row-reverse">
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Anki AI Generator. Todos os direitos reservados.</span>{" "}
        </p>
      </section>
    </footer>
  );
}
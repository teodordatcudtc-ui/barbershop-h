export function ContactInfo() {
  return (
    <div>
      <h2 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">
        Date contact
      </h2>
      <address className="not-italic space-y-3 text-text-muted">
        <p className="text-text">Barbershop H</p>
        <p>Aleea Huedin 3</p>
        <p>077120 București</p>
        <p>
          <a
            href="tel:0774012673"
            className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
          >
            0774 012 673
          </a>
        </p>
      </address>
    </div>
  );
}

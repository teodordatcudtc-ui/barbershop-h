export function MapEmbed() {
  return (
    <div className="rounded-sm overflow-hidden border border-white/10 bg-bg-elevated">
      <div className="aspect-[4/3] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5229.592242833303!2d26.10419245346332!3d44.38277161072947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffc8da84c0d5%3A0x905cb7136a8fb40e!2sBarbershop%20H!5e0!3m2!1sen!2sro!4v1770456556104!5m2!1sen!2sro"
          width="600"
          height="450"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locația Barbershop H pe Google Maps"
        />
      </div>
    </div>
  );
}

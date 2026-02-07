# Barbershop H – Site web

Site multi-pagină Next.js pentru **Barbershop H** (frizerie, București). Design premium, asimetric, inspirat din estetica barbershop-urilor high-end.

## Stack

- **Next.js 14** (App Router) – routing, SSR, metadata, sitemap/robots
- **React 18** + **TypeScript**
- **Tailwind CSS** – design system (culori, fonturi)
- **Framer Motion** – animații și micro-interacțiuni

**De ce App Router:** layout-uri pe pagină, `generateMetadata`/`generateStaticParams` pentru SEO și pagini statice, convenție modernă Next.js.

## Structura paginilor

| URL | Pagină |
|-----|--------|
| `/` | Acasă (hero, poveste, servicii teaser, CTA) |
| `/despre-noi` | Despre noi (misiune, viziune, echipă) |
| `/servicii` | Listă servicii |
| `/servicii/[slug]` | Pagină dedicată fiecărui serviciu |
| `/galerie` | Galerie (layout non-clasic) |
| `/contact` | Contact (formular validat + date + Google Maps) |
| `/legal/privacy` | Politica de confidențialitate |
| `/legal/terms` | Termeni și condiții |

Plus: `sitemap.xml` și `robots.txt` generate dinamic (Next.js).

## Comenzi de rulat (copy-paste)

```bash
# 1. Instalare dependențe
npm install

# 2. Rulare în development
npm run dev
```
Deschide [http://localhost:3000](http://localhost:3000).

```bash
# 3. Build pentru producție
npm run build

# 4. Rulare build (după npm run build)
npm start
```

```bash
# 5. Lint (opțional)
npm run lint
```

## Variabile de mediu (opțional)

- `NEXT_PUBLIC_SITE_URL` – URL-ul public al site-ului (ex: `https://barbershop-h.ro`), folosit în `sitemap.xml` și `robots.txt`. Dacă lipsește, se folosește un URL implicit.

## TO-DO list – verificare post-generare

- [ ] **Instalare:** rulează `npm install` în rădăcina proiectului.
- [ ] **Dev:** rulează `npm run dev` și deschide http://localhost:3000.
- [ ] **Acasă:** verifică hero-ul (titlu mare, CTA „Programează”), secțiunile Poveste, Servicii, CTA final.
- [ ] **Navigare:** toate linkurile din header/footer deschid pagini reale (fără anchor scroll); fiecare pagină are URL propriu.
- [ ] **Despre noi:** conținut misiune, viziune, echipă.
- [ ] **Servicii:** listă servicii; click pe fiecare duce la `/servicii/[slug]`; breadcrumb pe pagină serviciu.
- [ ] **Galerie:** layout neuniform (grid cu elemente tall/wide/square); poți înlocui placeholderele cu imagini reale.
- [ ] **Contact:** formular cu validare (nume, email, telefon, mesaj); afișare telefon 0774 012 673, adresă Aleea Huedin 3; Google Maps embed (iframe-ul furnizat) se încarcă corect.
- [ ] **Legal:** `/legal/privacy` și `/legal/terms` se deschid și sunt lizibile; linkuri între ele și către Contact.
- [ ] **SEO:** titluri și descrieri pe pagini; verifică în view-source sau cu un add-on SEO că meta-urile sunt corecte.
- [ ] **Accesibilitate:** focus vizibil pe butoane/linkuri; label-uri pe formular; `aria-*` unde e cazul; heading-uri ierarhice.
- [ ] **Build:** rulează `npm run build`; nu trebuie să apară erori. Apoi `npm start` și verifică din nou paginile principale.
- [ ] **Deploy:** setează `NEXT_PUBLIC_SITE_URL` în mediul de producție pentru sitemap/robots corecte.

## Conținut și date

- **Business:** Barbershop H  
- **Telefon:** 0774 012 673  
- **Adresă:** Aleea Huedin 3, 077120 București  
- **Google Maps:** iframe-ul din brief este integrat în pagina Contact.

Serviciile sunt definite în `data/services.ts`; poți adăuga/edita slug, titlu, descrieri, durată, preț.

## Licență

Privat. © Barbershop H.

# Design Station

Editorial brand site for **Design Station** — exclusive Iranian distributor of
premium faucets, ceramics, and lighting brands, with a flagship showroom at
Palladium (Tehran) and a UAE entity in Dubai.

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Language**: Farsi, RTL (`<html lang="fa" dir="rtl">`)
- **Typography**: Vazirmatn (Persian) + Cormorant Garamond (Latin display)
- **Palette**: Cream `#F5F0E6` · Sage `#9A9B78` · Walnut `#3A2E24`

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build order

1. **Foundation + RTL** ✅ — palette, fonts, metadata, blank landing
2. Design system primitives
3. Layout shell (Header / Footer / mobile nav)
4. Home page sections
5. About + Contact
6. Sanity CMS
7. Category + Brand pages
8. Projects gallery
9. Showroom booking
10. Polish, SEO, launch

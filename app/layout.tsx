import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دیزاین استیشن | نمایندگی انحصاری برندهای لاکچری",
  description:
    "دیزاین استیشن، نماینده انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران. شوروم پالادیوم، تهران.",
  keywords: [
    "دیزاین استیشن",
    "design station",
    "شیرآلات لاکچری",
    "سرامیک ایتالیایی",
    "روشنایی دکوراتیو",
    "شوروم پالادیوم",
    "گسی",
    "دورنبراخت",
    "gessi",
    "dornbracht",
  ],
  metadataBase: new URL("https://designstation.ir"),
  openGraph: {
    title: "دیزاین استیشن",
    description:
      "نماینده انحصاری برندهای معتبر شیرآلات، سرامیک و روشنایی در ایران.",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-cream-100 text-walnut-800 antialiased">
        {children}
      </body>
    </html>
  );
}

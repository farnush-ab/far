import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نوراکو | قطعات چرخ خیاطی صنعتی",
  description:
    "نوراکو، تخصصی‌ترین مرجع قطعات چرخ‌های خیاطی صنعتی در ایران. کیفیت و اصالت تضمین‌شده، پشتیبانی حرفه‌ای، خدمات پس از فروش.",
  keywords: [
    "نوراکو",
    "nooraco",
    "چرخ خیاطی صنعتی",
    "قطعات چرخ خیاطی",
    "راسته دوز",
    "سردوز",
    "میاندوز",
    "PIN",
    "STRONG H",
  ],
  metadataBase: new URL("https://nooraco.ir"),
  openGraph: {
    title: "نوراکو | قطعات چرخ خیاطی صنعتی",
    description: "مرجع تخصصی قطعات چرخ‌های خیاطی صنعتی",
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
      <body className="bg-ink-50 text-ink-900 antialiased">{children}</body>
    </html>
  );
}

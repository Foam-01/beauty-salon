import "./globals.css";

/**
 * ไฟล์ Layout หลักสำหรับตั้งค่า SEO Metadata และ Google Verification
 * ปรับปรุง: รวม Metadata เป็นชุดเดียว และใส่รหัสยืนยันจาก Google Search Console เรียบร้อยแล้ว
 */

export const metadata = {
  title: "Gloy Hair Salon & Makeup | กำแพงเพชร",
  description:
    "ร้านทำผมและแต่งหน้า กำแพงเพชร บริการทำสีผมแฟชั่น ดัดวอลุ่ม ยืดผมพรีเมียม เคราตินทรีทเมนท์ และบริการแต่งหน้าเจ้าสาว แต่งหน้ารับปริญญา แต่งหน้าเจ้าบ่าว โดยช่างมืออาชีพ",
  keywords:
    "ร้านทำผม กำแพงเพชร, แต่งหน้าเจ้าสาว กำแพงเพชร, ดัดผม กำแพงเพชร, เคราติน กำแพงเพชร, ร้านทำผมแนะนำ กำแพงเพชร, แต่งหน้าออกงาน ร้านแต่งหน้าทำผม กำแพงเพชร",
  authors: [{ name: "Gloy Hair Salon" }],
  viewport: "width=device-width, initial-scale=1",
  
  // ส่วนการยืนยันตัวตนกับ Google Search Console (ห้ามลบ)
  verification: {
    google: "a4ce982d0c3bf7bd", 
  },

  // ข้อมูลสำหรับเวลาแชร์ลิงก์ลง Facebook / Line จะมีรูปและข้อความสวยๆ
  openGraph: {
    title: "Gloy Hair Salon & Makeup | กำแพงเพชร",
    description: "เนรมิตความงามที่สะท้อนตัวตนของคุณ จังหวัดกำแพงเพชร",
    url: "https://gloyjai.netlify.app",
    siteName: "Gloy Hair Salon",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
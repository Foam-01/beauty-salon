import "./globals.css";

/**
 * ไฟล์ Layout หลักสำหรับตั้งค่า SEO Metadata ของร้าน Gloy Hair Salon
 * ปรับปรุง: ใส่ข้อมูลร้านและใช้ฟอนต์มาตรฐานระบบ (ลบการตั้งค่าฟอนต์ Geist ออก)
 */

export const metadata = {
  title: "Gloy Hair Salon & Makeup | กำแพงเพชร",
  description:
    "ร้านทำผมและแต่งหน้า กำแพงเพชร ทำสี ดัด ยืด เคราติน แต่งหน้าเจ้าสาว รับปริญญา แต่งหน้าเจ้าสาว แต่งหน้าเจ้าบ่าว",
  keywords:
    "ร้านทำผม กำแพงเพชร, แต่งหน้าเจ้าสาว, ดัดผม กำแพงเพชร, เคราติน",
  authors: [{ name: "Gloy Hair Salon" }],
  viewport: "width=device-width, initial-scale=1",
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
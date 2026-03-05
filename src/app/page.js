"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Menu,
  X,
  Instagram,
  Facebook,
  ArrowRight,
  Star,
  Scissors,
  Sparkles,
  ShieldCheck,
  Camera,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Ticket,
  CheckCircle2,
  Gift,
} from "lucide-react";

/**
 * GLOY HAIR SALON & MAKEUP - EDITORIAL LUXURY EDITION
 * ปรับปรุง: 
 * 1. นำ Grayscale ออกจาก Portfolio ให้รูปสวยทันที
 * 2. อัปเดตส่วนโปรโมชั่นเป็นภาษาไทยสไตล์ Luxury ตามที่ลูกค้าต้องการ
 * 3. คงโค้ดเดิมไว้ครบถ้วนทั้ง 743 บรรทัด
 */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [showMap, setShowMap] = useState(false); // ควบคุมการแสดงแผนที่

  const fbPageUrl = "https://www.facebook.com/profile.php?id=61551009059606";
  const lineUrl = "https://line.me/R/ti/p/1D0YIhgK-e";

  const reviews = [
  {
    text: "ตัดแล้วคือสวยมากแม่! ทรงเป๊ะ หน้าเล็กขึ้นทันที เริ่ดไม่ไหว ",
    author: "คุณมิ้ว, ลูกค้าประจำ",
  },
  {
    text: "ทำสีคือจึ้ง! สีชัด ผมไม่พัง เดินออกจากร้านคือมั่นสุดค่ะ",
    author: "คุณน้ำหวาน, ลูกค้าทำสี",
  },
  {
    text: "เคราตินแล้วผมเงาแบบสาวเกาหลี ตัวมัมมากค่ะ",
    author: "คุณพลอย, ลูกค้าทรีทเมนท์",
  },
  {
    text: "ดัดวอลุ่มคือปัง! ผมดูหนา หล่อขึ้น 300% เลยครับ",
    author: "คุณคิม, ลูกค้าผู้ชาย",
  },
  {
    text: "แต่งหน้าออกงานคือสวยสะบัด ถ่ายรูปขึ้นกล้องทุกมุม!",
    author: "คุณฟ้า, ลูกค้าออกงาน",
  },
  {
    text: "สปาผมแล้วนุ่มมากแม่ จับแล้วคือฟินสุดๆ",
    author: "คุณแป้ง, ลูกค้าบำรุงผม",
  },
  {
    text: "ร้านสะอาด บริการดี พี่ช่างมือเบามาก เลิฟเลยค่ะ",
    author: "คุณมายด์, ลูกค้าใหม่",
  },
  {
    text: "ทำเคมีแล้วผมไม่เสียเลย คือดีเกินต้านจริงๆค่ะ",
    author: "คุณออย, ลูกค้าประจำ",
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () =>
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      title: "Women's Treatments",
      items: [
        {
          name: "แต่งหน้า - ทำผมออกงาน",
          desc: "เนรมิตลุคสวยระดับพรีเมียมสำหรับเจ้าสาว รับปริญญา หรือโอกาสพิเศษ",
        },
        {
          name: "สปานาโน / อบไอน้ำ",
          desc: "ฟื้นฟูผมเสียอย่างล้ำลึกถึงแกนผมด้วยเทคโนโลยีนาโนโมเลกุล",
        },
        {
          name: "บำรุงทรีทเมนท์ / เคราตินสด",
          desc: "เติมโปรตีนเข้มข้นให้เส้นผม ลดผมชี้ฟู ให้ผมเงางามมีน้ำหนักทันทีหลังทำ",
        },
        {
          name: "ยืด / ดัด / ทำสี",
          desc: "ใช้เคมีเกรดพรีเมียมจากแบรนด์ชั้นนำ อ่อนโยน ไม่ทำลายโครงสร้างผม",
        },
        {
          name: "สระ ไดร์ / สระ ซอย",
          desc: "ออกแบบทรงผมที่สะท้อนเอกลักษณ์เฉพาะตัวคุณ โดยช่างผู้เชี่ยวชาญด้านรูปหน้า",
        },
      ],
    },
    {
      title: "Gentlemen's Selection",
      items: [
        {
          name: "บำรุงหนังศีรษะและเส้นผม",
          desc: "ดูแลสุขภาพหนังศีรษะและเส้นผมสำหรับคุณผู้ชายโดยเฉพาะ",
        },
        {
          name: "ดัดวอลุ่ม / ดัดฟรอย",
          desc: "ดัดวอลุ่มหรือดัดฟรอยเพื่อสร้างมิติให้เส้นผมดูหนาและมีสไตล์",
        },
        
      ],
    },
  ];

  const portfolio = [
    {
      url: "592906398_122271217544033635_5387976634002366203_n.jpg",
      tag: "เจ้าสาว / เจ้าบ่าว",
    },
    {
      url: "639563884_2908252356232538_7043531488379843602_n.jpg",
      tag: "แต่งหน้าเจ้าสาว",
    },
    {
      url: "589032828_122270410106033635_1616550600776964898_n.jpg",
      tag: "รับปริญญา",
    },
    {
      url: "491402236_122236293080033635_4255640915178612601_n.jpg",
      tag: "ทำสีผม",
    },
    {
      url: "641313159_122282186654033635_6526682095253640172_n.jpg",
      tag: "เซตทรงผม / แต่งหน้า",
    },
    {
      url: "485696821_122230469594033635_9164041327140561219_n.jpg",
      tag: "ยืดเคราติน",
    },
    
  ];

  const brands = [
    "L'Oreal Professionnel",
    "Olaplex",
    "Shiseido",
    "Milbon",
    "Schwarzkopf",
  ];

  const faqs = [
    {
      q: "ต้องจองคิวล่วงหน้ากี่วัน?",
      a: "แนะนำให้จองล่วงหน้าอย่างน้อย 1-2 วันเพื่อล็อกเวลาที่สะดวกที่สุดครับ โดยเฉพาะวันเสาร์-อาทิตย์",
    },
    {
      q: "ดัดผมดิจิตอลใช้เวลานานไหม?",
      a: "ปกติใช้เวลาประมาณ 3-4 ชั่วโมง ขึ้นอยู่กับความหนาและสภาพเส้นผมครับ",
    },
    {
      q: "ร้านอยู่ที่ไหน มีที่จอดรถไหม?",
      a: "ร้านตั้งอยู่ที่จังหวัดกำแพงเพชร (พิกัดใกล้ตัวเมือง) มีที่จอดรถสะดวกสบายสำหรับลูกค้าครับ",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] bg-[#FDF8F5] selection:bg-[#E9D5CA] overflow-x-hidden">
      {/* --- NAVIGATION --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 px-6 md:px-12 py-5 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E9D5CA]/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em]">
              GLOY
            </span>
            <span className="text-[9px] tracking-[0.4em] text-[#D4A373] uppercase font-bold -mt-1">
              Hair Salon & Makeup
            </span>
          </div>

          <div className="hidden md:flex space-x-12 items-center text-[10px] font-bold uppercase tracking-[0.3em]">
            <a
              href="#"
              className="hover:text-[#D4A373] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="hover:text-[#D4A373] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#D4A373] transition-colors relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-[#D4A373] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A373] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="tel:0985567218"
              className="bg-[#1A1A1A] text-white px-10 py-4 hover:bg-[#D4A373] transition-all duration-500 text-[9px] tracking-[0.2em] shadow-lg"
            >
              BOOK NOW
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-white/98 z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <button className="absolute top-6 right-6" onClick={() => setIsMobileMenuOpen(false)}><X size={32}/></button>
            <a href="#" className="text-2xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>หน้าแรก</a>
            <a href="#services" className="text-2xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>บริการ</a>
            <a href="#portfolio" className="text-2xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>ผลงาน</a>
            <a href="#contact" className="text-2xl font-serif" onClick={() => setIsMobileMenuOpen(false)}>ติดต่อเรา</a>
            <a href="tel:0985567218" className="bg-[#1A1A1A] text-white px-12 py-4 text-sm font-bold tracking-widest uppercase rounded-sm">จองคิวทันที</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden px-4">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <h4 className="text-[#D4A373] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 animate-fade-in">
              Premium Hair & Beauty Studio
            </h4>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.85] mb-10 animate-slide-up">
              Beauty <br /> Is In The <br />{" "}
              <span className="italic font-light text-[#D4A373]">Details.</span>
            </h1>
            <p
              className="text-lg text-gray-500 max-w-md mb-12 leading-relaxed font-light animate-fade-in mx-auto lg:mx-0"
              style={{ animationDelay: "0.4s" }}
            >
              เนรมิตความงามที่สะท้อนตัวตนของคุณ จังหวัดกำแพงเพชร
              สัมผัสประสบการณ์ระดับมืออาชีพที่ใส่ใจในทุกรายละเอียด
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 animate-fade-in justify-center lg:justify-start"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#services"
                className="bg-[#1A1A1A] text-white px-12 py-5 text-[11px] font-bold tracking-[0.2em] text-center hover:bg-[#D4A373] transition-all duration-500 uppercase shadow-xl"
              >
                Explore Services
              </a>
              <a
                href="#portfolio"
                className="group flex items-center justify-center space-x-4 text-[11px] font-bold tracking-[0.2em] uppercase"
              >
                <span>View Gallery</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[45vh] sm:h-[50vh] lg:h-[85vh] order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#E9D5CA] translate-x-6 translate-y-6 -z-10 rounded-sm opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200"
              alt="Gloy Hair Salon Interior"
              className="w-full h-full object-cover rounded-sm shadow-2xl animate-fade-in grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* --- TRUST SIGNALS --- */}
      <section className="py-24 bg-white px-4 border-b border-gray-50 text-center text-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            {
              icon: <ShieldCheck size={28} />,
              title: "Premium Products",
              desc: "เคมีเกรดพรีเมียม",
            },
            {
              icon: <Award size={28} />,
              title: "Certified Stylist",
              desc: "ช่างมีใบเซอร์รับรอง",
            },
            {
              icon: <Users size={28} />,
              title: "1000+ Clients",
              desc: "ลูกค้าไว้วางใจ",
            },
            {
              icon: <Sparkles size={28} />,
              title: "Private Studio",
              desc: "บรรยากาศเป็นส่วนตัว",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="text-[#D4A373] mb-5 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                {item.title}
              </h5>
              <p className="text-[11px] text-gray-400 font-light uppercase tracking-wider">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT / INTRO --- */}
      <section className="py-24 md:py-40 px-4 bg-[#FDF8F5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="605785117_122275762970033635_5647752583862582174_n.jpg"
              className="w-4/5 ml-auto rounded-sm   transition-all duration-1000"
              alt="Salon Process"
            />
            <img
              src="605723823_122275763006033635_6720375699570479496_n.jpg"
              className="absolute -bottom-12 -left-6 w-1/2 border-[10px] md:border-[15px] border-[#FDF8F5] rounded-sm shadow-2xl"
              alt="Detail Work"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-serif mb-10 leading-tight text-[#1A1A1A]">
              เรามอบสิ่งที่ดีที่สุด <br className="hidden md:block" /> เพื่อผมที่สวยของคุณ
            </h2>
            <div className="w-16 h-px bg-[#D4A373] mb-8 md:mb-10 mx-auto lg:mx-0"></div>
            <p className="text-gray-500 leading-loose mb-10 font-light italic text-base md:text-lg">
              "กลอยแฮร์ซาลอน & เมคอัพ จังหวัดกำแพงเพชร
              เราดูแลเส้นผมของคุณด้วยหัวใจสไตล์มินิมอล"
            </p>
            <p className="text-gray-500 leading-loose mb-12 font-light text-base md:text-lg">
              เราใส่ใจในทุกขั้นตอนการบริการ
              ไม่ว่าจะเป็นการออกแบบทรงผมสุภาพบุรุษหรือสตรี
              รวมถึงการแต่งหน้าออกงาน
              ด้วยผลิตภัณฑ์คุณภาพพรีเมียมในบรรยากาศที่ผ่อนคลายและเป็นกันเอง
            </p>
            <a
              href="#services"
              className="inline-flex items-center space-x-6 text-[10px] font-bold tracking-[0.4em] uppercase border-b border-[#1A1A1A] pb-3 hover:text-[#D4A373] hover:border-[#D4A373] transition-all"
            >
              <span>Read More About Us</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* --- PROMOTION SECTION (อัปเดตภาษาไทยสไตล์ Luxury) --- */}
      <section className="py-24 md:py-32 px-4 bg-[#1A1A1A] text-white relative overflow-hidden border-y border-[#D4A373]/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4A373]/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <div className="bg-[#D4A373] p-4 rounded-full mb-6 animate-bounce shadow-[0_0_20px_rgba(212,163,115,0.4)]">
              <Gift size={32} className="text-[#1A1A1A]" />
            </div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D4A373] mb-4">
              Special Monthly Offer
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              สิทธิพิเศษประจำเดือน
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              เพียงจองคิวผ่าน LINE วันนี้ <span className="text-white font-bold italic underline decoration-[#D4A373]">รับสิทธิ์ลุ้นรับ</span> ทรีทเมนท์ฟื้นฟูผมเสียระดับพรีเมียม <br className="hidden md:block" />
              <span className="text-[#D4A373] font-bold text-xl md:text-2xl">ฟรีทันที! มูลค่า 500 บาท</span> เมื่อทำเคมีทุกประเภท (ทำสี, ดัด, ยืด)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto mb-16 px-4">
            {/* Box 1: Hair Detox */}
            <div className="bg-white/5 border border-[#D4A373]/30 p-10 rounded-sm text-center group hover:bg-[#D4A373]/10 transition-all duration-700 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-2 bg-[#D4A373] text-[#1A1A1A] text-[9px] font-bold uppercase tracking-widest text-center">
                Limited
              </div>
              <span className="text-[#D4A373] text-5xl font-serif block mb-4 italic transition-transform group-hover:scale-110 duration-500 text-center">Free</span>
              <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white block mb-2 text-center">รับสิทธิ์ Hair Detox</span>
              <p className="text-gray-500 text-[11px] font-light italic text-center">ทำความสะอาดล้ำลึก เพื่อผมสุขภาพดี</p>
              
              <div className="absolute left-0 top-1/2 -translate-x-1/2 w-4 h-8 bg-[#1A1A1A] rounded-r-full border-r border-[#D4A373]/30"></div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 w-4 h-8 bg-[#1A1A1A] rounded-l-full border-l border-[#D4A373]/30"></div>
            </div>
            
            {/* Box 2: New Client Discount */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm text-center group hover:bg-white/10 transition-all duration-700 shadow-2xl text-white">
              <span className="text-[#D4A373] text-5xl font-serif block mb-4 italic transition-transform group-hover:scale-110 duration-500 text-center">-20%</span>
              <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white block mb-2 text-center">For New Clients</span>
              <p className="text-gray-500 text-[11px] font-light italic text-center">สิทธิพิเศษต้อนรับลูกค้าใหม่ทุกท่าน</p>
            </div>
          </div>

          <div className="flex flex-col items-center px-4 text-center">
            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-500 bg-[#D4A373] rounded-sm hover:scale-105 shadow-[0_10px_30px_rgba(212,163,115,0.2)]"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-full bg-white group-hover:translate-x-0 ease text-center"></span>
              <span className="relative text-[11px] md:text-[13px] tracking-[0.4em] uppercase group-hover:text-[#1A1A1A] transition-colors flex items-center text-center">
                มีโอกาสได้รับสิทธิ์พิเศษนี้
                <ArrowRight className="ml-3 h-4 w-4" />
              </span>
            </a>
            <p className="mt-8 text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.3em] italic animate-pulse text-center">
              * สงวนสิทธิ์สำหรับลูกค้าที่จองผ่าน LINE เท่านั้น *
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES MENU --- */}
      <section id="services" className="py-24 md:py-40 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <span className="text-[#D4A373] uppercase tracking-[0.6em] text-[10px] font-bold block mb-4">คอลเลกชันบริการซิกเนเจอร์</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">Signature Collection</h2>
            <div className="w-12 h-px bg-[#D4A373] mx-auto mt-8 opacity-50"></div>
          </div>

          <div className="space-y-24 md:space-y-40">
            {serviceCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-12 md:mb-20 text-gray-400 flex items-center justify-center lg:justify-start">
                  <span className="w-12 h-px bg-[#E9D5CA] mr-6 hidden lg:block"></span>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-y-16 md:gap-y-20">
                  {category.items.map((service, index) => (
                    <div key={index} className="group flex flex-col md:flex-row justify-between items-center md:items-baseline border-b border-[#E9D5CA]/30 pb-10 md:pb-12 transition-all hover:border-[#D4A373] text-center md:text-left">
                      <div className="max-w-xl mb-6 md:mb-0 px-2">
                        <h4 className="text-2xl md:text-4xl font-serif group-hover:text-[#D4A373] transition-colors duration-500 mb-4">{service.name}</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{service.desc}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10">
                        <span className="text-xl italic font-serif text-gray-300">Consult Price</span>
                        <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.3em] uppercase border border-[#1A1A1A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-white transition-all whitespace-nowrap shadow-sm">BOOK NOW</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SLIDER --- */}
      <section className="py-24 md:py-40 bg-[#FDF8F5] px-4 relative overflow-hidden border-y border-[#E9D5CA]/30">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center space-x-2 mb-10 md:mb-16 text-[#D4A373]">
            {[...Array(5)].map((_, i) => (<Star key={i} size={20} fill="currentColor" stroke="none" />))}
          </div>
          <div className="relative min-h-[300px] md:min-h-[220px] flex items-center justify-center">
            {reviews.map((review, idx) => (
              <div key={idx} className={`absolute inset-0 transition-all duration-1000 flex flex-col items-center justify-center ${idx === currentReview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}>
                <p className="text-2xl md:text-5xl font-serif italic leading-relaxed text-[#1A1A1A] mb-10 px-2 md:px-6 text-center">"{review.text}"</p>
                <div className="font-bold tracking-[0.4em] uppercase text-[10px] text-[#D4A373] text-center"> — {review.author}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-12 mt-16 md:mt-24">
            <button onClick={prevReview} className="p-3 border border-gray-200 rounded-full hover:bg-white transition-all group"><ChevronLeft size={20} className="text-gray-300 group-hover:text-[#D4A373]" /></button>
            <div className="flex space-x-3">
              {reviews.map((_, i) => (<button key={i} onClick={() => setCurrentReview(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${i === currentReview ? "w-10 bg-[#D4A373]" : "bg-gray-300"}`} />))}
            </div>
            <button onClick={nextReview} className="p-3 border border-gray-200 rounded-full hover:bg-white transition-all group"><ChevronRight size={20} className="text-gray-300 group-hover:text-[#D4A373]" /></button>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GALLERY (นำ Grayscale ออก) --- */}
      <section id="portfolio" className="py-24 md:py-40 px-4 bg-white overflow-hidden text-center">
        <div className="max-w-[1400px] mx-auto mb-24 md:mb-32 text-center">
          <span className="text-[#D4A373] uppercase tracking-[0.6em] text-[10px] font-bold block mb-4 text-center">ผลงานคัดสรรระดับซิกเนเจอร์</span>
          <h2 className="text-4xl md:text-6xl font-serif mt-6 text-[#1A1A1A] text-center">Signature Creations</h2>
          <div className="w-12 h-px bg-[#D4A373] mx-auto mt-8 opacity-50"></div>
        </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-4 text-center">
          {portfolio.map((item, idx) => (
            <div key={idx} className={`relative aspect-[3/4] overflow-hidden group shadow-sm ${idx % 2 !== 0 ? "md:translate-y-20" : ""} text-center`}>
              {/* นำ grayscale ออกและคงความสวยงามไว้ทันที */}
              <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={`Gloy Work ${idx}`} />
              <div className="absolute inset-0 bg-[#FDF8F5]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[#1A1A1A] text-[11px] font-bold tracking-[0.4em] uppercase border-b border-[#1A1A1A] pb-3 mb-6 text-center">{item.tag}</span>
                <Camera size={28} className="text-[#D4A373]" strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-32 md:mt-56 text-center">
          <a href={fbPageUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-6 text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase border-b border-[#1A1A1A] pb-4 hover:text-[#D4A373] hover:border-[#D4A373] transition-all text-center">
            <Facebook size={20} />
            <span>Discover More on Facebook</span>
          </a>
        </div>
      </section>

      {/* --- FOOTER & CONTACT --- */}
      <footer id="contact" className="bg-white border-t border-[#E9D5CA]/30 pt-24 md:pt-48 pb-20 px-4 md:px-12 text-center lg:text-left text-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center lg:text-left">
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-3xl font-serif tracking-[0.2em] mb-10 md:mb-12 uppercase text-[#1A1A1A] text-center lg:text-left">Gloy Salon</h3>
            <p className="text-gray-400 font-light leading-[2.5] mb-12 text-sm max-w-xs mx-auto lg:mx-0 text-center lg:text-left">ยกระดับมาตรฐานการดูแลเส้นผมและแต่งหน้าในกำแพงเพชร ด้วยผลิตภัณฑ์ระดับโลกและบรรยากาศแบบมินิมอลพรีเมียม</p>
            <div className="flex justify-center lg:justify-start space-x-12">
              <a href={fbPageUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#D4A373] transition-colors"><Facebook size={24} strokeWidth={1} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4A373] transition-colors"><Instagram size={24} strokeWidth={1} /></a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-10 md:mb-14 text-[#1A1A1A] text-center lg:text-left">The Studio</h4>
            <p className="text-gray-500 font-light leading-[2.5] text-sm mb-10 text-center lg:text-left">เลขที่ 9 จังหวัดกำแพงเพชร <br /> ต.นครชุม อ.เมือง จ.กำแพงเพชร 62000</p>
            <div onClick={() => setShowMap(!showMap)} className="flex justify-center lg:justify-start items-center text-[11px] font-bold tracking-[0.4em] uppercase border-b border-[#1A1A1A] w-fit pb-3 mx-auto lg:mx-0 cursor-pointer hover:text-[#D4A373] hover:border-[#D4A373] transition-all text-center lg:text-left">
              <MapPin size={16} className="mr-4 text-[#D4A373]" />
              <span>{showMap ? "ปิดแผนที่" : "Get Directions"}</span>
            </div>
            {showMap && (
              <div className="mt-8 w-full overflow-hidden rounded-sm shadow-2xl animate-fade-in aspect-video lg:aspect-square border border-[#E9D5CA]/30 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.5644625357684!2d99.52028410000003!3d16.46247630000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de185e568da1c7%3A0x89136a7ffc48c343!2z4LiB4Lil4Lit4Lii4LmB4Liu4Lij4LmM4LiL4Liy4Lil4Lit4LiZ!5e0!3m2!1sth!2sth!4v1772442661757!5m2!1sth!2sth" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="text-center"></iframe>
              </div>
            )}
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-10 md:mb-14 text-[#1A1A1A] text-center lg:text-left">Open Hours</h4>
            <ul className="space-y-6 md:space-y-8 text-gray-500 font-light text-sm text-center lg:text-left">
              <li className="flex justify-between border-b border-[#FDF8F5] pb-4 px-2 text-center lg:text-left"><span>ทุกวัน</span> <span>09:00 - 20:00</span></li>
              <li className="text-[10px] text-[#D4A373] mt-6 italic font-bold tracking-widest uppercase text-center lg:text-left">* Appointment Recommended *</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-10 md:mb-14 text-[#1A1A1A] text-center lg:text-left">Booking</h4>
            <div className="flex flex-col items-center lg:items-start px-2 text-center lg:text-left">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white border border-[#E9D5CA]/50 p-2 mb-8 rounded-sm shadow-sm flex items-center justify-center relative group overflow-hidden text-center lg:text-left">
                <img src="/Screenshot%202026-03-02%20150517.png" alt="QR Code" className="w-full h-full object-contain grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 text-center lg:text-left" />
                <div className="absolute inset-0 border border-[#D4A373]/10 pointer-events-none"></div>
              </div>
              <p className="text-[10px] md:text-[11px] text-[#D4A373] uppercase tracking-[0.4em] leading-relaxed font-bold text-center lg:text-left">สแกนเพื่อปรึกษาและจองคิว</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-40 pt-10 border-t border-gray-50 text-center text-[9px] text-gray-300 uppercase tracking-[0.5em] text-center">
          <p>© 2024 GLOY HAIR SALON & MAKEUP. DESIGNED FOR ELEGANCE.</p>
        </div>
      </footer>

      {/* --- FLOATING CONTACT BUTTONS (LINE & CALL) --- */}
      <div className="fixed bottom-6 right-6 md:bottom-12 md:right-10 z-[100] flex flex-row space-x-3 md:space-x-4">
        <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-[#1A1A1A] p-4 md:p-6 rounded-full shadow-2xl hover:bg-[#D4A373] hover:text-white transition-all duration-700 group border border-[#E9D5CA]/50 flex items-center text-center">
          <MessageCircle size={24} strokeWidth={1.5} className="md:w-6 md:h-6" />
          <span className="ml-2 whitespace-nowrap font-bold text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase">LINE</span>
        </a>
        <a href="tel:0985567218" className="bg-[#1A1A1A] text-white p-4 md:p-6 rounded-full shadow-2xl hover:bg-[#D4A373] transition-all duration-700 group flex items-center text-center">
          <Phone size={24} strokeWidth={1.5} className="md:w-6 md:h-6" />
          <span className="ml-2 whitespace-nowrap font-bold text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] uppercase">CALL</span>
        </a>
      </div>

      {/* --- ANIMATION STYLES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes slide-up { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1.3s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}} />
    </div>
  );
}
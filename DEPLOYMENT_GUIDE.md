# คู่มือการติดตั้งและ Deploy เว็บแอปพลิเคชัน NEW Weaving It Together 3 (ม.6)
**รหัสโปรเจกต์:** NW-B3 | **เวอร์ชัน:** `v3.0.0-azure` | **ระดับการศึกษา:** มัธยมศึกษาปีที่ 6 (CEFR: B1/B2)  
**สำนักพิมพ์:** บริษัท สำนักพิมพ์ไทยวัฒนาพานิช จำกัด (TWP) & Cengage Learning

---

## 1. ข้อมูลสรุปและโครงสร้างโปรเจกต์
เว็บแอปพลิเคชันนี้ถูกออกแบบและแยกอิสระ 100% จากเล่ม 1 (`NW-B1`) และเล่ม 2 (`NW-B2`) โดยใช้สโคปคีย์เฉพาะ `nw3_` เพื่อป้องกันปัญหาการทับซ้อนและข้อมูลสับสน

### โครงสร้างโฟลเดอร์:
```
new-weaving-3-app/
├── assets/
│   ├── audio/              # ไฟล์เสียง native .mp3 ทั้ง 8 บท (ex1_yinyang.mp3 - ex8_fox_and_grapes.mp3)
│   └── images/             # ภาพปก cover.jpg, โลโก้ twp_logo.png และภาพประกอบ ex1.jpg - ex8.jpg
├── css/
│   └── style.css           # ธีมสี Crystal Azure & Royal Cobalt Blue (#0f2942, #0284c7, #38bdf8)
├── js/
│   ├── app.js              # Application Logic (สโคป nw3_, derangement shuffle, scoring)
│   ├── data.js             # เนื้อหาบทอ่านและแบบฝึกหัดทั้ง 8 ยูนิต
│   ├── i18n.js             # ระบบสลับสองภาษา ไทย ⇄ อังกฤษ (Real-time i18n)
│   ├── settings.js         # จัดการธีม, ขนาดตัวอักษร, เสียงเอฟเฟกต์ และล้างข้อมูล (nw3_)
│   ├── system-check.js     # ตรวจสอบความพร้อมของ Web Audio, Speech API, LocalStorage, PWA
│   └── qrcode.min.js       # ตัวสร้าง QR Code สำหรับแชร์บทเรียน
├── index.html              # หน้าเว็บหลักแบบโมดูลาร์ (Modular HTML)
├── manifest.json           # การตั้งค่า Progressive Web App (PWA)
├── sw.js                   # Service Worker สำหรับการทำงานแบบออฟไลน์ 100%
├── .nojekyll               # ไฟล์สำหรับรองรับ GitHub Pages
├── _redirects              # ไฟล์ Rewrite สำหรับ Netlify / Cloudflare Pages
└── vercel.json             # ไฟล์ Config สำหรับ Vercel
```

---

## 2. ขั้นตอนการอัปโหลดไฟล์เสียงจริง (.mp3)
ผู้ดูแลระบบสามารถนำไฟล์เสียงทั้ง 8 บทที่บันทึกไว้มาวางทับในโฟลเดอร์ `assets/audio/` ตามชื่อไฟล์ดังนี้:
1. `ex1_yinyang.mp3` : Unit 1 (Yin-Yang: The Balance of Life)
2. `ex2_buffalo_racing.mp3` : Unit 2 (Buffalo Racing Festival in Thailand)
3. `ex3_stars_human_nature.mp3` : Unit 3 (The Stars and Human Nature)
4. `ex4_gorilla_whisperer.mp3` : Unit 4 (The Gorilla Whisperer)
5. `ex5_kimchi.mp3` : Unit 5 (Kimchi: The Spicy Soul of Korean Cuisine)
6. `ex6_same_language.mp3` : Unit 6 (What Would Happen If Everyone Spoke the Same Language?)
7. `ex7_oceans_silent_killer.mp3` : Unit 7 (The Ocean’s Silent Killer)
8. `ex8_fox_and_grapes.mp3` : Unit 8 (The Fox and the Grapes)

*(หมายเหตุ: หากยังไม่มีไฟล์เสียง ระบบมี Web Speech API เป็น Fallback อ่านออกเสียงอัตโนมัติได้อย่างสมบูรณ์)*

---

## 3. วิธีการ Deploy ไปยังผู้ให้บริการต่างๆ

### วิธีที่ 1: GitHub Pages (แนะนำ ฟรีและเสถียรสูง)
1. แตกไฟล์ `new-weaving-3-app-deploy.zip` หรือใช้โฟลเดอร์ `new-weaving-3-app`
2. สร้าง Repository บน GitHub เช่น `new-weaving-3`
3. Push ไฟล์ทั้งหมดขึ้นบน branch `main`
4. ไปที่ **Settings** > **Pages** > **Build and deployment** > Source: เลือก `Deploy from a branch` > Branch: `main` / `/(root)` > กด **Save**
5. รอ 1-2 นาที จะได้ URL เช่น `https://username.github.io/new-weaving-3/`

### วิธีที่ 2: Netlify (ลากแล้ววาง - ง่ายที่สุด)
1. ล็อกอินเข้าสู่ [Netlify](https://app.netlify.com/)
2. ไปที่แท็บ **Sites**
3. ลากโฟลเดอร์ `new-weaving-3-app` ไปวางในช่อง **"Drag and drop your site output folder here"**
4. Netlify จะ Deploy ทันทีพร้อม URL พร้อมใช้งาน

### วิธีที่ 3: Vercel
1. ติดตั้ง Vercel CLI หรือ Import Git repository เข้า Vercel
2. เนื่องจากมีไฟล์ `vercel.json` อยู่แล้ว ระบบจะทำการตั้งค่า Route ให้โดยอัตโนมัติ

---

## 4. มาตรการความปลอดภัยและการป้องกันความขัดแย้ง (Anti-Collision)
- **Local Storage Isolation:** เล่ม 3 ใช้คีย์ `nw3_*` โดยเฉพาะ ไม่ก้าวก่าย `nw1_*` หรือ `nw2_*`
- **Cache Isolation:** PWA Cache Name ใช้ `new-weaving-3-v3.0.0-azure`
- **Asset Integrity:** รูปภาพและไฟล์เสียงบรรจุในโครงสร้างสัมพัทธ์ (Relative Paths) เปิดจากไดรฟ์เครื่องหรือเว็บเซิร์ฟเวอร์ใดก็ได้

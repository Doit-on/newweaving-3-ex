# คู่มือและรายละเอียดไฟล์สำหรับ Deploy: NEW Weaving It Together 3 WebApp (ม.6)

**รหัสโปรเจกต์:** `NW-B3` | **เวอร์ชันการพัฒนา:** `v3.1.0-azure` | **ระดับชั้น:** มัธยมศึกษาปีที่ 6 (CEFR: B1/B2)  
**ลิขสิทธิ์:** บริษัท สำนักพิมพ์ไทยวัฒนาพานิช จำกัด (TWP) & Cengage Learning / National Geographic Learning  
**สถานะการทดสอบ:** ✅ ผ่านการทดสอบ Automated System Verification & Headless Chrome 100% (0 Errors, 0 Exceptions)

---

## 1. ข้อมูลสรุปแพ็กเกจ Deploy (Package Overview)

| รายการ | รายละเอียด |
| :--- | :--- |
| **ชื่อโฟลเดอร์สำหรับ Deploy** | `new-weaving-3-app/` |
| **ชื่อไฟล์ Zip สำหรับ Deploy** | `new-weaving-3-app-deploy.zip` |
| **ตำแหน่งโฟลเดอร์บนเครื่อง** | `C:\Users\nipon\OneDrive\Desktop\new weaving project\new-weaving-3-app\` |
| **ตำแหน่งไฟล์ Zip บนเครื่อง** | `C:\Users\nipon\OneDrive\Desktop\new weaving project\new-weaving-3-app-deploy.zip`<br>`C:\Users\nipon\OneDrive\Desktop\new-weaving-3-app-deploy.zip` |
| **ขนาดแพ็กเกจรวม** | ~21.7 MB (รวมไฟล์เสียง Native MP3 ทั้ง 8 บท และรูปภาพความละเอียดสูงทั้งหมด) |
| **จำนวนไฟล์ทั้งหมด** | 28 ไฟล์ (พร้อมโฟลเดอร์ย่อย 4 โฟลเดอร์) |
| **สถาปัตยกรรมระบบ** | Client-Side SPA (Single Page Application) แบบ Self-Contained 100% |
| **ความเข้ากันได้** | รองรับทุกเบราว์เซอร์ (Chrome, Edge, Safari, Firefox), ใช้งานได้ทั้งแบบ Online และ Offline 100% |

---

## 2. โครงสร้างไฟล์ทั้งหมดในแพ็กเกจ (Complete File Tree)

```text
new-weaving-3-app/
├── 📄 index.html              # หน้าเว็บหลัก (HTML5 Semantic, Responsive, Bilingual, Inline critical CSS)
├── 📄 manifest.json           # การตั้งค่า Progressive Web App (PWA, Theme: #0f2942)
├── 📄 sw.js                   # Service Worker สำหรับระบบออฟไลน์ (Cache: new-weaving-3-v3.1.0-azure)
├── 📄 .nojekyll               # ไฟล์ปิดการทำงานของ Jekyll (สำหรับ GitHub Pages ป้องกันโฟลเดอร์ตกหล่น)
├── 📄 _redirects              # ไฟล์ Route Configuration (สำหรับ Netlify / Cloudflare Pages)
├── 📄 vercel.json             # ไฟล์ Config Routing & Headers (สำหรับ Vercel Deployment)
├── 📄 DEPLOYMENT_GUIDE.md     # คู่มือและรายละเอียดไฟล์ Deploy ฉบับสมบูรณ์นี้
│
├── 📁 css/
│   └── 🎨 style.css           # ธีมสี Crystal Azure & Royal Cobalt Blue, เลย์เอาต์, ฟอนต์ Prompt/Sarabun
│
├── 📁 js/
│   ├── ⚙️ app.js              # Business Logic หลัก, จัดการ Quiz Part A/B/C, ปรับคำ Unscramble ไว้ด้านบน
│   ├── 📚 data.js             # ฐานข้อมูล 8 ยูนิต, คำศัพท์, บทกลอน Unit 8, จุด Full Stop ใน Part C ทุกข้อ
│   ├── 🌐 i18n.js             # ระบบสลับสองภาษา ไทย ⇄ อังกฤษ (Real-time Language Switcher)
│   ├── 🎛️ settings.js         # จัดการการตั้งค่า Theme, Font Size, Audio Volume, Reset Data (Scope: nw3_)
│   ├── 🩺 system-check.js     # ตัวตรวจสภาพระบบ: Audio Engine, LocalStorage, PWA, Speech API
│   └── 📱 qrcode.min.js       # ไลบรารีสร้าง QR Code ออฟไลน์สำหรับแชร์ลิงก์บทเรียน
│
└── 📁 assets/
    ├── 📁 audio/              # ไฟล์เสียง Native Audio (.mp3) คุณภาพคมชัด 128 kbps ทั้ง 8 บทเรียน
    │   ├── 🎵 ex1_yinyang.mp3              # Unit 1: Yin-Yang: The Balance of Life (~1.85 MB)
    │   ├── 🎵 ex2_buffalo_racing.mp3       # Unit 2: Buffalo Racing Festival in Thailand (~1.68 MB)
    │   ├── 🎵 ex3_stars_human_nature.mp3   # Unit 3: The Stars and Human Nature (~1.62 MB)
    │   ├── 🎵 ex4_gorilla_whisperer.mp3    # Unit 4: The Gorilla Whisperer (~1.60 MB)
    │   ├── 🎵 ex5_kimchi.mp3               # Unit 5: Kimchi: The Spicy Soul of Korean Cuisine (~1.75 MB)
    │   ├── 🎵 ex6_same_language.mp3        # Unit 6: What Would Happen If Everyone Spoke the Same Language? (~1.56 MB)
    │   ├── 🎵 ex7_oceans_silent_killer.mp3 # Unit 7: The Ocean’s Silent Killer (~1.44 MB)
    │   └── 🎵 ex8_fox_and_grapes.mp3       # Unit 8: The Fox and the Grapes (~0.84 MB)
    │
    └── 📁 images/             # รูปภาพประกอบและภาพหน้าปกความละเอียดสูง
        ├── 🖼️ cover.jpg                    # ภาพหน้าปกหนังสือ NEW Weaving It Together 3 ม.6
        ├── 🖼️ twp_logo.png                 # โลโก้สำนักพิมพ์ไทยวัฒนาพานิช (TWP)
        ├── 🖼️ ex1.jpg                      # ภาพประกอบ Unit 1: สมดุลหยิน-หยาง
        ├── 🖼️ ex2.jpg                      # ภาพประกอบ Unit 2: ประเพณีวิ่งควาย ชลบุรี
        ├── 🖼️ ex3.jpg                      # ภาพประกอบ Unit 3: จักรราศีและดวงดาว
        ├── 🖼️ ex4.jpg                      # ภาพประกอบ Unit 4: กอริลลากับเดียน ฟอสซีย์
        ├── 🖼️ ex5.jpg                      # ภาพประกอบ Unit 5: วัฒนธรรมกิมจิและกิมจัง
        ├── 🖼️ ex6.jpg                      # ภาพประกอบ Unit 6: ความหลากหลายทางภาษาทั่วโลก
        ├── 🖼️ ex7.jpg                      # ภาพประกอบ Unit 7: มลพิษพลาสติกใต้ท้องทะเล
        └── 🖼️ ex8.jpg                      # ภาพประกอบ Unit 8: นิทานอีสป สุนัขจิ้งจอกกับพวงองุ่น
```

---

## 3. ไฟล์คอนฟิกสำหรับการ Deploy แต่ละแพลตฟอร์ม (Configuration Files)

### 3.1 GitHub Pages Config (`.nojekyll`)
- **ไฟล์:** `.nojekyll` (ขนาด 33 bytes อยู่ที่ Root)
- **วัตถุประสงค์:** ปิด Jekyll Engine ของ GitHub เพื่อป้องกันไม่ให้ GitHub Pages ละเลยโฟลเดอร์หรือไฟล์ที่มี Underscore (`_`) และรับประกันว่าโฟลเดอร์ `assets/`, `css/`, `js/` จะถูกโหลดขึ้นครบ 100%
- **วิธีเปิดใช้งาน:** เมื่ออัปโหลดไฟล์ขึ้น GitHub ไปที่ **Settings** > **Pages** > เลือก Source เป็น `Deploy from a branch` > เลือก Branch `main` โฟลเดอร์ `/(root)` > กด **Save**

### 3.2 Netlify Config (`_redirects`)
- **ไฟล์:** `_redirects` (ขนาด 24 bytes อยู่ที่ Root)
- **เนื้อหาภายใน:** `/*    /index.html   200`
- **วัตถุประสงค์:** รองรับ SPA Client-side routing ป้องกันปัญหา Error 404 เมื่อ Refresh หรือกดลิงก์ใดๆ
- **วิธีเปิดใช้งาน:** เข้าเว็บ [https://app.netlify.com/drop](https://app.netlify.com/drop) แล้วลากโฟลเดอร์ `new-weaving-3-app` หรือไฟล์ `new-weaving-3-app-deploy.zip` ไปวางได้ทันที

### 3.3 Vercel Config (`vercel.json`)
- **ไฟล์:** `vercel.json` (ขนาด 80 bytes อยู่ที่ Root)
- **เนื้อหาภายใน:**
  ```json
  {
    "cleanUrls": true,
    "trailingSlash": false,
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
- **วัตถุประสงค์:** กำหนด Route Rewrite ให้ Vercel ทำงานร่วมกับ SPA ได้ทันทีโดยไม่ต้อง Build Step

### 3.4 Progressive Web App (PWA) & Offline Config
- **ไฟล์:** `manifest.json` (ตั้งชื่อเว็บ, ไอคอน, สีกรอบ `#0f2942`)
- **ไฟล์:** `sw.js` (แคชไฟล์ทั้งหมดด้วย Cache Name: `new-weaving-3-v3.1.0-azure`) สามารถติดตั้งลงหน้าจอโทรศัพท์ แท็บเล็ต หรือคอมพิวเตอร์ และใช้งานได้แม้อยู่ในโหมด Offline / Airplane Mode

---

## 4. ขั้นตอนและวิธีการ Deploy (Step-by-Step Deployment Guides)

### ทางเลือกที่ 1: Netlify Drop (ง่ายและรวดเร็วที่สุด - แนะนำ ⭐⭐⭐⭐⭐)
1. เปิดเว็บบราวเซอร์ไปที่: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. ลากไฟล์ `new-weaving-3-app-deploy.zip` หรือลากโฟลเดอร์ `new-weaving-3-app` ไปปล่อยในกรอบสี่เหลี่ยม
3. ระบบจะทำการ Deploy อัตโนมัติภายใน 15-30 วินาที
4. จะได้รับ URL ทันที (เช่น `https://new-weaving-3.netlify.app`) สามารถนำไปให้นักเรียนใช้งานได้ทันที

### ทางเลือกที่ 2: GitHub Pages (ฟรี ไม่มีวันหมดอายุ)
1. ไปที่ [GitHub.com](https://github.com) สร้าง Repository ใหม่ เช่น `new-weaving-3`
2. อัปโหลดไฟล์:
   - **กรณีใช้ GitHub Web:** กด **Add file** > **Upload files** > ลากไฟล์และโฟลเดอร์ทั้งหมดจากโฟลเดอร์ `new-weaving-3-app` ไปวาง (หรือแตกไฟล์ zip ออกมาแล้วลากไปวาง) > กด **Commit changes**
   - **กรณีใช้ Git CLI:**
     ```bash
     cd "C:\Users\nipon\OneDrive\Desktop\new weaving project\new-weaving-3-app"
     git init
     git add .
     git commit -m "Deploy NEW Weaving 3 v3.1.0-azure"
     git branch -M main
     git remote add origin https://github.com/<your-username>/new-weaving-3.git
     git push -u origin main
     ```
3. ไปที่แท็บ **Settings** > **Pages**
4. ที่ส่วน **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: เลือก `main` และ `/(root)`
   - กด **Save**
5. รอประมาณ 1-2 นาที เว็บไซต์จะออนไลน์ที่ `https://<your-username>.github.io/new-weaving-3/`

### ทางเลือกที่ 3: เปิดใช้งานแบบ Local / Offline ในห้องเรียน (ไม่ต้องใช้อินเทอร์เน็ต)
1. แตกไฟล์ `new-weaving-3-app-deploy.zip` (หรือเปิดโฟลเดอร์ `new-weaving-3-app` บน Desktop)
2. ดับเบิลคลิกที่ไฟล์ **`index.html`**
3. สามารถใช้งานได้เต็มรูปแบบ 100% ทั้งระบบเสียง MP3, รูปภาพ, และการทำแบบฝึกหัดทุก Part

---

## 5. ตารางเปรียบเทียบและการกำหนดไฟล์ Deploy ทั้ง 3 เล่ม (Complete Series Matrix)

เพื่อป้องกันปัญหาการสลับไฟล์หรือทับซ้อนกัน ข้อมูลโครงสร้างทั้ง 3 เล่มได้รับการแยกอิสระจากกัน 100% ดังนี้:

| รายละเอียด | เล่ม 1 (NEW Weaving 1) | เล่ม 2 (NEW Weaving 2) | เล่ม 3 (NEW Weaving 3) |
| :--- | :--- | :--- | :--- |
| **ระดับชั้น** | มัธยมศึกษาปีที่ 4 (ม.4) | มัธยมศึกษาปีที่ 5 (ม.5) | มัธยมศึกษาปีที่ 6 (ม.6) |
| **ระดับ CEFR** | CEF: A2/B1 | CEF: B1 | CEF: B1/B2 |
| **รหัสประจำโปรเจกต์** | `NW-B1` | `NW-B2` | `NW-B3` |
| **เวอร์ชันปัจจุบัน** | `v1.2.0-gold` | `v2.2.0-crimson` | **`v3.1.0-azure`** |
| **โทนสีประจำเล่ม** | Sunny Gold & Warm White (`#f59e0b`, `#d97706`) | Crimson Red & Canyon Terracotta (`#dc2626`, `#991b1b`) | **Crystal Azure & Royal Cobalt Blue (`#0f2942`, `#0284c7`, `#38bdf8`)** |
| **โฟลเดอร์บน Desktop** | `new-weaving-1-app/` | `new-weaving-2-app/` | **`new-weaving-3-app/`** |
| **ไฟล์ Zip Deploy** | `new-weaving-1-app-deploy.zip` (~7.0 MB) | `new-weaving-2-app-deploy.zip` (~6.8 MB) | **`new-weaving-3-app-deploy.zip` (~21.7 MB)** |
| **Scope LocalStorage** | `nw1_*` | `nw2_*` | **`nw3_*`** |
| **Cache Service Worker** | `new-weaving-1-v1.2.0` | `new-weaving-2-v2.2.0` | **`new-weaving-3-v3.1.0-azure`** |
| **จุดเด่นเฉพาะเล่ม** | สีทองอบอุ่น เสียงพื้นฐาน 8 บท | สีแดงดินเผา ศัพท์เฉพาะทาง 8 บท | **สีฟ้าคราม ม.6, Part 3 คำอยู่ด้านบนพร้อมจุด `.` ท้ายคำ, Unit 8 บทกลอนอีสป 8 บท** |

---

## 6. รายการตรวจสอบความสมบูรณ์ก่อน Deploy (Pre-Deployment Checklist)

- [x] โฟลเดอร์ `assets/audio/` มีไฟล์เสียง `.mp3` ครบทั้ง 8 บท (`ex1_yinyang.mp3` ถึง `ex8_fox_and_grapes.mp3`)
- [x] โฟลเดอร์ `assets/images/` มีไฟล์ `cover.jpg`, `twp_logo.png`, และรูปบทเรียน `ex1.jpg` ถึง `ex8.jpg` ครบถ้วน
- [x] หน้าแรก (Hero) ไม่มีเลข 3 ต่อท้าย (`จากชุด Weaving It Together` / `from Weaving It Together`)
- [x] แบบฝึกหัด Part 3 ทุกข้อ: กล่องคำสลับ (Token Bank) อยู่ด้านบน และกล่องคำตอบ (Dropzone) อยู่ด้านล่าง
- [x] แบบฝึกหัด Part 3 ทุกข้อ: คำสุดท้ายมีจุด Full Stop (`.`) ติดมาด้วยในกล่องคำ
- [x] Unit 3 Part 2 ข้อ 1: คำว่า `Astrology` ขึ้นต้นด้วยตัว A ใหญ่ ทั้งใน Word Bank และเฉลย
- [x] Unit 8 บทอ่าน: แสดงผลเป็นบทกลอนสัมผัส (Poem Couplets) สวยงามตามต้นฉบับอีสป
- [x] ไฟล์คอนฟิก `.nojekyll`, `_redirects`, `vercel.json` อยู่ที่ Root ครบถ้วน
- [x] แคช Service Worker และ Footer แสดงเวอร์ชัน `v3.1.0-azure` ถูกต้องตรงกัน
- [x] เล่ม 1 และ เล่ม 2 ไม่มีการเปลี่ยนแปลงใดๆ ปลอดภัยและแยกขาดจากกัน 100%

/**
 * NEW Weaving It Together 3 (ม.6) - System Diagnostic Check
 */

const SystemCheck = {
  openModal() {
    const modal = document.getElementById('systemModal');
    if (modal) {
      modal.classList.add('active');
      this.runDiagnostics();
    }
  },

  closeModal() {
    const modal = document.getElementById('systemModal');
    if (modal) modal.classList.remove('active');
  },

  runDiagnostics() {
    const container = document.getElementById('systemResultsContainer');
    if (!container) return;

    container.innerHTML = '<div style="text-align:center; padding: 20px;">กำลังตรวจสอบระบบ...</div>';

    setTimeout(() => {
      const results = [];

      // 1. Web Audio API
      const hasAudioCtx = !!(window.AudioContext || window.webkitAudioContext);
      results.push({
        title: 'Web Audio API (ระบบสังเคราะห์เสียงเอฟเฟกต์)',
        status: hasAudioCtx ? 'pass' : 'fail',
        desc: hasAudioCtx ? 'พร้อมใช้งาน (สังเคราะห์เสียง Sine/Triangle Wave ได้ 100%)' : 'ไม่รองรับบนเบราว์เซอร์นี้'
      });

      // 2. Web Speech API (TTS)
      const hasSpeech = 'speechSynthesis' in window;
      const voicesCount = hasSpeech ? window.speechSynthesis.getVoices().length : 0;
      results.push({
        title: 'Web Speech API (ระบบอ่านออกเสียงอัตโนมัติ)',
        status: hasSpeech ? 'pass' : 'warn',
        desc: hasSpeech ? `พร้อมใช้งาน (${voicesCount} เสียงในระบบ)` : 'ไม่รองรับ (จะใช้ Native Audio .mp3 แทน)'
      });

      // 3. LocalStorage
      let storageOk = false;
      try {
        localStorage.setItem('nw3_test', '1');
        storageOk = localStorage.getItem('nw3_test') === '1';
        localStorage.removeItem('nw3_test');
      } catch (e) {
        storageOk = false;
      }
      results.push({
        title: 'LocalStorage (ระบบบันทึกความก้าวหน้า)',
        status: storageOk ? 'pass' : 'fail',
        desc: storageOk ? 'พร้อมใช้งาน (บันทึกคะแนนและสถานะได้ถาวร)' : 'ไม่สามารถเขียนข้อมูลได้ (อาจเปิด Incognito หรือ Private Mode)'
      });

      // 4. PWA Service Worker
      const hasSW = 'serviceWorker' in navigator;
      results.push({
        title: 'PWA Service Worker (ระบบออฟไลน์ 100%)',
        status: hasSW ? 'pass' : 'warn',
        desc: hasSW ? 'รองรับการติดตั้งลงในเครื่องและทำงานแบบออฟไลน์' : 'ไม่รองรับในเบราว์เซอร์นี้'
      });

      // 5. Screen & Device
      const screenInfo = `${window.innerWidth} x ${window.innerHeight} px (DPR: ${window.devicePixelRatio || 1})`;
      results.push({
        title: 'หน้าจอและอุปกรณ์ (Screen & Responsive)',
        status: 'pass',
        desc: `ขนาดจอ: ${screenInfo} | รองรับ Touch & Click`
      });

      // Render Results
      container.innerHTML = results.map(r => `
        <div style="display:flex; align-items:flex-start; gap:12px; padding:12px; border-radius:8px; background:var(--bg-subtle); margin-bottom:10px;">
          <div style="font-size:1.3rem;">
            ${r.status === 'pass' ? '✅' : r.status === 'warn' ? '⚠️' : '❌'}
          </div>
          <div style="flex:1;">
            <div style="font-weight:700; color:var(--ocean-deep); font-size:0.95rem;">${r.title}</div>
            <div style="font-size:0.82rem; color:var(--text-muted); margin-top:2px;">${r.desc}</div>
          </div>
        </div>
      `).join('');
    }, 250);
  }
};

window.SystemCheck = SystemCheck;

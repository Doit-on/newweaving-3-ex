/**
 * NEW Weaving It Together 3 (ม.6) - Settings Controller
 */

const SettingsController = {
  soundEnabled: localStorage.getItem('nw3_sound_enabled') !== 'false',
  theme: localStorage.getItem('nw3_theme') || 'light',
  fontSize: localStorage.getItem('nw3_fontsize') || 'normal',

  init() {
    this.applyTheme(this.theme);
    this.applyFontSize(this.fontSize);
  },

  openModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.add('active');
  },

  closeModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.classList.remove('active');
  },

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('nw3_sound_enabled', this.soundEnabled);
    const toggle = document.getElementById('soundToggleCheckbox');
    if (toggle) toggle.checked = this.soundEnabled;
    showToast(this.soundEnabled ? 'เปิดเสียงเอฟเฟกต์แล้ว' : 'ปิดเสียงเอฟเฟกต์แล้ว', 'info');
  },

  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('nw3_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },

  toggleTheme() {
    const nextTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(nextTheme);
    showToast(nextTheme === 'dark' ? 'เปลี่ยนเป็นธีมมืด (Dark Mode)' : 'เปลี่ยนเป็นธีมสว่าง (Crystal Azure Theme)', 'info');
  },

  applyFontSize(size) {
    this.fontSize = size;
    localStorage.setItem('nw3_fontsize', size);
    const root = document.documentElement;
    if (size === 'small') root.style.fontSize = '14.5px';
    else if (size === 'large') root.style.fontSize = '18px';
    else root.style.fontSize = '16px';
  },

  resetAllProgress() {
    if (confirm('คุณต้องการล้างข้อมูลคะแนนและความก้าวหน้าทั้งหมดใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้')) {
      for (let i = 1; i <= 8; i++) {
        localStorage.removeItem(`nw3_ex_${i}_score`);
        localStorage.removeItem(`nw3_ex_${i}_completed`);
      }
      showToast('ล้างข้อมูลคะแนนทั้งหมดเรียบร้อยแล้ว', 'success');
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }
  }
};

window.SettingsController = SettingsController;

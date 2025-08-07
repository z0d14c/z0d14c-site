import { useEffect } from 'react';

export default function ResumeToggle() {
  useEffect(() => {
    const btn = document.getElementById('resumeToggle');
    const abr = document.getElementById('abridged');
    const det = document.getElementById('detailed');

    if (!btn || !abr || !det) return;

    const handler = () => {
      if (det.style.display === 'none') {
        det.style.display = 'block';
        abr.style.display = 'none';
        btn.textContent = 'Show abridged resume';
      } else {
        det.style.display = 'none';
        abr.style.display = 'block';
        btn.textContent = 'Show detailed resume';
      }
    };

    btn.addEventListener('click', handler);
    return () => {
      btn.removeEventListener('click', handler);
    };
  }, []);

  return null;
}

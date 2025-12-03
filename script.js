// small interactive touches
(() => {
  // subtle parallax for orbs
  const orbs = [...document.querySelectorAll('.orb')];
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    orbs.forEach((orb, i) => {
      const depth = (i + 1) * 6;
      orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
  });

  // tiny reveal animation on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.glass, .card').forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(8px) scale(.995)';
      setTimeout(() => {
        el.style.transition = 'all 420ms cubic-bezier(.2,.9,.2,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0) scale(1)';
      }, 120 * idx);
    });
  });
})();


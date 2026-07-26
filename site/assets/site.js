/* Progressive enhancement : sans JS, préférence système + sélection manuelle. */
function toggleTheme() {
  const root = document.documentElement;
  const systemDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const current = root.dataset.theme || (systemDark ? 'dark' : 'light');
  root.dataset.theme = current === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('chantilly-theme', root.dataset.theme); } catch (e) {}
}
try {
  const saved = localStorage.getItem('chantilly-theme');
  if (saved) document.documentElement.dataset.theme = saved;
} catch (e) {}

function copyInstall(btn) {
  navigator.clipboard.writeText('npm install chantilly').then(() => {
    const label = btn.textContent;
    btn.textContent = 'Copié ✓';
    setTimeout(() => { btn.textContent = label; }, 1600);
  });
}

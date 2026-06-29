

//Difficulté principale : je m'étais perdue avec les traductions + interactions, l'IA a donc été mobilisée ici//
function toggleDark() {
  document.body.classList.toggle('dark');
  document.getElementById('dark-btn').textContent =
    document.body.classList.contains('dark') ? '☀' : '☾';
}

let lang = 'fr';

function toggleLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  document.getElementById('lang-btn').textContent = lang === 'fr' ? 'EN' : 'FR';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}

function toggleProject(id) {
  const detail = document.getElementById('detail-' + id);
  const card   = document.getElementById('card-' + id);

  if (detail && detail.classList.contains('visible')) {
    detail.classList.remove('visible');
    card.classList.remove('active-card');
    return;
  }
  document.querySelectorAll('.proj-detail').forEach(d => d.classList.remove('visible'));
  document.querySelectorAll('.proj-card').forEach(c => c.classList.remove('active-card'));

  if (detail) {
    detail.classList.add('visible');
    card.classList.add('active-card');
    setTimeout(() => detail.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
}

function closeDetail(id) {
  const detail = document.getElementById('detail-' + id);
  const card   = document.getElementById('card-' + id);
  if (detail) detail.classList.remove('visible');
  if (card)   card.classList.remove('active-card');
}

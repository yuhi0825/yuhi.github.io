// ----- 1) ページ上部タイトルとサブタイトルを動的に入れる -----
const titleEl = document.querySelector('.main-title');
const subEl   = document.querySelector('.subtitle');


// ----- 2) Works セクションに簡単なプロジェクトリストを追加 -----
const works = [
  { title: 'DCASE Fan Sound Anomaly Detection', desc: 'Wavelet を使った特徴抽出と異常検知モデル' },
  { title: 'Wi-Fi HaLow イベント案内アプリ', desc: '位置ベースのイベント案内プロトタイプ' },
  { title: 'ポートフォリオサイト', desc: 'このサイト（静的 → 動的へ進化中）' }
];

const worksParent = document.getElementById('works');
const ul = document.createElement('ul');
works.forEach(w => {
  const li = document.createElement('li');
  li.style.marginBottom = '10px';
  li.innerHTML = `<strong>${w.title}</strong><div style="color:#4b5563;font-size:0.95rem">${w.desc}</div>`;
  ul.appendChild(li);
});
worksParent.appendChild(ul);

// ----- 3) ナビのスクロールで active を切り替える（簡易） -----
const navLinks = document.querySelectorAll('.site-nav a');

function onScroll() {
  const scrollPos = window.scrollY + 80; // ヘッダー分のオフセット
  navLinks.forEach(a => {
    const id = a.getAttribute('href')?.slice(1);
    if (!id) return;
    const sec = document.getElementById(id);
    if (!sec) return;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// ----- 4) スムーススクロール（クリック時） -----
document.querySelectorAll('.site-nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  });
});

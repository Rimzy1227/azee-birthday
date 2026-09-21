const birthdayPerson = {
  name: 'Azeeka',
  nickname: 'Azee',
  birthdayMessage: 'Happy Birthday!'
};

const pageMeta = {
  index: { title: 'Mystery', progress: 1 },
  page2: { title: 'Birthday Reveal', progress: 2 },
  page3: { title: 'Memories', progress: 3 },
  page4: { title: 'Appreciation', progress: 4 },
  page5: { title: 'Poem', progress: 5 },
  page6: { title: 'Final Surprise', progress: 6 }
};

const galleryCaptions = [
  'One of those moments worth remembering.',
  'A simple day that became a good memory.',
  'Some moments don’t need an explanation.',
  'Just another memory that deserves a place here.',
  'The kind of memory that feels warm even years later.',
  'A reminder that good things often appear quietly.'
];

const appreciationCards = [
  {
    title: 'Your Smile',
    text: 'It has a strange ability to make an ordinary moment feel better.'
  },
  {
    title: 'Your Energy',
    text: 'Some people bring a lightness into a room without even trying.'
  },
  {
    title: 'Your Kindness',
    text: 'The little things people do often become the memories we remember most.'
  },
  {
    title: 'Your Personality',
    text: 'There is something unmistakably you about the way you move through the world.'
  },
  {
    title: 'The Memories',
    text: 'The best memories are rarely planned. They simply happen, and stay.'
  },
  {
    title: 'Just Being You',
    text: 'No special reason needed. You are simply someone worth appreciating.'
  }
];

const birthdayMessages = [
  'You are more appreciated than you probably realize.',
  'Some people make life better simply by being part of it.',
  'Never underestimate the impact of your presence.',
  'The world is a little more interesting because you are in it.',
  'Keep being unapologetically yourself.',
  'May this year give you more reasons to smile than reasons to worry.'
];

const fortuneMessages = [
  'This year is going to bring unexpected adventures.',
  'A beautiful memory is waiting somewhere ahead.',
  'Something you have been hoping for may be closer than you think.',
  'More laughter is coming.',
  'This chapter is going to be different in the best way.',
  'Your best memories of this year have not happened yet.'
];

const poemLines = [
  'Some people become memories,',
  'some become stories,',
  'and some quietly become',
  'a beautiful part of life.',
  '',
  'Through ordinary days',
  'and unexpected moments,',
  'through laughter and silence,',
  'certain people simply make',
  'the journey a little brighter.',
  '',
  'So today isn’t just another date.',
  'It’s a reminder that somewhere,',
  'someone is genuinely grateful',
  'that you exist.',
  '',
  'May the days ahead',
  'bring reasons to smile,',
  'moments worth remembering,',
  'dreams worth chasing,',
  'and happiness that stays.',
  '',
  'Happy Birthday',
  'to someone truly unforgettable.'
];

function createStars(container, count) {
  for (let i = 0; i < count; i += 1) {
    const star = document.createElement('span');
    const size = Math.random() * 4 + 2;
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.opacity = (Math.random() * 0.9 + 0.2).toString();
    container.appendChild(star);
  }
}

function createSparkles(container, count) {
  for (let i = 0; i < count; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(sparkle);
  }
}

function createBalloons() {
  const container = document.querySelector('.floating-balloons');
  if (!container) return;

  const palettes = [
    { color: '#ff8fc5', accent: '#ffd2e4', message: 'A little pink joy is floating your way 💗' },
    { color: '#a7d1ff', accent: '#cbe9ff', message: 'Something bright and lovely is coming your way 💙' },
    { color: '#e4d0ff', accent: '#f0e4ff', message: 'A little magic is waiting for you ✨' },
    { color: '#ffd89d', accent: '#fff0bd', message: 'Warm memories are gathering around you 🌟' },
    { color: '#c8f0d3', accent: '#e7ffe9', message: 'Fresh happiness is floating into your day 💚' },
    { color: '#ffb4d9', accent: '#ffe1ef', message: 'You deserve all the soft, happy moments 💕' },
    { color: '#b9b7ff', accent: '#e4e3ff', message: 'A peaceful little surprise is on its way 🌙' },
    { color: '#ffcaad', accent: '#ffe6d8', message: 'Your next memory is going to be beautiful 🧡' },
    { color: '#9fe7ff', accent: '#d8f7ff', message: 'Keep shining, Azee, wonderful things are ahead 💫' },
    { color: '#f2b7f5', accent: '#fbe4fc', message: 'More laughter is finding its way to you 🎀' }
  ];

  for (let i = 0; i < palettes.length; i += 1) {
    const balloon = document.createElement('span');
    balloon.className = 'balloon';
    const palette = palettes[i % palettes.length];
    balloon.style.left = `${Math.random() * 90 + 4}%`;
    balloon.style.background = `linear-gradient(135deg, rgba(255,255,255,0.8), ${palette.color})`;
    balloon.dataset.palette = JSON.stringify(palette);
    balloon.style.animationDelay = `${Math.random() * 9}s`;
    balloon.style.animationDuration = `${18 + Math.random() * 10}s`;
    balloon.addEventListener('pointerdown', (event) => popFloatingDecoration(balloon, event));
    container.appendChild(balloon);
  }

  for (let i = 0; i < 7; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    const palette = palettes[(i + 2) % palettes.length];
    heart.style.left = `${Math.random() * 88 + 6}%`;
    heart.style.setProperty('--heart-color', palette.color);
    heart.dataset.palette = JSON.stringify(palette);
    heart.style.setProperty('--heart-size', `${Math.random() * 13 + 15}px`);
    heart.style.animationDelay = `${Math.random() * 8}s`;
    heart.style.animationDuration = `${14 + Math.random() * 8}s`;
    container.appendChild(heart);
  }
}

function popFloatingDecoration(decoration, event) {
  if (decoration.classList.contains('popped')) return;
  decoration.classList.add('popped');
  const bounds = decoration.getBoundingClientRect();
  const x = event?.clientX || bounds.left + bounds.width / 2;
  const y = event?.clientY || bounds.top + bounds.height / 2;
  const particleLayer = document.querySelector('.confetti-container') || document.body;
  const colors = ['#ff9fc9', '#ffd88a', '#cbe9ff', '#d7c4ff', '#a6f0c7'];
  for (let i = 0; i < 14; i += 1) {
    const particle = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 14;
    const distance = 35 + Math.random() * 70;
    particle.className = `pop-particle ${i % 3 === 0 ? 'pop-heart' : i % 3 === 1 ? 'pop-star' : 'pop-spark'}`;
    particle.style.setProperty('--pop-x', `${x}px`);
    particle.style.setProperty('--pop-y', `${y}px`);
    particle.style.setProperty('--pop-dx', `${Math.cos(angle) * distance}px`);
    particle.style.setProperty('--pop-dy', `${Math.sin(angle) * distance}px`);
    particle.style.setProperty('--pop-color', colors[i % colors.length]);
    particleLayer.appendChild(particle);
    setTimeout(() => particle.remove(), 1300);
  }

  const fortune = document.createElement('div');
  fortune.className = 'balloon-fortune';
  const palette = JSON.parse(decoration.dataset.palette || '{"color":"#ffb4d9","accent":"#ffe1ef","message":"A little joy is floating your way ✨"}');
  fortune.textContent = palette.message;
  fortune.style.setProperty('--fortune-color', palette.color);
  fortune.style.setProperty('--fortune-accent', palette.accent);
  document.body.appendChild(fortune);
  setTimeout(() => fortune.remove(), 3700);
  setTimeout(() => decoration.remove(), 300);
}

function setProgress() {
  const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
  const pageProgress = pageMeta[currentPage] || pageMeta.index;
  const progressGroup = document.querySelector('.progress-indicator');
  if (!progressGroup) return;

  const maxPages = 6;
  progressGroup.innerHTML = '';
  for (let i = 1; i <= maxPages; i += 1) {
    const dot = document.createElement('span');
    dot.className = `progress-dot ${i <= pageProgress.progress ? 'active' : ''}`;
    progressGroup.appendChild(dot);
  }
}

function createConfettiBurst(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const container = document.querySelector('.confetti-container');
  if (!container) return;

  const colors = ['#ffb4d9', '#ffd88a', '#cbe9ff', '#d7c4ff', '#9fe7ff', '#a6f0c7'];
  for (let i = 0; i < 55; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--x', `${(Math.random() - 0.5) * 350}px`);
    piece.style.setProperty('--y', `${(Math.random() * 200 + 80)}px`);
    piece.style.setProperty('--r', `${(Math.random() * 600 - 300).toFixed(0)}deg`);
    piece.style.animationDelay = `${Math.random() * 0.12}s`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
}

function addRevealAnimations() {
  const revealItems = document.querySelectorAll('.photo-card, .quote-card, .glass-card');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => {
      item.style.opacity = '1'; item.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px) scale(0.98)';
    item.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(item);
  });
}

function initIntroPage() {
  const button = document.querySelector('[data-enter-surprise]');
  if (!button) return;

  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.sessionStorage.setItem('playBirthdaySong', 'true');
    window.sessionStorage.setItem('birthdaySongIndex', '0');
    createConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
    const shell = document.querySelector('.page-shell');
    if (shell) {
      shell.style.filter = 'blur(3px) brightness(0.9)';
      shell.style.transition = 'all 0.6s ease';
    }
    setTimeout(() => {
      window.location.assign('page2.html');
    }, 420);
  });
}

function initCakeReveal() {
  const cake = document.querySelector('.cake');
  const candles = document.querySelectorAll('.candle');
  const revealText = document.querySelector('[data-cake-message]');
  let hasBlownCandles = false;

  if (!cake) return;

  const makeWish = () => {
    if (hasBlownCandles) return;
    hasBlownCandles = true;
    candles.forEach((candle, index) => {
      setTimeout(() => candle.classList.add('off'), index * 260);
    });
    if (revealText) {
      revealText.textContent = 'Make a wish... blow out the candles 🤗';
      revealText.style.opacity = '1';
      revealText.style.transform = 'translateY(0)';
    }
    createConfettiBurst(window.innerWidth / 2, 210);
    setTimeout(() => {
      if (revealText) revealText.textContent = "Actually... today's wish is for YOU. 😍";
    }, 1700);
  };

  cake.addEventListener('click', makeWish);
  cake.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      makeWish();
    }
  });
}

function initGallery() {
  const cards = document.querySelectorAll('.photo-card');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const closeBtn = document.querySelector('.close-lightbox');
  const lightboxPanel = document.querySelector('.lightbox-panel');
  const playButton = document.querySelector('[data-play-gallery]');
  let showcaseTimer = null;

  if (!lightbox) return;

  const openMemory = (index) => {
      const card = cards[index];
      const image = card.querySelector('img');
      const caption = card.querySelector('figcaption');
      if (image && lightboxImage) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
      }
      if (lightboxCaption) {
        if (caption) {
          lightboxCaption.innerHTML = caption.innerHTML;
        } else {
          lightboxCaption.textContent = galleryCaptions[index] || 'A lovely memory';
        }
      }
      if (lightboxPanel) {
        lightboxPanel.className = 'lightbox-panel';
        void lightboxPanel.offsetWidth;
        lightboxPanel.classList.add(`memory-motion-${(index % 6) + 1}`);
      }
      lightbox.classList.add('open');
  };

  cards.forEach((card, index) => card.addEventListener('click', () => openMemory(index)));

  if (playButton) {
    playButton.addEventListener('click', () => {
      clearInterval(showcaseTimer);
      let index = 0;
      openMemory(index);
      showcaseTimer = setInterval(() => {
        index += 1;
        if (index >= cards.length) {
          clearInterval(showcaseTimer);
          showcaseTimer = null;
          return;
        }
        openMemory(index);
      }, 1450);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      clearInterval(showcaseTimer);
      showcaseTimer = null;
      lightbox.classList.remove('open');
    });
  }

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      clearInterval(showcaseTimer);
      showcaseTimer = null;
      lightbox.classList.remove('open');
    }
  });
}

function initCards() {
  document.querySelectorAll('.special-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });
}

function initPoem() {
  const poemContainer = document.querySelector('.poem-lines');
  if (!poemContainer) return;

  const lines = [...poemContainer.querySelectorAll('.line')];
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 350);
  });
}

function initQuotes() {
  const quoteText = document.querySelector('[data-quote-text]');
  const quoteButton = document.querySelector('[data-next-quote]');
  if (!quoteText || !quoteButton) return;

  let index = 0;
  const renderQuote = () => {
    quoteText.textContent = birthdayMessages[index % birthdayMessages.length];
    quoteText.style.opacity = '1';
    quoteText.style.transform = 'translateY(0)';
  };

  quoteButton.addEventListener('click', () => {
    index += 1;
    renderQuote();
  });

  renderQuote();
}

function initFortune() {
  const fortuneBox = document.querySelector('.fortune-box');
  const fortuneButton = document.querySelector('[data-open-fortune]');
  const finalCard = document.querySelector('.final-card');
  if (!fortuneBox || !fortuneButton) return;

  fortuneButton.addEventListener('click', () => {
    const random = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    fortuneBox.textContent = `Birthday Fortune ✨ — ${random}`;
    fortuneBox.classList.add('show');

    if (finalCard) {
      finalCard.classList.add('is-visible');
      finalCard.style.opacity = '1';
      finalCard.style.transform = 'scale(1)';
    }

  });
}

function initEasterEgg() {
  const star = document.querySelector('.hidden-star');
  if (!star) return;

  let clicks = 0;
  star.addEventListener('click', () => {
    clicks += 1;
    if (clicks >= 5) {
      const message = document.createElement('div');
      message.className = 'fortune-box show';
      message.style.marginTop = '1.5rem';
      message.textContent = 'You found the secret. Okay... you are officially too curious 😂 Happy Birthday to my favorite Azee Kutty🫶!';
      const parent = document.querySelector('.question-wall') || document.querySelector('.final-card');
      if (parent) parent.appendChild(message);
      star.remove();
    }
  });
}

function initMusic() {
  const toggle = document.querySelector('.music-toggle');
  if (!toggle) return;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audioCtx = null;
  let songTimeout = null;
  let isPlaying = false;
  let songIndex = 0;
  const activeSources = new Set();

  const birthdaySong = [
    [392.00, 0.32], [392.00, 0.32], [440.00, 0.55], [392.00, 0.55], [523.25, 0.55], [493.88, 0.95],
    [392.00, 0.32], [392.00, 0.32], [440.00, 0.55], [392.00, 0.55], [587.33, 0.55], [523.25, 0.95],
    [392.00, 0.32], [392.00, 0.32], [783.99, 0.55], [659.25, 0.55], [523.25, 0.55], [493.88, 0.55], [440.00, 0.95],
    [698.46, 0.32], [698.46, 0.32], [659.25, 0.55], [523.25, 0.55], [587.33, 0.55], [523.25, 1.1]
  ];

  const playNote = (frequency, duration) => {
    if (!AudioCtx) return;
    if (!audioCtx) audioCtx = new AudioCtx();
    const now = audioCtx.currentTime;
    const filter = audioCtx.createBiquadFilter();
    const masterGain = audioCtx.createGain();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.Q.value = 0.45;
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.052, now + 0.11);
    masterGain.gain.linearRampToValueAtTime(0.034, now + Math.min(0.32, duration * 0.55));
    masterGain.gain.linearRampToValueAtTime(0.0001, now + duration);
    filter.connect(masterGain).connect(audioCtx.destination);

    [
      ['sine', frequency, 1],
      ['triangle', frequency * 2, 0.08],
      ['sine', frequency * 3, 0.025]
    ].forEach(([type, noteFrequency, volume]) => {
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = noteFrequency;
      gainNode.gain.value = volume;
      oscillator.detune.value = type === 'sine' ? -2 : 2;
      oscillator.connect(gainNode).connect(filter);
      activeSources.add(oscillator);
      oscillator.addEventListener('ended', () => activeSources.delete(oscillator), { once: true });
      oscillator.start(now);
      oscillator.stop(now + duration + 0.04);
    });
  };

  const stopSong = () => {
    isPlaying = false;
    clearTimeout(songTimeout);
    activeSources.forEach((source) => {
      try {
        source.stop();
      } catch {}
    });
    activeSources.clear();
    songIndex = 0;
    window.sessionStorage.removeItem('playBirthdaySong');
    window.sessionStorage.removeItem('birthdaySongIndex');
    toggle.textContent = '♫';
  };

  const playSong = () => {
    if (!isPlaying) return;
    if (songIndex >= birthdaySong.length) {
      stopSong();
      return;
    }

    const [frequency, duration] = birthdaySong[songIndex];
    playNote(frequency, duration);
    songIndex += 1;
    window.sessionStorage.setItem('birthdaySongIndex', songIndex.toString());
    songTimeout = setTimeout(playSong, duration * 1000 + 55);
  };

  const startSong = () => {
    if (!AudioCtx) return;
    if (!audioCtx) audioCtx = new AudioCtx();
    audioCtx.resume();
    clearTimeout(songTimeout);
    songIndex = Number.parseInt(window.sessionStorage.getItem('birthdaySongIndex') || '0', 10);
    if (songIndex >= birthdaySong.length) songIndex = 0;
    isPlaying = true;
    toggle.textContent = '❚❚';
    window.sessionStorage.setItem('playBirthdaySong', 'true');
    playSong();
  };

  toggle.addEventListener('click', () => {
    if (!AudioCtx) {
      toggle.textContent = '♫';
      return;
    }

    if (isPlaying) {
      stopSong();
    } else {
      startSong();
    }
  });

  if (document.body.dataset.page !== 'index' && window.sessionStorage.getItem('playBirthdaySong') === 'true') {
    startSong();
  }
}

function updatePersonalizedText() {
  const finalName = document.querySelector('[data-birthday-name]');
  if (finalName) {
    finalName.textContent = `Happy Birthday, ${birthdayPerson.name}!`;
  }

  const finalNote = document.querySelector('[data-personal-note]');
  if (finalNote) {
    finalNote.textContent = `To ${birthdayPerson.nickname}, you are one of the most wonderful people I know.`;
  }
}

function initPageSpecifics() {
  const page = document.body.dataset.page || 'index';
  if (page === 'index') initIntroPage();
  if (page === 'page2') initCakeReveal();
  if (page === 'page3') initGallery();
  if (page === 'page4') initCards();
  if (page === 'page5') initPoem();
  if (page === 'page6') {
    updatePersonalizedText();
    initQuotes();
    initFortune();
    initEasterEgg();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setProgress();
  addRevealAnimations();
  initMusic();
  initPageSpecifics();

  document.querySelectorAll('.starfield, .sparkles').forEach((field) => {
    if (field.classList.contains('starfield')) createStars(field, 60);
    if (field.classList.contains('sparkles')) createSparkles(field, 28);
  });

  const pageShell = document.querySelector('.page-shell');
  if (pageShell && !pageShell.querySelector('.floating-balloons')) {
    const balloons = document.createElement('div');
    balloons.className = 'floating-balloons';
    pageShell.appendChild(balloons);
  }

  const confetti = document.createElement('div');
  confetti.className = 'confetti-container';
  document.body.appendChild(confetti);

  createBalloons();

  const finalButton = document.querySelector('[data-final-reveal]');
  if (finalButton) {
    finalButton.addEventListener('click', () => {
      const content = document.querySelector('.final-card');
      const scrapbook = document.querySelector('.scrapbook-reveal');
      if (content) {
        content.classList.add('is-visible');
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
      }
      if (scrapbook) scrapbook.classList.add('is-visible');
      createConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
    });
  }
});

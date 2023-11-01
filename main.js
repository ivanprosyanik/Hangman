let themes = {
  Природа: [
    'Дерево',
    'Озеро',
    'Гора',
    'Цветок',
    'Река',
    'Солнце',
    'Песок',
    'Птица',
    'Звезда',
    'Бабочка',
    'Луна',
    'Дождь',
    'Снег',
    'Трава',
    'Ветер',
    'Медведь',
    'Океан',
    'Поляна',
    'Камень',
    'Молния'
  ],
  Наука: [
    'Физика',
    'Химия',
    'Биология',
    'Математика',
    'Астрономия',
    'Генетика',
    'Роботика',
    'Электроника',
    'Гравитация',
    'Экология',
    'Инженерия',
    'Гипотеза',
    'Лаборатория',
    'Микроскоп',
    'Молекула',
    'Эксперимент',
    'Ученый',
    'Исследование'
  ],
  Спорт: [
    'Футбол',
    'Баскетбол',
    'Теннис',
    'Плавание',
    'Бег',
    'Велоспорт',
    'Гимнастика',
    'Бокс',
    'Хоккей',
    'Гольф',
    'Скейтбординг',
    'Сноуборд',
    'Волейбол',
    'Альпинизм',
    'Стадион',
    'Судья'
  ],
  Тело: [
    'Голова',
    'Сердце',
    'Рука',
    'Нога',
    'Палец',
    'Глаз',
    'Ухо',
    'Нос',
    'Рот',
    'Живот',
    'Спина',
    'Плечо',
    'Грудь',
    'Шея',
    'Зуб',
    'Кость',
    'Кожа',
    'Волосы',
    'Мышца',
    'Сустав'
  ]
};

let themesArray = Object.keys(themes);
let randomTheme = themesArray[Math.floor(Math.random() * themesArray.length)];
let selectedWords = themes[randomTheme];
let word = selectedWords[Math.floor(Math.random() * selectedWords.length)];
let lives = 6;

const outputWord = document.getElementById('outputWord');
const outputTheme = document.getElementById('outputTheme');
const body = document.getElementById('body');
const btns = document.querySelectorAll('#btn');
const attemptsPaint = document.querySelectorAll('#attemp');
const newGame = document.getElementById('newGame');

outputTheme.textContent = `Ваша тема: ${randomTheme}`;

btns.forEach(el => {
  el.addEventListener('click', () => {
    btnClick(el.value)
    el.disabled = true;
  })
});

attemptsPaint.forEach(el => {
  // if (!el.classList.contains('active')) {
  //   el.classList.add('active')
  // }
})

let underLine = '';
let notSpace = '';

function start() {
  for (let i = 0; i < word.length; i++) {
    underLine += '_';
  }
  outputWord.textContent = underLine;
}

function btnClick(el) {
  notSpace = underLine;
  for (let i = 0; i < word.length; i++) {
    if (el == word[i].toUpperCase()) {
      underLine = underLine.substring(0, i) + el + underLine.substring(i + 1);
    }
    outputWord.textContent = underLine;
  }
  if (notSpace == underLine) {
    lives -= 1
    attemptsPaint[lives].classList.add('active');
  }
  if (lives == 0) {
    attemptsPaint[lives].classList.add('active');
    outputWord.textContent = `Ваше слово: ${word}`
  }
}

start()
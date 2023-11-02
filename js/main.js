let themes = {
  Nature: ['Дерево', 'Озеро', 'Гора', 'Цветок', 'Река', 'Солнце', 'Песок', 'Птица', 'Звезда', 'Бабочка', 'Луна', 'Дождь', 'Снег', 'Трава', 'Ветер', 'Медведь', 'Океан', 'Поляна', 'Камень', 'Молния'],
  Science: ['Физика', 'Химия', 'Биология', 'Математика', 'Астрономия', 'Генетика', 'Роботика', 'Электроника', 'Гравитация', 'Экология', 'Инженерия', 'Гипотеза', 'Лаборатория', 'Микроскоп', 'Молекула', 'Эксперимент', 'Ученый', 'Исследование'],
  Sport: ['Сноуборд', 'Стадион', 'Судья', 'Мяч', 'Свисток', 'Тайм', 'Фол', 'Тренировка',],
  KindOfSport: ['Футбол', 'Баскетбол', 'Теннис', 'Плавание', 'Бег', 'Велоспорт', 'Гимнастика', 'Бокс', 'Хоккей', 'Гольф', 'Скейтбординг',
    'Волейбол', 'Альпинизм',],
  Body: ['Голова', 'Сердце', 'Рука', 'Нога', 'Палец', 'Глаз', 'Ухо', 'Нос', 'Рот', 'Живот', 'Спина', 'Плечо', 'Грудь', 'Шея', 'Зуб', 'Кость', 'Кожа', 'Волосы', 'Мышца', 'Сустав']
};

let themesArray = Object.keys(themes);
let randomTheme = themesArray[Math.floor(Math.random() * themesArray.length)];
let selectedWords = themes[randomTheme];
let word = selectedWords[Math.floor(Math.random() * selectedWords.length)];
let lives = 6;

const outputWord = document.getElementById('outputWord');
const outputTheme = document.getElementById('outputTheme');
const body = document.getElementById('body');
const modal = document.querySelector('.modal');
const btnNewGame = document.querySelector('#newGame');
const closePage = document.querySelector('#closePage')
const btns = document.querySelectorAll('#btn');
const attemptsPaint = document.querySelectorAll('#attemp');
const newGame = document.getElementById('newGame');

function translateTheme() {
  if (randomTheme == 'Sport') {
    outputTheme.innerHTML = `<p>Ваша тема:</p> <span>Спорт</span>`;
  } else if (randomTheme == 'Nature') {
    outputTheme.innerHTML = `<p>Ваша тема:</p> <span>Природа</span>`;
  } else if (randomTheme == 'Science') {
    outputTheme.innerHTML = `<p>Ваша тема:</p> <span>Наука</span>`;
  } else if (randomTheme == 'Body') {
    outputTheme.innerHTML = `<p>Ваша тема:</p> <span>Тело</span>`;
  } else if (randomTheme == 'KindOfSport') {
    outputTheme.innerHTML = `<p>Ваша тема:</p> <span>Спорт(Вид)</span>`;
  }
}
translateTheme()

btns.forEach(el => {
  el.addEventListener('click', () => {
    btnClick(el.value)
    el.disabled = true;
  })
});


btnNewGame.addEventListener('click', () => {
  location.reload()
});

closePage.addEventListener('click', () => {
  window.close();
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
    setTimeout(() => {
      outputWord.innerHTML = `<p>Ваше слово:</p> <span>${word}</span>`
    }, 1000);
    setTimeout(() => {
      modal.classList.add('active')
      body.classList.add('lock')
    }, 2000);
  }
}

start()
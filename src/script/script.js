let eng = [
    { word: 'apple', translation: 'яблоко' },
    { word: 'banana', translation: 'банан' },
    { word: 'cat', translation: 'кот' },
    { word: 'dog', translation: 'собака' },
    { word: 'elephant', translation: 'слон' },
    { word: 'flower', translation: 'цветок' },
    { word: 'grape', translation: 'виноград' },
    { word: 'house', translation: 'дом' },
    { word: 'ice cream', translation: 'мороженое' },
    { word: 'jacket', translation: 'куртка' },
    { word: 'kite', translation: 'воздушный змей' },
    { word: 'lemon', translation: 'лимон' },
    { word: 'monkey', translation: 'обезьяна' },
    { word: 'notebook', translation: 'тетрадь' },
    { word: 'orange', translation: 'апельсин' },
    { word: 'pencil', translation: 'карандаш' },
    { word: 'queen', translation: 'королева' },
    { word: 'rabbit', translation: 'кролик' },
    { word: 'sun', translation: 'солнце' },
    { word: 'tree', translation: 'дерево' },
    { word: 'umbrella', translation: 'зонтик' },
    { word: 'violin', translation: 'скрипка' },
    { word: 'watermelon', translation: 'арбуз' },
    { word: 'yogurt', translation: 'йогурт' },
    { word: 'airplane', translation: 'самолет' },
    { word: 'ball', translation: 'мяч' },
    { word: 'cake', translation: 'торт' },
    { word: 'egg', translation: 'яйцо' },
    { word: 'fish', translation: 'рыба' },
    { word: 'guitar', translation: 'гитара' },
    { word: 'hat', translation: 'шапка' },
    { word: 'island', translation: 'остров' },
    { word: 'juice', translation: 'сок' },
    { word: 'kangaroo', translation: 'кенгуру' },
    { word: 'lamp', translation: 'лампа' },
    { word: 'moon', translation: 'луна' },
    { word: 'necklace', translation: 'ожерелье' },
    { word: 'octopus', translation: 'осьминог' },
    { word: 'robot', translation: 'робот' },
    { word: 'snake', translation: 'змея' },
    { word: 'table', translation: 'стол' },
    { word: 'vase', translation: 'ваза' },
    { word: 'whale', translation: 'кит' },
    { word: 'yarn', translation: 'пряжа' },
    { word: 'zebra', translation: 'зебра' },
    { word: 'bear', translation: 'медведь' },
    { word: 'carrot', translation: 'морковь' },
    { word: 'dolphin', translation: 'дельфин' },
    { word: 'grapefruit', translation: 'грейпфрут' },
    { word: 'hamster', translation: 'хомяк' },
    { word: 'jigsaw', translation: 'пазл' },
    { word: 'kiwi', translation: 'киви' },
    { word: 'lion', translation: 'лев' },
    { word: 'mango', translation: 'манго' },
    { word: 'nut', translation: 'орех' },
    { word: 'owl', translation: 'сова' },
    { word: 'peacock', translation: 'павлин' },
    { word: 'quilt', translation: 'одеяло' },
    { word: 'rhinoceros', translation: 'носорог' },
    { word: 'saxophone', translation: 'саксофон' },
    { word: 'tulip', translation: 'тюльпан' },
    { word: 'walrus', translation: 'морж' },
    { word: 'xylophone', translation: 'ксилофон' },
    { word: 'apricot', translation: 'абрикос' },
    { word: 'butterfly', translation: 'бабочка' },
    { word: 'crocodile', translation: 'крокодил' },
    { word: 'dandelion', translation: 'одуванчик' },
    { word: 'flamingo', translation: 'фламинго' },
    { word: 'gazelle', translation: 'газель' },
    { word: 'hibiscus', translation: 'гибискус' },
    { word: 'iguana', translation: 'игуана' },
    { word: 'jackal', translation: 'шакал' },
    { word: 'jellybean', translation: 'жевательная конфета' },
    { word: 'lemur', translation: 'лемур' },
    { word: 'mongoose', translation: 'мангуст' },
    { word: 'nightingale', translation: 'соловей' },
    { word: 'otter', translation: 'выдра' },
    { word: 'panda', translation: 'панда' },
    { word: 'quokka', translation: 'кукка' },
    { word: 'sloth', translation: 'ленивец' },
    { word: 'toucan', translation: 'тукан' },
    { word: 'unicorn', translation: 'единорог' },
    { word: 'vulture', translation: 'стервятник' },
    { word: 'xenops', translation: 'ксилофон' },
    { word: 'yak', translation: 'як' },
    { word: 'alligator', translation: 'аллигатор' },
    { word: 'bison', translation: 'бизон' },
    { word: 'cheetah', translation: 'гепард' },
    { word: 'falcon', translation: 'сокол' },
    { word: 'hedgehog', translation: 'еж' },
    { word: 'ibex', translation: 'каменный козёл' },
    { word: 'koala', translation: 'коала' },
];

let cloneEng = [...eng];
let outWords = document.querySelector('.words .out');
let allWords = document.querySelector('.all_words');
let allInput = document.querySelectorAll('.words input');
let outLearnWords = '';

function showAllWords() {
    let outAllWords = '';
    eng.forEach((item, i) => {
        outAllWords += item.word + ' - ' + item.translation + '<br>';
    });
    allInput.forEach((item) => item.classList.remove('active'));
    allWords.classList.add('active');

    outWords.innerHTML = outAllWords;
}

showAllWords();

let arrRepeat = [];

function getItem() {
    if (localStorage.getItem('repeat') !== null) {
        arrRepeat = JSON.parse(localStorage.getItem('repeat'));
    }

    if (localStorage.getItem('eng') !== null) {
        cloneEng = JSON.parse(localStorage.getItem('eng'));
    }
}

function setItem() {
    localStorage.setItem('repeat', JSON.stringify(arrRepeat));
    localStorage.setItem('eng', JSON.stringify(cloneEng));
}

function removeItem() {
    localStorage.removeItem('repeat');
    localStorage.removeItem('eng');
    console.log(cloneEng);
}

getItem();

let length = cloneEng.length;
console.log(length);
let word = document.querySelector('.word');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
let reset = document.querySelector('.reset');
let learnWords = document.querySelector('.learn_words');
let newWords = document.querySelector('.new_words');

let i = 0;

const randomInt = Math.floor(Math.random() * length);
word.innerHTML = cloneEng[randomInt].word;

function removeWords() {
    arrRepeat.push(cloneEng[randomInt]);
    let arrWord = arrRepeat.map((item) => item.word);
    cloneEng.forEach((item, i) => {
        if (arrWord.includes(item.word)) {
            cloneEng.splice(i, 1);
        }
    });
    setItem();
    word.innerHTML = cloneEng[randomInt].word;
}

function showLearnWords() {
    let outLearnWords = '';
    arrRepeat.forEach((item, i) => {
        outLearnWords += item.word + ' - ' + item.translation + '<br>';
    });
    allInput.forEach((item) => item.classList.remove('active'));
    learnWords.classList.add('active');

    outWords.innerHTML = outLearnWords;
}

function showNewWords() {
    let outNewWords = '';
    cloneEng.forEach((item, i) => {
        outNewWords += item.word + ' -  ' + item.translation + '<br>';
    });
    allInput.forEach((item) => item.classList.remove('active'));
    newWords.classList.add('active');

    outWords.innerHTML = outNewWords;
}

yes.onclick = () => {
    removeWords();
    i++;
    if (i >= 5) {
        i = 0;
        let firstElem = arrRepeat.shift();
        cloneEng.push(firstElem);
        setItem();
    }
};

no.onclick = () => {
    word.innerHTML =
        cloneEng[randomInt].word + ' - ' + cloneEng[randomInt].translation;
};

reset.onclick = () => {
    removeItem();
};

allWords.onclick = () => {
    showAllWords();
};

learnWords.onclick = () => {
    showLearnWords();
};

newWords.onclick = () => {
    showNewWords();
};

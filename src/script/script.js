let eng = [
    {word: "apple", translation: "яблоко"},
    {word: "banana", translation: "банан"},
    {word: "cat", translation: "кот"},
    {word: "dog", translation: "собака"},
    {word: "elephant", translation: "слон"},
    {word: "flower", translation: "цветок"},
    {word: "grape", translation: "виноград"},
    {word: "house", translation: "дом"},
    {word: "ice cream", translation: "мороженое"},
    {word: "jacket", translation: "куртка"},
    {word: "kite", translation: "воздушный змей"},
    {word: "lemon", translation: "лимон"},
    {word: "monkey", translation: "обезьяна"},
    {word: "notebook", translation: "тетрадь"},
    {word: "orange", translation: "апельсин"},
    {word: "pencil", translation: "карандаш"},
    {word: "queen", translation: "королева"},
    {word: "rabbit", translation: "кролик"},
    {word: "sun", translation: "солнце"},
    {word: "tree", translation: "дерево"},
    {word: "umbrella", translation: "зонтик"},
    {word: "violin", translation: "скрипка"},
    {word: "watermelon", translation: "арбуз"},
    {word: "yogurt", translation: "йогурт"},
    {word: "airplane", translation: "самолет"},
    {word: "ball", translation: "мяч"},
    {word: "cake", translation: "торт"},
    {word: "egg", translation: "яйцо"},
    {word: "fish", translation: "рыба"},
    {word: "guitar", translation: "гитара"},
    {word: "hat", translation: "шапка"},
    {word: "island", translation: "остров"},
    {word: "juice", translation: "сок"},
    {word: "kangaroo", translation: "кенгуру"},
    {word: "lamp", translation: "лампа"},
    {word: "moon", translation: "луна"},
    {word: "necklace", translation: "ожерелье"},
    {word: "octopus", translation: "осьминог"},
    {word: "robot", translation: "робот"},
    {word: "snake", translation: "змея"},
    {word: "table", translation: "стол"},
    {word: "vase", translation: "ваза"},
    {word: "whale", translation: "кит"},
    {word: "yarn", translation: "пряжа"},
    {word: "zebra", translation: "зебра"},
    {word: "bear", translation: "медведь"},
    {word: "carrot", translation: "морковь"},
    {word: "dolphin", translation: "дельфин"},
    {word: "grapefruit", translation: "грейпфрут"},
    {word: "hamster", translation: "хомяк"},
    {word: "jigsaw", translation: "пазл"},
    {word: "kiwi", translation: "киви"},
    {word: "lion", translation: "лев"},
    {word: "mango", translation: "манго"},
    {word: "nut", translation: "орех"},
    {word: "owl", translation: "сова"},
    {word: "peacock", translation: "павлин"},
    {word: "quilt", translation: "одеяло"},
    {word: "rhinoceros", translation: "носорог"},
    {word: "saxophone", translation: "саксофон"},
    {word: "tulip", translation: "тюльпан"},
    {word: "walrus", translation: "морж"},
    {word: "xylophone", translation: "ксилофон"},
    {word: "apricot", translation: "абрикос"},
    {word: "butterfly", translation: "бабочка"},
    {word: "crocodile", translation: "крокодил"},
    {word: "dandelion", translation: "одуванчик"},
    {word: "flamingo", translation: "фламинго"},
    {word: "gazelle", translation: "газель"},
    {word: "hibiscus", translation: "гибискус"},
    {word: "iguana", translation: "игуана"},
    {word: "jackal", translation: "шакал"},
    {word: "jellybean", translation: "жевательная конфета"},
    {word: "lemur", translation: "лемур"},
    {word: "mongoose", translation: "мангуст"},
    {word: "nightingale", translation: "соловей"},
    {word: "otter", translation: "выдра"},
    {word: "panda", translation: "панда"},
    {word: "quokka", translation: "кукка"},
    {word: "sloth", translation: "ленивец"},
    {word: "toucan", translation: "тукан"},
    {word: "unicorn", translation: "единорог"},
    {word: "vulture", translation: "стервятник"},
    {word: "xenops", translation: "ксилофон"},
    {word: "yak", translation: "як"},
    {word: "alligator", translation: "аллигатор"},
    {word: "bison", translation: "бизон"},
    {word: "cheetah", translation: "гепард"},
    {word: "falcon", translation: "сокол"},
    {word: "hedgehog", translation: "еж"},
    {word: "ibex", translation: "каменный козёл"},
    {word: "koala", translation: "коала"}
];

let arrRepeat = [];

function setItem () {
    if(localStorage.getItem('repeat') !== null) {
        arrRepeat = JSON.parse(localStorage.getItem('repeat'));
    }
    return arrRepeat;
}

function getItem() {
    localStorage.setItem('repeat', JSON.stringify(arrRepeat));
}

setItem()


let length = eng.length;
let word = document.querySelector('.word');
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');

const randomInt = Math.floor(Math.random() * length) + 1;
arrRepeat.push(randomInt);
getItem();
console.log(arrRepeat);
word.innerHTML = eng[randomInt].word;

yes.onclick = () => {
    
}

no.onclick = () => {
    console.log('no');
}

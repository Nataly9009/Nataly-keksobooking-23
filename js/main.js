const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const adsNumber = 10;

//функция генерации случайного положительного числа

function getRandomFromRange(min, max) {
  if (min < 0 || min === 0 || min > max)  {
    return NaN;
  }
  return Math.round(Math.random() * (max - min) + min);
}

//функция генерации случайного положительного числа с плавающей точкой

function getRandomFromRangeFloat(min, max, round) {
  if (min < 0 || min > max)  {
    return NaN;
  }
  const fix = Math.pow(10,round);
  return Math.round((Math.random() * (max - min) + min)*fix)/fix;
}

// Функция получения случайного елемента из массива

function getRandomArrayElement(elements) {
  elements[getRandomFromRange(0, elements.length - 1)];
}

//функция создания объявления

function createAds () {
  const coordinates = {
    lat: getRandomFromRangeFloat(35.65000, 35.70000, 5),
    lng: getRandomFromRangeFloat(139.70000, 139.80000, 5),
  };
return {
  author: {
    avatar: 'img/avatar-${getRandomFromRange(1, 10)}.svg',
      },

  offer: {
    title: 'Заголовок объявления',
    address: `${coordinates.lat}, ${coordinates.lng}`,
    price: getRandomFromRange(1, 100000000),
    type: getRandomArrayElement(TYPE),
    room: getRandomFromRange(1,10),
    guests: getRandomFromRange(1,100),
    checkin: getRandomArrayElement(CHECKIN),
    checkout:getRandomArrayElement(CHECKOUT),
    features: getRandomArrayElement(FEATURES),
    description: 'Описание помещения',
    photos:getRandomArrayElement(PHOTOS),
    },

  location: coordinates,
    };
  }

const similarAdsArray = new Array(adsNumber).fill(null).map(() => createAds());

console.log(similarAdsArray);

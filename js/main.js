const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS =['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ADS_NUMBER = 10;
const AVATARS = [...Array(10)].map((item, index) => index);
const FIRST_COORDINATE_LAT = 35.65000;
const LAST_COORDINATE_LAT = 35.70000;
const FIRST_COORDINATE_LNG = 139.70000;
const LAST_COORDINATE_LNG = 139.80000;
const FLOAT_SIMBOLS_COORDINATES = 5;

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

// Функция вырезания случайного елемента из массива и преведения его к строке
const cutRandomArrayElement = (elements) => elements.splice(getRandomFromRange(0, elements.length - 1), 1).join('');

// Функция получения части массива случайной длины от исходного массива
const getArrayRandomSlice = (elements) => elements.slice(0, getRandomFromRange(1, elements.length));

/* Цикл генерации массива URL для аватаров
for (let counter = 1; counter <= adsNumber; counter++) {
  (counter < 10) ? avatars.push(`img/avatars/user0${counter}.png`) : avatars.push(`img/avatars/user${counter}.png`);
}*/

//функция создания объявления

function createAds () {
  const COORDINATES = {
    lat: getRandomFromRangeFloat(FIRST_COORDINATE_LAT, LAST_COORDINATE_LAT, FLOAT_SIMBOLS_COORDINATES),
    lng: getRandomFromRangeFloat(FIRST_COORDINATE_LNG, LAST_COORDINATE_LNG, FLOAT_SIMBOLS_COORDINATES),
  };

  return {
    author: {
      avatar: cutRandomArrayElement(AVATARS),
    },

    offer: {
      title: 'Заголовок объявления',
      address: `${COORDINATES.lat}, ${COORDINATES.lng}`,
      price: getRandomFromRange(1, 100000000),
      type: getRandomArrayElement(TYPE),
      room: getRandomFromRange(1,10),
      guests: getRandomFromRange(1,100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout:getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElement(FEATURES),
      description: 'Описание помещения',
      photos:getArrayRandomSlice(PHOTOS),
    },

    location: COORDINATES,
  };
}

//функция создания массива объявлений

function similarAdsArray () {
  new Array(ADS_NUMBER).fill(null).map(() => createAds());
}


similarAdsArray ();

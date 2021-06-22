import {getRandomFromRange, getRandomFromRangeFloat} from './util.js';

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
const MIN_VALUE = 1;
const MAX_PRICE = 500000;
const MAX_ROOM = 10;
const MAX_GUESTS = 100;

// Функция получения случайного елемента из массива

const getRandomArrayElement = (elements) => elements[Math.floor(0, Math.random()*elements.length)];

// Функция вырезания случайного елемента из массива и преведения его к строке

const cutRandomArrayElement = (elements) => elements.splice(getRandomFromRange(1, elements.length), 1).join('');

// Функция получения части массива случайной длины от исходного массива

const getArrayRandomSlice = (elements) => elements.slice(0, getRandomFromRange(1, elements.length));

//функция создания объявления

function createAds () {
  const COORDINATES = {
    lat: getRandomFromRangeFloat(FIRST_COORDINATE_LAT, LAST_COORDINATE_LAT, FLOAT_SIMBOLS_COORDINATES),
    lng: getRandomFromRangeFloat(FIRST_COORDINATE_LNG, LAST_COORDINATE_LNG, FLOAT_SIMBOLS_COORDINATES),
  };

  return {
    author: {
      avatar: 'img/avatars/user0' + cutRandomArrayElement(AVATARS) + '.png',
    },

    offer: {
      title: 'Отель',
      address: `${COORDINATES.lat}, ${COORDINATES.lng}`,
      price: getRandomFromRange(MIN_VALUE, MAX_PRICE),
      type: getRandomArrayElement(TYPE),
      room: getRandomFromRange(MIN_VALUE,MAX_ROOM),
      guests: getRandomFromRange(MIN_VALUE,MAX_GUESTS),
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

const similarAdsArray = () =>  new Array(ADS_NUMBER).fill(null).map(() => createAds());

similarAdsArray();

export {similarAdsArray};


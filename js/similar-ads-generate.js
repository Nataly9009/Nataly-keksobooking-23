import {similarAdsArray} from './data.js';

const similarListAds = document.querySelector('#map-canvas');
const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAds = similarAdsArray();
const template = document.querySelector('template');
const popupPhoto = template.content.querySelector('.popup__photo');
const HouseType = {
  'flat': 'Квартира',
  'palace': 'Дворец',
  'bungalo': 'Бунгало',
  'house': 'Дом',
  'hotel': 'Отель',
};

const createPhotosFragment = function (photoSrc) {
  const photosFragment = document.createDocumentFragment();
  photoSrc.offer.photos.forEach((it) => {
    const popupPhotoItem = popupPhoto.cloneNode(true);
    popupPhotoItem.src = it;
    photosFragment.appendChild(popupPhotoItem);
  });
  return photosFragment;
};

const createFeatureFragment = function (ads) {
  const featureFragment = document.createDocumentFragment();
  [ads.offer.features].forEach((it) => {
    const featureItem = document.createElement('li');
    featureItem.className = `popup__feature popup__feature--' + ${it}`;
    featureFragment.appendChild(featureItem);
  });
  return featureFragment;
};

similarAds.forEach((ads) => {
  const adsElement = similarAdsTemplate.cloneNode(true);
  adsElement.querySelector('.popup__title').textContent = ads.offer.title;
  adsElement.querySelector('.popup__text--address').textContent = ads.offer.address;
  adsElement.querySelector('.popup__text--price').textContent = `${ads.offer.price} ₽/ночь`;
  adsElement.querySelector('.popup__type').textContent = HouseType[ads.offer.type];
  adsElement.querySelector('.popup__text--capacity').textContent = `${ads.offer.room}  комнаты для  ${ads.offer.guests} гостей`;
  adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}  , выезд до  ${ads.offer.checkout}`;
  adsElement.querySelector('.popup__features').innerHTML = '';
  adsElement.querySelector('.popup__features').appendChild(createFeatureFragment(ads));
  adsElement.querySelector('.popup__description').textContent = ads.offer.description;
  adsElement.querySelector('.popup__photos').removeChild(adsElement.querySelector('.popup__photo'));
  adsElement.querySelector('.popup__photos').appendChild(createPhotosFragment(ads));
  adsElement.querySelector('img').src = ads.author.avatar;

  similarListAds.appendChild(adsElement);
});


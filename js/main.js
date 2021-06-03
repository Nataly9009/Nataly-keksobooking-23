function getRandomFromRange(min, max) {
  if (min < 0 || min === 0 || min > max)  {
    console.log('Неверно задан диапазон, минимальное значение должно быть больше нуля и больше максимального');
  } else {
    return Math.random() * (max - min) + min;
  }
}

getRandomFromRange(1, 10);

//Помощь искала https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - взяла строчку "return Math.random() * (max - min) + min;"


function getRandomFromRangeFloat(min, max, round) {
  if (min < 0 || min > max)  {
    console.log('Неверно задан диапазон, минимальное значение должно быть больше нуля и больше максимального');
  } else {
    let fix = Math.pow(10,round);
    return Math.round((Math.random() * (max - min) + min)*fix)/fix;

  }
}

getRandomFromRangeFloat(0, 0.3, 2);

//Помощь искала https://javascript.ru/forum/misc/2860-okruglenie-do-nuzhnogo-kolichestva-znakov-posle-zapyatojj.html

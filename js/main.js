function getRandomFromRange(min, max) {
  if (min < 0 || min === 0 || min > max)  {
    console.log("Неверно задан диапазон, минимальное значение должно быть больше нуля и больше максимального");
    } else {
      return Math.random() * (max - min) + min;
      }
}

console.log(getRandomFromRange(1, 10));

//Помощь искала https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random - взяла строчку "return Math.random() * (max - min) + min;"


function getRandomFromRange(min, max, n) {
  if (min < 0 || min > max)  {
    console.log("Неверно задан диапазон, минимальное значение должно быть больше нуля и больше максимального");
    } else {
      let i = Math.pow(10,n);
      return Math.round((Math.random() * (max - min) + min)*i)/i;

      }
}

console.log(getRandomFromRange(0, 0.3, 2));

//Помощь искала https://javascript.ru/forum/misc/2860-okruglenie-do-nuzhnogo-kolichestva-znakov-posle-zapyatojj.html

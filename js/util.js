
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


module.exports = {
  country: [
    "01-01",
    "01-06",
    pasqua,
    pasquetta,
    "04-25",
    "05-01",
    "06-02",
    "08-15",
    "11-01",
    "12-08",
    "12-25",
    "12-26"
  ],
  region: []
};

// https://it.wikipedia.org/wiki/Calcolo_della_Pasqua#Metodo_aritmetico_di_Gauss
function getAge(Y) {
  switch (true) {
     case Y < 1700: return {m: 22, n: 2};
     case Y < 1800: return {m: 23, n: 3};
     case Y < 1900: return {m: 23, n: 4};
     case Y < 2100: return {m: 24, n: 5};
     case Y < 2200: return {m: 24, n: 6};
     case Y < 2300: return {m: 25, n: 0};
     case Y < 2400: return {m: 26, n: 1};
     case Y < 2500: return {m: 25, n: 1};
  }
}

function pasqua(Y) {
  if (typeof Y === 'object')
    Y = Y.getFullYear();
  var date = new Date(Y + '-04-01');
  var y = date.getFullYear();
  var a = y % 19;
  var b = y % 4;
  var c = y % 7;
  var age = getAge(y);
  var d = (19 * a + age.m) % 30;
  var e = (2 * b + 4 * c + 6 * d + age.n) % 7;
  if ((d + e) < 10) {
    date.setMonth(date.getMonth() - 1);
    date.setDate(d + e + 22);
  } else {
    date.setDate(d + e - 9);
  }
  var day = date.getDate();
  switch (day) {
    case 26:
      date.setDate(19);
      break;
    case (day === 15 && d === 28 && e === 6 && a > 10):
      date.setDate(18);
      break;
  }
  return date;
}

function pasquetta(Y) {
  var date = new Date(pasqua(Y).getTime());
  date.setDate(date.getDate() + 1);
  return date;
}

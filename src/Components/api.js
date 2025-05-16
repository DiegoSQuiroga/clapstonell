const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [];
      let random = seededRandom(date.getDate());

      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ':00');
        }
        // No agregamos los horarios con ':30'
      }
      resolve(result);
    }, 500); // Simula retardo de 500ms
  });
};

export const submitAPI = function (formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300); // Simula retardo en el submit
  });
};

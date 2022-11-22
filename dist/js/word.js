(() => {
  const $word = document.getElementsByClassName('js-word')[0];
  const finalWord = $word.textContent;
  let tempWord = finalWord.split('');
  let intervals = [];
  let getRandomWord = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!-_=#$%^&*()";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  };
  
  for (let i = 0; i < tempWord.length; ++i) {
    intervals.push(
      setInterval(() => {
        tempWord[i] = getRandomWord(1);
      }, 100)
    );
    setTimeout(() => {
      clearInterval(intervals[i]);
      tempWord[i] = finalWord[i];
    }, Math.floor(Math.random() * 3000 * Math.min(i / 5, 1.5))+1000);
  }
  const renderInterval = setInterval(() => {
    $word.textContent = tempWord.join('');
  }, 100);
})()
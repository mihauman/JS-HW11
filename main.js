function getChinese(length){
  return new Promise(resolve => {
    setTimeout(() =>{
      const sign = Date.now().toString().substring(5);
      resolve(String.fromCharCode(sign));
    }, 50);
  });
}
async function getRandomChinese(length){
  let result = '';
  let i = 0;
  while(i < length){
    result += await getChinese(length);
    i++;
  }
  return result;
}
getRandomChinese(4).then(str =>{
  console.log(str);
  document.querySelector('.chinese-word').innerHTML = str;
}).catch(err => {
  console.log('err:' + err);
});

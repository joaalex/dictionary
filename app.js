
// const wordFieldValue = document.querySelector('#search-value').value
const timeField = document.querySelector('#time')
const searchBtn = document.querySelector('#search-btn');
const clearAll = document.querySelector('#clear-btn');

const time = ()=>{
  let cur_date = new Date()
  let cur_hour = new Date().getHours()
  let cur_minute = new Date().getMinutes()
  let cur_second = new Date().getSeconds()
  console.log(cur_minute)
  let format = `${cur_hour} : ${cur_minute} : ${cur_second}`

  setInterval(()=>{
    cur_second = new Date().getSeconds()
    if(cur_second >= 59){
    cur_minute++
    cur_second = 0
    };
    
    if(cur_minute >= 60){
    cur_hour++
    cur_minute = 0
    }
    if(cur_hour >= 24){
    cur_hour = 0;
    }
    // console.log(`${cur_hour}:${cur_minute}:${cur_second}`)
    document.querySelector('#time').innerHTML = `<h1> ${cur_hour}:${cur_minute}:${cur_second}<h1/>`
  }, 1000)
  
}
time()

clearAll.addEventListener('click', () => {
  document.querySelector('#word-searched').textContent = '';
  document.querySelector('#search-value').value = '';
  document.querySelector('#meaning').textContent = '';
  document.querySelector('#meanings').textContent = '';
  document.querySelector('#example').textContent = '';
  document.querySelector('#phonetic').textContent = '';
  document.querySelector('#synonyms').textContent = '';
  document.querySelector('#antonyms').textContent = '';
  document.querySelector('#pos').textContent = '';
  document.querySelector('#another-set').textContent = '';
  document.querySelector('#meaning-i').textContent = '';
  document.querySelector('#meanings-i').textContent = '';
  document.querySelector('#example-i').textContent = '';
  document.querySelector('#synonyms-i').textContent = '';
  document.querySelector('#antonyms-i').textContent = '';
  document.querySelector('#pos-i').textContent = '';
  document.querySelector('#errs').textContent = '';
});

const searchResultCallback = (e)=>{
  e.preventDefault();
  const wordFieldValue = document.querySelector('#search-value').value
  const wordSearched = document.querySelector('#word-searched')
  const meaning = document.querySelector('#meaning');
  const meanings = document.querySelector('#meanings');
  const phonetic = document.querySelector('#phonetic');
  const synonyms = document.querySelector('#synonyms');
  const antonyms = document.querySelector('#antonyms');
  const example = document.querySelector('#example');
  const pos = document.querySelector('#pos');
  const anotherSet = document.querySelector('#another-set');
  const meaningI = document.querySelector('#meaning-i');
  const meaningsI = document.querySelector('#meanings-i');
  const synonymsI = document.querySelector('#synonyms-i');
  const antonymsI = document.querySelector('#antonyms-i');
  const exampleI = document.querySelector('#example-i');
  const posI = document.querySelector('#pos-i');
  const errs = document.querySelector('#errs');
 
  wordSearched.textContent = wordFieldValue.toLowerCase();
  document.querySelector('#search-value').value = '';
  document.querySelector('#meaning').textContent = '';
  document.querySelector('#meanings').textContent = '';
  document.querySelector('#example').textContent = '';
  document.querySelector('#phonetic').textContent = '';
  document.querySelector('#synonyms').textContent = '';
  document.querySelector('#antonyms').textContent = '';
  document.querySelector('#pos').textContent = '';
  document.querySelector('#another-set').textContent = '';
  document.querySelector('#meaning-i').textContent = '';
  document.querySelector('#meanings-i').textContent = '';
  document.querySelector('#example-i').textContent = '';
  document.querySelector('#synonyms-i').textContent = '';
  document.querySelector('#antonyms-i').textContent = '';
  document.querySelector('#pos-i').textContent = '';
  document.querySelector('#errs').textContent = '';


  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordFieldValue}`)
  .then(response => response.json())
  .then(res => {
    console.log(res)
  
    // console.log(res.meanings[0].definitions[0].definition)
    // console.log(res.meanings[0].synonyms)
    
    phonetic.textContent = ` phonetic: ${res[0].phonetic}`
    meaning.textContent = ` meanings: ${res[0].meanings[0].definitions[0].definition}`
    meanings.textContent =`${res[0].meanings[0].definitions[1].definition}`
    example.textContent = ` example: ${res[0].meanings[0].definitions[0].example}`
    pos.textContent = ` part of speech: ${res[0].meanings[0].partOfSpeech}`
    antonyms.textContent = ` antonyms: ${res[0].meanings[0].antonyms}`         
    synonyms.textContent = ` synonyms: ${res[0].meanings[0].synonyms}`

    anotherSet.innerHTML = '<hr></hr>'
    
    meaningI.textContent = ` meanings: ${res[1].meanings[0].definitions[0].definition}`
    // meaningsI.textContent =`${res[1].meanings[1].definitions[1].definition}`
    exampleI.textContent = ` example: ${res[1].meanings[0].definitions[0].example}`
    posI.textContent = ` part of speech: ${res[1].meanings[0].partOfSpeech}`
    antonymsI.textContent = ` antonyms: ${res[1].meanings[0].antonyms}`         
    synonymsI.textContent = ` synonyms: ${res[1].meanings[0].synonyms}`

    
  })
  .catch(error => error ? errs.textContent = "Sorry pal, we couldn't find definitions for the word you were looking for, you can try the search again at later time or head to the web instead.": null)


  
}
searchBtn.addEventListener('click', searchResultCallback);



    // console.log(resResponse[0].meanings[0].definitions[1].definition)
    // res.forEach((resResponse)=> {
    //   console.log(resResponse.meanings[0].definitions[0].definition)
    //   console.log(resResponse.meanings[0].synonyms)
    //   phonetic.textContent = ` phonetic: ${resResponse.phonetic}`
    //   meaning.textContent = ` meanings: ${resResponse.meanings[0].definitions[0].definition}`
    //   meaningI.textContent =`${resResponse.meanings[0].definitions[1].definition}`
    //   pos.textContent = ` part of speech: ${resResponse[0].meanings[0].partOfSpeech}`
    //   antonyms.textContent = ` antonyms: ${resResponse.meanings[0].antonyms}`         
    //   synonyms.textContent = ` synonyms: ${resResponse.meanings[0].synonyms}`
    //     // ` synonyms: ${resResponse.meanings[0].synonyms.forEach(i => synonyms.textContent += ` ${i}`)}`
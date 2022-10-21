const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fateBtn = document.getElementById("fateButton")
const deleteBtn = document.getElementById("deleteButton")
const addComplimentBtn = document.getElementById("addNewCompliment")
const dragonBtn = document.getElementById("dragonPost")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch(error => {
        console.log(error)
    })
}

fortuneBtn.addEventListener(`click`, getFortune)

const getFate = () => {
    axios.get("http:/localhost:4000/api/fate/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}
fateBtn.addEventListener(`click`, getFate)

let complimentUpdate = {
    newCompliments: 'Nice Biceps'
}
addComplimentBtn.addEventListener(`click`, complimentUpdate)

axios.put('http://localhost:4000/api/compliment/', complimentUpdate).then()

const { deleteFate } = require('./index.js')

axios.delete('http://localhost:4000/api/fate/Heaven/').then()


deleteBtn.addEventListener(`click`, deleteFate)

let dragon = {
    name: 'drogon',
    type: 'lightning',
    size: 'xl',
  }
  
  axios.post('http://localhost:4000/api/dragons/', dragon).then()


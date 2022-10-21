module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}
module.exports = {
    getFortune: (req, res) => {
        const fortunes = ["you will be a king!", "you are a wizzard", "you will be homeless", "you will be disowned", "Romance is not in thy future"];

        let randomIndexs = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndexs];

        res.status(200).send(randomFortune);
    }
}
module.exports = {
    getFate: (req, res) => {
        const fates = ["Heaven", "outer Darkness", "imortality"];

        let randomIndexss = Math.floor(Math.random() * fates.length);
        let randomFate = fortunes[randomIndexss];

        res.status(200).send(randomFate);
        }
}

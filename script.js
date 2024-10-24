const winner = () => {
    let turnText = document.getElementById('turn');
    turnText.innerHTML = "優勝です"
    console.log("you won; you may leave now.")
    let osu = document.getElementById('osu');
    osu.innerHTML = `<button onclick="randomiser(reset())" id="osu2">reset</button>`
}

const death = () => {
    let turnText = document.getElementById('turn');
    turnText.innerHTML = "あなたは殺されてしまいました"
    console.log("you're dead")
    let osu = document.getElementById('osu');
    osu.innerHTML = `<button onclick="randomiser(reset())" id="osu2">reset</button>`
};

const reset = () => {
    let osu = document.getElementById('osu');
    osu.innerHTML = `<button onclick="randomiser()" id="osu2">play</button>`
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const opponent = async (difference) => {
    let turnText = document.getElementById('turn');
    turnText.innerHTML = "相手の順番です"
    let differenceOpponent = difference;
    let osu = document.getElementById('osu');
    osu.innerHTML = ``;
    await delay(3000);
    if (difference === 0) {
        winner();
        return;
    } else {
        let oner = 1; 
        differenceOpponent = differenceOpponent - 1;
        
        turnText = document.getElementById('turn');
        turnText.innerHTML = "あなたの順番です"

        // let aitenoamari = document.getElementById('aitenoamari');
        // if (aitenoamari) {  
        //     aitenoamari.innerText = `相手の余りは${differenceOpponent}`;  
        // }
        let osu = document.getElementById('osu');
        osu.innerHTML = `<button onclick="randomiser(${differenceOpponent}, ${oner})" id="osu2">continue</button><button onclick="shuffle()" id="osu3">shuffle</button>`;
        console.log(differenceOpponent);
    }
}

const shuffle = () => { 
    randomiser(0, 0, 1)
}
const randomiser = async (previous, one, osu1) => {
    let turnText = document.getElementById('turn');
    turnText.innerHTML = "あなたの順番です"
    let osu = document.getElementById('osu');
    osu.innerHTML = `<button>play</button>`
    if (osu1 == 1 || one === 1) {
        osu.innerHTML = `<button>reset</button><button>shuffle</button>`
    }
    await delay(3000);
    if (one === 1) {
        let differenceYours = previous;
        if (differenceYours === 0) {
            death();
            return;
        } else {
            differenceYours = differenceYours - 1;

            
            // let zibunnnoamari = document.getElementById('zibunnnoamari');
            // if (zibunnnoamari) {  
            //     zibunnnoamari.innerText = `自分の余りは${differenceYours}`;  
            // }

            console.log(differenceYours);
            opponent(differenceYours);
        }
    } else {
        const badNumber = Math.floor(Math.random() * 6) + 1;
        const shuffle = Math.floor(Math.random() * badNumber) + 1;
        let shikei = document.getElementById('shikei');
        // if (shikei) {
        //     shikei.innerText = `死刑数は${badNumber}`;  
        // }
        // let set = document.getElementById('set');
        // if (set) {
        //     set.innerText = `決定数は${shuffle}`;  
        // }

        let difference = badNumber - shuffle;

        // let amari = document.getElementById('amari');
        // if (set) {
        //     amari.innerText = `違いは${difference}`;  
        // }

        if (difference === 0) {
            death();
            return;
        } else {
            difference = difference - 1;

            // let zibunnnoamari = document.getElementById('zibunnnoamari');
            // if (zibunnnoamari) {
            //     zibunnnoamari.innerText = `自分の余りは${difference}`;  
            // }

            console.log(difference);
            opponent(difference);
        }
    }
}

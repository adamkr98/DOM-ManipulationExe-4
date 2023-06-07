const favoriteGame = [
    {
        name: 'Dead by Daylight',
        genre: 'Horror',
        releaseYear: '14 june 2016',
        typeOfGame: 'multiplayer survival horror',
        typeOfGameplay: '1 killer vs 4 survivors',
        platform: ['steam', 'Xbox','PlayStation', 'Switch', 'iOS', 'Android', 'Stadia'],
        hoursPlayed: '3086,7',
        nbOfMaps: '18',
        nbOfKillers: '32',
        nbOfSurvivors: '37',
        
    }
]


let container = document.createElement("div");
document.body.appendChild(container);               //container just under body
container.classList.add("container");

let containerHero = document.createElement("div");
container.appendChild(containerHero);               //containerHero
containerHero.classList.add("containerHero");

let containerImgTextContainer = document.createElement("div");
containerHero.appendChild(containerImgTextContainer);                   //containerHero
containerImgTextContainer.classList.add("containerImgTextContainer");

let profileImgContainer = document.createElement("div");
containerImgTextContainer.appendChild(profileImgContainer);             //profileImgContainer
profileImgContainer.classList.add("profileImgContainer");


    let profileImg = document.createElement("img");
    profileImgContainer.appendChild(profileImg);
    profileImg.classList.add("profileImg");
    profileImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Dead_by_Daylight_Steam_header.jpg/220px-Dead_by_Daylight_Steam_header.jpg";



let containerText = document.createElement("div");
containerHero.appendChild(containerText);                       //containerText
containerText.classList.add("containerText");

let titleText = document.createElement("div");
containerText.appendChild(titleText);                   //titleText
titleText.classList.add("titleText");

titleText.innerText = "Adam Krynski's Collection"

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let textLorem = document.createElement("div");
containerText.appendChild(textLorem);                   //textLorem
textLorem.classList.add("textLorem");

    textLorem.innerText = loremIpsum;

let containerMain = document.createElement("div");
container.appendChild(containerMain);
containerMain.classList.add("gallery");


//yet to verify/change
document.body.style.cssText = `
    border: red solid 3px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

containerHero.style.cssText = `

    border: blue dashed 2px;
    color :blue;
    width: 100%;
    height: 20rem;

    font-family: sans-serif;
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    justify-content: center;

`;

container.style.cssText = `

    border: red solid 2px;
    width: 80%;
    height: 30vh;
    display:flex;
    justify-content: space-between;


`;

profileImgContainer.style.cssText = `
    border: violet solid 2px;
    width: 21%;
    height: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

    profileImg.style.cssText = `
        border: blue solid 2px;
        width: 70%;
        height: 7rem;

        border-radius: 8rem 8rem 8rem 8rem;

        display: flex;
    `;

containerHero.style.cssText = `
    border: green solid 2px;
    width: 60%;
    height: 25vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`





const favoriteGames = [
    {
        genre: 'Horror',
        games: [

            {
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/381210/capsule_616x353.jpg?t=1685645607',
                name: 'Dead by Daylight',
                releaseYear: '2016',
                online: 'Yes',
                typeOfGame: 'multiplayer survival horror',
                typeOfGameplay: '1 killer vs 4 survivors',
                platforms: ['steam', 'Xbox','PlayStation', 'Switch', 'iOS', 'Android', 'Stadia'],
                hoursPlayed: '3086,7',
                nbOfMaps: '18',
                nbOfKillers: '32',
                nbOfSurvivors: '37',
                
            },
        
            {
                image: 'https://image.jeuxvideo.com/medias-sm/157538/1575376885-3452-capture-d-ecran.jpg',
                name: 'Alien Isolation',
                releaseYear: '2014',
                online: 'no',
                typeOfGame: 'solo survival horror',
                typeOfGameplay: 'Alien vs Us',
                platforms: ['PlayStation 3', 'Playstation 4', 'Windows', 'Xbox 360', 'Xbox One', 'OS X', 'Android', 'iOS'],
                hoursPlayed: '35',
                nbofMaps: 'Undefined',
                nbOfKillers: '1',
                nbOfSurvivors: '1',
        
            },

            {
                image: 'https://image.api.playstation.com/cdn/UP0240/CUSA10518_00/Zgjse2LA3r6ZknG2wN4FDAmUuZXwe09g.png',
                name: 'The Forest',
                releaseYear: '2018',
                online: 'yes',
                typeOfGame: 'solo/mutliplayer survival horror',
                typeOfGameplay: 'open world',
                platforms: ['Windows', 'PlayStation 4'],
                hoursPlayed: '149,5',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfSurvivors: 'Undefined',
            }

        ]
    },

    {
        genre: 'Action',
        games: [
            {
                image: 'https://i.ytimg.com/vi/8kRJ-_FuFVk/maxresdefault.jpg',
                name: 'KONA',
                releaseYear: '2016',
                online: 'no',
                typeOfGame: 'solo/first person vue',
                platforms: ['Windows', 'PlayStation 4', 'PlayStation 5', 'Nintendo Switch', 'Xbox One', '...'],
                hoursPlayed: '13,2',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },

            {
                image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/424840/capsule_616x353.jpg?t=1676289679',
                name: 'Little Nightmares',
                releaseYear: '2017',
                online: 'no',
                typeOfGame: 'platform game',
                platforms: ['Windows', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS', 'Google Stadia'],
                hoursPlayed: '5,8',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },

            {
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/201810/capsule_616x353.jpg?t=1630605243',
                name: 'Wolfenstein: The New Order',
                releaseYear: '2014',
                online: 'no',
                typeOfGame: 'first-person shooter',
                platforms: ['Windows', 'PlayStation 3', 'PlayStation 4', 'Xbox One', 'Xbox 360'],
                hoursPlayed: '63,8',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },
        ],
    },

    {
        genre: 'other',
        games: [
            {
                image: 'https://www.games-manuals.com/wp-content/uploads/2023/01/Kerbal-Space-Program.jpg',
                name: 'Kerbal Space Program',
                releaseYear: '2017',
                online: 'no',
                typeOfGame: 'space flight simulator',
                platforms: ['Windows', 'PlayStation 4', 'PlayStation 5', 'Xbox One',],
                hoursPlayed: '144,4',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },

            {
                image: 'https://cdn.akamai.steamstatic.com/steam/apps/311060/capsule_616x353.jpg?t=1679997424',
                name: 'Battle of Mages',
                releaseYear: '2005',
                online: 'no',
                typeOfGame: 'strategic',
                platforms: 'Windows',
                hoursPlayed: '85',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },

            {
                image: 'https://www.games-manuals.com/wp-content/uploads/2023/01/Kerbal-Space-Program.jpg',
                name: 'Kerbal Space Program',
                releaseYear: '2017',
                online: 'no',
                typeOfGame: 'space flight simulator',
                platforms: ['Windows', 'PlayStation 4', 'PlayStation 5', 'Xbox One',],
                hoursPlayed: '144,4',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
            },
        ],
    },
    
]               



let body = document.querySelector("body");
let headContainer = document.createElement("div");
    body.appendChild(headContainer);
    headContainer.classList.add("headContainer");

let profileImgContainer = document.createElement("div");
    headContainer.appendChild(profileImgContainer);
    profileImgContainer.classList.add("profileImgContainer");

let profileImg = document.createElement("div");
    profileImgContainer.appendChild(profileImg);
    profileImg.classList.add("profileImg");

let headTextWrapper = document.createElement("div");
    headContainer.appendChild(headTextWrapper);
    headTextWrapper.classList.add("headTextWrapper");

let headTextContainer = document.createElement("div");
    headTextWrapper.appendChild(headTextContainer);
    headTextContainer.classList.add("headTextContainer");

let headTitle = document.createElement("div");
    headTextContainer.appendChild(headTitle);
    headTitle.classList.add("headTitle");

let headText = document.createElement("div");
    headTextContainer.appendChild(headText);
    headText.classList.add("headText");

//////////////////////////////////////////////////
                //Main content//
/////////////////////////////////////////////////

let mainWrapper = document.createElement("div");
    body.appendChild(mainWrapper);
    mainWrapper.classList.add("mainWrapper");

    for( let i = 1; i <= 9; i++ ) {
        
    let cardRowContainer = document.createElement("div");
        mainWrapper.appendChild(cardRowContainer);
        cardRowContainer.classList.add("cardRowContainer");
        cardRowContainer.style = `
        border: pink dashed 2px;
        width: 33%;
        height: 20rem;

        display: flex;
        justify-content: center;
        
        `
    let cardContainer = document.createElement("div");
        cardRowContainer.appendChild(cardContainer);
        cardContainer.classList.add("cardContainer" + i );
        cardContainer.style = `
        border: blue solid 2px;
        width: 14rem;
        height: 18rem;

        margin-top: 7rem;

        display: flex;
        
        `

    let cardTitleContainer = document.createElement("div");
        cardContainer.appendChild(cardTitleContainer);
        cardTitleContainer.classList.add("cardTitleContainer" + i );

    let cardTitle = document.createElement("div");
        cardTitleContainer.appendChild(cardTitle);
        cardTitle.classList.add("cardTitle" + i );

    let cardImgContainer = document.createElement("img");
        cardContainer.appendChild(cardImgContainer);
        cardImgContainer.classList.add("cardImgContainer" + i );

    let cardImg = document.createElement("div");
        cardImgContainer.appendChild(cardImg);
        cardImg.classList.add("cardImg" + i );
   
    let cardText = document.createElement("div");
    
}

///////////////////////////////////////////
    //styling of the headContainer//
//////////////////////////////////////////    

        body.style = `
        padding: 0;
        margin: 0;
        border: red solid 2px;
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        `
        headContainer.style = `
        border: blue solid 2px;
        width: 90%;
        height: 25%;

        display: flex;
        justify-content: center;
        align-items: center;

        `

        profileImgContainer.style = `
        border: green solid 2px;
        width: 8%;
        height: 5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        `

        profileImg.style = `
        border: gray solid 2px;
        width: 100%;
        height: 100%;
        
        display: flex;
        `

        headTextWrapper.style = `
        border: pink solid 2px;
        width: 75%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-items: center;

        `

        headTextContainer.style = `
        border: yellow solid 2px;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-items: center;

        `

        headTitle.style = `
        border: black solid 2px;
        width: 100%;
        height: 100%;

        `

        headText.style = `
        border: orange dashed 2px;
        width: 100%;
        height: 100%;
        
        `


/////////////////////////////////////////////
        //styling of the mainWrapper//
        //see the for loop lign 183//
////////////////////////////////////////////

        mainWrapper.style = `
        border: gray solid 4px;
        width: 80%;
        height: 100vh;

        padding-left: 4rem;
        padding-right: 4rem;

        display: flex;
        
        align-items: space-around;

        text-wrap: break-word;
        
        `










































































// let container = document.createElement("div");
// document.body.appendChild(container);               //container just under body
// container.classList.add("container");

// let containerHero = document.createElement("div");
// container.appendChild(containerHero);               //containerHero
// containerHero.classList.add("containerHero");

// let containerImgTextContainer = document.createElement("div");
// containerHero.appendChild(containerImgTextContainer);                   //containerHero
// containerImgTextContainer.classList.add("containerImgTextContainer");

// let profileImgContainer = document.createElement("div");
// containerImgTextContainer.appendChild(profileImgContainer);             //profileImgContainer
// profileImgContainer.classList.add("profileImgContainer");


//     let profileImg = document.createElement("img");
//     profileImgContainer.appendChild(profileImg);
//     profileImg.classList.add("profileImg");
//     profileImg.src = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Dead_by_Daylight_Steam_header.jpg/220px-Dead_by_Daylight_Steam_header.jpg";



// let containerText = document.createElement("div");
// containerHero.appendChild(containerText);                       //containerText
// containerText.classList.add("containerText");

// let titleText = document.createElement("div");
// containerText.appendChild(titleText);                   //titleText
// titleText.classList.add("titleText");

// titleText.innerText = "Adam Krynski's Collection"

// const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// let textLorem = document.createElement("div");
// containerText.appendChild(textLorem);                   //textLorem
// textLorem.classList.add("textLorem");

//     textLorem.innerText = loremIpsum;

// let containerMain = document.createElement("div");
// container.appendChild(containerMain);
// containerMain.classList.add("gallery");


// //yet to verify/change
// document.body.style = `
//     border: red solid 3px;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

// `;

// containerHero.style.cssText = `

//     border: blue dashed 2px;
//     color :blue;
//     width: 100%;
//     height: 20rem;

//     font-family: sans-serif;
//     font-size: 2rem;
//     font-weight: 300;
//     display: flex;
//     justify-content: center;

// `;

// container.style.cssText = `

//     border: red solid 2px;
//     width: 80%;
//     height: 30vh;
//     display:flex;
//     justify-content: space-between;


// `;

// profileImgContainer.style.cssText = `
//     border: violet solid 2px;
//     width: 21%;
//     height: 10rem;

//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

//     profileImg.style.cssText = `
//         border: blue solid 2px;
//         width: 70%;
//         height: 7rem;

//         border-radius: 8rem 8rem 8rem 8rem;

//         display: flex;
//     `;

// containerHero.style.cssText = `
//     border: green solid 2px;
//     width: 60%;
//     height: 25vh;

//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
// `





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
            },

            {
                image: 'https://ds.static.rtbf.be/article/image/1920x1080/1/0/2/c3a6bc0aaeb74a8a13f1e29e7e36e5a6-1526987790.jpg',
                name: 'Resident Evil: Biohazard',
                releaseYear: '2017',
                online: 'no',
                typeOfGame: 'first-person shooter',
                platforms: ['Windows', 'PlayStation 3', 'PlayStation 4', 'Xbox One'],
                hoursPlayed: '15',
                nbOfMaps: 'Undefined',
                nbOfKillers: 'Undefined',
                nbOfKillers: 'Undefined',
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

let wrapper = document.createElement("div");
    body.appendChild(wrapper);
    wrapper.classList.add("wrapper");

let headContainer = document.createElement("div");
    wrapper.appendChild(headContainer);
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
    wrapper.appendChild(mainWrapper);
    mainWrapper.classList.add("mainWrapper");

    for( let i = 1; i <= 4; i++ ) {
        
        let cardRowContainer = document.createElement("div");
        mainWrapper.appendChild(cardRowContainer);
        cardRowContainer.classList.add("cardRowContainer");
        cardRowContainer.style = `
        border: pink dashed 2px;
        width: 100%;
        height: 20rem;

        // flex-wrap: wrap;

        display: flex;
        justify-content: space-around;
        align-items: center;
        `
    


    for( let j = 1; j <= 4; j++ ) {
      
        let cardContainer = document.createElement("div");
            cardRowContainer.appendChild(cardContainer);
            cardRowContainer.classList.add("rowContainer" + i );
            cardContainer.classList.add("cardContainer" + j );
            cardContainer.style = `
            border: blue solid 2px;
            width: 16rem;
            height: 19rem;
            border-radius: 0.2rem; 
            overflow: hidden;
            

            display: flex;
            justify-content: center;
            `
            let picture1;
            let picture2;
            let picture3;
            let picture4;

                const cardContainer1 = document.querySelector(".cardContainer1");
                const cardContainer2 = document.querySelector(".cardContainer2");
                const cardContainer3 = document.querySelector(".cardContainer3");
                const cardContainer4 = document.querySelector(".cardContainer4");

                for (const genre of favoriteGames) {
                    if (genre.genre === 'Horror') {
                        picture1 = genre.games[0].image;
                        break;
                    } 
                    }

                    if (cardContainer1 && picture1) {
                    cardContainer1.innerHTML = `<img src="${picture1}" alt="Game Image">`;
                    }

                for (const genre of favoriteGames) {
                    if (genre.genre === 'Horror') {
                        picture2 = genre.games[1].image;
                        break;
                    } 
                }
                   
                    if (cardContainer2 && picture2) {
                    cardContainer2.innerHTML = `<img src="${picture2}" alt="Game Image">`;
                    }
                    
                for (const genre of favoriteGames) {
                    if (genre.genre === 'Horror') {
                        picture3 = genre.games[2].image;
                        break;
                    } 
                }
                       
                    if (cardContainer3 && picture3) {
                    cardContainer3.innerHTML = `<img src="${picture3}" alt="Game Image">`;
                    }
                    
                    for (const genre of favoriteGames) {
                        if (genre.genre === 'Horror') {
                            picture4 = genre.games[3].image;
                            break;
                            } 
                            }
                           
                            if (cardContainer4 && picture4) {
                            cardContainer4.innerHTML = `<img src="${picture4}" alt="Game Image">`;
                            }

                    // favoriteGames.games.forEach((genre) => {

                    //     genre.games.forEach((games) => {
            
                    //     });
                    // });

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
}

///////////////////////////////////////////
    //styling of the headContainer//
//////////////////////////////////////////    

        body.style = `
        background-color: #F2F2F2;
        padding: 0;
        margin: 0;
        border: red solid 2px;
        width: 100%;
        

        display: flex;
        flex-direction: column;
        align-items: center;

        
        `

        wrapper.style = `
        border: black dashed 3px;
        width: 100%; 
        height: 99rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        `

        headContainer.style = `
        border: blue solid 2px;
        width: 90%;
        height: 12%;

        display: flex;
        justify-content: center;
        align-items: center;

        `

        profileImgContainer.style = `
        border: green solid 2px;
        width: 5%;
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
        // border: black solid 2px;
        width: 75%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-items: center;

        `

        headTextContainer.style = `
        border: green solid 2px;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        `

        headTitle.style = `
        border: orange solid 2px;
        width: 90%;
        height: 40%;

        margin-top: 1rem;

        display: flex;
        
        `

        headText.style = `
        border: orange dashed 2px;
        width: 90%;
        height: 40%;
        
        `


/////////////////////////////////////////////
        //styling of the mainWrapper//
        //see the for loop lign 183//
////////////////////////////////////////////

        mainWrapper.style = `
        border: violet solid 4px;
        width: 90%;
        height: 83rem;

        padding-left: 4rem;
        padding-right: 4rem;
       

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

  
        
        `




/////////////////////////////////////////////
        //populating cardContainer1 with object     //
////////////////////////////////////////////








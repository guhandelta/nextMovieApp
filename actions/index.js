const MOVIE_DATA = [
    {
        id: "1",
        name: "The Shawshank Redemption",
        releaseYear: 1994,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        longDesc: "In 1947 Portland, Maine, banker Andy Dufresne is convicted of murdering his wife and her lover and is sentenced to two consecutive life sentences at the Shawshank State Penitentiary. He is befriended by Ellis \"Red\" Redding, an inmate and prison contraband smuggler serving a life sentence. Red procures a rock hammer and a large poster of Rita Hayworth for Andy. Assigned to work in the prison laundry, Andy is frequently sexually assaulted by \"the Sisters\" and their leader, Bogs. In 1949, Andy overhears the captain of the guards, Byron Hadley, complaining about being taxed on an inheritance and offers to help him shelter the money legally.After an assault by the Sisters nearly kills Andy, Hadley beats and cripples Bogs, who is subsequently transferred to another prison.Andy is not attacked again.Warden Samuel Norton meets Andy and reassigns him to the prison library to assist elderly inmate Brooks Hatlen.Andy begins managing financial matters for other prison staff, guards from other prisons, and the warden himself.He also begins writing weekly letters to the state legislature requesting funds to improve the prison's decaying library.",
        rating: 4.8,
        genre: "drama",
        cover: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        image: "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
        cover: "https://wallpapercave.com/wp/wp2014325.jpg"
    },
    {
        id: "2",
        name: "The Dark Knight",
        releaseYear: 2008,
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        longDesc: "A gang of criminals rob a Gotham City mob bank, murdering each other for a higher share of the money until only the Joker remains, who escapes with the money. Batman, District Attorney Harvey Dent and Lieutenant James Gordon form an alliance to rid Gotham City of organized crime. Bruce Wayne believes that with Dent as Gotham's protector, he can retire from being Batman and lead a normal life with Rachel Dawes – even though she and Dent are dating. Mob bosses Sal Maroni, Gambol, and the Chechen hold a video conference with their corrupt accountant, Lau, who has taken their funds for safekeeping and fled to Hong Kong.The Joker interrupts the meeting to warn them that since Batman is unhindered by the law, he would find Lau, who would give up the mob's money for a plea bargain. Joker offers to kill Batman in exchange for half of their money. The mob bosses disagree, and Gambol places a bounty on the Joker. The Joker finds and kills Gambol, taking over his gang. The mob decides to take the Joker up on his offer.",
        rating: 4.7,
        genre: "action, crime, drama",
        cover: "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        image: "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
        cover: "http://cdn.wallpapername.com/1600x1200/20130609/the%20joker%20twoface%20batman%20the%20dark%20knight%20harvey%20dent_www.wallpapername.com_30.jpg"
    },
    {
        id: "3",
        name: "Lord of the Rings",
        releaseYear: 2004,
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        longDesc: "In the Second Age of Middle-earth, the lords of Elves, Dwarves, and Men are given Rings of Power. Unbeknownst to them, the Dark Lord Sauron forges the One Ring in Mount Doom, infusing into it a great part of his power to dominate, through it and at a distance, the other Rings, so he might conquer Middle-earth. A final alliance of men and elves battles Sauron's forces in Mordor, where Prince Isildur of Gondor severs Sauron's finger, and the Ring with it, thereby destroying his physical form. With Sauron's first defeat, the Third Age of Middle-earth begins. Unfortunately, the Ring's influence corrupts Isildur, and, rather than destroy the Ring, Isildur takes it for himself. Isildur is later killed by Orcs, and the Ring is lost for 2,500 years, until it is found by Gollum, who owns it for five centuries. The Ring is then found by a hobbit named Bilbo Baggins, who turns invisible when he puts it on, but is unaware of its history.",
        rating: 4.9,
        genre: "adventure, drama, fantasy",
        cover: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
        image: "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
        cover: "https://cdn.wallpapersafari.com/4/17/NtiZBG.jpg"
    }
]

const CATEGORY_DATA = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Crime' },
    { id: '3', name: 'Adventure' },
    { id: '4', name: 'Thriller' },
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 1000)
    })
}

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA)
            // reject("Unable to fetch the movie data")
        }, 1000)
    })
}

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id)
        const movie = MOVIE_DATA[movieIndex]
        setTimeout(() => resolve(movie), 100)
    })
}
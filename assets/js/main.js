let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

// Show all

let fnShowAll = () => {
    myMusic.map((item, index, array) => {
        console.log(item);
        console.log('---------------------------------------------------------');
        console.log(index + ': ' + 'Object { artist:' + item.artist + ', title: ' + item.title + ', release_year: ' + item.release_year + ', medium: ' + item.gold);
    });
}

fnShowAll();

// Füge zu dem Objekt Deine Lieblingsmusik hinzu. 
let arrFnFuegeLieblingsmusikHinzu = () => {
    myMusic.push({
        artist: "Nirvana",
        title: "Smells Like Teen Spirit",
        release_year: 1991,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    });
}

arrFnFuegeLieblingsmusikHinzu();

// Greife mit console.log auf die Werte dieses Objekts zu:
//"The Beatles"
let arrFnShowTheBeatles = () => {
    console.log(myMusic[0].artist);
}

arrFnShowTheBeatles();

// Von Pink Floyd: "Download"

let arrFnShowDownload = () => {
    console.log(myMusic[0].medium[3]);
}

arrFnShowDownload();

// Von Pink Floyd: true
let arrFnShowTrue = () => {
    console.log(myMusic[1].gold);
}

arrFnShowTrue();

// 1971 und 1983

let arrFnShow1971And1983 = () => {
    console.log(myMusic[2].release_year);
    console.log(myMusic[3].release_year);
}
arrFnShow1971And1983
// Von Metallica: "MC"
// Von Metallica das Wort: Ride

let fnArrShowMcAndRide = () => {
    console.log(myMusic[3].medium[2]);
    console.log(myMusic[3].title.slice(17, 21));
}

fnArrShowMcAndRide();

// Von Led Zeppelin das Wort: IV:

let fnArrShowWordIv = () => {
    console.log(myMusic[2].title.slice(13, 15));
}

fnArrShowWordIv();
//Von Pink Floyd das Wort: Floyd
let fnArrShowFloyd = () => {
    console.log(myMusic[1].artist.slice(5, 10));
}

fnArrShowFloyd();

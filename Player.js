import { RandomPlaylistStrategy } from "./Strategy.js";
import { MusicPlayerMediator } from "./Mediator.js";

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}


const mediator = new MusicPlayerMediator(new RandomPlaylistStrategy([]));

//numele piesei si artistul
let song1 = new Song('NucaLuca', 'Nicu');
let song2 = new Song('HakaMaka', 'Valera');
let song3 = new Song('KungFu', 'Panda');
//adaugam muzica in colectie/player
mediator.addSong(song1);
mediator.addSong(song2);
mediator.addSong(song3);
//adaugam prima piesa in favorite
mediator.addFavorites(song1);
//facem random playlist
let randomPlaylist = mediator.generatePlaylist(2);//generarea unui playList random din 2 piese

console.log('Favorites:', mediator.favorites);
console.log('Playlist:', randomPlaylist);


class PlaylistStrategy {
    constructor() {
        if (this.constructor === PlaylistStrategy) {
            throw new TypeError('Error');
        }
    }

    generatePlaylist(size) { }
}

export class RandomPlaylistStrategy extends PlaylistStrategy {
    constructor(musicCollection) {
        super();
        this.musicCollection = musicCollection;
    }

    addSong(song) {
        this.musicCollection.push(song);
    }

    generatePlaylist(size) {
        const playlist = [];
        for (let i = 0; i < size; i++) {
            const randomIndex = Math.floor(Math.random() * this.musicCollection.length);
            playlist.push(this.musicCollection[randomIndex]);
        }
        return playlist;
    }
}

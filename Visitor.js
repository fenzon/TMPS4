class PlayerVisitor {
    visit(song) { }
}

export class AddFavoritesVisitor extends PlayerVisitor {
    constructor(favorites) {
        super();
        this.favorites = favorites;
    }

    visit(song) {
        this.favorites.push(song);
    }
}

export class GeneratePlaylistVisitor extends PlayerVisitor {
    constructor(playlistStrategy) {
        super();
        this.playlistStrategy = playlistStrategy;
    }

    visit(song) {
        this.playlistStrategy.addSong(song);
    }

    generatePlaylist(size) {
        return this.playlistStrategy.generatePlaylist(size);
    }
}
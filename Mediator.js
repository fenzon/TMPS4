import { StoppedState } from "./State.js";
import { AddFavoritesVisitor } from "./Visitor.js";
import { GeneratePlaylistVisitor } from "./Visitor.js";

export class MusicPlayerMediator {
    constructor(playlistStrategy) {
        this.musicCollection = [];
        this.favorites = [];
        this.playlistStrategy = playlistStrategy;
        this.state = new StoppedState(this);
    }

    addSong(song) {
        this.musicCollection.push(song);
    }

    addFavorites(song) {
        const addToFavoritesVisitor = new AddFavoritesVisitor(this.favorites);
        addToFavoritesVisitor.visit(song);
    }

    generatePlaylist(size) {
        const generatePlaylistVisitor = new GeneratePlaylistVisitor(this.playlistStrategy);
        for (const song of this.musicCollection) {
            generatePlaylistVisitor.visit(song);
        }
        return generatePlaylistVisitor.generatePlaylist(size);
    }

    play() {
        this.state.handlePlay();
    }

    stop() {
        this.state.handleStop();
    }
}
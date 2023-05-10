class PlayerState {
    handlePlay() { }

    handleStop() { }
}

export class PlayingState extends PlayerState {
    constructor(mediator) {
        super();
        this.mediator = mediator;
    }


    handleStop() {
        this.mediator.changeState(new StoppedState(this.mediator));
    }
}

export class StoppedState extends PlayerState {
    constructor(mediator) {
        super();
        this.mediator = mediator;
    }

    handlePlay() {
        this.mediator.changeState(new PlayingState(this.mediator));
    }

}
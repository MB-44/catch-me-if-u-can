class mainScene {

    // preload is to load all assets, like sprites sounds
    preLoad () {

    }

    // position of the sprites
    create () {

    }

    // with 60fps, handle objects like logics, movemnets
    // this will update the game like every 60fps
    update () {
        Game();
    }
}




new Phaser.Game({
    width: 700,
    height: 400,
    backgroundColor: "#3498db",
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game',
})
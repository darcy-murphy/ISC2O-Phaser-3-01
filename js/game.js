/* global Phaser */

// Copyright (c) 2022 Darcy Murphy All rights reserved 
//
// Created by: Darcy Murphy
// Createdon: Nov 2022
// This is the Phaser3 game configuration file

// scene import statments
import SplashScene from "./splashScene.js"

// create the new scenes
const splashScene = new SplashScene()

/**
 * Start Phaser Game.
 */
const config = {
   type: Phaser.AUTO,
   width: 1920,
   height: 1080,
   physics: {
    default: "arcade",
    arcade: {
        debug: true,
    }
   }
    // set backround color
    ,backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        // we place it in the middle of the page 
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
}

const game = new Phaser.Game(config)
console.log(game)

// load scenes
// Note: remeber any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)

// the start scene
game.scene.start("splashScene")
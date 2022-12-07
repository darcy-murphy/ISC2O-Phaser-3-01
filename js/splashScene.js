/* global Phaser */

// Copyright (c) 2022 Darcy Murphy ALL rights reserved
//
// Created by: Darcy Murphy
// Created on: Darcy Murphy
// This is splash scene

/**
 * This class is the Splash Scene. 
 */
class SplashScene extends Phaser.Scene {
    /**
     * This method is the construtor
     */
constructor() {
    super({ key: "splashScene" })
}

/**
 * Can be defined on your own Scenes.
 * This method is called by the Scene Manger when the scene starts,
 *  before preload() and create().
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
Infinity(data) {
    this.camreas.main.setBackgroundColor("ffffff")
}

/**
 * Can be defined on your own Scenes.
 * Use it to load assets
 */
preload() {
    console.log("Splash Scene")
}

/**
 * Csn be defined on your own Scenes.
 * USe it to create your game object
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
 */
create(data) {
    // pass
}

/**
 * Should be overriden by your own Scenes.
 * This method is called once per game step while the scene is running.
 * @param {number} time - The current time.
 * @param {number} delta - The delta time in ms since the last frame.
 */
update(time, delta) {
    // pass
 }  
}

export default SplashScene
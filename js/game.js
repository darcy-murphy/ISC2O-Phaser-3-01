/* global Phaser */

// Copyright (c) 2022 Darcy Murphy All rights reserved 
//
// Created by: Darcy Murphy
// Createdon: Nov 2022
// This is the Phaser3 game configuration file

/**
 * Start Phaser Game.
 */
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    // set backround color
    backroundColor: 0x5f6e7a,
};

const game = new Phaser.Game(config);
console.log(game);
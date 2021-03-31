import React, { PureComponent } from "react";
import Phaser from "phaser";

// Manages the lifecycle of the Phaser game game will be created when component is rendered
export default class PhaserGameInstance extends PureComponent {
  gameContent;

  componentDidMount() {
    this.gameContent = new PhaserGameContent(
      /** config= */ {
        title: "PhaserGame",
        width: 800,
        height: 600,
        parent: "PhaserContainer",
        scene: [PhaserGameScene],
        physics: {
          default: "arcade",
          arcade: {
            debug: false,
          },
        },
      }
    );
  }

  componentWillUnmount() {
    if (this.gameContent) {
      this.gameContent.destroy(/** removeCanvas= */ true);
    }
  }

  render() {
    return <div id="PhaserContainer"></div>;
  }
}

class PhaserGameContent extends Phaser.Game {}

class PhaserGameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "PhaserGameScene",
    });
  }

  // can accept params passed from game via 'scene.start'
  init(/** params */) {}

  // caches loading assets. called when scene objects are created
  preload() {
    this.load.image("sky", "./assets/sky.png");
    this.load.image("platform", "./assets/platform.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.physics.add.staticImage(400, 568, "platform").setScale(2);
  }
}

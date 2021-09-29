import GamePage from '../pages/game';
import GameOverPage from '../pages/game-over';

class GameView {
    constructor() {

    }

    showGameOverPage() {
        this.gameOverPage.show();
    }

    restartGame() {
        this.gamePage.restart();
    }

    initGamePage(callbacks) {
        this.gamePage = new GamePage(callbacks);
        this.gamePage.init();
    }

    initGameOverPage(callbacks) {
        this.gameOverPage = new GameOverPage(callbacks);
        this.gameOverPage.init({
            scene: this.gamePage.scene
        });
    }
}

export default new GameView();
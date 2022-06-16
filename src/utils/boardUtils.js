// Board setup utils (getRandomTilePosition, getRoandomNumber, etc ...)

import metrics from "../config/metrics";

export const getRandomTilePosition = (board) => {
    const position = {};
    const boardOriginX = metrics.BOARD_MARGIN;
    const boardOriginY = metrics.BOARD_MARGIN;
    const boardWidth = metrics.BOARD_WIDTH - metrics.BOARD_MARGIN;
    const boardHeight = metrics.BOARD_HEIGHT - metrics.BOARD_MARGIN;

    while (true) {
        const randomX = random(boardOriginX, boardWidth - metrics.TILE_SIZE);
        const randomY = random(boardOriginY, boardHeight - metrics.TILE_SIZE);
        if (_isPosisionAvailable(randomX, randomY, board)) {
            position.x = randomX;
            position.y = randomY;
            break;
        }
    }
    return position;
};
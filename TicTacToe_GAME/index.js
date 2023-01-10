/*
单元格点击：
1 获取到所有单元格列表
2 遍历单元格列表，给每一个单元格添加点击事件
3 给当前被点击的单元格添加类名 x
*/
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var cellLst = document.querySelectorAll(".cell");
var currentPlayer = Player.X;
var gameBoard = document.querySelector("#board");
var gameMsg = document.querySelector("#message");
// 判赢数组 6种情况
var winsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var winner = document.querySelector("#winner");
var step = 0;
var restartBtn = document.querySelector("#restart");
cellLst.forEach(function (item) {
    // 类型断言，item之前是Element，断言为html的div元素
    var cell = item;
    //   防止单元格被重复点击，使用 once
    cell.addEventListener("click", clickCell, { once: true });
});
// 棋盘中单元格的click事件处理函数
function clickCell(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
        winner.innerHTML = currentPlayer + " win!!!";
        gameMsg.style.display = "block";
        return;
    }
    step++;
    if (step === 9) {
        winner.innerHTML = "平局";
        gameMsg.style.display = "block";
        return;
    }
    // x 和 o交替下棋
    currentPlayer = currentPlayer === Player.X ? Player.O : Player.X;
    // 处理下一步提示的问题
    gameBoard.classList.remove("x", "o");
    gameBoard.classList.add(currentPlayer);
}
function checkWin(currentPlayer) {
    var isWin = winsArr.some(function (item) {
        //获取到每种获胜情况对应的单元格
        if (cellLst[item[0]].classList.contains(currentPlayer) &&
            cellLst[item[1]].classList.contains(currentPlayer) &&
            cellLst[item[2]].classList.contains(currentPlayer)) {
            return true;
        }
        return false;
    });
    return isWin;
}
restartBtn.addEventListener("click", function () {
    // 重新开始游戏，清空游戏数据
    // 隐藏游戏结果信息面板
    gameMsg.style.display = "none";
    cellLst.forEach(function (item) {
        // 清空棋盘
        item.classList.remove(Player.X, Player.O);
        var cell = item;
        // 移除单元格点击事件
        cell.removeEventListener("click", clickCell);
        // 重新给单元格绑定点击事件
        cell.addEventListener("click", clickCell, { once: true });
    });
    // 恢复初始设置 重置默认玩家为X 重置下棋提示为X
    currentPlayer = Player.X;
    gameBoard.classList.remove("x", "o");
    gameBoard.classList.add(currentPlayer);
    // 重置下棋次数
    step = 0;
});

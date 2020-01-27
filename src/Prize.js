
function prize(gamePoints, userPoints, changeReward, changeStatus) {
    if ((gamePoints + 1) % 500 === 0 && gamePoints !== 0) {
        changeReward(250);
        localStorage.setItem("userPoints", userPoints + 250)
        changeStatus(true);
        setTimeout(() => {
            changeStatus(false)
        }, 2000);
        return;
    }
    if ((gamePoints + 1) % 100 === 0 && gamePoints !== 0) {
        changeReward(40);
        localStorage.setItem("userPoints", userPoints + 40)
        changeStatus(true);
        setTimeout(() => {
            changeStatus(false)
        }, 2000);
        return;
    }
    if ((gamePoints + 1) % 10 === 0 && gamePoints !== 0) {
        changeReward(5);
        localStorage.setItem("userPoints", userPoints + 5)
        changeStatus(true);
        setTimeout(() => {
            changeStatus(false)
        }, 2000);
        return;
    }
}

export default prize
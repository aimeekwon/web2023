function tetris() {
    //블록이름 지정, 블록의 위치를 2차원 배열로 할당

    const blocks = {
        Tmino: [
            [
                [2, 1],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
            [
                [1, 2],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
            [
                [1, 2],
                [0, 1],
                [2, 1],
                [1, 1],
            ],
            [
                [2, 1],
                [1, 2],
                [1, 0],
                [1, 1],
            ],
        ],
        Imino: [
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
            ],
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
            ],
        ],
        Omino: [
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 0],
                [1, 1],
            ],
        ],
        Zmino: [
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
            ],
            [
                [1, 0],
                [0, 1],
                [1, 1],
                [0, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [2, 1],
            ],
            [
                [1, 0],
                [0, 1],
                [1, 1],
                [0, 2],
            ],
        ],
        Smino: [
            [
                [1, 0],
                [2, 0],
                [0, 1],
                [1, 1],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2],
            ],
            [
                [1, 0],
                [2, 0],
                [0, 1],
                [1, 1],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [1, 2],
            ],
        ],
        Jmino: [
            [
                [0, 2],
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 0],
                [0, 1],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 0],
                [1, 0],
                [0, 1],
                [0, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [2, 1],
            ],
        ],
        Lmino: [
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 2],
            ],
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [0, 1],
            ],
            [
                [0, 0],
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [0, 1],
                [1, 1],
                [2, 0],
                [2, 1],
            ],
        ],
    };
    //DOM
    const tetrisView = document.querySelector(".tetris__play>.view> ul");

    const gameEnd = document.querySelector(".gameEnd");
    const gameStart = document.querySelector(".gameStart");
    const startBtn = document.querySelector(".startBtn");
    const reStartBtn = document.querySelector(".restartBtn");
    const scoreDisplay = document.querySelector(".tetris_score");
    //배경세팅
    const line_rows = 20; //가로
    const line_cols = 12; //세로
    //변수
    let score = 0;
    let duration = 500;
    let downInterval;
    let tempMovingItem;

    const movingItem = {
        //블록의 정보 변수
        type: "", //블록 타입
        direction: 0, //화살표 '위' 누르면 방향전환
        top: 0, //블록 위치x값 0-11
        left: 3, //블록 위치 y값 0-19
    };

    // 시작하기
    function init() {
        tempMovingItem = { ...movingItem };

        for (let i = 0; i < line_rows; i++) {
            newLine(); //라인만들기
        }

        generateNewBlock();
        renderBlocks(); //블록 만들기
    }

    // 라인 만들기
    function newLine() {
        // for (let i = 0; i < line_rows; i++) {
        const li = document.createElement("li");
        const ul = document.createElement("ul");

        for (let j = 0; j < line_cols; j++) {
            const subLi = document.createElement("li");
            ul.prepend(subLi);
        }

        li.prepend(ul);
        tetrisView.prepend(li);
        // }
    }
    // 블록 만들기
    function renderBlocks(moveType = "") {
        const { type, direction, top, left } = tempMovingItem;
        //이동 효과를 주기 위해 이동 전 블록의 클래스를 지움
        // console.log(type, direction, top, left);
        const movingBlocks = document.querySelectorAll(".moving");

        movingBlocks.forEach((moving) => {
            moving.classList.remove(type, "moving");
        });

        blocks[type][direction].some((block) => {
            const x = block[0] + left;
            const y = block[1] + top;
            // console.log({ tetrisView });

            const target = tetrisView.childNodes[y]
                ? tetrisView.childNodes[y].childNodes[0].childNodes[x]
                : null;

            const isAvailable = checkEmpty(target);

            if (isAvailable) {
                target.classList.add(type, "moving");
            } else {
                tempMovingItem = { ...movingItem };

                if (moveType === "retry") {
                    clearInterval(downInterval);
                    showGameOverText();
                }
                setTimeout(() => {
                    renderBlocks("retry");

                    if (moveType === "top") {
                        seizeBlock();
                    }
                }, 0);
                return true;
            }
        });
        movingItem.left = left;
        movingItem.top = top;
        movingItem.direction = direction;
    }

    //블록잡기
    function seizeBlock() {
        const movingBlocks = document.querySelectorAll(".moving");
        movingBlocks.forEach((moving) => {
            moving.classList.remove("moving");
            moving.classList.add("seized");
        });
        checkMatch();
    }
    //
    function checkMatch() {
        const childNodes = tetrisView.childNodes;

        childNodes.forEach((child) => {
            let matched = true;
            child.children[0].childNodes.forEach((li) => {
                if (!li.classList.contains("seized")) {
                    matched = false;
                }
            });
            if (matched) {
                child.remove();
                newLine();
                // score++;
                // scoreDisplay.innerText = score;
            }
        });

        generateNewBlock();
    }
    function showGameOverText() {
        gameEnd.style.display = "block";
    }
    function generateNewBlock() {
        clearInterval(downInterval);
        downInterval = setInterval(() => {
            moveBlock("top", 1);
        }, duration);

        const blockArray = Object.entries(blocks);
        const randomIndex = Math.floor(Math.random() * blockArray.length);

        movingItem.type = blockArray[randomIndex][0];
        movingItem.top = 0;
        movingItem.left = 4;
        movingItem.direction = 0;
        tempMovingItem = { ...movingItem };
        renderBlocks();
    }

    function checkEmpty(target) {
        if (!target || target.classList.contains("seized")) {
            return false;
        }
        return true;
    }
    // 블록 움직이기
    function moveBlock(moveType, amount) {
        tempMovingItem[moveType] += amount;
        renderBlocks(moveType);
    }
    // 모양 변경하기
    function changeDirection() {
        const direction =
            tempMovingItem.direction + 1 < 4 ? tempMovingItem.direction + 1 : 0;
        tempMovingItem.direction = direction;
        // const direction = tempMovingItem.direction;
        // direction === 3
        //     ? (tempMovingItem.direction = 0)
        //     : (tempMovingItem.direction += 1);
        renderBlocks();
    }
    // 스페이스바 누르기
    function dropBlock() {
        clearInterval(downInterval);
        downInterval = setInterval(() => {
            moveBlock("top", 1);
        }, 10);
    }
    document.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
            case 39:
                moveBlock("left", 1);
                break;
            case 37:
                moveBlock("left", -1);
                break;
            case 40:
                moveBlock("top", 1);
                break;
            case 32:
                dropBlock();
                break;
            case 38:
                changeDirection();
                break;
            default:
                break;
        }
    });
    startBtn.addEventListener("click", () => {
        gameStart.style.display = "none";

        init(tetris);
        reStartBtn.addEventListener("click", () => {
            tetrisView.innerHTML = ""; // 게임판 초기화
            init(tetris); //새로운 게임 시작
            gameEnd.style.display = "none"; //종료창 제거
        });
    });
}
export default tetris;

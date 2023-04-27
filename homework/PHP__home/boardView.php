<!-- php : 글쓰기, 게시글보기, 게시판 수정하기 23.04.26-->



<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    // echo "<pre>";
    // var_dump($_SESSION);
    // echo "</pre>";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판</title>
    <?php include "../include/head.php" ?>
</head>
<body class="gray">
    <?php include "../include/skip.php" ?>
    <!-- //skip -->
    <?php include "../include/header.php" ?>
    <!-- //header -->
    <main id="main" class="container">
        <div class="intro__inner center">
            <picture class="intro__images small">
                <source srcset="../assets/img/join01.png, assets/img/join01@2x.png 2x, assets/img/join01@3x.png 3x" />
                <img src="../assets/img/join01.png" alt="회원가입 이미지">
            </picture>
            <h2>게시글보기</h2>
            <p class="intro__text">
                웹디자이너, 웹퍼블리셔
            </p>
        </div>
    <!-- //intro__inner -->
        <div class="board__inner">
            <div class="board__view">
                <table>
                    <colgroup>
                        <col style="width:20%;">
                        <col style="width:80%;">
                    </colgroup>
                    <tbody>
                        <!-- <tr>
                            <th>제목</th>
                            <td>게시판 제목입니다.</td>
                        </tr>
                        <tr>
                            <th>등록자</th>
                            <td>aimee</td>
                        </tr>
                        <tr>
                            <th>등록일</th>
                            <td>2023-04-24</td>
                        </tr>
                        <tr>
                            <th>조회수</th>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td></td>
                        </tr> -->
<?php
if(isset($_GET['boardID'])) {//isset()  :내장함수 : null이 아닌지 확인 할 떄 사용, 변수설정되어 있으면 true
    $boardID = $_GET['boardID']; //$_GET  웹브라우저가 서버에 데이터를 요청하는 방식. 쿼리문자열에서 파라미터들의 값을 추출해 배열로 만들어 제공, 보안상 취약
    $sql = "SELECT b.boardContents, b.boardTitle, m.youName, b.regTime, b.boardView FROM board b JOIN members m ON(m.memberID = b.memberID) WHERE b.boardID = {$boardID}";
    $result = $connect -> query($sql);
    if($result){
        // $info = $result -> fetch_array(MYSQLI_ASSOC);
        $count = $result -> num_rows;
        if($count > 0){
            for($i=0; $i<$count; $i++){
                $info = $result -> fetch_array(MYSQLI_ASSOC);
                 echo "<tr><th>제목</th><td>".$info['boardTitle']."</td></tr>";
                 echo "<tr><th>등록자</th><td>".$info['youName']."</td></tr>";
                 echo "<tr><th>등록일</th><td>".date('Y/m/d', $info['regTime'])."</td></tr>";
                 echo "<tr><th>조회수</th><td>".$info['boardView']."</td></tr>";
                 echo "<tr><th>내용</th><td>".$info['boardContents']."</td></tr>";
    };
}else {
echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
}
} else {
echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
}
} else {
echo "<tr><td colspan='4'>게시글이 없습니다.</td></tr>";
}
?>
                    </tbody>
                </table>
            </div>
            <div class="board__btn mb100">
            <?php
                echo '로그인한 사용자: ' . $_SESSION['memberID'] . '<br>';
                echo '게시물 작성자: ' . $info['memberID'] . '<br>';
                if($_SESSION['memberID'] === $info['memberID']){
                ?>
                <a href="boardModify.php?boardID=<?=$boardID?>" class="btnStyle3">수정하기</a>
                <a href="boardRemove.php?boardID=<?=$_GET['boardID']?>" class="btnStyle3" onclick="confirm('정말삭제할거니?', '')">삭제하기</a>
                <?php
                }
                ?>
                <a href="board.php" class="btnStyle3">목록보기</a>
            </div>
        </div>
    </main>
    <!-- //main -->
    <?php include "../include/footer.php" ?>
    <!-- //header -->
</body>
</html>


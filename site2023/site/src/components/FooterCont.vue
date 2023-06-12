<template>
    <footer id="footer" :class="attr" role="contentinfo" >
        <div class="footer__inner container">
            <div class="footer__text">
                <h5>aimee</h5>
                <p>
                    질문 환영 :파티하는_얼굴: <br />
                    궁금한 사항은 메일로 연락주세요!
                    <a href="mailto:aimee00418@gmail.com">
                        aimee00418@gmail.com
                    </a>
                </p>
                <ul class="sns">
                    <li>
                        <a href="#">
                            <span class="ir">페이스북</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ir">인스타</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ir">유투브</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="ir">깃</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__menu">
                <div>
                    <h4>사이트</h4>
                    <ul>
                        <li>
                            <a href="#">웹표준 사이트</a>
                        </li>
                        <li>
                            <a href="#">웹표준 사이트</a>
                        </li>
                        <li>
                            <a href="#">웹표준 사이트</a>
                        </li>
                        <li>
                            <a href="#">웹표준 사이트</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>유형</h4>
                    <ul>
                        <li>
                            <a href="#">이미지 유형</a>
                        </li>
                        <li>
                            <a href="#">카드 유형</a>
                        </li>
                        <li>
                            <a href="#">이미지/텍스트 유형</a>
                        </li>
                        <li>
                            <a href="#">배너 유형</a>
                        </li>
                        <li>
                            <a href="#">텍스트 유형</a>
                        </li>
                        <li>
                            <a href="#">푸터 유형</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>스크립트</h4>
                    <ul>
                        <li>
                            <a href="#">검색 이펙트</a>
                        </li>
                        <li>
                            <a href="#">퀴즈 이팩트</a>
                        </li>
                        <li>
                            <a href="#">마우스 이펙트</a>
                        </li>
                        <li>
                            <a href="#">슬라이드 이펙트</a>
                        </li>
                        <li>
                            <a href="#">패럴랙스 이펙트</a>
                        </li>
                        <li>
                            <a href="#">게임 이펙트</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>레퍼런스</h4>
                    <ul>
                        <li>
                            <a href="#">CSS</a>
                        </li>
                        <li>
                            <a href="#">FONTS</a>
                        </li>
                        <li>
                            <a href="#">HTML</a>
                        </li>
                        <li>
                            <a href="#">JAVASCRIPT</a>
                        </li>
                        <li>
                            <a href="#">REACT</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__right">
                Copyright 2023. All Rights Reserved. - Designed by aimee
            </div>
        </div>
    </footer>
</template>
<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">

// footer__inner
.footer__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .footer__text {
        width: 20%;

        h5 {
            font-size: 18px;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            color: #808080;
        }

        .sns {
            li {
                display: inline;

                a {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background-color: #fff;
                    //background-image: url(../assets/images/sns01.svg);
                }
            }
        }
    }

    .footer__menu {
        width: 70%;
        display: flex;

        >div {
            width: 25%;

            h4 {
                font-size: 18px;
                color: #000;
                margin-bottom: 20px;
            }

            a {
                font-size: 14px;
                color: #808080;
                line-height: 1.8;
            }
        }
    }
    .footer__right {
        width: 100%;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #e5e5e5;
        margin-top: 50px;
        color: #808080;
        font-size: 14px;
    }
}
</style>

import React from "react";

const introText = [
    {
        iconClass: "icon-bg1",
        title: "React.js",
        desc: "프론트앤드 과정입니다",
    },
    {
        iconClass: "icon-bg2",
        title: "Vue.js",
        desc: "프론트앤드 과정00입니다",
    },
    {
        iconClass: "icon-bg3",
        title: "Node.js",
        desc: "프론트앤드 과정입니다",
    },
    {
        iconClass: "icon-bg4",
        title: "Next.js",
        desc: "프론트앤드 과정입니다",
    },
]
function IntroDesc({ iconClass, title, desc }) {
    return (
        <div>
            <h4 className={iconClass}>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}


const introTitle =
{
    sub: "frontend",
    title: (<h3>프론트앤드<br /> 과정</h3>),
    desc: <p>프론트앤드 과정입니다<br />프론트앤드 과정입니다<br /></p>,
}


function IntroSection(props) {
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">커리큘럼 소개</h3>

            <div className="intro__inner container">
                <div className="intro__title">
                    <div>
                        <span>{introTitle.sub}</span>
                        <>{introTitle.title}</>
                        <>{introTitle.desc}</>

                    </div>
                </div>
                <div className="intro__desc">
                    {introText.map((text, index) => (
                        <IntroDesc
                            key={index}
                            iconClass={text.iconClass}
                            title={text.title}
                            desc={text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IntroSection;

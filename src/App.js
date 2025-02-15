import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <div className="min-vh-90 bg-light">
            <nav
                className="w-100 text-center py-3 overflow-hidden"
                style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.4rem",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                }}
            >
                <a
                    href="/challenges"
                    className="text-decoration-none text-dark mx-4"
                >
                    Challenges
                </a>
                <a href="/work" className="text-decoration-none text-dark mx-4">
                    Work
                </a>
                <a
                    href="/portfolio"
                    className="text-decoration-none text-dark mx-4"
                >
                    Portfolio
                </a>
            </nav>

            {/* Banner */}
            <div
                className="position-relative d-flex w-100"
                style={{ height: "90vh" }}
            >
                {/* Dark Overlay for Contrast */}
                <div
                    className="position-absolute w-100 h-100"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        zIndex: 5,
                    }}
                ></div>

                {/* Banner Background */}
                <div
                    className="position-absolute d-flex justify-content-center align-items-center w-100 h-100"
                    style={{
                        fontSize: "8rem",
                        fontWeight: "bold",
                        fontFamily: "Arial, sans-serif",
                        color: "white",
                        letterSpacing: "0.2rem",
                        textTransform: "uppercase",
                        zIndex: 10,
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    VIVA MEXICO
                </div>
                {/* Existing Banner Picture (2/4 Width) */}
                <img
                    src={require("./assets/images/WEBSITE_BANNER2.png")}
                    alt="Banner"
                    style={{ width: "50%", height: "100%", objectFit: "cover" }}
                />
                {/* Chains Picture */}
                <img
                    src={require("./assets/images/A1_180g_chain.png")}
                    alt="Chains"
                    style={{ width: "25%", height: "100%", objectFit: "cover" }}
                />
                {/* 10X Picture */}
                <img
                    src={require("./assets/images/10X.png")}
                    alt="10X"
                    style={{ width: "25%", height: "100%", objectFit: "cover" }}
                />
            </div>

            <section
                className="d-flex align-items-center justify-content-center position-relative"
                style={{
                    width: "100%",
                    height: "140vh",
                    backgroundImage: `url(${require("./assets/images/mouthhhh.png")})`,
                    backgroundSize: "150% 120%",
                    backgroundPositionX: "90%",
                    backgroundPositionY: "38%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div
                    className="position-absolute top-0 end-0 text-white text-end"
                    style={{
                        fontSize: "4rem",
                        fontFamily: "Helvetica, sans-serif",
                        letterSpacing: "0.5rem",
                        lineHeight: "1.1",
                        marginTop: "2rem",
                        marginRight: "2rem",
                        textTransform: "uppercase",
                    }}
                >
                    WHO ARE
                    <br />
                    WE
                </div>
                <div
                    className="w-100 py-5 bg-black text-white d-flex flex-column align-items-center justify-content-center"
                    style={{
                        fontFamily: "Georgia, serif",
                        letterSpacing: "0.3rem",
                        fontSize: "1.2rem",
                        height: "57vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p
                        className="mb-2 mx-auto"
                        style={{
                            maxWidth: "70%",
                            textAlign: "center",
                            lineHeight: "1.2",
                        }}
                    >
                        BOUNCE. IS A CREATIVE COLLECTIVE DEDICATED TO
                        <br />
                        UNITING GRAPHIC DESIGNERS THROUGH ENGAGING
                        <br />
                        CHALLENGES AND COLLABORATIVE PROJECTS.
                    </p>
                    <p
                        className="mt-2 mx-auto"
                        style={{
                            maxWidth: "80%",
                            textAlign: "center",
                            lineHeight: "1.2",
                        }}
                    >
                        OUR MISSION IS TO INSPIRE. CONNECT. AND PUSH THE
                        BOUNDARIES OF
                        <br />
                        DESIGN BY FOSTERING A VIBRANT COMMUNITY WHERE
                        <br />
                        ARTISTS CAN LEARN. GROW. AND SHOWCASE
                        <br />
                        THEIR TALENTS TOGETHER.
                    </p>
                </div>

                <div
                    className="w-100 position-absolute"
                    style={{ top: "70%", height: "45vh" }}
                >
                    <img
                        src={require("./assets/images/mouthhhh.png")}
                        alt="Mouth Bottom"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </section>

            <section className="w-100" style={{ height: "150vh" }}>
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "20%", backgroundColor: "#000" }}
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "4rem",
                            letterSpacing: "0.3rem",
                            textTransform: "uppercase",
                        }}
                    >
                        CHALLENGES
                    </h1>
                </div>

                {/* Middle Div - Description */}
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "30%", backgroundColor: "#fff" }}
                >
                    <p
                        style={{
                            maxWidth: "75%",
                            textAlign: "center",
                            letterSpacing: "0.15rem",
                            lineHeight: "1.5",
                            fontSize: "1.5rem",
                            fontFamily: "Georgia, serif",
                        }}
                    >
                        At BOUNCE., we host creative challenges every one to two
                        weeks,
                        <br />
                        depending on the scale of the project. Artists of all
                        kinds—whether you
                        <br /> work in 2D or 3D. Each challenge comes with its
                        own set of rules,
                        <br /> so be sure to review them carefully. Winners can
                        earn awards,
                        <br /> build valuable connections, and gain exciting
                        opportunities
                        <br /> within the creative community.
                    </p>
                </div>

                <div
                    className="position-relative d-flex justify-content-center align-items-center"
                    style={{
                        height: "50%",
                        backgroundImage: `url(${require("./assets/images/mouth-zoomed.png")})`,
                        backgroundSize: "100% 100%",
                        backgroundPositionX: "50%",
                        backgroundPositionY: "70%",
                        backgroundRepeat: "no-repeat",
                        overflow: "hidden",
                    }}
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "4rem",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            letterSpacing: "0.3rem",
                            marginTop: "-17.5rem",
                        }}
                    >
                        CONTACT US
                    </h1>
                </div>
            </section>

            <footer className="bg-white shadow-inner p-4 text-center text-muted">
                &copy; 2025 Bounↄe. All rights reserved.
            </footer>
        </div>
    );
};

export default App;

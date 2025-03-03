// 检测是否为移动设备
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// 使用 async/await 确保正确初始化
(async () => {
    await tsParticles.load("particles-bg", {
        fpsLimit: 60,
        particles: {
            number: {
                value: isMobile ? 80 : 150,
                density: {
                    enable: true,
                    value_area: 1200
                }
            },
            color: {
                value: [
                    "#4361EE",          // 深蓝色
                    "#5B4BE9",          // 蓝紫过渡
                    "#7209B7",          // 紫色
                    "#960F92",          // 紫红过渡
                    "#BA0F24",          // 公司红色
                    "#ffffff"           // 白色点缀
                ],
                animation: {
                    enable: false        // 保持禁用颜色动画
                }
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
                random: true,
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: { min: 1, max: 3 },
                random: true,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.5,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#4361EE",       // 基础蓝色
                opacity: 0.3,
                width: 0.8,
                gradient: {
                    enable: true,
                    start: "#4361EE",   // 蓝色起点
                    stop: "#7209B7"     // 紫色终点
                }
            },
            move: {
                enable: true,
                speed: { min: 0.5, max: 1.5 },
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out"
                },
                attract: {
                    enable: true,
                    rotate: {
                        x: 600,
                        y: 1200
                    },
                    distance: 200
                },
                warp: true
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 180,
                    links: {
                        opacity: 0.9
                    }
                }
            }
        },
        detectRetina: true
    });
})(); 
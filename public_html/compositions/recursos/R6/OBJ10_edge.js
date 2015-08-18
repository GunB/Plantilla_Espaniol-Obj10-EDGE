/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"obj10_r6.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pregunta_1',
                            symbolName: 'pregunta_1',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_2',
                            symbolName: 'pregunta_2',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_3',
                            symbolName: 'pregunta_3',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_4',
                            symbolName: 'pregunta_4',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_5',
                            symbolName: 'pregunta_5',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_6',
                            symbolName: 'pregunta_6',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_7',
                            symbolName: 'pregunta_7',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_8',
                            symbolName: 'pregunta_8',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_9',
                            symbolName: 'pregunta_9',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'pregunta_10',
                            symbolName: 'pregunta_10',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'ANT2',
                            type: 'image',
                            rect: ['1550px', '656px', '58px', '85px', 'auto', 'auto'],
                            cursor: 'no-drop',
                            fill: ["rgba(0,0,0,0)",im+"ANT.png",'0px','0px']
                        },
                        {
                            id: 'SIG3',
                            type: 'image',
                            rect: ['1731px', '656px', '58px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SIG.png",'0px','0px']
                        },
                        {
                            id: 'r6_enviar',
                            symbolName: 'r6_enviar',
                            display: 'block',
                            type: 'rect',
                            rect: ['1325px', '683px', '165', '38', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'r6_siguiente',
                            symbolName: 'r6_siguiente',
                            display: 'block',
                            type: 'rect',
                            rect: ['1730px', '673px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.92117','2.00412']]
                        },
                        {
                            id: 'r6_atras',
                            symbolName: 'r6_atras',
                            display: 'none',
                            type: 'rect',
                            rect: ['1559px', '672px', '50', '51', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.37951','1.76502']]
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​1 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​3 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy3',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​4 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy4',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​5 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy5',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​6 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy6',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​7 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy7',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​8 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy8',
                            display: 'none',
                            type: 'text',
                            rect: ['1621px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​9 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy9',
                            display: 'none',
                            type: 'text',
                            rect: ['1616px', '679px', '110px', '38px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​10 &nbsp;de 10</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: true,
                    labels: {
                        "slide1": 0,
                        "slide2": 545,
                        "slide3": 1045,
                        "slide4": 1545,
                        "slide5": 2045,
                        "slide6": 2550,
                        "slide7": 3045,
                        "slide8": 3545,
                        "slide9": 4060,
                        "slide10": 4545
                    },
                    data: [
                        [
                            "eid38",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${pregunta_8}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid58",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${pregunta_8}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid106",
                            "display",
                            1545,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            2045,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "left",
                            4000,
                            500,
                            "linear",
                            "${pregunta_9}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid56",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${pregunta_9}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid31",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${pregunta_7}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid51",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${pregunta_7}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid118",
                            "display",
                            4545,
                            0,
                            "linear",
                            "${TextCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            5045,
                            0,
                            "linear",
                            "${TextCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${pregunta_5}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${pregunta_5}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid108",
                            "display",
                            2045,
                            0,
                            "linear",
                            "${TextCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            2545,
                            0,
                            "linear",
                            "${TextCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${pregunta_3}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${pregunta_3}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid110",
                            "display",
                            2545,
                            0,
                            "linear",
                            "${TextCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            3045,
                            0,
                            "linear",
                            "${TextCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            4545,
                            0,
                            "linear",
                            "${r6_siguiente}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            4045,
                            0,
                            "linear",
                            "${TextCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            4545,
                            0,
                            "linear",
                            "${TextCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${pregunta_6}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${pregunta_6}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            500,
                            "linear",
                            "${pregunta_1}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid55",
                            "left",
                            500,
                            500,
                            "linear",
                            "${pregunta_1}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid37",
                            "left",
                            500,
                            500,
                            "linear",
                            "${pregunta_2}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${pregunta_2}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid101",
                            "display",
                            545,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            1045,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            0,
                            0,
                            "linear",
                            "${r6_enviar}",
                            'block',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            545,
                            0,
                            "linear",
                            "${r6_atras}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            545,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${pregunta_4}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid50",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${pregunta_4}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid103",
                            "display",
                            1045,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            1545,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "left",
                            4500,
                            500,
                            "linear",
                            "${pregunta_10}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "left",
                            5000,
                            500,
                            "linear",
                            "${pregunta_10}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid114",
                            "display",
                            3545,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            4045,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            3045,
                            0,
                            "linear",
                            "${TextCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            3545,
                            0,
                            "linear",
                            "${TextCopy6}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "pregunta_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,167,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(223,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(31,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,255,247,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,87,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(199,0,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,0,159,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(103,0,132,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pregunta_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'p10',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(111,0,69,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "r6_enviar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '165px', '38px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(149,115,187,1.00)', 50], ['rgba(120,78,166,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['36px', '3px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.49)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid76",
                            "background-image",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(149,115,187,1.00)',50],['rgba(120,78,166,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]]
                        ],
                        [
                            "eid79",
                            "textShadow.color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,0.49)',
                            'rgba(0,0,0,0.65098)'
                        ]
                    ]
                }
            },
            "r6_siguiente": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "r6_atras": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '51px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("OBJ10_edgeActions.js");
})("EDGE-8499656");

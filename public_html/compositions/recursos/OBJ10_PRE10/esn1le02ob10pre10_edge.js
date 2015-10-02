/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"pickManyUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js"
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
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '270px', '1830px', '510px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [3,"rgb(106, 55, 137)","none"],
                            c: [
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['555px', '166px', '20', '23', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['555px', '205px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['555px', '244px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'texto_4',
                                type: 'text',
                                rect: ['586px', '158px', '300px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 40px;\">​Ellos</p><p style=\"margin: 0px; line-height: 40px;\">​Nosotros</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​Ella</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['993px', '166px', '20', '23', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_5',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['993px', '205px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_6',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['993px', '244px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'texto_3',
                                type: 'text',
                                rect: ['1024px', '158px', '300px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-size: 30px;\">Soy</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​son</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​es</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'PICK_7',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['1431px', '166px', '20', '23', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_8',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['1431px', '205px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_9',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['1431px', '244px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'texto_2',
                                type: 'text',
                                rect: ['1462px', '158px', '300px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 40px;\">​b<span style=\"font-size: 30px;\">omberos</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​ejecutivos</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​abogadas</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['104px', '28px', '386px', '373px', 'auto', 'auto'],
                                overflow: 'hidden',
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [3,"rgba(106,55,137,1.00)","solid"],
                                c: [
                                {
                                    id: 'bomberos',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['-4px', '-3px', '392px', '379px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"bomberos.jpg",'0px','0px']
                                }]
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['447px', '358px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>Las profesiones</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">10</span><span style=\"font-size: 30px;\">&nbsp;</span>Construya un enunciado que describa la imagen.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción:&nbsp;</span>seleccione las palabras correctas para formar el enunciado.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(51,51,51,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "40px", "", "none"]
                        },
                        {
                            id: 'zoom_1',
                            symbolName: 'zoom_1_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1830', '780', 'auto', 'auto']
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
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "PICK_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(153,149,150,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['2px', '0px', '15px', '20px', 'auto', 'auto'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 10px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 18px; font-weight: 900;\">✔</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid191",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid190",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid192",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(153,149,150,1.00)',
                            'rgba(106,55,137,0.00)'
                        ],
                        [
                            "eid189",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.84)'
                        ]
                    ]
                }
            },
            "PICK_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(153,149,150,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['2px', '0px', '15px', '20px', 'auto', 'auto'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 10px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 18px; font-weight: 900;\">✔</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid191",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid190",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid192",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid194",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(153,149,150,1.00)',
                            'rgba(106,55,137,0.00)'
                        ],
                        [
                            "eid189",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.84)'
                        ]
                    ]
                }
            },
            "PICK_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(153,149,150,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['2px', '0px', '15px', '20px', 'auto', 'auto'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 10px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 18px; font-weight: 900;\">✔</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid191",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid190",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid192",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid195",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(153,149,150,1.00)',
                            'rgba(106,55,137,0.00)'
                        ],
                        [
                            "eid189",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.84)'
                        ]
                    ]
                }
            },
            "PICK_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(153,149,150,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['2px', '0px', '15px', '20px', 'auto', 'auto'],
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 10px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 18px; font-weight: 900;\">✔</span></p>',
                            opacity: '0',
                            font: ['source-sans-pro, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid191",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid190",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid192",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid196",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(153,149,150,1.00)',
                            'rgba(106,55,137,0.00)'
                        ],
                        [
                            "eid189",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.84)'
                        ]
                    ]
                }
            },
            "PICK_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(153,149,150,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [32, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['2px', '0px', '15px', '20px', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 10px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 18px; font-weight: 900;\">✔</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '23px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid191",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid190",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid192",
                            "boxShadow.spread",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid197",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(153,149,150,1.00)',
                            'rgba(106,55,137,0.00)'
                        ],
                        [
                            "eid189",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.84)'
                        ]
                    ]
                }
            },
            "zoom_1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.70)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['2', '2']],
                                tag: 'img',
                                id: 'img',
                                type: 'image',
                                rect: ['150px', '150px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/bomberos.jpg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "cerrar_lupa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            borderRadius: ['7px', '7px', '7px', '7px 7px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '50px', '', 'none'],
                            id: 'TextLUPA',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            align: 'center',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid333",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(25,25,25,0.43)',
                            'rgba(25,25,25,0.43)'
                        ]
                    ]
                }
            },
            "lupa_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            borderRadius: ['12px', '12px', '12px', '12px 12px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre10_edgeActions.js");
})("EDGE-17298671");

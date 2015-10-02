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
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['320px', '24px', '443', '149', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['880px', '25px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['320px', '216px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['880px', '210px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['712px', '117px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_2',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1272px', '118px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_3',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['712px', '309px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_4',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1272px', '303px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>Las formas de las cosas</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">8&nbsp;</span>Identifique la imagen que representa el enunciado: “Ese carro es rojo.”</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción:&nbsp;</span>haga clic sobre la imagen para seleccionar la respuesta correcta.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(51,51,51,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "40px", "", "none"]
                        },
                        {
                            id: 'zoom_1',
                            symbolName: 'zoom_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_2',
                            symbolName: 'zoom_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_3',
                            symbolName: 'zoom_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_4',
                            symbolName: 'zoom_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
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
                    duration: 560,
                    autoPlay: true,
                    data: [
                        [
                            "eid371",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid373",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid372",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_3}",
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
                            type: 'rect',
                            borderRadius: ['16px', '16px', '16px', '16px 16px'],
                            id: 'RoundRect',
                            opacity: '1',
                            rect: ['0px', '0px', '434px', '135px', 'auto', 'auto'],
                            overflow: 'hidden',
                            stroke: [4, 'rgba(189,150,212,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['41px', '-7px', '338px', '169px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '0px', '0px 0px'],
                                id: 'ese12',
                                fill: ['rgba(0,0,0,0)', 'images/ese1.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '443px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 560,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "selected": 250,
                        "hover": 560
                    },
                    data: [
                        [
                            "eid283",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            'rgba(189,150,212,1.00)',
                            'rgb(106, 55, 137)'
                        ],
                        [
                            "eid284",
                            "border-color",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgb(106, 55, 137)',
                            'rgb(106, 55, 137)'
                        ],
                        [
                            "eid377",
                            "border-width",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '4px',
                            '7px'
                        ],
                        [
                            "eid376",
                            "border-width",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            '7px',
                            '7px'
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
                            type: 'rect',
                            borderRadius: ['16px', '16px', '16px', '16px 16px'],
                            id: 'RoundRect',
                            opacity: '1',
                            rect: ['0px', '0px', '434px', '135px', 'auto', 'auto'],
                            overflow: 'hidden',
                            stroke: [4, 'rgba(189,150,212,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['48px', '0px', '338px', '169px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '0px', '0px 0px'],
                                id: 'ese12',
                                fill: ['rgba(0,0,0,0)', 'images/ese2.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '443px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 560,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "selected": 250,
                        "hover": 560
                    },
                    data: [
                        [
                            "eid289",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            'rgba(189,150,212,1.00)',
                            'rgb(106, 55, 137)'
                        ],
                        [
                            "eid288",
                            "border-color",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgb(106, 55, 137)',
                            'rgb(106, 55, 137)'
                        ],
                        [
                            "eid381",
                            "border-width",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '4px',
                            '7px'
                        ],
                        [
                            "eid380",
                            "border-width",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            '7px',
                            '7px'
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
                            type: 'rect',
                            borderRadius: ['16px', '16px', '16px', '16px 16px'],
                            id: 'RoundRect',
                            opacity: '1',
                            rect: ['0px', '0px', '434px', '135px', 'auto', 'auto'],
                            overflow: 'hidden',
                            stroke: [4, 'rgba(189,150,212,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['47px', '-8px', '341px', '171px', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '10px', '10px 10px'],
                                transform: [[], [], [], ['0.99', '0.99']],
                                id: 'ese12',
                                fill: ['rgba(0,0,0,0)', 'images/este1.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '443px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 560,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "selected": 250,
                        "hover": 560
                    },
                    data: [
                        [
                            "eid385",
                            "border-width",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '4px',
                            '7px'
                        ],
                        [
                            "eid384",
                            "border-width",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid293",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            'rgba(189,150,212,1.00)',
                            'rgb(106, 55, 137)'
                        ],
                        [
                            "eid292",
                            "border-color",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgb(106, 55, 137)',
                            'rgb(106, 55, 137)'
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
                            type: 'rect',
                            borderRadius: ['16px', '16px', '16px', '16px 16px'],
                            id: 'RoundRect',
                            opacity: '1',
                            rect: ['0px', '0px', '434px', '135px', 'auto', 'auto'],
                            overflow: 'hidden',
                            stroke: [4, 'rgba(189,150,212,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['48px', '-7px', '338px', '169px', 'auto', 'auto'],
                                borderRadius: ['0px', '0px', '0px', '0px 0px'],
                                id: 'ese12',
                                fill: ['rgba(0,0,0,0)', 'images/este2.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '443px', '149px']
                        }
                    }
                },
                timeline: {
                    duration: 560,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "selected": 250,
                        "hover": 560
                    },
                    data: [
                        [
                            "eid389",
                            "border-width",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '4px',
                            '7px'
                        ],
                        [
                            "eid388",
                            "border-width",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid298",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            'rgba(189,150,212,1)',
                            'rgba(106,55,137,1.00)'
                        ],
                        [
                            "eid300",
                            "border-color",
                            560,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgba(106,55,137,1.00)',
                            'rgba(106,55,137,1.00)'
                        ]
                    ]
                }
            },
            "zoom_1": {
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
                            rect: ['230px', '140px', '1364px', '494px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['2', '2']],
                                tag: 'img',
                                id: 'img',
                                type: 'image',
                                rect: ['343px', '63px', '679px', '340px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/ese1.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1551px', '591px', null, null, 'auto', 'auto']
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
                        [
                            "eid363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '1551px',
                            '1551px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '591px',
                            '591px'
                        ]
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
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            id: 'TextLUPA',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            type: 'text',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', '']
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
            },
            "zoom_2": {
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
                            rect: ['230px', '140px', '1364px', '494px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                rect: ['343px', '63px', '679px', '340px', 'auto', 'auto'],
                                transform: [[], [], [], ['2', '2']],
                                id: 'img',
                                fill: ['rgba(0,0,0,0)', 'images/ese2.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1551px', '591px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '1551px',
                            '1551px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '591px',
                            '591px'
                        ]
                    ]
                }
            },
            "zoom_3": {
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
                            rect: ['230px', '140px', '1364px', '494px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['2', '2']],
                                tag: 'img',
                                id: 'img',
                                type: 'image',
                                rect: ['343px', '63px', '679px', '340px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/este1.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1551px', '591px', null, null, 'auto', 'auto']
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
                        [
                            "eid363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '1551px',
                            '1551px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '591px',
                            '591px'
                        ]
                    ]
                }
            },
            "zoom_4": {
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
                            rect: ['230px', '140px', '1364px', '494px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['2', '2']],
                                tag: 'img',
                                id: 'img',
                                type: 'image',
                                rect: ['343px', '63px', '679px', '340px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/este2.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1551px', '591px', null, null, 'auto', 'auto']
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
                        [
                            "eid363",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '1551px',
                            '1551px'
                        ],
                        [
                            "eid364",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_lupa}",
                            '591px',
                            '591px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre8_edgeActions.js");
})("EDGE-17298671");

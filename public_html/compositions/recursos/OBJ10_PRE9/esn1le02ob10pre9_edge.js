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
            js+"utility.js",
            js+"audioUtilities.js"
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
                            rect: ['0px', '242px', '1830px', '538px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['216', '107px', '240', '224', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['628px', '107px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['1034px', '107px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['1453px', '107px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_1',
                                symbolName: 'btn_audio_1',
                                type: 'rect',
                                rect: ['796px', '28px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer',
                                transform: [[],[],[],['1.18','1.18']]
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['403px', '279px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_2',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['816px', '279px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_3',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1222px', '279px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_4',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1640px', '279px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>Características de las personas</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">9</span><span style=\"font-size: 30px;\">&nbsp;</span>Seleccione la imagen que coincide con la descripción del audio. </p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción:&nbsp;</span>escuche el audio, observe las imágenes y seleccione la que sea acorde con la narración.<span style=\"font-size: 30px;\"></span></p>",
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
                    duration: 4288,
                    autoPlay: true,
                    data: [
                        [
                            "eid320",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_1}",
                            '403px',
                            '403px'
                        ],
                        [
                            "eid331",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_4}",
                            '1640px',
                            '1640px'
                        ],
                        [
                            "eid316",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid345",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_2}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid344",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_4}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid342",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_1}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid324",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_2}",
                            '816px',
                            '816px'
                        ],
                        [
                            "eid343",
                            "top",
                            0,
                            0,
                            "linear",
                            "${lupa_3}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid340",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid339",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid327",
                            "left",
                            0,
                            0,
                            "linear",
                            "${lupa_3}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid341",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_2}",
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
                            rect: ['-30px', '-28px', '300px', '280px', 'auto', 'auto'],
                            borderRadius: ['21px', '21px', '21px', '21px 21px'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'rubia',
                            fill: ['rgba(0,0,0,0)', 'images/rubia.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-3px', '227px', '215px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            stroke: [6, 'rgb(106, 55, 137)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '240px', '224px']
                        }
                    }
                },
                timeline: {
                    duration: 540,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 540
                    },
                    data: [
                        [
                            "eid282",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
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
                            rect: ['-30px', '-28px', '300px', '280px', 'auto', 'auto'],
                            borderRadius: ['21px', '21px', '21px', '21px 21px'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'rubia',
                            fill: ['rgba(0,0,0,0)', 'images/latina.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-3px', '227px', '215px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            stroke: [6, 'rgb(106, 55, 137)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '240px', '224px']
                        }
                    }
                },
                timeline: {
                    duration: 540,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 540
                    },
                    data: [
                        [
                            "eid282",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
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
                            rect: ['-30px', '-28px', '300px', '280px', 'auto', 'auto'],
                            borderRadius: ['21px', '21px', '21px', '21px 21px'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'rubia',
                            fill: ['rgba(0,0,0,0)', 'images/negra.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-3px', '227px', '215px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            stroke: [6, 'rgb(106, 55, 137)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '240px', '224px']
                        }
                    }
                },
                timeline: {
                    duration: 540,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 540
                    },
                    data: [
                        [
                            "eid282",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
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
                            rect: ['-30px', '-28px', '300px', '280px', 'auto', 'auto'],
                            borderRadius: ['21px', '21px', '21px', '21px 21px'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            id: 'rubia',
                            fill: ['rgba(0,0,0,0)', 'images/oriental.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '-3px', '227px', '215px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            stroke: [6, 'rgb(106, 55, 137)', 'solid'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '240px', '224px']
                        }
                    }
                },
                timeline: {
                    duration: 540,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 540
                    },
                    data: [
                        [
                            "eid282",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "btn_audio_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['210px', '1px', '223px', '43px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                textStyle: ['', '', '40px', '', ''],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le2ob10re5au01.mp3'],
                            id: 'r9_audio_1',
                            rect: ['47', '579', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 4816.125,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid309",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid346", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r9_audio_1}', [1] ] ]
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['150px', '150px', '300px', '300px', 'auto', 'auto'],
                                tag: 'img',
                                id: 'img',
                                transform: [[], [], [], ['2', '2']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/rubia.png', '0px', '0px']
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
                            borderRadius: ['8px', '8px', '8px', '8px 8px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'TX_lupa',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            textStyle: ['', '', '50px', '', 'none'],
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/latina.png', '0px', '0px'],
                                id: 'img',
                                rect: ['150px', '150px', '300px', '300px', 'auto', 'auto'],
                                transform: [[], [], [], ['2', '2']],
                                tag: 'img'
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['150px', '150px', '300px', '300px', 'auto', 'auto'],
                                tag: 'img',
                                id: 'img',
                                transform: [[], [], [], ['2', '2']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/negra.png', '0px', '0px']
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['150px', '150px', '300px', '300px', 'auto', 'auto'],
                                tag: 'img',
                                id: 'img',
                                transform: [[], [], [], ['2', '2']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/oriental.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre9_edgeActions.js");
})("EDGE-17298671");

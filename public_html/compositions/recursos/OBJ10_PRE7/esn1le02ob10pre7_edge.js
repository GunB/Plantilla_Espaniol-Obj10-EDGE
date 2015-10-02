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
                            rect: ['0px', '270px', '1830px', '510px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['755px', '80px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['756px', '144px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['755px', '203px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['754px', '258px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'gato',
                                type: 'image',
                                tag: 'img',
                                rect: ['281px', '22px', '313px', '305px', 'auto', 'auto'],
                                borderRadius: ["18px", "18px", "18px", "18px 18px"],
                                fill: ["rgba(0,0,0,0)",im+"gato.png",'0px','0px']
                            },
                            {
                                id: 'contorno_gato',
                                type: 'rect',
                                rect: ['281px', '22px', '303px', '296px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [5,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'audio_1',
                                symbolName: 'audio_1',
                                type: 'rect',
                                rect: ['909px', '73px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_2',
                                symbolName: 'audio_2',
                                type: 'rect',
                                rect: ['909px', '133px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_3',
                                symbolName: 'audio_3',
                                type: 'rect',
                                rect: ['909px', '198px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_4',
                                symbolName: 'audio_4',
                                type: 'rect',
                                rect: ['909px', '256px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['543px', '277px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>Colores y formas</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">7&nbsp;</span>Seleccione el audio que describe mejor la imagen.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\"></span><span style=\"font-size: 30px;\"> </span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción:&nbsp;</span>escuche cada audio, observe la imagen y seleccione la respuesta correcta.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
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
                    duration: 3583.225,
                    autoPlay: true,
                    data: [
                        [
                            "eid158",
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
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [1, 'rgba(164,160,161,0.00)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
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
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
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
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [1, 'rgba(164,160,161,0.00)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
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
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
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
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [1, 'rgba(164,160,161,0.00)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
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
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
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
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [1, 'rgba(164,160,161,0.00)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
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
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
                        ]
                    ]
                }
            },
            "audio_1": {
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
                            stroke: [1, 'rgba(0,0,0,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['199px', '1px', '234px', '42px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
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
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r10_audio_1.mp3'],
                            id: 'r10_audio_1',
                            rect: ['142', '186', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
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
                    duration: 3479,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid146", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r10_audio_1}', [] ] ]
                    ]
                }
            },
            "audio_2": {
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
                            stroke: [1, 'rgba(0,0,0,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['199px', '1px', '234px', '42px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_3',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
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
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r10_audio_2.mp3'],
                            id: 'r10_audio_2',
                            rect: ['368', '169', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
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
                    duration: 3505,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid150",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid147", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r10_audio_2}', [] ] ]
                    ]
                }
            },
            "audio_3": {
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
                            id: 'RoundRectCopy',
                            stroke: [1, 'rgba(0,0,0,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['199px', '1px', '234px', '43px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_4',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stopCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px'],
                            id: 'playCopy',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r10_audio_3.mp3'],
                            id: 'r10_audio_3',
                            rect: ['604', '290', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
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
                    duration: 3583.225,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid152",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${playCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stopCopy}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid148", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r10_audio_3}', [] ] ]
                    ]
                }
            },
            "audio_4": {
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
                            id: 'RoundRectCopy2',
                            stroke: [1, 'rgba(0,0,0,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['199px', '1px', '234px', '42px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r10_audio_4.mp3'],
                            id: 'r10_audio_4',
                            rect: ['519', '240', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stopCopy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px'],
                            id: 'playCopy2',
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
                    duration: 2905,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid157",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stopCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${playCopy2}",
                            '1',
                            '0'
                        ],
                            [ "eid149", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r10_audio_4}', [] ] ]
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
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/gato.png', '0px', '0px'],
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
                            type: 'text',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            align: 'center',
                            id: 'TextLUPA',
                            textStyle: ['', '', '50px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
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
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            textStyle: ['', '', '50px', '', 'none'],
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'TX_lupa',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '46px', '46px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre7_edgeActions.js");
})("EDGE-17298671");

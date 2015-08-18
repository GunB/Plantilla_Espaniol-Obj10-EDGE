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
                            id: 'Text3',
                            type: 'text',
                            rect: ['168px', '121px', '754px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 30px;\"></span>Escuche el audio y seleccione la imagen que corresponde al deletreo.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "29px", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['137px', '55px', '1589px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: seleccione la respuesta correcta.<span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'signo_mas_que_1_VIOLETA',
                            type: 'image',
                            rect: ['103px', '126px', '18px', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signo mas que 1 VIOLETA2.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['144px', '116px', '18px', '29px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​2</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['1464px', '330px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['1195px', '330px', '181', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['926px', '330px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['657px', '330px', '182', '182', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['223px', '401px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
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
                    duration: 517,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TIMER_CONTAINER": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '161px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 250
                    },
                    data: [
                        [
                            "eid46",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,0,0,1.00)',
                            'rgba(192,192,192,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid52",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            },
            "Submit": {
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'faro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '182px']
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
                            "eid77",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
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
                            rect: ['-4px', '-3px', '189px', '189px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'mesa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '182px']
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
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
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
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'uva',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uva.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '181px', '182px']
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
                            "eid81",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
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
                            rect: ['-4px', '-4px', '189px', '189px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'arbol',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arbol.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-5px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            id: 'RoundRectCopy2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '182px']
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
                            "eid83",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "margenes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(106,55,137,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​1</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['104px', '164px', '18px', '38px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.25', '0.25']],
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['84px', '48px', '57px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila22.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '266px', '80px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '80px', '104px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['120px', '80px', '18px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '267px', '207px']
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
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
                    duration: 8348.25,
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
                            [ "eid112", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lec1_obj10-02_edgeActions.js");
})("EDGE-17298671");

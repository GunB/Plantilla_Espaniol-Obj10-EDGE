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
                centerStage: "vertical",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '270px', '1830px', '510px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [10,"rgb(106, 55, 137)","none"],
                            c: [
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['438px', '-21px', '199', '250', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['742px', '-25px', '97', '250', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['948px', '-20px', '194', '250', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['1210px', '-20px', '181', '250', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['582px', '185px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_2',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['836px', '186px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_3',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1090px', '186px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_4',
                                symbolName: 'lupa_1',
                                type: 'rect',
                                rect: ['1345px', '186px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['119px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>Las formas</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">6&nbsp;</span>Relacione un grupo de objetos por su forma.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\"></span><span style=\"font-size: 30px;\"> </span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción: &nbsp;</span>seleccione los objetos circulares haciendo clic sobre cada uno.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
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
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
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
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRect',
                            stroke: [10, 'rgba(181,137,207,1.00)', 'solid'],
                            rect: ['-2px', '60px', '182px', '182px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ['rgba(255,255,255,0.00)'],
                            c: [
                            {
                                type: 'image',
                                borderRadius: ['46px', '46px', '46px', '46px 46px'],
                                id: 'anillo2',
                                rect: ['-59px', '-48px', '300px', '280px', 'auto', 'auto'],
                                overflow: 'visible',
                                tag: 'img',
                                transform: [[], [], [], ['0.68', '0.68']],
                                fill: ['rgba(0,0,0,0)', 'images/anillo.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '250px']
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
                            "eid177",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            'rgba(181,137,207,1.00)',
                            'rgba(106,55,137,1.00)'
                        ],
                        [
                            "eid178",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            'rgba(106,55,137,1.00)',
                            'rgba(106,55,137,1.00)'
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
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRectCopy',
                            stroke: [10, 'rgba(181,137,207,1.00)', 'solid'],
                            rect: ['-52px', '58px', '182px', '189px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.64', '0.64']],
                                borderRadius: ['32px', '32px', '32px', '32px 32px'],
                                tag: 'img',
                                id: 'caja2',
                                type: 'image',
                                rect: ['-63px', '-62px', '311px', '313px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/caja.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '97px', '250px']
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
                            "eid181",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy}",
                            'rgba(181,137,207,1.00)',
                            'rgba(106,55,137,1.00)'
                        ],
                        [
                            "eid182",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            'rgba(106,55,137,1.00)',
                            'rgba(106,55,137,1.00)'
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
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRectCopy2',
                            stroke: [10, 'rgba(181,137,207,1.00)', 'solid'],
                            rect: ['-4px', '60px', '182px', '182px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.64', '0.64']],
                                borderRadius: ['37px', '37px', '37px', '37px 37px'],
                                tag: 'img',
                                id: 'celular2',
                                type: 'image',
                                rect: ['-62px', '-67px', '303px', '311px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/celular.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '194px', '250px']
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
                            "eid186",
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy2}",
                            'rgba(181,137,207,1.00)',
                            'rgba(106,55,137,1.00)'
                        ],
                        [
                            "eid187",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            'rgba(106,55,137,1.00)',
                            'rgba(106,55,137,1.00)'
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
                            borderRadius: ['20px', '20px', '20px', '20px 20px'],
                            id: 'RoundRectCopy3',
                            stroke: [10, 'rgba(181,137,207,1.00)', 'solid'],
                            rect: ['-11px', '60px', '182px', '182px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.61', '0.61']],
                                borderRadius: ['39px', '39px', '39px', '39px 39px'],
                                tag: 'img',
                                id: 'llanta2',
                                type: 'image',
                                rect: ['-72px', '-73px', '331px', '328px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/llanta.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '250px']
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
                            "border-color",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy3}",
                            'rgba(181,137,207,1.00)',
                            'rgba(106,55,137,1.00)'
                        ],
                        [
                            "eid192",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            'rgba(106,55,137,1.00)',
                            'rgba(106,55,137,1.00)'
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
                            rect: ['8px', '4px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [320, 'px'], 'rgba(157,99,192,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text3Copy4',
                            textStyle: ['', '', '250px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​a</p>',
                            type: 'text'
                        },
                        {
                            rect: ['-9px', '60px', '182px', '182px', 'auto', 'auto'],
                            borderRadius: ['34px', '34px', '34px', '34px 34px'],
                            opacity: '0',
                            id: 'RoundRectCopy4',
                            stroke: [10, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '184px', '250px']
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
                            "eid142",
                            "top",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid139",
                            "left",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '1',
                            '1'
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
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/anillo.png', '0px', '0px'],
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
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
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
                                fill: ['rgba(0,0,0,0)', 'images/caja.png', '0px', '0px'],
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
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/celular.png', '0px', '0px'],
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
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/llanta.png', '0px', '0px'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre6_edgeActions.js");
})("EDGE-17298671");

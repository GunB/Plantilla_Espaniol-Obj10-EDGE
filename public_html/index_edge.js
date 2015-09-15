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
            js+"jquery-1.11.3.min.js",
            js+"detect-zoom.min.js",
            js+"jquery-migrate-1.2.1.js",
            js+"jquery-ui-1.11.4.custom/jquery-ui.min.js",
            js+"jquery.fullscreen-0.5.0/jquery.fullscreen.min.js",
            js+"jquery.backstretch.min.js",
            js+"jquery.transform/jquery.transform2d.js",
            js+"jquery.transform/jquery.transform3d.js",
            js+"plantilla/actividades_result.js",
            js+"plantilla/utilities.js",
            js+"plantilla/plantilla.js",
            js+"plantilla/utility.js",
            js+"plantilla/main.js",
            js+"EdgeCommons.js",
            js+"SCORM_2004_APIWrapper.js",
            js+"SCORM_HELPER.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'back_contenedor_home',
                            symbolName: 'back_contenedor_home',
                            type: 'rect',
                            rect: ['41px', '133px', '1838', '785', 'auto', 'auto'],
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'contenedor_home',
                            symbolName: 'contenedor_home',
                            type: 'rect',
                            rect: ['41px', '131px', '1838', '785', 'auto', 'auto'],
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            rect: ['20px', '20px', '1882px', '114px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banner.png",'0px','0px']
                        },
                        {
                            id: 'nivel',
                            type: 'image',
                            rect: ['21px', '55px', '1880px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nivel.png",'0px','0px']
                        },
                        {
                            id: 'contenedor_portada',
                            symbolName: 'overlay_portada',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '136', '1920', '944', 'auto', 'auto']
                        },
                        {
                            id: 'btn_menugrafico',
                            symbolName: 'btn_menugrafico',
                            type: 'rect',
                            rect: ['1794', '20', '107', '101', 'auto', 'auto']
                        },
                        {
                            id: 'menu_grafico',
                            symbolName: 'menu_grafico',
                            type: 'rect',
                            rect: ['1794px', '121px', '107', '580', 'auto', 'auto']
                        },
                        {
                            id: 'Tool_creditos',
                            symbolName: 'Tool_creditos',
                            type: 'rect',
                            rect: ['1686px', '227px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -35.6435546875px)'
                        },
                        {
                            id: 'Tool_audio',
                            symbolName: 'Tool_audio',
                            type: 'rect',
                            rect: ['1686px', '421px', '215', '80', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -6.2998046875px)'
                        },
                        {
                            id: 'Tool_ayuda',
                            symbolName: 'Tool_ayuda',
                            type: 'rect',
                            rect: ['1686px', '325px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -7.0869140625px)'
                        },
                        {
                            id: 'Tool_full',
                            symbolName: 'Tool_full',
                            type: 'rect',
                            rect: ['1686px', '136px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -153.54296875px)'
                        },
                        {
                            id: 'Tool_info',
                            symbolName: 'Tool_info',
                            type: 'rect',
                            rect: ['1686px', '516px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -80.205078125px)'
                        },
                        {
                            id: 'Tool_accesibilidad',
                            symbolName: 'Tool_accesibilidad',
                            type: 'rect',
                            rect: ['1686px', '612px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -92.8330078125px)'
                        },
                        {
                            id: 'btn_audio',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1793px', '420px', '108', '80', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_full',
                            symbolName: 'btn_full',
                            type: 'rect',
                            rect: ['1793px', '135px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_ayuda',
                            symbolName: 'btn_ayuda',
                            type: 'rect',
                            rect: ['1793px', '324px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_creditos',
                            symbolName: 'btn_creditos',
                            type: 'rect',
                            rect: ['1793px', '226px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_info',
                            symbolName: 'btn_info',
                            type: 'rect',
                            rect: ['1793px', '515px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_accesibilidad',
                            symbolName: 'btn_accesibilidad',
                            type: 'rect',
                            rect: ['1793px', '611px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'ruta',
                            symbolName: 'ruta',
                            type: 'rect',
                            rect: ['1151', '63', '632', '41', 'auto', 'auto']
                        },
                        {
                            id: 'btn_sena',
                            symbolName: 'btn_sena',
                            type: 'rect',
                            rect: ['16', '18', '239', '173', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            symbolName: 'titulo',
                            type: 'rect',
                            rect: ['241', '46', '649', '50', 'auto', 'auto']
                        },
                        {
                            id: 'overlay',
                            symbolName: 'overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            cursor: 'default'
                        },
                        {
                            id: 'btnr_1',
                            symbolName: 'btnr_1',
                            type: 'rect',
                            rect: ['138px', '936px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_2',
                            symbolName: 'btnr_2',
                            type: 'rect',
                            rect: ['649px', '909px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_3',
                            symbolName: 'btnr_3',
                            type: 'rect',
                            rect: ['775px', '895px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_4',
                            symbolName: 'btnr_4',
                            type: 'rect',
                            rect: ['901px', '912px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_5',
                            symbolName: 'btnr_5',
                            type: 'rect',
                            rect: ['1027px', '931px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_6',
                            symbolName: 'btnr_6',
                            type: 'rect',
                            rect: ['1153px', '912px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_7',
                            symbolName: 'btnr_7',
                            type: 'rect',
                            rect: ['1661px', '945px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'tool_empecemos',
                            symbolName: 'tool_empecemos',
                            type: 'rect',
                            rect: ['118', '874px', '143', '53', 'auto', 'auto']
                        },
                        {
                            id: 'toolr_2',
                            symbolName: 'toolr_2',
                            type: 'rect',
                            rect: ['646px', '840px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'toolr_3',
                            symbolName: 'toolr_3',
                            type: 'rect',
                            rect: ['772px', '826px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'toolr_4',
                            symbolName: 'toolr_4',
                            type: 'rect',
                            rect: ['898px', '843px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'toolr_5',
                            symbolName: 'toolr_5',
                            type: 'rect',
                            rect: ['1024px', '862px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'toolr_6',
                            symbolName: 'toolr_6',
                            type: 'rect',
                            rect: ['1150px', '843px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'tool_resultados',
                            symbolName: 'tool_resultados',
                            type: 'rect',
                            rect: ['1640px', '874px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
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
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${container_overlay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${contenedor_portada}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            0,
                            0,
                            "linear",
                            "${overlay}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.4706)']
                        },
                        {
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "container_overlay": {
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
                            rect: [null, null, '1920px', '1080px']
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
            "titulo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '649px', '50px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Titulo',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Evaluación</p>',
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '649px', '50px']
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
            "btn_sena": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'logo_sena',
                            rect: ['0px', '0px', '239px', '173px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo_sena.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '173px']
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
            "ruta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,182,0,1.00)', '500', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Español &gt; Pre A1 Introductorio &gt; Mi contexto</p>',
                            id: 'Ruta',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'right',
                            rect: ['0px', '0px', '632px', '41px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '632px', '41px']
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
            "btn_accesibilidad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "Tool_accesibilidad": {
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
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 107px 80px 0px)',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-86px', '14px', '178px', '53px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 178px 53px 0px)',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['169px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-74px', '14px', '166px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['157px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Información</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-146px', '14px', '238px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Pantalla completa</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['229px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                                align: 'center',
                                rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                align: 'center',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                textStyle: ['', '', '', '', 'none'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                align: 'center',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-32px', '14px', '124px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Créditos</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['115px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "menu_grafico": {
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
                            rect: ['0px', '0px', '107px', '580px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(0,0,0,0.47)'],
                            c: [
                            {
                                rect: ['8px', '486px', '91px', '91px', 'auto', 'auto'],
                                id: 'accesi',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/accesi.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '295px', '91px', '91px', 'auto', 'auto'],
                                id: 'audio',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/audio.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '199px', '91px', '91px', 'auto', 'auto'],
                                id: 'ayuda_2',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/ayuda%20%282%29.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '390px', '91px', '91px', 'auto', 'auto'],
                                id: 'info',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '106px', '91px', '91px', 'auto', 'auto'],
                                id: 'creditos',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/creditos.png', '0px', '0px']
                            },
                            {
                                rect: ['-71px', '-70px', '250px', '250px', 'auto', 'auto'],
                                id: 'Full_screen',
                                transform: [[], [], [], ['0.25', '0.25']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Full%20screen.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '580px']
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
            "btn_menugrafico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '107px', '101px', 'auto', 'auto'],
                            id: 'BTN-tools-ES',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '101px']
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
            "overlay_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '944px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Aqui va el r1</p>',
                            rect: ['522px', '369px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [145, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '944px']
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
            "contenedor_home": {
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
                            id: 'home',
                            symbolName: 'home',
                            cursor: 'pointer',
                            rect: ['0', '0', '1838', '785', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_adelante',
                            symbolName: 'btn_adelante',
                            cursor: 'pointer',
                            rect: ['1567px', '684', '76', '77', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_atras',
                            symbolName: 'btn_atras',
                            cursor: 'pointer',
                            rect: ['1471px', '684', '76', '77', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'btn_enviar',
                            symbolName: 'btn_enviar',
                            cursor: 'pointer',
                            rect: ['1672', '723', '120', '38', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1838px', '785px'],
                            overflow: 'visible'
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
            "back_contenedor_home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.90)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "btnr_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '110px', '110px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'boton',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(232,90,64,1.00)', [50, 23, 'true', 'farthest-corner', [['rgba(79,45,110,1.00)', 26], ['rgba(48,27,67,1.00)', 73]]]]
                            },
                            {
                                type: 'text',
                                rect: ['34px', '39px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'numeros',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​1 - 2</p>',
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', 'nowrap']
                            },
                            {
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250,
                        "morado": 500
                    },
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            250,
                            250,
                            "easeInSine",
                            "${boton}",
                            [50,23,true,'farthest-corner',[['rgba(232,90,64,1.00)',26],['rgba(184,47,22,1.00)',73]]],
                            [50,23,true,'farthest-corner',[['rgba(79,45,110,1.00)',26],['rgba(48,27,67,1.00)',73]]]
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "toolr_2": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_evaluacion',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '127px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid6",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "tool_empecemos": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid35",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid36",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnr_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-13px', '-13px', '130px', '130px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.8', '0.8']],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                id: 'empecemos_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/empecemos_btn2.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid32",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.9',
                            '0.8'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.9',
                            '0.8'
                        ]
                    ]
                }
            },
            "tool_resultados": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['21px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Resultados</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid35",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid36",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnr_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.8', '0.8']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-13px', '-13px', '130px', '130px', 'auto', 'auto'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['-6px', '-6px', '142px', '142px', 'auto', 'auto'],
                                id: 'respuestas-02',
                                transform: [[], [], [], ['0.85', '0.85']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/respuestas-02.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid32",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.9',
                            '0.8'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.8',
                            '0.9'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '0.9',
                            '0.8'
                        ]
                    ]
                }
            },
            "btnr_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '110px', '110px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'boton',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(232,90,64,1.00)', [50, 23, 'true', 'farthest-corner', [['rgba(79,45,110,1.00)', 26], ['rgba(48,27,67,1.00)', 73]]]]
                            },
                            {
                                type: 'text',
                                rect: ['34px', '39px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'numeros',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">3 - 4</p>',
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', 'nowrap']
                            },
                            {
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250,
                        "morado": 500
                    },
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            250,
                            250,
                            "easeInSine",
                            "${boton}",
                            [50,23,true,'farthest-corner',[['rgba(232,90,64,1.00)',26],['rgba(184,47,22,1.00)',73]]],
                            [50,23,true,'farthest-corner',[['rgba(79,45,110,1.00)',26],['rgba(48,27,67,1.00)',73]]]
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "toolr_3": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_evaluacion',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '127px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid6",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "toolr_4": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_evaluacion',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '127px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid6",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "toolr_5": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_evaluacion',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '127px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid6",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "toolr_6": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_evaluacion',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '127px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid7",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid6",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_evaluacion}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "btnr_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '110px', '110px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'boton',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(232,90,64,1.00)', [50, 23, 'true', 'farthest-corner', [['rgba(79,45,110,1.00)', 26], ['rgba(48,27,67,1.00)', 73]]]]
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">5 - 6</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '39px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250,
                        "morado": 500
                    },
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            250,
                            250,
                            "easeInSine",
                            "${boton}",
                            [50,23,true,'farthest-corner',[['rgba(232,90,64,1.00)',26],['rgba(184,47,22,1.00)',73]]],
                            [50,23,true,'farthest-corner',[['rgba(79,45,110,1.00)',26],['rgba(48,27,67,1.00)',73]]]
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '110px', '110px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'boton',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(232,90,64,1.00)', [50, 23, 'true', 'farthest-corner', [['rgba(79,45,110,1.00)', 26], ['rgba(48,27,67,1.00)', 73]]]]
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">7 - 8</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['34px', '39px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250,
                        "morado": 500
                    },
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            250,
                            250,
                            "easeInSine",
                            "${boton}",
                            [50,23,true,'farthest-corner',[['rgba(232,90,64,1.00)',26],['rgba(184,47,22,1.00)',73]]],
                            [50,23,true,'farthest-corner',[['rgba(79,45,110,1.00)',26],['rgba(48,27,67,1.00)',73]]]
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '110px', '110px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'boton',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(232,90,64,1.00)', [50, 23, 'true', 'farthest-corner', [['rgba(79,45,110,1.00)', 26], ['rgba(48,27,67,1.00)', 73]]]]
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">9 - 10</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['27px', '40px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250,
                        "morado": 500
                    },
                    data: [
                        [
                            "eid23",
                            "scaleY",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid42",
                            "background-image",
                            250,
                            250,
                            "easeInSine",
                            "${boton}",
                            [50,23,true,'farthest-corner',[['rgba(232,90,64,1.00)',26],['rgba(184,47,22,1.00)',73]]],
                            [50,23,true,'farthest-corner',[['rgba(79,45,110,1.00)',26],['rgba(48,27,67,1.00)',73]]]
                        ],
                        [
                            "eid21",
                            "scaleX",
                            0,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            250,
                            250,
                            "easeInSine",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "home": {
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
                            rect: ['0px', '0px', '1838px', '785px', 'auto', 'auto'],
                            fill: ['rgba(230,253,200,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "btn_adelante": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '76px', '77px', 'auto', 'auto'],
                            fill: ['rgba(144,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '77px']
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
            "btn_atras": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '76px', '77px', 'auto', 'auto'],
                            fill: ['rgba(144,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '77px']
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
            "btn_enviar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '120px', '38px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '120px', '38px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-9139205");

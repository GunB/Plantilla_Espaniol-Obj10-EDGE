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
            'sena_icon': '<link rel=\"stylesheet\" href=\"font/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.11.3.min.js",
            js+"jquery-migrate-1.2.1.js",
            js+"jquery-ui-1.11.4.custom/jquery-ui.min.js",
            js+"jquery.fullscreen-0.5.0/jquery.fullscreen.min.js",
            js+"jquery.backstretch.min.js",
            js+"jquery.transform/jquery.transform2d.js",
            js+"jquery.transform/jquery.transform3d.js",
            js+"plantilla/actividades_result.js",
            js+"plantilla/utilities.js",
            js+"plantilla/utility.js",
            js+"plantilla/main.js",
            js+"plantilla/plantilla.js",
            js+"EdgeCommons.js",
            js+"SCORM_2004_APIWrapper.js",
            js+"SCORM_HELPER.js",
            js+"zoomUtilities.js"
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
                            overflow: 'hidden',
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
                            id: 'btnr_1',
                            symbolName: 'btnr_1_1',
                            type: 'rect',
                            rect: ['138px', '936px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_2',
                            symbolName: 'btnr_2_1',
                            type: 'rect',
                            rect: ['649px', '909px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_3',
                            symbolName: 'btnr_3_1',
                            type: 'rect',
                            rect: ['775px', '895px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_4',
                            symbolName: 'btnr_4_1',
                            type: 'rect',
                            rect: ['901px', '912px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_5',
                            symbolName: 'btnr_5_1',
                            type: 'rect',
                            rect: ['1025px', '933px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_6',
                            symbolName: 'btnr_6_1',
                            type: 'rect',
                            rect: ['1153px', '912px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_7',
                            symbolName: 'btnr_7_1',
                            type: 'rect',
                            rect: ['1661px', '945px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'toolr_1',
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
                            id: 'toolr_7',
                            symbolName: 'tool_resultados',
                            type: 'rect',
                            rect: ['1640px', '874px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'bannerCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['20px', '20px', '1882px', '114px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banner2.png",'0px','0px'],
                            filter: [1, 0, 2, 0, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
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
                            tag: 'img',
                            rect: ['21px', '55px', '1880px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nivel.png",'0px','0px']
                        },
                        {
                            id: 'contenedor_portada',
                            symbolName: 'contenedor_portada',
                            type: 'rect',
                            rect: ['-2', '136', '1924', '946', 'auto', 'auto']
                        },
                        {
                            id: 'BTN-tools-ES',
                            type: 'image',
                            tag: 'img',
                            rect: ['1793px', '20px', '107px', '101px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"BTN-tools-ES.png",'0px','0px'],
                            filter: [1, 0, 2, 0, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'btn_menugrafico',
                            symbolName: 'btn_menugrafico',
                            type: 'rect',
                            rect: ['1794', '20', '107', '101', 'auto', 'auto'],
                            cursor: 'pointer'
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
                            rect: ['1151px', '63', '632', '41', 'auto', 'auto']
                        },
                        {
                            id: 'btn_sena',
                            symbolName: 'btn_sena',
                            type: 'rect',
                            rect: ['16px', '18', '239', '173', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            symbolName: 'titulo',
                            type: 'rect',
                            rect: ['241', '46', '649', '50', 'auto', 'auto']
                        },
                        {
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'navigate-begin',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1908', '745', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
                        },
                        {
                            id: 'navigate-begin2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['637', '687', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
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
                    duration: 516,
                    autoPlay: true,
                    data: [
                        [
                            "eid388",
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            opacity: '0',
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
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
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
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['107px', '0px', '108px', '80px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​​S</p>',
                            id: 'TextCopy6',
                            textStyle: ['', '', '79px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 250
                    },
                    data: [
                        [
                            "eid43",
                            "display",
                            250,
                            0,
                            "linear",
                            "${AT_CONTRA_on}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${AT_CONTRA_off}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            250,
                            0,
                            "linear",
                            "${AT_CONTRA_off}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "rec_6": {
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
                            id: 'Tool_r6Copy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['14px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'TextCopy7',
                                text: '<p style=\"margin: 0px;\">​Evaluemos</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '204px']
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
                            "eid77",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid78",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_2": {
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
                            opacity: '0',
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['18px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '181px']
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
                            "eid57",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid58",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
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
            "rec_3": {
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
                            id: 'Tool_r6Copy2',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '171px']
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
                            "eid61",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid62",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_4": {
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
                            id: 'Tool_r6Copy5',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy5',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '182px']
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
                            "eid69",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid70",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid71",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_5": {
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
                            id: 'Tool_r6Copy6',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy6',
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '210px']
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
                            "eid75",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid74",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "rec_1": {
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
                            id: 'Tool_r6',
                            opacity: '0',
                            rect: ['7px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                textStyle: ['', '', '24px', '', ''],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '205px']
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
                            "eid45",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid46",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnR_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['31px', '22px', '131px', '131px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(188,24,24,0.68)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '157px', '157px']
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-32px', '14px', '124px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Créditos</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['115px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        },
                        {
                            rect: ['107px', '0px', '108px', '80px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​​Q</p>',
                            id: 'TextCopy7',
                            textStyle: ['', '', '78px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        },
                        {
                            rect: ['107px', '0px', '108px', '80px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​T</p>',
                            id: 'TextCopy5',
                            textStyle: ['', '', '77px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-146px', '14px', '238px', '53px', 'auto', 'auto'],
                            opacity: '0',
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
                        },
                        {
                            rect: ['107px', '-1px', '108px', '81px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​​P</p>',
                            id: 'TextCopy4',
                            textStyle: ['', '', '69px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-74px', '14px', '166px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['157px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Información</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['107px', '-2px', '108px', '81px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​​U</p>',
                            id: 'TextCopy3',
                            textStyle: ['', '', '87px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            clip: 'rect(0px 107px 80px 0px)',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-86px', '14px', '178px', '53px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 178px 53px 0px)',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['169px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['107px', '-1px', '108px', '81px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,0,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​​R</p>',
                            id: 'TextCopy2',
                            textStyle: ['', '', '87px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
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
            "punto_A": {
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
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '50px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['14px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Punto de</p><p style=\"margin: 0px;\">​aprendizaje</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '160px']
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
                            "eid207",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid208",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "vocabulario": {
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
                            rect: ['0px', '0px', '134px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['57px', '25px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '24px', '', ''],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">Vocabulario</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '135px']
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
                            "eid211",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid212",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid213",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
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
            "rec_7": {
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
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '135px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['58px', '68px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['9px', '13px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Aprendamos</p><p style=\"margin: 0px;\">​en papel</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '185px']
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
                            "eid260",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid261",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid262",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
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
                            rect: ['0px', '0', '1838', '785', 'auto', 'auto'],
                            id: 'home',
                            symbolName: 'home',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            id: 'btn_atras',
                            symbolName: 'Atras',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            id: 'btn_adelante',
                            symbolName: 'btn_adelante',
                            type: 'rect'
                        },
                        {
                            rect: ['1656', '691', '158', '28', 'auto', 'auto'],
                            id: 'btn_enviar',
                            symbolName: 'btn_enviar',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
                        }
                    }
                },
                timeline: {
                    duration: 516,
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
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.40)']
                        },
                        {
                            type: 'rect',
                            id: 'back_container',
                            symbolName: 'back_container',
                            rect: ['0px', '0', '1838', '785', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
                        }
                    }
                },
                timeline: {
                    duration: 516,
                    autoPlay: true,
                    data: [
                        [
                            "eid409",
                            "left",
                            0,
                            250,
                            "linear",
                            "${back_container}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid410",
                            "left",
                            250,
                            0,
                            "linear",
                            "${back_container}",
                            '-1830px',
                            '-1830px'
                        ],
                        [
                            "eid404",
                            "left",
                            266,
                            250,
                            "linear",
                            "${back_container}",
                            '1830px',
                            '0px'
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
                                rect: ['0px', '0px', '106px', '579px', 'auto', 'auto'],
                                font: ['sena_icon', [68, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​P</p><p style=\"margin: 0px;\">​Q</p><p style=\"margin: 0px;\">​T</p><p style=\"margin: 0px;\">​S</p><p style=\"margin: 0px;\">​U</p><p style=\"margin: 0px;\">​R</p>',
                                id: 'Text',
                                textStyle: ['', '', '97px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            transform: [[], ['50'], [0, 0, 0], [1, 1, 1]],
                            borderRadius: ['3px', '3px', '3px', '3px 3px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['48px', '305px', '6px', '72px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '580px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "audio": 250
                    },
                    data: [
                        [
                            "eid436",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ]
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
                            type: 'image',
                            id: 'BTN-tools-ES',
                            rect: ['0px', '0px', '107px', '101px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        },
                        {
                            rect: ['23px', '44px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['46px', '44px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['68px', '44px', '18px', '18px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
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
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Titulo',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">&nbsp;<span style=\"font-size: 41px;\">Empecemos</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;&nbsp;</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">las letras</span></p>',
                            rect: ['0px', '0px', '649px', '50px', 'auto', 'auto']
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
            "btn_PA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            id: 'btn_puntoaprendizajeCopy',
                            transform: [[], [], [], ['0.4', '0.4']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_puntoaprendizaje.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            font: ['sena_icon', [65, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​I</p>',
                            id: 'Text9',
                            textStyle: ['', '', '89px', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
            "btn_VC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'btn_vocabularioCopy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_vocabulario.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '90px', '94px', 'auto', 'auto'],
                            font: ['sena_icon', [79, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​J</p>',
                            id: 'Text10',
                            textStyle: ['', '', '93px', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'evaluacion_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/evaluacion_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '130px', '130px', 'auto', 'auto'],
                                font: ['sena_icon', [100, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​H</p>',
                                id: 'Text7',
                                textStyle: ['', '', '131px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
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
                            "eid318",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid319",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid416",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid316",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid317",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
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
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'r5_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r5_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '129px', '137px', 'auto', 'auto'],
                                font: ['sena_icon', [90, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​F</p>',
                                id: 'Text6',
                                textStyle: ['', '', '137px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
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
                            "eid369",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid370",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid415",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid367",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid368",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
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
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'r4_btn',
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r4_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '111px', '113px', 'auto', 'auto'],
                                font: ['sena_icon', [75, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​E</p>',
                                id: 'Text5',
                                textStyle: ['', '', '114px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
                            "eid359",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid360",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid414",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid357",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
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
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'r3_btn',
                                rect: ['5px', '5px', '90px', '90px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r3_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '100px', '103px', 'auto', 'auto'],
                                font: ['sena_icon', [72, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​D</p>',
                                id: 'Text4',
                                textStyle: ['', '', '100px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
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
                            "eid349",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid350",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid413",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid347",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid348",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
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
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'exploremos_btn',
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/exploremos_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '110px', '112px', 'auto', 'auto'],
                                font: ['sena_icon', [80, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​C</p>',
                                id: 'Text3',
                                textStyle: ['', '', '112px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
                            "eid339",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid340",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid412",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid337",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid338",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
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
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                id: 'empecemos_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/empecemos_btn.png', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '-1px', '130px', '133px', 'auto', 'auto'],
                                font: ['sena_icon', [100, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​B</p>',
                                id: 'Text2',
                                textStyle: ['', '', '132px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
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
                            "eid329",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid330",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid411",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid327",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid328",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
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
                            type: 'ellipse',
                            rect: ['12px', '12px', '84px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            fill: ['rgba(205,205,205,1.00)'],
                            c: [
                            {
                                id: 'pdf_btn2Copy',
                                rect: ['4px', '4px', '76px', '76px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pdf_btn2.png', '0px', '0px']
                            },
                            {
                                rect: ['-13px', '-13px', '110px', '110px', 'auto', 'auto'],
                                font: ['sena_icon', [60, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                text: '<p style=\"margin: 0px;\">​G</p>',
                                id: 'Text8',
                                textStyle: ['', '', '110px', '', 'none'],
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
                            "eid305",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid309",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid417",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid304",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid308",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
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
                            tag: 'img',
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
                            align: 'right',
                            id: 'Ruta',
                            text: '<p style=\"margin: 0px;\">​Español &gt; Pre A1 Introductorio &gt; Mi contexto</p>',
                            textStyle: ['', '', '', '', 'none'],
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
            "container": {
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
            "back_container": {
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
                            fill: ['rgba(255,255,255,0.70)']
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
            "contenedor_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1924px', '946px', 'auto', 'auto'],
                            opacity: '0.9',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1924px', '946px']
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Resultados</p>',
                                rect: ['21px', '11px', 'auto', 'auto', 'auto', 'auto']
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto']
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                textStyle: ['', '', '24px', '', ''],
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                textStyle: ['', '', '24px', '', ''],
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                textStyle: ['', '', '24px', '', ''],
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
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Preguntas</p>',
                                rect: ['17px', '11px', 'auto', 'auto', 'auto', 'auto']
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
                            overflow: 'hidden',
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
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
            "btnr_7_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-14px', '-14px', '130px', '130px', 'auto', 'auto'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                transform: [[], [], [], ['0.85', '0.85']],
                                id: 'respuestas-02',
                                type: 'image',
                                rect: ['-6px', '-6px', '142px', '142px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/respuestas-02.png', '0px', '0px']
                            },
                            {
                                font: ['sena_icon', [83, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy2',
                                text: '<p style=\"margin: 0px;\">​K</p>',
                                textStyle: ['', '', '127px', '1px', 'none'],
                                rect: ['0px', '0px', '130px', '130px', 'auto', 'auto']
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
                            "eid47",
                            "color",
                            0,
                            0,
                            "linear",
                            "${Text2Copy2}",
                            'rgba(255,182,0,0.00)',
                            'rgba(255,182,0,0.00)'
                        ],
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
            "btnr_6_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-1px', '-1px', '120px', '120px', 'auto', 'auto'],
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
                                rect: ['17px', '16px', '79px', '79px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'aro',
                                stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,0.00)']
                            },
                            {
                                rect: ['81px', '90px', '10px', '5px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'cola',
                                stroke: [3, 'rgb(255, 255, 255)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                font: ['source-code-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                textStyle: ['', '', '120px', '', 'none'],
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">9-10</p>',
                                align: 'center',
                                rect: ['0px', '0px', '120px', '120px', 'auto', 'auto']
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
            "btnr_5_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-1px', '-1px', '120px', '120px', 'auto', 'auto'],
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
                            },
                            {
                                font: ['source-code-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">7-8</p>',
                                textStyle: ['', '', '120px', '', 'none'],
                                rect: ['0px', '0px', '120px', '120px', 'auto', 'auto']
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
            "btnr_4_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-1px', '-1px', '120px', '120px', 'auto', 'auto'],
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
                            },
                            {
                                font: ['source-code-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">5-6</p>',
                                textStyle: ['', '', '120px', '', 'none'],
                                rect: ['0px', '0px', '120px', '120px', 'auto', 'auto']
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
            "btnr_3_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-1px', '-1px', '120px', '120px', 'auto', 'auto'],
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
                            },
                            {
                                font: ['source-code-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">3-4</p>',
                                textStyle: ['', '', '120px', '', 'none'],
                                rect: ['0px', '0px', '120px', '120px', 'auto', 'auto']
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
            "btnr_2_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-2px', '-1px', '120px', '120px', 'auto', 'auto'],
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
                            },
                            {
                                type: 'text',
                                id: 'numeros',
                                text: '<p style=\"margin: 0px;\">​1-2</p>',
                                font: ['source-code-pro, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'normal', 'break-word', ''],
                                rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                                textStyle: ['', '', '120px', '', 'none'],
                                align: 'center',
                                tag: 'p'
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
            "btnr_1_1": {
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
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['-14px', '-14px', '130px', '130px', 'auto', 'auto'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'empecemos_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/empecemos_btn2.png', '0px', '0px']
                            },
                            {
                                font: ['sena_icon', [97, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy',
                                text: '<p style=\"margin: 0px;\">​B</p>',
                                textStyle: ['', '', '129px', '2px', 'none'],
                                rect: ['-1px', '1px', '131px', '130px', 'auto', 'auto']
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
                            rect: ['-1830px', '0px', '1838', '785', 'auto', 'auto'],
                            id: 'container',
                            symbolName: 'container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
                        }
                    }
                },
                timeline: {
                    duration: 516,
                    autoPlay: true,
                    data: [
                        [
                            "eid395",
                            "left",
                            0,
                            250,
                            "linear",
                            "${container}",
                            '0px',
                            '1878px'
                        ],
                        [
                            "eid400",
                            "left",
                            266,
                            250,
                            "linear",
                            "${container}",
                            '-1830px',
                            '0px'
                        ]
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
                            rect: ['0px', '0px', '158px', '28px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '158px', '28px']
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
            "Atras": {
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
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            rect: ['1482px', '691px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
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
                            type: 'text',
                            rect: ['1540px', '691px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​B</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
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
})("EDGE-7659645");

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
            js+"main.js",
            js+"bootstrap-select.js",
            js+"bootstrap.min.js"
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
                            rect: ['0px', '271px', '1830px', '510px', 'auto', 'auto'],
                            fill: ["rgba(38,38,224,0)"],
                            stroke: [2,"rgb(79, 45, 110)","none"],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['291px', '9px', '444px', '66px', 'auto', 'auto'],
                                borderRadius: ["5px", "5px", "5px", "5px 5px"],
                                fill: ["rgba(38,38,224,0.00)"],
                                stroke: [2,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'RoundRect3',
                                type: 'rect',
                                rect: ['291px', '113px', '444px', '66px', 'auto', 'auto'],
                                borderRadius: ["5px", "5px", "5px", "5px 5px"],
                                fill: ["rgba(38,38,224,0.00)"],
                                stroke: [2,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'RoundRect3Copy2',
                                type: 'rect',
                                rect: ['1223px', '113px', '444px', '66px', 'auto', 'auto'],
                                borderRadius: ["5px", "5px", "5px", "5px 5px"],
                                fill: ["rgba(38,38,224,0.00)"],
                                stroke: [2,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'texto_2',
                                type: 'text',
                                rect: ['103px', '22px', '167px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Nosotros</p>",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'texto_3',
                                type: 'text',
                                rect: ['943px', '27px', '229px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Yo</p><p style=\"margin: 0px;\">​</p>",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'texto_4',
                                type: 'text',
                                rect: ['956px', '129px', '217px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​El</p><p style=\"margin: 0px;\">​</p>",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'texto_5',
                                type: 'text',
                                rect: ['103px', '125px', '166px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Ellas​</p>",
                                align: "right",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'text_3',
                                symbolName: 'text_3',
                                type: 'rect',
                                rect: ['70px', '95px', '1010', '170', 'auto', 'auto'],
                                transform: [[],[],[],['0.55','0.65214']]
                            },
                            {
                                id: 'text_1',
                                symbolName: 'text_1',
                                type: 'rect',
                                rect: ['71px', '-12px', '1010', '170', 'auto', 'auto'],
                                transform: [[],[],[],['0.55','0.65214']]
                            },
                            {
                                id: 'text_5',
                                symbolName: 'text_5',
                                type: 'rect',
                                rect: ['1004px', '93px', 'undefined', 'undefined', 'auto', 'auto'],
                                transform: [[],[],[],['0.55','0.65']]
                            },
                            {
                                id: 'RoundRect2',
                                type: 'rect',
                                rect: ['1223px', '11px', '444px', '66px', 'auto', 'auto'],
                                borderRadius: ["5px", "5px", "5px", "5px 5px"],
                                fill: ["rgba(38,38,224,0.00)"],
                                stroke: [2,"rgba(79,45,110,1.00)","solid"]
                            },
                            {
                                id: 'text_2',
                                symbolName: 'text_2',
                                type: 'rect',
                                rect: ['1003px', '-10px', '1010', '170', 'auto', 'auto'],
                                transform: [[],[],[],['0.55','0.65214']]
                            }]
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['102px', '76px', '1658px', '160px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"color: rgb(106, 55, 137); font-family: sena_icon; font-size: 30px;\">Z</span><span style=\"font-size: 30px;\">&nbsp;</span>La nacionalidad</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\">4&nbsp;</span>Relacione las columnas para formar enunciados.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-weight: 900; color: rgb(106, 55, 137); font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\">​</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">Instrucción:&nbsp;</span>seleccione cada palabra de la columna izquierda y conéctela con una palabra de la columna derecha.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(51, 51, 51); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(51,51,51,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "40px", "", "none"]
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
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_1": {
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
                            rect: [null, null, '1010px', '170px']
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
            "text_2": {
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
                            rect: [null, null, '1010px', '170px']
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
            "text_3": {
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
                            rect: [null, null, '1010px', '170px']
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
            "text_4": {
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
                            rect: [null, null, '1010px', '170px']
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
            "text_5": {
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
                            rect: [null, null, '1010px', '170px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le02ob10pre4_edgeActions.js");
})("EDGE-14164065");

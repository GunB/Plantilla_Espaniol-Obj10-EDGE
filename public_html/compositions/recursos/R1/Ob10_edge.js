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
            js + "jquery-1.11.3.min.js"
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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '944px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Fondo',
                                type: 'rect',
                                rect: ['20px', '690px', '1877px', '233px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(12,100,86,1.00)",[270,[['rgba(96,74,123,1.00)',0],['rgba(96,74,123,1.00)',100]]]],
                                stroke: [1,"rgba(0,0,0,0.00)","dashed"]
                            },
                            {
                                id: 'funcioncomunicativa',
                                symbolName: 'funcioncomunicativa',
                                type: 'rect',
                                rect: ['46', '704px', '652', '163', 'auto', 'auto']
                            },
                            {
                                id: 'discuta',
                                symbolName: 'discuta',
                                type: 'rect',
                                rect: ['725px', '704px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'Cuadro_texto',
                                type: 'rect',
                                rect: ['43px', '134px', '1294px', '449px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,0.75)"],
                                stroke: [7,"rgba(96,74,123,1.00)","solid"],
                                c: [
                                {
                                    id: 'Text4',
                                    type: 'text',
                                    rect: ['75px', '68px', '1212px', '43px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 500; font-size: 30px;\">Reconocer la grafía del español para dar ejemplos de léxico que se pueda asociar con cada letra.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 30px;\">​Deletrear nombres, topónimos  y otras palabras de su contexto inmediato usando el alfabeto en español.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 30px;\">Identificar la clasificación de las entidades del mundo en español con las que tiene contacto cotidianamente.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 30px;\">​Distinguir los sonidos del español en consonantes y vocales en conformidad con la fonología del español.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 30px;\">​Referir a las entidades del mundo adecuadamente y en conformidad con su condición de definidas.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 500; font-size: 30px;\">​Referir las entidades del mundo adecuadamente y en conformidad con su condición de indefinidas.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 18px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 18px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 18px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 18px;\">&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 18px;\">​</span></p><p style=\"margin: 0px;\"><br></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(96,74,123,1.00)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "30px", "", "none"]
                                }]
                            },
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['105px', '219px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['105px', '322px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            },
                            {
                                id: 'EllipseCopy2',
                                type: 'ellipse',
                                rect: ['105px', '252px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            },
                            {
                                id: 'EllipseCopy4',
                                type: 'ellipse',
                                rect: ['105px', '388px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            },
                            {
                                id: 'EllipseCopy5',
                                type: 'ellipse',
                                rect: ['105px', '456px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            },
                            {
                                id: 'EllipseCopy6',
                                type: 'ellipse',
                                rect: ['105px', '523px', '7px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(21,20,20,0.75)"],
                                stroke: [0,"rgb(96, 74, 123)","solid"]
                            }]
                        },
                        {
                            id: 'btnr1_exploremosCopy',
                            symbolName: 'btnr1_exploremos_1',
                            type: 'rect',
                            rect: ['1417', '769', '447', '95', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['82px', '154px', '837px', '29px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 30px;\">Este test evalúa lo que usted ha aprendido en esta lección.&nbsp;</span></p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(96,74,123,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "funcioncomunicativa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                type: 'rect',
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                rect: ['39px', '3px', '366px', '38px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\'margin: 0px;\'>&#8203</p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['20px', '66px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativa',
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['20px', '139px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativaCopy',
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['40px', '57px', '612px', '106px', 'auto', 'auto'],
                            textStyle: ['', '', '34px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Texto_Funcion_Comunicativa',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(245, 244, 239); font-size: 25px;\">Use los íconos que se encuentran en la parte inferior de la pantalla para navegar a través de la evaluación.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['40px', '131px', '612px', '38px', 'auto', 'auto'],
                            textStyle: ['', '', '34px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Texto_Funcion_ComunicativaCopy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 25px; color: rgb(247, 244, 237);\">Cuando termine, haga clic en </span><span style=\"font-size: 25px; color: rgb(244, 244, 243);\">enviar</span><span style=\"font-size: 25px;\"> </span><span style=\"font-size: 25px; color: rgb(247, 244, 237);\">para ver sus resultados.</span></p><p style=\"margin: 0px;\">​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['39px', '2px', '584px', '38px', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Instrucciones:</span></p>',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '652px', '163px']
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
            "discuta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                type: 'rect',
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                rect: ['39px', '2px', '584px', '38px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">¡Importante!</span></p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['18px', '66px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativa',
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['18px', '141px', '10px', '17px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta2_funcion_comunicativa',
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['45px', '57px', '607px', '106px', 'auto', 'auto'],
                            textStyle: ['', '', '34px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Texto_Funcion_Comunicativa',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 25px; color: rgb(251, 247, 237);\">Para terminar la evaluación es necesario que responda todas las preguntas.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 25px; color: rgb(251, 247, 237);\">​</span><span style=\"font-size: 25px; color: rgb(249, 246, 238);\">Después de hacer clic en enviar, no podrá hacer ningún cambio.&nbsp;</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '652px', '163px']
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
            "btnr1_exploremos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [7, 'rgb(96, 74, 123)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            id: 'BTN_animado',
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN_R1_Explore-29.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            textStyle: ['', '', '50px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btnr1_exploremos_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgba(49,28,69,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            rect: ['7px', '9px', '79px', '79px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [1, 'rgb(49, 28, 69)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.749)']
                        },
                        {
                            id: 'BTN_animado',
                            type: 'image',
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Props_Espa%C3%B1ol_evaluemos%20amarillo.png', '0px', '0px']
                        },
                        {
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto'],
                            textStyle: ['', '', '50px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Iniciar</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Ob10_edgeActions.js");
})("EDGE-16656972");

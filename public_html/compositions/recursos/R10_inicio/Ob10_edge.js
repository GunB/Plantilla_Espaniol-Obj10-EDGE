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
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
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
                            rect: ['0px', '-12px', '1920px', '944px', 'auto', 'auto'],
                            overflow: 'visible',
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
                                rect: ['46', '704px', '652', '163', 'auto', 'auto'],
                                clip: 'rect(0px 652px 196.695556640625px 0px)'
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
                                rect: ['41px', '134px', '1229px', '503px', 'auto', 'auto'],
                                overflow: 'visible',
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,0.75)"],
                                stroke: [7,"rgba(96,74,123,1.00)","solid"]
                            },
                            {
                                id: 'texto_1',
                                type: 'text',
                                rect: ['70px', '163px', '1189px', '472px', 'auto', 'auto'],
                                overflow: 'visible',
                                text: "<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(96, 74, 123); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Este test evalúa lo que usted ha aprendido en esta lección. ​</p><p style=\"margin: 0px; line-height: 19px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; line-height: 19px;\"><span style=\"font-size: 28px;\">Describir paisajes con los que tiene contacto. </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Describir su contexto familiar, conoce las palabras relacionadas con el parentesco.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Referir todo lo que le rodea con palabras con las que especifica la relación espacial de cercanía o lejanía con aquello que señala.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Reconocer la adecuada pronunciación de las consonantes del español.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Hablar sobre el origen propio, de otros y reconoce la diversidad de naciones, regiones, ciudades y culturas que existen en el mundo.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Describir los rasgos físicos distintivos de sí mismo y de las personas que lo rodean.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Describir la forma de los objetos en conformidad con las palabras que se usan en español con ese fin.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Describir el color de los objetos en español.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 28px;\">Nombrar su ocupación y la de otros dentro de una comunidad.</span></p><p style=\"margin: 0px; line-height: 19px;\"><span style=\"font-size: 30px;\"></span></p><p style=\"margin: 0px; line-height: 19px;\"><span style=\"font-size: 30px;\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [20, "px"], "rgba(96,74,123,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'btnr1_exploremosCopy',
                                symbolName: 'btnr1_exploremos_1',
                                type: 'rect',
                                rect: ['1417', '781px', '447', '95', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
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
                            rect: ['40px', '57px', '612px', '137px', 'auto', 'auto'],
                            textStyle: ['', '', '26px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px; line-height: 23px;\">​<span style=\"font-family: sena_icon;\">Z&nbsp;</span><span style=\"color: rgb(255, 255, 255);\">Use los íconos que se encuentran en la parte inferior de la pantalla para navegar a través de la evaluación.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\"> </span><span style=\"font-family: sena_icon; font-weight: 400; font-style: normal; text-decoration: none; color: rgb(253, 191, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; color: rgb(253, 191, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"color: rgb(255, 255, 255);\">Cuando termine, haga clic en enviar para ver sus resultados.</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 25px; color: rgb(247, 244, 237); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 23px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 25px; color: rgb(247, 244, 237); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\"></span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['39px', '2px', '612px', '38px', 'auto', 'auto'],
                            id: 'texto_2',
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
                                rect: ['39px', '-2px', '612px', '38px', 'auto', 'auto'],
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">¡Importante!</span></p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['45px', '57px', '607px', '106px', 'auto', 'auto'],
                            textStyle: ['', '', '26px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_6',
                            text: '<p style=\"margin: 0px; line-height: 25px;\">​<span style=\"font-family: sena_icon;\">Z</span>&nbsp;<span style=\"font-size: 25px; color: rgb(251, 247, 237);\">Para terminar la evaluación es necesario que responda todas las preguntas.</span></p><p style=\"margin: 0px; line-height: 25px;\"><span style=\"font-size: 25px; color: rgb(251, 247, 237);\">​</span><span style=\"font-size: 25px; font-family: sena_icon;\">Z</span><span style=\"font-size: 25px; color: rgb(251, 247, 237);\">&nbsp;</span><span style=\"font-size: 25px; color: rgb(249, 246, 238);\">Después de hacer clic en enviar, no podrá hacer ningún cambio.&nbsp;</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span></p>',
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
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            id: 'Text3',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            type: 'text'
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
                            stroke: [1, 'rgb(96, 74, 123)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            rect: ['5px', '0px', '84px', '95px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'BTN_animado',
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Props_Espa%C3%B1ol_evaluemos%20amarillo.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '50px', '', 'none'],
                            id: 'texto_6',
                            text: '<p style=\"margin: 0px;\">​Iniciar</p>',
                            align: 'center',
                            rect: ['103px', '20px', '316px', '50px', 'auto', 'auto']
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

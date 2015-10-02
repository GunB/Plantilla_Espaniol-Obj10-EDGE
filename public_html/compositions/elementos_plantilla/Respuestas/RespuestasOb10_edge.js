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
            js+"respuestas.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'respuesta_1',
                            symbolName: 'respuesta_1',
                            type: 'rect',
                            rect: ['1830px', '0', '1830px', '780', 'auto', 'auto']
                        },
                        {
                            id: 'respuesta_2',
                            symbolName: 'respuesta_2',
                            type: 'rect',
                            rect: ['1830px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'respuesta_3',
                            symbolName: 'respuesta_3',
                            type: 'rect',
                            rect: ['-1830px', '0px', 'undefined', 'undefined', 'auto', 'auto']
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
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "complete": 0,
                        "confirmacion": 500,
                        "finale": 1000
                    },
                    data: [
                        [
                            "eid14",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${respuesta_3}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "left",
                            1250,
                            250,
                            "linear",
                            "${respuesta_3}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid9",
                            "left",
                            500,
                            250,
                            "linear",
                            "${respuesta_2}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            750,
                            250,
                            "linear",
                            "${respuesta_2}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid4",
                            "left",
                            0,
                            250,
                            "linear",
                            "${respuesta_1}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "left",
                            250,
                            250,
                            "linear",
                            "${respuesta_1}",
                            '0px',
                            '-1830px'
                        ]
                    ]
                }
            },
            "respuesta_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '179px', '1830px', '108px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(51,51,51,1.00)', '900', 'none', '', 'break-word', ''],
                            text: '<p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Complete la evaluación y así podra enviar sus respuestas.</p>',
                            id: 'Text',
                            textStyle: ['', '', '0px', '', ''],
                            align: 'center',
                            type: 'text'
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
            "respuesta_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(51,51,51,1.00)', '900', 'none', '', 'break-word', ''],
                            type: 'text',
                            textStyle: ['', '', '30px', '', ''],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​Por favor haga clic en el botón enviar para ver sus resultados.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Usted no podrá modificarlos una vez haya realizado este paso.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​<span style=\"font-style: italic; font-weight: 400;\">Gracias por su participacion</span></p><p style=\"margin: 0px;\">​</p>',
                            align: 'center',
                            rect: ['0px', '179px', '1830px', '182px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'Submit',
                            symbolName: 'Submit',
                            cursor: 'pointer',
                            rect: ['808px', '395px', '213', '43', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "respuesta_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '179px', '1830px', '73px', 'auto', 'auto'],
                            textStyle: ['', '', '30px', '', ''],
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(79,45,110,1.00)', '900', 'none', '', 'break-word', ''],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​Resultado:</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            id: 'medidor-01',
                            type: 'image',
                            rect: ['628px', '268px', '574px', '291px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/medidor-01.png', '0px', '0px']
                        },
                        {
                            id: 'indicador',
                            symbolName: 'indicador',
                            rect: ['713', '521', '202', '38', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['870px', '495px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'texto_porcentaje',
                            symbolName: 'texto_porcentaje',
                            rect: ['869', '523', '91', '33', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '91px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid148",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid149",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid150",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid151",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid152",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${indicador}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "indicador": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '202px', '38px', 'auto', 'auto'],
                            id: 'medidor-02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/medidor-02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '202px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "rotateZ",
                            0,
                            5000,
                            "linear",
                            "${medidor-02}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid22",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid153",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid154",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid155",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid156",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid157",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${medidor-02}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '1px', '213px', '43px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '-1px', '213px', '31px', 'auto', 'auto'],
                                id: 'texto_4',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "desactivado": 0,
                        "activado": 2000
                    },
                    data: [
                        [
                            "eid356",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid355",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "text_percent": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">100%</p>',
                            rect: ['0px', '0px', '91px', '33px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '33px']
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
            "text_percent_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">100%</p>',
                            rect: ['0px', '0px', '91px', '33px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '91px', '33px']
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
            "texto_porcentaje": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '91px', '33px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">100%</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '91px', '33px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("RespuestasOb10_edgeActions.js");
})("EDGE-22315124");

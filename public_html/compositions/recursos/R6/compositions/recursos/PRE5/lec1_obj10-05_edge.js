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
            js+"utility.js"
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
                            rect: ['168px', '121px', '754px', '41px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; font-size: 30px;\"></span>Seleccione cuáles de las siguientes palabras son femeninas.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "29px", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['137px', '55px', '1589px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: seleccione las respuestas correctas.<span style=\"font-size: 30px;\"></span></p>",
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
                            text: "<p style=\"margin: 0px;\">​5</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(106,55,137,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['293px', '195px', '15', '15', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['293px', '232px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['293px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['293px', '305px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_5',
                            symbolName: 'PICK_5',
                            type: 'rect',
                            rect: ['293px', '342px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text2Copy4',
                            type: 'text',
                            rect: ['323px', '185px', '441px', '182px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​pocillo</p><p style=\"margin: 0px;\">​vaso</p><p style=\"margin: 0px;\">​nevera</p><p style=\"margin: 0px;\">​inodoro</p><p style=\"margin: 0px;\">​silla</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "36px", "", "none"]
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
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
                            rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 6, 0, 'rgba(106,55,137,0.84)']
                        },
                        {
                            rect: ['3px', '1px', '10px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(106,55,137,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text3Copy4',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​✔</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '15px']
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
                            "eid178",
                            "border-top-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid174",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.65098)',
                            'rgba(0,0,0,0.65098)'
                        ],
                        [
                            "eid113",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.651)',
                            'rgba(106,55,137,0.84)'
                        ],
                        [
                            "eid108",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid114",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid176",
                            "border-bottom-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid177",
                            "border-top-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid179",
                            "border-bottom-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 6, 0, 'rgba(106,55,137,0.84)']
                        },
                        {
                            rect: ['3px', '1px', '10px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(106,55,137,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text3Copy3',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​✔</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '15px']
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
                            "eid170",
                            "border-top-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid169",
                            "border-top-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.65098)',
                            'rgba(0,0,0,0.65098)'
                        ],
                        [
                            "eid113",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.651)',
                            'rgba(106,55,137,0.84)'
                        ],
                        [
                            "eid172",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "border-bottom-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid108",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid114",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid171",
                            "border-bottom-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 6, 0, 'rgba(106,55,137,0.84)']
                        },
                        {
                            rect: ['3px', '1px', '10px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(106,55,137,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text3',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​✔</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '15px']
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
                            "eid143",
                            "border-top-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid144",
                            "border-bottom-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.65098)',
                            'rgba(0,0,0,0.65098)'
                        ],
                        [
                            "eid113",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.651)',
                            'rgba(106,55,137,0.84)'
                        ],
                        [
                            "eid108",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid114",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid141",
                            "border-bottom-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "border-top-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 6, 0, 'rgba(106,55,137,0.84)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            opacity: '0',
                            rect: ['4px', '4px', '7px', '7px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [0, 'rgb(164, 160, 161)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            rect: ['3px', '1px', '10px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(106,55,137,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text3Copy',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​✔</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '15px']
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
                            "eid156",
                            "border-top-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid155",
                            "border-top-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.65098)',
                            'rgba(0,0,0,0.65098)'
                        ],
                        [
                            "eid113",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.651)',
                            'rgba(106,55,137,0.84)'
                        ],
                        [
                            "eid108",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid114",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid160",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid154",
                            "border-bottom-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid157",
                            "border-bottom-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            rect: ['0px', '0px', '11px', '11px', 'auto', 'auto'],
                            borderRadius: ['0%', '0%', '0%', '0% 0%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 6, 0, 'rgba(106,55,137,0.84)']
                        },
                        {
                            rect: ['3px', '1px', '10px', '14px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [10, 'px'], 'rgba(106,55,137,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text3Copy2',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​✔</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '15px']
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
                            "eid164",
                            "border-top-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid163",
                            "border-top-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid107",
                            "boxShadow.color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.65098)',
                            'rgba(0,0,0,0.65098)'
                        ],
                        [
                            "eid113",
                            "boxShadow.color",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,0.651)',
                            'rgba(106,55,137,0.84)'
                        ],
                        [
                            "eid108",
                            "boxShadow.blur",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid114",
                            "boxShadow.blur",
                            250,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "border-bottom-left-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid165",
                            "border-bottom-right-radius",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
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
                            id: 'BTN-tools-ES',
                            type: 'image',
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lec1_obj10-05_edgeActions.js");
})("EDGE-17298671");

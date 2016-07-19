!function(t) {
    "use strict";
    t.extend(t.fn.bootstrapTable.defaults, {
        editable: !0,
        onEditableInit: function() {
            return !1
        },
        onEditableSave: function(t, e, a, i) {
            return !1
        },
        onEditableShown: function(t, e, a, i) {
            return !1
        },
        onEditableHidden: function(t, e, a, i) {
            return !1
        }
    }),
    t.extend(t.fn.bootstrapTable.Constructor.EVENTS, {
        "editable-init.bs.table": "onEditableInit",
        "editable-save.bs.table": "onEditableSave",
        "editable-shown.bs.table": "onEditableShown",
        "editable-hidden.bs.table": "onEditableHidden"
    });
    var e = t.fn.bootstrapTable.Constructor
      , a = e.prototype.initTable
      , i = e.prototype.initBody;
    e.prototype.initTable = function() {
        var e = this;
        a.apply(this, Array.prototype.slice.apply(arguments)),
        this.options.editable && t.each(this.columns, function(a, i) {
            if (i.editable) {
                var n = {}
                  , d = []
                  , o = "editable-"
                  , r = function(t, e) {
                    var a = t.replace(/([A-Z])/g, function(t) {
                        return "-" + t.toLowerCase()
                    });
                    if (a.slice(0, o.length) == o) {
                        var i = a.replace(o, "data-");
                        n[i] = e
                    }
                }
                ;
                t.each(e.options, r);
                var l = i.formatter;
                i.formatter = function(a, o, s) {
                    var b = l ? l(a, o, s) : a;
                    return t.each(i, r),
                    t.each(n, function(t, e) {
                        d.push(" " + t + '="' + e + '"')
                    }),
                    ['<a href="javascript:void(0)"', ' data-name="' + i.field + '"', ' data-pk="' + o[e.options.idField] + '"', ' data-value="' + b + '"', d.join(""), "></a>"].join("")
                }
            }
        })
    }
    ,
    e.prototype.initBody = function() {
        var e = this;
        i.apply(this, Array.prototype.slice.apply(arguments)),
        this.options.editable && (t.each(this.columns, function(a, i) {
            i.editable && (e.$body.find('a[data-name="' + i.field + '"]').editable(i.editable).off("save").on("save", function(a, n) {
                var d = e.getData()
                  , o = t(this).parents("tr[data-index]").data("index")
                  , r = d[o]
                  , l = r[i.field];
                t(this).data("value", n.submitValue),
                r[i.field] = n.submitValue,
                e.trigger("editable-save", i.field, r, l, t(this))
            }),
            e.$body.find('a[data-name="' + i.field + '"]').editable(i.editable).off("shown").on("shown", function(a, n) {
                var d = e.getData()
                  , o = t(this).parents("tr[data-index]").data("index")
                  , r = d[o];
                e.trigger("editable-shown", i.field, r, t(this), n)
            }),
            e.$body.find('a[data-name="' + i.field + '"]').editable(i.editable).off("hidden").on("hidden", function(a, n) {
                var d = e.getData()
                  , o = t(this).parents("tr[data-index]").data("index")
                  , r = d[o];
                e.trigger("editable-hidden", i.field, r, t(this), n)
            }))
        }),
        this.trigger("editable-init"))
    }
}(jQuery);
this.bdgTemplates = this.bdgTemplates || {},
this.bdgTemplates["chart-color"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            style: "display:none;",
            id: [{
                t: 2,
                r: "elementId"
            }, "-color-win"]
        },
        f: ["\r\n  ", {
            t: 7,
            e: "table",
            a: {
                id: [{
                    t: 2,
                    r: "elementId"
                }, "-color-grid"]
            }
        }, "\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "btn-toolbar",
                style: "padding-top: 10px"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-primary pull-right"
                },
                v: {
                    click: "chartColorConfirm"
                },
                f: [{
                    t: 2,
                    r: "locale.button.confirm"
                }]
            }, "\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-default pull-right"
                },
                v: {
                    click: "chartColorCancel"
                },
                f: [{
                    t: 2,
                    r: "locale.button.cancel"
                }]
            }, "\r\n  "]
        }, "\r\n"]
    }]
},
this.bdgTemplates["chart-combine"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            style: "display:none;",
            id: [{
                t: 2,
                r: "elementId"
            }, "-chartCombine-win"]
        },
        f: ["\r\n  ", {
            t: 7,
            e: "table",
            a: {
                id: [{
                    t: 2,
                    r: "elementId"
                }, "-combine-grid"]
            }
        }, "\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "btn-toolbar",
                style: "padding-top: 10px"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-primary pull-right"
                },
                v: {
                    click: "chartCombineConfirm"
                },
                f: [{
                    t: 2,
                    r: "locale.button.confirm"
                }]
            }, "\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-default pull-right"
                },
                v: {
                    click: "chartCombineCancel"
                },
                f: [{
                    t: 2,
                    r: "locale.button.cancel"
                }]
            }, "\r\n  "]
        }, "\r\n"]
    }]
},
this.bdgTemplates["chart-component"] = {
    v: 3,
    t: [{
        t: 4,
        f: ["\r\n  ", {
            t: 7,
            e: "table",
            a: {
                "class": "pass-client-toolbar bdg-chart-toolbar"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "tr",
                f: ["\n", {
                    t: 4,
                    f: ["        ", {
                        t: 7,
                        e: "td",
                        f: [{
                            t: 7,
                            e: "i",
                            a: {
                                "class": "fa fa-filter fa-lg",
                                title: [{
                                    t: 2,
                                    r: "locale.toolbar.dataFilter"
                                }]
                            },
                            v: {
                                click: "showDataFilter"
                            }
                        }]
                    }, "\n"],
                    n: 50,
                    x: {
                        r: ["toolbar.dataFilter"],
                        s: "_0===true"
                    }
                }, "      ", {
                    t: 4,
                    f: ["\r\n        ", {
                        t: 7,
                        e: "td",
                        f: [{
                            t: 7,
                            e: "i",
                            a: {
                                "class": "fa fa-cogs fa-lg",
                                title: [{
                                    t: 2,
                                    r: "locale.chart.toolbar.chartConfig"
                                }]
                            },
                            v: {
                                click: "showChartConfig"
                            }
                        }]
                    }, "\n"],
                    n: 50,
                    x: {
                        r: ["toolbar.chartConfig"],
                        s: "_0===true"
                    }
                }, "      ", {
                    t: 4,
                    f: ["\n", {
                        t: 4,
                        f: ["          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-check-square fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.seriesFilter"
                                    }]
                                },
                                v: {
                                    click: "showSeriesFilter"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.seriesFilter"],
                            s: "_0===true"
                        }
                    }, "        ", {
                        t: 4,
                        f: ["\r\n          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-bar-chart fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.chartCombine"
                                    }]
                                },
                                v: {
                                    click: "showChartCombine"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.chartCombine"],
                            s: "_0===true"
                        }
                    }, "        ", {
                        t: 4,
                        f: ["\r\n          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-paint-brush fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.chartColor"
                                    }]
                                },
                                v: {
                                    click: "showChartColor"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.chartColor"],
                            s: "_0===true"
                        }
                    }, "        ", {
                        t: 4,
                        f: ["\r\n          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-retweet fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.chartRotate"
                                    }]
                                },
                                v: {
                                    click: "chartRotate"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.chartRotate"],
                            s: "_0===true"
                        }
                    }, "        ", {
                        t: 4,
                        f: ["\r\n          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-exchange fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.setXInverted"
                                    }]
                                },
                                v: {
                                    click: "setXInverted"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.setXInverted"],
                            s: "_0===true"
                        }
                    }, "        ", {
                        t: 4,
                        f: ["\r\n          ", {
                            t: 7,
                            e: "td",
                            f: [{
                                t: 7,
                                e: "i",
                                a: {
                                    "class": "fa fa-cloud-download fa-lg",
                                    title: [{
                                        t: 2,
                                        r: "locale.chart.toolbar.dataDownload"
                                    }]
                                },
                                v: {
                                    click: "dataDownload"
                                }
                            }]
                        }, "\n"],
                        n: 50,
                        x: {
                            r: ["toolbar.dataDownload"],
                            s: "_0===true"
                        }
                    }],
                    n: 50,
                    x: {
                        r: ["chartType"],
                        s: '_0==="LINE"'
                    }
                }, {
                    t: 4,
                    n: 51,
                    f: [{
                        t: 4,
                        n: 50,
                        x: {
                            r: ["chartType"],
                            s: '_0==="GAUGE"'
                        },
                        f: ["\r\n      "]
                    }, {
                        t: 4,
                        n: 50,
                        x: {
                            r: ["chartType"],
                            s: '(!(_0==="GAUGE"))&&(_0==="NORMAL")'
                        },
                        f: ["\n", {
                            t: 4,
                            f: ["          ", {
                                t: 7,
                                e: "td",
                                f: [{
                                    t: 7,
                                    e: "i",
                                    a: {
                                        "class": "fa fa-calculator fa-lg",
                                        title: [{
                                            t: 2,
                                            r: "locale.chart.toolbar.statistics"
                                        }]
                                    },
                                    v: {
                                        click: "showStatistics"
                                    }
                                }]
                            }, "\n"],
                            n: 50,
                            x: {
                                r: ["toolbar.statistics"],
                                s: "_0===true"
                            }
                        }, "        ", {
                            t: 4,
                            f: ["\r\n          ", {
                                t: 7,
                                e: "td",
                                f: [{
                                    t: 7,
                                    e: "i",
                                    a: {
                                        "class": "fa fa-paint-brush fa-lg",
                                        title: [{
                                            t: 2,
                                            r: "locale.chart.toolbar.chartColor"
                                        }]
                                    },
                                    v: {
                                        click: "showChartColor"
                                    }
                                }]
                            }, "\n"],
                            n: 50,
                            x: {
                                r: ["toolbar.chartColor"],
                                s: "_0===true"
                            }
                        }, "      "]
                    }, {
                        t: 4,
                        n: 50,
                        x: {
                            r: ["chartType"],
                            s: '(!(_0==="GAUGE"))&&((!(_0==="NORMAL"))&&(_0==="CONTROL"))'
                        },
                        f: ["\n", {
                            t: 4,
                            f: ["          ", {
                                t: 7,
                                e: "td",
                                f: [{
                                    t: 7,
                                    e: "i",
                                    a: {
                                        "class": "fa fa-exclamation-triangle fa-lg",
                                        title: [{
                                            t: 2,
                                            r: "locale.chart.toolbar.identityResult"
                                        }]
                                    },
                                    v: {
                                        click: "showIdentityResult"
                                    }
                                }]
                            }, "\n"],
                            n: 50,
                            x: {
                                r: ["toolbar.identityResult"],
                                s: "_0===true"
                            }
                        }, "      "]
                    }],
                    x: {
                        r: ["chartType"],
                        s: '_0==="LINE"'
                    }
                }, "      ", {
                    t: 4,
                    f: ["\r\n        ", {
                        t: 7,
                        e: "td",
                        f: [{
                            t: 7,
                            e: "i",
                            a: {
                                "class": "fa fa-file-image-o fa-lg",
                                title: [{
                                    t: 2,
                                    r: "locale.chart.toolbar.chartDownload"
                                }]
                            },
                            v: {
                                click: "chartDownload"
                            }
                        }]
                    }, "\n"],
                    n: 50,
                    x: {
                        r: ["toolbar.chartDownload"],
                        s: "_0===true"
                    }
                }, "      ", {
                    t: 7,
                    e: "td",
                    f: [{
                        t: 7,
                        e: "i",
                        a: {
                            "class": "fa fa-repeat fa-lg",
                            title: [{
                                t: 2,
                                r: "locale.chart.toolbar.chartReload"
                            }]
                        },
                        v: {
                            click: "chartReload"
                        }
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "td",
                    f: [{
                        t: 7,
                        e: "i",
                        a: {
                            "class": "pass-client-loading hourglass"
                        }
                    }]
                }, "\r\n    "]
            }, "\r\n  "]
        }, "\n"],
        n: 50,
        x: {
            r: ["toolbar.show"],
            s: "_0===true"
        }
    }, {
        t: 4,
        f: ["\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "bdg-chart-title"
            },
            f: [{
                t: 7,
                e: "span",
                f: [{
                    t: 2,
                    r: "chart.chartTitle"
                }]
            }]
        }, "\n"],
        n: 50,
        x: {
            r: ["chartType"],
            s: '_0==="LINE"'
        }
    }, {
        t: 7,
        e: "div",
        a: {
            "class": "bdg-chart"
        }
    }, "\r\n", {
        t: 7,
        e: "canvas",
        a: {
            id: [{
                t: 2,
                r: "elementId"
            }, "-canvas"],
            style: "display: none"
        }
    }, "\r\n", {
        t: 7,
        e: "div",
        a: {
            id: [{
                t: 2,
                r: "elementId"
            }, "-gauge"]
        }
    }, "\r\n\r\n", {
        t: 8,
        r: "data-filter"
    }, "\r\n", {
        t: 8,
        r: "chart-config"
    }, "\r\n", {
        t: 8,
        r: "control-chart-config"
    }, "\r\n", {
        t: 8,
        r: "control-identity-result"
    }, "\r\n", {
        t: 8,
        r: "chart-series"
    }, "\r\n", {
        t: 8,
        r: "chart-combine"
    }, "\r\n", {
        t: 8,
        r: "chart-color"
    }, "\r\n", {
        t: 8,
        r: "chart-statistics"
    }, "\r\n"]
},
this.bdgTemplates["chart-config"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            id: [{
                t: 2,
                r: "elementId"
            }, "-config-win"],
            style: "display: none;"
        },
        f: ["\n", {
            t: 4,
            f: ["    ", {
                t: 7,
                e: "ul",
                a: {
                    "class": "nav nav-tabs nav-tabs-google"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "li",
                    a: {
                        "class": "active"
                    },
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-x"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.x.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-yl"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.y.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-yr"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.y2.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-legend"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.legend.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-tooltip"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.tooltip.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-point"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.point.title"
                        }]
                    }]
                }, "\r\n      ", {
                    t: 7,
                    e: "li",
                    f: [{
                        t: 7,
                        e: "a",
                        a: {
                            href: ["#", {
                                t: 2,
                                r: "elementId"
                            }, "-config-zoom"],
                            "data-toggle": "tab"
                        },
                        f: [{
                            t: 2,
                            r: "locale.chart.line.chartConfig.zoom.title"
                        }]
                    }]
                }, "\r\n    "]
            }, "\r\n\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    "class": "tab-content"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-x"],
                        "class": "tab-pane active"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 5px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.general"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.x.height"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "number",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.height"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.label.position"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "select",
                                a: {
                                    "class": "btn btn-default btn-sm data-html=1",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.label.position"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                },
                                f: ["\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-center"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.inner.center"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-right"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.inner.right"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-left"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.inner.left"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-center"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.outer.center"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-right"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.outer.right"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-left"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightLeftPos.outer.left"
                                    }]
                                }, "\r\n            "]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.label"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.x.tick.centered"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.tick.centered"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.x.tick.culling"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.tick.culling"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.outer"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.tick.outer"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.x.tick.rotate"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.x.tick.rotate"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-yl"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 5px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.general"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.inner"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.inner"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.center"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "number",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.center"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.max"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.max"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.min"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.min"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.inverted"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.inverted"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.label.position"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "select",
                                a: {
                                    "class": "btn btn-default btn-sm data-html=1",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.label.position"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                },
                                f: ["\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-middle"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.middle"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-top"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.top"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-bottom"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.bottom"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-middle"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.middle"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-top"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.top"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-bottom"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.bottom"
                                    }]
                                }, "\r\n            "]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.label"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.outer"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.tick.outer"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.label"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.top"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.padding.top"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.bottom"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y.padding.bottom"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-yr"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 5px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.general"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.inner"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.inner"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.center"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "number",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.center"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.max"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "number",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.max"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.min"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "number",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.min"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.y.inverted"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.inverted"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.label.position"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "select",
                                a: {
                                    "class": "btn btn-default btn-sm data-html=1",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.label.position"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                },
                                f: ["\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-middle"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.middle"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-top"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.top"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "inner-bottom"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.inner.bottom"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-middle"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.middle"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-top"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.top"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "outer-bottom"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.topBottomPos.outer.bottom"
                                    }]
                                }, "\r\n            "]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.label"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tick.outer"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.tick.outer"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "span",
                                a: {
                                    "class": "label label-warning"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.label"
                                }]
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.top"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.padding.top"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.padding.bottom"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "text",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.axis.y2.padding.bottom"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-legend"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 15px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.legend.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.legend.position"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "select",
                                a: {
                                    "class": "btn btn-default btn-sm data-html=1",
                                    value: [{
                                        t: 2,
                                        r: "tempChartOptions.legend.position"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                },
                                f: ["\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "right"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightBottomPos.right"
                                    }]
                                }, "\r\n              ", {
                                    t: 7,
                                    e: "option",
                                    a: {
                                        value: "bottom"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.options.rightBottomPos.bottom"
                                    }]
                                }, "\r\n            "]
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-tooltip"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 15px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.tooltip.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.tooltip.grouped"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.tooltip.grouped"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-point"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 15px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.show"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.point.show"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.point.focus"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.point.focus.expand.enabled"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-config-zoom"],
                        "class": "tab-pane"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "form",
                            style: "padding-top: 15px;"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.zoom.enabled"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.zoom.enabled"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n          ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "pass-row pass-vertical-center"
                            },
                            f: ["\r\n            ", {
                                t: 7,
                                e: "label",
                                a: {
                                    "class": "col-sm-3 control-label"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.line.chartConfig.zoom.rescale"
                                }]
                            }, "\r\n            ", {
                                t: 7,
                                e: "input",
                                a: {
                                    type: "checkbox",
                                    checked: [{
                                        t: 2,
                                        r: "tempChartOptions.zoom.rescale"
                                    }]
                                },
                                v: {
                                    change: "configChange"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\n"],
            n: 50,
            x: {
                r: ["chartType"],
                s: '_0==="LINE"||_0==="NORMAL"'
            }
        }, {
            t: 4,
            n: 51,
            f: [{
                t: 4,
                n: 50,
                x: {
                    r: ["chartType"],
                    s: '_0==="GAUGE"'
                },
                f: ["\r\n    ", {
                    t: 7,
                    e: "ul",
                    a: {
                        "class": "nav nav-tabs nav-tabs-google"
                    },
                    f: ["\r\n      ", {
                        t: 7,
                        e: "li",
                        a: {
                            "class": "active"
                        },
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-general"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.center.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-title"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.title.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-axis-line"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.axisLine.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-axis-tick"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.axisTick.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-split-line"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.splitLine.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-pointer"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.pointer.title"
                            }]
                        }]
                    }, "\r\n      ", {
                        t: 7,
                        e: "li",
                        f: [{
                            t: 7,
                            e: "a",
                            a: {
                                href: ["#", {
                                    t: 2,
                                    r: "elementId"
                                }, "-config-detail"],
                                "data-toggle": "tab"
                            },
                            f: [{
                                t: 2,
                                r: "locale.chart.gauge.chartConfig.detail.title"
                            }]
                        }]
                    }, "\r\n    "]
                }, "\r\n\r\n    ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "tab-content"
                    },
                    f: ["\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-general"],
                            "class": "tab-pane active"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.center.horizontal"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.center.0"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.center.vertical"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.center.1"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.radius"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.radius"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-title"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.title.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.offsetCenter.horizontal"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.title.offsetCenter.0"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.offsetCenter.vertical"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.title.offsetCenter.1"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.fontSize"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.title.textStyle.fontSize"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.color"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.title.textStyle.color"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.title.textStyle.color"]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-axis-line"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.axisLine.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.width"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisLine.lineStyle.width"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-axis-tick"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisTick.splitNumber"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.splitNumber"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisTick.length"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.length"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisTick.lineStyle.width"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.lineStyle.width"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisTick.lineStyle.type"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "select",
                                    a: {
                                        "class": "btn btn-default btn-sm data-html=1",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.lineStyle.type"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    },
                                    f: ["\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "solid"
                                        },
                                        f: ["Solid"]
                                    }, "\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "dotted"
                                        },
                                        f: ["Dotted"]
                                    }, "\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "dashed"
                                        },
                                        f: ["Dashed"]
                                    }, "\r\n            "]
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisTick.lineStyle.color"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisTick.lineStyle.color"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.axisTick.lineStyle.color"]
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-split-line"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "span",
                                    a: {
                                        "class": "label label-warning"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.splitLine.line"
                                    }]
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.splitLine.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.length"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.splitLine.length"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.width"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.splitLine.lineStyle.width"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.type"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "select",
                                    a: {
                                        "class": "btn btn-default btn-sm data-html=1",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.splitLine.lineStyle.type"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    },
                                    f: ["\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "solid"
                                        },
                                        f: ["Solid"]
                                    }, "\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "dotted"
                                        },
                                        f: ["Dotted"]
                                    }, "\r\n              ", {
                                        t: 7,
                                        e: "option",
                                        a: {
                                            value: "dashed"
                                        },
                                        f: ["Dashed"]
                                    }, "\r\n            "]
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.color"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.splitLine.lineStyle.color"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.splitLine.lineStyle.color"]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "span",
                                    a: {
                                        "class": "label label-warning"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.splitLine.font"
                                    }]
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.axisLabel.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.axisLabel.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.fontSize"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisLabel.textStyle.fontSize"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.color"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.axisLabel.textStyle.color"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.axisLabel.textStyle.color"]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-pointer"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.length"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.pointer.length"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.width"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.pointer.width"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-3 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.color"
                                    }, "\r\n              (", {
                                        t: 2,
                                        r: "locale.common.auto"
                                    }, {
                                        t: 7,
                                        e: "input",
                                        a: {
                                            type: "checkbox",
                                            checked: [{
                                                t: 2,
                                                x: {
                                                    r: ["tempChartOptions.pointer.color"],
                                                    s: '_0=="auto"'
                                                }
                                            }]
                                        },
                                        v: {
                                            change: {
                                                n: "setAutoPointer",
                                                d: [{
                                                    t: 2,
                                                    r: "."
                                                }]
                                            }
                                        }
                                    }, ")\r\n            "]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-pointerColor"],
                                        value: [{
                                            t: 2,
                                            x: {
                                                r: ["tempChartOptions.pointer.color"],
                                                s: '_0=="auto"?"auto":_0'
                                            }
                                        }],
                                        disabled: [{
                                            t: 2,
                                            x: {
                                                r: ["tempChartOptions.pointer.color"],
                                                s: '_0=="auto"?true:false'
                                            }
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n\r\n      ", {
                        t: 7,
                        e: "div",
                        a: {
                            id: [{
                                t: 2,
                                r: "elementId"
                            }, "-config-detail"],
                            "class": "tab-pane"
                        },
                        f: ["\r\n        ", {
                            t: 7,
                            e: "div",
                            a: {
                                "class": "form",
                                style: "padding-top: 5px;"
                            },
                            f: ["\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.common.show"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "checkbox",
                                        checked: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.show"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.detail.backgroundColor"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.backgroundColor"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.detail.backgroundColor"]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.detail.borderWidth"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.borderWidth"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.detail.borderColor"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.borderColor"
                                        }],
                                        "class": "gaugeColor",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-tempChartOptions.detail.borderColor"]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.detail.width"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.width"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.detail.height"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.height"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.offsetCenter.horizontal"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.offsetCenter.0"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.offsetCenter.vertical"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.offsetCenter.1"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.color"
                                    }, "\r\n              (", {
                                        t: 2,
                                        r: "locale.common.auto"
                                    }, {
                                        t: 7,
                                        e: "input",
                                        a: {
                                            type: "checkbox",
                                            checked: [{
                                                t: 2,
                                                x: {
                                                    r: ["tempChartOptions.detail.textStyle.color"],
                                                    s: '_0=="auto"'
                                                }
                                            }]
                                        },
                                        v: {
                                            change: {
                                                n: "setAutoDetailText",
                                                d: [{
                                                    t: 2,
                                                    r: "."
                                                }]
                                            }
                                        }
                                    }, ")\r\n            "]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "text",
                                        id: [{
                                            t: 2,
                                            r: "elementId"
                                        }, "-detailTextColor"],
                                        value: [{
                                            t: 2,
                                            x: {
                                                r: ["tempChartOptions.detail.textStyle.color"],
                                                s: '_0=="auto"?"auto":_0'
                                            }
                                        }],
                                        disabled: [{
                                            t: 2,
                                            x: {
                                                r: ["tempChartOptions.detail.textStyle.color"],
                                                s: '_0=="auto"?true:false'
                                            }
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n          ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "pass-row pass-vertical-center"
                                },
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "label",
                                    a: {
                                        "class": "col-sm-4 control-label"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.gauge.chartConfig.textStyle.fontSize"
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "input",
                                    a: {
                                        type: "number",
                                        value: [{
                                            t: 2,
                                            r: "tempChartOptions.detail.textStyle.fontSize"
                                        }]
                                    },
                                    v: {
                                        change: "configChange"
                                    }
                                }, "\r\n          "]
                            }, "\r\n        "]
                        }, "\r\n      "]
                    }, "\r\n    "]
                }, "\r\n  "]
            }],
            x: {
                r: ["chartType"],
                s: '_0==="LINE"||_0==="NORMAL"'
            }
        }, "  ", {
            t: 7,
            e: "div",
            a: {
                "class": "btn-toolbar",
                style: "position:absolute; bottom: 10px;right: 10px;"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-primary pull-right"
                },
                v: {
                    click: "chartConfigConfirm"
                },
                f: [{
                    t: 2,
                    r: "locale.button.confirm"
                }]
            }, "\r\n    ", {
                t: 7,
                e: "button",
                a: {
                    type: "button",
                    "class": "btn btn-default pull-right"
                },
                v: {
                    click: "chartConfigCancel"
                },
                f: [{
                    t: 2,
                    r: "locale.button.cancel"
                }]
            }, "\r\n  "]
        }, "\r\n"]
    }, "\r\n"]
},
this.bdgTemplates["chart-series"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            style: "display: none;",
            id: [{
                t: 2,
                r: "elementId"
            }, "-series-win"]
        },
        f: ["\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "chart-series"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    "class": "col-md-3"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-seriesName-grid"]
                    }
                }, "\r\n    "]
            }, "\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    "class": "col-md-3"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-seriesValue-grid"]
                    }
                }, "\r\n    "]
            }, "\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    "class": "col-md-4"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        id: [{
                            t: 2,
                            r: "elementId"
                        }, "-seriesRule-grid"]
                    }
                }, "\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "btn-toolbar",
                        style: "padding-top: 10px"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "button",
                        a: {
                            type: "button",
                            "class": "btn btn-primary pull-right"
                        },
                        v: {
                            click: "seriesFilterConfirm"
                        },
                        f: [{
                            t: 2,
                            r: "locale.button.confirm"
                        }]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\r\n  "]
        }, "\r\n"]
    }]
},
this.bdgTemplates["chart-statistics"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            style: "display: none;",
            id: [{
                t: 2,
                r: "elementId"
            }, "-statistics-win"]
        },
        f: ["\r\n  ", {
            t: 7,
            e: "ul",
            a: {
                "class": "nav nav-tabs nav-tabs-google"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "li",
                a: {
                    "class": "active"
                },
                f: [{
                    t: 7,
                    e: "a",
                    a: {
                        href: ["#", {
                            t: 2,
                            r: "elementId"
                        }, "-statistics-values"],
                        "data-toggle": "tab"
                    },
                    f: [{
                        t: 2,
                        r: "locale.chart.normal.statistics.label"
                    }]
                }]
            }, "\r\n    ", {
                t: 7,
                e: "li",
                f: [{
                    t: 7,
                    e: "a",
                    a: {
                        href: ["#", {
                            t: 2,
                            r: "elementId"
                        }, "-capability-indices"],
                        "data-toggle": "tab"
                    },
                    f: [{
                        t: 2,
                        r: "locale.chart.normal.capability.label"
                    }]
                }]
            }, "\r\n    ", {
                t: 7,
                e: "li",
                f: [{
                    t: 7,
                    e: "a",
                    a: {
                        href: ["#", {
                            t: 2,
                            r: "elementId"
                        }, "-statistics-groups"],
                        "data-toggle": "tab"
                    },
                    f: [{
                        t: 2,
                        r: "locale.chart.normal.groups.label"
                    }]
                }]
            }, "\r\n  "]
        }, "\r\n\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "tab-content"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    id: [{
                        t: 2,
                        r: "elementId"
                    }, "-statistics-values"],
                    "class": "tab-pane active"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        "class": "table table-hover table-bordered"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "thead",
                        f: ["\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.statistics"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.value"
                                }]
                            }, "\r\n        "]
                        }, "\r\n        "]
                    }, "\r\n        ", {
                        t: 7,
                        e: "tbody",
                        f: ["\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.n"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.n"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.max"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.max"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.min"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.min"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.median"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.median"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.mean"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.mean"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.standardDeviation"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.standardDeviation"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.variance"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.variance"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.kurtosis"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.kurtosis"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.statistics.skewness"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "statistics.skewness"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    id: [{
                        t: 2,
                        r: "elementId"
                    }, "-capability-indices"],
                    "class": "tab-pane"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        "class": "table table-hover table-bordered"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "thead",
                        f: ["\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.indices"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.common.value"
                                }]
                            }, "\r\n        "]
                        }, "\r\n        "]
                    }, "\r\n        ", {
                        t: 7,
                        e: "tbody",
                        f: ["\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 7,
                                    e: "abbr",
                                    a: {
                                        title: "A(|Ca| <= 0.125), B(0.125 < |Ca| <= 0.25), C(0.25 < |Ca| <= 0.5), D(0.5 < |Ca|)"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.normal.capability.ca"
                                    }, "(Ca)"]
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "capability.ca"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 7,
                                    e: "abbr",
                                    a: {
                                        title: "A(1.33 <= Cp), B(1 <= Cp < 1.33), C(0.83 <= Cp < 1), D(Cp < 0.83)"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.normal.capability.cp"
                                    }, "(Cp)"]
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "capability.cp"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 7,
                                    e: "abbr",
                                    a: {
                                        title: "A+(1.67 <= Cpk), A(1.33 <= Cpk < 1.67), B(1 <= Cpk < 1.33), C(0.67 <= Cpk < 1), D(Cpk < 0.67)"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.normal.capability.cpk"
                                    }, "(Cpk)"]
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "capability.cpk"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 7,
                                    e: "abbr",
                                    a: {
                                        title: "A(1.33 <= Pp), B(1 <= Pp < 1.33), C(0.83 <= Pp < 1), D(Pp < 0.83)"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.normal.capability.pp"
                                    }, "(Pp)"]
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "capability.pp"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 7,
                                    e: "abbr",
                                    a: {
                                        title: "A+(1.67 <= Ppk), A(1.33 <= Ppk < 1.67), B(1 <= Ppk < 1.33), C(0.67 <= Ppk < 1), D(Ppk < 0.67)"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "locale.chart.normal.capability.ppk"
                                    }, "(Ppk)"]
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-right"
                                },
                                f: [{
                                    t: 2,
                                    x: {
                                        r: ["format", "capability.ppk"],
                                        s: "_0(_1)"
                                    }
                                }]
                            }, "\r\n        "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\r\n    ", {
                t: 7,
                e: "div",
                a: {
                    id: [{
                        t: 2,
                        r: "elementId"
                    }, "-statistics-groups"],
                    "class": "tab-pane",
                    style: "overflow: auto;height: 495px;"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "table",
                    a: {
                        "class": "table table-hover table-bordered"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "thead",
                        f: ["\r\n        ", {
                            t: 7,
                            e: "tr",
                            f: ["\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.groups.no"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.groups.start"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.groups.end"
                                }]
                            }, "\r\n          ", {
                                t: 7,
                                e: "th",
                                a: {
                                    "class": "text-center"
                                },
                                f: [{
                                    t: 2,
                                    r: "locale.chart.normal.groups.counts"
                                }]
                            }, "\r\n        "]
                        }, "\r\n        "]
                    }, "\r\n        ", {
                        t: 7,
                        e: "tbody",
                        f: ["\n", {
                            t: 4,
                            f: ["          ", {
                                t: 7,
                                e: "tr",
                                f: ["\r\n            ", {
                                    t: 7,
                                    e: "th",
                                    a: {
                                        "class": "text-right"
                                    },
                                    f: [{
                                        t: 2,
                                        x: {
                                            r: ["i"],
                                            s: "_0+1"
                                        }
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "th",
                                    a: {
                                        "class": "text-right"
                                    },
                                    f: [{
                                        t: 2,
                                        x: {
                                            r: ["format", "start"],
                                            s: "_0(_1)"
                                        }
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "th",
                                    a: {
                                        "class": "text-right"
                                    },
                                    f: [{
                                        t: 2,
                                        x: {
                                            r: ["format", "end"],
                                            s: "_0(_1)"
                                        }
                                    }]
                                }, "\r\n            ", {
                                    t: 7,
                                    e: "th",
                                    a: {
                                        "class": "text-right"
                                    },
                                    f: [{
                                        t: 2,
                                        r: "counts"
                                    }]
                                }, "\r\n          "]
                            }, "\n"],
                            i: "i",
                            r: "statistics.groups.barGroups"
                        }, "        "]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\r\n  "]
        }, "\r\n"]
    }]
},
this.bdgTemplates["data-filter"] = {
    v: 3,
    t: [{
        t: 7,
        e: "div",
        a: {
            id: [{
                t: 2,
                r: "elementId"
            }, "-dataFilter-win"],
            "class": "scrollable scrollable-shadow",
            style: "display: none"
        },
        f: ["\r\n  ", {
            t: 7,
            e: "ul",
            a: {
                "class": "nav nav-tabs nav-tabs-google"
            },
            f: ["\r\n    ", {
                t: 7,
                e: "li",
                a: {
                    "class": "active"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "a",
                    a: {
                        href: ["#", {
                            t: 2,
                            r: "elementId"
                        }, "-normal-filter"],
                        "data-toggle": "tab"
                    },
                    v: {
                        click: "selectNormalFilter"
                    },
                    f: [{
                        t: 2,
                        r: "locale.dataFilter.filterType.0"
                    }]
                }, "\r\n    "]
            }, "\r\n    ", {
                t: 7,
                e: "li",
                f: ["\r\n      ", {
                    t: 7,
                    e: "a",
                    a: {
                        href: ["#", {
                            t: 2,
                            r: "elementId"
                        }, "-rule-filter"],
                        "data-toggle": "tab"
                    },
                    v: {
                        click: "selectRuleFilter"
                    },
                    f: [{
                        t: 2,
                        r: "locale.dataFilter.filterType.1"
                    }]
                }, "\r\n    "]
            }, "\r\n  "]
        }, "\r\n\r\n  ", {
            t: 7,
            e: "div",
            a: {
                "class": "tab-content"
            },
            f: ["\n    ", {
                t: 7,
                e: "div",
                a: {
                    id: [{
                        t: 2,
                        r: "elementId"
                    }, "-normal-filter"],
                    "class": "tab-pane active"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "box-wrapper box-wrapper-default"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "box-heading"
                        },
                        f: [{
                            t: 2,
                            r: "locale.dataFilter.normal.title"
                        }]
                    }, "\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "box-body"
                        },
                        f: ["\n", {
                            t: 4,
                            f: ["            ", {
                                t: 4,
                                f: ["\r\n\r\n              ", {
                                    t: 7,
                                    e: "div",
                                    a: {
                                        "class": "form-group"
                                    },
                                    f: ["\r\n                ", {
                                        t: 7,
                                        e: "label",
                                        a: {
                                            "class": "control-label"
                                        },
                                        f: [{
                                            t: 2,
                                            x: {
                                                r: ["custom", "custom.alias", "columnName"],
                                                s: "_0?_1:_2"
                                            }
                                        }, "\r\n                  (", {
                                            t: 2,
                                            x: {
                                                r: ["custom", "custom.customId", "columnId"],
                                                s: "_0?_1:_2"
                                            }
                                        }, ")"]
                                    }, "\r\n\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "input-group input-group-sm"
                                        },
                                        f: ["\n", {
                                            t: 4,
                                            f: ["                    ", {
                                                t: 7,
                                                e: "input",
                                                a: {
                                                    type: "text",
                                                    "class": "form-control",
                                                    placeholder: [{
                                                        t: 2,
                                                        r: "locale.placeholder.fillData"
                                                    }],
                                                    value: [{
                                                        t: 2,
                                                        rx: {
                                                            r: "normalFilter",
                                                            m: [{
                                                                r: ["custom", "custom.customId", "columnId"],
                                                                s: "_0?_1:_2"
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, "\n"],
                                            n: 50,
                                            x: {
                                                r: ["inputType"],
                                                s: '_0==="input"||!_0'
                                            }
                                        }, {
                                            t: 4,
                                            n: 51,
                                            f: ["\n", {
                                                t: 4,
                                                f: ["                      ", {
                                                    t: 7,
                                                    e: "div",
                                                    a: {
                                                        "class": "input-group-btn"
                                                    },
                                                    f: ["\r\n                        ", {
                                                        t: 7,
                                                        e: "button",
                                                        a: {
                                                            title: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.tooltip",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.DATE"
                                                                    }]
                                                                }
                                                            }],
                                                            type: "button",
                                                            "class": "btn btn-default"
                                                        },
                                                        v: {
                                                            click: {
                                                                n: "showDateTimePicker",
                                                                d: [{
                                                                    t: 2,
                                                                    r: "DATETIME_PICKER_TYPE.DATE"
                                                                }, ",", {
                                                                    t: 2,
                                                                    r: "."
                                                                }]
                                                            }
                                                        },
                                                        f: ["\r\n                          ", {
                                                            t: 7,
                                                            e: "span",
                                                            a: {
                                                                "class": "glyphicon glyphicon-calendar"
                                                            }
                                                        }, "\r\n                        "]
                                                    }, "\r\n                      "]
                                                }, "\r\n                      ", {
                                                    t: 7,
                                                    e: "input",
                                                    a: {
                                                        type: "text",
                                                        "class": "form-control",
                                                        placeholder: [{
                                                            t: 2,
                                                            rx: {
                                                                r: "locale.datePicker.placeholder",
                                                                m: [{
                                                                    t: 30,
                                                                    n: "DATETIME_PICKER_TYPE.DATE"
                                                                }]
                                                            }
                                                        }],
                                                        value: [{
                                                            t: 2,
                                                            rx: {
                                                                r: "normalFilter",
                                                                m: [{
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }]
                                                            }
                                                        }],
                                                        disabled: 0
                                                    }
                                                }, "\n                      ", {
                                                    t: 7,
                                                    e: "div",
                                                    a: {
                                                        id: [{
                                                            t: 2,
                                                            r: "elementId"
                                                        }, "-", {
                                                            t: 2,
                                                            x: {
                                                                r: ["custom", "custom.customId", "columnId"],
                                                                s: "_0?_1:_2"
                                                            }
                                                        }, "-", {
                                                            t: 2,
                                                            r: "DATETIME_PICKER_TYPE.DATE"
                                                        }, "-picker-win"],
                                                        title: [{
                                                            t: 2,
                                                            rx: {
                                                                r: "locale.datePicker.tooltip",
                                                                m: [{
                                                                    t: 30,
                                                                    n: "DATETIME_PICKER_TYPE.DATE"
                                                                }]
                                                            }
                                                        }],
                                                        style: "display:none;"
                                                    },
                                                    f: ["\r\n                        ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            "class": "btn-toolbar",
                                                            role: "toolbar"
                                                        },
                                                        f: ["\r\n                          ", {
                                                            t: 7,
                                                            e: "button",
                                                            a: {
                                                                "class": "btn btn-default btn-sm"
                                                            },
                                                            v: {
                                                                click: {
                                                                    n: "addRangeSymbol",
                                                                    d: [{
                                                                        t: 2,
                                                                        r: "."
                                                                    }]
                                                                }
                                                            },
                                                            f: [{
                                                                t: 2,
                                                                r: "locale.datePicker.button.rangeSymbol"
                                                            }, "\r\n                          "]
                                                        }, "\r\n                        "]
                                                    }, "\r\n                        ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            id: [{
                                                                t: 2,
                                                                r: "elementId"
                                                            }, "-", {
                                                                t: 2,
                                                                x: {
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }
                                                            }, "-", {
                                                                t: 2,
                                                                r: "DATETIME_PICKER_TYPE.DATE"
                                                            }, "-picker"]
                                                        }
                                                    }, "\r\n                      "]
                                                }, "\n"],
                                                n: 50,
                                                x: {
                                                    r: ["inputType"],
                                                    s: '_0==="DATE"'
                                                }
                                            }, {
                                                t: 4,
                                                n: 51,
                                                f: [{
                                                    t: 4,
                                                    n: 50,
                                                    x: {
                                                        r: ["inputType"],
                                                        s: '_0==="DATEYM"'
                                                    },
                                                    f: ["\r\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            "class": "input-group-btn"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "button",
                                                            a: {
                                                                title: [{
                                                                    t: 2,
                                                                    rx: {
                                                                        r: "locale.datePicker.tooltip",
                                                                        m: [{
                                                                            t: 30,
                                                                            n: "DATETIME_PICKER_TYPE.YM"
                                                                        }]
                                                                    }
                                                                }],
                                                                type: "button",
                                                                "class": "btn btn-default"
                                                            },
                                                            v: {
                                                                click: {
                                                                    n: "showDateTimePicker",
                                                                    d: [{
                                                                        t: 2,
                                                                        r: "DATETIME_PICKER_TYPE.YM"
                                                                    }, ",", {
                                                                        t: 2,
                                                                        r: "."
                                                                    }]
                                                                }
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "span",
                                                                a: {
                                                                    "class": "glyphicon glyphicon-calendar"
                                                                }
                                                            }, "\r\n                        "]
                                                        }, "\r\n                      "]
                                                    }, "\r\n                      ", {
                                                        t: 7,
                                                        e: "input",
                                                        a: {
                                                            type: "text",
                                                            "class": "form-control",
                                                            placeholder: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.placeholder",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.YM"
                                                                    }]
                                                                }
                                                            }],
                                                            value: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "normalFilter",
                                                                    m: [{
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }]
                                                                }
                                                            }],
                                                            disabled: 0
                                                        }
                                                    }, "\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            id: [{
                                                                t: 2,
                                                                r: "elementId"
                                                            }, "-", {
                                                                t: 2,
                                                                x: {
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }
                                                            }, "-", {
                                                                t: 2,
                                                                r: "DATETIME_PICKER_TYPE.YM"
                                                            }, "-picker-win"],
                                                            title: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.tooltip",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.YM"
                                                                    }]
                                                                }
                                                            }],
                                                            style: "display:none;"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                "class": "btn-toolbar",
                                                                role: "toolbar"
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "button",
                                                                a: {
                                                                    "class": "btn btn-default btn-sm"
                                                                },
                                                                v: {
                                                                    click: {
                                                                        n: "addRangeSymbol",
                                                                        d: [{
                                                                            t: 2,
                                                                            r: "."
                                                                        }]
                                                                    }
                                                                },
                                                                f: [{
                                                                    t: 2,
                                                                    r: "locale.datePicker.button.rangeSymbol"
                                                                }, "\r\n                          "]
                                                            }, "\r\n                        "]
                                                        }, "\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                id: [{
                                                                    t: 2,
                                                                    r: "elementId"
                                                                }, "-", {
                                                                    t: 2,
                                                                    x: {
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }
                                                                }, "-", {
                                                                    t: 2,
                                                                    r: "DATETIME_PICKER_TYPE.YM"
                                                                }, "-picker"]
                                                            }
                                                        }, "\r\n                      "]
                                                    }, "\r\n\r\n                    "]
                                                }, {
                                                    t: 4,
                                                    n: 50,
                                                    x: {
                                                        r: ["inputType"],
                                                        s: '(!(_0==="DATEYM"))&&(_0==="TIME")'
                                                    },
                                                    f: ["\r\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            "class": "input-group-btn"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "button",
                                                            a: {
                                                                title: [{
                                                                    t: 2,
                                                                    rx: {
                                                                        r: "locale.datePicker.tooltip",
                                                                        m: [{
                                                                            t: 30,
                                                                            n: "DATETIME_PICKER_TYPE.TIME"
                                                                        }]
                                                                    }
                                                                }],
                                                                type: "button",
                                                                "class": "btn btn-default"
                                                            },
                                                            v: {
                                                                click: {
                                                                    n: "showDateTimePicker",
                                                                    d: [{
                                                                        t: 2,
                                                                        r: "DATETIME_PICKER_TYPE.TIME"
                                                                    }, ",", {
                                                                        t: 2,
                                                                        r: "."
                                                                    }]
                                                                }
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "span",
                                                                a: {
                                                                    "class": "glyphicon glyphicon-time"
                                                                }
                                                            }, "\r\n                        "]
                                                        }, "\r\n                      "]
                                                    }, "\r\n                      ", {
                                                        t: 7,
                                                        e: "input",
                                                        a: {
                                                            type: "text",
                                                            "class": "form-control",
                                                            placeholder: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.placeholder",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.TIME"
                                                                    }]
                                                                }
                                                            }],
                                                            value: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "normalFilter",
                                                                    m: [{
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }]
                                                                }
                                                            }],
                                                            disabled: 0
                                                        }
                                                    }, "\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            id: [{
                                                                t: 2,
                                                                r: "elementId"
                                                            }, "-", {
                                                                t: 2,
                                                                x: {
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }
                                                            }, "-", {
                                                                t: 2,
                                                                r: "DATETIME_PICKER_TYPE.TIME"
                                                            }, "-picker-win"],
                                                            title: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.tooltip",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.TIME"
                                                                    }]
                                                                }
                                                            }],
                                                            style: "display:none;"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                "class": "btn-toolbar",
                                                                role: "toolbar"
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "button",
                                                                a: {
                                                                    "class": "btn btn-default btn-sm"
                                                                },
                                                                v: {
                                                                    click: {
                                                                        n: "addRangeSymbol",
                                                                        d: [{
                                                                            t: 2,
                                                                            r: "."
                                                                        }]
                                                                    }
                                                                },
                                                                f: [{
                                                                    t: 2,
                                                                    r: "locale.datePicker.button.rangeSymbol"
                                                                }, "\r\n                          "]
                                                            }, "\r\n                        "]
                                                        }, "\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                id: [{
                                                                    t: 2,
                                                                    r: "elementId"
                                                                }, "-", {
                                                                    t: 2,
                                                                    x: {
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }
                                                                }, "-", {
                                                                    t: 2,
                                                                    r: "DATETIME_PICKER_TYPE.TIME"
                                                                }, "-picker"]
                                                            }
                                                        }, "\r\n                      "]
                                                    }, "\r\n\r\n                    "]
                                                }, {
                                                    t: 4,
                                                    n: 50,
                                                    x: {
                                                        r: ["inputType"],
                                                        s: '(!(_0==="DATEYM"))&&((!(_0==="TIME"))&&(_0==="DATETIME"))'
                                                    },
                                                    f: ["\r\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            "class": "input-group-btn"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "button",
                                                            a: {
                                                                title: [{
                                                                    t: 2,
                                                                    rx: {
                                                                        r: "locale.datePicker.tooltip",
                                                                        m: [{
                                                                            t: 30,
                                                                            n: "DATETIME_PICKER_TYPE.DATETIME"
                                                                        }]
                                                                    }
                                                                }],
                                                                type: "button",
                                                                "class": "btn btn-default"
                                                            },
                                                            v: {
                                                                click: {
                                                                    n: "showDateTimePicker",
                                                                    d: [{
                                                                        t: 2,
                                                                        r: "DATETIME_PICKER_TYPE.DATETIME"
                                                                    }, ",", {
                                                                        t: 2,
                                                                        r: "."
                                                                    }]
                                                                }
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "span",
                                                                a: {
                                                                    "class": "fa fa-calendar"
                                                                }
                                                            }, "\r\n                        "]
                                                        }, "\r\n                      "]
                                                    }, "\r\n                      ", {
                                                        t: 7,
                                                        e: "input",
                                                        a: {
                                                            type: "text",
                                                            "class": "form-control",
                                                            placeholder: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.placeholder",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.DATETIME"
                                                                    }]
                                                                }
                                                            }],
                                                            value: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "normalFilter",
                                                                    m: [{
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }]
                                                                }
                                                            }],
                                                            disabled: 0
                                                        }
                                                    }, "\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            id: [{
                                                                t: 2,
                                                                r: "elementId"
                                                            }, "-", {
                                                                t: 2,
                                                                x: {
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }
                                                            }, "-", {
                                                                t: 2,
                                                                r: "DATETIME_PICKER_TYPE.DATETIME"
                                                            }, "-picker-win"],
                                                            title: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "locale.datePicker.tooltip",
                                                                    m: [{
                                                                        t: 30,
                                                                        n: "DATETIME_PICKER_TYPE.DATETIME"
                                                                    }]
                                                                }
                                                            }],
                                                            style: "display:none;"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                "class": "btn-toolbar",
                                                                role: "toolbar"
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "button",
                                                                a: {
                                                                    "class": "btn btn-default btn-sm"
                                                                },
                                                                v: {
                                                                    click: {
                                                                        n: "addRangeSymbol",
                                                                        d: [{
                                                                            t: 2,
                                                                            r: "."
                                                                        }]
                                                                    }
                                                                },
                                                                f: [{
                                                                    t: 2,
                                                                    r: "locale.datePicker.button.rangeSymbol"
                                                                }, "\r\n                          "]
                                                            }, "\r\n                        "]
                                                        }, "\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                id: [{
                                                                    t: 2,
                                                                    r: "elementId"
                                                                }, "-", {
                                                                    t: 2,
                                                                    x: {
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }
                                                                }, "-", {
                                                                    t: 2,
                                                                    r: "DATETIME_PICKER_TYPE.DATETIME"
                                                                }, "-picker"]
                                                            }
                                                        }, "\r\n                      "]
                                                    }, "\r\n\r\n                    "]
                                                }, {
                                                    t: 4,
                                                    n: 50,
                                                    x: {
                                                        r: ["inputType"],
                                                        s: '(!(_0==="DATEYM"))&&((!(_0==="TIME"))&&(!(_0==="DATETIME")))'
                                                    },
                                                    f: ["\r\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            "class": "input-group-btn"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "button",
                                                            a: {
                                                                title: [{
                                                                    t: 2,
                                                                    r: "locale.assistQuery.tooltip"
                                                                }],
                                                                type: "button",
                                                                "class": "btn btn-default"
                                                            },
                                                            v: {
                                                                click: {
                                                                    n: "showAssistQuery",
                                                                    d: [{
                                                                        t: 2,
                                                                        r: "inputType"
                                                                    }, ",", {
                                                                        t: 2,
                                                                        r: "."
                                                                    }]
                                                                }
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "span",
                                                                a: {
                                                                    "class": "glyphicon glyphicon-filter"
                                                                }
                                                            }, "\r\n                        "]
                                                        }, "\r\n                      "]
                                                    }, "\r\n                      ", {
                                                        t: 7,
                                                        e: "input",
                                                        a: {
                                                            type: "text",
                                                            "class": "form-control",
                                                            placeholder: [{
                                                                t: 2,
                                                                r: "locale.placeholder.fillData"
                                                            }],
                                                            value: [{
                                                                t: 2,
                                                                rx: {
                                                                    r: "normalFilter",
                                                                    m: [{
                                                                        r: ["custom", "custom.customId", "columnId"],
                                                                        s: "_0?_1:_2"
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, "\n                      ", {
                                                        t: 7,
                                                        e: "div",
                                                        a: {
                                                            id: [{
                                                                t: 2,
                                                                r: "elementId"
                                                            }, "-", {
                                                                t: 2,
                                                                x: {
                                                                    r: ["custom", "custom.customId", "columnId"],
                                                                    s: "_0?_1:_2"
                                                                }
                                                            }, "-assistQuery"],
                                                            style: "display:none;"
                                                        },
                                                        f: ["\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                "class": "btn-toolbar",
                                                                role: "toolbar"
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "button",
                                                                a: {
                                                                    "class": "btn btn-default btn-sm"
                                                                },
                                                                v: {
                                                                    click: {
                                                                        n: "addRangeSymbol",
                                                                        d: [{
                                                                            t: 2,
                                                                            r: "."
                                                                        }]
                                                                    }
                                                                },
                                                                f: [{
                                                                    t: 2,
                                                                    r: "locale.datePicker.button.rangeSymbol"
                                                                }, "\r\n                          "]
                                                            }, "\r\n                        "]
                                                        }, "\r\n                        ", {
                                                            t: 7,
                                                            e: "div",
                                                            a: {
                                                                style: "margin-top: 4px"
                                                            },
                                                            f: ["\r\n                          ", {
                                                                t: 7,
                                                                e: "table",
                                                                a: {
                                                                    id: [{
                                                                        t: 2,
                                                                        r: "elementId"
                                                                    }, "-", {
                                                                        t: 2,
                                                                        x: {
                                                                            r: ["custom", "custom.customId", "columnId"],
                                                                            s: "_0?_1:_2"
                                                                        }
                                                                    }, "-assistQuery-grid"]
                                                                }
                                                            }, "\r\n                        "]
                                                        }, "\r\n                      "]
                                                    }, "\r\n                    "]
                                                }],
                                                x: {
                                                    r: ["inputType"],
                                                    s: '_0==="DATE"'
                                                }
                                            }, "                  "],
                                            x: {
                                                r: ["inputType"],
                                                s: '_0==="input"||!_0'
                                            }
                                        }, "                  ", {
                                            t: 7,
                                            e: "div",
                                            a: {
                                                "class": "input-group-btn"
                                            },
                                            f: ["\r\n                    ", {
                                                t: 7,
                                                e: "button",
                                                a: {
                                                    title: [{
                                                        t: 2,
                                                        r: "locale.tooltip.clearValue"
                                                    }],
                                                    type: "button",
                                                    "class": "btn btn-default"
                                                },
                                                v: {
                                                    click: {
                                                        n: "clearNormalFilterInput",
                                                        d: [{
                                                            t: 2,
                                                            r: "."
                                                        }]
                                                    }
                                                },
                                                f: ["\r\n                      ", {
                                                    t: 7,
                                                    e: "span",
                                                    a: {
                                                        "class": "glyphicon glyphicon-remove"
                                                    }
                                                }, "\r\n                    "]
                                            }, "\r\n                  "]
                                        }, "\r\n\r\n                "]
                                    }, "\r\n              "]
                                }, "\n"],
                                n: 50,
                                x: {
                                    r: ["GRID_FILTER_TYPE.DISABLED", "dataFieldOption.filterType"],
                                    s: "_0!=_1"
                                }
                            }],
                            r: "dataFields"
                        }, "        "]
                    }, "\r\n      "]
                }, "\r\n\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "btn-toolbar pull-right",
                        style: "margin-top: 10px"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "button",
                        a: {
                            type: "button",
                            "class": "btn btn-default btn-sm"
                        },
                        v: {
                            click: "cancelDataFilter"
                        },
                        f: [{
                            t: 2,
                            r: "locale.button.cancel"
                        }]
                    }, "\r\n        ", {
                        t: 7,
                        e: "button",
                        a: {
                            type: "button",
                            "class": "btn btn-primary btn-sm"
                        },
                        v: {
                            click: "confirmDataFilter"
                        },
                        f: [{
                            t: 2,
                            r: "locale.button.confirm"
                        }]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\n    ", {
                t: 7,
                e: "div",
                a: {
                    id: [{
                        t: 2,
                        r: "elementId"
                    }, "-rule-filter"],
                    "class": "tab-pane"
                },
                f: ["\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "box-wrapper box-wrapper-default"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "box-heading"
                        },
                        f: [{
                            t: 2,
                            r: "locale.dataFilter.rule.title"
                        }]
                    }, "\r\n        ", {
                        t: 7,
                        e: "div",
                        a: {
                            "class": "box-body"
                        },
                        f: ["\r\n          ", {
                            t: 7,
                            e: "div",
                            f: ["\r\n            ", {
                                t: 7,
                                e: "table",
                                a: {
                                    id: [{
                                        t: 2,
                                        r: "elementId"
                                    }, "-ruleField-grid"]
                                }
                            }, "\r\n\r\n            ", {
                                t: 7,
                                e: "div",
                                a: {
                                    "class": "form-horizontal",
                                    style: "margin-bottom: 5px"
                                },
                                f: ["\r\n              ", {
                                    t: 7,
                                    e: "div",
                                    a: {
                                        "class": "row pass-row"
                                    },
                                    f: ["\r\n                ", {
                                        t: 7,
                                        e: "label",
                                        a: {
                                            "class": "col-sm-1 control-label"
                                        },
                                        f: [{
                                            t: 2,
                                            r: "locale.dataFilter.rule.labels.operator"
                                        }, "："]
                                    }, "\r\n\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "col-sm-9 btn-group btn-group-sm"
                                        },
                                        f: ["\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.GREATER_THAN"
                                                    }]
                                                }
                                            },
                                            f: ["\r\n                    ", {
                                                t: 2,
                                                r: "OPERATOR.GREATER_THAN"
                                            }]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.LESS_THAN"
                                                    }]
                                                }
                                            },
                                            f: ["\r\n                    ", {
                                                t: 2,
                                                r: "OPERATOR.LESS_THAN"
                                            }]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.GREATER_THAN_OR_EQUAL_TO"
                                                    }]
                                                }
                                            },
                                            f: ["\r\n                    ", {
                                                t: 2,
                                                r: "OPERATOR.GREATER_THAN_OR_EQUAL_TO"
                                            }, "\r\n                  "]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.LESS_THAN_OR_EQUAL_TO"
                                                    }]
                                                }
                                            },
                                            f: ["\r\n                    ", {
                                                t: 2,
                                                r: "OPERATOR.LESS_THAN_OR_EQUAL_TO"
                                            }, "\r\n                  "]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.EQUAL_TO"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.EQUAL_TO"
                                            }, "\r\n                  "]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.NOT_EQUAL_TO"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.NOT_EQUAL_TO"
                                            }, "\r\n                  "]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.LIKE"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.LIKE"
                                            }, "\r\n                  "]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.NOT_LIKE"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.NOT_LIKE"
                                            }]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.IN"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.IN"
                                            }]
                                        }, "\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperator"],
                                                    s: '_0?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: {
                                                    n: "setOperator",
                                                    d: [{
                                                        t: 2,
                                                        r: "OPERATOR.NOT_IN"
                                                    }]
                                                }
                                            },
                                            f: [{
                                                t: 2,
                                                r: "OPERATOR.NOT_IN"
                                            }]
                                        }, "\r\n                "]
                                    }, "\r\n              "]
                                }, "\r\n\r\n              ", {
                                    t: 7,
                                    e: "div",
                                    a: {
                                        "class": "row pass-row"
                                    },
                                    f: ["\r\n                ", {
                                        t: 7,
                                        e: "label",
                                        a: {
                                            "class": "col-sm-1 control-label"
                                        },
                                        f: [{
                                            t: 2,
                                            r: "locale.dataFilter.rule.labels.operand"
                                        }, "："]
                                    }, "\r\n\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "col-sm-8"
                                        },
                                        f: ["\r\n                  ", {
                                            t: 7,
                                            e: "input",
                                            a: {
                                                type: "text",
                                                "class": "form-control",
                                                placeholder: [{
                                                    t: 2,
                                                    r: "locale.dataFilter.rule.placeholder.operand"
                                                }],
                                                value: [{
                                                    t: 2,
                                                    r: "ruleFilter.operandValue"
                                                }]
                                            }
                                        }, "\r\n                "]
                                    }, "\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "col-sm-1"
                                        },
                                        f: ["\r\n                  ", {
                                            t: 7,
                                            e: "button",
                                            a: {
                                                "class": "btn btn-default btn-sm"
                                            },
                                            m: [{
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.isOperand", "ruleFilter.operandValue"],
                                                    s: '(_0&&_1)?"":"disabled"'
                                                }
                                            }],
                                            v: {
                                                click: "setOperand"
                                            },
                                            f: [{
                                                t: 2,
                                                r: "locale.dataFilter.rule.button.fillOperand"
                                            }, "\r\n                  "]
                                        }, "\r\n                "]
                                    }, "\r\n              "]
                                }, "\r\n\r\n              ", {
                                    t: 7,
                                    e: "div",
                                    a: {
                                        "class": "row pass-row"
                                    },
                                    f: ["\r\n                ", {
                                        t: 7,
                                        e: "label",
                                        a: {
                                            "class": "col-sm-1 control-label"
                                        },
                                        f: [{
                                            t: 2,
                                            r: "locale.dataFilter.rule.labels.singleRule"
                                        }, "："]
                                    }, "\r\n\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "col-sm-8"
                                        },
                                        f: ["\r\n                  ", {
                                            t: 7,
                                            e: "div",
                                            a: {
                                                "class": "scrollable well"
                                            },
                                            f: ["\r\n                    ", {
                                                t: 2,
                                                x: {
                                                    r: ["ruleFilter.rules.length", "locale.dataFilter.rule.placeholder.singleRule", "getDisplayRule", "ruleFilter.rules"],
                                                    s: "_0==0?_1:_2(_3)"
                                                }
                                            }, "\r\n                  "]
                                        }, "\r\n                "]
                                    }, "\r\n                ", {
                                        t: 7,
                                        e: "div",
                                        a: {
                                            "class": "col-sm-1"
                                        },
                                        f: ["\r\n                  ", {
                                            t: 7,
                                            e: "div",
                                            a: {
                                                "class": "vertical-center"
                                            },
                                            f: ["\r\n                    ", {
                                                t: 7,
                                                e: "button",
                                                a: {
                                                    "class": "btn btn-default btn-sm"
                                                },
                                                m: [{
                                                    t: 2,
                                                    x: {
                                                        r: ["ruleFilter.isAddRule"],
                                                        s: '_0?"":"disabled"'
                                                    }
                                                }],
                                                v: {
                                                    click: "addRule"
                                                },
                                                f: [{
                                                    t: 2,
                                                    r: "locale.button.add"
                                                }, "\r\n                    "]
                                            }, "\r\n                    ", {
                                                t: 7,
                                                e: "button",
                                                a: {
                                                    "class": "btn btn-default btn-sm",
                                                    style: "margin-top: 4px"
                                                },
                                                v: {
                                                    click: "clearRule"
                                                },
                                                f: [{
                                                    t: 2,
                                                    r: "locale.button.clear"
                                                }, "\r\n                    "]
                                            }, "\r\n                  "]
                                        }, "\r\n                "]
                                    }, "\r\n              "]
                                }, "\r\n            "]
                            }, "\r\n\r\n            ", {
                                t: 7,
                                e: "table",
                                a: {
                                    id: [{
                                        t: 2,
                                        r: "elementId"
                                    }, "-rule-grid"],
                                    "data-height": "300"
                                }
                            }, "\r\n          "]
                        }, "\r\n        "]
                    }, "\r\n      "]
                }, "\r\n      ", {
                    t: 7,
                    e: "div",
                    a: {
                        "class": "btn-toolbar pull-right",
                        style: "margin-top: 10px"
                    },
                    f: ["\r\n        ", {
                        t: 7,
                        e: "button",
                        a: {
                            type: "button",
                            "class": "btn btn-default btn-sm"
                        },
                        v: {
                            click: "cancelDataFilter"
                        },
                        f: [{
                            t: 2,
                            r: "locale.button.cancel"
                        }]
                    }, "\r\n        ", {
                        t: 7,
                        e: "button",
                        a: {
                            type: "button",
                            "class": "btn btn-primary btn-sm"
                        },
                        v: {
                            click: "confirmDataFilter"
                        },
                        f: [{
                            t: 2,
                            r: "locale.button.confirm"
                        }]
                    }, "\r\n      "]
                }, "\r\n    "]
            }, "\r\n  "]
        }, "\r\n"]
    }, "\r\n"]
};
bdgClient = {},
function(e, t, a, i, s) {
    "use strict";
    function o(t) {
        var i = [];
        return t.config.conditions.length > 0 && i.push({
            clause: {
                left: {
                    type: a.OPERAND_TYPE.CONDITION,
                    value: t.config.conditions
                }
            },
            operator: a.OPERATOR.AND
        }),
        t.chartCom.conditions.length > 0 && i.push({
            clause: {
                left: {
                    type: a.OPERAND_TYPE.CONDITION,
                    value: t.chartCom.conditions
                }
            },
            operator: a.OPERATOR.AND
        }),
        e.each(t.userSetting.conditions, function(e, t) {
            t && t.length > 0 && i.push({
                clause: {
                    left: {
                        type: a.OPERAND_TYPE.CONDITION,
                        value: t
                    }
                },
                operator: a.OPERATOR.AND
            })
        }),
        i.length > 0 ? [{
            condition: i,
            operator: a.OPERATOR.AND
        }] : []
    }
    function n(e) {
        var t = e.chartCom
          , a = t.chartType
          , i = e.config.legend
          , s = {
            datasourceId: t.datasourceId,
            schemaId: t.schemaId,
            tableId: t.tableId,
            relation: t.relation,
            dataFields: t.dataFields,
            conditions: o(e),
            orderBy: t.orderBy ? t.orderBy : [],
            seriesConditions: t.seriesConditions ? t.seriesConditions : [],
            uniqueFields: t.uniqueFields,
            uniqueIndex: 1,
            ignoreBlank: !0,
            localeId: e.localeId,
            locales: t.locales
        }
          , n = {
            chartId: t.chartId,
            chartType: t.chartType,
            chartName: t.chartName,
            chartTitle: t.chartTitle,
            chartSubtitle: t.chartSubtitle,
            chartWidth: t.chartWidth,
            chartHeight: t.chartHeight
        };
        switch (a) {
        case d.LINE:
            n.axisX = t.axisX,
            n.axisYL = t.axisYL,
            n.axisYR = t.axisYR,
            n.series = t.series,
            n.legend = i || void 0,
            s.dataType = e.config.dataType;
            break;
        case d.NORMAL:
            var r = e.config.control;
            n.series = [t.series],
            n.control = t.seriesConditions || {},
            n.control.usl = r && r.usl || t.seriesConditions.usl,
            n.control.lsl = r && r.lsl || t.seriesConditions.lsl;
            break;
        case d.CONTROL:
            n.axisX = t.axisX,
            n.axisYL = t.axisYL,
            n.legend = i || void 0,
            s.dataType = e.config.dataType,
            s.options = t.options;
            break;
        case d.SCATTER:
            n.axisX = t.axisX,
            n.axisYL = t.axisYL,
            n.series = t.series,
            n.legend = i || void 0,
            s.dataType = e.config.dataType
        }
        return {
            basic: s,
            chart: n
        }
    }
    function r() {
        var t = {};
        return t.getComConditions = function(e) {
            return o(e)
        }
        ,
        t.getParams = function(e) {
            return n(e)
        }
        ,
        t.getLocale = function(t) {
            return s.isClientLocale(t) || (t = a.DEFAULT_LOCALE.EN),
            i.initThirdParty(t),
            e.extend(!0, i.getResourceBundle(t, a.I18N_RESOURCE_BUNDLE.PASS), i.getResourceBundle(t, a.I18N_RESOURCE_BUNDLE.BDG))
        }
        ,
        t.CONSTANT = u,
        t
    }
    Ractive.DEBUG = !1;
    var c = {
        COMPONENT_READY: "componentReady",
        DATA: {
            CLICK: "dataClick",
            MOUSEOVER: "dataMouseOver",
            MOUSEOUT: "dataMouseOut"
        }
    }
      , d = {
        LINE: "LINE",
        GAUGE: "GAUGE",
        PIE: "PIE",
        NORMAL: "NORMAL",
        SCATTER: "SCATTER",
        CONTROL: "CONTROL"
    }
      , l = {
        AXES: {
            X: "x",
            YL: "y",
            YR: "y2"
        }
    }
      , u = {
        AXES: {
            X: 1,
            YL: 2,
            YR: 3,
            S: 4
        },
        BDG_TOOLBAR_CLASS: ".bdg-chart-toolbar",
        BDG_TITLE_CLASS: ".bdg-chart-title",
        BDG_SUBTITLE_CLASS: ".bdg-chart-subtitle",
        BDG_CHART_CLASS: ".bdg-chart"
    };
    t.EVENT = c,
    t.TYPE = d,
    t.C3 = l,
    t.getUtils = r
}($, bdgClient, _pass.module.constant, _pass.module.i18n, _pass.module.util);
!function(e, t, a, n, o, r) {
    "use strict";
    function i(t, a) {
        var n = {
            el: t.model.elementId,
            data: t.model
        };
        t.ractive = new Ractive(e.extend(n, a))
    }
    function c(o, r) {
        if (o.model = {
            locale: T.getLocale(o.localeId),
            localeId: o.localeId,
            localeList: [],
            chartType: o.config.chartType || t.TYPE.LINE,
            elementId: o.config.elementId,
            dataFields: o.chartCom.dataFields,
            toolbar: o.config.toolbar,
            options: o.config.options,
            defaultChartOptions: {},
            chart: r,
            combine: {
                list: []
            },
            normalFilter: {},
            ruleFilter: {
                isOperator: !1,
                isOperand: !1,
                isAddRule: !1,
                rules: [],
                rulesList: [],
                operandValue: ""
            },
            seriesFilter: {
                selectSeries: {},
                seriesList: [],
                selectValue: {},
                valueList: [],
                ruleList: [],
                seriesConditions: []
            },
            colorSetting: {
                colors: {},
                list: []
            },
            OPERATOR: a.OPERATOR,
            GRID_FILTER_TYPE: a.GRID_FILTER_TYPE,
            DATETIME_PICKER_TYPE: a.DATETIME_PICKER_TYPE,
            tempChartOptions: {},
            tempChartConfig: {},
            tempChartColor: {}
        },
        o.chartCom.locales) {
            var i = o.chartCom.locales[o.localeId] ? o.chartCom.locales[o.localeId] : o.chartCom.locales[a.DEFAULT_LOCALE.EN];
            o.model.dataFields = n.getDataFieldsByLocale(i, o.chartCom.dataFields)
        }
        var c = Ractive.defaults.data;
        c.inArray = function(t, a) {
            return e.inArray(t, a) >= 0
        }
        ,
        c.getDisplayRule = n.getDisplayRule
    }
    function l(t) {
        r.handleDataFilterEvent(t);
        var a = e("#" + t.config.elementId + "-dataFilter-win").data("kendoWindow");
        t.ractive.on("confirmDataFilter", function(e) {
            var o = t.ractive.get("normalFilter");
            t.userSetting.conditions.normalFilter = n.getNormalFilterConditions(t.chartCom.dataFields, o),
            t.userSetting.conditions.ruleFilter = n.getRuleConditions(t.model.ruleFilter.rulesList),
            t.model.toolbar.dataFiltered = r.hasDataFiltered(t),
            t.ractive.set(t.model),
            E(t),
            a.close()
        }),
        s(t),
        C(t)
    }
    function s(e) {
        r.handleNormalFilterEvent(e)
    }
    function C(t) {
        r.handleRuleFilterEvent(t);
        var a = e("#" + t.config.elementId + "-ruleField-grid");
        a.on("click-row.bs.table", function(e, a, n) {
            var o = t.chartCom.dataFields[n.index()]
              , r = t.model.ruleFilter
              , i = r.rules;
            0 == i.length || r.isAddRule ? i.push({
                dataField: o
            }) : i[i.length - 1].dataField = o,
            r.isAddRule = !1,
            r.isOperator = !0,
            t.ractive.set(t.model)
        })
    }
    function E(e, a) {
        var n = e.config.chartType || t.TYPE.LINE;
        switch (n.toUpperCase()) {
        case t.TYPE.LINE:
            return t.Component.Line.getAPI().drawChart(e, a);
        case t.TYPE.GAUGE:
            return t.Component.Gauge.getAPI().drawChart(e, a);
        case t.TYPE.NORMAL:
            return t.Component.Normal.getAPI().drawChart(e, a);
        case t.TYPE.CONTROL:
            return t.Component.Control.getAPI().drawChart(e, a);
        case t.TYPE.SCATTER:
            return t.Component.Scatter.getAPI().drawChart(e, a)
        }
    }
    function d(e, t) {
        t.localeId = e,
        t.model.locale = n.isClientLocale(e) ? T.getLocale(e) : T.getLocale(a.DEFAULT_LOCALE.EN),
        t.model.localeId = e,
        t.chartCom.locales && (t.model.dataFields = n.getDataFieldsByLocale(t.chartCom.locales[e], t.chartCom.dataFields)),
        t.ractive.set(t.model),
        t.ractive.fire(a.INTERNAL_EVENT.CHANGE_LOCALE, t.model.locale),
        E(t)
    }
    function p(t) {
        if (t.chartCom.locales) {
            var a = o(t.config.host)
              , n = [];
            e.each(t.chartCom.locales, function(e, t) {
                n.push(e)
            }),
            a.getLocalesById(n).success(function(e) {
                t.model.localeList = e,
                t.ractive.set(t.model)
            })
        }
    }
    function h() {
        var e = {};
        return e.prepareTemplateDataModel = function(e, t) {
            c(e, t)
        }
        ,
        e.createTemplate = function(e, a) {
            var n = e.config.chartType || t.TYPE.LINE;
            switch (n.toUpperCase()) {
            case t.TYPE.NORMAL:
                a.data = {},
                a.data.format = function(t) {
                    var a = e.config
                      , n = e.chartCom.seriesConditions
                      , o = a.control && a.control.precision || n.precision;
                    return t.toFixed(o)
                }
            }
            i(e, a)
        }
        ,
        e.handleDataFilterEvent = function(e) {
            l(e)
        }
        ,
        e.handleSpecialSetting = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().handleSpecialSetting(e);
                break;
            case t.TYPE.NORMAL:
                t.Component.Normal.getAPI().handleSpecialSetting(e);
                break;
            case t.TYPE.CONTROL:
                t.Component.Control.getAPI().handleSpecialSetting(e)
            }
        }
        ,
        e.handleChartConfigEvent = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().handleChartConfigEvent(e);
                break;
            case t.TYPE.GAUGE:
                t.Component.Gauge.getAPI().handleChartConfigEvent(e);
                break;
            case t.TYPE.NORMAL:
                t.Component.Normal.getAPI().handleChartConfigEvent(e);
                break;
            case t.TYPE.CONTROL:
                t.Component.Control.getAPI().handleChartConfigEvent(e);
                break;
            case t.TYPE.SCATTER:
                t.Component.Scatter.getAPI().handleChartConfigEvent(e)
            }
        }
        ,
        e.handleSeriesFilterEvent = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().handleSeriesFilterEvent(e)
            }
        }
        ,
        e.handleChartCombineEvent = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().handleChartCombineEvent(e)
            }
        }
        ,
        e.handleChartColorEvent = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().handleChartColorEvent(e);
                break;
            case t.TYPE.NORMAL:
                t.Component.Normal.getAPI().handleChartColorEvent(e)
            }
        }
        ,
        e.getDefaultChartOptions = function(e) {
            switch (e.toUpperCase()) {
            case t.TYPE.LINE:
                return t.Component.Line.defaultChartOptions;
            case t.TYPE.GAUGE:
                return t.Component.Gauge.defaultChartOptions;
            case t.TYPE.PIE:
                return t.Component.Pie.defaultChartOptions;
            case t.TYPE.NORMAL:
                return t.Component.Normal.defaultChartOptions;
            case t.TYPE.CONTROL:
                return t.Component.Control.defaultChartOptions
            }
        }
        ,
        e.initChart = function(e, a) {
            var n = e.config.chartType || t.TYPE.LINE;
            switch (n.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().initChart(e, a);
                break;
            case t.TYPE.NORMAL:
                t.Component.Normal.getAPI().initChart(e, a);
                break;
            case t.TYPE.CONTROL:
                t.Component.Control.getAPI().initChart(e, a)
            }
        }
        ,
        e.drawChart = function(e, t) {
            return E(e, t)
        }
        ,
        e.chartExport = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                return t.Component.Line.getAPI().chartExport(e);
            case t.TYPE.GAUGE:
                return t.Component.Gauge.getAPI().chartExport(e);
            case t.TYPE.CONTROL:
                t.Component.Control.getAPI().chartExport(e);
                break;
            case t.TYPE.SCATTER:
                return t.Component.Scatter.getAPI().chartExport(e)
            }
        }
        ,
        e.chartDownload = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                t.Component.Line.getAPI().chartDownload(e);
                break;
            case t.TYPE.GAUGE:
                t.Component.Gauge.getAPI().chartDownload(e);
                break;
            case t.TYPE.CONTROL:
                t.Component.Control.getAPI().chartDownload(e);
                break;
            case t.TYPE.SCATTER:
                t.Component.Scatter.getAPI().chartDownload(e)
            }
        }
        ,
        e.addNoiseCondition = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.NORMAL:
                t.Component.Normal.getAPI().addNoiseCondition(e)
            }
        }
        ,
        e.setLocale = function(e, t) {
            d(e, t)
        }
        ,
        e.initLocaleList = function(e) {
            p(e)
        }
        ,
        e.getData = function(e) {
            var a = e.config.chartType || t.TYPE.LINE;
            switch (a.toUpperCase()) {
            case t.TYPE.LINE:
                return t.Component.Line.getAPI().getData(e)
            }
        }
        ,
        e.setXInverted = function(e, a, n) {
            var o = e.config.chartType || t.TYPE.LINE;
            switch (o.toUpperCase()) {
            case t.TYPE.LINE:
                return t.Component.Line.getAPI().setXInverted(e, a, n);
            case t.TYPE.CONTROL:
                return t.Component.Control.getAPI().setXInverted(e, a, n)
            }
        }
        ,
        e.highlight = function(e, a, n, o) {
            var r = e.config.chartType || t.TYPE.LINE;
            switch (r.toUpperCase()) {
            case t.TYPE.SCATTER:
                return t.Component.Scatter.getAPI().highlight(e, a, n, o)
            }
        }
        ,
        e
    }
    var T = t.getUtils();
    t.getCoreAPI = h
}($, bdgClient, _pass.module.constant, _pass.module.util, _pass.module.service.passService, _pass.module.dataFilter);
!function(e, t, n) {
    "use strict";
    function o() {}
    function i(t) {
        var n = {
            show: !0,
            dataFilter: !0,
            chartConfig: !0,
            chartDownload: !0,
            dataDownload: !0,
            seriesFilter: !0,
            chartCombine: !0,
            chartColor: !0,
            chartRotate: !0,
            setXInverted: !0,
            statistics: !0
        }
          , o = {
            elementId: null ,
            chartId: null ,
            host: _pass.getServiceHost() ? _pass.getServiceHost() : location.host,
            conditions: [],
            toolbar: e.extend(!0, n, t.toolbar)
        }
          , i = {
            config: e.extend(!0, o, t),
            localeId: _pass.getDefaultLocale(),
            $ele: e("#" + t.elementId),
            userSetting: {
                conditions: {
                    gridFilter: [],
                    normalFilter: [],
                    ruleFilter: []
                },
                seriesConditions: {
                    clientSeriesConditions: []
                },
                sort: []
            }
        };
        return i.$ele.addClass("pass-client bdg-component"),
        _pass.extensions && (e.each(_pass.extensions, function(e, t) {
            1 == t.length && t(i)
        }),
        i.appendSchemaIdConditions && i.appendSchemaIdConditions(i.config.conditions)),
        i
    }
    function a(n) {
        var o = n.config.chartType || t.TYPE.LINE
          , i = {
            on: function(e, t) {
                n.$ele.off(e).on(e, t)
            },
            setLocale: function(e) {
                s.setLocale(e, n)
            },
            draw: function(t, o, i) {
                return t && (n.appendSchemaIdConditions && n.appendSchemaIdConditions(t),
                n.config.conditions = t),
                i && (delete i.chartId,
                delete i.chartOptions,
                e.extend(!0, n.config, i)),
                s.drawChart(n, o)
            },
            chartExport: function() {
                return s.chartExport(n)
            },
            getData: function() {
                return s.getData(n)
            }
        };
        switch (o.toUpperCase()) {
        case t.TYPE.LINE:
            i.xInverted = function() {
                s.setXInverted(n, !0, !0)
            }
            ;
            break;
        case t.TYPE.NORMAL:
            i.getStatistics = function() {
                return n.model.statistics
            }
            ,
            i.getCapability = function() {
                return n.model.capability
            }
            ,
            i.getGroups = function() {
                return n.model.statistics.groups.barGroups
            }
            ;
            break;
        case t.TYPE.SCATTER:
            i.highlight = function(e, t, o) {
                s.highlight(n, e, t, o)
            }
        }
        return i
    }
    var s = t.getCoreAPI()
      , r = t.getUtils();
    delete t.getCoreAPI,
    delete t.getUtils,
    function() {
        o.prototype.init = i,
        o.prototype.publish = a,
        t.Component = o
    }(),
    t.register = function(o) {
        var i, c, l = o.chartType || t.TYPE.LINE;
        switch (l.toUpperCase()) {
        case t.TYPE.LINE:
            i = new t.Component.Line(s,r,o);
            break;
        case t.TYPE.GAUGE:
            i = new t.Component.Gauge(s,r,o);
            break;
        case t.TYPE.NORMAL:
            i = new t.Component.Normal(s,r,o);
            break;
        case t.TYPE.CONTROL:
            i = new t.Component.Control(s,r,o);
            break;
        case t.TYPE.SCATTER:
            i = new t.Component.Scatter(s,r,o)
        }
        return c = a(i),
        c.on(t.EVENT.COMPONENT_READY, function() {
            _pass.extensions && e.each(_pass.extensions, function(e, t) {
                2 == t.length && t(i, c)
            }),
            e(document).on(n.EVENT.CHANGE_LOCALE, function(e, t) {
                t !== i.localeId && c.setLocale(t)
            })
        }),
        c
    }
}($, bdgClient, _pass.module.constant);
!function(t, e) {
    var i = {
        queryType: {
            report: "Report",
            sum: "Sum By Group",
            pivot: "Pivot"
        },
        filterSort: {
            title: "Field Sort Setting",
            button: {
                desc: "DESC"
            },
            action: "Action",
            sortList: "Sort Rule List (Join Sorting column from top to bottom)",
            placeholder: {
                rule: "Single column sorting settings, press the 'Add' button can be placed in the sort list"
            }
        },
        fieldPicker: {
            title: {
                GROUP: "Group Field List",
                SUM: "Sum Field List"
            },
            tooltip: {
                GROUP: "Please select group by field",
                SUM: "Please select sum filed"
            }
        },
        sumQuery: {
            title: "Field Setting",
            label: {
                GROUP: "Group By Field",
                SUM: "Sum Field"
            },
            placeholder: {
                GROUP: "Please select group by field (Column display order equal to the selection order.)",
                SUM: "Please select sum filed (Column display order equal to the selection order.)"
            },
            msg: {
                noSumFields: {
                    title: "No sum field can be selected",
                    content: "This component has no numeric field!!"
                }
            }
        },
        toolbar: {
            dataFilter: "Data Filter",
            fieldSort: "Field Sort",
            exportExcel: "Export Excel"
        },
        common: {
            data: "Data",
            value: "Value",
            statistics: "Statistics",
            indices: "Indices",
            general: "General",
            show: "Show",
            width: "Width",
            height: "Height",
            length: "Length",
            type: "Type",
            style: "Style",
            color: "Color",
            auto: "Auto"
        },
        chart: {
            toolbar: {
                chartConfig: "Chart configuration",
                seriesFilter: "Chart series filter",
                chartCombine: "Chart combination",
                chartColor: "Chart coloration",
                chartRotate: "X-Y invert",
                chartDownload: "Chart download",
                dataDownload: "Chart data download",
                chartReload: "Chart reload",
                setXInverted: "Invert axis-X",
                statistics: "Statistics"
            },
            window: {
                chartConfig: "Chart configuration",
                seriesFilter: "Chart series filter",
                chartCombine: "Chart combination",
                chartColor: "Chart coloration",
                statistics: "Statistics"
            },
            options: {
                rightLeftPos: {
                    inner: {
                        center: "Inner Center",
                        right: "Inner Right",
                        left: "Inner Left"
                    },
                    outer: {
                        center: "Outer Center",
                        right: "Outer Right",
                        left: "Outer Left"
                    }
                },
                topBottomPos: {
                    inner: {
                        middle: "Inner Middle",
                        top: "Inner Top",
                        bottom: "Inner Bottom"
                    },
                    outer: {
                        middle: "Outer Middle",
                        top: "Outer Top",
                        bottom: "Outer Bottom"
                    }
                },
                rightBottomPos: {
                    right: "Right",
                    bottom: "Bottom"
                }
            },
            line: {
                chartType: "Chart Type",
                chartName: "Chart Name",
                chartColor: "Chart Color",
                chartSeries: "Chart Series",
                seriesValue: "Series Value",
                seriesRule: "Series Rule(Using OR cascade between rules)",
                chartConfig: {
                    tick: {
                        label: "Tick",
                        outer: "Outer Tick"
                    },
                    label: {
                        position: "Label Position"
                    },
                    padding: {
                        label: "Padding",
                        top: "Top",
                        bottom: "Bottom"
                    },
                    x: {
                        title: "X-axis",
                        height: "Height",
                        tick: {
                            centered: "Centered",
                            culling: "Culling",
                            rotate: "Rotate"
                        }
                    },
                    y: {
                        title: "Left Y-axis",
                        inner: "Inner",
                        center: "Center",
                        max: "Max",
                        min: "Min",
                        inverted: "Inverted"
                    },
                    y2: {
                        title: "Right Y-axis"
                    },
                    legend: {
                        title: "Legend",
                        position: "Position"
                    },
                    tooltip: {
                        title: "Tooltip",
                        grouped: "Grouped"
                    },
                    point: {
                        title: "Point",
                        focus: "Focus Expand"
                    },
                    zoom: {
                        title: "Zoom",
                        enabled: "X-axis",
                        rescale: "Y-axis"
                    }
                }
            },
            gauge: {
                chartConfig: {
                    center: {
                        title: "Position",
                        horizontal: "Horizontal Center",
                        vertical: "Vertical Center"
                    },
                    radius: "Radius",
                    offsetCenter: {
                        horizontal: "Horizontal Offset",
                        vertical: "Vertical Offset"
                    },
                    title: {
                        title: "Title"
                    },
                    textStyle: {
                        fontSize: "Font Size",
                        color: "Font Color"
                    },
                    axisLine: {
                        title: "Axis Line"
                    },
                    axisTick: {
                        title: "Axis Tick",
                        splitNumber: "Split Number",
                        length: "Tick Length",
                        lineStyle: {
                            width: "Tick Width",
                            type: "Tick Type",
                            color: "Tick Color"
                        }
                    },
                    axisLabel: {
                        show: "Show Label"
                    },
                    splitLine: {
                        title: "Split Line",
                        line: "Line",
                        font: "Label Font"
                    },
                    pointer: {
                        title: "Pointer"
                    },
                    detail: {
                        title: "Pointer Value",
                        backgroundColor: "Background",
                        borderWidth: "Border Width",
                        borderColor: "Border Color",
                        width: "Width",
                        height: "Height"
                    }
                }
            },
            normal: {
                statistics: {
                    label: "Statistics",
                    n: "Samples",
                    max: "Max",
                    min: "Min",
                    median: "Median",
                    mean: "Mean",
                    standardDeviation: "Standard Deviation",
                    variance: "Variance",
                    kurtosis: "Kurtosis",
                    skewness: "Skewness"
                },
                capability: {
                    label: "Capability",
                    ca: "Ca",
                    cp: "Cp",
                    cpk: "Cpk",
                    pp: "Pp",
                    ppk: "Ppk"
                },
                groups: {
                    label: "Groups",
                    no: "Number",
                    start: "Start",
                    end: "End",
                    counts: "Counts"
                }
            }
        }
    };
    t.addResourceBundle(e.DEFAULT_LOCALE.EN, e.I18N_RESOURCE_BUNDLE.BDG, i)
}(_pass.module.i18n, _pass.module.constant);
!function(t, e) {
    var i = {
        queryType: {
            report: "資料報表",
            sum: "小計查詢",
            pivot: "樞紐分析"
        },
        filterSort: {
            title: "欄位排序設定",
            button: {
                desc: "遞減"
            },
            action: "操作",
            sortList: "排序欄位清單 (由上而下加入排序欄位)",
            placeholder: {
                rule: "單一欄位排序設定，按新增可置入排序欄位清單"
            }
        },
        fieldPicker: {
            title: {
                GROUP: "分群欄位清單",
                SUM: "小計欄位清單"
            },
            tooltip: {
                GROUP: "挑選分群欄位",
                SUM: "挑選小計欄位"
            }
        },
        sumQuery: {
            title: "欄位設定",
            label: {
                GROUP: "分群欄位",
                SUM: "小計欄位"
            },
            placeholder: {
                GROUP: "請選擇要 Group By 的欄位 (選擇順序 = 資料呈現時欄位顯示順序)",
                SUM: "請選擇要顯示的小計欄位 (選擇順序 = 資料呈現時欄位顯示順序)"
            },
            msg: {
                noSumFields: {
                    title: "無小計欄位可挑選",
                    content: "此元件無任何數值型欄位，因此無法挑選!!"
                }
            }
        },
        toolbar: {
            dataFilter: "資料過濾",
            fieldSort: "欄位排序",
            exportExcel: "匯出 Excel"
        },
        common: {
            data: "數據",
            value: "值",
            statistics: "統計量",
            indices: "指標",
            general: "一般",
            show: "顯示",
            width: "寬度",
            height: "高度",
            length: "長度",
            type: "種類",
            style: "樣式",
            color: "顏色",
            auto: "自動"
        },
        chart: {
            toolbar: {
                chartConfig: "圖形組態",
                seriesFilter: "圖形系列顯示",
                chartCombine: "圖形組合",
                chartColor: "圖形顏色",
                chartRotate: "XY軸轉換",
                chartDownload: "圖形下載",
                dataDownload: "圖形資料下載",
                chartReload: "圖形重整",
                setXInverted: "X軸翻轉",
                statistics: "統計量值"
            },
            window: {
                chartConfig: "圖形組態設定",
                seriesFilter: "圖形系列顯示設定",
                chartCombine: "圖形組合設定",
                chartColor: "圖形顏色設定",
                statistics: "統計量值與指標值"
            },
            options: {
                rightLeftPos: {
                    inner: {
                        center: "內部置中",
                        right: "內部靠右",
                        left: "內部靠左"
                    },
                    outer: {
                        center: "外部置中",
                        right: "外部靠右",
                        left: "外部靠左"
                    }
                },
                topBottomPos: {
                    inner: {
                        middle: "內部置中",
                        top: "內部置頂",
                        bottom: "內部置底"
                    },
                    outer: {
                        middle: "外部置中",
                        top: "外部置頂",
                        bottom: "外部置底"
                    }
                },
                rightBottomPos: {
                    right: "右側",
                    bottom: "底部"
                }
            },
            line: {
                chartType: "線圖種類",
                chartName: "線圖名稱",
                chartColor: "線圖顏色",
                chartSeries: "線圖系列",
                seriesValue: "系列值",
                seriesRule: "規則清單(規則間以OR串接)",
                chartConfig: {
                    tick: {
                        label: "刻度",
                        outer: "端點顯示"
                    },
                    label: {
                        position: "標籤位置"
                    },
                    padding: {
                        label: "端點位移",
                        top: "頂部",
                        bottom: "底部"
                    },
                    x: {
                        title: "X軸",
                        height: "高度",
                        tick: {
                            centered: "置中",
                            culling: "減量顯示",
                            rotate: "旋轉"
                        }
                    },
                    y: {
                        title: "左Y軸",
                        inner: "向內顯示",
                        center: "中間值",
                        max: "最大值",
                        min: "最小值",
                        inverted: "反轉"
                    },
                    y2: {
                        title: "右Y軸"
                    },
                    legend: {
                        title: "圖例",
                        position: "位置"
                    },
                    tooltip: {
                        title: "提示",
                        grouped: "群組顯示"
                    },
                    point: {
                        title: "線上圓點",
                        focus: "聚焦擴張"
                    },
                    zoom: {
                        title: "滾動延展",
                        enabled: "X軸",
                        rescale: "Y軸"
                    }
                }
            },
            gauge: {
                chartConfig: {
                    center: {
                        title: "位置",
                        horizontal: "水平中心點",
                        vertical: "垂直中心點"
                    },
                    radius: "半徑",
                    offsetCenter: {
                        horizontal: "水平位移",
                        vertical: "垂直位移"
                    },
                    title: {
                        title: "標題"
                    },
                    textStyle: {
                        fontSize: "文字大小",
                        color: "文字顏色"
                    },
                    axisLine: {
                        title: "外框"
                    },
                    axisTick: {
                        title: "區間刻度",
                        splitNumber: "區間刻度數",
                        length: "刻度線長度",
                        lineStyle: {
                            width: "刻度線寬度",
                            type: "刻度線樣式",
                            color: "刻度線顏色"
                        }
                    },
                    axisLabel: {
                        show: "文字顯示"
                    },
                    splitLine: {
                        title: "區間分隔線",
                        line: "分隔線",
                        font: "分隔線文字"
                    },
                    pointer: {
                        title: "指針"
                    },
                    detail: {
                        title: "指針數據",
                        backgroundColor: "背景顏色",
                        borderWidth: "框線厚度",
                        borderColor: "框線顏色",
                        width: "框寬度",
                        height: "框高度"
                    }
                }
            },
            normal: {
                statistics: {
                    label: "統計量值",
                    n: "樣本數",
                    max: "最大值",
                    min: "最小值",
                    median: "中位數",
                    mean: "平均數",
                    standardDeviation: "標準差",
                    variance: "變異數",
                    kurtosis: "峰度",
                    skewness: "偏度"
                },
                capability: {
                    label: "製程指標",
                    ca: "製程準確度",
                    cp: "製程精密度",
                    cpk: "製程能力指數",
                    pp: "製程效能",
                    ppk: "製程效能指標"
                },
                groups: {
                    label: "統計分組",
                    no: "組別",
                    start: "起始",
                    end: "結束",
                    counts: "累計"
                }
            }
        }
    };
    t.addResourceBundle(e.DEFAULT_LOCALE.TW, e.I18N_RESOURCE_BUNDLE.BDG, i)
}(_pass.module.i18n, _pass.module.constant);
!function(t, e) {
    var i = {
        queryType: {
            report: "资料报表",
            sum: "小计查询",
            pivot: "枢纽分析"
        },
        filterSort: {
            title: "栏位排序设定",
            button: {
                desc: "递减"
            },
            action: "操作",
            sortList: "排序栏位清单(由上而下加入排序栏位)",
            placeholder: {
                rule: "单一栏位排序设定，按新增可置入排序栏位清单"
            }
        },
        fieldPicker: {
            title: {
                GROUP: "分群栏位清单",
                SUM: "小计栏位清单"
            },
            tooltip: {
                GROUP: "挑选分群栏位",
                SUM: "挑选小计栏位"
            }
        },
        sumQuery: {
            title: "栏位设定",
            label: {
                GROUP: "分群栏位",
                SUM: "小计栏位"
            },
            placeholder: {
                GROUP: "请选择要Group By 的栏位(选择顺序= 资料呈现时栏位显示顺序)",
                SUM: "请选择要显示的小计栏位(选择顺序= 资料呈现时栏位显示顺序)"
            },
            msg: {
                noSumFields: {
                    title: "无小计栏位可挑选",
                    content: "此元件无任何数值型栏位，因此无法挑选!!"
                }
            }
        },
        toolbar: {
            dataFilter: "资料过滤",
            fieldSort: "栏位排序",
            exportExcel: "汇出 Excel"
        },
        common: {
            data: "数据",
            value: "值",
            statistics: "统计量",
            indices: "指标",
            general: "一般",
            show: "显示",
            width: "宽度",
            height: "高度",
            length: "长度",
            type: "种类",
            style: "样式",
            color: "颜色",
            auto: "自动"
        },
        chart: {
            toolbar: {
                chartConfig: "图形组态",
                seriesFilter: "图形系列显示",
                chartCombine: "图形组合",
                chartColor: "图形颜色",
                chartRotate: "XY轴转换",
                chartDownload: "图形下载",
                dataDownload: "图形数据下载",
                chartReload: "图形重整",
                setXInverted: "X轴翻转",
                statistics: "统计量值"
            },
            window: {
                chartConfig: "图形组态设定",
                seriesFilter: "图形系列显示设定",
                chartCombine: "图形组合设定",
                chartColor: "图形颜色设定",
                statistics: "统计量值与指标值"
            },
            options: {
                rightLeftPos: {
                    inner: {
                        center: "内部置中",
                        right: "內部靠右",
                        left: "內部靠左"
                    },
                    outer: {
                        center: "外部置中",
                        right: "外部靠右",
                        left: "外部靠左"
                    }
                },
                topBottomPos: {
                    inner: {
                        middle: "內部置中",
                        top: "内部置顶",
                        bottom: "內部置底"
                    },
                    outer: {
                        middle: "外部置中",
                        top: "外部置顶",
                        bottom: "外部置底"
                    }
                },
                rightBottomPos: {
                    right: "右侧",
                    bottom: "底部"
                }
            },
            line: {
                chartType: "线图种类",
                chartName: "线图名称",
                chartColor: "线图颜色",
                chartSeries: "线图系列",
                seriesValue: "系列值",
                seriesRule: "规则清单(规则间以OR串接)",
                chartConfig: {
                    tick: {
                        label: "刻度",
                        outer: "端点显示"
                    },
                    label: {
                        position: "标签位置"
                    },
                    padding: {
                        label: "端点位移",
                        top: "顶部",
                        bottom: "底部"
                    },
                    x: {
                        title: "X轴",
                        height: "高度",
                        tick: {
                            centered: "置中",
                            culling: "减量显示",
                            rotate: "旋转"
                        }
                    },
                    y: {
                        title: "左Y轴",
                        inner: "向内显示",
                        center: "中间值",
                        max: "最大值",
                        min: "最小值",
                        inverted: "反转"
                    },
                    y2: {
                        title: "右Y轴"
                    },
                    legend: {
                        title: "图例",
                        position: "位置"
                    },
                    tooltip: {
                        title: "提示",
                        grouped: "群组显示"
                    },
                    point: {
                        title: "线上圆点",
                        focus: "聚焦扩张"
                    },
                    zoom: {
                        title: "滚动延展",
                        enabled: "X轴",
                        rescale: "Y轴"
                    }
                }
            },
            gauge: {
                chartConfig: {
                    center: {
                        title: "位置",
                        horizontal: "水平中心点",
                        vertical: "垂直中心点"
                    },
                    radius: "半径",
                    offsetCenter: {
                        horizontal: "水平位移",
                        vertical: "垂直位移"
                    },
                    title: {
                        title: "标题"
                    },
                    textStyle: {
                        fontSize: "文字大小",
                        color: "文字颜色"
                    },
                    axisLine: {
                        title: "外框"
                    },
                    axisTick: {
                        title: "区间刻度",
                        splitNumber: "区间刻度数",
                        length: "刻度线长度",
                        lineStyle: {
                            width: "刻度线宽度",
                            type: "刻度线样式",
                            color: "刻度线颜色"
                        }
                    },
                    axisLabel: {
                        show: "文字显示"
                    },
                    splitLine: {
                        title: "区间分隔线",
                        line: "分隔线",
                        font: "分隔线文字"
                    },
                    pointer: {
                        title: "指针"
                    },
                    detail: {
                        title: "指针数据",
                        backgroundColor: "背景颜色",
                        borderWidth: "框线厚度",
                        borderColor: "框线颜色​​",
                        width: "框宽度",
                        height: "框高度"
                    }
                }
            },
            normal: {
                statistics: {
                    label: "统计量值",
                    n: "样本数",
                    max: "最大值",
                    min: "最小值",
                    median: "中位数",
                    mean: "平均数",
                    standardDeviation: "标准差",
                    variance: "变异数",
                    kurtosis: "峰度",
                    skewness: "偏度"
                },
                capability: {
                    label: "制程指标",
                    ca: "制程准确度",
                    cp: "制程精密度",
                    cpk: "制程能力指数",
                    pp: "制程效能",
                    ppk: "制程效能指标"
                },
                groups: {
                    label: "统计分组",
                    no: "组别",
                    start: "起始",
                    end: "结束",
                    counts: "累计"
                }
            }
        }
    };
    t.addResourceBundle(e.DEFAULT_LOCALE.CN, e.I18N_RESOURCE_BUNDLE.BDG, i)
}(_pass.module.i18n, _pass.module.constant);
!function(e, t, o, i, a, n) {
    "use strict";
    function r(e, t, o) {
        return G = e,
        K = t,
        l(o)
    }
    function l(o) {
        var a = t.Component.prototype.init(e.extend(!0, {}, o))
          , r = n(a.config.host);
        return i.showLoading(a.config.elementId),
        r.getChartCom(a.config.chartId).success(function(o) {
            a.chartCom = o,
            a.defaultChartOptions = e.extend(!0, {}, G.getDefaultChartOptions(o.chartType)),
            a.config.localeId && (a.localeId = a.config.localeId),
            a.localeId = a.localeId ? a.localeId : a.chartCom.localeId,
            f(a),
            G.prepareTemplateDataModel(a);
            var i = K.getParams(a);
            i.basic.conditions = K.getComConditions(a),
            r.line.getChartData(i).success(function(e) {
                c(a, function() {
                    G.initLocaleList(a),
                    a.ractive.on("changeLocale", function(e, t) {
                        G.setLocale(t, a)
                    }),
                    G.handleSeriesFilterEvent(a),
                    G.initChart(a, e),
                    G.handleDataFilterEvent(a),
                    G.handleChartConfigEvent(a),
                    G.handleChartCombineEvent(a),
                    G.handleChartColorEvent(a),
                    a.$ele.triggerHandler(t.EVENT.COMPONENT_READY)
                })
            })
        }).always(function() {
            i.hideLoading(a.config.elementId)
        }),
        a
    }
    function c(t, o) {
        window.bdgTemplates ? (G.createTemplate(t, {
            template: bdgTemplates["chart-component"],
            partials: bdgTemplates
        }),
        o()) : s().done(function(i, a, n) {
            var r = {
                partials: {}
            };
            e.each(arguments, function(e, t) {
                "chart-component" === t[2].template ? r.template = t[0] : r.partials[t[2].template] = t[0]
            }),
            G.createTemplate(t, r),
            o()
        })
    }
    function s() {
        var t = [];
        return t.push(e.ajax("/erp/html/bdg/client/tpl/chart-component.mustache")),
        t.push(e.ajax("/erp/html/bdd/client/tpl/data-filter.mustache")),
        t.push(e.ajax("/erp/html/bdg/client/tpl/chart-config.mustache")),
        t.push(e.ajax("/erp/html/bdg/client/tpl/chart-combine.mustache")),
        t.push(e.ajax("/erp/html/bdg/client/tpl/chart-color.mustache")),
        t.push(e.ajax("/erp/html/bdg/client/tpl/chart-series.mustache")),
        t[0].template = "chart-component",
        t[1].template = "data-filter",
        t[2].template = "chart-config",
        t[3].template = "chart-combine",
        t[4].template = "chart-color",
        t[5].template = "chart-series",
        e.when.apply(e, t)
    }
    function d(t, o) {
        var i;
        i = o ? c3.generate(t.model.chart.options) : c3.generate(t.model.tempChartOptions),
        e("#" + t.model.elementId + ">" + K.CONSTANT.BDG_CHART_CLASS).html(i.element)
    }
    function h(e, t, o) {
        g(e, t, o),
        C(e, o),
        y(e),
        T(e),
        j(e),
        d(e, !0)
    }
    function m(e, t) {
        h(e, null , t)
    }
    function p(t, o) {
        i.showLoading(t.config.elementId);
        var a = n(t.config.host)
          , r = K.getParams(t)
          , l = [];
        r.basic.conditions = K.getComConditions(t),
        t.model.seriesFilter.seriesConditions.length >= 0 && (r.basic.seriesConditions = t.model.seriesFilter.seriesConditions);
        var c = a.line.getChartData(r);
        return l.push(c),
        c.success(function(e) {
            u(t, e) || h(t, o, e)
        }).always(function() {
            i.hideLoading(t.config.elementId)
        }),
        e.when(l)
    }
    function u(t, o) {
        return e.isEmptyObject(o) ? (t.alert.fire("warn", t.model.locale.assistor.msg.noData, t.model.locale.assistor.msg.noData),
        !0) : !1
    }
    function f(e) {
        e.defaultChartOptions.options.data.onclick = function(o) {
            e.$ele.triggerHandler(t.EVENT.DATA.CLICK, o)
        }
        ,
        e.defaultChartOptions.options.data.onmouseover = function(o) {
            e.$ele.triggerHandler(t.EVENT.DATA.MOUSEOVER, o)
        }
        ,
        e.defaultChartOptions.options.data.onmouseout = function(o) {
            e.$ele.triggerHandler(t.EVENT.DATA.MOUSEOUT, o)
        }
    }
    function g(t, o, i) {
        var a = t.config;
        if (t.model.chart = i.chart,
        t.model.chart.options && (e.extend(!0, t.model.chart.options, t.defaultChartOptions.options),
        e.extend(!0, t.model.chart.options, t.chartCom.chartOptions)),
        a.chartOptions && e.extend(!0, t.model.chart.options, a.chartOptions),
        a.chartTitle && (t.model.chart.chartTitle = a.chartTitle),
        i && i.chart.options.axis) {
            var n = i.chart.options.axis;
            n.x.label && n.x.label.text && (t.model.chart.options.axis.x.label.text = n.x.label.text),
            n.y.label && n.y.label.text && (t.model.chart.options.axis.y.label.text = n.y.label.text),
            n.y2.label && n.y2.label.text && (t.model.chart.options.axis.y2.label.text = n.y2.label.text)
        }
        if (a.chartOptions && a.chartOptions.axis) {
            var r = a.chartOptions.axis;
            r.x && r.x.label && r.x.label.text && (t.model.chart.options.axis.x.label.text = r.x.label.text),
            r.y && r.y.label && r.y.label.text && (t.model.chart.options.axis.y.label.text = r.y.label.text),
            r.y2 && r.y2.label && r.y2.label.text && (t.model.chart.options.axis.y2.label.text = r.y2.label.text)
        }
        o && e.extend(!0, t.model.chart.options, o)
    }
    function v(o) {
        var i = o.config.yOffset
          , a = o.config.ylOffset
          , n = o.config.yrOffset
          , r = o.model.chart.options.data.axes
          , l = o.model.chart.options.data.columns;
        if (l && l.length > 0) {
            if (i) {
                var c = new Decimal(i);
                e.each(l, function(t, o) {
                    e.each(o, function(o, i) {
                        if (e.isNumeric(i)) {
                            var a = new Decimal(l[t][o]);
                            l[t][o] = a.plus(c).toNumber()
                        }
                    })
                })
            }
            if (a) {
                var s = new Decimal(a);
                e.each(l, function(o, i) {
                    var a = r[i[0]];
                    a.toLowerCase() === t.C3.AXES.YL && e.each(i, function(t, i) {
                        if (e.isNumeric(i)) {
                            var a = new Decimal(l[o][t]);
                            l[o][t] = a.plus(s).toNumber()
                        }
                    })
                })
            }
            if (n) {
                var d = new Decimal(n);
                e.each(l, function(o, i) {
                    var a = r[i[0]];
                    a.toLowerCase() === t.C3.AXES.YR && e.each(i, function(t, i) {
                        if (e.isNumeric(i)) {
                            var a = new Decimal(l[o][t]);
                            l[o][t] = a.plus(d).toNumber()
                        }
                    })
                })
            }
        }
    }
    function C(e, t) {
        var o = t.chart.options;
        e.model.chart.options.axis.x.categories = o.axis.x.categories,
        e.model.chart.options.data.columns = o.data.columns,
        e.model.chart.options.data.axes = o.data.axes,
        v(e)
    }
    function x(t) {
        var o = t[0];
        return e.each(t, function(e, t) {
            return t.format ? (o = t,
            !1) : void 0
        }),
        o
    }
    function b(o, i) {
        var n = i.axis
          , r = i.unit
          , l = i.conversionUnit
          , c = o.model.chart.options.data.axes
          , s = o.model.chart.options.data.columns;
        r && l && s && s.length > 0 && (n === K.CONSTANT.AXES.YL ? e.each(s, function(o, i) {
            var n = c[i[0]];
            n.toLowerCase() === t.C3.AXES.YL && e.each(i, function(t, i) {
                e.isNumeric(i) && (s[o][t] = a.conversion(i, r, l))
            })
        }) : e.each(s, function(o, i) {
            var n = c[i[0]];
            n.toLowerCase() === t.C3.AXES.YR && e.each(i, function(t, i) {
                e.isNumeric(i) && (s[o][t] = a.conversion(i, r, l))
            })
        }))
    }
    function y(e) {
        if (e.chartCom.axisYL.length > 0) {
            var t = x(e.chartCom.axisYL);
            t && t.format && (b(e, t),
            e.model.chart.options.axis.y.tick.format = function(e) {
                var i = e
                  , a = t.unit
                  , n = a.symbol
                  , r = t.format
                  , l = t.conversionUnit
                  , c = (r.showSeparator ? "," : "") + (r.precision > 0 ? "." + r.precision + "f" : "")
                  , s = d3.format(c);
                return a && l && (n = l.symbol),
                r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.NONE ? s(i) : r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.RIGHT ? s(i) + n : r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.LEFT ? n + s(i) : void 0
            }
            )
        }
        if (e.chartCom.axisYR.length > 0) {
            var i = x(e.chartCom.axisYR);
            i && i.format && (b(e, i),
            e.model.chart.options.axis.y2.tick.format = function(e) {
                var t = e
                  , a = i.unit
                  , n = a.symbol
                  , r = i.format
                  , l = i.conversionUnit
                  , c = (r.showSeparator ? "," : "") + (r.precision > 0 ? "." + r.precision + "f" : "")
                  , s = d3.format(c);
                return a && l && (n = l.symbol),
                r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.NONE ? s(t) : r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.RIGHT ? s(t) + n : r.symbolPlace === o.FORMAT_TEXT.SYMBOLPLACE.LEFT ? n + s(t) : void 0
            }
            )
        }
    }
    function T(t) {
        t.model.tempChartOptions = e.extend(!0, {}, t.model.chart.options),
        t.ractive.set(t.model)
    }
    function w(t, o) {
        var i = {
            columns: [{
                field: "line",
                title: t.model.locale.chart.line.chartName,
                align: "center",
                filter: {
                    type: "input"
                }
            }, {
                field: "combinationChartType",
                title: t.model.locale.chart.line.chartType,
                halign: "center",
                editable: {
                    type: "select",
                    source: [{
                        value: "line",
                        text: "line"
                    }, {
                        value: "spline",
                        text: "spline"
                    }, {
                        value: "bar",
                        text: "bar"
                    }, {
                        value: "area",
                        text: "area"
                    }, {
                        value: "area-spline",
                        text: "area-spline"
                    }, {
                        value: "scatter",
                        text: "scatter"
                    }]
                }
            }],
            height: 400,
            filter: !0
        };
        o.bootstrapTable(i),
        o.bootstrapTable("load", t.model.combine.list),
        o.bootstrapTable("resetView"),
        o.on("editable-save.bs.table", function(o, i, a, n) {
            e.each(t.model.tempChartOptions.data.types, function(e) {
                return e === a.line ? (t.model.tempChartOptions.data.types[e] = a.combinationChartType,
                !1) : void 0
            }),
            d(t, !1)
        })
    }
    function O(t) {
        e.extend(!0, t.model.tempChartOptions.data.types, t.model.chart.options.data.types),
        t.ractive.set(t.model),
        d(t, !1)
    }
    function E(t) {
        var a = e("#" + t.config.elementId + "-chartCombine-win")
          , n = i.createKendoWindow(a, {
            title: t.model.locale.chart.window.chartCombine + " (" + t.config.chartId + ")",
            width: 475,
            height: 520,
            appendTo: "#" + t.config.elementId,
            close: function(e) {
                e.userTriggered && O(t)
            }
        })
          , r = e("#" + t.config.elementId + "-combine-grid");
        t.ractive.on(o.INTERNAL_EVENT.CHANGE_LOCALE, function(e) {
            var o = {};
            o[t.localeId] = {
                line: e.chart.line.chartName,
                combinationChartType: e.chart.line.chartType
            },
            n.title(e.chart.window.chartCombine + " (" + t.config.chartId + ")"),
            i.grid.setLocale(r, t.localeId, o)
        }),
        t.ractive.on("showChartCombine", function(o) {
            var a = d3.keys(t.model.chart.options.data.axes)
              , l = d3.keys(t.model.chart.options.data.types);
            t.model.combine.list = [],
            e.each(a, function(e, o) {
                var i = {
                    line: o,
                    combinationChartType: "line"
                };
                l.length > 0 && t.model.chart.options.data.types[o] ? i.combinationChartType = t.model.chart.options.data.types[o] : t.model.chart.options.data.types[o] = "line",
                t.model.combine.list.push(i)
            }),
            t.ractive.set(t.model),
            e.extend(!0, t.model.tempChartOptions.data.types, t.model.chart.options.data.types),
            i.openWindow(n, e(o.node)),
            w(t, r)
        }),
        t.ractive.on("chartCombineConfirm", function() {
            e.extend(!0, t.model.chart.options.data.types, t.model.tempChartOptions.data.types),
            t.ractive.set(t.model),
            n.close()
        }),
        t.ractive.on("chartCombineCancel", function() {
            O(t),
            n.close()
        })
    }
    function I(t) {
        e.extend(!0, t.model.tempChartOptions.data.colors, t.model.tempChartColor),
        t.ractive.set(t.model),
        d(t, !1)
    }
    function L(t) {
        var a = e("#" + t.config.elementId + "-color-win")
          , n = i.createKendoWindow(a, {
            title: t.model.locale.chart.window.chartColor + " (" + t.config.chartId + ")",
            width: 475,
            height: 520,
            appendTo: "#" + t.config.elementId,
            close: function(e) {
                e.userTriggered && I(t)
            }
        })
          , r = e("#" + t.config.elementId + "-color-grid");
        t.ractive.on(o.INTERNAL_EVENT.CHANGE_LOCALE, function(e) {
            var o = {};
            o[t.localeId] = {
                line: e.chart.line.chartName,
                color: e.chart.line.chartColor
            },
            n.title(e.chart.window.chartColor + " (" + t.config.chartId + ")"),
            i.grid.setLocale(r, t.localeId, o)
        }),
        t.ractive.on("showChartColor", function(o) {
            var a = d3.keys(t.model.chart.options.data.axes)
              , l = d3.keys(t.model.chart.options.data.colors);
            t.model.colorSetting.list = [],
            e.each(a, function(o, i) {
                var a = {
                    line: i,
                    color: ""
                };
                e.each(l, function(e, o) {
                    o === i && (a.color = t.model.chart.options.data.colors[o])
                }),
                t.model.colorSetting.list.push(a)
            }),
            t.ractive.set(t.model),
            e.extend(!0, t.model.tempChartOptions.data.colors, t.model.chart.options.data.colors),
            e.extend(!0, t.model.tempChartColor, t.model.chart.options.data.colors),
            i.openWindow(n, e(o.node)),
            N(t, r)
        }),
        t.ractive.on("chartColorConfirm", function() {
            e.extend(!0, t.model.chart.options.data.colors, t.model.tempChartOptions.data.colors),
            t.ractive.set(t.model),
            n.close()
        }),
        t.ractive.on("chartColorCancel", function() {
            I(t),
            n.close()
        })
    }
    function A(t, o) {
        var i = t.model.colorSetting.list
          , a = o.find("td.bdg-line-color-field");
        e.each(a, function(o, a) {
            var n, r = e(a);
            r.html('<div class="input-group"><input type="text" value="' + i[o].color + '" class="form-control" /><span class="input-group-addon"><i></i></span></div>'),
            n = r.find(".input-group"),
            n.colorpicker().on("hidePicker", function() {
                var o = n.data("colorpicker").color.toHex()
                  , i = n.closest("td").siblings().text();
                e.each(t.model.tempChartOptions.data.colors, function(e) {
                    return e === i ? (t.model.tempChartOptions.data.colors[e] = o,
                    !1) : void 0
                }),
                d(t, !1)
            })
        })
    }
    function N(e, t) {
        var o = {
            columns: [{
                field: "line",
                title: e.model.locale.chart.line.chartName,
                align: "center",
                valign: "middle"
            }, {
                field: "color",
                title: e.model.locale.chart.line.chartColor,
                halign: "center",
                width: 180,
                "class": "bdg-line-color-field"
            }],
            height: 430
        };
        t.bootstrapTable(o),
        t.bootstrapTable("load", e.model.colorSetting.list),
        t.bootstrapTable("resetView"),
        A(e, t)
    }
    function R(t) {
        var o = e.extend(!0, {}, t.model.tempChartOptions.data.types)
          , i = e.extend(!0, {}, t.model.tempChartOptions.data.colors);
        e.extend(!0, t.model.tempChartOptions, t.model.tempChartConfig),
        e.extend(!0, t.model.tempChartOptions.data.types, o),
        e.extend(!0, t.model.tempChartOptions.data.colors, i),
        t.ractive.set(t.model),
        d(t, !1)
    }
    function S(t) {
        var o = e("#" + t.config.elementId + "-config-win")
          , a = i.createKendoWindow(o, {
            title: t.model.locale.chart.window.chartConfig + " (" + t.config.chartId + ")",
            width: 475,
            height: 565,
            appendTo: "#" + t.config.elementId,
            close: function(e) {
                e.userTriggered && R(t)
            }
        });
        t.ractive.on("showChartConfig", function(o) {
            e.extend(!0, t.model.tempChartConfig, t.model.tempChartOptions),
            i.openWindow(a, e(o.node))
        }),
        t.ractive.on("configChange", function() {
            d(t, !1)
        }),
        t.ractive.on("chartReload", function() {
            d(t, !0)
        }),
        t.ractive.on("chartRotate", function() {
            _(t)
        }),
        t.ractive.on("setXInverted", function() {
            Y(t, !0, null )
        }),
        t.ractive.on("chartDownload", function() {
            X(t)
        }),
        t.ractive.on("dataDownload", function() {
            H(t)
        }),
        t.ractive.on("chartConfigConfirm", function() {
            e.extend(!0, t.model.chart.options, t.model.tempChartOptions),
            a.close()
        }),
        t.ractive.on("chartConfigCancel", function() {
            R(t),
            a.close()
        })
    }
    function F(t) {
        var a = e("#" + t.config.elementId + "-series-win")
          , n = i.createKendoWindow(a, {
            title: t.model.locale.chart.window.seriesFilter + " (" + t.config.chartId + ")",
            width: 710,
            height: 520,
            appendTo: "#" + t.config.elementId
        })
          , r = e("#" + t.config.elementId + "-seriesName-grid")
          , l = e("#" + t.config.elementId + "-seriesValue-grid")
          , c = e("#" + t.config.elementId + "-seriesRule-grid");
        e.each(t.chartCom.series, function(e, o) {
            var i;
            i = o.custom ? {
                seriesAlias: o.custom.alias,
                seriesName: o.custom.customId,
                custom: o.custom
            } : {
                seriesAlias: o.alias,
                seriesName: o.id.columnId,
                tableId: o.id.tableId,
                columnId: o.id.columnId,
                type: o.type
            },
            t.model.seriesFilter.seriesList.push(i)
        }),
        e.each(t.chartCom.seriesConditions, function(o, a) {
            var n;
            n = i.composeCondition(a),
            n = n.slice(1, n.length - 1);
            var r = n.split(" ")
              , l = r[0].indexOf(".", 0)
              , c = r[0].slice(l + 1)
              , s = r[2].split("'");
            e.each(t.model.seriesFilter.seriesList, function(e, t) {
                t.seriesName == c && (r[0] = t.seriesAlias)
            }),
            n = r[0] + " " + r[1] + " " + s[1],
            t.model.seriesFilter.ruleList.push({
                seriesRule: n,
                remove: ""
            }),
            t.model.seriesFilter.seriesConditions.push(a)
        }),
        t.ractive.on(o.INTERNAL_EVENT.CHANGE_LOCALE, function(e) {
            var o = {}
              , a = {}
              , s = {};
            o[t.localeId] = {
                seriesAlias: e.chart.line.chartSeries
            },
            a[t.localeId] = {
                seriesValue: e.chart.line.seriesValue
            },
            s[t.localeId] = {
                seriesRule: e.chart.line.seriesRule,
                remove: e.dataFilter.rule.labels.action
            },
            n.title(e.chart.window.seriesFilter + " (" + t.config.chartId + ")"),
            i.grid.setLocale(r, t.localeId, o),
            i.grid.setLocale(l, t.localeId, a),
            i.grid.setLocale(c, t.localeId, s)
        }),
        t.ractive.on("showSeriesFilter", function(o) {
            i.openWindow(n, e(o.node)),
            D(t, r, l),
            k(t, l, c),
            V(t, c)
        }),
        t.ractive.on("seriesFilterConfirm", function() {
            p(t),
            n.close()
        })
    }
    function D(t, o, i) {
        var a = n(t.config.host)
          , r = {
            columns: [{
                field: "seriesAlias",
                title: t.model.locale.chart.line.chartSeries,
                align: "center",
                filter: {
                    type: "input"
                }
            }],
            height: 400,
            filter: !0,
            data: t.model.seriesFilter.seriesList,
            onClickRow: function(o) {
                var n = K.getParams(t)
                  , r = o.seriesName
                  , l = [];
                t.model.seriesFilter.selectSeries = o,
                t.chartCom.series.length > 0 && (e.each(t.chartCom.series, function(e, t) {
                    if (t.custom) {
                        if (r === t.custom.customId)
                            return n.chart.series = [t],
                            !1
                    } else if (r === t.id.columnId)
                        return n.chart.series = [t],
                        !1
                }),
                a.line.getDistinctSeries(n).success(function(o) {
                    e.each(o.dataList, function(t, o) {
                        e.each(o, function(e, t) {
                            l.push({
                                seriesValue: t
                            })
                        })
                    }),
                    t.model.seriesFilter.valueList = l,
                    i.bootstrapTable("load", l)
                }))
            }
        };
        o.bootstrapTable(r),
        o.bootstrapTable("resetView")
    }
    function k(t, a, n) {
        var r = {
            columns: [{
                field: "seriesValue",
                title: t.model.locale.chart.line.seriesValue,
                align: "center",
                filter: {
                    type: "input"
                }
            }],
            height: 400,
            filter: !0,
            data: t.model.seriesFilter.valueList,
            onClickRow: function(a) {
                var r = !1
                  , l = a.seriesValue
                  , c = t.model.seriesFilter.selectSeries.seriesAlias + " = " + l;
                if (e.each(t.model.seriesFilter.ruleList, function(e, t) {
                    return t.seriesRule === c ? (r = !0,
                    !1) : void 0
                }),
                !r) {
                    t.model.seriesFilter.ruleList.push({
                        seriesRule: c,
                        remove: ""
                    });
                    var s = i.getCondition(t.model.seriesFilter.selectSeries, o.OPERATOR.EQUAL_TO, l);
                    t.model.seriesFilter.seriesConditions.push({
                        condition: s,
                        operator: o.OPERATOR.OR
                    }),
                    n.bootstrapTable("load", t.model.seriesFilter.ruleList)
                }
            }
        };
        a.bootstrapTable(r),
        a.bootstrapTable("resetView")
    }
    function P(t, o) {
        o.off("click"),
        setTimeout(function() {
            o.on("click", ".remove", function(i) {
                var a = e(i.target).closest("tr")
                  , n = a.data("index")
                  , r = e(a.find("td")).text();
                o.bootstrapTable("remove", {
                    field: "seriesRule",
                    values: [r]
                }),
                t.model.seriesFilter.seriesConditions.splice(n, 1),
                t.ractive.set(t.model)
            })
        }, 0)
    }
    function V(e, t) {
        var o = {
            columns: [{
                field: "seriesRule",
                title: e.model.locale.chart.line.seriesRule,
                align: "center",
                filter: {
                    type: "input"
                }
            }, {
                field: "remove",
                title: e.model.locale.dataFilter.rule.labels.action,
                events: P(e, t),
                formatter: '<a class="remove" href="javascript:void(0)" title="Remove"><i class="glyphicon glyphicon-remove"></i></a>'
            }],
            height: 400,
            filter: !0,
            data: e.model.seriesFilter.ruleList
        };
        t.bootstrapTable(o),
        t.bootstrapTable("resetView")
    }
    function _(e) {
        e.model.chart.options.axis && (e.model.chart.options.axis.rotated = !e.model.chart.options.axis.rotated),
        d(e, !0)
    }
    function M(e) {
        var t = e.model.chart.options
          , o = t.axis.x.categories
          , i = e.config.xTicks;
        if (i) {
            for (var a = [], n = Math.ceil(o.length / i), r = 0; r < o.length; r++)
                r % n === 0 && a.length < i && a.push(r);
            a.length < i && a.push(o.length - 1),
            t.axis.x.tick.values = a,
            e.model.tempChartOptions.axis.x.tick.values = a
        }
    }
    function Y(t, o, i) {
        var a = t.model.chart.options
          , n = a.axis.x.categories
          , r = a.data.columns
          , l = i || t.config.xInverted;
        if (l || o) {
            for (var c = n.length, s = [], h = [], m = 0; c > m; m++)
                s.push(n.pop());
            a.axis.x.categories = s,
            t.model.tempChartOptions.axis.x.categories = s,
            e.each(r, function(e, t) {
                var o = [];
                o.push(t.splice(0, 1));
                for (var i = 0; c > i; i++)
                    o.push(t.pop());
                h.push(o)
            }),
            a.data.columns = h,
            t.model.tempChartOptions.data.columns = h
        }
        o && d(t, !0)
    }
    function X(t) {
        var o = n(t.config.host)
          , a = e("#" + t.config.elementId).parent().html();
        i.showLoading(t.config.elementId),
        o.chartExport(t, null , a).success(function(o) { 
            jQuery(document).triggerHandler("afterGenerateChart",[o.fileName]) ;    
            return ;
            // alert('line chart download:'+o.fileName);
            // return ;
            i.log(o.fileName),
            e("<iframe/>").attr({
                src: "http://" + t.config.host + "/erp/pass/pass/fileMgr/download?isDelete=false&filePath=public%5cbdg%5c&fileName=" + o.fileName,
                style: "visibility:hidden;display:none"
            }).appendTo("body")
        }).always(function() {
            i.hideLoading(t.config.elementId)
        })
    }
    function H(t) {
        var o = W(t)
          , n = []
          , r = []
          , l = []
          , c = o[Object.keys(o)[0]].length
          , s = i.ieVersion() > 0
          , d = s ? "	" : ","
          , h = "";
        n.push(r),
        e.each(o, function(e, t) {
            r.push(e),
            l.push(t)
        });
        for (var m = 0; c > m; m++) {
            for (var p = [], u = 0; u < r.length; u++)
                p.push(null );
            n.push(p)
        }
        for (var f = 0; f < r.length; f++)
            for (var g = 0; c > g; g++)
                n[g + 1][f] = l[f][g];
        e.each(n, function(e, t) {
            var o = t.join(d);
            h += o + "\r\n"
        });
        var v = new Date
          , C = a.getDateStr(v) + "_" + a.getHMSTimeStr(v) + ".csv";
        if (s) {
            var x = window.open();
            x.document.open("text/html", "replace"),
            x.document.write(h),
            x.document.close(),
            x.document.execCommand("SaveAs", !0, C),
            x.close()
        } else {
            var b = encodeURI("data:application/csv;charset=utf-8,\ufeff" + h);
            e("<a/>").attr({
                href: b,
                download: C
            }).appendTo("body")[0].click()
        }
    }
    function j(e) {
        var t = e.model.chart.options;
        return t.data.columns.length > 20 && (t.legend.show = !1),
        t.axis.x.categories.length > 100 && (t.point.show = !1),
        M(e),
        Y(e, !1, null ),
        t
    }
    function U(e) {
        var t = n(e.config.host);
        return t.chartExport(e, null )
    }
    function W(t) {
        var o = {}
          , i = e.extend(!0, {}, t.model.chart.options)
          , a = i.data.columns;
        return "category" === i.axis.x.type ? o.x = i.axis.x.categories : o.x = e.map(d3.keys(i.axis.x.categories), function(t) {
            return e.isNumeric(t) ? t : void 0
        }),
        e.each(a, function(e, t) {
            var i = t.shift();
            o[i] = t
        }),
        o
    }
    function B() {
        var e = {};
        return e.handleSpecialSetting = function(e) {
            j(e)
        }
        ,
        e.handleChartConfigEvent = function(e) {
            S(e)
        }
        ,
        e.handleSeriesFilterEvent = function(e) {
            F(e)
        }
        ,
        e.handleChartCombineEvent = function(e) {
            E(e)
        }
        ,
        e.handleChartColorEvent = function(e) {
            L(e)
        }
        ,
        e.chartRotate = function(e) {
            _(e)
        }
        ,
        e.setXInverted = function(e, t, o) {
            Y(e, t, o)
        }
        ,
        e.initChart = function(e, t) {
            m(e, t)
        }
        ,
        e.drawChart = function(e, t) {
            return p(e, t)
        }
        ,
        e.doDraw = function(e, t) {
            d(e, t)
        }
        ,
        e.chartExport = function(e) {
            return U(e)
        }
        ,
        e.getData = function(e) {
            return W(e)
        }
        ,
        e
    }
    var G, K, $ = {
        options: {
            size: {
                width: void 0,
                height: void 0
            },
            legend: {
                show: !0,
                position: "right"
            },
            axis: {
                rotated: !1,
                x: {
                    show: !0,
                    height: void 0,
                    label: {
                        position: "inner-center"
                    },
                    tick: {
                        centered: !0,
                        culling: !1,
                        rotate: 0,
                        outer: !0
                    }
                },
                y: {
                    show: !1,
                    inner: !1,
                    inverted: !1,
                    center: void 0,
                    max: void 0,
                    min: void 0,
                    label: {
                        position: "inner-middle"
                    },
                    tick: {
                        outer: !0
                    },
                    padding: {
                        top: 200,
                        bottom: 0
                    }
                },
                y2: {
                    show: !1,
                    inner: !1,
                    inverted: !1,
                    center: void 0,
                    max: void 0,
                    min: void 0,
                    label: {
                        position: "inner-middle"
                    },
                    tick: {
                        outer: !0
                    },
                    padding: {
                        top: 0,
                        bottom: 0
                    }
                }
            },
            data: {
                columns: [],
                colors: {},
                types: {}
            },
            point: {
                show: !0,
                focus: {
                    expand: {
                        enabled: !0
                    }
                }
            },
            zoom: {
                enabled: !0,
                rescale: !1
            },
            line: {
                connectNull: !0
            },
            tooltip: {
                show: !0,
                grouped: !1
            },
            grid: {
                x: {
                    lines: []
                },
                y: {
                    lines: []
                }
            }
        }
    };
    !function() {
        r.prototype = new t.Component,
        r.prototype.constructor = r,
        r.prototype.init = l,
        t.Component.Line = r,
        t.Component.Line.defaultChartOptions = $
    }(),
    t.Component.Line.getAPI = B
}($, bdgClient, _pass.module.constant, _pass.module.util, _pass.module.format, _pass.module.service.bdgService);
!function(e, t, o, a, n) {
    "use strict";
    function i(e, t, o) {
        return x = e,
        w = t,
        r(o)
    }
    function r(o) {
        var i = t.Component.prototype.init(e.extend(!0, {}, o))
          , r = n(i.config.host);
        return a.showLoading(i.config.elementId),
        r.getChartCom(i.config.chartId).success(function(o) {
            i.chartCom = o,
            i.defaultChartOptions = e.extend(!0, {}, x.getDefaultChartOptions(o.chartType)),
            i.config.localeId && (i.localeId = i.config.localeId),
            i.localeId = i.localeId ? i.localeId : i.chartCom.localeId,
            x.prepareTemplateDataModel(i),
            i.model.chart = {
                options: null
            },
            e.extend(!0, i.model.chart, {
                options: i.chartCom.chartOptions
            });
            var a = {
                chartId: i.config.chartId,
                gaugeId: i.config.gaugeId
            };
            r.gauge.queryGaugeData(a).success(function(e) {
                i.model.gaugeData = e.gaugeData,
                c(i, function() {
                    x.initLocaleList(i),
                    i.ractive.on("changeLocale", function(e, t) {
                        x.setLocale(t, i)
                    }),
                    x.drawChart(i),
                    x.handleDataFilterEvent(i),
                    x.handleChartConfigEvent(i),
                    i.$ele.triggerHandler(t.EVENT.COMPONENT_READY)
                })
            })
        }).always(function() {
            a.hideLoading(i.config.elementId)
        }),
        i
    }
    function c(t, o) {
        window.bdgTemplates ? (x.createTemplate(t, {
            template: bdgTemplates["chart-component"],
            partials: bdgTemplates
        }),
        o()) : l().done(function(a, n, i) {
            var r = {
                partials: {}
            };
            e.each(arguments, function(e, t) {
                "chart-component" === t[2].template ? r.template = t[0] : r.partials[t[2].template] = t[0]
            }),
            x.createTemplate(t, r),
            o()
        })
    }
    function l() {
        var t = [];
        return t.push(e.ajax("/erp/html/bdg/client/tpl/chart-component.mustache")),
        t.push(e.ajax("/erp/html/bdd/client/tpl/data-filter.mustache")),
        t.push(e.ajax("/erp/html/bdg/client/tpl/chart-config.mustache")),
        t[0].template = "chart-component",
        t[1].template = "data-filter",
        t[2].template = "chart-config",
        e.when.apply(e, t)
    }
    function s(t, o) {
        var a = w.getParams(t)
          , i = n(t.config.host)
          , r = [];
        a.chart.valueRange = {
            gauge: t.chartCom.series[0],
            max: t.model.gaugeData.maxValue,
            min: t.model.gaugeData.minValue
        },
        a.basic.conditions = w.getComConditions(t),
        a.basic.seriesConditions.length > 0 && t.config.gaugeId && (a.basic.seriesConditions[0].condition[0].clause.right.value = t.config.gaugeId);
        var c = i.gauge.getChartData(a);
        return r.push(c),
        c.success(function(o) {
            var a, n;
            t.config.size ? (a = t.config.size.width + "px",
            n = t.config.size.height + "px") : (a = t.chartCom.chartWidth + "px",
            n = t.chartCom.chartHeight + "px"),
            e("#" + t.config.elementId + "-gauge").css({
                width: a,
                height: n
            }),
            t.model.previewChart = echarts.init(document.getElementById(t.config.elementId + "-gauge"));
            var i = []
              , r = t.config.chartId.toLowerCase()
              , c = [];
            t.model.chart.options.axisLine && t.model.chart.options.axisLine.lineStyle && t.model.chart.options.axisLine.lineStyle.color ? c = t.model.chart.options.axisLine.lineStyle.color : e.each(t.model.gaugeData.range, function(e, t) {
                var o = [];
                e > 0 ? o.push(t.blockRate + c[e - 1][0]) : o.push(t.blockRate),
                o.push(t.blockColor),
                c.push(o)
            });
            var l = {
                show: !0,
                lineStyle: {
                    color: c,
                    width: "20"
                }
            }
              , s = e.isEmptyObject(t.chartCom.chartOptions) ? {
                series: [{
                    type: "gauge"
                }]
            } : t.chartCom.chartOptions;
            o.chart.chartTitle;
            if (s.series[0].name = t.config.chartId,
            s.series[0].data = [{
                value: o.chart[r + "_gauge"],
                name: null !== t.config.title ? t.config.title : o.chart.chartTitle
            }],
            s.series[0].max = o.chart[r + "_max"],
            s.series[0].min = o.chart[r + "_min"],
            s.series[0].axisLine = l,
            t.chartCom.series[0].unit) {
                var d = {
                    detail: {
                        formatter: function(e) {
                            var o = (t.chartCom.series[0].format.showSeparator ? "," : "") + (t.chartCom.series[0].format.precision > 0 ? "." + t.chartCom.series[0].format.precision + "f" : "")
                              , a = d3.format(o)
                              , n = a(e) + "";
                            return n = "right" == t.chartCom.series[0].format.symbolPlace ? n + " " + t.chartCom.series[0].unit.symbol : t.chartCom.series[0].unit.symbol + " " + n
                        }
                    }
                };
                e.extend(!0, s.series[0], d)
            }
            i.push(s.series[0]),
            m(t, s.series[0]),
            t.model.previewChart.setOption({
                backgroundColor: t.chartCom.chartOptions.backgroundColor ? t.chartCom.chartOptions.backgroundColor : null ,
                series: i
            })
        }),
        e.when(r)
    }
    function d(t) {
        var o = n(t.config.host);
        t.model.dataURL = t.model.previewChart.getDataURL("png"),
        a.showLoading(t.config.elementId),
        o.chartExport(t, t.model.dataURL).success(function(o) { alert("export !") ;
            a.log(o.fileName),
            e("<iframe/>").attr({
                src: "http://" + t.config.host + "/erp/pass/pass/fileMgr/download?isDelete=false&filePath=public%5cbdg%5c&fileName=" + o.fileName,
                style: "visibility:hidden;display:none"
            }).appendTo("body")
        }).always(function() {
            a.hideLoading(t.config.elementId)
        })
    }
    function h(e) {
        var t = n(e.config.host);
        return e.model.dataURL = e.model.previewChart.getDataURL("png"),
        t.chartExport(e, e.model.dataURL)
    }
    function m(t, o) {
        e.extend(!0, t.model.tempChartOptions, o),
        t.ractive.set(t.model)
    }
    function p(e, t) {
        e.model.previewChart = echarts.init(document.getElementById(e.config.elementId + "-gauge")),
        t ? e.model.previewChart.setOption({
            series: [e.model.chart.options]
        }) : e.model.previewChart.setOption({
            series: [e.model.tempChartOptions]
        })
    }
    function g(t) {
        e.extend(!0, t.model.tempChartOptions, t.model.tempChartConfig),
        t.ractive.set(t.model),
        p(t, !1)
    }
    function u(t) {
        var o = e("#" + t.config.elementId + "-config-win")
          , n = a.createKendoWindow(o, {
            title: t.model.locale.chart.window.chartConfig + " (" + t.config.chartId + ")",
            width: 490,
            height: 565,
            appendTo: "#" + t.config.elementId,
            close: function(e) {
                e.userTriggered && g(t)
            }
        });
        t.ractive.on("showChartConfig", function(o) {
            e(".gaugeColor").colorpicker({
                format: "hex"
            }).on("changeColor", function(o) {
                var a = e(o.currentTarget).attr("id").replace(t.config.elementId + "-", "");
                t.ractive.set(a, o.color.toHex()),
                p(t, !1)
            }),
            e.extend(!0, t.model.tempChartConfig, t.model.tempChartOptions),
            a.openWindow(n, e(o.node))
        }),
        t.ractive.on("configChange", function() {
            p(t, !1)
        }),
        t.ractive.on("setAutoPointer", function(o) {
            var a = e("#" + t.config.elementId + "-pointerColor");
            o.node.checked === !0 ? (a.colorpicker() && a.colorpicker("destroy"),
            t.model.tempChartOptions.pointer.color = "auto") : (t.model.tempChartOptions.pointer.color = "#000000",
            f(t)),
            t.ractive.set(t.model),
            p(t, !1)
        }),
        t.ractive.on("setAutoDetailText", function(o) {
            var a = e("#" + t.config.elementId + "-detailTextColor");
            o.node.checked === !0 ? (a.colorpicker() && a.colorpicker("destroy"),
            t.model.tempChartOptions.detail.textStyle.color = "auto") : (t.model.tempChartOptions.detail.textStyle.color = "#000000",
            C(t)),
            t.ractive.set(t.model),
            p(t, !1)
        }),
        t.ractive.on("chartReload", function() {
            s(t)
        }),
        t.ractive.on("chartDownload", function() {
            d(t)
        }),
        t.ractive.on("chartConfigConfirm", function() {
            e.extend(!0, t.model.chart.options, t.model.tempChartOptions),
            n.close()
        }),
        t.ractive.on("chartConfigCancel", function() {
            g(t),
            n.close()
        })
    }
    function f(t) {
        var o = e("#" + t.config.elementId + "-pointerColor");
        o.colorpicker({
            format: "hex"
        }).on("changeColor", function(e) {
            t.model.tempChartOptions.pointer.color = e.color.toHex(),
            p(t, !1)
        })
    }
    function C(t) {
        var o = e("#" + t.config.elementId + "-detailTextColor");
        o.colorpicker({
            format: "hex"
        }).on("changeColor", function(e) {
            t.model.tempChartOptions.detail.textStyle.color = e.color.toHex(),
            p(t, !1)
        })
    }
    function v() {
        var e = {};
        return e.drawChart = function(e, t) {
            return s(e, t)
        }
        ,
        e.doDraw = function(e, t) {
            p(e, t)
        }
        ,
        e.handleChartConfigEvent = function(e) {
            u(e)
        }
        ,
        e.chartExport = function(e) {
            return h(e)
        }
        ,
        e.chartDownload = function(e) {
            d(e)
        }
        ,
        e
    }
    var x, w, I = {
        type: "gauge",
        max: 100,
        min: 0,
        pointer: {
            color: "auto",
            length: "80%",
            show: !0,
            width: 8
        },
        radius: "110%"
    };
    !function() {
        i.prototype = new t.Component,
        i.prototype.constructor = i,
        i.prototype.init = r,
        t.Component.Gauge = i,
        t.Component.Gauge.defaultChartOptions = I
    }(),
    t.Component.Gauge.getAPI = v
}($, bdgClient, _pass.module.constant, _pass.module.util, _pass.module.service.bdgService);
!function(t, o, e, n, i) {
    "use strict";
    function a(t, o, e) {
        return D = t,
        L = o,
        c(e)
    }
    function c(e) {
        var a = o.Component.prototype.init(t.extend(!0, {}, e))
          , c = i(a.config.host);
        return n.showLoading(a.config.elementId),
        c.getChartCom(a.config.chartId).success(function(e) {
            a.chartCom = e,
            a.defaultChartOptions = t.extend(!0, {}, D.getDefaultChartOptions(e.chartType)),
            a.config.localeId && (a.localeId = a.config.localeId),
            a.localeId = a.localeId ? a.localeId : a.chartCom.localeId,
            D.prepareTemplateDataModel(a),
            D.addNoiseCondition(a);
            var n = L.getParams(a);
            n.basic.conditions = L.getComConditions(a),
            c.normal.getChartData(n).success(function(e) {
                a.model.chart = {
                    options: {}
                },
                a.model.chart.options && (t.extend(!0, a.model.chart.options, a.defaultChartOptions.options),
                t.extend(!0, a.model.chart.options, a.chartCom.chartOptions),
                t.extend(!0, a.model.chart.options.data, e.data)),
                e.statistics && (a.model.statistics = e.statistics),
                e.capability && (a.model.capability = e.capability),
                a.config.chartOptions && t.extend(!0, a.model.chart.options, a.config.chartOptions),
                l(a, function() {
                    D.initLocaleList(a),
                    a.ractive.on("changeLocale", function(t, o) {
                        D.setLocale(o, a)
                    }),
                    D.initChart(a, e),
                    D.handleChartConfigEvent(a),
                    D.handleDataFilterEvent(a),
                    D.handleChartColorEvent(a),
                    a.$ele.triggerHandler(o.EVENT.COMPONENT_READY)
                })
            })
        }).always(function() {
            n.hideLoading(a.config.elementId)
        }),
        a
    }
    function l(o, e) {
        window.bdgTemplates ? (D.createTemplate(o, {
            template: bdgTemplates["chart-component"],
            partials: bdgTemplates
        }),
        e()) : r().done(function(n, i, a) {
            var c = {
                partials: {}
            };
            t.each(arguments, function(t, o) {
                "chart-component" === o[2].template ? c.template = o[0] : c.partials[o[2].template] = o[0]
            }),
            D.createTemplate(o, c),
            e()
        })
    }
    function r() {
        var o = [];
        return o.push(t.ajax("/erp/html/bdg/client/tpl/chart-component.mustache")),
        o.push(t.ajax("/erp/html/bdd/client/tpl/data-filter.mustache")),
        o.push(t.ajax("/erp/html/bdg/client/tpl/chart-config.mustache")),
        o.push(t.ajax("/erp/html/bdg/client/tpl/chart-color.mustache")),
        o.push(t.ajax("/erp/html/bdg/client/tpl/chart-statistics.mustache")),
        o[0].template = "chart-component",
        o[1].template = "data-filter",
        o[2].template = "chart-config",
        o[3].template = "chart-color",
        o[4].template = "chart-statistics",
        t.when.apply(t, o)
    }
    function s(o, e) {
        var n;
        n = e ? c3.generate(o.model.chart.options) : c3.generate(o.model.tempChartOptions),
        t("#" + o.model.elementId + ">" + L.CONSTANT.BDG_CHART_CLASS).html(n.element)
    }
    function d(t, o) {
        f(t, o),
        w(t),
        R(t, o),
        g(t),
        s(t, !0)
    }
    function p(t, o) {
        d(t, o)
    }
    function m(o, e) {
        n.showLoading(o.config.elementId);
        var a = i(o.config.host)
          , c = L.getParams(o)
          , l = [];
        c.basic.conditions = L.getComConditions(o);
        var r = a.normal.getChartData(c);
        return l.push(r),
        r.success(function(t) {
            h(o, t) || d(o, t)
        }).always(function() {
            n.hideLoading(o.config.elementId)
        }),
        t.when(l)
    }
    function h(o, e) {
        return t.isEmptyObject(e) ? (o.alert.fire("warn", o.model.locale.assistor.msg.noData, o.model.locale.assistor.msg.noData),
        !0) : !1
    }
    function u(t) {
        var o = t.config.control && t.config.control.noise;
        if (o) {
            var n = []
              , i = t.chartCom.series
              , a = o.over && {
                left: i.fieldId,
                operator: e.OPERATOR.LESS_THAN,
                right: {
                    type: e.OPERAND_TYPE.NUMBER,
                    value: o.over
                }
            }
              , c = o.under && {
                left: i.fieldId,
                operator: e.OPERATOR.GREATER_THAN,
                right: {
                    type: e.OPERAND_TYPE.NUMBER,
                    value: o.under
                }
            };
            a && n.push({
                clause: a,
                operator: e.OPERATOR.AND
            }),
            c && n.push({
                clause: c,
                operator: e.OPERATOR.AND
            }),
            n.length > 0 && t.config.conditions.unshift({
                condition: n,
                operator: e.OPERATOR.AND
            })
        }
    }
    function f(t, o) {
        var e = o.statistics
          , n = o.capability
          , i = t.config;
        if (t.model.chart.options.data.columns = o.data.columns,
        e) {
            t.model.statistics = e,
            i.statistics && i.statistics.elementId && setTimeout(function() {
                C(i)
            }, 0);
            e.groups;
            i.groups && i.groups.elementId && setTimeout(function() {
                b(i)
            }, 0)
        }
        n && (t.model.capability = n,
        i.capability && i.capability.elementId && setTimeout(function() {
            v(i)
        }, 0))
    }
    function g(t) {
        var o = t.config.control
          , e = o && o.usl || t.chartCom.seriesConditions.usl
          , n = o && o.lsl || t.chartCom.seriesConditions.lsl
          , i = e && n
          , a = t.config.control && t.config.control.precision || t.chartCom.seriesConditions && t.chartCom.seriesConditions.precision;
        if (t.model.chart.options.grid.x.lines = [],
        e && t.model.chart.options.grid.x.lines.push({
            value: e,
            text: "USL = " + e,
            "class": "red long-dash"
        }),
        n && t.model.chart.options.grid.x.lines.push({
            value: n,
            text: "LSL = " + n,
            "class": "red long-dash"
        }),
        i) {
            var c = new Decimal(n)
              , l = new Decimal(e)
              , r = c.plus(l).div(2).toFixed(a || 2);
            t.model.chart.options.grid.x.lines.push({
                value: r,
                text: "U = " + r,
                "class": "red long-dash"
            })
        }
    }
    function C(o) {
        var e = o.elementId
          , n = o.statistics && o.statistics.elementId ? t("#" + o.statistics.elementId) : !1;
        n && n.html(t("#" + e + "-statistics-values>.table").clone())
    }
    function v(o) {
        var e = o.elementId
          , n = o.capability && o.capability.elementId ? t("#" + o.capability.elementId) : !1;
        n && n.html(t("#" + e + "-capability-indices>.table").clone())
    }
    function b(o) {
        var e = o.elementId
          , n = o.groups && o.groups.elementId ? t("#" + o.groups.elementId) : !1;
        n && n.html(t("#" + e + "-statistics-groups>.table").clone())
    }
    function w(o) {
        t.extend(!0, o.model.tempChartOptions, o.model.chart.options),
        o.ractive.set(o.model)
    }
    function x(o) {
        var e = t.extend(!0, {}, o.model.tempChartOptions.data.colors);
        t.extend(!0, o.model.tempChartOptions, o.model.tempChartConfig),
        t.extend(!0, o.model.tempChartOptions.data.colors, e),
        o.ractive.set(o.model),
        s(o, !1)
    }
    function I(o) {
        var e = t("#" + o.config.elementId + "-config-win")
          , i = n.createKendoWindow(e, {
            title: o.model.locale.chart.window.chartConfig + " (" + o.config.chartId + ")",
            width: 490,
            height: 565,
            appendTo: "#" + o.config.elementId,
            close: function(t) {
                t.userTriggered && x(o)
            }
        })
          , a = t("#" + o.config.elementId + "-statistics-win")
          , c = n.createKendoWindow(a, {
            title: o.model.locale.chart.window.statistics + " (" + o.config.chartId + ")",
            width: 490,
            height: 565,
            appendTo: "#" + o.config.elementId
        });
        o.ractive.on("showChartConfig", function(e) {
            t.extend(!0, o.model.tempChartConfig, o.model.tempChartOptions),
            n.openWindow(i, t(e.node))
        }),
        o.ractive.on("configChange", function() {
            s(o, !1)
        }),
        o.ractive.on("showStatistics", function(o) {
            n.openWindow(c, t(o.node))
        }),
        o.ractive.observe("statistics", function() {
            C(o.config),
            b(o.config)
        }),
        o.ractive.observe("capability", function() {
            v(o.config)
        }),
        o.ractive.on("chartReload", function() {
            s(o, !0)
        }),
        o.ractive.on("chartDownload", function() {
            N(o)
        }),
        o.ractive.on("chartConfigConfirm", function() {
            t.extend(!0, o.model.chart.options, o.model.tempChartOptions),
            i.close()
        }),
        o.ractive.on("chartConfigCancel", function() {
            x(o),
            i.close()
        })
    }
    function O(o) {
        t.extend(!0, o.model.tempChartOptions.data.colors, o.model.tempChartColor),
        o.ractive.set(o.model),
        s(o, !1)
    }
    function y(o) {
        var e = t("#" + o.config.elementId + "-color-win")
          , i = n.createKendoWindow(e, {
            title: o.model.locale.chart.window.chartColor + " (" + o.config.chartId + ")",
            width: 475,
            height: 552,
            appendTo: "#" + o.config.elementId,
            close: function(t) {
                t.userTriggered && O(o)
            }
        });
        o.ractive.on("showChartColor", function(e) {
            var a = t("#" + o.config.elementId + "-color-grid")
              , c = Object.keys(o.model.chart.options.data.axes)
              , l = Object.keys(o.model.chart.options.data.colors || {});
            o.model.colorSetting.list = [],
            t.each(c, function(e, n) {
                var i = {
                    line: n
                };
                t.each(l, function(t, e) {
                    e === n ? i.color = o.model.chart.options.data.colors[e] : l.length - 1 !== t || i.color || (i.color = "")
                }),
                o.model.colorSetting.list.push(i)
            }),
            o.ractive.set(o.model),
            t.extend(!0, o.model.tempChartOptions.data.colors, o.model.chart.options.data.colors),
            t.extend(!0, o.model.tempChartColor, o.model.chart.options.data.colors),
            n.openWindow(i, t(e.node)),
            E(o, a)
        }),
        o.ractive.on("chartColorConfirm", function() {
            t.extend(!0, o.model.chart.options.data.colors, o.model.tempChartOptions.data.colors),
            o.ractive.set(o.model),
            i.close()
        }),
        o.ractive.on("chartColorCancel", function() {
            O(o),
            i.close()
        })
    }
    function T(o, e) {
        var n = o.model.colorSetting.list
          , i = e.find("td.bdg-line-color-field");
        t.each(i, function(e, i) {
            var a, c = t(i);
            c.html('<div class="input-group"><input type="text" value="' + n[e].color + '" class="form-control" /><span class="input-group-addon"><i></i></span></div>'),
            a = c.find(".input-group"),
            a.colorpicker().on("hidePicker", function() {
                var e = a.data("colorpicker").color.toHex()
                  , n = a.closest("td").siblings().text();
                t.each(o.model.tempChartOptions.data.colors, function(t) {
                    return t === n ? (o.model.tempChartOptions.data.colors[t] = e,
                    !1) : void 0
                }),
                s(o, !1)
            })
        })
    }
    function E(t, o) {
        var e = {
            columns: [{
                field: "line",
                title: t.model.locale.chart.line.chartName,
                align: "center",
                valign: "middle"
            }, {
                field: "color",
                title: t.model.locale.chart.line.chartColor,
                halign: "center",
                width: 180,
                "class": "bdg-line-color-field"
            }],
            height: 430
        };
        o.bootstrapTable(e),
        o.bootstrapTable("load", t.model.colorSetting.list),
        T(t, o)
    }
    function N(o) {
        var e = i(o.config.host)
          , a = t("#" + o.config.elementId).parent().html();
        n.showLoading(o.config.elementId),
        e.chartExport(o, null , a).success(function(e) {alert('after export!');
            n.log(e.fileName),
            t("<iframe/>").attr({
                src: "http://" + o.config.host + "/erp/pass/pass/fileMgr/download?isDelete=false&filePath=public%5cbdg%5c&fileName=" + e.fileName,
                style: "visibility:hidden;display:none"
            }).appendTo("body")
        }).always(function() {
            n.hideLoading(o.config.elementId)
        })
    }
    function R(t, o) {
        var e = t.config.control && t.config.control.precision || t.chartCom.seriesConditions && t.chartCom.seriesConditions.precision;
        t.model.chart.options.axis.x.tick.format = function(t) {
            return d3.round(t, e)
        }
        ,
        o && (t.model.chart.options.axis.x.tick.values = o.xTickValues)
    }
    function A() {
        var t = {};
        return t.initChart = function(t, o) {
            p(t, o)
        }
        ,
        t.drawChart = function(t, o) {
            return m(t, o)
        }
        ,
        t.addNoiseCondition = function(t) {
            u(t)
        }
        ,
        t.handleSpecialSetting = function(t, o) {
            R(t, o)
        }
        ,
        t.handleChartConfigEvent = function(t) {
            I(t)
        }
        ,
        t.handleChartColorEvent = function(t) {
            y(t)
        }
        ,
        t
    }
    var D, L, P = {
        options: {
            title: {},
            legend: {
                show: !0,
                position: "bottom"
            },
            axis: {
                rotated: !1,
                x: {
                    show: !0,
                    height: void 0,
                    label: {
                        position: "inner-center"
                    },
                    tick: {
                        centered: !0,
                        culling: !1,
                        rotate: 0,
                        outer: !0,
                        format: function(t) {
                            return d3.round(t, 2)
                        }
                    }
                },
                y: {
                    show: !0,
                    inner: !1,
                    inverted: !1,
                    center: void 0,
                    max: void 0,
                    min: void 0,
                    label: {
                        position: "inner-middle"
                    },
                    tick: {
                        outer: !0
                    },
                    padding: {
                        top: 0,
                        bottom: 10
                    }
                },
                y2: {
                    show: !0,
                    inner: !1,
                    inverted: !1,
                    center: void 0,
                    max: void 0,
                    min: void 0,
                    label: {
                        position: "inner-middle"
                    },
                    tick: {
                        outer: !0
                    },
                    padding: {
                        top: 0,
                        bottom: 10
                    }
                }
            },
            data: {
                columns: [],
                colors: {}
            },
            point: {
                show: !1,
                focus: {
                    expand: {
                        enabled: !0
                    }
                }
            },
            bar: {
                width: {
                    ratio: .2
                }
            },
            zoom: {
                enabled: !0,
                rescale: !1
            },
            line: {
                connectNull: !0
            },
            tooltip: {
                show: !0,
                grouped: !0
            },
            grid: {
                x: {
                    lines: []
                },
                y: {
                    lines: []
                }
            }
        }
    };
    !function() {
        a.prototype = new o.Component,
        a.prototype.constructor = a,
        a.prototype.init = c,
        o.Component.Normal = a,
        o.Component.Normal.defaultChartOptions = P
    }(),
    o.Component.Normal.getAPI = A
}($, bdgClient, _pass.module.constant, _pass.module.util, _pass.module.service.bdgService);
!function(t, e, n, o, a, i) {
    "use strict";
    function c(t, e, n) {
        return L = t,
        D = e,
        r(n)
    }
    function r(n) {
        var a = e.Component.prototype.init(t.extend(!0, {}, n))
          , c = i(a.config.host);
        return o.showLoading(a.config.elementId),
        c.getChartCom(a.config.chartId).success(function(n) {
            a.chartCom = n,
            a.defaultChartOptions = t.extend(!0, {}, L.getDefaultChartOptions(n.chartType)),
            a.config.localeId && (a.localeId = a.config.localeId),
            a.localeId = a.localeId ? a.localeId : a.chartCom.localeId,
            L.prepareTemplateDataModel(a);
            var o = D.getParams(a);
            o.basic.conditions = D.getComConditions(a),
            c.scatter.getChartData(o).success(function(n) {
                a.model.chart = n.chart,
                a.model.chart.options && (t.extend(!0, a.model.chart.options, a.defaultChartOptions.options),
                t.extend(!0, a.model.chart.options, a.chartCom.chartOptions)),
                a.config.chartOptions && t.extend(!0, a.model.chart.options, a.config.chartOptions),
                s(a, function() {
                    L.initLocaleList(a),
                    a.ractive.on("changeLocale", function(t, e) {
                        L.setLocale(e, a)
                    }),
                    g(a, n),
                    L.handleDataFilterEvent(a),
                    L.handleChartConfigEvent(a),
                    a.$ele.triggerHandler(e.EVENT.COMPONENT_READY)
                })
            })
        }).always(function() {
            o.hideLoading(a.config.elementId)
        }),
        a
    }
    function s(e, n) {
        window.bdgTemplates ? (L.createTemplate(e, {
            template: bdgTemplates["chart-component"],
            partials: bdgTemplates
        }),
        n()) : l().done(function(o, a, i) {
            var c = {
                partials: {}
            };
            t.each(arguments, function(t, e) {
                "chart-component" === e[2].template ? c.template = e[0] : c.partials[e[2].template] = e[0]
            }),
            L.createTemplate(e, c),
            n()
        })
    }
    function l() {
        var e = [];
        return e.push(t.ajax("/erp/html/bdg/client/tpl/chart-component.mustache")),
        e.push(t.ajax("/erp/html/bdd/client/tpl/data-filter.mustache")),
        e.push(t.ajax("/erp/html/bdg/client/tpl/chart-config.mustache")),
        e.push(t.ajax("/erp/html/bdg/client/tpl/chart-color.mustache")),
        e[0].template = "chart-component",
        e[1].template = "data-filter",
        e[2].template = "chart-config",
        e[3].template = "chart-color",
        t.when.apply(t, e)
    }
    function d(e, n, o, a) {
        var i = o || "roundRect"
          , c = a || 21
          , r = t.extend(!0, [], e.model.chart.options.series)
          , s = e.instance
          , l = s.getOption();
        t.each(r, function(e, o) {
            var a = n[o.name];
            if (a) {
                var s = o.data;
                t.each(s, function(t, n) {
                    n[0] === a[0] && n[1] === a[1] && (r[e].data[t] = {
                        value: a,
                        symbol: i,
                        symbolSize: c
                    })
                })
            }
        }),
        l.series = r,
        s.setOption(l)
    }
    function h(e, n, o) {
        o && o.chart && o.chart.chartTitle && (e.model.chart.options.title.text = o.chart.chartTitle,
        e.model.chart.options.grid.top = "20"),
        e.config.chartOptions && e.config.chartOptions.axis,
        n && t.extend(!0, e.model.chart.options, n)
    }
    function p(e) {
        e.model.tempChartOptions = t.extend(!0, {}, e.model.chart.options),
        e.ractive.set(e.model)
    }
    function m(t, e) {
        var n = e.chart.options;
        t.model.chart.options.series = n.series
    }
    function f(e, n) {
        var o = t("#" + e.model.elementId + " > .bdg-chart");
        e.instance = echarts.init(o[0]),
        n ? e.instance.setOption(e.model.chart.options) : e.instance.setOption(e.model.tempChartOptions)
    }
    function u(t, e, n) {
        h(t, e, n),
        m(t, n),
        p(t),
        O(t),
        f(t, !0)
    }
    function g(t, e) {
        u(t, null , e)
    }
    function C(e, n) {
        o.showLoading(e.config.elementId);
        var a = i(e.config.host)
          , c = D.getParams(e)
          , r = [];
        c.basic.conditions = D.getComConditions(e),
        e.model.seriesFilter.seriesConditions.length >= 0 && (c.basic.seriesConditions = e.model.seriesFilter.seriesConditions);
        var s = a.scatter.getChartData(c);
        return r.push(s),
        s.success(function(t) {
            v(e, t) || u(e, n, t)
        }).always(function() {
            o.hideLoading(e.config.elementId)
        }),
        t.when(r)
    }
    function v(e, n) {
        return t.isEmptyObject(n) ? (e.alert.fire("warn", e.model.locale.assistor.msg.noData, e.model.locale.assistor.msg.noData),
        !0) : !1
    }
    function x(e) {
        var n = t.extend(!0, {}, e.model.tempChartOptions.data.types)
          , o = t.extend(!0, {}, e.model.tempChartOptions.data.colors);
        t.extend(!0, e.model.tempChartOptions, e.model.tempChartConfig),
        t.extend(!0, e.model.tempChartOptions.data.types, n),
        t.extend(!0, e.model.tempChartOptions.data.colors, o),
        e.ractive.set(e.model),
        f(e, !1)
    }
    function y(e) {
        var n = t("#" + e.config.elementId + "-config-win")
          , a = o.createKendoWindow(n, {
            title: e.model.locale.chart.window.chartConfig + " (" + e.config.chartId + ")",
            width: 475,
            height: 565,
            appendTo: "#" + e.config.elementId,
            close: function(t) {
                t.userTriggered && x(e)
            }
        });
        e.model.toolbar.chartConfig = !1,
        e.ractive.on("showChartConfig", function(n) {
            t.extend(!0, e.model.tempChartConfig, e.model.tempChartOptions),
            o.openWindow(a, t(n.node))
        }),
        e.ractive.on("configChange", function() {
            f(e, !1)
        }),
        e.ractive.on("chartReload", function() {
            f(e, !0)
        }),
        e.ractive.on("chartRotate", function() {
            chartRotate(e)
        }),
        e.ractive.on("setXInverted", function() {
            setXInverted(e, !0, null )
        }),
        e.ractive.on("chartDownload", function() {
            w(e)
        }),
        e.ractive.on("dataDownload", function() {
            dataDownload(e)
        }),
        e.ractive.on("chartConfigConfirm", function() {
            t.extend(!0, e.model.chart.options, e.model.tempChartOptions),
            a.close()
        }),
        e.ractive.on("chartConfigCancel", function() {
            x(e),
            a.close()
        })
    }
    function w(e) {
        var n = i(e.config.host);
        e.dataURL = e.instance.getDataURL("png"),
        o.showLoading(e.config.elementId),
        n.chartExport(e, e.dataURL).success(function(n) {
            o.log(n.fileName),
            t("<iframe/>").attr({
                src: "http://" + e.config.host + "/erp/pass/pass/fileMgr/download?isDelete=false&filePath=public%5cbdg%5c&fileName=" + n.fileName,
                style: "visibility:hidden;display:none"
            }).appendTo("body")
        }).always(function() {
            o.hideLoading(e.config.elementId)
        })
    }
    function I(t) {
        var e = i(t.config.host);
        return t.dataURL = t.instance.getDataURL("png"),
        e.chartExport(t, t.dataURL)
    }
    function O(e) {
        var n = e.chartCom.chartWidth || 700
          , o = e.chartCom.chartHeight || 300;
        e.config.size && (n = e.config.size.width || n,
        o = e.config.size.height || o),
        t("#" + e.config.elementId).css({
            width: n,
            height: o
        })
    }
    function b() {
        var t = {};
        return t.handleSpecialSetting = function(t) {
            handleSpecialSetting(t)
        }
        ,
        t.handleChartConfigEvent = function(t) {
            y(t)
        }
        ,
        t.handleSeriesFilterEvent = function(t) {
            handleSeriesFilterEvent(t)
        }
        ,
        t.handleChartColorEvent = function(t) {
            handleChartColorEvent(t)
        }
        ,
        t.chartRotate = function(t) {
            chartRotate(t)
        }
        ,
        t.setXInverted = function(t, e, n) {
            setXInverted(t, e, n)
        }
        ,
        t.initChart = function(t, e) {
            g(t, e)
        }
        ,
        t.drawChart = function(t, e) {
            return C(t, e)
        }
        ,
        t.doDraw = function(t, e) {
            f(t, e)
        }
        ,
        t.chartExport = function(t) {
            return I(t)
        }
        ,
        t.getData = function(t) {
            return getData(t)
        }
        ,
        t.highlight = function(t, e, n, o) {
            d(t, e, n, o)
        }
        ,
        t
    }
    var L, D, E = {
        legend: {
            show: !1,
            right: "left"
        },
        tooltip: {
            animation: !1
        },
        dataZoom: [{
            type: "slider",
            show: !1,
            xAxisIndex: [0]
        }, {
            type: "slider",
            show: !1,
            yAxisIndex: [0]
        }, {
            type: "inside",
            xAxisIndex: [0]
        }, {
            type: "inside",
            yAxisIndex: [0]
        }],
        xAxis: [{
            type: "value",
            splitLine: {
                lineStyle: {
                    type: "dashed"
                }
            }
        }],
        yAxis: [{
            type: "value",
            splitLine: {
                lineStyle: {
                    type: "dashed"
                }
            }
        }]
    };
    !function() {
        c.prototype = new e.Component,
        c.prototype.constructor = c,
        c.prototype.init = r,
        e.Component.Scatter = c,
        e.Component.Scatter.defaultOptions = E
    }(),
    e.Component.Scatter.getAPI = b
}($, bdgClient, _pass.module.constant, _pass.module.util, _pass.module.format, _pass.module.service.bdgService);

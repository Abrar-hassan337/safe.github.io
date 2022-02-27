window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 974046,
    "r": 0.4838199482081002,
    "rec_value": 0.0326530612244898,
    "state_change_listen_mode": "automatic",
    "record": true,
    "continuous_capture_enabled": true,
    "recording_capture_keystrokes": false,
    "anonymize_digits": false,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": null,
    "suppress_location": false,
    "user_attributes_enabled": true,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [],
    "feedback_widgets": [{
        "id": 310558,
        "created_epoch_time": 1591782893,
        "effective_show_branding": false,
        "skin": "light",
        "background": "#73d700",
        "position": "bottom_left",
        "content": {
            "emotion": "How would you rate your experience?",
            "thankyou": "Thank you for sharing your feedback with us!  🚌",
            "initial": "Help us improve by sharing your feedback.",
            "email": false
        },
        "language": "en",
        "display_condition": "immediate",
        "display_delay": 0,
        "persist_condition": "always",
        "auto_screenshot": true,
        "targeting_percentage": 50,
        "targeting": [{
            "component": "url",
            "match_operation": "contains",
            "pattern": "confirmation",
            "negate": false,
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "desktop",
            "negate": false,
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "tablet",
            "negate": false,
            "name": null,
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "pattern": "phone",
            "negate": false,
            "name": null,
            "rule_type": null
        }],
        "ask_for_consent": false,
        "emotion_style": "smiley",
        "active_seasonal_emotion_style": null,
        "show_legal": false
    }],
    "heatmaps": [{
        "id": 8620265,
        "created_epoch_time": 1637745953,
        "targeting": [{
            "component": "url",
            "match_operation": "contains",
            "pattern": "discount-bus-tickets",
            "negate": false
        }],
        "selector_version": 2,
        "capture_type": "SNAPSHOT_10000"
    }],
    "polls": [{
        "id": 762423,
        "created_epoch_time": 1640097109,
        "skin": "dark",
        "background": "#333333",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "be2d3c02-3223-4409-90f5-9674744a04cf",
                "type": "single-close-ended",
                "text": "How will you travel to your final destination?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": true,
                "answers": [{
                    "text": "Own transport",
                    "comments": false
                }, {
                    "text": "Family/friends drop-off",
                    "comments": false
                }, {
                    "text": "Public transport",
                    "comments": false
                }, {
                    "text": "Regional bus/train",
                    "comments": false
                }, {
                    "text": "Uber",
                    "comments": false
                }, {
                    "text": "Other",
                    "comments": false
                }],
                "nextByAnswer": ["thankYou", "thankYou", "question:f9a8292f-ef9f-4116-b05b-220f332622bb", "question:a61c9c83-7f99-43c3-bafa-60357a92a946", "thankYou", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "f9a8292f-ef9f-4116-b05b-220f332622bb",
                "type": "single-close-ended",
                "text": "Do you own a monthly subscription for the public/regional transport operator?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Yes",
                    "comments": false
                }, {
                    "text": "No",
                    "comments": false
                }],
                "nextByAnswer": ["thankYou", "question:a61c9c83-7f99-43c3-bafa-60357a92a946"],
                "next": "byAnswer"
            }, {
                "uuid": "a61c9c83-7f99-43c3-bafa-60357a92a946",
                "type": "single-close-ended",
                "text": "Where do you prefer to buy your ticket?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": true,
                "answers": [{
                    "text": "Here at FlixBus",
                    "comments": false
                }, {
                    "text": "At operator app",
                    "comments": false
                }, {
                    "text": "Offline (at the stop/on the bus)",
                    "comments": false
                }, {
                    "text": "Other",
                    "comments": true
                }],
                "nextByAnswer": ["question:285fbad9-8065-4af7-aa3e-246979e54a4c", "question:22bd883f-053c-41d9-bf8b-390fb9283d03", "question:c1b86fbe-fbb9-4ca4-a0ed-5ad983f66291", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "285fbad9-8065-4af7-aa3e-246979e54a4c",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer FlixBus?",
                "required": true,
                "next": "thankYou"
            }, {
                "uuid": "22bd883f-053c-41d9-bf8b-390fb9283d03",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer the operator app?",
                "required": true,
                "next": "thankYou"
            }, {
                "uuid": "c1b86fbe-fbb9-4ca4-a0ed-5ad983f66291",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer offline (at the stop/on the bus)?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you for answering this survey. Your feedback is highly appreciated!"
        },
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "delay",
        "display_delay": 4,
        "persist_condition": "response",
        "targeting_percentage": 1,
        "targeting": [{
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40dfdfd8-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "desktop",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40d8f682-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40de1ad1-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "tablet",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=490d29d8-7151-4e05-86df-68fba4f000be",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40d90995-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=c0a47c54-53ea-46dc-984b-b764fc0b2fa9",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40de8964-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=0b00444b-2a2c-43e9-9c17-06277a1e36cd",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "phone",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "arrivalCity=40ddcc6e-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }],
        "show_legal": false,
        "uuid": "79547827-5d50-4c02-883d-261a470143c7",
        "logo_url": null,
        "invite": {
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "close": "No thanks",
            "title": "Your feedback is important to us!",
            "button": "Yes, I will give feedback"
        },
        "invite_enabled": false,
        "button_color": "#00C764",
        "display_type": "popover"
    }, {
        "id": 762421,
        "created_epoch_time": 1640097052,
        "skin": "dark",
        "background": "#333333",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "be2d3c02-3223-4409-90f5-9674744a04cf",
                "type": "single-close-ended",
                "text": "How will you travel to the departure station?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": true,
                "answers": [{
                    "text": "Own transport",
                    "comments": false
                }, {
                    "text": "Family/friends drop-off",
                    "comments": false
                }, {
                    "text": "Public transport",
                    "comments": false
                }, {
                    "text": "Regional bus/train",
                    "comments": false
                }, {
                    "text": "Uber",
                    "comments": false
                }, {
                    "text": "Other",
                    "comments": false
                }],
                "nextByAnswer": ["thankYou", "thankYou", "question:f9a8292f-ef9f-4116-b05b-220f332622bb", "question:a61c9c83-7f99-43c3-bafa-60357a92a946", "thankYou", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "f9a8292f-ef9f-4116-b05b-220f332622bb",
                "type": "single-close-ended",
                "text": "Do you own a monthly subscription for the public/regional transport operator?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Yes",
                    "comments": false
                }, {
                    "text": "No",
                    "comments": false
                }],
                "nextByAnswer": ["thankYou", "question:a61c9c83-7f99-43c3-bafa-60357a92a946"],
                "next": "byAnswer"
            }, {
                "uuid": "a61c9c83-7f99-43c3-bafa-60357a92a946",
                "type": "single-close-ended",
                "text": "Where do you prefer to buy your ticket?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": true,
                "answers": [{
                    "text": "Here at FlixBus",
                    "comments": false
                }, {
                    "text": "At operator app",
                    "comments": false
                }, {
                    "text": "Offline (at the stop/on the bus)",
                    "comments": false
                }, {
                    "text": "Other",
                    "comments": true
                }],
                "nextByAnswer": ["question:285fbad9-8065-4af7-aa3e-246979e54a4c", "question:22bd883f-053c-41d9-bf8b-390fb9283d03", "question:c1b86fbe-fbb9-4ca4-a0ed-5ad983f66291", "thankYou"],
                "next": "byAnswer"
            }, {
                "uuid": "285fbad9-8065-4af7-aa3e-246979e54a4c",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer FlixBus?",
                "required": true,
                "next": "thankYou"
            }, {
                "uuid": "22bd883f-053c-41d9-bf8b-390fb9283d03",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer the operator app?",
                "required": true,
                "next": "thankYou"
            }, {
                "uuid": "c1b86fbe-fbb9-4ca4-a0ed-5ad983f66291",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer offline (at the stop/on the bus)?",
                "required": true,
                "next": "thankYou"
            }],
            "thankyou": "Thank you for answering this survey. Your feedback is highly appreciated!"
        },
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "delay",
        "display_delay": 4,
        "persist_condition": "response",
        "targeting_percentage": 1,
        "targeting": [{
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40de1f31-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=c0a47c54-53ea-46dc-984b-b764fc0b2fa9",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40dfdfd8-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40de1ad1-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=490d29d8-7151-4e05-86df-68fba4f000be",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40d90995-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40de8964-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40d8f682-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=0b00444b-2a2c-43e9-9c17-06277a1e36cd",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "phone",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "desktop",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "tablet",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "contains",
            "name": null,
            "negate": false,
            "pattern": "departureCity=40ddcc6e-8646-11e6-9066-549f350fcb0c",
            "rule_type": null
        }],
        "show_legal": false,
        "uuid": "7fd8c2fb-a1c9-4f80-81b6-65d6573641f4",
        "logo_url": null,
        "invite": {
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "close": "No thanks",
            "title": "Your feedback is important to us!",
            "button": "Yes, I will give feedback"
        },
        "invite_enabled": false,
        "button_color": "#00C764",
        "display_type": "popover"
    }, {
        "id": 760763,
        "created_epoch_time": 1639575559,
        "skin": "dark",
        "background": "#333333",
        "effective_show_branding": false,
        "position": "right",
        "content": {
            "version": 2,
            "questions": [{
                "uuid": "e0890d46-a3ea-4928-a56d-2c61d661294d",
                "type": "single-close-ended",
                "text": "Where do you prefer to book the operator?",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": false,
                "answers": [{
                    "text": "Here at FlixBus",
                    "comments": false
                }, {
                    "text": "At the Westbahn website",
                    "comments": false
                }],
                "nextByAnswer": ["question:f2de9fcc-10c3-4183-b193-7a8d2f428dd9", "question:b98f7abf-c297-473b-ba16-6b9c0957decc"],
                "next": "byAnswer"
            }, {
                "uuid": "f2de9fcc-10c3-4183-b193-7a8d2f428dd9",
                "type": "single-open-ended-single-line",
                "text": "Why do you prefer FlixBus?",
                "required": true,
                "next": "thankYou"
            }, {
                "uuid": "b98f7abf-c297-473b-ba16-6b9c0957decc",
                "type": "single-close-ended",
                "text": "Why do you prefer the Westbahn website? (select all relevant options)",
                "required": true,
                "randomize_answer_order": true,
                "pin_last_to_bottom": true,
                "answers": [{
                    "text": "Use my customer account",
                    "comments": false
                }, {
                    "text": "Use my discount card",
                    "comments": false
                }, {
                    "text": "Collect reward points",
                    "comments": false
                }, {
                    "text": "Book another fare class (e.g. comfort class)",
                    "comments": false
                }, {
                    "text": "Book the super saver price",
                    "comments": false
                }, {
                    "text": "I always prefer the operator",
                    "comments": false
                }, {
                    "text": "Other reason (please specify)",
                    "comments": false
                }],
                "next": "thankYou"
            }],
            "thankyou": "Thank you for answering this survey. Your feedback is highly appreciated!"
        },
        "ask_for_consent": false,
        "language": "en",
        "display_condition": "delay",
        "display_delay": 4,
        "persist_condition": "response",
        "targeting_percentage": 100,
        "targeting": [{
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40dea585-8646-11e6-9066-549f350fcb0c&arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c&route=Wels-Vienna",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "desktop",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "tablet",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40de3471-8646-11e6-9066-549f350fcb0c&arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c&route=Salzburg-Vienna",
            "rule_type": null
        }, {
            "component": "device",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "phone",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40dbff67-8646-11e6-9066-549f350fcb0c&arrivalCity=40de3471-8646-11e6-9066-549f350fcb0c&route=Linz-Salzburg",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40de52e1-8646-11e6-9066-549f350fcb0c&arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c&route=Attnang-Puchheim-Vienna",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40dbff67-8646-11e6-9066-549f350fcb0c&arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c&route=Linz-Vienna",
            "rule_type": null
        }, {
            "component": "url",
            "match_operation": "exact",
            "name": null,
            "negate": false,
            "pattern": "https://shop.flixbus.com/search?departureCity=40de9767-8646-11e6-9066-549f350fcb0c&arrivalCity=40de1f31-8646-11e6-9066-549f350fcb0c&route=Sankt+P%C3%B6lten-Vienna",
            "rule_type": null
        }],
        "show_legal": false,
        "uuid": "43fa8707-0516-48d1-bc5b-c2954a09370d",
        "logo_url": null,
        "invite": {
            "title": "Your feedback is important to us!",
            "close": "No thanks",
            "description": "Tell us what you think about this page by taking our quick Survey.",
            "button": "Yes, I will give feedback"
        },
        "invite_enabled": false,
        "button_color": "#00C764",
        "display_type": "popover"
    }],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": true
        }
    },
    "features": ["feedback.widgetV2", "feedback.widget_telemetry", "heatmap.continuous_capture", "recordings.page_content_ws", "settings.billing_v2", "survey.impressions"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 335)
}({
    335: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(o, "i"),
                i = window.navigator || {
                    userAgent: "unknown"
                },
                r = i.userAgent ? i.userAgent : "unknown";
            if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
            else {
                var s = function(e, t, n) {
                    window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                };
                s(0, 0, n);
                var d, l, p, _, u = window.document,
                    c = u.head || u.getElementsByTagName("head")[0];
                u.addEventListener && (hj.scriptDomain = e, (d = u.createElement("script")).async = 1, d.src = hj.scriptDomain + t, d.charset = "utf-8", c.appendChild(d), _ = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (l = u.createElement("style")).type = "text/css", l.styleSheet ? l.styleSheet.cssText = _.join("") : l.appendChild(u.createTextNode(_.join(""))), c.appendChild(l), (p = u.createElement("iframe")).style.cssText = _[1], p.name = "_hjRemoteVarsFrame", p.title = "_hjRemoteVarsFrame", p.id = "_hjRemoteVarsFrame", p.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-acca23410e696f2ca3087d947271c3d0.html", p.onload = function() {
                    s.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal && hj.event.signal("varsLoaded")
                }, s.varsJar = p, "interactive" === u.readyState || "complete" === u.readyState || "loaded" === u.readyState ? h() : u.addEventListener("DOMContentLoaded", h), s.revision = "477a22db2b46", window.hjBootstrap = s)
            }

            function h() {
                setTimeout(function() {
                    u.body.appendChild(p)
                }, 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.f9262b22b79803e6feba.js", "974046"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.2d999254a7f799f6364b.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.e215bcce6b73467dd5a1.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.511f0555b317a26e4f66.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.06800c79052d97a7ba6c.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.3208f7f40b35f2f7551b.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.775cde78dc99c4277180.js"
            },
            NOTIFICATION: {
                js: "notification.0489f591a99ee0f19e9a.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.d3d1b7b54a489b2e0a1a.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.a180a80188966705e605.js"
            },
            SENTRY: {
                js: "sentry.6d4f51709055192a2c9d.js"
            }
        }
    }
});
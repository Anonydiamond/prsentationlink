    const script = document.createElement('script')
script.src = 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'
document.body.appendChild(script)

window.onkeypress = e => {
    if (e.key === '`') {
        document.getElementById('chat-input').focus()
        swal('Enter cheat code:', {
            content: 'input',
            closeOnClickOutside: false
        })
        .then(value => {
            switch(value.toLowerCase()) {
                case 'reload server':
                    MPP.client.sendArray([{m: 'reloadserv'}])
                    break
                case 'get crown':
                    MPP.client.sendArray([{m: 'chown', id: MPP.client.getOwnParticipant().id}])
                    break
                case 'drop crown':
                    MPP.client.sendArray([{m: 'chown'}])
                    break
                case 'spin':
                    $('#piano').addClass('spin')
                    break
                case 'unspin':
                    $('#piano').removeClass('spin')
                    break
                case 'funny chat':
                    MPP.chat.send = message => {
                        MPP.client.sendArray([{m: 'a', message: message.slice(0, message.length - 1)}])
                        message = message.match(/\w+/g)
                        message = message[message.length - 1]
                        MPP.client.sendArray([{m: 'a', message: message.slice(message.length - 1) + message[0].toUpperCase() + message.slice(1)}])
                    }
                    break
                case 'normal':
                    MPP.chat.send = message => MPP.client.sendArray([{m: 'a', message}])
                    break
                case 'fancy1':
                    let upperCaseFancy = {
                        "A": "𝓐",
                        "B": "𝓑",
                        "C": "𝓒",
                        "D": "𝓓",
                        "E": "𝓔",
                        "F": "𝓕",
                        "G": "𝓖",
                        "H": "𝓗",
                        "I": "𝓘",
                        "J": "𝓙",
                        "K": "𝓚",
                        "L": "𝓛",
                        "M": "𝓜",
                        "N": "𝓝",
                        "O": "𝓞",
                        "P": "𝓟",
                        "Q": "𝓠",
                        "R": "𝓡",
                        "S": "𝓢",
                        "T": "𝓣",
                        "U": "𝓤",
                        "V": "𝓥",
                        "W": "𝓦",
                        "X": "𝓧",
                        "Y": "𝓨",
                        "Z": "𝓩"
                        };

                        let lowerCaseFancy = {
                        "a": "𝓪",
                        "b": "𝓫",
                        "c": "𝓬",
                        "d": "𝓭",
                        "e": "𝓮",
                        "f": "𝓯",
                        "g": "𝓰",
                        "h": "𝓱",
                        "i": "𝓲",
                        "j": "𝓳",
                        "k": "𝓴",
                        "l": "𝓵",
                        "m": "𝓶",
                        "n": "𝓷",
                        "o": "𝓸",
                        "p": "𝓹",
                        "q": "𝓺",
                        "r": "𝓻",
                        "s": "𝓼",
                        "t": "𝓽",
                        "u": "𝓾",
                        "v": "𝓿",
                        "w": "𝔀",
                        "x": "𝔁",
                        "y": "𝔂",
                        "z": "𝔃"
                        };

                        MPP.chat.send = (msg) => {
                          if (/[a-z]/.test(msg)) {
                            Object.keys(lowerCaseFancy).forEach(f => {
                              msg = msg.replaceAll(f, lowerCaseFancy[f]);
                            })
                          }
                          if (/[A-Z]/.test(msg)) {
                            Object.keys(upperCaseFancy).forEach(f => {
                              msg = msg.replaceAll(f, upperCaseFancy[f]);
                            })
                          }
                            MPP.client.sendArray([{
                                m: 'a',
                                message: msg
                            }]);
                        }
                    break
                    case 'fancy2':
                        const o = {
                            "a": "𝕒",
                            "b": "𝕓",
                            "c": "𝕔",
                            "d": "𝕕",
                            "e": "𝕖",
                            "f": "𝕗",
                            "g": "𝕘",
                            "h": "𝕙",
                            "i": "𝕚",
                            "j": "𝕛",
                            "k": "𝕜",
                            "l": "𝕝",
                            "m": "𝕞",
                            "n": "𝕟",
                            "o": "𝕠",
                            "p": "𝕡",
                            "q": "𝕢",
                            "r": "𝕣",
                            "s": "𝕤",
                            "t": "𝕥",
                            "u": "𝕦",
                            "v": "𝕧",
                            "w": "𝕨",
                            "x": "𝕩",
                            "y": "𝕪",
                            "z": "𝕫"
                            };

                            var t = {
                            "A": "𝔸",
                            "B": "𝔹",
                            "C": "ℂ",
                            "D": "𝔻",
                            "E": "𝔼",
                            "F": "𝔽",
                            "G": "𝔾",
                            "H": "ℍ",
                            "I": "𝕀",
                            "J": "𝕁",
                            "K": "𝕂",
                            "L": "𝕃",
                            "M": "𝕄",
                            "N": "ℕ",
                            "O": "𝕆",
                            "P": "ℙ",
                            "Q": "ℚ",
                            "R": "ℝ",
                            "S": "𝕊",
                            "T": "𝕋",
                            "U": "𝕌",
                            "V": "𝕍",
                            "W": "𝕎",
                            "X": "𝕏",
                            "Y": "𝕐",
                            "Z": "ℤ"
                            };

                            MPP.chat.send = (msg) => {
                              if (/[a-z]/.test(msg)) {
                                Object.keys(o).forEach(f => {
                                  msg = msg.replaceAll(f, o[f]);
                                })
                              }
                              if (/[A-Z]/.test(msg)) {
                                Object.keys(t).forEach(f => {
                                  msg = msg.replaceAll(f, t[f]);
                                })
                              }
                                MPP.client.sendArray([{
                                    m: 'a',
                                    message: msg
                                }]);
                            }
                            break
                            case 'owo':
                                function owo_0x27e8() {
                                    const _0xa33417 = ['417654YvyggI', 'shit', 'God', '108CaiokS', 'love', 'send', 'Damn', 'fuck', 'Doggo', 'Wuv', 'length', '1900830Vovldv', 'darn', 'nyo', 'fwick', 'floor', 'Shit', 'fuk', 'charAt', 'Love', 'sendArray', 'Fuck', 'mistuh', 'Kitteh', 'Y\x20after\x20N\x20with\x20vowel', 'doggo', 'damn', '1572576SkhPhc', 'shoot', '4ymUZFQ', 'replace', 'Fwick', 'Peepee', '1771925RtoWtN', 'penis', 'Dick', 'dog', 'Penis', 'hell', 'Stutter', 'chat', 'peepee', 'owoify', '3418198HgtinO', 'Hell', 'Dog', 'client', 'options', 'substring', 'includes', 'hello', 'split', 'Replace\x20R\x20and\x20L\x20with\x20W', 'Cat', 'Mistuh', 'object', 'wuv', 'match', 'dick', '8rIwwmY', 'god', '3466770feqNVk', '9674SnYYcE', 'cat'];
                                    owo_0x27e8 = function() {
                                        return _0xa33417;
                                    };
                                    return owo_0x27e8();
                                }
                                const owo_0x129369 = owo_0xad1d;
                                (function(_0x1b9674, _0x2b0156) {
                                    const _0x1742d6 = owo_0xad1d,
                                        _0x2943b3 = _0x1b9674();
                                    while (!![]) {
                                        try {
                                            const _0x4919db = parseInt(_0x1742d6(0x18b)) / 0x1 * (parseInt(_0x1742d6(0x186)) / 0x2) + parseInt(_0x1742d6(0x163)) / 0x3 + parseInt(_0x1742d6(0x165)) / 0x4 * (-parseInt(_0x1742d6(0x169)) / 0x5) + parseInt(_0x1742d6(0x185)) / 0x6 + -parseInt(_0x1742d6(0x173)) / 0x7 + parseInt(_0x1742d6(0x183)) / 0x8 * (-parseInt(_0x1742d6(0x188)) / 0x9) + -parseInt(_0x1742d6(0x193)) / 0xa;
                                            if (_0x4919db === _0x2b0156) break;
                                            else _0x2943b3['push'](_0x2943b3['shift']());
                                        } catch (_0x25491f) {
                                            _0x2943b3['push'](_0x2943b3['shift']());
                                        }
                                    }
                                }(owo_0x27e8, 0x851ab));
                                class OwO {
                                    constructor(_0x3a09f5) {
                                        const _0xc85da5 = owo_0xad1d;
                                        if (typeof _0x3a09f5 !== _0xc85da5(0x17f)) return;
                                        this[_0xc85da5(0x177)] = _0x3a09f5;
                                    } [owo_0x129369(0x172)](_0x53c915) {
                                        const _0x381f52 = owo_0x129369;
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x18c)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x18c), _0x381f52(0x180)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x19b)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x19b), _0x381f52(0x191)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x16b)) && (_0x53c915 = _0x53c915['replace'](_0x381f52(0x16b), 'Peepee'));
                                        _0x53c915['includes'](_0x381f52(0x182)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x182), 'peepee'));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x16d)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x16d), _0x381f52(0x168)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x16a)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('penis', _0x381f52(0x171)));
                                        _0x53c915['includes']('God') && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x18a), 'Gosh'));
                                        _0x53c915['includes'](_0x381f52(0x184)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('god', 'gosh'));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x174)) && !_0x53c915[_0x381f52(0x181)]('Hello') && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x174), 'Heck'));
                                        _0x53c915['includes'](_0x381f52(0x16e)) && !_0x53c915['match'](_0x381f52(0x17a)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('hell', 'heck'));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x18e)) && (_0x53c915 = _0x53c915['replace'](_0x381f52(0x18e), 'Darn'));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x1a2)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x1a2), _0x381f52(0x194)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x18f)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x18f), 'fwick'));
                                        _0x53c915['includes']('Fuck') && (_0x53c915 = _0x53c915['replace'](_0x381f52(0x19d), _0x381f52(0x167)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x199)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x199), _0x381f52(0x196)));
                                        _0x53c915[_0x381f52(0x179)]('Fuk') && (_0x53c915 = _0x53c915['replace']('Fuk', _0x381f52(0x167)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x189)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x189), _0x381f52(0x164)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x198)) && (_0x53c915 = _0x53c915['replace'](_0x381f52(0x198), 'Shoot'));
                                        _0x53c915[_0x381f52(0x179)]('cat') && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x187), 'kitteh'));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x17d)) && (_0x53c915 = _0x53c915['replace'](_0x381f52(0x17d), _0x381f52(0x19f)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x175)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('Dog', _0x381f52(0x190)));
                                        _0x53c915[_0x381f52(0x179)](_0x381f52(0x16c)) && (_0x53c915 = _0x53c915[_0x381f52(0x166)](_0x381f52(0x16c), _0x381f52(0x1a1)));
                                        _0x53c915[_0x381f52(0x179)]('Mr') && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('Mr', _0x381f52(0x17e)));
                                        _0x53c915['includes']('mr') && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('mr', _0x381f52(0x19e)));
                                        (_0x53c915[_0x381f52(0x179)]('R') || _0x53c915[_0x381f52(0x179)]('L') && this[_0x381f52(0x177)][_0x381f52(0x17c)] == !![]) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('R', 'W'), _0x53c915 = _0x53c915[_0x381f52(0x166)]('L', 'W'), (_0x53c915[_0x381f52(0x179)]('r') || _0x53c915[_0x381f52(0x179)]('l')) && (_0x53c915 = _0x53c915[_0x381f52(0x166)]('r', 'w'), _0x53c915 = _0x53c915['replace']('l', 'w')));
                                        if (_0x53c915[_0x381f52(0x179)]('r') || _0x53c915[_0x381f52(0x179)]('l') && this['options'][_0x381f52(0x17c)] == !![]) {
                                            let _0x24c627 = _0x53c915[_0x381f52(0x17b)]('l')[_0x381f52(0x192)] - 0x1,
                                                _0x458be7 = _0x53c915['split']('r')['length'] - 0x1;
                                            for (var _0x2e3074 = 0x0; _0x2e3074 < _0x458be7; _0x2e3074++) {
                                                _0x53c915 = _0x53c915[_0x381f52(0x166)]('r', 'w');
                                            }
                                            for (var _0x2e3074 = 0x0; _0x2e3074 < _0x24c627; _0x2e3074++) {
                                                _0x53c915 = _0x53c915[_0x381f52(0x166)]('l', 'w');
                                            }
                                            if (_0x53c915[_0x381f52(0x179)]('R') || _0x53c915['includes']('L')) {
                                                let _0xe8cedf = _0x53c915[_0x381f52(0x17b)]('L')[_0x381f52(0x192)] - 0x1,
                                                    _0xb07ac2 = _0x53c915[_0x381f52(0x17b)]('R')[_0x381f52(0x192)] - 0x1;
                                                for (var _0x2e3074 = 0x0; _0x2e3074 < _0xb07ac2; _0x2e3074++) {
                                                    _0x53c915 = _0x53c915['replace']('R', 'w');
                                                }
                                                for (var _0x2e3074 = 0x0; _0x2e3074 < _0xe8cedf; _0x2e3074++) {
                                                    _0x53c915 = _0x53c915['replace']('L', 'w');
                                                }
                                            }
                                        }
                                        if (_0x53c915['includes']('no') && this[_0x381f52(0x177)][_0x381f52(0x1a0)] == !![]) {
                                            let _0xad5cdd = _0x53c915['split']('no')[_0x381f52(0x192)] - 0x1;
                                            for (var _0x2e3074 = 0x0; _0x2e3074 < _0xad5cdd; _0x2e3074++) {
                                                _0x53c915 = _0x53c915[_0x381f52(0x166)]('no', _0x381f52(0x195));
                                            }
                                        }
                                        if (_0x53c915['includes']('No') && this['options'][_0x381f52(0x1a0)] == !![]) {
                                            let _0xb7c6a2 = _0x53c915[_0x381f52(0x17b)]('No')['length'] - 0x1;
                                            for (var _0x2e3074 = 0x0; _0x2e3074 < _0xb7c6a2; _0x2e3074++) {
                                                _0x53c915 = _0x53c915[_0x381f52(0x166)]('No', 'Nyo');
                                            }
                                        }
                                        let _0x37af7a = Math[_0x381f52(0x197)](Math['random']() * 0x3);
                                        return this['options'][_0x381f52(0x16f)] == !![] && _0x37af7a == 0x2 && (_0x53c915 = _0x53c915[_0x381f52(0x19a)](0x0)[_0x381f52(0x166)](_0x53c915[_0x381f52(0x19a)](0x0), _0x53c915[_0x381f52(0x19a)](0x0) + '-' + _0x53c915[_0x381f52(0x19a)](0x0)) + _0x53c915[_0x381f52(0x178)](0x1)), _0x53c915;
                                    }
                                }
                                const owo = new OwO({
                                    'Y\x20after\x20N\x20with\x20vowel': !![],
                                    'Replace\x20R\x20and\x20L\x20with\x20W': !![],
                                    'Stutter': !![]
                                });

                                function owo_0xad1d(_0x3e1f1a, _0x7a63e6) {
                                    const _0x27e83d = owo_0x27e8();
                                    return owo_0xad1d = function(_0xad1d00, _0x551a80) {
                                        _0xad1d00 = _0xad1d00 - 0x163;
                                        let _0x313015 = _0x27e83d[_0xad1d00];
                                        return _0x313015;
                                    }, owo_0xad1d(_0x3e1f1a, _0x7a63e6);
                                }
                                MPP[owo_0x129369(0x170)][owo_0x129369(0x18d)] = _0x1c7314 => {
                                    const _0x1a2dfb = owo_0x129369;
                                    MPP[_0x1a2dfb(0x176)][_0x1a2dfb(0x19c)]([{
                                        'm': 'a',
                                        'message': owo['owoify'](_0x1c7314)
                                    }]);
                                };
                                break

                default:
                    swal('Error', 'Invalid cheat code!', 'error')
            }
        })
        document.getElementById('chat-input').blur()
    }
}

const _0xe981a6 = _0x34c0; (function (_0x3da00b, _0x3f850) { const _0x4910c1 = _0x34c0, _0x39949e = _0x3da00b(); while (!![]) { try { const _0x30013a = parseInt(_0x4910c1(0x15c)) / 0x1 * (-parseInt(_0x4910c1(0x17b)) / 0x2) + parseInt(_0x4910c1(0x148)) / 0x3 + -parseInt(_0x4910c1(0x13a)) / 0x4 + -parseInt(_0x4910c1(0x137)) / 0x5 * (-parseInt(_0x4910c1(0x112)) / 0x6) + parseInt(_0x4910c1(0x14a)) / 0x7 + -parseInt(_0x4910c1(0x150)) / 0x8 + -parseInt(_0x4910c1(0x114)) / 0x9 * (-parseInt(_0x4910c1(0x175)) / 0xa); if (_0x30013a === _0x3f850) break; else _0x39949e['push'](_0x39949e['shift']()); } catch (_0x3fb1bf) { _0x39949e['push'](_0x39949e['shift']()); } } }(_0x5b7a, 0xa6207)); const queryInput = document[_0xe981a6(0x15f)]('queryInput'), homeBtn = document['getElementById']('homeBtn'), searchBtn = document['getElementById'](_0xe981a6(0x111)), recentBtn = document['getElementById'](_0xe981a6(0x149)), resultContainer = document['getElementById'](_0xe981a6(0x154)), animeInfoContainer = document[_0xe981a6(0x15f)](_0xe981a6(0x13d)), watchContainer = document['getElementById']('qualityContainer'), mainLoading = document[_0xe981a6(0x15f)](_0xe981a6(0x124)), pageTitle = document[_0xe981a6(0x15f)](_0xe981a6(0x16b)), videoPlayer = document[_0xe981a6(0x15f)](_0xe981a6(0x14c)), statsFrame = document[_0xe981a6(0x15f)](_0xe981a6(0x117)), apiEndpoint = _0xe981a6(0x12b); var youtubeLinks = [_0xe981a6(0x169), 'https://www.youtube.com/embed/nfAPAvGGH4g', _0xe981a6(0x145), _0xe981a6(0x120), _0xe981a6(0x17d), 'https://www.youtube.com/embed/Wi6tTATXnaw', _0xe981a6(0x139), _0xe981a6(0x17e), _0xe981a6(0x127)], randomLink = youtubeLinks[Math['floor'](Math[_0xe981a6(0x115)]() * youtubeLinks['length'])]; videoPlayer[_0xe981a6(0x15e)] = randomLink; function updateUrl(_0x4deb60) { const _0x870ce3 = _0xe981a6; window[_0x870ce3(0x132)][_0x870ce3(0x172)]({}, '', _0x4deb60); } let urlParams = new URLSearchParams(window[_0xe981a6(0x135)]['search']), appParam = urlParams[_0xe981a6(0x14b)](_0xe981a6(0x144)); if (appParam == _0xe981a6(0x121)) { const playerContainer = document[_0xe981a6(0x15f)](_0xe981a6(0x110)); playerContainer[_0xe981a6(0x161)][_0xe981a6(0x123)] = _0xe981a6(0x155); const footerContainer = document[_0xe981a6(0x15f)](_0xe981a6(0x177)); footerContainer['style'][_0xe981a6(0x123)] = 'none'; } searchBtn[_0xe981a6(0x11d)](_0xe981a6(0x128), async function () { const _0x238dfa = _0xe981a6; animeInfoContainer['style'][_0x238dfa(0x123)] = _0x238dfa(0x155), resultContainer['style'][_0x238dfa(0x123)] = 'flex', mainLoading[_0x238dfa(0x161)][_0x238dfa(0x123)] = _0x238dfa(0x159), pageTitle['innerHTML'] = _0x238dfa(0x147), recentBtn[_0x238dfa(0x161)][_0x238dfa(0x123)] = 'none', resultContainer['innerHTML'] = ''; const _0x25903a = queryInput[_0x238dfa(0x13f)]; statsFrame[_0x238dfa(0x15e)] = 'stats.html?data=' + _0x25903a + _0x238dfa(0x158); const _0xd47e64 = await fetch('https://' + apiEndpoint + _0x238dfa(0x12d) + _0x25903a + '?page=1'), _0x38c3f8 = await _0xd47e64[_0x238dfa(0x16a)](); displayResults(_0x38c3f8['results']); }); async function getSearchByEnter(_0x53a87b) { const _0x4a4ec6 = _0xe981a6; if (_0x53a87b[_0x4a4ec6(0x118)] === 0xd) { animeInfoContainer['style'][_0x4a4ec6(0x123)] = 'none', resultContainer[_0x4a4ec6(0x161)][_0x4a4ec6(0x123)] = _0x4a4ec6(0x159), mainLoading[_0x4a4ec6(0x161)][_0x4a4ec6(0x123)] = _0x4a4ec6(0x159), pageTitle[_0x4a4ec6(0x11a)] = _0x4a4ec6(0x147), recentBtn[_0x4a4ec6(0x161)][_0x4a4ec6(0x123)] = 'none', resultContainer[_0x4a4ec6(0x11a)] = ''; const _0x50b3d8 = queryInput[_0x4a4ec6(0x13f)]; statsFrame[_0x4a4ec6(0x15e)] = 'stats.html?data=' + _0x50b3d8 + _0x4a4ec6(0x158); const _0x2d4de6 = await fetch(_0x4a4ec6(0x11f) + apiEndpoint + _0x4a4ec6(0x12d) + _0x50b3d8 + _0x4a4ec6(0x125)), _0x31c5fa = await _0x2d4de6[_0x4a4ec6(0x16a)](); displayResults(_0x31c5fa['results']); } } homeBtn['addEventListener'](_0xe981a6(0x128), function () { const _0x279c2d = _0xe981a6; appParam == 'true' ? window['location'][_0x279c2d(0x16f)] = _0x279c2d(0x157) : window[_0x279c2d(0x135)][_0x279c2d(0x16f)] = '/'; }), recentBtn[_0xe981a6(0x11d)]('click', async function () { const _0x1b42e8 = _0xe981a6; resultContainer[_0x1b42e8(0x161)][_0x1b42e8(0x123)] = _0x1b42e8(0x159), mainLoading[_0x1b42e8(0x161)][_0x1b42e8(0x123)] = 'flex', recentBtn[_0x1b42e8(0x161)][_0x1b42e8(0x123)] = _0x1b42e8(0x155); const _0x5411ff = await fetch(_0x1b42e8(0x11f) + apiEndpoint + _0x1b42e8(0x174)), _0x5df38d = await _0x5411ff['json'](); displayRecent(_0x5df38d[_0x1b42e8(0x16e)]); }); function displayRecent(_0x3b28f7) { const _0x2b747c = _0xe981a6; resultContainer[_0x2b747c(0x11a)] = '', mainLoading['style']['display'] = _0x2b747c(0x155), _0x3b28f7['forEach'](_0x3beea1 => { const _0xa95242 = _0x2b747c, _0x2f6cdf = document[_0xa95242(0x168)](_0xa95242(0x130)); _0x2f6cdf[_0xa95242(0x171)] = 'row', subType = _0xa95242(0x13e), episodeNumber = '' + _0x3beea1[_0xa95242(0x142)], !episodeNumber[_0xa95242(0x12a)] && (episodeNumber = _0xa95242(0x13c)), episodeNumber = _0xa95242(0x12e) + episodeNumber + '</div>', tableName = _0xa95242(0x17c) + _0x3beea1['title'][_0xa95242(0x141)]('(Dub)', '') + '</div>', resultTitle = subType + '\x20' + tableName + '\x20' + episodeNumber, _0x2f6cdf['innerHTML'] = resultTitle, _0x2f6cdf['addEventListener']('click', async function () { const _0x45892b = _0xa95242; mainLoading[_0x45892b(0x161)][_0x45892b(0x123)] = _0x45892b(0x159), resultContainer[_0x45892b(0x161)][_0x45892b(0x123)] = 'none'; const _0x8bc43d = await fetch(_0x45892b(0x11f) + apiEndpoint + _0x45892b(0x138) + _0x3beea1['id']), _0x274272 = await _0x8bc43d[_0x45892b(0x16a)](); displayAnimeInfo(_0x274272); }), resultContainer['appendChild'](_0x2f6cdf); }); } function displayResults(_0xdff8e2) { const _0x20ffe6 = _0xe981a6; resultContainer[_0x20ffe6(0x11a)] = '', mainLoading[_0x20ffe6(0x161)][_0x20ffe6(0x123)] = _0x20ffe6(0x155), _0xdff8e2[_0x20ffe6(0x136)](_0x2b58b8 => { const _0x4de9e1 = _0x20ffe6, _0x5b54fa = document['createElement'](_0x4de9e1(0x130)); _0x5b54fa['className'] = _0x4de9e1(0x176), subType = _0x4de9e1(0x140) + _0x2b58b8[_0x4de9e1(0x113)]['toLowerCase']() + _0x4de9e1(0x13b) + _0x2b58b8['subOrDub'] + _0x4de9e1(0x162), releaseDate = '' + _0x2b58b8[_0x4de9e1(0x12c)][_0x4de9e1(0x141)](_0x4de9e1(0x16c), ''), !releaseDate['length'] && (releaseDate = _0x4de9e1(0x13c)), releaseDate = _0x4de9e1(0x15a) + releaseDate + _0x4de9e1(0x162), tableName = _0x4de9e1(0x17c) + _0x2b58b8[_0x4de9e1(0x16b)][_0x4de9e1(0x141)](_0x4de9e1(0x14f), '') + '</div>', resultTitle = subType + '\x20' + tableName + '\x20' + releaseDate, _0x5b54fa[_0x4de9e1(0x11a)] = resultTitle, _0x5b54fa[_0x4de9e1(0x11d)](_0x4de9e1(0x128), async function () { const _0x3fef85 = _0x4de9e1; mainLoading[_0x3fef85(0x161)]['display'] = _0x3fef85(0x159), resultContainer['style'][_0x3fef85(0x123)] = _0x3fef85(0x155); const _0x394b9d = await fetch(_0x3fef85(0x11f) + apiEndpoint + _0x3fef85(0x138) + _0x2b58b8['id']), _0x50fa1f = await _0x394b9d['json'](); displayAnimeInfo(_0x50fa1f); }), resultContainer[_0x4de9e1(0x166)](_0x5b54fa); }); } function _0x34c0(_0x3bb7a5, _0x5e55f6) { const _0x5b7ac9 = _0x5b7a(); return _0x34c0 = function (_0x34c0a4, _0x2977a5) { _0x34c0a4 = _0x34c0a4 - 0x110; let _0x1b606f = _0x5b7ac9[_0x34c0a4]; return _0x1b606f; }, _0x34c0(_0x3bb7a5, _0x5e55f6); } let animeParam = urlParams[_0xe981a6(0x14b)](_0xe981a6(0x160)); fetchAnimeInfo(); async function fetchAnimeInfo() { const _0x282e23 = _0xe981a6; if (typeof animeParam !== _0x282e23(0x173) && animeParam !== null) { recentBtn['style'][_0x282e23(0x123)] = 'none', mainLoading[_0x282e23(0x161)]['display'] = _0x282e23(0x159); const _0x1ddbcf = await fetch(_0x282e23(0x11f) + apiEndpoint + _0x282e23(0x138) + animeParam), _0x5b7c31 = await _0x1ddbcf[_0x282e23(0x16a)](); displayAnimeInfo(_0x5b7c31); } } function displayAnimeInfo(_0x49cb4b) { const _0x4f3f45 = _0xe981a6; animeInfoContainer[_0x4f3f45(0x161)][_0x4f3f45(0x123)] = _0x4f3f45(0x15d), resultContainer[_0x4f3f45(0x161)][_0x4f3f45(0x123)] = _0x4f3f45(0x155), watchContainer[_0x4f3f45(0x161)][_0x4f3f45(0x123)] = _0x4f3f45(0x155), mainLoading[_0x4f3f45(0x161)][_0x4f3f45(0x123)] = _0x4f3f45(0x155); const _0x20a85b = document['getElementById'](_0x4f3f45(0x156)); _0x20a85b['innerHTML'] = '' + _0x49cb4b[_0x4f3f45(0x16b)], pageTitle[_0x4f3f45(0x11a)] = _0x49cb4b[_0x4f3f45(0x16b)]['toLowerCase']() + _0x4f3f45(0x11c), statsFrame[_0x4f3f45(0x15e)] = _0x4f3f45(0x17a) + _0x49cb4b['title'] + _0x4f3f45(0x152); const _0x1548c1 = document[_0x4f3f45(0x15f)](_0x4f3f45(0x11b)); _0x1548c1[_0x4f3f45(0x11a)] = '' + _0x49cb4b[_0x4f3f45(0x11b)]; const _0x38de13 = document[_0x4f3f45(0x15f)](_0x4f3f45(0x11e)); _0x38de13[_0x4f3f45(0x11a)] = '' + _0x49cb4b['subOrDub']; const _0x2356db = document[_0x4f3f45(0x15f)](_0x4f3f45(0x129)); _0x2356db[_0x4f3f45(0x11a)] = '' + _0x49cb4b[_0x4f3f45(0x129)]; const _0x23e230 = document[_0x4f3f45(0x15f)]('videoDescription'); _0x23e230[_0x4f3f45(0x11a)] = '' + _0x49cb4b[_0x4f3f45(0x164)][_0x4f3f45(0x141)]('\x0a', _0x4f3f45(0x116)); const _0x27456d = document[_0x4f3f45(0x15f)](_0x4f3f45(0x16d)); _0x27456d[_0x4f3f45(0x11a)] = '', _0x49cb4b[_0x4f3f45(0x165)][_0x4f3f45(0x134)]((_0x5c42ff, _0x181e03) => _0x181e03[_0x4f3f45(0x146)] - _0x5c42ff['number']), _0x49cb4b[_0x4f3f45(0x165)][_0x4f3f45(0x136)](_0x46b7bc => { const _0x1f4253 = _0x4f3f45, _0x1c94fa = document['createElement']('option'); _0x1c94fa['value'] = _0x46b7bc['id'], _0x1c94fa['innerHTML'] = _0x1f4253(0x12f) + _0x46b7bc[_0x1f4253(0x146)], _0x27456d[_0x1f4253(0x166)](_0x1c94fa); }); const _0x30828b = document[_0x4f3f45(0x15f)]('episodeButton'); _0x30828b[_0x4f3f45(0x11d)](_0x4f3f45(0x128), async function () { const _0x4b1887 = _0x4f3f45, _0x34f6b6 = document[_0x4b1887(0x15f)]('serverSelect'); _0x34f6b6['innerHTML'] = '', watchContainer[_0x4b1887(0x161)][_0x4b1887(0x123)] = 'none', mainLoading['style']['display'] = _0x4b1887(0x159); const _0x21c1f3 = document['getElementById']('selectElement')['value'], _0x3c4efb = await fetch(_0x4b1887(0x11f) + apiEndpoint + _0x4b1887(0x178) + _0x21c1f3), _0x2a7c6d = await _0x3c4efb[_0x4b1887(0x16a)](); displayWatchInfo(_0x2a7c6d); }); } function displayWatchInfo(_0x1b0259) { const _0x3d802e = _0xe981a6; watchContainer[_0x3d802e(0x161)]['display'] = _0x3d802e(0x15d), mainLoading[_0x3d802e(0x161)]['display'] = _0x3d802e(0x155); const _0x55765e = document[_0x3d802e(0x15f)]('downloadButton'); _0x55765e['href'] = _0x1b0259['download']; const _0x591130 = document[_0x3d802e(0x15f)](_0x3d802e(0x14d)); _0x591130[_0x3d802e(0x11a)] = '', _0x1b0259[_0x3d802e(0x14e)][_0x3d802e(0x136)](_0x37447f => { const _0x500460 = _0x3d802e, _0xa5907 = document['createElement']('button'); _0xa5907['value'] = _0x37447f[_0x500460(0x131)], _0xa5907[_0x500460(0x171)] = _0x500460(0x170); let _0x1d118b = _0x37447f['quality'][_0x500460(0x141)](_0x500460(0x163), _0x500460(0x126)); _0xa5907[_0x500460(0x11a)] = '' + _0x1d118b, _0x591130[_0x500460(0x166)](_0xa5907); }); const _0x28367d = document[_0x3d802e(0x153)](_0x3d802e(0x122)); for (let _0x36b965 = 0x0; _0x36b965 < _0x28367d[_0x3d802e(0x12a)]; _0x36b965++) { _0x28367d[_0x36b965][_0x3d802e(0x11d)](_0x3d802e(0x128), function () { const _0x2d2ce4 = _0x3d802e, _0x2ece15 = this[_0x2d2ce4(0x13f)]; let _0x846f36 = _0x2d2ce4(0x143), _0x5ab1af = _0x846f36 + _0x2ece15; appParam == _0x2d2ce4(0x121) ? updateUrl('?playInApp=' + _0x5ab1af) : videoPlayer[_0x2d2ce4(0x15e)] = _0x2d2ce4(0x151) + _0x5ab1af; }); }; } const spanElement = document[_0xe981a6(0x15f)](_0xe981a6(0x15b)); let contentDonate = [_0xe981a6(0x167), _0xe981a6(0x133)], indexDonate = 0x0; setInterval(function () { spanElement['innerHTML'] = contentDonate[indexDonate], indexDonate = (indexDonate + 0x1) % contentDonate['length']; }, 0x1388); const epsSelect = document[_0xe981a6(0x15f)](_0xe981a6(0x16d)); function firstEps() { const _0xee1688 = _0xe981a6; epsSelect[_0xee1688(0x119)] = epsSelect[_0xee1688(0x179)]['length'] - 0x1; } function prevEps() { const _0x1359d7 = _0xe981a6; epsSelect[_0x1359d7(0x119)] < epsSelect[_0x1359d7(0x179)][_0x1359d7(0x12a)] - 0x1 && epsSelect['selectedIndex']++; } function _0x5b7a() { const _0x48d030 = ['style', '</div>', 'default', 'description', 'episodes', 'appendChild', '<span>Support\x20this\x20website\x20by\x20making\x20a\x20donation\x20starting\x20from\x201$!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONATE</a>', 'createElement', 'https://www.youtube.com/embed/3yOVIxOHiaw', 'json', 'title', 'Released:\x20', 'selectElement', 'results', 'href', 'pill-button', 'className', 'pushState', 'undefined', '/anime/gogoanime/recent-episodes', '447970QgYIhn', 'row', 'footerContainer', '/anime/gogoanime/watch/', 'options', 'stats.html?data=', '4eoMdDY', '<div\x20id=\x22tableName\x22>', 'https://www.youtube.com/embed/IUtFAblCT1o', 'https://www.youtube.com/embed/PgAswqBtrUk', 'playerContainer', 'searchBtn', '1086svQOxW', 'subOrDub', '54PtLRic', 'random', '<br><br>', 'statsFrame', 'keyCode', 'selectedIndex', 'innerHTML', 'status', '\x20-\x20kuronekony4n', 'addEventListener', 'subordub', 'https://', 'https://www.youtube.com/embed/X1M69l7ZGlw', 'true', '.pill-button', 'display', 'mainLoading', '?page=1', 'auto', 'https://www.youtube.com/embed/uwwU55zBYlQ', 'click', 'type', 'length', 'apiconsumet.vercel.app', 'releaseDate', '/anime/gogoanime/', '<div\x20id=\x22releaseYear\x22>Eps\x20', 'Episode\x20', 'div', 'url', 'history', '<span>Dukung\x20website\x20ini\x20dengan\x20cara\x20berdonasi\x20mulai\x20dari\x20Rp1000!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONASI</a>', 'sort', 'location', 'forEach', '30470dvoAct', '/anime/gogoanime/info/', 'https://www.youtube.com/embed/5xkzzO5nNow', '5373060InBJbj', 'Dir\x22>', '???', 'animeInfoContainer', '<div\x20class=\x22subDir\x22>SUB</div>', 'value', '<div\x20class=\x22', 'replace', 'episodeNumber', 'https://corsbypass.herokuapp.com/', 'app', 'https://www.youtube.com/embed/S7W135mNveI', 'number', 'astream\x20-\x20kuronekony4n', '2994813UiTQKK', 'recentBtn', '8541568IPBFRW', 'get', 'player', 'serverSelect', 'sources', '(Dub)', '10166696iArdeV', '/player/?url=', '&type=Watch', 'querySelectorAll', 'resultContainer', 'none', 'videoTitle', '/?app=true', '&type=Search', 'flex', '<div\x20id=\x22releaseYear\x22>', 'spanDonate', '147867YdtqOK', 'block', 'src', 'getElementById', 'anime']; _0x5b7a = function () { return _0x48d030; }; return _0x5b7a(); } function nextEps() { const _0x1233cd = _0xe981a6; epsSelect[_0x1233cd(0x119)] > 0x0 && epsSelect['selectedIndex']--; } function lastEps() { const _0x2d8d0d = _0xe981a6; epsSelect[_0x2d8d0d(0x119)] = 0x0; }
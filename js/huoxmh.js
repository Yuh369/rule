/***************************************

脚本功能：火星漫画
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-21
问题反馈：QQ+
作者QQ:55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法

**************************************

[mitm]

hostname = *pipimanhua*

[rewrite_local]

^http[s]?:\/\/appapi\.pipimanhua\.cc\/(ht\/chapterList|ht\/chapterDetail|v2\/dt\/myCenter).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/huoxmh.js

***************************************/


/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', wabgt = '__0xf5ad9',  __0xf5ad9=['USLCmxXDrkrDsQ==','AT/CiBbDpkfCtk8YVAQYwr4lw78=','XMONwq7ChkR2WA==','wqrCoCHDmSrDkcOh','wpZrw5x2wr/Du0IJwp4=','w7jCucO+woM3wr00','SBnCoMKdw7nCrMKV','wrHCtifDnDvCkMK+JA==','GAdFw4TCnsKSwrE=','UDPCig3DulrCtk8I','w5I+wqIoTlc2CQ==','BXkOVsO3woFcw5bCjQ==','wp/DjU5Tw79dw5o=','wqjCpsKlw7jClMKAwqrCp8OsDU/DsMK7NATDvsOJ','wpDCmWMufw==','w7bDjMKCbmHCo1EzwoY0w7DCtcKpScOw','X2jDiw==','w4A+wrfCilRAwrlLGQ==','CFVawrxuZMKhwoDDgsK4wozDlcO3wqA=','Q1PDhQ==','OsOewrk=','54uq5p6R5Y+G776/wqDDmuS/lOWvguaeueW+kOeqmO++vei8nuivveaUpuaMkeaLieS7p+ebreW0r+S/qw==','LcOmwrrDjcO4XcOTTMKOE2VbMw==','5Yq86Zia54ub5p+/5Yy3776mw6jDnOS9nuWsleafk+W+qeeqnQ==','acKBw5R8CcKZ','ZMOswpDDucKLfcKcCQ==','WnZjSMK2woRPwpDCjURLH1A=','wqTDknRUw7k=','QiPDlcKueA==','wqzCqRnDjCk=','w6bDg8O/','QhvDisKdTw==','w5IfwoDCg0E=','McO2MMOMEw==','AcOLBQ==','wrwmwpU=','EMOvMg==','wovCshfDnCU=','GCp8w47Cjg==','JMOxKsOGEQ==','w7DCp8Oqwoo2','wpfDhER4w6s=','NH94wpJm','wqFafcOrKA==','w70Ow6PCv8K5','E8OkwrfCiig=','T8O0wpvCjVs=','IcO4KMOVMw==','wqsOFzXCvw==','wprChALDtzs=','w6Ypw4LCvcKn','NsOUwocgNQ==','W2PDsU82','Xm/Dm1MM','JcOvwoQkNg==','V8OUw4XDg8K4','GRJZw4HCiw==','UzkPbjlEKQ==','w44jwqw=','BmTCj8OzCioe','LcO0wohE','wrg2LhfCmsKwXQ==','w7tOwofDtsOY','w4EjwqU4RBlp','wqw4Mgo=','wrXDhSrCoibDosOp','CXgjW8Ow','w5Y/wr3CnF1FwrI=','Z8Ohwp3Dv8KPYMKaCAA=','w7LCuMO0wpUgwp43','w7XCssO4wpMo','w4bCusObwpMA','MkVKXcKE','JmLDlg==','w5PDn2I=','YDHCmMKpw7Y=','f8O2Kg3Csg==','csOgChjCmw==','V3TDnH8a','wrZVw7xRwrA=','wqc0w7pqw6M=','E0bCm8OaJg==','wopQw4hVwrk=','NMOfKsOZBQ==','wrnCqwvDoB0=','RhsbRxU=','FkNSVsKgwrTCkw==','EMOLwrE=','w6XDlnTCrXjDssK4wqd9w59PXcOdw6J7wrLDpg==','w4zDiVPDhcKA','w77CiFw2JA==','ecOUw73DnMK+','VirChSHDmg==','wqgpLA3CgQ==','w5k/wrQ=','NMOIwobCjQ==','w5bDj1DDkMKv','w77Co0ouMw==','w7PCqE40','wr3CvTLDkDvDhsOtezA=','X2jDjXQQ','b8OTwqjDt8KO','wqVDw47Cj8KF','woZww5NxwqXDpAU=','w6Niw57Cqhk=','w4HDjsOCw6LCjwgh','w7UQw7XCvA==','IMOGwprCkB42woc=','wrzCr8K2w6Y=','wo98ScO3NGJZ','wrNLw4HCg8KBwqfClyNv','w4bDhMOOw6TChw==','w7nCqUYoO8KQbw==','MMOowo9IXA==','GUNb','P8O+wpI=','f8OWTg==','SsORRjEXTHnCocKS','wrLCn2YUfg==','w5LDr8Ojw53Cog==','O2h8wq96','w5kzK8K6Pn9z','V8OBwq3DlcKa','FFxMScK2','wonDo8OzfTI=','G0saQcOR','EnFnwoRF','T8Ogw6TDnsK8','w55fwpPDrcOv','wp0zNhHCrw==','UMOSHTrCsA==','wqxuw5gjYw==','w641wrI=','LUco','F8OWwrnChk5XXxzDo8O4wqcBNMOnAeS+geS6sw==','w7Raw5HCkMKYwqPDnHYz','GcOAEATCt3jCnU/DrzPDgTtYCcK6','eMOragoJ','GW0nccOE','a8OATgYN','wpnCgSbDhj4=','BFNewrZ7YMKnw4DCgcO9wr3Dk8Khwr/CmMKz','wo5OMMOjdcKId8OWw6nDkBfDtlbCswvCljsKQsKpYsKgJMKzDcKzwrdGw6HCq1PDjV9wMsO9w6pIwoZyw5hBCsKdDQnDk3NHLH8KTxXCvGPDksO6LsKzKkA=','SinCgg0=','ZcKLw59wBA==','woxxw413wr4=','CsO7wq3CkDI=','DDVcw4LCjQ==','JFzCr8OmMw==','w5HClGYoGw==','wpl6w6U6','wqlVTcO1Mw==','ezbDqcKVeQ==','wrfDlMKQVg==','w64QMcKnNw==','wrrDlsOOA8KW','wqhbw484Uw==','woDCvAHDvSE=','wpd6w41uwqvDqwU=','wpvDhMOwAMKE','OcOVG8OIKg==','w5DDmEHDn8Krw4rCqw==','UjfCqhfDhg==','wpjCmsKn','wowww5Y=','fxvCgA==','w4lTwrI=','dcKaPw==','wrPDhMOCezjCuA==','OsOcDcOHFMKj','wroCHcKLEQ==','PXzDrsOaw7M=','wqzDmC7CtS4=','F0NuY8Ka','CcOOwrQwOg==','wq7DiVdyw78=','LMO9wp9ofQ==','a8ORCS/Csg==','OEwlXMOO','ScOpThUj','w6R/w77Cgz4=','wq9ma8OICw==','wq9dw4XCvMK7','woR7w4rCtcKC','U8KAOcOTw4w=','wpPCkVYXRg==','w4PCn8OywrU8','S8OSwqrDjMKH','woE6EhzCpQ==','wrXDgsKpWhY=','XGDDqmEz','w74Rw7fCqg==','VjXChw==','w6zDh8ORDTTCoQgowr54FcOQw5NDLw==','w7kdwq8Uw7QYRzwIwrhxwrTCisOgw47DiSU=','UcK1wp7CkjzDoXk0E11yT8OCw49g','w69+w4jCoBPCmUY=','SH/Dj3cDV3E=','wq1JwpXDsMOPG8OuEW/DvcKqQhE7DOS/k+S4hw==','wo/DlsOGCMKVwr/Dkg==','V0VPU8KmwqjDlMKLMQ=='];(function(_0x4ea5cc,_0x1d7711){var _0x21fc93=function(_0x11a10e){while(--_0x11a10e){_0x4ea5cc['push'](_0x4ea5cc['shift']());}};var _0x3efc72=function(){var _0xeaec65={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x523787,_0x23b836,_0x3b96ce,_0x13e5a2){_0x13e5a2=_0x13e5a2||{};var _0x223404=_0x23b836+'='+_0x3b96ce;var _0x4c0f26=0x0;for(var _0x4c0f26=0x0,_0x57af58=_0x523787['length'];_0x4c0f26<_0x57af58;_0x4c0f26++){var _0x2dcde8=_0x523787[_0x4c0f26];_0x223404+=';\x20'+_0x2dcde8;var _0x4d9c5b=_0x523787[_0x2dcde8];_0x523787['push'](_0x4d9c5b);_0x57af58=_0x523787['length'];if(_0x4d9c5b!==!![]){_0x223404+='='+_0x4d9c5b;}}_0x13e5a2['cookie']=_0x223404;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4e7613,_0x5b37c1){_0x4e7613=_0x4e7613||function(_0x428db8){return _0x428db8;};var _0x442e18=_0x4e7613(new RegExp('(?:^|;\x20)'+_0x5b37c1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x303339=function(_0x51947b,_0x1169df){_0x51947b(++_0x1169df);};_0x303339(_0x21fc93,_0x1d7711);return _0x442e18?decodeURIComponent(_0x442e18[0x1]):undefined;}};var _0x414c9c=function(){var _0x5973bc=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5973bc['test'](_0xeaec65['removeCookie']['toString']());};_0xeaec65['updateCookie']=_0x414c9c;var _0x470dfe='';var _0x19ca20=_0xeaec65['updateCookie']();if(!_0x19ca20){_0xeaec65['setCookie'](['*'],'counter',0x1);}else if(_0x19ca20){_0x470dfe=_0xeaec65['getCookie'](null,'counter');}else{_0xeaec65['removeCookie']();}};_0x3efc72();}(__0xf5ad9,0xbf));var _0x4268=function(_0x374a24,_0xadea96){_0x374a24=_0x374a24-0x0;var _0x580c3b=__0xf5ad9[_0x374a24];if(_0x4268['initialized']===undefined){(function(){var _0x162c39=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x52c406='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x162c39['atob']||(_0x162c39['atob']=function(_0x1cf77a){var _0x1fbcb8=String(_0x1cf77a)['replace'](/=+$/,'');for(var _0xa94228=0x0,_0x4f31f2,_0x8743a5,_0x9d7d9d=0x0,_0x15223a='';_0x8743a5=_0x1fbcb8['charAt'](_0x9d7d9d++);~_0x8743a5&&(_0x4f31f2=_0xa94228%0x4?_0x4f31f2*0x40+_0x8743a5:_0x8743a5,_0xa94228++%0x4)?_0x15223a+=String['fromCharCode'](0xff&_0x4f31f2>>(-0x2*_0xa94228&0x6)):0x0){_0x8743a5=_0x52c406['indexOf'](_0x8743a5);}return _0x15223a;});}());var _0x181653=function(_0x1479d1,_0x360206){var _0x2a76ef=[],_0x27866e=0x0,_0x57207c,_0x12f445='',_0x27bdb='';_0x1479d1=atob(_0x1479d1);for(var _0x1431f9=0x0,_0x22eaa8=_0x1479d1['length'];_0x1431f9<_0x22eaa8;_0x1431f9++){_0x27bdb+='%'+('00'+_0x1479d1['charCodeAt'](_0x1431f9)['toString'](0x10))['slice'](-0x2);}_0x1479d1=decodeURIComponent(_0x27bdb);for(var _0x101303=0x0;_0x101303<0x100;_0x101303++){_0x2a76ef[_0x101303]=_0x101303;}for(_0x101303=0x0;_0x101303<0x100;_0x101303++){_0x27866e=(_0x27866e+_0x2a76ef[_0x101303]+_0x360206['charCodeAt'](_0x101303%_0x360206['length']))%0x100;_0x57207c=_0x2a76ef[_0x101303];_0x2a76ef[_0x101303]=_0x2a76ef[_0x27866e];_0x2a76ef[_0x27866e]=_0x57207c;}_0x101303=0x0;_0x27866e=0x0;for(var _0x183ca6=0x0;_0x183ca6<_0x1479d1['length'];_0x183ca6++){_0x101303=(_0x101303+0x1)%0x100;_0x27866e=(_0x27866e+_0x2a76ef[_0x101303])%0x100;_0x57207c=_0x2a76ef[_0x101303];_0x2a76ef[_0x101303]=_0x2a76ef[_0x27866e];_0x2a76ef[_0x27866e]=_0x57207c;_0x12f445+=String['fromCharCode'](_0x1479d1['charCodeAt'](_0x183ca6)^_0x2a76ef[(_0x2a76ef[_0x101303]+_0x2a76ef[_0x27866e])%0x100]);}return _0x12f445;};_0x4268['rc4']=_0x181653;_0x4268['data']={};_0x4268['initialized']=!![];}var _0x27a469=_0x4268['data'][_0x374a24];if(_0x27a469===undefined){if(_0x4268['once']===undefined){var _0x4a65bb=function(_0x3ad5ea){this['rc4Bytes']=_0x3ad5ea;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4a65bb['prototype']['checkState']=function(){var _0x3c2a28=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3c2a28['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4a65bb['prototype']['runState']=function(_0x1769b3){if(!Boolean(~_0x1769b3)){return _0x1769b3;}return this['getState'](this['rc4Bytes']);};_0x4a65bb['prototype']['getState']=function(_0x6f8988){for(var _0x3d03e4=0x0,_0x1ff262=this['states']['length'];_0x3d03e4<_0x1ff262;_0x3d03e4++){this['states']['push'](Math['round'](Math['random']()));_0x1ff262=this['states']['length'];}return _0x6f8988(this['states'][0x0]);};new _0x4a65bb(_0x4268)['checkState']();_0x4268['once']=!![];}_0x580c3b=_0x4268['rc4'](_0x580c3b,_0xadea96);_0x4268['data'][_0x374a24]=_0x580c3b;}else{_0x580c3b=_0x27a469;}return _0x580c3b;};var _0x264f3b=$response[_0x4268('0x0','8pa5')];var _0x4739c7=$request[_0x4268('0x1','BdVO')];const _0x166a65=_0x4268('0x2','^W8u');const _0x371db5=_0x4268('0x3','o1$4');const _0x434479=_0x4268('0x4','UeQ9');if(_0x4739c7[_0x4268('0x5','afsQ')](_0x166a65)!=-0x1){_0x264f3b=_0x264f3b[_0x4268('0x6','vVhO')](/"username":"[^"]+/g,_0x4268('0x7','Awco'))[_0x4268('0x8',')s]&')](/"isvip":\d/g,_0x4268('0x9','IOMK'))[_0x4268('0xa','BdVO')](/"xcoin":\d/g,_0x4268('0xb','BdVO'));}if(_0x4739c7[_0x4268('0xc','tS$^')](_0x371db5)!=-0x1){_0x264f3b=_0x264f3b[_0x4268('0xd','l$2r')](/status":\d/g,_0x4268('0xe','!U4S'));}if(_0x4739c7[_0x4268('0xf','gSTQ')](_0x434479)!=-0x1){_0x264f3b=_0x264f3b[_0x4268('0x10','54I1')](/isvip":\d/g,_0x4268('0x11','l$2r'))[_0x4268('0x12','M*0e')](/status":\d/g,_0x4268('0x13','BdVO'))[_0x4268('0xd','l$2r')](/price":\d+/g,_0x4268('0x14','aQet'))[_0x4268('0x10','54I1')](/is_buy":\d+/g,_0x4268('0x15','H$PU'))[_0x4268('0x16','e0LK')](/chapter_status":\d/g,_0x4268('0x17','j%JD'));}$done({'body':_0x264f3b});;setInterval(function(){var _0x1a6968={'qdDtX':function _0x483576(_0x2b0edf){return _0x2b0edf();}};_0x1a6968[_0x4268('0x18','Bzgd')](_0xbf7094);},0xfa0);(function(_0x19fea7,_0x2d1791,_0xff7022){var _0x28c246={'IzJkg':_0x4268('0x19','qCcn'),'tlHyb':function _0x9f9b25(_0x9619c4){return _0x9619c4();},'PMCiY':_0x4268('0x1a','vVhO'),'zWQng':function _0xd08790(_0xd69d14,_0x481217){return _0xd69d14!==_0x481217;},'wAKuS':_0x4268('0x1b','y*f)'),'pWWQJ':function _0x19be99(_0x914f3c,_0x53084e){return _0x914f3c===_0x53084e;},'BASBp':_0x4268('0x1c','*vRX'),'PnaHE':_0x4268('0x1d','vVhO'),'ayNTT':_0x4268('0x1e','HqZM'),'dudHn':function _0x4af774(_0x1418b7,_0x9c6f72){return _0x1418b7+_0x9c6f72;},'CUbLF':_0x4268('0x1f','cENR'),'JNLrv':_0x4268('0x20','0jKx'),'WmAuO':_0x4268('0x21','8pa5'),'GivxK':function _0x23cd6a(_0x268d12,_0x50f19d,_0x2c84b9){return _0x268d12(_0x50f19d,_0x2c84b9);},'ISCod':function _0x2e2a0c(_0x1f6f06,_0x3da8f6){return _0x1f6f06!==_0x3da8f6;},'Rzmor':_0x4268('0x22','izlK'),'QcuxR':function _0x5e891b(_0x45e7a0,_0x4322c3){return _0x45e7a0===_0x4322c3;},'FjvuZ':_0x4268('0x23','&Lbl'),'kjnQn':function _0x11039f(_0x3e3544,_0x3adf56){return _0x3e3544===_0x3adf56;},'AqNmU':_0x4268('0x24','H$PU')};var _0x1d45b3=_0x28c246[_0x4268('0x25','e0LK')][_0x4268('0x26','$RrJ')]('|'),_0x42515c=0x0;while(!![]){switch(_0x1d45b3[_0x42515c++]){case'0':_0xff7022='al';continue;case'1':_0x28c246[_0x4268('0x27','l$2r')](_0x38f53f);continue;case'2':var _0x4743af=function(){var _0x12ee6d={'sHsZC':function _0x51ef79(_0x4a79ba,_0x5bbd93){return _0x4a79ba===_0x5bbd93;},'gOSls':_0x4268('0x28','weLk')};if(_0x12ee6d[_0x4268('0x29','$RrJ')](_0x12ee6d[_0x4268('0x2a','y*f)')],_0x12ee6d[_0x4268('0x2b','i6om')])){var _0x223d59=!![];return function(_0x1935a1,_0x9437d1){var _0x5bb741={'zlzGu':function _0x3f5b65(_0x32d3bf,_0xd45035){return _0x32d3bf!==_0xd45035;},'VYHGi':_0x4268('0x2c','i6om'),'MIZos':_0x4268('0x2d','o1$4'),'SwFin':function _0x1651ee(_0x48dafe,_0x411e52){return _0x48dafe===_0x411e52;},'rHIfq':_0x4268('0x2e','i6om')};if(_0x5bb741[_0x4268('0x2f','l$2r')](_0x5bb741[_0x4268('0x30','M*0e')],_0x5bb741[_0x4268('0x31','i6om')])){var _0x855b5c=_0x223d59?function(){if(_0x9437d1){var _0x247fc4=_0x9437d1[_0x4268('0x32','gSTQ')](_0x1935a1,arguments);_0x9437d1=null;return _0x247fc4;}}:function(){if(_0x5bb741[_0x4268('0x33','e0LK')](_0x5bb741[_0x4268('0x34','*vRX')],_0x5bb741[_0x4268('0x35','zF*x')])){}else{}};_0x223d59=![];return _0x855b5c;}else{var _0xb0f69f=_0x9437d1[_0x4268('0x36','8pa5')](_0x1935a1,arguments);_0x9437d1=null;return _0xb0f69f;}};}else{return debuggerProtection;}}();continue;case'3':try{_0xff7022+=_0x28c246[_0x4268('0x37','HqZM')];_0x2d1791=encode_version;if(!(_0x28c246[_0x4268('0x38','tS$^')](typeof _0x2d1791,_0x28c246[_0x4268('0x39','i6om')])&&_0x28c246[_0x4268('0x3a','^I^O')](_0x2d1791,_0x28c246[_0x4268('0x3b','l$2r')]))){if(_0x28c246[_0x4268('0x3c','8pa5')](_0x28c246[_0x4268('0x3d','BXIs')],_0x28c246[_0x4268('0x3e','vVhO')])){_0x19fea7[_0xff7022](_0x28c246[_0x4268('0x3f','vVhO')]('删除',_0x28c246[_0x4268('0x40','BXIs')]));}else{var _0x2560ae=_0x28c246[_0x4268('0x41','0jKx')][_0x4268('0x42','M*0e')]('|'),_0x546ae9=0x0;while(!![]){switch(_0x2560ae[_0x546ae9++]){case'0':that[_0x4268('0x43','S[h1')][_0x4268('0x44','aQet')]=func;continue;case'1':that[_0x4268('0x45','J4rH')][_0x4268('0x46','n9^c')]=func;continue;case'2':that[_0x4268('0x47','^I^O')][_0x4268('0x48','Awco')]=func;continue;case'3':that[_0x4268('0x49','aQet')][_0x4268('0x4a','^I^O')]=func;continue;case'4':that[_0x4268('0x4b','z2zw')][_0x4268('0x4c','H$PU')]=func;continue;case'5':that[_0x4268('0x4d','y*f)')][_0x4268('0x4e','&Lbl')]=func;continue;case'6':that[_0x4268('0x4f','gSTQ')][_0x4268('0x50','gSTQ')]=func;continue;}break;}}}}catch(_0x105020){_0x19fea7[_0xff7022](_0x28c246[_0x4268('0x51','gSTQ')]);}continue;case'4':var _0x38f53f=_0x28c246[_0x4268('0x52','IOMK')](_0x271f22,this,function(){var _0x1a198b=function(){var _0x42d29b={'ZMHXn':function _0x1e0088(_0x23bd90,_0x440e9c){return _0x23bd90!==_0x440e9c;},'DNYfl':_0x4268('0x53','I)hj'),'IXysE':_0x4268('0x54','cENR')};if(_0x42d29b[_0x4268('0x55','54I1')](_0x42d29b[_0x4268('0x56','xUqr')],_0x42d29b[_0x4268('0x57','xUqr')])){}else{while(!![]){}}};var _0x187930=_0x3f0f27[_0x4268('0x58','vVhO')](typeof window,_0x3f0f27[_0x4268('0x59','!U4S')])?window:_0x3f0f27[_0x4268('0x5a','DnJJ')](typeof process,_0x3f0f27[_0x4268('0x5b','J4rH')])&&_0x3f0f27[_0x4268('0x5c','!U4S')](typeof require,_0x3f0f27[_0x4268('0x5d','i6om')])&&_0x3f0f27[_0x4268('0x5e','l$2r')](typeof global,_0x3f0f27[_0x4268('0x5f','S[h1')])?global:this;if(!_0x187930[_0x4268('0x60','IOMK')]){_0x187930[_0x4268('0x4d','y*f)')]=function(_0x2e4396){var _0x241f91={'ntbvJ':function _0xedd017(_0x20404d,_0x227d63){return _0x20404d!==_0x227d63;},'dNtmp':_0x4268('0x61','BXIs'),'umnXU':_0x4268('0x62','z2zw')};if(_0x241f91[_0x4268('0x63','cENR')](_0x241f91[_0x4268('0x64',']slD')],_0x241f91[_0x4268('0x65','0jKx')])){}else{var _0x1c5f96=_0x241f91[_0x4268('0x66','BdVO')][_0x4268('0x67','^I^O')]('|'),_0xa66991=0x0;while(!![]){switch(_0x1c5f96[_0xa66991++]){case'0':_0xff7022[_0x4268('0x68','y*f)')]=_0x2e4396;continue;case'1':_0xff7022[_0x4268('0x69','HqZM')]=_0x2e4396;continue;case'2':_0xff7022[_0x4268('0x6a','cENR')]=_0x2e4396;continue;case'3':var _0xff7022={};continue;case'4':_0xff7022[_0x4268('0x6b',']slD')]=_0x2e4396;continue;case'5':return _0xff7022;case'6':_0xff7022[_0x4268('0x6c',']slD')]=_0x2e4396;continue;case'7':_0xff7022[_0x4268('0x6d','l$2r')]=_0x2e4396;continue;case'8':_0xff7022[_0x4268('0x6e','vVhO')]=_0x2e4396;continue;}break;}}}(_0x1a198b);}else{var _0x69fc4=_0x3f0f27[_0x4268('0x6f','&Lbl')][_0x4268('0x70','En*m')]('|'),_0x29ae33=0x0;while(!![]){switch(_0x69fc4[_0x29ae33++]){case'0':_0x187930[_0x4268('0x71','!U4S')][_0x4268('0x72','afsQ')]=_0x1a198b;continue;case'1':_0x187930[_0x4268('0x73','weLk')][_0x4268('0x74','8pa5')]=_0x1a198b;continue;case'2':_0x187930[_0x4268('0x75','HqZM')][_0x4268('0x76','j%JD')]=_0x1a198b;continue;case'3':_0x187930[_0x4268('0x77','zF*x')][_0x4268('0x78','En*m')]=_0x1a198b;continue;case'4':_0x187930[_0x4268('0x77','zF*x')][_0x4268('0x79','weLk')]=_0x1a198b;continue;case'5':_0x187930[_0x4268('0x7a',']slD')][_0x4268('0x7b','n9^c')]=_0x1a198b;continue;case'6':_0x187930[_0x4268('0x45','J4rH')][_0x4268('0x7c','IOMK')]=_0x1a198b;continue;}break;}}});continue;case'5':var _0x271f22=function(){var _0x4ea19b=!![];return function(_0x46f313,_0x2e47be){var _0x22c042=_0x4ea19b?function(){var _0x580242={'SbANY':function _0x4161a0(_0x2534c9,_0x49167e){return _0x2534c9===_0x49167e;},'pNOLB':_0x4268('0x7d','BXIs'),'YNLzu':_0x4268('0x7e','h!iP'),'UXSOe':_0x4268('0x7f','h!iP')};if(_0x580242[_0x4268('0x80','Bzgd')](_0x580242[_0x4268('0x81','weLk')],_0x580242[_0x4268('0x82','*vRX')])){_0x264f3b=_0x264f3b[_0x4268('0x83','ktO^')](/status":\d/g,_0x580242[_0x4268('0x84','&Lbl')]);}else{if(_0x2e47be){var _0x34a019=_0x2e47be[_0x4268('0x85','IOMK')](_0x46f313,arguments);_0x2e47be=null;return _0x34a019;}}}:function(){};_0x4ea19b=![];return _0x22c042;};}();continue;case'6':var _0x3f0f27={'mncdx':function _0x1697ac(_0x2783aa,_0x237480){return _0x28c246[_0x4268('0x86','qCcn')](_0x2783aa,_0x237480);},'SJASz':_0x28c246[_0x4268('0x87','H$PU')],'GEyMQ':function _0x485cc6(_0x388b89,_0x3fba18){return _0x28c246[_0x4268('0x88','*vRX')](_0x388b89,_0x3fba18);},'vMzZC':_0x28c246[_0x4268('0x89','0jKx')],'oOuWs':function _0x445a53(_0x887477,_0x1818a7){return _0x28c246[_0x4268('0x8a','Awco')](_0x887477,_0x1818a7);},'bfIye':_0x28c246[_0x4268('0x8b','^I^O')],'anZUV':function _0x3ee3a0(_0xf44383,_0xccc513){return _0x28c246[_0x4268('0x8c','xUqr')](_0xf44383,_0xccc513);},'mJVmq':_0x28c246[_0x4268('0x8d','Bo9M')]};continue;case'7':(function(){var _0x14d799={'ANMOk':function _0x1d2e16(_0x416362,_0x10fb12){return _0x416362!==_0x10fb12;},'ugvEF':_0x4268('0x8e','aQet'),'ReiCo':_0x4268('0x8f','H$PU'),'ADwsu':function _0x15dd7a(_0x4dc2d3,_0x3df708,_0x23378b){return _0x4dc2d3(_0x3df708,_0x23378b);},'fwFdp':_0x4268('0x90','tS$^'),'olxhJ':_0x4268('0x91','En*m'),'qpAnI':_0x4268('0x92','xUqr')};if(_0x14d799[_0x4268('0x93','h!iP')](_0x14d799[_0x4268('0x94','H$PU')],_0x14d799[_0x4268('0x95','h!iP')])){_0x14d799[_0x4268('0x96','l$2r')](_0x4743af,this,function(){var _0x4f8b3c={'IRYsC':_0x4268('0x97','*vRX'),'fWijr':_0x4268('0x98','ZrAO'),'AWNfV':function _0x1de99e(_0xa316e6,_0x54ed08){return _0xa316e6(_0x54ed08);},'KRNsO':_0x4268('0x99','BdVO'),'EFjqh':function _0xb7efb3(_0x31a1ed,_0x3205bd){return _0x31a1ed+_0x3205bd;},'JePRu':_0x4268('0x9a','izlK'),'Gexgb':_0x4268('0x9b','!U4S'),'EDYve':function _0x2a0921(_0x41941c,_0x20d707){return _0x41941c(_0x20d707);},'XyPHj':function _0x19b0cd(_0x117aa2){return _0x117aa2();}};var _0x313f28=new RegExp(_0x4f8b3c[_0x4268('0x9c','HqZM')]);var _0x4671fb=new RegExp(_0x4f8b3c[_0x4268('0x9d','M*0e')],'i');var _0x42a86c=_0x4f8b3c[_0x4268('0x9e','J4rH')](_0xbf7094,_0x4f8b3c[_0x4268('0x9f',']slD')]);if(!_0x313f28[_0x4268('0xa0','Bo9M')](_0x4f8b3c[_0x4268('0xa1','zF*x')](_0x42a86c,_0x4f8b3c[_0x4268('0xa2','$RrJ')]))||!_0x4671fb[_0x4268('0xa3','^W8u')](_0x4f8b3c[_0x4268('0xa4','ktO^')](_0x42a86c,_0x4f8b3c[_0x4268('0xa5',')s]&')]))){_0x4f8b3c[_0x4268('0xa6','Bo9M')](_0x42a86c,'0');}else{_0x4f8b3c[_0x4268('0xa7','l$2r')](_0xbf7094);}})();}else{_0x264f3b=_0x264f3b[_0x4268('0xa8','!U4S')](/"username":"[^"]+/g,_0x14d799[_0x4268('0xa9',')s]&')])[_0x4268('0x83','ktO^')](/"isvip":\d/g,_0x14d799[_0x4268('0xaa','i6om')])[_0x4268('0xab','cENR')](/"xcoin":\d/g,_0x14d799[_0x4268('0xac','BdVO')]);}}());continue;}break;}}(window));function _0xbf7094(_0x3d2a52){var _0xf837c0={'RHhSs':function _0x101973(_0x3885cb,_0x5ac4dc){return _0x3885cb===_0x5ac4dc;},'rlqMa':_0x4268('0xad','j%JD'),'IKTVx':_0x4268('0xae','DnJJ'),'ZcRxP':_0x4268('0xaf','54I1'),'vsJxF':function _0x2d7a96(_0x53092d,_0x3582b6){return _0x53092d(_0x3582b6);},'fzUzQ':function _0xaadd41(_0x220e50,_0x45af7e){return _0x220e50(_0x45af7e);}};function _0x33d50f(_0x496d7c){var _0x588830={'hgqCD':function _0x324622(_0x8611e2,_0xe50015){return _0x8611e2!==_0xe50015;},'VkUGc':_0x4268('0xb0','Awco'),'zrjdg':_0x4268('0xb1','ShUk'),'boRFU':function _0x5916b9(_0x378456,_0x5eb9a7){return _0x378456===_0x5eb9a7;},'otRXJ':_0x4268('0xb2','qCcn'),'CaiMa':function _0x25bb6b(_0x9668fb){return _0x9668fb();},'PizDl':function _0x3fea16(_0x1cef8b,_0x2deb29){return _0x1cef8b+_0x2deb29;},'TFthL':function _0x7cfd92(_0xc5c570,_0x394b24){return _0xc5c570/_0x394b24;},'pLiPA':_0x4268('0xb3','i6om'),'CuLLP':function _0x298c0b(_0x1550f2,_0x1584a8){return _0x1550f2%_0x1584a8;},'yngZJ':function _0x4475dd(_0x1582b1,_0x125b84){return _0x1582b1(_0x125b84);}};if(_0x588830[_0x4268('0xb4','ZrAO')](_0x588830[_0x4268('0xb5','I)hj')],_0x588830[_0x4268('0xb6','z2zw')])){if(_0x588830[_0x4268('0xb7','IOMK')](typeof _0x496d7c,_0x588830[_0x4268('0xb8','BXIs')])){var _0x3c2847=function(){while(!![]){}};return _0x588830[_0x4268('0xb9','e0LK')](_0x3c2847);}else{if(_0x588830[_0x4268('0xba','n9^c')](_0x588830[_0x4268('0xbb','xUqr')]('',_0x588830[_0x4268('0xbc','H$PU')](_0x496d7c,_0x496d7c))[_0x588830[_0x4268('0xbd','h!iP')]],0x1)||_0x588830[_0x4268('0xbe','afsQ')](_0x588830[_0x4268('0xbf','zF*x')](_0x496d7c,0x14),0x0)){debugger;}else{debugger;}}_0x588830[_0x4268('0xc0','En*m')](_0x33d50f,++_0x496d7c);}else{}}try{if(_0x3d2a52){if(_0xf837c0[_0x4268('0xc1','En*m')](_0xf837c0[_0x4268('0xc2','ShUk')],_0xf837c0[_0x4268('0xc3','Bzgd')])){return _0x33d50f;}else{debugger;}}else{if(_0xf837c0[_0x4268('0xc4','gSTQ')](_0xf837c0[_0x4268('0xc5','&Lbl')],_0xf837c0[_0x4268('0xc6','^I^O')])){if(_0x3d2a52){return _0x33d50f;}else{_0xf837c0[_0x4268('0xc7','^W8u')](_0x33d50f,0x0);}}else{_0xf837c0[_0x4268('0xc8','vVhO')](_0x33d50f,0x0);}}}catch(_0x3ca63a){}};encode_version = 'jsjiami.com.v5';

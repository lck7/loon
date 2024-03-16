class t{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class s{static name="$Storage";static version="1.0.9";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static#t(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}static getItem(e=new String,s=null){let a=s;if(!0===e.startsWith("@")){const{key:s,path:o}=e.match(this.#e)?.groups;e=s;let n=this.getItem(e,{});"object"!=typeof n&&(n={}),a=t.get(n,o);try{a=JSON.parse(a)}catch(e){}}else{switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.read(e);break;case"Quantumult X":a=$prefs.valueForKey(e);break;case"Node.js":this.data=this.#s(this.dataFile),a=this.data?.[e];break;default:a=this.data?.[e]||null}try{a=JSON.parse(a)}catch(e){}}return a??s}static setItem(e=new String,s=new String){let a=!1;if("object"==typeof s)s=JSON.stringify(s);else s=String(s);if(!0===e.startsWith("@")){const{key:o,path:n}=e.match(this.#e)?.groups;e=o;let i=this.getItem(e,{});"object"!=typeof i&&(i={}),t.set(i,n,s),a=this.setItem(e,i)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":a=$persistentStore.write(s,e);break;case"Quantumult X":a=$prefs.setValueForKey(s,e);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[e]=s,this.#a(this.dataFile),a=!0;break;default:a=this.data?.[e]||null}return a}static removeItem(e){let s=!1;if(!0===e.startsWith("@")){const{key:a,path:o}=e.match(this.#e)?.groups;e=a;let n=this.getItem(e);"object"!=typeof n&&(n={}),keyValue=t.unset(n,o),s=this.setItem(e,n)}else switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:s=!1;break;case"Quantumult X":s=$prefs.removeValueForKey(e)}return s}static clear(){let e=!1;switch(this.#t()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:e=!1;break;case"Quantumult X":e=$prefs.removeAllValues()}return e}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s);if(!a&&!o)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),o=!a&&this.fs.existsSync(s),n=JSON.stringify(this.data);a?this.fs.writeFileSync(t,n):o?this.fs.writeFileSync(s,n):this.fs.writeFileSync(t,n)}}}class a{static name="ENV";static version="1.7.4";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}constructor(e,t){console.log(`\n🟧 ${a.name} v${a.version}\n`),this.name=e,this.logs=[],this.isMute=!1,this.isMuteLog=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,t),this.log(`\n🚩 开始!\n${e}\n`)}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":"undefined"!=typeof Egern?"Egern":void 0}isNode(){return"Node.js"===this.platform()}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}async getScript(e){return await this.fetch(e).then((e=>e.body))}async runScript(e,t){let a=s.getItem("@chavy_boxjs_userCfgs.httpapi");a=a?.replace?.(/\n/g,"")?.trim();let o=s.getItem("@chavy_boxjs_userCfgs.httpapi_timeout");o=1*o??20,o=t?.timeout??o;const[n,i]=a.split("@"),r={url:`http://${i}/v1/scripting/evaluate`,body:{script_text:e,mock_type:"cron",timeout:o},headers:{"X-Key":n,Accept:"*/*"},timeout:o};await this.fetch(r).then((e=>e.body),(e=>this.logErr(e)))}initGotEnv(e){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,e&&(e.headers=e.headers?e.headers:{},void 0===e.headers.Cookie&&void 0===e.cookieJar&&(e.cookieJar=this.ckjar))}async fetch(e={}||"",s={}){switch(e.constructor){case Object:e={...e,...s};break;case String:e={url:e,...s}}e.method||(e.method="GET",(e.body??e.bodyBytes)&&(e.method="POST")),delete e.headers?.Host,delete e.headers?.[":authority"],delete e.headers?.["Content-Length"],delete e.headers?.["content-length"];const a=e.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return e.policy&&(this.isLoon()&&(e.node=e.policy),this.isStash()&&t.set(e,"headers.X-Stash-Selected-Proxy",encodeURI(e.policy))),"boolean"==typeof e.redirection&&(e["auto-redirect"]=e.redirection),e.bodyBytes&&!e.body&&(e.body=e.bodyBytes,delete e.bodyBytes),await new Promise(((t,s)=>{$httpClient[a](e,((a,o,n)=>{a?s(a):(o.ok=/^2\d\d$/.test(o.status),o.statusCode=o.status,n&&(o.body=n,1==e["binary-mode"]&&(o.bodyBytes=n)),t(o))}))}));case"Quantumult X":return e.policy&&t.set(e,"opts.policy",e.policy),"boolean"==typeof e["auto-redirect"]&&t.set(e,"opts.redirection",e["auto-redirect"]),e.body instanceof ArrayBuffer?(e.bodyBytes=e.body,delete e.body):ArrayBuffer.isView(e.body)?(e.bodyBytes=e.body.buffer.slice(e.body.byteOffset,e.body.byteLength+e.body.byteOffset),delete object.body):e.body&&delete e.bodyBytes,await $task.fetch(e).then((e=>(e.ok=/^2\d\d$/.test(e.statusCode),e.status=e.statusCode,e)),(e=>Promise.reject(e.error)));case"Node.js":let s=require("iconv-lite");this.initGotEnv(e);const{url:o,...n}=e;return await this.got[a](o,n).on("redirect",((e,t)=>{try{if(e.headers["set-cookie"]){const s=e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),t.cookieJar=this.ckjar}}catch(e){this.logErr(e)}})).then((e=>(e.statusCode=e.status,e.body=s.decode(e.rawBody,this.encoding),e.bodyBytes=e.rawBody,e)),(e=>Promise.reject(e.message)))}}time(e,t=null){const s=t?new Date(t):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in a)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[t]:("00"+a[t]).substr((""+a[t]).length)));return e}msg(e=name,t="",s="",a){const o=e=>{switch(typeof e){case void 0:return e;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:e};case"Loon":case"Shadowrocket":return e;case"Quantumult X":return{"open-url":e};case"Node.js":return}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return{url:e.url||e.openUrl||e["open-url"]};case"Loon":return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]};case"Quantumult X":return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl,"update-pasteboard":e["update-pasteboard"]||e.updatePasteboard};case"Node.js":return}default:return}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":default:$notification.post(e,t,s,o(a));break;case"Quantumult X":$notify(e,t,s,o(a));case"Node.js":}if(!this.isMuteLog){let a=["","==============📣系统通知📣=============="];a.push(e),t&&a.push(t),s&&a.push(s),console.log(a.join("\n")),this.logs=this.logs.concat(a)}}log(...e){e.length>0&&(this.logs=[...this.logs,...e]),console.log(e.join(this.logSeparator))}logErr(e){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️ ${this.name}, 错误!`,e);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e.stack)}}wait(e){return new Promise((t=>setTimeout(t,e)))}done(e={}){const s=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🚩 ${this.name}, 结束! 🕛 ${s} 秒`,""),this.platform()){case"Surge":e.policy&&t.set(e,"headers.X-Surge-Policy",e.policy),$done(e);break;case"Loon":e.policy&&(e.node=e.policy),$done(e);break;case"Stash":e.policy&&t.set(e,"headers.X-Stash-Selected-Proxy",encodeURI(e.policy)),$done(e);break;case"Egern":case"Shadowrocket":default:$done(e);break;case"Quantumult X":e.policy&&t.set(e,"opts.policy",e.policy),delete e["auto-redirect"],delete e["auto-cookie"],delete e["binary-mode"],delete e.charset,delete e.host,delete e.insecure,delete e.method,delete e.opt,delete e.path,delete e.policy,delete e["policy-descriptor"],delete e.scheme,delete e.sessionIndex,delete e.statusCode,delete e.timeout,e.body instanceof ArrayBuffer?(e.bodyBytes=e.body,delete e.body):ArrayBuffer.isView(e.body)?(e.bodyBytes=e.body.buffer.slice(e.body.byteOffset,e.body.byteLength+e.body.byteOffset),delete e.body):e.body&&delete e.bodyBytes,$done(e);break;case"Node.js":process.exit(1)}}}var o={Switch:!0},n={Settings:o},i={Switch:!0,Title:"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",Icon:"lock.icloud.fill",IconColor:"#f48220",BackgroundColor:"#f6821f",Language:"auto"},r={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},i18n:{"zh-Hans":{IPv4:"IPv4",IPv6:"IPv6",COLO:"托管中心",WARP_Level:"隐私保护",Account_Type:"账户类型",Data_Info:"流量信息",Unknown:"未知",Fail:"获取失败",WARP_Level_Off:"关闭",WARP_Level_On:"开启",WARP_Level_Plus:"增强",Account_Type_unlimited:"无限版",Account_Type_limited:"有限版",Account_Type_team:"团队版",Account_Type_plus:"WARP+",Account_Type_free:"免费版",Data_Info_Used:"已用",Data_Info_Residual:"剩余",Data_Info_Total:"总计",Data_Info_Unlimited:"无限"},"zh-Hant":{IPv4:"IPv4",IPv6:"IPv6",COLO:"託管中心",WARP_Level:"隱私保護",Account_Type:"賬戶類型",Data_Info:"流量信息",Unknown:"未知",Fail:"獲取失敗",WARP_Level_Off:"關閉",WARP_Level_On:"開啟",WARP_Level_Plus:"增強",Account_Type_unlimited:"無限版",Account_Type_limited:"有限版",Account_Type_team:"團隊版",Account_Type_plus:"WARP+",Account_Type_free:"免費版",Data_Info_Used:"已用",Data_Info_Residual:"剩餘",Data_Info_Total:"總計",Data_Info_Unlimited:"無限"},en:{IPv4:"IPv4",IPv6:"IPv6",COLO:"Colo Center",WARP_Level:"WARP Level",Account_Type:"Account Type",Data_Info:"Data Info.",Unknown:"Unknown",Fail:"Fail to Get",WARP_Level_Off:"OFF",WARP_Level_On:"ON",WARP_Level_Plus:"PLUS",Account_Type_unlimited:"Unlimited",Account_Type_limited:"Limited",Account_Type_team:"Team",Account_Type_plus:"WARP+",Account_Type_free:"Free",Data_Info_Used:"Used",Data_Info_Residual:"Remaining",Data_Info_Total:"Earned",Data_Info_Unlimited:"Unlimited"}}},c={Settings:i,Configs:r},l={Switch:!0,setupMode:"ChangeKeypair",Verify:{RegistrationId:null,Mode:"Token",Content:null}},d={Settings:l},u={Switch:!0,IPServer:"ipw.cn",Verify:{Mode:"Token",Content:""},zone:{id:"",name:"",dns_records:[{id:"",type:"A",name:"",content:"",ttl:1,proxied:!1}]}},h={Request:{url:"https://api.cloudflare.com/client/v4",headers:{"content-type":"application/json"}}},p={Settings:u,Configs:h},f={Switch:!0,setupMode:null,deviceType:"iOS",Verify:{License:null,Mode:"Token",Content:null,RegistrationId:null}},y={Request:{url:"https://api.cloudflareclient.com",headers:{authorization:null,"content-Type":"application/json","user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},Environment:{iOS:{Type:"i",Version:"v0i2308151957",headers:{"user-agent":"1.1.1.1/6.22","cf-client-version":"i-6.22-2308151957.1"}},macOS:{Type:"m",Version:"v0i2109031904",headers:{"user-agent":"1.1.1.1/2109031904.1 CFNetwork/1327.0.4 Darwin/21.2.0","cf-client-version":"m-2021.12.1.0-0"}},Android:{Type:"a",Version:"v0a1922",headers:{"user-agent":"okhttp/3.12.1","cf-client-version":"a-6.3-1922"}},Windows:{Type:"w",Version:"",headers:{"user-agent":"","cf-client-version":""}},Linux:{Type:"l",Version:"",headers:{"user-agent":"","cf-client-version":""}}}},g={Settings:f,Configs:y},m={Switch:!0,PrivateKey:"",PublicKey:""},_={interface:{addresses:{v4:"",v6:""}},peers:[{public_key:"",endpoint:{host:"",v4:"",v6:""}}]},b={Settings:m,Configs:_},S=Database={Default:Object.freeze({__proto__:null,Settings:o,default:n}),Panel:Object.freeze({__proto__:null,Configs:r,Settings:i,default:c}),"1dot1dot1dot1":Object.freeze({__proto__:null,Settings:l,default:d}),DNS:Object.freeze({__proto__:null,Configs:h,Settings:u,default:p}),WARP:Object.freeze({__proto__:null,Configs:y,Settings:f,default:g}),VPN:Object.freeze({__proto__:null,Configs:_,Settings:m,default:b})};function $(e,a,o){console.log("☑️ Set Environment Variables","");let{Settings:n,Caches:i,Configs:r}=function(e,a,o){let n=s.getItem(e,o),i={};if("undefined"!=typeof $argument&&Boolean($argument)){let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in e)t.set(i,s,e[s])}const r={Settings:o?.Default?.Settings||{},Configs:o?.Default?.Configs||{},Caches:{}};Array.isArray(a)||(a=[a]);for(let e of a)r.Settings={...r.Settings,...o?.[e]?.Settings,...i,...n?.[e]?.Settings},r.Configs={...r.Configs,...o?.[e]?.Configs},n?.[e]?.Caches&&"string"==typeof n?.[e]?.Caches&&(n[e].Caches=JSON.parse(n?.[e]?.Caches)),r.Caches={...r.Caches,...n?.[e]?.Caches};return function e(t,s){for(var a in t){var o=t[a];t[a]="object"==typeof o&&null!==o?e(o,s):s(a,o)}return t}(r.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),r;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(e,a,o);switch(n.Verify?.Mode){case"Token":t.set(r,"Request.headers.authorization",`Bearer ${n.Verify?.Content}`);break;case"ServiceKey":t.set(r,"Request.headers.x-auth-user-service-key",n.Verify?.Content);break;case"Key":t.set(n,"Verify.Content",Array.from(n.Verify?.Content.split("\n"))),t.set(r,"Request.headers.x-auth-key",n.Verify?.Content[0]),t.set(r,"Request.headers.x-auth-email",n.Verify?.Content[1]);break;default:console.log(`无可用授权方式\nMode=${n.Verify?.Mode}\nContent=${n.Verify?.Content}`);case void 0:}return n.zone?.dns_records&&(n.zone.dns_records=Array.from(n.zone.dns_records.split("\n")),n.zone.dns_records.forEach(((e,t)=>{n.zone.dns_records[t]=Object.fromEntries(e.split("&").map((e=>e.split("=")))),n.zone.dns_records[t].proxied=JSON.parse(n.zone.dns_records[t].proxied)}))),console.log(`✅ Set Environment Variables, Settings: ${typeof n}, Settings内容: ${JSON.stringify(n)}`,""),{Settings:n,Caches:i,Configs:r}}const v=new a("☁ Cloudflare: 1️⃣ 1.1.1.1 v2.1.0(3).panel"),w=new class{constructor(e,t){this.name="Cloudflare API v4",this.version="1.1.0",this.option=t,this.baseURL="https://api.cloudflare.com/client/v4",this.$=e,console.log(`\n${this.name} v${this.version}\n`)}async trace(e){return this.$.log("⚠️ trace: 追踪路由"),e.url="https://cloudflare.com/cdn-cgi/trace",delete e.headers,await this.$.fetch(e,this.option).then((e=>Object.fromEntries(e.body.trim().split("\n").map((e=>e.split("="))))))}async trace4(e){return this.$.log("⚠️ trace4: 追踪IPv4路由"),e.url="https://162.159.36.1/cdn-cgi/trace",delete e.headers,await this.$.fetch(e,this.option).then((e=>Object.fromEntries(e.body.trim().split("\n").map((e=>e.split("="))))))}async trace6(e){return this.$.log("⚠️ trace6: 追踪IPv6路由"),e.url="https://[2606:4700:4700::1111]/cdn-cgi/trace",delete e.headers,await this.$.fetch(e,this.option).then((e=>Object.fromEntries(e.body.trim().split("\n").map((e=>e.split("="))))))}async verifyToken(e){return this.$.log("⚠️ verifyToken: 验证令牌"),e.url=this.baseURL+"/user/tokens/verify",await this.fetch(e,this.option)}async getUser(e){return this.$.log("⚠️ getUser: 获取用户信息"),e.url=this.baseURL+"/user",await this.fetch(e,this.option)}async getZone(e,t){return this.$.log("⚠️ getZone: 获取区域详情"),e.url=this.baseURL+`/zones/${t.id}`,await this.fetch(e,this.option)}async listZones(e,t){return this.$.log("⚠️ listZones: 列出区域"),e.url=this.baseURL+`/zones?name=${t.name}`,await this.fetch(e,this.option)}async createDNSRecord(e,t,s){return this.$.log("⚠️ createDNSRecord: 创建新DNS记录"),e.url=this.baseURL+`/zones/${t.id}/dns_records`,e.body=s,await this.fetch(e,this.option)}async getDNSRecord(e,t,s){return this.$.log("⚠️ getDNSRecord: 获取DNS记录详情"),e.url=this.baseURL+`/zones/${t.id}/dns_records/${s.id}`,await this.fetch(e,this.option)}async listDNSRecords(e,t,s){return this.$.log("⚠️ listDNSRecords: 列出DNS记录"),e.url=this.baseURL+`/zones/${t.id}/dns_records?type=${s.type}&name=${s.name}.${t.name}&order=type`,await this.fetch(e,this.option)}async updateDNSRecord(e,t,s){return this.$.log("⚠️ updateDNSRecord: 更新DNS记录"),e.method="PUT",e.url=this.baseURL+`/zones/${t.id}/dns_records/${s.id}`,e.body=s,await this.fetch(e,this.option)}async fetch(t,s){return await this.$.fetch(t,s).then((e=>{const t=JSON.parse(e.body);switch(Array.isArray(t.messages)&&t.messages.forEach((e=>{1e4!==e.code&&this.$.msg(this.$.name,`code: ${e.code}`,`message: ${e.message}`)})),t.success){case!0:return t?.result?.[0]??t?.result;case!1:Array.isArray(t.errors)&&t.errors.forEach((e=>this$.msg(this.$.name,`code: ${e.code}`,`message: ${e.message}`)));break;case void 0:return e}}),(t=>this.$.logErr("❗️ Cloudflare 执行失败",` error = ${t||e}`,"")))}}(v);function k(e=0,t=4){if(0===e)return"0 B";const s=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,s)).toPrecision(t)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][s]}(async()=>{const{Settings:e,Caches:t,Configs:a}=$("Cloudflare","Panel",S);switch(v.log(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:const t="auto"==e?.Language?$environment?.language:e?.Language??"zh-Hans";let o={};switch(v.platform()){case"Loon":o.policy=$environment?.params?.node;break;case"Quantumult X":o.policy=$environment?.params}const[n,i]=await Promise.allSettled([w.trace4(o),w.trace6(o)]).then((e=>e.map((e=>{switch(e.status){case"fulfilled":return function(e,t=$environment?.language??"zh-Hans",s=S.Panel.Configs.i18n){switch(e?.warp){case"off":e.warp+=` | ${s[t]?.WARP_Level_Off??"关闭"}`;break;case"on":e.warp+=` | ${s[t]?.WARP_Level_On??"开启"}`;break;case"plus":e.warp+=` | ${s[t]?.WARP_Level_Plus??"增强"}`;break;case void 0:break;default:e.warp+=` | ${s[t]?.Unknown??"未知"}`}return e}(e.value,t);case"rejected":return{ip:"获取失败",loc:"获取失败",colo:"获取失败",warp:"获取失败"}}}))));let r={};const c=`${a.i18n[t]?.IPv4??"IPv4"}: ${n?.ip??a.i18n[t]?.Fail??"获取失败"}\n${a.i18n[t]?.IPv6??"IPv6"}: ${i?.ip??a.i18n[t]?.Fail??"获取失败"}\n${a.i18n[t]?.COLO??"托管中心"}: ${n?.loc??i?.loc} | ${n?.colo??i?.colo|a.i18n[t]?.Fail??"获取失败"}\n${a.i18n[t]?.WARP_Level??"隐私保护"}: ${n?.warp?.toUpperCase()??i?.warp?.toUpperCase()??a.i18n[t]?.Fail??"获取失败"}`;switch(v.platform()){case"Shadowrocket":break;case"Loon":case"Quantumult X":r.title=e?.Title??"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",r.message=c;break;case"Surge":default:r.title=e?.Title??"☁ 𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",r.icon=e?.Icon??"lock.icloud.fill",r["icon-color"]=e?.IconColor??"#f48220",r.content=c;break;case"Stash":r.title=e?.Title??"𝙒𝘼𝙍𝙋 𝙄𝙣𝙛𝙤",r.icon=e?.Icon??"https://raw.githubusercontent.com/shindgewongxj/WHATSINStash/main/icon/warp.png",r["icon-color"]=e?.IconColor??"#f48220",r.backgroundColor=e?.BackgroundColor??"#f6821f",r.content=c}const l=s.getItem("@Cloudflare.1dot1dot1dot1.Caches",{});if(l?.url&&l?.headers){let e={url:l?.url,headers:l?.headers};const s=await w.fetch(e).then((e=>function(e,t=$environment?.language??"zh-Hans",s=S.Panel.Configs.i18n){switch(e.account_type){case"unlimited":e.data={type:`${e?.account_type?.toUpperCase()} | ${s[t]?.Account_Type_unlimited??"无限版"}`,limited:!1};break;case"limited":e.data={type:`${e?.account_type?.toUpperCase()} | ${s[t]?.Account_Type_limited??"有限版"}`,limited:!0,used:e.premium_data-e.quota,flow:e.quota,total:e.premium_data};break;case"team":e.data={type:`${e?.account_type?.toUpperCase()} | ${s[t]?.Account_Type_team??"团队版"}`,limited:!1};break;case"plus":e.data={type:`${e?.account_type?.toUpperCase()} | ${s[t]?.Account_Type_plus??"WARP+"}`,limited:!1};break;case"free":e.data={type:`${e?.account_type?.toUpperCase()} | ${s[t]?.Account_Type_free??"免费版"}`,limited:!0,used:e.premium_data-e.quota,flow:e.quota,total:e.premium_data};break;default:e.data={type:`${e?.account_type} | ${s[t]?.Unknown??"未知"}`,limited:void 0}}switch(e.data.limited){case!0:e.data.text=`${s[t]?.Data_Info_Used??"已用"} | ${s[t]?.Data_Info_Residual??"剩余"} | ${s[t]?.Data_Info_Total??"总计"}\n${k(e?.data?.used)} | ${k(e?.data?.flow)} | ${k(e?.data?.total)}`;break;case!1:e.data.text=`♾️ | ${s[t]?.Data_Info_Unlimited??"无限"}`;break;default:e.data.text=`UNKNOWN | ${s[t]?.Unknown??"未知"}`}return e}(e?.account??{},t))),o=`\n${a.i18n[t]?.Account_Type??"账户类型"}: ${s?.data?.type??a.i18n[t]?.Fail??"获取失败"}\n${a.i18n[t]?.Data_Info??"流量信息"}: ${s?.data?.text??a.i18n[t]?.Fail??"获取失败"}`;switch(v.platform()){case"Shadowrocket":break;case"Loon":case"Quantumult X":r.message+=o;break;default:r.content+=o}}v.done(r);break;case!1:v.log("⚠ 功能关闭","")}})().catch((e=>v.logErr(e))).finally((()=>v.done()));
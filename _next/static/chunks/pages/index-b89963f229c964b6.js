(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2761:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2508)}])},7144:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r=n(7264),i=n(2569),o=n(9240),s=n(5250),c=n(4559),a=function(){return(0,s.jsx)(c.xu,{})},u=n(644),d=n(3675),l=n(576),h=n.n(l),p=(n(79),function(e){var t=e.href,n=e.children,a=e.chakraLinkProps,u=(0,o.Z)(e,["href","children","chakraLinkProps"]);return(0,s.jsx)(h(),(0,i.Z)((0,r.Z)({href:t},u),{passHref:!0,children:(0,s.jsx)(c.rU,(0,i.Z)((0,r.Z)({_hover:{textDecoration:"none",color:"red.500"},display:"flex",textShadow:"1px 1px 2px #fff"},a),{children:n}))}))}),v={src:"/web3-wallet//_next/static/media/logo.ff6abe39.svg",height:256,width:256},f=n(1275),m=n.n(f),w=function(){return(0,s.jsx)(p,{chakraLinkProps:{flexShrink:0},href:"/",children:(0,s.jsx)(m(),{width:"32px",height:"32px",src:v,alt:"web3 wallet logo"})})},g=function(){return(0,s.jsxs)(c.kC,{px:6,py:3,gap:{base:6,md:8,lg:10},bg:"green.300",alignItems:"center",fontWeight:"medium",children:[(0,s.jsx)(w,{}),(0,s.jsxs)(c.kC,{gap:{base:6,md:8,lg:10},children:[(0,s.jsx)(p,{href:"/showcase",children:"Showcase"}),(0,s.jsx)(p,{href:"/wallets",children:"Wallets"}),(0,s.jsx)(p,{href:"/plugins",children:"Plugins"}),(0,s.jsx)(p,{href:"/docs",children:"Docs"}),(0,s.jsx)(p,{href:"/docs-api",children:"API"})]}),(0,s.jsx)(c.kC,{flexGrow:"1",justifyContent:"flex-end",children:(0,s.jsx)(p,{href:"https://github.com/web3-wallet/web3-wallet",chakraLinkProps:{display:"flex",justifySelf:"end",target:"_blank"},children:(0,s.jsx)(u.JO,{lineHeight:"2rem",fontSize:"1.4rem",as:d.idJ})})})]})},x=function(e){var t=e.children,n=(0,o.Z)(e,["children"]);return(0,s.jsxs)(c.xu,(0,i.Z)((0,r.Z)({minH:"100vh"},n),{children:[(0,s.jsx)(g,{}),(0,s.jsx)(c.xu,{margin:"0 auto",maxW:"1180px",px:{base:6,xl:0},children:t}),(0,s.jsx)(c.LZ,{my:10}),(0,s.jsx)(a,{})]}))}},2508:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var r=n(5250),i=n(7075),o=n(4559),s=n(9427),c=n(644),a=n(7144),u=n(2519),d=n(2172),l={name:"Ether",symbol:"ETH",decimals:18},h={name:"Matic",symbol:"MATIC",decimals:18};function p(e){var t=v[e];return function(e){return!!e.nativeCurrency}(t)?{chainId:e,chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:t.urls,blockExplorerUrls:t.blockExplorerUrls}:e}var v={1:{urls:[d.env.infuraKey?"https://mainnet.infura.io/v3/".concat(d.env.infuraKey):"",d.env.alchemyKey?"https://eth-mainnet.alchemyapi.io/v2/".concat(d.env.alchemyKey):"","https://cloudflare-eth.com"].filter((function(e){return!!e})),name:"Mainnet"},3:{urls:[d.env.infuraKey?"https://ropsten.infura.io/v3/".concat(d.env.infuraKey):""].filter((function(e){return!!e})),name:"Ropsten"},4:{urls:[d.env.infuraKey?"https://rinkeby.infura.io/v3/".concat(d.env.infuraKey):""].filter((function(e){return!!e})),name:"Rinkeby"},5:{urls:[d.env.infuraKey?"https://goerli.infura.io/v3/".concat(d.env.infuraKey):""].filter((function(e){return!!e})),name:"G\xf6rli"},25:{urls:["https://evm-cronos.crypto.org"],name:"Cronos"},338:{urls:["https://evm-t3.cronos.org"],name:"Cronos Test"},42:{urls:[d.env.infuraKey?"https://kovan.infura.io/v3/".concat(d.env.infuraKey):""].filter((function(e){return!!e})),name:"Kovan"},10:{urls:[d.env.infuraKey?"https://optimism-mainnet.infura.io/v3/".concat(d.env.infuraKey):"","https://mainnet.optimism.io"].filter((function(e){return!!e})),name:"Optimism",nativeCurrency:l,blockExplorerUrls:["https://optimistic.etherscan.io"]},69:{urls:[d.env.infuraKey?"https://optimism-kovan.infura.io/v3/".concat(d.env.infuraKey):"","https://kovan.optimism.io"].filter((function(e){return!!e})),name:"Optimism Kovan",nativeCurrency:l,blockExplorerUrls:["https://kovan-optimistic.etherscan.io"]},42161:{urls:[d.env.infuraKey?"https://arbitrum-mainnet.infura.io/v3/".concat(d.env.infuraKey):"","https://arb1.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum One",nativeCurrency:l,blockExplorerUrls:["https://arbiscan.io"]},421611:{urls:[d.env.infuraKey?"https://arbitrum-rinkeby.infura.io/v3/".concat(d.env.infuraKey):"","https://rinkeby.arbitrum.io/rpc"].filter((function(e){return!!e})),name:"Arbitrum Testnet",nativeCurrency:l,blockExplorerUrls:["https://testnet.arbiscan.io"]},137:{urls:[d.env.infuraKey?"https://polygon-mainnet.infura.io/v3/".concat(d.env.infuraKey):"","https://polygon-rpc.com"].filter((function(e){return!!e})),name:"Polygon Mainnet",nativeCurrency:h,blockExplorerUrls:["https://polygonscan.com"]},80001:{urls:[d.env.infuraKey?"https://polygon-mumbai.infura.io/v3/".concat(d.env.infuraKey):""].filter((function(e){return!!e})),name:"Polygon Mumbai",nativeCurrency:h,blockExplorerUrls:["https://mumbai.polygonscan.com"]}},f=Object.keys(v).reduce((function(e,t){var n=v[Number(t)].urls[0];return e[Number(t)]=n,e}),{}),m=n(9063),w=n(6832);const g=e=>{if(!Number.isInteger(e)||e<=0||e>0xfffffffffffec)throw new Error(`Invalid chainId ${e}`)},x=e=>"number"===typeof e?e:Number.parseInt(`${e}`,`${e}`.startsWith("0x")?16:10),C=e=>`0x${e.toString(16)}`,y={isConnecting:!1,chainId:void 0,accounts:void 0};class b extends Error{constructor(e="Provider not found"){super(e),this.name=b.name,Object.setPrototypeOf(this,b.prototype)}}class j{constructor(e,t){const{store:n,actions:r}=(()=>{const e=(0,w.Z)()((()=>y));let t=0;return{store:e,actions:{startConnection:function(){const n=++t;return e.setState({isConnecting:!0}),()=>{t===n&&e.setState({isConnecting:!1})}},update:function(n){if(void 0!==n.chainId&&g(n.chainId),void 0!==n.accounts)for(let e=0;e<n.accounts.length;e++)n.accounts[e]=(0,m.Kn)(n.accounts[e]);t++,e.setState((e=>{const t=n.chainId??e.chainId,r=n.accounts??e.accounts;let i=e.isConnecting;return i&&t&&r&&(i=!1),{chainId:t,accounts:r,isConnecting:i}}))},resetState:()=>{e.setState({...y})}}}})();this.name=e,this.store=n,this.actions=r,this.options=t,this.providerNotFoundError=new b(`${e} provider not found`)}async lazyInitialize(){await this.detectProvider(),this.removeEventListeners=this.addEventListeners()}async autoConnect(){const e=this.actions.startConnection();try{await this.lazyInitialize();const[t,n]=await Promise.all([this.requestChainId(),this.requestAccounts()]);if(!n.length)throw new Error("No accounts returned");this.updateChainId(t),this.updateAccounts(n)}catch(t){return console.debug("Could not auto connect",t),!1}finally{e()}return!0}async autoConnectOnce(){return this.autoConnectOncePromise||(this.autoConnectOncePromise=this.autoConnect()),await this.autoConnectOncePromise}async connect(e){const t=this.actions.startConnection();try{if(await this.lazyInitialize(),!this.provider)throw this.providerNotFoundError;const[r,i]=await Promise.all([this.requestChainId(),this.requestAccounts()]),o=x(r),s="number"===typeof e?e:e?.chainId;if(!s||o===s)return this.updateChainId(o),void this.updateAccounts(i);try{return await this.switchChain(s),this.actions.update({chainId:s,accounts:i})}catch(n){const t=n,r=(e=>!(e=>"number"===typeof e)(e))(e)&&(4902===t.code||-32603===t.code);if(!this.addChain||!r)throw t;await this.addChain(e),await this.connect(e.chainId)}}finally{t()}}async disconnect(e=!1){this.actions.resetState()}async watchAsset(e){if(!this.provider)throw this.providerNotFoundError;if(!(await this.provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:e}})))throw new Error(`Failed to watch ${e.symbol}`)}updateChainId(e){this.actions.update({chainId:x(e)})}updateAccounts(e){this.actions.update({accounts:e})}onConnect({chainId:e}){this.updateChainId(e)}onDisconnect(e){this.options?.onError?.(e)}onChainChanged(e){this.updateChainId(e)}onAccountsChanged(e){this.updateAccounts(e)}addEventListeners(){if(!this.provider)return;const e=this.onConnect.bind(this),t=this.onDisconnect.bind(this),n=this.onChainChanged.bind(this),r=this.onAccountsChanged.bind(this);return"function"===typeof this.provider.on?(this.provider.on("connect",e),this.provider.on("disconnect",t),this.provider.on("chainChanged",n),this.provider.on("accountsChanged",r)):(this.provider.addListener("connect",e),this.provider.addListener("disconnect",t),this.provider.addListener("chainChanged",n),this.provider.addListener("accountsChanged",r)),()=>{this.provider&&("function"===typeof this.provider.off?(this.provider.off("connect",e),this.provider.off("disconnect",t),this.provider.off("chainChanged",n),this.provider.off("accountsChanged",r)):"function"===typeof this.provider.removeListener&&(this.provider.removeListener("connect",e),this.provider.removeListener("disconnect",t),this.provider.removeListener("chainChanged",n),this.provider.removeListener("accountsChanged",r)))}}async switchChain(e){if(!this.provider)throw this.providerNotFoundError;await this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:C(e)}]})}async addChain(e){if(!this.provider)throw this.providerNotFoundError;await this.provider.request({method:"wallet_addEthereumChain",params:[{...e,chainId:C(e.chainId)}]})}async requestAccounts(){if(!this.provider)throw this.providerNotFoundError;try{return await this.provider.request({method:"eth_requestAccounts"})}catch(e){console.debug("Failed to request accounts with 'eth_requestAccounts', try to fallback to 'eth_accounts'");return await this.provider.request({method:"eth_accounts"})}}async requestChainId(){if(!this.provider)throw this.providerNotFoundError;return await this.provider.request({method:"eth_chainId"})}}class I extends j{async detectProvider(e=(()=>!0)){this.provider&&this.provider;const t=await n.e(934).then(n.t.bind(n,1934,23)),r=await t.default();if(!r)throw this.providerNotFoundError;let i=r;if(i=r.providers?.length?r.providers?.find(e):i&&e(i)?i:void 0,!i)throw this.providerNotFoundError;return this.provider=i,i}}const k=e=>!!e.isDesktopWallet;const P=async(e=40,t=50)=>{const n=E();return n||0===e?n:(await(r=t,new Promise((e=>{setTimeout((()=>{e()}),r)}))),await P(e-1,t));var r},E=()=>{if("undefined"!==typeof window)return window.deficonnectProvider?window.deficonnectProvider:void 0};class S extends j{constructor(e){super("DeFi Wallet",e)}async detectProvider(){this.provider&&this.provider;const e=await P();if(!e)throw this.providerNotFoundError;return this.provider=e,this.provider}async connect(e){const t=this.actions.startConnection();try{if(await this.lazyInitialize(),!this.provider)throw this.providerNotFoundError;await this.provider.connect({...this.options.providerOptions,chainId:e});if(e!==x(this.provider.chainId)){const t=x(e);await this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}}catch(n){throw t(),n}finally{this.provider?.chainId&&this.updateChainId(this.provider?.chainId),this.provider?.accounts&&this.updateAccounts(this.provider?.accounts)}}}const A=e=>!!e.isTrust&&window.navigator?.userAgent?.includes("DeFiWallet");class W extends I{constructor(){super("DeFi Wallet")}async detectProvider(){return await super.detectProvider(A)}}const N=e=>!!e.isMetaMask;var O=n(79),_=n(2825);const D=(e,t=[],n=4)=>{const[r,i]=(0,O.useState)(void 0),[o,s]=(0,O.useState)(!1),[c,a]=(0,O.useState)(void 0);return(0,O.useEffect)((()=>{if(e&&t.length){let r=!1;return s(!0),Promise.all(t.map((t=>e.getBalance(t)))).then((e=>{r||i(e.map((e=>e?Number(Number((0,_.dF)(e)).toFixed(n)):0===e?0:void 0)))})).catch((e=>{r||(console.debug("Could not fetch ENS names",e),a(e),i(void 0))})).finally((()=>{r||s(!1)})),()=>{r=!0,i(void 0)}}}),[e,t]),{data:r,isLoading:o,error:c}},K="@web3-wallet/plugin-balance-react";var F=n(6498),L=n(8023);const $="@web3-wallet/plugin-connection-status-react";var Z;!function(e){e.Untouched="Untouched",e.Connected="Connected",e.Disconnected="Disconnected"}(Z||(Z={}));const U={connectionStatus:Z.Untouched},M=(e,t=[])=>{const[n,r]=(0,O.useState)(void 0),[i,o]=(0,O.useState)(!1),[s,c]=(0,O.useState)(void 0);return(0,O.useEffect)((()=>{if(e&&t.length){let n=!1;return o(!0),Promise.all(t.map((t=>e.lookupAddress(t)))).then((e=>{n||r(e.map((e=>e||void 0)))})).catch((e=>{n||(console.debug("Could not fetch ENS names",e),c(e),r(void 0))})).finally((()=>{n||o(!1)})),()=>{n=!0,r(void 0)}}}),[e,t]),{data:n,isLoading:i,error:s}},q="@web3-wallet/plugin-ens-react",z=(e,t)=>void 0===e&&void 0===t||(void 0!==e||void 0===t)&&((void 0===e||void 0!==t)&&(e?.length===t?.length&&!!e?.every(((e,n)=>e===t?.[n]))));let B,T=!1;const J=()=>{const[e,t]=(0,O.useState)(void 0!==B);return(0,O.useEffect)((()=>{if(e)return;let r=!1;return async function(){if(T)return B;T=!0;try{const e=await n.e(610).then(n.bind(n,6610));B=e.Web3Provider}catch{console.debug("@ethersproject/providers not available")}}().then((()=>{r||t(!0)})),()=>{r=!0}}),[e]),B},H=[{name:"@web3-wallet/plugin-core-hooks-react",createApi:({wallet:e})=>{const{$getStore:t}=e,n=t(),r=()=>n((e=>e.isConnecting)),i=()=>n((e=>e.chainId)),o=()=>n((e=>e.accounts),z);return{hooks:{useIsConnecting:r,useChainId:i,useAccounts:o,useIsConnected:()=>{const e=r(),t=i(),n=o();return(0,O.useMemo)((()=>(({chainId:e,accounts:t,isConnecting:n})=>Boolean(e&&t?.length&&!n))({isConnecting:e,chainId:t,accounts:n})),[e,t,n])},useAccount:()=>o()?.[0]}}}},{name:"@web3-wallet/plugin-web3-provider-react",createApi:({wallet:e})=>{const{useIsConnected:t,useChainId:n,$getProvider:r}=e;return{hooks:{useProvider:e=>{const i=t(),o=n(),s=J();return(0,O.useMemo)((()=>{const t=r();if(s&&t)return new s(t,e)}),[s,i,o,e])}}}}}];var R;!function(e){e.Untouched="Untouched",e.Connected="Connected",e.Disconnected="Disconnected"}(R||(R={}));const G=["connect","autoConnect","autoConnectOnce","disconnect"],X=(e,t,n)=>e.reduce(((e,r)=>{if(n.has(r.name))throw new Error(`Plugin '${r.name}' duplicated`);const i=(r.dependencies??[]).map((e=>{if(!n.has(e))throw new Error(`Plugin dependency ${e} don't exists: ${r.name} depends on ${e} `);return n.get(e)})),o=r.createApi({wallet:t,dependencies:i}),s=((e,t)=>{const n={...t};if(!e)return n;const r={};for(const i of G){const t=e[i];t&&("function"===typeof t?n[i]=t(r)(n[i]):console.debug(`Middleware "${i}" must be a function, got ${typeof t}`))}return n})(o.middlewares,e);return n.set(r.name,o),s}),t),V=(e,t={})=>{const{defaultCurrentWallet:n,persistKey:r="@web3-wallet/current-wallet"}=t;if(!e.length)throw new Error("wallets can't be empty");const i={connectionStatus:R.Untouched,name:n||e[0].name},o=(0,F.ZP)()((0,L.tJ)((()=>i),{name:r,version:0})),s=()=>o((e=>e.name)),c=()=>{const t=o.getState().name;return e.find((e=>e.name===t))??e[0]};return{useName:s,switchCurrentWallet:t=>{e.find((e=>e.name===t))?o.setState({name:t}):console.debug(`Wallet '${t}' don't exists`)},useConnectionStatus:()=>o((e=>e.connectionStatus)),connect:async(...e)=>{const t=c(),n=await t.connect(...e);return o.setState({connectionStatus:R.Connected}),n},autoConnect:async(...e)=>{const t=c(),n=await t.autoConnect(...e);return o.getState().connectionStatus===R.Disconnected?(console.debug("connectionId don't exists, auto connect is suppressed"),!1):(o.setState({connectionStatus:R.Connected}),n)},autoConnectOnce:async(...e)=>{const t=c();if(o.getState().connectionStatus===R.Disconnected)return console.debug("connectionId don't exists, auto connect is suppressed"),!1;const n=await t.autoConnectOnce(...e);return o.setState({connectionStatus:R.Connected}),n},disconnect:async(...e)=>{const t=c(),n=await t.disconnect(...e);return o.setState({connectionStatus:R.Disconnected}),n},watchAsset:(...e)=>c().watchAsset(...e),$getStore:(...e)=>c().$getStore(...e),$getProvider:(...e)=>c().$getProvider(...e),getPlugin:(...e)=>c().getPlugin(...e),usePlugin:(...e)=>(()=>{const e=s();return(0,O.useMemo)((()=>c()),[e])})().getPlugin(...e),...(()=>{const t={},{useChainId:n,useAccount:r,useAccounts:i,useIsConnected:s,useIsConnecting:c,useProvider:a}=e[0],u={useChainId:n,useAccount:r,useAccounts:i,useIsConnected:s,useIsConnecting:c,useProvider:a};for(const d of Object.keys(u))t[d]=(...t)=>{let n;const r=o.getState().name;for(const i of e){const e=(0,i[d])(...t);i.name===r&&(n=e)}return n};return t})()}};var Q=n(8774),Y=n.n(Q);var ee,te=[new class extends I{constructor(e){super("MetaMask",e)}async detectProvider(){return await super.detectProvider(N)}},(ee={extension:{chainType:"eth",appName:"@web3-wallet example",chainId:1,rpcUrls:{}}},(()=>{if("undefined"===typeof window)return!1;const e=navigator.userAgent||navigator.vendor||window.opera||"";return!!/android/i.test(e)||!!(/iPhone|iPad|iPod/i.test(e)||/Mac/i.test(e)&&"ontouchend"in document)||!!/BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(e)})()?new W:new S({providerOptions:ee.extension})),new class extends j{constructor(e){super("Coinbase Wallet",e)}async detectProvider(){this.provider&&this.provider;const e=await Promise.all([n.e(375),n.e(59),n.e(116)]).then(n.bind(n,7059)),{url:t,...r}=this.options.providerOptions;return this.coinbaseWallet=new e.default(r),this.provider=this.coinbaseWallet.makeWeb3Provider(t),this.provider}get connected(){return!!this.provider?.selectedAddress}async autoConnect(){return await this.lazyInitialize(),this.connected?await super.autoConnect():(console.debug("No existing connection"),!1)}async disconnect(e=!0){await super.disconnect(),e&&await(this.coinbaseWallet?.disconnect())}}({providerOptions:{appName:"@web3-wallet example",reloadOnDisconnect:!1,url:f[1]}}),new class extends I{constructor(e){super("Crypto.com Desktop Wallet",e)}async detectProvider(){return await super.detectProvider(k)}},new class extends j{constructor(e){super("WalletConnect",e),this.events=new(Y()),this.onDisplayUri=(e,t)=>{this.events.emit("URI_AVAILABLE",t.params[0])}}async detectProvider(){if(this.provider)return this.provider;const e=new((await Promise.all([n.e(375),n.e(761),n.e(571)]).then(n.bind(n,4761))).default)({...this.options.providerOptions});return this.provider=e,e}async requestAccounts(){if(!this.provider)throw this.providerNotFoundError;try{return await this.provider.request({method:"eth_requestAccounts"})}catch(e){throw"User closed modal"===e.message&&await this.disconnect(),e}}addEventListeners(){if(!this.provider)return;const e=super.addEventListeners(),t=this.onDisplayUri.bind(this);return this.provider.connector.on("display_uri",t),()=>{this.provider&&(e?.(),"function"===typeof this.provider.off?this.provider.off("display_uri",t):"function"===typeof this.provider.removeListener&&this.provider.removeListener("display_uri",t))}}async autoConnect(){return await this.lazyInitialize(),this.provider?.connected?await super.autoConnect():(console.debug("No existing connection"),!1)}async disconnect(e=!0){super.disconnect(),e&&(this.removeEventListeners?.(),await(this.provider?.disconnect()),this.provider=void 0)}}({providerOptions:{rpc:f}})],ne=[(e=>({name:$,createApi:t=>{const{isPersist:n=!1,persistKey:r=$}=e||{};let i;i=n?(0,F.ZP)()((0,L.tJ)((()=>U),{name:r,version:0})):(0,F.ZP)()((()=>U));return{middlewares:{connect:e=>e=>async(...t)=>{const n=await e(...t);return i.setState({connectionStatus:Z.Connected}),n},autoConnect:e=>e=>async(...t)=>{const n=await e(...t);return i.setState({connectionStatus:Z.Connected}),n},autoConnectOnce:e=>e=>async(...t)=>{const n=await e(...t);return i.setState({connectionStatus:Z.Connected}),n},disconnect:e=>e=>async(...t)=>{const n=await e(...t);return i.setState({connectionStatus:Z.Disconnected}),n}},hooks:{useConnectionStatus:()=>i((e=>e.connectionStatus))}}}}))(),{name:q,createApi:({wallet:e})=>{const{useProvider:t,useAccounts:n,useAccount:r}=e;return{hooks:{useEnsNames:()=>M(t(),n()),useEnsName:()=>{const e=t(),n=r(),i=(0,O.useMemo)((()=>void 0===n?[]:[n]),[n]),{data:o,...s}=M(e,i);return{...s,data:o?.[0]}}}}}},{name:K,createApi:({wallet:e})=>{const{useProvider:t,useAccounts:n,useAccount:r}=e;return{hooks:{useBalances:e=>D(t(),n(),e),useBalance:e=>{const n=t(),i=r(),o=(0,O.useMemo)((()=>void 0===i?[]:[i]),[i]),{data:s,...c}=D(n,o,e);return{...c,data:s?.[0]}}}}}}],re=new class{constructor(e,t){if(this.wallets=[],!e.length)throw new Error("connectors can't be empty");e.forEach((e=>{if(this.hasWallet(e.name))throw new Error(`Duplicated Wallet '${e.name}'`);const n=((e,t)=>{const n=(e=>({name:e.name,$getProvider:()=>e.provider,$getStore:()=>e.store,connect:(...t)=>e.connect(...t),autoConnect:(...t)=>e.autoConnect(...t),autoConnectOnce:(...t)=>e.autoConnectOnce(...t),disconnect:(...t)=>e.disconnect(...t),watchAsset:(...t)=>e.watchAsset(...t)}))(e),r=(0,F.ZP)(n.$getStore()),i=new Map;let o={...n,$getStore:()=>r,getPlugin:e=>{if(!i.has(e))throw new Error(`Plugin ${e} don't exists!`);return i.get(e)}};return o=H.reduce(((e,t)=>({...e,...t.createApi({wallet:e}).hooks})),o),t&&t.length?X(t,o,i):o})(e,t?.plugins);this.wallets.push(n)})),this.currentWallet=V(this.wallets,t?.currentWalletOptions)}getCurrentWallet(){return this.currentWallet}hasWallet(e){return this.wallets.some((t=>t.name===e))}getWallet(e){if(!this.hasWallet(e))throw new Error(`Wallet ${e} don't exists`);return this.wallets.find((t=>t.name===e))}getWallets(){return this.wallets.slice(0)}}(te,{plugins:ne}),ie=re.getWallets(),oe=re.getCurrentWallet(),se=(0,u.Z)(ie,5),ce=(se[0],se[1],se[2],se[3],se[4],n(7264)),ae=n(2569),ue=n(9240),de=function(e){var t=e.account,n=e.leadingChars,i=void 0===n?4:n,s=e.tailingChars,c=void 0===s?4:s,a=(0,ue.Z)(e,["account","leadingChars","tailingChars"]);return t?(0,r.jsxs)(o.xv,(0,ae.Z)((0,ce.Z)({as:"span"},a),{children:[t.slice(0,i),"...",t.slice(-c)]})):null},le=function(e){var t=e.accounts,n=e.ensNames,i=e.balances;return void 0===t?null:0===t.length?(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{children:"Account:"}),(0,r.jsx)(o.xv,{children:"None"})]}):(0,r.jsx)(r.Fragment,{children:t.map((function(e,t){var s,c,a;return(null===(s=n.data)||void 0===s?void 0:s[t])?null===(c=n.data)||void 0===c?void 0:c[t]:(0,r.jsxs)(O.Fragment,{children:[(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{as:"span",children:"Account:"}),(0,r.jsx)(de,{account:e,fontWeight:"bold"})]}),(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{children:"Balance:"}),(0,r.jsx)(o.xv,{fontWeight:"bold",children:(null===(a=i.data)||void 0===a?void 0:a[t])?"".concat(i.data[t]):"--"})]})]},e)}))})},he=function(e){var t,n=e.chainId;if(void 0===n)return null;var i=n?null===(t=v[n])||void 0===t?void 0:t.name:void 0;return i?(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{children:"Chain:"}),(0,r.jsxs)(o.xv,{fontWeight:"bold",children:[i," (",n,")"]})]}):(0,r.jsxs)(o.kC,{gap:2,children:[(0,r.jsx)(o.xv,{children:"Chain Id:"}),(0,r.jsx)(o.xv,{fontWeight:"bold",children:n})]})},pe=n(1249),ve=n(5354),fe=n.n(ve),me=n(3850),we=n(6053),ge=function(e){var t,n=e.chainId,i=e.switchChain,o=e.chainIds;return(0,r.jsx)(we.Ph,{value:n,onChange:function(e){null===i||void 0===i||i(Number(e.target.value))},disabled:void 0===i,children:o.map((function(e){var n;return(0,r.jsx)("option",{value:e,children:null!==(t=null===(n=v[e])||void 0===n?void 0:n.name)&&void 0!==t?t:e},e)}))})},xe=function(e){var t=e.connect,n=e.disconnect,i=e.chainId,c=e.isConnecting,a=e.isConnected,u=Object.keys(f).map((function(e){return Number(e)})),d=(0,O.useState)(i||1),l=d[0],h=d[1],v=(0,me.pm)(),m=(0,O.useCallback)((function(e){h(e),t(p(e))}),[t]);return a?(0,r.jsxs)(o.kC,{flexDirection:"column",gap:4,children:[(0,r.jsx)(ge,{chainId:i,switchChain:m,chainIds:u}),(0,r.jsx)(s.zx,{colorScheme:"red",onClick:(0,pe.Z)(fe().mark((function e(){return fe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.warn("connect error: ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),children:"Disconnect"})]}):(0,r.jsxs)(o.kC,{flexDirection:"column",gap:4,children:[(0,r.jsx)(ge,{chainId:i||1,switchChain:c?void 0:m,chainIds:u}),(0,r.jsx)(s.zx,{colorScheme:"blue",disabled:c,onClick:(0,pe.Z)(fe().mark((function e(){return fe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(p(l));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),v({position:"top-right",status:"error",description:e.t0.message});case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),children:"Connect"})]})},Ce=function(e){var t=e.children,n=e.ssrPlaceholder;return function(){var e=(0,O.useState)(!1),t=e[0],n=e[1];return(0,O.useEffect)((function(){n(!0)}),[]),t}()?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:n})},ye=n(8494),be=function(e){var t=(0,ye.Z)({},e);return(0,r.jsx)(o.kC,(0,ce.Z)({flexDirection:"column",gap:4,p:3,borderColor:"gray.200",borderWidth:"1px",borderRadius:"8px"},t))},je=function(e){var t=e.wallets,n=e.currentWalletName,i=e.switchCurrentWallet;return(0,r.jsx)(we.Ph,{value:n,onChange:function(e){i(e.target.value)},children:t.map((function(e){return(0,r.jsx)("option",{value:e.name,children:e.name},e.name)}))})},Ie=function(e){var t=e.isConnecting,n=e.isConnected;return(0,r.jsx)(o.xu,{children:t?(0,r.jsx)(r.Fragment,{children:"\ud83d\udfe1 Connecting"}):n?(0,r.jsx)(r.Fragment,{children:"\ud83d\udfe2 Connected"}):(0,r.jsx)(r.Fragment,{children:"\u26aa\ufe0f Disconnected"})})},ke=oe.useName,Pe=oe.switchCurrentWallet,Ee=oe.usePlugin,Se=oe.connect,Ae=oe.autoConnectOnce,We=oe.disconnect,Ne=oe.useIsConnecting,Oe=oe.useIsConnected,_e=oe.useAccounts,De=oe.useChainId,Ke=function(){var e=ke(),t=Ne(),n=Oe(),i=De(),s=_e(),c=Ee(q).hooks.useEnsNames,a=(0,Ee(K).hooks.useBalances)(),u=c();return(0,O.useEffect)((function(){Ae()}),[e]),(0,r.jsx)(Ce,{children:(0,r.jsxs)(be,{minW:"280px",maxW:"420px",width:"100%",children:[(0,r.jsx)(je,{wallets:ie,currentWalletName:e,switchCurrentWallet:Pe}),(0,r.jsxs)(be,{children:[(0,r.jsx)(o.xv,{fontWeight:"bold",children:e}),(0,r.jsx)(Ie,{isConnecting:t,isConnected:n}),(0,r.jsx)(he,{chainId:i}),(0,r.jsx)(le,{accounts:s,balances:a,ensNames:u}),(0,r.jsx)(xe,{connect:Se,disconnect:We,chainId:i,isConnecting:t,isConnected:n})]})]})})},Fe=n(370),Le=n.n(Fe),$e=n(3675);function Ze(){return(0,r.jsxs)(a.A,{children:[(0,r.jsx)(Le(),{children:(0,r.jsx)("title",{children:"Home | Web3 Wallet "})}),(0,r.jsx)(o.LZ,{my:12}),(0,r.jsxs)(o.kC,{flexDirection:"column",gap:12,children:[(0,r.jsxs)(o.X6,{as:"h1",textAlign:"center",m:"0 auto",width:{base:"100",lg:"80%"},children:["A"," ",(0,r.jsx)(o.xv,{as:"span",color:"yellow.500",children:"Modular"}),","," ",(0,r.jsx)(o.xv,{as:"span",color:"green.500",children:"Extensible"})," ","and"," ",(0,r.jsx)(o.xv,{as:"span",color:"red.500",children:"Flexible"})," ","web3 wallet framework for building dApps"]}),(0,r.jsx)(o.kC,{justifyContent:"center",children:(0,r.jsx)(Ke,{})}),(0,r.jsxs)(o.kC,{gap:{base:4,lg:6},justifyContent:"center",children:[(0,r.jsx)(s.zx,{rightIcon:(0,r.jsx)(i.mr,{}),colorScheme:"blue",children:"Get Started"}),(0,r.jsx)(o.rU,{display:"flex",justifySelf:"end",_hover:{textDecoration:"none"},href:"https://github.com/web3-wallet/web3-wallet",target:"_blank",children:(0,r.jsx)(s.zx,{leftIcon:(0,r.jsx)(c.JO,{as:$e.idJ}),variant:"outline",children:"Github"})})]})]})]})}},4712:function(){}},function(e){e.O(0,[613,268,883,774,888,179],(function(){return t=2761,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
ytfakebuffer.js text/javascript
(() => {
    const e = {
        apply: (e, n, arguments) => {
            let t = Reflect.apply(e, n, arguments);
            return 3 === arguments.length && t?.body && "string" == typeof t.body && !t.body.includes(`"isInlinePlaybackNoAd":true`) && (t.body = t.body.replace(`"contentPlaybackContext":{`, `"contentPlaybackContext":{"isInlinePlaybackNoAd":true,`)), t
        }
    };
    window.Object.assign = new Proxy(window.Object.assign, e)
})();

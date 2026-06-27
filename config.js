/**
 * KONFIGURASI CLIENT AFFILIATE
 * File ini TIDAK AKAN DIACAK, sehingga Client Anda bisa mengedit ini di Github.
 */
const CONFIG = {
    // URL API Pusat (Server Utama Anda)
    API_BASE_URL: 'https://api.getfiles.my.id',

    // URL Direct Link Pop-under Milik Client (Monetag, dsb)
    // CLIENT_POPUNDER_URL: 'https://www.google.com/search?q=iklan-popunder-client',

    // Script Iklan (Vignette / OnClick Monetag dll)
    MONETAG_SCRIPT: `<script>(function(s){s.dataset.zone='11208851',s.src='https://llvpn.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`
};

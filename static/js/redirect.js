(function() {
    const supportedLocales = new Set(['ru', 'ja']); // English is default.
    const browserLang = navigator.language.slice(0, 2);
    const currentPath = window.location.pathname;
    const previousLang = sessionStorage.getItem('previousLang');
    const isLocalePath = supportedLocales.has(currentPath.slice(1, 3));

    if (!isLocalePath || previousLang !== browserLang) {
        const redirectPath = supportedLocales.has(browserLang) ? `/${browserLang}` : '/';
        sessionStorage.setItem('previousLang', browserLang);

        if (!currentPath.startsWith(redirectPath)) {
            const cleanPath = isLocalePath ? currentPath.slice(3) : currentPath;
            window.location.href = redirectPath + cleanPath + window.location.search + window.location.hash;
        }
    }
})();

(function() {
    const SUPPORTED_LOCALES = ["ja", "ru"];
    const PREVIOUS_LANG_KEY = "previousLang";
    const FIRST_REDIRECT_KEY = "isFirstRedirect";

    const currentPath = window.location.pathname;
    const previousLang = sessionStorage.getItem(PREVIOUS_LANG_KEY);
    const currentLang = navigator.language.slice(0, 2);
    const isLangSupported = SUPPORTED_LOCALES.includes(currentLang);
    const isFirstRedirect = sessionStorage.getItem(FIRST_REDIRECT_KEY) !== "true";

    // console.log("Current path:", currentPath);
    // console.log("Current browser language:", currentLang);
    // console.log("Is current language supported:", isLangSupported);
    // console.log("Is first redirect:", isFirstRedirect);

    if (!isLangSupported || !isFirstRedirect) {
        console.log("No redirection needed.");
        return;
    }

    if (previousLang !== currentLang) {
        sessionStorage.setItem(PREVIOUS_LANG_KEY, currentLang);
    }

    sessionStorage.setItem(FIRST_REDIRECT_KEY, "true");

    const currentPathLocale = currentPath.split('/')[1];
    if (!SUPPORTED_LOCALES.includes(currentPathLocale)) {
        const newUrlPath = `/${currentLang}${currentPath}`;
        console.log("Redirecting to:", newUrlPath);
        window.location.replace(newUrlPath);
    }
})();
import $_ from "./modules/ribbon";
import * as utils from "./modules/utils";

const Ruban = {
    $_,
    ...utils,
};

export default Ruban;

if (typeof window !== "undefined") {
    window.Ruban = window.Ruban || Ruban;
    window.$_ = $_;
    window.$ = $_;
}

(function (global) {
    // Default configuration
    const defaultConfig = {
        debug: false,
        // theme: "light",
        // apiEndpoint: "https://api.example.com"
    };

    // Ensure global config object exists
    global.RubanConfig = global.RubanConfig || {};

    // Check if `ruban.config.js` was loaded
    const isConfigFileLoaded = Object.keys(global.RubanConfig).length > 0;

    // Merge config with priority
    const mergeConfigs = (defaultConfig, userConfig) => {
        const result = { ...defaultConfig };
        Object.keys(userConfig).forEach((key) => {
            if (userConfig[key] !== undefined) {
                result[key] = userConfig[key];
            }
        });
        return result;
    };
    const finalConfig = mergeConfigs(defaultConfig, global.RubanConfig);

    // Check if config is valid
    const hasValidConfig = Object.values(global.RubanConfig).some(val => val !== undefined);
    if (!isConfigFileLoaded && !hasValidConfig) {
        console.warn("[Ruban Warning]: No valid configuration found. Using default settings.");
    }

    // Extend global Ruban object
    global.Ruban = {
        ...global.Ruban,
        getConfig: () => finalConfig,
        setConfig: (newConfig) => {
            Object.assign(finalConfig, newConfig);
            global.manualRubanConfigSet = true;
        },
        log: (message) => {
            if (finalConfig.debug) {
                console.log(`[Ruban Debug]: ${message}`);
            }
        }
    };

    if (!global.Ruban.__DOMContentLoaded) {
        global.Ruban.__DOMContentLoaded = true;

        document.addEventListener("DOMContentLoaded", function () {
            const forms = document.querySelectorAll('form[data-ruban-form-secure]');
            forms.forEach((form) => {
                if (typeof global.Ruban.secureForm === "function") {
                    form.setAttribute("data-ruban-form-secure", "true");
                    global.Ruban.secureForm(form);
                } else {
                    form.removeAttribute("data-ruban-form-secure");
                    console.warn("[Ruban Warning]: secureForm function not found. Make sure it is properly imported.");
                }

                console.log(form);

                form.querySelectorAll('[type="submit"]').forEach((submitBtn) => {
                    console.log(submitBtn);
                    submitBtn.addEventListener("click", function (event) {
                        //event.preventDefault(); // good one
                        // TODO - Add submitForm function ?
                        /* if (typeof global.Ruban.submitForm === "function") {
                            global.Ruban.submitForm(form);
                        } else {
                            console.warn("[Ruban Warning]: submitForm function not found. Make sure it is properly imported.");
                        } */
                    });
                });

                form.addEventListener("submit", function (event) {
                    //event.preventDefault();
                    // TODO - Add submitForm function ?
                    /* if (typeof global.Ruban.submitForm === "function") {
                        global.Ruban.submitForm(form);
                    } else {
                        console.warn("[Ruban Warning]: submitForm function not found. Make sure it is properly imported.");
                    } */
                });
            });

            // Only dispatch event if forms exist
            if (forms.length > 0) {
                document.dispatchEvent(new Event("Ruban_DOMContentLoaded"));
            }
        });
    }

    
    console.log("Ruban is ready!");

})(window);

import $ from "./modules/ribbon";
import * as utils from "./modules/utils";

const Ruban = {
    $,
    ...utils,
};

export default Ruban;

if (typeof window !== "undefined") {
    window.Ruban = window.Ruban || Ruban;
    //window.$ = $; // Conflicts too often
}

(function (global) {
    // Default configuration
    const defaultConfig = {
        debug: false,
        forms: {
            secure: false
        }
    };

    // Ensure global config object exists
    global.RubanConfig = global.RubanConfig || {};

    // Check if RubanConfig manual object was correctly loaded
    const isManualConfigLoaded = Object.keys(global.RubanConfig).length > 0;

    // Check if `ruban.config.js` was loaded
    // TODO:

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
    global.RubanConfig = finalConfig;

    // Check if config is valid
    const hasValidConfig = Object.values(global.RubanConfig).some(val => val !== undefined);
    if (!isManualConfigLoaded && !hasValidConfig) {
        console.warn("[Ruban Warning]: No valid configuration found. Using default settings.");
    }
    //console.log("Ruban before extension:", global.Ruban);


    if (finalConfig.debug) {
        // Extend global Ruban object
        Object.assign(global.Ruban, {
            getConfig: () => finalConfig,
            setConfig: (newConfig) => {
                Object.assign(finalConfig, newConfig);
                //global.manualRubanConfigSet = true;
            },
            log: (message) => console.log(`[Ruban Debug]: ${message}`)
        });
    }
    
    //console.log("Ruban after extension:", global.Ruban);

    if (!global.Ruban.__DOMContentLoaded) {
       global.Ruban.__DOMContentLoaded = true;

        document.addEventListener("DOMContentLoaded", function () {

            const forms = document.querySelectorAll('form[data-ruban-form-secure]');

            if (forms.length) {

                if (finalConfig.forms.secure) {
                    /* forms.forEach((form) => {
                        //console.log(form);

                        if (typeof global.Ruban.secureForm === "function") {
                            form.setAttribute("data-ruban-form-secure", "true");
                            try {
                                global.Ruban.secureForm(form);
                            } catch (error) {
                                form.removeAttribute("data-ruban-form-secure");
                                finalConfig.debug ? console.warn("[Ruban Warning]: Could not secure form:", form) : null;
                            }
                        } else {
                            form.removeAttribute("data-ruban-form-secure");
                            console.warn("[Ruban Warning]: secureForm function not found. Make sure it is properly imported.");
                        }

                        //form.querySelectorAll('[type="submit"]').forEach((submitBtn) => {
                            //console.log(submitBtn);
                            //submitBtn.addEventListener("click", function (event) {
                            //    event.preventDefault();
                                // TODO - Add submitForm function ?
                                //if (typeof global.Ruban.submitForm === "function") {
                                //    global.Ruban.submitForm(form);
                                //} else {
                                //    console.warn("[Ruban Warning]: submitForm function not found. Make sure it is properly imported.");
                                //}
                            //});
                        //});

                        form.addEventListener("submit", function (event) {
                            console.log('form submit prevented');
                            event.preventDefault();
                            // TODO - Add submitForm function ?
                            if (typeof global.Ruban.submitForm === "function") {
                                global.Ruban.submitForm(form);
                            } else {
                                console.warn("[Ruban Warning]: submitForm function not found. Make sure it is properly imported.");
                            }
                        });
                    }); */
                }
                else {
                    if (forms.length && finalConfig.debug) {
                        console.warn("[Ruban Warning]: Forms were found to secure but the global variable to secure forms is set to false.");
                    }
                }
                    
                // Only dispatch event if forms exist
                //document.dispatchEvent(new Event("Ruban-Forms-Secured"));

            } else {
                if (finalConfig.debug) {
                    if (finalConfig.forms.secure) {
                        console.warn("[Ruban Warning]: No forms were found to secure.");
                    }
                }
            }
        });
    }

    
    console.log("Ruban is ready!");

})(window);

// Protect Ruban from being overwritten
Object.defineProperty(window, 'Ruban', {
    value: window.Ruban,
    writable: false,
    configurable: false
});
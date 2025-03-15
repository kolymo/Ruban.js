import $_ from "./modules/ribbon";
import * as utils from "./modules/utils";

const Ruban = {
    $_,
    ...utils,
};

export default Ruban;

if (typeof window !== "undefined") {
    window.Ruban = Ruban;
    window.$_ = $_;
    window.$ = $_;
}

(function() {
    console.log("Ruban is ready!");

    document.addEventListener('DOMContentLoaded', function() {
        const forms = document.querySelectorAll('form[data-ruban-form-secure="true"]');
        forms.forEach((form) => {
            //console.log('Securing form...', form);
            Ruban.secureForm(form);
        });
    });
})();
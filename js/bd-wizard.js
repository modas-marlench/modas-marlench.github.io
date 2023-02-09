function formValidate(num) {
    $('#contact').validate().destroy();
    if (reglas[num]) {
        $('#contact').validate(reglas[num]);
        return $('#contact').valid();
    } else {
        return false;
    }
}
// validate the comment form when it is submitted
let reglas = {
    '0': {      //Datos personales
        rules: {
            "cod": {
                required: true,
                minlength: 7,
                maxlength: 7
            },
            "nombres": {
                required: true                    
            },
            "paterno": {
                required: true                    
            },
            "materno": {
                required: true                    
            },
            "celular": {
                required: true,
                number: true,
                minlength: 9,
                maxlength: 9
            },                
            "correo": {
                required: true,
                email: true
            },                
            "opt-genero": {
                required: true
            },
            "rol-select": {
                required: true
            },
        },
        messages: {
            "cod": {
                required: "Debe escribir su número de registro",
                minlength: "El número de registro es un campo de 7 dígitos",
                maxlength: "El número de registro es un campo de 7 dígitos"
            },
            "nombres": {
                required: "Debe ingrsar sus nombres"
            },
            "paterno": {
                required: "Debe ingrsar su apellido paterno"
            },
            "nombres": {
                required: "Debe ingrsar su apellido materno"
            },
            "celular": {
                number: "Debe ingresar un número de celular válido",
                required: "Debe ingresar su número de celular",
                minlength: "El celular tiene que poseer 9 dígitos",
                maxlength: "El celular tiene que poseer 9 dígitos"
            },                
            "correo": {
                required: "Debe ingrsar su correo institucional",
                email: "Por favor inserte correo válido"
            },                
            "opt-genero": {
                required: "Debe seleccionar una de las opciones"
            },
            "rol-select": {
                required: "Debe seleccionar una de los siguientes roles"
            }
        },
        errorElement: "err",
        errorPlacement: function(error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else if (element.prop("tagName") === "SELECT") {
                error.insertAfter(element.next("span"));
            } else if (element.prop("type") === "radio") {
                error.insertAfter(element.parents("div").filter(".form-group"));
                //console.log(element.prop( "type" ));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    },
    '1': {      //Oficina
        rules: {
            "solicitud-select": {
                required: true
            },
            "oficina-select": {
                required: true
            },
            "region": {
                required: true
            },
            "zona": {
                required: true
            }
        },
        messages: {
            "solicitud-select": {
                required: "Debe seleccionar un tipo de solicitud"
            },
            "oficina-select": {
                required: "Debe seleccionar una oficina"
            },
            "region": {
                required: "Debe indicar la región de su oficina"
            },
            "zona": {
                required: "Debe indica la zona de su oficina"
            },                
        },
        errorElement: "err",
        errorPlacement: function(error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "radio") {
                error.insertAfter(element.parents("div").filter(".form-group"));
                //console.log(element.prop( "type" ));
            } else if (element.prop("tagName") === "SELECT") {
                error.insertAfter(element.next("span"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    },
    '2': {
        rules: {
            "kit": {
                required: true
            },
            "opt-saco": {
                required: {
                    depends: function(element){
                        return $("div.pantalon").is(":visible") == true;
                    }
                }
            },
            "opt-camisa": {
                required: {
                    depends: function(element){
                        return $("div.camisa").is(":visible") == true;
                    }
                }
            },
            "opt-chaleco": {
                required: {
                    depends: function(element){
                        return $("div.chaleco").is(":visible") == true;
                    }
                }
            },
            "opt-casaca": {
                required: {
                    depends: function(element){
                        return $("div.casaca").is(":visible") == true;
                    }
                }
            },
            "opt-blusa": {
                required: {
                    depends: function(element){
                        return $("div.blusa").is(":visible") == true;
                    }
                }
            },
            "opt-preferencia": {
                required: {
                    depends: function(element){
                        return $("div.eleccion").is(":visible") == true;
                    }
                }
            },
            "opt-pantalon": {
                required: {
                    depends: function(element){
                        return $("div.pantalon").is(":visible") == true;
                    }
                }
            },
            "opt-falda": {
                required: {
                    depends: function(element){
                        return $("div.falda").is(":visible") == true;
                    }
                }
            },
            "opt-imper": {
                required: {
                    depends: function(element){
                        return $("div.impermeable").is(":visible") == true;
                    }
                }
            }
        },
        messages: {
            "kit": {
                required: "Debe ingresar el tipo de KIT"
            },
            "opt-saco": {
                required: "Seleccione una talla para el saco"
            },
            "opt-camisa": {
                required: "Seleccione una talla para la camisa"
            },
            "opt-chaleco": {                    
                required: "Inserte un número de meses "
            },
            "opt-casaca": {                    
                required: "Inserte un número de meses "
            },
            "opt-blusa": {                    
                required: "Inserte un número de meses "
            },
            "opt-preferencia": {                    
                required: "Inserte un número de meses "
            },
            "opt-pantalon": {                    
                required: "Inserte un número de meses "
            },
            "opt-falda": {                    
                required: "Inserte un número de meses "
            },
            "opt-imper": {
                required: "Inserte un número de meses "
            }
        },
        errorElement: "err",
        errorPlacement: function(error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "radio") {
                error.insertAfter(element.parents("div").filter(".form-group"));
                //console.log(element.prop( "type" ));
            } else if (element.prop("tagName") === "SELECT") {
                error.insertAfter(element.next("span"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    },
    '3': {
        rules: {
            "chk-tyc": {
                required: true
            } 
        },
        messages: {
            "chk-tyc": {
                required: "Debe aceptar los términios y condiciones"
            }
        },
        errorElement: "err",
        errorPlacement: function(error, element) {
            // Add the `invalid-feedback` class to the error element
            error.addClass("invalid-feedback");

            if (element.prop("type") === "radio") {
                error.insertAfter(element.parents("div").filter(".form-group"));
                //console.log(element.prop( "type" ));
            } else if (element.prop("tagName") === "SELECT") {
                error.insertAfter(element.next("span"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        }
    }
};

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "fade",
    titleTemplate: '#title#',

    enableFinishButton: true,
    transitionEffectSpeed: 500,
    saveState: true,
    onStepChanging: function(event, currentIndex, newIndex) {
        return formValidate(currentIndex);
        //return true
    },
    onFinishing: function(event, currentIndex) {
        return formValidate(currentIndex);
        //return true
    },
    onFinished: function(event, currentIndex) {
        $("#contact").submit();
    },
    /* Labels */
    labels: {
        cancel: "Cancelar",
        current: "Paso actual:",
        pagination: "Paginación",
        finish: "Finalizar",
        next: "Siguiente",
        previous: "Anterior",
        loading: "Cargando ..."
    }
});  
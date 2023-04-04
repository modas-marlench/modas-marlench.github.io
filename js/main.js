$(document).ready(function() {
    $("div.falda").hide();
    $("div.pantalon").hide();
    $("div.eleccion").hide();
    $("div.chaleco").hide();
    $("div.blusa").hide();

    // Cuando se desgloza SOLICITUD
    $('select#solicitud-select').on('change', function(e) {
        e.preventDefault();
        ActualizarCampos();
    });
    
    // Cuando se desgloza OFICINA
    $('select#oficina-select').on('change', function(e) {
        e.preventDefault();
        //var optionSelected = $("option:selected", this);
        var region = $(this).children(":selected").attr("region");
        var zona = $(this).children(":selected").attr("zona");
        $('input#region').val(region);
        $('input#zona').val(zona);
        if (zona == "ZONAS CÁLIDAS Y TROPICALES") {
            $("div.impermeable").show(); //Muestra Impermeable

        } else {
            $("div.impermeable").hide();
            $('input[name=opt-imper]').prop('checked', false);
        }
        ActualizarCampos();
    });

    // Cuando se desgloza ROL
    $('select#rol-select').on('change', function(e) {
        e.preventDefault();
        $("#solicitud-select").select2("val", "");
        $("#solicitud-select").empty();
        //var optionSelected = $("option:selected", this);
        var kit = $(this).children(":selected").attr("kit");
        $("#kit").val(kit);
        $("select#solicitud-select").append("<option></option>");
        //Si el KIT ES 1 le corresponde SACO y si es 2 CASACA
        if ($('input:radio[name=opt-genero]:checked').val() == "FEMENINO") {
            $("select#solicitud-select").append("<option>ADELANTO DE UNIFORMES 2023</option>");
            $("select#solicitud-select").append("<option>GESTANTES</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS ONBOARDING</option>");
        } else {
            $("select#solicitud-select").append("<option>ADELANTO DE UNIFORMES 2023</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS ONBOARDING</option>");
        }
        ActualizarCampos();
    });

    $("input[name=opt-genero]").click(function() {
        $("#solicitud-select").select2("val", "");
        $("#solicitud-select").empty();
        $("select#solicitud-select").append("<option></option>");
        if ($('input:radio[name=opt-genero]:checked').val() == "FEMENINO") {
            $("select#solicitud-select").append("<option>ADELANDO DE UNIFORMES 2023</option>");
            $("select#solicitud-select").append("<option>GESTANTES</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS ONBOARDING</option>");
        } else {
            $("select#solicitud-select").append("<option>ADELANDO DE UNIFORMES 2023</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS ONBOARDING</option>");
        }
        ActualizarCampos();
    });

    $("input[name=opt-preferencia]").click(function() {
        $("div.pantalon").hide();
        $('input[name=opt-pantalon]').prop('checked', false); 
        $("div.falda").hide();
        $('input[name=opt-falda]').prop('checked', false); 
        if ($('input:radio[name=opt-preferencia]:checked').val() == "2 PANTALONES") {
            $("div.pantalon").show();
        } else if ($('input:radio[name=opt-preferencia]:checked').val() == "2 FALDAS") {
            $("div.falda").show();
        } else {            
            $("div.pantalon").show();
            $("div.falda").show();
        }
    });    
    $("#single").val("Single2").trigger('change');    
});

$(function() {
    $('select').each(function() {
        $(this).select2({
            theme: 'bootstrap4',
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
            allowClear: Boolean($(this).data('allow-clear')),
            closeOnSelect: !$(this).attr('multiple'),
        });
    });

    $('#rango').on("input", function() {
        $('.output').text(this.value + " cms");
    }).trigger("change");
})

function ActualizarCampos(){
    //Ocultamos todos los campos
    $("div.saco").hide();
    $('input[name=opt-saco]').prop('checked', false); 
    $("div.camisa").hide();
    $('input[name=opt-camisa]').prop('checked', false); 
    $("div.chaleco").hide();
    $('input[name=opt-chaleco]').prop('checked', false); 
    $("div.casaca").hide();
    $('input[name=opt-casaca]').prop('checked', false); 
    $("div.blusa").hide();
    $('input[name=opt-blusa]').prop('checked', false); 
    $("div.eleccion").hide();
    $('input[name=opt-preferencia]').prop('checked', false); 
    $("div.pantalon").hide();
    $('input[name=opt-pantalon]').prop('checked', false); 
    $("div.falda").hide();
    $('input[name=opt-falda]').prop('checked', false); 
    $("div.imper").hide();
    $('input[name=opt-imper]').prop('checked', false); 
    var url;
    var kit = $('select#rol-select').children(":selected").attr("kit");
    var gen = $('input:radio[name=opt-genero]:checked').val();
    var soli = $('#solicitud-select').val();
    var zona = $('select#oficina-select').children(":selected").attr("zona");    
    console.log(url);
    console.log(kit);
    console.log(gen);
    console.log(soli);
    console.log(zona);
    if (kit == "KIT 1" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "MASCULINO") {
        // Mostrar solo SACO, PANTALON, CAMISA E IMPERMEABLE
        $("div.saco").show();           // 1 saco
        $("div.pantalon").show();       // 2 pantalones
        $("div.camisa").show();         // 6 camisas
        $("div.imper").show();          // 1 impermeable
        url = "https://drive.google.com/file/d/1BaLFu1sewbpKZ_eh8kPocwtTyLNVJR-6/view?usp=sharing";
    } else if (kit == "KIT 1" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "FEMENINO") {
        // Mostrar solo SACO, BLUSA, PREFERENCIA E IMPERMEABLE
        $("div.saco").show();           // 1 saco
        $("div.blusa").show();          // 6 blusas
        $("div.eleccion").show();    // elección
        $("div.imper").show();          // 1 impermeable
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1eabRuFDmQLjztRLqsP7i2nHueRSNGn6Z/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1L3cCBx-reHRTuBNerGIoeDRObe8AjZh_/view?usp=sharing"
        }
    } else if (kit == "KIT 2" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "MASCULINO") {
        // Mostrar solo CHALECO, CASACA, PANTALON, CAMISA E IMPERMEABLE
        $("div.chaleco").show();      // 1 chaleco
        $("div.casaca").show();       // 1 casaca
        $("div.pantalon").show();     // 2 pantalones
        $("div.camisa").show();       // 6 camisas
        $("div.imper").show();        // 1 impermeable
        url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
    } else if (kit == "KIT 2" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "FEMENINO") {
        // Mostrar solo CHALECO, CASACA, ELECCION, BLUSA E IMPERMEABLE
        $("div.chaleco").show();      // 1 chaleco
        $("div.casaca").show();       // 1 casaca
        $("div.eleccion").show();  // Elección
        $("div.blusa").show();        // 6 blusas
        $("div.imper").show();        // 1 impermeable
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
        }
    } else if (kit == "KIT 1" && zona == "ZONAS FRÍAS" && gen == "MASCULINO") {
        // Mostrar solo CASACA, SACO, PANTALON Y CAMISA        
        $("div.casaca").show();         // 1 casaca
        $("div.saco").show();           // 1 saco
        $("div.pantalon").show();       // 2 Pantalon
        $("div.camisas").show();        // 6 camisas
        url = "https://drive.google.com/file/d/1QuhziiV-9H-Lr4ryGcaQI7UBV1ppq1I1/view?usp=sharing"
    } else if (kit == "KIT 1" && zona == "ZONAS FRÍAS" && gen == "FEMENINO") {
        // Mostrar solo CASACA, SACO, ELECCION Y BLUSA        
        $("div.casaca").show();         // 1 casaca
        $("div.saco").show();           // 1 saco
        $("div.eleccion").show();    // Elección
        $("div.blusa").show();          // 6 blusas
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1MfiANIxWB3twMC5UyZrGsC8O2joULkZb/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1fuJ2eArjjw4pjW3elW5E4l1pqFfx3SfO/view?usp=sharing"
        }
    } else if (kit == "KIT 2" && zona == "ZONAS FRÍAS" && gen == "MASCULINO") {
        // Mostrar solo CHALECO, CASACA, PANTALON Y CAMISA
        $("div.chaleco").show();         // 1 chaleco
        $("div.casaca").show();          // 1 saco
        $("div.pantalon").show();        // 2 Pantalon
        $("div.camisa").show();          // 6 camisas
        url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
    } else if (kit == "KIT 2" && zona == "ZONAS FRÍAS" && gen == "FEMENINO") {
        // Mostrar solo CHALECO, CASACA, ELECCION Y BLUSA
        $("div.chaleco").show();        // 1 chaleco
        $("div.casaca").show();         // 1 saco
        $("div.eleccion").show();    // Elección
        $("div.blusa").show();          // 6 blusas
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
        }
    } else if (kit == "KIT 1" && zona == "ZONAS REGULARES" && gen == "MASCULINO") {
        // Mostrar solo SACO, PANTALON Y CAMISAS
        $("div.saco").show();         // 1 saco
        $("div.pantalon").show();       // Pantalón
        $("div.camisa").show();          // 6 camisas
        url = "https://drive.google.com/file/d/1BaLFu1sewbpKZ_eh8kPocwtTyLNVJR-6/view?usp=sharing"
    } else if (kit == "KIT 1" && zona == "ZONAS REGULARES" && gen == "FEMENINO") {
        // Mostrar solo SACO, ELECCION Y BLUSA
        $("div.saco").show();             // 1 saco
        $("div.eleccion").show();        // Elección
        $("div.blusa").show();              // 6 blusas
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1eabRuFDmQLjztRLqsP7i2nHueRSNGn6Z/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1L3cCBx-reHRTuBNerGIoeDRObe8AjZh_/view?usp=sharing"
        }
    } else if (kit == "KIT 2" && zona == "ZONAS REGULARES" && gen == "MASCULINO") {
        // Mostrar solo CHALECO, CASACA, PANTALON Y CAMISAS
        $("div.chaleco").show();        // 1 chaleco
        $("div.casaca").show();         // 1 casaca
        $("div.pantalon").show();       // 2 Pantalones
        $("div.camisa").show();         // 6 camisas
        url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
    } else if (kit == "KIT 2" && zona == "ZONAS REGULARES" && gen == "FEMENINO") {
        // Mostrar solo CHALECO, CASACA, ELECCIÓN Y BLUSAS
        $("div.chaleco").show();        // 1 chaleco
        $("div.casaca").show();         // 1 casaca
        $("div.eleccion").show();    // Elección
        $("div.blusa").show();          // 6 blusas
        if (soli == "GESTANTES") {
            url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
        } else {
            url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
        }
    }
    $(".enlace a").prop('href', url);    
}
$(document).ready(function() {
    $("div.falda").hide();
    $("div.pantalon").hide();
    $("div.eleccion").hide();
    $("div.blusa").hide();
    $("div.chaleco").hide();

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
    });

    // Cuando se modifica el KIT
    $('#kit').on('change', function(e) {
        var url;
        var kit = $(this).val();
        var gen = $('input:radio[name=opt-genero]:checked').val();
        var zona = $('#zona').val();
        var soli = $('#solicitud-select').val();
        if (kit == "KIT 1" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1BaLFu1sewbpKZ_eh8kPocwtTyLNVJR-6/view?usp=sharing"
        } else if (kit == "KIT 1" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1eabRuFDmQLjztRLqsP7i2nHueRSNGn6Z/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1L3cCBx-reHRTuBNerGIoeDRObe8AjZh_/view?usp=sharing"
            }
        } else if (kit == "KIT 2" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
        } else if (kit == "KIT 2" && zona == "ZONAS CÁLIDAS Y TROPICALES" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
            }
        } else if (kit == "KIT 1" && zona == "ZONAS FRÍAS" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1QuhziiV-9H-Lr4ryGcaQI7UBV1ppq1I1/view?usp=sharing"
        } else if (kit == "KIT 1" && zona == "ZONAS FRÍAS" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1MfiANIxWB3twMC5UyZrGsC8O2joULkZb/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1fuJ2eArjjw4pjW3elW5E4l1pqFfx3SfO/view?usp=sharing"
            }
        } else if (kit == "KIT 2" && zona == "ZONAS FRÍAS" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
        } else if (kit == "KIT 2" && zona == "ZONAS FRÍAS" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
            }
        } else if (kit == "KIT 1" && zona == "ZONAS REGULARES" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1BaLFu1sewbpKZ_eh8kPocwtTyLNVJR-6/view?usp=sharing"
        } else if (kit == "KIT 1" && zona == "ZONAS REGULARES" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1eabRuFDmQLjztRLqsP7i2nHueRSNGn6Z/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1L3cCBx-reHRTuBNerGIoeDRObe8AjZh_/view?usp=sharing"
            }
        } else if (kit == "KIT 2" && zona == "ZONAS REGULARES" && gen == "MASCULINO") {
            url = "https://drive.google.com/file/d/1g3_WV6Ei-mLAd89tsRU6JcckfnsmRRTv/view?usp=sharing"
        } else if (kit == "KIT 2" && zona == "ZONAS REGULARES" && gen == "FEMENINO") {
            if (soli == "GESTANTES") {
                url = "https://drive.google.com/file/d/1y-fb40Yq-h6r7pGQYE6pBtg8PRQsu5Ge/view?usp=sharing"
            } else {
                url = "https://drive.google.com/file/d/1NxeB26BjSQwG5h9lENV3tZzurDGHtjdC/view?usp=sharing"
            }
        }
        $(".enlace a").prop('href', url);
    });

    // Cuando se desgloza ROL
    $('select#rol-select').on('change', function(e) {
        e.preventDefault();
        $("#solicitud-select").select2("val", "");
        $("#solicitud-select").empty();
        //var optionSelected = $("option:selected", this);
        var kit = $(this).children(":selected").attr("kit");
        console.log(kit);
        $('#kit').val(kit).trigger("change");
        $("select#solicitud-select").append("<option></option>");
        if (kit == 'KIT 3') {
            $("select#solicitud-select").append("<option>ADELANDO DE UNIFORMES 2023</option>");
        } else {
            $("select#solicitud-select").append("<option>ADELANDO DE UNIFORMES 2023</option>");
            $("select#solicitud-select").append("<option>GESTANTES</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS</option>");
            $("select#solicitud-select").append("<option>NUEVOS INGRESOS ONBOARDING</option>");
        }
    });

    $("input[name=opt-genero]").click(function() {
        if ($('input:radio[name=opt-genero]:checked').val() == "FEMENINO") {
            $("div.eleccion").show();
            $("div.blusa").show();
        } else {
            $("div.eleccion").hide();
            $("div.blusa").hide();
        }
    });

    $("input[name=opt-preferencia]").click(function() {
        if ($('input:radio[name=opt-preferencia]:checked').val() == "2 PANTALONES") {
            $("div.pantalon").show();
            $("div.falda").hide();
        } else if ($('input:radio[name=opt-preferencia]:checked').val() == "2 FALDAS") {
            $("div.pantalon").hide();
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
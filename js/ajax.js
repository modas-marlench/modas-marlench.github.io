$(document).ready(function() {
    // AJAX para traer roles
    $.ajax({
        type: "GET",
        url: "https://sheets.googleapis.com/v4/spreadsheets/1S9hKTgNnJaLdUI0Q-QkWJS-bxEMPRvBqB3mGoMC0G5c/values/ROLES!A2:C?key=AIzaSyDksVE4q2AIAA4-IGrPgM007Wnd_K17bGk",
        dataType: 'json',
        success: function(data) {
            data.values.forEach(function(dato) {
                $("select#rol-select").append("<option id='" + dato[0] + "'kit='" + dato[2] + "'>" + dato[1] + "</option>");
            });
        }
    });

    // AJAX para traer oficinas
    $.ajax({
        type: "GET",
        url: "https://sheets.googleapis.com/v4/spreadsheets/1S9hKTgNnJaLdUI0Q-QkWJS-bxEMPRvBqB3mGoMC0G5c/values/OFICINAS2!B2:D?key=AIzaSyDksVE4q2AIAA4-IGrPgM007Wnd_K17bGk",
        dataType: 'json',
        success: function(data) {
            data.values.forEach(function(dato) {
                $("select#oficina-select").append("<option id='" + dato[0] + "' region='" + dato[1] + "' zona='" + dato[2] + "'>" + dato[0] + "</option>");
            });
        }
    });
})

function postToGoogle() {
    var correo = $("#correo").val();
    var codigo = $("#cod").val();
    var paterno = $("#paterno").val();
    var materno = $("#materno").val();
    var nombres = $("#nombres").val();
    var genero = $('input:radio[name=opt-genero]:checked').val();
    var talla = $("#rango").val();
    var celular = $("#celular").val();
    var solicitud = $("#solicitud-select").val();
    var region = $("#region").val();
    var oficina = $("#oficina-select").val();
    var zona = $("#zona").val();
    var kit = $("#kit").val();
    var talla_saco = $('input:radio[name=opt-saco]:checked').val();
    var talla_pant = $('input:radio[name=opt-pantalon]:checked').val();
    var talla_cami = $('input:radio[name=opt-camisa]:checked').val();
    var talla_chal = $('input:radio[name=opt-chaleco]:checked').val();
    var talla_casa = $('input:radio[name=opt-casaca]:checked').val();
    var talla_blusa = $('input:radio[name=opt-blusa]:checked').val();
    var talla_falda = $('input:radio[name=opt-falda]:checked').val();
    var pref = $('input:radio[name=opt-preferencia]:checked').val();
    var imper = $('input:radio[name=opt-imper]:checked').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfYaiS5GfncvELl8Oi9yVoWrtWHG1FMdMYmMGXB2857ji0Qkg/formResponse",
        //add your google form generated numbers below which are also the 'names' of your inputs     
        data: {
            "entry.109901176": correo, //correo
            "entry.1916604690": codigo, //registro
            "entry.921168865": paterno,
            "entry.1242803535": materno,
            "entry.103743907": nombres,
            "entry.1957377918": genero,
            "entry.632162617": talla,
            "entry.1347320361": celular,
            "entry.565548705": solicitud,
            "entry.1331844943": region,
            "entry.203356667": oficina,
            "entry.1339435191": zona,
            "entry.1748295607": kit,
            "entry.2081711474": talla_saco,
            "entry.411074928": talla_pant,
            "entry.2134141665": talla_cami,
            "entry.843737915": talla_chal,
            "entry.1822081741": talla_casa,
            "entry.1604420657": talla_blusa,
            "entry.1627043441": talla_falda,
            "entry.701720611": pref,
            "entry.1546549049": imper,
            "entry.1607744760": "ENVIADO"
        },
        type: "POST",
        dataType: "xml",
        success: function(d) {
            $('#contact').trigger('reset');
        },
        error: function(x, y, z) {
            $('#contact').trigger('reset');
        }
    });
    return false;
}
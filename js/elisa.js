$(document).ready(function () {

    $('#btnTranslate').bind('click', function()
    {
        var text = $('#dataVi').val();
        var from = "vi";
        var to = "ja";
        translate(text, from, to);
    });

    $(document).keypress(function(event) {
        var keycode = event.keyCode || event.which;
        if(keycode == '13') {
            var text = $('#dataVi').val();
            var from = "vi";
            var to = "ja";
            translate(text, from, to);
        }
    });
    // $.get("http://www.transltr.org/api/translate?text=xin%20ch%C3%A0o&to=ja&from=vi", function(data, status){
    //     alert("Data: " + data.translationText + "\nStatus: " + status);
    // });

    function translate(text, from, to)
    {
        $.get("http://www.transltr.org/api/translate?text=" + text + "&to=" + to + "&from=" + from, function(data, status){
            if(status == "success")
            {
                $('.translated').text(data.translationText);
            }
        });
    }

});


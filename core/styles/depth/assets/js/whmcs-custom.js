$(document).ready(function(){
    $('[data-href]').on('click', function(e){
        e.preventDefault();
        document.location.href=$(this).data('href');
    })
    $('[submit-form]').on('click', function(){
        $(this).closest('form').submit();
    });

    $("#subaccountActivate").click(function () {
        $("#subacct-container").collapse('toggle');
    });

    $("#inputAllowSso").on('change', function() {
        $.post("clientarea.php", $("#frmSingleSignOn").serialize());
    });

    $('[data-trigger-click]').on('click', function(e){
        e.preventDefault;
        
        var target = $(this).data('target');
        console.log(target);
        console.log($('body').find(target));
        $('body').find(target).trigger('click');
    });
});
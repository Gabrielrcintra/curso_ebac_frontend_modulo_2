$(document).ready(function(){
    $('#botao-cadastrar').click(function(event){
        event.preventDefault();

        const tarefa = $('#tarefa').val().trim();

        if (tarefa !== '') {
            const item = $('<li>').text(tarefa);
            item.click(function(){
                $(this).toggleClass('completada')
            })
            $('ul').append(item);
            $('#tarefa').val('');
        }
    })
})
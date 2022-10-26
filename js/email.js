

function envoi(){

    	var name=$("#name").val();
    	var email=$('#email').val();
    	var message=$('#message').val();
    	var error=$('#error').val();
    	
    	if(name!="" && email!="" && message!="")
    	{	alert(name);
    		alert(email);
    		alert(message);
		    $('#contactfrm').submit();
    	}
    	else{alert("Remplissez tout les champs");}
    }

    //update this with your $form selector
    var form= "contactfrm";

   
    function onSuccess() {
       alert("mail envoyé")
    }

    function onError(error) {
        alert("mail non envoyé")
    }

    var sendButton = $("#submit");

    function send() {
        sendButton.val('Envoi du mail');
        sendButton.prop('disabled',true);

        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='text']").val();
        data['subject'] = subject;
        data['text'] = message;

        $.post('#Z',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', send);

    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });

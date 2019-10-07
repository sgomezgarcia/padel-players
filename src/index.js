// Initial values
const playerList = [
    {
        firstName: 'Sara',
        lastName: 'Gomez',
        birthDate: '17/10/1996',
        phoneNumber: '691344556',
        bankAccount: 'ES9420805801101234567891',
        email: 'sgg@gmail.com',
        type: 'PRO',
        DNI: '43233567g'
    },
    {
        firstName: 'Fernando',
        lastName: 'Blesa',
        birthDate: '20/12/1997',
        phoneNumber: '691344556',
        bankAccount: 'ES9420805801101234567892',
        email: 'fb@gmail.com',
        type: 'BEG',
        DNI: '43233567h'
    },

    {
        firstName: 'Johnny',
        lastName: 'Dapp',
        birthDate: '01/02/1980',
        phoneNumber: '691344556',
        bankAccount: 'ES9420805801101234567893',
        email: 'jp@gmail.com',
        type: 'BEG',
        DNI: '43233567s'
    }
];

// Introduce in players in its container (Beginner or professional)
function populatePlayers(){
    let containerBegginers = document.getElementById('begginers');
    let containerProfessionals = document.getElementById('professionals');
    let begginers = '';
    let professionals = '';
    for(let i=0; i<playerList.length; i++){
        if (playerList[i].type == 'BEG'){
            begginers += 
            '<div class="user-info player-'+i+'">'+
                '<img src="https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg" class="image-player" />'+
                '<p>'+playerList[i].firstName+'</p>'+
                '<p>'+playerList[i].lastName+'</p>'+
                '<p>'+playerList[i].birthDate+'</p>'+
                '<p>'+playerList[i].phoneNumber+'</p>'+
                '<p>'+playerList[i].bankAccount+'</p>'+
                '<p>'+playerList[i].email+'</p>'+
                '<p>'+playerList[i].type+'</p>'+
                '<p>'+playerList[i].DNI+'</p>'+
                '<button type="button" class="bt-borrar" name="button"><i class="fa fa-trash"></i></button>'+

            '</div>';
        }

        if (playerList[i].type == 'PRO'){
            professionals += 
            '<div class="user-info player-'+i+'">'+
                '<img src="https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg" class="image-player" />'+
                '<p>'+playerList[i].firstName+'</p>'+
                '<p>'+playerList[i].lastName+'</p>'+
                '<p>'+playerList[i].birthDate+'</p>'+
                '<p>'+playerList[i].phoneNumber+'</p>'+
                '<p>'+playerList[i].bankAccount+'</p>'+
                '<p>'+playerList[i].email+'</p>'+
                '<p>'+playerList[i].type+'</p>'+
                '<p>'+playerList[i].DNI+'</p>'+
                '<button type="button" class="bt-borrar" name="button"><i class="fa fa-trash"></i></button>'+
                '</div>';
        }
        
    }
    containerBegginers.innerHTML = begginers;
    containerProfessionals.innerHTML = professionals;
}

// Validators
function validaTelefon(telefon){
    const regex=/^[0-9]{2,3}-? ?[0-9]{6,7}$/;
    return regex.test(telefon);
}

function validaEmail(email){
    const regex=/^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    return regex.test(email);
}

function validaData(date){
    const regex=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    return regex.test(date);
}

function validaDNI(dni){
    const regex = /^\d{8}[a-zA-Z]$/;

    if(regex.test(dni)){
        // Check dni number is valid
        var numero = dni.substr(0,dni.length-1);
        var letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);

        // Check letter is in uppercase
        if (letra!=letr.toUpperCase()) {
            return false
        }
    } else {
        return false;
    }

    return true;
}

function validaCompteCorrent(date){
    regex=/^[0-9]+$/i;
    return regex.test(date);
}


function checkForm(){
    let field_name = document.getElementById("name").value;
    let field_lastName = document.getElementById("surname").value;
    let field_bday = document.getElementById("birthday").value;
    let field_phone = document.getElementById("phone").value;
    let field_type = document.getElementById("type").value;
    let field_bankAccount = document.getElementById("bank_account").value;
    let field_email = document.getElementById("email").value;
    let field_dni = document.getElementById("dni").value;

 
    if( !validaTelefon(field_phone) || field_phone==""){
        alert("Teléfono erroneo");
        return false;
    }

    if( !validaData(field_bday, "dd-mm-aaaa") || field_bday==""){
        alert("Fecha erronea");
        return false;
    }

    if( !validaEmail(field_email) || field_email==""){
        alert("Email erroneo");
        return false;
    }

    if( !validaDNI(field_dni) || field_dni==""){
        alert("DNI erroneo");
        return false;
    }

    if( !validaCompteCorrent(field_bankAccount) || field_bankAccount==""){
        alert("Cuenta bancaria erroneo");
        return false;
    }
    

    if (field_dni.value!="" && field_name.value!="" && field_lastName.value!=""){
        //Añadir datos al array (nuevo jugador)
        playerList.push(
            {
                firstName: field_name,
                lastName: field_lastName,
                birthDate: field_bday,
                phoneNumber: field_phone,
                bankAccount: field_bankAccount,
                email: field_email,
                type: field_type,
                DNI: field_dni
            }
        )
        let containerPlayers = document.getElementById("player-container");
        populatePlayers();
        alert("Datos insertados correctamente");

    } else{
        alert("Todos los campos son obligatorios");
    }   
}

// Remove player function
function deleteButton(){
    alert('delete it');
}

// It will be executed when the document is loaded
window.onload = function () {
    this.populatePlayers();
    document.getElementById("bt-enviar").addEventListener("click", this.checkForm);

    const deleteButton = document.getElementsByClassName("bt-borrar");

    for (let i = 0; i<deleteButton.length; i++){
        deleteButton[i].addEventListener("click", this.deleteButton)
    }

}



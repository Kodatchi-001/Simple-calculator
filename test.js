var botton = document.getElementById('warak');

botton.onclick = function calcutator() {
    let var_1 = parseFloat(document.getElementById('test').value);
    let var_2 = parseFloat(document.getElementById('test2').value);
    let var_chois = document.getElementById('chois').value;
    let var_resultat = document.getElementById('resultat');
    
    if(var_chois == 'plus'){
      var_resultat.textContent = var_1 + var_2
    }
    else if (var_chois == 'moin'){
        var_resultat.textContent = var_1 - var_2
    }
    else if(var_chois == 'fois'){
        var_resultat.textContent = var_1 * var_2
    }
    else if(var_chois == 'division'){
        var_resultat.textContent = var_1 / var_2
    }
    else if(var_chois == 'puisance'){
        var_resultat.textContent = var_1 ** var_2
    }

    document.getElementById('test').value = ''
    document.getElementById('test2').value = ''
    
}
function genareteNumber(){

    const min = Math.ceil(document.querySelector('.input-min').value)
    //constante criada, vai até o HTML seleciona o valor coloccado no input min pelo usuário.
    const max = Math.floor(document.querySelector('.input-max').value)
    //constante criada, vai até o HTML seleciona o valor coloccado no input min pelo usuário.


    if(min >= max)
        {
            alert('o Valor mínimo tem que ser menor que o valor máximo.')
        }else

        {
            const result = Math.floor(Math.random() * (max - min + 1)) + min
            alert(result)
        }
    

}
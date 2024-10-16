/*
    Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, 
    it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over 
    to the next digit.
*/
document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById('formulario-operaciones');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let formData = new FormData(formulario);

        formData = Object.fromEntries(formData);

        let output = digitwiseAddition(+formData['numero'], +formData['sumas']);

        updateDom(output);
    })
})

function updateDom(result) {
    
    const campoCantidadPosibilidades = document.getElementById('campo-resultado');

    campoCantidadPosibilidades.innerHTML = result;
}


function digitwiseAddition(N, K) {

    const MOD = 1_000_000_007;

    N = N.toString();


    for (let i = 0; i < K; i++) {
        N = N.split('').map(char => (+char + 1).toString()).join('');
    }

    

    return N.length % MOD;

}

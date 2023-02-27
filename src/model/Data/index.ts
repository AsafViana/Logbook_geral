
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

export function data(){
    return formataDataHora(new Date())
}

export function formataHora(data) {
    
    const hora = zeroAEsquerda(data.getHours());
    
    const min = zeroAEsquerda(data.getMinutes());
    
    const seg = zeroAEsquerda(data.getSeconds()); 
    
    return `${hora}:${min}:${seg}`
}

export function formataData(data) {

    const dia = zeroAEsquerda(data.getDate());
    
    const mes = zeroAEsquerda(data.getMonth() + 1);
    
    const ano = zeroAEsquerda(data.getFullYear());
    
    return `${dia}-${mes}-${ano}`
}

function formataDataHora(data) {

    const dia = zeroAEsquerda(data.getDate());
    
    const mes = zeroAEsquerda(data.getMonth() + 1);
    
    const ano = zeroAEsquerda(data.getFullYear());
    
    const hora = zeroAEsquerda(data.getHours());
    
    const min = zeroAEsquerda(data.getMinutes());
    
    const seg = zeroAEsquerda(data.getSeconds()); 
    
    return {dia:`${dia}-${mes}-${ano}`, hora:`${hora}:${min}:${seg}`, tudo: `${dia}-${mes}-${ano} ${hora}:${min}:${seg}`};
}
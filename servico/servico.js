import fatosHistoricos from "../dados/dados.js";

function retornaFatoHistorico(ano) {
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
};

function validaAno(ano) {
    if(isNaN(ano))
    {
        return false;
    }
    else
    {
        if(ano >= 1920 && ano <= 2020)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

export {validaAno, retornaFatoHistorico};
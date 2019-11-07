export default function transcription(dna) {
    const dnaToRna = {
        G:"C",
        C:"G",
        T:"A",
        A:"U"
    };

    if(checkDNA(dna, dnaToRna) !== true) {
        throw "Nucleotide "+ checkDNA(dna, dnaToRna) +" does not exist"
    }
    return dna.replace(/G|C|T|A/gi, function (matched){
        return dnaToRna[matched];
    });
}

function checkDNA(dna, dnaToRna){
    for (const nucleotide of dna) {
        if(!dnaToRna.hasOwnProperty(nucleotide))
            return nucleotide;
    }
    return true
}
  
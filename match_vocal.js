function MatchVocal(str) {
    vcount = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[aiueoAIUEO]/)) {
            vcount++
        }
    }
    return vcount;
}

console.log(MatchVocal("Damme"));
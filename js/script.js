const txtElement = [
    'Semoga panjang umur, sehat selalu, semoga ulang tahun kali ini lebih bermakna daripada tahun sebelumnya. Aku harap awkmu menjadi pribadi yang lebih baik lagi, tentunya lebih sayang aku :v :v :v',
    'Banyak benget harapan dan doa-doa ku gawe awkmu tapi ngga mungkin tak tulis ng kene kabeh.......',
    'Semangat e dijaga terus ya. Sepurane sering gawe awkmu kesal. Sepurane nek sayangku ng awkmu terlalu berlebihan. Sepurane aku menuntut banyak hal ng awkmu.......',
    'Sepurane gung iso ngekei hadiah kanggo awkmu :( Makasih ya wes gelem bareng-bareng mbek aku sampai saiki, wes sayang mbek aku dengan segala kekurangan dan keegoisanku. Makasih banyak.........',
    'Happy Birthday and sorry just make birthday greetings like this.  Aku sayang Awkmu :3 :3 :3 :3 :3'

];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
    
    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 200);


})();
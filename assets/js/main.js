// CodeFlow Übung lev1_1: length
// Aufgabenstellung
// Erstelle zwei Variablen nachName und vorName.
// Zeige die Länge der beiden Variablen in der Konsole an.
// Erstelle noch ein Variable “name”, die die Summe der beiden Variablen ist.
// Zeige die Länge der Variable “name” in der Konsole an.
console.log("CodeFlow Übung lev1_1: length");
let vorName = 'Klaus';
let nachName = 'Nienhaus';
console.log(vorName.length);
console.log(nachName.length);
let name = vorName + nachName
console.log(name.length);
console.log("");


// CodeFlow Übung lev1_2: indexOf
// Aufgabenstellung
// Verwende den Befehl indexOf() um die Position eines Zeichens in einer Zeichenketten als Ergebnis in der Konsole zu erhalten.
// let txt = ”How inappropriate to call this planet Earth, when clearly it is Ocean.”
// Suche die Position des Zeichens “h” in der Variablen txt.
// Suche die Position des Zeichens “Earth” in der Variablen txt.
// Suche die Position des Zeichens “Moon” in der Variablen txt.
console.log("CodeFlow Übung lev1_2: indexOf");
let txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';
console.log('Position of "h":', txt.indexOf("h"));
console.log('Position of "Earth":', txt.indexOf("Earth"));
console.log('Position of "Moon":', txt.indexOf("Moon"));
console.log("");


// CodeFlow Übung lev1_3: search
// Aufgabenstellung
// Verwende den Befehl search() um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.
// let txt2 = ”Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.”
// Suche die Position des Zeichens “; ” in der Variablen txt.
// Suche die Position des Zeichens “green” in der Variablen txt.
// Suche die Position des Zeichens “blue” in der Variablen txt.
console.log("CodeFlow Übung lev1_3: search");
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
console.log('Position of "; ":', txt2.search("; "));
console.log('Position of "green":', txt2.search("green"));
console.log('Position of "blue":', txt2.search("blue"));
console.log("");


// CodeFlow Übung lev1_4: slice
// Aufgabenstellung
// Verwende den Befehl slice() um das Ergebnis zu erhalten.
// let A = 'Sam is going to coding school';
// Verwende die Methode "slice" um diese Ausgabe auf dem Bildschirm anzuzeigen:
// Sam
// is
// am is going to school
// is going to school
// school
// Sam is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar + "<br>"), um das Ergebnis im Dokument auszugeben.
let A = 'Sam is going to coding school';
let res = ["CodeFlow Übung lev1_4: slice:"];
res.push(A.slice(0, 3))
res.push(A.slice(4, 6));
res.push(A.slice(1, 16) + A.slice(23, 29));
res.push(A.slice(4, 16) + A.slice(23, 29));
res.push(A.slice(23, 29));
res.push(A.slice(0, 7) + A.slice(23, 29))
showResult(res);

// CodeFlow Übung lev1_5: substring
// Aufgabenstellung
// Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.
// let text = 'Sam is back from coding school';
// Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML - Dokument an:
// Sam
// is
// school
// Sam is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(deine gespeicherte substring variable + "<br"), um das Ergebnis anzuzeigen.
let text = 'Sam is back from coding school';
res = ["CodeFlow Übung lev1_5: substring:"];
res.push(text.substring(0, 3))
res.push(text.substring(4, 6))
res.push(text.slice(24, 30));
res.push(text.substring(0, 7) + text.slice(24, 30));
showResult(res);


// CodeFlow Übung lev1_6: substr
// Aufgabenstellung
// Verwende den Befehl substr() um die gewünschten Zeichenketten zu erhalten.
// let text = “Sam is working at coding school”;
// Zeige mit Hilfe der Methode "substr" diese Ausgabe in einem HTML - Dokument an:
// Sam
// is
// at school
// Sam works at school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(let + "<br>"), um das Ergebnis anzuzeigen.
text = "Sam is working at coding school";
res = ["CodeFlow Übung lev1_6: substr:"];
res.push(text.substr(0, 3))
res.push(text.substr(4, 2))
res.push(
    text.substr(15, 3).concat(text.substr(25, 8))
);
res.push(
    text.substr(0, 4).concat(
        text.substr(7, 4),
        text.substr(5, 1),
        text.substr(14, 4),
        text.substr(25, 8)
    )
);
showResult(res);


// CodeFlow Übung lev1_7: replace
// Aufgabenstellung
// Verwende den Befehl replace() um die gewünschten Zeichenketten zu erhalten.
// let text = “Sam is good at coding school”;
// Zeige mit der Methode "replace" diese Ausgabe in einem HTML - Dokument an:
// Sam is bad at school
// Tom is good at school
// Sam is good at tennis
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(let + "<br"), um das Ergebnis anzuzeigen.
text = "Sam is good at coding school";
res = ["CodeFlow Übung lev1_7: replace:"];
res.push(
    text
        .replace("good", "bad")
        .replace("coding ", "")
);
res.push(
    text
        .replace("Sam", "Tom")
        .replace("coding ", "")
);
res.push(
    text
        .replace("school", "tennis")
        .replace("coding ", "")
);
showResult(res);


// CodeFlow Übung lev1_8: toLowerCase - toUpperCase
// Aufgabenstellung
// Verwende den Befehl toLowerCase(), toUpperCase() um die gewünschten Zeichenketten zu erhalten.
// let text = “Sam is going to coding school”;
// Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML - Dokument.Nutze alle Methoden die du bereits gelernt hast.
// SAM IS GOING TO SCHOOL
// sam is going to school
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(let + "<br"), um das Ergebnis anzuzeigen.
text = "Sam is going to coding school";
res = ["CodeFlow Übung lev1_8: toLowerCase - toUpperCase:"];
res.push(
    text
        .replace("coding ", "")
        .toUpperCase()
);
res.push(
    text
        .replace("coding ", "")
        .toLowerCase()
);
res.push(
    text.substr(0, 3)
        .toUpperCase()
        .concat(
            text.substring(3, 16),
            text
                .substr(23)
                .toUpperCase()
        )
);
res.push(
    text.substr(0, 3).
        toLowerCase().concat(
            text
                .substring(3, 16)
                .toUpperCase(),
            text
                .substr(23)
                .toLowerCase()
        )
);

let r = text.replace("coding ", "")
r = r.substr(0, 1).toUpperCase() + r.substr(1);
let pos = -1;
while ((pos = r.indexOf(" ", pos + 1)) > -1) {
    r = r
        .substring(0, pos + 1)
        .concat(
            r
                .substr(pos + 1, 1)
                .toUpperCase(),
            r.substr(pos + 2)
        );
}
res.push(r);
showResult(res);

// CodeFlow Übung lev1_9: concat
// Aufgabenstellung
// Verwende die Methode concat() um die gewünschten Zeichenketten zu erhalten.
//  let text1 = “Sam is going to coding school”;
//  let text2 = “Tom”
//  let text3 = “programming bike”
//  let text4 = “and”
// Erzeuge mit "concat" diese Ausgabe in einem HTML - Dokument.Nutze alle Methoden die du bereits gelernt hast.
// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Tom and Sam are going to school
// Tom and Sam are going to gym and to the movie theater
// Tom is going to school and to the movie theater
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(let + "<br"), um das Ergebnis anzuzeigen.
let text1 = 'Sam is going to coding school';
let text2 = 'Tom';
let text3 = 'programming bike';
let text4 = 'and';
res = ["CodeFlow Übung lev1_9: concat:"];
res.push(
    text1
        .replace("coding ", "")
        .concat(" ", text4, " to the movie theater")
);
res.push(
    text1
        .substr(0, 16)
        .concat("movie theater")
);
res.push(
    text2
        .concat(" ", text4, " ", text1)
        .replace("is", "are")
        .replace("coding ", "")
);
res.push(
    text2
        .concat(
            " ",
            text4,
            " ",
            text1.substr(0, 16)
        )
        .replace("is", "are")
        .concat(
            "gym ",
            text4,
            " to the movie theater"
        )
);
res.push(
    text1
        .replace("coding ", "")
        .replace("Sam", text2)
        .concat(" ", text4, " to the movie theater")
);
showResult(res);


//**************************************************************************** */
function showResult(res) {
    console.log(res[0]);
    document.write("<h3>" + res[0] + "</h3>");

    for (let i = 1; i < res.length; i++) {
        console.log(res[i], res[i].length);
        document.write("<p>" + res[i] + "</p>")
    }
    console.log("");
    document.write("<br>")
}


// Jakie problemy mogą pojawić się podczas pracy z obiektami JS?

// -> Klucze mogą być albo string albo Symbol

const numbers = {
    1: 'JEDEN',
    2: 'DWA'
}

// Pomimo że zapisałeś klucze jako liczby to i tak są konwertowane do napisów
console.log(Object.keys(numbers))

// -> Niekiedy brakuje wygodnych metod do zarządzania obiektami
// Kiedy chcesz sprawdzić, ile w obiekcie mamy properties musisz przykładowo napisać:

console.log(Object.keys(numbers).length)

// Kazdy obiekt dostaje pewne właściwości / metody od prototype, które może przez przypadek
// nadpisać, co może prowadzić do zamieszania w kodzie

const person = {
    name: 'ADAM',
    toString: `My name is ${this.name}`
}
// console.log(person.toString())

// W dużych obiektach dodawanie / usuwanie par powoduje spowolnienie działania aplikacji.

// Powyższe problemy możesz rozwiązać poprzez zastosowanie Map.

// Mapa również przechowuje pary "klucz-wartość", ale w tym przypadku
// klucz może być dowolnego typu.

// Map posiada kilka metod, które pozwalają wygodnie pracować na zestawie
// par "klucz - wartość"

const m = new Map();
m.set(1, 'A');
m.set('1', 'B');
m.set(false, 'C')

console.log(m.get(1))
console.log(m.get('1'))
console.log(m.get(false))

console.log(m.size)
m.delete(1)
console.log(m.size)

// ITERATION

for (const e of m) {
    console.log(e)
}

// Dodatkowo mapy są zaimplementowane w sposób, który umożliwia częste wstawianie oraz
// usuwanie par "klucz-wartość".

// Czy to oznacza, że mam zastąpić obiekt za pomocą Map w każdej sytuacji?

// -> Kiedy pracujesz tylko na kluczach, które są typu string i zależy Ci przede wszystkim na
//    odczytywaniu zawartości, obiekt jest lepszym rozwiązaniem.
//    Jest tak, ponieważ pod spodem obiekty JS są kompilowane do klas C++ i dostęp do pól składowych
//    obiektów tych klas jest znacznie szybszy niż w przypadku dostępu do map. Jednak dodawanie lub
//    usuwanie kolejnych właściwości w obiekcie JS powoduje, że klasy C++ są przebudowywane, co wydłuża
//    czas realizowania takich operacji.

// -> Map nie jest serializable, dlatego musisz wykonać dodatkowe operacje, kiedy chcesz przygotować
//    mapę do serializacji
console.log(JSON.stringify(m))
console.log(JSON.stringify(Object.fromEntries(m.entries())))

// PODSUMOWANIE
// Obiekt to ciągle byt, który często wykorzystasz w JS.
// Obiekty mają swoje ograniczenia.
// W takiej sytuacji możesz uzupełniać te braki, stosując Map.
// Pamiętaj jednak, że nie zawsze Map jest najlepszym rozwiązaniem, dlatego dobrze mieć
// umiejętność stosowania obiektów i Map, tak żeby w danym momencie wybrać najlepsze rozwiązanie ;)

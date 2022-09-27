const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
    
  function containsA() {
    let sum = 0;

    names.forEach((element) => {
        const splitArray = element.split('');

        sum += splitArray.reduce((count, letter) => {
            if (letter === 'a' || letter === 'A') {
                return count + 1;
            }

            return count;
        }, 0);
    });

    return sum;
  }

  console.log(containsA());

import fs from 'fs'


function readFile () {
    // if(!nameFile) {
    //     return 'Error, no se ha encontrado el fichero.'
    // }

    var matrix = [];
    const file = fs.readFileSync('../input/example1.txt').toString()
    // read line by line
    file.split(/\r?\n/).forEach(line =>  {
      var vector = line.replace("-", "-1").split(" ");
      var vectorInt = []
      // save string like number
      vector.forEach(item => {
        vectorInt.push(Number(item))
      })
      matrix.push(vectorInt)
    });

    console.log(matrix)

}

readFile()
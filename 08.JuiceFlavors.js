function solve(arr) {

    let juiceAmount = new Map();
    let bottlesAmount = new Map()

    arr.forEach(el => {

        let [product, quantity] = el.split(' => ');

        if (!juiceAmount.has(product)) {
            juiceAmount.set(product, 0);
        }


        let currAmount = juiceAmount.get(product) + Number(quantity);

        if (currAmount >= 1000) {

            if (!bottlesAmount.has(product)) {
                bottlesAmount.set(product, 0)
            }

            let currBottles = Math.trunc(currAmount / 1000);
            juiceAmount.set(product, currAmount % 1000)
            bottlesAmount.set(product, bottlesAmount.get(product) + currBottles);

        }
        else {

            juiceAmount.set(product, currAmount)

        }


    })

    for (const [key, value] of bottlesAmount) {

        if (value > 0) {

            console.log(`${key} => ${value}`);
        }
    }

}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);
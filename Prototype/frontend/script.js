function start() {

    // EXERCISE 1

    let helloWorld = function() {
        this.name = "World";
        this.message = "Hello";
    }

    let helloInstance = new helloWorld();

    helloWorld.prototype.name = "Jaska";
    helloWorld.prototype.message2 = "Goodbye";

    //console.log(helloInstance);
    //console.log(helloInstance.name); // HelloWorldin oma nimi näkyy
    //console.log(helloInstance.message);
    //console.log(helloInstance.message2); // Näkyy vasta kun objektin laajentaa konsolissa

    helloInstance.message2 = "This works";
    //console.log(helloInstance.message2);

    // EXERCISE 2

    let object_test = {
        myVar:15,
        myFunction:function() {
            return this.myVar+10;
        }
    };

    console.log(object_test);

    let object1 = Object.create(object_test);
    let object2 = Object.create(object_test);

    // Tyhjiä objekteja joilla prototyyppi
    console.log(object1);
    console.log(object2);

    // Arvojen vaihtaminen

    object_test.myVar = 50;
    // Objektit näyttävät tyhjiltä, mutta kun ne aukaisee, uusi arvo näkyy
    object1.myVar = 20;
    object2.myVar = 50;

    console.log(object1.myFunction());
    console.log(object2.myFunction());

    object1.myFunction = function() {
        return this.myVar + 50;
    }

    console.log(object1.myFunction());

    // Prototyypin vaihtaminen

    let object_test2 = {
        myVar:50,
        myFunction:function() {
            return this.myVar + 10;
        },
        myFunction2:function() {
            return this.myVar - 100;
        }
    }

    Object.setPrototypeOf(object1, object_test2);
    Object.setPrototypeOf(object2, object_test2);

    // Lasku tapahtuu instansseille annetuilla arvoilla, ei uuden prototyypin arvoilla
    console.log(object1.myFunction2());
    console.log(object2.myFunction2())
}
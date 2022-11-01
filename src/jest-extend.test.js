// Se crean matchers personalizados ej. toBePruebaPersonalizada, toBePrueba2, etc.

// https://github.com/jest-community/jest-extended

// Ejemplo de un matchers personalizado

expect.extend ({
    tobeIgualDos(recibido) {
        if (recibido !== 2) {
            return {
                pass: false,
                message: () => `Espera ${received} ser el número 2`,
            };
        }

        return {
            pass: true,
        };
    },
});

test (" número 2", ()=> {
    expect(2).tobeIgualDos();
});

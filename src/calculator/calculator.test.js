import { calculator } from ".";

test("suma calculadora", () => {
    const result = calculator.suma(1, 2);
    expect(result).toBe(3);
});

test.todo("resta cálculo");

test.todo("multiplicación cálculo");

test.todo("división cálculo");
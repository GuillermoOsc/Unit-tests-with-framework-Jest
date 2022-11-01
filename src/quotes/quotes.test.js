import { getQuote } from "./";

test ("getQuote", () => {
    const quote = getQuote();

    expect (quote).toBe(
        "Texto de prueba"
    );
})
import { convertNoReference } from "../no-reference";

describe(convertNoReference, () => {
    test("conversion without arguments", () => {
        const result = convertNoReference({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-triple-slash-reference",
                },
            ],
        });
    });
});

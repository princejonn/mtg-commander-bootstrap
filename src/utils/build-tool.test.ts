import * as buildTool from "./build-tool";

describe("build.ts", () => {
  test("should exist", () => {
    expect(typeof buildTool.isCardAmountValid).toBe("function");
    expect(typeof buildTool.isSimilarColorIdentity).toBe("function");
    expect(typeof buildTool.isCardColorIdentityValid).toBe("function");
    expect(typeof buildTool.getMatchingCards).toBe("function");
    expect(typeof buildTool.getBasicLand).toBe("function");
    expect(typeof buildTool.getBasicLands).toBe("function");
    expect(typeof buildTool.getCardText).toBe("function");
    expect(typeof buildTool.buildCardList).toBe("function");
    expect(typeof buildTool.buildToFile).toBe("function");
  });
});

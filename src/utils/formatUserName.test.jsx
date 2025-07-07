import { describe, it, expect } from "vitest";
import { formatUserName } from "./formatUserName";

describe("formatUserName", () => {
    it("formate correctement un nom et prénom", () => {
        const result = formatUserName("alice", "dupont");
        expect(result).toBe("Alice Dupont");
    });

    it("erreur si champs vides", () => {
        expect(() => formatUserName("", "dupont")).toThrow("Les deux champs sont requis");
        expect(() => formatUserName("alice", "")).toThrow("Les deux champs sont requis");
        expect(() => formatUserName("", "")).toThrow("Les deux champs sont requis");
    });
    it ("gère les espaces superflus", () => {
        const result = formatUserName("  alice  ", "  dupont  ");
        expect(result).toBe("Alice Dupont");
    });
    it("gère les majuscules et minuscules", () => {
        const result = formatUserName("ALICE", "DUPONT");
        expect(result).toBe("Alice Dupont");
    });
});
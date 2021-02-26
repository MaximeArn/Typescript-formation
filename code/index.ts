type role = "wizard" | "archer" | "knight" | "elf" | "orc";

type humanRole = Exclude<role, "elf" | "orc">;
// type humanRole = "wizard" | "archer" | "knight"

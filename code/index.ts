type role = "wizard" | "archer" | "knight" | "elf" | "orc";

type nonHuman = Extract<role, "wizard" | "archer" | "knight">;
// type nonHuman = "wizard" | "archer" | "knight"

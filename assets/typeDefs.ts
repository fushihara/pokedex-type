export const typeDefs: typeDefsDef = [
  { 防御側タイプ: "Normal", 日本語表記: "ノーマル", 抜群: ["Fighting"], いまひとつ: [], 効果なし: ["Ghost"], 色: "#a8a090 ", 文字色: "black" },
  { 防御側タイプ: "Fire", 日本語表記: "炎", 抜群: ["Water", "Ground", "Rock"], いまひとつ: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"], 効果なし: [], 色: "#f05030 ", 文字色: "black" },
  { 防御側タイプ: "Water", 日本語表記: "水", 抜群: ["Electric", "Grass"], いまひとつ: ["Fire", "Water", "Ice"], 効果なし: [], 色: "#3898f8", 文字色: "black" },
  { 防御側タイプ: "Electric", 日本語表記: "電気", 抜群: ["Ground"], いまひとつ: ["Electric", "Flying", "Steel"], 効果なし: [], 色: "#f8c030", 文字色: "black" },
  { 防御側タイプ: "Grass", 日本語表記: "草", 抜群: ["Fire", "Ice", "Poison", "Flying", "Bug"], いまひとつ: ["Water", "Electric", "Grass", "Ground"], 効果なし: [], 色: "#78c850", 文字色: "black" },
  { 防御側タイプ: "Ice", 日本語表記: "氷", 抜群: ["Fire", "Fighting", "Rock", "Steel"], いまひとつ: ["Ice"], 効果なし: [], 色: "#58c8e0", 文字色: "black" },
  { 防御側タイプ: "Fighting", 日本語表記: "格闘", 抜群: ["Flying", "Psychic", "Fairy"], いまひとつ: ["Bug", "Rock", "Dark"], 効果なし: [], 色: "#a05038", 文字色: "white" },
  { 防御側タイプ: "Poison", 日本語表記: "毒", 抜群: ["Ground", "Psychic"], いまひとつ: ["Grass", "Fighting", "Poison", "Bug", "Fairy"], 効果なし: [], 色: "#b058a0", 文字色: "white" },
  { 防御側タイプ: "Ground", 日本語表記: "地面", 抜群: ["Water", "Grass", "Ice"], いまひとつ: ["Poison", "Rock"], 効果なし: ["Electric"], 色: "#d0b058", 文字色: "black" },
  { 防御側タイプ: "Flying", 日本語表記: "飛行", 抜群: ["Electric", "Ice", "Rock"], いまひとつ: ["Grass", "Fighting", "Bug"], 効果なし: ["Ground"], 色: "#98a8f0", 文字色: "black" },
  { 防御側タイプ: "Psychic", 日本語表記: "エスパー", 抜群: ["Bug", "Ghost", "Dark"], いまひとつ: ["Fighting", "Psychic"], 効果なし: [], 色: "#f870a0", 文字色: "black" },
  { 防御側タイプ: "Bug", 日本語表記: "虫", 抜群: ["Fire", "Flying", "Rock"], いまひとつ: ["Grass", "Fighting", "Ground"], 効果なし: [], 色: "#a8b820", 文字色: "black" },
  { 防御側タイプ: "Rock", 日本語表記: "岩", 抜群: ["Water", "Grass", "Fighting", "Ground", "Steel"], いまひとつ: ["Normal", "Fire", "Poison", "Flying"], 効果なし: [], 色: "#b8a058", 文字色: "black" },
  { 防御側タイプ: "Ghost", 日本語表記: "ゴースト", 抜群: ["Ghost", "Dark"], いまひとつ: ["Poison", "Bug"], 効果なし: ["Normal", "Fighting"], 色: "#6060b0", 文字色: "white" },
  { 防御側タイプ: "Dragon", 日本語表記: "ドラゴン", 抜群: ["Ice", "Dragon", "Fairy"], いまひとつ: ["Fire", "Water", "Electric", "Grass"], 効果なし: [], 色: "#7860e0", 文字色: "white" },
  { 防御側タイプ: "Dark", 日本語表記: "悪", 抜群: ["Fighting", "Bug", "Fairy"], いまひとつ: ["Ghost", "Dark"], 効果なし: ["Psychic"], 色: "#705848", 文字色: "white" },
  { 防御側タイプ: "Steel", 日本語表記: "鋼", 抜群: ["Fire", "Fighting", "Ground"], いまひとつ: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"], 効果なし: ["Poison"], 色: "#a8a8c0", 文字色: "black" },
  { 防御側タイプ: "Fairy", 日本語表記: "フェアリー", 抜群: ["Poison", "Steel"], いまひとつ: ["Fighting", "Bug", "Dark"], 効果なし: ["Dragon"], 色: "#f8b0d0 ", 文字色: "black" },
];
export type defTypes = "Normal" | "Fire" | "Water" | "Electric" | "Grass" |
  "Ice" | "Fighting" | "Poison" | "Ground" | "Flying" | "Psychic" | "Bug" | "Rock" | "Ghost" | "Dragon" | "Dark" | "Steel" | "Fairy";
export type typeDefsDef = {
  防御側タイプ: defTypes, 日本語表記: string, 抜群: defTypes[], いまひとつ: defTypes[], 効果なし: defTypes[], 色: string, 文字色: "black" | "white"
}[]
export function 技の効き目を取得(ポケモンのタイプ: defTypes[]): { x4: defTypes[], x2: defTypes[], x1_2: defTypes[], x1_4: defTypes[], x0: defTypes[] } {
  const x4: defTypes[] = [];
  const x2: defTypes[] = [];
  const x1: defTypes[] = [];
  const x1_2: defTypes[] = [];
  const x1_4: defTypes[] = [];
  const x0: defTypes[] = [];
  for (let v of typeDefs) {
    let 効き目 = 1;
    for (let w of ポケモンのタイプ) {
      効き目 *= 技の効き目の倍数を取得(w, v.防御側タイプ);
    }
    if (効き目 == 4.0) {
      x4.push(v.防御側タイプ);
    } else if (効き目 == 2.0) {
      x2.push(v.防御側タイプ);
    } else if (効き目 == 1.0) {
      x1.push(v.防御側タイプ);
    } else if (効き目 == 0.5) {
      x1_2.push(v.防御側タイプ);
    } else if (効き目 == 0.25) {
      x1_4.push(v.防御側タイプ);
    } else if (効き目 == 0) {
      x0.push(v.防御側タイプ);
    }
  }
  return {
    x4,
    x0,
    x1_2,
    x1_4,
    x2
  };
}
function 技の効き目の倍数を取得(ポケモンのタイプ: defTypes, 技のタイプ: defTypes): number {
  for (let v of typeDefs) {
    if (v.防御側タイプ == ポケモンのタイプ) {
      if (v.抜群.includes(技のタイプ)) {
        return 2.0;
      } else if (v.いまひとつ.includes(技のタイプ)) {
        return 0.5;
      } else if (v.効果なし.includes(技のタイプ)) {
        return 0;
      } else {
        return 1;
      }
    }
  }
  throw new Error(`${ポケモンのタイプ} に対して ${技のタイプ} の技を与えた時のダメージ比率が計算出来ませんでした`);
}
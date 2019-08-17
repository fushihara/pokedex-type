const localStorageKey = `rim03all-poke-weak-checker`;
export function addSave(ポケモン名: string) {
  const datas = (JSON.parse(localStorage[localStorageKey] || "[]") as any[]).reverse().filter(a => a != ポケモン名);
  datas.push(ポケモン名);
  localStorage[localStorageKey] = JSON.stringify(datas.reverse());

}
export function getSaveList(): string[] {
  return (JSON.parse(localStorage[localStorageKey] || "[]") as string[])
}
export function clearSaveList(){
  localStorage[localStorageKey] = JSON.stringify([]); 
}
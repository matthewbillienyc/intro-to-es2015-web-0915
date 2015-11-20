var bestLanguages = ["Ruby", "Elixir"];


class Programmer {
  constructor(name, language){
    this.name = name;
    this.language = language || "Ruby";
  }
  evangelize(){
    return `${this.name}: ${(this.language).toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}


export default Programmer;
export { bestLanguages };
export function addJavaScript(arr){
  var newList = arr + "JavaScript";
  return newList;
}
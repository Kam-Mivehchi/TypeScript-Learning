class Utility {
   //avoid  creating new instances
   static getInput(elementId: string): string {
      let input: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
      console.log(input.value)
      return input.value
   }
}
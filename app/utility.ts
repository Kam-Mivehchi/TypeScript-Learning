
//avoid  creating new instances
function getInput(elementId: string): string {
   let input: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
   return input.value
}
function logger(message: string): void {
   console.log(message);
}
export { getInput as getValue, logger }



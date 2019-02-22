/* Define a function that ensures that each action is unique. This prevents any
double actions being dispatched in the future */

const uniqueActionMap: {[actionName: string]: boolean} = {};

function verifyActionType(actionName: string): void {
  // Ensures actions have unique names
  if (uniqueActionMap[actionName]) {
    console.error(`Action type "${actionName}" is not unique"`);
    throw new Error(`Action type "${actionName}" is not unique"`);
  }
  uniqueActionMap[actionName] = true;
}

export function isActionNameUnique(ActionTypes: any): void {
  Object.values(ActionTypes).map((value: string) => verifyActionType(value));
}

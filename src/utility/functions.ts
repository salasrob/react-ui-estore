/**
 * This function can be used anywhere in the app to greet the user
 * @param userName The user's first name
 * @returns A kind greeting message
 */
export const sayHello = (userName: string): string => {
    return 'Welcome ' + userName + '!'
}

export const handleMouseDownPreventDefault = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
}

export const stringToBool = (value:string): boolean => {
         if (value.toLowerCase() === "true") return true;
         else return false;
 }
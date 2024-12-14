
export const generateConfirmationNumber = (): string =>{
  return `BEV-${Math.random().toString(36).substring(2,8).toUpperCase()}`
}
// I do it for moving a part of email on next line if email is too long string

export const AddSpaceToEmail = (email) => {
  if (!email) return;
  
  const dogSymbolIndex = email.indexOf("@");
  const emailPartBeforeDogSymbol = email.slice(0, dogSymbolIndex);
  const emailPartAfterDogSymbol = email.slice(dogSymbolIndex, email.length);
  const partsOfEmail = [emailPartBeforeDogSymbol, emailPartAfterDogSymbol];

  return partsOfEmail.join(" ");
};

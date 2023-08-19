export function divideCamelCase(memberName: string): string {
  if (!memberName) return null;

  return memberName.replace(/([a-z])([A-Z])/g, "$1 $2");
}

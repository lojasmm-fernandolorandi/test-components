export function format({ first, middle, last }: { first: string; middle: string; last: string; }): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

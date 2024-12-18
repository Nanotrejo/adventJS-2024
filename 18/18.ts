function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  if (!agenda) return null;

  const lines = agenda.split('\n');
  const matches: { name: string; address: string }[] = [];

  for (const line of lines) {
    const phoneRegex = new RegExp(`\\+?[\\d-]*${phone}[\\d-]*`, 'g');
    const nameRegex = /<([^>]+)>/;
    const nameMatch = line.match(nameRegex);

    if (phoneRegex.test(line) && nameMatch) {
      const cleanLine = line
        .replace(phoneRegex, '')
        .replace(nameRegex, '')
        .trim();
      matches.push({ name: nameMatch[1], address: cleanLine });
    }
  }

  if (matches.length !== 1) return null;

  return matches[0];
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, '34-600-123-456'));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'));
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, '1'));
// null
// Explicación: Demasiados resultados

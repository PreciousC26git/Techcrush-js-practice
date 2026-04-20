//test: formatname ( 'esther', 'ogbu') should return 'OGBU, Esther'

function formatName(firstName, lastName) => {
const cleanFirst = firstName.trim();
  const cleanLast = lastName.trim();

  const formattedFirst = cleanFirst.charAt(0).toUpperCase() + cleanFirst.slice(1).toLowerCase();
  const formattedLast = cleanLast.toUpperCase();

  return `${formattedLast}, ${formattedFirst}';
}

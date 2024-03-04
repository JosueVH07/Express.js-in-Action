function capitalize(str) {
    // const firstLetter = str[0].toUpperCase();
    const firstLetter = str.charAt(0).toUpperCase();
    const rest = str.slice(1).toLowerCase();
    return firstLetter + rest;
}

export default capitalize;
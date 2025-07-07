export function formatUserName(firstName, lastName) {
    if (!firstName || !lastName) {
        throw new Error("Les deux champs sont requis");
    }

    const fName = firstName.trim().toLowerCase();
    const lName = lastName.trim().toLowerCase();

    return `${fName.charAt(0).toUpperCase() + fName.slice(1)} ${lName.charAt(0).toUpperCase() + lName.slice(1)}`;
}

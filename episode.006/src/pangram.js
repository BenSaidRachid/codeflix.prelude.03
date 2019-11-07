

export default function pangram(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    for (const char of str.toLowerCase()) {
        alpha = alpha.replace(char, "");
    }

    return (alpha.length === 0);
}
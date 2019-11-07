

export default function bob(str = "") {
    if(str.match(/\?$/gm)) {
        return 'Sure';
    } else if (str.match(/!$/gm)){
        return 'Whoa, chill out!';
    } else if (str.match(/^Bob$/gm)){
        return 'Fine. Be that way!';
    }
    return 'Whatever';
}
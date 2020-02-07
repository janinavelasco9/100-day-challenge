export function getCookie(name: string): string {
    const ca = document.cookie.split(';');
    name = name + '=';

    for (let c of ca) {
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export function createCookie(name: string, value: any, days: number): void {
    let date;
    let expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = ' expires=' + date.toUTCString() + ';';
    } else {
        expires = '';
    }
    document.cookie = name + '=' + value + ';' + expires + ' path=/';
}
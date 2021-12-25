export default function cropTitle(title: string, n:number) {
    return `${title.split(' ').slice(0, n).join(' ')}...`;
}

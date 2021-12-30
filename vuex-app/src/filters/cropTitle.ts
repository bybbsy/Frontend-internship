export default function cropTitle(title: string, n:number): string {
    return `${title.split(' ').slice(0, n).join(' ')}...`;
}

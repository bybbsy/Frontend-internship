export default function cropTitle(title, n) {
    return `${title.split(' ').slice(0,n).join(' ')}...`;
}
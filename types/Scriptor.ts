export default interface Scriptor {
    name: string
    call: (...args: any[]) => any
}

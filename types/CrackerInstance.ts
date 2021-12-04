import Scriptor from "./Scriptor"

export default interface CrackerInstance {
    target: Scriptor
    output?: unknown
    calls: number
    lock?: string
    locks: string[]
    progress: Record<string, any>

    stringOutput(): string
    force(key: string, values: any[], error: string): void
    messageWithOutput(message: string): string
    error(message?: string): string
    loop(solver: () => string | void): string
    DATA_CHECK(HASH: (q: string) => number, DATA: Record<number, string>): void
    call(): string
}

import { crackerlib } from "./crackerlib"
import Scriptor from "../types/Scriptor"

export function crackT2(context: CLIContext, args: any) {
    const { validateArgs, Cracker, T2 }: ReturnType<typeof crackerlib> =
        $ns.catte_.crackerlib()

    const { target, error } = validateArgs(args, {
        borrow: "a scriptor to your alt's borrow script"
    })

    if (error) return `\`DError!\` ${error}`
    if (!args.borrow.call || !args.borrow.name)
        return `\`DError!\` \`NBorrow\` should be a scriptor to your alt's borrow script, like \`V#s.alt.borrow\`.`

    const cracker = Cracker(target as Scriptor)
    return cracker.loop(() => {
        if (cracker.lock === "DATA_CHECK") {
            cracker.DATA_CHECK(T2.HASH, T2.DATA)
        }

        if (cracker.lock === "CON_SPEC") {
            cracker.emptyCall()
            const sequence = ((cracker.output as string).match(/[A-Z]{7}/) || [])[0]
            if (!sequence) return

            const sets = T2.CS_SETS.flatMap(([pattern, offsets]) => {
                return offsets.flatMap(offset => {
                    let set = ""
                    let rev = ""
                    for (let letter = offset; letter < 26 + offset; letter++) {
                        const patternIndex = letter % pattern.length
                        const include = !!pattern[patternIndex]
                        if (include) {
                            // Z = 26, A = 27 => 0, B = 28 => 1
                            const alphabetIndex = letter >= 26 ? letter - 27 : letter
                            set += T2.CS_ALPHABET[alphabetIndex]
                            rev += T2.CS_ALPHABET_REV[alphabetIndex]
                        }
                    }

                    return [set, rev]
                })
            })

            const set = sets.find(set => set.includes(sequence))
            if (!set) return "Couldn't finish the alphabet sequence:"

            const end = set.indexOf(sequence) + sequence.length
            const result = set.slice(end, end + 3)
            cracker.progress.CON_SPEC = result
            cracker.call()
        }

        if (cracker.lock === "sn_w_glock") {
            const balance = $hs.accts.balance()
            const alt = args.borrow.name.split(".")[0]
            if (balance > 0) $ms.accts.xfer_gc_to({ to: alt, amount: balance })

            cracker.emptyCall()
            const goal = T2.GLOCK[cracker.stringOutput()]
            if (!goal) return "Couldn't figure out what balance this was:"

            const output = args.borrow.call({ amount: goal })
            if ((output && output.ok == false) || $hs.accts.balance() !== goal)
                return `Couldn't borrow ${goal}GC from your alt:\n  ${output.msg}`

            cracker.call()
            args.borrow.call({ amount: balance })
        }

        if (cracker.lock === "acct_nt") {
            cracker.emptyCall()
            const output = cracker.stringOutput()
            const match = output.match(/\d{6}\.\d{5}/g)
            if (!match) return "Couldn't parse dates:"
            const dates = Array.from(match)

            if (output.includes("between")) {
                const query = (output.match(/the (.*) between/) || [])[1]
                const transactions = $hs.accts.transactions({
                    count: "all",
                    // @ts-ignore
                    date: { $gte: dates[0], $lte: dates[1] }
                })

                let total: number
                switch (query) {
                    case "net GC":
                        total = transactions
                            .filter(trans => trans.recipient === context.caller)
                            .reduce((a, b) => a + b.amount, 0)
                    case "total earned on transactions with memos":
                        total = transactions.filter(
                            trans => trans.recipient === context.caller
                        )
                    case "total earned on transactions without memos":

                    default:
                        return "Couldn't figure out what to look for:"
                }
            } else if (output.includes("near")) {
            }
        }
    })
}

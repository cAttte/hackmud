import { crackerlib } from "./crackerlib"
import Scriptor from "../types/Scriptor"

export function script(context: CLIContext, args: any) {
    const { validateArgs, Cracker, T2 }: ReturnType<typeof crackerlib> =
        $ns.catte_.crackerlib()

    const { target, error } = validateArgs(args, {
        alt: "an alt account to transfer GC to"
    })

    if (error) return `\`DError!\` ${error}`
    if (typeof args.alt !== "string")
        return `\`DError!\` \`NAlt\` should be a username, like \`V"altname"\`.`

    const cracker = Cracker(target as Scriptor)
    return cracker.loop(() => {
        if (cracker.lock === "sn_w_glock") {
            const balance = $hs.accts.balance()
            const hint = $db.f({ loc: cracker.target.name }).first()
            const xfer = (bal: number) =>
                $ms.accts.xfer_gc_to({ to: args.alt, amount: bal })

            if (hint) {
                const goal = hint.glock as number
                $db.r({ loc: cracker.target.name })

                if (goal < balance) return "Not enough GC!"
                else xfer(balance - goal)
            } else {
                if (balance > 0) xfer(balance)

                cracker.progress.sn_w_glock = ""
                cracker.call()

                const goal = T2.GLOCK[cracker.stringOutput()]
                $db.i({ loc: cracker.target.name, glock: goal })

                return (
                    `Almost there... Obtain exactly or more than ${goal}GC from your alt account, then re-run:\n` +
                    `\n    \`Cuser\` \`1${args.alt}\`` +
                    `\n    accts.xfer_gc_to{ to: "${context.caller}", amount: ${goal} }` +
                    `\n    \`Cuser\` \`1${context.caller}\`` +
                    `\n    ${context.this_script}{ t: ${cracker.target}, alt: ${args.alt} }\``
                )
            }
        }

        if (cracker.lock === "DATA_CHECK") {
            cracker.DATA_CHECK(T2.HASH, T2.DATA)
        }
    })
}

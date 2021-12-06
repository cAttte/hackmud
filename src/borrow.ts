export function borrow(context: Context, args: any) {
    const error = (msg: string) =>
        (context as ScriptorContext).is_scriptor ? { ok: false, msg } : msg

    const balance = $ms.accts.balance_of_owner()
    let whitelist = $db.f().first_and_close().whitelist as string[]

    if (!whitelist) {
        $db.i({ whitelist: [] })
        whitelist = []
    }

    if (
        !(context as ScriptorContext).is_scriptor &&
        context.caller === context.this_script.split(".")[0]
    ) {
        if (args && args.whitelist) {
            const wl = args.whitelist
            const string = typeof wl === "string"

            if (!string && !(Array.isArray(wl) && wl.every(i => typeof i === "string")))
                return error("`NWhitelist` should be a string or string array.")

            $db.u({}, { $set: { whitelist: string ? [wl] : wl } })
        }

        return error("Pass this script to a cracker from your main account!")
    } else {
        if (!whitelist.includes(context.caller)) return

        const amount = args?.amount
        if (amount > balance) return error("I am poor.")

        $ms.accts.xfer_gc_to_caller({ amount, memo: "give it back!" })
    }
}

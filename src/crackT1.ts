import { crackerlib } from "./crackerlib"
import Scriptor from "../types/Scriptor"

export function script(context: CLIContext, args: any) {
    const { validateArgs, Cracker, T1 }: ReturnType<typeof crackerlib> =
        $ns.catte_.crackerlib()

    const { error, target } = validateArgs(args)
    if (error) return `\`DError!\` ${error}`
    const cracker = Cracker(target as Scriptor)

    return cracker.loop(() => {
        const lock = cracker.lock as string
        const { progress } = cracker

        if (lock.startsWith("EZ")) {
            cracker.force(lock, T1.EZ, "unlock command.")

            if (lock == "EZ_35") cracker.force("digit", T1.DIGIT, "digit.")
            if (lock == "EZ_40") cracker.force("ez_prime", T1.PRIME, "prime.")
        }

        if (lock.startsWith("c00")) {
            cracker.force(lock, T1.COLOR, "color name.")
            let i = T1.COLOR.indexOf(progress[lock])

            switch (lock) {
                case "c001":
                    progress.color_digit = progress.c001.length
                    cracker.call()
                    break
                case "c002":
                    progress.c002_complement = T1.COLOR[(i + 4) % 8]
                    cracker.call()
                    break
                case "c003":
                    progress.c003_triad_1 = T1.COLOR[(i + 3) % 8]
                    progress.c003_triad_2 = T1.COLOR[(i + 5) % 8]
                    cracker.call()
                    break
            }
        }

        if (lock === "l0cket") {
            cracker.force(lock, T1.K3Y, "security k3y.")
        }

        if (lock === "DATA_CHECK") {
            cracker.DATA_CHECK(T1.HASH, T1.DATA)
        }
    })
}

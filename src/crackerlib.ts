import CrackerInstance from "../types/CrackerInstance"
import Scriptor from "../types/Scriptor"

export function crackerlib(context: CLIContext, args: any) {
    const split = (list: string, sep = "_") => list.split(sep)

    return {
        validateArgs(args: any, extra?: Record<string, string>) {
            const target = args && (args.target || args.tar || args.t)
            const loc = typeof target === "string" && target.match(/^.+\..+$/)
            const ex = "abndnd_hrwmf_wlfdtm.pub_jmu8kz"

            if (!target)
                return {
                    error: "Specify `Nt`/`Ntar`/`Ntarget` with your target loc's scriptor."
                }
            if (!target.call || !target.name)
                return {
                    error: `Target should be a scriptor, like \`V#s.${loc || ex}\`.`
                }
            if (extra)
                for (const key in extra)
                    if (!(key in args))
                        return { error: `Specify \`N${key}\` with ${extra[key]}.` }

            return { target: target as Scriptor }
        },

        Cracker(target: Scriptor) {
            const cracker: any = {
                target,
                calls: 0,
                locks: [],
                progress: {},
                output: undefined,
                lock: undefined
            }

            cracker.stringOutput = ((self: CrackerInstance) => {
                return typeof self.output === "string"
                    ? self.output
                    : JSON.stringify(self.output)
            }).bind(cracker, cracker)

            cracker.call = ((self: CrackerInstance) => {
                self.calls++
                self.output = self.target.call(self.progress)
                return self.output
            }).bind(cracker, cracker)

            cracker.emptyCall = ((self: CrackerInstance) => {
                if (!self.lock) return
                self.progress[self.lock] = ""
                self.call()
            }).bind(cracker, cracker)

            cracker.force = ((
                self: CrackerInstance,
                key: string,
                values: any[],
                error: string
            ) => {
                for (const value of values) {
                    self.progress[key] = value
                    if (!self.call().endsWith(error)) break
                }
            }).bind(cracker, cracker)

            cracker.messageWithOutput = ((self: CrackerInstance, message: string) => {
                const output = self.stringOutput()
                return `\n${message}\n\n\`COutput:\`${output.replace(/^|\n/g, "\n  ")}`
            }).bind(cracker, cracker)

            cracker.error = ((self: CrackerInstance, message?: string) => {
                return self.messageWithOutput(`\`DError!\` ${message || ""}`)
            }).bind(cracker, cracker)

            cracker.loop = ((self: CrackerInstance, solver: () => string | void) => {
                while (true) {
                    // @ts-ignore
                    if (self.output != null && self.output.ok === false)
                        return self.error()
                    if (typeof self.output !== "string")
                        return self.error("Output was not a string.")

                    const lock = (self.output.match(/`N(.*)` lock/) || [])[1]
                    if (!lock)
                        // prettier-ignore
                        return self.messageWithOutput(`\`2Success!\`\n`
                            + `  Broke \`K${self.locks.length}\` lock${self.locks.length === 1 ? "" : "s"}:\n`
                            + (self.locks.length ? `  ${self.locks.map(l => `\`N${l}\``).join(" • ")}\n` : "")
                            + `  in \`K${Date.now() - _START}\`ms & \`K${self.calls}\` attempts.`
                        )
                    if (lock === self.lock)
                        return self.error(`Could not break lock \`N${lock}\`.`)

                    self.lock = lock
                    self.locks.push(lock)

                    const error = solver()
                    if (typeof error === "string" && error) return self.error(error)
                }
            }).bind(cracker, cracker)

            cracker.DATA_CHECK = ((
                self: CrackerInstance,
                HASH: (q: string) => number,
                DATA: Record<number, string>
            ) => {
                self.progress.DATA_CHECK = ""
                self.call()

                const questions = self.stringOutput().match(/.*\+{6}.*/g)
                if (!questions) return

                self.progress.DATA_CHECK = questions.map(q => DATA[HASH(q)]).join("")
                self.call()
            }).bind(cracker, cracker)

            cracker.call()
            return cracker as CrackerInstance
        },

        T1: {
            EZ: split("open_release_unlock"),
            DIGIT: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            // prettier-ignore
            PRIME: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
            K3Y: split("6hh8xw_cmppiq_sa23uw_tvfkyq_uphlaw_vc2c7q_xwz7ja"),
            COLOR: split("purple_blue_cyan_green_lime_yellow_orange_red"),
            HASH: (q: string) => -q.length + q.charCodeAt(25) + 27,
            DATA: JSON.parse(`{
                "0": "helpdesk",
                "2": "outta_juice",
                "5": "sentience",
                "16": "get_level",
                "48": "poetry",
                "54": "sans_comedy",
                "55": "resource",
                "57": "robovac",
                "63": "bunnybat",
                "68": "bo",
                "69": "weathernet",
                "74": "fran_lee",
                "75": "sisters",
                "78": "heard",
                "79": "eve",
                "81": "petra",
                "85": "minions",
                "87": "angels",
                "98": "teach",
                "99": "fountain"
            }`) as Record<number, string>
        },

        T2: {
            CS_ALPHABET: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            CS_ALPHABET_REV: "ZYXWVUTSRQPONMLKJIHGFEDCBA",
            // prettier-ignore
            CS_SETS: [ // [pattern, offsets]
                [[1], [0]],
                [[1, 0], [0, 1]],
                [[1, 1, 0, 0], [0, 1, 2, 3]]
            ],
            HASH: (q: string) => q.length + (q.match(/ /g) || []).length - 12,
            DATA: JSON.parse(`{
                "26": "executives",
                "27": "sheriff",
                "28": "well",
                "31": "piano",
                "35": "blazer",
                "37": "unvarnishedpygmyumbrella",
                "39": "obsessive",
                "47": "nubloopstone",
                "57": "nowhere",
                "63": "bnnyhunter",
                "71": "thirteen",
                "74": "atlanta",
                "76": "idp1p1",
                "77": "crowsnest",
                "79": "a2231",
                "81": "goodfellow",
                "88": "diagalpha",
                "89": "engaged",
                "91": "skimmerite",
                "99": "dead"
            }`) as Record<number, string>,
            GLOCK: JSON.parse(`{
                "That balance was not secret.": 7,
                "Well that wasn't a special balance,": 38,
                "This balance has no meaning.": 42,
                "Seems like your balance could be more secure.": 443,
                "That's not a balance of the beast.": 666,
                "Not an elite balance at all.": 1377,
                "That balance would not be chosen by a magician.": 1089,
                "Not a monolithic balance.": 2001,
                "Not a hunter's balance indeed.": 3006
            }`) as Record<string, number>
        }
    }
}

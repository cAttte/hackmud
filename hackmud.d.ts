type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never

type DistributivePick<T, K extends keyof T> = T extends unknown ? Pick<T, K> : never

type Replace<T, R> = DistributiveOmit<T, Extract<keyof R, keyof T>> & R

type Extract<T, F> = T extends unknown
    ? keyof F extends keyof T
        ? F extends Pick<T, keyof F>
            ? T
            : never
        : never
    : never

type ScriptSuccess<T = {}> = { ok: true } & T

type ScriptFailure = {
    ok: false
    msg?: string
}

type ScriptResponse<T = {}> = ScriptSuccess<T> | ScriptFailure
type ErrorScripts = Record<string, () => ScriptFailure>

type Subscripts = Record<string, Record<string, (...args: any) => any>> & {
    accts: ErrorScripts
    autos: ErrorScripts
    bbs: ErrorScripts
    chats: ErrorScripts
    corps: ErrorScripts
    escrow: ErrorScripts
    gui: ErrorScripts
    kernel: ErrorScripts
    market: ErrorScripts
    scripts: ErrorScripts
    sys: ErrorScripts
    trust: ErrorScripts
    users: ErrorScripts
}

interface PlayerFullsec {}
interface PlayerHighsec {}
interface PlayerMidsec {}
interface PlayerLowsec {}
interface PlayerNullsec {}

type Upgrade = {
    i: number
    loaded: boolean
    sn: string
    description: string
} & (
    | {
          name: "CON_SPEC"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          p1_len: number
          p2_len: number
      }
    | {
          name: "CON_TELL"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 1
      }
    | {
          name: "c001"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 0
      }
    | {
          name: "c002"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 1
      }
    | {
          name: "c003"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 1
      }
    | {
          name: "acct_nt"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          acct_nt_min: number
      }
    | {
          name: "sn_w_glock"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          max_glock_amnt: number
          expire_secs: number
      }
    | {
          name: "sn_w_usac"
          type: "lock"
          up_class: -1
          tier: 3
          rarity: 2 | 3 | 4
          salt_digits: number
      }
    | {
          name: "magnara"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          magnara_len: number
      }
    | {
          name: "shfflr"
          type: "lock"
          up_class: -1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          up_count_min: number
          up_count_max: number
          name_count: number
          rarity_count: number
          digits: number
      }
    | {
          name: "l0g_wr1t3r"
          type: "lock"
          up_class: -1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          loc_count: number
      }
    | {
          name: "char_count_v1"
          type: "script_space"
          up_class: 0
          tier: 1
          rarity: 0 | 1 | 2
          chars: number
      }
    | {
          name: "char_count_v2"
          type: "script_space"
          up_class: 0
          tier: 2
          rarity: 0 | 1 | 2 | 3
          chars: number
      }
    | {
          name: "char_count_v3"
          type: "script_space"
          up_class: 0
          tier: 3
          rarity: 1 | 2 | 3 | 4
          chars: number
      }
    | {
          name: "public_script_v1"
          type: "script_space"
          up_class: 0
          tier: 1
          rarity: 0 | 1 | 2
          slots: number
      }
    | {
          name: "public_script_v2"
          type: "script_space"
          up_class: 0
          tier: 2
          rarity: 0 | 1 | 2 | 3
          slots: number
      }
    | {
          name: "public_script_v3"
          type: "script_space"
          up_class: 0
          tier: 3
          rarity: 1 | 2 | 3 | 4
          slots: number
      }
    | {
          name: "script_slot_v1"
          type: "script_space"
          up_class: 0
          tier: 1
          rarity: 0 | 1 | 2
          slots: number
      }
    | {
          name: "script_slot_v2"
          type: "script_space"
          up_class: 0
          tier: 2
          rarity: 0 | 1 | 2 | 3
          slots: number
      }
    | {
          name: "script_slot_v3"
          type: "script_space"
          up_class: 0
          tier: 3
          rarity: 1 | 2 | 3 | 4
          slots: number
      }
    | {
          name: "channel_count_v1"
          type: "chat"
          up_class: 3
          tier: 1
          rarity: 0 | 1 | 2
          count: number
      }
    | {
          name: "channel_count_v2"
          type: "chat"
          up_class: 3
          tier: 2
          rarity: 0 | 1 | 2 | 3
          count: number
      }
    | {
          name: "channel_count_v3"
          type: "chat"
          up_class: 3
          tier: 3
          rarity: 1 | 2 | 3 | 4
          count: number
      }
    | {
          name: "balance_v1"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
      }
    | {
          name: "balance_v2"
          type: "script"
          up_class: 1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
      }
    | {
          name: "expose_access_log_v1"
          type: "script"
          up_class: 1
          tier: 1
          rarity: 0 | 1 | 2
          cooldown: number
          count: number
      }
    | {
          name: "expose_access_log_v2"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
          count: number
      }
    | {
          name: "expose_upgrade_log_v1"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
          count: number
      }
    | {
          name: "expose_upgrade_log_v2"
          type: "script"
          up_class: 1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
          count: number
      }
    | {
          name: "expose_upgrades_v1"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
      }
    | {
          name: "expose_upgrades_v2"
          type: "script"
          up_class: 1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
      }
    | {
          name: "ez_21"
          type: "script"
          up_class: -1
          tier: 1
          rarity: 0
      }
    | {
          name: "ez_35"
          type: "script"
          up_class: -1
          tier: 1
          rarity: 0
      }
    | {
          name: "ez_40"
          type: "script"
          up_class: -1
          tier: 1
          rarity: 1
      }
    | {
          name: "key_v1"
          type: "tool"
          up_class: 1
          tier: 1
          rarity: 0
          k3y: string
      }
    | {
          name: "key_v2"
          type: "tool"
          up_class: 1
          tier: 2
          rarity: 0
          k3y: string
      }
    | {
          name: "log_writer_v1"
          type: "script"
          up_class: 1
          tier: 1
          rarity: 0 | 1 | 2
          cooldown: number
      }
    | {
          name: "log_writer_v2"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
      }
    | {
          name: "log_writer_v3"
          type: "script"
          up_class: 1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
      }
    | {
          name: "transactions_v1"
          type: "script"
          up_class: 1
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
          count: number
      }
    | {
          name: "transfer_upgrade_v1"
          type: "script"
          up_class: 2
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
          count: number
      }
    | {
          name: "transfer_v1"
          type: "script"
          up_class: 2
          tier: 2
          rarity: 1 | 2 | 3
          cooldown: number
          amount: number
      }
    | {
          name: "transfer_v2"
          type: "script"
          up_class: 2
          tier: 3
          rarity: 2 | 3 | 4
          amount: number
          cooldown: number
      }
    | {
          name: "w4rn_er"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 1
      }
    | {
          name: "w4rn_message"
          type: "script"
          up_class: -1
          tier: 1
          rarity: 0 | 1 | 2
          cooldown: number
      }
    | {
          name: "w4rn"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 1
          cooldown: number
      }
    | {
          name: "DATA_CHECK_V1"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 0 | 1 | 2
          acc_mod: number
      }
    | {
          name: "DATA_CHECK_V2"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          acc_mod: number
      }
    | {
          name: "DATA_CHECK_V3"
          type: "lock"
          up_class: -1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          acc_mod: number
      }
    | {
          name: "DATA_CHECK_V4"
          type: "lock"
          up_class: -1
          tier: 4
          rarity: 1 | 2 | 3 | 4
          acc_mod: number
      }
    | {
          name: "l0cket"
          type: "lock"
          up_class: -1
          tier: 1
          rarity: 0 | 1 | 2
          count: number
      }
    | {
          name: "l0ckbox"
          type: "lock"
          up_class: -1
          tier: 2
          rarity: 1 | 2 | 3
          count: number
      }
    | {
          name: "l0ckjaw"
          type: "lock"
          up_class: -1
          tier: 3
          rarity: 1 | 2 | 3 | 4
          count: number
          expire_secs: number
      }
    | {
          name: "cron_bot_v1"
          type: "bot_brain"
          up_class: 0
          tier: 1
          rarity: 0 | 1 | 2
          cooldown: number
          cost: number
          retries: number
      }
    | {
          name: "cron_bot_v2"
          type: "bot_brain"
          up_class: 0
          tier: 2
          rarity: 0 | 1 | 2 | 3
          cooldown: number
          cost: number
          retries: number
      }
    | {
          name: "cron_bot_v3"
          type: "bot_brain"
          up_class: 0
          tier: 3
          rarity: 1 | 2 | 3 | 4
          cooldown: number
          cost: number
          retries: number
      }
    | {
          name: "cron_bot_v4"
          type: "bot_brain"
          up_class: 0
          tier: 4
          rarity: 1 | 2 | 3 | 4 | 5
          cooldown: number
          retries: number
          cost: number
      }
    | {
          name: "man_in_grey_suit_v1"
          type: "glam"
          tier: 1
          rarity: 1
          event: "surf.board"
      }
)

type CLIUpgrade = Upgrade extends { rarity: infer Rarity }
    ? Rarity extends number
        ? Replace<
              Upgrade,
              {
                  rarity: [
                      "`0noob`",
                      "`1kiddie`",
                      "`2h4x0r`",
                      "`3h4rdc0r3`",
                      "`4|_|b3|2`",
                      "`531337`"
                  ][Rarity]
              }
          >
        : never
    : never

type UsersTopItem<R> = {
    rank: R
    name: string
    last_activity: string
    balance: string
}

type CorpsTopItem<R> = {
    rank: R
    name: string
    worth: string
}

type CorpsTop = [
    CorpsTopItem<1>,
    CorpsTopItem<2>,
    CorpsTopItem<3>,
    CorpsTopItem<4>,
    CorpsTopItem<5>,
    CorpsTopItem<6>,
    CorpsTopItem<7>,
    CorpsTopItem<8>,
    CorpsTopItem<9>,
    CorpsTopItem<10>
]

type Fullsec = Subscripts &
    PlayerFullsec & {
        accts: {
            /**
             * **FULLSEC**
             *
             * @returns GC balance of script owner
             */
            balance_of_owner(): number

            /**
             * **FULLSEC**
             */
            xfer_gc_to_caller(args: {
                amount: number | string
                memo?: string
            }): ScriptResponse
        }

        bbs: {
            read(): {
                boards: {
                    title: string
                    slug: string
                }[]

                posts: {
                    vote_count: number
                    short_id: string
                    is_sticky: boolean
                    is_locked: boolean
                    is_archived: boolean
                    is_answered: boolean
                    is_implemented: boolean
                    title: string
                    slug: string
                    vote: boolean
                    username: string
                    time: string
                }[]
            }

            r: Fullsec["bbs"]["read"]
        }

        chats: {
            /**
             * **FULLSEC**
             *
             * @summary Create a new chat channel
             *
             * @description This script lets you create a new chat channel.
             * You cannot create a channel that already exists (including any of the default ports from `0000` to `FFFF`).
             * If you do not supply a password, anyone can join your channel (but the channel name is not displayed anywhere, so they would have to discover it in some way first).
             */
            create(args: {
                /**
                 * The name of the channel to create
                 */
                name: string

                /**
                 * The password to secure the channel with
                 */
                password?: string
            }): ScriptResponse

            create(args: {
                /**
                 * The name of the channel to create
                 */
                c: string

                /**
                 * The password to secure the channel with
                 */
                password?: string
            }): ScriptResponse

            /**
             * **FULLSEC**
             *
             * @summary Send a chat message to a channel
             *
             * @description This script lets you send a message to the specified channel.
             * You must have joined the channel, and you will see your own message (unlike chats.tell).
             */
            send(args: {
                /**
                 * The channel to send the message to.
                 */
                channel: string

                /**
                 * The message to send
                 */
                msg: string
            }): ScriptResponse

            /**
             * **FULLSEC**
             *
             * @summary Send a chat message to a specific user
             *
             * @description This script lets you send a message to the specified user directly.
             * You can message any user, you only need their username.
             * Note that you will not be able to see your message after it is sent (though many chat scripts based on chats.tell also send the message to you to work around this limitation).
             */
            tell(args: {
                /**
                 * The username to send the message to
                 */
                to: string

                /**
                 * The message to send
                 */
                msg: string
            }): ScriptResponse
        }

        escrow: {
            /**
             * **FULLSEC**
             */
            charge(args: {
                cost: number | string
                is_unlim?: boolean
            }): null | ScriptFailure

            confirm: never
        }

        gui: {
            chats: never
            quiet: never
            size: never
            vfx: never
            vol: never
        }

        market: {
            /**
             * **FULLSEC**
             */
            browse(
                args: {
                    seller: string
                    listed_before: number
                    listed_after: number
                    cost: number | string
                } & CLIUpgrade
            ):
                | {
                      i: string
                      name: string
                      rarity: Upgrade["rarity"]
                      cost: number
                  }[]
                | ScriptFailure

            browse<I extends string>(args: {
                i: I
            }):
                | {
                      i: I
                      seller: string
                      cost: number
                      count: number
                      description: string
                      upgrade: Upgrade
                      no_notify: boolean
                  }
                | ScriptFailure

            browse<I extends string[]>(args: {
                i: I
            }):
                | {
                      i: I
                      seller: string
                      cost: number
                      count: number
                      description: string
                      upgrade: Upgrade
                      no_notify: boolean
                  }[]
                | ScriptFailure
        }

        scripts: {
            /**
             * **FULLSEC**
             */
            fullsec(args?: {}): string[]
            fullsec(args: { sector: string }): string[] | ScriptFailure

            /**
             * **FULLSEC**
             */
            get_access_level(args: { name: string }):
                | {
                      public: boolean
                      hidden: boolean
                      trust: boolean
                  }
                | ScriptFailure

            /**
             * **FULLSEC**
             */
            get_level(args: { name: string }): 0 | 1 | 2 | 3 | 4 | ScriptFailure

            /**
             * **FULLSEC**
             */
            highsec(args?: {}): string[]
            highsec(args: { sector: string }): string[] | ScriptFailure

            /**
             * **FULLSEC**
             */
            lowsec(args?: {}): string[]
            lowsec(args: { sector: string }): string[] | ScriptFailure

            /**
             * **FULLSEC**
             */
            midsec(args?: {}): string[]
            midsec(args: { sector: string }): string[] | ScriptFailure

            /**
             * **FULLSEC**
             */
            nullsec(args?: {}): string[]
            nullsec(args: { sector: string }): string[] | ScriptFailure

            /**
             * **FULLSEC**
             */
            trust(): string[]

            /**
             * FULLSEC
             *
             * @returns a code library containing useful helper functions you can use in your scripts.
             */
            lib(): {
                ok(): ScriptSuccess

                not_impl(): {
                    ok: false
                    msg: "Not Implemented."
                }

                log(message: any): any
                get_log(): string[]
                rand_int(min: number, max: number): number
                clamp(floor: number, value: number, ceil: number): number
                lerp(...args: any): any
                sample(...args: any): any
                are_ids_eq(id1: any, id2: any): boolean
                id_to_str(...args: any): any
                is_bool(value: any): value is boolean
                is_obj(value: any): value is Record<string, unknown> | null
                is_str(value: any): value is string
                is_num(value: any): value is number
                is_int(value: any): value is number
                is_neg(value: any): value is number
                is_arr(value: any): value is unknown[]
                is_func(value: any): value is (...args: any[]) => unknown
                is_def(value: any): boolean
                is_valid_name(value: string): boolean
                dump(value: { toString(): string }): string
                clone<T extends object>(object: T): T
                merge<F extends object, S>(firstValue: F, secondValue: S): F & S
                get_values(obj: object): any
                hash_code(string: string): number
                xmur3(...args: any): any
                sfc32(...args: any): any
                mulberry32(...args: any): any
                xoshiro128ss(...args: any): any
                JSF(...args: any): any
                LCG(...args: any): any
                to_gc_str(num: number): string
                to_gc_num(str: string): number | ScriptFailure
                to_game_timestr(date: Date): string
                corruption_chars: "¡¢Á¤Ã¦§¨©ª"
                colors: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                corruptions: [0, 1, 1.5, 2.5, 5]
                corrupt(text: string | string[], amount: 0 | 1 | 2 | 3 | 4): string
                cap_str_len(string: string, length: number): string
                each<T>(array: T[], fn: (key: string, value: T) => void): void
                select<T>(array: T[], fn: (key: string, value: T) => boolean): T[]
                count<T>(array: T[], fn: (key: string, value: T) => boolean): number
                select_one<T>(array: T[], fn: (key: string, value: T) => boolean): T
                map<T>(array: T[], fn: (key: string, value: T) => boolean): T[]
                pick(...args: any): any
                shuffle<T>(array: T[]): T[]
                sort_asc(...args: any): any
                sort_desc(...args: any): any
                num_sort_asc(one: number, two: number): 1 | -1 | 0
                num_sort_desc(one: number, two: number): 1 | -1 | 0
                max_val_index(array: number[]): number
                add_time(date: Date, add_ms: number): Date
                security_level_names: [
                    "NULLSEC",
                    "LOWSEC",
                    "MIDSEC",
                    "HIGHSEC",
                    "FULLSEC"
                ]
                get_security_level_name(security_level: number): any
                dbu_result_failed(...args: any): any
                dbir_result_failed(...args: any): any
                create_rand_string(len: number): string
                get_user_from_script(script_name: string): string
                get_scriptname_from_script(...args: any): any
                is_script(...args: any): any
                caller_is_owner(...args: any): any
                uniq(...args: any): any
                u_sort_num_arr_desc<T>(array: T[]): T[]
                ljust(...args: any): any
                rjust(...args: any): any
                columnize(str: string[]): string
                side_by_side(...args: any): any
                can_continue_execution(time_left: number): boolean
                can_continue_execution_error(...args: any): any
                date: typeof Date
                get_date(): Date
                get_date_utcsecs(): number
                one_day_ms: 86400000
                is_not_today(...args: any): any
                utc_day_diff(...args: any): any
                utc_days_ago_str(...args: any): any
                math: typeof Math
                array: typeof Array
                parse_int: typeof parseInt
                parse_float: typeof parseFloat
                json: typeof JSON
                number: typeof Number
                object: typeof Object
            }

            /**
             * **FULLSEC**
             */
            quine(): string
        }

        sys: {
            init: never

            /**
             * **FULLSEC**
             */
            upgrades_of_owner<
                F extends Partial<Upgrade & { loaded: boolean }>,
                I extends number,
                U extends boolean = false
            >(
                args?:
                    | {
                          filter?: F
                          full?: U
                      }
                    | {
                          i: I
                          full?: undefined
                          filter?: undefined
                      }
            ):
                | (number extends I
                      ? (U extends true
                            ? Replace<Extract<Upgrade, F>, F>
                            : Replace<
                                  DistributivePick<
                                      Extract<Upgrade, F>,
                                      "tier" | "rarity" | "name" | "type" | "i" | "loaded"
                                  >,
                                  Pick<
                                      F,
                                      Extract<
                                          keyof F,
                                          | "tier"
                                          | "rarity"
                                          | "name"
                                          | "type"
                                          | "i"
                                          | "loaded"
                                      >
                                  >
                              >)[]
                      : Replace<Upgrade, { i: I }>)
                | ScriptFailure

            /**
             * **FULLSEC**
             */
            xfer_upgrade_to_caller(args: {
                i: number | number[]
                memo?: string
            }): ScriptResponse

            xfer_upgrade_to_caller(args: {
                sn: string | string[]
                memo?: string
            }): ScriptResponse
        }

        users: {
            /**
             * **FULLSEC**
             */
            active(): number

            /**
             * **FULLSEC**
             */
            last_action(args: { name: string | string[] }): ({
                n: string
                t?: Date
            } | null)[]

            /**
             * **FULLSEC**
             */
            top(): [
                UsersTopItem<1>,
                UsersTopItem<2>,
                UsersTopItem<3>,
                UsersTopItem<4>,
                UsersTopItem<5>,
                UsersTopItem<6>,
                UsersTopItem<7>,
                UsersTopItem<8>,
                UsersTopItem<9>,
                UsersTopItem<10>
            ]
        }
    }

type Highsec = Fullsec &
    PlayerHighsec & {
        accts: {
            /**
             * **HIGHSEC**
             *
             * @returns GC balance as number if `is_script` is true (default)
             * @returns GC balance as string if `is_script` is false
             */
            balance(args?: { is_script?: true }): number
            balance(args: { is_script: false }): string

            /**
             * **HIGHSEC**
             *
             * @returns transaction history according to filter
             * @returns if `is_script` is true (default), time property as Date object
             * @returns wraps transactions in object with msg, time property as string (game date format e.g. 201028.2147) if `is_script` is false
             */
            transactions(args?: {
                count?: number | "all"
                to?: string
                from?: string
                script?: string
                is_script?: true
            }): {
                time: Date
                amount: number
                sender: string
                recipient: string
                script: string | null
                memo?: string
            }[]

            transactions(args: {
                count?: number | "all"
                to?: string
                from?: string
                script?: string
                is_script: false
            }): {
                msg: string
                transactions: {
                    time: string
                    amount: string
                    sender: string
                    recipient: string
                    script: string | null
                    memo?: string
                }[]
            }
        }

        scripts: {
            /**
             * **HIGHSEC**
             */
            sys(): string | string[]
        }

        sys: {
            /**
             * **HIGHSEC**
             */
            specs(): string | ScriptFailure

            /**
             * **HIGHSEC**
             */
            status(): {
                hardline: number
                tutorial: string
                breach: boolean
            }

            /**
             * **HIGHSEC**
             */
            upgrade_log(args?: {
                is_script?: true
                user?: string
                run_id?: string
                count?: number
                start?: number
            }):
                | {
                      t: Date
                      u: string
                      r: string
                      msg: string
                  }[]
                | ScriptFailure

            upgrade_log(args: {
                is_script: false
                user?: string
                run_id?: string
                count?: number
                start?: number
            }): string[] | ScriptFailure

            /**
             * **HIGHSEC**
             */
            upgrades(args: { i: number }): Upgrade

            upgrades(args?: {
                filter?: Partial<Upgrade>
                is_script?: true
                full?: false
            }):
                | DistributivePick<
                      Upgrade,
                      "tier" | "rarity" | "name" | "type" | "i" | "loaded"
                  >[]
                | ScriptFailure

            upgrades(args?: {
                filter?: Partial<Upgrade>
                is_script?: true
                full: true
            }): Upgrade[] | ScriptFailure

            upgrades(args?: {
                filter?: Partial<Upgrade>
                is_script: false
                full?: false
            }):
                | {
                      msg: string
                      upgrades: string[]
                  }
                | ScriptFailure

            upgrades(args?: {
                filter?: Partial<Upgrade>
                is_script: false
                full: true
            }): CLIUpgrade[] | ScriptFailure
        }

        users: {
            /**
             * **HIGHSEC**
             */
            inspect(args: { name: "trust"; is_script?: boolean }): number

            inspect(args: { name: "risk"; is_script?: boolean }): string

            inspect(args: { name: string; is_script?: true }):
                | {
                      username: string
                      avatar: string
                      pronouns: string
                      user_age?: Date
                      bio?: string
                      title?: string
                      is_main: boolean
                      alt_of?: string
                      badges?: string[]
                  }
                | ScriptFailure

            inspect(args: { name: string; is_script: false }): string | ScriptFailure
        }
    }

type Midsec = Highsec &
    PlayerMidsec & {
        accts: {
            /**
             * **MIDSEC**
             */
            xfer_gc_to(args: {
                to: string
                amount: number | string
                memo?: string
            }): ScriptResponse
        }

        autos: {
            /**
             * **MIDSEC**
             */
            reset(): ScriptSuccess
        }

        chats: {
            /**
             * **MIDSEC**
             */
            channels(): string[]

            /**
             * **MIDSEC**
             */
            join(args: { channel: string; password?: string }): ScriptResponse

            /**
             * **MIDSEC**
             */
            leave(args: { channel: string }): ScriptResponse

            /**
             * **MIDSEC**
             */
            users(args: { channel: string }): string[] | ScriptFailure
        }

        escrow: {
            /**
             * **MIDSEC**
             */
            stats():
                | {
                      scripts: string[]
                      total: string
                      outstanding: string
                      open_escrow_count: number
                  }
                | ScriptFailure
        }

        market: {
            /**
             * **MIDSEC**
             */
            buy(args: { i: string; count: number; confirm: true }): ScriptResponse

            /**
             * **MIDSEC**
             */
            stats():
                | ScriptFailure
                | {
                      total: string
                      outstanding: string
                      listed: number
                      sold: number
                  }
        }

        scripts: {
            /**
             * **MIDSEC**
             */
            user(): string[]
        }

        sys: {
            /**
             * **MIDSEC**
             */
            manage(args: {
                unload?: number | number[]
                load?: number | number[]
            }): ScriptResponse

            manage(args: {
                reorder?:
                    | (
                          | [number, number]
                          | {
                                from: number
                                to: number
                            }
                      )[]
                    | {
                          from: number
                          to: number
                      }
            }): string[] | ScriptFailure
        }
    }

type Lowsec = Midsec &
    PlayerLowsec & {
        kernel: {
            /**
             * **LOWSEC**
             */
            hardline(): ScriptResponse
        }

        market: {
            /**
             * **LOWSEC**
             */
            sell(args: {
                i: number
                cost: number | string
                description?: string
                count?: number
                no_notify?: boolean
                confirm: true
            }): ScriptResponse<{ token: string }>
        }

        sys: {
            /**
             * **LOWSEC**
             */
            access_log(args?: {
                user?: string
                run_id?: string
                is_script?: true
                count?: number
                start?: number
            }):
                | {
                      t: Date
                      u: string | undefined
                      r: string | undefined
                      msg: string
                  }[]
                | ScriptFailure

            access_log(args: {
                user?: string
                run_id?: string
                is_script: false
                count?: number
                start?: number
            }): string[]

            /**
             * **LOWSEC**
             */
            cull(args: { i: number | number[]; confirm: true }): ScriptResponse

            /**
             * **LOWSEC**
             */
            loc(): string | ScriptFailure

            /**
             * **LOWSEC**
             */
            xfer_upgrade_to(args: {
                i: number | number[]
                to: string
                memo?: string
            }): ScriptResponse

            xfer_upgrade_to(args: {
                sn: string | string[]
                to: string
                memo?: string
            }): ScriptResponse
        }
    }

type Nullsec = Lowsec &
    PlayerNullsec & {
        corps: {
            /**
             * **NULLSEC**
             */
            create(args: { name: string; confirm: true }): ScriptResponse

            /**
             * **NULLSEC**
             */
            hire(args: { name: string }): ScriptResponse

            /**
             * **NULLSEC**
             */
            manage(args: { command: "list" }):
                | {
                      name: string
                      is_admin: boolean
                  }[]
                | ScriptFailure

            manage(
                args:
                    | {
                          command: "demote" | "promote"
                          name: string
                      }
                    | {
                          command: "fire"
                          name: string
                          confirm: true
                      }
            ): ScriptResponse

            /**
             * **NULLSEC**
             */
            offers():
                | {
                      offers: string[]
                      msg: string
                  }
                | ScriptSuccess<{
                      msg: string
                      current_corp: string | null
                  }>

            offers(args: { accept: string }): ScriptResponse

            /**
             * **NULLSEC**
             */
            quit(args: { confirm: true }): ScriptResponse

            /**
             * **NULLSEC**
             */
            top():
                | CorpsTop
                | {
                      top: CorpsTop
                      active: {
                          name: string
                          worth: string
                      }
                  }
        }

        sys: {
            /**
             * **NULLSEC**
             */
            breach(args: { confirm: true }): ScriptResponse
        }

        trust: {
            /**
             * **NULLSEC**
             */
            me(): string
        }

        users: {
            /**
             * **NULLSEC**
             */
            config(args: {
                list: false
                is_script?: true | null
                avatar?: string | null
                user_age?: boolean | null
                account_age?: boolean | null
                bio?: string | null
                title?: string | null
                pronouns?: string | null
                corp?: boolean | null
                alt_of?: string | null
                badges?: string[] | null
            }): ScriptResponse

            config(args: {
                list: true
                is_script?: true
                avatar?: string | null
                user_age?: boolean | null
                account_age?: boolean | null
                bio?: string | null
                title?: string | null
                pronouns?: string | null
                corp?: boolean | null
                alt_of?: string | null
                badges?: string[] | null
            }): {
                avatar: string | null
                user_age?: boolean
                account_age?: boolean
                bio: string | null
                title: string | null
                pronouns: string
                corp?: boolean
                alt_of: string | null
                badges: string[]
            }

            config(args: {
                list: true
                is_script: false
                avatar?: string | null
                user_age?: boolean | null
                account_age?: boolean | null
                bio?: string | null
                title?: string | null
                pronouns?: string | null
                corp?: boolean | null
                alt_of?: string | null
                badges?: string[] | null
            }): string
        }
    }

type MongoValue =
    | string
    | number
    | boolean
    | Date
    | MongoValue[]
    | {
          [key: string]: MongoValue
      }
    | null

type MongoCommandValue =
    | string
    | number
    | boolean
    | Date
    | MongoCommandValue[]
    | {
          [key: string]: MongoCommandValue
      }
    | null
    | undefined

type Query = {
    [key: string]: MongoValue | Query
} & {
    _id?: Id
    $in?: MongoValue[]
}

type Projection = {
    [key: string]: boolean | 0 | 1
}

type MongoCommand = MongoCommandValue &
    Partial<{
        $set: Record<string, MongoCommandValue>
        $push: Record<string, MongoCommandValue>
        $unset: Record<string, "">
    }>

type Id =
    | string
    | number
    | boolean
    | Date
    | {
          [key: string]: MongoValue
      }

type MongoDocument = {
    _id: Id
    [key: string]: MongoValue
}

type SortOrder = {
    [key: string]: 1 | -1 | SortOrder
}

type Cursor = {
    /**
     * Returns the first document that satisfies the query.
     */
    first(): MongoDocument | null

    /**
     * Returns an array of documents that satisfy the query.
     */
    array(): MongoDocument[]

    /**
     * Returns the number of documents that match the query.
     */
    count(): number

    /**
     * Returns the first document that satisfies the query.
     * Also makes cursor unusable.
     */
    first_and_close(): MongoDocument

    /**
     * Returns an array of documents that satisfy the query.
     * Also makes cursor unusable.
     */
    array_and_close(): MongoDocument[]

    /**
     * Returns the number of documents that match the query.
     * Also makes cursor unusable.
     */
    count_and_close(): number

    /**
     * Run callback on each document that satisfied the query.
     *
     * @param funct callback function
     */
    each(funct: (document: MongoDocument) => void): null

    /**
     * Returns a new cursor with documents sorted as specified.
     * A value of 1 sorts the property ascending, and -1 descending.
     *
     * @param order the way the documents are to be sorted
     */
    sort(order?: SortOrder): Cursor

    /**
     * Returns a new cursor without the first number of documents.
     *
     * @param count number of documents to skip
     */
    skip(count: number): Cursor

    /**
     * Returns a new cursor limited to a number of documents as specified
     *
     * @param count number of documents
     */
    limit(count: number): Cursor

    /**
     * @param key they key of the documents
     */
    distinct(key: string): MongoValue[]
    distinct(key: "_id"): Id[]

    /**
     * Makes cursor unusable.
     */
    close(): null

    NumberLong(number: number): number
    ObjectId(): any
}

type CLIContext = {
    /**
     * The name of the user who is calling the script (i.e. n00b)
     */
    caller: string

    /**
     * The name of this script
     */
    this_script: string

    /**
     * the number of columns in the caller’s terminal, if reported by the client
     */
    cols: number

    /**
     * the number of rows in the caller’s terminal, if reported by the client
     */
    rows: number

    /**
     * The name of the script that directly called this script, or null if called on the command line or as a scriptor
     */
    calling_script: null
}

type SubscriptContext = Replace<
    CLIContext,
    {
        /**
         * The name of the script that directly called this script, or null if called on the command line or as a scriptor
         */
        calling_script: string
    }
>

type ScriptorContext = CLIContext & {
    /**
     * true if the script is being run as a scriptor, otherwise falsey (not present currently, but I wouldn’t rely on that)
     */
    is_scriptor: true
}

type BrainContext = CLIContext & {
    /**
     * true if the script is being run via a bot brain
     */
    is_brain: true
}

type Context = CLIContext | SubscriptContext | ScriptorContext | BrainContext

/**
 * Subscript space that can call FULLSEC scripts.
 */
declare const $fs: Fullsec

/**
 * Subscript space that can call HIGHSEC and above scripts.
 * Makes your script HIGHSEC (overrides FULLSEC).
 */
declare const $hs: Highsec

/**
 * Subscript space that can call MIDSEC and above scripts.
 * Makes your script MIDSEC (overrides higher security levels).
 */
declare const $ms: Midsec

/**
 * Subscript space that can call LOWSEC and above scripts.
 * Makes your script LOWSEC (overrides higher security levels).
 */
declare const $ls: Lowsec

/**
 * Subscript space that can call any script.
 * Makes your script NULLSEC (overrides higher security levels).
 */
declare const $ns: Nullsec

/**
 * Subscript space that can call FULLSEC scripts.
 */
declare const $4s: typeof $fs

/**
 * Subscript space that can call HIGHSEC and above scripts.
 * Makes your script HIGHSEC (overrides FULLSEC).
 */
declare const $3s: typeof $hs

/**
 * Subscript space that can call MIDSEC and above scripts.
 * Makes your script MIDSEC (overrides higher security levels).
 */
declare const $2s: typeof $ms

/**
 * Subscript space that can call LOWSEC and above scripts.
 * Makes your script LOWSEC (overrides higher security levels).
 */
declare const $1s: typeof $ls

/**
 * Subscript space that can call any script.
 * Makes your script NULLSEC (overrides higher security levels).
 */
declare const $0s: typeof $ns

/**
 * Subscript space that can call any script.
 * Uses seclevel provided in comment before script (defaults to NULLSEC)
 *
 * ```js
 * // @seclevel MIDSEC
 * export function script() {
 * 	$s.foo.bar() // will be converted to #ms.foo.bar()
 * }
 * ```
 */
declare const $s: Nullsec

declare const $db: {
    /**
     * Insert
     *
     * Inserts a document or documents into a collection.
     * @param documents A document or array of documents to insert into the collection.
     */
    i(documents: object | object[]): {
        ok: 1
        n: number
        opTime: {
            ts: "Undefined Conversion"
            t: number
        }
        electionId: "Undefined Conversion"
    }

    /**
     * Remove
     *
     * Removes documents from a collection.
     * @param query Specifies deletion criteria using query operators.
     */
    r(query: Query): void

    /**
     * Find
     *
     * Selects documents in a collection or view and returns a cursor to the selected documents.
     * @param query Specifies deletion criteria using query operators.
     * @param projection Specifies the fields to return in the documents that match the query filter.
     */
    f(query?: Query, projection?: Projection): Cursor

    /**
     * Update
     *
     * Modifies an existing document or documents in a collection.
     * @param query Specifies deletion criteria using query operators.
     * @param command The modifications to apply. {@link https://docs.mongodb.com/manual/reference/method/db.collection.update/#parameters}
     */
    u(
        query: Query | Query[],
        command: MongoCommand
    ): {
        ok: 0 | 1
        nModified: number
        n: number
        opTime: {
            ts: "Undefined Conversion"
            t: number
        }
        electionId: "Undefined Conversion"
    }

    /**
     * Update 1
     *
     * Updates a single document within the collection based on the filter.
     * @param query Specifies deletion criteria using query operators.
     * @param command The modifications to apply. {@link https://docs.mongodb.com/manual/reference/method/db.collection.update/#parameters}
     */
    u1(query: Query | Query[], command: MongoCommand): void

    /**
     * Upsert
     *
     * Same as Update, but if no documents match the query, one document will be inserted based on the properties in both the query and the command.
     * The `$setOnInsert` operator is useful to set defaults.
     * @param query Specifies deletion criteria using query operators.
     * @param command The modifications to apply. {@link https://docs.mongodb.com/manual/reference/method/db.collection.update/#parameters}
     */
    us(query: Query | Query[], command: MongoCommand): void
}

/**
 * Debug Log
 *
 * If `$D()` is called in a script you own, the `return` value of the top level script is suppressed and instead an array of every `$D()`’d entry is printed.
 * This lets you use `$D()` like `console.log()`.
 *
 * `$D()` in scripts not owned by you are not shown but the `return` value always is.
 *
 * `$D()` returns the first argument so `$D("Hello, World!") evaluates to `"Hello, World!"` as if the `$D` text wasn't there.
 *
 * `$D()`’d items are returned even if the script times out or errors.
 */
declare function $D<T>(args: T): T

/**
 * Function Multi-Call Lock
 *
 * This is used by escrow to ensure that it is only used once in script execution.
 *
 * The first time (per-script) `$FMCL` is encountered, it returns `undefined`, every other time it `return`s `true`.
 *
 * @example
 * if ($FMCL)
 * 	return { ok: false, msg: "this script can only be used once per script execution" }
 *
 * // all code here will only run once
 */
declare const $FMCL: undefined | true

/**
 * Global
 *
 * A mutable, per-script global object.
 * $G persists between script calls until the end of the main script run making it useful for caching db entries when your script is a subscript.
 *
 * @example
 * if (!$G.dbCache)
 * 	$G.dbCache = $db.f({ whatever: true }).first()
 */
declare const $G: any

/**
 * This contains a JS timestamp (not Date) set immediately before your code begins running.
 *
 * @example
 * Date.now() - _START // milliseconds left of run time
 */
declare const _START: number

/**
 * This contains a JS timestamp (not Date) set immediately before your code begins running.
 *
 * @example
 * Date.now() - _ST // milliseconds left of run time
 */
declare const _ST: typeof _START

/**
 * JavaScript timestamp for the end of the script run (`_START + _TIMEOUT`).
 */
declare const _END: number

/**
 * The number of milliseconds a script can run for.
 * Normally `5000` though it has been known to change.
 */
declare const _TIMEOUT: number

/**
 * The number of milliseconds a script can run for.
 * Normally `5000` though it has been known to change.
 */
declare const _TO: typeof _TIMEOUT

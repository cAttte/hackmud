import { script as $borrow$ } from "./src/borrow"
import { script as $crackerlib$ } from "./src/crackerlib"
import { script as $crackT1$ } from "./src/crackT1"
import { script as $crackT2$ } from "./src/crackT2"
import { script as $scripts$ } from "./src/scripts"


type ArrayRemoveFirst<A> = A extends [ infer FirstItem, ...infer Rest ] ? Rest : never

type Subscript<T extends (...args: any) => any> =
	(...args: ArrayRemoveFirst<Parameters<T>>) => ReturnType<T> | ScriptFailure

type WildFullsec = Record<string, () => ScriptFailure> & {
	borrow: Subscript<typeof $borrow$>
	crackerlib: Subscript<typeof $crackerlib$>
	crackT1: Subscript<typeof $crackT1$>
	crackT2: Subscript<typeof $crackT2$>
	scripts: Subscript<typeof $scripts$>
}

declare global {
	interface PlayerFullsec {
		catte_: WildFullsec
		dogge_: WildFullsec
	}
}

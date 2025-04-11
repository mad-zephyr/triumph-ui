type Nullable<T> = T | null;

type Func = () => unknown;
type Deps = Array<unknown>;
type TCache = Record<'deps', Nullable<Deps>> &
  Record<'value', Nullable<unknown>>;

export function createMemo() {
  const cache: TCache = {
    deps: [],
    value: [],
  };

  return function useMemo(factory: Func, deps: Deps) {
    const isNotEqual = !areDepsSame(cache.deps, deps);
    if (!cache.deps || isNotEqual) {
      cache.value = factory();
      cache.deps = deps;
    }
    return cache.value;
  };
}

function areDepsSame(oldDeps: Deps | null, newDeps: Deps) {
  if (oldDeps?.length !== newDeps.length) return false;
  for (let i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== newDeps[i]) return false;
  }
  return true;
}

export type DataAttribute = {
  /** The key for the attribute */
  key: string;
  /** The value */
  value: string;
};

export type DataAttributes = DataAttribute[];

/**
 * Take an array of data attribute key/value pairs and return an object which
 * can be spread into a component's definition
 *
 * @param attributes
 * @returns A spreadable object of data-attributes
 */
export const dataAttrArrayToObject = (attributes: DataAttributes) =>
  attributes.reduce<Record<string, string>>(
    (output: Record<string, string>, current) => {
      // Ensure we follow the correct syntax so we will just return the output if not
      if (!/^data-([a-z]+-)*[a-z]+$/g.test(current.key)) return output;
      // Assign the key/value pair to the output object
      output[current.key] = current.value;
      // return the object
      return output;
    },
    {}
  );

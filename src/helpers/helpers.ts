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

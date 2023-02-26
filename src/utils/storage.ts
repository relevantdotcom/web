type Subscription<T> = (args: T | any) => void

export function storage<StoredValueType extends any>(
  key: string,
  defaultValue: any = null
) {
  const subscriptions = new Set<Subscription<StoredValueType>>()

  function subscribe(subscriber: Subscription<StoredValueType>) {
    subscriptions.add(subscriber)

    return () => {
      subscriptions.delete(subscriber)
    }
  }

  function get(): StoredValueType {
    const item = typeof window !== "undefined" && localStorage.getItem(key)

    return item ? JSON.parse(item) : defaultValue
  }

  function set(value: StoredValueType) {
    subscriptions.forEach((sub) => sub(value))

    return (
      typeof window !== "undefined" &&
      localStorage.setItem(key, JSON.stringify(value))
    )
  }

  function remove() {
    subscriptions.forEach((sub) => sub(defaultValue))
    typeof window !== "undefined" && localStorage.removeItem(key)
  }

  return {
    get,
    set,
    remove,
    subscribe,
  }
}

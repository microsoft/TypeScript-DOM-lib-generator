function assertType<T>(_x: T) {}

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
declare function assertExact<T extends true>(): void;

async function testSchedulerPostTask() {
  const num = await scheduler.postTask(() => 42);
  assertExact<Equals<typeof num, number>>();

  const str = await scheduler.postTask(async () => "done", {
    priority: "background",
  });
  assertExact<Equals<typeof str, string>>();

  const nothing = await scheduler.postTask(() => {});
  assertExact<Equals<typeof nothing, void>>();

  // @ts-expect-error The result is a number, not a string.
  assertType<string>(await scheduler.postTask(() => 42));

  // An explicit `any` type argument keeps the previous behavior.
  assertType<Promise<any>>(scheduler.postTask<any>(() => 1));
}

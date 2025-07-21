declare const assertNotAssignable: <T1, T2>(
  _x: T1,
  _y: T2,
) => T2 extends T1
  ? { error: "Right side should not be assignable to left side" }
  : () => void;

const policy = trustedTypes.createPolicy("policy");

document.body.innerHTML = "foo";
document.body.innerHTML = policy.createHTML("foo");

declare const position: GeolocationPosition;
assertNotAssignable(document.head.innerHTML, position)();

const html: string = document.body.innerHTML;

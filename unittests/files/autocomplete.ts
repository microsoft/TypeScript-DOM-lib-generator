// @ts-expect-error should be a string
document.body.getElementsByTagName("input")[0].autocomplete = false;
// @ts-expect-error wrong value for this attribute
document.body.getElementsByTagName("input")[0].autocomplete = "undefined";
// @ts-expect-error does not accept boolean attributes
document.body.getElementsByTagName("input")[0].autocomplete = "true";
// @ts-expect-error does not accept boolean attributes
document.body.getElementsByTagName("input")[0].autocomplete = "false";

// @ts-expect-error missing autofill token before webauthn
document.body.getElementsByTagName("input")[0].autocomplete = "webauthn";

// @ts-expect-error wrong order for webauthn token
document.body.getElementsByTagName("input")[0].autocomplete =
  "webauthn username";

// @ts-expect-error wrong order for contact specifier
document.body.getElementsByTagName("input")[0].autocomplete = "tel mobile";

// @ts-expect-error off should be standalone
document.body.getElementsByTagName("input")[0].autocomplete =
  "section-wrong off";

// @ts-expect-error on should be standalone
document.body.getElementsByTagName("input")[0].autocomplete = "on username";

// @ts-expect-error home, work or mobile are only for contact tokens
document.body.getElementsByTagName("input")[0].autocomplete = "mobile username";

// @ts-expect-error should probably be current-password or new-password
document.body.getElementsByTagName("input")[0].autocomplete = "password";

document.body.getElementsByTagName("input")[0].autocomplete = "";
document.body.getElementsByTagName("input")[0].autocomplete = "on";
document.body.getElementsByTagName("input")[0].autocomplete = "off";
document.body.getElementsByTagName("input")[0].autocomplete = "new-password";
document.body.getElementsByTagName("input")[0].autocomplete =
  "current-password";
document.body.getElementsByTagName("input")[0].autocomplete = "one-time-code";

document.body.getElementsByTagName("input")[0].autocomplete =
  "username webauthn";

document.body.getElementsByTagName("input")[0].autocomplete =
  "shipping street-address";
document.body.getElementsByTagName("input")[0].autocomplete =
  "section-custom shipping street-address";

document.body.getElementsByTagName("input")[0].autocomplete = "work email";
document.body.getElementsByTagName("input")[0].autocomplete =
  "section-custom billing mobile tel";

// @ts-expect-error only on and off are available on a form
document.body.getElementsByTagName("form")[0].autocomplete = "new-password";

document.body.getElementsByTagName("form")[0].autocomplete = "off";

// @ts-expect-error autocomplete attribute is only for form elements
document.body.getElementsByTagName("p")[0].autocomplete = "off";

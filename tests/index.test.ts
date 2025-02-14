import test from "ava";
import x from "#src/modules/surprise.js";

const function_ = () => "foo";

test("fn() returns foo", (t) => {
	t.is(function_(), "foo");
});

import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import education from "./education";
import work from "./work";
import achievement from "./achievement";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([project, education, work, achievement]),
});

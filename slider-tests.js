// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by slider.js.
import { name as packageName } from "meteor/empirica:slider";

// Write your tests here!
// Here is an example.
Tinytest.add('slider - example', function (test) {
  test.equal(packageName, "slider");
});

var SegfaultHandler = require("segfault-handler")

exports.sourceNodes = () => {
  SegfaultHandler.causeSegfault()
}

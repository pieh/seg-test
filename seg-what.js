var SegfaultHandler = require("segfault-handler")

SegfaultHandler.registerHandler(`crash-${process.pid}.log`)

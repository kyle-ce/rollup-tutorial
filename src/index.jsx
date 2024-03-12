import * as React from "react";
import { createRoot } from "react-dom/client";

import Foo from "./Foo.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<Foo />);

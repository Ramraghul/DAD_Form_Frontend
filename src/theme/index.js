import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

const theme = unstable_createMuiStrictModeTheme({
    palette,
    typography,
    overrides,
    zIndex: {
        appBar: 1200,
        drawer: 1100,
    },
});

export default theme;

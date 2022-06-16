// A wrapper on the text used in the entire app (responsive + custom font)

import metrics from "../config/metrics";

const scaledFontSize = Math.round(fontSize * metrics.DEVICE_WIDTH / 375);
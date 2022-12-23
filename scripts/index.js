import bindCardInputsHandlers from "./card_input_handlers.js";
import bindPreviewCardHandlers from "./preview_card_module.js";

const initialize = () => {
  bindCardInputsHandlers()
  bindPreviewCardHandlers()
}

initialize()
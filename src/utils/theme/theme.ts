import { MediaInterface, media } from "./media";
import { ColorsInterface, colors} from "./colors";

export interface ThemeInterface {
    media: MediaInterface,
    colors: ColorsInterface
};

export const theme: ThemeInterface = {
    media,
    colors
};

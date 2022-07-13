import { colors, slateColors } from "./vars";

// colors.forEach(color => {
//     var F_BG_SLATE = [];
//     F_BG_SLATE.push(color)
//     console.log(F_BG_SLATE);
// })

let f_bg_slate = [];
let f_slate = [];
Object.values(slateColors).forEach(color => {
    f_bg_slate.push({ backgroundColor: color });
    f_slate.push({ color: color });
})
console.log(f_bg_slate);

export const F_BG_SLATE = f_bg_slate;
export const F_SLATE = f_slate;

export const F_BG_SLATE_0 = { backgroundColor: colors.slate0 };
export const F_BG_SLATE_1 = { backgroundColor: colors.slate1 };
export const F_BG_SLATE_2 = { backgroundColor: colors.slate2 };
export const F_BG_SLATE_3 = { backgroundColor: colors.slate3 };
export const F_BG_SLATE_4 = { backgroundColor: colors.slate4 };
export const F_BG_SLATE_5 = { backgroundColor: colors.slate5 };
export const F_BG_SLATE_6 = { backgroundColor: colors.slate6 };
export const F_BG_SLATE_7 = { backgroundColor: colors.slate7 };
export const F_BG_SLATE_8 = { backgroundColor: colors.slate8 };
export const F_BG_SLATE_9 = { backgroundColor: colors.slate9 };

export const F_SLATE_0 = { color: colors.slate0 };
export const F_SLATE_1 = { color: colors.slate1 };
export const F_SLATE_2 = { color: colors.slate2 };
export const F_SLATE_3 = { color: colors.slate3 };
export const F_SLATE_4 = { color: colors.slate4 };
export const F_SLATE_5 = { color: colors.slate5 };
export const F_SLATE_6 = { color: colors.slate6 };
export const F_SLATE_7 = { color: colors.slate7 };
export const F_SLATE_8 = { color: colors.slate8 };
export const F_SLATE_9 = { color: colors.slate9 };
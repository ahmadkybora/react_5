import { slateColors, grayColors } from "./vars";

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
});

let f_bg_gray = [];
let f_gray = [];
Object.values(grayColors).forEach(color => {
    f_bg_gray.push({ backgroundColor: color });
    f_gray.push({ color: color });
});

// console.log(f_bg_slate);

// export const F_BG_SLATE = f_bg_slate[0];
// export const F_SLATE = f_slate;

// export const F_BG_SLATE_0 = f_bg_slate[0];
// export const F_BG_SLATE_1 = f_bg_slate[1];
// export const F_BG_SLATE_2 = f_bg_slate[2];
// export const F_BG_SLATE_3 = f_bg_slate[3];
// export const F_BG_SLATE_4 = f_bg_slate[4];
// export const F_BG_SLATE_5 = f_bg_slate[5];
// export const F_BG_SLATE_6 = f_bg_slate[6];
// export const F_BG_SLATE_7 = f_bg_slate[7];
// export const F_BG_SLATE_8 = f_bg_slate[8];
// export const F_BG_SLATE_9 = f_bg_slate[9];

export const F_BG_SLATE = f_bg_slate;
export const F_BG_SLATE_0 = { backgroundColor: slateColors.slate0 };
export const F_BG_SLATE_1 = { backgroundColor: slateColors.slate1 };
export const F_BG_SLATE_2 = { backgroundColor: slateColors.slate2 };
export const F_BG_SLATE_3 = { backgroundColor: slateColors.slate3 };
export const F_BG_SLATE_4 = { backgroundColor: slateColors.slate4 };
export const F_BG_SLATE_5 = { backgroundColor: slateColors.slate5 };
export const F_BG_SLATE_6 = { backgroundColor: slateColors.slate6 };
export const F_BG_SLATE_7 = { backgroundColor: slateColors.slate7 };
export const F_BG_SLATE_8 = { backgroundColor: slateColors.slate8 };
export const F_BG_SLATE_9 = { backgroundColor: slateColors.slate9 };

export const F_SLATE = f_slate;
export const F_SLATE_0 = { color: slateColors.slate0 };
export const F_SLATE_1 = { color: slateColors.slate1 };
export const F_SLATE_2 = { color: slateColors.slate2 };
export const F_SLATE_3 = { color: slateColors.slate3 };
export const F_SLATE_4 = { color: slateColors.slate4 };
export const F_SLATE_5 = { color: slateColors.slate5 };
export const F_SLATE_6 = { color: slateColors.slate6 };
export const F_SLATE_7 = { color: slateColors.slate7 };
export const F_SLATE_8 = { color: slateColors.slate8 };
export const F_SLATE_9 = { color: slateColors.slate9 };

export const F_BG_GRAY = f_bg_gray;
export const F_BG_GRAY_0 = { backgroundColor: grayColors.gray0 };
export const F_BG_GRAY_1 = { backgroundColor: grayColors.gray1 };
export const F_BG_GRAY_2 = { backgroundColor: grayColors.gray2 };
export const F_BG_GRAY_3 = { backgroundColor: grayColors.gray3 };
export const F_BG_GRAY_4 = { backgroundColor: grayColors.gray4 };
export const F_BG_GRAY_5 = { backgroundColor: grayColors.gray5 };
export const F_BG_GRAY_6 = { backgroundColor: grayColors.gray6 };
export const F_BG_GRAY_7 = { backgroundColor: grayColors.gray7 };
export const F_BG_GRAY_8 = { backgroundColor: grayColors.gray8 };
export const F_BG_GRAY_9 = { backgroundColor: grayColors.gray9 };

export const F_GRAY = f_gray;
export const F_GRAY_0 = { color: grayColors.gray0 };
export const F_GRAY_1 = { color: grayColors.gray1 };
export const F_GRAY_2 = { color: grayColors.gray2 };
export const F_GRAY_3 = { color: grayColors.gray3 };
export const F_GRAY_4 = { color: grayColors.gray4 };
export const F_GRAY_5 = { color: grayColors.gray5 };
export const F_GRAY_6 = { color: grayColors.gray6 };
export const F_GRAY_7 = { color: grayColors.gray7 };
export const F_GRAY_8 = { color: grayColors.gray8 };
export const F_GRAY_9 = { color: grayColors.gray9 };
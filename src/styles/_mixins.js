import { COLORS } from './_variables';

// Mixin 
export const bgBase = (isDark) => `
  background: ${isDark ? '#2f2f2f' : '#f9f9f9'};
  color: ${isDark ? COLORS.WHITE : COLORS.BLACK};
  min-height: 100vh;
  padding: 5rem 8% 6rem;
  transition: .3s ease all;
`;

export const imgShadow = (isDark) => `
  box-shadow: 0px 4px 12px 2px ${isDark ? '#000000ad' : '#d0d0d0'};`


export default {
  bgBase,
  imgShadow,
};


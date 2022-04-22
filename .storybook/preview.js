import GlobalStyles from "ui/theme/GlobalStyles";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

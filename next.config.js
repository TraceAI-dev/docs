const withNextra = async () => {
  const nextra = (await import('nextra')).default({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true,
  });
  return nextra({});
};

export default withNextra();

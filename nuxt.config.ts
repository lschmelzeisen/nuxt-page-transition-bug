export default defineNuxtConfig({
  hooks: {
    "pages:extend": (pages) => {
      const [base] = pages.splice(
        pages.findIndex((page) => page.name === "with-extend-routes"),
        1
      );

      for (const id of ["foo", "bar"]) {
        pages.push({
          ...base,
          name: `${base.name}-${id}`,
          path: `${base.path}/${id}`,
        });
      }
    },
  },
});
